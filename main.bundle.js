webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/modules/AppModule/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_routing__ = __webpack_require__("../../../../../src/app/shared/routing/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppModule_services_status_notification_service__ = __webpack_require__("../../../../../src/app/modules/AppModule/services/status-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StockDashboardModule_stock_dashboard_module__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/stock-dashboard.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { OverlayPositionBuilder } from '@angular/material/typings/core/overlay/position/overlay-position-builder';

var appRoutes = __WEBPACK_IMPORTED_MODULE_2__shared_routing__["AppRouteProvider"].appRoutes;
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__StockDashboardModule_stock_dashboard_module__["a" /* StockDashboardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* OVERLAY_PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* Overlay */],
            __WEBPACK_IMPORTED_MODULE_4__AppModule_services_status_notification_service__["a" /* StatusNotificationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* OverlayContainer */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* LiveAnnouncer */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/AppModule/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "dashboard-root",
        template: "\n  <dashboard-navigation>\n    <router-outlet></router-outlet>\n  </dashboard-navigation>",
        styles: [],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/AppModule/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__StockDashboardModule_stock_dashboard_module__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/stock-dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__NewsReaderModule_news_module__ = __webpack_require__("../../../../../src/app/modules/NewsReaderModule/news.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/modules/AppModule/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/modules/AppModule/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AppModule_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/modules/AppModule/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__AppModule_services_status_notification_service__ = __webpack_require__("../../../../../src/app/modules/AppModule/services/status-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_modelServices_ImmutableService__ = __webpack_require__("../../../../../src/app/shared/modelServices/ImmutableService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__form_tests_form_tests_module__ = __webpack_require__("../../../../../src/app/modules/form-tests/form-tests.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rxjs_testing_rxjs_testing_component__ = __webpack_require__("../../../../../src/app/modules/AppModule/rxjs-testing/rxjs-testing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule(ngRedux) {
        ngRedux.provideStore(__WEBPACK_IMPORTED_MODULE_16__shared__["store"]);
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_12__AppModule_navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_18__rxjs_testing_rxjs_testing_component__["a" /* RxjsTestingComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            // InMemoryWebApiModule.forRoot(InMemoryStoryService, { delay: 500 }),
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8__StockDashboardModule_stock_dashboard_module__["a" /* StockDashboardModule */],
            __WEBPACK_IMPORTED_MODULE_9__NewsReaderModule_news_module__["a" /* NewsReaderModule */],
            __WEBPACK_IMPORTED_MODULE_17__form_tests_form_tests_module__["a" /* FormTestsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__AppModule_services_status_notification_service__["a" /* StatusNotificationService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_modelServices_ImmutableService__["a" /* ImmutableService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"],
                useClass: __WEBPACK_IMPORTED_MODULE_16__shared__["CustomErrorHandler"]
            }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_15__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__angular_redux_store__["NgRedux"]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/AppModule/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"example-sidenav-fab-container\">\n  <md-progress-bar *ngIf=\"isInprogress\"\n    class=\"example-margin\" [color]=\"'primary'\"\n    [mode]=\"'indeterminate'\"></md-progress-bar>\n  <md-sidenav #sidenav mode=\"side\"\n    opened=\"false\">\n    <md-nav-list>\n      <md-card>\n        <h3 style=\"text-align:center !important;\">Menu</h3>\n      </md-card>\n      <h3 md-subheader>Modules</h3>\n      <a md-list-item *ngFor=\"let link of routeData\"\n        [routerLink]=\"[link.path]\">\n        <md-icon md-list-icon>{{link.icon}}</md-icon>\n        <span md-line>{{ link.name }}</span>\n      </a>\n    </md-nav-list>\n  </md-sidenav>\n\n  <md-toolbar>\n    <button md-button color=\"accent\"\n      (click)=\"sidenav.toggle()\">\n      <md-icon>menu</md-icon>\n    </button> &nbsp;\n\n    <nav md-tab-nav-bar>\n      <a md-tab-link *ngFor=\"let link of routeData\"\n        [routerLink]=\"[link.path]\"\n        routerLinkActive #rla=\"routerLinkActive\"\n        [active]=\"rla.isActive\">\n        {{link.name}}\n      </a>\n      <a md-tab-link onclick=\"window.open('http://finviz.com');\">Finviz</a>\n      <a md-tab-link onclick=\"window.open('https://www.tradingview.com/chart/MHroi6sK/');\">Trading View</a>\n    </nav>\n  </md-toolbar>\n  <div class=\"example-scrolling-content\">\n    <ng-content></ng-content>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/modules/AppModule/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-sidenav-fab-container {\n  width: 100%;\n  height: 100%;\n  border: 0px solid rgba(0, 0, 0, 0.5); }\n\n.example-sidenav-fab-container md-sidenav {\n  max-width: 33%;\n  min-width: 15em; }\n\n.example-sidenav-fab-container .md-sidenav-content,\n.example-sidenav-fab-container md-sidenav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: visible; }\n\n.example-scrolling-content {\n  overflow: auto;\n  margin: 0.7em !important; }\n\n.example-fab {\n  position: absolute;\n  top: 0px;\n  left: 0px; }\n\nhtml,\nbody,\nmaterial-app,\nmd-sidenav-container,\n.my-content {\n  margin: 0;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/AppModule/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_routing__ = __webpack_require__("../../../../../src/app/shared/routing/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppModule_services_status_notification_service__ = __webpack_require__("../../../../../src/app/modules/AppModule/services/status-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = (function () {
    function NavigationComponent(router, routeSource, statusNotificationService, changeDetector) {
        this.router = router;
        this.routeSource = routeSource;
        this.statusNotificationService = statusNotificationService;
        this.changeDetector = changeDetector;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.routeData = this.routeSource.getMenuItems();
        var defaultRoute = this.routeData.find(function (x) { return x.isDefault; });
        this.statusNotificationService.statusUpdate.subscribe(function (x) {
            _this.isInprogress = x;
            _this.changeDetector.detectChanges();
        });
        setTimeout(function () {
            that.router.navigate(["/" + defaultRoute.path]);
        }, 500);
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "dashboard-navigation",
        template: __webpack_require__("../../../../../src/app/modules/AppModule/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/AppModule/navigation/navigation.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_routing__["AppRouteProvider"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_routing__["AppRouteProvider"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__AppModule_services_status_notification_service__["a" /* StatusNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__AppModule_services_status_notification_service__["a" /* StatusNotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], NavigationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/AppModule/rxjs-testing/rxjs-testing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  rxjs-testing works!\n</p>\n\n<!--<div id=\"circle\"></div>-->\n<button id=\"button\">click me</button>\n<button (click)=\"unsubscribe()\">asdsa</button>\n"

/***/ }),

/***/ "../../../../../src/app/modules/AppModule/rxjs-testing/rxjs-testing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#circle {\n  background-color: #f00 !important;\n  border-radius: 50% !important;\n  height: 20px !important;\n  position: absolute !important;\n  width: 20px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/AppModule/rxjs-testing/rxjs-testing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RxjsTestingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RxjsTestingComponent = (function () {
    function RxjsTestingComponent() {
        this.numbers = [1, 5, 4, 3, 2, 5, 8];
        // this.create();
        // setTimeout(() => {
        //   // this.element = document.getElementById('circle');
        //   this.element = document.getElementById('button');
        //   console.log(this.element.style);
        //   this.fromEvent();
        // }, 3000);
    }
    RxjsTestingComponent.prototype.ngOnInit = function () {
        // this.source.subscribe(new MyObserver());
        if (!this.source) {
            return;
        }
        this.subscription = this.source.subscribe(function (next) { return console.log(next); }, function (error) { return console.log(error); }, function () { return console.log("complete"); });
    };
    RxjsTestingComponent.prototype.fromEvent = function () {
        // this.source = Observable.fromEvent(document, 'mousemove').map((c: MouseEvent) => {
        //   return {
        //     x: c.clientX,
        //     y: c.clientY
        //   };
        // }).filter(c => c.x < 500);
        this.source = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].fromEvent(document, "click")
            .map(function (c) {
            return {
                x: c.clientX,
                y: c.clientY
            };
        })
            .filter(function (c) { return c.x < 500; });
        this.subscription = this.source.subscribe(function (next) {
            console.log(next);
        }, function (error) { return console.log(error); }, function () { return console.log("complete"); });
    };
    RxjsTestingComponent.prototype.create = function () {
        var _this = this;
        this.numbers = [1, 5, 4, 3, 2, 5, 8];
        // this.source = Observable.from(this.numbers);
        this.source = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            // for (const n of this.numbers) {
            //   observer.next(n);
            //   if (n > 5) {
            //     observer.error('error!!!!');
            //   }
            // }
            // observer.complete();
            var index = 0;
            var prod = function () {
                observer.next(_this.numbers[index++]);
                if (index < _this.numbers.length) {
                    setTimeout(prod, 1000);
                }
                else {
                    observer.complete();
                }
            };
            prod();
        })
            .map(function (x) { return x * 2; })
            .filter(function (x) { return x > 5; });
    };
    RxjsTestingComponent.prototype.unsubscribe = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            console.log("unsubscribed");
        }
        else {
            console.log("you are not subscribed to anything");
        }
    };
    return RxjsTestingComponent;
}());
RxjsTestingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "dashboard-rxjs-testing",
        template: __webpack_require__("../../../../../src/app/modules/AppModule/rxjs-testing/rxjs-testing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/AppModule/rxjs-testing/rxjs-testing.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RxjsTestingComponent);

//# sourceMappingURL=rxjs-testing.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/AppModule/services/status-notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusNotificationService = (function () {
    function StatusNotificationService(snackBar) {
        this.snackBar = snackBar;
        this.statusUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StatusNotificationService.prototype.setIsUpdating = function (value) {
        this.statusUpdate.emit(value);
    };
    StatusNotificationService.prototype.openSnackBar = function (message, action, duration) {
        if (duration === void 0) { duration = 5000; }
        this.snackBar.open(message, action, {
            duration: duration
        });
        var that = this;
        setTimeout(function () { return that.snackBar.dismiss(); }, 5000);
    };
    return StatusNotificationService;
}());
StatusNotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdSnackBar */]) === "function" && _a || Object])
], StatusNotificationService);

var _a;
//# sourceMappingURL=status-notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/NewsReaderModule/news-reader/news-reader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsReaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewsReaderComponent = (function () {
    function NewsReaderComponent() {
    }
    return NewsReaderComponent;
}());
NewsReaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "dashboard-news-reader",
        template: "<md-card>\n    <md-tab-group>\n      <md-tab label=\"Top Stories\">\n        <iframe id=\"feedwind_1001477275041182\" width=\"100%\"\n        src=\"http://feed.mikle.com/widget/?rssmikle_url=http%3A%2F%2Frss.cnn.com%2Frss%2Fcnn_topstories.rss%7Chttp%3A%2F%2Ffeeds.nytimes.com%2Fnyt%2Frss%2FHomePage%7Chttp%3A%2F%2Fhosted.ap.org%2Flineups%2FUSHEADS-rss_2.0.xml%3FSITE%3DRANDOM%26SECTION%3DHOME%7Chttp%3A%2F%2Frssfeeds.usatoday.com%2Fusatoday-NewsTopStories%7Chttp%3A%2F%2Fwww.npr.org%2Frss%2Frss.php%3Fid%3D1001%7Chttp%3A%2F%2Ffeeds.reuters.com%2Freuters%2FtopNews%7Chttp%3A%2F%2Fnewsrss.bbc.co.uk%2Frss%2Fnewsonline_world_edition%2Famericas%2Frss.xml&amp;rssmikle_frame_width=300&amp;rssmikle_frame_height=300&amp;frame_height_by_article=22&amp;rssmikle_target=_blank&amp;rssmikle_font=Arial%2C%20Helvetica%2C%20sans-serif&amp;rssmikle_font_size=12&amp;rssmikle_border=off&amp;responsive=on&amp;text_align=left&amp;text_align2=left&amp;corner=off&amp;scrollbar=on&amp;autoscroll=on&amp;scrolldirection=down&amp;scrollstep=10&amp;mcspeed=20&amp;sort=New&amp;rssmikle_title=on&amp;rssmikle_title_sentence=Top%20Stories&amp;rssmikle_title_bgcolor=%23000308&amp;rssmikle_title_color=%23FFFFFF&amp;rssmikle_item_bgcolor=%230A0A0A&amp;rssmikle_item_title_length=55&amp;rssmikle_item_title_color=%23C685FF&amp;rssmikle_item_border_bottom=on&amp;rssmikle_item_description=on&amp;item_link=on&amp;rssmikle_item_description_length=150&amp;rssmikle_item_description_color=%23BCB3C4&amp;rssmikle_item_date=on&amp;rssmikle_timezone=America%2FNew_York&amp;datetime_format=%25b%20%25e%2C%20%25Y%20%25l%3A%25M%3A%25S%20%25p&amp;item_description_style=text&amp;item_thumbnail=full&amp;item_thumbnail_selection=auto&amp;article_num=30&amp;rssmikle_item_podcast=off&amp;iframe_id=feedwind_1001477275041182&amp;\" scrolling=\"no\" name=\"rssmikle_frame\" marginwidth=\"0\" marginheight=\"0\" vspace=\"0\" hspace=\"0\" frameborder=\"0\" style=\"height: 2042px;\"></iframe>\n      </md-tab>\n      <md-tab label=\"World Affairs\">\n        <iframe id=\"feedwind_1001477275041182\" width=\"100%\" style=\"height: 2042px;\"\n        src=\"http://feed.mikle.com/widget/?rssmikle_url=http%3A%2F%2Fwww.worldaffairsjournal.org%2Fessay-feed.xml%7Chttp%3A%2F%2Ffeeds.cfr.org%2Fcfr_main%7Chttp%3A%2F%2Fwww.newstatesman.com%2Ffeeds%2Ftopics%2Fworld-affairs.rss%7Chttp%3A%2F%2Fwww.npr.org%2Frss%2Frss.php%3Fid%3D1004%7Chttp%3A%2F%2Fwww.project-syndicate.org%2Frss%7Chttp%3A%2F%2Fwww.huffingtonpost.com%2Ffeeds%2Fverticals%2Fworld%2Findex.xml%7Chttp%3A%2F%2Fworldaffairs.libsyn.com%2Frss%7Chttp%3A%2F%2Fglobalbrief.ca%2Ffeed%2Frss%2F&rssmikle_frame_height=300&frame_height_by_article=15&rssmikle_target=_blank&rssmikle_font=Arial%2C%20Helvetica%2C%20sans-serif&rssmikle_font_size=12&rssmikle_border=off&responsive=on&text_align=left&text_align2=left&corner=off&scrollbar=on&autoscroll=on&scrolldirection=down&scrollstep=10&mcspeed=15&sort=New&rssmikle_title=on&rssmikle_title_sentence=World%20Affairs&rssmikle_title_bgcolor=%23000308&rssmikle_title_color=%23FFFFFF&rssmikle_item_bgcolor=%230A0A0A&rssmikle_item_title_length=55&rssmikle_item_title_color=%23C685FF&rssmikle_item_border_bottom=on&rssmikle_item_description=on&item_link=on&rssmikle_item_description_length=150&rssmikle_item_description_color=%23BCB3C4&rssmikle_item_date=on&rssmikle_timezone=America%2FNew_York&datetime_format=%25b%20%25e%2C%20%25Y%20%25l%3A%25M%3A%25S%20%25p&item_description_style=text&item_thumbnail=full&item_thumbnail_selection=auto&article_num=30&rssmikle_item_podcast=off&rssmikle_frame_width=180&iframe_id=feedwind_8021477266017323&\"\n        ></iframe>\n      </md-tab>\n      <md-tab label=\"Politics\">\n        <iframe id=\"feedwind_1001477275041182\" width=\"100%\" style=\"height: 2042px;\"\n        src=\"http://feed.mikle.com/widget/?rssmikle_url=http%3A%2F%2Frss.cnn.com%2Frss%2Fcnn_allpolitics.rss%7Chttp%3A%2F%2Ffeeds.reuters.com%2FReuters%2FPoliticsNews%7Chttp%3A%2F%2Fhosted2.ap.org%2Fatom%2FAPDEFAULT%2F89ae8247abe8493fae24405546e9a1aa%7Chttp%3A%2F%2Fabcnews.go.com%2FPolitics%2F%7Chttp%3A%2F%2Ffeeds.foxnews.com%2Ffoxnews%2Fpolitics&rssmikle_frame_height=300&frame_height_by_article=15&rssmikle_target=_blank&rssmikle_font=Arial%2C%20Helvetica%2C%20sans-serif&rssmikle_font_size=12&rssmikle_border=off&responsive=on&text_align=left&text_align2=left&corner=off&scrollbar=on&autoscroll=on&scrolldirection=down&scrollstep=10&mcspeed=15&sort=New&rssmikle_title=on&rssmikle_title_sentence=Politics&rssmikle_title_bgcolor=%23000308&rssmikle_title_color=%23FFFFFF&rssmikle_item_bgcolor=%230A0A0A&rssmikle_item_title_length=55&rssmikle_item_title_color=%23C685FF&rssmikle_item_border_bottom=on&rssmikle_item_description=on&item_link=on&rssmikle_item_description_length=150&rssmikle_item_description_color=%23BCB3C4&rssmikle_item_date=on&rssmikle_timezone=America%2FNew_York&datetime_format=%25b%20%25e%2C%20%25Y%20%25l%3A%25M%3A%25S%20%25p&item_description_style=text&item_thumbnail=full&item_thumbnail_selection=auto&article_num=30&rssmikle_item_podcast=off&rssmikle_frame_width=180&iframe_id=feedwind_3251477266309103&\"></iframe>\n      </md-tab>\n      <md-tab label=\"Science & Technology\">\n        <iframe id=\"feedwind_1001477275041182\" width=\"100%\" style=\"height: 2042px;\"\n        src=\"http://feed.mikle.com/widget/?rssmikle_url=http%3A%2F%2Fhosted.ap.org%2Flineups%2FSCIENCEHEADS-rss_2.0.xml%3FSITE%3DOHLIM%26SECTION%3DHOME%7Chttp%3A%2F%2Ffeeds.sciencedaily.com%2Fsciencedaily%7Chttp%3A%2F%2Ffeeds.nature.com%2Fnature%2Frss%2Fcurrent%7Chttp%3A%2F%2Fwww.nasa.gov%2Frss%2Fimage_of_the_day.rss%7Chttp%3A%2F%2Fwww.techlearning.com%2FRSS%7Chttp%3A%2F%2Ffeeds.wired.com%2Fwired%2Findex%7Chttp%3A%2F%2Ffeeds.nytimes.com%2Fnyt%2Frss%2FTechnology%7Chttp%3A%2F%2Fwww.npr.org%2Frss%2Frss.php%3Fid%3D1019%7Chttp%3A%2F%2Ffeeds.feedburner.com%2Ftime%2Fgadgetoftheweek%7Chttp%3A%2F%2Frss.macworld.com%2Fmacworld%2Ffeeds%2Fmain%7Chttp%3A%2F%2Ffeeds.pcworld.com%2Fpcworld%2Flatestnews%7Chttp%3A%2F%2Frss.feedsportal.com%2Fc%2F270%2Ff%2F3547%2Findex.rss&rssmikle_frame_height=300&frame_height_by_article=15&rssmikle_target=_blank&rssmikle_font=Arial%2C%20Helvetica%2C%20sans-serif&rssmikle_font_size=12&rssmikle_border=off&responsive=on&text_align=left&text_align2=left&corner=off&scrollbar=on&autoscroll=on&scrolldirection=down&scrollstep=10&mcspeed=15&sort=New&rssmikle_title=on&rssmikle_title_sentence=Science%20%26%20Technology&rssmikle_title_bgcolor=%23000308&rssmikle_title_color=%23FFFFFF&rssmikle_item_bgcolor=%230A0A0A&rssmikle_item_title_length=55&rssmikle_item_title_color=%23C685FF&rssmikle_item_border_bottom=on&rssmikle_item_description=on&item_link=on&rssmikle_item_description_length=150&rssmikle_item_description_color=%23BCB3C4&rssmikle_item_date=on&rssmikle_timezone=America%2FNew_York&datetime_format=%25b%20%25e%2C%20%25Y%20%25l%3A%25M%3A%25S%20%25p&item_description_style=text&item_thumbnail=full&item_thumbnail_selection=auto&article_num=30&rssmikle_item_podcast=off&rssmikle_frame_width=180&iframe_id=feedwind_901477266360135&\"></iframe>\n      </md-tab>\n    </md-tab-group>\n  </md-card>\n\t",
        styles: [],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], NewsReaderComponent);

//# sourceMappingURL=news-reader.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/NewsReaderModule/news.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsReaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_reader_news_reader_component__ = __webpack_require__("../../../../../src/app/modules/NewsReaderModule/news-reader/news-reader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AppModule_services_status_notification_service__ = __webpack_require__("../../../../../src/app/modules/AppModule/services/status-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var NewsReaderModule = (function () {
    function NewsReaderModule() {
    }
    return NewsReaderModule;
}());
NewsReaderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1__news_reader_news_reader_component__["a" /* NewsReaderComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__news_reader_news_reader_component__["a" /* NewsReaderComponent */]],
        entryComponents: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_redux_store__["NgReduxModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__shared__["GoogleSheetsService"],
            __WEBPACK_IMPORTED_MODULE_8__shared__["YahooDataService"],
            __WEBPACK_IMPORTED_MODULE_8__shared__["StockAnalysisService"],
            __WEBPACK_IMPORTED_MODULE_10__AppModule_services_status_notification_service__["a" /* StatusNotificationService */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], NewsReaderModule);

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/StockDashboardActions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockDashboardActions; });
var StockDashboardActions = (function () {
    function StockDashboardActions() {
        this.REQUEST_YAHOO_RESULTS_SUCCESS = "REQUEST_YAHOO_RESULTS_SUCCESS";
        this.REQUEST_VIX_MODEL_SUCCESS = "REQUEST_VIX_MODEL_SUCCESS";
        this.REQUEST_SELECTED_STOCK_LIST_SUCCESS = "REQUEST_SELECTED_STOCK_LIST_SUCCESS";
        this.REQUEST_STOCK_LIST_HEADERS_SUCCESS = "REQUEST_STOCK_LIST_HEADERS_SUCCESS";
        this.TABLE_VIEW_STATE_CHANGE = "TABLE_VIEW_STATE_CHANGE";
        this.TABLE_SORT_CHANGE = "TABLE_SORT_CHANGE";
        this.SAVE_TICKERS_4_ANALYSIS = "SAVE_TICKERS_4_ANALYSIS";
        this.GOOGLE_SHEET_DETAILS_RECEIVED = "GOOGLE_SHEET_DETAILS_RECEIVED";
    }
    return StockDashboardActions;
}());

//# sourceMappingURL=StockDashboardActions.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/StockDashboardReducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockDashboardReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_redux_BaseReducer__ = __webpack_require__("../../../../../src/app/shared/redux/BaseReducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_redux_actions__ = __webpack_require__("../../../../../src/app/shared/redux/actions.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var StockDashboardReducer = (function (_super) {
    __extends(StockDashboardReducer, _super);
    function StockDashboardReducer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockDashboardReducer.prototype.reducer = function (state, action) {
        switch (action.type) {
            case __WEBPACK_IMPORTED_MODULE_2__shared_redux_actions__["a" /* Actions */].StockDashboardActions.GOOGLE_SHEET_DETAILS_RECEIVED:
                return this.googleSheetDetailsReceived(state, action);
            case __WEBPACK_IMPORTED_MODULE_2__shared_redux_actions__["a" /* Actions */].StockDashboardActions.REQUEST_SELECTED_STOCK_LIST_SUCCESS:
                return this.updateSelectedStockList(state, action);
            case __WEBPACK_IMPORTED_MODULE_2__shared_redux_actions__["a" /* Actions */].StockDashboardActions.REQUEST_STOCK_LIST_HEADERS_SUCCESS:
                return this.updateStockListHeaders(state, action);
            case __WEBPACK_IMPORTED_MODULE_2__shared_redux_actions__["a" /* Actions */].StockDashboardActions.REQUEST_VIX_MODEL_SUCCESS:
                return this.updateVixModel(state, action);
            case __WEBPACK_IMPORTED_MODULE_2__shared_redux_actions__["a" /* Actions */].StockDashboardActions.REQUEST_YAHOO_RESULTS_SUCCESS:
                return this.updateGroupedYahooResults(state, action);
            case __WEBPACK_IMPORTED_MODULE_2__shared_redux_actions__["a" /* Actions */].StockDashboardActions.TABLE_VIEW_STATE_CHANGE:
                return this.updateTableState(state, action);
            case __WEBPACK_IMPORTED_MODULE_2__shared_redux_actions__["a" /* Actions */].StockDashboardActions.TABLE_SORT_CHANGE:
                return this.updateTableSort(state, action);
            case __WEBPACK_IMPORTED_MODULE_2__shared_redux_actions__["a" /* Actions */].StockDashboardActions.SAVE_TICKERS_4_ANALYSIS:
                return this.saveTickers4Analysis(state, action);
            default:
                return state;
        }
    };
    StockDashboardReducer.prototype.saveTickers4Analysis = function (state, action) {
        return this.updateObject(state, {
            tickers4Analysis: action.tickers4Analysis
        });
    };
    StockDashboardReducer.prototype.updateTableSort = function (state, action) {
        var result = [];
        __WEBPACK_IMPORTED_MODULE_0_lodash__["map"](state.groupedYahooResults, function (group) {
            var tmpgroup = __WEBPACK_IMPORTED_MODULE_0_lodash__["sortBy"](group, function (x) { return x[action.sortBy]; });
            if (state.sortBy === action.sortBy) {
                tmpgroup = tmpgroup.reverse();
            }
            result.push(tmpgroup);
        });
        return this.updateObject(state, {
            sortBy: action.sortBy,
            groupedYahooResults: result
        });
    };
    StockDashboardReducer.prototype.updateTableState = function (state, action) {
        return this.updateObject(state, {
            tableState: __assign({}, action.tableState, { showTable: false })
        });
    };
    StockDashboardReducer.prototype.updateGroupedYahooResults = function (state, action) {
        return this.updateObject(state, {
            groupedYahooResults: action.groupedYahooResults
        });
    };
    StockDashboardReducer.prototype.updateVixModel = function (state, action) {
        return this.updateObject(state, {
            vixModel: action.vixModel
        });
    };
    StockDashboardReducer.prototype.updateStockListHeaders = function (state, action) {
        return this.updateObject(state, {
            stockListHeaders: action.stockListHeaders,
            tableState: __assign({}, action.tableState, { showTable: false })
        });
    };
    StockDashboardReducer.prototype.updateSelectedStockList = function (state, action) {
        return this.updateObject(state, {
            selectedStockList: action.selectedStockList
        });
    };
    StockDashboardReducer.prototype.googleSheetDetailsReceived = function (state, action) {
        var tmp = [];
        if (state.groups) {
            tmp = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](state.groups);
        }
        if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["some"](tmp, function (x) { return x.title === action.list.listTitle; })) {
            tmp.push({
                title: action.list.listTitle,
                tickers: __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](action.list.tickers, function (x) { return x.isActive === "1"; })
            });
        }
        return __assign({}, state, { groups: tmp });
    };
    return StockDashboardReducer;
}(__WEBPACK_IMPORTED_MODULE_1__shared_redux_BaseReducer__["a" /* BaseReducer */]));

//# sourceMappingURL=StockDashboardReducer.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/chart-viewer/chart-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"arrayOfKeys\" id=\"\"\n  style=\"overflow-x: scroll; width:97vw;\">\n  <md-tab-group>\n    <md-tab *ngFor=\"let category of arrayOfKeys\"\n      label=\"{{ category}} ({{selectedGroup[category].length}})\">\n      <a *ngFor=\"let company of selectedGroup[category]\"\n        (click)=\"rowClicked(company)\"\n        target=\"_blank\">\n        <img src=\"http://finviz.com/chart.ashx?t={{company.ticker}}&ty=c&ta=1&p=d&s=l\"\n        />\n      </a>\n    </md-tab>\n  </md-tab-group>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/chart-viewer/chart-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartViewerComponent = (function () {
    function ChartViewerComponent() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
    }
    ChartViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groups$.subscribe(function (x) {
            _this.groups = x;
            var tmp = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](_this.groups, function (y) { return y.title === _this.selectedList; })[0];
            if (tmp && tmp.tickers) {
                _this.selectedGroup = __WEBPACK_IMPORTED_MODULE_3_lodash__["groupBy"](tmp.tickers, function (y) { return y.category; });
                _this.arrayOfKeys = Object.keys(_this.selectedGroup);
                _this.onChange.emit(_this.selectedGroup);
            }
        });
        this.tableState$.subscribe(function (x) {
            _this.selectedList = x.selectedStockList;
        });
    };
    ChartViewerComponent.prototype.rowClicked = function (result) {
        window.open("http://www.gurufocus.com/stock/" + result.ticker, "_blank");
        window.open("http://quote.morningstar.com/Quote.html?ticker=" + result.ticker, "_blank");
        window.open("https://www.tradingview.com/chart/?symbol=" + result.ticker + "&interval=D&hidesidetoolbar=0&symboledit=1&toolbarbg=f4f7f9&studies=&hideideas=0&theme=Black&timezone=exchange&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&showpopupbutton=1", "_blank");
    };
    return ChartViewerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])("groups"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], ChartViewerComponent.prototype, "groups$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])("tableState"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], ChartViewerComponent.prototype, "tableState$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], ChartViewerComponent.prototype, "onChange", void 0);
ChartViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "chart-viewer",
        template: __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/chart-viewer/chart-viewer.component.html"),
        styles: [],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default
    })
], ChartViewerComponent);

var _a, _b, _c;
//# sourceMappingURL=chart-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<span>\n  <a href=\"https://www.tradingview.com/chart/?symbol=ISSU\">\n    <img class=\"candlestick\" src=\"http://finviz.com/mktstats_image.ashx?0&rev=635491895855156250\">\n  </a>\n  <img class=\"candlestick\" src=\"http://finviz.com/mktstats_image.ashx?1&rev=635491895855156250\">\n  <img class=\"candlestick\" src=\"http://finviz.com/mktstats_image.ashx?2&rev=635491895855156250\">\n  <img class=\"candlestick\" src=\"http://finviz.com/mktstats_image.ashx?3&rev=635491895855156250\">\n  <img class=\"candlestick\" src=\"http://finviz.com/mktstats_image.ashx?4&rev=635491895855156250\">\n</span>\n<md-tab-group>\n  <md-tab label=\"Indicators\">\n    <span>\n      <a onclick=\"window.open('https://www.tradingview.com/chart/?symbol=spx');\">\n        <img class=\"candlestick\" src=\"http://finviz.com/image.ashx?sp500&rev=635491898253437500\"\n          height=\"162\" width=\"332\">\n      </a>\n      <a onclick=\"window.open('https://www.tradingview.com/chart/?symbol=NAS100');\">\n        <img class=\"candlestick\" src=\"http://finviz.com/image.ashx?nasdaq&rev=635491898253437500\"\n          height=\"162\" width=\"332\">\n      </a>\n      <a onclick=\"window.open('https://www.tradingview.com/chart/?symbol=DOWI');\">\n        <img class=\"candlestick\" src=\"http://finviz.com/image.ashx?dow&rev=635491898253437500\"\n          height=\"162\" width=\"332\">\n      </a>\n      <a onclick=\"window.open('https://www.tradingview.com/chart/?symbol=VIX');\">\n        <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=VX&p=d1&s=m&rev=635741171362569851\"\n          height=\"162\" width=\"332\">\n      </a>\n    </span>\n  </md-tab>\n  <md-tab label=\"Macro\">\n    <span>\n      <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=DX&p=d1&s=m&rev=635741178592664902\">\n      <a onclick=\"window.open('https://www.tradingview.com/chart/?symbol=VIX');\">\n        <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=ZN&p=d1&s=m&rev=635741175830813962\">\n      </a>\n      <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=GC&p=d1&s=m&rev=635741176474639954\">\n      <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=SI&p=d1&s=m&rev=635741176474639954\">\n    </span>\n  </md-tab>\n  <md-tab label=\"Others\">\n    <span>\n      <a onclick=\"window.open('https://www.tradingview.com/chart/?symbol=UIX');\">\n        <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=ER2&p=d1&s=m&rev=635741169554279766\">\n      </a>\n      <a onclick=\"window.open('https://www.tradingview.com/chart/?symbol=MOY0');\">\n        <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=EX&p=d1&s=m&rev=635741173162378118\">\n      </a>\n      <a onclick=\"window.open('https://www.tradingview.com/chart/?symbol=JPN225');\">\n        <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=NKD&p=d1&s=m&rev=635741173162378118\">\n      </a>\n    </span>\n  </md-tab>\n  <md-tab label=\"Op Ex\">\n    <span>\n      <a onclick=\"window.open('https://www.tradingview.com/chart/?symbol=USOIL');\">\n        <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=CL&p=d1&s=m&rev=635741174661809365\">\n      </a>\n      <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=HO&p=d1&s=m&rev=635741174661809365\">\n      <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=NG&p=d1&s=m&rev=635741174661809365\">\n      <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=FC&p=d1&s=m&rev=635939029006530463\">\n      <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=LH&p=d1&s=m&rev=635939029006530463\">\n    </span>\n  </md-tab>\n  <md-tab label=\"Cap Ex\">\n    <span>\n      <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=HG&p=d1&s=m&rev=635741176474639954\">\n      <img class=\"candlestick\" src=\"http://finviz.com/fut_chart.ashx?t=LB&p=d1&s=m&rev=635741176191492587\">\n    </span>\n  </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OverviewComponent = (function () {
    function OverviewComponent() {
    }
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "dashboard-overview",
        template: __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/overview/overview.component.html"),
        styles: [],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], OverviewComponent);

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/stock-table/stock-table.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n  <div style=\"overflow-x: scroll; width:100vw;\">\n    <md-tab *ngFor=\"let group of groupedYahooResults$ | async\"\n      label=\"{{ group[0].group}} ({{group.length}})\">\n      <table class=\"mdl-data-table mdl-js-data-table mdl-shadow--24dp\"\n        style=\"background-color:#3c3c3c;width:100% !important; font-size: smaller !important;\">\n        <thead>\n          <tr>\n            <th (click)=\"sortByColumn('Name')\">Stock</th>\n            <th (click)=\"sortByColumn('impact')\">Impact</th>\n            <th (click)=\"sortByColumn('relativeVolume')\">Vol%</th>\n            <th (click)=\"sortByColumn('ChangeinPercent')\">Change</th>\n            <th (click)=\"sortByColumn('regressionPotential')\">Regress Pot.</th>\n            <th (click)=\"sortByColumn('LastTradePriceOnly')\">Price</th>\n            <th *ngIf=\"!(tableViewState$|async).showTechnical\"\n              (click)=\"sortByColumn('fundamentalAggregateNumber')\">Combined</th>\n            <th *ngIf=\"!(tableViewState$|async).showTechnical\"\n              (click)=\"sortByColumn('grahamBuffettRatio')\">Buffett</th>\n            <th *ngIf=\"!(tableViewState$|async).showTechnical\"\n              (click)=\"sortByColumn('EPSEstimateCurrentYear')\">EPS</th>\n            <th *ngIf=\"!(tableViewState$|async).showTechnical\"\n              (click)=\"sortByColumn('projectedEpsGrowth')\">EPS^</th>\n            <!-- Equity -->\n            <th *ngIf=\"!(tableViewState$|async).showTechnical\"\n              (click)=\"sortByColumn('PriceBook')\">PB</th>\n            <th *ngIf=\"!(tableViewState$|async).showTechnical\"\n              (click)=\"sortByColumn('PriceSales')\">PS</th>\n            <!-- Earnings -->\n            <th *ngIf=\"!(tableViewState$|async).showTechnical\"\n              (click)=\"sortByColumn('PERatio')\">PE</th>\n            <th *ngIf=\"!(tableViewState$|async).showTechnical\"\n              (click)=\"sortByColumn('PEGRatio')\">PEG</th>\n            <th *ngIf=\"!(tableViewState$|async).showTechnical\"\n              (click)=\"sortByColumn('DividendYield')\">Dividend</th>\n\n            <th *ngIf=\"(tableViewState$|async).showTechnical\"\n              (click)=\"sortByColumn('movingAverageMeaning')\">Trend Information</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let result of group\"\n            (click)=\"rowClicked(result)\">\n            <td>\n              <span>{{ result.Name }}\n                ({{ result.tickerLabel}})</span>\n            </td>\n            <td>\n              <md-chip-list>\n                <md-chip color=\"{{result.impact < 0 ? 'warn' : 'primary'}}\"\n                  selected=\"true\">\n                  {{ result.impact |number : '1.2-2' }}%\n                </md-chip>\n              </md-chip-list>\n            </td>\n            <td>\n              <md-chip-list>\n                <md-chip color=\"{{chooseChipColor(result.relativeVolume, 100, 50, true)}}\"\n                  selected=\"true\">\n                  {{ result.relativeVolume }}%\n                </md-chip>\n              </md-chip-list>\n            </td>\n            <td>\n              <md-chip-list>\n                <md-chip color=\"{{chooseChipColor(result.ChangeinPercent, 3.5, 0, true)}}\"\n                  selected=\"true\">\n                  {{ result.ChangeinPercent |number : '1.2-2' }}%\n                </md-chip>\n              </md-chip-list>\n            </td>\n            <td>\n              <md-chip-list>\n                <md-chip color=\"{{chooseChipColor(result.regressionPotential, 20, 7, true)}}\"\n                  selected=\"true\">\n                  {{ result.regressionPotential }}%\n                </md-chip>\n              </md-chip-list>\n            </td>\n            <td>${{ result.LastTradePriceOnly}}</td>\n            <td *ngIf=\"!(tableViewState$|async).showTechnical\">\n              <span>{{ result.fundamentalAggregateNumber }}</span>\n            </td>\n            <td *ngIf=\"!(tableViewState$|async).showTechnical\">\n              <md-chip-list *ngIf=\"result.grahamBuffettRatio != -1\">\n                <md-chip color=\"{{chooseChipColor(result.grahamBuffettRatio, 120, 100, true)}}\"\n                  selected=\"true\">\n                  {{ result.grahamBuffettRatio }}%\n                </md-chip>\n              </md-chip-list>\n            </td>\n            <td *ngIf=\"!(tableViewState$|async).showTechnical\">{{ result.EPSEstimateCurrentYear }}</td>\n            <td *ngIf=\"!(tableViewState$|async).showTechnical\">\n              <md-chip-list *ngIf=\"result.projectedEpsGrowth != -1\">\n                <md-chip color=\"{{chooseChipColor(result.projectedEpsGrowth, 0.15, 0.05, true)}}\"\n                  selected=\"true\">\n                  {{ result.projectedEpsGrowth | number:0 }}%\n                </md-chip>\n              </md-chip-list>\n            </td>\n            <td *ngIf=\"!(tableViewState$|async).showTechnical\">\n              <md-chip-list *ngIf=\"result.PriceBook != -1\">\n                <md-chip color=\"{{chooseChipColor(result.PriceBook, 4, 2, true)}}\"\n                  selected=\"true\">\n                  {{ result.PriceBook | number:0 }}\n                </md-chip>\n              </md-chip-list>\n            </td>\n            <td *ngIf=\"!(tableViewState$|async).showTechnical\">\n              <md-chip-list *ngIf=\"result.PriceSales != -1\">\n                <md-chip color=\"{{chooseChipColor(result.PriceSales, 4, 2, true)}}\"\n                  selected=\"true\">\n                  {{ result.PriceSales | number:0 }}\n                </md-chip>\n              </md-chip-list>\n            </td>\n\n            <!-- Earnings -->\n            <td *ngIf=\"!(tableViewState$|async).showTechnical\">\n              <md-chip-list *ngIf=\"result.PERatio != -1\">\n                <md-chip color=\"{{chooseChipColor(result.PERatio, 19, 12)}}\"\n                  selected=\"true\">\n                  {{ result.PERatio | number:0 }}\n                </md-chip>\n              </md-chip-list>\n            </td>\n            <td *ngIf=\"!(tableViewState$|async).showTechnical\">\n              <md-chip-list *ngIf=\"result.PEGRatio != -1\">\n                <md-chip color=\"{{chooseChipColor(result.PEGRatio, 1.75, 1)}}\"\n                  selected=\"true\">\n                  {{ result.PEGRatio | number:0 }}\n                </md-chip>\n              </md-chip-list>\n            </td>\n            <td *ngIf=\"!(tableViewState$|async).showTechnical\">\n              <md-chip-list *ngIf=\"result.DividendYield != -1\">\n                <md-chip color=\"{{chooseChipColor(result.DividendYield, 6.5, 4)}}\"\n                  selected=\"true\">\n                  {{ result.DividendYield | number:0 }}&nbsp;{{ result.ExDividendDate }}\n                </md-chip>\n              </md-chip-list>\n            </td>\n            <td *ngIf=\"(tableViewState$|async).showTechnical\">\n              <md-chip-list>\n                <md-chip color=\"{{result.mood.cssClass}}\"\n                  selected=\"true\">\n                  {{ result.movingAverageMeaning }}\n                </md-chip>\n              </md-chip-list>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </md-tab>\n  </div>\n</md-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/stock-table/stock-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 500px !important; }\n\n.tag {\n  font-size: 100% !important;\n  text-align: left !important; }\n\ntd > span {\n  left: 0 !important;\n  text-align: left !important; }\n\ntd {\n  text-align: center !important; }\n\nth {\n  text-align: center !important;\n  color: #fff !important;\n  background-color: #444; }\n\ntable:hover {\n  background-color: #3c3c3c !important; }\n\ntr:hover {\n  background-color: #222 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/stock-table/stock-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockTableComponent = (function () {
    function StockTableComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    StockTableComponent.prototype.chooseChipColor = function (value, upper, bottom, isReversed) {
        if (isReversed === void 0) { isReversed = false; }
        var top = isReversed ? "primary" : "warn";
        var middle = "accent";
        var lower = isReversed ? "warn" : "primary";
        try {
            return value > upper
                ? top
                : value <= upper && value >= bottom ? middle : lower;
        }
        catch (ex) {
            return "";
        }
    };
    StockTableComponent.prototype.sortByColumn = function (column) {
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__shared__["Actions"].StockDashboardActions.TABLE_SORT_CHANGE,
            sortBy: column
        });
    };
    StockTableComponent.prototype.rowClicked = function (result) {
        window.open("http://www.gurufocus.com/stock/" + result.symbol, "_blank");
        window.open("http://quote.morningstar.com/Quote.html?ticker=" + result.symbol, "_blank");
        window.open("https://www.tradingview.com/chart/?symbol=" + result.symbol + "&interval=D&hidesidetoolbar=0&symboledit=1&toolbarbg=f4f7f9&studies=&hideideas=0&theme=Black&timezone=exchange&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&showpopupbutton=1", "_blank");
    };
    return StockTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])("tableState"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], StockTableComponent.prototype, "tableViewState$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])("groupedYahooResults"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], StockTableComponent.prototype, "groupedYahooResults$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])("sortBy"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], StockTableComponent.prototype, "sortBy$", void 0);
StockTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "stock-table",
        template: __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/stock-table/stock-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/stock-table/stock-table.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _d || Object])
], StockTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=stock-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/stock-view-changer/stock-view-changer.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"3\" rowHeight=\"35px\"\n  style=\"width: 40em;\">\n  <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n    <md-select (ngModelChange)=\"onListChange($event)\"\n      [ngModel]=\"selectedStockList\"\n      style=\"padding-left: 2em; width: 12em;\">\n      <md-option *ngFor=\"let list of stockListHeaders$ | async\"\n        [value]=\"list.title\" style=\"color:#fff !important;\">{{list.title}}</md-option>\n    </md-select>\n  </md-grid-tile>\n</md-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/stock-view-changer/stock-view-changer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockViewChangerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockViewChangerComponent = (function () {
    function StockViewChangerComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    StockViewChangerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableViewState$.subscribe(function (x) {
            _this.selectedStockList = x.selectedStockList;
            _this.showTable = x.showTable;
            _this.showTechnical = x.showTechnical;
        });
    };
    StockViewChangerComponent.prototype.onListChange = function ($event) {
        this.selectedStockList = $event;
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__shared__["Actions"].StockDashboardActions.TABLE_VIEW_STATE_CHANGE,
            tableState: new __WEBPACK_IMPORTED_MODULE_4__models__["a" /* TableViewState */](this.selectedStockList, this.showTable, this.showTechnical)
        });
    };
    StockViewChangerComponent.prototype.onShowTableChange = function ($event) {
        this.showTable = $event;
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__shared__["Actions"].StockDashboardActions.TABLE_VIEW_STATE_CHANGE,
            tableState: new __WEBPACK_IMPORTED_MODULE_4__models__["a" /* TableViewState */](this.selectedStockList, this.showTable, this.showTechnical)
        });
    };
    StockViewChangerComponent.prototype.onTechnicalChange = function ($event) {
        this.showTechnical = $event;
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__shared__["Actions"].StockDashboardActions.TABLE_VIEW_STATE_CHANGE,
            tableState: new __WEBPACK_IMPORTED_MODULE_4__models__["a" /* TableViewState */](this.selectedStockList, this.showTable, this.showTechnical)
        });
    };
    return StockViewChangerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])("stockListHeaders"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], StockViewChangerComponent.prototype, "stockListHeaders$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])("tableState"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], StockViewChangerComponent.prototype, "tableViewState$", void 0);
StockViewChangerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "stock-view-changer",
        template: __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/stock-view-changer/stock-view-changer.component.html"),
        styles: [],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _c || Object])
], StockViewChangerComponent);

var _a, _b, _c;
//# sourceMappingURL=stock-view-changer.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/stockdashboard/stockdashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <dashboard-overview></dashboard-overview>\n  <br />\n  <md-card>\n    <!-- <volatility-panel></volatility-panel> -->\n    <stock-view-changer></stock-view-changer>\n    <stock-table *ngIf=\"(tableState$|async).showTable\"></stock-table>\n    <chart-viewer *ngIf=\"!(tableState$|async).showTable\"></chart-viewer>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/stockdashboard/stockdashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rest_interactor_service__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/services/rest-interactor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockdashboardComponent = (function () {
    function StockdashboardComponent(restInteractorService) {
        this.restInteractorService = restInteractorService;
    }
    StockdashboardComponent.prototype.ngOnInit = function () {
        this.restInteractorService.getDefaultListResults();
    };
    return StockdashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])("tableState"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], StockdashboardComponent.prototype, "tableState$", void 0);
StockdashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "dashboard-stocks",
        template: __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/stockdashboard/stockdashboard.component.html"),
        styles: [],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        viewProviders: [],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_rest_interactor_service__["a" /* RestInteractorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_rest_interactor_service__["a" /* RestInteractorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_rest_interactor_service__["a" /* RestInteractorService */]) === "function" && _b || Object])
], StockdashboardComponent);

var _a, _b;
//# sourceMappingURL=stockdashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/todo/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_component__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/todo/todo.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_todoItem__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/todo/models/todoItem.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/todo/models/todoItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoItem; });
var TodoItem = (function () {
    function TodoItem(text, completed) {
        this.text = text;
        this.completed = completed;
    }
    return TodoItem;
}());

//# sourceMappingURL=todoItem.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-content>\n    <div *ngFor=\"let todo of todos\">\n      <md-checkbox [(checked)]=\"todo.completed\">\n        {{todo.text}}\n      </md-checkbox>\n      <button md-icon-button color=\"warn\"\n        (click)=\"removeTodo(todo)\">\n        <i class=\"material-icons\" md-24>check</i>\n      </button>\n    </div>\n\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <md-input-container>\n        <input formControlName=\"newTodo\"\n          mdInput required placeholder=\"What do you need to do?\"\n        />\n      </md-input-container>\n      <button md-raised-button color=\"primary\"\n        type=\"submit\" [disabled]=\"!myForm.valid\">Add Todo</button>\n    </form>\n\n    <md-checkbox (change)=\"toggleAll($event)\">\n      Mark all as complete\n    </md-checkbox>\n\n  </md-card-content>\n</md-card>\n\n<div *ngIf=\"!myForm.valid && myForm.dirty\">Form is invalid</div>\n<div *ngIf=\"!newTodo.valid && newTodo.dirty\">newTodo is invalid</div>\n\n<md-button-toggle-group #group=\"mdButtonToggleGroup\">\n  <md-button-toggle value=\"left\">\n    <md-icon>format_align_left</md-icon>\n  </md-button-toggle>\n  <md-button-toggle value=\"center\">\n    <md-icon>format_align_center</md-icon>\n  </md-button-toggle>\n  <md-button-toggle value=\"right\">\n    <md-icon>format_align_right</md-icon>\n  </md-button-toggle>\n  <md-button-toggle value=\"justify\">\n    <md-icon>format_align_justify</md-icon>\n  </md-button-toggle>\n</md-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_todoItem__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/todo/models/todoItem.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = (function () {
    function TodoComponent(fb) {
        this.fb = fb;
        this.color = "primary";
        this.mode = "indeterminate";
        this.value = 50;
        this.bufferValue = 75;
        this.todos = new Array();
        this.todos.push(new __WEBPACK_IMPORTED_MODULE_2__models_todoItem__["a" /* TodoItem */]("Hello world", false));
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].required);
        this.myForm = this.fb.group({
            newTodo: this.newTodo
        });
    };
    TodoComponent.prototype.removeTodo = function (item) {
        this.todos.splice(this.todos.indexOf(item), 1);
    };
    TodoComponent.prototype.onSubmit = function () {
        if (this.myForm.valid) {
            this.todos.push(new __WEBPACK_IMPORTED_MODULE_2__models_todoItem__["a" /* TodoItem */](this.newTodo.value, false));
            this.myForm.reset();
        }
    };
    TodoComponent.prototype.toggleAll = function (changedEvent) {
        this.todos.forEach(function (todo) {
            todo.completed = changedEvent.checked;
        });
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-todo",
        viewProviders: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]],
        template: __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/todo/todo.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
], TodoComponent);

var _a;
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/volatility-panel/volatility-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"\" style=\"overflow-x: scroll; width:90vw;\">\n  <table class=\"mdl-data-table mdl-js-data-table mdl-shadow--8dp\"\n    style=\"width:100% !important;\"\n    *ngIf=\"(vixModel$|async)\">\n    <thead>\n      <tr>\n        <th>VIX/VXV Ratio</th>\n        <th>VIX</th>\n        <th>VIX % Changed</th>\n        <th>SPX % Changed</th>\n        <th>SPX Volume %</th>\n        <th>spx Change From 200 Day\n          Moving Average</th>\n        <th>WTI % Changed</th>\n        <th>USD % Changed</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\n          <md-chip-list>\n            <md-chip color=\"warn\" selected=\"{{ isVixOverThreshold((vixModel$|async)) }}\">\n              {{ getVixRatio((vixModel$|async)) |number : '1.2-2' }}\n              <span *ngIf=\"isVixOverThreshold((vixModel$|async))\">Possible VIX Spike</span>\n            </md-chip>\n          </md-chip-list>\n        </td>\n        <td>{{(vixModel$|async).vix}}</td>\n        <td>{{(vixModel$|async).vixDailyPercentChange*100 |number : '1.2-2'}}%</td>\n        <td>{{(vixModel$|async).spxDailyPercentChange*100 |number : '1.2-2'}}%</td>\n        <td>{{(vixModel$|async).spxRelativeVolume*100 |number : '1.2-2'}}%</td>\n        <td>{{(vixModel$|async).spxChangeFromTwoHundreddayMovingAverage*100 |number : '1.2-2'}}%</td>\n        <td>{{(vixModel$|async).wtiDailyPercentChange*100 |number : '1.2-2'}}%</td>\n        <td>{{(vixModel$|async).usdDailyPercentChange*100 |number : '1.2-2'}}%</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/volatility-panel/volatility-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\n  text-align: center !important;\n  color: #fff !important;\n  background-color: #444; }\n\ntable {\n  background-color: #3c3c3c; }\n\ntable:hover {\n  background-color: #3c3c3c !important; }\n\ntr:hover {\n  background-color: #222 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/components/volatility-panel/volatility-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolatilityPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VolatilityPanelComponent = (function () {
    function VolatilityPanelComponent() {
        this.threshold = 0.917;
    }
    VolatilityPanelComponent.prototype.isVixOverThreshold = function (vixModel) {
        if (!vixModel) {
            return false;
        }
        return this.getVixRatio(vixModel) > this.threshold;
    };
    VolatilityPanelComponent.prototype.getVixRatio = function (vixModel) {
        if (!vixModel) {
            return -1;
        }
        return vixModel.vix / vixModel.vixThreeMonth;
    };
    return VolatilityPanelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])("vixModel"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], VolatilityPanelComponent.prototype, "vixModel$", void 0);
VolatilityPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "volatility-panel",
        template: __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/volatility-panel/volatility-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/volatility-panel/volatility-panel.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], VolatilityPanelComponent);

var _a;
//# sourceMappingURL=volatility-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/models/TableViewState.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableViewState; });
var TableViewState = (function () {
    function TableViewState(selectedStockList, showTable, showTechnical) {
        if (selectedStockList === void 0) { selectedStockList = ""; }
        if (showTable === void 0) { showTable = false; }
        if (showTechnical === void 0) { showTechnical = true; }
        this.selectedStockList = selectedStockList;
        this.showTable = showTable;
        this.showTechnical = showTechnical;
    }
    return TableViewState;
}());

//# sourceMappingURL=TableViewState.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vixModel__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/models/vixModel.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__vixModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableViewState__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/models/TableViewState.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__TableViewState__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/models/vixModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VixModel; });
var VixModel = (function () {
    function VixModel() {
        this.vix = 0;
    }
    return VixModel;
}());

//# sourceMappingURL=vixModel.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/services/rest-interactor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestInteractorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppModule_services_status_notification_service__ = __webpack_require__("../../../../../src/app/modules/AppModule/services/status-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RestInteractorService = (function () {
    function RestInteractorService(ngRedux, statusNotificationService, googleSheetService) {
        var _this = this;
        this.ngRedux = ngRedux;
        this.statusNotificationService = statusNotificationService;
        this.googleSheetService = googleSheetService;
        this.tableViewState$.subscribe(function (x) {
            if (x.selectedStockList !== _this.currentList) {
                _this.onListSelectChange(x.selectedStockList);
            }
            _this.currentList = x.selectedStockList;
        });
    }
    RestInteractorService.prototype.getDefaultListResults = function () {
        var _this = this;
        this.googleSheetService.checkAuth(true, function () { return _this.isAuthorized(); });
    };
    RestInteractorService.prototype.onListSelectChange = function (selectedStockList) {
        var _this = this;
        if (!this.stockListHeaders) {
            return;
        }
        var stockListHeader = this.stockListHeaders.filter(function (x) { return x.title === selectedStockList; })[0];
        this.BeginIsInProgress("GOOGLE SHEETS", "Retrieving Data...");
        this.googleSheetService
            .getSheetData(stockListHeader)
            .subscribe(function (companies) {
            var tickers = __WEBPACK_IMPORTED_MODULE_3_lodash__(companies.response)
                .filter(function (x) { return x.isActive === "1"; })
                .uniqBy(function (x) { return x.ticker; })
                .value();
            _this.ngRedux.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_5__shared__["Actions"].StockDashboardActions.GOOGLE_SHEET_DETAILS_RECEIVED,
                list: {
                    listTitle: companies.sheetInfo.title,
                    tickers: tickers
                }
            });
            _this.EndIsInProgress("GOOGLE SHEETS", "Data Received");
            // this.getYahoo(tickers);
        });
    };
    RestInteractorService.prototype.isAuthorized = function () {
        var _this = this;
        this.BeginIsInProgress("GOOGLE SHEETS", "Retrieving Data...");
        this.googleSheetService
            .getMasterSheetData()
            .subscribe(function (stockListHeaders) {
            _this.stockListHeaders = stockListHeaders.response;
            _this.ngRedux.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_5__shared__["Actions"].StockDashboardActions.REQUEST_SELECTED_STOCK_LIST_SUCCESS,
                selectedStockList: _this.stockListHeaders[0].title
            });
            _this.ngRedux.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_5__shared__["Actions"].StockDashboardActions.REQUEST_STOCK_LIST_HEADERS_SUCCESS,
                stockListHeaders: _this.stockListHeaders,
                tableState: new __WEBPACK_IMPORTED_MODULE_6__models__["a" /* TableViewState */](_this.stockListHeaders[0].title, true, true)
            });
            _this.onListSelectChange(_this.stockListHeaders[0].title);
            _this.EndIsInProgress("GOOGLE SHEETS", "Data Received");
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](_this.stockListHeaders, function (sheetInfo) {
                _this.googleSheetService
                    .getSheetData(sheetInfo)
                    .subscribe(function (selected) {
                    var tickers4Analysis = __WEBPACK_IMPORTED_MODULE_3_lodash__(selected)
                        .uniqBy(function (x) { return x.ticker; })
                        .value();
                    _this.ngRedux.dispatch({
                        type: __WEBPACK_IMPORTED_MODULE_5__shared__["Actions"].StockDashboardActions.SAVE_TICKERS_4_ANALYSIS,
                        tickers4Analysis: tickers4Analysis
                    });
                });
            });
        });
    };
    RestInteractorService.prototype.BeginIsInProgress = function (source, message, duration) {
        if (source === void 0) { source = ""; }
        if (message === void 0) { message = "Querying..."; }
        if (duration === void 0) { duration = 3000; }
        this.statusNotificationService.setIsUpdating(true);
        this.statusNotificationService.openSnackBar(source + ":", message, duration);
    };
    RestInteractorService.prototype.EndIsInProgress = function (source, message, duration) {
        if (source === void 0) { source = ""; }
        if (message === void 0) { message = "Querying..."; }
        if (duration === void 0) { duration = 3000; }
        this.statusNotificationService.setIsUpdating(false);
        this.statusNotificationService.openSnackBar(source + ":", message, duration);
    };
    return RestInteractorService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])("tableState"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]) === "function" && _a || Object)
], RestInteractorService.prototype, "tableViewState$", void 0);
RestInteractorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__AppModule_services_status_notification_service__["a" /* StatusNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__AppModule_services_status_notification_service__["a" /* StatusNotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["GoogleSheetsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["GoogleSheetsService"]) === "function" && _d || Object])
], RestInteractorService);

var _a, _b, _c, _d;
//# sourceMappingURL=rest-interactor.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/stock-dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockDashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var StockDashboardRoutingModule = (function () {
    function StockDashboardRoutingModule() {
    }
    return StockDashboardRoutingModule;
}());
StockDashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], StockDashboardRoutingModule);

//# sourceMappingURL=stock-dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/StockDashboardModule/stock-dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockDashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_stockdashboard_stockdashboard_component__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/stockdashboard/stockdashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stock_dashboard_routing_module__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/stock-dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_todo__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/todo/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_overview_overview_component__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_volatility_panel_volatility_panel_component__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/volatility-panel/volatility-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_chart_viewer_chart_viewer_component__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/chart-viewer/chart-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_stock_view_changer_stock_view_changer_component__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/stock-view-changer/stock-view-changer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_stock_table_stock_table_component__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/stock-table/stock-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_rest_interactor_service__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/services/rest-interactor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__AppModule_services_status_notification_service__ = __webpack_require__("../../../../../src/app/modules/AppModule/services/status-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { MdGridTile } from '@angular/material/typings/grid-list/grid-tile';
var StockDashboardModule = (function () {
    function StockDashboardModule() {
    }
    return StockDashboardModule;
}());
StockDashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__components_stockdashboard_stockdashboard_component__["a" /* StockdashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_todo__["a" /* TodoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_overview_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_volatility_panel_volatility_panel_component__["a" /* VolatilityPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_chart_viewer_chart_viewer_component__["a" /* ChartViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_stock_view_changer_stock_view_changer_component__["a" /* StockViewChangerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_stock_table_stock_table_component__["a" /* StockTableComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_8__stock_dashboard_routing_module__["a" /* StockDashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_redux_store__["NgReduxModule"]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_rest_interactor_service__["a" /* RestInteractorService */],
            __WEBPACK_IMPORTED_MODULE_16__shared__["GoogleSheetsService"],
            __WEBPACK_IMPORTED_MODULE_16__shared__["YahooDataService"],
            __WEBPACK_IMPORTED_MODULE_16__shared__["StockAnalysisService"],
            __WEBPACK_IMPORTED_MODULE_18__AppModule_services_status_notification_service__["a" /* StatusNotificationService */]
            // MdGridTile
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1__components_stockdashboard_stockdashboard_component__["a" /* StockdashboardComponent */]]
    })
], StockDashboardModule);

//# sourceMappingURL=stock-dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/auto-select/auto-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"type === 'autocomplete'\">\n  <md-input-container class=\"mmd-form\">\n    <input mdInput placeholder=\"{{placeholder}}\" [mdAutocomplete]=\"auto\" [formControl]=\"formControl\" [(ngModel)]=\"selectedValue\">\n  </md-input-container>\n\n  <md-autocomplete #auto=\"mdAutocomplete\" class=\"mmd-form\" [displayWith]=\"getDescription.bind(this)\">\n    <md-option *ngFor=\"let item of filteredList | async\" [value]=\"item\">\n      {{ describe(item) }}\n    </md-option>\n  </md-autocomplete>\n</div>\n\n<div *ngIf=\"type === 'select'\">\n  <md-select placeholder=\"{{placeholder}}\" [(ngModel)]=\"selectedValue\" name=\"select\" class=\"mmd-form\">\n    <md-option *ngFor=\"let item of list\" [value]=\"item\" class=\"text-color\">\n      {{describe(item)}}\n    </md-option>\n  </md-select>\n</div>\n\n<div *ngIf=\"type === 'radio'\">\n  <md-radio-group [(ngModel)]=\"selectedValue\">\n    <md-radio-button *ngFor=\"let item of list\" [value]=\"item\" class=\"radio-padding\">{{describe(item)}}</md-radio-button>\n  </md-radio-group>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/auto-select/auto-select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text-color {\n  color: #fff; }\n\n.mmd-form {\n  width: 100%;\n  margin-bottom: 1em; }\n\n.errorMessage {\n  color: #ff0000; }\n\n.radio-padding {\n  margin-right: 1em;\n  margin-bottom: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/auto-select/auto-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoSelectComponent = (function () {
    function AutoSelectComponent() {
        var _this = this;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.formControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.filteredList = this.formControl.valueChanges.startWith(null).map(function (enteredText) {
            return enteredText
                ? _this.list.filter(function (item) {
                    return __WEBPACK_IMPORTED_MODULE_2_lodash__["includes"](_this.getDescription(item).toLowerCase(), typeof enteredText === "string"
                        ? enteredText.toLowerCase()
                        : _this.getDescription(enteredText));
                })
                : _this.list;
        });
    }
    Object.defineProperty(AutoSelectComponent.prototype, "selectedValue", {
        set: function (value) {
            this.onChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    AutoSelectComponent.prototype.describe = function (item) {
        return this.getDescription(item);
    };
    return AutoSelectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AutoSelectComponent.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AutoSelectComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], AutoSelectComponent.prototype, "list", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AutoSelectComponent.prototype, "getKey", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AutoSelectComponent.prototype, "getDescription", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AutoSelectComponent.prototype, "onChange", void 0);
AutoSelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "auto-select",
        template: __webpack_require__("../../../../../src/app/modules/form-tests/auto-select/auto-select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/form-tests/auto-select/auto-select.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [])
], AutoSelectComponent);

var _a;
//# sourceMappingURL=auto-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/boolean-input/boolean-input.component.html":
/***/ (function(module, exports) {

module.exports = "<md-checkbox *ngIf=\"type === 'checkbox'\"\n  [color]=\"color\" [checked]=\"checked\"\n  [indeterminate]=\"indeterminate\"\n  [disabled]=\"isDisabled\" [labelPosition]=\"labelPosition\"\n  [required]=\"required\" [(ngModel)]=\"checked\"\n  (change)=\"changed()\">\n  {{ getLabel() }}\n</md-checkbox>\n\n<md-slide-toggle *ngIf=\"type === 'slideToggle'\"\n  class=\"slide-toggle-padding\" [color]=\"color\"\n  [checked]=\"checked\" [labelPosition]=\"labelPosition\"\n  [disabled]=\"isDisabled\" [required]=\"required\"\n  [(ngModel)]=\"checked\" (change)=\"changed()\">\n  {{ getLabel() }}\n</md-slide-toggle>\n"

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/boolean-input/boolean-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide-toggle-padding {\n  margin-top: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/boolean-input/boolean-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooleanInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooleanInputComponent = (function () {
    function BooleanInputComponent(cd) {
        this.cd = cd;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BooleanInputComponent.prototype.ngOnInit = function () {
        if (typeof this.defaultValue === "undefined") {
            this.indeterminate = true;
            this.checked = undefined;
        }
        else {
            this.checked = this.defaultValue;
        }
        if (typeof this.color === "undefined") {
            this.color = "accent";
        }
        if (typeof this.labelPosition === "undefined" ||
            (this.labelPosition !== "after" && this.labelPosition !== "before")) {
            this.labelPosition = "after";
        }
    };
    BooleanInputComponent.prototype.changed = function () {
        this.onChange.emit(this.checked);
        this.cd.markForCheck();
    };
    BooleanInputComponent.prototype.getLabel = function () {
        this.label = this.label ? this.label : "";
        if (typeof this.checked === "undefined") {
            return this.label;
        }
        else if (this.checked) {
            return this.trueLabel ? this.trueLabel : this.label;
        }
        else {
            return this.falseLabel ? this.falseLabel : this.label;
        }
    };
    return BooleanInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BooleanInputComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BooleanInputComponent.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BooleanInputComponent.prototype, "isDisabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BooleanInputComponent.prototype, "required", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BooleanInputComponent.prototype, "defaultValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BooleanInputComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BooleanInputComponent.prototype, "trueLabel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BooleanInputComponent.prototype, "falseLabel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BooleanInputComponent.prototype, "labelPosition", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BooleanInputComponent.prototype, "onChange", void 0);
BooleanInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "boolean-input",
        template: __webpack_require__("../../../../../src/app/modules/form-tests/boolean-input/boolean-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/form-tests/boolean-input/boolean-input.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], BooleanInputComponent);

var _a, _b;
//# sourceMappingURL=boolean-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/form-tests.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormTestsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_routing__ = __webpack_require__("../../../../../src/app/shared/routing/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_form_tests_reactive_form_reactive_form_component__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/reactive-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_form_tests_reactive_form_DialogResultExampleDialog__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/DialogResultExampleDialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_modules_form_tests_moduleForSpec__ = __webpack_require__("../../../../../src/app/modules/form-tests/moduleForSpec.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_modules_form_tests_input_input_component__ = __webpack_require__("../../../../../src/app/modules/form-tests/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_modules_form_tests_auto_select_auto_select_component__ = __webpack_require__("../../../../../src/app/modules/form-tests/auto-select/auto-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_modules_form_tests_boolean_input_boolean_input_component__ = __webpack_require__("../../../../../src/app/modules/form-tests/boolean-input/boolean-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_modules_form_tests_reactive_form_services_metadata_service__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/services/metadata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = __WEBPACK_IMPORTED_MODULE_2_app_shared_routing__["AppRouteProvider"].appRoutes;
var moduleParams = Object.assign({}, __WEBPACK_IMPORTED_MODULE_5_app_modules_form_tests_moduleForSpec__["a" /* template */]);
moduleParams.imports.push(__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes));
moduleParams.bootstrap = [__WEBPACK_IMPORTED_MODULE_3_app_modules_form_tests_reactive_form_reactive_form_component__["a" /* ReactiveFormComponent */]];
moduleParams.entryComponents = [__WEBPACK_IMPORTED_MODULE_4_app_modules_form_tests_reactive_form_DialogResultExampleDialog__["a" /* DialogResultExampleDialogComponent */]];
var FormTestsModule = (function () {
    function FormTestsModule() {
    }
    return FormTestsModule;
}());
FormTestsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3_app_modules_form_tests_reactive_form_reactive_form_component__["a" /* ReactiveFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_modules_form_tests_input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_4_app_modules_form_tests_reactive_form_DialogResultExampleDialog__["a" /* DialogResultExampleDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_7_app_modules_form_tests_auto_select_auto_select_component__["a" /* AutoSelectComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_modules_form_tests_boolean_input_boolean_input_component__["a" /* BooleanInputComponent */]
        ],
        entryComponents: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["g" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["l" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9_app_modules_form_tests_reactive_form_services_metadata_service__["a" /* MetadataService */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MdAutocomplete */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FormTestsModule);

//# sourceMappingURL=form-tests.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"parentFormGroup\">\n  <md-input-container class=\"mmd-form\"\n    align=\"right\">\n    <input mdInput [(ngModel)]=\"model\"\n      formControlName=\"{{formInputDescriptor.formControlName}}\"\n      placeholder=\"{{formInputDescriptor.Label}}\"\n      type=\"{{formInputDescriptor.type}}\"\n      (ngModelChange)=\"changed()\">\n    <md-hint class=\"errorMessage\" *ngIf=\"displayMessage[formInputDescriptor.formControlName]\">\n      {{displayMessage[formInputDescriptor.formControlName]}}\n    </md-hint>\n  </md-input-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/input/input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mmd-form {\n  width: 100%;\n  margin-bottom: 1em; }\n\n.errorMessage {\n  color: #ff0000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/FormInputDescriptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputComponent = (function () {
    function InputComponent() {
        this.displayMessage = {};
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputComponent.prototype.changed = function () {
        this.onChange.emit(this.model);
    };
    return InputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]) === "function" && _a || Object)
], InputComponent.prototype, "formInputDescriptor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]) === "function" && _b || Object)
], InputComponent.prototype, "parentFormGroup", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputComponent.prototype, "displayMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], InputComponent.prototype, "onChange", void 0);
InputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "form-input",
        template: __webpack_require__("../../../../../src/app/modules/form-tests/input/input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/form-tests/input/input.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [])
], InputComponent);

var _a, _b, _c;
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/moduleForSpec.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return template; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_modules_form_tests_reactive_form_reactive_form_component__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/reactive-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_modules_form_tests_input_input_component__ = __webpack_require__("../../../../../src/app/modules/form-tests/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_modules_form_tests_reactive_form_DialogResultExampleDialog__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/DialogResultExampleDialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_modules_form_tests_auto_select_auto_select_component__ = __webpack_require__("../../../../../src/app/modules/form-tests/auto-select/auto-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_modules_form_tests_boolean_input_boolean_input_component__ = __webpack_require__("../../../../../src/app/modules/form-tests/boolean-input/boolean-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_modules_form_tests_reactive_form_services_metadata_service__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/services/metadata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");












var template = {
    imports: [
        __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormsModule */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* ReactiveFormsModule */],
        __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MaterialModule */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
        __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
    ],
    schemas: [__WEBPACK_IMPORTED_MODULE_4__angular_core__["NO_ERRORS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_4__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    declarations: [
        __WEBPACK_IMPORTED_MODULE_5_app_modules_form_tests_reactive_form_reactive_form_component__["a" /* ReactiveFormComponent */],
        __WEBPACK_IMPORTED_MODULE_6_app_modules_form_tests_input_input_component__["a" /* InputComponent */],
        __WEBPACK_IMPORTED_MODULE_7_app_modules_form_tests_reactive_form_DialogResultExampleDialog__["a" /* DialogResultExampleDialogComponent */],
        __WEBPACK_IMPORTED_MODULE_8_app_modules_form_tests_auto_select_auto_select_component__["a" /* AutoSelectComponent */],
        __WEBPACK_IMPORTED_MODULE_9_app_modules_form_tests_boolean_input_boolean_input_component__["a" /* BooleanInputComponent */]
    ],
    providers: [__WEBPACK_IMPORTED_MODULE_10_app_modules_form_tests_reactive_form_services_metadata_service__["a" /* MetadataService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdAutocomplete */]]
};
//# sourceMappingURL=moduleForSpec.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/DialogResultExampleDialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogResultExampleDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogResultExampleDialogComponent = (function () {
    function DialogResultExampleDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.result = {
            action: ""
        };
    }
    DialogResultExampleDialogComponent.prototype.save = function () {
        this.result.action = "was saved";
        this.dialogRef.close(this.result);
    };
    DialogResultExampleDialogComponent.prototype.cancel = function () {
        this.result.action = "was cancelled";
        this.dialogRef.close(this.result);
    };
    return DialogResultExampleDialogComponent;
}());
DialogResultExampleDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "dialog-result-example-dialog",
        template: "\n  <div style=\"color:white;\">\n    <h1 md-dialog-title>Dialog</h1>\n     <dashboard-reactive-form></dashboard-reactive-form>\n\n    <div md-dialog-content>What would you like to do?</div>\n    <div md-dialog-actions>\n      <button md-raised-button color=\"accent\" (click)=\"save()\">Save</button>\n      <button md-raised-button color=\"warn\" (click)=\"cancel()\">Cancel</button>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object])
], DialogResultExampleDialogComponent);

var _a;
//# sourceMappingURL=DialogResultExampleDialog.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/EmailValidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UrlValidators; });
var EmailValidators = (function () {
    function EmailValidators() {
    }
    EmailValidators.validate = function () {
        return function (c) {
            var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            return EMAIL_REGEXP.test(c.value)
                ? null
                : {
                    email: true
                };
        };
    };
    return EmailValidators;
}());

var UrlValidators = (function () {
    function UrlValidators() {
    }
    UrlValidators.validate = function () {
        return function (c) {
            var REGEXP = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
            return REGEXP.test(c.value)
                ? null
                : {
                    url: true
                };
        };
    };
    return UrlValidators;
}());

//# sourceMappingURL=EmailValidation.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/GenericValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
// Generic validator for Reactive forms
// Implemented as a class, not a service,
// so it can retain state for multiple forms.

var GenericValidator = (function () {
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    function GenericValidator(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    GenericValidator.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function (controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* FormGroup */]) {
                    var childMessages = this_1.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this_1.validationMessages[controlKey]) {
                        messages[controlKey] = "";
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] +=
                                        _this.validationMessages[controlKey][messageKey] + " ";
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlKey in container.controls) {
            _loop_1(controlKey);
        }
        return messages;
    };
    return GenericValidator;
}());

//# sourceMappingURL=GenericValidator.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/NumberValidators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberValidators; });
var NumberValidators = (function () {
    function NumberValidators() {
    }
    NumberValidators.range = function (min, max) {
        return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { range: true };
            }
            return null;
        };
    };
    return NumberValidators;
}());

//# sourceMappingURL=NumberValidators.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/metadata/BooleanElementDescriptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooleanElementDescriptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_modules_form_tests_reactive_form_metadata_formElementDescriptor__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/formElementDescriptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormElementTypes__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/FormElementTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_LabelPositionTypes__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/LabelPositionTypes.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var BooleanElementDescriptor = (function (_super) {
    __extends(BooleanElementDescriptor, _super);
    function BooleanElementDescriptor(formControlName, Label, type, labelPositionTypes, trueLabel, falseLabel, defaultValue, required, isDisabled) {
        if (formControlName === void 0) { formControlName = ""; }
        if (Label === void 0) { Label = ""; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormElementTypes__["a" /* FormElementTypes */].Checkbox; }
        if (labelPositionTypes === void 0) { labelPositionTypes = __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_LabelPositionTypes__["a" /* LabelPositionTypes */].After; }
        if (required === void 0) { required = false; }
        if (isDisabled === void 0) { isDisabled = false; }
        var _this = _super.call(this, formControlName, Label, type) || this;
        _this.labelPositionTypes = labelPositionTypes;
        _this.trueLabel = trueLabel;
        _this.falseLabel = falseLabel;
        _this.defaultValue = defaultValue;
        _this.required = required;
        _this.isDisabled = isDisabled;
        return _this;
    }
    return BooleanElementDescriptor;
}(__WEBPACK_IMPORTED_MODULE_0_app_modules_form_tests_reactive_form_metadata_formElementDescriptor__["a" /* FormElementDescriptor */]));

//# sourceMappingURL=BooleanElementDescriptor.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/metadata/FormElementTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormElementTypes; });
var FormElementTypes = (function () {
    function FormElementTypes() {
    }
    return FormElementTypes;
}());

FormElementTypes.Text = "text";
FormElementTypes.Autocomplete = "autocomplete";
FormElementTypes.Select = "select";
FormElementTypes.Radio = "radio";
FormElementTypes.Checkbox = "checkbox";
FormElementTypes.SlideToggle = "slideToggle";
//# sourceMappingURL=FormElementTypes.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/metadata/FormInputDescriptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputDescriptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_modules_form_tests_reactive_form_metadata_FormElementTypes__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/FormElementTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_formElementDescriptor__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/formElementDescriptor.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FormInputDescriptor = (function (_super) {
    __extends(FormInputDescriptor, _super);
    function FormInputDescriptor(formControlName, Label, type, validators) {
        if (formControlName === void 0) { formControlName = ""; }
        if (Label === void 0) { Label = ""; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_0_app_modules_form_tests_reactive_form_metadata_FormElementTypes__["a" /* FormElementTypes */].Text; }
        if (validators === void 0) { validators = []; }
        var _this = _super.call(this, formControlName, Label, type) || this;
        _this.validators = validators;
        return _this;
    }
    return FormInputDescriptor;
}(__WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_formElementDescriptor__["a" /* FormElementDescriptor */]));

//# sourceMappingURL=FormInputDescriptor.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/metadata/LabelPositionTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelPositionTypes; });
var LabelPositionTypes = (function () {
    function LabelPositionTypes() {
    }
    return LabelPositionTypes;
}());

LabelPositionTypes.Before = "before";
LabelPositionTypes.After = "after";
//# sourceMappingURL=LabelPositionTypes.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/metadata/SelectElementDescriptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectElementDescriptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_modules_form_tests_reactive_form_metadata_formElementDescriptor__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/formElementDescriptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormElementTypes__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/FormElementTypes.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SelectElementDescriptor = (function (_super) {
    __extends(SelectElementDescriptor, _super);
    function SelectElementDescriptor(formControlName, Label, type, getKey, getDescription, getList) {
        if (formControlName === void 0) { formControlName = ""; }
        if (Label === void 0) { Label = ""; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormElementTypes__["a" /* FormElementTypes */].Select; }
        var _this = _super.call(this, formControlName, Label, type) || this;
        _this.getKey = getKey;
        _this.getDescription = getDescription;
        _this.getList = getList;
        return _this;
    }
    return SelectElementDescriptor;
}(__WEBPACK_IMPORTED_MODULE_0_app_modules_form_tests_reactive_form_metadata_formElementDescriptor__["a" /* FormElementDescriptor */]));

//# sourceMappingURL=SelectElementDescriptor.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/metadata/Validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validator; });
var Validator = (function () {
    function Validator(key, validator, message) {
        this.key = key;
        this.validator = validator;
        this.message = message;
    }
    return Validator;
}());

//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/metadata/formElementDescriptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormElementDescriptor; });
var FormElementDescriptor = (function () {
    function FormElementDescriptor(formControlName, Label, type) {
        if (formControlName === void 0) { formControlName = ""; }
        if (Label === void 0) { Label = ""; }
        this.formControlName = formControlName;
        this.Label = Label;
        this.type = type;
    }
    return FormElementDescriptor;
}());

//# sourceMappingURL=formElementDescriptor.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/metadata/formGroup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormGroupDto; });
var FormGroupDto = (function () {
    function FormGroupDto(validationMessages, formGroupData, descriptors) {
        this.validationMessages = validationMessages;
        this.formGroupData = formGroupData;
        this.descriptors = descriptors;
    }
    return FormGroupDto;
}());

//# sourceMappingURL=formGroup.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/reactive-form.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>{{pageTitle}}</md-card-title>\n  <button md-raised-button color=\"primary\"\n    (click)=\"openDialog()\">Open dialog</button>\n\n  <form novalidate (ngSubmit)=\"$event.preventDefault(); saveProduct($event);\"\n    [formGroup]=\"productForm\">\n    <div *ngFor=\"let descriptor of descriptors\"\n      [ngSwitch]=\"descriptor.type\">\n      <boolean-input *ngSwitchCase=\"'checkbox'\"\n        [type]=\"descriptor.type\"\n        [isDisabled]=\"asBooleanElementDescriptor(descriptor).isDisabled\"\n        [required]=\"asBooleanElementDescriptor(descriptor).required\"\n        [defaultValue]=\"asBooleanElementDescriptor(descriptor).defaultValue\"\n        [label]=\"descriptor.Label\"\n        [trueLabel]=\"asBooleanElementDescriptor(descriptor).trueLabel\"\n        [falseLabel]=\"asBooleanElementDescriptor(descriptor).falseLabel\"\n        [labelPosition]=\"asBooleanElementDescriptor(descriptor).labelPositionTypes\"\n        (onChange)=\"log($event)\"></boolean-input>\n\n      <boolean-input *ngSwitchCase=\"'slideToggle'\"\n        [type]=\"asBooleanElementDescriptor(descriptor).type\"\n        [isDisabled]=\"asBooleanElementDescriptor(descriptor).isDisabled\"\n        [required]=\"asBooleanElementDescriptor(descriptor).required\"\n        [defaultValue]=\"asBooleanElementDescriptor(descriptor).defaultValue\"\n        [label]=\"descriptor.Label\"\n        [trueLabel]=\"asBooleanElementDescriptor(descriptor).trueLabel\"\n        [falseLabel]=\"asBooleanElementDescriptor(descriptor).falseLabel\"\n        [labelPosition]=\"asBooleanElementDescriptor(descriptor).labelPositionTypes\"\n        (onChange)=\"log($event)\"></boolean-input>\n\n      <auto-select *ngSwitchCase=\"'select'\"\n        [list]=\"asSelectElementDescriptor(descriptor).getList\"\n        [placeholder]=\"asSelectElementDescriptor(descriptor).Label\"\n        [getKey]=\"asSelectElementDescriptor(descriptor).getKey\"\n        [getDescription]=\"asSelectElementDescriptor(descriptor).getDescription\"\n        type=\"select\" (onChange)=\"log($event)\"></auto-select>\n\n      <auto-select *ngSwitchCase=\"'autocomplete'\"\n        [list]=\"asSelectElementDescriptor(descriptor).getList\"\n        [placeholder]=\"asSelectElementDescriptor(descriptor).Label\"\n        [getKey]=\"asSelectElementDescriptor(descriptor).getKey\"\n        [getDescription]=\"asSelectElementDescriptor(descriptor).getDescription\"\n        type=\"autocomplete\" (onChange)=\"log($event)\"></auto-select>\n\n      <auto-select *ngSwitchCase=\"'radio'\"\n        [list]=\"asSelectElementDescriptor(descriptor).getList\"\n        [placeholder]=\"asSelectElementDescriptor(descriptor).Label\"\n        [getKey]=\"asSelectElementDescriptor(descriptor).getKey\"\n        [getDescription]=\"asSelectElementDescriptor(descriptor).getDescription\"\n        type=\"radio\" (onChange)=\"log($event)\"></auto-select>\n\n      <form-input *ngSwitchDefault [parentFormGroup]=\"productForm\"\n        [displayMessage]=\"displayMessage\"\n        [formInputDescriptor]=\"descriptor\"\n        (onChange)=\"log($event)\"></form-input>\n    </div>\n    <div formArrayName=\"tags\">\n      <div>\n        <button md-raised-button color=\"accent\"\n          (click)=\"$event.preventDefault(); addTag();\">\n          Add Tag</button>\n        <button md-raised-button color=\"warn\"\n          (click)=\"$event.preventDefault(); deleteTag();\">\n          Delete Tag</button>\n      </div>\n      <div *ngFor=\"let tag of tags.controls; let i=index\">\n        <md-input-container align=\"right\">\n          <input mdInput formControlName=\"{{i}}\"\n            placeholder=\"Tag\" type=\"text\">\n          <md-hint class=\"errorMessage\" *ngIf=\"displayMessage[i]\">\n            {{displayMessage[i]}}\n          </md-hint>\n        </md-input-container>\n      </div>\n    </div>\n    here:{{selectedOption}}\n\n    <auto-select [list]=\"complex\" [placeholder]=\"'Select something...'\"\n      [getKey]=\"getComplexKey\" [getDescription]=\"getComplexValue\"\n      type=\"autocomplete\" (onChange)=\"log($event)\"></auto-select>\n    <auto-select [list]=\"complex\" [placeholder]=\"'Select something...'\"\n      [getKey]=\"getComplexKey\" [getDescription]=\"getComplexValue\"\n      type=\"select\" (onChange)=\"log($event)\"></auto-select>\n    <auto-select [list]=\"complex\" [placeholder]=\"'Select something...'\"\n      [getKey]=\"getComplexKey\" [getDescription]=\"getComplexValue\"\n      type=\"radio\" (onChange)=\"log($event)\"></auto-select>\n\n    <auto-select [list]=\"states\" [placeholder]=\"'Select something...'\"\n      [getKey]=\"getStateKey\" [getDescription]=\"getStateValue\"\n      type=\"autocomplete\" (onChange)=\"log($event)\"></auto-select>\n    <auto-select [list]=\"states\" [placeholder]=\"'Select something...'\"\n      [getKey]=\"getStateKey\" [getDescription]=\"getStateValue\"\n      type=\"select\" (onChange)=\"log($event)\"></auto-select>\n    <auto-select [list]=\"states\" [placeholder]=\"'Select something...'\"\n      [getKey]=\"getStateKey\" [getDescription]=\"getStateValue\"\n      type=\"radio\" (onChange)=\"log($event)\"></auto-select>\n\n    <md-card-actions>\n      <button md-raised-button color=\"primary\"\n        type=\"submit\" [disabled]='!productForm.valid'>Save</button>\n      <button md-raised-button (click)=\"$event.preventDefault(); cancel($event);\">Cancel</button>\n      <button md-raised-button color=\"warn\"\n        (click)=\"$event.preventDefault(); deleteProduct($event);\">Delete</button>\n    </md-card-actions>\n  </form>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/reactive-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mmd-form {\n  width: 100%;\n  margin-bottom: 1em;\n  margin-top: 1em; }\n\n.errorMessage {\n  color: #ff0000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/reactive-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_form_tests_reactive_form_DialogResultExampleDialog__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/DialogResultExampleDialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_modules_form_tests_reactive_form_GenericValidator__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/GenericValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_modules_form_tests_reactive_form_services_metadata_service__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/services/metadata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReactiveFormComponent = (function () {
    function ReactiveFormComponent(fb, dialog, cd, metadataService) {
        this.fb = fb;
        this.dialog = dialog;
        this.cd = cd;
        this.metadataService = metadataService;
        this.pageTitle = "Edit";
        this.complex = [
            {
                key: "1",
                value: "Samford"
            },
            {
                key: "2",
                value: "Son"
            }
        ];
        this.states = [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
        ];
        // Use with the generic validation message class
        this.displayMessage = {};
        var result = this.metadataService.getFormGroupData();
        result.formGroupData.tags = this.fb.array([]);
        this.productForm = this.fb.group(result.formGroupData);
        this.validationMessages = result.validationMessages;
        this.descriptors = result.descriptors;
        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new __WEBPACK_IMPORTED_MODULE_5_app_modules_form_tests_reactive_form_GenericValidator__["a" /* GenericValidator */](this.validationMessages);
    }
    ReactiveFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements.map(function (formControl) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].fromEvent(formControl.nativeElement, "blur");
        });
        // Merge the blur event observable with the valueChanges observable
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"], [this.productForm.valueChanges].concat(controlBlurs)).debounceTime(0)
            .subscribe(function () {
            _this.displayMessage = _this.genericValidator.processMessages(_this.productForm);
        });
    };
    ReactiveFormComponent.prototype.asSelectElementDescriptor = function (descriptor) {
        return descriptor;
    };
    ReactiveFormComponent.prototype.asBooleanElementDescriptor = function (descriptor) {
        return descriptor;
    };
    Object.defineProperty(ReactiveFormComponent.prototype, "tags", {
        get: function () {
            return this.productForm.get("tags");
        },
        enumerable: true,
        configurable: true
    });
    ReactiveFormComponent.prototype.log = function (value) {
        console.log(value);
    };
    ReactiveFormComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4_app_modules_form_tests_reactive_form_DialogResultExampleDialog__["a" /* DialogResultExampleDialogComponent */], {
            height: "90vh",
            width: "100vw"
        });
        dialogRef.afterClosed().subscribe(function () {
            _this.selectedOption = "done";
            _this.cd.detectChanges();
        });
    };
    ReactiveFormComponent.prototype.getStateKey = function (item) {
        return item;
    };
    ReactiveFormComponent.prototype.getStateValue = function (item) {
        return item;
    };
    ReactiveFormComponent.prototype.getComplexKey = function (item) {
        if (!item || !item.key) {
            return "";
        }
        return item.key;
    };
    ReactiveFormComponent.prototype.getComplexValue = function (item) {
        if (!item || !item.value) {
            return "";
        }
        return item.value;
    };
    ReactiveFormComponent.prototype.addTag = function () {
        this.tags.controls.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]());
    };
    ReactiveFormComponent.prototype.deleteTag = function () {
        this.tags.controls.pop();
    };
    ReactiveFormComponent.prototype.cancel = function ($event) {
        console.log("cancel", $event);
    };
    ReactiveFormComponent.prototype.saveProduct = function ($event) {
        console.log("saved", $event);
    };
    ReactiveFormComponent.prototype.deleteProduct = function ($event) {
        console.log("deleted", $event);
    };
    return ReactiveFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControlName */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", Array)
], ReactiveFormComponent.prototype, "formInputElements", void 0);
ReactiveFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "dashboard-reactive-form",
        template: __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/reactive-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/reactive-form.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_app_modules_form_tests_reactive_form_services_metadata_service__["a" /* MetadataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_modules_form_tests_reactive_form_services_metadata_service__["a" /* MetadataService */]) === "function" && _d || Object])
], ReactiveFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reactive-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/form-tests/reactive-form/services/metadata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetadataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/FormInputDescriptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_Validator__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/Validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_form_tests_reactive_form_NumberValidators__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/NumberValidators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_modules_form_tests_reactive_form_metadata_formGroup__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/formGroup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_modules_form_tests_reactive_form_metadata_BooleanElementDescriptor__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/BooleanElementDescriptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_modules_form_tests_reactive_form_metadata_FormElementTypes__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/FormElementTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_modules_form_tests_reactive_form_metadata_LabelPositionTypes__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/LabelPositionTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_modules_form_tests_reactive_form_metadata_SelectElementDescriptor__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/metadata/SelectElementDescriptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_modules_form_tests_reactive_form_EmailValidation__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/EmailValidation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MetadataService = (function () {
    function MetadataService() {
    }
    MetadataService.prototype.getFormGroupData = function () {
        var validationMessages = {};
        var formGroupData = {};
        var descriptors = this.getFormDescriptors();
        descriptors.forEach(function (x) {
            validationMessages[x.formControlName] = {};
            var validators = [];
            if (x instanceof __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]) {
                x.validators.forEach(function (y) {
                    validators.push(y.validator);
                    validationMessages[x.formControlName][y.key] = y.message;
                });
            }
            formGroupData[x.formControlName] = ["", validators];
        });
        var group = new __WEBPACK_IMPORTED_MODULE_5_app_modules_form_tests_reactive_form_metadata_formGroup__["a" /* FormGroupDto */](validationMessages, formGroupData, descriptors);
        return group;
    };
    MetadataService.prototype.getFormDescriptors = function () {
        var descriptors = [];
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("datetest", "date test", "date", []));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("datetime-local", "datetime-local", "datetime-local", []));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("email", "Email Address", "text", [
            new __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_Validator__["a" /* Validator */]("email", __WEBPACK_IMPORTED_MODULE_10_app_modules_form_tests_reactive_form_EmailValidation__["a" /* EmailValidators */].validate(), "A valid email is required.")
        ]));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("month", "month", "month", []));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("number", "number", "number", []));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("password", "password", "password", []));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("search", "search", "search", []));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("tel", "tel", "tel", []));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("time", "time", "time", []));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("url", "URL", "url", [
            new __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_Validator__["a" /* Validator */]("url", __WEBPACK_IMPORTED_MODULE_10_app_modules_form_tests_reactive_form_EmailValidation__["b" /* UrlValidators */].validate(), "A valid URL is required.")
        ]));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("week", "week", "week", []));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("productName", "Product Name", "text", [
            new __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_Validator__["a" /* Validator */]("required", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* Validators */].required, "Product name is required."),
            new __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_Validator__["a" /* Validator */]("minlength", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* Validators */].minLength(3), "Product name must be at least 3 characters."),
            new __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_Validator__["a" /* Validator */]("maxlength", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* Validators */].maxLength(50), "Product name cannot exceed 50 characters.")
        ]));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("productCode", "Product Code", "text", [
            new __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_Validator__["a" /* Validator */]("required", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* Validators */].required, "Product code is required.")
        ]));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("starRating", "Star Rating (1-5)", "number", [
            new __WEBPACK_IMPORTED_MODULE_2_app_modules_form_tests_reactive_form_metadata_Validator__["a" /* Validator */]("range", __WEBPACK_IMPORTED_MODULE_4_app_modules_form_tests_reactive_form_NumberValidators__["a" /* NumberValidators */].range(1, 5), "Rate the product between 1 (lowest) and 5 (highest).")
        ]));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_form_tests_reactive_form_metadata_FormInputDescriptor__["a" /* FormInputDescriptor */]("description", "Description"));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_6_app_modules_form_tests_reactive_form_metadata_BooleanElementDescriptor__["a" /* BooleanElementDescriptor */]("isHappy", "Are you happy?", __WEBPACK_IMPORTED_MODULE_7_app_modules_form_tests_reactive_form_metadata_FormElementTypes__["a" /* FormElementTypes */].Checkbox, __WEBPACK_IMPORTED_MODULE_8_app_modules_form_tests_reactive_form_metadata_LabelPositionTypes__["a" /* LabelPositionTypes */].After, "Good for you!", "Cheer up! You don't have much time left", undefined, false, false));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_6_app_modules_form_tests_reactive_form_metadata_BooleanElementDescriptor__["a" /* BooleanElementDescriptor */]("isWealthy", "Are you Wealthy?", __WEBPACK_IMPORTED_MODULE_7_app_modules_form_tests_reactive_form_metadata_FormElementTypes__["a" /* FormElementTypes */].SlideToggle, __WEBPACK_IMPORTED_MODULE_8_app_modules_form_tests_reactive_form_metadata_LabelPositionTypes__["a" /* LabelPositionTypes */].After, "It won't last!", "Give up and start drinking", undefined, false, false));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_9_app_modules_form_tests_reactive_form_metadata_SelectElementDescriptor__["a" /* SelectElementDescriptor */]("isNice", "is Nice", __WEBPACK_IMPORTED_MODULE_7_app_modules_form_tests_reactive_form_metadata_FormElementTypes__["a" /* FormElementTypes */].Autocomplete, function (x) { return (x ? x.key : ""); }, function (x) { return (x ? x.description : ""); }, [
            { key: "1", description: "Somewhat" },
            { key: "2", description: "Not at all" }
        ]));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_9_app_modules_form_tests_reactive_form_metadata_SelectElementDescriptor__["a" /* SelectElementDescriptor */]("isGood", "is Good", __WEBPACK_IMPORTED_MODULE_7_app_modules_form_tests_reactive_form_metadata_FormElementTypes__["a" /* FormElementTypes */].Select, function (x) { return x.key; }, function (x) { return x.description; }, [
            { key: "1", description: "Somewhat" },
            { key: "2", description: "Not at all" }
        ]));
        descriptors.push(new __WEBPACK_IMPORTED_MODULE_9_app_modules_form_tests_reactive_form_metadata_SelectElementDescriptor__["a" /* SelectElementDescriptor */]("isHealthy", "is Healthy", __WEBPACK_IMPORTED_MODULE_7_app_modules_form_tests_reactive_form_metadata_FormElementTypes__["a" /* FormElementTypes */].Radio, function (x) { return x.key; }, function (x) { return x.description; }, [
            { key: "1", description: "Somewhat" },
            { key: "2", description: "Not at all" }
        ]));
        return descriptors;
    };
    return MetadataService;
}());
MetadataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MetadataService);

//# sourceMappingURL=metadata.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/WebWorkerInteractor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WebWorkerInteractor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);

var WebWorkerInteractor = (function () {
    function WebWorkerInteractor(worker, isInline) {
        if (isInline === void 0) { isInline = false; }
        if (isInline) {
            var js = WebWorkerInteractor.getFromInlineJS(worker);
            this.worker = new Worker(js);
        }
        else {
            this.worker = new Worker(worker);
        }
    }
    /*
      <script type="javascript/worker" id="ww1">...</script>
      contains the worker
    */
    WebWorkerInteractor.getFromInlineJS = function (id) {
        var js = document.getElementById(id).textContent;
        var blob = new Blob([js], { type: "text/plain" });
        return URL.createObjectURL(blob);
    };
    WebWorkerInteractor.prototype.getWorkerMessageStream = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].create(function (observer) {
            _this.worker.onmessage = function (event) {
                observer.next(event);
            };
            return function () { return _this.worker.terminate(); };
        });
    };
    WebWorkerInteractor.prototype.postMessage = function (message) {
        this.worker.postMessage(message);
    };
    return WebWorkerInteractor;
}());

//# sourceMappingURL=WebWorkerInteractor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/index.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/GoogleFinanceService/GoogleFinanceService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GoogleFinanceService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleFinanceService = (function () {
    function GoogleFinanceService(http) {
        this.http = http;
    }
    GoogleFinanceService.prototype.getTickerData = function (masterListTypes) {
        var _this = this;
        var smallLists = [];
        var arraySize = 100;
        var tickers = __WEBPACK_IMPORTED_MODULE_3_lodash__["chain"](masterListTypes)
            .map(function (x) { return x.TickerListItems; })
            .flatMap()
            .map(function (x) { return x.Ticker; })
            .uniqBy(function (x) { return x; })
            .sortBy(function (x) { return x; })
            .value();
        while (tickers.length) {
            var sublist = tickers.splice(0, arraySize);
            smallLists.push(sublist);
        }
        var result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"](smallLists, function (x) { return _this.get(x).retry(2); }));
        return result;
    };
    GoogleFinanceService.prototype.get = function (tickers) {
        var commaDelimitedTickers = __WEBPACK_IMPORTED_MODULE_3_lodash__["reduce"](tickers, function (result, x) { return result + x + ","; }, "");
        commaDelimitedTickers = commaDelimitedTickers.replace(/,\s*$/, "");
        var url = "http://www.google.com/finance/info?infotype=infoquoteall&q=" + commaDelimitedTickers;
        return this.http.get(url);
    };
    return GoogleFinanceService;
}());
GoogleFinanceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], GoogleFinanceService);

var _a;
//# sourceMappingURL=GoogleFinanceService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/GoogleFinanceService/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GoogleFinanceService__ = __webpack_require__("../../../../../src/app/shared/dataServices/GoogleFinanceService/GoogleFinanceService.ts");
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/GoogleSheetsService/CompanyInfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CompanyInformation */
var CompanyInformation = (function () {
    function CompanyInformation() {
    }
    return CompanyInformation;
}());

//# sourceMappingURL=CompanyInfo.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/GoogleSheetsService/GoogleSheetsAdapterMap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleSheetsAdapterMap; });
var GoogleSheetsAdapterMap = (function () {
    function GoogleSheetsAdapterMap() {
        GoogleSheetsAdapterMap.map["masterSheetAdapter"] =
            GoogleSheetsAdapterMap.masterSheetAdapter;
        GoogleSheetsAdapterMap.map["commonAdapter"] =
            GoogleSheetsAdapterMap.commonAdapter;
    }
    GoogleSheetsAdapterMap.masterSheetAdapter = function (items) {
        var result = [];
        if (items.length === 0) {
            return [];
        }
        for (var i = 1; i < items.length; i++) {
            var row = items[i];
            var item = {
                title: row[0],
                sheetId: row[1],
                adapter: row[2],
                isActive: row[3],
                range: row[4]
            };
            result.push(item);
        }
        return result;
    };
    GoogleSheetsAdapterMap.commonAdapter = function (items) {
        var result = [];
        if (items.length === 0) {
            return [];
        }
        for (var i = 0; i < items.length; i++) {
            var row = items[i];
            var item = {
                category: row[0],
                ticker: row[1],
                isActive: row[2],
                Name: row[3]
            };
            result.push(item);
        }
        return result;
    };
    return GoogleSheetsAdapterMap;
}());

GoogleSheetsAdapterMap.map = {};
//# sourceMappingURL=GoogleSheetsAdapterMap.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/GoogleSheetsService/GoogleSheetsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleSheetsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GoogleSheetsAdapterMap__ = __webpack_require__("../../../../../src/app/shared/dataServices/GoogleSheetsService/GoogleSheetsAdapterMap.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleSheetsService = (function () {
    function GoogleSheetsService() {
        this.token = false;
        this.CLIENT_ID = "844875982113-om6hos1ao3obpsoqhae3eo6b6meueqro.apps.googleusercontent.com";
        this.SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
        this.adapters = new __WEBPACK_IMPORTED_MODULE_2__GoogleSheetsAdapterMap__["a" /* GoogleSheetsAdapterMap */]();
        this.mainsheet = {
            sheetId: "1XEoflheZAvbtpyBBs5TIuf-E2DpLRmCTMW_A_tctKS4",
            range: "Sheet1!A1:E",
            adapter: "masterSheetAdapter"
        };
        this.token = false;
    }
    GoogleSheetsService.prototype.getMasterSheetData = function () {
        if (!this.token) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].empty();
        }
        var wrappedCallback = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].bindCallback(this.callSheetsApi);
        return wrappedCallback(this.mainsheet);
    };
    GoogleSheetsService.prototype.getSheetData = function (sheetInfo) {
        if (!this.token) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].empty();
        }
        var wrappedCallback = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].bindCallback(this.callSheetsApi);
        return wrappedCallback(sheetInfo);
    };
    GoogleSheetsService.prototype.callSheetsApi = function (sheetInfo, callback) {
        gapi.client
            .load("https://sheets.googleapis.com/$discovery/rest?version=v4")
            .then(function () {
            gapi.client.sheets.spreadsheets.values
                .get({
                spreadsheetId: sheetInfo.sheetId,
                range: sheetInfo.range
            })
                .then(function (response) {
                var values = response.result.values;
                var func = __WEBPACK_IMPORTED_MODULE_2__GoogleSheetsAdapterMap__["a" /* GoogleSheetsAdapterMap */].map[sheetInfo.adapter];
                var result = func(values);
                callback({
                    response: result,
                    sheetInfo: sheetInfo
                });
            }, function (response) {
                console.error("Error: " + response.result.error.message);
            });
        });
    };
    GoogleSheetsService.prototype.handleAuthResult = function (authResult, callback) {
        if (authResult) {
            this.token = authResult;
            callback(this.token);
        }
    };
    GoogleSheetsService.prototype.checkAuth = function (immediate, callback) {
        var _this = this;
        gapi.auth.authorize({
            client_id: this.CLIENT_ID,
            scope: this.SCOPES.join(" "),
            immediate: !immediate
        }, function (authResult) { return _this.handleAuthResult(authResult, callback); });
        return false;
    };
    return GoogleSheetsService;
}());
GoogleSheetsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GoogleSheetsService);

//# sourceMappingURL=GoogleSheetsService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/GoogleSheetsService/MasterListItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StockListHeader */
var StockListHeader = (function () {
    function StockListHeader() {
    }
    return StockListHeader;
}());

//# sourceMappingURL=MasterListItem.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/GoogleSheetsService/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GoogleSheetsAdapterMap__ = __webpack_require__("../../../../../src/app/shared/dataServices/GoogleSheetsService/GoogleSheetsAdapterMap.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GoogleSheetsService__ = __webpack_require__("../../../../../src/app/shared/dataServices/GoogleSheetsService/GoogleSheetsService.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__GoogleSheetsService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CompanyInfo__ = __webpack_require__("../../../../../src/app/shared/dataServices/GoogleSheetsService/CompanyInfo.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MasterListItem__ = __webpack_require__("../../../../../src/app/shared/dataServices/GoogleSheetsService/MasterListItem.ts");
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/SignalR/signalRService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SignalrWindow */
/* unused harmony export ConnectionState */
/* unused harmony export ChannelConfig */
/* unused harmony export ChannelEvent */
/* unused harmony export ChannelService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * When SignalR runs it will add functions to the global $ variable
 * that you use to create connections to the hub. However, in this
 * class we won't want to depend on any global variables, so this
 * class provides an abstraction away from using $ directly in here.
 */
var SignalrWindow = (function (_super) {
    __extends(SignalrWindow, _super);
    function SignalrWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SignalrWindow;
}(Window));

var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["Connecting"] = 1] = "Connecting";
    ConnectionState[ConnectionState["Connected"] = 2] = "Connected";
    ConnectionState[ConnectionState["Reconnecting"] = 3] = "Reconnecting";
    ConnectionState[ConnectionState["Disconnected"] = 4] = "Disconnected";
})(ConnectionState || (ConnectionState = {}));
var ChannelConfig = (function () {
    function ChannelConfig() {
    }
    return ChannelConfig;
}());

var ChannelEvent = (function () {
    function ChannelEvent() {
        this.Timestamp = new Date();
    }
    return ChannelEvent;
}());

var ChannelSubject = (function () {
    function ChannelSubject() {
    }
    return ChannelSubject;
}());
/**
 * ChannelService is a wrapper around the functionality that SignalR
 * provides to expose the ideas of channels and events. With this service
 * you can subscribe to specific channels (or groups in signalr speak) and
 * use observables to react to specific events sent out on those channels.
 */
var ChannelService = (function () {
    function ChannelService(window) {
        var _this = this;
        this.window = window;
        // These are used to feed the public observables
        //
        this.connectionStateSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.startingSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.errorSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // An internal array to track what channel subscriptions exist
        //
        this.subjects = new Array();
        if (this.window.$ === undefined ||
            this.window.$.hubConnection === undefined) {
            throw new Error("The variable '$' or the .hubConnection() function are not defined...please check the SignalR scripts have been loaded properly");
        }
        // Set up our observables
        this.connectionState$ = this.connectionStateSubject.asObservable();
        this.error$ = this.errorSubject.asObservable();
        this.starting$ = this.startingSubject.asObservable();
        this.hubConnection = this.window.$.hubConnection();
        // this.hubConnection.url = channelConfig.url;
        // this.hubProxy = this.hubConnection.createHubProxy(channelConfig.hubName);
        // Define handlers for the connection state events
        this.hubConnection.stateChanged(function (state) {
            var newState = ConnectionState.Connecting;
            switch (state.newState) {
                case _this.window.$.signalR.connectionState.connecting:
                    newState = ConnectionState.Connecting;
                    break;
                case _this.window.$.signalR.connectionState.connected:
                    newState = ConnectionState.Connected;
                    break;
                case _this.window.$.signalR.connectionState.reconnecting:
                    newState = ConnectionState.Reconnecting;
                    break;
                case _this.window.$.signalR.connectionState.disconnected:
                    newState = ConnectionState.Disconnected;
                    break;
            }
            // Push the new state on our subject
            _this.connectionStateSubject.next(newState);
        });
        // Define handlers for any errors
        this.hubConnection.error(function (error) {
            // Push the error on our subject
            _this.errorSubject.next(error);
        });
        this.hubProxy.on("onEvent", function (channel, ev) {
            // console.log(`onEvent - ${channel} channel`, ev);
            // This method acts like a broker for incoming messages. We
            //  check the interal array of subjects to see if one exists
            //  for the channel this came in on, and then emit the event
            //  on it. Otherwise we ignore the message.
            var channelSub = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](_this.subjects, function (x) {
                return x.channel === channel;
            });
            // If we found a subject then emit the event on it
            if (channelSub !== undefined) {
                return channelSub.subject.next(ev);
            }
        });
    }
    /**
     * Start the SignalR connection. The starting$ stream will emit an
     * event if the connection is established, otherwise it will emit an
     * error.
     */
    ChannelService.prototype.start = function () {
        var _this = this;
        // Now we only want the connection started once, so we have a special
        //  starting$ observable that clients can subscribe to know know if
        //  if the startup sequence is done.
        //
        // If we just mapped the start() promise to an observable, then any time
        //  a client subscried to it the start sequence would be triggered
        //  again since it's a cold observable.
        //
        this.hubConnection
            .start()
            .done(function () {
            _this.startingSubject.next("hubConnection.start().done()");
        })
            .fail(function (error) {
            _this.startingSubject.error(error);
        });
    };
    /**
     * Get an observable that will contain the data associated with a specific
     * channel
     * */
    ChannelService.prototype.sub = function (channel) {
        var _this = this;
        // Try to find an observable that we already created for the requested
        //  channel
        var channelSub = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.subjects, function (x) {
            return x.channel === channel;
        });
        // If we already have one for this event, then just return it
        //
        if (channelSub !== undefined) {
            console.log("Found existing observable for " + channel + " channel");
            return channelSub.subject.asObservable();
        }
        // If we're here then we don't already have the observable to provide the
        //  caller, so we need to call the server method to join the channel
        //  and then create an observable that the caller can use to received
        //  messages.
        // Now we just create our internal object so we can track this subject
        //  in case someone else wants it too
        channelSub = new ChannelSubject();
        channelSub.channel = channel;
        channelSub.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.subjects.push(channelSub);
        // Now SignalR is asynchronous, so we need to ensure the connection is
        //  established before we call any server methods. So we'll subscribe to
        //  the starting$ stream since that won't emit a value until the connection
        //  is ready
        this.starting$.subscribe(function () {
            _this.hubProxy
                .invoke("Subscribe", channel)
                .done(function () {
                console.log("Successfully subscribed to " + channel + " channel");
            })
                .fail(function (error) {
                channelSub.subject.error(error);
            });
        }, function (error) {
            channelSub.subject.error(error);
        });
        return channelSub.subject.asObservable();
    };
    // Not quite sure how to handle this (if at all) since there could be
    //  more than 1 caller subscribed to an observable we created
    //
    // unsubscribe(channel: string): Rx.Observable<any> {
    //     this.observables = this.observables.filter((x: ChannelObservable) => {
    //         return x.channel === channel;
    //     });
    // }
    /** publish provides a way for calles to emit events on any channel. In a
     * production app the server would ensure that only authorized clients can
     * actually emit the message, but here we're not concerned about that.
     */
    ChannelService.prototype.publish = function (ev) {
        this.hubProxy.invoke("Publish", ev);
    };
    return ChannelService;
}());
ChannelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(SignalrWindow)),
    __metadata("design:paramtypes", [SignalrWindow])
], ChannelService);

//# sourceMappingURL=signalRService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GoogleFinanceService__ = __webpack_require__("../../../../../src/app/shared/dataServices/GoogleFinanceService/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GoogleSheetsService__ = __webpack_require__("../../../../../src/app/shared/dataServices/GoogleSheetsService/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "GoogleSheetsService", function() { return __WEBPACK_IMPORTED_MODULE_1__GoogleSheetsService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SignalR_signalRService__ = __webpack_require__("../../../../../src/app/shared/dataServices/SignalR/signalRService.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__webSockets__ = __webpack_require__("../../../../../src/app/shared/dataServices/webSockets/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__yahooDataService__ = __webpack_require__("../../../../../src/app/shared/dataServices/yahooDataService/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__yahooDataService__, "Actions")) __webpack_require__.d(__webpack_exports__, "Actions", function() { return __WEBPACK_IMPORTED_MODULE_4__yahooDataService__["Actions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__yahooDataService__, "CustomErrorHandler")) __webpack_require__.d(__webpack_exports__, "CustomErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_4__yahooDataService__["CustomErrorHandler"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__yahooDataService__, "StockAnalysisService")) __webpack_require__.d(__webpack_exports__, "StockAnalysisService", function() { return __WEBPACK_IMPORTED_MODULE_4__yahooDataService__["StockAnalysisService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__yahooDataService__, "YahooDataService")) __webpack_require__.d(__webpack_exports__, "YahooDataService", function() { return __WEBPACK_IMPORTED_MODULE_4__yahooDataService__["YahooDataService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__yahooDataService__, "store")) __webpack_require__.d(__webpack_exports__, "store", function() { return __WEBPACK_IMPORTED_MODULE_4__yahooDataService__["store"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/webSockets/SocketIoInteractor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SocketIoInteractor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);

var SocketIoInteractor = (function () {
    function SocketIoInteractor(url, defaultEventName) {
        this.defaultEventName = defaultEventName;
        // check that url and eventName are valid
        this.socket = io.connect(url);
    }
    SocketIoInteractor.prototype.getEventStream = function (eventName) {
        var _this = this;
        if (eventName === void 0) { eventName = this.defaultEventName; }
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].create(function (observer) {
            _this.socket.on(eventName, function (data) {
                observer.next(data);
            });
            return { dispose: io.close };
        });
    };
    SocketIoInteractor.prototype.sendMessage = function (message, eventName) {
        if (eventName === void 0) { eventName = this.defaultEventName; }
        this.socket.emit(eventName, message);
    };
    return SocketIoInteractor;
}());

//# sourceMappingURL=SocketIoInteractor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/webSockets/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SocketIoInteractor__ = __webpack_require__("../../../../../src/app/shared/dataServices/webSockets/SocketIoInteractor.ts");
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/yahooDataService/YahooDataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YahooDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YahooDataService = (function () {
    function YahooDataService(http) {
        this.http = http;
    }
    YahooDataService.prototype.getTickerData = function (companyInformation, columns) {
        var _this = this;
        if (columns === void 0) { columns = "*"; }
        var smallLists = [];
        var arraySize = 100;
        var tickers = __WEBPACK_IMPORTED_MODULE_3_lodash__["chain"](companyInformation)
            .map(function (x) { return x.ticker; })
            .uniqBy(function (x) { return x; })
            .value();
        while (tickers.length) {
            var sublist = tickers.splice(0, arraySize);
            smallLists.push(sublist);
        }
        var result = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(__WEBPACK_IMPORTED_MODULE_3_lodash__["flatMap"](smallLists, function (x) { return _this.get(x, columns); }));
        return result;
    };
    YahooDataService.prototype.get = function (tickers, columns) {
        if (columns === void 0) { columns = "*"; }
        var commaDelimitedTickers = __WEBPACK_IMPORTED_MODULE_3_lodash__["reduce"](tickers, function (result, x) { return result + x + ","; }, "");
        commaDelimitedTickers = commaDelimitedTickers.replace(/,\s*$/, "");
        // averageDailyVolume symbol name lastTradePriceOnly
        var query = encodeURIComponent("select " + columns + " from yahoo.finance.quotes where symbol in ('" + commaDelimitedTickers + "')");
        var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        return this.http
            .get(url)
            .map(function (x) {
            var body = x["_body"];
            var yahooFinanceResult = JSON.parse(body);
            return yahooFinanceResult.query.results.quote;
        })
            .retryWhen(this.retryStrategy({ attempts: 3, delay: 1500 }));
    };
    YahooDataService.prototype.retryStrategy = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.attempts, attempts = _c === void 0 ? 4 : _c, _d = _b.delay, delay = _d === void 0 ? 1000 : _d;
        return function (errors) {
            return errors
                .scan(function (acc, value) {
                acc += 1;
                if (acc < attempts) {
                    return acc;
                }
                else {
                    throw new Error(value);
                }
            }, 0)
                .delay(delay);
        };
    };
    return YahooDataService;
}());
YahooDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], YahooDataService);

var _a;
//# sourceMappingURL=YahooDataService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/yahooDataService/YahooQuote.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=YahooQuote.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dataServices/yahooDataService/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__YahooDataService__ = __webpack_require__("../../../../../src/app/shared/dataServices/yahooDataService/YahooDataService.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "YahooDataService", function() { return __WEBPACK_IMPORTED_MODULE_0__YahooDataService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__YahooQuote__ = __webpack_require__("../../../../../src/app/shared/dataServices/yahooDataService/YahooQuote.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__YahooQuote___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__YahooQuote__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__YahooQuote__, "Actions")) __webpack_require__.d(__webpack_exports__, "Actions", function() { return __WEBPACK_IMPORTED_MODULE_1__YahooQuote__["Actions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__YahooQuote__, "CustomErrorHandler")) __webpack_require__.d(__webpack_exports__, "CustomErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__YahooQuote__["CustomErrorHandler"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__YahooQuote__, "StockAnalysisService")) __webpack_require__.d(__webpack_exports__, "StockAnalysisService", function() { return __WEBPACK_IMPORTED_MODULE_1__YahooQuote__["StockAnalysisService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__YahooQuote__, "store")) __webpack_require__.d(__webpack_exports__, "store", function() { return __WEBPACK_IMPORTED_MODULE_1__YahooQuote__["store"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/MaterialDesignLiteUpgradeElement.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MdlDirective = (function () {
    function MdlDirective() {
    }
    MdlDirective.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeAllRegistered();
    };
    return MdlDirective;
}());
MdlDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[mdl]"
    })
], MdlDirective);

//# sourceMappingURL=MaterialDesignLiteUpgradeElement.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MaterialDesignLiteUpgradeElement__ = __webpack_require__("../../../../../src/app/shared/directives/MaterialDesignLiteUpgradeElement.ts");
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/errorHandling/customErrorHandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomErrorHandler = (function (_super) {
    __extends(CustomErrorHandler, _super);
    function CustomErrorHandler() {
        return _super.call(this) || this;
    }
    CustomErrorHandler.prototype.handleError = function (error) {
        var customError = {
            timestamp: new Date().toISOString(),
            message: error.message,
            zone: error.zone,
            task: error.task,
            zoneAwareStack: error.zoneAwareStack,
            rejection: error.rejection
        };
        console.error("Error:", customError);
    };
    return CustomErrorHandler;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"]));
CustomErrorHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CustomErrorHandler);

//# sourceMappingURL=customErrorHandler.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__("../../../../../src/app/shared/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__components__, "Actions")) __webpack_require__.d(__webpack_exports__, "Actions", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["Actions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__components__, "CustomErrorHandler")) __webpack_require__.d(__webpack_exports__, "CustomErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["CustomErrorHandler"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__components__, "GoogleSheetsService")) __webpack_require__.d(__webpack_exports__, "GoogleSheetsService", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["GoogleSheetsService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__components__, "StockAnalysisService")) __webpack_require__.d(__webpack_exports__, "StockAnalysisService", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["StockAnalysisService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__components__, "YahooDataService")) __webpack_require__.d(__webpack_exports__, "YahooDataService", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["YahooDataService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__components__, "store")) __webpack_require__.d(__webpack_exports__, "store", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["store"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataServices__ = __webpack_require__("../../../../../src/app/shared/dataServices/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__dataServices__, "Actions")) __webpack_require__.d(__webpack_exports__, "Actions", function() { return __WEBPACK_IMPORTED_MODULE_1__dataServices__["Actions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__dataServices__, "CustomErrorHandler")) __webpack_require__.d(__webpack_exports__, "CustomErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__dataServices__["CustomErrorHandler"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__dataServices__, "GoogleSheetsService")) __webpack_require__.d(__webpack_exports__, "GoogleSheetsService", function() { return __WEBPACK_IMPORTED_MODULE_1__dataServices__["GoogleSheetsService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__dataServices__, "StockAnalysisService")) __webpack_require__.d(__webpack_exports__, "StockAnalysisService", function() { return __WEBPACK_IMPORTED_MODULE_1__dataServices__["StockAnalysisService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__dataServices__, "YahooDataService")) __webpack_require__.d(__webpack_exports__, "YahooDataService", function() { return __WEBPACK_IMPORTED_MODULE_1__dataServices__["YahooDataService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__dataServices__, "store")) __webpack_require__.d(__webpack_exports__, "store", function() { return __WEBPACK_IMPORTED_MODULE_1__dataServices__["store"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__("../../../../../src/app/shared/directives/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorHandling_customErrorHandler__ = __webpack_require__("../../../../../src/app/shared/errorHandling/customErrorHandler.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "CustomErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_3__errorHandling_customErrorHandler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__key_codes__ = __webpack_require__("../../../../../src/app/shared/key_codes.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modelServices__ = __webpack_require__("../../../../../src/app/shared/modelServices/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "StockAnalysisService", function() { return __WEBPACK_IMPORTED_MODULE_5__modelServices__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes__ = __webpack_require__("../../../../../src/app/shared/pipes/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux__ = __webpack_require__("../../../../../src/app/shared/redux/index.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__redux__, "Actions")) __webpack_require__.d(__webpack_exports__, "Actions", function() { return __WEBPACK_IMPORTED_MODULE_7__redux__["Actions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__redux__, "GoogleSheetsService")) __webpack_require__.d(__webpack_exports__, "GoogleSheetsService", function() { return __WEBPACK_IMPORTED_MODULE_7__redux__["GoogleSheetsService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__redux__, "YahooDataService")) __webpack_require__.d(__webpack_exports__, "YahooDataService", function() { return __WEBPACK_IMPORTED_MODULE_7__redux__["YahooDataService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__redux__, "store")) __webpack_require__.d(__webpack_exports__, "store", function() { return __WEBPACK_IMPORTED_MODULE_7__redux__["store"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__security__ = __webpack_require__("../../../../../src/app/shared/security/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WebWorkerInteractor__ = __webpack_require__("../../../../../src/app/shared/WebWorkerInteractor.ts");
/* unused harmony namespace reexport */










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/key_codes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KeyCodes */
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["ESCAPE"] = 27] = "ESCAPE";
    KeyCodes[KeyCodes["SPACE"] = 32] = "SPACE";
    KeyCodes[KeyCodes["UP"] = 38] = "UP";
    KeyCodes[KeyCodes["DOWN"] = 40] = "DOWN";
})(KeyCodes || (KeyCodes = {}));
//# sourceMappingURL=key_codes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modelServices/ImmutableService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmutableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ImmutableService = (function () {
    function ImmutableService() {
    }
    ImmutableService.prototype.setPropertyOnImmutable = function (object, field, value) {
        var immutableMap = Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])(object);
        var alteredInstance = immutableMap.set(field, value);
        var result = alteredInstance.toJS();
        return result;
    };
    return ImmutableService;
}());
ImmutableService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ImmutableService);

//# sourceMappingURL=ImmutableService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modelServices/LocalStorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LocalStorageService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.getItem = function (key) {
        var stringResult = localStorage.getItem(key);
        if (stringResult != null) {
            var result = JSON.parse(stringResult);
            return result;
        }
        return null;
    };
    LocalStorageService.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LocalStorageService);

//# sourceMappingURL=LocalStorage.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modelServices/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LocalStorage__ = __webpack_require__("../../../../../src/app/shared/modelServices/LocalStorage.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stockAnalysisService__ = __webpack_require__("../../../../../src/app/shared/modelServices/stockAnalysisService.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__stockAnalysisService__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modelServices/stockAnalysisService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockAnalysisService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var defaultValue = -1;
var StockAnalysisService = (function () {
    function StockAnalysisService() {
    }
    StockAnalysisService.prototype.decorateQuote = function (yahooQuote, category) {
        yahooQuote.PriceBook = yahooQuote.PriceBook
            ? parseFloat(yahooQuote.PriceBook.toString())
            : defaultValue;
        yahooQuote.PriceSales = yahooQuote.PriceSales
            ? parseFloat(yahooQuote.PriceSales.toString())
            : defaultValue;
        yahooQuote.PERatio = yahooQuote.PERatio
            ? parseFloat(yahooQuote.PERatio.toString())
            : defaultValue;
        yahooQuote.PEGRatio = yahooQuote.PEGRatio
            ? parseFloat(yahooQuote.PEGRatio.toString())
            : defaultValue;
        yahooQuote.DividendYield = yahooQuote.DividendYield
            ? parseFloat(yahooQuote.DividendYield.toString())
            : defaultValue;
        yahooQuote.DividendShare = yahooQuote.DividendShare
            ? parseFloat(yahooQuote.DividendShare.toString())
            : defaultValue;
        yahooQuote.EarningsShare = yahooQuote.EarningsShare
            ? parseFloat(yahooQuote.EarningsShare.toString())
            : defaultValue;
        var quote = JSON.parse(JSON.stringify(yahooQuote));
        quote.MarketCapitalization = !quote.MarketCapitalization
            ? -1
            : quote.MarketCapitalization;
        quote.tickerLabel = this.buildTickerLabel(quote);
        quote.ExDividendDate = this.adjustDividendDate(quote.ExDividendDate);
        quote.projectedEpsGrowth = this.calculateProjectedEpsGrowth(quote);
        quote.regressionPotential = this.calculateRegressionPotential(quote);
        quote.relativeVolume = this.calculateRelativeVolume(quote);
        quote.mood = this.evaluateSeriesData(quote);
        quote.movingAverageMeaning = this.MovingAvgMeaning(quote);
        quote.dailyPercentChange = this.getDailyPercentChange(quote);
        quote.grahamBuffettRatio = this.getGrahamBuffettRatio(quote);
        quote.fundamentalAggregateNumber = this.evaluateFundamentalData(quote);
        quote.group = category;
        quote.impact = quote.dailyPercentChange * quote.relativeVolume / 100;
        return quote;
    };
    StockAnalysisService.prototype.calculateProjectedEpsGrowth = function (yahooQuote) {
        var tmp = yahooQuote.EPSEstimateNextYear / yahooQuote.EPSEstimateCurrentYear;
        var relativeVolume = +((tmp - 1) * 100).toFixed(0);
        return relativeVolume;
    };
    StockAnalysisService.prototype.calculateRegressionPotential = function (yahooQuote) {
        var relativeVolume = +((yahooQuote.YearHigh /
            yahooQuote.LastTradePriceOnly -
            1) *
            100).toFixed(0);
        return relativeVolume;
    };
    StockAnalysisService.prototype.calculateRelativeVolume = function (yahooQuote) {
        var relativeVolume = +(yahooQuote.Volume /
            yahooQuote.AverageDailyVolume *
            100).toFixed(0);
        return relativeVolume;
    };
    StockAnalysisService.prototype.buildTickerLabel = function (yahooQuote) {
        var value = yahooQuote.MarketCapitalization > 1000
            ? (yahooQuote.MarketCapitalization / 1000).toString() + "B"
            : yahooQuote.MarketCapitalization.toString() + "M";
        value = value === "-1M" ? "" : yahooQuote.MarketCapitalization.toString();
        var label = yahooQuote.Symbol + " " + value;
        return label;
    };
    StockAnalysisService.prototype.adjustDividendDate = function (dateText) {
        if (!dateText) {
            return dateText;
        }
        var date = new Date(dateText);
        var x = 3; // or whatever offset
        date.setMonth(date.getMonth() + x);
        var result = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
        return result;
    };
    StockAnalysisService.prototype.MovingAvgMeaning = function (yahooQuote) {
        var value = (yahooQuote.OneyrTargetPrice
            ? "(" +
                Math.round((yahooQuote.OneyrTargetPrice / yahooQuote.LastTradePriceOnly - 1) *
                    100) +
                "% Target:" +
                yahooQuote.OneyrTargetPrice +
                ", "
            : "(") +
            "MA50:" +
            yahooQuote.PercentChangeFromFiftydayMovingAverage +
            ") " +
            this.evaluateSeriesData(yahooQuote).text;
        return value;
    };
    StockAnalysisService.prototype.getDailyPercentChange = function (yahooQuote) {
        return +((yahooQuote.LastTradePriceOnly / yahooQuote.PreviousClose - 1) *
            100).toFixed(2);
    };
    StockAnalysisService.prototype.getGrahamBuffettRatio = function (yahooQuote) {
        var value = +(22.5 /
            (yahooQuote.PriceBook * yahooQuote.PERatio) *
            100).toFixed(2);
        return value;
    };
    StockAnalysisService.prototype.evaluateFundamentalData = function (yahooQuote) {
        yahooQuote.PriceSales = parseFloat(yahooQuote.PriceSales.toString());
        yahooQuote.EarningsShare = parseFloat(yahooQuote.EarningsShare.toString());
        yahooQuote.DividendShare = parseFloat(yahooQuote.DividendShare.toString());
        var result = +((yahooQuote.EarningsShare + yahooQuote.DividendShare) /
            yahooQuote.PriceSales).toFixed(2);
        return result;
    };
    StockAnalysisService.prototype.evaluateSeriesData = function (yahooQuote) {
        var emptyString = "";
        var labelInfo = "";
        var labelSuccess = "primary";
        var labelWarning = "accent";
        var labelDanger = "warn";
        var mood = {
            text: emptyString,
            cssClass: emptyString
        };
        var isTargetPriceAboveCurrent = yahooQuote.LastTradePriceOnly < yahooQuote.OneyrTargetPrice;
        var isAboveMacd50 = yahooQuote.PercentChangeFromFiftydayMovingAverage &&
            yahooQuote.PercentChangeFromFiftydayMovingAverage.toString().charAt(0) ===
                "+";
        var isAboveMacd200 = yahooQuote.PercentChangeFromTwoHundreddayMovingAverage &&
            yahooQuote.PercentChangeFromTwoHundreddayMovingAverage
                .toString()
                .charAt(0) === "+";
        if (!yahooQuote.LastTradePriceOnly ||
            !yahooQuote.PercentChangeFromFiftydayMovingAverage ||
            !yahooQuote.PercentChangeFromTwoHundreddayMovingAverage) {
            return {
                text: emptyString,
                cssClass: labelInfo
            };
        }
        if (isTargetPriceAboveCurrent && isAboveMacd50 && isAboveMacd200) {
            mood = {
                text: "Strong uptrend" +
                    (yahooQuote.OneyrTargetPrice
                        ? ": Expected to outperform."
                        : emptyString),
                cssClass: yahooQuote.OneyrTargetPrice ? labelSuccess : labelInfo
            };
        }
        else {
            if (!isTargetPriceAboveCurrent && isAboveMacd50 && isAboveMacd200) {
                mood = {
                    text: "Strong uptrend" +
                        (yahooQuote.OneyrTargetPrice
                            ? ": Expected to under-perform."
                            : emptyString),
                    cssClass: yahooQuote.OneyrTargetPrice ? labelWarning : labelInfo
                };
            }
            else if (isTargetPriceAboveCurrent &&
                isAboveMacd50 &&
                !isAboveMacd200) {
                mood = {
                    text: "recovering from long-term fall" +
                        (yahooQuote.OneyrTargetPrice
                            ? ": Expected to continue recovery."
                            : emptyString),
                    cssClass: yahooQuote.OneyrTargetPrice ? labelSuccess : labelInfo
                };
            }
            else {
                if (!isTargetPriceAboveCurrent && isAboveMacd50 && !isAboveMacd200) {
                    mood = {
                        text: "recovering from long-term fall" +
                            (yahooQuote.OneyrTargetPrice
                                ? ": Expected to move back lower"
                                : emptyString),
                        cssClass: yahooQuote.OneyrTargetPrice ? labelDanger : labelInfo
                    };
                }
                else if (isTargetPriceAboveCurrent &&
                    !isAboveMacd50 &&
                    isAboveMacd200) {
                    mood = {
                        text: "near-term falling off after strong growth" +
                            (yahooQuote.OneyrTargetPrice
                                ? ": Expected to resume rally."
                                : emptyString),
                        cssClass: yahooQuote.OneyrTargetPrice ? labelSuccess : labelInfo
                    };
                }
                else if (!isTargetPriceAboveCurrent &&
                    !isAboveMacd50 &&
                    isAboveMacd200) {
                    mood = {
                        text: "near-term falling off after strong growth" +
                            (yahooQuote.OneyrTargetPrice
                                ? ": Expected to continue moving lower."
                                : emptyString),
                        cssClass: yahooQuote.OneyrTargetPrice ? labelDanger : labelInfo
                    };
                }
                else if (isTargetPriceAboveCurrent &&
                    !isAboveMacd50 &&
                    !isAboveMacd200) {
                    mood = {
                        text: "strong long-term downtrend" +
                            (yahooQuote.OneyrTargetPrice
                                ? ": Expected to begin recovery."
                                : emptyString),
                        cssClass: yahooQuote.OneyrTargetPrice ? labelWarning : labelInfo
                    };
                }
                else if (!isTargetPriceAboveCurrent &&
                    !isAboveMacd50 &&
                    !isAboveMacd200) {
                    mood = {
                        text: "strong long-term downtrend" +
                            (yahooQuote.OneyrTargetPrice
                                ? ": Continued collapse expected."
                                : emptyString),
                        cssClass: yahooQuote.OneyrTargetPrice ? labelDanger : labelInfo
                    };
                }
            }
        }
        return mood;
    };
    return StockAnalysisService;
}());
StockAnalysisService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], StockAnalysisService);

//# sourceMappingURL=stockAnalysisService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/capitalize/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (!value) {
            return value;
        }
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: "capitalize"
    })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize_capitalize_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/capitalize/capitalize.pipe.ts");
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/redux/BaseReducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseReducer; });
var BaseReducer = (function () {
    function BaseReducer() {
    }
    BaseReducer.prototype.updateObject = function (old, changes) {
        return Object.assign({}, old, changes);
    };
    return BaseReducer;
}());

//# sourceMappingURL=BaseReducer.js.map

/***/ }),

/***/ "../../../../../src/app/shared/redux/IAppState.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=IAppState.js.map

/***/ }),

/***/ "../../../../../src/app/shared/redux/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_modules_StockDashboardModule_StockDashboardActions__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/StockDashboardActions.ts");

var Actions = (function () {
    function Actions() {
    }
    return Actions;
}());

Actions.StockDashboardActions = new __WEBPACK_IMPORTED_MODULE_0_app_modules_StockDashboardModule_StockDashboardActions__["a" /* StockDashboardActions */]();
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/shared/redux/freezeState.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = freezeState;
function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop) &&
            o[prop] !== null &&
            typeof o[prop] === "object" &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}
function freezeState(store) {
    return function (next) { return function (action) {
        var result = next(action);
        var state = store.getState();
        deepFreeze(state);
        return result;
    }; };
}
//# sourceMappingURL=freezeState.js.map

/***/ }),

/***/ "../../../../../src/app/shared/redux/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/shared/redux/actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IAppState__ = __webpack_require__("../../../../../src/app/shared/redux/IAppState.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IAppState___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__IAppState__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__IAppState__, "GoogleSheetsService")) __webpack_require__.d(__webpack_exports__, "GoogleSheetsService", function() { return __WEBPACK_IMPORTED_MODULE_1__IAppState__["GoogleSheetsService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__IAppState__, "YahooDataService")) __webpack_require__.d(__webpack_exports__, "YahooDataService", function() { return __WEBPACK_IMPORTED_MODULE_1__IAppState__["YahooDataService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__IAppState__, "store")) __webpack_require__.d(__webpack_exports__, "store", function() { return __WEBPACK_IMPORTED_MODULE_1__IAppState__["store"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rootReducer__ = __webpack_require__("../../../../../src/app/shared/redux/rootReducer.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("../../../../../src/app/shared/redux/store.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "store", function() { return __WEBPACK_IMPORTED_MODULE_3__store__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/redux/rootReducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_modules_StockDashboardModule_models__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_modules_StockDashboardModule_StockDashboardReducer__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/StockDashboardReducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_redux_BaseReducer__ = __webpack_require__("../../../../../src/app/shared/redux/BaseReducer.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RootReducer = (function (_super) {
    __extends(RootReducer, _super);
    function RootReducer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootReducer.reducer = function (state, action) {
        if (state === void 0) { state = RootReducer.initialState; }
        var modifiedState = RootReducer.stockDashboardReducerService.reducer(state, action);
        if (modifiedState !== state) {
            return modifiedState;
        }
        switch (action.type) {
            default:
                return state;
        }
    };
    return RootReducer;
}(__WEBPACK_IMPORTED_MODULE_2_app_shared_redux_BaseReducer__["a" /* BaseReducer */]));

RootReducer.stockDashboardReducerService = new __WEBPACK_IMPORTED_MODULE_1_app_modules_StockDashboardModule_StockDashboardReducer__["a" /* StockDashboardReducer */]();
RootReducer.initialState = {
    groupedYahooResults: undefined,
    vixModel: new __WEBPACK_IMPORTED_MODULE_0_app_modules_StockDashboardModule_models__["b" /* VixModel */](),
    stockListHeaders: [],
    selectedStockList: "",
    tableState: new __WEBPACK_IMPORTED_MODULE_0_app_modules_StockDashboardModule_models__["a" /* TableViewState */](),
    sortBy: "",
    tickers4Analysis: []
};
//# sourceMappingURL=rootReducer.js.map

/***/ }),

/***/ "../../../../../src/app/shared/redux/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__freezeState__ = __webpack_require__("../../../../../src/app/shared/redux/freezeState.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rootReducer__ = __webpack_require__("../../../../../src/app/shared/redux/rootReducer.ts");



var devToolsExtension = window.devToolsExtension
    ? window.devToolsExtension()
    : function (f) { return f; };
var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__rootReducer__["a" /* RootReducer */].reducer, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1__freezeState__["a" /* default */]), devToolsExtension));
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/app/shared/routing/AppRouteProvider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_modules_StockDashboardModule_components_stockdashboard_stockdashboard_component__ = __webpack_require__("../../../../../src/app/modules/StockDashboardModule/components/stockdashboard/stockdashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_NewsReaderModule_news_reader_news_reader_component__ = __webpack_require__("../../../../../src/app/modules/NewsReaderModule/news-reader/news-reader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_form_tests_reactive_form_reactive_form_component__ = __webpack_require__("../../../../../src/app/modules/form-tests/reactive-form/reactive-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppRouteProvider = AppRouteProvider_1 = (function () {
    function AppRouteProvider() {
    }
    AppRouteProvider.prototype.getMenuItems = function () {
        var routeConfig = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](AppRouteProvider_1.appRoutes, function (x) { return x.path.length > 0; });
        return routeConfig;
    };
    return AppRouteProvider;
}());
AppRouteProvider.appRoutes = [
    {
        name: "Financial Dashboard",
        icon: "trending_up",
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_2_app_modules_StockDashboardModule_components_stockdashboard_stockdashboard_component__["a" /* StockdashboardComponent */],
        isDefault: true
    },
    {
        name: "News",
        icon: "business",
        path: "news",
        component: __WEBPACK_IMPORTED_MODULE_3_app_modules_NewsReaderModule_news_reader_news_reader_component__["a" /* NewsReaderComponent */]
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_4_app_modules_form_tests_reactive_form_reactive_form_component__["a" /* ReactiveFormComponent */],
        name: "Reactive Forms",
        icon: "assignment",
        path: "reactiveforms"
    }
];
AppRouteProvider = AppRouteProvider_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AppRouteProvider);

var AppRouteProvider_1;
//# sourceMappingURL=AppRouteProvider.js.map

/***/ }),

/***/ "../../../../../src/app/shared/routing/RouterAndMenuItem.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=RouterAndMenuItem.js.map

/***/ }),

/***/ "../../../../../src/app/shared/routing/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppRouteProvider__ = __webpack_require__("../../../../../src/app/shared/routing/AppRouteProvider.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AppRouteProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__AppRouteProvider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RouterAndMenuItem__ = __webpack_require__("../../../../../src/app/shared/routing/RouterAndMenuItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RouterAndMenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__RouterAndMenuItem__);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/security/AuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthGuard */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["tokenNotExpired"])()) {
            return true;
        }
        this.router.navigate([""]);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=AuthGuard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/security/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthConfig"](), http, options);
}
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]]
            }
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/security/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AuthGuard__ = __webpack_require__("../../../../../src/app/shared/security/AuthGuard.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__("../../../../../src/app/shared/security/auth.module.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_security_auth_module__ = __webpack_require__("../../../../../src/app/shared/security/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_routing_AppRouteProvider__ = __webpack_require__("../../../../../src/app/shared/routing/AppRouteProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_directives_MaterialDesignLiteUpgradeElement__ = __webpack_require__("../../../../../src/app/shared/directives/MaterialDesignLiteUpgradeElement.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_capitalize_capitalize_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/capitalize/capitalize.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2_app_shared_security_auth_module__["a" /* AuthModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_shared_routing_AppRouteProvider__["a" /* AppRouteProvider */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__pipes_capitalize_capitalize_pipe__["a" /* CapitalizePipe */], __WEBPACK_IMPORTED_MODULE_4_app_shared_directives_MaterialDesignLiteUpgradeElement__["a" /* MdlDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__pipes_capitalize_capitalize_pipe__["a" /* CapitalizePipe */], __WEBPACK_IMPORTED_MODULE_4_app_shared_directives_MaterialDesignLiteUpgradeElement__["a" /* MdlDirective */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_modules_AppModule_app_module__ = __webpack_require__("../../../../../src/app/modules/AppModule/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2_app_modules_AppModule_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map