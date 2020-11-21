(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/view/Player.jsx":
/*!*****************************!*\
  !*** ./src/view/Player.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_flv_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-flv-player */ "../node_modules/react-flv-player/build/index.js");
/* harmony import */ var react_flv_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_flv_player__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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

var Player = /*#__PURE__*/function (_React$Component) {
  _inherits(Player, _React$Component);

  var _super = _createSuper(Player);

  function Player(props) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchData", function () {});

    _defineProperty(_assertThisInitialized(_this), "handleWindowSizeChange", function () {
      _this.setState({
        width: window.innerWidth
      });

      _this.setState({
        width: window.innerHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_flv_player__WEBPACK_IMPORTED_MODULE_0__["ReactFlvPlayer"], {
        url: _this.state.streamLink,
        heigh: "100%",
        width: "100%",
        isMuted: true,
        style: {
          "padding": "10px"
        }
      }));
    });

    console.log(props.videoLink);
    _this.state = {
      messagesList: [],
      playerHeight: 0,
      formHeight: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      streamLink: props.videoLink
    };
    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
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
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var _default = Player;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Player, "Player", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\Player.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\Player.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9QbGF5ZXIuanN4Il0sIm5hbWVzIjpbImZldGNoIiwicmVxdWlyZSIsIlBsYXllciIsInByb3BzIiwic2V0U3RhdGUiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInN0YXRlIiwic3RyZWFtTGluayIsImNvbnNvbGUiLCJsb2ciLCJ2aWRlb0xpbmsiLCJtZXNzYWdlc0xpc3QiLCJwbGF5ZXJIZWlnaHQiLCJmb3JtSGVpZ2h0IiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQXJCOztJQUVNQyxNOzs7OztBQUVKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixnRUFxQlAsWUFBTSxDQUNqQixDQXRCa0I7O0FBQUEsNkVBd0JNLFlBQU07QUFDN0IsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLGFBQUssRUFBRUMsTUFBTSxDQUFDQztBQUFoQixPQUFkOztBQUNBLFlBQUtILFFBQUwsQ0FBYztBQUFFQyxhQUFLLEVBQUVDLE1BQU0sQ0FBQ0U7QUFBaEIsT0FBZDtBQUNELEtBM0JrQjs7QUFBQSw2REE2QlYsWUFBTTtBQUNiLDBCQUNFLHFGQUNFLDJEQUFDLCtEQUFEO0FBQWdCLFdBQUcsRUFBRSxNQUFLQyxLQUFMLENBQVdDLFVBQWhDO0FBQTRDLGFBQUssRUFBQyxNQUFsRDtBQUF5RCxhQUFLLEVBQUMsTUFBL0Q7QUFBc0UsZUFBTyxFQUFFLElBQS9FO0FBQXFGLGFBQUssRUFBRTtBQUFFLHFCQUFXO0FBQWI7QUFBNUYsUUFERixDQURGO0FBS0QsS0FuQ2tCOztBQUVqQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlULEtBQUssQ0FBQ1UsU0FBbEI7QUFDQSxVQUFLSixLQUFMLEdBQWE7QUFDWEssa0JBQVksRUFBRSxFQURIO0FBRVhDLGtCQUFZLEVBQUUsQ0FGSDtBQUdYQyxnQkFBVSxFQUFFLENBSEQ7QUFJWFgsV0FBSyxFQUFFQyxNQUFNLENBQUNDLFVBSkg7QUFLWFUsWUFBTSxFQUFFWCxNQUFNLENBQUNFLFdBTEo7QUFNWEUsZ0JBQVUsRUFBRVAsS0FBSyxDQUFDVTtBQU5QLEtBQWI7QUFIaUI7QUFXbEI7Ozs7d0NBRW9CO0FBQ25CUCxZQUFNLENBQUNZLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLHNCQUF2QztBQUNEOzs7MkNBRXVCO0FBQ3RCYixZQUFNLENBQUNjLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtELHNCQUExQztBQUNEOzs7Ozs7Ozs7OztFQXJCa0JFLDRDQUFLLENBQUNDLFM7O2VBd0NacEIsTTtBQUFBOzs7Ozs7Ozs7OzBCQXhDVEEsTSIsImZpbGUiOiI2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Rmx2UGxheWVyIH0gZnJvbSAncmVhY3QtZmx2LXBsYXllcidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpXHJcblxyXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy52aWRlb0xpbmspXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZXNzYWdlc0xpc3Q6IFtdLFxyXG4gICAgICBwbGF5ZXJIZWlnaHQ6IDAsXHJcbiAgICAgIGZvcm1IZWlnaHQ6IDAsXHJcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIHN0cmVhbUxpbms6IHByb3BzLnZpZGVvTGlua1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpXHJcbiAgfVxyXG5cclxuICBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVXaW5kb3dTaXplQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJIZWlnaHQgfSlcclxuICB9O1xyXG5cclxuICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxSZWFjdEZsdlBsYXllciB1cmw9e3RoaXMuc3RhdGUuc3RyZWFtTGlua30gaGVpZ2g9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgaXNNdXRlZD17dHJ1ZX0gc3R5bGU9e3sgXCJwYWRkaW5nXCI6IFwiMTBweFwiIH19IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyIl0sInNvdXJjZVJvb3QiOiIifQ==