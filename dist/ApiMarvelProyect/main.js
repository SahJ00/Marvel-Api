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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-marvel.service.ts":
/*!***************************************!*\
  !*** ./src/app/api-marvel.service.ts ***!
  \***************************************/
/*! exports provided: ApiMarvelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiMarvelService", function() { return ApiMarvelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiMarvelService = /** @class */ (function () {
    function ApiMarvelService(http) {
        this.http = http;
        this.url = "https://gateway.marvel.com/v1/public/";
        this.key = "apikey=d6cf293cd8d387f452b11349e849e0c5&ts=688608000&hash=5c0a490309dd8bdd031d9cf69a968a9a";
    }
    ApiMarvelService.prototype.getAll = function (comic) {
        var urlComics = this.url + comic + this.key;
        return this.http.get(urlComics);
    };
    ApiMarvelService.prototype.getCharacter = function (characters) {
        var urlCharacter = this.url + characters + this.key;
        return this.http.get(urlCharacter);
    };
    ApiMarvelService.prototype.getCharacterComic = function (characters) {
        var urlCharacterComic = this.url + characters + this.key;
        return this.http.get(urlCharacterComic);
    };
    ApiMarvelService.prototype.getComics = function (title) {
        var urlComics = this.url + title + this.key;
        console.log(urlComics);
        return this.http.get(urlComics);
    };
    ApiMarvelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiMarvelService);
    return ApiMarvelService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-home></app-home>\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/routes.module */ "./src/app/routes/routes.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _comic_comic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comic/comic.component */ "./src/app/comic/comic.component.ts");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./character/character.component */ "./src/app/character/character.component.ts");
/* harmony import */ var _comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comic-detail/comic-detail.component */ "./src/app/comic-detail/comic-detail.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _api_marvel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api-marvel.service */ "./src/app/api-marvel.service.ts");
/* harmony import */ var _character_comic_character_comic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./character-comic/character-comic.component */ "./src/app/character-comic/character-comic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _comic_comic_component__WEBPACK_IMPORTED_MODULE_8__["ComicComponent"],
                _character_character_component__WEBPACK_IMPORTED_MODULE_9__["CharacterComponent"],
                _comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_10__["ComicDetailComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _character_comic_character_comic_component__WEBPACK_IMPORTED_MODULE_13__["CharacterComicComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routes_routes_module__WEBPACK_IMPORTED_MODULE_2__["RoutesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_api_marvel_service__WEBPACK_IMPORTED_MODULE_12__["ApiMarvelService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/character-comic/character-comic.component.css":
/*!***************************************************************!*\
  !*** ./src/app/character-comic/character-comic.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n  background: #fff;\n  border-left: 1px solid #f0141e;\n  border-right: 1px solid #f0141e;\n  height: 100% !important;\n\n}\n\n#error {\n  display: none;\n}\n"

/***/ }),

/***/ "./src/app/character-comic/character-comic.component.html":
/*!****************************************************************!*\
  !*** ./src/app/character-comic/character-comic.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"container\">\n        <div class=\"loading img-fluid\" *ngIf=\"loading\">\n          <img class=\"img-fluid mx-auto d-block\" src=\"../../assets/images/loading.gif\" />\n        </div>\n        <div class=\"row\">\n          <div class=\"card-group pt-3 pb-2 col-sm-3 col-md-3 \" *ngFor=\"let comic of comics\">\n            <div class=\"card hvr-grow m-2\">\n              <a [routerLink]=\"['/comic-details', comic.id]\">\n                <img src=\"{{comic.thumbnail.path}}.jpg\" alt=\"front page of comic\" class=\"img fluid card-img-top\">\n              </a>\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-center\">\n                  {{ comic.title }}\n                </h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <h3 class=\"m-2\">\n        Search\n      </h3>\n      <button name=\"search\" type=\"button\" class=\"btn btn-default\" (click)=\" searchComics(format.value, formatType.value, orderBy.value, dateFrom.value, dateTo.value, limit.value)\">Search</button>\n      <div id=\"error\" class=\"text-danger border border-danger m-2\"></div>\n      <h3 class=\"m-2\">\n        Filter\n      </h3>\n      <div class=\"form-group m-1\">\n        <label for=\"format\">Format:</label>\n        <select class=\"form-control\" #format>\n          <option style=\"display:none\" value class>select a format</option>\n          <option>comic</option>\n          <option>magazine</option>\n          <option>trade paperback</option>\n          <option>hardcover</option>\n          <option>digest</option>\n          <option>graphic novel</option>\n          <option>digital comic</option>\n          <option>infinite comic</option>\n        </select>\n      </div>\n      <div class=\"form-group m-1\">\n        <label for=\"formatType\">Format Type:</label>\n        <select class=\"form-control\" #formatType>\n          <option style=\"display:none\" value class>select a format type</option>\n          <option>comic</option>\n          <option>collection</option>\n        </select>\n      </div>\n      <div class=\"form-group m-1\">\n        <label for=\"orderBy\">Order By:</label>\n        <select class=\"form-control\" #orderBy>\n          <option style=\"display:none\" value class>select a order by</option>\n          <option disabled>--- ASC ---</option>\n          <option>focDate</option>\n          <option>title</option>\n          <option disabled>--- DESC ---</option>\n          <option>-focDate</option>\n          <option>-title</option>\n        </select>\n      </div>\n      <label for=\"dateRange\">Date Range:</label>\n      <div class=\"form-group m-1 form-inline\">\n        <label for=\"from\" class=\"m-1\">from:</label>\n        <select class=\"form-control\" class=\"m-1\" id=\"year-from\" value=\"1990\" #dateFrom>\n        </select>\n        <label for=\"to\" class=\"m-1\">to:</label>\n        <select class=\"form-control\" class=\"m-1\" id=\"year-to\" value=\"1990\" #dateTo>\n        </select>\n      </div>\n      <div class=\"form-group m-2\">\n        <label class=\"m-1\">\n          Limit:\n        </label>\n        <input type=\"text\" class=\"form-control m-1\" placeholder=\"100\" #limit>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/character-comic/character-comic.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/character-comic/character-comic.component.ts ***!
  \**************************************************************/
/*! exports provided: CharacterComicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComicComponent", function() { return CharacterComicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_marvel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-marvel.service */ "./src/app/api-marvel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterComicComponent = /** @class */ (function () {
    function CharacterComicComponent(route, ApiMarvelService) {
        this.route = route;
        this.ApiMarvelService = ApiMarvelService;
        this.comics = null;
        this.dateRange = "";
        this.name = "";
        this.id = null;
        this.comic = null;
    }
    CharacterComicComponent.prototype.ngOnInit = function () {
        var _this = this;
        var html = "<option style='display:none' value class>select a date</option>";
        // Capture params
        this.route.params.subscribe(function (params) {
            // Loading spinner
            _this.loading = true;
            // Load this function
            _this.loadData();
        });
        // Loop for year filter
        for (var y = 1990; y <= 2018; y++) {
            html += "<option>" + y + "</option>";
        }
        // Print year in the html
        document.getElementById("year-from").innerHTML = html;
        document.getElementById("year-to").innerHTML = html;
    };
    // Load the character comics with their id
    CharacterComicComponent.prototype.loadData = function () {
        var _this = this;
        // Capture ID params
        this.id = this.route.snapshot.params["id"];
        // URL characters comic
        this.comic = "characters/" + this.id + "/comics?";
        // Ajax
        this.ApiMarvelService.getAll(this.comic).subscribe(function (data) {
            _this.comics = data;
            _this.comics = _this.comics.data.results;
            // Change img not found
            for (var i = 0; i < _this.comics.length; i++) {
                if (_this.comics[i].thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                    _this.comics[i].thumbnail.path = "../../assets/images/img-not-found";
                }
            }
            _this.loading = false;
        });
    };
    // Function filter
    CharacterComicComponent.prototype.searchComics = function (format, formatType, orderBy, dateFrom, dateTo, limit) {
        var _this = this;
        this.comics = null;
        this.comic = "comics?";
        // Stop loading spinner
        this.loading = true;
        // 
        if (dateFrom != "" && dateTo != "") {
            this.dateRange = dateFrom + "-01-30%2C" + dateTo + "-12-30";
        }
        // Filter Dictionary 
        var filters = {
            format: format,
            formatType: formatType,
            orderBy: orderBy,
            dateRange: this.dateRange,
            limit: limit
        };
        // Generate de url with filters
        for (var filter in filters) {
            if (filters[filter] != "") {
                this.comic += filter + "=" + filters[filter] + "&";
            }
        }
        // Ajax
        this.ApiMarvelService.getComics(this.comic).subscribe(function (data) {
            document.getElementById("error").setAttribute("style", "display: none;");
            _this.comics = data;
            _this.comics = _this.comics.data.results;
            // Delete comic that does not have frontpage
            for (var i = 0; i < _this.comics.length; i++) {
                if (_this.comics[i].images.length === 0) {
                    _this.comics.splice(i, 1);
                    i--;
                }
            }
            // Change img not found
            for (var i = 0; i < _this.comics.length; i++) {
                if (_this.comics[i].thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                    _this.comics[i].thumbnail.path = "../../assets/images/img-not-found";
                }
            }
            // Message
            if (_this.comics.length === 0) {
                document.getElementById("error").setAttribute("style", "display: block;");
                document.getElementById("error").innerHTML = "there are no comics available with the filters";
            }
            // Stop loading spinner
            _this.loading = false;
        });
    };
    CharacterComicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-comic',
            template: __webpack_require__(/*! ./character-comic.component.html */ "./src/app/character-comic/character-comic.component.html"),
            styles: [__webpack_require__(/*! ./character-comic.component.css */ "./src/app/character-comic/character-comic.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _api_marvel_service__WEBPACK_IMPORTED_MODULE_1__["ApiMarvelService"]])
    ], CharacterComicComponent);
    return CharacterComicComponent;
}());



/***/ }),

/***/ "./src/app/character/character.component.css":
/*!***************************************************!*\
  !*** ./src/app/character/character.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n  background: #fff;\n  border-left: 1px solid #f0141e;\n  border-right: 1px solid #f0141e;\n  height: 100% !important;\n}\n\n#error {\n  display: none;\n}\n\n\n"

/***/ }),

/***/ "./src/app/character/character.component.html":
/*!****************************************************!*\
  !*** ./src/app/character/character.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"container col-md-11\">\n\t\t\t<form role=\"form\" class=\"form-inline m-3\">\n\t\t\t\t<div class=\"form-group m-1\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\tSearch Character:\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control m-1\" placeholder=\"hulk\" #name>\n\t\t\t\t</div>\n\t\t\t\t<button name=\"search\" type=\"button\" class=\"btn btn-default\" (click)=\"getCharacter(name.value)\">Search</button>\n\t\t\t</form>\n\t\t\t<div id=\"error\" class=\"text-danger border border-danger m-2\"></div>\n\t\t\t<div class=\"loading img-fluid m-4 \" *ngIf=\"loading\">\n\t\t\t\t<img class=\"img-fluid mx-auto d-block\" src=\"../../assets/images/loading.gif\"/>\n\t\t\t</div>\n\t\t\t<div class=\"row text-center\" *ngFor=\"let character of characters\">\n\t\t\t\t<div class=\"col-md-3 m-3\">\n\t\t\t\t\t<img src=\"{{character.thumbnail.path}}.jpg\" alt=\"picture of the character\" class=\"img fluid card-img-top\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7 m-3\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t{{ character.name }}\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t{{ character.description }}\n\t\t\t\t\t</p>\n\t\t\t\t\t<a [routerLink]=\"['/character-comic', character.id]\">see the comics</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/character/character.component.ts":
/*!**************************************************!*\
  !*** ./src/app/character/character.component.ts ***!
  \**************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_marvel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-marvel.service */ "./src/app/api-marvel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(ApiMarvelService) {
        this.ApiMarvelService = ApiMarvelService;
        this.characters = null;
    }
    CharacterComponent.prototype.ngOnInit = function () {
    };
    // Function Character
    CharacterComponent.prototype.getCharacter = function (name) {
        var _this = this;
        // // Loading spinner
        this.loading = true;
        // Generate character url
        var characters = "characters?name=" + name + "&";
        // Ajax
        this.ApiMarvelService.getCharacter(characters).subscribe(function (data) {
            document.getElementById("error").setAttribute("style", "display: none;");
            _this.characters = data;
            _this.characters = _this.characters.data.results;
            // Message
            if (_this.characters.length === 0) {
                document.getElementById("error").setAttribute("style", "display: block;");
                document.getElementById("error").innerHTML = "enter the name correctly";
            }
            // Stop loading spinner
            _this.loading = false;
        });
        this.characters = null;
    };
    CharacterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character',
            template: __webpack_require__(/*! ./character.component.html */ "./src/app/character/character.component.html"),
            styles: [__webpack_require__(/*! ./character.component.css */ "./src/app/character/character.component.css")]
        }),
        __metadata("design:paramtypes", [_api_marvel_service__WEBPACK_IMPORTED_MODULE_1__["ApiMarvelService"]])
    ], CharacterComponent);
    return CharacterComponent;
}());



/***/ }),

/***/ "./src/app/comic-detail/comic-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/comic-detail/comic-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background: #fff;\r\n  border-left: 1px solid #f0141e;\r\n  border-right: 1px solid #f0141e;\r\n  height: 100% !important;\r\n}"

/***/ }),

/***/ "./src/app/comic-detail/comic-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/comic-detail/comic-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"container col-md-11\">\n      <div class=\"loading img-fluid m-4 \" *ngIf=\"loading\">\n        <img class=\"img-fluid mx-auto d-block\" src=\"../../assets/images/loading.gif\" />\n      </div>\n      <div class=\"row text-center\" *ngFor=\"let comic of comics\">\n        <div class=\"col-md-3 m-3\">\n          <img src=\"{{comic.images[0].path}}.jpg\" alt=\"front page of comic\" class=\"img fluid card-img-top\">\n        </div>\n        <div class=\"col-md-7 m-3\">\n          <h3>\n            {{ comic.title }}\n          </h3>\n          <p>\n            <strong>Description:</strong>\n            <br> {{ comic.description }}\n          </p>\n          <p>\n            <strong>Price:</strong> {{ comic.prices[0].price }}$\n          </p>\n          <p>\n            <strong>Format:</strong> {{ comic.format }}\n          </p>\n          <p>\n            <strong>ISBN:</strong> {{ comic.isbn }}\n          </p>\n          <p>\n            <strong>Page Count:</strong> {{ comic.pageCount }}\n          </p>\n          <p>\n            <strong>Creators:</strong>\n          </p>\n          <div *ngFor=\"let creator of comic.creators.items\">\n            <strong>Name:</strong> {{ creator.name }}, {{ creator.role }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comic-detail/comic-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comic-detail/comic-detail.component.ts ***!
  \********************************************************/
/*! exports provided: ComicDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicDetailComponent", function() { return ComicDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_marvel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-marvel.service */ "./src/app/api-marvel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComicDetailComponent = /** @class */ (function () {
    function ComicDetailComponent(route, ApiMarvelService) {
        this.route = route;
        this.ApiMarvelService = ApiMarvelService;
        this.comics = null;
        this.id = null;
        this.comic = null;
        this.obj = { path: "../../assets/images/img-not-found" };
    }
    ComicDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Capture params
        this.route.params.subscribe(function (params) {
            // Loading spinner
            _this.loading = true;
            // Load this function
            _this.loadData();
        });
    };
    // Load the comics with their id
    ComicDetailComponent.prototype.loadData = function () {
        var _this = this;
        // Capture ID params
        this.id = this.route.snapshot.params["id"];
        // URL characters comic
        this.comic = "comics/" + this.id + "?";
        // Ajax
        this.ApiMarvelService.getAll(this.comic).subscribe(function (data) {
            _this.comics = data;
            _this.comics = _this.comics.data.results;
            // Change img not found
            for (var i = 0; i < _this.comics.length; i++) {
                if (_this.comics[i].images.length == 0) {
                    _this.comics[i].images.push(_this.obj);
                }
                else if (_this.comics[i].images["0"].path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                    _this.comics[i].images["0"].path = "../../assets/images/img-not-found";
                }
            }
            _this.loading = false;
        });
    };
    ComicDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comic-detail',
            template: __webpack_require__(/*! ./comic-detail.component.html */ "./src/app/comic-detail/comic-detail.component.html"),
            styles: [__webpack_require__(/*! ./comic-detail.component.css */ "./src/app/comic-detail/comic-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _api_marvel_service__WEBPACK_IMPORTED_MODULE_1__["ApiMarvelService"]])
    ], ComicDetailComponent);
    return ComicDetailComponent;
}());



/***/ }),

/***/ "./src/app/comic/comic.component.css":
/*!*******************************************!*\
  !*** ./src/app/comic/comic.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n  background: #fff;\n  border-left: 1px solid #f0141e;\n  border-right: 1px solid #f0141e;\n  height: 100% !important;\n}\n\n#error {\n  display: none;\n}"

/***/ }),

/***/ "./src/app/comic/comic.component.html":
/*!********************************************!*\
  !*** ./src/app/comic/comic.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"container bg-main-container\">\n        <div class=\"loading img-fluid\" *ngIf=\"loading\">\n          <img class=\"img-fluid mx-auto d-block\" src=\"../../assets/images/loading.gif\" />\n        </div>\n        <div class=\"row\">\n          <div class=\"card-group pt-3 pb-2 col-sm-3 col-md-3 \" *ngFor=\"let comic of comics\">\n            <div class=\"card hvr-grow m-2\">\n              <a [routerLink]=\"['/comic-details', comic.id]\">\n                <img src=\"{{comic.images[0].path}}.jpg\" alt=\"front page of comic\" class=\"img fluid card-img-top\">\n              </a>\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-center\">\n                  {{ comic.title }}\n                </h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <h3 class=\"m-2\">\n        Search\n      </h3>\n      <form role=\"form\" class=\"form-inline\">\n        <div class=\"form-group m-2\">\n          <label class=\"m-1\">\n            Comic's Name:\n          </label>\n          <input type=\"text\" class=\"form-control m-1\" placeholder=\"x-men\" #name>\n        </div>\n        <button name=\"search\" type=\"button\" class=\"btn btn-default\" (click)=\"searchComics(name.value, format.value, formatType.value, orderBy.value, dateFrom.value, dateTo.value, limit.value)\">Search</button>\n      </form>\n      <div id=\"error\" class=\"text-danger border border-danger m-2\"></div>\n      <h3 class=\"m-2\">\n        Filter\n      </h3>\n      <div class=\"form-group m-1\">\n        <label for=\"format\">Format:</label>\n        <select class=\"form-control\" #format>\n          <option style=\"display:none\" value class>select a format</option>\n          <option>comic</option>\n          <option>magazine</option>\n          <option>trade paperback</option>\n          <option>hardcover</option>\n          <option>digest</option>\n          <option>graphic novel</option>\n          <option>digital comic</option>\n          <option>infinite comic</option>\n        </select>\n      </div>\n      <div class=\"form-group m-1\">\n        <label for=\"formatType\">Format Type:</label>\n        <select class=\"form-control\" #formatType>\n          <option style=\"display:none\" value class>select a format type</option>\n          <option>comic</option>\n          <option>collection</option>\n        </select>\n      </div>\n      <div class=\"form-group m-1\">\n        <label for=\"orderBy\">Order By:</label>\n        <select class=\"form-control\" #orderBy>\n          <option style=\"display:none\" value class>select a order by</option>\n          <option disabled>--- ASC ---</option>\n          <option>focDate</option>\n          <option>title</option>\n          <option disabled>--- DESC ---</option>\n          <option>-focDate</option>\n          <option>-title</option>\n        </select>\n      </div>\n      <label for=\"dateRange\">Date Range:</label>\n      <div class=\"form-group m-1 form-inline\">\n        <label for=\"from\" class=\"m-1\">from:</label>\n        <select class=\"form-control\" class=\"m-1\" id=\"year-from\" value=\"1990\" #dateFrom>\n        </select>\n        <label for=\"to\" class=\"m-1\">to:</label>\n        <select class=\"form-control\" class=\"m-1\" id=\"year-to\" value=\"1990\" #dateTo>\n        </select>\n      </div>\n      <div class=\"form-group m-2\">\n        <label class=\"m-1\">\n          Limit:\n        </label>\n        <input type=\"text\" class=\"form-control m-1\" placeholder=\"100\" #limit>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comic/comic.component.ts":
/*!******************************************!*\
  !*** ./src/app/comic/comic.component.ts ***!
  \******************************************/
/*! exports provided: ComicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicComponent", function() { return ComicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_marvel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-marvel.service */ "./src/app/api-marvel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComicComponent = /** @class */ (function () {
    function ComicComponent(ApiMarvelService) {
        this.ApiMarvelService = ApiMarvelService;
        this.comics = null;
        this.dateRange = "";
        this.name = "";
        this.comic = "comics?";
    }
    ComicComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Loading spinner
        this.loading = true;
        var html = "<option style='display:none' value class>select a date</option>";
        // Ajax
        this.ApiMarvelService.getAll(this.comic).subscribe(function (data) {
            _this.comics = data;
            _this.comics = _this.comics.data.results;
            // Delete comic that does not have frontpage
            for (var i = 0; i < _this.comics.length; i++) {
                if (_this.comics[i].images.length === 0) {
                    _this.comics.splice(i, 1);
                    i--;
                }
            }
            _this.loading = false;
        });
        // Loop for year filter
        for (var y = 1990; y <= 2018; y++) {
            html += "<option>" + y + "</option>";
        }
        // Print year in the html
        document.getElementById("year-from").innerHTML = html;
        document.getElementById("year-to").innerHTML = html;
    };
    // Function filter
    ComicComponent.prototype.searchComics = function (name, format, formatType, orderBy, dateFrom, dateTo, limit) {
        var _this = this;
        this.comics = null;
        this.comic = "comics?";
        // Stop loading spinner
        this.loading = true;
        // Replace spaces
        this.name = name.replace(" ", "%20");
        // 
        if (dateFrom != "" && dateTo != "") {
            this.dateRange = dateFrom + "-01-30%2C" + dateTo + "-12-30";
        }
        // Filter Dictionary 
        var filters = {
            title: this.name,
            format: format,
            formatType: formatType,
            orderBy: orderBy,
            dateRange: this.dateRange,
            limit: limit
        };
        // Generate de url with filters
        for (var filter in filters) {
            if (filters[filter] != "") {
                this.comic += filter + "=" + filters[filter] + "&";
            }
        }
        // Ajax
        this.ApiMarvelService.getComics(this.comic).subscribe(function (data) {
            document.getElementById("error").setAttribute("style", "display: none;");
            _this.comics = data;
            _this.comics = _this.comics.data.results;
            // Delete comic that does not have frontpage
            for (var i = 0; i < _this.comics.length; i++) {
                if (_this.comics[i].images.length === 0) {
                    _this.comics.splice(i, 1);
                    i--;
                }
            }
            // Change img not found
            for (var i = 0; i < _this.comics.length; i++) {
                if (_this.comics[i].thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                    _this.comics[i].thumbnail.path = "../../assets/images/img-not-found";
                }
            }
            // Message
            if (_this.comics.length === 0) {
                document.getElementById("error").setAttribute("style", "display: block;");
                document.getElementById("error").innerHTML = "there are no comics available with the filters";
            }
            // Stop loading spinner
            _this.loading = false;
        });
    };
    ComicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comic',
            template: __webpack_require__(/*! ./comic.component.html */ "./src/app/comic/comic.component.html"),
            styles: [__webpack_require__(/*! ./comic.component.css */ "./src/app/comic/comic.component.css")]
        }),
        __metadata("design:paramtypes", [_api_marvel_service__WEBPACK_IMPORTED_MODULE_1__["ApiMarvelService"]])
    ], ComicComponent);
    return ComicComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: #f0141e;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container-fluid footer\">\n    <div class=\"container\">\n      <nav class=\"navbar navbar-expand-lg navbar-light\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item menu-footer\">\n            <a routerLink=\"\" class=\"nav-link nav-menu\">Home</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  font-family: Arial, Helvetica, sans-serif !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  color: #fff !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.nav-menu:hover {\n  background: #b50f16;\n  padding-top: 9px;\n  padding-bottom: 9px;\n  border-bottom: 3px solid #fff;\n}\n\n.header {\n  background: #f0141e;\n\n}\n\n.menu-header {\n  box-shadow: 0px 3px 5px 0px rgba(181, 15, 22, 1);\n}\n\n.img-header {\n  border: 1px solid black;\n}\n\n.logo {\n  width: 95px;\n  height: 35px;\n}\n\n.menu {\n  background: #f0141e;\n}\n\n.no-pl-pr {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.no-pt-pb {\n  padding-bottom: 0px !important;\n  padding-top: 0px !important;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-fluid header\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-12 no-pl-pr\">\n        <img class=\"img-fluid mt-3 img-header\" src=\"../assets/images/banner.png\" alt=\"banner de marvel\">\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid header menu-header\">\n    <div class=\"container menu\">\n      <nav class=\"navbar navbar-expand-lg navbar-light no-pt-pb\">\n        <a class=\"navbar-brand\" href=\"\">\n          <img class=\"logo\" src=\"../assets/images/marvel.png\" alt=\"icono marvel\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n          <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item\">\n              <a routerLink=\"\" class=\"nav-link nav-menu\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a routerLink=\"comics\" class=\"nav-link nav-menu\">Comics</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background: #fff;\r\n  border-left: 1px solid #f0141e;\r\n  border-right: 1px solid #f0141e;\r\n  height: 100% !important;\r\n}"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"container col-md-11\">\n        <img class=\"img-fluid mx-auto d-block m-4\" src=\"../../assets/images/not-found.jpg\"/>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _comic_comic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comic/comic.component */ "./src/app/comic/comic.component.ts");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../character/character.component */ "./src/app/character/character.component.ts");
/* harmony import */ var _comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comic-detail/comic-detail.component */ "./src/app/comic-detail/comic-detail.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _character_comic_character_comic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../character-comic/character-comic.component */ "./src/app/character-comic/character-comic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: _character_character_component__WEBPACK_IMPORTED_MODULE_4__["CharacterComponent"] },
    { path: 'comics', component: _comic_comic_component__WEBPACK_IMPORTED_MODULE_3__["ComicComponent"] },
    { path: 'character-comic/:id', component: _character_comic_character_comic_component__WEBPACK_IMPORTED_MODULE_7__["CharacterComicComponent"] },
    { path: 'comic-details/:id', component: _comic_detail_comic_detail_component__WEBPACK_IMPORTED_MODULE_5__["ComicDetailComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], RoutesModule);
    return RoutesModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CursoDaw\marvel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map