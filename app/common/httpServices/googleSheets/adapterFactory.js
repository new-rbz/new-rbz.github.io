(function (module) {
  'use strict';
  module.factory(adapterFactory.name, adapterFactory);
  adapterFactory.$inject = ['googleSheetsService', '$q', '$timeout'];

  function adapterFactory(googleSheetsService, $q, $timeout) {
    var thisSvc = {};
    var sheetOfSheets = 'https://docs.google.com/spreadsheets/d/1XEoflheZAvbtpyBBs5TIuf-E2DpLRmCTMW_A_tctKS4/edit#gid=0';

    thisSvc.adapters = { 'commonAdapter': commonAdapter };
    thisSvc.sources = [];
    thisSvc.sourceKeys = [];

    thisSvc.getByKey = function (key) {
      for (var i = 0; i < thisSvc.sources.length; i++) {
        if (thisSvc.sources[i].key === key) {
          return thisSvc.sources[i];
        }
      }

      return thisSvc.sources[0];
    };

    thisSvc.get = function (key) {
      if (thisSvc.sources.length > 0) {
        var deferred = $q.defer();

        $timeout(function () {
          deferred.resolve(thisSvc.getByKey(key));
        });

        return deferred.promise;
      }
      else {

        return googleSheetsService
          .get(sheetOfSheets)
          .then(function (data) {
            thisSvc.sources = googleSheetsService.processResponse(data, dataSourceAdapter);
            
            for (var i = 0; i < thisSvc.sources.length; i++) {
              thisSvc.sourceKeys.push(thisSvc.sources[i].key);
              thisSvc.sources[i].adapter = thisSvc.adapters[thisSvc.sources[i].adapter];
            }

            return thisSvc.getByKey(key);
          });
      }
    };

    return thisSvc;
  }

  var commonAdapter = {
    process: function (data) {
      var items = [], item, i = 0, rows = [];

      while (i < data.length) {
        item = data[i].c;

        if (item[2].v === 1) {
          items.push({
            sector: item[0].v.trim(),
            ticker: item[1].v.trim(),
            isActive: item[2].v
          });
        }

        i += 1;
      }

      rows = Enumerable.From(items).GroupBy("$.sector").Select("{ sector: $.Key(), list:$.source }").ToArray();

      Enumerable
        .From(rows)
        .ForEach(function (x) {
          x.list = Enumerable.From(x.list).Select("$.ticker").ToArray();
        });

      return rows;
    }
  };

  var dataSourceAdapter = {
    process: function (data) {
      var items = [], item, i = 0;

      while (i < data.length) {
        item = data[i].c;

        if (item[3].v === 1) {
          items.push({
            key: item[0].v.trim(),
            url: item[1].v.trim(),
            adapter: item[2].v.trim(),
            isActive: item[3].v
          });
        }

        i += 1;
      }

      return items;
    }
  };
}(angular.module(modules.common)));
