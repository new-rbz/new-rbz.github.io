if (Function.prototype.name === undefined) {
  // Add a custom property to all function values
  // that actually invokes a method to get the value
  Object.defineProperty(Function.prototype, 'name', {
    get: function () {
      return /function ([^(]*)/.exec(this + "")[1];
    }
  });
}

var modules = {
  common : 'common',
  randomProject : 'randomProject',
  bowerDependenciesCore : 'bowerDependencies.core',
  priceTracker: 'randomProject.yahooStockPriceTracker',
  sectorTracker: 'randomProject.sectorTracker',
  guruFocused: 'randomProject.guruFocused',
  finvizChartViewer: 'randomProject.finvizChartViewer'
};
