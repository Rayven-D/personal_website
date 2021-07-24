"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var global_vars_1 = require("./common/global-vars");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'rayven-website';
        this.activeLinkIndex = -1;
        this.isMobile = global_vars_1.GlobalVars.isMobile;
        this.navLinks = [
            {
                label: 'Home',
                link: './home',
                index: 0
            }, {
                label: 'Projects',
                link: './projects',
                index: 1
            },
            {
                label: 'API Projects',
                link: './api-projects',
                index: 2
            },
            {
                label: 'Resume',
                link: './resume',
                index: 3
            }, {
                label: 'Links',
                link: './links',
                index: 4
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.activeLinkIndex = _this.navLinks.indexOf(_this.navLinks.find(function (tab) { return tab.link === '.' + _this.router.url; }));
        });
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // true for mobile device
            document.addEventListener("DOMContentLoaded", function () {
                document.getElementsByTagName("body")[0].classList.add('mobile');
            });
            global_vars_1.GlobalVars.isMobile = true;
            this.isMobile = true;
        }
        else {
            document.addEventListener("DOMContentLoaded", function () {
                document.getElementsByTagName("body")[0].classList.add('desktop');
            });
            global_vars_1.GlobalVars.isMobile = false;
            this.isMobile = false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
