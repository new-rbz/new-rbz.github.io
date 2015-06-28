(function(module) {
  module.filter('average', function () {
    return function (list, field, filter) {
      if (isUndefined(list) || isUndefined(field)) {
        return 0;
      }

      var result = average(list, field, filter);
      return result;
    }
  }).filter('averageAll', function () {
    return function (tree, field, subtreeKey, filter) {
      if (isUndefined(tree) || isUndefined(field)) {
        return 0;
      }

      var items = flattenListTree(tree, subtreeKey);
      var result = average(items, field, filter);
      return result;
    }
  }).filter('weightedAverage', function () {
    return function (list, field, weight, filter) {
      if (isUndefined(list) || isUndefined(field) || isUndefined(weight)) {
        return 0;
      }

      var result = getWeightedAverage(list, field, weight, filter);
      return result;
    }
  }).filter('weightedAverageAll', function () {
    return function (tree, field, weight, subtreeKey, filter) {
      if (isUndefined(tree) || isUndefined(field) || isUndefined(weight)) {
        return 0;
      }

      var items = flattenListTree(tree, subtreeKey);
      var result = getWeightedAverage(items, field, weight, filter);
      return result;
    }
  });

  function average(list, field, filter) {
    var sum = 0, usableCount = 0;

    for (var i = 0; i < list.length; i++) {
      var item = list[i][field];
      if (item) {
        if (filter) {
          if (filter(list[i])) {
            sum += parseFloat(item);
            usableCount += 1;
          }
        }
        else {
          sum += parseFloat(item);
          usableCount += 1;
        }
      }
    }

    var result = sum / usableCount;
    return !result ? 0 : result;
  }

  function getWeightedAverage(list, field, weight, filter) {
    var sum = 0, totalWeight = 0, value;

    for (var i = 0; i < list.length; i++) {
      var item = list[i];

      if (item[field]) {
        var raw = item[weight];

        var weightValue;
        if (!raw) {
          weightValue = 0;
        } else {
          weightValue = parseFloat(raw);
        }

        if (filter) {
          if (filter(item)) {
            if (item[weight] && item[weight].indexOf("B") >= 0) {
              weightValue *= 1000; // for billions
            } // else it is millions

            totalWeight += weightValue;
            value = parseFloat(item[field]);
            value = value ? value : 0;
            sum += (value * weightValue);
          }
        }
        else {
          if (item[weight] && item[weight].indexOf("B") >= 0) {
            weightValue *= 1000; // for billions
          } // else it is millions

          totalWeight += weightValue;
          value = parseFloat(item[field]);
          value = value ? value : 0;
          sum += (value * weightValue);
        }
      }
    }

    var result = sum / totalWeight;
    return !result ? 0 : result;
  }

  function flattenListTree(tree, subtreeName) {
    var items = [];
    for (var i = 0; i < tree.length; i++) {
      for (var j = 0; j < tree[i][subtreeName].length; j++) {
        items.push(tree[i][subtreeName][j]);
      }
    }

    return items;
  }

  function isUndefined(object) {
    return typeof (object) === 'undefined';
  }
})(angular.module(modules.common));
