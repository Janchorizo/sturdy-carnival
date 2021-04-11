(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jancho/projects/sturdy-carnival/src/main.ts */"zUnb");


/***/ }),

/***/ "7oqY":
/*!******************************************************!*\
  !*** ./src/app/exam-editor/exam-editor.component.ts ***!
  \******************************************************/
/*! exports provided: ExamEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamEditorComponent", function() { return ExamEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _exams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exams.service */ "mo/v");


class ExamEditorComponent {
    constructor(examsService) {
        this.examsService = examsService;
        this.score = 50;
    }
    ngOnInit() {
    }
    onIncrementClick() {
        this.score = Math.min(100, this.score + 1);
    }
    onDecrementClick() {
        this.score = Math.max(0, this.score - 1);
    }
    onAddClick() {
        this.examsService.addResult(this.score);
    }
}
ExamEditorComponent.ɵfac = function ExamEditorComponent_Factory(t) { return new (t || ExamEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_exams_service__WEBPACK_IMPORTED_MODULE_1__["ExamsService"])); };
ExamEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamEditorComponent, selectors: [["app-exam-editor"]], decls: 9, vars: 1, consts: [[1, "examEditor"], [1, "arrowButton", 3, "click"], [1, "createButton", "animate__animated", "animate__slideInUp", "animate__faster", 3, "click"]], template: function ExamEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamEditorComponent_Template_button_click_1_listener() { return ctx.onIncrementClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \uD83E\uDC91 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamEditorComponent_Template_button_click_5_listener() { return ctx.onDecrementClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \uD83E\uDC93 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamEditorComponent_Template_button_click_7_listener() { return ctx.onAddClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score);
    } }, styles: [".examEditor[_ngcontent-%COMP%]{\n    position: relative;\n    display: flex;\n    width: 70px;\n    height: 100px;\n    margin: .4em .2em;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 5px 15px rgba(36, 37, 38, 0.18);\n}\n.examEditor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    font-family: kiwi;\n    font-size: 24px;\n    color: darkslategrey;\n}\n.examEditor[_ngcontent-%COMP%]   button.createButton[_ngcontent-%COMP%]{\n    display: none;\n    position: absolute;\n    bottom: -1em;\n    padding: 2px 6px;\n    border: solid 2px #9381FF;\n    border-radius: 10px;\n    background-color: snow;\n    font-family: kiwi;\n    font-weight: 400;\n    color: #9381FF;\n    cursor: pointer;\n}\n.examEditor[_ngcontent-%COMP%]   button.createButton[_ngcontent-%COMP%]:hover{\n    border-color: whitesmoke;\n    background-color: #9381FF;\n    color: whitesmoke;\n}\n.examEditor[_ngcontent-%COMP%]:hover   button.createButton[_ngcontent-%COMP%]{\n    display: initial;\n}\n.arrowButton[_ngcontent-%COMP%]{\n    background: none;\n    border:none;\n    font-size: 24px;\n    font-weight: bold;\n    color: darkslategrey;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZDQUE2QztBQUNqRDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkIiLCJmaWxlIjoiZXhhbS1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtRWRpdG9ye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAuNGVtIC4yZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgzNiwgMzcsIDM4LCAwLjE4KTtcbn1cbi5leGFtRWRpdG9yIHNwYW57XG4gICAgZm9udC1mYW1pbHk6IGtpd2k7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xufVxuLmV4YW1FZGl0b3IgYnV0dG9uLmNyZWF0ZUJ1dHRvbntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xZW07XG4gICAgcGFkZGluZzogMnB4IDZweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjOTM4MUZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc25vdztcbiAgICBmb250LWZhbWlseToga2l3aTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjOTM4MUZGO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5leGFtRWRpdG9yIGJ1dHRvbi5jcmVhdGVCdXR0b246aG92ZXJ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MzgxRkY7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG59XG4uZXhhbUVkaXRvcjpob3ZlciBidXR0b24uY3JlYXRlQnV0dG9ue1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG59XG4uYXJyb3dCdXR0b257XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ "8pis":
/*!****************************************!*\
  !*** ./src/app/mark-breaks.service.ts ***!
  \****************************************/
/*! exports provided: MarkBreaksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkBreaksService", function() { return MarkBreaksService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_redux_markBreaksActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/redux/markBreaksActions */ "HiYt");



class MarkBreaksService {
    constructor(appStore, markBreaksActions) {
        this.appStore = appStore;
        this.markBreaksActions = markBreaksActions;
        const breaks = this.appStore.getState().markBreaks;
        this.markBreaks = breaks;
        this.markBreaksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](breaks);
        this.unsubscribeStore = this.appStore.subscribe(this.handleStoreUpdate.bind(this));
    }
    handleStoreUpdate() {
        const breaks = this.appStore.getState().markBreaks;
        this.markBreaks = breaks;
        this.markBreaksSubject.next(breaks);
    }
    getBreaks() {
        return this.markBreaksSubject;
    }
    setBreak(mark, score) {
        const payload = { mark, score };
        this.appStore.dispatch(this.markBreaksActions.setBreak(payload));
    }
    calculateMark(score) {
        let mark = 'E';
        const scores = Object.entries(this.markBreaks)
            .sort((a, b) => a[0] < b[0] ? 1 : -1);
        scores.forEach((markBreak) => {
            if (score >= markBreak[1]) {
                mark = markBreak[0];
            }
        });
        return mark;
    }
}
MarkBreaksService.ɵfac = function MarkBreaksService_Factory(t) { return new (t || MarkBreaksService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_redux_markBreaksActions__WEBPACK_IMPORTED_MODULE_2__["MarkBreaksActions"])); };
MarkBreaksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MarkBreaksService, factory: MarkBreaksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BmQw":
/*!****************************!*\
  !*** ./src/redux/types.ts ***!
  \****************************/
/*! exports provided: createActionGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActionGenerator", function() { return createActionGenerator; });
function createActionGenerator(type) {
    return (payload, error = false) => ({ type, payload, error });
}


/***/ }),

/***/ "F9Z+":
/*!*********************************!*\
  !*** ./src/redux/appReducer.ts ***!
  \*********************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "ANjH");
/* harmony import */ var _examsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examsReducer */ "oj4s");
/* harmony import */ var _markBreaksReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markBreaksReducer */ "jVQy");



const appReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    exams: _examsReducer__WEBPACK_IMPORTED_MODULE_1__["examsReducer"],
    markBreaks: _markBreaksReducer__WEBPACK_IMPORTED_MODULE_2__["markBreaksReducer"],
});


/***/ }),

/***/ "G1WX":
/*!******************************************!*\
  !*** ./src/app/exams/exams.component.ts ***!
  \******************************************/
/*! exports provided: ExamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsComponent", function() { return ExamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _exams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exams.service */ "mo/v");
/* harmony import */ var _exam_editor_exam_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exam-editor/exam-editor.component */ "7oqY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../exam/exam.component */ "KPts");





function ExamsComponent_app_exam_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-exam", 2);
} if (rf & 2) {
    const exam_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r2)("score", exam_r1);
} }
class ExamsComponent {
    constructor(examsService) {
        this.examsService = examsService;
    }
    ngOnInit() {
        this.getResults();
    }
    getResults() {
        this.examsService.getResults()
            .subscribe((results) => {
            this.examResults = results;
        });
    }
    onAddClick() {
        this.examsService.addResult(Math.random() * 10);
    }
}
ExamsComponent.ɵfac = function ExamsComponent_Factory(t) { return new (t || ExamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_exams_service__WEBPACK_IMPORTED_MODULE_1__["ExamsService"])); };
ExamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamsComponent, selectors: [["app-exams"]], decls: 3, vars: 1, consts: [["id", "exam-container"], [3, "index", "score", 4, "ngFor", "ngForOf"], [3, "index", "score"]], template: function ExamsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-exam-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamsComponent_app_exam_2_Template, 1, 2, "app-exam", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.examResults);
    } }, directives: [_exam_editor_exam_editor_component__WEBPACK_IMPORTED_MODULE_2__["ExamEditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _exam_exam_component__WEBPACK_IMPORTED_MODULE_4__["ExamComponent"]], styles: ["#exam-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJleGFtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2V4YW0tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufSJdfQ== */"] });


/***/ }),

/***/ "HiYt":
/*!****************************************!*\
  !*** ./src/redux/markBreaksActions.ts ***!
  \****************************************/
/*! exports provided: SET_BREAK_ACTION, setBreak, MarkBreaksActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BREAK_ACTION", function() { return SET_BREAK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBreak", function() { return setBreak; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkBreaksActions", function() { return MarkBreaksActions; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "BmQw");

// Action types
const SET_BREAK_ACTION = 'SET_BREAK_ACTION';
// Action generators
const setBreak = Object(_types__WEBPACK_IMPORTED_MODULE_0__["createActionGenerator"])(SET_BREAK_ACTION);
// For bootstrapping purposes
class MarkBreaksActions {
    constructor() {
        this.setBreak = setBreak;
    }
}


/***/ }),

/***/ "KPts":
/*!****************************************!*\
  !*** ./src/app/exam/exam.component.ts ***!
  \****************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _exams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exams.service */ "mo/v");
/* harmony import */ var _mark_breaks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mark-breaks.service */ "8pis");



class ExamComponent {
    constructor(examsService, markBreaksService) {
        this.examsService = examsService;
        this.markBreaksService = markBreaksService;
        this.mark = this.markBreaksService.calculateMark(this.score);
    }
    ngOnInit() {
        this.getBreaks();
    }
    getBreaks() {
        this.markBreaksService.getBreaks()
            .subscribe(() => {
            this.mark = this.markBreaksService.calculateMark(this.score);
        });
    }
    onDeleteClick() {
        this.examsService.removeResult(this.index);
    }
}
ExamComponent.ɵfac = function ExamComponent_Factory(t) { return new (t || ExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_exams_service__WEBPACK_IMPORTED_MODULE_1__["ExamsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mark_breaks_service__WEBPACK_IMPORTED_MODULE_2__["MarkBreaksService"])); };
ExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamComponent, selectors: [["app-exam"]], inputs: { index: "index", score: "score" }, decls: 7, vars: 2, consts: [[1, "exam"], [1, "mark"], [1, "score"], [1, "animate__animated", "animate__slideInUp", "animate__faster", 3, "click"]], template: function ExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamComponent_Template_button_click_5_listener() { return ctx.onDeleteClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score);
    } }, styles: [".exam[_ngcontent-%COMP%]{\n    position: relative;\n    display: flex;\n    width: 70px;\n    height: 100px;\n    margin: .4em .2em;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 5px 15px rgba(36, 37, 38, 0.18);\n}\n.exam[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    font-family: kiwi;\n    font-size: 24px;\n    color: darkslategrey;\n}\n.exam[_ngcontent-%COMP%]   span.mark[_ngcontent-%COMP%]{\n    font-size: 16px;\n    font-weight: bold;\n    color: firebrick;\n    display: block;\n    width: 1.5em;\n    height: 1.5em;\n    border-radius: 50%;\n    border: solid 3px firebrick;\n    text-align: center;\n    position: absolute;\n    top: .1em;\n    right: .1em;\n}\n.exam[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    display: none;\n    position: absolute;\n    bottom: -1em;\n    padding: 2px;\n    border: solid 2px #9381FF;\n    border-radius: 10px;\n    background-color: snow;\n    font-family: kiwi;\n    font-weight: 400;\n    color: #9381FF;\n    cursor: pointer;\n}\n.exam[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\n    border-color: whitesmoke;\n    background-color: #9381FF;\n    color: whitesmoke;\n}\n.exam[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{\n    display: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImV4YW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFte1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAuNGVtIC4yZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgzNiwgMzcsIDM4LCAwLjE4KTtcbn1cbi5leGFtIHNwYW57XG4gICAgZm9udC1mYW1pbHk6IGtpd2k7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xufVxuLmV4YW0gc3Bhbi5tYXJre1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogZmlyZWJyaWNrO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IHNvbGlkIDNweCBmaXJlYnJpY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC4xZW07XG4gICAgcmlnaHQ6IC4xZW07XG59XG4uZXhhbSBidXR0b257XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMWVtO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjOTM4MUZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc25vdztcbiAgICBmb250LWZhbWlseToga2l3aTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjOTM4MUZGO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5leGFtIGJ1dHRvbjpob3ZlcntcbiAgICBib3JkZXItY29sb3I6IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzODFGRjtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5leGFtOmhvdmVyIGJ1dHRvbntcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xufSJdfQ== */"] });


/***/ }),

/***/ "MYvm":
/*!****************************************************************!*\
  !*** ./src/app/liquid-container/liquid-container.component.ts ***!
  \****************************************************************/
/*! exports provided: LiquidContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidContainerComponent", function() { return LiquidContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*"];
class LiquidContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LiquidContainerComponent.ɵfac = function LiquidContainerComponent_Factory(t) { return new (t || LiquidContainerComponent)(); };
LiquidContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiquidContainerComponent, selectors: [["app-liquid-container"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "liquidContainer"]], template: function LiquidContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".liquidContainer[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n    background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);\n}\n.liquidContainer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    display: flex;\n    width: calc(100% - 60px);\n    height: calc(100% - 60px);\n    border-radius: 10px;\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpcXVpZC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUVBQW1FO0FBQ3ZFO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6ImxpcXVpZC1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXF1aWRDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5Nzk1ZjAgMCUsICNmYmM4ZDQgMTAwJSk7XG59XG4ubGlxdWlkQ29udGFpbmVyID4gZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ "MwQ6":
/*!***********************************!*\
  !*** ./src/redux/examsActions.ts ***!
  \***********************************/
/*! exports provided: ADD_RESULT_ACTION, REMOVE_RESULT_ACTION, CLEAR_RESULTS_ACTION, addResult, removeResult, clear, ExamsActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RESULT_ACTION", function() { return ADD_RESULT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_RESULT_ACTION", function() { return REMOVE_RESULT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_RESULTS_ACTION", function() { return CLEAR_RESULTS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addResult", function() { return addResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeResult", function() { return removeResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsActions", function() { return ExamsActions; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "BmQw");

// Action types
const ADD_RESULT_ACTION = 'ADD_RESULT_ACTION';
const REMOVE_RESULT_ACTION = 'REMOVE_RESULT_ACTION';
const CLEAR_RESULTS_ACTION = 'CLEAR_RESULTS_ACTION';
// Action generators
const addResult = Object(_types__WEBPACK_IMPORTED_MODULE_0__["createActionGenerator"])(ADD_RESULT_ACTION);
const removeResult = Object(_types__WEBPACK_IMPORTED_MODULE_0__["createActionGenerator"])(REMOVE_RESULT_ACTION);
const clear = Object(_types__WEBPACK_IMPORTED_MODULE_0__["createActionGenerator"])(CLEAR_RESULTS_ACTION);
class ExamsActions {
    constructor() {
        this.addResult = addResult;
        this.removeResult = removeResult;
        this.clear = clear;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _liquid_container_liquid_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liquid-container/liquid-container.component */ "MYvm");
/* harmony import */ var _cdf_section_cdf_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cdf-section/cdf-section.component */ "lZej");
/* harmony import */ var _exams_section_exams_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exams-section/exams-section.component */ "tZjQ");




class AppComponent {
    constructor() {
        this.title = 'sturdy-carnival';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-liquid-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cdf-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-exams-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_liquid_container_liquid_container_component__WEBPACK_IMPORTED_MODULE_1__["LiquidContainerComponent"], _cdf_section_cdf_section_component__WEBPACK_IMPORTED_MODULE_2__["CdfSectionComponent"], _exams_section_exams_section_component__WEBPACK_IMPORTED_MODULE_3__["ExamsSectionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "WFdk":
/*!******************************************************!*\
  !*** ./src/app/mark-breaks/mark-breaks.component.ts ***!
  \******************************************************/
/*! exports provided: MarkBreaksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkBreaksComponent", function() { return MarkBreaksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mark_breaks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mark-breaks.service */ "8pis");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class MarkBreaksComponent {
    constructor(markBreaksService) {
        this.markBreaksService = markBreaksService;
    }
    ngOnInit() {
        this.getBreaks();
    }
    getBreaks() {
        this.markBreaksService.getBreaks()
            .subscribe((breaks) => {
            this.breaks = breaks;
        });
    }
    handleChange(mark, nextVal) {
        this.markBreaksService.setBreak(mark, nextVal);
    }
}
MarkBreaksComponent.ɵfac = function MarkBreaksComponent_Factory(t) { return new (t || MarkBreaksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mark_breaks_service__WEBPACK_IMPORTED_MODULE_1__["MarkBreaksService"])); };
MarkBreaksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkBreaksComponent, selectors: [["app-mark-breaks"]], decls: 13, vars: 4, consts: [["id", "mark-breaks"], ["type", "number", 3, "ngModel", "ngModelChange"]], template: function MarkBreaksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MarkBreaksComponent_Template_input_ngModelChange_3_listener($event) { return ctx.handleChange("A", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "B: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MarkBreaksComponent_Template_input_ngModelChange_6_listener($event) { return ctx.handleChange("B", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "C: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MarkBreaksComponent_Template_input_ngModelChange_9_listener($event) { return ctx.handleChange("C", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "D: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MarkBreaksComponent_Template_input_ngModelChange_12_listener($event) { return ctx.handleChange("D", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.breaks.A);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.breaks.B);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.breaks.C);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.breaks.D);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["#mark-breaks[_ngcontent-%COMP%]{\n\n}\n#mark-breaks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    margin-bottom: 1em;\n}\n#mark-breaks[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    border: none;\n    background-color: lightgrey;\n    padding: 5px 5px 5px 15px;\n    border-radius: 10px;\n    font-size: 1.1em;\n    font-family: kiwy;\n    width: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmstYnJlYWtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkIiwiZmlsZSI6Im1hcmstYnJlYWtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFyay1icmVha3N7XG5cbn1cbiNtYXJrLWJyZWFrcyBsaXtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4jbWFyay1icmVha3MgaW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBmb250LWZhbWlseToga2l3eTtcbiAgICB3aWR0aDogNGVtO1xufSJdfQ== */"] });


/***/ }),

/***/ "WJG1":
/*!****************************************************!*\
  !*** ./src/app/ecdf-graph/ecdf-graph.component.ts ***!
  \****************************************************/
/*! exports provided: EcdfGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcdfGraphComponent", function() { return EcdfGraphComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exams.service */ "mo/v");



class EcdfGraphComponent {
    constructor(examsService) {
        this.examsService = examsService;
        this.examResults = [];
    }
    ngAfterContentInit() {
        this.setupSVG();
        this.getResults();
        window.onresize = () => this.setupSVG();
    }
    ngOnInit() {
    }
    getResults() {
        const handleUpdate = this.handleUpdate.bind(this);
        this.examsService.getResults()
            .subscribe((results) => {
            handleUpdate(results);
        });
    }
    handleUpdate(results) {
        this.examResults = results;
        this.renderGraph(this.examResults);
    }
    setupSVG() {
        const parent = document.getElementById('ecdf-graph');
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"](parent).select('figure#ecdf-graph svg');
        const bbox = parent === null || parent === void 0 ? void 0 : parent.getBoundingClientRect();
        this.svg
            .attr('width', bbox === null || bbox === void 0 ? void 0 : bbox.width)
            .attr('height', ((bbox === null || bbox === void 0 ? void 0 : bbox.width) || 0) / 2);
        this.setupAxis();
        this.renderGraph(this.examResults);
    }
    setupAxis() {
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([0, 100])
            .range([0, +this.svg.attr('width')]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([0, 1])
            .range([+this.svg.attr('height'), 0]);
        this.svg.select('.yAxes')
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](this.yScale))
            .selectAll('.tick line')
            .attr('x2', this.xScale.range()[1])
            .attr('stroke', '#dcdcdc');
        this.svg.selectAll('.yAxes text')
            .style('font-family', 'kiwi');
        this.svg.select('.xAxes')
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](this.xScale))
            .attr('transform', `translate(0, ${this.yScale.range()[0]})`)
            .selectAll('.tick line')
            .attr('y2', -this.yScale.range()[0])
            .attr('stroke', '#dcdcdc');
        this.svg.selectAll('.xAxes text')
            .style('font-family', 'kiwi');
        this.svg.selectAll('path.domain')
            .style('display', 'none');
    }
    calculateECDF(values) {
        const valueCount = new Map([...new Set(values)].map((d) => [d, 0]));
        values.forEach((d) => {
            valueCount.set(d, (valueCount.get(d) || 0) + 1);
        });
        let ecdf = [...valueCount]
            .sort((a, b) => (+a[0]) - (+b[0]))
            .map((d) => [d[0], d[1] / values.length]);
        // accumulate the values now
        for (let i = 1; i < ecdf.length; i++) {
            ecdf[i][1] = ecdf[i][1] + ecdf[i - 1][1];
        }
        return ecdf;
    }
    normalizeForManhattanDistance(points) {
        const normalized = [[0, this.yScale.range()[0]]];
        for (let i = 0; i < points.length; i++) {
            const lastPoint = normalized[normalized.length - 1];
            normalized.push([points[i][0], lastPoint[1]]);
            normalized.push(points[i]);
        }
        return normalized;
    }
    applyPointsToPath(points, path) {
        points.forEach((d, i) => {
            if (i > 0) {
                path.lineTo(...d);
            }
            else {
                path.moveTo(...d);
            }
        });
    }
    renderGraph(results) {
        const ecdf = this.calculateECDF(results);
        const path = d3__WEBPACK_IMPORTED_MODULE_0__["path"]();
        const points = ecdf.map((point) => [
            this.xScale(point[0]),
            this.yScale(point[1])
        ]);
        const normalizedPoints = this.normalizeForManhattanDistance(points);
        this.applyPointsToPath(normalizedPoints, path);
        this.svg.select('path.line')
            .attr('d', path);
    }
}
EcdfGraphComponent.ɵfac = function EcdfGraphComponent_Factory(t) { return new (t || EcdfGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_exams_service__WEBPACK_IMPORTED_MODULE_2__["ExamsService"])); };
EcdfGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EcdfGraphComponent, selectors: [["app-ecdf-graph"]], decls: 10, vars: 0, consts: [["id", "ecdf-graph-container"], ["id", "ecdf-graph"], [1, "yAxes"], [1, "xAxes"], [1, "line"], ["id", "y-label"], ["id", "x-label"]], template: function EcdfGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "cumulative frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "exam score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["#ecdf-graph-container[_ngcontent-%COMP%]{\n    padding: 1em;\n    max-width: 550px;\n}\nfigure#ecdf-graph[_ngcontent-%COMP%]{\n    position: relative;\n}\nfigure#ecdf-graph[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n    overflow: visible;\n}\nfigure[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    position: absolute;\n}\nfigure[_ngcontent-%COMP%]   span#x-label[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: -2em;\n    left: 50%;\n    transform: translateX(-40px);\n}\nfigure[_ngcontent-%COMP%]   span#y-label[_ngcontent-%COMP%]{\n    position: absolute;\n    left: -2em;\n    top: 50%;\n    transform: rotateZ(-90deg) translateY(-5.5em);\n}\nfigure#ecdf-graph[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\n    fill: none;\n    stroke-width: 3px;\n    stroke: #9381FF;\n}\nfigure#ecdf-graph[_ngcontent-%COMP%]   .xAxes[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\n    stroke-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVjZGYtZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiZWNkZi1ncmFwaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VjZGYtZ3JhcGgtY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xufVxuZmlndXJlI2VjZGYtZ3JhcGh7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuZmlndXJlI2VjZGYtZ3JhcGggc3Zne1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuZmlndXJlIHNwYW57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuZmlndXJlIHNwYW4jeC1sYWJlbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMmVtO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpO1xufVxuZmlndXJlIHNwYW4jeS1sYWJlbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTJlbTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTkwZGVnKSB0cmFuc2xhdGVZKC01LjVlbSk7XG59XG5maWd1cmUjZWNkZi1ncmFwaCBwYXRoe1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gICAgc3Ryb2tlOiAjOTM4MUZGO1xufVxuZmlndXJlI2VjZGYtZ3JhcGggLnhBeGVzIHBhdGh7XG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _redux_appReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/appReducer */ "F9Z+");
/* harmony import */ var _redux_markBreaksActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/markBreaksActions */ "HiYt");
/* harmony import */ var _redux_examsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/examsActions */ "MwQ6");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "ANjH");
/* harmony import */ var _exams_exams_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exams/exams.component */ "G1WX");
/* harmony import */ var _liquid_container_liquid_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./liquid-container/liquid-container.component */ "MYvm");
/* harmony import */ var _cdf_section_cdf_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cdf-section/cdf-section.component */ "lZej");
/* harmony import */ var _exams_section_exams_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exams-section/exams-section.component */ "tZjQ");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exam/exam.component */ "KPts");
/* harmony import */ var _exam_editor_exam_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exam-editor/exam-editor.component */ "7oqY");
/* harmony import */ var _ecdf_graph_ecdf_graph_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ecdf-graph/ecdf-graph.component */ "WJG1");
/* harmony import */ var _mark_breaks_mark_breaks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mark-breaks/mark-breaks.component */ "WFdk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

 // <-- ngModel lives here














const store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_redux_appReducer__WEBPACK_IMPORTED_MODULE_3__["appReducer"]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        { provide: 'AppStore', useValue: store },
        _redux_markBreaksActions__WEBPACK_IMPORTED_MODULE_4__["MarkBreaksActions"],
        _redux_examsActions__WEBPACK_IMPORTED_MODULE_5__["ExamsActions"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _exams_exams_component__WEBPACK_IMPORTED_MODULE_7__["ExamsComponent"],
        _liquid_container_liquid_container_component__WEBPACK_IMPORTED_MODULE_8__["LiquidContainerComponent"],
        _cdf_section_cdf_section_component__WEBPACK_IMPORTED_MODULE_9__["CdfSectionComponent"],
        _exams_section_exams_section_component__WEBPACK_IMPORTED_MODULE_10__["ExamsSectionComponent"],
        _exam_exam_component__WEBPACK_IMPORTED_MODULE_11__["ExamComponent"],
        _exam_editor_exam_editor_component__WEBPACK_IMPORTED_MODULE_12__["ExamEditorComponent"],
        _ecdf_graph_ecdf_graph_component__WEBPACK_IMPORTED_MODULE_13__["EcdfGraphComponent"],
        _mark_breaks_mark_breaks_component__WEBPACK_IMPORTED_MODULE_14__["MarkBreaksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "jVQy":
/*!****************************************!*\
  !*** ./src/redux/markBreaksReducer.ts ***!
  \****************************************/
/*! exports provided: markBreaksReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markBreaksReducer", function() { return markBreaksReducer; });
/* harmony import */ var _markBreaksActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markBreaksActions */ "HiYt");

const initialState = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
};
function hasParam(action, key) {
    return Object.hasOwnProperty.call(action.payload, key);
}
function markBreaksReducer(prevState = initialState, action) {
    let newState = prevState;
    switch (action.type) {
        case _markBreaksActions__WEBPACK_IMPORTED_MODULE_0__["SET_BREAK_ACTION"]:
            if (hasParam(action, 'mark') && hasParam(action, 'score')) {
                newState = Object.assign(Object.assign({}, prevState), { [action.payload.mark]: action.payload.score });
            }
            break;
    }
    return newState;
}


/***/ }),

/***/ "lZej":
/*!******************************************************!*\
  !*** ./src/app/cdf-section/cdf-section.component.ts ***!
  \******************************************************/
/*! exports provided: CdfSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdfSectionComponent", function() { return CdfSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ecdf_graph_ecdf_graph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ecdf-graph/ecdf-graph.component */ "WJG1");
/* harmony import */ var _mark_breaks_mark_breaks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mark-breaks/mark-breaks.component */ "WFdk");



class CdfSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
CdfSectionComponent.ɵfac = function CdfSectionComponent_Factory(t) { return new (t || CdfSectionComponent)(); };
CdfSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CdfSectionComponent, selectors: [["app-cdf-section"]], decls: 15, vars: 0, consts: [["id", "cdf-section"]], template: function CdfSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assigning ranks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "using an Empirical Cumulative Distribution Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Grade boundaries are better assigned using the ECDF to find the cuts, as it allows to easily find distinguishable groups of marks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " We can then search for cuts that would make a student's grade the furthest from the next rank. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-ecdf-graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Setting the score cuts for the marks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " There are four different eligible marks (A, B, C, D, E) that are assigned to an exam result based on the boundaries you set. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-mark-breaks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ecdf_graph_ecdf_graph_component__WEBPACK_IMPORTED_MODULE_1__["EcdfGraphComponent"], _mark_breaks_mark_breaks_component__WEBPACK_IMPORTED_MODULE_2__["MarkBreaksComponent"]], styles: ["[_nghost-%COMP%]{\n    display: block;\n    width: 50%;\n    flex-grow: 0;\n    flex-shrink: 0;\n}\n#cdf-section[_ngcontent-%COMP%]{\n    margin: 1em 0 0 1em;\n}\n#cdf-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #cdf-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom: 0;\n    font-size: 1.4rem;\n    font-family: kiwi;\n}\n#cdf-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-top: 0;\n    font-size: 1.2rem;\n}\n#cdf-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    text-align: justify;\n    max-width: calc(500px + 2em);\n}\n#cdf-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type{\n    padding: 0 2em;\n    max-width: 500px;\n    border-left: solid 5px #9381FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNkZi1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoiY2RmLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuI2NkZi1zZWN0aW9ue1xuICAgIG1hcmdpbjogMWVtIDAgMCAxZW07XG59XG4jY2RmLXNlY3Rpb24gaDEsXG4jY2RmLXNlY3Rpb24gaDJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LWZhbWlseToga2l3aTtcbn1cbiNjZGYtc2VjdGlvbiBoMntcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuI2NkZi1zZWN0aW9uIHB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoNTAwcHggKyAyZW0pO1xufVxuI2NkZi1zZWN0aW9uIHA6Zmlyc3Qtb2YtdHlwZXtcbiAgICBwYWRkaW5nOiAwIDJlbTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggIzkzODFGRjtcbn0iXX0= */"] });


/***/ }),

/***/ "mo/v":
/*!**********************************!*\
  !*** ./src/app/exams.service.ts ***!
  \**********************************/
/*! exports provided: ExamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsService", function() { return ExamsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_redux_examsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/redux/examsActions */ "MwQ6");



class ExamsService {
    constructor(appStore, examsActions) {
        this.appStore = appStore;
        this.examsActions = examsActions;
        this.examResultsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.appStore.getState().exams);
        this.unsubscribeStore = this.appStore.subscribe(this.handleStoreUpdate.bind(this));
    }
    handleStoreUpdate() {
        this.examResultsSubject.next(this.appStore.getState().exams);
    }
    getResults() {
        return this.examResultsSubject;
    }
    addResult(result) {
        const payload = { result };
        this.appStore.dispatch(this.examsActions.addResult(payload));
    }
    removeResult(index) {
        const payload = { index };
        this.appStore.dispatch(this.examsActions.removeResult(payload));
    }
}
ExamsService.ɵfac = function ExamsService_Factory(t) { return new (t || ExamsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_redux_examsActions__WEBPACK_IMPORTED_MODULE_2__["ExamsActions"])); };
ExamsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExamsService, factory: ExamsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oj4s":
/*!***********************************!*\
  !*** ./src/redux/examsReducer.ts ***!
  \***********************************/
/*! exports provided: examsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examsReducer", function() { return examsReducer; });
/* harmony import */ var _examsActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examsActions */ "MwQ6");

const initialState = [23, 40, 40, 56, 12, 78, 99];
function hasParam(action, key) {
    return Object.hasOwnProperty.call(action.payload, key);
}
function examsReducer(prevState = initialState, action) {
    let newState = prevState;
    switch (action.type) {
        case _examsActions__WEBPACK_IMPORTED_MODULE_0__["ADD_RESULT_ACTION"]:
            if (hasParam(action, 'result')) {
                newState = [...prevState, action.payload.result];
            }
            break;
        case _examsActions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_RESULT_ACTION"]:
            if (hasParam(action, 'index') &&
                action.payload.index >= 0 &&
                action.payload.index < prevState.length) {
                newState = [...prevState];
                try {
                    newState.splice(action.payload.index, 1);
                }
                catch (error) { // it is not a valid number
                    newState = prevState;
                }
            }
            break;
        case _examsActions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_RESULTS_ACTION"]:
            newState = [];
            break;
    }
    return newState;
}


/***/ }),

/***/ "tZjQ":
/*!**********************************************************!*\
  !*** ./src/app/exams-section/exams-section.component.ts ***!
  \**********************************************************/
/*! exports provided: ExamsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsSectionComponent", function() { return ExamsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _exams_exams_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exams/exams.component */ "G1WX");


class ExamsSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExamsSectionComponent.ɵfac = function ExamsSectionComponent_Factory(t) { return new (t || ExamsSectionComponent)(); };
ExamsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamsSectionComponent, selectors: [["app-exams-section"]], decls: 18, vars: 0, consts: [["id", "exams-section"], ["id", "classroom", "src", "/sturdy-carnival/assets/Classroom-with-Kids-01.jpg"], ["target", "blank", "href", "https://www.vecteezy.com/free-vector/kids"], [1, "text-muted"]], template: function ExamsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Kids Vectors by Vecteezy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The exam results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Let's simulate the exam results. Each exam has an integer numeric value ranging from 0 to 100, each of which will be assigned a rank based on the cuts set on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ECDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " section ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(left side of the screen)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " A good cut value is the one that ensures the biggest gap with the next possible rank. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-exams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_exams_exams_component__WEBPACK_IMPORTED_MODULE_1__["ExamsComponent"]], styles: ["[_nghost-%COMP%]{\n    display: block;\n    width: 50%;\n    flex-grow: 0;\n    flex-shrink: 0;\n}\n#exams-section[_ngcontent-%COMP%]{\n    margin: 1em 0 0 1em;\n    padding: 0 1em;\n}\nimg#classroom[_ngcontent-%COMP%]{\n    width: calc(100% - 40px);\n    max-width: 340px;\n    height: auto;\n    margin: 0 auto;\n    display: block;\n    border-radius: 10px;\n}\n#exams-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-bottom: 0;\n    font-size: 1.2rem;\n    font-family: kiwi;\n}\n.text-muted[_ngcontent-%COMP%]{\n    color: slategray;\n}\n#exams-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    position: fixed;\n    bottom: 5px;\n    right: 30px;\n    color: blueviolet;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekIiLCJmaWxlIjoiZXhhbXMtc2VjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG4jZXhhbXMtc2VjdGlvbntcbiAgICBtYXJnaW46IDFlbSAwIDAgMWVtO1xuICAgIHBhZGRpbmc6IDAgMWVtO1xufVxuaW1nI2NsYXNzcm9vbXtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgbWF4LXdpZHRoOiAzNDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiNleGFtcy1zZWN0aW9uIGgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiBraXdpO1xufVxuLnRleHQtbXV0ZWR7XG4gICAgY29sb3I6IHNsYXRlZ3JheTtcbn1cbiNleGFtcy1zZWN0aW9uIGF7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiBibHVldmlvbGV0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
