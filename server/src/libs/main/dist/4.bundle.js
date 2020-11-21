(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/view/Chat.jsx":
/*!***************************!*\
  !*** ./src/view/Chat.jsx ***!
  \***************************/
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

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          "backgroundClip": "padding-box",
          "backgroundColor": "#FFFFFF",
          "height": _this.state.height
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        }, item.content));
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

    console.log(props.chatLink);
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

  reactHotLoader.register(Player, "Player", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\Chat.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\Chat.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9DaGF0LmpzeCJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJTY3JvbGxBcmVhIiwiUGxheWVyIiwicHJvcHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN0YXRlIiwiY2hhdExpbmsiLCJ0aGVuIiwiciIsImpzb24iLCJlIiwiZ2V0bWVzc2FnZXMiLCJzZXRTdGF0ZSIsIm1lc3NhZ2VzTGlzdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZm9ybUhlaWdodCIsImZvcm1FbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0VmFsdWUiLCJmZXRjaERhdGEiLCJoZWlnaHQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkYXRlIiwiY29udGVudCIsImRpdkVsZW1lbnQiLCJzdWJtaXRNZXNzYWdlIiwiZXZ0IiwidXBkYXRlSW5wdXRWYWx1ZSIsIlNlbmQzMiIsImNvbnNvbGUiLCJsb2ciLCJwbGF5ZXJIZWlnaHQiLCJ0aW1lciIsInNldEludGVydmFsIiwidXBkYXRlQ1NTIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsZWFySW50ZXJ2YWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyx5REFBRCxDQUFyQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELG1CQUFPLENBQUMsMkVBQUQsQ0FBeEI7O0lBRU1FLE07Ozs7O0FBVUosa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtB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QU0sRUFBRVYsTUFBTSxDQUFDRSxXQUxKO0FBTVhNLGdCQUFVLEVBQUUsRUFORDtBQU9YakIsY0FBUSxFQUFFTCxLQUFLLENBQUNLO0FBUEwsS0FBYjtBQUhpQjtBQVlsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS2tCLFNBQUw7QUFDQSxXQUFLZSxLQUFMLEdBQWFDLFdBQVcsQ0FBQyxLQUFLaEIsU0FBTixFQUFpQixJQUFqQixDQUF4QjtBQUNBLFdBQUtlLEtBQUwsR0FBYUMsV0FBVyxDQUFDLEtBQUtDLFNBQU4sRUFBaUIsRUFBakIsQ0FBeEI7QUFDQTFCLFlBQU0sQ0FBQzJCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLHNCQUF2QztBQUNBLFVBQU16QixVQUFVLEdBQUcsS0FBS0MsV0FBTCxDQUFpQkMsWUFBcEM7QUFDQSxXQUFLUixRQUFMLENBQWM7QUFBRU0sa0JBQVUsRUFBVkE7QUFBRixPQUFkO0FBQ0Q7OztxQ0FFZ0JlLEcsRUFBSztBQUNwQixXQUFLckIsUUFBTCxDQUFjO0FBQ1pXLGtCQUFVLEVBQUVVLEdBQUcsQ0FBQ1csTUFBSixDQUFXQztBQURYLE9BQWQ7QUFHRDs7OzJDQUVzQjtBQUNyQkMsbUJBQWEsQ0FBQyxLQUFLUCxLQUFOLENBQWI7QUFDQXhCLFlBQU0sQ0FBQ2dDLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtKLHNCQUExQztBQUNEOzs7Ozs7Ozs7OztFQTFDa0JLLDRDQUFLLENBQUNDLFM7O2VBMEdaakQsTTtBQUFBOzs7Ozs7Ozs7OzBCQTFHVEEsTSIsImZpbGUiOiI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgQ29udGVudCxcbn0gZnJvbSAnY2FyYm9uLWNvbXBvbmVudHMtcmVhY3QvbGliL2NvbXBvbmVudHMvVUlTaGVsbCdcbmltcG9ydCB7IFJlYWN0Rmx2UGxheWVyIH0gZnJvbSAncmVhY3QtZmx2LXBsYXllcidcbmltcG9ydCB7IFRleHRJbnB1dCwgQnV0dG9uLCBGb3JtIH0gZnJvbSAnY2FyYm9uLWNvbXBvbmVudHMtcmVhY3QnXG5pbXBvcnQgeyBTZW5kMzIgfSBmcm9tICdAY2FyYm9uL2ljb25zLXJlYWN0J1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcbnZhciBTY3JvbGxBcmVhID0gcmVxdWlyZSgncmVhY3Qtc2Nyb2xsYmFyJyk7XG5cbmNsYXNzIFBsYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgZ2V0bWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKHRoaXMuc3RhdGUuY2hhdExpbmspXG4gICAgICAgIC50aGVuKHIgPT4geyByZXNvbHZlKHIuanNvbigpKSB9KVxuICAgICAgICAuY2F0Y2goZSA9PiByZWplY3QoZSkpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc29sZS5sb2cocHJvcHMuY2hhdExpbmspXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzTGlzdDogW10sXG4gICAgICBwbGF5ZXJIZWlnaHQ6IDAsXG4gICAgICBmb3JtSGVpZ2h0OiAwLFxuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBpbnB1dFZhbHVlOiBcIlwiLFxuICAgICAgY2hhdExpbms6IHByb3BzLmNoYXRMaW5rXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5mZXRjaERhdGEsIDIwMDApXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMudXBkYXRlQ1NTLCAyMClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKVxuICAgIGNvbnN0IGZvcm1IZWlnaHQgPSB0aGlzLmZvcm1FbGVtZW50LmNsaWVudEhlaWdodFxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtSGVpZ2h0IH0pXG4gIH1cblxuICB1cGRhdGVJbnB1dFZhbHVlKGV2dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXRWYWx1ZTogZXZ0LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKVxuICB9XG5cbiAgZmV0Y2hEYXRhID0gKCkgPT4ge1xuICAgIHRoaXMuZ2V0bWVzc2FnZXMoKS50aGVuKHIgPT4geyB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXNMaXN0OiByIH0pIH0pXG4gIH1cblxuICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHdpbmRvdy5pbm5lckhlaWdodCB9KVxuICAgIGNvbnN0IGZvcm1IZWlnaHQgPSB0aGlzLmZvcm1FbGVtZW50LmNsaWVudEhlaWdodFxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtSGVpZ2h0IH0pXG4gIH07XG5cbiAgc3VibWl0TWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBmZXRjaCh0aGlzLnN0YXRlLmNoYXRMaW5rICsgJz9tZXNzYWdlPScgKyB0aGlzLnN0YXRlLmlucHV0VmFsdWUpLnRoZW4odGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IFwiXCIgfSkpXG4gICAgdGhpcy5mZXRjaERhdGEoKVxuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiYmFja2dyb3VuZENsaXBcIjogXCJwYWRkaW5nLWJveFwiLCBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIiwgXCJoZWlnaHRcIjogdGhpcy5zdGF0ZS5oZWlnaHQgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyAnb3ZlcmZsb3dZJzogJ3Njcm9sbCcsIFwiaGVpZ2h0XCI6IHRoaXMuc3RhdGUuaGVpZ2h0IC0gdGhpcy5zdGF0ZS5mb3JtSGVpZ2h0IC0gNTAgfX0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2VzTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlPXt7ICdwYWRkaW5nJzogJzVweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyAnZm9udEZhbWlseSc6ICdDYW5kYXJhJywgJ2ZvbnRXZWlnaHQnOiAnbm9ybWFsJywgJ2ZvbnRTaXplJzogJzF2dycsICdjb2xvcic6ICcjODA4MDgwJywgJ3BhZGRpbmdCb3R0b20nOiAnMHB4JywgJ2hlaWdodCc6ICcxLjV2dycgfX0+e2l0ZW0uZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyAnZm9udEZhbWlseSc6ICdDYW5kYXJhJywgJ2ZvbnRXZWlnaHQnOiAnbm9ybWFsJywgJ2ZvbnRTaXplJzogJzF2dycsICdjb2xvcic6ICcjMDAwMDAwJywgJ3BhZGRpbmdUb3AnOiAnMHB4JywgJ2hlaWdodCc6ICcxLjV2dycgfX0+e2l0ZW0uY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdFwiIHJlZj17KGRpdkVsZW1lbnQpID0+IHsgdGhpcy5mb3JtRWxlbWVudCA9IGRpdkVsZW1lbnQgfX0+XG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRNZXNzYWdlfSBzdHlsZT17eyAnYWxpZ25Db250ZW50JzogJ2NlbnRlcicsICd3aWR0aCc6ICcxMDAlJywgJ3BhZGRpbmdCb3R0b20nOiAnMHB4JywgXCJ2ZXJ0aWNhbEFsaWduXCI6IFwiYm90dG9tXCIsICdoZWlnaHQnOiAnMCcgfX0+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBcIndpZHRoXCI6IFwiMTAwJVwiLCAnZGlzcGxheSc6ICdpbmxpbmUtZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJNZXNzYWdlX0JveFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgJ2ZvbnRGYW1pbHknOiAnQ2FuZGFyYScsICdmb250V2VpZ2h0JzogJ25vcm1hbCcsICdmb250U2l6ZSc6ICcxLjV2dycgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gdGhpcy51cGRhdGVJbnB1dFZhbHVlKGV2dCl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6ICcjMDA1ZWI4JywgJ2ZvbnRTaXplJzogJzEuNXZ3JyB9fVxuICAgICAgICAgICAgICAgICAgaGFzSWNvbk9ubHlcbiAgICAgICAgICAgICAgICAgIHJlbmRlckljb249e1NlbmQzMn1cbiAgICAgICAgICAgICAgICAgIHRvb2x0aXBBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgIGljb25EZXNjcmlwdGlvbj1cIlNlbmQgTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBzaXplPSdmaWVsZCdcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyIl0sInNvdXJjZVJvb3QiOiIifQ==