(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/view/DashboardChat.jsx":
/*!************************************!*\
  !*** ./src/view/DashboardChat.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell */ "../node_modules/carbon-components-react/lib/components/UIShell/index.js");
/* harmony import */ var carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_flv_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flv-player */ "../node_modules/react-flv-player/build/index.js");
/* harmony import */ var react_flv_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_flv_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! carbon-components-react */ "../node_modules/carbon-components-react/es/index.js");
/* harmony import */ var _carbon_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon/icons-react */ "../node_modules/@carbon/icons-react/es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var fetch = __webpack_require__(/*! node-fetch */ "../node_modules/node-fetch/browser.js");

var ScrollArea = __webpack_require__(/*! react-scrollbar */ "../node_modules/react-scrollbar/dist/scrollArea.js");

var Player = /*#__PURE__*/function (_React$Component) {
  _inherits(Player, _React$Component);

  var _super = _createSuper(Player);

  function Player(props) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getmessages", function () {
      return new Promise(function (resolve, reject) {
        fetch(_this.state.chatLink).then(function (r) {
          resolve(r.json());
        })["catch"](function (e) {
          return reject(e);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchData", function () {
      _this.getmessages().then(function (r) {
        _this.setState({
          messagesList: r
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleWindowSizeChange", function () {
      _this.setState({
        width: window.innerWidth
      });

      _this.setState({
        width: window.innerHeight
      });

      var formHeight = _this.formElement.clientHeight;

      _this.setState({
        formHeight: formHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submitMessage", function (event) {
      event.preventDefault();
      fetch(_this.state.chatLink + '?message=' + _this.state.inputValue).then(_this.setState({
        inputValue: ""
      }));

      _this.fetchData();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteMessage", function (messageNumber) {
      if (confirm("Are you sure you want to delete this message? It cannot be undone")) {
        fetch(_this.state.chatLink + '?delete=' + messageNumber.toString());
      }

      _this.fetchData();
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          "backgroundClip": "padding-box",
          "backgroundColor": "#FFFFFF",
          "height": _this.state.height,
          "paddingLeft": "20px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Chat dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Send messages at the bottom of the page, to delete a message, click on any message and it will delete the message."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          'overflowY': 'scroll',
          "height": _this.state.height - _this.state.formHeight - 50
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, _this.state.messagesList.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: index,
          style: {
            'padding': '5px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return _this.deleteMessage(index);
          },
          style: {
            "width": "100%",
            "backgroundColor": "#f4f4f4",
            "padding": "10px",
            "border": "none",
            "TextAlign": "left"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            'fontFamily': 'Candara',
            'fontWeight': 'normal',
            'fontSize': '1vw',
            'color': '#808080',
            'paddingBottom': '0px',
            'height': '1.5vw'
          }
        }, item.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            'fontFamily': 'Candara',
            'fontWeight': 'normal',
            'fontSize': '1vw',
            'color': '#000000',
            'paddingTop': '0px',
            'height': '1.5vw'
          }
        }, item.content)));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "test",
        ref: function ref(divElement) {
          _this.formElement = divElement;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: _this.submitMessage,
        style: {
          'alignContent': 'center',
          'width': '100%',
          'paddingBottom': '0px',
          "verticalAlign": "bottom",
          'height': '0'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          "width": "100%",
          'display': 'inline-flex'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__["TextInput"], {
        id: "Message_Box",
        placeholder: "Message",
        style: {
          'fontFamily': 'Candara',
          'fontWeight': 'normal',
          'fontSize': '1.5vw'
        },
        onChange: function onChange(evt) {
          return _this.updateInputValue(evt);
        },
        value: _this.state.inputValue
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        style: {
          'backgroundColor': '#005eb8',
          'fontSize': '1.5vw'
        },
        hasIconOnly: true,
        renderIcon: _carbon_icons_react__WEBPACK_IMPORTED_MODULE_4__["Send32"],
        tooltipAlignment: "center",
        tooltipPosition: "bottom",
        iconDescription: "Send Message",
        size: "field",
        type: "submit"
      }))))));
    });

    _this.state = {
      messagesList: [],
      playerHeight: 0,
      formHeight: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      inputValue: "",
      chatLink: props.chatLink
    };
    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      this.timer = setInterval(this.fetchData, 2000);
      this.timer = setInterval(this.updateCSS, 20);
      window.addEventListener('resize', this.handleWindowSizeChange);
      var formHeight = this.formElement.clientHeight;
      this.setState({
        formHeight: formHeight
      });
    }
  }, {
    key: "updateInputValue",
    value: function updateInputValue(evt) {
      this.setState({
        inputValue: evt.target.value
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var _default = Player;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Player, "Player", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\DashboardChat.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\DashboardChat.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9EYXNoYm9hcmRDaGF0LmpzeCJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJTY3JvbGxBcmVhIiwiUGxheWVyIiwicHJvcHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN0YXRlIiwiY2hhdExpbmsiLCJ0aGVuIiwiciIsImpzb24iLCJlIiwiZ2V0bWVzc2FnZXMiLCJzZXRTdGF0ZSIsIm1lc3NhZ2VzTGlzdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZm9ybUhlaWdodCIsImZvcm1FbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0VmFsdWUiLCJmZXRjaERhdGEiLCJtZXNzYWdlTnVtYmVyIiwiY29uZmlybSIsInRvU3RyaW5nIiwiaGVpZ2h0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGVsZXRlTWVzc2FnZSIsImRhdGUiLCJjb250ZW50IiwiZGl2RWxlbWVudCIsInN1Ym1pdE1lc3NhZ2UiLCJldnQiLCJ1cGRhdGVJbnB1dFZhbHVlIiwiU2VuZDMyIiwicGxheWVySGVpZ2h0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUNTUyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVXaW5kb3dTaXplQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjbGVhckludGVydmFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMseURBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxtQkFBTyxDQUFDLDJFQUFELENBQXhCOztJQUVNRSxNOzs7OztBQVlK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YyxHQUFHLENBQUNTLE1BQUosQ0FBV0M7QUFEWCxPQUFkO0FBR0Q7OzsyQ0FFdUI7QUFDdEJDLG1CQUFhLENBQUMsS0FBS1AsS0FBTixDQUFiO0FBQ0ExQixZQUFNLENBQUNrQyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLSixzQkFBMUM7QUFDRDs7Ozs7Ozs7Ozs7RUEzQ2tCSyw0Q0FBSyxDQUFDQyxTOztlQXlIWm5ELE07QUFBQTs7Ozs7Ozs7OzswQkF6SFRBLE0iLCJmaWxlIjoiNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIENvbnRlbnQsXG59IGZyb20gJ2NhcmJvbi1jb21wb25lbnRzLXJlYWN0L2xpYi9jb21wb25lbnRzL1VJU2hlbGwnXG5pbXBvcnQgeyBSZWFjdEZsdlBsYXllciB9IGZyb20gJ3JlYWN0LWZsdi1wbGF5ZXInXG5pbXBvcnQgeyBUZXh0SW5wdXQsIEJ1dHRvbiwgRm9ybSB9IGZyb20gJ2NhcmJvbi1jb21wb25lbnRzLXJlYWN0J1xuaW1wb3J0IHsgU2VuZDMyIH0gZnJvbSAnQGNhcmJvbi9pY29ucy1yZWFjdCdcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXG52YXIgU2Nyb2xsQXJlYSA9IHJlcXVpcmUoJ3JlYWN0LXNjcm9sbGJhcicpO1xuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGdldG1lc3NhZ2VzID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaCh0aGlzLnN0YXRlLmNoYXRMaW5rKVxuICAgICAgICAudGhlbihyID0+IHtcbiAgICAgICAgICByZXNvbHZlKHIuanNvbigpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZSA9PiByZWplY3QoZSkpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZXNzYWdlc0xpc3Q6IFtdLFxuICAgICAgcGxheWVySGVpZ2h0OiAwLFxuICAgICAgZm9ybUhlaWdodDogMCxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgIGNoYXRMaW5rOiBwcm9wcy5jaGF0TGlua1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLmZldGNoRGF0YSgpXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMuZmV0Y2hEYXRhLCAyMDAwKVxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUNTUywgMjApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSlcbiAgICBjb25zdCBmb3JtSGVpZ2h0ID0gdGhpcy5mb3JtRWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybUhlaWdodCB9KVxuICB9XG5cbiAgdXBkYXRlSW5wdXRWYWx1ZSAoZXZ0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dFZhbHVlOiBldnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpXG4gIH1cblxuICBmZXRjaERhdGEgPSAoKSA9PiB7XG4gICAgdGhpcy5nZXRtZXNzYWdlcygpLnRoZW4ociA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXNMaXN0OiByIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KVxuICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogd2luZG93LmlubmVySGVpZ2h0IH0pXG4gICAgY29uc3QgZm9ybUhlaWdodCA9IHRoaXMuZm9ybUVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1IZWlnaHQgfSlcbiAgfTtcblxuICBzdWJtaXRNZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGZldGNoKHRoaXMuc3RhdGUuY2hhdExpbmsgKyAnP21lc3NhZ2U9JyArIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSkudGhlbih0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogXCJcIiB9KSlcbiAgICB0aGlzLmZldGNoRGF0YSgpXG4gIH1cblxuICBkZWxldGVNZXNzYWdlID0gKG1lc3NhZ2VOdW1iZXIpID0+IHtcbiAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBtZXNzYWdlPyBJdCBjYW5ub3QgYmUgdW5kb25lXCIpKSB7XG4gICAgICBmZXRjaCh0aGlzLnN0YXRlLmNoYXRMaW5rICsgJz9kZWxldGU9JyArIG1lc3NhZ2VOdW1iZXIudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgdGhpcy5mZXRjaERhdGEoKVxuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiYmFja2dyb3VuZENsaXBcIjogXCJwYWRkaW5nLWJveFwiLCBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIiwgXCJoZWlnaHRcIjogdGhpcy5zdGF0ZS5oZWlnaHQsIFwicGFkZGluZ0xlZnRcIjogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgPGgxPkNoYXQgZGFzaGJvYXJkPC9oMT5cbiAgICAgICAgICA8aDU+U2VuZCBtZXNzYWdlcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlLCB0byBkZWxldGUgYSBtZXNzYWdlLCBjbGljayBvbiBhbnkgbWVzc2FnZSBhbmQgaXQgd2lsbCBkZWxldGUgdGhlIG1lc3NhZ2UuPC9oNT5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgJ292ZXJmbG93WSc6ICdzY3JvbGwnLCBcImhlaWdodFwiOiB0aGlzLnN0YXRlLmhlaWdodCAtIHRoaXMuc3RhdGUuZm9ybUhlaWdodCAtIDUwIH19PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlc0xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZT17eyAncGFkZGluZyc6ICc1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZU1lc3NhZ2UoaW5kZXgpfSBzdHlsZT17eyBcIndpZHRoXCI6IFwiMTAwJVwiLCBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmNGY0ZjRcIiwgXCJwYWRkaW5nXCI6IFwiMTBweFwiLCBcImJvcmRlclwiOiBcIm5vbmVcIiwgXCJUZXh0QWxpZ25cIjogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgJ2ZvbnRGYW1pbHknOiAnQ2FuZGFyYScsICdmb250V2VpZ2h0JzogJ25vcm1hbCcsICdmb250U2l6ZSc6ICcxdncnLCAnY29sb3InOiAnIzgwODA4MCcsICdwYWRkaW5nQm90dG9tJzogJzBweCcsICdoZWlnaHQnOiAnMS41dncnIH19PntpdGVtLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyAnZm9udEZhbWlseSc6ICdDYW5kYXJhJywgJ2ZvbnRXZWlnaHQnOiAnbm9ybWFsJywgJ2ZvbnRTaXplJzogJzF2dycsICdjb2xvcic6ICcjMDAwMDAwJywgJ3BhZGRpbmdUb3AnOiAnMHB4JywgJ2hlaWdodCc6ICcxLjV2dycgfX0+e2l0ZW0uY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0XCIgcmVmPXsoZGl2RWxlbWVudCkgPT4geyB0aGlzLmZvcm1FbGVtZW50ID0gZGl2RWxlbWVudCB9fT5cbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdE1lc3NhZ2V9IHN0eWxlPXt7ICdhbGlnbkNvbnRlbnQnOiAnY2VudGVyJywgJ3dpZHRoJzogJzEwMCUnLCAncGFkZGluZ0JvdHRvbSc6ICcwcHgnLCBcInZlcnRpY2FsQWxpZ25cIjogXCJib3R0b21cIiwgJ2hlaWdodCc6ICcwJyB9fT5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IFwid2lkdGhcIjogXCIxMDAlXCIsICdkaXNwbGF5JzogJ2lubGluZS1mbGV4JyB9fT5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cIk1lc3NhZ2VfQm94XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAnZm9udEZhbWlseSc6ICdDYW5kYXJhJywgJ2ZvbnRXZWlnaHQnOiAnbm9ybWFsJywgJ2ZvbnRTaXplJzogJzEuNXZ3JyB9fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoZXZ0KX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogJyMwMDVlYjgnLCAnZm9udFNpemUnOiAnMS41dncnIH19XG4gICAgICAgICAgICAgICAgICBoYXNJY29uT25seVxuICAgICAgICAgICAgICAgICAgcmVuZGVySWNvbj17U2VuZDMyfVxuICAgICAgICAgICAgICAgICAgdG9vbHRpcEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB0b29sdGlwUG9zaXRpb249XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgaWNvbkRlc2NyaXB0aW9uPVwiU2VuZCBNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9J2ZpZWxkJ1xuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIiXSwic291cmNlUm9vdCI6IiJ9