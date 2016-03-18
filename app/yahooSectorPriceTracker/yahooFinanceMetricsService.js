(function (module) {
  'use strict';

  module.service(yahooFinanceMetricsService.name, yahooFinanceMetricsService);

  yahooFinanceMetricsService.$inject = [];

  function yahooFinanceMetricsService() {
    var svc = this;

    svc.getRelativeVolume = getRelativeVolume; 
    svc.MovingAvgMeaning = MovingAvgMeaning;
    svc.getRegressionPotential = getRegressionPotential;
    svc.getDailyPercentChange = getDailyPercentChange; 
    svc.getMungerBuffettRatio = getMungerBuffettRatio; 
    svc.getEpsGrowth = getEpsGrowth; 
    svc.evaluateFundamentalData = evaluateFundamentalData; 
    svc.evaluateSeriesData = evaluateSeriesData;
 
    return svc;

    function getRelativeVolume(result) {
      var value = (result.Volume / result.AverageDailyVolume) * 100;
      return value;
    }

    function MovingAvgMeaning(result) {
        var value = (result.OneyrTargetPrice 
          ? "(" + Math.round(((result.OneyrTargetPrice/ result.LastTradePriceOnly-1) * 100)) + "% Target:" + result.OneyrTargetPrice + ", " 
          : "(") + "MA50:" + result.PercentChangeFromFiftydayMovingAverage   +") "
          + evaluateSeriesData(result).text
          return value;
    }

    function getRegressionPotential(result) {
      var value = ((result.YearHigh / result.LastTradePriceOnly) -1) * 100;
      return value;
    }

    function getDailyPercentChange(result) {
      return ((result.LastTradePriceOnly / result.PreviousClose) -1) * 100;
    }

    function getMungerBuffettRatio(result) {
      var value = (22.5 / (result.PriceBook * result.PERatio)) * 100;
      return value;
    }

    function getEpsGrowth(result) {
      return ((result.EPSEstimateNextYear / result.EPSEstimateCurrentYear) -1) * 100;
    }

    function evaluateFundamentalData(row) {
      var ps = parseFloat(row.PriceSales);
      var eps = parseFloat(row.EarningsShare);
      var dps = parseFloat(row.DividendShare);

      var result = (eps + dps) / ps;

      return result;
    };

    function evaluateSeriesData(row) {
      var emptyString = "";
      var labelInfo = "label-info";
      var labelSuccess = "label-success";
      var labelWarning = "label-warning";
      var labelDanger = "label-danger";

      var mood = {
        text: emptyString,
        cssClass: emptyString
      };

      var isTargetPriceAboveCurrent = row.LastTradePriceOnly < parseInt(row.OneyrTargetPrice);
      var isAboveMacd50 = parseInt(row.PercentChangeFromFiftydayMovingAverage) > 0;
      var isAboveMacd200 = parseInt(row.PercentChangeFromTwoHundreddayMovingAverage) > 0;


      if (!row.LastTradePriceOnly
        || !row.PercentChangeFromFiftydayMovingAverage
        || !row.PercentChangeFromTwoHundreddayMovingAverage) {
        return {
          text: emptyString,
          cssClass: labelInfo
        };
      }
      
      if (isTargetPriceAboveCurrent && isAboveMacd50 && isAboveMacd200) {
        mood = {
          text: "Strong uptrend" + (row.OneyrTargetPrice ? ": Expected to outperform." : emptyString),
          cssClass: row.OneyrTargetPrice ? labelSuccess : labelInfo
        };
      } else {
        if (!isTargetPriceAboveCurrent && isAboveMacd50 && isAboveMacd200) {
          mood = {
            text: "Strong uptrend" + (row.OneyrTargetPrice ? ": Expected to under-perform." : emptyString),
            cssClass: row.OneyrTargetPrice ? labelWarning : labelInfo
          };
        } else if (isTargetPriceAboveCurrent && isAboveMacd50 && !isAboveMacd200) {
          mood = {
            text: "recovering from long-term fall" + (row.OneyrTargetPrice ? ": Expected to continue recovery." : emptyString),
            cssClass: row.OneyrTargetPrice ? labelSuccess : labelInfo
          };
        } else {
          if (!isTargetPriceAboveCurrent && isAboveMacd50 && !isAboveMacd200) {
            mood = {
              text: "recovering from long-term fall" + (row.OneyrTargetPrice ? ": Expected to move back lower" : emptyString),
              cssClass: row.OneyrTargetPrice ? labelDanger : labelInfo
            };
          } else if (isTargetPriceAboveCurrent && !isAboveMacd50 && isAboveMacd200) {
            mood = {
              text: "near-term falling off after strong growth" + (row.OneyrTargetPrice ? ": Expected to resume rally." : emptyString),
              cssClass: row.OneyrTargetPrice ? labelSuccess : labelInfo
            };
          } else if (!isTargetPriceAboveCurrent && !isAboveMacd50 && isAboveMacd200) {
            mood = {
              text: "near-term falling off after strong growth" + (row.OneyrTargetPrice ? ": Expected to continue moving lower." : emptyString),
              cssClass: row.OneyrTargetPrice ? labelDanger : labelInfo
            };
          } else if (isTargetPriceAboveCurrent && !isAboveMacd50 && !isAboveMacd200) {
            mood = {
              text: "strong long-term downtrend" + (row.OneyrTargetPrice ? ": Expected to begin recovery." : emptyString),
              cssClass: row.OneyrTargetPrice ? labelWarning : labelInfo
            };
          } else if (!isTargetPriceAboveCurrent && !isAboveMacd50 && !isAboveMacd200) {
            mood = {
              text: "strong long-term downtrend" + (row.OneyrTargetPrice ? ": Continued collapse expected." : emptyString),
              cssClass: row.OneyrTargetPrice ? labelDanger : labelInfo
            };
          }
        }
      }

      return mood;
    };
  }
}(angular.module(modules.sectorTracker)));