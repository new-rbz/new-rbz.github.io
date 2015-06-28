// pass the full structure for use in the template
// problem here is recursion.
// http://jsfiddle.net/brendanowen/uXbn6/8/
// basically DB gives back group by, order by data, then middle tier or javascript can give that some shape through linq or linqJS adapter.
// as Scott Allen point out: http://odetocode.com/blogs/scott/archive/2014/03/24/dynamic-routes-with-angularjs.aspx
// this is not possible. You have to load it like this on the server: :(

// it looks like the answer to a lot of angular issues is to step outside of angular.
// here a request for data can be made .then(load angular with the route data)  
// ordinal and full structure must be set at least to JSON before an angular module is loaded, so that issue is resolved as well. :(
// it will be passed flat, the the menu system can use group elements in linq.js to form the JSON structure before passing to the menu template.

var routeData = {
  routes: [
    {
      'state' : 'adhocTracker',
      'routeUrl': '/adhoc/{interval}',
      'title': 'AdHoc Stock Viewer',
      'templateUrl' : '/app/yahooStockPriceTracker/stockViewer.tmpl.html',
      'controller': 'stockViewController'
    },
    {
      'state': 'detailedtracker',
      'routeUrl': '/detailedtracker/{interval}',
      'title': 'Detailed Tracker',
      'templateUrl': '/app/yahooSectorPriceTracker/sectorViewer.tmpl.html',
      'controller': 'sectorViewController'
    },
    {
      'state': 'totaltracker',
      'routeUrl': '/totaltracker/{interval}',
      'title': 'Total Tracker',
      'templateUrl': '/app/detailedViewer/detailedView.tmpl.html',
      'controller': 'sectorViewController'
    },
    {
      'state': 'chartViewer',
      'routeUrl': '/chartViewer',
      'title': 'Chart Viewer',
      'templateUrl': '/app/finvizChartViewer/finvizChartView.tmpl.html',
      'controller': 'finvizChartViewController'
    },
    {
      'state': 'guruFocused',
      'routeUrl': '/guruFocused',
      'title': 'Guru Focused',
      'templateUrl': '/app/guruFocused/guruFocused.tmpl.html',
      'controller': 'guruFocusedController'
    }
  ],
  defaultRoute: "detailedtracker"
};
