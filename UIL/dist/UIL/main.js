(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _updatedetails_updatedetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updatedetails/updatedetails.component */ "./src/app/updatedetails/updatedetails.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");








var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: "mainpage", component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__["MainpageComponent"] },
    { path: "updatedetails", component: _updatedetails_updatedetails_component__WEBPACK_IMPORTED_MODULE_6__["UpdatedetailsComponent"] },
    { path: "game", component: _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">       \n        <div class=\"row\">    \n        <div class=\"col-xl-12\">\n           \n        <router-outlet></router-outlet>\n            \n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _updatedetails_updatedetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./updatedetails/updatedetails.component */ "./src/app/updatedetails/updatedetails.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _game_game_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game/game.module */ "./src/app/game/game.module.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/rules/rules.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _winner_winner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./winner/winner.component */ "./src/app/winner/winner.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_11__["MainpageComponent"],
                _updatedetails_updatedetails_component__WEBPACK_IMPORTED_MODULE_12__["UpdatedetailsComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_13__["GameComponent"],
                _rules_rules_component__WEBPACK_IMPORTED_MODULE_15__["RulesComponent"],
                _winner_winner_component__WEBPACK_IMPORTED_MODULE_17__["WinnerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _game_game_module__WEBPACK_IMPORTED_MODULE_14__["GameModule"],
            ],
            entryComponents: [
                _rules_rules_component__WEBPACK_IMPORTED_MODULE_15__["RulesComponent"],
                _winner_winner_component__WEBPACK_IMPORTED_MODULE_17__["WinnerComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: \"Creepy\";\r\n  src: url('Creepy.woff') format(\"woff\"),\r\n    url('Creepy.woff2') format(\"woff2\");\r\n}\r\n@font-face {\r\n  font-family: \"Lunacy\";\r\n  src: url('Lunacy.woff') format(\"woff\"),\r\n    url('Lunacy.woff2') format(\"woff2\");\r\n}\r\n.card {\r\n  position: relative;\r\n  border: 1px solid red;\r\n  background-color: white;\r\n  height: 160px;\r\n  width: 110px;\r\n}\r\n.card-face {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  border-radius: 12px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n}\r\n.card.visible .card-back {\r\n  transform: rotateY(-180deg);\r\n}\r\n.card.visible .card-front {\r\n  transform: rotateY(0);\r\n}\r\n.card-back {\r\n  background-color: white;\r\n  border-color: black;\r\n}\r\n.card-front {\r\n  transform: rotateY(180deg);\r\n}\r\n.cob-web {\r\n  position: absolute;\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: width 100ms ease-in-out, height 100ms ease-in-out;\r\n}\r\n.card-back:hover .cob-web {\r\n  width: 33px;\r\n  height: 33px;\r\n}\r\n.cob-web-top-left {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.cob-web-top-right {\r\n  top: 0;\r\n  right: 0;\r\n}\r\n.cob-web-bottom-right {\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n.cob-web-bottom-left {\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.spider {\r\n  color: #389203;\r\n  font-family: Creepy, serif;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  font-size: 2em;\r\n  align-self: flex-start;\r\n  transform: translateY(65px);\r\n  transition: transform 100ms ease-in-out;\r\n}\r\n.card-back:hover .spider {\r\n  font-size: 2.5em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckI7dUNBQ3dEO0FBQzFEO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckI7dUNBQ3dEO0FBQzFEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkRBQTZEO0FBQy9EO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxNQUFNO0VBQ04sT0FBTztBQUNUO0FBQ0E7RUFDRSxNQUFNO0VBQ04sUUFBUTtBQUNWO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtBQUNWO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsT0FBTztBQUNUO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNyZWVweVwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL0ZvbnRzL0NyZWVweS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcbiAgICB1cmwoXCIuLi8uLi9hc3NldHMvRm9udHMvQ3JlZXB5LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1bmFjeVwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL0ZvbnRzL0x1bmFjeS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcbiAgICB1cmwoXCIuLi8uLi9hc3NldHMvRm9udHMvTHVuYWN5LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xyXG59XHJcbi5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG59XHJcblxyXG4uY2FyZC1mYWNlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuLmNhcmQudmlzaWJsZSAuY2FyZC1iYWNrIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbn1cclxuLmNhcmQudmlzaWJsZSAuY2FyZC1mcm9udCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG59XHJcbi5jYXJkLWJhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmNhcmQtZnJvbnQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbi5jb2Itd2ViIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDEwMG1zIGVhc2UtaW4tb3V0LCBoZWlnaHQgMTAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmNhcmQtYmFjazpob3ZlciAuY29iLXdlYiB7XHJcbiAgd2lkdGg6IDMzcHg7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG59XHJcbi5jb2Itd2ViLXRvcC1sZWZ0IHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG4uY29iLXdlYi10b3AtcmlnaHQge1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufVxyXG4uY29iLXdlYi1ib3R0b20tcmlnaHQge1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG4uY29iLXdlYi1ib3R0b20tbGVmdCB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuLnNwaWRlciB7XHJcbiAgY29sb3I6ICMzODkyMDM7XHJcbiAgZm9udC1mYW1pbHk6IENyZWVweSwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjVweCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5jYXJkLWJhY2s6aG92ZXIgLnNwaWRlciB7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"{{ id }}\">\n  <div\n    *ngIf=\"!status\"\n    [@ngClass]=\"status ? 'card-front' : 'card-back'\"\n    class=\"card-face\"\n    [@rotatedState]=\"state\"\n  >\n    <img\n      src=\"../../assets/pictures/Red hurt.png\"\n      class=\"cob-web cob-web-top-left\"\n    />\n    <img\n      src=\"../../assets/pictures/Black.png\"\n      class=\"cob-web cob-web-top-right\"\n    />\n    <img\n      src=\"../../assets/pictures/Black Hurt.png\"\n      class=\"cob-web cob-web-bottom-left\"\n    />\n    <img\n      src=\"../../assets/pictures/red m.png\"\n      class=\"cob-web cob-web-bottom-right\"\n    />\n    <div class=\"spider\">Cambio</div>\n    <!-- <img src=\"../../assets/pictures/Spider.png\" class=\"spider\" /> -->\n  </div>\n  <div\n    *ngIf=\"status\"\n    [@ngClass]=\"status ? 'card-back' : 'card-front'\"\n    [@rotatedState]=\"state\"\n  >\n    <img [src]=\"card?.cardpic\" style=\"width: 110px; height: 160px;\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./src/app/card/card.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.clickedCardEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.status = false;
        this.state = "card-back";
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsSubscription = this.events
            ? this.events.subscribe(function () {
                _this.rotate();
            })
            : null;
    };
    CardComponent.prototype.ngOnDestroy = function () {
        if (this.eventsSubscription !== null)
            this.eventsSubscription.unsubscribe();
    };
    CardComponent.prototype.rotate = function () {
        if (this.card) {
            this.status = !this.status;
            this.state = this.state === "card-front" ? "card-back" : "card-front";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _card__WEBPACK_IMPORTED_MODULE_3__["Card"])
    ], CardComponent.prototype, "card", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CardComponent.prototype, "events", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CardComponent.prototype, "clickedCardEmitter", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-card",
            animations: [
                // Each unique animation requires its own trigger. The first argument of the trigger function is the name
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("rotatedState", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("default", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "rotate(0)" })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("rotated", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "rotate(-180deg)" })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("rotated => default", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-out")),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("default => rotated", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-in"))
                ])
            ],
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/card/card.ts":
/*!******************************!*\
  !*** ./src/app/card/card.ts ***!
  \******************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(_cardpic, _name) {
        this.cardpic = "../../assets/pictures/all cards/" + _cardpic + ".png";
        this.name = _name;
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: \"Creepy\";\r\n  src: url('Creepy.woff') format(\"woff\"),\r\n    url('Creepy.woff2') format(\"woff2\");\r\n}\r\n@font-face {\r\n  font-family: \"Lunacy\";\r\n  src: url('Lunacy.woff') format(\"woff\"),\r\n    url('Lunacy.woff2') format(\"woff2\");\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  min-height: 100vh;\r\n}\r\n.game-body {\r\n  position: fixed;\r\n  min-width: 100%;\r\n  background-image: url(\"/assets/pictures/green-background.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n.title {\r\n  margin: 52px;\r\n}\r\n.page-title {\r\n  color: #1f201f;\r\n  font-family: Creepy, serif;\r\n  font-weight: normal;\r\n  text-align: left;\r\n  font-size: 6em;\r\n  float: left;\r\n  margin: 0;\r\n}\r\n.DeckOfCards {\r\n  position: fixed;\r\n  border: 1px solid red;\r\n  background-color: white;\r\n  margin-top: 400px;\r\n  margin-left: 200px;\r\n  transform: rotate(9deg);\r\n  display: grid;\r\n}\r\n.BurntCard {\r\n  position: absolute;\r\n  border: 1px solid red;\r\n  background-color: white;\r\n  height: 160px;\r\n  width: 110px;\r\n  margin-top: 400px;\r\n  margin-left: 1120px;\r\n  display: grid;\r\n}\r\n.yourCardTurn {\r\n  position: absolute;\r\n  height: 160px;\r\n  width: 110px;\r\n  margin-top: 400px;\r\n  margin-left: 580px;\r\n  display: grid;\r\n}\r\n.game-info {\r\n  font-family: Lunacy, serif;\r\n  color: #7af334;\r\n  font-size: 4em;\r\n  float: right;\r\n}\r\n.computer {\r\n  margin-right: 255px;\r\n  margin-bottom: 310px;\r\n}\r\n.exitgame {\r\n  height: 40px;\r\n  width: 130px;\r\n  margin-bottom:125px;\r\n  margin-left: 185px;\r\n  font-family: Creepy, serif;\r\n  font-size: large;\r\n  background-color: #1f201f;\r\n  color: #7af334;\r\n  cursor: pointer;\r\n  border: 1px solid rgba(49, 47, 45, 0.63);\r\n}\r\n.cambio-btn{\r\n  height: 130px;\r\n  width: 130px;\r\n  margin-right: 150px;\r\n  margin-bottom:830px;\r\n  background: url('Cambio-logo.png');\r\n  float: right;\r\n  cursor: pointer;\r\n  border: 1px solid rgba(0, 0, 0, 0);\r\n}\r\n.game-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 120px);\r\n  grid-gap: 10px;\r\n  margin: 50px;\r\n  justify-content: center;\r\n}\r\n.game-info-container {\r\n  grid-column: 1/-1;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckI7dUNBQ3dEO0FBQzFEO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckI7dUNBQ3dEO0FBQzFEO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZiw4REFBOEQ7RUFDOUQsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZix3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQ0FBc0Q7RUFDdEQsWUFBWTtFQUNaLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJDcmVlcHlcIjtcclxuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9Gb250cy9DcmVlcHkud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gICAgdXJsKFwiLi4vLi4vYXNzZXRzL0ZvbnRzL0NyZWVweS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJMdW5hY3lcIjtcclxuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9Gb250cy9MdW5hY3kud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gICAgdXJsKFwiLi4vLi4vYXNzZXRzL0ZvbnRzL0x1bmFjeS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5odG1sIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uZ2FtZS1ib2R5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljdHVyZXMvZ3JlZW4tYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnRpdGxlIHtcclxuICBtYXJnaW46IDUycHg7XHJcbn1cclxuLnBhZ2UtdGl0bGUge1xyXG4gIGNvbG9yOiAjMWYyMDFmO1xyXG4gIGZvbnQtZmFtaWx5OiBDcmVlcHksIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDZlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLkRlY2tPZkNhcmRzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDQwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5ZGVnKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcbi5CdXJudENhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDExMjBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcbi55b3VyQ2FyZFR1cm4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIHdpZHRoOiAxMTBweDtcclxuICBtYXJnaW4tdG9wOiA0MDBweDtcclxuICBtYXJnaW4tbGVmdDogNTgwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG4uZ2FtZS1pbmZvIHtcclxuICBmb250LWZhbWlseTogTHVuYWN5LCBzZXJpZjtcclxuICBjb2xvcjogIzdhZjMzNDtcclxuICBmb250LXNpemU6IDRlbTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmNvbXB1dGVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDI1NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMxMHB4O1xyXG59XHJcblxyXG4uZXhpdGdhbWUge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbToxMjVweDtcclxuICBtYXJnaW4tbGVmdDogMTg1cHg7XHJcbiAgZm9udC1mYW1pbHk6IENyZWVweSwgc2VyaWY7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyMDFmO1xyXG4gIGNvbG9yOiAjN2FmMzM0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ5LCA0NywgNDUsIDAuNjMpO1xyXG59XHJcblxyXG4uY2FtYmlvLWJ0bntcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206ODMwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9waWN0dXJlcy9DYW1iaW8tbG9nby5wbmcpO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG4uZ2FtZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTIwcHgpO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbjogNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZ2FtZS1pbmZvLWNvbnRhaW5lciB7XHJcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-body\">\r\n  <div class=\"title\">\r\n    <h1 class=\"page-title\">Cambio</h1>\r\n    <div class=\"game-info\">\r\n      <!-- <div>Time <span id=\"time-remaining\">100</span></div>  -->\r\n    </div>\r\n  </div>\r\n  <div class=\"DeckOfCards\" id=\"DeckOfCards\">\r\n    <app-card></app-card>\r\n  </div>\r\n  <div class=\"BurntCard\">\r\n    <template #usedCard></template>\r\n  </div>\r\n\r\n  <div class=\"yourCardTurn\">\r\n    <template #CardTurn></template>\r\n  </div>\r\n\r\n  <div class=\"card-game-all\">\r\n    <div class=\"computer\">\r\n      <div class=\"game-container\">\r\n        <app-card></app-card>\r\n        <app-card></app-card>\r\n        <app-card></app-card>\r\n        <app-card></app-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"play\">\r\n      <div class=\"game-container\">\r\n        <template #cardsContainer></template>\r\n      </div>\r\n      <div class=\"btn-group\">\r\n        <button class=\"exitgame\" (click)=\"exitGame()\">Exit Game</button>\r\n        <button class=\"cambio-btn\" (click)=\"checkWinner()\"></button>\r\n      </div>\r\n   \r\n     \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/CardValue */ "./src/app/shared/models/CardValue.ts");
/* harmony import */ var _shared_models_CardRank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/CardRank */ "./src/app/shared/models/CardRank.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card/card */ "./src/app/card/card.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _winner_winner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../winner/winner.component */ "./src/app/winner/winner.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");











var GameComponent = /** @class */ (function () {
    // public cardvalue:CardValue;
    function GameComponent(gameservice, resolver, elementRef, router, dialog) {
        this.gameservice = gameservice;
        this.resolver = resolver;
        this.elementRef = elementRef;
        this.router = router;
        this.dialog = dialog;
        this.FirstPlayerFrontRightEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.FirstPlayerFrontLeftEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.FirstPlayerBackRightEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.FirstPlayerBackLeftEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.UsedCardEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.CardTurnEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.status = false;
        this.state = "card-back";
    }
    GameComponent.prototype.emitEventToChild = function (subject) {
        subject.next();
    };
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameservice.startnewgame().subscribe(function (res) {
            _this.myGame = res;
            _this.setLocationCards();
            _this.show2card();
        }, function (err) {
            console.log(err);
        });
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this.componentRef.destroy();
    };
    GameComponent.prototype.createCardComponent = function (card, event, container) {
        var factory = this.resolver.resolveComponentFactory(_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]);
        this.componentRef = container.createComponent(factory);
        this.componentRef.instance.card = card;
        this.componentRef.instance.events = event;
        this.componentRef.instance.id = card.name;
    };
    GameComponent.prototype.setLocationCards = function () {
        var arrayNames = [];
        if (this.myGame) {
            for (var value = 3; value <= 10; value++) {
                var keyArr = Object.keys(this.myGame.cardTable);
                var key = "";
                for (var i = 0; i < keyArr.length; i++) {
                    if (this.myGame.cardTable[keyArr[i]] == value) {
                        key = keyArr[i];
                        arrayNames.push(key);
                        break;
                    }
                }
                console.log(key, value);
            }
            this.gameRun = {
                GameId: this.myGame.cardTable.GameId,
                FirstPlayerFrontRight: _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[0]],
                FirstPlayerFrontLeft: _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[1]],
                FirstPlayerBackRight: _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[2]],
                FirstPlayerBackLeft: _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[3]],
                SecondPlayerFrontRight: _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[4]],
                SecondPlayerFrontLeft: _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[5]],
                SecondPlayerBackRight: _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[6]],
                SecondPlayerBackLeft: _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[7]],
                UsedCard: 0
            };
            this.FirstPlayerFrontRight = new _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"](_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[0]], "FirstPlayerFrontRight");
            this.FirstPlayerFrontLeft = new _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"](_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[1]], "FirstPlayerFrontLeft");
            this.FirstPlayerBackRight = new _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"](_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[2]], "FirstPlayerBackRight");
            this.FirstPlayerBackLeft = new _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"](_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][arrayNames[3]], "FirstPlayerBackLeft");
            this.createCardComponent(this.FirstPlayerBackLeft, this.FirstPlayerBackLeftEvent, this.container);
            this.createCardComponent(this.FirstPlayerBackRight, this.FirstPlayerBackRightEvent, this.container);
            this.createCardComponent(this.FirstPlayerFrontLeft, this.FirstPlayerFrontLeftEvent, this.container);
            this.createCardComponent(this.FirstPlayerFrontRight, this.FirstPlayerFrontRightEvent, this.container);
            console.log(this.gameRun);
        }
        else {
            console.log("game over");
        }
    };
    GameComponent.prototype.show2card = function () {
        var _this = this;
        setTimeout(function () {
            _this.emitEventToChild(_this.FirstPlayerFrontLeftEvent);
            _this.emitEventToChild(_this.FirstPlayerFrontRightEvent);
        }, 0);
        setTimeout(function () {
            console.log("changed :");
            _this.emitEventToChild(_this.FirstPlayerFrontLeftEvent);
            _this.emitEventToChild(_this.FirstPlayerFrontRightEvent);
            _this.gameOnRun();
            _this.allowTakeCard(true);
        }, 5000);
    };
    GameComponent.prototype.getRandomCard = function () {
        this.allowTakeCard(false);
        var randomNum;
        while (this.myGame.cardTable[_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][randomNum]] != 1) {
            randomNum = Math.floor(Math.random() * 55) + 1;
        }
        console.log(randomNum);
        this.gameRun.UsedCard = randomNum;
        this.gameOnRun();
    };
    GameComponent.prototype.allowTakeCard = function (flag) {
        var el = this.elementRef.nativeElement.querySelector("#DeckOfCards");
        if (el) {
            if (flag)
                el.onclick = this.getRandomCard.bind(this);
            else
                el.onclick = null;
        }
    };
    GameComponent.prototype.gameOnRun = function () {
        var _this = this;
        // this.clearDeck(this.usedCardcontainer);
        this.clearDeck(this.CardTurncontainer);
        if (this.gameRun.UsedCard) {
            this.createCardComponent(new _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"]("" + this.gameRun.UsedCard, "UsedCard"), this.CardTurnEvent, this.CardTurncontainer);
        }
        setTimeout(function () { return _this.emitEventToChild(_this.CardTurnEvent); }, 0);
        this.getChooseDeckOfCard();
    };
    GameComponent.prototype.sendUserTurn = function () {
        var _this = this;
        console.log("sent");
        this.gameservice.gameonrun(this.gameRun).subscribe(function (res) {
            console.log("res", res);
            if (res != "game over") {
                _this.myGame = res;
                _this.clearDeck(_this.container);
                _this.setLocationCards();
                _this.allowTakeCard(true);
            }
            else {
                console.log("game over");
                _this.checkWinner();
                console.log("this.gameRun", _this.gameRun);
            }
        }, function (err) {
            console.log(_this.gameRun);
        });
    };
    GameComponent.prototype.getChooseDeckOfCard = function () {
        var el = this.elementRef.nativeElement.querySelector(".BurntCard");
        if (el) {
            el.onclick = this.moveToBurnCard.bind(this);
        }
        var FirstPlayerBackLeft = this.elementRef.nativeElement.querySelector("#FirstPlayerBackLeft");
        if (FirstPlayerBackLeft) {
            FirstPlayerBackLeft.onclick = this.moveBackLeft.bind(this);
        }
        var FirstPlayerBackRight = this.elementRef.nativeElement.querySelector("#FirstPlayerBackRight");
        if (FirstPlayerBackRight) {
            FirstPlayerBackRight.onclick = this.moveBackRight.bind(this);
        }
        var FirstPlayerFrontLeft = this.elementRef.nativeElement.querySelector("#FirstPlayerFrontLeft");
        if (FirstPlayerFrontLeft) {
            FirstPlayerFrontLeft.onclick = this.moveFrontLeft.bind(this);
        }
        var FirstPlayerFrontRight = this.elementRef.nativeElement.querySelector("#FirstPlayerFrontRight");
        if (FirstPlayerFrontRight) {
            FirstPlayerFrontRight.onclick = this.moveFrontRight.bind(this);
        }
    };
    GameComponent.prototype.moveFrontRight = function () {
        var _this = this;
        if (this.gameRun.UsedCard) {
            this.clearDeck(this.usedCardcontainer);
            this.clearDeck(this.CardTurncontainer);
            var temp = this.gameRun.UsedCard;
            this.gameRun.UsedCard = this.gameRun.FirstPlayerFrontRight;
            this.gameRun.FirstPlayerFrontRight = temp;
            this.createCardComponent(new _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"]("" + this.gameRun.UsedCard, "UsedCard"), this.UsedCardEvent, this.usedCardcontainer);
            setTimeout(function () { return _this.emitEventToChild(_this.UsedCardEvent); }, 0);
            if (this.gameRun.UsedCard != 0) {
                this.sendUserTurn();
            }
        }
    };
    GameComponent.prototype.moveFrontLeft = function () {
        var _this = this;
        if (this.gameRun.UsedCard) {
            this.clearDeck(this.usedCardcontainer);
            this.clearDeck(this.CardTurncontainer);
            var temp = this.gameRun.UsedCard;
            this.gameRun.UsedCard = this.gameRun.FirstPlayerFrontLeft;
            this.gameRun.FirstPlayerFrontLeft = temp;
            this.createCardComponent(new _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"]("" + this.gameRun.UsedCard, "UsedCard"), this.UsedCardEvent, this.usedCardcontainer);
            setTimeout(function () { return _this.emitEventToChild(_this.UsedCardEvent); }, 0);
            if (this.gameRun.UsedCard != 0) {
                this.sendUserTurn();
            }
        }
    };
    GameComponent.prototype.moveBackRight = function () {
        var _this = this;
        if (this.gameRun.UsedCard) {
            this.clearDeck(this.usedCardcontainer);
            this.clearDeck(this.CardTurncontainer);
            var temp = this.gameRun.UsedCard;
            this.gameRun.UsedCard = this.gameRun.FirstPlayerBackRight;
            this.gameRun.FirstPlayerBackRight = temp;
            this.createCardComponent(new _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"]("" + this.gameRun.UsedCard, "UsedCard"), this.UsedCardEvent, this.usedCardcontainer);
            setTimeout(function () { return _this.emitEventToChild(_this.UsedCardEvent); }, 0);
            if (this.gameRun.UsedCard != 0) {
                this.sendUserTurn();
            }
        }
    };
    GameComponent.prototype.moveBackLeft = function () {
        var _this = this;
        if (this.gameRun.UsedCard) {
            this.clearDeck(this.usedCardcontainer);
            this.clearDeck(this.CardTurncontainer);
            var temp = this.gameRun.UsedCard;
            this.gameRun.UsedCard = this.gameRun.FirstPlayerBackLeft;
            this.gameRun.FirstPlayerBackLeft = temp;
            this.createCardComponent(new _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"]("" + this.gameRun.UsedCard, "UsedCard"), this.UsedCardEvent, this.usedCardcontainer);
            setTimeout(function () { return _this.emitEventToChild(_this.UsedCardEvent); }, 0);
            if (this.gameRun.UsedCard != 0) {
                this.sendUserTurn();
            }
        }
    };
    GameComponent.prototype.moveToBurnCard = function () {
        var _this = this;
        this.clearDeck(this.usedCardcontainer);
        this.clearDeck(this.CardTurncontainer);
        if (this.gameRun.UsedCard) {
            this.createCardComponent(new _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"]("" + this.gameRun.UsedCard, "UsedCard"), this.UsedCardEvent, this.usedCardcontainer);
        }
        setTimeout(function () { return _this.emitEventToChild(_this.UsedCardEvent); }, 0);
        if (this.gameRun.UsedCard != 0) {
            this.sendUserTurn();
        }
    };
    GameComponent.prototype.checkWinner = function () {
        var _this = this;
        var userRank = this.getUserRank(this.gameRun.FirstPlayerBackLeft, this.gameRun.FirstPlayerBackRight, this.gameRun.FirstPlayerFrontLeft, this.gameRun.FirstPlayerFrontRight);
        var computerRank = this.getUserRank(this.gameRun.SecondPlayerBackLeft, this.gameRun.SecondPlayerBackRight, this.gameRun.SecondPlayerFrontLeft, this.gameRun.SecondPlayerFrontRight);
        if (userRank < computerRank) {
            this.gameservice.setwinner(this.myGame.gameInfo.PlayerId1, userRank, computerRank).subscribe(function (res) {
                console.log(res);
                // this.router.navigate(["./mainpage"]);
                var dialogRef = _this.dialog.open(_winner_winner_component__WEBPACK_IMPORTED_MODULE_9__["WinnerComponent"], {
                    height: '700px',
                    width: '787px',
                });
            }, function (err) {
                console.log(err);
            });
            console.log("user Wins " + userRank + " : " + computerRank);
        }
        else {
            console.log("computer rank  " + computerRank + " : " + userRank);
            this.gameservice.setwinner(-1, userRank, computerRank).subscribe(function (res) {
                var dialogRef = _this.dialog.open(_winner_winner_component__WEBPACK_IMPORTED_MODULE_9__["WinnerComponent"], {
                    height: '700px',
                    width: '787px',
                    hasBackdrop: false,
                });
                // this.router.navigate(["./mainpage"]);
            }, function (err) {
                console.log(err);
            });
        }
    };
    GameComponent.prototype.getUserRank = function (card1, card2, card3, card4) {
        var rank = 0;
        rank += _shared_models_CardRank__WEBPACK_IMPORTED_MODULE_5__["CardRank"][_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card1]];
        console.log("card1", _shared_models_CardRank__WEBPACK_IMPORTED_MODULE_5__["CardRank"][_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card1]], "Value", _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card1]);
        rank += _shared_models_CardRank__WEBPACK_IMPORTED_MODULE_5__["CardRank"][_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card2]];
        console.log("card2", _shared_models_CardRank__WEBPACK_IMPORTED_MODULE_5__["CardRank"][_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card2]], "Value", _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card2]);
        rank += _shared_models_CardRank__WEBPACK_IMPORTED_MODULE_5__["CardRank"][_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card3]];
        console.log("card3", _shared_models_CardRank__WEBPACK_IMPORTED_MODULE_5__["CardRank"][_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card3]], "Value", _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card3]);
        rank += _shared_models_CardRank__WEBPACK_IMPORTED_MODULE_5__["CardRank"][_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card4]];
        console.log("card4", _shared_models_CardRank__WEBPACK_IMPORTED_MODULE_5__["CardRank"][_shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card4]], "Value", _shared_models_CardValue__WEBPACK_IMPORTED_MODULE_4__["CardValue"][card4]);
        return rank;
    };
    GameComponent.prototype.clearDeck = function (container) {
        container.clear();
    };
    GameComponent.prototype.exitGame = function () {
        var _this = this;
        this.gameservice.exitGame().subscribe(function (res) {
            console.log(res);
            _this.router.navigate(["./mainpage"]);
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("cardsContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameComponent.prototype, "container", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("usedCard", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameComponent.prototype, "usedCardcontainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("CardTurn", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameComponent.prototype, "CardTurncontainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_card_card__WEBPACK_IMPORTED_MODULE_7__["Card"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"])
    ], GameComponent.prototype, "FirstPlayerFrontRight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_card_card__WEBPACK_IMPORTED_MODULE_7__["Card"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"])
    ], GameComponent.prototype, "FirstPlayerFrontLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_card_card__WEBPACK_IMPORTED_MODULE_7__["Card"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"])
    ], GameComponent.prototype, "FirstPlayerBackRight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_card_card__WEBPACK_IMPORTED_MODULE_7__["Card"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _card_card__WEBPACK_IMPORTED_MODULE_7__["Card"])
    ], GameComponent.prototype, "FirstPlayerBackLeft", void 0);
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-game",
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/game/game.module.ts":
/*!*************************************!*\
  !*** ./src/app/game/game.module.ts ***!
  \*************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");




var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
            entryComponents: [_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [
                _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]
            ]
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container {\r\n  height: 525px;\r\n  width: 450px;\r\n  margin-top: 100px;\r\n  background: rgba(41, 41, 38, 0.82);\r\n}\r\nh1 {\r\n  color: #e88955;\r\n  font-family: \"Franklin Medium\";\r\n}\r\n.userName {\r\n  height: 40px;\r\n  width: 300px;\r\n  margin-top: 15px;\r\n  margin-left: 35px;\r\n  padding-left: 22px;\r\n  background: rgba(41, 41, 38, 0.82);\r\n  border-style: solid;\r\n  border-width: thin;\r\n  border-color: #e88955;\r\n}\r\n.password {\r\n  height: 40px;\r\n  width: 300px;\r\n  margin-top: 15px;\r\n  margin-left: 35px;\r\n  padding-left: 23px;\r\n  background: rgba(41, 41, 38, 0.82);\r\n  border-style: solid;\r\n  border-width: thin;\r\n  border-color: #e88955;\r\n}\r\n::-webkit-input-placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\n::-moz-placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\n::-ms-input-placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\n::placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\ninput {\r\n  color: white;\r\n\r\n  font-style: oblique;\r\n}\r\ninput:focus {\r\n  outline: none;\r\n}\r\n.input-user {\r\n  /* display: flex; */\r\n  position: relative;\r\n}\r\n.input-user i {\r\n  position: absolute;\r\n  left: 35px;\r\n  top: 27px;\r\n  padding: 1px 8px;\r\n  background: none;\r\n  color: white;\r\n}\r\n.input-password {\r\n  position: relative;\r\n}\r\n.input-password i {\r\n  position: absolute;\r\n  left: 35px;\r\n  top: 15px;\r\n  padding: 12px 6px;\r\n  background: none;\r\n  color: white;\r\n}\r\n.center {\r\n  margin: auto;\r\n  width: 85%;\r\n}\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n}\r\n#btn1 {\r\n  margin-top: 10px;\r\n  color: white;\r\n  margin-left: 39%;\r\n  background-color: unset;\r\n  font-style: oblique;\r\n  border: unset;\r\n}\r\n#btn2 {\r\n  margin-left: 24%;\r\n  margin-top: 10px;\r\n  border: unset;\r\n  background-color: #e88955;\r\n  color: white;\r\n  font-style: oblique;\r\n  font-size: 27px;\r\n  width: 175px;\r\n  height: 50px;\r\n  text-align: center;\r\n}\r\ninput.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n.rounded {\r\n  width: 200px;\r\n  height: 225px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBSEE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBSEE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBSEE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZOztFQUVaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDUyNXB4O1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQxLCA0MSwgMzgsIDAuODIpO1xyXG59XHJcbmgxIHtcclxuICBjb2xvcjogI2U4ODk1NTtcclxuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBNZWRpdW1cIjtcclxufVxyXG4udXNlck5hbWUge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMzVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0MSwgNDEsIDM4LCAwLjgyKTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItY29sb3I6ICNlODg5NTU7XHJcbn1cclxuLnBhc3N3b3JkIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyM3B4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDEsIDQxLCAzOCwgMC44Mik7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTg4OTU1O1xyXG59XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcbmlucHV0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmlucHV0LXVzZXIge1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5wdXQtdXNlciBpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMzVweDtcclxuICB0b3A6IDI3cHg7XHJcbiAgcGFkZGluZzogMXB4IDhweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaW5wdXQtcGFzc3dvcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5wdXQtcGFzc3dvcmQgaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDM1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEycHggNnB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogODUlO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuI2J0bjEge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzOSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICBib3JkZXI6IHVuc2V0O1xyXG59XHJcbiNidG4yIHtcclxuICBtYXJnaW4tbGVmdDogMjQlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyOiB1bnNldDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg4OTU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5yb3VuZGVkIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMjVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\n  rel=\"stylesheet\"\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n/>\n<link\n  rel=\"stylesheet\"\n  href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n  integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\"\n  crossorigin=\"anonymous\"\n/>\n\n<div class=\"container\">\n  <div class=\"text-center\">\n    <img\n      src=\"../../assets/pictures/cambio.png\"\n      class=\"rounded\"\n      alt=\"Responsive image\"\n    />\n    <h1>CAMBIO</h1>\n  </div>\n\n  <form (ngSubmit)=\"OnSubmit(f)\" #f=\"ngForm\">\n    <div class=\"center\">\n      <div class=\"input-user\">\n        <div>\n          <i class=\"fa fa-user icon\"></i>\n        </div>\n        <input\n          type=\"text\"\n          class=\"userName\"\n          id=\"userName\"\n          name=\"userName\"\n          ngModel\n          placeholder=\"Username\"\n          required\n        />\n      </div>\n      <br />\n      <div class=\"input-password\">\n        <i class=\"fa fa-key icon\"></i>\n        <input\n          type=\"password\"\n          class=\"password\"\n          id=\"Password\"\n          name=\"Password\"\n          ngModel\n          placeholder=\"Password\"\n          required\n        />\n      </div>\n\n      <div class=\"btns\">\n        <button class=\"btn btn-link \" id=\"btn1\" role=\"presentation\">\n          <a routerLink=\"/register\">sign up</a>\n        </button>\n        <br />\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          id=\"btn2\"\n          [disabled]=\"!f.valid\"\n        >\n          Login\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_models_user_login_info_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/user-login-info.model */ "./src/app/shared/models/user-login-info.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_6__);







var LoginComponent = /** @class */ (function () {
    // DI
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userLogin = new _shared_models_user_login_info_model__WEBPACK_IMPORTED_MODULE_4__["userLoginInfo"]();
    }
    LoginComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.userLogin.Email = this.loginForm.value.userName;
        this.userLogin.Password = crypto_js__WEBPACK_IMPORTED_MODULE_6___default.a.SHA256(this.loginForm.value.Password).toString();
        localStorage.setItem("authUser", this.userLogin.Password + this.userLogin.Email);
        this.userService.loginUser().subscribe(function (res) {
            _this.router.navigate(["/mainpage"]);
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container {\r\n  height: 575px;\r\n  width: 500px;\r\n  margin-top: 100px;\r\n  background: rgba(41, 41, 38, 0.82);\r\n}\r\np {\r\n  color: azure;\r\n  text-align: center;\r\n  font-size: 45px;\r\n  font-style: oblique;\r\n}\r\n.btn-group button {\r\n  background-color: #e88955;\r\n  border: 1px solid rgba(49, 47, 45, 0.63); /* black with opacity border */\r\n  color: white; /* White text */\r\n  font-style: oblique;\r\n  padding: 10px 24px; /* Some padding */\r\n  margin-top: 198px;\r\n  cursor: pointer; /* Pointer/hand icon */\r\n  margin-left: 20px;\r\n  float: left; /* Float the buttons side by side */\r\n}\r\n.btn-gameRules{\r\n  position:absolute; \r\n  margin-left:-50px;\r\n  left:50%;\r\n  width:100px;\r\n  bottom:25px;\r\n}\r\n#btnGameRules{\r\n  border:unset;\r\n  background-color: unset;\r\n  font-style: oblique; \r\n \r\n}\r\n.btn-gameRules:hover {\r\n  background-color: black;\r\n  border-radius: 12px;\r\n}\r\n/* Clear floats (clearfix hack) */\r\n.btn-group:after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n.btn-group button:not(:last-child) {\r\n  border-right: none; /* Prevent double borders */\r\n}\r\n/* Add a background color on hover */\r\n.btn-group button:hover {\r\n  background-color: rgba(49, 47, 45, 0.63);\r\n}\r\n#editProfile {\r\n  /* margin-top:412px; */\r\n  height: 40px;\r\n  width: 130px;\r\n}\r\n#startGame {\r\n  /* margin-top:400px; */\r\n  height: 40px;\r\n  width: 130px;\r\n}\r\n#Score {\r\n  /* margin-top:412px; */\r\n  height: 40px;\r\n  width: 130px;\r\n}\r\n#usericon {\r\n  color: white;\r\n  font-size: 100px;\r\n  padding-top: 9%;\r\n  padding-left: 40%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsd0NBQXdDLEVBQUUsOEJBQThCO0VBQ3hFLFlBQVksRUFBRSxlQUFlO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBRSxpQkFBaUI7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBRSxzQkFBc0I7RUFDdkMsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBRSxtQ0FBbUM7QUFDbEQ7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBLGlDQUFpQztBQUNqQztFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsMkJBQTJCO0FBQ2pEO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA1NzVweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0MSwgNDEsIDM4LCAwLjgyKTtcclxufVxyXG5wIHtcclxuICBjb2xvcjogYXp1cmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcbi5idG4tZ3JvdXAgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg4OTU1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDksIDQ3LCA0NSwgMC42Myk7IC8qIGJsYWNrIHdpdGggb3BhY2l0eSBib3JkZXIgKi9cclxuICBjb2xvcjogd2hpdGU7IC8qIFdoaXRlIHRleHQgKi9cclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIHBhZGRpbmc6IDEwcHggMjRweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgbWFyZ2luLXRvcDogMTk4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBQb2ludGVyL2hhbmQgaWNvbiAqL1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZsb2F0OiBsZWZ0OyAvKiBGbG9hdCB0aGUgYnV0dG9ucyBzaWRlIGJ5IHNpZGUgKi9cclxufVxyXG5cclxuLmJ0bi1nYW1lUnVsZXN7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7IFxyXG4gIG1hcmdpbi1sZWZ0Oi01MHB4O1xyXG4gIGxlZnQ6NTAlO1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGJvdHRvbToyNXB4O1xyXG59XHJcbiNidG5HYW1lUnVsZXN7XHJcbiAgYm9yZGVyOnVuc2V0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7IFxyXG4gXHJcbn1cclxuLmJ0bi1nYW1lUnVsZXM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLyogQ2xlYXIgZmxvYXRzIChjbGVhcmZpeCBoYWNrKSAqL1xyXG4uYnRuLWdyb3VwOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7IC8qIFByZXZlbnQgZG91YmxlIGJvcmRlcnMgKi9cclxufVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciBvbiBob3ZlciAqL1xyXG4uYnRuLWdyb3VwIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OSwgNDcsIDQ1LCAwLjYzKTtcclxufVxyXG4jZWRpdFByb2ZpbGUge1xyXG4gIC8qIG1hcmdpbi10b3A6NDEycHg7ICovXHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxufVxyXG4jc3RhcnRHYW1lIHtcclxuICAvKiBtYXJnaW4tdG9wOjQwMHB4OyAqL1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbn1cclxuI1Njb3JlIHtcclxuICAvKiBtYXJnaW4tdG9wOjQxMnB4OyAqL1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbn1cclxuI3VzZXJpY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBwYWRkaW5nLXRvcDogOSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\n  rel=\"stylesheet\"\n  href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n  integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\"\n  crossorigin=\"anonymous\"\n/>\n<link\n  rel=\"stylesheet\"\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n/>\n\n<div class=\"container\">\n  <div class=\"User\">\n    <i class=\"fa fa-user-circle-o\" id=\"usericon\"></i>\n    <p>{{ username }}</p>\n    <p>{{score}}</p>\n  </div>\n  \n  <div class=\"btn-group\">\n    <button (click)=\"moveToUpdate()\" id=\"editProfile\" class=\"btn btn-success\">\n      Edit Profile\n    </button>\n  </div>\n  <div class=\"btn-group\">\n    <button\n      (click)=\"moveToStartGame()\"\n      type=\"button\"\n      id=\"startGame\"\n      class=\"btn btn-success\"\n    >\n    Start Game\n    </button>\n  </div>\n  <div class=\"btn-group\">\n    <button\n      (click)=\"showscore()\"\n      type=\"button\"\n      id=\"Score\"\n      class=\"btn btn-success\"\n    >\n      Score\n    </button>\n  </div>\n  <div class=\"btn-gameRules\">\n    <button (click)=\"showRulesGame()\" class=\"btn btn-success\" id=\"btnGameRules\" >\n      Game Rules\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rules/rules.component */ "./src/app/rules/rules.component.ts");







var MainpageComponent = /** @class */ (function () {
    // DI
    function MainpageComponent(router, gameservice, userservice, dialog) {
        this.router = router;
        this.gameservice = gameservice;
        this.userservice = userservice;
        this.dialog = dialog;
        this.flag = false;
        this.MyAuthUser = localStorage.getItem("authUser");
        this.username = this.MyAuthUser.substring(64);
    }
    MainpageComponent.prototype.showscore = function () {
        var _this = this;
        this.userservice.getUserInfo().subscribe(function (res) {
            console.log(res.Score);
            _this.score = res.Score;
        }, function (err) {
            console.log(err);
        });
    };
    MainpageComponent.prototype.moveToStartGame = function () {
        this.router.navigate(["/game"]);
    };
    MainpageComponent.prototype.moveToUpdate = function () {
        this.router.navigate(["/updatedetails"]);
    };
    MainpageComponent.prototype.showRulesGame = function () {
        var dialogRef = this.dialog.open(_rules_rules_component__WEBPACK_IMPORTED_MODULE_6__["RulesComponent"], {
            height: '700px',
            width: '787px',
        });
    };
    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-mainpage",
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  margin-top: 10px;\r\n  color: whitesmoke;\r\n  text-align: center;\r\n  font-style: oblique;\r\n}\r\ndiv.container {\r\n  height: 470px;\r\n  width: 450px;\r\n  margin-top: 100px;\r\n  background: rgba(41, 41, 38, 0.82);\r\n}\r\n.box {\r\n  margin-top: 40px;\r\n}\r\n.field {\r\n  height: 50px;\r\n  width: 175px;\r\n  margin-left: 25px;\r\n  padding: 5px;\r\n  background: rgba(41, 41, 38, 0.82);\r\n  border-style: solid;\r\n  border-width: thin;\r\n  border-color: #e88955;\r\n}\r\n::-webkit-input-placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\n::-moz-placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\n::-ms-input-placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\n::placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\ninput {\r\n  color: white;\r\n\r\n  font-style: oblique;\r\n}\r\ninput:focus {\r\n  outline: none;\r\n}\r\ninput.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n#btn1 {\r\n  background-color: #e88955;\r\n  border-color: rgba(49, 47, 45, 0.63);\r\n  font-style: oblique;\r\n  margin-left: 35%;\r\n  width: 150px;\r\n  height: 50px;\r\n  margin-top: 10px;\r\n}\r\na {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFIQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFIQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFIQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7O0VBRVosbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA0NzBweDtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0MSwgNDEsIDM4LCAwLjgyKTtcclxufVxyXG4uYm94IHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5maWVsZCB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxNzVweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0MSwgNDEsIDM4LCAwLjgyKTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItY29sb3I6ICNlODg5NTU7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcbmlucHV0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4jYnRuMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ODk1NTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNDksIDQ3LCA0NSwgMC42Myk7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\n  rel=\"stylesheet\"\n  href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n  integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\"\n  crossorigin=\"anonymous\"\n/>\n<div class=\"container\">\n  <br />\n  <h1>Register here !</h1>\n  <form (ngSubmit)=\"OnSubmit(f)\" #f=\"ngForm\">\n    <div id=\"user-data\">\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          class=\"field\"\n          id=\"fName\"\n          ngModel\n          pattern=\"[a-zA-Z]*\"\n          name=\"Firstname\"\n          placeholder=\"First name\"\n          required\n        />\n\n        <input\n          type=\"text\"\n          class=\"field\"\n          id=\"lName\"\n          ngModel\n          pattern=\"[a-zA-Z]*\"\n          name=\"Lastname\"\n          placeholder=\"Last name\"\n          required\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <input\n          type=\"email\"\n          class=\"field\"\n          id=\"Email\"\n          ngModel\n          name=\"Email\"\n          placeholder=\"Email\"\n          required\n          email\n          #email=\"ngModel\"\n        />\n\n        <input\n          type=\"number\"\n          class=\"field\"\n          id=\"age\"\n          ngModel\n          name=\"Age\"\n          placeholder=\"Age\"\n          value=\"Age\"\n          required\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          class=\"field\"\n          id=\"country\"\n          ngModel\n          name=\"Country\"\n          placeholder=\"Country\"\n          required\n        />\n        <input\n          type=\"file\"\n          class=\"field\"\n          id=\"image\"\n          ngModel\n          name=\"UserImage\"\n          placeholder=\"image\"\n          required\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <input\n          type=\"password\"\n          class=\"field\"\n          id=\"password\"\n          ngModel\n          name=\"Password\"\n          placeholder=\"Password\"\n          required\n        />\n        <input\n          type=\"password\"\n          class=\"field\"\n          id=\"ConfirmPassword\"\n          ngModel\n          name=\"ConfirmPassword\"\n          placeholder=\"Confirm password\"\n          required\n        />\n      </div>\n\n      <button\n        id=\"btn1\"\n        class=\"btn btn-primary\"\n        type=\"submit\"\n        [disabled]=\"!f.valid\"\n      >\n        Register!\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/user-info.model */ "./src/app/shared/models/user-info.model.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_6__);







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.newUser = new _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_3__["userInfo"]();
        this.req = new XMLHttpRequest();
    }
    RegisterComponent.prototype.getAllCountries = function () {
        var _this = this;
        this.req.open("GET", "https://restcountries.eu/rest/v2/all?fields=name;flag");
        this.req.onreadystatechange = function () {
            if (_this.req.readyState == 4) {
                console.log(_this.req.status, _this.req.response);
                var x = JSON.parse(_this.req.response);
            }
        };
    };
    RegisterComponent.prototype.OnSubmit = function () {
        var _this = this;
        console.log(this.signupForm);
        this.signupForm.value.Password = crypto_js__WEBPACK_IMPORTED_MODULE_6___default.a.SHA256(this.signupForm.value.Password).toString();
        this.newUser.FirstName = this.signupForm.value.Firstname;
        this.newUser.LastName = this.signupForm.value.Lastname;
        this.newUser.Email = this.signupForm.value.Email;
        this.newUser.Age = this.signupForm.value.Age;
        this.newUser.Country = this.signupForm.value.Country;
        this.newUser.UserImage = this.signupForm.value.UserImage;
        this.newUser.Password = this.signupForm.value.Password;
        if (!this.newUser.Password.localeCompare(this.signupForm.value.ConfirmPassword)) {
            var index = this.newUser.Password.localeCompare(this.signupForm.value.ConfirmPassword);
            console.log("the password are equals.." + index);
            this.newUser.Password = this.signupForm.value.Password;
        }
        else {
            console.log("the password are not equal.");
        }
        this.userService.createUser(this.newUser).subscribe(function (res) {
            _this.router.navigate(["/login"]);
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "signupForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rules/rules.component.css":
/*!*******************************************!*\
  !*** ./src/app/rules/rules.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1bGVzL3J1bGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/rules/rules.component.html":
/*!********************************************!*\
  !*** ./src/app/rules/rules.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-dialog-content class=\"mat-typography\">\n  <img src=\"assets/pictures/game rule.jpeg\" style=\"height: 575px;\">\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-flat-button mat-dialog-close color=\"primary\">Back</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/rules/rules.component.ts":
/*!******************************************!*\
  !*** ./src/app/rules/rules.component.ts ***!
  \******************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RulesComponent = /** @class */ (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__(/*! ./rules.component.html */ "./src/app/rules/rules.component.html"),
            styles: [__webpack_require__(/*! ./rules.component.css */ "./src/app/rules/rules.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/CardRank.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/CardRank.ts ***!
  \*******************************************/
/*! exports provided: CardRank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRank", function() { return CardRank; });
var CardRank;
(function (CardRank) {
    CardRank[CardRank["OneOfHearts"] = 1] = "OneOfHearts";
    CardRank[CardRank["TwoOfHearts"] = 2] = "TwoOfHearts";
    CardRank[CardRank["ThreeOfHearts"] = 3] = "ThreeOfHearts";
    CardRank[CardRank["FourOfHearts"] = 4] = "FourOfHearts";
    CardRank[CardRank["FiveOfHearts"] = 5] = "FiveOfHearts";
    CardRank[CardRank["SixOfHearts"] = 6] = "SixOfHearts";
    CardRank[CardRank["SevenOfHearts"] = 7] = "SevenOfHearts";
    CardRank[CardRank["EightOfHearts"] = 8] = "EightOfHearts";
    CardRank[CardRank["NineOfHearts"] = 9] = "NineOfHearts";
    CardRank[CardRank["TenOfHearts"] = 10] = "TenOfHearts";
    CardRank[CardRank["JackOfHearts"] = 10] = "JackOfHearts";
    CardRank[CardRank["QueenOfHearts"] = 10] = "QueenOfHearts";
    CardRank[CardRank["KingOfHearts"] = -1] = "KingOfHearts";
    CardRank[CardRank["OneOfSpades"] = 1] = "OneOfSpades";
    CardRank[CardRank["TwoOfSpades"] = 2] = "TwoOfSpades";
    CardRank[CardRank["ThreeOfSpades"] = 3] = "ThreeOfSpades";
    CardRank[CardRank["FourOfSpades"] = 4] = "FourOfSpades";
    CardRank[CardRank["FiveOfSpades"] = 5] = "FiveOfSpades";
    CardRank[CardRank["SixOfSpades"] = 6] = "SixOfSpades";
    CardRank[CardRank["SevenOfSpades"] = 7] = "SevenOfSpades";
    CardRank[CardRank["EightOfSpades"] = 8] = "EightOfSpades";
    CardRank[CardRank["NineOfSpades"] = 9] = "NineOfSpades";
    CardRank[CardRank["TenOfSpades"] = 10] = "TenOfSpades";
    CardRank[CardRank["JackOfSpades"] = 10] = "JackOfSpades";
    CardRank[CardRank["QueenOfSpades"] = 10] = "QueenOfSpades";
    CardRank[CardRank["KingOfSpades"] = 10] = "KingOfSpades";
    CardRank[CardRank["OneOfClover"] = 1] = "OneOfClover";
    CardRank[CardRank["TwoOfClover"] = 2] = "TwoOfClover";
    CardRank[CardRank["ThreeOfClover"] = 3] = "ThreeOfClover";
    CardRank[CardRank["FourOfClover"] = 4] = "FourOfClover";
    CardRank[CardRank["FiveOfClover"] = 5] = "FiveOfClover";
    CardRank[CardRank["SixOfClover"] = 6] = "SixOfClover";
    CardRank[CardRank["SevenOfClover"] = 7] = "SevenOfClover";
    CardRank[CardRank["EightOfClover"] = 8] = "EightOfClover";
    CardRank[CardRank["NineOfClover"] = 9] = "NineOfClover";
    CardRank[CardRank["TenOfClover"] = 10] = "TenOfClover";
    CardRank[CardRank["JackOfClover"] = 10] = "JackOfClover";
    CardRank[CardRank["QueenOfClover"] = 10] = "QueenOfClover";
    CardRank[CardRank["KingOfClover"] = 10] = "KingOfClover";
    CardRank[CardRank["OneOfDiamond"] = 1] = "OneOfDiamond";
    CardRank[CardRank["TwoOfDiamond"] = 2] = "TwoOfDiamond";
    CardRank[CardRank["ThreeOfDiamond"] = 3] = "ThreeOfDiamond";
    CardRank[CardRank["FourOfDiamond"] = 4] = "FourOfDiamond";
    CardRank[CardRank["FiveOfDiamond"] = 5] = "FiveOfDiamond";
    CardRank[CardRank["SixOfDiamond"] = 6] = "SixOfDiamond";
    CardRank[CardRank["SevenOfDiamond"] = 7] = "SevenOfDiamond";
    CardRank[CardRank["EightOfDiamond"] = 8] = "EightOfDiamond";
    CardRank[CardRank["NineOfDiamond"] = 9] = "NineOfDiamond";
    CardRank[CardRank["TenOfDiamond"] = 10] = "TenOfDiamond";
    CardRank[CardRank["JackOfDiamond"] = 10] = "JackOfDiamond";
    CardRank[CardRank["QueenOfDiamond"] = 10] = "QueenOfDiamond";
    CardRank[CardRank["KingOfDiamond"] = -1] = "KingOfDiamond";
    CardRank[CardRank["FirstJoker"] = 0] = "FirstJoker";
    CardRank[CardRank["SecondJoker"] = 0] = "SecondJoker";
    CardRank[CardRank["ThirdJoker"] = 0] = "ThirdJoker";
})(CardRank || (CardRank = {}));


/***/ }),

/***/ "./src/app/shared/models/CardValue.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/CardValue.ts ***!
  \********************************************/
/*! exports provided: CardValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardValue", function() { return CardValue; });
var CardValue;
(function (CardValue) {
    CardValue[CardValue["OneOfHearts"] = 1] = "OneOfHearts";
    CardValue[CardValue["TwoOfHearts"] = 2] = "TwoOfHearts";
    CardValue[CardValue["ThreeOfHearts"] = 3] = "ThreeOfHearts";
    CardValue[CardValue["FourOfHearts"] = 4] = "FourOfHearts";
    CardValue[CardValue["FiveOfHearts"] = 5] = "FiveOfHearts";
    CardValue[CardValue["SixOfHearts"] = 6] = "SixOfHearts";
    CardValue[CardValue["SevenOfHearts"] = 7] = "SevenOfHearts";
    CardValue[CardValue["EightOfHearts"] = 8] = "EightOfHearts";
    CardValue[CardValue["NineOfHearts"] = 9] = "NineOfHearts";
    CardValue[CardValue["TenOfHearts"] = 10] = "TenOfHearts";
    CardValue[CardValue["JackOfHearts"] = 11] = "JackOfHearts";
    CardValue[CardValue["QueenOfHearts"] = 12] = "QueenOfHearts";
    CardValue[CardValue["KingOfHearts"] = 13] = "KingOfHearts";
    CardValue[CardValue["OneOfSpades"] = 14] = "OneOfSpades";
    CardValue[CardValue["TwoOfSpades"] = 15] = "TwoOfSpades";
    CardValue[CardValue["ThreeOfSpades"] = 16] = "ThreeOfSpades";
    CardValue[CardValue["FourOfSpades"] = 17] = "FourOfSpades";
    CardValue[CardValue["FiveOfSpades"] = 18] = "FiveOfSpades";
    CardValue[CardValue["SixOfSpades"] = 19] = "SixOfSpades";
    CardValue[CardValue["SevenOfSpades"] = 20] = "SevenOfSpades";
    CardValue[CardValue["EightOfSpades"] = 21] = "EightOfSpades";
    CardValue[CardValue["NineOfSpades"] = 22] = "NineOfSpades";
    CardValue[CardValue["TenOfSpades"] = 23] = "TenOfSpades";
    CardValue[CardValue["JackOfSpades"] = 24] = "JackOfSpades";
    CardValue[CardValue["QueenOfSpades"] = 25] = "QueenOfSpades";
    CardValue[CardValue["KingOfSpades"] = 26] = "KingOfSpades";
    CardValue[CardValue["OneOfClover"] = 27] = "OneOfClover";
    CardValue[CardValue["TwoOfClover"] = 28] = "TwoOfClover";
    CardValue[CardValue["ThreeOfClover"] = 29] = "ThreeOfClover";
    CardValue[CardValue["FourOfClover"] = 30] = "FourOfClover";
    CardValue[CardValue["FiveOfClover"] = 31] = "FiveOfClover";
    CardValue[CardValue["SixOfClover"] = 32] = "SixOfClover";
    CardValue[CardValue["SevenOfClover"] = 33] = "SevenOfClover";
    CardValue[CardValue["EightOfClover"] = 34] = "EightOfClover";
    CardValue[CardValue["NineOfClover"] = 35] = "NineOfClover";
    CardValue[CardValue["TenOfClover"] = 36] = "TenOfClover";
    CardValue[CardValue["JackOfClover"] = 37] = "JackOfClover";
    CardValue[CardValue["QueenOfClover"] = 38] = "QueenOfClover";
    CardValue[CardValue["KingOfClover"] = 39] = "KingOfClover";
    CardValue[CardValue["OneOfDiamond"] = 40] = "OneOfDiamond";
    CardValue[CardValue["TwoOfDiamond"] = 41] = "TwoOfDiamond";
    CardValue[CardValue["ThreeOfDiamond"] = 42] = "ThreeOfDiamond";
    CardValue[CardValue["FourOfDiamond"] = 43] = "FourOfDiamond";
    CardValue[CardValue["FiveOfDiamond"] = 44] = "FiveOfDiamond";
    CardValue[CardValue["SixOfDiamond"] = 45] = "SixOfDiamond";
    CardValue[CardValue["SevenOfDiamond"] = 46] = "SevenOfDiamond";
    CardValue[CardValue["EightOfDiamond"] = 47] = "EightOfDiamond";
    CardValue[CardValue["NineOfDiamond"] = 48] = "NineOfDiamond";
    CardValue[CardValue["TenOfDiamond"] = 49] = "TenOfDiamond";
    CardValue[CardValue["JackOfDiamond"] = 50] = "JackOfDiamond";
    CardValue[CardValue["QueenOfDiamond"] = 51] = "QueenOfDiamond";
    CardValue[CardValue["KingOfDiamond"] = 52] = "KingOfDiamond";
    CardValue[CardValue["FirstJoker"] = 53] = "FirstJoker";
    CardValue[CardValue["SecondJoker"] = 54] = "SecondJoker";
    CardValue[CardValue["ThirdJoker"] = 55] = "ThirdJoker";
})(CardValue || (CardValue = {}));


/***/ }),

/***/ "./src/app/shared/models/user-info.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/user-info.model.ts ***!
  \**************************************************/
/*! exports provided: userInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfo", function() { return userInfo; });
var userInfo = /** @class */ (function () {
    function userInfo() {
    }
    return userInfo;
}());



/***/ }),

/***/ "./src/app/shared/models/user-login-info.model.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/models/user-login-info.model.ts ***!
  \********************************************************/
/*! exports provided: userLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLoginInfo", function() { return userLoginInfo; });
var userLoginInfo = /** @class */ (function () {
    function userLoginInfo() {
    }
    return userLoginInfo;
}());



/***/ }),

/***/ "./src/app/shared/services/game.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/game.service.ts ***!
  \*************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var GameService = /** @class */ (function () {
    function GameService(myHttpClient) {
        this.myHttpClient = myHttpClient;
        this.winnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.myUserAuth = localStorage.getItem('authUser');
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.myUserAuth
            })
        };
    }
    GameService.prototype.startnewgame = function () {
        return this.myHttpClient.get("http://localhost:55727/api/GetStartNewGame", this.httpOptions);
    };
    GameService.prototype.continuegame = function () {
        return this.myHttpClient.get("http://localhost:55727/api/GetStartNewGame", this.httpOptions);
    };
    GameService.prototype.gameonrun = function (gameonrun) {
        return this.myHttpClient.put("http://localhost:55727/api/OnGameRun", gameonrun, this.httpOptions);
    };
    GameService.prototype.setwinner = function (winnerId, userRank, computerRank) {
        this.winnerSubject.next([winnerId, userRank, computerRank]);
        return this.myHttpClient.put("http://localhost:55727/api/PutSetwinnerGame", winnerId, this.httpOptions);
    };
    GameService.prototype.exitGame = function () {
        return this.myHttpClient.get("http://localhost:55727/api/GetExitGame", this.httpOptions);
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    // DI 
    function UserService(myHttpClient) {
        this.myHttpClient = myHttpClient;
        this.myUserAuth = localStorage.getItem('authUser');
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.myUserAuth
            })
        };
    }
    UserService.prototype.loginUser = function () {
        this.myUserAuth = localStorage.getItem('authUser');
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.myUserAuth
            })
        };
        return this.myHttpClient.get("http://localhost:55727/api/login", this.httpOptions);
    };
    UserService.prototype.getUserInfo = function () {
        return this.myHttpClient.get("http://localhost:55727/api/GetUserInfo", this.httpOptions);
    };
    UserService.prototype.createUser = function (newUser) {
        return this.myHttpClient.post("http://localhost:55727/api/register", newUser);
    };
    UserService.prototype.editUser = function (userDetails) {
        return this.myHttpClient.put("http://localhost:55727/api/updateuser", userDetails, this.httpOptions);
    };
    UserService.prototype.deleteUser = function () {
        return this.myHttpClient.delete("http://localhost:55727/api/deleteuser", this.httpOptions);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/updatedetails/updatedetails.component.css":
/*!***********************************************************!*\
  !*** ./src/app/updatedetails/updatedetails.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  margin-top: 10px;\r\n  color: whitesmoke;\r\n  text-align: center;\r\n  font-style: oblique;\r\n}\r\ndiv.container {\r\n  height: 525px;\r\n  width: 450px;\r\n  margin-top: 100px;\r\n  background: rgba(41, 41, 38, 0.82);\r\n}\r\n.box {\r\n  margin-top: 40px;\r\n}\r\n.field {\r\n  height: 50px;\r\n  width: 175px;\r\n  margin-left: 25px;\r\n  padding: 5px;\r\n  background: rgba(41, 41, 38, 0.82);\r\n  border-style: solid;\r\n  border-width: thin;\r\n  border-color: #e88955;\r\n}\r\n::-webkit-input-placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\n::-moz-placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\n::-ms-input-placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\n::placeholder {\r\n  color: white;\r\n  font-style: oblique;\r\n}\r\ninput {\r\n  color: white;\r\n\r\n  font-style: oblique;\r\n}\r\ninput:focus {\r\n  outline: none;\r\n}\r\n.btn-group button {\r\n  background-color: #e88955;\r\n  border: 1px solid rgba(49, 47, 45, 0.63); /* black with opacity border */\r\n  color: white; /* White text */\r\n  font-style: oblique;\r\n  padding: 10px 24px; /* Some padding */\r\n  margin-top: 7px;\r\n  cursor: pointer; /* Pointer/hand icon */\r\n  margin-left: 43px;\r\n  float: left; /* Float the buttons side by side */\r\n  width: 150px;\r\n  height: 50px;\r\n}\r\n/* Clear floats (clearfix hack) */\r\n.btn-group:after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n.btn-group button:not(:last-child) {\r\n  border-right: none; /* Prevent double borders */\r\n}\r\n/* Add a background color on hover */\r\n.btn-group button:hover {\r\n  background-color: rgba(49, 47, 45, 0.63);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlZGV0YWlscy91cGRhdGVkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBSEE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBSEE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBSEE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZOztFQUVaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsd0NBQXdDLEVBQUUsOEJBQThCO0VBQ3hFLFlBQVksRUFBRSxlQUFlO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBRSxpQkFBaUI7RUFDckMsZUFBZTtFQUNmLGVBQWUsRUFBRSxzQkFBc0I7RUFDdkMsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBRSxtQ0FBbUM7RUFDaEQsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBLGlDQUFpQztBQUNqQztFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsMkJBQTJCO0FBQ2pEO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0Usd0NBQXdDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlZGV0YWlscy91cGRhdGVkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufVxyXG5kaXYuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDUyNXB4O1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQxLCA0MSwgMzgsIDAuODIpO1xyXG59XHJcbi5ib3gge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLmZpZWxkIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQxLCA0MSwgMzgsIDAuODIpO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1jb2xvcjogI2U4ODk1NTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuaW5wdXQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufVxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLWdyb3VwIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ODk1NTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ5LCA0NywgNDUsIDAuNjMpOyAvKiBibGFjayB3aXRoIG9wYWNpdHkgYm9yZGVyICovXHJcbiAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0ICovXHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICBwYWRkaW5nOiAxMHB4IDI0cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIvaGFuZCBpY29uICovXHJcbiAgbWFyZ2luLWxlZnQ6IDQzcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7IC8qIEZsb2F0IHRoZSBidXR0b25zIHNpZGUgYnkgc2lkZSAqL1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAoY2xlYXJmaXggaGFjaykgKi9cclxuLmJ0bi1ncm91cDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLmJ0bi1ncm91cCBidXR0b246bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lOyAvKiBQcmV2ZW50IGRvdWJsZSBib3JkZXJzICovXHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cclxuLmJ0bi1ncm91cCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDQ3LCA0NSwgMC42Myk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/updatedetails/updatedetails.component.html":
/*!************************************************************!*\
  !*** ./src/app/updatedetails/updatedetails.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\n  rel=\"stylesheet\"\n  href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n  integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\"\n  crossorigin=\"anonymous\"\n/>\n\n<div class=\"image\">\n  <div class=\"container\">\n    <br />\n    <h1>Update your Details!</h1>\n    <form (ngSubmit)=\"sendDetails(f)\" #f=\"ngForm\">\n      <hr />\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          class=\"field\"\n          id=\"fName\"\n          ngModel\n          pattern=\"[a-zA-Z]*\"\n          name=\"Firstname\"\n          placeholder=\"{{ userinfo.FirstName }}\"\n        />\n        <input\n          type=\"text\"\n          class=\"field\"\n          id=\"lName\"\n          ngModel\n          pattern=\"[a-zA-Z]*\"\n          name=\"Lastname\"\n          placeholder=\"{{ userinfo.LastName }}\"\n        />\n      </div>\n      <hr />\n      <div class=\"form-group\">\n        <input\n          type=\"email\"\n          class=\"field\"\n          id=\"Email\"\n          ngModel\n          name=\"Email\"\n          placeholder=\"{{ userinfo.Email }}\"\n          email\n          #email=\"ngModel\"\n        />\n        <input\n          type=\"number\"\n          class=\"field\"\n          id=\"age\"\n          ngModel\n          pattern=\"[1-9]{1}[0-9]\"\n          name=\"Age\"\n          placeholder=\"{{ userinfo.Age }}\"\n          value=\"Age\"\n        />\n      </div>\n      <hr />\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          class=\"field\"\n          id=\"country\"\n          ngModel\n          name=\"Country\"\n          placeholder=\"{{ userinfo.Country }}\"\n        />\n        <input\n          type=\"file\"\n          class=\"field\"\n          id=\"image\"\n          ngModel\n          name=\"UserImage\"\n          placeholder=\"{{ userinfo.UserImage }}\"\n        />\n      </div>\n      <hr />\n      <div class=\"form-group\">\n        <input\n          type=\"password\"\n          class=\"field\"\n          id=\"password\"\n          ngModel\n          name=\"Password\"\n          placeholder=\"Password\"\n        />\n        <input\n          type=\"password\"\n          class=\"field\"\n          id=\"ConfirmPassword\"\n          ngModel\n          name=\"ConfirmPassword\"\n          placeholder=\"Confirm password\"\n        />\n      </div>\n      <div class=\"btn-group\">\n        <button\n          class=\"btn btn-success\"\n          type=\"submit\"\n          id=\"UpdateDetails\"\n          (click)=\"sendDetails()\"\n        >\n          UpdateDetails\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button\n          class=\"btn btn-warning\"\n          type=\"button\"\n          (click)=\"deleteUser()\"\n          id=\"deletUser\"\n        >\n          Delete User!\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/updatedetails/updatedetails.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/updatedetails/updatedetails.component.ts ***!
  \**********************************************************/
/*! exports provided: UpdatedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatedetailsComponent", function() { return UpdatedetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/user-info.model */ "./src/app/shared/models/user-info.model.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_6__);







var UpdatedetailsComponent = /** @class */ (function () {
    function UpdatedetailsComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userinfo = new _shared_models_user_info_model__WEBPACK_IMPORTED_MODULE_2__["userInfo"]();
    }
    UpdatedetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (res) {
            _this.userinfo.Id = res.Id;
            _this.userinfo.FirstName = res.FirstName;
            _this.userinfo.LastName = res.LastName;
            _this.userinfo.Email = res.Email;
            _this.userinfo.Age = res.Age;
            _this.userinfo.Country = res.Country;
            _this.userinfo.UserImage = res.UserImage;
            console.log(res);
            console.log(_this.userinfo);
        }, function (err) {
            console.log(err);
        });
    };
    UpdatedetailsComponent.prototype.sendDetails = function () {
        var _this = this;
        console.log(this.updateForm);
        this.userinfo.FirstName = this.updateForm.value.Firstname;
        this.userinfo.LastName = this.updateForm.value.Lastname;
        this.userinfo.Email = this.updateForm.value.Email;
        this.userinfo.Age = this.updateForm.value.Age;
        this.userinfo.Country = this.updateForm.value.Country;
        this.userinfo.UserImage = this.updateForm.value.UserImage;
        this.userinfo.Password = crypto_js__WEBPACK_IMPORTED_MODULE_6___default.a.SHA256(this.updateForm.value.Password).toString();
        console.log(this.userinfo);
        this.userService.editUser(this.userinfo).subscribe(function (res) {
            console.log(res);
            localStorage.clear();
            _this.router.navigate(["/login"]);
        }, function (err) {
            console.log(err);
        });
    };
    UpdatedetailsComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser().subscribe(function (res) {
            console.log(res, "im from delete..");
            localStorage.clear();
            _this.router.navigate(["/login"]);
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], UpdatedetailsComponent.prototype, "updateForm", void 0);
    UpdatedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-updatedetails",
            template: __webpack_require__(/*! ./updatedetails.component.html */ "./src/app/updatedetails/updatedetails.component.html"),
            styles: [__webpack_require__(/*! ./updatedetails.component.css */ "./src/app/updatedetails/updatedetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UpdatedetailsComponent);
    return UpdatedetailsComponent;
}());



/***/ }),

/***/ "./src/app/winner/winner.component.css":
/*!*********************************************!*\
  !*** ./src/app/winner/winner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbm5lci93aW5uZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/winner/winner.component.html":
/*!**********************************************!*\
  !*** ./src/app/winner/winner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>\n    {{ winner }} Win!\n  </p>\n\n  computer score: {{ computerScore}}\n  userScore: {{userScore}}\n</div>"

/***/ }),

/***/ "./src/app/winner/winner.component.ts":
/*!********************************************!*\
  !*** ./src/app/winner/winner.component.ts ***!
  \********************************************/
/*! exports provided: WinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnerComponent", function() { return WinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WinnerComponent = /** @class */ (function () {
    function WinnerComponent() {
    }
    WinnerComponent.prototype.ngOnInit = function () {
    };
    WinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-winner',
            template: __webpack_require__(/*! ./winner.component.html */ "./src/app/winner/winner.component.html"),
            styles: [__webpack_require__(/*! ./winner.component.css */ "./src/app/winner/winner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WinnerComponent);
    return WinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\naorb\OneDrive\Desktop\Google Drive\לימודים\Final Project -N-\Final-Project\UIL\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map