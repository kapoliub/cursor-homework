(this["webpackJsonphomework-16-components"] = this["webpackJsonphomework-16-components"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App{\n  width: 250px;\n  margin: 0 auto;\n  border: 1px solid grey;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contacts.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/contacts.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/img/search-icon.png */ "./src/assets/img/search-icon.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".Contacts .search-wrapper{\n    padding: 6px;\n    padding-top: 5px;\n    background-color: rgb(173, 173, 173);\n}\n\n.Contacts .search-wrapper input{\n    width: 100%;\n    padding: 3px 5px;\n    box-sizing: border-box;\n    text-align: center;\n    border-radius: 5px;\n    outline: none;\n    box-shadow: none;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 6%;\n    background-repeat: no-repeat;\n    background-position: 40% 50%;\n    text-indent: 20px;\n    font-size: 0.85em;\n    transition: .1s;\n}\n\n.Contacts .search-wrapper input::placeholder{\n    color: #AEB1B2;\n}\n\n.Contacts .search-wrapper input:focus::placeholder{\n    color: transparent;\n    transition: .1s;\n\n}\n\n.Contacts .search-wrapper input:focus{\n    background-image: none;\n    text-align: left;\n    text-indent: 0;\n    transition: .1s;\n}\n\n.Contact{\n    padding: 6px 8px 0;\n    color: rgb(36, 36, 36);\n}\n\n.Contact .name-gender-field{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 5px;\n}\n\n.Contact .gender img{\n    max-width: 20px;\n    width: 100%;\n}\n\n.Contact .phone{\n    border-bottom: 1px solid rgb(207, 207, 207);\n    padding-bottom: 6px;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background-color: rgb(243, 243, 243);\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Contacts */ "./src/components/Contacts.js");
var _jsxFileName = "/Users/kapoliub/Desktop/cursor-homework/reactJS/homework-16-components/src/App.js";




class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contacts__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/img/female-icon.png":
/*!****************************************!*\
  !*** ./src/assets/img/female-icon.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/female-icon.71c96efa.png";

/***/ }),

/***/ "./src/assets/img/male-icon.png":
/*!**************************************!*\
  !*** ./src/assets/img/male-icon.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/male-icon.6aac446d.png";

/***/ }),

/***/ "./src/assets/img/search-icon.png":
/*!****************************************!*\
  !*** ./src/assets/img/search-icon.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/search-icon.3161a5f9.png";

/***/ }),

/***/ "./src/assets/img/unknown-icon.png":
/*!*****************************************!*\
  !*** ./src/assets/img/unknown-icon.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contacts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.css */ "./src/components/contacts.css");
/* harmony import */ var _contacts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contacts_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kapoliub/Desktop/cursor-homework/reactJS/homework-16-components/src/components/Contact.js";



const Contact = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name-gender-field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, props.firstName, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 57
    }
  }, props.lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gender",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.gender,
    alt: "gender_icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 41
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, props.phone));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/Contacts.js":
/*!************************************!*\
  !*** ./src/components/Contacts.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact */ "./src/components/Contact.js");
/* harmony import */ var _contacts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.css */ "./src/components/contacts.css");
/* harmony import */ var _contacts_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contacts_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_male_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/male-icon.png */ "./src/assets/img/male-icon.png");
/* harmony import */ var _assets_img_male_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_male_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_female_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/female-icon.png */ "./src/assets/img/female-icon.png");
/* harmony import */ var _assets_img_female_icon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_female_icon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_unknown_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/unknown-icon.png */ "./src/assets/img/unknown-icon.png");
/* harmony import */ var _assets_img_unknown_icon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_unknown_icon_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/kapoliub/Desktop/cursor-homework/reactJS/homework-16-components/src/components/Contacts.js";






const contacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}];

class Contacts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      contacts: [...contacts.sort((a, b) => a.lastName > b.lastName ? 1 : -1)],
      search: '',
      male: true,
      female: true,
      unknown: true
    };

    this.handleGenderChange = e => {
      // console.log(this.state.genderFilter)
      this.setState({
        [e.target.name]: e.target.checked
      });
      this.setState({
        contacts: [...contacts.filter(el => {
          return el.gender === this.state[e.target.name]; // if(e.target.name === 'unknown' && this.state[e.target.name]){
          //     return el
          // }
          // return el.gender !== e.target.name && this.state[e.target.name]
        })]
      });
    };

    this.handleSearchChange = e => {
      this.setState({
        search: e.target.value
      });
      this.setState({
        contacts: [...contacts.filter(el => {
          return el.lastName.toLowerCase().includes(e.target.value) || el.firstName.toLowerCase().includes(e.target.value) || el.phone.includes(e.target.value);
        })]
      });
    };
  }

  setGenderImage(gender) {
    if (gender === 'male') {
      return _assets_img_male_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a;
    } else if (gender === 'female') {
      return _assets_img_female_icon_png__WEBPACK_IMPORTED_MODULE_4___default.a;
    } else {
      return _assets_img_unknown_icon_png__WEBPACK_IMPORTED_MODULE_5___default.a;
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Contacts",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: this.state.search,
      onChange: this.handleSearchChange,
      placeholder: "Search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    })), this.state.contacts.map((contact, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_1__["default"], {
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
      gender: this.setGenderImage(contact.gender),
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 59
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkboxes-field",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "male",
      checked: this.state.male,
      onChange: this.handleGenderChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }), "Male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "female",
      checked: this.state.female,
      onChange: this.handleGenderChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }
    }), "Female"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "unknown",
      checked: this.state.unknown,
      onChange: this.handleGenderChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 25
      }
    }), "Unknown")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ }),

/***/ "./src/components/contacts.css":
/*!*************************************!*\
  !*** ./src/components/contacts.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./contacts.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contacts.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./contacts.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contacts.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./contacts.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contacts.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/kapoliub/Desktop/cursor-homework/reactJS/homework-16-components/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kapoliub/Desktop/cursor-homework/reactJS/homework-16-components/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/kapoliub/Desktop/cursor-homework/reactJS/homework-16-components/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kapoliub/Desktop/cursor-homework/reactJS/homework-16-components/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map