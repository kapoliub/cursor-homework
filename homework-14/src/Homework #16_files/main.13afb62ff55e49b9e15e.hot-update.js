webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.13afb62ff55e49b9e15e.hot-update.js.map