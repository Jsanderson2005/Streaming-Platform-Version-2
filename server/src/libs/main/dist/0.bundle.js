(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../node_modules/node-fetch/browser.js":
/*!*********************************************!*\
  !*** ../node_modules/node-fetch/browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "../node_modules/react-flv-player/build/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-flv-player/build/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ReactFlvPlayer = __webpack_require__(/*! ./wrapper/ReactFlvPlayer */ "../node_modules/react-flv-player/build/wrapper/ReactFlvPlayer.js");

var _ReactFlvPlayer2 = _interopRequireDefault(_ReactFlvPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  ReactFlvPlayer: _ReactFlvPlayer2.default
};

/***/ }),

/***/ "../node_modules/react-flv-player/build/wrapper/ReactFlvPlayer.js":
/*!************************************************************************!*\
  !*** ../node_modules/react-flv-player/build/wrapper/ReactFlvPlayer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _flv = __webpack_require__(/*! ./flv.min */ "../node_modules/react-flv-player/build/wrapper/flv.min.js");

var _flv2 = _interopRequireDefault(_flv);

var _propTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactFlvPlayer = function (_Component) {
  _inherits(ReactFlvPlayer, _Component);

  function ReactFlvPlayer(props) {
    _classCallCheck(this, ReactFlvPlayer);

    var _this = _possibleConstructorReturn(this, (ReactFlvPlayer.__proto__ || Object.getPrototypeOf(ReactFlvPlayer)).call(this, props));

    _this.myRef = _react2.default.createRef();
    _this.flvPlayerRef = function (element) {
      _this.flvPlayerRef = element;
    };
    return _this;
  }

  _createClass(ReactFlvPlayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          type = _props.type,
          url = _props.url,
          isLive = _props.isLive,
          enableStashBuffer = _props.enableStashBuffer,
          stashInitialSize = _props.stashInitialSize,
          hasAudio = _props.hasAudio,
          hasVideo = _props.hasVideo,
          handleError = _props.handleError,
          enableWarning = _props.enableWarning,
          enableError = _props.enableError;

      // 组件挂载后，拿到Ref进行操作

      if (_flv2.default.isSupported()) {
        var flvPlayer = _flv2.default.createPlayer({
          type: type,
          isLive: isLive,
          url: url,
          hasAudio: hasAudio,
          hasVideo: hasVideo
        }, {
          enableStashBuffer: enableStashBuffer,
          stashInitialSize: stashInitialSize
        });

        _flv2.default.LoggingControl.enableError = false;
        _flv2.default.LoggingControl.enableWarn = enableWarning;

        flvPlayer.attachMediaElement(this.myRef.current); // 将这个DOM付给第三方库
        flvPlayer.load();
        flvPlayer.play();
        flvPlayer.on('error', function (err) {
          // console.log(err);
          handleError(err);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          height = _props2.height,
          width = _props2.width,
          isMuted = _props2.isMuted;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('video', {
          controls: true,
          muted: { isMuted: isMuted },
          ref: this.myRef,
          style: { height: height, width: width }
        })
      );
    }
  }]);

  return ReactFlvPlayer;
}(_react.Component);

ReactFlvPlayer.propTypes = {
  type: _propTypes2.default.string,
  url: _propTypes2.default.string.isRequired,
  isLive: _propTypes2.default.bool,
  hasAudio: _propTypes2.default.bool,
  hasVideo: _propTypes2.default.bool,
  enableStashBuffer: _propTypes2.default.bool,
  stashInitialSize: _propTypes2.default.number,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  isMuted: _propTypes2.default.bool,
  enableWarning: _propTypes2.default.bool,
  enableError: _propTypes2.default.bool,
  handleError: _propTypes2.default.func
};

ReactFlvPlayer.defaultProps = {
  type: 'flv',
  isLive: true,
  hasAudio: true,
  hasVideo: true,
  enableStashBuffer: true,
  stashInitialSize: 128,
  height: '100%',
  width: '100%',
  isMuted: false,
  handleError: function handleError(err) {
    console.log(err);
  },
  enableWarning: false,
  enableError: false
};

exports.default = ReactFlvPlayer;

/***/ }),

/***/ "../node_modules/react-flv-player/build/wrapper/flv.min.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-flv-player/build/wrapper/flv.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var t; }
}(function () {
  var e;return function e(t, n, i) {
    function r(a, o) {
      if (!n[a]) {
        if (!t[a]) {
          var u = "function" == typeof require && require;if (!o && u) return require(a, !0);if (s) return s(a, !0);var l = new Error("Cannot find module '" + a + "'");throw l.code = "MODULE_NOT_FOUND", l;
        }var d = n[a] = { exports: {} };t[a][0].call(d.exports, function (e) {
          var n = t[a][1][e];return r(n || e);
        }, d, d.exports, e, t, n, i);
      }return n[a].exports;
    }for (var s = "function" == typeof require && require, a = 0; a < i.length; a++) {
      r(i[a]);
    }return r;
  }({ 1: [function (t, n, i) {
      (function (r, s) {
        !function (t, r) {
          "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && void 0 !== n ? n.exports = r() : "function" == typeof e && e.amd ? e(r) : t.ES6Promise = r();
        }(this, function () {
          "use strict";
          function e(e) {
            var t = typeof e === "undefined" ? "undefined" : _typeof(e);return null !== e && ("object" === t || "function" === t);
          }function n(e) {
            return "function" == typeof e;
          }function i(e) {
            V = e;
          }function a(e) {
            z = e;
          }function o() {
            return void 0 !== G ? function () {
              G(l);
            } : u();
          }function u() {
            var e = setTimeout;return function () {
              return e(l, 1);
            };
          }function l() {
            for (var e = 0; e < F; e += 2) {
              (0, Y[e])(Y[e + 1]), Y[e] = void 0, Y[e + 1] = void 0;
            }F = 0;
          }function d(e, t) {
            var n = this,
                i = new this.constructor(f);void 0 === i[Q] && C(i);var r = n._state;if (r) {
              var s = arguments[r - 1];z(function () {
                return w(r, i, s, n._result);
              });
            } else L(n, i, e, t);return i;
          }function h(e) {
            var t = this;if (e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.constructor === t) return e;var n = new t(f);return E(n, e), n;
          }function f() {}function c() {
            return new TypeError("You cannot resolve a promise with itself");
          }function _() {
            return new TypeError("A promises callback cannot return that same promise.");
          }function m(e) {
            try {
              return e.then;
            } catch (e) {
              return te.error = e, te;
            }
          }function p(e, t, n, i) {
            try {
              e.call(t, n, i);
            } catch (e) {
              return e;
            }
          }function v(e, t, n) {
            z(function (e) {
              var i = !1,
                  r = p(n, t, function (n) {
                i || (i = !0, t !== n ? E(e, n) : S(e, n));
              }, function (t) {
                i || (i = !0, k(e, t));
              }, "Settle: " + (e._label || " unknown promise"));!i && r && (i = !0, k(e, r));
            }, e);
          }function g(e, t) {
            t._state === $ ? S(e, t._result) : t._state === ee ? k(e, t._result) : L(t, void 0, function (t) {
              return E(e, t);
            }, function (t) {
              return k(e, t);
            });
          }function y(e, t, i) {
            t.constructor === e.constructor && i === d && t.constructor.resolve === h ? g(e, t) : i === te ? (k(e, te.error), te.error = null) : void 0 === i ? S(e, t) : n(i) ? v(e, t, i) : S(e, t);
          }function E(t, n) {
            t === n ? k(t, c()) : e(n) ? y(t, n, m(n)) : S(t, n);
          }function b(e) {
            e._onerror && e._onerror(e._result), R(e);
          }function S(e, t) {
            e._state === J && (e._result = t, e._state = $, 0 !== e._subscribers.length && z(R, e));
          }function k(e, t) {
            e._state === J && (e._state = ee, e._result = t, z(b, e));
          }function L(e, t, n, i) {
            var r = e._subscribers,
                s = r.length;e._onerror = null, r[s] = t, r[s + $] = n, r[s + ee] = i, 0 === s && e._state && z(R, e);
          }function R(e) {
            var t = e._subscribers,
                n = e._state;if (0 !== t.length) {
              for (var i = void 0, r = void 0, s = e._result, a = 0; a < t.length; a += 3) {
                i = t[a], r = t[a + n], i ? w(n, i, r, s) : r(s);
              }e._subscribers.length = 0;
            }
          }function A(e, t) {
            try {
              return e(t);
            } catch (e) {
              return te.error = e, te;
            }
          }function w(e, t, i, r) {
            var s = n(i),
                a = void 0,
                o = void 0,
                u = void 0,
                l = void 0;if (s) {
              if (a = A(i, r), a === te ? (l = !0, o = a.error, a.error = null) : u = !0, t === a) return void k(t, _());
            } else a = r, u = !0;t._state !== J || (s && u ? E(t, a) : l ? k(t, o) : e === $ ? S(t, a) : e === ee && k(t, a));
          }function T(e, t) {
            try {
              t(function (t) {
                E(e, t);
              }, function (t) {
                k(e, t);
              });
            } catch (t) {
              k(e, t);
            }
          }function O() {
            return ne++;
          }function C(e) {
            e[Q] = ne++, e._state = void 0, e._result = void 0, e._subscribers = [];
          }function I() {
            return new Error("Array Methods must be provided an Array");
          }function D(e) {
            return new ie(this, e).promise;
          }function x(e) {
            var t = this;return new t(N(e) ? function (n, i) {
              for (var r = e.length, s = 0; s < r; s++) {
                t.resolve(e[s]).then(n, i);
              }
            } : function (e, t) {
              return t(new TypeError("You must pass an array to race."));
            });
          }function M(e) {
            var t = this,
                n = new t(f);return k(n, e), n;
          }function B() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }function j() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }function P() {
            var e = void 0;if (void 0 !== s) e = s;else if ("undefined" != typeof self) e = self;else try {
              e = Function("return this")();
            } catch (e) {
              throw new Error("polyfill failed because global object is unavailable in this environment");
            }var t = e.Promise;if (t) {
              var n = null;try {
                n = Object.prototype.toString.call(t.resolve());
              } catch (e) {}if ("[object Promise]" === n && !t.cast) return;
            }e.Promise = re;
          }var U = void 0;U = Array.isArray ? Array.isArray : function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          };var N = U,
              F = 0,
              G = void 0,
              V = void 0,
              z = function z(e, t) {
            Y[F] = e, Y[F + 1] = t, 2 === (F += 2) && (V ? V(l) : Z());
          },
              H = "undefined" != typeof window ? window : void 0,
              K = H || {},
              q = K.MutationObserver || K.WebKitMutationObserver,
              W = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
              X = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
              Y = new Array(1e3),
              Z = void 0;Z = W ? function () {
            return function () {
              return r.nextTick(l);
            };
          }() : q ? function () {
            var e = 0,
                t = new q(l),
                n = document.createTextNode("");return t.observe(n, { characterData: !0 }), function () {
              n.data = e = ++e % 2;
            };
          }() : X ? function () {
            var e = new MessageChannel();return e.port1.onmessage = l, function () {
              return e.port2.postMessage(0);
            };
          }() : void 0 === H && "function" == typeof t ? function () {
            try {
              var e = Function("return this")().require("vertx");return G = e.runOnLoop || e.runOnContext, o();
            } catch (e) {
              return u();
            }
          }() : u();var Q = Math.random().toString(36).substring(2),
              J = void 0,
              $ = 1,
              ee = 2,
              te = { error: null },
              ne = 0,
              ie = function () {
            function e(e, t) {
              this._instanceConstructor = e, this.promise = new e(f), this.promise[Q] || C(this.promise), N(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && S(this.promise, this._result))) : k(this.promise, I());
            }return e.prototype._enumerate = function (e) {
              for (var t = 0; this._state === J && t < e.length; t++) {
                this._eachEntry(e[t], t);
              }
            }, e.prototype._eachEntry = function (e, t) {
              var n = this._instanceConstructor,
                  i = n.resolve;if (i === h) {
                var r = m(e);if (r === d && e._state !== J) this._settledAt(e._state, t, e._result);else if ("function" != typeof r) this._remaining--, this._result[t] = e;else if (n === re) {
                  var s = new n(f);y(s, e, r), this._willSettleAt(s, t);
                } else this._willSettleAt(new n(function (t) {
                  return t(e);
                }), t);
              } else this._willSettleAt(i(e), t);
            }, e.prototype._settledAt = function (e, t, n) {
              var i = this.promise;i._state === J && (this._remaining--, e === ee ? k(i, n) : this._result[t] = n), 0 === this._remaining && S(i, this._result);
            }, e.prototype._willSettleAt = function (e, t) {
              var n = this;L(e, void 0, function (e) {
                return n._settledAt($, t, e);
              }, function (e) {
                return n._settledAt(ee, t, e);
              });
            }, e;
          }(),
              re = function () {
            function e(t) {
              this[Q] = O(), this._result = this._state = void 0, this._subscribers = [], f !== t && ("function" != typeof t && B(), this instanceof e ? T(this, t) : j());
            }return e.prototype.catch = function (e) {
              return this.then(null, e);
            }, e.prototype.finally = function (e) {
              var t = this,
                  i = t.constructor;return n(e) ? t.then(function (t) {
                return i.resolve(e()).then(function () {
                  return t;
                });
              }, function (t) {
                return i.resolve(e()).then(function () {
                  throw t;
                });
              }) : t.then(e, e);
            }, e;
          }();return re.prototype.then = d, re.all = D, re.race = x, re.resolve = h, re.reject = M, re._setScheduler = i, re._setAsap = a, re._asap = z, re.polyfill = P, re.Promise = re, re;
        });
      }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { _process: 3 }], 2: [function (e, t, n) {
      function i() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
      }function r(e) {
        return "function" == typeof e;
      }function s(e) {
        return "number" == typeof e;
      }function a(e) {
        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e;
      }function o(e) {
        return void 0 === e;
      }t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function (e) {
        if (!s(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");return this._maxListeners = e, this;
      }, i.prototype.emit = function (e) {
        var t, n, i, s, u, l;if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
          if ((t = arguments[1]) instanceof Error) throw t;var d = new Error('Uncaught, unspecified "error" event. (' + t + ")");throw d.context = t, d;
        }if (n = this._events[e], o(n)) return !1;if (r(n)) switch (arguments.length) {case 1:
            n.call(this);break;case 2:
            n.call(this, arguments[1]);break;case 3:
            n.call(this, arguments[1], arguments[2]);break;default:
            s = Array.prototype.slice.call(arguments, 1), n.apply(this, s);} else if (a(n)) for (s = Array.prototype.slice.call(arguments, 1), l = n.slice(), i = l.length, u = 0; u < i; u++) {
          l[u].apply(this, s);
        }return !0;
      }, i.prototype.addListener = function (e, t) {
        var n;if (!r(t)) throw TypeError("listener must be a function");return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (n = o(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this;
      }, i.prototype.on = i.prototype.addListener, i.prototype.once = function (e, t) {
        function n() {
          this.removeListener(e, n), i || (i = !0, t.apply(this, arguments));
        }if (!r(t)) throw TypeError("listener must be a function");var i = !1;return n.listener = t, this.on(e, n), this;
      }, i.prototype.removeListener = function (e, t) {
        var n, i, s, o;if (!r(t)) throw TypeError("listener must be a function");if (!this._events || !this._events[e]) return this;if (n = this._events[e], s = n.length, i = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);else if (a(n)) {
          for (o = s; o-- > 0;) {
            if (n[o] === t || n[o].listener && n[o].listener === t) {
              i = o;break;
            }
          }if (i < 0) return this;1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t);
        }return this;
      }, i.prototype.removeAllListeners = function (e) {
        var t, n;if (!this._events) return this;if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;if (0 === arguments.length) {
          for (t in this._events) {
            "removeListener" !== t && this.removeAllListeners(t);
          }return this.removeAllListeners("removeListener"), this._events = {}, this;
        }if (n = this._events[e], r(n)) this.removeListener(e, n);else if (n) for (; n.length;) {
          this.removeListener(e, n[n.length - 1]);
        }return delete this._events[e], this;
      }, i.prototype.listeners = function (e) {
        return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
      }, i.prototype.listenerCount = function (e) {
        if (this._events) {
          var t = this._events[e];if (r(t)) return 1;if (t) return t.length;
        }return 0;
      }, i.listenerCount = function (e, t) {
        return e.listenerCount(t);
      };
    }, {}], 3: [function (e, t, n) {
      function i() {
        throw new Error("setTimeout has not been defined");
      }function r() {
        throw new Error("clearTimeout has not been defined");
      }function s(e) {
        if (h === setTimeout) return setTimeout(e, 0);if ((h === i || !h) && setTimeout) return h = setTimeout, setTimeout(e, 0);try {
          return h(e, 0);
        } catch (t) {
          try {
            return h.call(null, e, 0);
          } catch (t) {
            return h.call(this, e, 0);
          }
        }
      }function a(e) {
        if (f === clearTimeout) return clearTimeout(e);if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);try {
          return f(e);
        } catch (t) {
          try {
            return f.call(null, e);
          } catch (t) {
            return f.call(this, e);
          }
        }
      }function o() {
        p && _ && (p = !1, _.length ? m = _.concat(m) : v = -1, m.length && u());
      }function u() {
        if (!p) {
          var e = s(o);p = !0;for (var t = m.length; t;) {
            for (_ = m, m = []; ++v < t;) {
              _ && _[v].run();
            }v = -1, t = m.length;
          }_ = null, p = !1, a(e);
        }
      }function l(e, t) {
        this.fun = e, this.array = t;
      }function d() {}var h,
          f,
          c = t.exports = {};!function () {
        try {
          h = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          h = i;
        }try {
          f = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
          f = r;
        }
      }();var _,
          m = [],
          p = !1,
          v = -1;c.nextTick = function (e) {
        var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }m.push(new l(e, t)), 1 !== m.length || p || s(u);
      }, l.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = d, c.addListener = d, c.once = d, c.off = d, c.removeListener = d, c.removeAllListeners = d, c.emit = d, c.prependListener = d, c.prependOnceListener = d, c.listeners = function (e) {
        return [];
      }, c.binding = function (e) {
        throw new Error("process.binding is not supported");
      }, c.cwd = function () {
        return "/";
      }, c.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }, c.umask = function () {
        return 0;
      };
    }, {}], 4: [function (e, t, n) {
      var i = arguments[3],
          r = arguments[4],
          s = arguments[5],
          a = JSON.stringify;t.exports = function (e, t) {
        function n(e) {
          p[e] = !0;for (var t in r[e][1]) {
            var i = r[e][1][t];p[i] || n(i);
          }
        }for (var o, u = Object.keys(s), l = 0, d = u.length; l < d; l++) {
          var h = u[l],
              f = s[h].exports;if (f === e || f && f.default === e) {
            o = h;break;
          }
        }if (!o) {
          o = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);for (var c = {}, l = 0, d = u.length; l < d; l++) {
            var h = u[l];c[h] = h;
          }r[o] = ["function(require,module,exports){" + e + "(self); }", c];
        }var _ = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
            m = {};m[o] = o, r[_] = ["function(require,module,exports){var f = require(" + a(o) + ");(f.default ? f.default : f)(self);}", m];var p = {};n(_);var v = "(" + i + ")({" + Object.keys(p).map(function (e) {
          return a(e) + ":[" + r[e][0] + "," + a(r[e][1]) + "]";
        }).join(",") + "},{},[" + a(_) + "])",
            g = window.URL || window.webkitURL || window.mozURL || window.msURL,
            y = new Blob([v], { type: "text/javascript" });if (t && t.bare) return y;var E = g.createObjectURL(y),
            b = new Worker(E);return b.objectURL = E, b;
      };
    }, {}], 5: [function (e, t, n) {
      "use strict";
      function i() {
        return Object.assign({}, r);
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.createDefaultConfig = i;var r = n.defaultConfig = { enableWorker: !1, enableStashBuffer: !0, stashInitialSize: void 0, isLive: !1, lazyLoad: !0, lazyLoadMaxDuration: 180, lazyLoadRecoverDuration: 30, deferLoadAfterSourceOpen: !0, autoCleanupMaxBackwardDuration: 180, autoCleanupMinBackwardDuration: 120, statisticsInfoReportInterval: 600, fixAudioTimestampGap: !0, accurateSeek: !1, seekType: "range", seekParamStart: "bstart", seekParamEnd: "bend", rangeLoadZeroStart: !1, customSeekHandler: void 0, reuseRedirectedURL: !1, headers: void 0, customLoader: void 0 };
    }, {}], 6: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = e("../io/io-controller.js"),
          a = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(s),
          o = e("../config.js"),
          u = function () {
        function e() {
          i(this, e);
        }return r(e, null, [{ key: "supportMSEH264Playback", value: function value() {
            return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
          } }, { key: "supportNetworkStreamIO", value: function value() {
            var e = new a.default({}, (0, o.createDefaultConfig)()),
                t = e.loaderType;return e.destroy(), "fetch-stream-loader" == t || "xhr-moz-chunked-loader" == t;
          } }, { key: "getNetworkLoaderTypeName", value: function value() {
            var e = new a.default({}, (0, o.createDefaultConfig)()),
                t = e.loaderType;return e.destroy(), t;
          } }, { key: "supportNativeMediaPlayback", value: function value(t) {
            void 0 == e.videoElement && (e.videoElement = window.document.createElement("video"));var n = e.videoElement.canPlayType(t);return "probably" === n || "maybe" == n;
          } }, { key: "getFeatureList", value: function value() {
            var t = { mseFlvPlayback: !1, mseLiveFlvPlayback: !1, networkStreamIO: !1, networkLoaderName: "", nativeMP4H264Playback: !1, nativeWebmVP8Playback: !1, nativeWebmVP9Playback: !1 };return t.mseFlvPlayback = e.supportMSEH264Playback(), t.networkStreamIO = e.supportNetworkStreamIO(), t.networkLoaderName = e.getNetworkLoaderTypeName(), t.mseLiveFlvPlayback = t.mseFlvPlayback && t.networkStreamIO, t.nativeMP4H264Playback = e.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'), t.nativeWebmVP8Playback = e.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), t.nativeWebmVP9Playback = e.supportNativeMediaPlayback('video/webm; codecs="vp9"'), t;
          } }]), e;
      }();n.default = u;
    }, { "../config.js": 5, "../io/io-controller.js": 23 }], 7: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = function () {
        function e() {
          i(this, e), this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null;
        }return r(e, [{ key: "isComplete", value: function value() {
            var e = !1 === this.hasAudio || !0 === this.hasAudio && null != this.audioCodec && null != this.audioSampleRate && null != this.audioChannelCount,
                t = !1 === this.hasVideo || !0 === this.hasVideo && null != this.videoCodec && null != this.width && null != this.height && null != this.fps && null != this.profile && null != this.level && null != this.refFrames && null != this.chromaFormat && null != this.sarNum && null != this.sarDen;return null != this.mimeType && null != this.duration && null != this.metadata && null != this.hasKeyframesIndex && e && t;
          } }, { key: "isSeekable", value: function value() {
            return !0 === this.hasKeyframesIndex;
          } }, { key: "getNearestKeyframe", value: function value(e) {
            if (null == this.keyframesIndex) return null;var t = this.keyframesIndex,
                n = this._search(t.times, e);return { index: n, milliseconds: t.times[n], fileposition: t.filepositions[n] };
          } }, { key: "_search", value: function value(e, t) {
            var n = 0,
                i = e.length - 1,
                r = 0,
                s = 0,
                a = i;for (t < e[0] && (n = 0, s = a + 1); s <= a;) {
              if ((r = s + Math.floor((a - s) / 2)) === i || t >= e[r] && t < e[r + 1]) {
                n = r;break;
              }e[r] < t ? s = r + 1 : a = r - 1;
            }return n;
          } }]), e;
      }();n.default = s;
    }, {}], 8: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }();n.SampleInfo = function e(t, n, r, s, a) {
        i(this, e), this.dts = t, this.pts = n, this.duration = r, this.originalDts = s, this.isSyncPoint = a, this.fileposition = null;
      }, n.MediaSegmentInfo = function () {
        function e() {
          i(this, e), this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null;
        }return r(e, [{ key: "appendSyncPoint", value: function value(e) {
            e.isSyncPoint = !0, this.syncPoints.push(e);
          } }]), e;
      }(), n.IDRSampleList = function () {
        function e() {
          i(this, e), this._list = [];
        }return r(e, [{ key: "clear", value: function value() {
            this._list = [];
          } }, { key: "appendArray", value: function value(e) {
            var t = this._list;0 !== e.length && (t.length > 0 && e[0].originalDts < t[t.length - 1].originalDts && this.clear(), Array.prototype.push.apply(t, e));
          } }, { key: "getLastSyncPointBeforeDts", value: function value(e) {
            if (0 == this._list.length) return null;var t = this._list,
                n = 0,
                i = t.length - 1,
                r = 0,
                s = 0,
                a = i;for (e < t[0].dts && (n = 0, s = a + 1); s <= a;) {
              if ((r = s + Math.floor((a - s) / 2)) === i || e >= t[r].dts && e < t[r + 1].dts) {
                n = r;break;
              }t[r].dts < e ? s = r + 1 : a = r - 1;
            }return this._list[n];
          } }]), e;
      }(), n.MediaSegmentInfoList = function () {
        function e(t) {
          i(this, e), this._type = t, this._list = [], this._lastAppendLocation = -1;
        }return r(e, [{ key: "isEmpty", value: function value() {
            return 0 === this._list.length;
          } }, { key: "clear", value: function value() {
            this._list = [], this._lastAppendLocation = -1;
          } }, { key: "_searchNearestSegmentBefore", value: function value(e) {
            var t = this._list;if (0 === t.length) return -2;var n = t.length - 1,
                i = 0,
                r = 0,
                s = n,
                a = 0;if (e < t[0].originalBeginDts) return a = -1;for (; r <= s;) {
              if ((i = r + Math.floor((s - r) / 2)) === n || e > t[i].lastSample.originalDts && e < t[i + 1].originalBeginDts) {
                a = i;break;
              }t[i].originalBeginDts < e ? r = i + 1 : s = i - 1;
            }return a;
          } }, { key: "_searchNearestSegmentAfter", value: function value(e) {
            return this._searchNearestSegmentBefore(e) + 1;
          } }, { key: "append", value: function value(e) {
            var t = this._list,
                n = e,
                i = this._lastAppendLocation,
                r = 0;-1 !== i && i < t.length && n.originalBeginDts >= t[i].lastSample.originalDts && (i === t.length - 1 || i < t.length - 1 && n.originalBeginDts < t[i + 1].originalBeginDts) ? r = i + 1 : t.length > 0 && (r = this._searchNearestSegmentBefore(n.originalBeginDts) + 1), this._lastAppendLocation = r, this._list.splice(r, 0, n);
          } }, { key: "getLastSegmentBefore", value: function value(e) {
            var t = this._searchNearestSegmentBefore(e);return t >= 0 ? this._list[t] : null;
          } }, { key: "getLastSampleBefore", value: function value(e) {
            var t = this.getLastSegmentBefore(e);return null != t ? t.lastSample : null;
          } }, { key: "getLastSyncPointBefore", value: function value(e) {
            for (var t = this._searchNearestSegmentBefore(e), n = this._list[t].syncPoints; 0 === n.length && t > 0;) {
              t--, n = this._list[t].syncPoints;
            }return n.length > 0 ? n[n.length - 1] : null;
          } }, { key: "type", get: function get() {
            return this._type;
          } }, { key: "length", get: function get() {
            return this._list.length;
          } }]), e;
      }();
    }, {}], 9: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          a = e("events"),
          o = i(a),
          u = e("../utils/logger.js"),
          l = i(u),
          d = e("../utils/browser.js"),
          h = i(d),
          f = e("./mse-events.js"),
          c = i(f),
          _ = e("./media-segment-info.js"),
          m = e("../utils/exception.js"),
          p = function () {
        function e(t) {
          r(this, e), this.TAG = "MSEController", this._config = t, this._emitter = new o.default(), this._config.isLive && void 0 == this._config.autoCleanupSourceBuffer && (this._config.autoCleanupSourceBuffer = !0), this.e = { onSourceOpen: this._onSourceOpen.bind(this), onSourceEnded: this._onSourceEnded.bind(this), onSourceClose: this._onSourceClose.bind(this), onSourceBufferError: this._onSourceBufferError.bind(this), onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this) }, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement = null, this._isBufferFull = !1, this._hasPendingEos = !1, this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0, this._pendingSourceBufferInit = [], this._mimeTypes = { video: null, audio: null }, this._sourceBuffers = { video: null, audio: null }, this._lastInitSegments = { video: null, audio: null }, this._pendingSegments = { video: [], audio: [] }, this._pendingRemoveRanges = { video: [], audio: [] }, this._idrList = new _.IDRSampleList();
        }return s(e, [{ key: "destroy", value: function value() {
            (this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null;
          } }, { key: "on", value: function value(e, t) {
            this._emitter.addListener(e, t);
          } }, { key: "off", value: function value(e, t) {
            this._emitter.removeListener(e, t);
          } }, { key: "attachMediaElement", value: function value(e) {
            if (this._mediaSource) throw new m.IllegalStateException("MediaSource has been attached to an HTMLMediaElement!");var t = this._mediaSource = new window.MediaSource();t.addEventListener("sourceopen", this.e.onSourceOpen), t.addEventListener("sourceended", this.e.onSourceEnded), t.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = e, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), e.src = this._mediaSourceObjectURL;
          } }, { key: "detachMediaElement", value: function value() {
            if (this._mediaSource) {
              var e = this._mediaSource;for (var t in this._sourceBuffers) {
                var n = this._pendingSegments[t];n.splice(0, n.length), this._pendingSegments[t] = null, this._pendingRemoveRanges[t] = null, this._lastInitSegments[t] = null;var i = this._sourceBuffers[t];if (i) {
                  if ("closed" !== e.readyState) {
                    try {
                      e.removeSourceBuffer(i);
                    } catch (e) {
                      l.default.e(this.TAG, e.message);
                    }i.removeEventListener("error", this.e.onSourceBufferError), i.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                  }this._mimeTypes[t] = null, this._sourceBuffers[t] = null;
                }
              }if ("open" === e.readyState) try {
                e.endOfStream();
              } catch (e) {
                l.default.e(this.TAG, e.message);
              }e.removeEventListener("sourceopen", this.e.onSourceOpen), e.removeEventListener("sourceended", this.e.onSourceEnded), e.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null;
            }this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null);
          } }, { key: "appendInitSegment", value: function value(e, t) {
            if (!this._mediaSource || "open" !== this._mediaSource.readyState) return this._pendingSourceBufferInit.push(e), void this._pendingSegments[e.type].push(e);var n = e,
                i = "" + n.container;n.codec && n.codec.length > 0 && (i += ";codecs=" + n.codec);var r = !1;if (l.default.v(this.TAG, "Received Initialization Segment, mimeType: " + i), this._lastInitSegments[n.type] = n, i !== this._mimeTypes[n.type]) {
              if (this._mimeTypes[n.type]) l.default.v(this.TAG, "Notice: " + n.type + " mimeType changed, origin: " + this._mimeTypes[n.type] + ", target: " + i);else {
                r = !0;try {
                  var s = this._sourceBuffers[n.type] = this._mediaSource.addSourceBuffer(i);s.addEventListener("error", this.e.onSourceBufferError), s.addEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                } catch (e) {
                  return l.default.e(this.TAG, e.message), void this._emitter.emit(c.default.ERROR, { code: e.code, msg: e.message });
                }
              }this._mimeTypes[n.type] = i;
            }t || this._pendingSegments[n.type].push(n), r || this._sourceBuffers[n.type] && !this._sourceBuffers[n.type].updating && this._doAppendSegments(), h.default.safari && "audio/mpeg" === n.container && n.mediaDuration > 0 && (this._requireSetMediaDuration = !0, this._pendingMediaDuration = n.mediaDuration / 1e3, this._updateMediaSourceDuration());
          } }, { key: "appendMediaSegment", value: function value(e) {
            var t = e;this._pendingSegments[t.type].push(t), this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();var n = this._sourceBuffers[t.type];!n || n.updating || this._hasPendingRemoveRanges() || this._doAppendSegments();
          } }, { key: "seek", value: function value(e) {
            for (var t in this._sourceBuffers) {
              if (this._sourceBuffers[t]) {
                var n = this._sourceBuffers[t];if ("open" === this._mediaSource.readyState) try {
                  n.abort();
                } catch (e) {
                  l.default.e(this.TAG, e.message);
                }this._idrList.clear();var i = this._pendingSegments[t];if (i.splice(0, i.length), "closed" !== this._mediaSource.readyState) {
                  for (var r = 0; r < n.buffered.length; r++) {
                    var s = n.buffered.start(r),
                        a = n.buffered.end(r);this._pendingRemoveRanges[t].push({ start: s, end: a });
                  }if (n.updating || this._doRemoveRanges(), h.default.safari) {
                    var o = this._lastInitSegments[t];o && (this._pendingSegments[t].push(o), n.updating || this._doAppendSegments());
                  }
                }
              }
            }
          } }, { key: "endOfStream", value: function value() {
            var e = this._mediaSource,
                t = this._sourceBuffers;if (!e || "open" !== e.readyState) return void (e && "closed" === e.readyState && this._hasPendingSegments() && (this._hasPendingEos = !0));t.video && t.video.updating || t.audio && t.audio.updating ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, e.endOfStream());
          } }, { key: "getNearestKeyframe", value: function value(e) {
            return this._idrList.getLastSyncPointBeforeDts(e);
          } }, { key: "_needCleanupSourceBuffer", value: function value() {
            if (!this._config.autoCleanupSourceBuffer) return !1;var e = this._mediaElement.currentTime;for (var t in this._sourceBuffers) {
              var n = this._sourceBuffers[t];if (n) {
                var i = n.buffered;if (i.length >= 1 && e - i.start(0) >= this._config.autoCleanupMaxBackwardDuration) return !0;
              }
            }return !1;
          } }, { key: "_doCleanupSourceBuffer", value: function value() {
            var e = this._mediaElement.currentTime;for (var t in this._sourceBuffers) {
              var n = this._sourceBuffers[t];if (n) {
                for (var i = n.buffered, r = !1, s = 0; s < i.length; s++) {
                  var a = i.start(s),
                      o = i.end(s);if (a <= e && e < o + 3) {
                    if (e - a >= this._config.autoCleanupMaxBackwardDuration) {
                      r = !0;var u = e - this._config.autoCleanupMinBackwardDuration;this._pendingRemoveRanges[t].push({ start: a, end: u });
                    }
                  } else o < e && (r = !0, this._pendingRemoveRanges[t].push({ start: a, end: o }));
                }r && !n.updating && this._doRemoveRanges();
              }
            }
          } }, { key: "_updateMediaSourceDuration", value: function value() {
            var e = this._sourceBuffers;if (0 !== this._mediaElement.readyState && "open" === this._mediaSource.readyState && !(e.video && e.video.updating || e.audio && e.audio.updating)) {
              var t = this._mediaSource.duration,
                  n = this._pendingMediaDuration;n > 0 && (isNaN(t) || n > t) && (l.default.v(this.TAG, "Update MediaSource duration from " + t + " to " + n), this._mediaSource.duration = n), this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0;
            }
          } }, { key: "_doRemoveRanges", value: function value() {
            for (var e in this._pendingRemoveRanges) {
              if (this._sourceBuffers[e] && !this._sourceBuffers[e].updating) for (var t = this._sourceBuffers[e], n = this._pendingRemoveRanges[e]; n.length && !t.updating;) {
                var i = n.shift();t.remove(i.start, i.end);
              }
            }
          } }, { key: "_doAppendSegments", value: function value() {
            var e = this._pendingSegments;for (var t in e) {
              if (this._sourceBuffers[t] && !this._sourceBuffers[t].updating && e[t].length > 0) {
                var n = e[t].shift();if (n.timestampOffset) {
                  var i = this._sourceBuffers[t].timestampOffset,
                      r = n.timestampOffset / 1e3,
                      s = Math.abs(i - r);s > .1 && (l.default.v(this.TAG, "Update MPEG audio timestampOffset from " + i + " to " + r), this._sourceBuffers[t].timestampOffset = r), delete n.timestampOffset;
                }if (!n.data || 0 === n.data.byteLength) continue;try {
                  this._sourceBuffers[t].appendBuffer(n.data), this._isBufferFull = !1, "video" === t && n.hasOwnProperty("info") && this._idrList.appendArray(n.info.syncPoints);
                } catch (e) {
                  this._pendingSegments[t].unshift(n), 22 === e.code ? (this._isBufferFull || this._emitter.emit(c.default.BUFFER_FULL), this._isBufferFull = !0) : (l.default.e(this.TAG, e.message), this._emitter.emit(c.default.ERROR, { code: e.code, msg: e.message }));
                }
              }
            }
          } }, { key: "_onSourceOpen", value: function value() {
            if (l.default.v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._pendingSourceBufferInit.length > 0) for (var e = this._pendingSourceBufferInit; e.length;) {
              var t = e.shift();this.appendInitSegment(t, !0);
            }this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(c.default.SOURCE_OPEN);
          } }, { key: "_onSourceEnded", value: function value() {
            l.default.v(this.TAG, "MediaSource onSourceEnded");
          } }, { key: "_onSourceClose", value: function value() {
            l.default.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && null != this.e && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose));
          } }, { key: "_hasPendingSegments", value: function value() {
            var e = this._pendingSegments;return e.video.length > 0 || e.audio.length > 0;
          } }, { key: "_hasPendingRemoveRanges", value: function value() {
            var e = this._pendingRemoveRanges;return e.video.length > 0 || e.audio.length > 0;
          } }, { key: "_onSourceBufferUpdateEnd", value: function value() {
            this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter.emit(c.default.UPDATE_END);
          } }, { key: "_onSourceBufferError", value: function value(e) {
            l.default.e(this.TAG, "SourceBuffer Error: " + e);
          } }]), e;
      }();n.default = p;
    }, { "../utils/browser.js": 39, "../utils/exception.js": 40, "../utils/logger.js": 41, "./media-segment-info.js": 8, "./mse-events.js": 10, events: 2 }], 10: [function (e, t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });var i = { ERROR: "error", SOURCE_OPEN: "source_open", UPDATE_END: "update_end", BUFFER_FULL: "buffer_full" };n.default = i;
    }, {}], 11: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          a = e("events"),
          o = i(a),
          u = e("../utils/logger.js"),
          l = i(u),
          d = e("../utils/logging-control.js"),
          h = i(d),
          f = e("./transmuxing-controller.js"),
          c = i(f),
          _ = e("./transmuxing-events.js"),
          m = i(_),
          p = e("./transmuxing-worker.js"),
          v = i(p),
          g = e("./media-info.js"),
          y = i(g),
          E = function () {
        function t(n, i) {
          if (r(this, t), this.TAG = "Transmuxer", this._emitter = new o.default(), i.enableWorker && "undefined" != typeof Worker) try {
            var s = e("webworkify");this._worker = s(v.default), this._workerDestroying = !1, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({ cmd: "init", param: [n, i] }), this.e = { onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this) }, h.default.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({ cmd: "logging_config", param: h.default.getConfig() });
          } catch (e) {
            l.default.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new c.default(n, i);
          } else this._controller = new c.default(n, i);if (this._controller) {
            var a = this._controller;a.on(m.default.IO_ERROR, this._onIOError.bind(this)), a.on(m.default.DEMUX_ERROR, this._onDemuxError.bind(this)), a.on(m.default.INIT_SEGMENT, this._onInitSegment.bind(this)), a.on(m.default.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), a.on(m.default.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), a.on(m.default.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), a.on(m.default.MEDIA_INFO, this._onMediaInfo.bind(this)), a.on(m.default.METADATA_ARRIVED, this._onMetaDataArrived.bind(this)), a.on(m.default.SCRIPTDATA_ARRIVED, this._onScriptDataArrived.bind(this)), a.on(m.default.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), a.on(m.default.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this));
          }
        }return s(t, [{ key: "destroy", value: function value() {
            this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker.postMessage({ cmd: "destroy" }), h.default.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (this._controller.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null;
          } }, { key: "on", value: function value(e, t) {
            this._emitter.addListener(e, t);
          } }, { key: "off", value: function value(e, t) {
            this._emitter.removeListener(e, t);
          } }, { key: "hasWorker", value: function value() {
            return null != this._worker;
          } }, { key: "open", value: function value() {
            this._worker ? this._worker.postMessage({ cmd: "start" }) : this._controller.start();
          } }, { key: "close", value: function value() {
            this._worker ? this._worker.postMessage({ cmd: "stop" }) : this._controller.stop();
          } }, { key: "seek", value: function value(e) {
            this._worker ? this._worker.postMessage({ cmd: "seek", param: e }) : this._controller.seek(e);
          } }, { key: "pause", value: function value() {
            this._worker ? this._worker.postMessage({ cmd: "pause" }) : this._controller.pause();
          } }, { key: "resume", value: function value() {
            this._worker ? this._worker.postMessage({ cmd: "resume" }) : this._controller.resume();
          } }, { key: "_onInitSegment", value: function value(e, t) {
            var n = this;Promise.resolve().then(function () {
              n._emitter.emit(m.default.INIT_SEGMENT, e, t);
            });
          } }, { key: "_onMediaSegment", value: function value(e, t) {
            var n = this;Promise.resolve().then(function () {
              n._emitter.emit(m.default.MEDIA_SEGMENT, e, t);
            });
          } }, { key: "_onLoadingComplete", value: function value() {
            var e = this;Promise.resolve().then(function () {
              e._emitter.emit(m.default.LOADING_COMPLETE);
            });
          } }, { key: "_onRecoveredEarlyEof", value: function value() {
            var e = this;Promise.resolve().then(function () {
              e._emitter.emit(m.default.RECOVERED_EARLY_EOF);
            });
          } }, { key: "_onMediaInfo", value: function value(e) {
            var t = this;Promise.resolve().then(function () {
              t._emitter.emit(m.default.MEDIA_INFO, e);
            });
          } }, { key: "_onMetaDataArrived", value: function value(e) {
            var t = this;Promise.resolve().then(function () {
              t._emitter.emit(m.default.METADATA_ARRIVED, e);
            });
          } }, { key: "_onScriptDataArrived", value: function value(e) {
            var t = this;Promise.resolve().then(function () {
              t._emitter.emit(m.default.SCRIPTDATA_ARRIVED, e);
            });
          } }, { key: "_onStatisticsInfo", value: function value(e) {
            var t = this;Promise.resolve().then(function () {
              t._emitter.emit(m.default.STATISTICS_INFO, e);
            });
          } }, { key: "_onIOError", value: function value(e, t) {
            var n = this;Promise.resolve().then(function () {
              n._emitter.emit(m.default.IO_ERROR, e, t);
            });
          } }, { key: "_onDemuxError", value: function value(e, t) {
            var n = this;Promise.resolve().then(function () {
              n._emitter.emit(m.default.DEMUX_ERROR, e, t);
            });
          } }, { key: "_onRecommendSeekpoint", value: function value(e) {
            var t = this;Promise.resolve().then(function () {
              t._emitter.emit(m.default.RECOMMEND_SEEKPOINT, e);
            });
          } }, { key: "_onLoggingConfigChanged", value: function value(e) {
            this._worker && this._worker.postMessage({ cmd: "logging_config", param: e });
          } }, { key: "_onWorkerMessage", value: function value(e) {
            var t = e.data,
                n = t.data;if ("destroyed" === t.msg || this._workerDestroying) return this._workerDestroying = !1, this._worker.terminate(), void (this._worker = null);switch (t.msg) {case m.default.INIT_SEGMENT:case m.default.MEDIA_SEGMENT:
                this._emitter.emit(t.msg, n.type, n.data);break;case m.default.LOADING_COMPLETE:case m.default.RECOVERED_EARLY_EOF:
                this._emitter.emit(t.msg);break;case m.default.MEDIA_INFO:
                Object.setPrototypeOf(n, y.default.prototype), this._emitter.emit(t.msg, n);break;case m.default.METADATA_ARRIVED:case m.default.SCRIPTDATA_ARRIVED:case m.default.STATISTICS_INFO:
                this._emitter.emit(t.msg, n);break;case m.default.IO_ERROR:case m.default.DEMUX_ERROR:
                this._emitter.emit(t.msg, n.type, n.info);break;case m.default.RECOMMEND_SEEKPOINT:
                this._emitter.emit(t.msg, n);break;case "logcat_callback":
                l.default.emitter.emit("log", n.type, n.logcat);}
          } }]), t;
      }();n.default = E;
    }, { "../utils/logger.js": 41, "../utils/logging-control.js": 42, "./media-info.js": 7, "./transmuxing-controller.js": 12, "./transmuxing-events.js": 13, "./transmuxing-worker.js": 14, events: 2, webworkify: 4 }], 12: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          a = e("events"),
          o = i(a),
          u = e("../utils/logger.js"),
          l = i(u),
          d = e("../utils/browser.js"),
          h = i(d),
          f = e("./media-info.js"),
          c = i(f),
          _ = e("../demux/flv-demuxer.js"),
          m = i(_),
          p = e("../remux/mp4-remuxer.js"),
          v = i(p),
          g = e("../demux/demux-errors.js"),
          y = i(g),
          E = e("../io/io-controller.js"),
          b = i(E),
          S = e("./transmuxing-events.js"),
          k = i(S),
          L = (e("../io/loader.js"), function () {
        function e(t, n) {
          r(this, e), this.TAG = "TransmuxingController", this._emitter = new o.default(), this._config = n, t.segments || (t.segments = [{ duration: t.duration, filesize: t.filesize, url: t.url }]), "boolean" != typeof t.cors && (t.cors = !0), "boolean" != typeof t.withCredentials && (t.withCredentials = !1), this._mediaDataSource = t, this._currentSegmentIndex = 0;var i = 0;this._mediaDataSource.segments.forEach(function (e) {
            e.timestampBase = i, i += e.duration, e.cors = t.cors, e.withCredentials = t.withCredentials, n.referrerPolicy && (e.referrerPolicy = n.referrerPolicy);
          }), isNaN(i) || this._mediaDataSource.duration === i || (this._mediaDataSource.duration = i), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null;
        }return s(e, [{ key: "destroy", value: function value() {
            this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl && (this._ioctl.destroy(), this._ioctl = null), this._demuxer && (this._demuxer.destroy(), this._demuxer = null), this._remuxer && (this._remuxer.destroy(), this._remuxer = null), this._emitter.removeAllListeners(), this._emitter = null;
          } }, { key: "on", value: function value(e, t) {
            this._emitter.addListener(e, t);
          } }, { key: "off", value: function value(e, t) {
            this._emitter.removeListener(e, t);
          } }, { key: "start", value: function value() {
            this._loadSegment(0), this._enableStatisticsReporter();
          } }, { key: "_loadSegment", value: function value(e, t) {
            this._currentSegmentIndex = e;var n = this._mediaDataSource.segments[e],
                i = this._ioctl = new b.default(n, this._config, e);i.onError = this._onIOException.bind(this), i.onSeeked = this._onIOSeeked.bind(this), i.onComplete = this._onIOComplete.bind(this), i.onRedirect = this._onIORedirect.bind(this), i.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), t ? this._demuxer.bindDataSource(this._ioctl) : i.onDataArrival = this._onInitChunkArrival.bind(this), i.open(t);
          } }, { key: "stop", value: function value() {
            this._internalAbort(), this._disableStatisticsReporter();
          } }, { key: "_internalAbort", value: function value() {
            this._ioctl && (this._ioctl.destroy(), this._ioctl = null);
          } }, { key: "pause", value: function value() {
            this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter());
          } }, { key: "resume", value: function value() {
            this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter());
          } }, { key: "seek", value: function value(e) {
            if (null != this._mediaInfo && this._mediaInfo.isSeekable()) {
              var t = this._searchSegmentIndexContains(e);if (t === this._currentSegmentIndex) {
                var n = this._mediaInfo.segments[t];if (void 0 == n) this._pendingSeekTime = e;else {
                  var i = n.getNearestKeyframe(e);this._remuxer.seek(i.milliseconds), this._ioctl.seek(i.fileposition), this._pendingResolveSeekPoint = i.milliseconds;
                }
              } else {
                var r = this._mediaInfo.segments[t];if (void 0 == r) this._pendingSeekTime = e, this._internalAbort(), this._remuxer.seek(), this._remuxer.insertDiscontinuity(), this._loadSegment(t);else {
                  var s = r.getNearestKeyframe(e);this._internalAbort(), this._remuxer.seek(e), this._remuxer.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this._demuxer.timestampBase = this._mediaDataSource.segments[t].timestampBase, this._loadSegment(t, s.fileposition), this._pendingResolveSeekPoint = s.milliseconds, this._reportSegmentMediaInfo(t);
                }
              }this._enableStatisticsReporter();
            }
          } }, { key: "_searchSegmentIndexContains", value: function value(e) {
            for (var t = this._mediaDataSource.segments, n = t.length - 1, i = 0; i < t.length; i++) {
              if (e < t[i].timestampBase) {
                n = i - 1;break;
              }
            }return n;
          } }, { key: "_onInitChunkArrival", value: function value(e, t) {
            var n = this,
                i = null,
                r = 0;if (t > 0) this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, r = this._demuxer.parseChunks(e, t);else if ((i = m.default.probe(e)).match) {
              this._demuxer = new m.default(i, this._config), this._remuxer || (this._remuxer = new v.default(this._config));var s = this._mediaDataSource;void 0 == s.duration || isNaN(s.duration) || (this._demuxer.overridedDuration = s.duration), "boolean" == typeof s.hasAudio && (this._demuxer.overridedHasAudio = s.hasAudio), "boolean" == typeof s.hasVideo && (this._demuxer.overridedHasVideo = s.hasVideo), this._demuxer.timestampBase = s.segments[this._currentSegmentIndex].timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer.onMetaDataArrived = this._onMetaDataArrived.bind(this), this._demuxer.onScriptDataArrived = this._onScriptDataArrived.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this), r = this._demuxer.parseChunks(e, t);
            } else i = null, l.default.e(this.TAG, "Non-FLV, Unsupported media type!"), Promise.resolve().then(function () {
              n._internalAbort();
            }), this._emitter.emit(k.default.DEMUX_ERROR, y.default.FORMAT_UNSUPPORTED, "Non-FLV, Unsupported media type"), r = 0;return r;
          } }, { key: "_onMediaInfo", value: function value(e) {
            var t = this;null == this._mediaInfo && (this._mediaInfo = Object.assign({}, e), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = this._mediaDataSource.segments.length, Object.setPrototypeOf(this._mediaInfo, c.default.prototype));var n = Object.assign({}, e);Object.setPrototypeOf(n, c.default.prototype), this._mediaInfo.segments[this._currentSegmentIndex] = n, this._reportSegmentMediaInfo(this._currentSegmentIndex), null != this._pendingSeekTime && Promise.resolve().then(function () {
              var e = t._pendingSeekTime;t._pendingSeekTime = null, t.seek(e);
            });
          } }, { key: "_onMetaDataArrived", value: function value(e) {
            this._emitter.emit(k.default.METADATA_ARRIVED, e);
          } }, { key: "_onScriptDataArrived", value: function value(e) {
            this._emitter.emit(k.default.SCRIPTDATA_ARRIVED, e);
          } }, { key: "_onIOSeeked", value: function value() {
            this._remuxer.insertDiscontinuity();
          } }, { key: "_onIOComplete", value: function value(e) {
            var t = e,
                n = t + 1;n < this._mediaDataSource.segments.length ? (this._internalAbort(), this._remuxer.flushStashedSamples(), this._loadSegment(n)) : (this._remuxer.flushStashedSamples(), this._emitter.emit(k.default.LOADING_COMPLETE), this._disableStatisticsReporter());
          } }, { key: "_onIORedirect", value: function value(e) {
            var t = this._ioctl.extraData;this._mediaDataSource.segments[t].redirectedURL = e;
          } }, { key: "_onIORecoveredEarlyEof", value: function value() {
            this._emitter.emit(k.default.RECOVERED_EARLY_EOF);
          } }, { key: "_onIOException", value: function value(e, t) {
            l.default.e(this.TAG, "IOException: type = " + e + ", code = " + t.code + ", msg = " + t.msg), this._emitter.emit(k.default.IO_ERROR, e, t), this._disableStatisticsReporter();
          } }, { key: "_onDemuxException", value: function value(e, t) {
            l.default.e(this.TAG, "DemuxException: type = " + e + ", info = " + t), this._emitter.emit(k.default.DEMUX_ERROR, e, t);
          } }, { key: "_onRemuxerInitSegmentArrival", value: function value(e, t) {
            this._emitter.emit(k.default.INIT_SEGMENT, e, t);
          } }, { key: "_onRemuxerMediaSegmentArrival", value: function value(e, t) {
            if (null == this._pendingSeekTime && (this._emitter.emit(k.default.MEDIA_SEGMENT, e, t), null != this._pendingResolveSeekPoint && "video" === e)) {
              var n = t.info.syncPoints,
                  i = this._pendingResolveSeekPoint;this._pendingResolveSeekPoint = null, h.default.safari && n.length > 0 && n[0].originalDts === i && (i = n[0].pts), this._emitter.emit(k.default.RECOMMEND_SEEKPOINT, i);
            }
          } }, { key: "_enableStatisticsReporter", value: function value() {
            null == this._statisticsReporter && (this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval));
          } }, { key: "_disableStatisticsReporter", value: function value() {
            this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
          } }, { key: "_reportSegmentMediaInfo", value: function value(e) {
            var t = this._mediaInfo.segments[e],
                n = Object.assign({}, t);n.duration = this._mediaInfo.duration, n.segmentCount = this._mediaInfo.segmentCount, delete n.segments, delete n.keyframesIndex, this._emitter.emit(k.default.MEDIA_INFO, n);
          } }, { key: "_reportStatisticsInfo", value: function value() {
            var e = {};e.url = this._ioctl.currentURL, e.hasRedirect = this._ioctl.hasRedirect, e.hasRedirect && (e.redirectedURL = this._ioctl.currentRedirectedURL), e.speed = this._ioctl.currentSpeed, e.loaderType = this._ioctl.loaderType, e.currentSegmentIndex = this._currentSegmentIndex, e.totalSegmentCount = this._mediaDataSource.segments.length, this._emitter.emit(k.default.STATISTICS_INFO, e);
          } }]), e;
      }());n.default = L;
    }, { "../demux/demux-errors.js": 16, "../demux/flv-demuxer.js": 18, "../io/io-controller.js": 23, "../io/loader.js": 24, "../remux/mp4-remuxer.js": 38, "../utils/browser.js": 39, "../utils/logger.js": 41, "./media-info.js": 7, "./transmuxing-events.js": 13, events: 2 }], 13: [function (e, t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });var i = { IO_ERROR: "io_error", DEMUX_ERROR: "demux_error", INIT_SEGMENT: "init_segment", MEDIA_SEGMENT: "media_segment", LOADING_COMPLETE: "loading_complete", RECOVERED_EARLY_EOF: "recovered_early_eof", MEDIA_INFO: "media_info", METADATA_ARRIVED: "metadata_arrived", SCRIPTDATA_ARRIVED: "scriptdata_arrived", STATISTICS_INFO: "statistics_info", RECOMMEND_SEEKPOINT: "recommend_seekpoint" };n.default = i;
    }, {}], 14: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = e("../utils/logger.js"),
          s = (i(r), e("../utils/logging-control.js")),
          a = i(s),
          o = e("../utils/polyfill.js"),
          u = i(o),
          l = e("./transmuxing-controller.js"),
          d = i(l),
          h = e("./transmuxing-events.js"),
          f = i(h),
          c = function c(e) {
        function t(t, n) {
          var i = { msg: f.default.INIT_SEGMENT, data: { type: t, data: n } };e.postMessage(i, [n.data]);
        }function n(t, n) {
          var i = { msg: f.default.MEDIA_SEGMENT, data: { type: t, data: n } };e.postMessage(i, [n.data]);
        }function i() {
          var t = { msg: f.default.LOADING_COMPLETE };e.postMessage(t);
        }function r() {
          var t = { msg: f.default.RECOVERED_EARLY_EOF };e.postMessage(t);
        }function s(t) {
          var n = { msg: f.default.MEDIA_INFO, data: t };e.postMessage(n);
        }function o(t) {
          var n = { msg: f.default.METADATA_ARRIVED, data: t };e.postMessage(n);
        }function l(t) {
          var n = { msg: f.default.SCRIPTDATA_ARRIVED, data: t };e.postMessage(n);
        }function h(t) {
          var n = { msg: f.default.STATISTICS_INFO, data: t };e.postMessage(n);
        }function c(t, n) {
          e.postMessage({ msg: f.default.IO_ERROR, data: { type: t, info: n } });
        }function _(t, n) {
          e.postMessage({ msg: f.default.DEMUX_ERROR, data: { type: t, info: n } });
        }function m(t) {
          e.postMessage({ msg: f.default.RECOMMEND_SEEKPOINT, data: t });
        }function p(t, n) {
          e.postMessage({ msg: "logcat_callback", data: { type: t, logcat: n } });
        }var v = null,
            g = p.bind(this);u.default.install(), e.addEventListener("message", function (u) {
          switch (u.data.cmd) {case "init":
              v = new d.default(u.data.param[0], u.data.param[1]), v.on(f.default.IO_ERROR, c.bind(this)), v.on(f.default.DEMUX_ERROR, _.bind(this)), v.on(f.default.INIT_SEGMENT, t.bind(this)), v.on(f.default.MEDIA_SEGMENT, n.bind(this)), v.on(f.default.LOADING_COMPLETE, i.bind(this)), v.on(f.default.RECOVERED_EARLY_EOF, r.bind(this)), v.on(f.default.MEDIA_INFO, s.bind(this)), v.on(f.default.METADATA_ARRIVED, o.bind(this)), v.on(f.default.SCRIPTDATA_ARRIVED, l.bind(this)), v.on(f.default.STATISTICS_INFO, h.bind(this)), v.on(f.default.RECOMMEND_SEEKPOINT, m.bind(this));break;case "destroy":
              v && (v.destroy(), v = null), e.postMessage({ msg: "destroyed" });break;case "start":
              v.start();break;case "stop":
              v.stop();break;case "seek":
              v.seek(u.data.param);break;case "pause":
              v.pause();break;case "resume":
              v.resume();break;case "logging_config":
              var p = u.data.param;a.default.applyConfig(p), !0 === p.enableCallback ? a.default.addLogListener(g) : a.default.removeLogListener(g);}
        });
      };n.default = c;
    }, { "../utils/logger.js": 41, "../utils/logging-control.js": 42, "../utils/polyfill.js": 43, "./transmuxing-controller.js": 12, "./transmuxing-events.js": 13 }], 15: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          a = e("../utils/logger.js"),
          o = i(a),
          u = e("../utils/utf8-conv.js"),
          l = i(u),
          d = e("../utils/exception.js"),
          h = function () {
        var e = new ArrayBuffer(2);return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0];
      }(),
          f = function () {
        function e() {
          r(this, e);
        }return s(e, null, [{ key: "parseScriptData", value: function value(t, n, i) {
            var r = {};try {
              var s = e.parseValue(t, n, i),
                  a = e.parseValue(t, n + s.size, i - s.size);r[s.data] = a.data;
            } catch (e) {
              o.default.e("AMF", e.toString());
            }return r;
          } }, { key: "parseObject", value: function value(t, n, i) {
            if (i < 3) throw new d.IllegalStateException("Data not enough when parse ScriptDataObject");var r = e.parseString(t, n, i),
                s = e.parseValue(t, n + r.size, i - r.size),
                a = s.objectEnd;return { data: { name: r.data, value: s.data }, size: r.size + s.size, objectEnd: a };
          } }, { key: "parseVariable", value: function value(t, n, i) {
            return e.parseObject(t, n, i);
          } }, { key: "parseString", value: function value(e, t, n) {
            if (n < 2) throw new d.IllegalStateException("Data not enough when parse String");var i = new DataView(e, t, n),
                r = i.getUint16(0, !h),
                s = void 0;return s = r > 0 ? (0, l.default)(new Uint8Array(e, t + 2, r)) : "", { data: s, size: 2 + r };
          } }, { key: "parseLongString", value: function value(e, t, n) {
            if (n < 4) throw new d.IllegalStateException("Data not enough when parse LongString");var i = new DataView(e, t, n),
                r = i.getUint32(0, !h),
                s = void 0;return s = r > 0 ? (0, l.default)(new Uint8Array(e, t + 4, r)) : "", { data: s, size: 4 + r };
          } }, { key: "parseDate", value: function value(e, t, n) {
            if (n < 10) throw new d.IllegalStateException("Data size invalid when parse Date");var i = new DataView(e, t, n),
                r = i.getFloat64(0, !h);return r += 60 * i.getInt16(8, !h) * 1e3, { data: new Date(r), size: 10 };
          } }, { key: "parseValue", value: function value(t, n, i) {
            if (i < 1) throw new d.IllegalStateException("Data not enough when parse Value");var r = new DataView(t, n, i),
                s = 1,
                a = r.getUint8(0),
                u = void 0,
                l = !1;try {
              switch (a) {case 0:
                  u = r.getFloat64(1, !h), s += 8;break;case 1:
                  u = !!r.getUint8(1), s += 1;break;case 2:
                  var f = e.parseString(t, n + 1, i - 1);u = f.data, s += f.size;break;case 3:
                  u = {};var c = 0;for (9 == (16777215 & r.getUint32(i - 4, !h)) && (c = 3); s < i - 4;) {
                    var _ = e.parseObject(t, n + s, i - s - c);if (_.objectEnd) break;u[_.data.name] = _.data.value, s += _.size;
                  }if (s <= i - 3) {
                    9 === (16777215 & r.getUint32(s - 1, !h)) && (s += 3);
                  }break;case 8:
                  u = {}, s += 4;var m = 0;for (9 == (16777215 & r.getUint32(i - 4, !h)) && (m = 3); s < i - 8;) {
                    var p = e.parseVariable(t, n + s, i - s - m);if (p.objectEnd) break;u[p.data.name] = p.data.value, s += p.size;
                  }if (s <= i - 3) {
                    9 === (16777215 & r.getUint32(s - 1, !h)) && (s += 3);
                  }break;case 9:
                  u = void 0, s = 1, l = !0;break;case 10:
                  u = [];var v = r.getUint32(1, !h);s += 4;for (var g = 0; g < v; g++) {
                    var y = e.parseValue(t, n + s, i - s);u.push(y.data), s += y.size;
                  }break;case 11:
                  var E = e.parseDate(t, n + 1, i - 1);u = E.data, s += E.size;break;case 12:
                  var b = e.parseString(t, n + 1, i - 1);u = b.data, s += b.size;break;default:
                  s = i, o.default.w("AMF", "Unsupported AMF value type " + a);}
            } catch (e) {
              o.default.e("AMF", e.toString());
            }return { data: u, size: s, objectEnd: l };
          } }]), e;
      }();n.default = f;
    }, { "../utils/exception.js": 40, "../utils/logger.js": 41, "../utils/utf8-conv.js": 44 }], 16: [function (e, t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });var i = { OK: "OK", FORMAT_ERROR: "FormatError", FORMAT_UNSUPPORTED: "FormatUnsupported", CODEC_UNSUPPORTED: "CodecUnsupported" };n.default = i;
    }, {}], 17: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = e("../utils/exception.js"),
          a = function () {
        function e(t) {
          i(this, e), this.TAG = "ExpGolomb", this._buffer = t, this._buffer_index = 0, this._total_bytes = t.byteLength, this._total_bits = 8 * t.byteLength, this._current_word = 0, this._current_word_bits_left = 0;
        }return r(e, [{ key: "destroy", value: function value() {
            this._buffer = null;
          } }, { key: "_fillCurrentWord", value: function value() {
            var e = this._total_bytes - this._buffer_index;if (e <= 0) throw new s.IllegalStateException("ExpGolomb: _fillCurrentWord() but no bytes available");var t = Math.min(4, e),
                n = new Uint8Array(4);n.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)), this._current_word = new DataView(n.buffer).getUint32(0, !1), this._buffer_index += t, this._current_word_bits_left = 8 * t;
          } }, { key: "readBits", value: function value(e) {
            if (e > 32) throw new s.InvalidArgumentException("ExpGolomb: readBits() bits exceeded max 32bits!");if (e <= this._current_word_bits_left) {
              var t = this._current_word >>> 32 - e;return this._current_word <<= e, this._current_word_bits_left -= e, t;
            }var n = this._current_word_bits_left ? this._current_word : 0;n >>>= 32 - this._current_word_bits_left;var i = e - this._current_word_bits_left;this._fillCurrentWord();var r = Math.min(i, this._current_word_bits_left),
                a = this._current_word >>> 32 - r;return this._current_word <<= r, this._current_word_bits_left -= r, n = n << r | a;
          } }, { key: "readBool", value: function value() {
            return 1 === this.readBits(1);
          } }, { key: "readByte", value: function value() {
            return this.readBits(8);
          } }, { key: "_skipLeadingZero", value: function value() {
            var e = void 0;for (e = 0; e < this._current_word_bits_left; e++) {
              if (0 != (this._current_word & 2147483648 >>> e)) return this._current_word <<= e, this._current_word_bits_left -= e, e;
            }return this._fillCurrentWord(), e + this._skipLeadingZero();
          } }, { key: "readUEG", value: function value() {
            var e = this._skipLeadingZero();return this.readBits(e + 1) - 1;
          } }, { key: "readSEG", value: function value() {
            var e = this.readUEG();return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1);
          } }]), e;
      }();n.default = a;
    }, { "../utils/exception.js": 40 }], 18: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function s(e, t) {
        return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
      }Object.defineProperty(n, "__esModule", { value: !0 });var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          u = e("../utils/logger.js"),
          l = i(u),
          d = e("./amf-parser.js"),
          h = i(d),
          f = e("./sps-parser.js"),
          c = i(f),
          _ = e("./demux-errors.js"),
          m = i(_),
          p = e("../core/media-info.js"),
          v = i(p),
          g = e("../utils/exception.js"),
          y = function () {
        function e(t, n) {
          r(this, e), this.TAG = "FLVDemuxer", this._config = n, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = t.dataOffset, this._firstParse = !0, this._dispatch = !1, this._hasAudio = t.hasAudioTrack, this._hasVideo = t.hasVideoTrack, this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this._mediaInfo = new v.default(), this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this._referenceFrameRate = { fixed: !0, fps: 23.976, fps_num: 23976, fps_den: 1e3 }, this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3], this._mpegSamplingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0], this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0], this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0], this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], this._videoTrack = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 }, this._audioTrack = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 }, this._littleEndian = function () {
            var e = new ArrayBuffer(2);return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0];
          }();
        }return o(e, [{ key: "destroy", value: function value() {
            this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null;
          } }, { key: "bindDataSource", value: function value(e) {
            return e.onDataArrival = this.parseChunks.bind(this), this;
          } }, { key: "resetMediaInfo", value: function value() {
            this._mediaInfo = new v.default();
          } }, { key: "_isInitialMetadataDispatched", value: function value() {
            return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !(this._hasAudio || !this._hasVideo) && this._videoInitialMetadataDispatched;
          } }, { key: "parseChunks", value: function value(t, n) {
            if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this._onDataAvailable)) throw new g.IllegalStateException("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");var i = 0,
                r = this._littleEndian;if (0 === n) {
              if (!(t.byteLength > 13)) return 0;i = e.probe(t).dataOffset;
            }if (this._firstParse) {
              this._firstParse = !1, n + i !== this._dataOffset && l.default.w(this.TAG, "First time parsing but chunk byteStart invalid!");0 !== new DataView(t, i).getUint32(0, !r) && l.default.w(this.TAG, "PrevTagSize0 !== 0 !!!"), i += 4;
            }for (; i < t.byteLength;) {
              this._dispatch = !0;var s = new DataView(t, i);if (i + 11 + 4 > t.byteLength) break;var a = s.getUint8(0),
                  o = 16777215 & s.getUint32(0, !r);if (i + 11 + o + 4 > t.byteLength) break;if (8 === a || 9 === a || 18 === a) {
                var u = s.getUint8(4),
                    d = s.getUint8(5),
                    h = s.getUint8(6),
                    f = s.getUint8(7),
                    c = h | d << 8 | u << 16 | f << 24;0 !== (16777215 & s.getUint32(7, !r)) && l.default.w(this.TAG, "Meet tag which has StreamID != 0!");var _ = i + 11;switch (a) {case 8:
                    this._parseAudioData(t, _, o, c);break;case 9:
                    this._parseVideoData(t, _, o, c, n + i);break;case 18:
                    this._parseScriptData(t, _, o);}var m = s.getUint32(11 + o, !r);m !== 11 + o && l.default.w(this.TAG, "Invalid PrevTagSize " + m), i += 11 + o + 4;
              } else l.default.w(this.TAG, "Unsupported tag type " + a + ", skipped"), i += 11 + o + 4;
            }return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack), i;
          } }, { key: "_parseScriptData", value: function value(e, t, n) {
            var i = h.default.parseScriptData(e, t, n);if (i.hasOwnProperty("onMetaData")) {
              if (null == i.onMetaData || "object" !== a(i.onMetaData)) return void l.default.w(this.TAG, "Invalid onMetaData structure!");this._metadata && l.default.w(this.TAG, "Found another onMetaData tag!"), this._metadata = i;var r = this._metadata.onMetaData;if (this._onMetaDataArrived && this._onMetaDataArrived(Object.assign({}, r)), "boolean" == typeof r.hasAudio && !1 === this._hasAudioFlagOverrided && (this._hasAudio = r.hasAudio, this._mediaInfo.hasAudio = this._hasAudio), "boolean" == typeof r.hasVideo && !1 === this._hasVideoFlagOverrided && (this._hasVideo = r.hasVideo, this._mediaInfo.hasVideo = this._hasVideo), "number" == typeof r.audiodatarate && (this._mediaInfo.audioDataRate = r.audiodatarate), "number" == typeof r.videodatarate && (this._mediaInfo.videoDataRate = r.videodatarate), "number" == typeof r.width && (this._mediaInfo.width = r.width), "number" == typeof r.height && (this._mediaInfo.height = r.height), "number" == typeof r.duration) {
                if (!this._durationOverrided) {
                  var s = Math.floor(r.duration * this._timescale);this._duration = s, this._mediaInfo.duration = s;
                }
              } else this._mediaInfo.duration = 0;if ("number" == typeof r.framerate) {
                var o = Math.floor(1e3 * r.framerate);if (o > 0) {
                  var u = o / 1e3;this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = u, this._referenceFrameRate.fps_num = o, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo.fps = u;
                }
              }if ("object" === a(r.keyframes)) {
                this._mediaInfo.hasKeyframesIndex = !0;var d = r.keyframes;this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(d), r.keyframes = null;
              } else this._mediaInfo.hasKeyframesIndex = !1;this._dispatch = !1, this._mediaInfo.metadata = r, l.default.v(this.TAG, "Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo);
            }Object.keys(i).length > 0 && this._onScriptDataArrived && this._onScriptDataArrived(Object.assign({}, i));
          } }, { key: "_parseKeyframesIndex", value: function value(e) {
            for (var t = [], n = [], i = 1; i < e.times.length; i++) {
              var r = this._timestampBase + Math.floor(1e3 * e.times[i]);t.push(r), n.push(e.filepositions[i]);
            }return { times: t, filepositions: n };
          } }, { key: "_parseAudioData", value: function value(e, t, n, i) {
            if (n <= 1) return void l.default.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");if (!0 !== this._hasAudioFlagOverrided || !1 !== this._hasAudio) {
              var r = (this._littleEndian, new DataView(e, t, n)),
                  s = r.getUint8(0),
                  a = s >>> 4;if (2 !== a && 10 !== a) return void this._onError(m.default.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + a);var o = 0,
                  u = (12 & s) >>> 2;if (!(u >= 0 && u <= 4)) return void this._onError(m.default.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + u);o = this._flvSoundRateTable[u];var d = 1 & s,
                  h = this._audioMetadata,
                  f = this._audioTrack;if (h || (!1 === this._hasAudio && !1 === this._hasAudioFlagOverrided && (this._hasAudio = !0, this._mediaInfo.hasAudio = !0), h = this._audioMetadata = {}, h.type = "audio", h.id = f.id, h.timescale = this._timescale, h.duration = this._duration, h.audioSampleRate = o, h.channelCount = 0 === d ? 1 : 2), 10 === a) {
                var c = this._parseAACAudioData(e, t + 1, n - 1);if (void 0 == c) return;if (0 === c.packetType) {
                  h.config && l.default.w(this.TAG, "Found another AudioSpecificConfig!");var _ = c.data;h.audioSampleRate = _.samplingRate, h.channelCount = _.channelCount, h.codec = _.codec, h.originalCodec = _.originalCodec, h.config = _.config, h.refSampleDuration = 1024 / h.audioSampleRate * h.timescale, l.default.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._audioInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("audio", h);var p = this._mediaInfo;p.audioCodec = h.originalCodec, p.audioSampleRate = h.audioSampleRate, p.audioChannelCount = h.channelCount, p.hasVideo ? null != p.videoCodec && (p.mimeType = 'video/x-flv; codecs="' + p.videoCodec + "," + p.audioCodec + '"') : p.mimeType = 'video/x-flv; codecs="' + p.audioCodec + '"', p.isComplete() && this._onMediaInfo(p);
                } else if (1 === c.packetType) {
                  var v = this._timestampBase + i,
                      g = { unit: c.data, length: c.data.byteLength, dts: v, pts: v };f.samples.push(g), f.length += c.data.length;
                } else l.default.e(this.TAG, "Flv: Unsupported AAC data type " + c.packetType);
              } else if (2 === a) {
                if (!h.codec) {
                  var y = this._parseMP3AudioData(e, t + 1, n - 1, !0);if (void 0 == y) return;h.audioSampleRate = y.samplingRate, h.channelCount = y.channelCount, h.codec = y.codec, h.originalCodec = y.originalCodec, h.refSampleDuration = 1152 / h.audioSampleRate * h.timescale, l.default.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = !0, this._onTrackMetadata("audio", h);var E = this._mediaInfo;E.audioCodec = h.codec, E.audioSampleRate = h.audioSampleRate, E.audioChannelCount = h.channelCount, E.audioDataRate = y.bitRate, E.hasVideo ? null != E.videoCodec && (E.mimeType = 'video/x-flv; codecs="' + E.videoCodec + "," + E.audioCodec + '"') : E.mimeType = 'video/x-flv; codecs="' + E.audioCodec + '"', E.isComplete() && this._onMediaInfo(E);
                }var b = this._parseMP3AudioData(e, t + 1, n - 1, !1);if (void 0 == b) return;var S = this._timestampBase + i,
                    k = { unit: b, length: b.byteLength, dts: S, pts: S };f.samples.push(k), f.length += b.length;
              }
            }
          } }, { key: "_parseAACAudioData", value: function value(e, t, n) {
            if (n <= 1) return void l.default.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");var i = {},
                r = new Uint8Array(e, t, n);return i.packetType = r[0], 0 === r[0] ? i.data = this._parseAACAudioSpecificConfig(e, t + 1, n - 1) : i.data = r.subarray(1), i;
          } }, { key: "_parseAACAudioSpecificConfig", value: function value(e, t, n) {
            var i = new Uint8Array(e, t, n),
                r = null,
                s = 0,
                a = 0,
                o = 0,
                u = null;if (s = a = i[0] >>> 3, (o = (7 & i[0]) << 1 | i[1] >>> 7) < 0 || o >= this._mpegSamplingRates.length) return void this._onError(m.default.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");var l = this._mpegSamplingRates[o],
                d = (120 & i[1]) >>> 3;if (d < 0 || d >= 8) return void this._onError(m.default.FORMAT_ERROR, "Flv: AAC invalid channel configuration");5 === s && (u = (7 & i[1]) << 1 | i[2] >>> 7, i[2]);var h = self.navigator.userAgent.toLowerCase();return -1 !== h.indexOf("firefox") ? o >= 6 ? (s = 5, r = new Array(4), u = o - 3) : (s = 2, r = new Array(2), u = o) : -1 !== h.indexOf("android") ? (s = 2, r = new Array(2), u = o) : (s = 5, u = o, r = new Array(4), o >= 6 ? u = o - 3 : 1 === d && (s = 2, r = new Array(2), u = o)), r[0] = s << 3, r[0] |= (15 & o) >>> 1, r[1] = (15 & o) << 7, r[1] |= (15 & d) << 3, 5 === s && (r[1] |= (15 & u) >>> 1, r[2] = (1 & u) << 7, r[2] |= 8, r[3] = 0), { config: r, samplingRate: l, channelCount: d, codec: "mp4a.40." + s, originalCodec: "mp4a.40." + a };
          } }, { key: "_parseMP3AudioData", value: function value(e, t, n, i) {
            if (n < 4) return void l.default.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");var r = (this._littleEndian, new Uint8Array(e, t, n)),
                s = null;if (i) {
              if (255 !== r[0]) return;var a = r[1] >>> 3 & 3,
                  o = (6 & r[1]) >> 1,
                  u = (240 & r[2]) >>> 4,
                  d = (12 & r[2]) >>> 2,
                  h = r[3] >>> 6 & 3,
                  f = 3 !== h ? 2 : 1,
                  c = 0,
                  _ = 0;switch (a) {case 0:
                  c = this._mpegAudioV25SampleRateTable[d];break;case 2:
                  c = this._mpegAudioV20SampleRateTable[d];break;case 3:
                  c = this._mpegAudioV10SampleRateTable[d];}switch (o) {case 1:
                  34, u < this._mpegAudioL3BitRateTable.length && (_ = this._mpegAudioL3BitRateTable[u]);break;case 2:
                  33, u < this._mpegAudioL2BitRateTable.length && (_ = this._mpegAudioL2BitRateTable[u]);break;case 3:
                  32, u < this._mpegAudioL1BitRateTable.length && (_ = this._mpegAudioL1BitRateTable[u]);}s = { bitRate: _, samplingRate: c, channelCount: f, codec: "mp3", originalCodec: "mp3" };
            } else s = r;return s;
          } }, { key: "_parseVideoData", value: function value(e, t, n, i, r) {
            if (n <= 1) return void l.default.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");if (!0 !== this._hasVideoFlagOverrided || !1 !== this._hasVideo) {
              var s = new Uint8Array(e, t, n)[0],
                  a = (240 & s) >>> 4,
                  o = 15 & s;if (7 !== o) return void this._onError(m.default.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + o);this._parseAVCVideoPacket(e, t + 1, n - 1, i, r, a);
            }
          } }, { key: "_parseAVCVideoPacket", value: function value(e, t, n, i, r, s) {
            if (n < 4) return void l.default.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");var a = this._littleEndian,
                o = new DataView(e, t, n),
                u = o.getUint8(0),
                d = 16777215 & o.getUint32(0, !a),
                h = d << 8 >> 8;if (0 === u) this._parseAVCDecoderConfigurationRecord(e, t + 4, n - 4);else if (1 === u) this._parseAVCVideoData(e, t + 4, n - 4, i, r, s, h);else if (2 !== u) return void this._onError(m.default.FORMAT_ERROR, "Flv: Invalid video packet type " + u);
          } }, { key: "_parseAVCDecoderConfigurationRecord", value: function value(e, t, n) {
            if (n < 7) return void l.default.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");var i = this._videoMetadata,
                r = this._videoTrack,
                s = this._littleEndian,
                a = new DataView(e, t, n);i ? void 0 !== i.avcc && l.default.w(this.TAG, "Found another AVCDecoderConfigurationRecord!") : (!1 === this._hasVideo && !1 === this._hasVideoFlagOverrided && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), i = this._videoMetadata = {}, i.type = "video", i.id = r.id, i.timescale = this._timescale, i.duration = this._duration);var o = a.getUint8(0),
                u = a.getUint8(1);a.getUint8(2), a.getUint8(3);if (1 !== o || 0 === u) return void this._onError(m.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord");if (this._naluLengthSize = 1 + (3 & a.getUint8(4)), 3 !== this._naluLengthSize && 4 !== this._naluLengthSize) return void this._onError(m.default.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));var d = 31 & a.getUint8(5);if (0 === d) return void this._onError(m.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS");d > 1 && l.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + d);for (var h = 6, f = 0; f < d; f++) {
              var _ = a.getUint16(h, !s);if (h += 2, 0 !== _) {
                var p = new Uint8Array(e, t + h, _);h += _;var v = c.default.parseSPS(p);if (0 === f) {
                  i.codecWidth = v.codec_size.width, i.codecHeight = v.codec_size.height, i.presentWidth = v.present_size.width, i.presentHeight = v.present_size.height, i.profile = v.profile_string, i.level = v.level_string, i.bitDepth = v.bit_depth, i.chromaFormat = v.chroma_format, i.sarRatio = v.sar_ratio, i.frameRate = v.frame_rate, !1 !== v.frame_rate.fixed && 0 !== v.frame_rate.fps_num && 0 !== v.frame_rate.fps_den || (i.frameRate = this._referenceFrameRate);var g = i.frameRate.fps_den,
                      y = i.frameRate.fps_num;i.refSampleDuration = i.timescale * (g / y);for (var E = p.subarray(1, 4), b = "avc1.", S = 0; S < 3; S++) {
                    var k = E[S].toString(16);k.length < 2 && (k = "0" + k), b += k;
                  }i.codec = b;var L = this._mediaInfo;L.width = i.codecWidth, L.height = i.codecHeight, L.fps = i.frameRate.fps, L.profile = i.profile, L.level = i.level, L.refFrames = v.ref_frames, L.chromaFormat = v.chroma_format_string, L.sarNum = i.sarRatio.width, L.sarDen = i.sarRatio.height, L.videoCodec = b, L.hasAudio ? null != L.audioCodec && (L.mimeType = 'video/x-flv; codecs="' + L.videoCodec + "," + L.audioCodec + '"') : L.mimeType = 'video/x-flv; codecs="' + L.videoCodec + '"', L.isComplete() && this._onMediaInfo(L);
                }
              }
            }var R = a.getUint8(h);if (0 === R) return void this._onError(m.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS");R > 1 && l.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + R), h++;for (var A = 0; A < R; A++) {
              var w = a.getUint16(h, !s);h += 2, 0 !== w && (h += w);
            }i.avcc = new Uint8Array(n), i.avcc.set(new Uint8Array(e, t, n), 0), l.default.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", i);
          } }, { key: "_parseAVCVideoData", value: function value(e, t, n, i, r, s, a) {
            for (var o = this._littleEndian, u = new DataView(e, t, n), d = [], h = 0, f = 0, c = this._naluLengthSize, _ = this._timestampBase + i, m = 1 === s; f < n;) {
              if (f + 4 >= n) {
                l.default.w(this.TAG, "Malformed Nalu near timestamp " + _ + ", offset = " + f + ", dataSize = " + n);break;
              }var p = u.getUint32(f, !o);if (3 === c && (p >>>= 8), p > n - c) return void l.default.w(this.TAG, "Malformed Nalus near timestamp " + _ + ", NaluSize > DataSize!");var v = 31 & u.getUint8(f + c);5 === v && (m = !0);var g = new Uint8Array(e, t + f, c + p),
                  y = { type: v, data: g };d.push(y), h += g.byteLength, f += c + p;
            }if (d.length) {
              var E = this._videoTrack,
                  b = { units: d, length: h, isKeyframe: m, dts: _, cts: a, pts: _ + a };m && (b.fileposition = r), E.samples.push(b), E.length += h;
            }
          } }, { key: "onTrackMetadata", get: function get() {
            return this._onTrackMetadata;
          }, set: function set(e) {
            this._onTrackMetadata = e;
          } }, { key: "onMediaInfo", get: function get() {
            return this._onMediaInfo;
          }, set: function set(e) {
            this._onMediaInfo = e;
          } }, { key: "onMetaDataArrived", get: function get() {
            return this._onMetaDataArrived;
          }, set: function set(e) {
            this._onMetaDataArrived = e;
          } }, { key: "onScriptDataArrived", get: function get() {
            return this._onScriptDataArrived;
          }, set: function set(e) {
            this._onScriptDataArrived = e;
          } }, { key: "onError", get: function get() {
            return this._onError;
          }, set: function set(e) {
            this._onError = e;
          } }, { key: "onDataAvailable", get: function get() {
            return this._onDataAvailable;
          }, set: function set(e) {
            this._onDataAvailable = e;
          } }, { key: "timestampBase", get: function get() {
            return this._timestampBase;
          }, set: function set(e) {
            this._timestampBase = e;
          } }, { key: "overridedDuration", get: function get() {
            return this._duration;
          }, set: function set(e) {
            this._durationOverrided = !0, this._duration = e, this._mediaInfo.duration = e;
          } }, { key: "overridedHasAudio", set: function set(e) {
            this._hasAudioFlagOverrided = !0, this._hasAudio = e, this._mediaInfo.hasAudio = e;
          } }, { key: "overridedHasVideo", set: function set(e) {
            this._hasVideoFlagOverrided = !0, this._hasVideo = e, this._mediaInfo.hasVideo = e;
          } }], [{ key: "probe", value: function value(e) {
            var t = new Uint8Array(e),
                n = { match: !1 };if (70 !== t[0] || 76 !== t[1] || 86 !== t[2] || 1 !== t[3]) return n;var i = (4 & t[4]) >>> 2 != 0,
                r = 0 != (1 & t[4]),
                a = s(t, 5);return a < 9 ? n : { match: !0, consumed: a, dataOffset: a, hasAudioTrack: i, hasVideoTrack: r };
          } }]), e;
      }();n.default = y;
    }, { "../core/media-info.js": 7, "../utils/exception.js": 40, "../utils/logger.js": 41, "./amf-parser.js": 15, "./demux-errors.js": 16, "./sps-parser.js": 19 }], 19: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = e("./exp-golomb.js"),
          a = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(s),
          o = function () {
        function e() {
          i(this, e);
        }return r(e, null, [{ key: "_ebsp2rbsp", value: function value(e) {
            for (var t = e, n = t.byteLength, i = new Uint8Array(n), r = 0, s = 0; s < n; s++) {
              s >= 2 && 3 === t[s] && 0 === t[s - 1] && 0 === t[s - 2] || (i[r] = t[s], r++);
            }return new Uint8Array(i.buffer, 0, r);
          } }, { key: "parseSPS", value: function value(t) {
            var n = e._ebsp2rbsp(t),
                i = new a.default(n);i.readByte();var r = i.readByte();i.readByte();var s = i.readByte();i.readUEG();var o = e.getProfileString(r),
                u = e.getLevelString(s),
                l = 1,
                d = 420,
                h = [0, 420, 422, 444],
                f = 8;if ((100 === r || 110 === r || 122 === r || 244 === r || 44 === r || 83 === r || 86 === r || 118 === r || 128 === r || 138 === r || 144 === r) && (l = i.readUEG(), 3 === l && i.readBits(1), l <= 3 && (d = h[l]), f = i.readUEG() + 8, i.readUEG(), i.readBits(1), i.readBool())) for (var c = 3 !== l ? 8 : 12, _ = 0; _ < c; _++) {
              i.readBool() && (_ < 6 ? e._skipScalingList(i, 16) : e._skipScalingList(i, 64));
            }i.readUEG();var m = i.readUEG();if (0 === m) i.readUEG();else if (1 === m) {
              i.readBits(1), i.readSEG(), i.readSEG();for (var p = i.readUEG(), v = 0; v < p; v++) {
                i.readSEG();
              }
            }var g = i.readUEG();i.readBits(1);var y = i.readUEG(),
                E = i.readUEG(),
                b = i.readBits(1);0 === b && i.readBits(1), i.readBits(1);var S = 0,
                k = 0,
                L = 0,
                R = 0;i.readBool() && (S = i.readUEG(), k = i.readUEG(), L = i.readUEG(), R = i.readUEG());var A = 1,
                w = 1,
                T = 0,
                O = !0,
                C = 0,
                I = 0;if (i.readBool()) {
              if (i.readBool()) {
                var D = i.readByte(),
                    x = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2],
                    M = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];D > 0 && D < 16 ? (A = x[D - 1], w = M[D - 1]) : 255 === D && (A = i.readByte() << 8 | i.readByte(), w = i.readByte() << 8 | i.readByte());
              }if (i.readBool() && i.readBool(), i.readBool() && (i.readBits(4), i.readBool() && i.readBits(24)), i.readBool() && (i.readUEG(), i.readUEG()), i.readBool()) {
                var B = i.readBits(32),
                    j = i.readBits(32);O = i.readBool(), C = j, I = 2 * B, T = C / I;
              }
            }var P = 1;1 === A && 1 === w || (P = A / w);var U = 0,
                N = 0;if (0 === l) U = 1, N = 2 - b;else {
              var F = 3 === l ? 1 : 2,
                  G = 1 === l ? 2 : 1;U = F, N = G * (2 - b);
            }var V = 16 * (y + 1),
                z = 16 * (E + 1) * (2 - b);V -= (S + k) * U, z -= (L + R) * N;var H = Math.ceil(V * P);return i.destroy(), i = null, { profile_string: o, level_string: u, bit_depth: f, ref_frames: g, chroma_format: d, chroma_format_string: e.getChromaFormatString(d), frame_rate: { fixed: O, fps: T, fps_den: I, fps_num: C }, sar_ratio: { width: A, height: w }, codec_size: { width: V, height: z }, present_size: { width: H, height: z } };
          } }, { key: "_skipScalingList", value: function value(e, t) {
            for (var n = 8, i = 8, r = 0, s = 0; s < t; s++) {
              0 !== i && (r = e.readSEG(), i = (n + r + 256) % 256), n = 0 === i ? n : i;
            }
          } }, { key: "getProfileString", value: function value(e) {
            switch (e) {case 66:
                return "Baseline";case 77:
                return "Main";case 88:
                return "Extended";case 100:
                return "High";case 110:
                return "High10";case 122:
                return "High422";case 244:
                return "High444";default:
                return "Unknown";}
          } }, { key: "getLevelString", value: function value(e) {
            return (e / 10).toFixed(1);
          } }, { key: "getChromaFormatString", value: function value(e) {
            switch (e) {case 420:
                return "4:2:0";case 422:
                return "4:2:2";case 444:
                return "4:4:4";default:
                return "Unknown";}
          } }]), e;
      }();n.default = o;
    }, { "./exp-golomb.js": 17 }], 20: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        var n = e;if (null == n || "object" !== (void 0 === n ? "undefined" : o(n))) throw new S.InvalidArgumentException("MediaDataSource must be an javascript object!");if (!n.hasOwnProperty("type")) throw new S.InvalidArgumentException("MediaDataSource must has type field to indicate video file type!");switch (n.type) {case "flv":
            return new _.default(n, t);default:
            return new p.default(n, t);}
      }function s() {
        return h.default.supportMSEH264Playback();
      }function a() {
        return h.default.getFeatureList();
      }Object.defineProperty(n, "__esModule", { value: !0 });var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          u = e("./utils/polyfill.js"),
          l = i(u),
          d = e("./core/features.js"),
          h = i(d),
          f = e("./io/loader.js"),
          c = e("./player/flv-player.js"),
          _ = i(c),
          m = e("./player/native-player.js"),
          p = i(m),
          v = e("./player/player-events.js"),
          g = i(v),
          y = e("./player/player-errors.js"),
          E = e("./utils/logging-control.js"),
          b = i(E),
          S = e("./utils/exception.js");l.default.install();var k = {};k.createPlayer = r, k.isSupported = s, k.getFeatureList = a, k.BaseLoader = f.BaseLoader, k.LoaderStatus = f.LoaderStatus, k.LoaderErrors = f.LoaderErrors, k.Events = g.default, k.ErrorTypes = y.ErrorTypes, k.ErrorDetails = y.ErrorDetails, k.FlvPlayer = _.default, k.NativePlayer = p.default, k.LoggingControl = b.default, Object.defineProperty(k, "version", { enumerable: !0, get: function get() {
          return "1.5.0";
        } }), n.default = k;
    }, { "./core/features.js": 6, "./io/loader.js": 24, "./player/flv-player.js": 32, "./player/native-player.js": 33, "./player/player-errors.js": 34, "./player/player-events.js": 35, "./utils/exception.js": 40, "./utils/logging-control.js": 42, "./utils/polyfill.js": 43 }], 21: [function (e, t, n) {
      "use strict";
      t.exports = e("./flv.js").default;
    }, { "./flv.js": 20 }], 22: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(n, "__esModule", { value: !0 });var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          u = function e(t, n, i) {
        null === t && (t = Function.prototype);var r = Object.getOwnPropertyDescriptor(t, n);if (void 0 === r) {
          var s = Object.getPrototypeOf(t);return null === s ? void 0 : e(s, n, i);
        }if ("value" in r) return r.value;var a = r.get;if (void 0 !== a) return a.call(i);
      },
          l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          d = e("../utils/logger.js"),
          h = (i(d), e("../utils/browser.js")),
          f = i(h),
          c = e("./loader.js"),
          _ = e("../utils/exception.js"),
          m = function (e) {
        function t(e, n) {
          r(this, t);var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "fetch-stream-loader"));return i.TAG = "FetchStreamLoader", i._seekHandler = e, i._config = n, i._needStash = !0, i._requestAbort = !1, i._contentLength = null, i._receivedLength = 0, i;
        }return a(t, e), l(t, null, [{ key: "isSupported", value: function value() {
            try {
              var e = f.default.msedge && f.default.version.minor >= 15048,
                  t = !f.default.msedge || e;return self.fetch && self.ReadableStream && t;
            } catch (e) {
              return !1;
            }
          } }]), l(t, [{ key: "destroy", value: function value() {
            this.isWorking() && this.abort(), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this);
          } }, { key: "open", value: function value(e, t) {
            var n = this;this._dataSource = e, this._range = t;var i = e.url;this._config.reuseRedirectedURL && void 0 != e.redirectedURL && (i = e.redirectedURL);var r = this._seekHandler.getConfig(i, t),
                s = new self.Headers();if ("object" === o(r.headers)) {
              var a = r.headers;for (var u in a) {
                a.hasOwnProperty(u) && s.append(u, a[u]);
              }
            }var l = { method: "GET", headers: s, mode: "cors", cache: "default", referrerPolicy: "no-referrer-when-downgrade" };if ("object" === o(this._config.headers)) for (var d in this._config.headers) {
              s.append(d, this._config.headers[d]);
            }!1 === e.cors && (l.mode = "same-origin"), e.withCredentials && (l.credentials = "include"), e.referrerPolicy && (l.referrerPolicy = e.referrerPolicy), this._status = c.LoaderStatus.kConnecting, self.fetch(r.url, l).then(function (e) {
              if (n._requestAbort) return n._requestAbort = !1, void (n._status = c.LoaderStatus.kIdle);if (e.ok && e.status >= 200 && e.status <= 299) {
                if (e.url !== r.url && n._onURLRedirect) {
                  var t = n._seekHandler.removeURLParameters(e.url);n._onURLRedirect(t);
                }var i = e.headers.get("Content-Length");return null != i && (n._contentLength = parseInt(i), 0 !== n._contentLength && n._onContentLengthKnown && n._onContentLengthKnown(n._contentLength)), n._pump.call(n, e.body.getReader());
              }if (n._status = c.LoaderStatus.kError, !n._onError) throw new _.RuntimeException("FetchStreamLoader: Http code invalid, " + e.status + " " + e.statusText);n._onError(c.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: e.status, msg: e.statusText });
            }).catch(function (e) {
              if (n._status = c.LoaderStatus.kError, !n._onError) throw e;n._onError(c.LoaderErrors.EXCEPTION, { code: -1, msg: e.message });
            });
          } }, { key: "abort", value: function value() {
            this._requestAbort = !0;
          } }, { key: "_pump", value: function value(e) {
            var t = this;return e.read().then(function (n) {
              if (n.done) {
                if (null !== t._contentLength && t._receivedLength < t._contentLength) {
                  t._status = c.LoaderStatus.kError;var i = c.LoaderErrors.EARLY_EOF,
                      r = { code: -1, msg: "Fetch stream meet Early-EOF" };if (!t._onError) throw new _.RuntimeException(r.msg);t._onError(i, r);
                } else t._status = c.LoaderStatus.kComplete, t._onComplete && t._onComplete(t._range.from, t._range.from + t._receivedLength - 1);
              } else {
                if (!0 === t._requestAbort) return t._requestAbort = !1, t._status = c.LoaderStatus.kComplete, e.cancel();t._status = c.LoaderStatus.kBuffering;var s = n.value.buffer,
                    a = t._range.from + t._receivedLength;t._receivedLength += s.byteLength, t._onDataArrival && t._onDataArrival(s, a, t._receivedLength), t._pump(e);
              }
            }).catch(function (e) {
              if (11 !== e.code || !f.default.msedge) {
                t._status = c.LoaderStatus.kError;var n = 0,
                    i = null;if (19 !== e.code && "network error" !== e.message || !(null === t._contentLength || null !== t._contentLength && t._receivedLength < t._contentLength) ? (n = c.LoaderErrors.EXCEPTION, i = { code: e.code, msg: e.message }) : (n = c.LoaderErrors.EARLY_EOF, i = { code: e.code, msg: "Fetch stream meet Early-EOF" }), !t._onError) throw new _.RuntimeException(i.msg);t._onError(n, i);
              }
            });
          } }]), t;
      }(c.BaseLoader);n.default = m;
    }, { "../utils/browser.js": 39, "../utils/exception.js": 40, "../utils/logger.js": 41, "./loader.js": 24 }], 23: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          a = e("../utils/logger.js"),
          o = i(a),
          u = e("./speed-sampler.js"),
          l = i(u),
          d = e("./loader.js"),
          h = e("./fetch-stream-loader.js"),
          f = i(h),
          c = e("./xhr-moz-chunked-loader.js"),
          _ = i(c),
          m = e("./xhr-msstream-loader.js"),
          p = (i(m), e("./xhr-range-loader.js")),
          v = i(p),
          g = e("./websocket-loader.js"),
          y = i(g),
          E = e("./range-seek-handler.js"),
          b = i(E),
          S = e("./param-seek-handler.js"),
          k = i(S),
          L = e("../utils/exception.js"),
          R = function () {
        function e(t, n, i) {
          r(this, e), this.TAG = "IOController", this._config = n, this._extraData = i, this._stashInitialSize = 393216, void 0 != n.stashInitialSize && n.stashInitialSize > 0 && (this._stashInitialSize = n.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 3145728, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, this._enableStash = !0, !1 === n.enableStashBuffer && (this._enableStash = !1), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = t, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(t.url), this._refTotalLength = t.filesize ? t.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new l.default(), this._speedNormalizeList = [64, 128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader();
        }return s(e, [{ key: "destroy", value: function value() {
            this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null;
          } }, { key: "isWorking", value: function value() {
            return this._loader && this._loader.isWorking() && !this._paused;
          } }, { key: "isPaused", value: function value() {
            return this._paused;
          } }, { key: "_selectSeekHandler", value: function value() {
            var e = this._config;if ("range" === e.seekType) this._seekHandler = new b.default(this._config.rangeLoadZeroStart);else if ("param" === e.seekType) {
              var t = e.seekParamStart || "bstart",
                  n = e.seekParamEnd || "bend";this._seekHandler = new k.default(t, n);
            } else {
              if ("custom" !== e.seekType) throw new L.InvalidArgumentException("Invalid seekType in config: " + e.seekType);if ("function" != typeof e.customSeekHandler) throw new L.InvalidArgumentException("Custom seekType specified in config but invalid customSeekHandler!");this._seekHandler = new e.customSeekHandler();
            }
          } }, { key: "_selectLoader", value: function value() {
            if (null != this._config.customLoader) this._loaderClass = this._config.customLoader;else if (this._isWebSocketURL) this._loaderClass = y.default;else if (f.default.isSupported()) this._loaderClass = f.default;else if (_.default.isSupported()) this._loaderClass = _.default;else {
              if (!v.default.isSupported()) throw new L.RuntimeException("Your browser doesn't support xhr with arraybuffer responseType!");this._loaderClass = v.default;
            }
          } }, { key: "_createLoader", value: function value() {
            this._loader = new this._loaderClass(this._seekHandler, this._config), !1 === this._loader.needStashBuffer && (this._enableStash = !1), this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this);
          } }, { key: "open", value: function value(e) {
            this._currentRange = { from: 0, to: -1 }, e && (this._currentRange.from = e), this._speedSampler.reset(), e || (this._fullRequestFlag = !0), this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
          } }, { key: "abort", value: function value() {
            this._loader.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0);
          } }, { key: "pause", value: function value() {
            this.isWorking() && (this._loader.abort(), 0 !== this._stashUsed ? (this._resumeFrom = this._stashByteStart, this._currentRange.to = this._stashByteStart - 1) : this._resumeFrom = this._currentRange.to + 1, this._stashUsed = 0, this._stashByteStart = 0, this._paused = !0);
          } }, { key: "resume", value: function value() {
            if (this._paused) {
              this._paused = !1;var e = this._resumeFrom;this._resumeFrom = 0, this._internalSeek(e, !0);
            }
          } }, { key: "seek", value: function value(e) {
            this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(e, !0);
          } }, { key: "_internalSeek", value: function value(e, t) {
            this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(t), this._loader.destroy(), this._loader = null;var n = { from: e, to: -1 };this._currentRange = { from: n.from, to: -1 }, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, n), this._onSeeked && this._onSeeked();
          } }, { key: "updateUrl", value: function value(e) {
            if (!e || "string" != typeof e || 0 === e.length) throw new L.InvalidArgumentException("Url must be a non-empty string!");this._dataSource.url = e;
          } }, { key: "_expandBuffer", value: function value(e) {
            for (var t = this._stashSize; t + 1048576 < e;) {
              t *= 2;
            }if ((t += 1048576) !== this._bufferSize) {
              var n = new ArrayBuffer(t);if (this._stashUsed > 0) {
                var i = new Uint8Array(this._stashBuffer, 0, this._stashUsed);new Uint8Array(n, 0, t).set(i, 0);
              }this._stashBuffer = n, this._bufferSize = t;
            }
          } }, { key: "_normalizeSpeed", value: function value(e) {
            var t = this._speedNormalizeList,
                n = t.length - 1,
                i = 0,
                r = 0,
                s = n;if (e < t[0]) return t[0];for (; r <= s;) {
              if ((i = r + Math.floor((s - r) / 2)) === n || e >= t[i] && e < t[i + 1]) return t[i];t[i] < e ? r = i + 1 : s = i - 1;
            }
          } }, { key: "_adjustStashSize", value: function value(e) {
            var t = 0;(t = this._config.isLive ? e : e < 512 ? e : e >= 512 && e <= 1024 ? Math.floor(1.5 * e) : 2 * e) > 8192 && (t = 8192);var n = 1024 * t + 1048576;this._bufferSize < n && this._expandBuffer(n), this._stashSize = 1024 * t;
          } }, { key: "_dispatchChunks", value: function value(e, t) {
            return this._currentRange.to = t + e.byteLength - 1, this._onDataArrival(e, t);
          } }, { key: "_onURLRedirect", value: function value(e) {
            this._redirectedURL = e, this._onRedirect && this._onRedirect(e);
          } }, { key: "_onContentLengthKnown", value: function value(e) {
            e && this._fullRequestFlag && (this._totalLength = e, this._fullRequestFlag = !1);
          } }, { key: "_onLoaderChunkArrival", value: function value(e, t, n) {
            if (!this._onDataArrival) throw new L.IllegalStateException("IOController: No existing consumer (onDataArrival) callback!");if (!this._paused) {
              this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler.addBytes(e.byteLength);var i = this._speedSampler.lastSecondKBps;if (0 !== i) {
                var r = this._normalizeSpeed(i);this._speedNormalized !== r && (this._speedNormalized = r, this._adjustStashSize(r));
              }if (this._enableStash) {
                if (0 === this._stashUsed && 0 === this._stashByteStart && (this._stashByteStart = t), this._stashUsed + e.byteLength <= this._stashSize) {
                  var s = new Uint8Array(this._stashBuffer, 0, this._stashSize);s.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
                } else {
                  var a = new Uint8Array(this._stashBuffer, 0, this._bufferSize);if (this._stashUsed > 0) {
                    var o = this._stashBuffer.slice(0, this._stashUsed),
                        u = this._dispatchChunks(o, this._stashByteStart);if (u < o.byteLength) {
                      if (u > 0) {
                        var l = new Uint8Array(o, u);a.set(l, 0), this._stashUsed = l.byteLength, this._stashByteStart += u;
                      }
                    } else this._stashUsed = 0, this._stashByteStart += u;this._stashUsed + e.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + e.byteLength), a = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), a.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
                  } else {
                    var d = this._dispatchChunks(e, t);if (d < e.byteLength) {
                      var h = e.byteLength - d;h > this._bufferSize && (this._expandBuffer(h), a = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), a.set(new Uint8Array(e, d), 0), this._stashUsed += h, this._stashByteStart = t + d;
                    }
                  }
                }
              } else if (0 === this._stashUsed) {
                var f = this._dispatchChunks(e, t);if (f < e.byteLength) {
                  var c = e.byteLength - f;c > this._bufferSize && this._expandBuffer(c);var _ = new Uint8Array(this._stashBuffer, 0, this._bufferSize);_.set(new Uint8Array(e, f), 0), this._stashUsed += c, this._stashByteStart = t + f;
                }
              } else {
                this._stashUsed + e.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + e.byteLength);var m = new Uint8Array(this._stashBuffer, 0, this._bufferSize);m.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;var p = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart);if (p < this._stashUsed && p > 0) {
                  var v = new Uint8Array(this._stashBuffer, p);m.set(v, 0);
                }this._stashUsed -= p, this._stashByteStart += p;
              }
            }
          } }, { key: "_flushStashBuffer", value: function value(e) {
            if (this._stashUsed > 0) {
              var t = this._stashBuffer.slice(0, this._stashUsed),
                  n = this._dispatchChunks(t, this._stashByteStart),
                  i = t.byteLength - n;if (n < t.byteLength) {
                if (!e) {
                  if (n > 0) {
                    var r = new Uint8Array(this._stashBuffer, 0, this._bufferSize),
                        s = new Uint8Array(t, n);r.set(s, 0), this._stashUsed = s.byteLength, this._stashByteStart += n;
                  }return 0;
                }o.default.w(this.TAG, i + " bytes unconsumed data remain when flush buffer, dropped");
              }return this._stashUsed = 0, this._stashByteStart = 0, i;
            }return 0;
          } }, { key: "_onLoaderComplete", value: function value(e, t) {
            this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData);
          } }, { key: "_onLoaderError", value: function value(e, t) {
            switch (o.default.e(this.TAG, "Loader error, code = " + t.code + ", msg = " + t.msg), this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, e = d.LoaderErrors.UNRECOVERABLE_EARLY_EOF), e) {case d.LoaderErrors.EARLY_EOF:
                if (!this._config.isLive && this._totalLength) {
                  var n = this._currentRange.to + 1;return void (n < this._totalLength && (o.default.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = !0, this._internalSeek(n, !1)));
                }e = d.LoaderErrors.UNRECOVERABLE_EARLY_EOF;break;case d.LoaderErrors.UNRECOVERABLE_EARLY_EOF:case d.LoaderErrors.CONNECTING_TIMEOUT:case d.LoaderErrors.HTTP_STATUS_CODE_INVALID:case d.LoaderErrors.EXCEPTION:}if (!this._onError) throw new L.RuntimeException("IOException: " + t.msg);this._onError(e, t);
          } }, { key: "status", get: function get() {
            return this._loader.status;
          } }, { key: "extraData", get: function get() {
            return this._extraData;
          }, set: function set(e) {
            this._extraData = e;
          } }, { key: "onDataArrival", get: function get() {
            return this._onDataArrival;
          }, set: function set(e) {
            this._onDataArrival = e;
          } }, { key: "onSeeked", get: function get() {
            return this._onSeeked;
          }, set: function set(e) {
            this._onSeeked = e;
          } }, { key: "onError", get: function get() {
            return this._onError;
          }, set: function set(e) {
            this._onError = e;
          } }, { key: "onComplete", get: function get() {
            return this._onComplete;
          }, set: function set(e) {
            this._onComplete = e;
          } }, { key: "onRedirect", get: function get() {
            return this._onRedirect;
          }, set: function set(e) {
            this._onRedirect = e;
          } }, { key: "onRecoveredEarlyEof", get: function get() {
            return this._onRecoveredEarlyEof;
          }, set: function set(e) {
            this._onRecoveredEarlyEof = e;
          } }, { key: "currentURL", get: function get() {
            return this._dataSource.url;
          } }, { key: "hasRedirect", get: function get() {
            return null != this._redirectedURL || void 0 != this._dataSource.redirectedURL;
          } }, { key: "currentRedirectedURL", get: function get() {
            return this._redirectedURL || this._dataSource.redirectedURL;
          } }, { key: "currentSpeed", get: function get() {
            return this._loaderClass === v.default ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps;
          } }, { key: "loaderType", get: function get() {
            return this._loader.type;
          } }]), e;
      }();n.default = R;
    }, { "../utils/exception.js": 40, "../utils/logger.js": 41, "./fetch-stream-loader.js": 22, "./loader.js": 24,
      "./param-seek-handler.js": 25, "./range-seek-handler.js": 26, "./speed-sampler.js": 27, "./websocket-loader.js": 28, "./xhr-moz-chunked-loader.js": 29, "./xhr-msstream-loader.js": 30, "./xhr-range-loader.js": 31 }], 24: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.BaseLoader = n.LoaderErrors = n.LoaderStatus = void 0;var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = e("../utils/exception.js"),
          a = n.LoaderStatus = { kIdle: 0, kConnecting: 1, kBuffering: 2, kError: 3, kComplete: 4 };n.LoaderErrors = { OK: "OK", EXCEPTION: "Exception", HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid", CONNECTING_TIMEOUT: "ConnectingTimeout", EARLY_EOF: "EarlyEof", UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof" }, n.BaseLoader = function () {
        function e(t) {
          i(this, e), this._type = t || "undefined", this._status = a.kIdle, this._needStash = !1, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
        }return r(e, [{ key: "destroy", value: function value() {
            this._status = a.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
          } }, { key: "isWorking", value: function value() {
            return this._status === a.kConnecting || this._status === a.kBuffering;
          } }, { key: "open", value: function value(e, t) {
            throw new s.NotImplementedException("Unimplemented abstract function!");
          } }, { key: "abort", value: function value() {
            throw new s.NotImplementedException("Unimplemented abstract function!");
          } }, { key: "type", get: function get() {
            return this._type;
          } }, { key: "status", get: function get() {
            return this._status;
          } }, { key: "needStashBuffer", get: function get() {
            return this._needStash;
          } }, { key: "onContentLengthKnown", get: function get() {
            return this._onContentLengthKnown;
          }, set: function set(e) {
            this._onContentLengthKnown = e;
          } }, { key: "onURLRedirect", get: function get() {
            return this._onURLRedirect;
          }, set: function set(e) {
            this._onURLRedirect = e;
          } }, { key: "onDataArrival", get: function get() {
            return this._onDataArrival;
          }, set: function set(e) {
            this._onDataArrival = e;
          } }, { key: "onError", get: function get() {
            return this._onError;
          }, set: function set(e) {
            this._onError = e;
          } }, { key: "onComplete", get: function get() {
            return this._onComplete;
          }, set: function set(e) {
            this._onComplete = e;
          } }]), e;
      }();
    }, { "../utils/exception.js": 40 }], 25: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = function () {
        function e(t, n) {
          i(this, e), this._startName = t, this._endName = n;
        }return r(e, [{ key: "getConfig", value: function value(e, t) {
            var n = e;if (0 !== t.from || -1 !== t.to) {
              var i = !0;-1 === n.indexOf("?") && (n += "?", i = !1), i && (n += "&"), n += this._startName + "=" + t.from.toString(), -1 !== t.to && (n += "&" + this._endName + "=" + t.to.toString());
            }return { url: n, headers: {} };
          } }, { key: "removeURLParameters", value: function value(e) {
            var t = e.split("?")[0],
                n = void 0,
                i = e.indexOf("?");-1 !== i && (n = e.substring(i + 1));var r = "";if (void 0 != n && n.length > 0) for (var s = n.split("&"), a = 0; a < s.length; a++) {
              var o = s[a].split("="),
                  u = a > 0;o[0] !== this._startName && o[0] !== this._endName && (u && (r += "&"), r += s[a]);
            }return 0 === r.length ? t : t + "?" + r;
          } }]), e;
      }();n.default = s;
    }, {}], 26: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = function () {
        function e(t) {
          i(this, e), this._zeroStart = t || !1;
        }return r(e, [{ key: "getConfig", value: function value(e, t) {
            var n = {};if (0 !== t.from || -1 !== t.to) {
              var i = void 0;i = -1 !== t.to ? "bytes=" + t.from.toString() + "-" + t.to.toString() : "bytes=" + t.from.toString() + "-", n.Range = i;
            } else this._zeroStart && (n.Range = "bytes=0-");return { url: e, headers: n };
          } }, { key: "removeURLParameters", value: function value(e) {
            return e;
          } }]), e;
      }();n.default = s;
    }, {}], 27: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = function () {
        function e() {
          i(this, e), this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now;
        }return r(e, [{ key: "reset", value: function value() {
            this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0;
          } }, { key: "addBytes", value: function value(e) {
            0 === this._firstCheckpoint ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += e, this._totalBytes += e) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += e, this._totalBytes += e) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = e, this._totalBytes += e, this._lastCheckpoint = this._now());
          } }, { key: "currentKBps", get: function get() {
            this.addBytes(0);var e = (this._now() - this._lastCheckpoint) / 1e3;return 0 == e && (e = 1), this._intervalBytes / e / 1024;
          } }, { key: "lastSecondKBps", get: function get() {
            return this.addBytes(0), 0 !== this._lastSecondBytes ? this._lastSecondBytes / 1024 : this._now() - this._lastCheckpoint >= 500 ? this.currentKBps : 0;
          } }, { key: "averageKBps", get: function get() {
            var e = (this._now() - this._firstCheckpoint) / 1e3;return this._totalBytes / e / 1024;
          } }]), e;
      }();n.default = s;
    }, {}], 28: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(n, "__esModule", { value: !0 });var a = function e(t, n, i) {
        null === t && (t = Function.prototype);var r = Object.getOwnPropertyDescriptor(t, n);if (void 0 === r) {
          var s = Object.getPrototypeOf(t);return null === s ? void 0 : e(s, n, i);
        }if ("value" in r) return r.value;var a = r.get;if (void 0 !== a) return a.call(i);
      },
          o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          u = e("../utils/logger.js"),
          l = (function (e) {
        e && e.__esModule;
      }(u), e("./loader.js")),
          d = e("../utils/exception.js"),
          h = function (e) {
        function t() {
          i(this, t);var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "websocket-loader"));return e.TAG = "WebSocketLoader", e._needStash = !0, e._ws = null, e._requestAbort = !1, e._receivedLength = 0, e;
        }return s(t, e), o(t, null, [{ key: "isSupported", value: function value() {
            try {
              return void 0 !== self.WebSocket;
            } catch (e) {
              return !1;
            }
          } }]), o(t, [{ key: "destroy", value: function value() {
            this._ws && this.abort(), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this);
          } }, { key: "open", value: function value(e) {
            try {
              var t = this._ws = new self.WebSocket(e.url);t.binaryType = "arraybuffer", t.onopen = this._onWebSocketOpen.bind(this), t.onclose = this._onWebSocketClose.bind(this), t.onmessage = this._onWebSocketMessage.bind(this), t.onerror = this._onWebSocketError.bind(this), this._status = l.LoaderStatus.kConnecting;
            } catch (e) {
              this._status = l.LoaderStatus.kError;var n = { code: e.code, msg: e.message };if (!this._onError) throw new d.RuntimeException(n.msg);this._onError(l.LoaderErrors.EXCEPTION, n);
            }
          } }, { key: "abort", value: function value() {
            var e = this._ws;!e || 0 !== e.readyState && 1 !== e.readyState || (this._requestAbort = !0, e.close()), this._ws = null, this._status = l.LoaderStatus.kComplete;
          } }, { key: "_onWebSocketOpen", value: function value(e) {
            this._status = l.LoaderStatus.kBuffering;
          } }, { key: "_onWebSocketClose", value: function value(e) {
            if (!0 === this._requestAbort) return void (this._requestAbort = !1);this._status = l.LoaderStatus.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1);
          } }, { key: "_onWebSocketMessage", value: function value(e) {
            var t = this;if (e.data instanceof ArrayBuffer) this._dispatchArrayBuffer(e.data);else if (e.data instanceof Blob) {
              var n = new FileReader();n.onload = function () {
                t._dispatchArrayBuffer(n.result);
              }, n.readAsArrayBuffer(e.data);
            } else {
              this._status = l.LoaderStatus.kError;var i = { code: -1, msg: "Unsupported WebSocket message type: " + e.data.constructor.name };if (!this._onError) throw new d.RuntimeException(i.msg);this._onError(l.LoaderErrors.EXCEPTION, i);
            }
          } }, { key: "_dispatchArrayBuffer", value: function value(e) {
            var t = e,
                n = this._receivedLength;this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, n, this._receivedLength);
          } }, { key: "_onWebSocketError", value: function value(e) {
            this._status = l.LoaderStatus.kError;var t = { code: e.code, msg: e.message };if (!this._onError) throw new d.RuntimeException(t.msg);this._onError(l.LoaderErrors.EXCEPTION, t);
          } }]), t;
      }(l.BaseLoader);n.default = h;
    }, { "../utils/exception.js": 40, "../utils/logger.js": 41, "./loader.js": 24 }], 29: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(n, "__esModule", { value: !0 });var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          o = function e(t, n, i) {
        null === t && (t = Function.prototype);var r = Object.getOwnPropertyDescriptor(t, n);if (void 0 === r) {
          var s = Object.getPrototypeOf(t);return null === s ? void 0 : e(s, n, i);
        }if ("value" in r) return r.value;var a = r.get;if (void 0 !== a) return a.call(i);
      },
          u = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          l = e("../utils/logger.js"),
          d = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(l),
          h = e("./loader.js"),
          f = e("../utils/exception.js"),
          c = function (e) {
        function t(e, n) {
          i(this, t);var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "xhr-moz-chunked-loader"));return s.TAG = "MozChunkedLoader", s._seekHandler = e, s._config = n, s._needStash = !0, s._xhr = null, s._requestAbort = !1, s._contentLength = null, s._receivedLength = 0, s;
        }return s(t, e), u(t, null, [{ key: "isSupported", value: function value() {
            try {
              var e = new XMLHttpRequest();return e.open("GET", "https://example.com", !0), e.responseType = "moz-chunked-arraybuffer", "moz-chunked-arraybuffer" === e.responseType;
            } catch (e) {
              return d.default.w("MozChunkedLoader", e.message), !1;
            }
          } }]), u(t, [{ key: "destroy", value: function value() {
            this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, this._xhr = null), o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this);
          } }, { key: "open", value: function value(e, t) {
            this._dataSource = e, this._range = t;var n = e.url;this._config.reuseRedirectedURL && void 0 != e.redirectedURL && (n = e.redirectedURL);var i = this._seekHandler.getConfig(n, t);this._requestURL = i.url;var r = this._xhr = new XMLHttpRequest();if (r.open("GET", i.url, !0), r.responseType = "moz-chunked-arraybuffer", r.onreadystatechange = this._onReadyStateChange.bind(this), r.onprogress = this._onProgress.bind(this), r.onloadend = this._onLoadEnd.bind(this), r.onerror = this._onXhrError.bind(this), e.withCredentials && (r.withCredentials = !0), "object" === a(i.headers)) {
              var s = i.headers;for (var o in s) {
                s.hasOwnProperty(o) && r.setRequestHeader(o, s[o]);
              }
            }if ("object" === a(this._config.headers)) {
              var u = this._config.headers;for (var l in u) {
                u.hasOwnProperty(l) && r.setRequestHeader(l, u[l]);
              }
            }this._status = h.LoaderStatus.kConnecting, r.send();
          } }, { key: "abort", value: function value() {
            this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = h.LoaderStatus.kComplete;
          } }, { key: "_onReadyStateChange", value: function value(e) {
            var t = e.target;if (2 === t.readyState) {
              if (void 0 != t.responseURL && t.responseURL !== this._requestURL && this._onURLRedirect) {
                var n = this._seekHandler.removeURLParameters(t.responseURL);this._onURLRedirect(n);
              }if (0 !== t.status && (t.status < 200 || t.status > 299)) {
                if (this._status = h.LoaderStatus.kError, !this._onError) throw new f.RuntimeException("MozChunkedLoader: Http code invalid, " + t.status + " " + t.statusText);this._onError(h.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: t.status, msg: t.statusText });
              } else this._status = h.LoaderStatus.kBuffering;
            }
          } }, { key: "_onProgress", value: function value(e) {
            if (this._status !== h.LoaderStatus.kError) {
              null === this._contentLength && null !== e.total && 0 !== e.total && (this._contentLength = e.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));var t = e.target.response,
                  n = this._range.from + this._receivedLength;this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, n, this._receivedLength);
            }
          } }, { key: "_onLoadEnd", value: function value(e) {
            if (!0 === this._requestAbort) return void (this._requestAbort = !1);this._status !== h.LoaderStatus.kError && (this._status = h.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1));
          } }, { key: "_onXhrError", value: function value(e) {
            this._status = h.LoaderStatus.kError;var t = 0,
                n = null;if (this._contentLength && e.loaded < this._contentLength ? (t = h.LoaderErrors.EARLY_EOF, n = { code: -1, msg: "Moz-Chunked stream meet Early-Eof" }) : (t = h.LoaderErrors.EXCEPTION, n = { code: -1, msg: e.constructor.name + " " + e.type }), !this._onError) throw new f.RuntimeException(n.msg);this._onError(t, n);
          } }]), t;
      }(h.BaseLoader);n.default = c;
    }, { "../utils/exception.js": 40, "../utils/logger.js": 41, "./loader.js": 24 }], 30: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(n, "__esModule", { value: !0 });var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          o = function e(t, n, i) {
        null === t && (t = Function.prototype);var r = Object.getOwnPropertyDescriptor(t, n);if (void 0 === r) {
          var s = Object.getPrototypeOf(t);return null === s ? void 0 : e(s, n, i);
        }if ("value" in r) return r.value;var a = r.get;if (void 0 !== a) return a.call(i);
      },
          u = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          l = e("../utils/logger.js"),
          d = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(l),
          h = e("./loader.js"),
          f = e("../utils/exception.js"),
          c = function (e) {
        function t(e, n) {
          i(this, t);var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "xhr-msstream-loader"));return s.TAG = "MSStreamLoader", s._seekHandler = e, s._config = n, s._needStash = !0, s._xhr = null, s._reader = null, s._totalRange = null, s._currentRange = null, s._currentRequestURL = null, s._currentRedirectedURL = null, s._contentLength = null, s._receivedLength = 0, s._bufferLimit = 16777216, s._lastTimeBufferSize = 0, s._isReconnecting = !1, s;
        }return s(t, e), u(t, null, [{ key: "isSupported", value: function value() {
            try {
              if (void 0 === self.MSStream || void 0 === self.MSStreamReader) return !1;var e = new XMLHttpRequest();return e.open("GET", "https://example.com", !0), e.responseType = "ms-stream", "ms-stream" === e.responseType;
            } catch (e) {
              return d.default.w("MSStreamLoader", e.message), !1;
            }
          } }]), u(t, [{ key: "destroy", value: function value() {
            this.isWorking() && this.abort(), this._reader && (this._reader.onprogress = null, this._reader.onload = null, this._reader.onerror = null, this._reader = null), this._xhr && (this._xhr.onreadystatechange = null, this._xhr = null), o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this);
          } }, { key: "open", value: function value(e, t) {
            this._internalOpen(e, t, !1);
          } }, { key: "_internalOpen", value: function value(e, t, n) {
            this._dataSource = e, n ? this._currentRange = t : this._totalRange = t;var i = e.url;this._config.reuseRedirectedURL && (void 0 != this._currentRedirectedURL ? i = this._currentRedirectedURL : void 0 != e.redirectedURL && (i = e.redirectedURL));var r = this._seekHandler.getConfig(i, t);this._currentRequestURL = r.url;var s = this._reader = new self.MSStreamReader();s.onprogress = this._msrOnProgress.bind(this), s.onload = this._msrOnLoad.bind(this), s.onerror = this._msrOnError.bind(this);var o = this._xhr = new XMLHttpRequest();if (o.open("GET", r.url, !0), o.responseType = "ms-stream", o.onreadystatechange = this._xhrOnReadyStateChange.bind(this), o.onerror = this._xhrOnError.bind(this), e.withCredentials && (o.withCredentials = !0), "object" === a(r.headers)) {
              var u = r.headers;for (var l in u) {
                u.hasOwnProperty(l) && o.setRequestHeader(l, u[l]);
              }
            }if ("object" === a(this._config.headers)) {
              var d = this._config.headers;for (var f in d) {
                d.hasOwnProperty(f) && o.setRequestHeader(f, d[f]);
              }
            }this._isReconnecting ? this._isReconnecting = !1 : this._status = h.LoaderStatus.kConnecting, o.send();
          } }, { key: "abort", value: function value() {
            this._internalAbort(), this._status = h.LoaderStatus.kComplete;
          } }, { key: "_internalAbort", value: function value() {
            this._reader && (1 === this._reader.readyState && this._reader.abort(), this._reader.onprogress = null, this._reader.onload = null, this._reader.onerror = null, this._reader = null), this._xhr && (this._xhr.abort(), this._xhr.onreadystatechange = null, this._xhr = null);
          } }, { key: "_xhrOnReadyStateChange", value: function value(e) {
            var t = e.target;if (2 === t.readyState) {
              if (t.status >= 200 && t.status <= 299) {
                if (this._status = h.LoaderStatus.kBuffering, void 0 != t.responseURL) {
                  var n = this._seekHandler.removeURLParameters(t.responseURL);t.responseURL !== this._currentRequestURL && n !== this._currentRedirectedURL && (this._currentRedirectedURL = n, this._onURLRedirect && this._onURLRedirect(n));
                }var i = t.getResponseHeader("Content-Length");if (null != i && null == this._contentLength) {
                  var r = parseInt(i);r > 0 && (this._contentLength = r, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
                }
              } else {
                if (this._status = h.LoaderStatus.kError, !this._onError) throw new f.RuntimeException("MSStreamLoader: Http code invalid, " + t.status + " " + t.statusText);this._onError(h.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: t.status, msg: t.statusText });
              }
            } else if (3 === t.readyState && t.status >= 200 && t.status <= 299) {
              this._status = h.LoaderStatus.kBuffering;var s = t.response;this._reader.readAsArrayBuffer(s);
            }
          } }, { key: "_xhrOnError", value: function value(e) {
            this._status = h.LoaderStatus.kError;var t = h.LoaderErrors.EXCEPTION,
                n = { code: -1, msg: e.constructor.name + " " + e.type };if (!this._onError) throw new f.RuntimeException(n.msg);this._onError(t, n);
          } }, { key: "_msrOnProgress", value: function value(e) {
            var t = e.target,
                n = t.result;if (null == n) return void this._doReconnectIfNeeded();var i = n.slice(this._lastTimeBufferSize);this._lastTimeBufferSize = n.byteLength;var r = this._totalRange.from + this._receivedLength;this._receivedLength += i.byteLength, this._onDataArrival && this._onDataArrival(i, r, this._receivedLength), n.byteLength >= this._bufferLimit && (d.default.v(this.TAG, "MSStream buffer exceeded max size near " + (r + i.byteLength) + ", reconnecting..."), this._doReconnectIfNeeded());
          } }, { key: "_doReconnectIfNeeded", value: function value() {
            if (null == this._contentLength || this._receivedLength < this._contentLength) {
              this._isReconnecting = !0, this._lastTimeBufferSize = 0, this._internalAbort();var e = { from: this._totalRange.from + this._receivedLength, to: -1 };this._internalOpen(this._dataSource, e, !0);
            }
          } }, { key: "_msrOnLoad", value: function value(e) {
            this._status = h.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._totalRange.from, this._totalRange.from + this._receivedLength - 1);
          } }, { key: "_msrOnError", value: function value(e) {
            this._status = h.LoaderStatus.kError;var t = 0,
                n = null;if (this._contentLength && this._receivedLength < this._contentLength ? (t = h.LoaderErrors.EARLY_EOF, n = { code: -1, msg: "MSStream meet Early-Eof" }) : (t = h.LoaderErrors.EARLY_EOF, n = { code: -1, msg: e.constructor.name + " " + e.type }), !this._onError) throw new f.RuntimeException(n.msg);this._onError(t, n);
          } }]), t;
      }(h.BaseLoader);n.default = c;
    }, { "../utils/exception.js": 40, "../utils/logger.js": 41, "./loader.js": 24 }], 31: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(n, "__esModule", { value: !0 });var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          u = function e(t, n, i) {
        null === t && (t = Function.prototype);var r = Object.getOwnPropertyDescriptor(t, n);if (void 0 === r) {
          var s = Object.getPrototypeOf(t);return null === s ? void 0 : e(s, n, i);
        }if ("value" in r) return r.value;var a = r.get;if (void 0 !== a) return a.call(i);
      },
          l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          d = e("../utils/logger.js"),
          h = i(d),
          f = e("./speed-sampler.js"),
          c = i(f),
          _ = e("./loader.js"),
          m = e("../utils/exception.js"),
          p = function (e) {
        function t(e, n) {
          r(this, t);var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "xhr-range-loader"));return i.TAG = "RangeLoader", i._seekHandler = e, i._config = n, i._needStash = !1, i._chunkSizeKBList = [128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192], i._currentChunkSizeKB = 384, i._currentSpeedNormalized = 0, i._zeroSpeedChunkCount = 0, i._xhr = null, i._speedSampler = new c.default(), i._requestAbort = !1, i._waitForTotalLength = !1, i._totalLengthReceived = !1, i._currentRequestURL = null, i._currentRedirectedURL = null, i._currentRequestRange = null, i._totalLength = null, i._contentLength = null, i._receivedLength = 0, i._lastTimeLoaded = 0, i;
        }return a(t, e), l(t, null, [{ key: "isSupported", value: function value() {
            try {
              var e = new XMLHttpRequest();return e.open("GET", "https://example.com", !0), e.responseType = "arraybuffer", "arraybuffer" === e.responseType;
            } catch (e) {
              return h.default.w("RangeLoader", e.message), !1;
            }
          } }]), l(t, [{ key: "destroy", value: function value() {
            this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr = null), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this);
          } }, { key: "open", value: function value(e, t) {
            this._dataSource = e, this._range = t, this._status = _.LoaderStatus.kConnecting;var n = !1;void 0 != this._dataSource.filesize && 0 !== this._dataSource.filesize && (n = !0, this._totalLength = this._dataSource.filesize), this._totalLengthReceived || n ? this._openSubRange() : (this._waitForTotalLength = !0, this._internalOpen(this._dataSource, { from: 0, to: -1 }));
          } }, { key: "_openSubRange", value: function value() {
            var e = 1024 * this._currentChunkSizeKB,
                t = this._range.from + this._receivedLength,
                n = t + e;null != this._contentLength && n - this._range.from >= this._contentLength && (n = this._range.from + this._contentLength - 1), this._currentRequestRange = { from: t, to: n }, this._internalOpen(this._dataSource, this._currentRequestRange);
          } }, { key: "_internalOpen", value: function value(e, t) {
            this._lastTimeLoaded = 0;var n = e.url;this._config.reuseRedirectedURL && (void 0 != this._currentRedirectedURL ? n = this._currentRedirectedURL : void 0 != e.redirectedURL && (n = e.redirectedURL));var i = this._seekHandler.getConfig(n, t);this._currentRequestURL = i.url;var r = this._xhr = new XMLHttpRequest();if (r.open("GET", i.url, !0), r.responseType = "arraybuffer", r.onreadystatechange = this._onReadyStateChange.bind(this), r.onprogress = this._onProgress.bind(this), r.onload = this._onLoad.bind(this), r.onerror = this._onXhrError.bind(this), e.withCredentials && (r.withCredentials = !0), "object" === o(i.headers)) {
              var s = i.headers;for (var a in s) {
                s.hasOwnProperty(a) && r.setRequestHeader(a, s[a]);
              }
            }if ("object" === o(this._config.headers)) {
              var u = this._config.headers;for (var l in u) {
                u.hasOwnProperty(l) && r.setRequestHeader(l, u[l]);
              }
            }r.send();
          } }, { key: "abort", value: function value() {
            this._requestAbort = !0, this._internalAbort(), this._status = _.LoaderStatus.kComplete;
          } }, { key: "_internalAbort", value: function value() {
            this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr = null);
          } }, { key: "_onReadyStateChange", value: function value(e) {
            var t = e.target;if (2 === t.readyState) {
              if (void 0 != t.responseURL) {
                var n = this._seekHandler.removeURLParameters(t.responseURL);t.responseURL !== this._currentRequestURL && n !== this._currentRedirectedURL && (this._currentRedirectedURL = n, this._onURLRedirect && this._onURLRedirect(n));
              }if (t.status >= 200 && t.status <= 299) {
                if (this._waitForTotalLength) return;this._status = _.LoaderStatus.kBuffering;
              } else {
                if (this._status = _.LoaderStatus.kError, !this._onError) throw new m.RuntimeException("RangeLoader: Http code invalid, " + t.status + " " + t.statusText);this._onError(_.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: t.status, msg: t.statusText });
              }
            }
          } }, { key: "_onProgress", value: function value(e) {
            if (this._status !== _.LoaderStatus.kError) {
              if (null === this._contentLength) {
                var t = !1;if (this._waitForTotalLength) {
                  this._waitForTotalLength = !1, this._totalLengthReceived = !0, t = !0;var n = e.total;this._internalAbort(), null != n & 0 !== n && (this._totalLength = n);
                }if (-1 === this._range.to ? this._contentLength = this._totalLength - this._range.from : this._contentLength = this._range.to - this._range.from + 1, t) return void this._openSubRange();this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength);
              }var i = e.loaded - this._lastTimeLoaded;this._lastTimeLoaded = e.loaded, this._speedSampler.addBytes(i);
            }
          } }, { key: "_normalizeSpeed", value: function value(e) {
            var t = this._chunkSizeKBList,
                n = t.length - 1,
                i = 0,
                r = 0,
                s = n;if (e < t[0]) return t[0];for (; r <= s;) {
              if ((i = r + Math.floor((s - r) / 2)) === n || e >= t[i] && e < t[i + 1]) return t[i];t[i] < e ? r = i + 1 : s = i - 1;
            }
          } }, { key: "_onLoad", value: function value(e) {
            if (this._status !== _.LoaderStatus.kError) {
              if (this._waitForTotalLength) return void (this._waitForTotalLength = !1);this._lastTimeLoaded = 0;var t = this._speedSampler.lastSecondKBps;if (0 === t && ++this._zeroSpeedChunkCount >= 3 && (t = this._speedSampler.currentKBps), 0 !== t) {
                var n = this._normalizeSpeed(t);this._currentSpeedNormalized !== n && (this._currentSpeedNormalized = n, this._currentChunkSizeKB = n);
              }var i = e.target.response,
                  r = this._range.from + this._receivedLength;this._receivedLength += i.byteLength;var s = !1;null != this._contentLength && this._receivedLength < this._contentLength ? this._openSubRange() : s = !0, this._onDataArrival && this._onDataArrival(i, r, this._receivedLength), s && (this._status = _.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1));
            }
          } }, { key: "_onXhrError", value: function value(e) {
            this._status = _.LoaderStatus.kError;var t = 0,
                n = null;if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength ? (t = _.LoaderErrors.EARLY_EOF, n = { code: -1, msg: "RangeLoader meet Early-Eof" }) : (t = _.LoaderErrors.EXCEPTION, n = { code: -1, msg: e.constructor.name + " " + e.type }), !this._onError) throw new m.RuntimeException(n.msg);this._onError(t, n);
          } }, { key: "currentSpeed", get: function get() {
            return this._speedSampler.lastSecondKBps;
          } }]), t;
      }(_.BaseLoader);n.default = p;
    }, { "../utils/exception.js": 40, "../utils/logger.js": 41, "./loader.js": 24, "./speed-sampler.js": 27 }], 32: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          o = e("events"),
          u = i(o),
          l = e("../utils/logger.js"),
          d = i(l),
          h = e("../utils/browser.js"),
          f = i(h),
          c = e("./player-events.js"),
          _ = i(c),
          m = e("../core/transmuxer.js"),
          p = i(m),
          v = e("../core/transmuxing-events.js"),
          g = i(v),
          y = e("../core/mse-controller.js"),
          E = i(y),
          b = e("../core/mse-events.js"),
          S = i(b),
          k = e("./player-errors.js"),
          L = e("../config.js"),
          R = e("../utils/exception.js"),
          A = function () {
        function e(t, n) {
          if (r(this, e), this.TAG = "FlvPlayer", this._type = "FlvPlayer", this._emitter = new u.default(), this._config = (0, L.createDefaultConfig)(), "object" === (void 0 === n ? "undefined" : s(n)) && Object.assign(this._config, n), "flv" !== t.type.toLowerCase()) throw new R.InvalidArgumentException("FlvPlayer requires an flv MediaDataSource input!");!0 === t.isLive && (this._config.isLive = !0), this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this), onvSeeking: this._onvSeeking.bind(this), onvCanPlay: this._onvCanPlay.bind(this), onvStalled: this._onvStalled.bind(this), onvProgress: this._onvProgress.bind(this) }, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = t, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = !1, this._hasPendingLoad = !1, this._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;var i = f.default.chrome && (f.default.version.major < 50 || 50 === f.default.version.major && f.default.version.build < 2661);this._alwaysSeekKeyframe = !!(i || f.default.msedge || f.default.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = !1);
        }return a(e, [{ key: "destroy", value: function value() {
            null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
          } }, { key: "on", value: function value(e, t) {
            var n = this;e === _.default.MEDIA_INFO ? null != this._mediaInfo && Promise.resolve().then(function () {
              n._emitter.emit(_.default.MEDIA_INFO, n.mediaInfo);
            }) : e === _.default.STATISTICS_INFO && null != this._statisticsInfo && Promise.resolve().then(function () {
              n._emitter.emit(_.default.STATISTICS_INFO, n.statisticsInfo);
            }), this._emitter.addListener(e, t);
          } }, { key: "off", value: function value(e, t) {
            this._emitter.removeListener(e, t);
          } }, {
          key: "attachMediaElement", value: function value(e) {
            var t = this;if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), e.addEventListener("seeking", this.e.onvSeeking), e.addEventListener("canplay", this.e.onvCanPlay), e.addEventListener("stalled", this.e.onvStalled), e.addEventListener("progress", this.e.onvProgress), this._msectl = new E.default(this._config), this._msectl.on(S.default.UPDATE_END, this._onmseUpdateEnd.bind(this)), this._msectl.on(S.default.BUFFER_FULL, this._onmseBufferFull.bind(this)), this._msectl.on(S.default.SOURCE_OPEN, function () {
              t._mseSourceOpened = !0, t._hasPendingLoad && (t._hasPendingLoad = !1, t.load());
            }), this._msectl.on(S.default.ERROR, function (e) {
              t._emitter.emit(_.default.ERROR, k.ErrorTypes.MEDIA_ERROR, k.ErrorDetails.MEDIA_MSE_ERROR, e);
            }), this._msectl.attachMediaElement(e), null != this._pendingSeekTime) try {
              e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
            } catch (e) {}
          } }, { key: "detachMediaElement", value: function value() {
            this._mediaElement && (this._msectl.detachMediaElement(), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("stalled", this.e.onvStalled), this._mediaElement.removeEventListener("progress", this.e.onvProgress), this._mediaElement = null), this._msectl && (this._msectl.destroy(), this._msectl = null);
          } }, { key: "load", value: function value() {
            var e = this;if (!this._mediaElement) throw new R.IllegalStateException("HTMLMediaElement must be attached before load()!");if (this._transmuxer) throw new R.IllegalStateException("FlvPlayer.load() has been called, please call unload() first!");if (!this._hasPendingLoad) {
              if (this._config.deferLoadAfterSourceOpen && !1 === this._mseSourceOpened) return void (this._hasPendingLoad = !0);this._mediaElement.readyState > 0 && (this._requestSetTime = !0, this._mediaElement.currentTime = 0), this._transmuxer = new p.default(this._mediaDataSource, this._config), this._transmuxer.on(g.default.INIT_SEGMENT, function (t, n) {
                e._msectl.appendInitSegment(n);
              }), this._transmuxer.on(g.default.MEDIA_SEGMENT, function (t, n) {
                if (e._msectl.appendMediaSegment(n), e._config.lazyLoad && !e._config.isLive) {
                  var i = e._mediaElement.currentTime;n.info.endDts >= 1e3 * (i + e._config.lazyLoadMaxDuration) && null == e._progressChecker && (d.default.v(e.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), e._suspendTransmuxer());
                }
              }), this._transmuxer.on(g.default.LOADING_COMPLETE, function () {
                e._msectl.endOfStream(), e._emitter.emit(_.default.LOADING_COMPLETE);
              }), this._transmuxer.on(g.default.RECOVERED_EARLY_EOF, function () {
                e._emitter.emit(_.default.RECOVERED_EARLY_EOF);
              }), this._transmuxer.on(g.default.IO_ERROR, function (t, n) {
                e._emitter.emit(_.default.ERROR, k.ErrorTypes.NETWORK_ERROR, t, n);
              }), this._transmuxer.on(g.default.DEMUX_ERROR, function (t, n) {
                e._emitter.emit(_.default.ERROR, k.ErrorTypes.MEDIA_ERROR, t, { code: -1, msg: n });
              }), this._transmuxer.on(g.default.MEDIA_INFO, function (t) {
                e._mediaInfo = t, e._emitter.emit(_.default.MEDIA_INFO, Object.assign({}, t));
              }), this._transmuxer.on(g.default.METADATA_ARRIVED, function (t) {
                e._emitter.emit(_.default.METADATA_ARRIVED, t);
              }), this._transmuxer.on(g.default.SCRIPTDATA_ARRIVED, function (t) {
                e._emitter.emit(_.default.SCRIPTDATA_ARRIVED, t);
              }), this._transmuxer.on(g.default.STATISTICS_INFO, function (t) {
                e._statisticsInfo = e._fillStatisticsInfo(t), e._emitter.emit(_.default.STATISTICS_INFO, Object.assign({}, e._statisticsInfo));
              }), this._transmuxer.on(g.default.RECOMMEND_SEEKPOINT, function (t) {
                e._mediaElement && !e._config.accurateSeek && (e._requestSetTime = !0, e._mediaElement.currentTime = t / 1e3);
              }), this._transmuxer.open();
            }
          } }, { key: "unload", value: function value() {
            this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this._transmuxer = null);
          } }, { key: "play", value: function value() {
            return this._mediaElement.play();
          } }, { key: "pause", value: function value() {
            this._mediaElement.pause();
          } }, { key: "_fillStatisticsInfo", value: function value(e) {
            if (e.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement)) return e;var t = !0,
                n = 0,
                i = 0;if (this._mediaElement.getVideoPlaybackQuality) {
              var r = this._mediaElement.getVideoPlaybackQuality();n = r.totalVideoFrames, i = r.droppedVideoFrames;
            } else void 0 != this._mediaElement.webkitDecodedFrameCount ? (n = this._mediaElement.webkitDecodedFrameCount, i = this._mediaElement.webkitDroppedFrameCount) : t = !1;return t && (e.decodedFrames = n, e.droppedFrames = i), e;
          } }, { key: "_onmseUpdateEnd", value: function value() {
            if (this._config.lazyLoad && !this._config.isLive) {
              for (var e = this._mediaElement.buffered, t = this._mediaElement.currentTime, n = 0, i = 0; i < e.length; i++) {
                var r = e.start(i),
                    s = e.end(i);if (r <= t && t < s) {
                  r, n = s;break;
                }
              }n >= t + this._config.lazyLoadMaxDuration && null == this._progressChecker && (d.default.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer());
            }
          } }, { key: "_onmseBufferFull", value: function value() {
            d.default.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), null == this._progressChecker && this._suspendTransmuxer();
          } }, { key: "_suspendTransmuxer", value: function value() {
            this._transmuxer && (this._transmuxer.pause(), null == this._progressChecker && (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3)));
          } }, { key: "_checkProgressAndResume", value: function value() {
            for (var e = this._mediaElement.currentTime, t = this._mediaElement.buffered, n = !1, i = 0; i < t.length; i++) {
              var r = t.start(i),
                  s = t.end(i);if (e >= r && e < s) {
                e >= s - this._config.lazyLoadRecoverDuration && (n = !0);break;
              }
            }n && (window.clearInterval(this._progressChecker), this._progressChecker = null, n && (d.default.v(this.TAG, "Continue loading from paused position"), this._transmuxer.resume()));
          } }, { key: "_isTimepointBuffered", value: function value(e) {
            for (var t = this._mediaElement.buffered, n = 0; n < t.length; n++) {
              var i = t.start(n),
                  r = t.end(n);if (e >= i && e < r) return !0;
            }return !1;
          } }, { key: "_internalSeek", value: function value(e) {
            var t = this._isTimepointBuffered(e),
                n = !1,
                i = 0;if (e < 1 && this._mediaElement.buffered.length > 0) {
              var r = this._mediaElement.buffered.start(0);(r < 1 && e < r || f.default.safari) && (n = !0, i = f.default.safari ? .1 : r);
            }if (n) this._requestSetTime = !0, this._mediaElement.currentTime = i;else if (t) {
              if (this._alwaysSeekKeyframe) {
                var s = this._msectl.getNearestKeyframe(Math.floor(1e3 * e));this._requestSetTime = !0, this._mediaElement.currentTime = null != s ? s.dts / 1e3 : e;
              } else this._requestSetTime = !0, this._mediaElement.currentTime = e;null != this._progressChecker && this._checkProgressAndResume();
            } else null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._msectl.seek(e), this._transmuxer.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = e);
          } }, { key: "_checkAndApplyUnbufferedSeekpoint", value: function value() {
            if (this._seekpointRecord) if (this._seekpointRecord.recordTime <= this._now() - 100) {
              var e = this._mediaElement.currentTime;this._seekpointRecord = null, this._isTimepointBuffered(e) || (null != this._progressChecker && (window.clearTimeout(this._progressChecker), this._progressChecker = null), this._msectl.seek(e), this._transmuxer.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = e));
            } else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
          } }, { key: "_checkAndResumeStuckPlayback", value: function value(e) {
            var t = this._mediaElement;if (e || !this._receivedCanPlay || t.readyState < 2) {
              var n = t.buffered;n.length > 0 && t.currentTime < n.start(0) && (d.default.w(this.TAG, "Playback seems stuck at " + t.currentTime + ", seek to " + n.start(0)), this._requestSetTime = !0, this._mediaElement.currentTime = n.start(0), this._mediaElement.removeEventListener("progress", this.e.onvProgress));
            } else this._mediaElement.removeEventListener("progress", this.e.onvProgress);
          } }, { key: "_onvLoadedMetadata", value: function value(e) {
            null != this._pendingSeekTime && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null);
          } }, { key: "_onvSeeking", value: function value(e) {
            var t = this._mediaElement.currentTime,
                n = this._mediaElement.buffered;if (this._requestSetTime) return void (this._requestSetTime = !1);if (t < 1 && n.length > 0) {
              var i = n.start(0);if (i < 1 && t < i || f.default.safari) return this._requestSetTime = !0, void (this._mediaElement.currentTime = f.default.safari ? .1 : i);
            }if (this._isTimepointBuffered(t)) {
              if (this._alwaysSeekKeyframe) {
                var r = this._msectl.getNearestKeyframe(Math.floor(1e3 * t));null != r && (this._requestSetTime = !0, this._mediaElement.currentTime = r.dts / 1e3);
              }return void (null != this._progressChecker && this._checkProgressAndResume());
            }this._seekpointRecord = { seekPoint: t, recordTime: this._now() }, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
          } }, { key: "_onvCanPlay", value: function value(e) {
            this._receivedCanPlay = !0, this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay);
          } }, { key: "_onvStalled", value: function value(e) {
            this._checkAndResumeStuckPlayback(!0);
          } }, { key: "_onvProgress", value: function value(e) {
            this._checkAndResumeStuckPlayback();
          } }, { key: "type", get: function get() {
            return this._type;
          } }, { key: "buffered", get: function get() {
            return this._mediaElement.buffered;
          } }, { key: "duration", get: function get() {
            return this._mediaElement.duration;
          } }, { key: "volume", get: function get() {
            return this._mediaElement.volume;
          }, set: function set(e) {
            this._mediaElement.volume = e;
          } }, { key: "muted", get: function get() {
            return this._mediaElement.muted;
          }, set: function set(e) {
            this._mediaElement.muted = e;
          } }, { key: "currentTime", get: function get() {
            return this._mediaElement ? this._mediaElement.currentTime : 0;
          }, set: function set(e) {
            this._mediaElement ? this._internalSeek(e) : this._pendingSeekTime = e;
          } }, { key: "mediaInfo", get: function get() {
            return Object.assign({}, this._mediaInfo);
          } }, { key: "statisticsInfo", get: function get() {
            return null == this._statisticsInfo && (this._statisticsInfo = {}), this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo);
          } }]), e;
      }();n.default = A;
    }, { "../config.js": 5, "../core/mse-controller.js": 9, "../core/mse-events.js": 10, "../core/transmuxer.js": 11, "../core/transmuxing-events.js": 13, "../utils/browser.js": 39, "../utils/exception.js": 40, "../utils/logger.js": 41, "./player-errors.js": 34, "./player-events.js": 35, events: 2 }], 33: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          o = e("events"),
          u = i(o),
          l = e("./player-events.js"),
          d = i(l),
          h = e("../config.js"),
          f = e("../utils/exception.js"),
          c = function () {
        function e(t, n) {
          if (r(this, e), this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new u.default(), this._config = (0, h.createDefaultConfig)(), "object" === (void 0 === n ? "undefined" : s(n)) && Object.assign(this._config, n), "flv" === t.type.toLowerCase()) throw new f.InvalidArgumentException("NativePlayer does't support flv MediaDataSource input!");if (t.hasOwnProperty("segments")) throw new f.InvalidArgumentException("NativePlayer(" + t.type + ") doesn't support multipart playback!");this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this) }, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = t, this._mediaElement = null;
        }return a(e, [{ key: "destroy", value: function value() {
            this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
          } }, { key: "on", value: function value(e, t) {
            var n = this;e === d.default.MEDIA_INFO ? null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve().then(function () {
              n._emitter.emit(d.default.MEDIA_INFO, n.mediaInfo);
            }) : e === d.default.STATISTICS_INFO && null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve().then(function () {
              n._emitter.emit(d.default.STATISTICS_INFO, n.statisticsInfo);
            }), this._emitter.addListener(e, t);
          } }, { key: "off", value: function value(e, t) {
            this._emitter.removeListener(e, t);
          } }, { key: "attachMediaElement", value: function value(e) {
            if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), null != this._pendingSeekTime) try {
              e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
            } catch (e) {}
          } }, { key: "detachMediaElement", value: function value() {
            this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement = null), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
          } }, { key: "load", value: function value() {
            if (!this._mediaElement) throw new f.IllegalStateException("HTMLMediaElement must be attached before load()!");this._mediaElement.src = this._mediaDataSource.url, this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval);
          } }, { key: "unload", value: function value() {
            this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
          } }, { key: "play", value: function value() {
            return this._mediaElement.play();
          } }, { key: "pause", value: function value() {
            this._mediaElement.pause();
          } }, { key: "_onvLoadedMetadata", value: function value(e) {
            null != this._pendingSeekTime && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null), this._emitter.emit(d.default.MEDIA_INFO, this.mediaInfo);
          } }, { key: "_reportStatisticsInfo", value: function value() {
            this._emitter.emit(d.default.STATISTICS_INFO, this.statisticsInfo);
          } }, { key: "type", get: function get() {
            return this._type;
          } }, { key: "buffered", get: function get() {
            return this._mediaElement.buffered;
          } }, { key: "duration", get: function get() {
            return this._mediaElement.duration;
          } }, { key: "volume", get: function get() {
            return this._mediaElement.volume;
          }, set: function set(e) {
            this._mediaElement.volume = e;
          } }, { key: "muted", get: function get() {
            return this._mediaElement.muted;
          }, set: function set(e) {
            this._mediaElement.muted = e;
          } }, { key: "currentTime", get: function get() {
            return this._mediaElement ? this._mediaElement.currentTime : 0;
          }, set: function set(e) {
            this._mediaElement ? this._mediaElement.currentTime = e : this._pendingSeekTime = e;
          } }, { key: "mediaInfo", get: function get() {
            var e = this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/",
                t = { mimeType: e + this._mediaDataSource.type };return this._mediaElement && (t.duration = Math.floor(1e3 * this._mediaElement.duration), this._mediaElement instanceof HTMLVideoElement && (t.width = this._mediaElement.videoWidth, t.height = this._mediaElement.videoHeight)), t;
          } }, { key: "statisticsInfo", get: function get() {
            var e = { playerType: this._type, url: this._mediaDataSource.url };if (!(this._mediaElement instanceof HTMLVideoElement)) return e;var t = !0,
                n = 0,
                i = 0;if (this._mediaElement.getVideoPlaybackQuality) {
              var r = this._mediaElement.getVideoPlaybackQuality();n = r.totalVideoFrames, i = r.droppedVideoFrames;
            } else void 0 != this._mediaElement.webkitDecodedFrameCount ? (n = this._mediaElement.webkitDecodedFrameCount, i = this._mediaElement.webkitDroppedFrameCount) : t = !1;return t && (e.decodedFrames = n, e.droppedFrames = i), e;
          } }]), e;
      }();n.default = c;
    }, { "../config.js": 5, "../utils/exception.js": 40, "./player-events.js": 35, events: 2 }], 34: [function (e, t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }), n.ErrorDetails = n.ErrorTypes = void 0;var i = e("../io/loader.js"),
          r = e("../demux/demux-errors.js"),
          s = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r);n.ErrorTypes = { NETWORK_ERROR: "NetworkError", MEDIA_ERROR: "MediaError", OTHER_ERROR: "OtherError" }, n.ErrorDetails = { NETWORK_EXCEPTION: i.LoaderErrors.EXCEPTION, NETWORK_STATUS_CODE_INVALID: i.LoaderErrors.HTTP_STATUS_CODE_INVALID, NETWORK_TIMEOUT: i.LoaderErrors.CONNECTING_TIMEOUT, NETWORK_UNRECOVERABLE_EARLY_EOF: i.LoaderErrors.UNRECOVERABLE_EARLY_EOF, MEDIA_MSE_ERROR: "MediaMSEError", MEDIA_FORMAT_ERROR: s.default.FORMAT_ERROR, MEDIA_FORMAT_UNSUPPORTED: s.default.FORMAT_UNSUPPORTED, MEDIA_CODEC_UNSUPPORTED: s.default.CODEC_UNSUPPORTED };
    }, { "../demux/demux-errors.js": 16, "../io/loader.js": 24 }], 35: [function (e, t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });var i = { ERROR: "error", LOADING_COMPLETE: "loading_complete", RECOVERED_EARLY_EOF: "recovered_early_eof", MEDIA_INFO: "media_info", METADATA_ARRIVED: "metadata_arrived", SCRIPTDATA_ARRIVED: "scriptdata_arrived", STATISTICS_INFO: "statistics_info" };n.default = i;
    }, {}], 36: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = function () {
        function e() {
          i(this, e);
        }return r(e, null, [{ key: "getSilentFrame", value: function value(e, t) {
            if ("mp4a.40.2" === e) {
              if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
            } else {
              if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            }return null;
          } }]), e;
      }();n.default = s;
    }, {}], 37: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = function () {
        function e() {
          i(this, e);
        }return r(e, null, [{ key: "init", value: function value() {
            e.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], mvex: [], mvhd: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [], ".mp3": [] };for (var t in e.types) {
              e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
            }var n = e.constants = {};n.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]), n.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), n.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), n.STSC = n.STCO = n.STTS, n.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), n.HDLR_VIDEO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), n.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), n.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), n.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), n.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
          } }, { key: "box", value: function value(e) {
            for (var t = 8, n = null, i = Array.prototype.slice.call(arguments, 1), r = i.length, s = 0; s < r; s++) {
              t += i[s].byteLength;
            }n = new Uint8Array(t), n[0] = t >>> 24 & 255, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n.set(e, 4);for (var a = 8, o = 0; o < r; o++) {
              n.set(i[o], a), a += i[o].byteLength;
            }return n;
          } }, { key: "generateInitSegment", value: function value(t) {
            var n = e.box(e.types.ftyp, e.constants.FTYP),
                i = e.moov(t),
                r = new Uint8Array(n.byteLength + i.byteLength);return r.set(n, 0), r.set(i, n.byteLength), r;
          } }, { key: "moov", value: function value(t) {
            var n = e.mvhd(t.timescale, t.duration),
                i = e.trak(t),
                r = e.mvex(t);return e.box(e.types.moov, n, i, r);
          } }, { key: "mvhd", value: function value(t, n) {
            return e.box(e.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]));
          } }, { key: "trak", value: function value(t) {
            return e.box(e.types.trak, e.tkhd(t), e.mdia(t));
          } }, { key: "tkhd", value: function value(t) {
            var n = t.id,
                i = t.duration,
                r = t.presentWidth,
                s = t.presentHeight;return e.box(e.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0, s >>> 8 & 255, 255 & s, 0, 0]));
          } }, { key: "mdia", value: function value(t) {
            return e.box(e.types.mdia, e.mdhd(t), e.hdlr(t), e.minf(t));
          } }, { key: "mdhd", value: function value(t) {
            var n = t.timescale,
                i = t.duration;return e.box(e.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 85, 196, 0, 0]));
          } }, { key: "hdlr", value: function value(t) {
            var n = null;return n = "audio" === t.type ? e.constants.HDLR_AUDIO : e.constants.HDLR_VIDEO, e.box(e.types.hdlr, n);
          } }, { key: "minf", value: function value(t) {
            var n = null;return n = "audio" === t.type ? e.box(e.types.smhd, e.constants.SMHD) : e.box(e.types.vmhd, e.constants.VMHD), e.box(e.types.minf, n, e.dinf(), e.stbl(t));
          } }, { key: "dinf", value: function value() {
            return e.box(e.types.dinf, e.box(e.types.dref, e.constants.DREF));
          } }, { key: "stbl", value: function value(t) {
            return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.constants.STTS), e.box(e.types.stsc, e.constants.STSC), e.box(e.types.stsz, e.constants.STSZ), e.box(e.types.stco, e.constants.STCO));
          } }, { key: "stsd", value: function value(t) {
            return "audio" === t.type ? "mp3" === t.codec ? e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp3(t)) : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp4a(t)) : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.avc1(t));
          } }, { key: "mp3", value: function value(t) {
            var n = t.channelCount,
                i = t.audioSampleRate,
                r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, n, 0, 16, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0]);return e.box(e.types[".mp3"], r);
          } }, { key: "mp4a", value: function value(t) {
            var n = t.channelCount,
                i = t.audioSampleRate,
                r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, n, 0, 16, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0]);return e.box(e.types.mp4a, r, e.esds(t));
          } }, { key: "esds", value: function value(t) {
            var n = t.config || [],
                i = n.length,
                r = new Uint8Array([0, 0, 0, 0, 3, 23 + i, 0, 1, 0, 4, 15 + i, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([i]).concat(n).concat([6, 1, 2]));return e.box(e.types.esds, r);
          } }, { key: "avc1", value: function value(t) {
            var n = t.avcc,
                i = t.codecWidth,
                r = t.codecHeight,
                s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, r >>> 8 & 255, 255 & r, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);return e.box(e.types.avc1, s, e.box(e.types.avcC, n));
          } }, { key: "mvex", value: function value(t) {
            return e.box(e.types.mvex, e.trex(t));
          } }, { key: "trex", value: function value(t) {
            var n = t.id,
                i = new Uint8Array([0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);return e.box(e.types.trex, i);
          } }, { key: "moof", value: function value(t, n) {
            return e.box(e.types.moof, e.mfhd(t.sequenceNumber), e.traf(t, n));
          } }, { key: "mfhd", value: function value(t) {
            var n = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]);return e.box(e.types.mfhd, n);
          } }, { key: "traf", value: function value(t, n) {
            var i = t.id,
                r = e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i])),
                s = e.box(e.types.tfdt, new Uint8Array([0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n])),
                a = e.sdtp(t),
                o = e.trun(t, a.byteLength + 16 + 16 + 8 + 16 + 8 + 8);return e.box(e.types.traf, r, s, o, a);
          } }, { key: "sdtp", value: function value(t) {
            for (var n = t.samples || [], i = n.length, r = new Uint8Array(4 + i), s = 0; s < i; s++) {
              var a = n[s].flags;r[s + 4] = a.isLeading << 6 | a.dependsOn << 4 | a.isDependedOn << 2 | a.hasRedundancy;
            }return e.box(e.types.sdtp, r);
          } }, { key: "trun", value: function value(t, n) {
            var i = t.samples || [],
                r = i.length,
                s = 12 + 16 * r,
                a = new Uint8Array(s);n += 8 + s, a.set([0, 0, 15, 1, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n], 0);for (var o = 0; o < r; o++) {
              var u = i[o].duration,
                  l = i[o].size,
                  d = i[o].flags,
                  h = i[o].cts;a.set([u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l, d.isLeading << 2 | d.dependsOn, d.isDependedOn << 6 | d.hasRedundancy << 4 | d.isNonSync, 0, 0, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h], 12 + 16 * o);
            }return e.box(e.types.trun, a);
          } }, { key: "mdat", value: function value(t) {
            return e.box(e.types.mdat, t);
          } }]), e;
      }();s.init(), n.default = s;
    }, {}], 38: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          a = e("../utils/logger.js"),
          o = i(a),
          u = e("./mp4-generator.js"),
          l = i(u),
          d = e("./aac-silent.js"),
          h = i(d),
          f = e("../utils/browser.js"),
          c = i(f),
          _ = e("../core/media-segment-info.js"),
          m = e("../utils/exception.js"),
          p = function () {
        function e(t) {
          r(this, e), this.TAG = "MP4Remuxer", this._config = t, this._isLive = !0 === t.isLive, this._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = 1 / 0, this._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new _.MediaSegmentInfoList("audio"), this._videoSegmentInfoList = new _.MediaSegmentInfoList("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !(!c.default.chrome || !(c.default.version.major < 50 || 50 === c.default.version.major && c.default.version.build < 2661)), this._fillSilentAfterSeek = c.default.msedge || c.default.msie, this._mp3UseMpegAudio = !c.default.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap;
        }return s(e, [{ key: "destroy", value: function value() {
            this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null;
          } }, { key: "bindDataSource", value: function value(e) {
            return e.onDataAvailable = this.remux.bind(this), e.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this;
          } }, { key: "insertDiscontinuity", value: function value() {
            this._audioNextDts = this._videoNextDts = void 0;
          } }, { key: "seek", value: function value(e) {
            this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear();
          } }, { key: "remux", value: function value(e, t) {
            if (!this._onMediaSegment) throw new m.IllegalStateException("MP4Remuxer: onMediaSegment callback must be specificed!");this._dtsBaseInited || this._calculateDtsBase(e, t), this._remuxVideo(t), this._remuxAudio(e);
          } }, { key: "_onTrackMetadataReceived", value: function value(e, t) {
            var n = null,
                i = "mp4",
                r = t.codec;if ("audio" === e) this._audioMeta = t, "mp3" === t.codec && this._mp3UseMpegAudio ? (i = "mpeg", r = "", n = new Uint8Array()) : n = l.default.generateInitSegment(t);else {
              if ("video" !== e) return;this._videoMeta = t, n = l.default.generateInitSegment(t);
            }if (!this._onInitSegment) throw new m.IllegalStateException("MP4Remuxer: onInitSegment callback must be specified!");this._onInitSegment(e, { type: e, data: n.buffer, codec: r, container: e + "/" + i, mediaDuration: t.duration });
          } }, { key: "_calculateDtsBase", value: function value(e, t) {
            this._dtsBaseInited || (e.samples && e.samples.length && (this._audioDtsBase = e.samples[0].dts), t.samples && t.samples.length && (this._videoDtsBase = t.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), this._dtsBaseInited = !0);
          } }, { key: "flushStashedSamples", value: function value() {
            var e = this._videoStashedLastSample,
                t = this._audioStashedLastSample,
                n = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 };null != e && (n.samples.push(e), n.length = e.length);var i = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 };null != t && (i.samples.push(t), i.length = t.length), this._videoStashedLastSample = null, this._audioStashedLastSample = null, this._remuxVideo(n, !0), this._remuxAudio(i, !0);
          } }, { key: "_remuxAudio", value: function value(e, t) {
            if (null != this._audioMeta) {
              var n = e,
                  i = n.samples,
                  r = void 0,
                  s = -1,
                  a = -1,
                  u = this._audioMeta.refSampleDuration,
                  d = "mp3" === this._audioMeta.codec && this._mp3UseMpegAudio,
                  f = this._dtsBaseInited && void 0 === this._audioNextDts,
                  m = !1;if (i && 0 !== i.length && (1 !== i.length || t)) {
                var p = 0,
                    v = null,
                    g = 0;d ? (p = 0, g = n.length) : (p = 8, g = 8 + n.length);var y = null;if (i.length > 1 && (y = i.pop(), g -= y.length), null != this._audioStashedLastSample) {
                  var E = this._audioStashedLastSample;this._audioStashedLastSample = null, i.unshift(E), g += E.length;
                }null != y && (this._audioStashedLastSample = y);var b = i[0].dts - this._dtsBase;if (this._audioNextDts) r = b - this._audioNextDts;else if (this._audioSegmentInfoList.isEmpty()) r = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && "mp3" !== this._audioMeta.originalCodec && (m = !0);else {
                  var S = this._audioSegmentInfoList.getLastSampleBefore(b);if (null != S) {
                    var k = b - (S.originalDts + S.duration);k <= 3 && (k = 0);var L = S.dts + S.duration + k;r = b - L;
                  } else r = 0;
                }if (m) {
                  var R = b - r,
                      A = this._videoSegmentInfoList.getLastSegmentBefore(b);if (null != A && A.beginDts < R) {
                    var w = h.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);if (w) {
                      var T = A.beginDts,
                          O = R - A.beginDts;o.default.v(this.TAG, "InsertPrefixSilentAudio: dts: " + T + ", duration: " + O), i.unshift({ unit: w, dts: T, pts: T }), g += w.byteLength;
                    }
                  } else m = !1;
                }for (var C = [], I = 0; I < i.length; I++) {
                  var D = i[I],
                      x = D.unit,
                      M = D.dts - this._dtsBase,
                      B = M - r;-1 === s && (s = B);var j = 0;if (I !== i.length - 1) {
                    j = i[I + 1].dts - this._dtsBase - r - B;
                  } else if (null != y) {
                    var P = y.dts - this._dtsBase - r;j = P - B;
                  } else j = C.length >= 1 ? C[C.length - 1].duration : Math.floor(u);var U = !1,
                      N = null;if (j > 1.5 * u && "mp3" !== this._audioMeta.codec && this._fillAudioTimestampGap && !c.default.safari) {
                    U = !0;var F = Math.abs(j - u),
                        G = Math.ceil(F / u),
                        V = B + u;o.default.w(this.TAG, "Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\ndts: " + (B + j) + " ms, expected: " + (B + Math.round(u)) + " ms, delta: " + Math.round(F) + " ms, generate: " + G + " frames");var z = h.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);null == z && (o.default.w(this.TAG, "Unable to generate silent frame for " + this._audioMeta.originalCodec + " with " + this._audioMeta.channelCount + " channels, repeat last frame"), z = x), N = [];for (var H = 0; H < G; H++) {
                      var K = Math.round(V);if (N.length > 0) {
                        var q = N[N.length - 1];q.duration = K - q.dts;
                      }var W = { dts: K, pts: K, cts: 0, unit: z, size: z.byteLength, duration: 0, originalDts: M, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 } };N.push(W), g += W.size, V += u;
                    }var X = N[N.length - 1];X.duration = B + j - X.dts, j = Math.round(u);
                  }C.push({ dts: B, pts: B, cts: 0, unit: D.unit, size: D.unit.byteLength, duration: j, originalDts: M, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 } }), U && C.push.apply(C, N);
                }d ? v = new Uint8Array(g) : (v = new Uint8Array(g), v[0] = g >>> 24 & 255, v[1] = g >>> 16 & 255, v[2] = g >>> 8 & 255, v[3] = 255 & g, v.set(l.default.types.mdat, 4));for (var Y = 0; Y < C.length; Y++) {
                  var Z = C[Y].unit;v.set(Z, p), p += Z.byteLength;
                }var Q = C[C.length - 1];a = Q.dts + Q.duration, this._audioNextDts = a;var J = new _.MediaSegmentInfo();J.beginDts = s, J.endDts = a, J.beginPts = s, J.endPts = a, J.originalBeginDts = C[0].originalDts, J.originalEndDts = Q.originalDts + Q.duration, J.firstSample = new _.SampleInfo(C[0].dts, C[0].pts, C[0].duration, C[0].originalDts, !1), J.lastSample = new _.SampleInfo(Q.dts, Q.pts, Q.duration, Q.originalDts, !1), this._isLive || this._audioSegmentInfoList.append(J), n.samples = C, n.sequenceNumber++;var $ = null;$ = d ? new Uint8Array() : l.default.moof(n, s), n.samples = [], n.length = 0;var ee = { type: "audio", data: this._mergeBoxes($, v).buffer, sampleCount: C.length, info: J };d && f && (ee.timestampOffset = s), this._onMediaSegment("audio", ee);
              }
            }
          } }, { key: "_remuxVideo", value: function value(e, t) {
            if (null != this._videoMeta) {
              var n = e,
                  i = n.samples,
                  r = void 0,
                  s = -1,
                  a = -1,
                  o = -1,
                  u = -1;if (i && 0 !== i.length && (1 !== i.length || t)) {
                var d = 8,
                    h = null,
                    f = 8 + e.length,
                    c = null;if (i.length > 1 && (c = i.pop(), f -= c.length), null != this._videoStashedLastSample) {
                  var m = this._videoStashedLastSample;this._videoStashedLastSample = null, i.unshift(m), f += m.length;
                }null != c && (this._videoStashedLastSample = c);var p = i[0].dts - this._dtsBase;if (this._videoNextDts) r = p - this._videoNextDts;else if (this._videoSegmentInfoList.isEmpty()) r = 0;else {
                  var v = this._videoSegmentInfoList.getLastSampleBefore(p);if (null != v) {
                    var g = p - (v.originalDts + v.duration);g <= 3 && (g = 0);var y = v.dts + v.duration + g;r = p - y;
                  } else r = 0;
                }for (var E = new _.MediaSegmentInfo(), b = [], S = 0; S < i.length; S++) {
                  var k = i[S],
                      L = k.dts - this._dtsBase,
                      R = k.isKeyframe,
                      A = L - r,
                      w = k.cts,
                      T = A + w;-1 === s && (s = A, o = T);var O = 0;if (S !== i.length - 1) {
                    O = i[S + 1].dts - this._dtsBase - r - A;
                  } else if (null != c) {
                    var C = c.dts - this._dtsBase - r;O = C - A;
                  } else O = b.length >= 1 ? b[b.length - 1].duration : Math.floor(this._videoMeta.refSampleDuration);if (R) {
                    var I = new _.SampleInfo(A, T, O, k.dts, !0);I.fileposition = k.fileposition, E.appendSyncPoint(I);
                  }b.push({ dts: A, pts: T, cts: w, units: k.units, size: k.length, isKeyframe: R, duration: O, originalDts: L, flags: { isLeading: 0, dependsOn: R ? 2 : 1, isDependedOn: R ? 1 : 0, hasRedundancy: 0, isNonSync: R ? 0 : 1 } });
                }h = new Uint8Array(f), h[0] = f >>> 24 & 255, h[1] = f >>> 16 & 255, h[2] = f >>> 8 & 255, h[3] = 255 & f, h.set(l.default.types.mdat, 4);for (var D = 0; D < b.length; D++) {
                  for (var x = b[D].units; x.length;) {
                    var M = x.shift(),
                        B = M.data;h.set(B, d), d += B.byteLength;
                  }
                }var j = b[b.length - 1];if (a = j.dts + j.duration, u = j.pts + j.duration, this._videoNextDts = a, E.beginDts = s, E.endDts = a, E.beginPts = o, E.endPts = u, E.originalBeginDts = b[0].originalDts, E.originalEndDts = j.originalDts + j.duration, E.firstSample = new _.SampleInfo(b[0].dts, b[0].pts, b[0].duration, b[0].originalDts, b[0].isKeyframe), E.lastSample = new _.SampleInfo(j.dts, j.pts, j.duration, j.originalDts, j.isKeyframe), this._isLive || this._videoSegmentInfoList.append(E), n.samples = b, n.sequenceNumber++, this._forceFirstIDR) {
                  var P = b[0].flags;P.dependsOn = 2, P.isNonSync = 0;
                }var U = l.default.moof(n, s);n.samples = [], n.length = 0, this._onMediaSegment("video", { type: "video", data: this._mergeBoxes(U, h).buffer, sampleCount: b.length, info: E });
              }
            }
          } }, { key: "_mergeBoxes", value: function value(e, t) {
            var n = new Uint8Array(e.byteLength + t.byteLength);return n.set(e, 0), n.set(t, e.byteLength), n;
          } }, { key: "onInitSegment", get: function get() {
            return this._onInitSegment;
          }, set: function set(e) {
            this._onInitSegment = e;
          } }, { key: "onMediaSegment", get: function get() {
            return this._onMediaSegment;
          }, set: function set(e) {
            this._onMediaSegment = e;
          } }]), e;
      }();n.default = p;
    }, { "../core/media-segment-info.js": 8, "../utils/browser.js": 39, "../utils/exception.js": 40, "../utils/logger.js": 41, "./aac-silent.js": 36, "./mp4-generator.js": 37 }], 39: [function (e, t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });var i = {};!function () {
        var e = self.navigator.userAgent.toLowerCase(),
            t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(e) || [],
            n = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(android)/.exec(e) || /(windows)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || [],
            r = { browser: t[5] || t[3] || t[1] || "", version: t[2] || t[4] || "0", majorVersion: t[4] || t[2] || "0", platform: n[0] || "" },
            s = {};if (r.browser) {
          s[r.browser] = !0;var a = r.majorVersion.split(".");s.version = { major: parseInt(r.majorVersion, 10), string: r.version }, a.length > 1 && (s.version.minor = parseInt(a[1], 10)), a.length > 2 && (s.version.build = parseInt(a[2], 10));
        }r.platform && (s[r.platform] = !0), (s.chrome || s.opr || s.safari) && (s.webkit = !0), (s.rv || s.iemobile) && (s.rv && delete s.rv, r.browser = "msie", s.msie = !0), s.edge && (delete s.edge, r.browser = "msedge", s.msedge = !0), s.opr && (r.browser = "opera", s.opera = !0), s.safari && s.android && (r.browser = "android", s.android = !0), s.name = r.browser, s.platform = r.platform;for (var o in i) {
          i.hasOwnProperty(o) && delete i[o];
        }Object.assign(i, s);
      }(), n.default = i;
    }, {}], 40: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          o = n.RuntimeException = function () {
        function e(t) {
          s(this, e), this._message = t;
        }return a(e, [{ key: "toString", value: function value() {
            return this.name + ": " + this.message;
          } }, { key: "name", get: function get() {
            return "RuntimeException";
          } }, { key: "message", get: function get() {
            return this._message;
          } }]), e;
      }();n.IllegalStateException = function (e) {
        function t(e) {
          return s(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }return r(t, e), a(t, [{ key: "name", get: function get() {
            return "IllegalStateException";
          } }]), t;
      }(o), n.InvalidArgumentException = function (e) {
        function t(e) {
          return s(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }return r(t, e), a(t, [{ key: "name", get: function get() {
            return "InvalidArgumentException";
          } }]), t;
      }(o), n.NotImplementedException = function (e) {
        function t(e) {
          return s(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }return r(t, e), a(t, [{ key: "name", get: function get() {
            return "NotImplementedException";
          } }]), t;
      }(o);
    }, {}], 41: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = e("events"),
          a = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(s),
          o = function () {
        function e() {
          i(this, e);
        }return r(e, null, [{ key: "e", value: function value(t, n) {
            t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);var i = "[" + t + "] > " + n;e.ENABLE_CALLBACK && e.emitter.emit("log", "error", i), e.ENABLE_ERROR && (console.error ? console.error(i) : console.warn ? console.warn(i) : console.log(i));
          } }, { key: "i", value: function value(t, n) {
            t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);var i = "[" + t + "] > " + n;e.ENABLE_CALLBACK && e.emitter.emit("log", "info", i), e.ENABLE_INFO && (console.info ? console.info(i) : console.log(i));
          } }, { key: "w", value: function value(t, n) {
            t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);var i = "[" + t + "] > " + n;e.ENABLE_CALLBACK && e.emitter.emit("log", "warn", i), e.ENABLE_WARN && (console.warn ? console.warn(i) : console.log(i));
          } }, { key: "d", value: function value(t, n) {
            t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);var i = "[" + t + "] > " + n;e.ENABLE_CALLBACK && e.emitter.emit("log", "debug", i), e.ENABLE_DEBUG && (console.debug ? console.debug(i) : console.log(i));
          } }, { key: "v", value: function value(t, n) {
            t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);var i = "[" + t + "] > " + n;e.ENABLE_CALLBACK && e.emitter.emit("log", "verbose", i), e.ENABLE_VERBOSE && console.log(i);
          } }]), e;
      }();o.GLOBAL_TAG = "flv.js", o.FORCE_GLOBAL_TAG = !1, o.ENABLE_ERROR = !0, o.ENABLE_INFO = !0, o.ENABLE_WARN = !0, o.ENABLE_DEBUG = !0, o.ENABLE_VERBOSE = !0, o.ENABLE_CALLBACK = !1, o.emitter = new a.default(), n.default = o;
    }, { events: 2 }], 42: [function (e, t, n) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          a = e("events"),
          o = i(a),
          u = e("./logger.js"),
          l = i(u),
          d = function () {
        function e() {
          r(this, e);
        }return s(e, null, [{ key: "getConfig", value: function value() {
            return { globalTag: l.default.GLOBAL_TAG, forceGlobalTag: l.default.FORCE_GLOBAL_TAG, enableVerbose: l.default.ENABLE_VERBOSE, enableDebug: l.default.ENABLE_DEBUG, enableInfo: l.default.ENABLE_INFO, enableWarn: l.default.ENABLE_WARN, enableError: l.default.ENABLE_ERROR, enableCallback: l.default.ENABLE_CALLBACK };
          } }, { key: "applyConfig", value: function value(e) {
            l.default.GLOBAL_TAG = e.globalTag, l.default.FORCE_GLOBAL_TAG = e.forceGlobalTag, l.default.ENABLE_VERBOSE = e.enableVerbose, l.default.ENABLE_DEBUG = e.enableDebug, l.default.ENABLE_INFO = e.enableInfo, l.default.ENABLE_WARN = e.enableWarn, l.default.ENABLE_ERROR = e.enableError, l.default.ENABLE_CALLBACK = e.enableCallback;
          } }, { key: "_notifyChange", value: function value() {
            var t = e.emitter;if (t.listenerCount("change") > 0) {
              var n = e.getConfig();t.emit("change", n);
            }
          } }, { key: "registerListener", value: function value(t) {
            e.emitter.addListener("change", t);
          } }, { key: "removeListener", value: function value(t) {
            e.emitter.removeListener("change", t);
          } }, { key: "addLogListener", value: function value(t) {
            l.default.emitter.addListener("log", t), l.default.emitter.listenerCount("log") > 0 && (l.default.ENABLE_CALLBACK = !0, e._notifyChange());
          } }, { key: "removeLogListener", value: function value(t) {
            l.default.emitter.removeListener("log", t), 0 === l.default.emitter.listenerCount("log") && (l.default.ENABLE_CALLBACK = !1, e._notifyChange());
          } }, { key: "forceGlobalTag", get: function get() {
            return l.default.FORCE_GLOBAL_TAG;
          }, set: function set(t) {
            l.default.FORCE_GLOBAL_TAG = t, e._notifyChange();
          } }, { key: "globalTag", get: function get() {
            return l.default.GLOBAL_TAG;
          }, set: function set(t) {
            l.default.GLOBAL_TAG = t, e._notifyChange();
          } }, { key: "enableAll", get: function get() {
            return l.default.ENABLE_VERBOSE && l.default.ENABLE_DEBUG && l.default.ENABLE_INFO && l.default.ENABLE_WARN && l.default.ENABLE_ERROR;
          }, set: function set(t) {
            l.default.ENABLE_VERBOSE = t, l.default.ENABLE_DEBUG = t, l.default.ENABLE_INFO = t, l.default.ENABLE_WARN = t, l.default.ENABLE_ERROR = t, e._notifyChange();
          } }, { key: "enableDebug", get: function get() {
            return l.default.ENABLE_DEBUG;
          }, set: function set(t) {
            l.default.ENABLE_DEBUG = t, e._notifyChange();
          } }, { key: "enableVerbose", get: function get() {
            return l.default.ENABLE_VERBOSE;
          }, set: function set(t) {
            l.default.ENABLE_VERBOSE = t, e._notifyChange();
          } }, { key: "enableInfo", get: function get() {
            return l.default.ENABLE_INFO;
          }, set: function set(t) {
            l.default.ENABLE_INFO = t, e._notifyChange();
          } }, { key: "enableWarn", get: function get() {
            return l.default.ENABLE_WARN;
          }, set: function set(t) {
            l.default.ENABLE_WARN = t, e._notifyChange();
          } }, { key: "enableError", get: function get() {
            return l.default.ENABLE_ERROR;
          }, set: function set(t) {
            l.default.ENABLE_ERROR = t, e._notifyChange();
          } }]), e;
      }();d.emitter = new o.default(), n.default = d;
    }, { "./logger.js": 41, events: 2 }], 43: [function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      }(),
          s = function () {
        function t() {
          i(this, t);
        }return r(t, null, [{ key: "install", value: function value() {
            Object.setPrototypeOf = Object.setPrototypeOf || function (e, t) {
              return e.__proto__ = t, e;
            }, Object.assign = Object.assign || function (e) {
              if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var i = arguments[n];if (void 0 !== i && null !== i) for (var r in i) {
                  i.hasOwnProperty(r) && (t[r] = i[r]);
                }
              }return t;
            }, "function" != typeof self.Promise && e("es6-promise").polyfill();
          } }]), t;
      }();s.install(), n.default = s;
    }, { "es6-promise": 1 }], 44: [function (e, t, n) {
      "use strict";
      function i(e, t, n) {
        var i = e;if (t + n < i.length) {
          for (; n--;) {
            if (128 != (192 & i[++t])) return !1;
          }return !0;
        }return !1;
      }function r(e) {
        for (var t = [], n = e, r = 0, s = e.length; r < s;) {
          if (n[r] < 128) t.push(String.fromCharCode(n[r])), ++r;else {
            if (n[r] < 192) ;else if (n[r] < 224) {
              if (i(n, r, 1)) {
                var a = (31 & n[r]) << 6 | 63 & n[r + 1];if (a >= 128) {
                  t.push(String.fromCharCode(65535 & a)), r += 2;continue;
                }
              }
            } else if (n[r] < 240) {
              if (i(n, r, 2)) {
                var o = (15 & n[r]) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2];if (o >= 2048 && 55296 != (63488 & o)) {
                  t.push(String.fromCharCode(65535 & o)), r += 3;continue;
                }
              }
            } else if (n[r] < 248 && i(n, r, 3)) {
              var u = (7 & n[r]) << 18 | (63 & n[r + 1]) << 12 | (63 & n[r + 2]) << 6 | 63 & n[r + 3];if (u > 65536 && u < 1114112) {
                u -= 65536, t.push(String.fromCharCode(u >>> 10 | 55296)), t.push(String.fromCharCode(1023 & u | 56320)), r += 4;continue;
              }
            }t.push(String.fromCharCode(65533)), ++r;
          }
        }return t.join("");
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.default = r;
    }, {}] }, {}, [21])(21);
});
//# sourceMappingURL=flv.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsdi1wbGF5ZXIvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1mbHYtcGxheWVyL2J1aWxkL3dyYXBwZXIvUmVhY3RGbHZQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1mbHYtcGxheWVyL2J1aWxkL3dyYXBwZXIvZmx2Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hELHFDQUFxQyxlQUFlO0FBQ3BELHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7QUN4QmE7O0FBRWIsc0JBQXNCLG1CQUFPLENBQUMsa0dBQTBCOztBQUV4RDs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixhQUFhLG1CQUFPLENBQUMsNkNBQU87O0FBRTVCOztBQUVBLFdBQVcsbUJBQU8sQ0FBQyw0RUFBVzs7QUFFOUI7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsdURBQVk7O0FBRXJDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7OztBQzdJQSxzS0FBYTs7QUFFYixvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7QUFDQSxtQkFBbUIsTUFBOEIsR0FBRyxTQUFXLDJFQUEyRSxTQUFTLElBQXlDLEVBQUUsaUNBQU8sRUFBRSxvQ0FBRSxDQUFDO0FBQUE7QUFBQTtBQUFBLG9HQUFDLENBQUMsS0FBSyxVQUU5TTtBQUNILENBQUM7QUFDRCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsMERBQTBELG9CQUFvQixPQUFDLFFBQVEsdUJBQXVCLG9EQUFvRDtBQUNsSyxTQUFTLGdCQUFnQixZQUFZLEdBQUc7QUFDeEMsNkJBQTZCO0FBQzdCLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSyw0REFBNEQsY0FBYztBQUMvRTtBQUNBLEtBQUs7QUFDTCxHQUFHLEVBQUU7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsMkJBQTJCLE9BQU87QUFDbEM7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0EsNENBQTRDLHdCQUF3QixpQkFBaUI7QUFDckYsdUNBQXVDO0FBQ3ZDO0FBQ0EsZUFBZTtBQUNmLGFBQWEsb0JBQW9CO0FBQ2pDLFdBQVc7QUFDWCx5QkFBeUIsNEdBQTRHLGlCQUFpQjtBQUN0SixXQUFXLGVBQWU7QUFDMUI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWUsaURBQWlEO0FBQ2hFLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSw2QkFBNkI7QUFDN0IsV0FBVztBQUNYO0FBQ0EsNkJBQTZCO0FBQzdCLG9FQUFvRSxjQUFjO0FBQ2xGO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gseUJBQXlCO0FBQ3pCLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0EsNkJBQTZCO0FBQzdCLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWCwyQkFBMkIsd0JBQXdCLDhDQUE4QztBQUNqRztBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CLDJCQUEyQjtBQUMzQjtBQUNBLGVBQWUsYUFBYTtBQUM1QixhQUFhO0FBQ2IsV0FBVyxlQUFlO0FBQzFCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSx5RkFBeUY7QUFDekY7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGdEQUFnRCxxQkFBcUIsb0JBQW9CO0FBQ3pGO0FBQ0E7QUFDQSxXQUFXO0FBQ1gseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxpRUFBaUU7QUFDakUsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNkJBQTZCLG1DQUFtQztBQUNoRTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZ0NBQWdDO0FBQ2hDLDZCQUE2Qix1RUFBdUUsd0VBQXdFO0FBQzVLLG1DQUFtQztBQUNuQyxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGFBQWE7QUFDYixtQ0FBbUM7QUFDbkMsYUFBYTtBQUNiLDJCQUEyQjtBQUMzQjtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVyxHQUFHO0FBQ2QsU0FBUztBQUNULE9BQU8sa0pBQWtKO0FBQ3pKLEtBQUssR0FBRyxjQUFjO0FBQ3RCO0FBQ0EseUNBQXlDO0FBQ3pDLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCx1RkFBdUY7QUFDdkYsT0FBTztBQUNQLDZCQUE2QixzQ0FBc0M7QUFDbkUsMkRBQTJELHNFQUFzRTtBQUNqSSxTQUFTLHlDQUF5QyxxQ0FBcUM7QUFDdkYseUJBQXlCLE1BQU07QUFDL0IsdUNBQXVDLE1BQU07QUFDN0MscURBQXFELE1BQU07QUFDM0QsNEVBQTRFLHNHQUFzRyxPQUFPO0FBQ3pMO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxjQUFjLDBEQUEwRCx5Q0FBeUM7QUFDakgsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTLDBEQUEwRCxXQUFXO0FBQzlFLE9BQU87QUFDUCx1QkFBdUIsMERBQTBELG1EQUFtRCxzTEFBc0w7QUFDMVQscUJBQXFCLFNBQVM7QUFDOUI7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxXQUFXLHVCQUF1QjtBQUNsQyxTQUFTO0FBQ1QsT0FBTztBQUNQLGlCQUFpQiwrQkFBK0IsbUZBQW1GLG1EQUFtRDtBQUN0TDtBQUNBO0FBQ0EsV0FBVyxtRUFBbUU7QUFDOUUsU0FBUyx5REFBeUQsa0JBQWtCLFVBQVU7QUFDOUY7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0Esa0NBQWtDLG1CQUFtQjtBQUNyRCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLHNEQUFzRCwyRUFBMkU7QUFDakk7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsdURBQXVELDhFQUE4RTtBQUNySTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLHVCQUF1QixPQUFPLHNCQUFzQixHQUFHO0FBQ3ZELCtCQUErQixTQUFTO0FBQ3hDO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU8sZUFBZTtBQUN0QjtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPLEdBQUc7QUFDVjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdEQUFnRCx5Q0FBeUMsc0JBQXNCO0FBQy9HO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU8saURBQWlELDhDQUE4QztBQUN0RztBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0Esb0JBQW9CO0FBQ3BCLCtCQUErQjtBQUMvQjtBQUNBLFNBQVMsb0RBQW9ELE9BQU87QUFDcEU7QUFDQSwrQkFBK0I7QUFDL0Isa0JBQWtCO0FBQ2xCO0FBQ0EsU0FBUztBQUNULHVFQUF1RSxlQUFlLHNCQUFzQixPQUFPO0FBQ25ILHlCQUF5QjtBQUN6QixXQUFXLDBDQUEwQyxnQkFBZ0IsRUFBRTtBQUN2RSxTQUFTO0FBQ1QsbUJBQW1CLG9EQUFvRCw4QkFBOEIsbUNBQW1DLE1BQU0sV0FBVyxLQUFLLHNCQUFzQjtBQUNwTDtBQUNBLFNBQVMsZ0JBQWdCLEdBQUc7QUFDNUI7QUFDQSwrQkFBK0IsMEJBQTBCLEVBQUUsMEJBQTBCO0FBQ3JGLDhCQUE4QjtBQUM5QjtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsT0FBTyx3Q0FBd0MsWUFBWSw2QkFBNkIsMkJBQTJCO0FBQ25ILEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsdUZBQXVGO0FBQ3ZGLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLG9DQUFvQztBQUNwQyxpQ0FBaUM7QUFDakMsV0FBVyxFQUFFLEdBQUc7QUFDaEIsb0NBQW9DO0FBQ3BDLGlDQUFpQztBQUNqQyxXQUFXLEVBQUUsR0FBRztBQUNoQixrR0FBa0csc0NBQXNDO0FBQ3hJLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHFCQUFxQiwyS0FBMkssMFJBQTBSLHVHQUF1Ryw4RkFBOEY7QUFDL3BCLFdBQVcsRUFBRTtBQUNiLE9BQU8sR0FBRztBQUNWLEtBQUssR0FBRyxrREFBa0Q7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0MsWUFBWSxFQUFFO0FBQzdEO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxjQUFjO0FBQ3ZCO0FBQ0EsZ1RBQWdUO0FBQ2hULFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIseURBQXlEO0FBQ3pELDZDQUE2QyxRQUFRO0FBQ3JELFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9DQUFvQyxRQUFRO0FBQ2xFO0FBQ0Esc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsT0FBTyxHQUFHO0FBQ1YsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0MsWUFBWSxFQUFFO0FBQzdEO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPLEdBQUc7QUFDVjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUyxjQUFjO0FBQ3ZCO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTLGNBQWM7QUFDdkI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQiwrQkFBK0I7QUFDL0IsV0FBVyxFQUFFLEdBQUc7QUFDaEIsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdDQUF3QyxRQUFRO0FBQ3RFO0FBQ0Esc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTLGNBQWM7QUFDdkI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLCtCQUErQiw4QkFBOEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUE2QyxNQUFNLFFBQVE7QUFDakY7QUFDQSxzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixXQUFXLEVBQUUsR0FBRztBQUNoQix3REFBd0Q7QUFDeEQsV0FBVyxFQUFFLEdBQUc7QUFDaEIsaURBQWlEO0FBQ2pELFdBQVcsRUFBRSxHQUFHO0FBQ2hCLDJGQUEyRix5QkFBeUI7QUFDcEg7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRTtBQUNiLE9BQU87QUFDUCxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLE9BQU87QUFDUDtBQUNBLE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFPQUFxTywwUUFBMFEsd1FBQXdRLDJCQUEyQix5QkFBeUIsMkJBQTJCLDRCQUE0QiwyQkFBMkIsMkJBQTJCLHVCQUF1QiwrQkFBK0IsdUJBQXVCO0FBQ3IrQixTQUFTLGNBQWM7QUFDdkI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsOEhBQThILHFEQUFxRDtBQUNuTCxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLHdDQUF3QztBQUN4QyxpREFBaUQsOEhBQThILCtCQUErQjtBQUM5TTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQix3S0FBd0s7QUFDeEsscUNBQXFDLHlDQUF5QyxvQkFBb0IsV0FBVztBQUM3RyxtS0FBbUs7QUFDbkssdUJBQXVCO0FBQ3ZCLDZGQUE2RjtBQUM3RixpQkFBaUI7QUFDakIscUdBQXFHLCtCQUErQjtBQUNwSTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEIsc0JBQXNCLGdKQUFnSixvQ0FBb0M7QUFDMU0sV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQixzQkFBc0IsaUNBQWlDO0FBQ3hFLGlDQUFpQyx1QkFBdUI7QUFDeEQ7QUFDQSw4Q0FBOEMsbUNBQW1DLG1CQUFtQjtBQUNwRyxtQkFBbUI7QUFDbkIsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSx3Q0FBd0MsNElBQTRJO0FBQ3BMLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsaUVBQWlFLHVDQUF1QztBQUN4Ryw2Q0FBNkM7QUFDN0MsbUNBQW1DO0FBQ25DO0FBQ0EsYUFBYTtBQUNiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLG1EQUFtRDtBQUNuRCw2Q0FBNkM7QUFDN0MsdURBQXVELGNBQWM7QUFDckU7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSw2QkFBNkIsd0RBQXdELG1DQUFtQyxtQkFBbUI7QUFDM0k7QUFDQSxtQkFBbUIsMkRBQTJELG1CQUFtQjtBQUNqRyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHdDQUF3QztBQUN4QztBQUNBLGlEQUFpRDtBQUNqRDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0Esb0pBQW9KLHlCQUF5QjtBQUM3SyxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLDBDQUEwQztBQUMxQztBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLGlCQUFpQixpREFBaUQ7QUFDbEU7QUFDQSxpQkFBaUI7QUFDakIsNE9BQTRPLCtCQUErQjtBQUMzUTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixrT0FBa08sVUFBVTtBQUM1TyxnQ0FBZ0M7QUFDaEMsYUFBYTtBQUNiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQiwwQ0FBMEM7QUFDMUMsV0FBVyxFQUFFLEdBQUc7QUFDaEIsOENBQThDO0FBQzlDLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUU7QUFDYixPQUFPLEdBQUc7QUFDVixLQUFLLEdBQUcsbUpBQW1KO0FBQzNKO0FBQ0EsOENBQThDLFlBQVksRUFBRSxTQUFTLG9HQUFvRztBQUN6SyxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLE9BQU87QUFDUDtBQUNBLE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0tBQWdLLDZCQUE2QixhQUFhLGtFQUFrRSx1RkFBdUYsc0RBQXNEO0FBQzdiLFdBQVc7QUFDWDtBQUNBLFdBQVcsNkNBQTZDO0FBQ3hELHFDQUFxQztBQUNyQztBQUNBLFNBQVMsY0FBYztBQUN2Qiw2R0FBNkcsaUJBQWlCO0FBQzlILFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHFEQUFxRCxlQUFlO0FBQ3BFLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHFEQUFxRCxjQUFjO0FBQ25FLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHFEQUFxRCx3QkFBd0I7QUFDN0UsV0FBVyxFQUFFLEdBQUc7QUFDaEIscURBQXFELGVBQWU7QUFDcEUsV0FBVyxFQUFFLEdBQUc7QUFDaEIscURBQXFELGdCQUFnQjtBQUNyRSxXQUFXLEVBQUUsR0FBRztBQUNoQix5QkFBeUI7QUFDekI7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEIseUJBQXlCO0FBQ3pCO0FBQ0EsYUFBYTtBQUNiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHlCQUF5QjtBQUN6QjtBQUNBLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQix5QkFBeUI7QUFDekI7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEIseUJBQXlCO0FBQ3pCO0FBQ0EsYUFBYTtBQUNiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHlCQUF5QjtBQUN6QjtBQUNBLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQix5QkFBeUI7QUFDekI7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEIseUJBQXlCO0FBQ3pCO0FBQ0EsYUFBYTtBQUNiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHlCQUF5QjtBQUN6QjtBQUNBLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQix5QkFBeUI7QUFDekI7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEIseUJBQXlCO0FBQ3pCO0FBQ0EsYUFBYTtBQUNiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHNEQUFzRCxrQ0FBa0M7QUFDeEYsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSwyQkFBMkIsOElBQThJLGdCQUFnQjtBQUN6TCwwREFBMEQsTUFBTTtBQUNoRSwwQ0FBMEMsTUFBTTtBQUNoRCw0RkFBNEYsTUFBTTtBQUNsRyw2Q0FBNkMsTUFBTTtBQUNuRCwwREFBMEQsTUFBTTtBQUNoRSw2Q0FBNkMsTUFBTTtBQUNuRDtBQUNBLFdBQVcsRUFBRTtBQUNiLE9BQU8sR0FBRztBQUNWLEtBQUssR0FBRywrTUFBK007QUFDdk47QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxPQUFPO0FBQ1A7QUFDQSxPQUFPLHdDQUF3QyxZQUFZLEVBQUU7QUFDN0Q7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMklBQTJJLHlEQUF5RCw2S0FBNkssVUFBVTtBQUMzWDtBQUNBLFdBQVc7QUFDWCxTQUFTLGNBQWM7QUFDdkI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQiwwQ0FBMEM7QUFDMUMsb0VBQW9FO0FBQ3BFLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSwwREFBMEQ7QUFDMUQsb0RBQW9ELDJDQUEyQztBQUMvRixrREFBa0Q7QUFDbEQ7QUFDQSxlQUFlO0FBQ2Ysb0RBQW9ELG1KQUFtSjtBQUN2TSxrREFBa0Q7QUFDbEQ7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixpRkFBaUYsY0FBYztBQUMvRjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBO0FBQ0Esc0JBQXNCLGlNQUFpTTtBQUN2Tiw2SEFBNkgsOEJBQThCO0FBQzNKLGFBQWE7QUFDYjtBQUNBLGFBQWEscUhBQXFIO0FBQ2xJLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHlCQUF5Qiw4REFBOEQsK01BQStNLHdCQUF3QixLQUFLO0FBQ25VLHlDQUF5QztBQUN6QyxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSwwQkFBMEI7QUFDMUIsV0FBVyxFQUFFLEdBQUc7QUFDaEIsMENBQTBDO0FBQzFDLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLG9DQUFvQyxLQUFLO0FBQ3pDLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHVCQUF1QjtBQUN2QixXQUFXLEVBQUU7QUFDYixPQUFPLElBQUk7QUFDWCxLQUFLLEdBQUcseVFBQXlRO0FBQ2pSO0FBQ0EsOENBQThDLFlBQVksRUFBRSxTQUFTLDhYQUE4WDtBQUNuYyxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQ0FBcUMsbUJBQW1CLEdBQUc7QUFDOUUsU0FBUztBQUNULG1CQUFtQixzQ0FBc0MsbUJBQW1CLEdBQUc7QUFDL0UsU0FBUztBQUNULG1CQUFtQixtQ0FBbUM7QUFDdEQsU0FBUztBQUNULG1CQUFtQixzQ0FBc0M7QUFDekQsU0FBUztBQUNULG1CQUFtQixzQ0FBc0M7QUFDekQsU0FBUztBQUNULG1CQUFtQiw0Q0FBNEM7QUFDL0QsU0FBUztBQUNULG1CQUFtQiw4Q0FBOEM7QUFDakUsU0FBUztBQUNULG1CQUFtQiwyQ0FBMkM7QUFDOUQsU0FBUztBQUNULHlCQUF5QixpQ0FBaUMsbUJBQW1CLEVBQUU7QUFDL0UsU0FBUztBQUNULHlCQUF5QixvQ0FBb0MsbUJBQW1CLEVBQUU7QUFDbEYsU0FBUztBQUNULHlCQUF5Qiw4Q0FBOEM7QUFDdkUsU0FBUztBQUNULHlCQUF5QixnQ0FBZ0MscUJBQXFCLEVBQUU7QUFDaEYsU0FBUztBQUNULDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsK2pCQUErakIsTUFBTTtBQUNya0IsMkRBQTJELG1CQUFtQixFQUFFLE1BQU07QUFDdEYsd0JBQXdCLE1BQU07QUFDOUIsdUJBQXVCLE1BQU07QUFDN0IsbUNBQW1DLE1BQU07QUFDekMsd0JBQXdCLE1BQU07QUFDOUIseUJBQXlCLE1BQU07QUFDL0IsbUNBQW1DO0FBQ25DLFNBQVM7QUFDVCxRQUFRO0FBQ1IsS0FBSyxHQUFHLDRKQUE0SjtBQUNwSztBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLE9BQU87QUFDUDtBQUNBLE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsdUJBQXVCO0FBQ3ZCO0FBQ0EsOERBQThEO0FBQzlELGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQix3R0FBd0c7QUFDeEc7QUFDQSxnQ0FBZ0MsUUFBUSxRQUFRLDhCQUE4QjtBQUM5RSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLDhGQUE4RjtBQUM5RjtBQUNBLDJCQUEyQixzRUFBc0U7QUFDakcsV0FBVyxFQUFFLEdBQUc7QUFDaEIsa0dBQWtHO0FBQ2xHO0FBQ0EsMkJBQTJCLHNFQUFzRTtBQUNqRyxXQUFXLEVBQUUsR0FBRztBQUNoQiwrRkFBK0Y7QUFDL0Ysd0NBQXdDLDJDQUEyQztBQUNuRixXQUFXLEVBQUUsR0FBRztBQUNoQiw2RkFBNkY7QUFDN0Y7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQixrREFBa0QsTUFBTTtBQUN4RCw4Q0FBOEMsTUFBTTtBQUNwRCx5REFBeUQsd0JBQXdCLE1BQU07QUFDdkYseUJBQXlCLFVBQVUseURBQXlELFdBQVc7QUFDdkcsK0RBQStELHVCQUF1QjtBQUN0RixtQkFBbUI7QUFDbkI7QUFDQSxtQkFBbUIsTUFBTTtBQUN6Qix3QkFBd0IsU0FBUyxVQUFVLHlEQUF5RCxXQUFXO0FBQy9HLGlFQUFpRSx1QkFBdUI7QUFDeEYsbUJBQW1CO0FBQ25CO0FBQ0EsbUJBQW1CLE1BQU07QUFDekIsNENBQTRDLE1BQU07QUFDbEQseUJBQXlCLDJCQUEyQixPQUFPLGVBQWUsT0FBTztBQUNqRiwwREFBMEQ7QUFDMUQsbUJBQW1CLE1BQU07QUFDekIsdURBQXVELHdCQUF3QixNQUFNO0FBQ3JGLHlEQUF5RCx3QkFBd0IsTUFBTTtBQUN2RjtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWEsUUFBUTtBQUNyQixXQUFXLEVBQUU7QUFDYixPQUFPLEdBQUc7QUFDVixLQUFLLEdBQUcscUZBQXFGO0FBQzdGO0FBQ0EsOENBQThDLFlBQVksRUFBRSxTQUFTLHlIQUF5SDtBQUM5TCxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdDQUF3QyxZQUFZLEVBQUU7QUFDN0Q7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLDJEQUEyRCxzR0FBc0c7QUFDakssc0NBQXNDO0FBQ3RDLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLGdIQUFnSDtBQUNoSCxvREFBb0Q7QUFDcEQsYUFBYSw4REFBOEQseUNBQXlDLHlDQUF5Qyx3QkFBd0I7QUFDckwsa0RBQWtEO0FBQ2xELFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQiwyQkFBMkIsV0FBVyxrQ0FBa0M7QUFDeEU7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEIsNENBQTRDO0FBQzVDLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLG1DQUFtQztBQUNuQyxXQUFXLEVBQUU7QUFDYixPQUFPLEdBQUc7QUFDVixLQUFLLEdBQUcsOEJBQThCO0FBQ3RDO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyx3Q0FBd0MsWUFBWSxFQUFFO0FBQzdEO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDAzQkFBMDNCLHVEQUF1RCxnckJBQWdyQixrRUFBa0Usc0JBQXNCLGtFQUFrRTtBQUMzdkQsdUNBQXVDO0FBQ3ZDLFdBQVc7QUFDWCxTQUFTLGNBQWM7QUFDdkI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQix3T0FBd087QUFDeE8sdUNBQXVDO0FBQ3ZDLGlEQUFpRDtBQUNqRCxhQUFhO0FBQ2IsNElBQTRJO0FBQzVJLGFBQWEsTUFBTSxrQkFBa0I7QUFDckMsa0NBQWtDLDJCQUEyQixxQ0FBcUM7QUFDbEcsb0RBQW9ELHlDQUF5QztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxvR0FBb0csZUFBZSxZQUFZO0FBQ3RMLHFEQUFxRCxNQUFNO0FBQzNELDREQUE0RCxNQUFNO0FBQ2xFLG9EQUFvRCxnQ0FBZ0M7QUFDcEYsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQix1REFBdUQ7QUFDdkQsMklBQTJJLDZGQUE2RixrQ0FBa0MsdUVBQXVFO0FBQ2pWO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsc0RBQXNEO0FBQ3RELGtDQUFrQztBQUNsQztBQUNBLGVBQWU7QUFDZix1REFBdUQsb0JBQW9CO0FBQzNFLGVBQWUsNkNBQTZDO0FBQzVELGFBQWEsb0dBQW9HO0FBQ2pILFdBQVcsRUFBRSxHQUFHO0FBQ2hCLDJDQUEyQyxvQkFBb0I7QUFDL0QseUVBQXlFO0FBQ3pFLGFBQWEsUUFBUTtBQUNyQixXQUFXLEVBQUUsR0FBRztBQUNoQixtSEFBbUg7QUFDbkg7QUFDQTtBQUNBLDhCQUE4QiwwSEFBMEg7QUFDeEoscUNBQXFDLHVIQUF1SCwrQkFBK0I7QUFDM0w7QUFDQSx1Q0FBdUMsMkpBQTJKO0FBQ2xNLGlFQUFpRSx3QkFBd0I7QUFDekYsMEZBQTBGLGVBQWUsaWhCQUFpaEIsd0JBQXdCLDZLQUE2SyxrRkFBa0Y7QUFDajVCLGlCQUFpQjtBQUNqQjtBQUNBLDJCQUEyQiwyREFBMkQ7QUFDdEYsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBLHVFQUF1RSx3QkFBd0IsK1RBQStULHdCQUF3QixrTUFBa00sa0ZBQWtGO0FBQzFzQixpQkFBaUIscURBQXFELHdCQUF3QjtBQUM5Rix5QkFBeUIsaURBQWlEO0FBQzFFO0FBQ0E7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQix5SEFBeUgsVUFBVTtBQUNuSSw0Q0FBNEM7QUFDNUMsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1TUFBdU07QUFDaE8sdUNBQXVDLGlIQUFpSCxvREFBb0QsK0NBQStDLGljQUFpYztBQUM1ckIsV0FBVyxFQUFFLEdBQUc7QUFDaEIscUdBQXFHO0FBQ3JHLHlCQUF5QjtBQUN6Qix1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsMkRBQTJELE1BQU07QUFDakUsMkRBQTJELE1BQU07QUFDakUsNERBQTRELFlBQVk7QUFDeEUseUdBQXlHLE1BQU07QUFDL0cseUdBQXlHLE1BQU07QUFDL0csMEdBQTBHLEtBQUs7QUFDL0csYUFBYSxZQUFZO0FBQ3pCLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLG1IQUFtSDtBQUNuSDtBQUNBO0FBQ0EsNkJBQTZCLG1IQUFtSDtBQUNoSjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUVBQXVFLHVFQUF1RTtBQUM5SyxXQUFXLEVBQUUsR0FBRztBQUNoQixzSEFBc0g7QUFDdEg7QUFDQTtBQUNBLDBDQUEwQyxtUEFBbVAsNkZBQTZGO0FBQzFYLGtDQUFrQyw2QkFBNkIsd0hBQXdILHNPQUFzTywyQkFBMkIscUhBQXFILCtGQUErRixzQkFBc0IsT0FBTztBQUN6cUIseUNBQXlDO0FBQ3pDLG9EQUFvRCxPQUFPLDhCQUE4QjtBQUN6RixzZEFBc2Q7QUFDdGQsOENBQThDLDRDQUE0QyxrREFBa0QsT0FBTztBQUNuSiw4Q0FBOEM7QUFDOUMsbUJBQW1CLFlBQVksd0JBQXdCLHVVQUF1VSxrRkFBa0Y7QUFDaGQ7QUFDQTtBQUNBLGFBQWEsc0JBQXNCLHFIQUFxSCxvR0FBb0csZUFBZSxPQUFPO0FBQ2xSLHlDQUF5QztBQUN6QyxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEIsaUtBQWlLLE9BQU87QUFDeEs7QUFDQSxzSEFBc0g7QUFDdEgsZUFBZSwyQkFBMkIsMElBQTBJLCtCQUErQixvQkFBb0I7QUFDdk8sdUJBQXVCLG9CQUFvQjtBQUMzQyxhQUFhO0FBQ2I7QUFDQSx1QkFBdUIsa0VBQWtFO0FBQ3pGO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsS0FBSztBQUNsQjtBQUNBLHFCQUFxQixhQUFhLHNFQUFzRTtBQUN4RztBQUNBLDRCQUE0QixvQkFBb0I7QUFDaEQsV0FBVyxFQUFFO0FBQ2IsT0FBTyxHQUFHO0FBQ1YsS0FBSyxHQUFHLDJKQUEySjtBQUNuSztBQUNBO0FBQ0E7QUFDQSxPQUFPLHdDQUF3QyxZQUFZLEVBQUU7QUFDN0Q7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixrRkFBa0YsT0FBTztBQUN6RjtBQUNBLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLHFDQUFxQyxhQUFhLHFCQUFxQixhQUFhLHFCQUFxQixZQUFZO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlUQUF5VCxPQUFPO0FBQ3RWO0FBQ0EsYUFBYSxZQUFZLG9CQUFvQix5QkFBeUI7QUFDdEUsc0RBQXNELGdDQUFnQyxPQUFPO0FBQzdGO0FBQ0E7QUFDQSxhQUFhLG9CQUFvQixjQUFjO0FBQy9DO0FBQ0Esa0NBQWtDLHdDQUF3QztBQUMxRTtBQUNBO0FBQ0Esc0JBQXNCLHFGQUFxRjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckYsZUFBZTtBQUNmO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsYUFBYSxVQUFVLGtDQUFrQztBQUN6RCxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0Esc0NBQXNDO0FBQ3RDLGFBQWE7QUFDYiwyQ0FBMkMsbUNBQW1DLHlCQUF5QiwrQkFBK0IsbUpBQW1KLDJDQUEyQyxjQUFjLHNCQUFzQixlQUFlLHNCQUFzQixpQkFBaUIsc0JBQXNCO0FBQ3BiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQix3QkFBd0I7QUFDeEIsa0NBQWtDO0FBQ2xDLDhCQUE4QjtBQUM5QixrQ0FBa0M7QUFDbEMsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQix3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0I7QUFDQSxXQUFXLEVBQUU7QUFDYixPQUFPLEdBQUc7QUFDVixLQUFLLEdBQUcsd0JBQXdCO0FBQ2hDO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsT0FBTztBQUNQLGtCQUFrQix5SkFBeUosd0lBQXdJLGlCQUFpQjtBQUNwVSx1Q0FBdUM7QUFDdkM7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPLHdDQUF3QyxZQUFZLEVBQUU7QUFDN0Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvQkFBb0IsV0FBVyx3V0FBd1c7QUFDL2E7QUFDQSxTQUFTLEVBQUU7QUFDWCxLQUFLLEdBQUcsMFFBQTBRO0FBQ2xSO0FBQ0E7QUFDQSxLQUFLLEdBQUcsaUJBQWlCO0FBQ3pCO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLHNHQUFzRztBQUN0RyxPQUFPO0FBQ1AsMExBQTBMLCtDQUErQyxlQUFlLDJEQUEyRCxFQUFFO0FBQ3JULE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLCtDQUErQyw4Q0FBOEM7QUFDN0YsMkNBQTJDO0FBQzNDLFNBQVMsaUNBQWlDLGNBQWM7QUFDeEQsT0FBTztBQUNQO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2RkFBNkY7QUFDbEgsU0FBUyw2QkFBNkI7QUFDdEM7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVcsRUFBRSxXQUFXO0FBQ3hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIseUJBQXlCLHNDQUFzQyxjQUFjLHNGQUFzRjtBQUNuSyx1Q0FBdUM7QUFDdkMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxhQUFhLFNBQVMsMkdBQTJHO0FBQ2pJO0FBQ0EsYUFBYTtBQUNiLHdHQUF3RztBQUN4RztBQUNBLG9FQUFvRTtBQUNwRSxpQkFBaUIsd0NBQXdDO0FBQ3pELGVBQWUsMkpBQTJKLHFEQUFxRCxvQ0FBb0M7QUFDblEsYUFBYTtBQUNiLDBFQUEwRSxzQ0FBc0MsMkJBQTJCO0FBQzNJLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BELDJCQUEyQixnREFBZ0QscURBQXFEO0FBQ2hJLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsMEhBQTBILHNDQUFzQztBQUNoSywwREFBMEQ7QUFDMUQ7QUFDQSxhQUFhO0FBQ2I7QUFDQSxrREFBa0Q7QUFDbEQsNkJBQTZCLDhMQUE4TCwrQkFBK0Isd0NBQXdDLG1EQUFtRCxvREFBb0Q7QUFDelk7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsT0FBTyxlQUFlO0FBQ3RCLEtBQUssR0FBRyxzR0FBc0c7QUFDOUc7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxPQUFPO0FBQ1A7QUFDQSxPQUFPLHdDQUF3QyxZQUFZLEVBQUU7QUFDN0Q7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixpQ0FBaUMsK0ZBQStGO0FBQ2hJO0FBQ0EsK0NBQStDO0FBQy9DLGFBQWE7QUFDYiw2SEFBNkgseUpBQXlKO0FBQ3RSO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsaUdBQWlHLDZEQUE2RCxnRUFBZ0UsZ0VBQWdFO0FBQzlSLDRJQUE0STtBQUM1STtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsa0NBQWtDLGtCQUFrQix5SkFBeUo7QUFDN00sV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIscUlBQXFJLFNBQVMsbUJBQW1CLHNCQUFzQix1QkFBdUI7QUFDOU0sV0FBVyxFQUFFLEdBQUc7QUFDaEIsc0lBQXNJO0FBQ3RJLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHlDQUF5QyxpQkFBaUI7QUFDMUQ7QUFDQSxhQUFhO0FBQ2IseUNBQXlDO0FBQ3pDLDhFQUE4RTtBQUM5RSxlQUFlO0FBQ2Y7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQkFBMEIsTUFBTSxRQUFRO0FBQzlELG9HQUFvRztBQUNwRztBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHNCQUFzQix1SEFBdUgsMkJBQTJCO0FBQ3hLLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHdJQUF3STtBQUN4SSx1TEFBdUwsMENBQTBDO0FBQ2pPLGdEQUFnRDtBQUNoRCxlQUFlO0FBQ2Y7QUFDQSxnRkFBZ0Y7QUFDaEYsaUJBQWlCO0FBQ2pCLGlGQUFpRjtBQUNqRjtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLHFCQUFxQixxREFBcUQ7QUFDMUUsbUJBQW1CO0FBQ25CLHVEQUF1RDtBQUN2RCwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLG1EQUFtRDtBQUNuRCwyQ0FBMkMsOENBQThDLCtEQUErRDtBQUN4SjtBQUNBLGVBQWU7QUFDZix3SEFBd0gsK0RBQStELDJFQUEyRSxnR0FBZ0c7QUFDbFcsK0RBQStEO0FBQy9ELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixtUEFBbVA7QUFDblA7QUFDQSxvREFBb0Q7QUFDcEQsaUJBQWlCLDJDQUEyQyxNQUFNLCtKQUErSiwwRUFBMEU7QUFDM1MsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUU7QUFDYixPQUFPLEdBQUc7QUFDVixLQUFLLEdBQUc7QUFDUiwyTkFBMk47QUFDM047QUFDQTtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0MsWUFBWSwyREFBMkQ7QUFDdEg7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGdDQUFnQyxvRUFBb0Usa0JBQWtCLHdNQUF3TTtBQUM5VDtBQUNBO0FBQ0EsU0FBUyxjQUFjO0FBQ3ZCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRTtBQUNiLE9BQU87QUFDUCxLQUFLLEdBQUcsOEJBQThCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QixzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLGFBQWEsUUFBUSxvQkFBb0I7QUFDekMsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBLG1DQUFtQyxxQ0FBcUMsV0FBVyxrRUFBa0UsY0FBYztBQUNuSztBQUNBLDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsT0FBTyxHQUFHO0FBQ1YsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0MsWUFBWSxFQUFFO0FBQzdEO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxjQUFjO0FBQ3ZCLHVCQUF1QjtBQUN2Qiw2QkFBNkI7QUFDN0IsYUFBYSxnREFBZ0QsUUFBUTtBQUNyRSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRTtBQUNiLE9BQU8sR0FBRztBQUNWLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsNkJBQTZCLG1EQUFtRDtBQUNoRixXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLGdFQUFnRTtBQUNoRSxXQUFXLEVBQUU7QUFDYixPQUFPLEdBQUc7QUFDVixLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asc0dBQXNHO0FBQ3RHLE9BQU87QUFDUCwwTEFBMEwsK0NBQStDLGVBQWUsMkRBQTJELEVBQUU7QUFDclQsT0FBTyx3Q0FBd0MsWUFBWSxFQUFFO0FBQzdELCtDQUErQyw4Q0FBOEM7QUFDN0YsMkNBQTJDO0FBQzNDLFNBQVMsaUNBQWlDLGNBQWM7QUFDeEQsT0FBTztBQUNQO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBGQUEwRjtBQUMvRyxTQUFTLDZCQUE2QjtBQUN0QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXLEVBQUUsV0FBVztBQUN4QjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsMkRBQTJEO0FBQzNELGFBQWE7QUFDYixtREFBbUQsU0FBUyxnQ0FBZ0Msd0RBQXdEO0FBQ3BKO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsNkJBQTZCO0FBQzdCLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsaUZBQWlGO0FBQ2pGLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHlCQUF5QixxRUFBcUU7QUFDOUYsdUNBQXVDO0FBQ3ZDO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixtREFBbUQsU0FBUyxtRkFBbUYsd0RBQXdEO0FBQ3ZNO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSx5Q0FBeUM7QUFDekMsV0FBVyxFQUFFLEdBQUc7QUFDaEIsaURBQWlELFNBQVMsZ0NBQWdDLHdEQUF3RDtBQUNsSixXQUFXLEVBQUU7QUFDYixPQUFPLGVBQWU7QUFDdEIsS0FBSyxHQUFHLDJFQUEyRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asc0dBQXNHO0FBQ3RHLE9BQU87QUFDUCwwTEFBMEwsK0NBQStDLGVBQWUsMkRBQTJELEVBQUU7QUFDclQsT0FBTyx3Q0FBd0MsWUFBWSxFQUFFO0FBQzdEO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsK0NBQStDLDhDQUE4QztBQUM3RiwyQ0FBMkM7QUFDM0MsU0FBUyxpQ0FBaUMsY0FBYztBQUN4RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdHQUFnRztBQUNySCxTQUFTLDZCQUE2QjtBQUN0QztBQUNBLDJDQUEyQztBQUMzQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVcsRUFBRSxXQUFXO0FBQ3hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsa0RBQWtELGNBQWMsc0ZBQXNGLDBDQUEwQyx5QkFBeUIseUNBQXlDO0FBQ2xRLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsYUFBYTtBQUNiLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsNkJBQTZCO0FBQzdCO0FBQ0EsNkVBQTZFO0FBQzdFLGVBQWU7QUFDZixnTEFBZ0wsd0RBQXdELG9DQUFvQztBQUM1USxlQUFlO0FBQ2Y7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLGtNQUFrTTtBQUNsTSw4REFBOEQ7QUFDOUQ7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixpRkFBaUY7QUFDakYsV0FBVyxFQUFFLEdBQUc7QUFDaEIsaURBQWlEO0FBQ2pELHlCQUF5QixnR0FBZ0cscURBQXFELHdDQUF3QyxtREFBbUQsdURBQXVEO0FBQ2hVLFdBQVcsRUFBRTtBQUNiLE9BQU8sZUFBZTtBQUN0QixLQUFLLEdBQUcsMkVBQTJFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxzR0FBc0c7QUFDdEcsT0FBTztBQUNQLDBMQUEwTCwrQ0FBK0MsZUFBZSwyREFBMkQsRUFBRTtBQUNyVCxPQUFPLHdDQUF3QyxZQUFZLEVBQUU7QUFDN0Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSwrQ0FBK0MsOENBQThDO0FBQzdGLDJDQUEyQztBQUMzQyxTQUFTLGlDQUFpQyxjQUFjO0FBQ3hELE9BQU87QUFDUDtBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkZBQTZGO0FBQ2xILFNBQVMsNkJBQTZCO0FBQ3RDO0FBQ0Esd0ZBQXdGLDZCQUE2QjtBQUNySCxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVcsRUFBRSxXQUFXO0FBQ3hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixvRkFBb0YsY0FBYyxnS0FBZ0ssMENBQTBDLGdDQUFnQyxpREFBaUQsOEhBQThILHlDQUF5QztBQUNwaUIsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FLGlCQUFpQiw4Q0FBOEM7QUFDL0Qsc0NBQXNDO0FBQ3RDO0FBQ0EsZUFBZTtBQUNmLDhLQUE4Syx3REFBd0Qsb0NBQW9DO0FBQzFRO0FBQ0EsYUFBYTtBQUNiLHVEQUF1RCxtQkFBbUI7QUFDMUU7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixpREFBaUQ7QUFDakQscUJBQXFCLG9EQUFvRCx3REFBd0Q7QUFDakksV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSw2QkFBNkIsdURBQXVELDBDQUEwQyx3Q0FBd0MscURBQXFEO0FBQzNOLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsNkZBQTZGLFNBQVMsOERBQThEO0FBQ3BLO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixpREFBaUQ7QUFDakQseUJBQXlCLDRHQUE0RywyQ0FBMkMsd0NBQXdDLG1EQUFtRCx1REFBdUQ7QUFDbFUsV0FBVyxFQUFFO0FBQ2IsT0FBTyxlQUFlO0FBQ3RCLEtBQUssR0FBRywyRUFBMkU7QUFDbkY7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1Asc0dBQXNHO0FBQ3RHLE9BQU87QUFDUCwwTEFBMEwsK0NBQStDLGVBQWUsMkRBQTJELEVBQUU7QUFDclQsT0FBTyx3Q0FBd0MsWUFBWSxFQUFFO0FBQzdEO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsK0NBQStDLDhDQUE4QztBQUM3RiwyQ0FBMkM7QUFDM0MsU0FBUyxpQ0FBaUMsY0FBYztBQUN4RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEZBQTBGO0FBQy9HLFNBQVMsNkJBQTZCO0FBQ3RDO0FBQ0EsMkNBQTJDO0FBQzNDLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVyxFQUFFLFdBQVc7QUFDeEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQiw2RkFBNkYsV0FBVyxpUUFBaVEsa0JBQWtCO0FBQzNYLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQSwwQkFBMEIsNkpBQTZKLGlCQUFpQjtBQUN4TSxXQUFXLEVBQUUsR0FBRztBQUNoQixxQ0FBcUMsY0FBYyxnS0FBZ0ssMENBQTBDLGdDQUFnQyx5Q0FBeUM7QUFDdFUsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLDZCQUE2QjtBQUM3QjtBQUNBLDZFQUE2RTtBQUM3RSxlQUFlO0FBQ2YscURBQXFEO0FBQ3JELGVBQWU7QUFDZiwyS0FBMkssd0RBQXdELG9DQUFvQztBQUN2UTtBQUNBO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQix3RkFBd0YsZ0JBQWdCO0FBQ3hHLGlCQUFpQiwwTEFBMEw7QUFDM00sZUFBZSx3Q0FBd0M7QUFDdkQ7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQkFBMEIsTUFBTSxRQUFRO0FBQzlELG9HQUFvRztBQUNwRztBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0Esd0ZBQXdGLHlCQUF5QiwwQ0FBMEM7QUFDM0osZ0RBQWdEO0FBQ2hELGVBQWU7QUFDZiw4REFBOEQscUNBQXFDLFdBQVc7QUFDOUc7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixpREFBaUQ7QUFDakQseUJBQXlCLHdJQUF3SSw4Q0FBOEMsd0NBQXdDLG1EQUFtRCx1REFBdUQ7QUFDalcsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUU7QUFDYixPQUFPLGVBQWU7QUFDdEIsS0FBSyxHQUFHLHFHQUFxRztBQUM3RztBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLE9BQU87QUFDUDtBQUNBLE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdVdBQXVXLHlEQUF5RCw4TkFBOE4sNmRBQTZkLCtIQUErSDtBQUMxdEMsU0FBUyxjQUFjO0FBQ3ZCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIseUJBQXlCO0FBQ3pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQix5QkFBeUIsK0dBQStHLHlIQUF5SDtBQUNqUSxpSUFBaUk7QUFDakk7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2YsK0VBQStFLG1CQUFtQjtBQUNsRyxlQUFlO0FBQ2Ysd0ZBQXdGO0FBQ3hGLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZix5SEFBeUg7QUFDekgsZUFBZTtBQUNmO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsdUdBQXVHO0FBQ3ZHO0FBQ0Esc0JBQXNCO0FBQ3RCLG1FQUFtRTtBQUNuRSxhQUFhLHVLQUF1SztBQUNwTCxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLHlHQUF5RyxjQUFjO0FBQ3ZIO0FBQ0EsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQjtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQix3R0FBd0csY0FBYztBQUN0SDtBQUNBLCtCQUErQjtBQUMvQiwwRUFBMEU7QUFDMUU7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEIsNERBQTRELGNBQWM7QUFDMUU7QUFDQSwrQkFBK0I7QUFDL0IsYUFBYTtBQUNiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsMkRBQTJEO0FBQzNELGFBQWEscUVBQXFFO0FBQ2xGO0FBQ0EsNkVBQTZFO0FBQzdFLGVBQWUsb0VBQW9FO0FBQ25GLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLHFEQUFxRDtBQUNyRCxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEIsdUNBQXVDO0FBQ3ZDLGlDQUFpQztBQUNqQyxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLGdEQUFnRCxrRUFBa0U7QUFDbEgsaUNBQWlDO0FBQ2pDLGFBQWE7QUFDYjtBQUNBLDZFQUE2RTtBQUM3RSxlQUFlO0FBQ2YsYUFBYSx5QkFBeUIsd0NBQXdDO0FBQzlFLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLG1DQUFtQztBQUNuQyxXQUFXLEVBQUUsR0FBRztBQUNoQiw2RUFBNkUsMEZBQTBGO0FBQ3ZLLFdBQVcsRUFBRTtBQUNiLE9BQU8sR0FBRztBQUNWLEtBQUssR0FBRyxvU0FBb1M7QUFDNVM7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxPQUFPO0FBQ1A7QUFDQSxPQUFPLHdDQUF3QyxZQUFZLEVBQUU7QUFDN0Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtWEFBbVgsMklBQTJJLFVBQVUsd0RBQXdEO0FBQ2hrQixTQUFTLGNBQWM7QUFDdkI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQix5QkFBeUI7QUFDekI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIsMkhBQTJIO0FBQzNILFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLHFCQUFxQiw0Q0FBNEM7QUFDakUsV0FBVyxFQUFFLEdBQUc7QUFDaEIscUJBQXFCLDBEQUEwRCxnRUFBZ0U7QUFDL0k7QUFDQSxzQkFBc0I7QUFDdEIsbUVBQW1FO0FBQ25FLGFBQWEsdUtBQXVLO0FBQ3BMLFdBQVcsRUFBRTtBQUNiLE9BQU8sR0FBRztBQUNWLEtBQUssR0FBRyxzRkFBc0Y7QUFDOUY7QUFDQSw4Q0FBOEMsWUFBWSwwQ0FBMEM7QUFDcEc7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxPQUFPLElBQUksZ0JBQWdCLHNGQUFzRixvQkFBb0I7QUFDckksS0FBSyxHQUFHLHdEQUF3RDtBQUNoRTtBQUNBLDhDQUE4QyxZQUFZLEVBQUUsU0FBUyxrUEFBa1A7QUFDdlQsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0MsWUFBWSxFQUFFO0FBQzdEO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0I7QUFDQSw0RUFBNEUsd0VBQXdFLHlGQUF5Riw0R0FBNEcsd0hBQXdIO0FBQ2pkLGFBQWE7QUFDYixnU0FBZ1MsaVJBQWlSO0FBQ2pqQixhQUFhO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsT0FBTyxHQUFHO0FBQ1YsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0MsWUFBWSxFQUFFO0FBQzdEO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsdUJBQXVCLGtXQUFrVztBQUN6WDtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHdHQUF3RyxPQUFPO0FBQy9HO0FBQ0EsYUFBYSx1SEFBdUgsc0JBQXNCLE9BQU87QUFDaks7QUFDQSxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLCtCQUErQjtBQUMvQixXQUFXLEVBQUUsR0FBRztBQUNoQix5QkFBeUI7QUFDekIsV0FBVyxFQUFFLEdBQUc7QUFDaEIseUJBQXlCO0FBQ3pCLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQSw0SUFBNEk7QUFDNUksV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBLDRJQUE0STtBQUM1SSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBO0FBQ0Esb0tBQW9LO0FBQ3BLLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLDZVQUE2VTtBQUM3VSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EseUpBQXlKO0FBQ3pKLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEIseUdBQXlHO0FBQ3pHLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLHlGQUF5RixPQUFPO0FBQ2hHLGlDQUFpQztBQUNqQyxhQUFhO0FBQ2IsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG9KQUFvSixlQUFlLE9BQU87QUFDaE47QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLGFBQWE7QUFDYixXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRTtBQUNiLE9BQU8sR0FBRztBQUNWLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsT0FBTztBQUNQO0FBQ0EsT0FBTyx3Q0FBd0MsWUFBWSxFQUFFO0FBQzdEO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGNBQWM7QUFDdkI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixvSUFBb0k7QUFDcEksV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBLDRCQUE0Qix1S0FBdUs7QUFDbk0sd0NBQXdDO0FBQ3hDLGFBQWEscUhBQXFILHdCQUF3Qix1RkFBdUY7QUFDalAsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBO0FBQ0EscUJBQXFCLG1FQUFtRSxzREFBc0QsU0FBUyxtRUFBbUU7QUFDMU4sV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQXNELGFBQWE7QUFDN0YsdURBQXVEO0FBQ3ZELGlCQUFpQixnREFBZ0QsaUNBQWlDLG1EQUFtRCxnTEFBZ0w7QUFDclUsNEVBQTRFO0FBQzVFLDZEQUE2RCxrQkFBa0IsK0JBQStCO0FBQzlHLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakI7QUFDQSw2RUFBNkU7QUFDN0Usa0hBQWtIO0FBQ2xIO0FBQ0EsNkNBQTZDLDZGQUE2RiwwQkFBMEI7QUFDcEs7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCLHVCQUF1QixjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0IsVUFBVTtBQUM5RDtBQUNBLG1CQUFtQjtBQUNuQixzREFBc0Q7QUFDdEQsbUJBQW1CLG1FQUFtRTtBQUN0RiwrQkFBK0I7QUFDL0IsMkJBQTJCO0FBQzNCO0FBQ0Esa0NBQWtDLDBRQUEwUSw4RkFBOEYsdU1BQXVNLGVBQWUsT0FBTztBQUN2bUIsNENBQTRDO0FBQzVDLGdEQUFnRDtBQUNoRCx1QkFBdUIsU0FBUywyRkFBMkYsZ0VBQWdFLEdBQUc7QUFDOUwscUJBQXFCLHdCQUF3QjtBQUM3QyxtQkFBbUIsUUFBUSxxR0FBcUcsZ0VBQWdFLEVBQUU7QUFDbE0saUJBQWlCLHdLQUF3SyxlQUFlLGNBQWM7QUFDdE4sb0NBQW9DO0FBQ3BDLGlCQUFpQix3QkFBd0IsK0NBQStDLGlDQUFpQyxtWkFBbVosYUFBYSw4RUFBOEUsVUFBVSxzRkFBc0Y7QUFDdnNCO0FBQ0E7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsdURBQXVEO0FBQ3ZELGlCQUFpQixnREFBZ0QsaUNBQWlDLG1EQUFtRCxxREFBcUQ7QUFDMU0sNEVBQTRFO0FBQzVFLDZEQUE2RCxrQkFBa0IsK0JBQStCO0FBQzlHLG1CQUFtQjtBQUNuQixpQkFBaUIscURBQXFELGNBQWM7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyQkFBMkIsVUFBVTtBQUNyRTtBQUNBLG1CQUFtQjtBQUNuQixzREFBc0Q7QUFDdEQsbUJBQW1CLG1HQUFtRztBQUN0SCxpRUFBaUU7QUFDakUsbUJBQW1CLFFBQVEsNkdBQTZHLHNHQUFzRyxFQUFFO0FBQ2hQLGlCQUFpQiwwSUFBMEksZUFBZSxjQUFjO0FBQ3hMLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6QyxxQ0FBcUM7QUFDckMsaUJBQWlCLDZCQUE2Qiw2REFBNkQscUZBQXFGO0FBQ2hNO0FBQ0E7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQixnRUFBZ0U7QUFDaEUsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRTtBQUNiLE9BQU8sR0FBRztBQUNWLEtBQUssR0FBRyx3S0FBd0s7QUFDaEw7QUFDQSw4Q0FBOEMsWUFBWSxFQUFFLFdBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZIQUE2SDtBQUM5SSxtQkFBbUI7QUFDbkIsNEJBQTRCLGtDQUFrQyxhQUFhLHlEQUF5RDtBQUNwSSxTQUFTLG9ZQUFvWTtBQUM3WTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBLHNHQUFzRztBQUN0RyxPQUFPO0FBQ1AsMExBQTBMLCtDQUErQyxlQUFlLDJEQUEyRCxFQUFFO0FBQ3JULE9BQU87QUFDUDtBQUNBLE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUU7QUFDYixPQUFPLEdBQUc7QUFDVjtBQUNBO0FBQ0EsU0FBUyx1QkFBdUI7QUFDaEM7QUFDQSxXQUFXLEVBQUU7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsdUJBQXVCO0FBQ2hDO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTLHVCQUF1QjtBQUNoQztBQUNBLFdBQVcsRUFBRTtBQUNiLE9BQU87QUFDUCxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdDQUF3QyxZQUFZLEVBQUU7QUFDN0Q7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QiwyREFBMkQsNkJBQTZCO0FBQ3hGLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLDJEQUEyRCw2QkFBNkI7QUFDeEYsV0FBVyxFQUFFLEdBQUc7QUFDaEIsMkRBQTJELDZCQUE2QjtBQUN4RixXQUFXLEVBQUUsR0FBRztBQUNoQiwyREFBMkQsNkJBQTZCO0FBQ3hGLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLDJEQUEyRCw2QkFBNkI7QUFDeEYsV0FBVyxFQUFFO0FBQ2IsT0FBTyxHQUFHO0FBQ1YsS0FBSyxHQUFHLFlBQVk7QUFDcEI7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxPQUFPO0FBQ1A7QUFDQSxPQUFPLHdDQUF3QyxZQUFZLEVBQUU7QUFDN0Q7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qyx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLG9CQUFvQjtBQUNwQixXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCLDhCQUE4QjtBQUM5QixvQ0FBb0M7QUFDcEM7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUUsR0FBRztBQUNoQjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVcsRUFBRSxHQUFHO0FBQ2hCO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVyxFQUFFLEdBQUc7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXLEVBQUU7QUFDYixPQUFPLEdBQUc7QUFDVixLQUFLLEdBQUcsK0JBQStCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0NBQXdDLFlBQVksRUFBRTtBQUM3RDtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZ0hBQWdILDhCQUE4QixzQkFBc0I7QUFDcEsscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVcsRUFBRTtBQUNiLE9BQU8sR0FBRztBQUNWLEtBQUssR0FBRyxtQkFBbUI7QUFDM0I7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixnQkFBZ0IsS0FBSztBQUNyQjtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLG9EQUFvRCxPQUFPO0FBQzNELGlFQUFpRTtBQUNqRSw2QkFBNkI7QUFDN0I7QUFDQSx5REFBeUQ7QUFDekQsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxpRkFBaUY7QUFDakYsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isc0dBQXNHO0FBQ3RHLGlJQUFpSTtBQUNqSTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxPQUFPLHdDQUF3QyxZQUFZO0FBQzNELEtBQUssSUFBSSxHQUFHLElBQUk7QUFDaEIsQ0FBQztBQUNELG1DIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZ2xvYmFsXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkge1xuXHQvLyB0aGUgb25seSByZWxpYWJsZSBtZWFucyB0byBnZXQgdGhlIGdsb2JhbCBvYmplY3QgaXNcblx0Ly8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXG5cdC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxuXHRpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9XG5cdGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9XG5cdHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XG59XG5cbnZhciBnbG9iYWwgPSBnZXRHbG9iYWwoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZ2xvYmFsLmZldGNoO1xuXG4vLyBOZWVkZWQgZm9yIFR5cGVTY3JpcHQgYW5kIFdlYnBhY2suXG5pZiAoZ2xvYmFsLmZldGNoKSB7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IGdsb2JhbC5mZXRjaC5iaW5kKGdsb2JhbCk7XG59XG5cbmV4cG9ydHMuSGVhZGVycyA9IGdsb2JhbC5IZWFkZXJzO1xuZXhwb3J0cy5SZXF1ZXN0ID0gZ2xvYmFsLlJlcXVlc3Q7XG5leHBvcnRzLlJlc3BvbnNlID0gZ2xvYmFsLlJlc3BvbnNlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9SZWFjdEZsdlBsYXllciA9IHJlcXVpcmUoJy4vd3JhcHBlci9SZWFjdEZsdlBsYXllcicpO1xuXG52YXIgX1JlYWN0Rmx2UGxheWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlYWN0Rmx2UGxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJlYWN0Rmx2UGxheWVyOiBfUmVhY3RGbHZQbGF5ZXIyLmRlZmF1bHRcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZmx2ID0gcmVxdWlyZSgnLi9mbHYubWluJyk7XG5cbnZhciBfZmx2MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zsdik7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdEZsdlBsYXllciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZWFjdEZsdlBsYXllciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVhY3RGbHZQbGF5ZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhY3RGbHZQbGF5ZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlYWN0Rmx2UGxheWVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVhY3RGbHZQbGF5ZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5teVJlZiA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5mbHZQbGF5ZXJSZWYgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgX3RoaXMuZmx2UGxheWVyUmVmID0gZWxlbWVudDtcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZWFjdEZsdlBsYXllciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdHlwZSA9IF9wcm9wcy50eXBlLFxuICAgICAgICAgIHVybCA9IF9wcm9wcy51cmwsXG4gICAgICAgICAgaXNMaXZlID0gX3Byb3BzLmlzTGl2ZSxcbiAgICAgICAgICBlbmFibGVTdGFzaEJ1ZmZlciA9IF9wcm9wcy5lbmFibGVTdGFzaEJ1ZmZlcixcbiAgICAgICAgICBzdGFzaEluaXRpYWxTaXplID0gX3Byb3BzLnN0YXNoSW5pdGlhbFNpemUsXG4gICAgICAgICAgaGFzQXVkaW8gPSBfcHJvcHMuaGFzQXVkaW8sXG4gICAgICAgICAgaGFzVmlkZW8gPSBfcHJvcHMuaGFzVmlkZW8sXG4gICAgICAgICAgaGFuZGxlRXJyb3IgPSBfcHJvcHMuaGFuZGxlRXJyb3IsXG4gICAgICAgICAgZW5hYmxlV2FybmluZyA9IF9wcm9wcy5lbmFibGVXYXJuaW5nLFxuICAgICAgICAgIGVuYWJsZUVycm9yID0gX3Byb3BzLmVuYWJsZUVycm9yO1xuXG4gICAgICAvLyDnu4Tku7bmjILovb3lkI7vvIzmi7/liLBSZWbov5vooYzmk43kvZxcblxuICAgICAgaWYgKF9mbHYyLmRlZmF1bHQuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICB2YXIgZmx2UGxheWVyID0gX2ZsdjIuZGVmYXVsdC5jcmVhdGVQbGF5ZXIoe1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgaXNMaXZlOiBpc0xpdmUsXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgaGFzQXVkaW86IGhhc0F1ZGlvLFxuICAgICAgICAgIGhhc1ZpZGVvOiBoYXNWaWRlb1xuICAgICAgICB9LCB7XG4gICAgICAgICAgZW5hYmxlU3Rhc2hCdWZmZXI6IGVuYWJsZVN0YXNoQnVmZmVyLFxuICAgICAgICAgIHN0YXNoSW5pdGlhbFNpemU6IHN0YXNoSW5pdGlhbFNpemVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2ZsdjIuZGVmYXVsdC5Mb2dnaW5nQ29udHJvbC5lbmFibGVFcnJvciA9IGZhbHNlO1xuICAgICAgICBfZmx2Mi5kZWZhdWx0LkxvZ2dpbmdDb250cm9sLmVuYWJsZVdhcm4gPSBlbmFibGVXYXJuaW5nO1xuXG4gICAgICAgIGZsdlBsYXllci5hdHRhY2hNZWRpYUVsZW1lbnQodGhpcy5teVJlZi5jdXJyZW50KTsgLy8g5bCG6L+Z5LiqRE9N5LuY57uZ56ys5LiJ5pa55bqTXG4gICAgICAgIGZsdlBsYXllci5sb2FkKCk7XG4gICAgICAgIGZsdlBsYXllci5wbGF5KCk7XG4gICAgICAgIGZsdlBsYXllci5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaGVpZ2h0ID0gX3Byb3BzMi5oZWlnaHQsXG4gICAgICAgICAgd2lkdGggPSBfcHJvcHMyLndpZHRoLFxuICAgICAgICAgIGlzTXV0ZWQgPSBfcHJvcHMyLmlzTXV0ZWQ7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCd2aWRlbycsIHtcbiAgICAgICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgICAgICBtdXRlZDogeyBpc011dGVkOiBpc011dGVkIH0sXG4gICAgICAgICAgcmVmOiB0aGlzLm15UmVmLFxuICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGggfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVhY3RGbHZQbGF5ZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SZWFjdEZsdlBsYXllci5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB1cmw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlzTGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBoYXNBdWRpbzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBoYXNWaWRlbzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBlbmFibGVTdGFzaEJ1ZmZlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzdGFzaEluaXRpYWxTaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBpc011dGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGVuYWJsZVdhcm5pbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZW5hYmxlRXJyb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgaGFuZGxlRXJyb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuUmVhY3RGbHZQbGF5ZXIuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnZmx2JyxcbiAgaXNMaXZlOiB0cnVlLFxuICBoYXNBdWRpbzogdHJ1ZSxcbiAgaGFzVmlkZW86IHRydWUsXG4gIGVuYWJsZVN0YXNoQnVmZmVyOiB0cnVlLFxuICBzdGFzaEluaXRpYWxTaXplOiAxMjgsXG4gIGhlaWdodDogJzEwMCUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBpc011dGVkOiBmYWxzZSxcbiAgaGFuZGxlRXJyb3I6IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH0sXG4gIGVuYWJsZVdhcm5pbmc6IGZhbHNlLFxuICBlbmFibGVFcnJvcjogZmFsc2Vcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWN0Rmx2UGxheWVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbiFmdW5jdGlvbiAoZSkge1xuICBpZiAoXCJvYmplY3RcIiA9PSAodHlwZW9mIGV4cG9ydHMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihleHBvcnRzKSkgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgbW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IGUoKTtlbHNlIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoW10sIGUpO2Vsc2Uge1xuICAgIHZhciB0O3QgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgPyB3aW5kb3cgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBnbG9iYWwgPyBnbG9iYWwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIHQuZmx2anMgPSBlKCk7XG4gIH1cbn0oZnVuY3Rpb24gKCkge1xuICB2YXIgZTtyZXR1cm4gZnVuY3Rpb24gZSh0LCBuLCBpKSB7XG4gICAgZnVuY3Rpb24gcihhLCBvKSB7XG4gICAgICBpZiAoIW5bYV0pIHtcbiAgICAgICAgaWYgKCF0W2FdKSB7XG4gICAgICAgICAgdmFyIHUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHJlcXVpcmUgJiYgcmVxdWlyZTtpZiAoIW8gJiYgdSkgcmV0dXJuIHUoYSwgITApO2lmIChzKSByZXR1cm4gcyhhLCAhMCk7dmFyIGwgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgYSArIFwiJ1wiKTt0aHJvdyBsLmNvZGUgPSBcIk1PRFVMRV9OT1RfRk9VTkRcIiwgbDtcbiAgICAgICAgfXZhciBkID0gblthXSA9IHsgZXhwb3J0czoge30gfTt0W2FdWzBdLmNhbGwoZC5leHBvcnRzLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciBuID0gdFthXVsxXVtlXTtyZXR1cm4gcihuIHx8IGUpO1xuICAgICAgICB9LCBkLCBkLmV4cG9ydHMsIGUsIHQsIG4sIGkpO1xuICAgICAgfXJldHVybiBuW2FdLmV4cG9ydHM7XG4gICAgfWZvciAodmFyIHMgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHJlcXVpcmUgJiYgcmVxdWlyZSwgYSA9IDA7IGEgPCBpLmxlbmd0aDsgYSsrKSB7XG4gICAgICByKGlbYV0pO1xuICAgIH1yZXR1cm4gcjtcbiAgfSh7IDE6IFtmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgKGZ1bmN0aW9uIChyLCBzKSB7XG4gICAgICAgICFmdW5jdGlvbiAodCwgcikge1xuICAgICAgICAgIFwib2JqZWN0XCIgPT0gKHR5cGVvZiBpID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoaSkpICYmIHZvaWQgMCAhPT0gbiA/IG4uZXhwb3J0cyA9IHIoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZSAmJiBlLmFtZCA/IGUocikgOiB0LkVTNlByb21pc2UgPSByKCk7XG4gICAgICAgIH0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICAgIGZ1bmN0aW9uIGUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGUpO3JldHVybiBudWxsICE9PSBlICYmIChcIm9iamVjdFwiID09PSB0IHx8IFwiZnVuY3Rpb25cIiA9PT0gdCk7XG4gICAgICAgICAgfWZ1bmN0aW9uIG4oZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZTtcbiAgICAgICAgICB9ZnVuY3Rpb24gaShlKSB7XG4gICAgICAgICAgICBWID0gZTtcbiAgICAgICAgICB9ZnVuY3Rpb24gYShlKSB7XG4gICAgICAgICAgICB6ID0gZTtcbiAgICAgICAgICB9ZnVuY3Rpb24gbygpIHtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IEcgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIEcobCk7XG4gICAgICAgICAgICB9IDogdSgpO1xuICAgICAgICAgIH1mdW5jdGlvbiB1KCkge1xuICAgICAgICAgICAgdmFyIGUgPSBzZXRUaW1lb3V0O3JldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlKGwsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9ZnVuY3Rpb24gbCgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgRjsgZSArPSAyKSB7XG4gICAgICAgICAgICAgICgwLCBZW2VdKShZW2UgKyAxXSksIFlbZV0gPSB2b2lkIDAsIFlbZSArIDFdID0gdm9pZCAwO1xuICAgICAgICAgICAgfUYgPSAwO1xuICAgICAgICAgIH1mdW5jdGlvbiBkKGUsIHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZik7dm9pZCAwID09PSBpW1FdICYmIEMoaSk7dmFyIHIgPSBuLl9zdGF0ZTtpZiAocikge1xuICAgICAgICAgICAgICB2YXIgcyA9IGFyZ3VtZW50c1tyIC0gMV07eihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHcociwgaSwgcywgbi5fcmVzdWx0KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgTChuLCBpLCBlLCB0KTtyZXR1cm4gaTtcbiAgICAgICAgICB9ZnVuY3Rpb24gaChlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXM7aWYgKGUgJiYgXCJvYmplY3RcIiA9PSAodHlwZW9mIGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlKSkgJiYgZS5jb25zdHJ1Y3RvciA9PT0gdCkgcmV0dXJuIGU7dmFyIG4gPSBuZXcgdChmKTtyZXR1cm4gRShuLCBlKSwgbjtcbiAgICAgICAgICB9ZnVuY3Rpb24gZigpIHt9ZnVuY3Rpb24gYygpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKTtcbiAgICAgICAgICB9ZnVuY3Rpb24gXygpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLlwiKTtcbiAgICAgICAgICB9ZnVuY3Rpb24gbShlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gZS50aGVuO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGUuZXJyb3IgPSBlLCB0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZnVuY3Rpb24gcChlLCB0LCBuLCBpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBlLmNhbGwodCwgbiwgaSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1mdW5jdGlvbiB2KGUsIHQsIG4pIHtcbiAgICAgICAgICAgIHooZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSAhMSxcbiAgICAgICAgICAgICAgICAgIHIgPSBwKG4sIHQsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgaSB8fCAoaSA9ICEwLCB0ICE9PSBuID8gRShlLCBuKSA6IFMoZSwgbikpO1xuICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGkgfHwgKGkgPSAhMCwgayhlLCB0KSk7XG4gICAgICAgICAgICAgIH0sIFwiU2V0dGxlOiBcIiArIChlLl9sYWJlbCB8fCBcIiB1bmtub3duIHByb21pc2VcIikpOyFpICYmIHIgJiYgKGkgPSAhMCwgayhlLCByKSk7XG4gICAgICAgICAgICB9LCBlKTtcbiAgICAgICAgICB9ZnVuY3Rpb24gZyhlLCB0KSB7XG4gICAgICAgICAgICB0Ll9zdGF0ZSA9PT0gJCA/IFMoZSwgdC5fcmVzdWx0KSA6IHQuX3N0YXRlID09PSBlZSA/IGsoZSwgdC5fcmVzdWx0KSA6IEwodCwgdm9pZCAwLCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICByZXR1cm4gRShlLCB0KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBrKGUsIHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfWZ1bmN0aW9uIHkoZSwgdCwgaSkge1xuICAgICAgICAgICAgdC5jb25zdHJ1Y3RvciA9PT0gZS5jb25zdHJ1Y3RvciAmJiBpID09PSBkICYmIHQuY29uc3RydWN0b3IucmVzb2x2ZSA9PT0gaCA/IGcoZSwgdCkgOiBpID09PSB0ZSA/IChrKGUsIHRlLmVycm9yKSwgdGUuZXJyb3IgPSBudWxsKSA6IHZvaWQgMCA9PT0gaSA/IFMoZSwgdCkgOiBuKGkpID8gdihlLCB0LCBpKSA6IFMoZSwgdCk7XG4gICAgICAgICAgfWZ1bmN0aW9uIEUodCwgbikge1xuICAgICAgICAgICAgdCA9PT0gbiA/IGsodCwgYygpKSA6IGUobikgPyB5KHQsIG4sIG0obikpIDogUyh0LCBuKTtcbiAgICAgICAgICB9ZnVuY3Rpb24gYihlKSB7XG4gICAgICAgICAgICBlLl9vbmVycm9yICYmIGUuX29uZXJyb3IoZS5fcmVzdWx0KSwgUihlKTtcbiAgICAgICAgICB9ZnVuY3Rpb24gUyhlLCB0KSB7XG4gICAgICAgICAgICBlLl9zdGF0ZSA9PT0gSiAmJiAoZS5fcmVzdWx0ID0gdCwgZS5fc3RhdGUgPSAkLCAwICE9PSBlLl9zdWJzY3JpYmVycy5sZW5ndGggJiYgeihSLCBlKSk7XG4gICAgICAgICAgfWZ1bmN0aW9uIGsoZSwgdCkge1xuICAgICAgICAgICAgZS5fc3RhdGUgPT09IEogJiYgKGUuX3N0YXRlID0gZWUsIGUuX3Jlc3VsdCA9IHQsIHooYiwgZSkpO1xuICAgICAgICAgIH1mdW5jdGlvbiBMKGUsIHQsIG4sIGkpIHtcbiAgICAgICAgICAgIHZhciByID0gZS5fc3Vic2NyaWJlcnMsXG4gICAgICAgICAgICAgICAgcyA9IHIubGVuZ3RoO2UuX29uZXJyb3IgPSBudWxsLCByW3NdID0gdCwgcltzICsgJF0gPSBuLCByW3MgKyBlZV0gPSBpLCAwID09PSBzICYmIGUuX3N0YXRlICYmIHooUiwgZSk7XG4gICAgICAgICAgfWZ1bmN0aW9uIFIoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLl9zdWJzY3JpYmVycyxcbiAgICAgICAgICAgICAgICBuID0gZS5fc3RhdGU7aWYgKDAgIT09IHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSB2b2lkIDAsIHIgPSB2b2lkIDAsIHMgPSBlLl9yZXN1bHQsIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGEgKz0gMykge1xuICAgICAgICAgICAgICAgIGkgPSB0W2FdLCByID0gdFthICsgbl0sIGkgPyB3KG4sIGksIHIsIHMpIDogcihzKTtcbiAgICAgICAgICAgICAgfWUuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWZ1bmN0aW9uIEEoZSwgdCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUodCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZS5lcnJvciA9IGUsIHRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1mdW5jdGlvbiB3KGUsIHQsIGksIHIpIHtcbiAgICAgICAgICAgIHZhciBzID0gbihpKSxcbiAgICAgICAgICAgICAgICBhID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgIG8gPSB2b2lkIDAsXG4gICAgICAgICAgICAgICAgdSA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBsID0gdm9pZCAwO2lmIChzKSB7XG4gICAgICAgICAgICAgIGlmIChhID0gQShpLCByKSwgYSA9PT0gdGUgPyAobCA9ICEwLCBvID0gYS5lcnJvciwgYS5lcnJvciA9IG51bGwpIDogdSA9ICEwLCB0ID09PSBhKSByZXR1cm4gdm9pZCBrKHQsIF8oKSk7XG4gICAgICAgICAgICB9IGVsc2UgYSA9IHIsIHUgPSAhMDt0Ll9zdGF0ZSAhPT0gSiB8fCAocyAmJiB1ID8gRSh0LCBhKSA6IGwgPyBrKHQsIG8pIDogZSA9PT0gJCA/IFModCwgYSkgOiBlID09PSBlZSAmJiBrKHQsIGEpKTtcbiAgICAgICAgICB9ZnVuY3Rpb24gVChlLCB0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgRShlLCB0KTtcbiAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBrKGUsIHQpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgICAgayhlLCB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZnVuY3Rpb24gTygpIHtcbiAgICAgICAgICAgIHJldHVybiBuZSsrO1xuICAgICAgICAgIH1mdW5jdGlvbiBDKGUpIHtcbiAgICAgICAgICAgIGVbUV0gPSBuZSsrLCBlLl9zdGF0ZSA9IHZvaWQgMCwgZS5fcmVzdWx0ID0gdm9pZCAwLCBlLl9zdWJzY3JpYmVycyA9IFtdO1xuICAgICAgICAgIH1mdW5jdGlvbiBJKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkFycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheVwiKTtcbiAgICAgICAgICB9ZnVuY3Rpb24gRChlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGllKHRoaXMsIGUpLnByb21pc2U7XG4gICAgICAgICAgfWZ1bmN0aW9uIHgoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO3JldHVybiBuZXcgdChOKGUpID8gZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgciA9IGUubGVuZ3RoLCBzID0gMDsgcyA8IHI7IHMrKykge1xuICAgICAgICAgICAgICAgIHQucmVzb2x2ZShlW3NdKS50aGVuKG4sIGkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQobmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS5cIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfWZ1bmN0aW9uIE0oZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLFxuICAgICAgICAgICAgICAgIG4gPSBuZXcgdChmKTtyZXR1cm4gayhuLCBlKSwgbjtcbiAgICAgICAgICB9ZnVuY3Rpb24gQigpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgIH1mdW5jdGlvbiBqKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgICB9ZnVuY3Rpb24gUCgpIHtcbiAgICAgICAgICAgIHZhciBlID0gdm9pZCAwO2lmICh2b2lkIDAgIT09IHMpIGUgPSBzO2Vsc2UgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHNlbGYpIGUgPSBzZWxmO2Vsc2UgdHJ5IHtcbiAgICAgICAgICAgICAgZSA9IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50XCIpO1xuICAgICAgICAgICAgfXZhciB0ID0gZS5Qcm9taXNlO2lmICh0KSB7XG4gICAgICAgICAgICAgIHZhciBuID0gbnVsbDt0cnkge1xuICAgICAgICAgICAgICAgIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodC5yZXNvbHZlKCkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fWlmIChcIltvYmplY3QgUHJvbWlzZV1cIiA9PT0gbiAmJiAhdC5jYXN0KSByZXR1cm47XG4gICAgICAgICAgICB9ZS5Qcm9taXNlID0gcmU7XG4gICAgICAgICAgfXZhciBVID0gdm9pZCAwO1UgPSBBcnJheS5pc0FycmF5ID8gQXJyYXkuaXNBcnJheSA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk7XG4gICAgICAgICAgfTt2YXIgTiA9IFUsXG4gICAgICAgICAgICAgIEYgPSAwLFxuICAgICAgICAgICAgICBHID0gdm9pZCAwLFxuICAgICAgICAgICAgICBWID0gdm9pZCAwLFxuICAgICAgICAgICAgICB6ID0gZnVuY3Rpb24geihlLCB0KSB7XG4gICAgICAgICAgICBZW0ZdID0gZSwgWVtGICsgMV0gPSB0LCAyID09PSAoRiArPSAyKSAmJiAoViA/IFYobCkgOiBaKCkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIEggPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgPyB3aW5kb3cgOiB2b2lkIDAsXG4gICAgICAgICAgICAgIEsgPSBIIHx8IHt9LFxuICAgICAgICAgICAgICBxID0gSy5NdXRhdGlvbk9ic2VydmVyIHx8IEsuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixcbiAgICAgICAgICAgICAgVyA9IFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHNlbGYgJiYgdm9pZCAwICE9PSByICYmIFwiW29iamVjdCBwcm9jZXNzXVwiID09PSB7fS50b1N0cmluZy5jYWxsKHIpLFxuICAgICAgICAgICAgICBYID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyAmJiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCxcbiAgICAgICAgICAgICAgWSA9IG5ldyBBcnJheSgxZTMpLFxuICAgICAgICAgICAgICBaID0gdm9pZCAwO1ogPSBXID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHIubmV4dFRpY2sobCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0oKSA6IHEgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IDAsXG4gICAgICAgICAgICAgICAgdCA9IG5ldyBxKGwpLFxuICAgICAgICAgICAgICAgIG4gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtyZXR1cm4gdC5vYnNlcnZlKG4sIHsgY2hhcmFjdGVyRGF0YTogITAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbi5kYXRhID0gZSA9ICsrZSAlIDI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0oKSA6IFggPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO3JldHVybiBlLnBvcnQxLm9ubWVzc2FnZSA9IGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0oKSA6IHZvaWQgMCA9PT0gSCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgZSA9IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKS5yZXF1aXJlKFwidmVydHhcIik7cmV0dXJuIEcgPSBlLnJ1bk9uTG9vcCB8fCBlLnJ1bk9uQ29udGV4dCwgbygpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0oKSA6IHUoKTt2YXIgUSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKSxcbiAgICAgICAgICAgICAgSiA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgJCA9IDEsXG4gICAgICAgICAgICAgIGVlID0gMixcbiAgICAgICAgICAgICAgdGUgPSB7IGVycm9yOiBudWxsIH0sXG4gICAgICAgICAgICAgIG5lID0gMCxcbiAgICAgICAgICAgICAgaWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IGUsIHRoaXMucHJvbWlzZSA9IG5ldyBlKGYpLCB0aGlzLnByb21pc2VbUV0gfHwgQyh0aGlzLnByb21pc2UpLCBOKHQpID8gKHRoaXMubGVuZ3RoID0gdC5sZW5ndGgsIHRoaXMuX3JlbWFpbmluZyA9IHQubGVuZ3RoLCB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpLCAwID09PSB0aGlzLmxlbmd0aCA/IFModGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpIDogKHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMCwgdGhpcy5fZW51bWVyYXRlKHQpLCAwID09PSB0aGlzLl9yZW1haW5pbmcgJiYgUyh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCkpKSA6IGsodGhpcy5wcm9taXNlLCBJKCkpO1xuICAgICAgICAgICAgfXJldHVybiBlLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHRoaXMuX3N0YXRlID09PSBKICYmIHQgPCBlLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWFjaEVudHJ5KGVbdF0sIHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBlLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgICAgICAgaSA9IG4ucmVzb2x2ZTtpZiAoaSA9PT0gaCkge1xuICAgICAgICAgICAgICAgIHZhciByID0gbShlKTtpZiAociA9PT0gZCAmJiBlLl9zdGF0ZSAhPT0gSikgdGhpcy5fc2V0dGxlZEF0KGUuX3N0YXRlLCB0LCBlLl9yZXN1bHQpO2Vsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgcikgdGhpcy5fcmVtYWluaW5nLS0sIHRoaXMuX3Jlc3VsdFt0XSA9IGU7ZWxzZSBpZiAobiA9PT0gcmUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzID0gbmV3IG4oZik7eShzLCBlLCByKSwgdGhpcy5fd2lsbFNldHRsZUF0KHMsIHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLl93aWxsU2V0dGxlQXQobmV3IG4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0KGUpO1xuICAgICAgICAgICAgICAgIH0pLCB0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuX3dpbGxTZXR0bGVBdChpKGUpLCB0KTtcbiAgICAgICAgICAgIH0sIGUucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMucHJvbWlzZTtpLl9zdGF0ZSA9PT0gSiAmJiAodGhpcy5fcmVtYWluaW5nLS0sIGUgPT09IGVlID8gayhpLCBuKSA6IHRoaXMuX3Jlc3VsdFt0XSA9IG4pLCAwID09PSB0aGlzLl9yZW1haW5pbmcgJiYgUyhpLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgIHZhciBuID0gdGhpcztMKGUsIHZvaWQgMCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbi5fc2V0dGxlZEF0KCQsIHQsIGUpO1xuICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuLl9zZXR0bGVkQXQoZWUsIHQsIGUpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGU7XG4gICAgICAgICAgfSgpLFxuICAgICAgICAgICAgICByZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGUodCkge1xuICAgICAgICAgICAgICB0aGlzW1FdID0gTygpLCB0aGlzLl9yZXN1bHQgPSB0aGlzLl9zdGF0ZSA9IHZvaWQgMCwgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXSwgZiAhPT0gdCAmJiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ICYmIEIoKSwgdGhpcyBpbnN0YW5jZW9mIGUgPyBUKHRoaXMsIHQpIDogaigpKTtcbiAgICAgICAgICAgIH1yZXR1cm4gZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIGUpO1xuICAgICAgICAgICAgfSwgZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgIGkgPSB0LmNvbnN0cnVjdG9yO3JldHVybiBuKGUpID8gdC50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkucmVzb2x2ZShlKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkucmVzb2x2ZShlKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkgOiB0LnRoZW4oZSwgZSk7XG4gICAgICAgICAgICB9LCBlO1xuICAgICAgICAgIH0oKTtyZXR1cm4gcmUucHJvdG90eXBlLnRoZW4gPSBkLCByZS5hbGwgPSBELCByZS5yYWNlID0geCwgcmUucmVzb2x2ZSA9IGgsIHJlLnJlamVjdCA9IE0sIHJlLl9zZXRTY2hlZHVsZXIgPSBpLCByZS5fc2V0QXNhcCA9IGEsIHJlLl9hc2FwID0geiwgcmUucG9seWZpbGwgPSBQLCByZS5Qcm9taXNlID0gcmUsIHJlO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhbGwodGhpcywgdChcIl9wcm9jZXNzXCIpLCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBnbG9iYWwgPyBnbG9iYWwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdyA6IHt9KTtcbiAgICB9LCB7IF9wcm9jZXNzOiAzIH1dLCAyOiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIGZ1bmN0aW9uIGkoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fSwgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHZvaWQgMDtcbiAgICAgIH1mdW5jdGlvbiByKGUpIHtcbiAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZTtcbiAgICAgIH1mdW5jdGlvbiBzKGUpIHtcbiAgICAgICAgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIGU7XG4gICAgICB9ZnVuY3Rpb24gYShlKSB7XG4gICAgICAgIHJldHVybiBcIm9iamVjdFwiID09ICh0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGUpKSAmJiBudWxsICE9PSBlO1xuICAgICAgfWZ1bmN0aW9uIG8oZSkge1xuICAgICAgICByZXR1cm4gdm9pZCAwID09PSBlO1xuICAgICAgfXQuZXhwb3J0cyA9IGksIGkuRXZlbnRFbWl0dGVyID0gaSwgaS5wcm90b3R5cGUuX2V2ZW50cyA9IHZvaWQgMCwgaS5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHZvaWQgMCwgaS5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTAsIGkucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghcyhlKSB8fCBlIDwgMCB8fCBpc05hTihlKSkgdGhyb3cgVHlwZUVycm9yKFwibiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO3JldHVybiB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBlLCB0aGlzO1xuICAgICAgfSwgaS5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0LCBuLCBpLCBzLCB1LCBsO2lmICh0aGlzLl9ldmVudHMgfHwgKHRoaXMuX2V2ZW50cyA9IHt9KSwgXCJlcnJvclwiID09PSBlICYmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8IGEodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgICAgICBpZiAoKHQgPSBhcmd1bWVudHNbMV0pIGluc3RhbmNlb2YgRXJyb3IpIHRocm93IHQ7dmFyIGQgPSBuZXcgRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuICgnICsgdCArIFwiKVwiKTt0aHJvdyBkLmNvbnRleHQgPSB0LCBkO1xuICAgICAgICB9aWYgKG4gPSB0aGlzLl9ldmVudHNbZV0sIG8obikpIHJldHVybiAhMTtpZiAocihuKSkgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7Y2FzZSAxOlxuICAgICAgICAgICAgbi5jYWxsKHRoaXMpO2JyZWFrO2Nhc2UgMjpcbiAgICAgICAgICAgIG4uY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO2JyZWFrO2Nhc2UgMzpcbiAgICAgICAgICAgIG4uY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7YnJlYWs7ZGVmYXVsdDpcbiAgICAgICAgICAgIHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBuLmFwcGx5KHRoaXMsIHMpO30gZWxzZSBpZiAoYShuKSkgZm9yIChzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgbCA9IG4uc2xpY2UoKSwgaSA9IGwubGVuZ3RoLCB1ID0gMDsgdSA8IGk7IHUrKykge1xuICAgICAgICAgIGxbdV0uYXBwbHkodGhpcywgcyk7XG4gICAgICAgIH1yZXR1cm4gITA7XG4gICAgICB9LCBpLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBuO2lmICghcih0KSkgdGhyb3cgVHlwZUVycm9yKFwibGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO3JldHVybiB0aGlzLl9ldmVudHMgfHwgKHRoaXMuX2V2ZW50cyA9IHt9KSwgdGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyICYmIHRoaXMuZW1pdChcIm5ld0xpc3RlbmVyXCIsIGUsIHIodC5saXN0ZW5lcikgPyB0Lmxpc3RlbmVyIDogdCksIHRoaXMuX2V2ZW50c1tlXSA/IGEodGhpcy5fZXZlbnRzW2VdKSA/IHRoaXMuX2V2ZW50c1tlXS5wdXNoKHQpIDogdGhpcy5fZXZlbnRzW2VdID0gW3RoaXMuX2V2ZW50c1tlXSwgdF0gOiB0aGlzLl9ldmVudHNbZV0gPSB0LCBhKHRoaXMuX2V2ZW50c1tlXSkgJiYgIXRoaXMuX2V2ZW50c1tlXS53YXJuZWQgJiYgKG4gPSBvKHRoaXMuX21heExpc3RlbmVycykgPyBpLmRlZmF1bHRNYXhMaXN0ZW5lcnMgOiB0aGlzLl9tYXhMaXN0ZW5lcnMpICYmIG4gPiAwICYmIHRoaXMuX2V2ZW50c1tlXS5sZW5ndGggPiBuICYmICh0aGlzLl9ldmVudHNbZV0ud2FybmVkID0gITAsIGNvbnNvbGUuZXJyb3IoXCIobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LlwiLCB0aGlzLl9ldmVudHNbZV0ubGVuZ3RoKSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBjb25zb2xlLnRyYWNlICYmIGNvbnNvbGUudHJhY2UoKSksIHRoaXM7XG4gICAgICB9LCBpLnByb3RvdHlwZS5vbiA9IGkucHJvdG90eXBlLmFkZExpc3RlbmVyLCBpLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgZnVuY3Rpb24gbigpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKGUsIG4pLCBpIHx8IChpID0gITAsIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICAgIH1pZiAoIXIodCkpIHRocm93IFR5cGVFcnJvcihcImxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvblwiKTt2YXIgaSA9ICExO3JldHVybiBuLmxpc3RlbmVyID0gdCwgdGhpcy5vbihlLCBuKSwgdGhpcztcbiAgICAgIH0sIGkucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgdmFyIG4sIGksIHMsIG87aWYgKCFyKHQpKSB0aHJvdyBUeXBlRXJyb3IoXCJsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7aWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1tlXSkgcmV0dXJuIHRoaXM7aWYgKG4gPSB0aGlzLl9ldmVudHNbZV0sIHMgPSBuLmxlbmd0aCwgaSA9IC0xLCBuID09PSB0IHx8IHIobi5saXN0ZW5lcikgJiYgbi5saXN0ZW5lciA9PT0gdCkgZGVsZXRlIHRoaXMuX2V2ZW50c1tlXSwgdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyICYmIHRoaXMuZW1pdChcInJlbW92ZUxpc3RlbmVyXCIsIGUsIHQpO2Vsc2UgaWYgKGEobikpIHtcbiAgICAgICAgICBmb3IgKG8gPSBzOyBvLS0gPiAwOykge1xuICAgICAgICAgICAgaWYgKG5bb10gPT09IHQgfHwgbltvXS5saXN0ZW5lciAmJiBuW29dLmxpc3RlbmVyID09PSB0KSB7XG4gICAgICAgICAgICAgIGkgPSBvO2JyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1pZiAoaSA8IDApIHJldHVybiB0aGlzOzEgPT09IG4ubGVuZ3RoID8gKG4ubGVuZ3RoID0gMCwgZGVsZXRlIHRoaXMuX2V2ZW50c1tlXSkgOiBuLnNwbGljZShpLCAxKSwgdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyICYmIHRoaXMuZW1pdChcInJlbW92ZUxpc3RlbmVyXCIsIGUsIHQpO1xuICAgICAgICB9cmV0dXJuIHRoaXM7XG4gICAgICB9LCBpLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCwgbjtpZiAoIXRoaXMuX2V2ZW50cykgcmV0dXJuIHRoaXM7aWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHJldHVybiAwID09PSBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy5fZXZlbnRzID0ge30gOiB0aGlzLl9ldmVudHNbZV0gJiYgZGVsZXRlIHRoaXMuX2V2ZW50c1tlXSwgdGhpcztpZiAoMCA9PT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAodCBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgICAgICAgIFwicmVtb3ZlTGlzdGVuZXJcIiAhPT0gdCAmJiB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyh0KTtcbiAgICAgICAgICB9cmV0dXJuIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKFwicmVtb3ZlTGlzdGVuZXJcIiksIHRoaXMuX2V2ZW50cyA9IHt9LCB0aGlzO1xuICAgICAgICB9aWYgKG4gPSB0aGlzLl9ldmVudHNbZV0sIHIobikpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZSwgbik7ZWxzZSBpZiAobikgZm9yICg7IG4ubGVuZ3RoOykge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoZSwgbltuLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfXJldHVybiBkZWxldGUgdGhpcy5fZXZlbnRzW2VdLCB0aGlzO1xuICAgICAgfSwgaS5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbZV0gPyByKHRoaXMuX2V2ZW50c1tlXSkgPyBbdGhpcy5fZXZlbnRzW2VdXSA6IHRoaXMuX2V2ZW50c1tlXS5zbGljZSgpIDogW107XG4gICAgICB9LCBpLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgICAgICAgIHZhciB0ID0gdGhpcy5fZXZlbnRzW2VdO2lmIChyKHQpKSByZXR1cm4gMTtpZiAodCkgcmV0dXJuIHQubGVuZ3RoO1xuICAgICAgICB9cmV0dXJuIDA7XG4gICAgICB9LCBpLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gZS5saXN0ZW5lckNvdW50KHQpO1xuICAgICAgfTtcbiAgICB9LCB7fV0sIDM6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgZnVuY3Rpb24gaSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKTtcbiAgICAgIH1mdW5jdGlvbiByKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIik7XG4gICAgICB9ZnVuY3Rpb24gcyhlKSB7XG4gICAgICAgIGlmIChoID09PSBzZXRUaW1lb3V0KSByZXR1cm4gc2V0VGltZW91dChlLCAwKTtpZiAoKGggPT09IGkgfHwgIWgpICYmIHNldFRpbWVvdXQpIHJldHVybiBoID0gc2V0VGltZW91dCwgc2V0VGltZW91dChlLCAwKTt0cnkge1xuICAgICAgICAgIHJldHVybiBoKGUsIDApO1xuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBoLmNhbGwobnVsbCwgZSwgMCk7XG4gICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgcmV0dXJuIGguY2FsbCh0aGlzLCBlLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1mdW5jdGlvbiBhKGUpIHtcbiAgICAgICAgaWYgKGYgPT09IGNsZWFyVGltZW91dCkgcmV0dXJuIGNsZWFyVGltZW91dChlKTtpZiAoKGYgPT09IHIgfHwgIWYpICYmIGNsZWFyVGltZW91dCkgcmV0dXJuIGYgPSBjbGVhclRpbWVvdXQsIGNsZWFyVGltZW91dChlKTt0cnkge1xuICAgICAgICAgIHJldHVybiBmKGUpO1xuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmLmNhbGwobnVsbCwgZSk7XG4gICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgcmV0dXJuIGYuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1mdW5jdGlvbiBvKCkge1xuICAgICAgICBwICYmIF8gJiYgKHAgPSAhMSwgXy5sZW5ndGggPyBtID0gXy5jb25jYXQobSkgOiB2ID0gLTEsIG0ubGVuZ3RoICYmIHUoKSk7XG4gICAgICB9ZnVuY3Rpb24gdSgpIHtcbiAgICAgICAgaWYgKCFwKSB7XG4gICAgICAgICAgdmFyIGUgPSBzKG8pO3AgPSAhMDtmb3IgKHZhciB0ID0gbS5sZW5ndGg7IHQ7KSB7XG4gICAgICAgICAgICBmb3IgKF8gPSBtLCBtID0gW107ICsrdiA8IHQ7KSB7XG4gICAgICAgICAgICAgIF8gJiYgX1t2XS5ydW4oKTtcbiAgICAgICAgICAgIH12ID0gLTEsIHQgPSBtLmxlbmd0aDtcbiAgICAgICAgICB9XyA9IG51bGwsIHAgPSAhMSwgYShlKTtcbiAgICAgICAgfVxuICAgICAgfWZ1bmN0aW9uIGwoZSwgdCkge1xuICAgICAgICB0aGlzLmZ1biA9IGUsIHRoaXMuYXJyYXkgPSB0O1xuICAgICAgfWZ1bmN0aW9uIGQoKSB7fXZhciBoLFxuICAgICAgICAgIGYsXG4gICAgICAgICAgYyA9IHQuZXhwb3J0cyA9IHt9OyFmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygc2V0VGltZW91dCA/IHNldFRpbWVvdXQgOiBpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaCA9IGk7XG4gICAgICAgIH10cnkge1xuICAgICAgICAgIGYgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGNsZWFyVGltZW91dCA/IGNsZWFyVGltZW91dCA6IHI7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBmID0gcjtcbiAgICAgICAgfVxuICAgICAgfSgpO3ZhciBfLFxuICAgICAgICAgIG0gPSBbXSxcbiAgICAgICAgICBwID0gITEsXG4gICAgICAgICAgdiA9IC0xO2MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSBmb3IgKHZhciBuID0gMTsgbiA8IGFyZ3VtZW50cy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgIHRbbiAtIDFdID0gYXJndW1lbnRzW25dO1xuICAgICAgICB9bS5wdXNoKG5ldyBsKGUsIHQpKSwgMSAhPT0gbS5sZW5ndGggfHwgcCB8fCBzKHUpO1xuICAgICAgfSwgbC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbiAgICAgIH0sIGMudGl0bGUgPSBcImJyb3dzZXJcIiwgYy5icm93c2VyID0gITAsIGMuZW52ID0ge30sIGMuYXJndiA9IFtdLCBjLnZlcnNpb24gPSBcIlwiLCBjLnZlcnNpb25zID0ge30sIGMub24gPSBkLCBjLmFkZExpc3RlbmVyID0gZCwgYy5vbmNlID0gZCwgYy5vZmYgPSBkLCBjLnJlbW92ZUxpc3RlbmVyID0gZCwgYy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBkLCBjLmVtaXQgPSBkLCBjLnByZXBlbmRMaXN0ZW5lciA9IGQsIGMucHJlcGVuZE9uY2VMaXN0ZW5lciA9IGQsIGMubGlzdGVuZXJzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSwgYy5iaW5kaW5nID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICB9LCBjLmN3ZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiL1wiO1xuICAgICAgfSwgYy5jaGRpciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgIH0sIGMudW1hc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfTtcbiAgICB9LCB7fV0sIDQ6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgdmFyIGkgPSBhcmd1bWVudHNbM10sXG4gICAgICAgICAgciA9IGFyZ3VtZW50c1s0XSxcbiAgICAgICAgICBzID0gYXJndW1lbnRzWzVdLFxuICAgICAgICAgIGEgPSBKU09OLnN0cmluZ2lmeTt0LmV4cG9ydHMgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICBmdW5jdGlvbiBuKGUpIHtcbiAgICAgICAgICBwW2VdID0gITA7Zm9yICh2YXIgdCBpbiByW2VdWzFdKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHJbZV1bMV1bdF07cFtpXSB8fCBuKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfWZvciAodmFyIG8sIHUgPSBPYmplY3Qua2V5cyhzKSwgbCA9IDAsIGQgPSB1Lmxlbmd0aDsgbCA8IGQ7IGwrKykge1xuICAgICAgICAgIHZhciBoID0gdVtsXSxcbiAgICAgICAgICAgICAgZiA9IHNbaF0uZXhwb3J0cztpZiAoZiA9PT0gZSB8fCBmICYmIGYuZGVmYXVsdCA9PT0gZSkge1xuICAgICAgICAgICAgbyA9IGg7YnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9aWYgKCFvKSB7XG4gICAgICAgICAgbyA9IE1hdGguZmxvb3IoTWF0aC5wb3coMTYsIDgpICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMTYpO2ZvciAodmFyIGMgPSB7fSwgbCA9IDAsIGQgPSB1Lmxlbmd0aDsgbCA8IGQ7IGwrKykge1xuICAgICAgICAgICAgdmFyIGggPSB1W2xdO2NbaF0gPSBoO1xuICAgICAgICAgIH1yW29dID0gW1wiZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XCIgKyBlICsgXCIoc2VsZik7IH1cIiwgY107XG4gICAgICAgIH12YXIgXyA9IE1hdGguZmxvb3IoTWF0aC5wb3coMTYsIDgpICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMTYpLFxuICAgICAgICAgICAgbSA9IHt9O21bb10gPSBvLCByW19dID0gW1wiZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7dmFyIGYgPSByZXF1aXJlKFwiICsgYShvKSArIFwiKTsoZi5kZWZhdWx0ID8gZi5kZWZhdWx0IDogZikoc2VsZik7fVwiLCBtXTt2YXIgcCA9IHt9O24oXyk7dmFyIHYgPSBcIihcIiArIGkgKyBcIikoe1wiICsgT2JqZWN0LmtleXMocCkubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGEoZSkgKyBcIjpbXCIgKyByW2VdWzBdICsgXCIsXCIgKyBhKHJbZV1bMV0pICsgXCJdXCI7XG4gICAgICAgIH0pLmpvaW4oXCIsXCIpICsgXCJ9LHt9LFtcIiArIGEoXykgKyBcIl0pXCIsXG4gICAgICAgICAgICBnID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdy5tb3pVUkwgfHwgd2luZG93Lm1zVVJMLFxuICAgICAgICAgICAgeSA9IG5ldyBCbG9iKFt2XSwgeyB0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiIH0pO2lmICh0ICYmIHQuYmFyZSkgcmV0dXJuIHk7dmFyIEUgPSBnLmNyZWF0ZU9iamVjdFVSTCh5KSxcbiAgICAgICAgICAgIGIgPSBuZXcgV29ya2VyKEUpO3JldHVybiBiLm9iamVjdFVSTCA9IEUsIGI7XG4gICAgICB9O1xuICAgIH0sIHt9XSwgNTogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGZ1bmN0aW9uIGkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pLCBuLmNyZWF0ZURlZmF1bHRDb25maWcgPSBpO3ZhciByID0gbi5kZWZhdWx0Q29uZmlnID0geyBlbmFibGVXb3JrZXI6ICExLCBlbmFibGVTdGFzaEJ1ZmZlcjogITAsIHN0YXNoSW5pdGlhbFNpemU6IHZvaWQgMCwgaXNMaXZlOiAhMSwgbGF6eUxvYWQ6ICEwLCBsYXp5TG9hZE1heER1cmF0aW9uOiAxODAsIGxhenlMb2FkUmVjb3ZlckR1cmF0aW9uOiAzMCwgZGVmZXJMb2FkQWZ0ZXJTb3VyY2VPcGVuOiAhMCwgYXV0b0NsZWFudXBNYXhCYWNrd2FyZER1cmF0aW9uOiAxODAsIGF1dG9DbGVhbnVwTWluQmFja3dhcmREdXJhdGlvbjogMTIwLCBzdGF0aXN0aWNzSW5mb1JlcG9ydEludGVydmFsOiA2MDAsIGZpeEF1ZGlvVGltZXN0YW1wR2FwOiAhMCwgYWNjdXJhdGVTZWVrOiAhMSwgc2Vla1R5cGU6IFwicmFuZ2VcIiwgc2Vla1BhcmFtU3RhcnQ6IFwiYnN0YXJ0XCIsIHNlZWtQYXJhbUVuZDogXCJiZW5kXCIsIHJhbmdlTG9hZFplcm9TdGFydDogITEsIGN1c3RvbVNlZWtIYW5kbGVyOiB2b2lkIDAsIHJldXNlUmVkaXJlY3RlZFVSTDogITEsIGhlYWRlcnM6IHZvaWQgMCwgY3VzdG9tTG9hZGVyOiB2b2lkIDAgfTtcbiAgICB9LCB7fV0sIDY6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIHIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0W25dO2kuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9cmV0dXJuIGZ1bmN0aW9uICh0LCBuLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIG4gJiYgZSh0LnByb3RvdHlwZSwgbiksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgfTtcbiAgICAgIH0oKSxcbiAgICAgICAgICBzID0gZShcIi4uL2lvL2lvLWNvbnRyb2xsZXIuanNcIiksXG4gICAgICAgICAgYSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH0ocyksXG4gICAgICAgICAgbyA9IGUoXCIuLi9jb25maWcuanNcIiksXG4gICAgICAgICAgdSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICBpKHRoaXMsIGUpO1xuICAgICAgICB9cmV0dXJuIHIoZSwgbnVsbCwgW3sga2V5OiBcInN1cHBvcnRNU0VIMjY0UGxheWJhY2tcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5NZWRpYVNvdXJjZSAmJiB3aW5kb3cuTWVkaWFTb3VyY2UuaXNUeXBlU3VwcG9ydGVkKCd2aWRlby9tcDQ7IGNvZGVjcz1cImF2YzEuNDJFMDFFLG1wNGEuNDAuMlwiJyk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJzdXBwb3J0TmV0d29ya1N0cmVhbUlPXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gbmV3IGEuZGVmYXVsdCh7fSwgKDAsIG8uY3JlYXRlRGVmYXVsdENvbmZpZykoKSksXG4gICAgICAgICAgICAgICAgdCA9IGUubG9hZGVyVHlwZTtyZXR1cm4gZS5kZXN0cm95KCksIFwiZmV0Y2gtc3RyZWFtLWxvYWRlclwiID09IHQgfHwgXCJ4aHItbW96LWNodW5rZWQtbG9hZGVyXCIgPT0gdDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImdldE5ldHdvcmtMb2FkZXJUeXBlTmFtZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBhLmRlZmF1bHQoe30sICgwLCBvLmNyZWF0ZURlZmF1bHRDb25maWcpKCkpLFxuICAgICAgICAgICAgICAgIHQgPSBlLmxvYWRlclR5cGU7cmV0dXJuIGUuZGVzdHJveSgpLCB0O1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwic3VwcG9ydE5hdGl2ZU1lZGlhUGxheWJhY2tcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQpIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PSBlLnZpZGVvRWxlbWVudCAmJiAoZS52aWRlb0VsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpKTt2YXIgbiA9IGUudmlkZW9FbGVtZW50LmNhblBsYXlUeXBlKHQpO3JldHVybiBcInByb2JhYmx5XCIgPT09IG4gfHwgXCJtYXliZVwiID09IG47XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJnZXRGZWF0dXJlTGlzdFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHsgbXNlRmx2UGxheWJhY2s6ICExLCBtc2VMaXZlRmx2UGxheWJhY2s6ICExLCBuZXR3b3JrU3RyZWFtSU86ICExLCBuZXR3b3JrTG9hZGVyTmFtZTogXCJcIiwgbmF0aXZlTVA0SDI2NFBsYXliYWNrOiAhMSwgbmF0aXZlV2VibVZQOFBsYXliYWNrOiAhMSwgbmF0aXZlV2VibVZQOVBsYXliYWNrOiAhMSB9O3JldHVybiB0Lm1zZUZsdlBsYXliYWNrID0gZS5zdXBwb3J0TVNFSDI2NFBsYXliYWNrKCksIHQubmV0d29ya1N0cmVhbUlPID0gZS5zdXBwb3J0TmV0d29ya1N0cmVhbUlPKCksIHQubmV0d29ya0xvYWRlck5hbWUgPSBlLmdldE5ldHdvcmtMb2FkZXJUeXBlTmFtZSgpLCB0Lm1zZUxpdmVGbHZQbGF5YmFjayA9IHQubXNlRmx2UGxheWJhY2sgJiYgdC5uZXR3b3JrU3RyZWFtSU8sIHQubmF0aXZlTVA0SDI2NFBsYXliYWNrID0gZS5zdXBwb3J0TmF0aXZlTWVkaWFQbGF5YmFjaygndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjQyMDAxRSwgbXA0YS40MC4yXCInKSwgdC5uYXRpdmVXZWJtVlA4UGxheWJhY2sgPSBlLnN1cHBvcnROYXRpdmVNZWRpYVBsYXliYWNrKCd2aWRlby93ZWJtOyBjb2RlY3M9XCJ2cDguMCwgdm9yYmlzXCInKSwgdC5uYXRpdmVXZWJtVlA5UGxheWJhY2sgPSBlLnN1cHBvcnROYXRpdmVNZWRpYVBsYXliYWNrKCd2aWRlby93ZWJtOyBjb2RlY3M9XCJ2cDlcIicpLCB0O1xuICAgICAgICAgIH0gfV0pLCBlO1xuICAgICAgfSgpO24uZGVmYXVsdCA9IHU7XG4gICAgfSwgeyBcIi4uL2NvbmZpZy5qc1wiOiA1LCBcIi4uL2lvL2lvLWNvbnRyb2xsZXIuanNcIjogMjMgfV0sIDc6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIHIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0W25dO2kuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9cmV0dXJuIGZ1bmN0aW9uICh0LCBuLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIG4gJiYgZSh0LnByb3RvdHlwZSwgbiksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgfTtcbiAgICAgIH0oKSxcbiAgICAgICAgICBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgIGkodGhpcywgZSksIHRoaXMubWltZVR5cGUgPSBudWxsLCB0aGlzLmR1cmF0aW9uID0gbnVsbCwgdGhpcy5oYXNBdWRpbyA9IG51bGwsIHRoaXMuaGFzVmlkZW8gPSBudWxsLCB0aGlzLmF1ZGlvQ29kZWMgPSBudWxsLCB0aGlzLnZpZGVvQ29kZWMgPSBudWxsLCB0aGlzLmF1ZGlvRGF0YVJhdGUgPSBudWxsLCB0aGlzLnZpZGVvRGF0YVJhdGUgPSBudWxsLCB0aGlzLmF1ZGlvU2FtcGxlUmF0ZSA9IG51bGwsIHRoaXMuYXVkaW9DaGFubmVsQ291bnQgPSBudWxsLCB0aGlzLndpZHRoID0gbnVsbCwgdGhpcy5oZWlnaHQgPSBudWxsLCB0aGlzLmZwcyA9IG51bGwsIHRoaXMucHJvZmlsZSA9IG51bGwsIHRoaXMubGV2ZWwgPSBudWxsLCB0aGlzLnJlZkZyYW1lcyA9IG51bGwsIHRoaXMuY2hyb21hRm9ybWF0ID0gbnVsbCwgdGhpcy5zYXJOdW0gPSBudWxsLCB0aGlzLnNhckRlbiA9IG51bGwsIHRoaXMubWV0YWRhdGEgPSBudWxsLCB0aGlzLnNlZ21lbnRzID0gbnVsbCwgdGhpcy5zZWdtZW50Q291bnQgPSBudWxsLCB0aGlzLmhhc0tleWZyYW1lc0luZGV4ID0gbnVsbCwgdGhpcy5rZXlmcmFtZXNJbmRleCA9IG51bGw7XG4gICAgICAgIH1yZXR1cm4gcihlLCBbeyBrZXk6IFwiaXNDb21wbGV0ZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9ICExID09PSB0aGlzLmhhc0F1ZGlvIHx8ICEwID09PSB0aGlzLmhhc0F1ZGlvICYmIG51bGwgIT0gdGhpcy5hdWRpb0NvZGVjICYmIG51bGwgIT0gdGhpcy5hdWRpb1NhbXBsZVJhdGUgJiYgbnVsbCAhPSB0aGlzLmF1ZGlvQ2hhbm5lbENvdW50LFxuICAgICAgICAgICAgICAgIHQgPSAhMSA9PT0gdGhpcy5oYXNWaWRlbyB8fCAhMCA9PT0gdGhpcy5oYXNWaWRlbyAmJiBudWxsICE9IHRoaXMudmlkZW9Db2RlYyAmJiBudWxsICE9IHRoaXMud2lkdGggJiYgbnVsbCAhPSB0aGlzLmhlaWdodCAmJiBudWxsICE9IHRoaXMuZnBzICYmIG51bGwgIT0gdGhpcy5wcm9maWxlICYmIG51bGwgIT0gdGhpcy5sZXZlbCAmJiBudWxsICE9IHRoaXMucmVmRnJhbWVzICYmIG51bGwgIT0gdGhpcy5jaHJvbWFGb3JtYXQgJiYgbnVsbCAhPSB0aGlzLnNhck51bSAmJiBudWxsICE9IHRoaXMuc2FyRGVuO3JldHVybiBudWxsICE9IHRoaXMubWltZVR5cGUgJiYgbnVsbCAhPSB0aGlzLmR1cmF0aW9uICYmIG51bGwgIT0gdGhpcy5tZXRhZGF0YSAmJiBudWxsICE9IHRoaXMuaGFzS2V5ZnJhbWVzSW5kZXggJiYgZSAmJiB0O1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiaXNTZWVrYWJsZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gITAgPT09IHRoaXMuaGFzS2V5ZnJhbWVzSW5kZXg7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJnZXROZWFyZXN0S2V5ZnJhbWVcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09IHRoaXMua2V5ZnJhbWVzSW5kZXgpIHJldHVybiBudWxsO3ZhciB0ID0gdGhpcy5rZXlmcmFtZXNJbmRleCxcbiAgICAgICAgICAgICAgICBuID0gdGhpcy5fc2VhcmNoKHQudGltZXMsIGUpO3JldHVybiB7IGluZGV4OiBuLCBtaWxsaXNlY29uZHM6IHQudGltZXNbbl0sIGZpbGVwb3NpdGlvbjogdC5maWxlcG9zaXRpb25zW25dIH07XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfc2VhcmNoXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IDAsXG4gICAgICAgICAgICAgICAgaSA9IGUubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICByID0gMCxcbiAgICAgICAgICAgICAgICBzID0gMCxcbiAgICAgICAgICAgICAgICBhID0gaTtmb3IgKHQgPCBlWzBdICYmIChuID0gMCwgcyA9IGEgKyAxKTsgcyA8PSBhOykge1xuICAgICAgICAgICAgICBpZiAoKHIgPSBzICsgTWF0aC5mbG9vcigoYSAtIHMpIC8gMikpID09PSBpIHx8IHQgPj0gZVtyXSAmJiB0IDwgZVtyICsgMV0pIHtcbiAgICAgICAgICAgICAgICBuID0gcjticmVhaztcbiAgICAgICAgICAgICAgfWVbcl0gPCB0ID8gcyA9IHIgKyAxIDogYSA9IHIgLSAxO1xuICAgICAgICAgICAgfXJldHVybiBuO1xuICAgICAgICAgIH0gfV0pLCBlO1xuICAgICAgfSgpO24uZGVmYXVsdCA9IHM7XG4gICAgfSwge31dLCA4OiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciByID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCk7bi5TYW1wbGVJbmZvID0gZnVuY3Rpb24gZSh0LCBuLCByLCBzLCBhKSB7XG4gICAgICAgIGkodGhpcywgZSksIHRoaXMuZHRzID0gdCwgdGhpcy5wdHMgPSBuLCB0aGlzLmR1cmF0aW9uID0gciwgdGhpcy5vcmlnaW5hbER0cyA9IHMsIHRoaXMuaXNTeW5jUG9pbnQgPSBhLCB0aGlzLmZpbGVwb3NpdGlvbiA9IG51bGw7XG4gICAgICB9LCBuLk1lZGlhU2VnbWVudEluZm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy5iZWdpbkR0cyA9IDAsIHRoaXMuZW5kRHRzID0gMCwgdGhpcy5iZWdpblB0cyA9IDAsIHRoaXMuZW5kUHRzID0gMCwgdGhpcy5vcmlnaW5hbEJlZ2luRHRzID0gMCwgdGhpcy5vcmlnaW5hbEVuZER0cyA9IDAsIHRoaXMuc3luY1BvaW50cyA9IFtdLCB0aGlzLmZpcnN0U2FtcGxlID0gbnVsbCwgdGhpcy5sYXN0U2FtcGxlID0gbnVsbDtcbiAgICAgICAgfXJldHVybiByKGUsIFt7IGtleTogXCJhcHBlbmRTeW5jUG9pbnRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGUuaXNTeW5jUG9pbnQgPSAhMCwgdGhpcy5zeW5jUG9pbnRzLnB1c2goZSk7XG4gICAgICAgICAgfSB9XSksIGU7XG4gICAgICB9KCksIG4uSURSU2FtcGxlTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICBpKHRoaXMsIGUpLCB0aGlzLl9saXN0ID0gW107XG4gICAgICAgIH1yZXR1cm4gcihlLCBbeyBrZXk6IFwiY2xlYXJcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fbGlzdCA9IFtdO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiYXBwZW5kQXJyYXlcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5fbGlzdDswICE9PSBlLmxlbmd0aCAmJiAodC5sZW5ndGggPiAwICYmIGVbMF0ub3JpZ2luYWxEdHMgPCB0W3QubGVuZ3RoIC0gMV0ub3JpZ2luYWxEdHMgJiYgdGhpcy5jbGVhcigpLCBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0LCBlKSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJnZXRMYXN0U3luY1BvaW50QmVmb3JlRHRzXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICBpZiAoMCA9PSB0aGlzLl9saXN0Lmxlbmd0aCkgcmV0dXJuIG51bGw7dmFyIHQgPSB0aGlzLl9saXN0LFxuICAgICAgICAgICAgICAgIG4gPSAwLFxuICAgICAgICAgICAgICAgIGkgPSB0Lmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgciA9IDAsXG4gICAgICAgICAgICAgICAgcyA9IDAsXG4gICAgICAgICAgICAgICAgYSA9IGk7Zm9yIChlIDwgdFswXS5kdHMgJiYgKG4gPSAwLCBzID0gYSArIDEpOyBzIDw9IGE7KSB7XG4gICAgICAgICAgICAgIGlmICgociA9IHMgKyBNYXRoLmZsb29yKChhIC0gcykgLyAyKSkgPT09IGkgfHwgZSA+PSB0W3JdLmR0cyAmJiBlIDwgdFtyICsgMV0uZHRzKSB7XG4gICAgICAgICAgICAgICAgbiA9IHI7YnJlYWs7XG4gICAgICAgICAgICAgIH10W3JdLmR0cyA8IGUgPyBzID0gciArIDEgOiBhID0gciAtIDE7XG4gICAgICAgICAgICB9cmV0dXJuIHRoaXMuX2xpc3Rbbl07XG4gICAgICAgICAgfSB9XSksIGU7XG4gICAgICB9KCksIG4uTWVkaWFTZWdtZW50SW5mb0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUodCkge1xuICAgICAgICAgIGkodGhpcywgZSksIHRoaXMuX3R5cGUgPSB0LCB0aGlzLl9saXN0ID0gW10sIHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbiA9IC0xO1xuICAgICAgICB9cmV0dXJuIHIoZSwgW3sga2V5OiBcImlzRW1wdHlcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIDAgPT09IHRoaXMuX2xpc3QubGVuZ3RoO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiY2xlYXJcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fbGlzdCA9IFtdLCB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb24gPSAtMTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9saXN0O2lmICgwID09PSB0Lmxlbmd0aCkgcmV0dXJuIC0yO3ZhciBuID0gdC5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgIHIgPSAwLFxuICAgICAgICAgICAgICAgIHMgPSBuLFxuICAgICAgICAgICAgICAgIGEgPSAwO2lmIChlIDwgdFswXS5vcmlnaW5hbEJlZ2luRHRzKSByZXR1cm4gYSA9IC0xO2ZvciAoOyByIDw9IHM7KSB7XG4gICAgICAgICAgICAgIGlmICgoaSA9IHIgKyBNYXRoLmZsb29yKChzIC0gcikgLyAyKSkgPT09IG4gfHwgZSA+IHRbaV0ubGFzdFNhbXBsZS5vcmlnaW5hbER0cyAmJiBlIDwgdFtpICsgMV0ub3JpZ2luYWxCZWdpbkR0cykge1xuICAgICAgICAgICAgICAgIGEgPSBpO2JyZWFrO1xuICAgICAgICAgICAgICB9dFtpXS5vcmlnaW5hbEJlZ2luRHRzIDwgZSA/IHIgPSBpICsgMSA6IHMgPSBpIC0gMTtcbiAgICAgICAgICAgIH1yZXR1cm4gYTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9zZWFyY2hOZWFyZXN0U2VnbWVudEFmdGVyXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoZSkgKyAxO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiYXBwZW5kXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMuX2xpc3QsXG4gICAgICAgICAgICAgICAgbiA9IGUsXG4gICAgICAgICAgICAgICAgaSA9IHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICByID0gMDstMSAhPT0gaSAmJiBpIDwgdC5sZW5ndGggJiYgbi5vcmlnaW5hbEJlZ2luRHRzID49IHRbaV0ubGFzdFNhbXBsZS5vcmlnaW5hbER0cyAmJiAoaSA9PT0gdC5sZW5ndGggLSAxIHx8IGkgPCB0Lmxlbmd0aCAtIDEgJiYgbi5vcmlnaW5hbEJlZ2luRHRzIDwgdFtpICsgMV0ub3JpZ2luYWxCZWdpbkR0cykgPyByID0gaSArIDEgOiB0Lmxlbmd0aCA+IDAgJiYgKHIgPSB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShuLm9yaWdpbmFsQmVnaW5EdHMpICsgMSksIHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbiA9IHIsIHRoaXMuX2xpc3Quc3BsaWNlKHIsIDAsIG4pO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiZ2V0TGFzdFNlZ21lbnRCZWZvcmVcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoZSk7cmV0dXJuIHQgPj0gMCA/IHRoaXMuX2xpc3RbdF0gOiBudWxsO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiZ2V0TGFzdFNhbXBsZUJlZm9yZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmdldExhc3RTZWdtZW50QmVmb3JlKGUpO3JldHVybiBudWxsICE9IHQgPyB0Lmxhc3RTYW1wbGUgOiBudWxsO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiZ2V0TGFzdFN5bmNQb2ludEJlZm9yZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgdCA9IHRoaXMuX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlKGUpLCBuID0gdGhpcy5fbGlzdFt0XS5zeW5jUG9pbnRzOyAwID09PSBuLmxlbmd0aCAmJiB0ID4gMDspIHtcbiAgICAgICAgICAgICAgdC0tLCBuID0gdGhpcy5fbGlzdFt0XS5zeW5jUG9pbnRzO1xuICAgICAgICAgICAgfXJldHVybiBuLmxlbmd0aCA+IDAgPyBuW24ubGVuZ3RoIC0gMV0gOiBudWxsO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwidHlwZVwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwibGVuZ3RoXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QubGVuZ3RoO1xuICAgICAgICAgIH0gfV0pLCBlO1xuICAgICAgfSgpO1xuICAgIH0sIHt9XSwgOTogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07XG4gICAgICB9ZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgYSA9IGUoXCJldmVudHNcIiksXG4gICAgICAgICAgbyA9IGkoYSksXG4gICAgICAgICAgdSA9IGUoXCIuLi91dGlscy9sb2dnZXIuanNcIiksXG4gICAgICAgICAgbCA9IGkodSksXG4gICAgICAgICAgZCA9IGUoXCIuLi91dGlscy9icm93c2VyLmpzXCIpLFxuICAgICAgICAgIGggPSBpKGQpLFxuICAgICAgICAgIGYgPSBlKFwiLi9tc2UtZXZlbnRzLmpzXCIpLFxuICAgICAgICAgIGMgPSBpKGYpLFxuICAgICAgICAgIF8gPSBlKFwiLi9tZWRpYS1zZWdtZW50LWluZm8uanNcIiksXG4gICAgICAgICAgbSA9IGUoXCIuLi91dGlscy9leGNlcHRpb24uanNcIiksXG4gICAgICAgICAgcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgICAgcih0aGlzLCBlKSwgdGhpcy5UQUcgPSBcIk1TRUNvbnRyb2xsZXJcIiwgdGhpcy5fY29uZmlnID0gdCwgdGhpcy5fZW1pdHRlciA9IG5ldyBvLmRlZmF1bHQoKSwgdGhpcy5fY29uZmlnLmlzTGl2ZSAmJiB2b2lkIDAgPT0gdGhpcy5fY29uZmlnLmF1dG9DbGVhbnVwU291cmNlQnVmZmVyICYmICh0aGlzLl9jb25maWcuYXV0b0NsZWFudXBTb3VyY2VCdWZmZXIgPSAhMCksIHRoaXMuZSA9IHsgb25Tb3VyY2VPcGVuOiB0aGlzLl9vblNvdXJjZU9wZW4uYmluZCh0aGlzKSwgb25Tb3VyY2VFbmRlZDogdGhpcy5fb25Tb3VyY2VFbmRlZC5iaW5kKHRoaXMpLCBvblNvdXJjZUNsb3NlOiB0aGlzLl9vblNvdXJjZUNsb3NlLmJpbmQodGhpcyksIG9uU291cmNlQnVmZmVyRXJyb3I6IHRoaXMuX29uU291cmNlQnVmZmVyRXJyb3IuYmluZCh0aGlzKSwgb25Tb3VyY2VCdWZmZXJVcGRhdGVFbmQ6IHRoaXMuX29uU291cmNlQnVmZmVyVXBkYXRlRW5kLmJpbmQodGhpcykgfSwgdGhpcy5fbWVkaWFTb3VyY2UgPSBudWxsLCB0aGlzLl9tZWRpYVNvdXJjZU9iamVjdFVSTCA9IG51bGwsIHRoaXMuX21lZGlhRWxlbWVudCA9IG51bGwsIHRoaXMuX2lzQnVmZmVyRnVsbCA9ICExLCB0aGlzLl9oYXNQZW5kaW5nRW9zID0gITEsIHRoaXMuX3JlcXVpcmVTZXRNZWRpYUR1cmF0aW9uID0gITEsIHRoaXMuX3BlbmRpbmdNZWRpYUR1cmF0aW9uID0gMCwgdGhpcy5fcGVuZGluZ1NvdXJjZUJ1ZmZlckluaXQgPSBbXSwgdGhpcy5fbWltZVR5cGVzID0geyB2aWRlbzogbnVsbCwgYXVkaW86IG51bGwgfSwgdGhpcy5fc291cmNlQnVmZmVycyA9IHsgdmlkZW86IG51bGwsIGF1ZGlvOiBudWxsIH0sIHRoaXMuX2xhc3RJbml0U2VnbWVudHMgPSB7IHZpZGVvOiBudWxsLCBhdWRpbzogbnVsbCB9LCB0aGlzLl9wZW5kaW5nU2VnbWVudHMgPSB7IHZpZGVvOiBbXSwgYXVkaW86IFtdIH0sIHRoaXMuX3BlbmRpbmdSZW1vdmVSYW5nZXMgPSB7IHZpZGVvOiBbXSwgYXVkaW86IFtdIH0sIHRoaXMuX2lkckxpc3QgPSBuZXcgXy5JRFJTYW1wbGVMaXN0KCk7XG4gICAgICAgIH1yZXR1cm4gcyhlLCBbeyBrZXk6IFwiZGVzdHJveVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICAodGhpcy5fbWVkaWFFbGVtZW50IHx8IHRoaXMuX21lZGlhU291cmNlKSAmJiB0aGlzLmRldGFjaE1lZGlhRWxlbWVudCgpLCB0aGlzLmUgPSBudWxsLCB0aGlzLl9lbWl0dGVyLnJlbW92ZUFsbExpc3RlbmVycygpLCB0aGlzLl9lbWl0dGVyID0gbnVsbDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIm9uXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0dGVyLmFkZExpc3RlbmVyKGUsIHQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib2ZmXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGUsIHQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiYXR0YWNoTWVkaWFFbGVtZW50XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWVkaWFTb3VyY2UpIHRocm93IG5ldyBtLklsbGVnYWxTdGF0ZUV4Y2VwdGlvbihcIk1lZGlhU291cmNlIGhhcyBiZWVuIGF0dGFjaGVkIHRvIGFuIEhUTUxNZWRpYUVsZW1lbnQhXCIpO3ZhciB0ID0gdGhpcy5fbWVkaWFTb3VyY2UgPSBuZXcgd2luZG93Lk1lZGlhU291cmNlKCk7dC5hZGRFdmVudExpc3RlbmVyKFwic291cmNlb3BlblwiLCB0aGlzLmUub25Tb3VyY2VPcGVuKSwgdC5hZGRFdmVudExpc3RlbmVyKFwic291cmNlZW5kZWRcIiwgdGhpcy5lLm9uU291cmNlRW5kZWQpLCB0LmFkZEV2ZW50TGlzdGVuZXIoXCJzb3VyY2VjbG9zZVwiLCB0aGlzLmUub25Tb3VyY2VDbG9zZSksIHRoaXMuX21lZGlhRWxlbWVudCA9IGUsIHRoaXMuX21lZGlhU291cmNlT2JqZWN0VVJMID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5fbWVkaWFTb3VyY2UpLCBlLnNyYyA9IHRoaXMuX21lZGlhU291cmNlT2JqZWN0VVJMO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiZGV0YWNoTWVkaWFFbGVtZW50XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tZWRpYVNvdXJjZSkge1xuICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuX21lZGlhU291cmNlO2ZvciAodmFyIHQgaW4gdGhpcy5fc291cmNlQnVmZmVycykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5fcGVuZGluZ1NlZ21lbnRzW3RdO24uc3BsaWNlKDAsIG4ubGVuZ3RoKSwgdGhpcy5fcGVuZGluZ1NlZ21lbnRzW3RdID0gbnVsbCwgdGhpcy5fcGVuZGluZ1JlbW92ZVJhbmdlc1t0XSA9IG51bGwsIHRoaXMuX2xhc3RJbml0U2VnbWVudHNbdF0gPSBudWxsO3ZhciBpID0gdGhpcy5fc291cmNlQnVmZmVyc1t0XTtpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgaWYgKFwiY2xvc2VkXCIgIT09IGUucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU291cmNlQnVmZmVyKGkpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbC5kZWZhdWx0LmUodGhpcy5UQUcsIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1pLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCB0aGlzLmUub25Tb3VyY2VCdWZmZXJFcnJvciksIGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWVuZFwiLCB0aGlzLmUub25Tb3VyY2VCdWZmZXJVcGRhdGVFbmQpO1xuICAgICAgICAgICAgICAgICAgfXRoaXMuX21pbWVUeXBlc1t0XSA9IG51bGwsIHRoaXMuX3NvdXJjZUJ1ZmZlcnNbdF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfWlmIChcIm9wZW5cIiA9PT0gZS5yZWFkeVN0YXRlKSB0cnkge1xuICAgICAgICAgICAgICAgIGUuZW5kT2ZTdHJlYW0oKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGwuZGVmYXVsdC5lKHRoaXMuVEFHLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICB9ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic291cmNlb3BlblwiLCB0aGlzLmUub25Tb3VyY2VPcGVuKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic291cmNlZW5kZWRcIiwgdGhpcy5lLm9uU291cmNlRW5kZWQpLCBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzb3VyY2VjbG9zZVwiLCB0aGlzLmUub25Tb3VyY2VDbG9zZSksIHRoaXMuX3BlbmRpbmdTb3VyY2VCdWZmZXJJbml0ID0gW10sIHRoaXMuX2lzQnVmZmVyRnVsbCA9ICExLCB0aGlzLl9pZHJMaXN0LmNsZWFyKCksIHRoaXMuX21lZGlhU291cmNlID0gbnVsbDtcbiAgICAgICAgICAgIH10aGlzLl9tZWRpYUVsZW1lbnQgJiYgKHRoaXMuX21lZGlhRWxlbWVudC5zcmMgPSBcIlwiLCB0aGlzLl9tZWRpYUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpLCB0aGlzLl9tZWRpYUVsZW1lbnQgPSBudWxsKSwgdGhpcy5fbWVkaWFTb3VyY2VPYmplY3RVUkwgJiYgKHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuX21lZGlhU291cmNlT2JqZWN0VVJMKSwgdGhpcy5fbWVkaWFTb3VyY2VPYmplY3RVUkwgPSBudWxsKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImFwcGVuZEluaXRTZWdtZW50XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX21lZGlhU291cmNlIHx8IFwib3BlblwiICE9PSB0aGlzLl9tZWRpYVNvdXJjZS5yZWFkeVN0YXRlKSByZXR1cm4gdGhpcy5fcGVuZGluZ1NvdXJjZUJ1ZmZlckluaXQucHVzaChlKSwgdm9pZCB0aGlzLl9wZW5kaW5nU2VnbWVudHNbZS50eXBlXS5wdXNoKGUpO3ZhciBuID0gZSxcbiAgICAgICAgICAgICAgICBpID0gXCJcIiArIG4uY29udGFpbmVyO24uY29kZWMgJiYgbi5jb2RlYy5sZW5ndGggPiAwICYmIChpICs9IFwiO2NvZGVjcz1cIiArIG4uY29kZWMpO3ZhciByID0gITE7aWYgKGwuZGVmYXVsdC52KHRoaXMuVEFHLCBcIlJlY2VpdmVkIEluaXRpYWxpemF0aW9uIFNlZ21lbnQsIG1pbWVUeXBlOiBcIiArIGkpLCB0aGlzLl9sYXN0SW5pdFNlZ21lbnRzW24udHlwZV0gPSBuLCBpICE9PSB0aGlzLl9taW1lVHlwZXNbbi50eXBlXSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fbWltZVR5cGVzW24udHlwZV0pIGwuZGVmYXVsdC52KHRoaXMuVEFHLCBcIk5vdGljZTogXCIgKyBuLnR5cGUgKyBcIiBtaW1lVHlwZSBjaGFuZ2VkLCBvcmlnaW46IFwiICsgdGhpcy5fbWltZVR5cGVzW24udHlwZV0gKyBcIiwgdGFyZ2V0OiBcIiArIGkpO2Vsc2Uge1xuICAgICAgICAgICAgICAgIHIgPSAhMDt0cnkge1xuICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0aGlzLl9zb3VyY2VCdWZmZXJzW24udHlwZV0gPSB0aGlzLl9tZWRpYVNvdXJjZS5hZGRTb3VyY2VCdWZmZXIoaSk7cy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgdGhpcy5lLm9uU291cmNlQnVmZmVyRXJyb3IpLCBzLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVlbmRcIiwgdGhpcy5lLm9uU291cmNlQnVmZmVyVXBkYXRlRW5kKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbC5kZWZhdWx0LmUodGhpcy5UQUcsIGUubWVzc2FnZSksIHZvaWQgdGhpcy5fZW1pdHRlci5lbWl0KGMuZGVmYXVsdC5FUlJPUiwgeyBjb2RlOiBlLmNvZGUsIG1zZzogZS5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfXRoaXMuX21pbWVUeXBlc1tuLnR5cGVdID0gaTtcbiAgICAgICAgICAgIH10IHx8IHRoaXMuX3BlbmRpbmdTZWdtZW50c1tuLnR5cGVdLnB1c2gobiksIHIgfHwgdGhpcy5fc291cmNlQnVmZmVyc1tuLnR5cGVdICYmICF0aGlzLl9zb3VyY2VCdWZmZXJzW24udHlwZV0udXBkYXRpbmcgJiYgdGhpcy5fZG9BcHBlbmRTZWdtZW50cygpLCBoLmRlZmF1bHQuc2FmYXJpICYmIFwiYXVkaW8vbXBlZ1wiID09PSBuLmNvbnRhaW5lciAmJiBuLm1lZGlhRHVyYXRpb24gPiAwICYmICh0aGlzLl9yZXF1aXJlU2V0TWVkaWFEdXJhdGlvbiA9ICEwLCB0aGlzLl9wZW5kaW5nTWVkaWFEdXJhdGlvbiA9IG4ubWVkaWFEdXJhdGlvbiAvIDFlMywgdGhpcy5fdXBkYXRlTWVkaWFTb3VyY2VEdXJhdGlvbigpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImFwcGVuZE1lZGlhU2VnbWVudFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlO3RoaXMuX3BlbmRpbmdTZWdtZW50c1t0LnR5cGVdLnB1c2godCksIHRoaXMuX2NvbmZpZy5hdXRvQ2xlYW51cFNvdXJjZUJ1ZmZlciAmJiB0aGlzLl9uZWVkQ2xlYW51cFNvdXJjZUJ1ZmZlcigpICYmIHRoaXMuX2RvQ2xlYW51cFNvdXJjZUJ1ZmZlcigpO3ZhciBuID0gdGhpcy5fc291cmNlQnVmZmVyc1t0LnR5cGVdOyFuIHx8IG4udXBkYXRpbmcgfHwgdGhpcy5faGFzUGVuZGluZ1JlbW92ZVJhbmdlcygpIHx8IHRoaXMuX2RvQXBwZW5kU2VnbWVudHMoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInNlZWtcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHQgaW4gdGhpcy5fc291cmNlQnVmZmVycykge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fc291cmNlQnVmZmVyc1t0XSkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5fc291cmNlQnVmZmVyc1t0XTtpZiAoXCJvcGVuXCIgPT09IHRoaXMuX21lZGlhU291cmNlLnJlYWR5U3RhdGUpIHRyeSB7XG4gICAgICAgICAgICAgICAgICBuLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgbC5kZWZhdWx0LmUodGhpcy5UQUcsIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfXRoaXMuX2lkckxpc3QuY2xlYXIoKTt2YXIgaSA9IHRoaXMuX3BlbmRpbmdTZWdtZW50c1t0XTtpZiAoaS5zcGxpY2UoMCwgaS5sZW5ndGgpLCBcImNsb3NlZFwiICE9PSB0aGlzLl9tZWRpYVNvdXJjZS5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IG4uYnVmZmVyZWQubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBuLmJ1ZmZlcmVkLnN0YXJ0KHIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IG4uYnVmZmVyZWQuZW5kKHIpO3RoaXMuX3BlbmRpbmdSZW1vdmVSYW5nZXNbdF0ucHVzaCh7IHN0YXJ0OiBzLCBlbmQ6IGEgfSk7XG4gICAgICAgICAgICAgICAgICB9aWYgKG4udXBkYXRpbmcgfHwgdGhpcy5fZG9SZW1vdmVSYW5nZXMoKSwgaC5kZWZhdWx0LnNhZmFyaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHRoaXMuX2xhc3RJbml0U2VnbWVudHNbdF07byAmJiAodGhpcy5fcGVuZGluZ1NlZ21lbnRzW3RdLnB1c2gobyksIG4udXBkYXRpbmcgfHwgdGhpcy5fZG9BcHBlbmRTZWdtZW50cygpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IH0sIHsga2V5OiBcImVuZE9mU3RyZWFtXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5fbWVkaWFTb3VyY2UsXG4gICAgICAgICAgICAgICAgdCA9IHRoaXMuX3NvdXJjZUJ1ZmZlcnM7aWYgKCFlIHx8IFwib3BlblwiICE9PSBlLnJlYWR5U3RhdGUpIHJldHVybiB2b2lkIChlICYmIFwiY2xvc2VkXCIgPT09IGUucmVhZHlTdGF0ZSAmJiB0aGlzLl9oYXNQZW5kaW5nU2VnbWVudHMoKSAmJiAodGhpcy5faGFzUGVuZGluZ0VvcyA9ICEwKSk7dC52aWRlbyAmJiB0LnZpZGVvLnVwZGF0aW5nIHx8IHQuYXVkaW8gJiYgdC5hdWRpby51cGRhdGluZyA/IHRoaXMuX2hhc1BlbmRpbmdFb3MgPSAhMCA6ICh0aGlzLl9oYXNQZW5kaW5nRW9zID0gITEsIGUuZW5kT2ZTdHJlYW0oKSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJnZXROZWFyZXN0S2V5ZnJhbWVcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZHJMaXN0LmdldExhc3RTeW5jUG9pbnRCZWZvcmVEdHMoZSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfbmVlZENsZWFudXBTb3VyY2VCdWZmZXJcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jb25maWcuYXV0b0NsZWFudXBTb3VyY2VCdWZmZXIpIHJldHVybiAhMTt2YXIgZSA9IHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZTtmb3IgKHZhciB0IGluIHRoaXMuX3NvdXJjZUJ1ZmZlcnMpIHtcbiAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9zb3VyY2VCdWZmZXJzW3RdO2lmIChuKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBuLmJ1ZmZlcmVkO2lmIChpLmxlbmd0aCA+PSAxICYmIGUgLSBpLnN0YXJ0KDApID49IHRoaXMuX2NvbmZpZy5hdXRvQ2xlYW51cE1heEJhY2t3YXJkRHVyYXRpb24pIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfXJldHVybiAhMTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9kb0NsZWFudXBTb3VyY2VCdWZmZXJcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl9tZWRpYUVsZW1lbnQuY3VycmVudFRpbWU7Zm9yICh2YXIgdCBpbiB0aGlzLl9zb3VyY2VCdWZmZXJzKSB7XG4gICAgICAgICAgICAgIHZhciBuID0gdGhpcy5fc291cmNlQnVmZmVyc1t0XTtpZiAobikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBuLmJ1ZmZlcmVkLCByID0gITEsIHMgPSAwOyBzIDwgaS5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgICAgdmFyIGEgPSBpLnN0YXJ0KHMpLFxuICAgICAgICAgICAgICAgICAgICAgIG8gPSBpLmVuZChzKTtpZiAoYSA8PSBlICYmIGUgPCBvICsgMykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSAtIGEgPj0gdGhpcy5fY29uZmlnLmF1dG9DbGVhbnVwTWF4QmFja3dhcmREdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIHIgPSAhMDt2YXIgdSA9IGUgLSB0aGlzLl9jb25maWcuYXV0b0NsZWFudXBNaW5CYWNrd2FyZER1cmF0aW9uO3RoaXMuX3BlbmRpbmdSZW1vdmVSYW5nZXNbdF0ucHVzaCh7IHN0YXJ0OiBhLCBlbmQ6IHUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBvIDwgZSAmJiAociA9ICEwLCB0aGlzLl9wZW5kaW5nUmVtb3ZlUmFuZ2VzW3RdLnB1c2goeyBzdGFydDogYSwgZW5kOiBvIH0pKTtcbiAgICAgICAgICAgICAgICB9ciAmJiAhbi51cGRhdGluZyAmJiB0aGlzLl9kb1JlbW92ZVJhbmdlcygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfdXBkYXRlTWVkaWFTb3VyY2VEdXJhdGlvblwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuX3NvdXJjZUJ1ZmZlcnM7aWYgKDAgIT09IHRoaXMuX21lZGlhRWxlbWVudC5yZWFkeVN0YXRlICYmIFwib3BlblwiID09PSB0aGlzLl9tZWRpYVNvdXJjZS5yZWFkeVN0YXRlICYmICEoZS52aWRlbyAmJiBlLnZpZGVvLnVwZGF0aW5nIHx8IGUuYXVkaW8gJiYgZS5hdWRpby51cGRhdGluZykpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9tZWRpYVNvdXJjZS5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgIG4gPSB0aGlzLl9wZW5kaW5nTWVkaWFEdXJhdGlvbjtuID4gMCAmJiAoaXNOYU4odCkgfHwgbiA+IHQpICYmIChsLmRlZmF1bHQudih0aGlzLlRBRywgXCJVcGRhdGUgTWVkaWFTb3VyY2UgZHVyYXRpb24gZnJvbSBcIiArIHQgKyBcIiB0byBcIiArIG4pLCB0aGlzLl9tZWRpYVNvdXJjZS5kdXJhdGlvbiA9IG4pLCB0aGlzLl9yZXF1aXJlU2V0TWVkaWFEdXJhdGlvbiA9ICExLCB0aGlzLl9wZW5kaW5nTWVkaWFEdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfZG9SZW1vdmVSYW5nZXNcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgZSBpbiB0aGlzLl9wZW5kaW5nUmVtb3ZlUmFuZ2VzKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9zb3VyY2VCdWZmZXJzW2VdICYmICF0aGlzLl9zb3VyY2VCdWZmZXJzW2VdLnVwZGF0aW5nKSBmb3IgKHZhciB0ID0gdGhpcy5fc291cmNlQnVmZmVyc1tlXSwgbiA9IHRoaXMuX3BlbmRpbmdSZW1vdmVSYW5nZXNbZV07IG4ubGVuZ3RoICYmICF0LnVwZGF0aW5nOykge1xuICAgICAgICAgICAgICAgIHZhciBpID0gbi5zaGlmdCgpO3QucmVtb3ZlKGkuc3RhcnQsIGkuZW5kKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX2RvQXBwZW5kU2VnbWVudHNcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl9wZW5kaW5nU2VnbWVudHM7Zm9yICh2YXIgdCBpbiBlKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9zb3VyY2VCdWZmZXJzW3RdICYmICF0aGlzLl9zb3VyY2VCdWZmZXJzW3RdLnVwZGF0aW5nICYmIGVbdF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gZVt0XS5zaGlmdCgpO2lmIChuLnRpbWVzdGFtcE9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLl9zb3VyY2VCdWZmZXJzW3RdLnRpbWVzdGFtcE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICByID0gbi50aW1lc3RhbXBPZmZzZXQgLyAxZTMsXG4gICAgICAgICAgICAgICAgICAgICAgcyA9IE1hdGguYWJzKGkgLSByKTtzID4gLjEgJiYgKGwuZGVmYXVsdC52KHRoaXMuVEFHLCBcIlVwZGF0ZSBNUEVHIGF1ZGlvIHRpbWVzdGFtcE9mZnNldCBmcm9tIFwiICsgaSArIFwiIHRvIFwiICsgciksIHRoaXMuX3NvdXJjZUJ1ZmZlcnNbdF0udGltZXN0YW1wT2Zmc2V0ID0gciksIGRlbGV0ZSBuLnRpbWVzdGFtcE9mZnNldDtcbiAgICAgICAgICAgICAgICB9aWYgKCFuLmRhdGEgfHwgMCA9PT0gbi5kYXRhLmJ5dGVMZW5ndGgpIGNvbnRpbnVlO3RyeSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9zb3VyY2VCdWZmZXJzW3RdLmFwcGVuZEJ1ZmZlcihuLmRhdGEpLCB0aGlzLl9pc0J1ZmZlckZ1bGwgPSAhMSwgXCJ2aWRlb1wiID09PSB0ICYmIG4uaGFzT3duUHJvcGVydHkoXCJpbmZvXCIpICYmIHRoaXMuX2lkckxpc3QuYXBwZW5kQXJyYXkobi5pbmZvLnN5bmNQb2ludHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdTZWdtZW50c1t0XS51bnNoaWZ0KG4pLCAyMiA9PT0gZS5jb2RlID8gKHRoaXMuX2lzQnVmZmVyRnVsbCB8fCB0aGlzLl9lbWl0dGVyLmVtaXQoYy5kZWZhdWx0LkJVRkZFUl9GVUxMKSwgdGhpcy5faXNCdWZmZXJGdWxsID0gITApIDogKGwuZGVmYXVsdC5lKHRoaXMuVEFHLCBlLm1lc3NhZ2UpLCB0aGlzLl9lbWl0dGVyLmVtaXQoYy5kZWZhdWx0LkVSUk9SLCB7IGNvZGU6IGUuY29kZSwgbXNnOiBlLm1lc3NhZ2UgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uU291cmNlT3BlblwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICBpZiAobC5kZWZhdWx0LnYodGhpcy5UQUcsIFwiTWVkaWFTb3VyY2Ugb25Tb3VyY2VPcGVuXCIpLCB0aGlzLl9tZWRpYVNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic291cmNlb3BlblwiLCB0aGlzLmUub25Tb3VyY2VPcGVuKSwgdGhpcy5fcGVuZGluZ1NvdXJjZUJ1ZmZlckluaXQubGVuZ3RoID4gMCkgZm9yICh2YXIgZSA9IHRoaXMuX3BlbmRpbmdTb3VyY2VCdWZmZXJJbml0OyBlLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSBlLnNoaWZ0KCk7dGhpcy5hcHBlbmRJbml0U2VnbWVudCh0LCAhMCk7XG4gICAgICAgICAgICB9dGhpcy5faGFzUGVuZGluZ1NlZ21lbnRzKCkgJiYgdGhpcy5fZG9BcHBlbmRTZWdtZW50cygpLCB0aGlzLl9lbWl0dGVyLmVtaXQoYy5kZWZhdWx0LlNPVVJDRV9PUEVOKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vblNvdXJjZUVuZGVkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIGwuZGVmYXVsdC52KHRoaXMuVEFHLCBcIk1lZGlhU291cmNlIG9uU291cmNlRW5kZWRcIik7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25Tb3VyY2VDbG9zZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICBsLmRlZmF1bHQudih0aGlzLlRBRywgXCJNZWRpYVNvdXJjZSBvblNvdXJjZUNsb3NlXCIpLCB0aGlzLl9tZWRpYVNvdXJjZSAmJiBudWxsICE9IHRoaXMuZSAmJiAodGhpcy5fbWVkaWFTb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNvdXJjZW9wZW5cIiwgdGhpcy5lLm9uU291cmNlT3BlbiksIHRoaXMuX21lZGlhU291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzb3VyY2VlbmRlZFwiLCB0aGlzLmUub25Tb3VyY2VFbmRlZCksIHRoaXMuX21lZGlhU291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzb3VyY2VjbG9zZVwiLCB0aGlzLmUub25Tb3VyY2VDbG9zZSkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX2hhc1BlbmRpbmdTZWdtZW50c1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuX3BlbmRpbmdTZWdtZW50cztyZXR1cm4gZS52aWRlby5sZW5ndGggPiAwIHx8IGUuYXVkaW8ubGVuZ3RoID4gMDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9oYXNQZW5kaW5nUmVtb3ZlUmFuZ2VzXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5fcGVuZGluZ1JlbW92ZVJhbmdlcztyZXR1cm4gZS52aWRlby5sZW5ndGggPiAwIHx8IGUuYXVkaW8ubGVuZ3RoID4gMDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vblNvdXJjZUJ1ZmZlclVwZGF0ZUVuZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlU2V0TWVkaWFEdXJhdGlvbiA/IHRoaXMuX3VwZGF0ZU1lZGlhU291cmNlRHVyYXRpb24oKSA6IHRoaXMuX2hhc1BlbmRpbmdSZW1vdmVSYW5nZXMoKSA/IHRoaXMuX2RvUmVtb3ZlUmFuZ2VzKCkgOiB0aGlzLl9oYXNQZW5kaW5nU2VnbWVudHMoKSA/IHRoaXMuX2RvQXBwZW5kU2VnbWVudHMoKSA6IHRoaXMuX2hhc1BlbmRpbmdFb3MgJiYgdGhpcy5lbmRPZlN0cmVhbSgpLCB0aGlzLl9lbWl0dGVyLmVtaXQoYy5kZWZhdWx0LlVQREFURV9FTkQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uU291cmNlQnVmZmVyRXJyb3JcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGwuZGVmYXVsdC5lKHRoaXMuVEFHLCBcIlNvdXJjZUJ1ZmZlciBFcnJvcjogXCIgKyBlKTtcbiAgICAgICAgICB9IH1dKSwgZTtcbiAgICAgIH0oKTtuLmRlZmF1bHQgPSBwO1xuICAgIH0sIHsgXCIuLi91dGlscy9icm93c2VyLmpzXCI6IDM5LCBcIi4uL3V0aWxzL2V4Y2VwdGlvbi5qc1wiOiA0MCwgXCIuLi91dGlscy9sb2dnZXIuanNcIjogNDEsIFwiLi9tZWRpYS1zZWdtZW50LWluZm8uanNcIjogOCwgXCIuL21zZS1ldmVudHMuanNcIjogMTAsIGV2ZW50czogMiB9XSwgMTA6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciBpID0geyBFUlJPUjogXCJlcnJvclwiLCBTT1VSQ0VfT1BFTjogXCJzb3VyY2Vfb3BlblwiLCBVUERBVEVfRU5EOiBcInVwZGF0ZV9lbmRcIiwgQlVGRkVSX0ZVTEw6IFwiYnVmZmVyX2Z1bGxcIiB9O24uZGVmYXVsdCA9IGk7XG4gICAgfSwge31dLCAxMTogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07XG4gICAgICB9ZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgYSA9IGUoXCJldmVudHNcIiksXG4gICAgICAgICAgbyA9IGkoYSksXG4gICAgICAgICAgdSA9IGUoXCIuLi91dGlscy9sb2dnZXIuanNcIiksXG4gICAgICAgICAgbCA9IGkodSksXG4gICAgICAgICAgZCA9IGUoXCIuLi91dGlscy9sb2dnaW5nLWNvbnRyb2wuanNcIiksXG4gICAgICAgICAgaCA9IGkoZCksXG4gICAgICAgICAgZiA9IGUoXCIuL3RyYW5zbXV4aW5nLWNvbnRyb2xsZXIuanNcIiksXG4gICAgICAgICAgYyA9IGkoZiksXG4gICAgICAgICAgXyA9IGUoXCIuL3RyYW5zbXV4aW5nLWV2ZW50cy5qc1wiKSxcbiAgICAgICAgICBtID0gaShfKSxcbiAgICAgICAgICBwID0gZShcIi4vdHJhbnNtdXhpbmctd29ya2VyLmpzXCIpLFxuICAgICAgICAgIHYgPSBpKHApLFxuICAgICAgICAgIGcgPSBlKFwiLi9tZWRpYS1pbmZvLmpzXCIpLFxuICAgICAgICAgIHkgPSBpKGcpLFxuICAgICAgICAgIEUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHQobiwgaSkge1xuICAgICAgICAgIGlmIChyKHRoaXMsIHQpLCB0aGlzLlRBRyA9IFwiVHJhbnNtdXhlclwiLCB0aGlzLl9lbWl0dGVyID0gbmV3IG8uZGVmYXVsdCgpLCBpLmVuYWJsZVdvcmtlciAmJiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBXb3JrZXIpIHRyeSB7XG4gICAgICAgICAgICB2YXIgcyA9IGUoXCJ3ZWJ3b3JraWZ5XCIpO3RoaXMuX3dvcmtlciA9IHModi5kZWZhdWx0KSwgdGhpcy5fd29ya2VyRGVzdHJveWluZyA9ICExLCB0aGlzLl93b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5fb25Xb3JrZXJNZXNzYWdlLmJpbmQodGhpcykpLCB0aGlzLl93b3JrZXIucG9zdE1lc3NhZ2UoeyBjbWQ6IFwiaW5pdFwiLCBwYXJhbTogW24sIGldIH0pLCB0aGlzLmUgPSB7IG9uTG9nZ2luZ0NvbmZpZ0NoYW5nZWQ6IHRoaXMuX29uTG9nZ2luZ0NvbmZpZ0NoYW5nZWQuYmluZCh0aGlzKSB9LCBoLmRlZmF1bHQucmVnaXN0ZXJMaXN0ZW5lcih0aGlzLmUub25Mb2dnaW5nQ29uZmlnQ2hhbmdlZCksIHRoaXMuX3dvcmtlci5wb3N0TWVzc2FnZSh7IGNtZDogXCJsb2dnaW5nX2NvbmZpZ1wiLCBwYXJhbTogaC5kZWZhdWx0LmdldENvbmZpZygpIH0pO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGwuZGVmYXVsdC5lKHRoaXMuVEFHLCBcIkVycm9yIHdoaWxlIGluaXRpYWxpemUgdHJhbnNtdXhpbmcgd29ya2VyLCBmYWxsYmFjayB0byBpbmxpbmUgdHJhbnNtdXhpbmdcIiksIHRoaXMuX3dvcmtlciA9IG51bGwsIHRoaXMuX2NvbnRyb2xsZXIgPSBuZXcgYy5kZWZhdWx0KG4sIGkpO1xuICAgICAgICAgIH0gZWxzZSB0aGlzLl9jb250cm9sbGVyID0gbmV3IGMuZGVmYXVsdChuLCBpKTtpZiAodGhpcy5fY29udHJvbGxlcikge1xuICAgICAgICAgICAgdmFyIGEgPSB0aGlzLl9jb250cm9sbGVyO2Eub24obS5kZWZhdWx0LklPX0VSUk9SLCB0aGlzLl9vbklPRXJyb3IuYmluZCh0aGlzKSksIGEub24obS5kZWZhdWx0LkRFTVVYX0VSUk9SLCB0aGlzLl9vbkRlbXV4RXJyb3IuYmluZCh0aGlzKSksIGEub24obS5kZWZhdWx0LklOSVRfU0VHTUVOVCwgdGhpcy5fb25Jbml0U2VnbWVudC5iaW5kKHRoaXMpKSwgYS5vbihtLmRlZmF1bHQuTUVESUFfU0VHTUVOVCwgdGhpcy5fb25NZWRpYVNlZ21lbnQuYmluZCh0aGlzKSksIGEub24obS5kZWZhdWx0LkxPQURJTkdfQ09NUExFVEUsIHRoaXMuX29uTG9hZGluZ0NvbXBsZXRlLmJpbmQodGhpcykpLCBhLm9uKG0uZGVmYXVsdC5SRUNPVkVSRURfRUFSTFlfRU9GLCB0aGlzLl9vblJlY292ZXJlZEVhcmx5RW9mLmJpbmQodGhpcykpLCBhLm9uKG0uZGVmYXVsdC5NRURJQV9JTkZPLCB0aGlzLl9vbk1lZGlhSW5mby5iaW5kKHRoaXMpKSwgYS5vbihtLmRlZmF1bHQuTUVUQURBVEFfQVJSSVZFRCwgdGhpcy5fb25NZXRhRGF0YUFycml2ZWQuYmluZCh0aGlzKSksIGEub24obS5kZWZhdWx0LlNDUklQVERBVEFfQVJSSVZFRCwgdGhpcy5fb25TY3JpcHREYXRhQXJyaXZlZC5iaW5kKHRoaXMpKSwgYS5vbihtLmRlZmF1bHQuU1RBVElTVElDU19JTkZPLCB0aGlzLl9vblN0YXRpc3RpY3NJbmZvLmJpbmQodGhpcykpLCBhLm9uKG0uZGVmYXVsdC5SRUNPTU1FTkRfU0VFS1BPSU5ULCB0aGlzLl9vblJlY29tbWVuZFNlZWtwb2ludC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1yZXR1cm4gcyh0LCBbeyBrZXk6IFwiZGVzdHJveVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPyB0aGlzLl93b3JrZXJEZXN0cm95aW5nIHx8ICh0aGlzLl93b3JrZXJEZXN0cm95aW5nID0gITAsIHRoaXMuX3dvcmtlci5wb3N0TWVzc2FnZSh7IGNtZDogXCJkZXN0cm95XCIgfSksIGguZGVmYXVsdC5yZW1vdmVMaXN0ZW5lcih0aGlzLmUub25Mb2dnaW5nQ29uZmlnQ2hhbmdlZCksIHRoaXMuZSA9IG51bGwpIDogKHRoaXMuX2NvbnRyb2xsZXIuZGVzdHJveSgpLCB0aGlzLl9jb250cm9sbGVyID0gbnVsbCksIHRoaXMuX2VtaXR0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCksIHRoaXMuX2VtaXR0ZXIgPSBudWxsO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25cIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXIuYWRkTGlzdGVuZXIoZSwgdCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvZmZcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoZSwgdCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJoYXNXb3JrZXJcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGwgIT0gdGhpcy5fd29ya2VyO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib3BlblwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPyB0aGlzLl93b3JrZXIucG9zdE1lc3NhZ2UoeyBjbWQ6IFwic3RhcnRcIiB9KSA6IHRoaXMuX2NvbnRyb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImNsb3NlXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlciA/IHRoaXMuX3dvcmtlci5wb3N0TWVzc2FnZSh7IGNtZDogXCJzdG9wXCIgfSkgOiB0aGlzLl9jb250cm9sbGVyLnN0b3AoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInNlZWtcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlciA/IHRoaXMuX3dvcmtlci5wb3N0TWVzc2FnZSh7IGNtZDogXCJzZWVrXCIsIHBhcmFtOiBlIH0pIDogdGhpcy5fY29udHJvbGxlci5zZWVrKGUpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwicGF1c2VcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fd29ya2VyID8gdGhpcy5fd29ya2VyLnBvc3RNZXNzYWdlKHsgY21kOiBcInBhdXNlXCIgfSkgOiB0aGlzLl9jb250cm9sbGVyLnBhdXNlKCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJyZXN1bWVcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fd29ya2VyID8gdGhpcy5fd29ya2VyLnBvc3RNZXNzYWdlKHsgY21kOiBcInJlc3VtZVwiIH0pIDogdGhpcy5fY29udHJvbGxlci5yZXN1bWUoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbkluaXRTZWdtZW50XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXM7UHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG4uX2VtaXR0ZXIuZW1pdChtLmRlZmF1bHQuSU5JVF9TRUdNRU5ULCBlLCB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uTWVkaWFTZWdtZW50XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXM7UHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG4uX2VtaXR0ZXIuZW1pdChtLmRlZmF1bHQuTUVESUFfU0VHTUVOVCwgZSwgdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbkxvYWRpbmdDb21wbGV0ZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXM7UHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGUuX2VtaXR0ZXIuZW1pdChtLmRlZmF1bHQuTE9BRElOR19DT01QTEVURSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vblJlY292ZXJlZEVhcmx5RW9mXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcztQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZS5fZW1pdHRlci5lbWl0KG0uZGVmYXVsdC5SRUNPVkVSRURfRUFSTFlfRU9GKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uTWVkaWFJbmZvXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXM7UHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHQuX2VtaXR0ZXIuZW1pdChtLmRlZmF1bHQuTUVESUFfSU5GTywgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbk1ldGFEYXRhQXJyaXZlZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0Ll9lbWl0dGVyLmVtaXQobS5kZWZhdWx0Lk1FVEFEQVRBX0FSUklWRUQsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25TY3JpcHREYXRhQXJyaXZlZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0Ll9lbWl0dGVyLmVtaXQobS5kZWZhdWx0LlNDUklQVERBVEFfQVJSSVZFRCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vblN0YXRpc3RpY3NJbmZvXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXM7UHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHQuX2VtaXR0ZXIuZW1pdChtLmRlZmF1bHQuU1RBVElTVElDU19JTkZPLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uSU9FcnJvclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzO1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBuLl9lbWl0dGVyLmVtaXQobS5kZWZhdWx0LklPX0VSUk9SLCBlLCB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uRGVtdXhFcnJvclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzO1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBuLl9lbWl0dGVyLmVtaXQobS5kZWZhdWx0LkRFTVVYX0VSUk9SLCBlLCB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uUmVjb21tZW5kU2Vla3BvaW50XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXM7UHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHQuX2VtaXR0ZXIuZW1pdChtLmRlZmF1bHQuUkVDT01NRU5EX1NFRUtQT0lOVCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbkxvZ2dpbmdDb25maWdDaGFuZ2VkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgJiYgdGhpcy5fd29ya2VyLnBvc3RNZXNzYWdlKHsgY21kOiBcImxvZ2dpbmdfY29uZmlnXCIsIHBhcmFtOiBlIH0pO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uV29ya2VyTWVzc2FnZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGEsXG4gICAgICAgICAgICAgICAgbiA9IHQuZGF0YTtpZiAoXCJkZXN0cm95ZWRcIiA9PT0gdC5tc2cgfHwgdGhpcy5fd29ya2VyRGVzdHJveWluZykgcmV0dXJuIHRoaXMuX3dvcmtlckRlc3Ryb3lpbmcgPSAhMSwgdGhpcy5fd29ya2VyLnRlcm1pbmF0ZSgpLCB2b2lkICh0aGlzLl93b3JrZXIgPSBudWxsKTtzd2l0Y2ggKHQubXNnKSB7Y2FzZSBtLmRlZmF1bHQuSU5JVF9TRUdNRU5UOmNhc2UgbS5kZWZhdWx0Lk1FRElBX1NFR01FTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KHQubXNnLCBuLnR5cGUsIG4uZGF0YSk7YnJlYWs7Y2FzZSBtLmRlZmF1bHQuTE9BRElOR19DT01QTEVURTpjYXNlIG0uZGVmYXVsdC5SRUNPVkVSRURfRUFSTFlfRU9GOlxuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCh0Lm1zZyk7YnJlYWs7Y2FzZSBtLmRlZmF1bHQuTUVESUFfSU5GTzpcbiAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YobiwgeS5kZWZhdWx0LnByb3RvdHlwZSksIHRoaXMuX2VtaXR0ZXIuZW1pdCh0Lm1zZywgbik7YnJlYWs7Y2FzZSBtLmRlZmF1bHQuTUVUQURBVEFfQVJSSVZFRDpjYXNlIG0uZGVmYXVsdC5TQ1JJUFREQVRBX0FSUklWRUQ6Y2FzZSBtLmRlZmF1bHQuU1RBVElTVElDU19JTkZPOlxuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCh0Lm1zZywgbik7YnJlYWs7Y2FzZSBtLmRlZmF1bHQuSU9fRVJST1I6Y2FzZSBtLmRlZmF1bHQuREVNVVhfRVJST1I6XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KHQubXNnLCBuLnR5cGUsIG4uaW5mbyk7YnJlYWs7Y2FzZSBtLmRlZmF1bHQuUkVDT01NRU5EX1NFRUtQT0lOVDpcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0dGVyLmVtaXQodC5tc2csIG4pO2JyZWFrO2Nhc2UgXCJsb2djYXRfY2FsbGJhY2tcIjpcbiAgICAgICAgICAgICAgICBsLmRlZmF1bHQuZW1pdHRlci5lbWl0KFwibG9nXCIsIG4udHlwZSwgbi5sb2djYXQpO31cbiAgICAgICAgICB9IH1dKSwgdDtcbiAgICAgIH0oKTtuLmRlZmF1bHQgPSBFO1xuICAgIH0sIHsgXCIuLi91dGlscy9sb2dnZXIuanNcIjogNDEsIFwiLi4vdXRpbHMvbG9nZ2luZy1jb250cm9sLmpzXCI6IDQyLCBcIi4vbWVkaWEtaW5mby5qc1wiOiA3LCBcIi4vdHJhbnNtdXhpbmctY29udHJvbGxlci5qc1wiOiAxMiwgXCIuL3RyYW5zbXV4aW5nLWV2ZW50cy5qc1wiOiAxMywgXCIuL3RyYW5zbXV4aW5nLXdvcmtlci5qc1wiOiAxNCwgZXZlbnRzOiAyLCB3ZWJ3b3JraWZ5OiA0IH1dLCAxMjogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07XG4gICAgICB9ZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgYSA9IGUoXCJldmVudHNcIiksXG4gICAgICAgICAgbyA9IGkoYSksXG4gICAgICAgICAgdSA9IGUoXCIuLi91dGlscy9sb2dnZXIuanNcIiksXG4gICAgICAgICAgbCA9IGkodSksXG4gICAgICAgICAgZCA9IGUoXCIuLi91dGlscy9icm93c2VyLmpzXCIpLFxuICAgICAgICAgIGggPSBpKGQpLFxuICAgICAgICAgIGYgPSBlKFwiLi9tZWRpYS1pbmZvLmpzXCIpLFxuICAgICAgICAgIGMgPSBpKGYpLFxuICAgICAgICAgIF8gPSBlKFwiLi4vZGVtdXgvZmx2LWRlbXV4ZXIuanNcIiksXG4gICAgICAgICAgbSA9IGkoXyksXG4gICAgICAgICAgcCA9IGUoXCIuLi9yZW11eC9tcDQtcmVtdXhlci5qc1wiKSxcbiAgICAgICAgICB2ID0gaShwKSxcbiAgICAgICAgICBnID0gZShcIi4uL2RlbXV4L2RlbXV4LWVycm9ycy5qc1wiKSxcbiAgICAgICAgICB5ID0gaShnKSxcbiAgICAgICAgICBFID0gZShcIi4uL2lvL2lvLWNvbnRyb2xsZXIuanNcIiksXG4gICAgICAgICAgYiA9IGkoRSksXG4gICAgICAgICAgUyA9IGUoXCIuL3RyYW5zbXV4aW5nLWV2ZW50cy5qc1wiKSxcbiAgICAgICAgICBrID0gaShTKSxcbiAgICAgICAgICBMID0gKGUoXCIuLi9pby9sb2FkZXIuanNcIiksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSh0LCBuKSB7XG4gICAgICAgICAgcih0aGlzLCBlKSwgdGhpcy5UQUcgPSBcIlRyYW5zbXV4aW5nQ29udHJvbGxlclwiLCB0aGlzLl9lbWl0dGVyID0gbmV3IG8uZGVmYXVsdCgpLCB0aGlzLl9jb25maWcgPSBuLCB0LnNlZ21lbnRzIHx8ICh0LnNlZ21lbnRzID0gW3sgZHVyYXRpb246IHQuZHVyYXRpb24sIGZpbGVzaXplOiB0LmZpbGVzaXplLCB1cmw6IHQudXJsIH1dKSwgXCJib29sZWFuXCIgIT0gdHlwZW9mIHQuY29ycyAmJiAodC5jb3JzID0gITApLCBcImJvb2xlYW5cIiAhPSB0eXBlb2YgdC53aXRoQ3JlZGVudGlhbHMgJiYgKHQud2l0aENyZWRlbnRpYWxzID0gITEpLCB0aGlzLl9tZWRpYURhdGFTb3VyY2UgPSB0LCB0aGlzLl9jdXJyZW50U2VnbWVudEluZGV4ID0gMDt2YXIgaSA9IDA7dGhpcy5fbWVkaWFEYXRhU291cmNlLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUudGltZXN0YW1wQmFzZSA9IGksIGkgKz0gZS5kdXJhdGlvbiwgZS5jb3JzID0gdC5jb3JzLCBlLndpdGhDcmVkZW50aWFscyA9IHQud2l0aENyZWRlbnRpYWxzLCBuLnJlZmVycmVyUG9saWN5ICYmIChlLnJlZmVycmVyUG9saWN5ID0gbi5yZWZlcnJlclBvbGljeSk7XG4gICAgICAgICAgfSksIGlzTmFOKGkpIHx8IHRoaXMuX21lZGlhRGF0YVNvdXJjZS5kdXJhdGlvbiA9PT0gaSB8fCAodGhpcy5fbWVkaWFEYXRhU291cmNlLmR1cmF0aW9uID0gaSksIHRoaXMuX21lZGlhSW5mbyA9IG51bGwsIHRoaXMuX2RlbXV4ZXIgPSBudWxsLCB0aGlzLl9yZW11eGVyID0gbnVsbCwgdGhpcy5faW9jdGwgPSBudWxsLCB0aGlzLl9wZW5kaW5nU2Vla1RpbWUgPSBudWxsLCB0aGlzLl9wZW5kaW5nUmVzb2x2ZVNlZWtQb2ludCA9IG51bGwsIHRoaXMuX3N0YXRpc3RpY3NSZXBvcnRlciA9IG51bGw7XG4gICAgICAgIH1yZXR1cm4gcyhlLCBbeyBrZXk6IFwiZGVzdHJveVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUluZm8gPSBudWxsLCB0aGlzLl9tZWRpYURhdGFTb3VyY2UgPSBudWxsLCB0aGlzLl9zdGF0aXN0aWNzUmVwb3J0ZXIgJiYgdGhpcy5fZGlzYWJsZVN0YXRpc3RpY3NSZXBvcnRlcigpLCB0aGlzLl9pb2N0bCAmJiAodGhpcy5faW9jdGwuZGVzdHJveSgpLCB0aGlzLl9pb2N0bCA9IG51bGwpLCB0aGlzLl9kZW11eGVyICYmICh0aGlzLl9kZW11eGVyLmRlc3Ryb3koKSwgdGhpcy5fZGVtdXhlciA9IG51bGwpLCB0aGlzLl9yZW11eGVyICYmICh0aGlzLl9yZW11eGVyLmRlc3Ryb3koKSwgdGhpcy5fcmVtdXhlciA9IG51bGwpLCB0aGlzLl9lbWl0dGVyLnJlbW92ZUFsbExpc3RlbmVycygpLCB0aGlzLl9lbWl0dGVyID0gbnVsbDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIm9uXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0dGVyLmFkZExpc3RlbmVyKGUsIHQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib2ZmXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGUsIHQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwic3RhcnRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fbG9hZFNlZ21lbnQoMCksIHRoaXMuX2VuYWJsZVN0YXRpc3RpY3NSZXBvcnRlcigpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX2xvYWRTZWdtZW50XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U2VnbWVudEluZGV4ID0gZTt2YXIgbiA9IHRoaXMuX21lZGlhRGF0YVNvdXJjZS5zZWdtZW50c1tlXSxcbiAgICAgICAgICAgICAgICBpID0gdGhpcy5faW9jdGwgPSBuZXcgYi5kZWZhdWx0KG4sIHRoaXMuX2NvbmZpZywgZSk7aS5vbkVycm9yID0gdGhpcy5fb25JT0V4Y2VwdGlvbi5iaW5kKHRoaXMpLCBpLm9uU2Vla2VkID0gdGhpcy5fb25JT1NlZWtlZC5iaW5kKHRoaXMpLCBpLm9uQ29tcGxldGUgPSB0aGlzLl9vbklPQ29tcGxldGUuYmluZCh0aGlzKSwgaS5vblJlZGlyZWN0ID0gdGhpcy5fb25JT1JlZGlyZWN0LmJpbmQodGhpcyksIGkub25SZWNvdmVyZWRFYXJseUVvZiA9IHRoaXMuX29uSU9SZWNvdmVyZWRFYXJseUVvZi5iaW5kKHRoaXMpLCB0ID8gdGhpcy5fZGVtdXhlci5iaW5kRGF0YVNvdXJjZSh0aGlzLl9pb2N0bCkgOiBpLm9uRGF0YUFycml2YWwgPSB0aGlzLl9vbkluaXRDaHVua0Fycml2YWwuYmluZCh0aGlzKSwgaS5vcGVuKHQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwic3RvcFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFib3J0KCksIHRoaXMuX2Rpc2FibGVTdGF0aXN0aWNzUmVwb3J0ZXIoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9pbnRlcm5hbEFib3J0XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX2lvY3RsICYmICh0aGlzLl9pb2N0bC5kZXN0cm95KCksIHRoaXMuX2lvY3RsID0gbnVsbCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJwYXVzZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9pb2N0bCAmJiB0aGlzLl9pb2N0bC5pc1dvcmtpbmcoKSAmJiAodGhpcy5faW9jdGwucGF1c2UoKSwgdGhpcy5fZGlzYWJsZVN0YXRpc3RpY3NSZXBvcnRlcigpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInJlc3VtZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9pb2N0bCAmJiB0aGlzLl9pb2N0bC5pc1BhdXNlZCgpICYmICh0aGlzLl9pb2N0bC5yZXN1bWUoKSwgdGhpcy5fZW5hYmxlU3RhdGlzdGljc1JlcG9ydGVyKCkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwic2Vla1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5fbWVkaWFJbmZvICYmIHRoaXMuX21lZGlhSW5mby5pc1NlZWthYmxlKCkpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9zZWFyY2hTZWdtZW50SW5kZXhDb250YWlucyhlKTtpZiAodCA9PT0gdGhpcy5fY3VycmVudFNlZ21lbnRJbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5fbWVkaWFJbmZvLnNlZ21lbnRzW3RdO2lmICh2b2lkIDAgPT0gbikgdGhpcy5fcGVuZGluZ1NlZWtUaW1lID0gZTtlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBpID0gbi5nZXROZWFyZXN0S2V5ZnJhbWUoZSk7dGhpcy5fcmVtdXhlci5zZWVrKGkubWlsbGlzZWNvbmRzKSwgdGhpcy5faW9jdGwuc2VlayhpLmZpbGVwb3NpdGlvbiksIHRoaXMuX3BlbmRpbmdSZXNvbHZlU2Vla1BvaW50ID0gaS5taWxsaXNlY29uZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5fbWVkaWFJbmZvLnNlZ21lbnRzW3RdO2lmICh2b2lkIDAgPT0gcikgdGhpcy5fcGVuZGluZ1NlZWtUaW1lID0gZSwgdGhpcy5faW50ZXJuYWxBYm9ydCgpLCB0aGlzLl9yZW11eGVyLnNlZWsoKSwgdGhpcy5fcmVtdXhlci5pbnNlcnREaXNjb250aW51aXR5KCksIHRoaXMuX2xvYWRTZWdtZW50KHQpO2Vsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFyIHMgPSByLmdldE5lYXJlc3RLZXlmcmFtZShlKTt0aGlzLl9pbnRlcm5hbEFib3J0KCksIHRoaXMuX3JlbXV4ZXIuc2VlayhlKSwgdGhpcy5fcmVtdXhlci5pbnNlcnREaXNjb250aW51aXR5KCksIHRoaXMuX2RlbXV4ZXIucmVzZXRNZWRpYUluZm8oKSwgdGhpcy5fZGVtdXhlci50aW1lc3RhbXBCYXNlID0gdGhpcy5fbWVkaWFEYXRhU291cmNlLnNlZ21lbnRzW3RdLnRpbWVzdGFtcEJhc2UsIHRoaXMuX2xvYWRTZWdtZW50KHQsIHMuZmlsZXBvc2l0aW9uKSwgdGhpcy5fcGVuZGluZ1Jlc29sdmVTZWVrUG9pbnQgPSBzLm1pbGxpc2Vjb25kcywgdGhpcy5fcmVwb3J0U2VnbWVudE1lZGlhSW5mbyh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH10aGlzLl9lbmFibGVTdGF0aXN0aWNzUmVwb3J0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9zZWFyY2hTZWdtZW50SW5kZXhDb250YWluc1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgdCA9IHRoaXMuX21lZGlhRGF0YVNvdXJjZS5zZWdtZW50cywgbiA9IHQubGVuZ3RoIC0gMSwgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChlIDwgdFtpXS50aW1lc3RhbXBCYXNlKSB7XG4gICAgICAgICAgICAgICAgbiA9IGkgLSAxO2JyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9cmV0dXJuIG47XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25Jbml0Q2h1bmtBcnJpdmFsXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaSA9IG51bGwsXG4gICAgICAgICAgICAgICAgciA9IDA7aWYgKHQgPiAwKSB0aGlzLl9kZW11eGVyLmJpbmREYXRhU291cmNlKHRoaXMuX2lvY3RsKSwgdGhpcy5fZGVtdXhlci50aW1lc3RhbXBCYXNlID0gdGhpcy5fbWVkaWFEYXRhU291cmNlLnNlZ21lbnRzW3RoaXMuX2N1cnJlbnRTZWdtZW50SW5kZXhdLnRpbWVzdGFtcEJhc2UsIHIgPSB0aGlzLl9kZW11eGVyLnBhcnNlQ2h1bmtzKGUsIHQpO2Vsc2UgaWYgKChpID0gbS5kZWZhdWx0LnByb2JlKGUpKS5tYXRjaCkge1xuICAgICAgICAgICAgICB0aGlzLl9kZW11eGVyID0gbmV3IG0uZGVmYXVsdChpLCB0aGlzLl9jb25maWcpLCB0aGlzLl9yZW11eGVyIHx8ICh0aGlzLl9yZW11eGVyID0gbmV3IHYuZGVmYXVsdCh0aGlzLl9jb25maWcpKTt2YXIgcyA9IHRoaXMuX21lZGlhRGF0YVNvdXJjZTt2b2lkIDAgPT0gcy5kdXJhdGlvbiB8fCBpc05hTihzLmR1cmF0aW9uKSB8fCAodGhpcy5fZGVtdXhlci5vdmVycmlkZWREdXJhdGlvbiA9IHMuZHVyYXRpb24pLCBcImJvb2xlYW5cIiA9PSB0eXBlb2Ygcy5oYXNBdWRpbyAmJiAodGhpcy5fZGVtdXhlci5vdmVycmlkZWRIYXNBdWRpbyA9IHMuaGFzQXVkaW8pLCBcImJvb2xlYW5cIiA9PSB0eXBlb2Ygcy5oYXNWaWRlbyAmJiAodGhpcy5fZGVtdXhlci5vdmVycmlkZWRIYXNWaWRlbyA9IHMuaGFzVmlkZW8pLCB0aGlzLl9kZW11eGVyLnRpbWVzdGFtcEJhc2UgPSBzLnNlZ21lbnRzW3RoaXMuX2N1cnJlbnRTZWdtZW50SW5kZXhdLnRpbWVzdGFtcEJhc2UsIHRoaXMuX2RlbXV4ZXIub25FcnJvciA9IHRoaXMuX29uRGVtdXhFeGNlcHRpb24uYmluZCh0aGlzKSwgdGhpcy5fZGVtdXhlci5vbk1lZGlhSW5mbyA9IHRoaXMuX29uTWVkaWFJbmZvLmJpbmQodGhpcyksIHRoaXMuX2RlbXV4ZXIub25NZXRhRGF0YUFycml2ZWQgPSB0aGlzLl9vbk1ldGFEYXRhQXJyaXZlZC5iaW5kKHRoaXMpLCB0aGlzLl9kZW11eGVyLm9uU2NyaXB0RGF0YUFycml2ZWQgPSB0aGlzLl9vblNjcmlwdERhdGFBcnJpdmVkLmJpbmQodGhpcyksIHRoaXMuX3JlbXV4ZXIuYmluZERhdGFTb3VyY2UodGhpcy5fZGVtdXhlci5iaW5kRGF0YVNvdXJjZSh0aGlzLl9pb2N0bCkpLCB0aGlzLl9yZW11eGVyLm9uSW5pdFNlZ21lbnQgPSB0aGlzLl9vblJlbXV4ZXJJbml0U2VnbWVudEFycml2YWwuYmluZCh0aGlzKSwgdGhpcy5fcmVtdXhlci5vbk1lZGlhU2VnbWVudCA9IHRoaXMuX29uUmVtdXhlck1lZGlhU2VnbWVudEFycml2YWwuYmluZCh0aGlzKSwgciA9IHRoaXMuX2RlbXV4ZXIucGFyc2VDaHVua3MoZSwgdCk7XG4gICAgICAgICAgICB9IGVsc2UgaSA9IG51bGwsIGwuZGVmYXVsdC5lKHRoaXMuVEFHLCBcIk5vbi1GTFYsIFVuc3VwcG9ydGVkIG1lZGlhIHR5cGUhXCIpLCBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbi5faW50ZXJuYWxBYm9ydCgpO1xuICAgICAgICAgICAgfSksIHRoaXMuX2VtaXR0ZXIuZW1pdChrLmRlZmF1bHQuREVNVVhfRVJST1IsIHkuZGVmYXVsdC5GT1JNQVRfVU5TVVBQT1JURUQsIFwiTm9uLUZMViwgVW5zdXBwb3J0ZWQgbWVkaWEgdHlwZVwiKSwgciA9IDA7cmV0dXJuIHI7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25NZWRpYUluZm9cIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztudWxsID09IHRoaXMuX21lZGlhSW5mbyAmJiAodGhpcy5fbWVkaWFJbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgZSksIHRoaXMuX21lZGlhSW5mby5rZXlmcmFtZXNJbmRleCA9IG51bGwsIHRoaXMuX21lZGlhSW5mby5zZWdtZW50cyA9IFtdLCB0aGlzLl9tZWRpYUluZm8uc2VnbWVudENvdW50ID0gdGhpcy5fbWVkaWFEYXRhU291cmNlLnNlZ21lbnRzLmxlbmd0aCwgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuX21lZGlhSW5mbywgYy5kZWZhdWx0LnByb3RvdHlwZSkpO3ZhciBuID0gT2JqZWN0LmFzc2lnbih7fSwgZSk7T2JqZWN0LnNldFByb3RvdHlwZU9mKG4sIGMuZGVmYXVsdC5wcm90b3R5cGUpLCB0aGlzLl9tZWRpYUluZm8uc2VnbWVudHNbdGhpcy5fY3VycmVudFNlZ21lbnRJbmRleF0gPSBuLCB0aGlzLl9yZXBvcnRTZWdtZW50TWVkaWFJbmZvKHRoaXMuX2N1cnJlbnRTZWdtZW50SW5kZXgpLCBudWxsICE9IHRoaXMuX3BlbmRpbmdTZWVrVGltZSAmJiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGUgPSB0Ll9wZW5kaW5nU2Vla1RpbWU7dC5fcGVuZGluZ1NlZWtUaW1lID0gbnVsbCwgdC5zZWVrKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25NZXRhRGF0YUFycml2ZWRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChrLmRlZmF1bHQuTUVUQURBVEFfQVJSSVZFRCwgZSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25TY3JpcHREYXRhQXJyaXZlZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KGsuZGVmYXVsdC5TQ1JJUFREQVRBX0FSUklWRUQsIGUpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uSU9TZWVrZWRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fcmVtdXhlci5pbnNlcnREaXNjb250aW51aXR5KCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25JT0NvbXBsZXRlXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUsXG4gICAgICAgICAgICAgICAgbiA9IHQgKyAxO24gPCB0aGlzLl9tZWRpYURhdGFTb3VyY2Uuc2VnbWVudHMubGVuZ3RoID8gKHRoaXMuX2ludGVybmFsQWJvcnQoKSwgdGhpcy5fcmVtdXhlci5mbHVzaFN0YXNoZWRTYW1wbGVzKCksIHRoaXMuX2xvYWRTZWdtZW50KG4pKSA6ICh0aGlzLl9yZW11eGVyLmZsdXNoU3Rhc2hlZFNhbXBsZXMoKSwgdGhpcy5fZW1pdHRlci5lbWl0KGsuZGVmYXVsdC5MT0FESU5HX0NPTVBMRVRFKSwgdGhpcy5fZGlzYWJsZVN0YXRpc3RpY3NSZXBvcnRlcigpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbklPUmVkaXJlY3RcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5faW9jdGwuZXh0cmFEYXRhO3RoaXMuX21lZGlhRGF0YVNvdXJjZS5zZWdtZW50c1t0XS5yZWRpcmVjdGVkVVJMID0gZTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbklPUmVjb3ZlcmVkRWFybHlFb2ZcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KGsuZGVmYXVsdC5SRUNPVkVSRURfRUFSTFlfRU9GKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbklPRXhjZXB0aW9uXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICBsLmRlZmF1bHQuZSh0aGlzLlRBRywgXCJJT0V4Y2VwdGlvbjogdHlwZSA9IFwiICsgZSArIFwiLCBjb2RlID0gXCIgKyB0LmNvZGUgKyBcIiwgbXNnID0gXCIgKyB0Lm1zZyksIHRoaXMuX2VtaXR0ZXIuZW1pdChrLmRlZmF1bHQuSU9fRVJST1IsIGUsIHQpLCB0aGlzLl9kaXNhYmxlU3RhdGlzdGljc1JlcG9ydGVyKCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25EZW11eEV4Y2VwdGlvblwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgbC5kZWZhdWx0LmUodGhpcy5UQUcsIFwiRGVtdXhFeGNlcHRpb246IHR5cGUgPSBcIiArIGUgKyBcIiwgaW5mbyA9IFwiICsgdCksIHRoaXMuX2VtaXR0ZXIuZW1pdChrLmRlZmF1bHQuREVNVVhfRVJST1IsIGUsIHQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uUmVtdXhlckluaXRTZWdtZW50QXJyaXZhbFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KGsuZGVmYXVsdC5JTklUX1NFR01FTlQsIGUsIHQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uUmVtdXhlck1lZGlhU2VnbWVudEFycml2YWxcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09IHRoaXMuX3BlbmRpbmdTZWVrVGltZSAmJiAodGhpcy5fZW1pdHRlci5lbWl0KGsuZGVmYXVsdC5NRURJQV9TRUdNRU5ULCBlLCB0KSwgbnVsbCAhPSB0aGlzLl9wZW5kaW5nUmVzb2x2ZVNlZWtQb2ludCAmJiBcInZpZGVvXCIgPT09IGUpKSB7XG4gICAgICAgICAgICAgIHZhciBuID0gdC5pbmZvLnN5bmNQb2ludHMsXG4gICAgICAgICAgICAgICAgICBpID0gdGhpcy5fcGVuZGluZ1Jlc29sdmVTZWVrUG9pbnQ7dGhpcy5fcGVuZGluZ1Jlc29sdmVTZWVrUG9pbnQgPSBudWxsLCBoLmRlZmF1bHQuc2FmYXJpICYmIG4ubGVuZ3RoID4gMCAmJiBuWzBdLm9yaWdpbmFsRHRzID09PSBpICYmIChpID0gblswXS5wdHMpLCB0aGlzLl9lbWl0dGVyLmVtaXQoay5kZWZhdWx0LlJFQ09NTUVORF9TRUVLUE9JTlQsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX2VuYWJsZVN0YXRpc3RpY3NSZXBvcnRlclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICBudWxsID09IHRoaXMuX3N0YXRpc3RpY3NSZXBvcnRlciAmJiAodGhpcy5fc3RhdGlzdGljc1JlcG9ydGVyID0gc2VsZi5zZXRJbnRlcnZhbCh0aGlzLl9yZXBvcnRTdGF0aXN0aWNzSW5mby5iaW5kKHRoaXMpLCB0aGlzLl9jb25maWcuc3RhdGlzdGljc0luZm9SZXBvcnRJbnRlcnZhbCkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX2Rpc2FibGVTdGF0aXN0aWNzUmVwb3J0ZXJcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGlzdGljc1JlcG9ydGVyICYmIChzZWxmLmNsZWFySW50ZXJ2YWwodGhpcy5fc3RhdGlzdGljc1JlcG9ydGVyKSwgdGhpcy5fc3RhdGlzdGljc1JlcG9ydGVyID0gbnVsbCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfcmVwb3J0U2VnbWVudE1lZGlhSW5mb1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9tZWRpYUluZm8uc2VnbWVudHNbZV0sXG4gICAgICAgICAgICAgICAgbiA9IE9iamVjdC5hc3NpZ24oe30sIHQpO24uZHVyYXRpb24gPSB0aGlzLl9tZWRpYUluZm8uZHVyYXRpb24sIG4uc2VnbWVudENvdW50ID0gdGhpcy5fbWVkaWFJbmZvLnNlZ21lbnRDb3VudCwgZGVsZXRlIG4uc2VnbWVudHMsIGRlbGV0ZSBuLmtleWZyYW1lc0luZGV4LCB0aGlzLl9lbWl0dGVyLmVtaXQoay5kZWZhdWx0Lk1FRElBX0lORk8sIG4pO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX3JlcG9ydFN0YXRpc3RpY3NJbmZvXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0ge307ZS51cmwgPSB0aGlzLl9pb2N0bC5jdXJyZW50VVJMLCBlLmhhc1JlZGlyZWN0ID0gdGhpcy5faW9jdGwuaGFzUmVkaXJlY3QsIGUuaGFzUmVkaXJlY3QgJiYgKGUucmVkaXJlY3RlZFVSTCA9IHRoaXMuX2lvY3RsLmN1cnJlbnRSZWRpcmVjdGVkVVJMKSwgZS5zcGVlZCA9IHRoaXMuX2lvY3RsLmN1cnJlbnRTcGVlZCwgZS5sb2FkZXJUeXBlID0gdGhpcy5faW9jdGwubG9hZGVyVHlwZSwgZS5jdXJyZW50U2VnbWVudEluZGV4ID0gdGhpcy5fY3VycmVudFNlZ21lbnRJbmRleCwgZS50b3RhbFNlZ21lbnRDb3VudCA9IHRoaXMuX21lZGlhRGF0YVNvdXJjZS5zZWdtZW50cy5sZW5ndGgsIHRoaXMuX2VtaXR0ZXIuZW1pdChrLmRlZmF1bHQuU1RBVElTVElDU19JTkZPLCBlKTtcbiAgICAgICAgICB9IH1dKSwgZTtcbiAgICAgIH0oKSk7bi5kZWZhdWx0ID0gTDtcbiAgICB9LCB7IFwiLi4vZGVtdXgvZGVtdXgtZXJyb3JzLmpzXCI6IDE2LCBcIi4uL2RlbXV4L2Zsdi1kZW11eGVyLmpzXCI6IDE4LCBcIi4uL2lvL2lvLWNvbnRyb2xsZXIuanNcIjogMjMsIFwiLi4vaW8vbG9hZGVyLmpzXCI6IDI0LCBcIi4uL3JlbXV4L21wNC1yZW11eGVyLmpzXCI6IDM4LCBcIi4uL3V0aWxzL2Jyb3dzZXIuanNcIjogMzksIFwiLi4vdXRpbHMvbG9nZ2VyLmpzXCI6IDQxLCBcIi4vbWVkaWEtaW5mby5qc1wiOiA3LCBcIi4vdHJhbnNtdXhpbmctZXZlbnRzLmpzXCI6IDEzLCBldmVudHM6IDIgfV0sIDEzOiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgaSA9IHsgSU9fRVJST1I6IFwiaW9fZXJyb3JcIiwgREVNVVhfRVJST1I6IFwiZGVtdXhfZXJyb3JcIiwgSU5JVF9TRUdNRU5UOiBcImluaXRfc2VnbWVudFwiLCBNRURJQV9TRUdNRU5UOiBcIm1lZGlhX3NlZ21lbnRcIiwgTE9BRElOR19DT01QTEVURTogXCJsb2FkaW5nX2NvbXBsZXRlXCIsIFJFQ09WRVJFRF9FQVJMWV9FT0Y6IFwicmVjb3ZlcmVkX2Vhcmx5X2VvZlwiLCBNRURJQV9JTkZPOiBcIm1lZGlhX2luZm9cIiwgTUVUQURBVEFfQVJSSVZFRDogXCJtZXRhZGF0YV9hcnJpdmVkXCIsIFNDUklQVERBVEFfQVJSSVZFRDogXCJzY3JpcHRkYXRhX2Fycml2ZWRcIiwgU1RBVElTVElDU19JTkZPOiBcInN0YXRpc3RpY3NfaW5mb1wiLCBSRUNPTU1FTkRfU0VFS1BPSU5UOiBcInJlY29tbWVuZF9zZWVrcG9pbnRcIiB9O24uZGVmYXVsdCA9IGk7XG4gICAgfSwge31dLCAxNDogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07XG4gICAgICB9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgciA9IGUoXCIuLi91dGlscy9sb2dnZXIuanNcIiksXG4gICAgICAgICAgcyA9IChpKHIpLCBlKFwiLi4vdXRpbHMvbG9nZ2luZy1jb250cm9sLmpzXCIpKSxcbiAgICAgICAgICBhID0gaShzKSxcbiAgICAgICAgICBvID0gZShcIi4uL3V0aWxzL3BvbHlmaWxsLmpzXCIpLFxuICAgICAgICAgIHUgPSBpKG8pLFxuICAgICAgICAgIGwgPSBlKFwiLi90cmFuc211eGluZy1jb250cm9sbGVyLmpzXCIpLFxuICAgICAgICAgIGQgPSBpKGwpLFxuICAgICAgICAgIGggPSBlKFwiLi90cmFuc211eGluZy1ldmVudHMuanNcIiksXG4gICAgICAgICAgZiA9IGkoaCksXG4gICAgICAgICAgYyA9IGZ1bmN0aW9uIGMoZSkge1xuICAgICAgICBmdW5jdGlvbiB0KHQsIG4pIHtcbiAgICAgICAgICB2YXIgaSA9IHsgbXNnOiBmLmRlZmF1bHQuSU5JVF9TRUdNRU5ULCBkYXRhOiB7IHR5cGU6IHQsIGRhdGE6IG4gfSB9O2UucG9zdE1lc3NhZ2UoaSwgW24uZGF0YV0pO1xuICAgICAgICB9ZnVuY3Rpb24gbih0LCBuKSB7XG4gICAgICAgICAgdmFyIGkgPSB7IG1zZzogZi5kZWZhdWx0Lk1FRElBX1NFR01FTlQsIGRhdGE6IHsgdHlwZTogdCwgZGF0YTogbiB9IH07ZS5wb3N0TWVzc2FnZShpLCBbbi5kYXRhXSk7XG4gICAgICAgIH1mdW5jdGlvbiBpKCkge1xuICAgICAgICAgIHZhciB0ID0geyBtc2c6IGYuZGVmYXVsdC5MT0FESU5HX0NPTVBMRVRFIH07ZS5wb3N0TWVzc2FnZSh0KTtcbiAgICAgICAgfWZ1bmN0aW9uIHIoKSB7XG4gICAgICAgICAgdmFyIHQgPSB7IG1zZzogZi5kZWZhdWx0LlJFQ09WRVJFRF9FQVJMWV9FT0YgfTtlLnBvc3RNZXNzYWdlKHQpO1xuICAgICAgICB9ZnVuY3Rpb24gcyh0KSB7XG4gICAgICAgICAgdmFyIG4gPSB7IG1zZzogZi5kZWZhdWx0Lk1FRElBX0lORk8sIGRhdGE6IHQgfTtlLnBvc3RNZXNzYWdlKG4pO1xuICAgICAgICB9ZnVuY3Rpb24gbyh0KSB7XG4gICAgICAgICAgdmFyIG4gPSB7IG1zZzogZi5kZWZhdWx0Lk1FVEFEQVRBX0FSUklWRUQsIGRhdGE6IHQgfTtlLnBvc3RNZXNzYWdlKG4pO1xuICAgICAgICB9ZnVuY3Rpb24gbCh0KSB7XG4gICAgICAgICAgdmFyIG4gPSB7IG1zZzogZi5kZWZhdWx0LlNDUklQVERBVEFfQVJSSVZFRCwgZGF0YTogdCB9O2UucG9zdE1lc3NhZ2Uobik7XG4gICAgICAgIH1mdW5jdGlvbiBoKHQpIHtcbiAgICAgICAgICB2YXIgbiA9IHsgbXNnOiBmLmRlZmF1bHQuU1RBVElTVElDU19JTkZPLCBkYXRhOiB0IH07ZS5wb3N0TWVzc2FnZShuKTtcbiAgICAgICAgfWZ1bmN0aW9uIGModCwgbikge1xuICAgICAgICAgIGUucG9zdE1lc3NhZ2UoeyBtc2c6IGYuZGVmYXVsdC5JT19FUlJPUiwgZGF0YTogeyB0eXBlOiB0LCBpbmZvOiBuIH0gfSk7XG4gICAgICAgIH1mdW5jdGlvbiBfKHQsIG4pIHtcbiAgICAgICAgICBlLnBvc3RNZXNzYWdlKHsgbXNnOiBmLmRlZmF1bHQuREVNVVhfRVJST1IsIGRhdGE6IHsgdHlwZTogdCwgaW5mbzogbiB9IH0pO1xuICAgICAgICB9ZnVuY3Rpb24gbSh0KSB7XG4gICAgICAgICAgZS5wb3N0TWVzc2FnZSh7IG1zZzogZi5kZWZhdWx0LlJFQ09NTUVORF9TRUVLUE9JTlQsIGRhdGE6IHQgfSk7XG4gICAgICAgIH1mdW5jdGlvbiBwKHQsIG4pIHtcbiAgICAgICAgICBlLnBvc3RNZXNzYWdlKHsgbXNnOiBcImxvZ2NhdF9jYWxsYmFja1wiLCBkYXRhOiB7IHR5cGU6IHQsIGxvZ2NhdDogbiB9IH0pO1xuICAgICAgICB9dmFyIHYgPSBudWxsLFxuICAgICAgICAgICAgZyA9IHAuYmluZCh0aGlzKTt1LmRlZmF1bHQuaW5zdGFsbCgpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uICh1KSB7XG4gICAgICAgICAgc3dpdGNoICh1LmRhdGEuY21kKSB7Y2FzZSBcImluaXRcIjpcbiAgICAgICAgICAgICAgdiA9IG5ldyBkLmRlZmF1bHQodS5kYXRhLnBhcmFtWzBdLCB1LmRhdGEucGFyYW1bMV0pLCB2Lm9uKGYuZGVmYXVsdC5JT19FUlJPUiwgYy5iaW5kKHRoaXMpKSwgdi5vbihmLmRlZmF1bHQuREVNVVhfRVJST1IsIF8uYmluZCh0aGlzKSksIHYub24oZi5kZWZhdWx0LklOSVRfU0VHTUVOVCwgdC5iaW5kKHRoaXMpKSwgdi5vbihmLmRlZmF1bHQuTUVESUFfU0VHTUVOVCwgbi5iaW5kKHRoaXMpKSwgdi5vbihmLmRlZmF1bHQuTE9BRElOR19DT01QTEVURSwgaS5iaW5kKHRoaXMpKSwgdi5vbihmLmRlZmF1bHQuUkVDT1ZFUkVEX0VBUkxZX0VPRiwgci5iaW5kKHRoaXMpKSwgdi5vbihmLmRlZmF1bHQuTUVESUFfSU5GTywgcy5iaW5kKHRoaXMpKSwgdi5vbihmLmRlZmF1bHQuTUVUQURBVEFfQVJSSVZFRCwgby5iaW5kKHRoaXMpKSwgdi5vbihmLmRlZmF1bHQuU0NSSVBUREFUQV9BUlJJVkVELCBsLmJpbmQodGhpcykpLCB2Lm9uKGYuZGVmYXVsdC5TVEFUSVNUSUNTX0lORk8sIGguYmluZCh0aGlzKSksIHYub24oZi5kZWZhdWx0LlJFQ09NTUVORF9TRUVLUE9JTlQsIG0uYmluZCh0aGlzKSk7YnJlYWs7Y2FzZSBcImRlc3Ryb3lcIjpcbiAgICAgICAgICAgICAgdiAmJiAodi5kZXN0cm95KCksIHYgPSBudWxsKSwgZS5wb3N0TWVzc2FnZSh7IG1zZzogXCJkZXN0cm95ZWRcIiB9KTticmVhaztjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgICAgICAgdi5zdGFydCgpO2JyZWFrO2Nhc2UgXCJzdG9wXCI6XG4gICAgICAgICAgICAgIHYuc3RvcCgpO2JyZWFrO2Nhc2UgXCJzZWVrXCI6XG4gICAgICAgICAgICAgIHYuc2Vlayh1LmRhdGEucGFyYW0pO2JyZWFrO2Nhc2UgXCJwYXVzZVwiOlxuICAgICAgICAgICAgICB2LnBhdXNlKCk7YnJlYWs7Y2FzZSBcInJlc3VtZVwiOlxuICAgICAgICAgICAgICB2LnJlc3VtZSgpO2JyZWFrO2Nhc2UgXCJsb2dnaW5nX2NvbmZpZ1wiOlxuICAgICAgICAgICAgICB2YXIgcCA9IHUuZGF0YS5wYXJhbTthLmRlZmF1bHQuYXBwbHlDb25maWcocCksICEwID09PSBwLmVuYWJsZUNhbGxiYWNrID8gYS5kZWZhdWx0LmFkZExvZ0xpc3RlbmVyKGcpIDogYS5kZWZhdWx0LnJlbW92ZUxvZ0xpc3RlbmVyKGcpO31cbiAgICAgICAgfSk7XG4gICAgICB9O24uZGVmYXVsdCA9IGM7XG4gICAgfSwgeyBcIi4uL3V0aWxzL2xvZ2dlci5qc1wiOiA0MSwgXCIuLi91dGlscy9sb2dnaW5nLWNvbnRyb2wuanNcIjogNDIsIFwiLi4vdXRpbHMvcG9seWZpbGwuanNcIjogNDMsIFwiLi90cmFuc211eGluZy1jb250cm9sbGVyLmpzXCI6IDEyLCBcIi4vdHJhbnNtdXhpbmctZXZlbnRzLmpzXCI6IDEzIH1dLCAxNTogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07XG4gICAgICB9ZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgYSA9IGUoXCIuLi91dGlscy9sb2dnZXIuanNcIiksXG4gICAgICAgICAgbyA9IGkoYSksXG4gICAgICAgICAgdSA9IGUoXCIuLi91dGlscy91dGY4LWNvbnYuanNcIiksXG4gICAgICAgICAgbCA9IGkodSksXG4gICAgICAgICAgZCA9IGUoXCIuLi91dGlscy9leGNlcHRpb24uanNcIiksXG4gICAgICAgICAgaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgQXJyYXlCdWZmZXIoMik7cmV0dXJuIG5ldyBEYXRhVmlldyhlKS5zZXRJbnQxNigwLCAyNTYsICEwKSwgMjU2ID09PSBuZXcgSW50MTZBcnJheShlKVswXTtcbiAgICAgIH0oKSxcbiAgICAgICAgICBmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgIHIodGhpcywgZSk7XG4gICAgICAgIH1yZXR1cm4gcyhlLCBudWxsLCBbeyBrZXk6IFwicGFyc2VTY3JpcHREYXRhXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0LCBuLCBpKSB7XG4gICAgICAgICAgICB2YXIgciA9IHt9O3RyeSB7XG4gICAgICAgICAgICAgIHZhciBzID0gZS5wYXJzZVZhbHVlKHQsIG4sIGkpLFxuICAgICAgICAgICAgICAgICAgYSA9IGUucGFyc2VWYWx1ZSh0LCBuICsgcy5zaXplLCBpIC0gcy5zaXplKTtyW3MuZGF0YV0gPSBhLmRhdGE7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIG8uZGVmYXVsdC5lKFwiQU1GXCIsIGUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9cmV0dXJuIHI7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJwYXJzZU9iamVjdFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCwgbiwgaSkge1xuICAgICAgICAgICAgaWYgKGkgPCAzKSB0aHJvdyBuZXcgZC5JbGxlZ2FsU3RhdGVFeGNlcHRpb24oXCJEYXRhIG5vdCBlbm91Z2ggd2hlbiBwYXJzZSBTY3JpcHREYXRhT2JqZWN0XCIpO3ZhciByID0gZS5wYXJzZVN0cmluZyh0LCBuLCBpKSxcbiAgICAgICAgICAgICAgICBzID0gZS5wYXJzZVZhbHVlKHQsIG4gKyByLnNpemUsIGkgLSByLnNpemUpLFxuICAgICAgICAgICAgICAgIGEgPSBzLm9iamVjdEVuZDtyZXR1cm4geyBkYXRhOiB7IG5hbWU6IHIuZGF0YSwgdmFsdWU6IHMuZGF0YSB9LCBzaXplOiByLnNpemUgKyBzLnNpemUsIG9iamVjdEVuZDogYSB9O1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwicGFyc2VWYXJpYWJsZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCwgbiwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGUucGFyc2VPYmplY3QodCwgbiwgaSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJwYXJzZVN0cmluZ1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCwgbikge1xuICAgICAgICAgICAgaWYgKG4gPCAyKSB0aHJvdyBuZXcgZC5JbGxlZ2FsU3RhdGVFeGNlcHRpb24oXCJEYXRhIG5vdCBlbm91Z2ggd2hlbiBwYXJzZSBTdHJpbmdcIik7dmFyIGkgPSBuZXcgRGF0YVZpZXcoZSwgdCwgbiksXG4gICAgICAgICAgICAgICAgciA9IGkuZ2V0VWludDE2KDAsICFoKSxcbiAgICAgICAgICAgICAgICBzID0gdm9pZCAwO3JldHVybiBzID0gciA+IDAgPyAoMCwgbC5kZWZhdWx0KShuZXcgVWludDhBcnJheShlLCB0ICsgMiwgcikpIDogXCJcIiwgeyBkYXRhOiBzLCBzaXplOiAyICsgciB9O1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwicGFyc2VMb25nU3RyaW5nXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0LCBuKSB7XG4gICAgICAgICAgICBpZiAobiA8IDQpIHRocm93IG5ldyBkLklsbGVnYWxTdGF0ZUV4Y2VwdGlvbihcIkRhdGEgbm90IGVub3VnaCB3aGVuIHBhcnNlIExvbmdTdHJpbmdcIik7dmFyIGkgPSBuZXcgRGF0YVZpZXcoZSwgdCwgbiksXG4gICAgICAgICAgICAgICAgciA9IGkuZ2V0VWludDMyKDAsICFoKSxcbiAgICAgICAgICAgICAgICBzID0gdm9pZCAwO3JldHVybiBzID0gciA+IDAgPyAoMCwgbC5kZWZhdWx0KShuZXcgVWludDhBcnJheShlLCB0ICsgNCwgcikpIDogXCJcIiwgeyBkYXRhOiBzLCBzaXplOiA0ICsgciB9O1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwicGFyc2VEYXRlXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0LCBuKSB7XG4gICAgICAgICAgICBpZiAobiA8IDEwKSB0aHJvdyBuZXcgZC5JbGxlZ2FsU3RhdGVFeGNlcHRpb24oXCJEYXRhIHNpemUgaW52YWxpZCB3aGVuIHBhcnNlIERhdGVcIik7dmFyIGkgPSBuZXcgRGF0YVZpZXcoZSwgdCwgbiksXG4gICAgICAgICAgICAgICAgciA9IGkuZ2V0RmxvYXQ2NCgwLCAhaCk7cmV0dXJuIHIgKz0gNjAgKiBpLmdldEludDE2KDgsICFoKSAqIDFlMywgeyBkYXRhOiBuZXcgRGF0ZShyKSwgc2l6ZTogMTAgfTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInBhcnNlVmFsdWVcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4sIGkpIHtcbiAgICAgICAgICAgIGlmIChpIDwgMSkgdGhyb3cgbmV3IGQuSWxsZWdhbFN0YXRlRXhjZXB0aW9uKFwiRGF0YSBub3QgZW5vdWdoIHdoZW4gcGFyc2UgVmFsdWVcIik7dmFyIHIgPSBuZXcgRGF0YVZpZXcodCwgbiwgaSksXG4gICAgICAgICAgICAgICAgcyA9IDEsXG4gICAgICAgICAgICAgICAgYSA9IHIuZ2V0VWludDgoMCksXG4gICAgICAgICAgICAgICAgdSA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBsID0gITE7dHJ5IHtcbiAgICAgICAgICAgICAgc3dpdGNoIChhKSB7Y2FzZSAwOlxuICAgICAgICAgICAgICAgICAgdSA9IHIuZ2V0RmxvYXQ2NCgxLCAhaCksIHMgKz0gODticmVhaztjYXNlIDE6XG4gICAgICAgICAgICAgICAgICB1ID0gISFyLmdldFVpbnQ4KDEpLCBzICs9IDE7YnJlYWs7Y2FzZSAyOlxuICAgICAgICAgICAgICAgICAgdmFyIGYgPSBlLnBhcnNlU3RyaW5nKHQsIG4gKyAxLCBpIC0gMSk7dSA9IGYuZGF0YSwgcyArPSBmLnNpemU7YnJlYWs7Y2FzZSAzOlxuICAgICAgICAgICAgICAgICAgdSA9IHt9O3ZhciBjID0gMDtmb3IgKDkgPT0gKDE2Nzc3MjE1ICYgci5nZXRVaW50MzIoaSAtIDQsICFoKSkgJiYgKGMgPSAzKTsgcyA8IGkgLSA0Oykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgXyA9IGUucGFyc2VPYmplY3QodCwgbiArIHMsIGkgLSBzIC0gYyk7aWYgKF8ub2JqZWN0RW5kKSBicmVhazt1W18uZGF0YS5uYW1lXSA9IF8uZGF0YS52YWx1ZSwgcyArPSBfLnNpemU7XG4gICAgICAgICAgICAgICAgICB9aWYgKHMgPD0gaSAtIDMpIHtcbiAgICAgICAgICAgICAgICAgICAgOSA9PT0gKDE2Nzc3MjE1ICYgci5nZXRVaW50MzIocyAtIDEsICFoKSkgJiYgKHMgKz0gMyk7XG4gICAgICAgICAgICAgICAgICB9YnJlYWs7Y2FzZSA4OlxuICAgICAgICAgICAgICAgICAgdSA9IHt9LCBzICs9IDQ7dmFyIG0gPSAwO2ZvciAoOSA9PSAoMTY3NzcyMTUgJiByLmdldFVpbnQzMihpIC0gNCwgIWgpKSAmJiAobSA9IDMpOyBzIDwgaSAtIDg7KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gZS5wYXJzZVZhcmlhYmxlKHQsIG4gKyBzLCBpIC0gcyAtIG0pO2lmIChwLm9iamVjdEVuZCkgYnJlYWs7dVtwLmRhdGEubmFtZV0gPSBwLmRhdGEudmFsdWUsIHMgKz0gcC5zaXplO1xuICAgICAgICAgICAgICAgICAgfWlmIChzIDw9IGkgLSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIDkgPT09ICgxNjc3NzIxNSAmIHIuZ2V0VWludDMyKHMgLSAxLCAhaCkpICYmIChzICs9IDMpO1xuICAgICAgICAgICAgICAgICAgfWJyZWFrO2Nhc2UgOTpcbiAgICAgICAgICAgICAgICAgIHUgPSB2b2lkIDAsIHMgPSAxLCBsID0gITA7YnJlYWs7Y2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgIHUgPSBbXTt2YXIgdiA9IHIuZ2V0VWludDMyKDEsICFoKTtzICs9IDQ7Zm9yICh2YXIgZyA9IDA7IGcgPCB2OyBnKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBlLnBhcnNlVmFsdWUodCwgbiArIHMsIGkgLSBzKTt1LnB1c2goeS5kYXRhKSwgcyArPSB5LnNpemU7XG4gICAgICAgICAgICAgICAgICB9YnJlYWs7Y2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgIHZhciBFID0gZS5wYXJzZURhdGUodCwgbiArIDEsIGkgLSAxKTt1ID0gRS5kYXRhLCBzICs9IEUuc2l6ZTticmVhaztjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgdmFyIGIgPSBlLnBhcnNlU3RyaW5nKHQsIG4gKyAxLCBpIC0gMSk7dSA9IGIuZGF0YSwgcyArPSBiLnNpemU7YnJlYWs7ZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHMgPSBpLCBvLmRlZmF1bHQudyhcIkFNRlwiLCBcIlVuc3VwcG9ydGVkIEFNRiB2YWx1ZSB0eXBlIFwiICsgYSk7fVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBvLmRlZmF1bHQuZShcIkFNRlwiLCBlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfXJldHVybiB7IGRhdGE6IHUsIHNpemU6IHMsIG9iamVjdEVuZDogbCB9O1xuICAgICAgICAgIH0gfV0pLCBlO1xuICAgICAgfSgpO24uZGVmYXVsdCA9IGY7XG4gICAgfSwgeyBcIi4uL3V0aWxzL2V4Y2VwdGlvbi5qc1wiOiA0MCwgXCIuLi91dGlscy9sb2dnZXIuanNcIjogNDEsIFwiLi4vdXRpbHMvdXRmOC1jb252LmpzXCI6IDQ0IH1dLCAxNjogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIGkgPSB7IE9LOiBcIk9LXCIsIEZPUk1BVF9FUlJPUjogXCJGb3JtYXRFcnJvclwiLCBGT1JNQVRfVU5TVVBQT1JURUQ6IFwiRm9ybWF0VW5zdXBwb3J0ZWRcIiwgQ09ERUNfVU5TVVBQT1JURUQ6IFwiQ29kZWNVbnN1cHBvcnRlZFwiIH07bi5kZWZhdWx0ID0gaTtcbiAgICB9LCB7fV0sIDE3OiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciByID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgcyA9IGUoXCIuLi91dGlscy9leGNlcHRpb24uanNcIiksXG4gICAgICAgICAgYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy5UQUcgPSBcIkV4cEdvbG9tYlwiLCB0aGlzLl9idWZmZXIgPSB0LCB0aGlzLl9idWZmZXJfaW5kZXggPSAwLCB0aGlzLl90b3RhbF9ieXRlcyA9IHQuYnl0ZUxlbmd0aCwgdGhpcy5fdG90YWxfYml0cyA9IDggKiB0LmJ5dGVMZW5ndGgsIHRoaXMuX2N1cnJlbnRfd29yZCA9IDAsIHRoaXMuX2N1cnJlbnRfd29yZF9iaXRzX2xlZnQgPSAwO1xuICAgICAgICB9cmV0dXJuIHIoZSwgW3sga2V5OiBcImRlc3Ryb3lcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gbnVsbDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9maWxsQ3VycmVudFdvcmRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl90b3RhbF9ieXRlcyAtIHRoaXMuX2J1ZmZlcl9pbmRleDtpZiAoZSA8PSAwKSB0aHJvdyBuZXcgcy5JbGxlZ2FsU3RhdGVFeGNlcHRpb24oXCJFeHBHb2xvbWI6IF9maWxsQ3VycmVudFdvcmQoKSBidXQgbm8gYnl0ZXMgYXZhaWxhYmxlXCIpO3ZhciB0ID0gTWF0aC5taW4oNCwgZSksXG4gICAgICAgICAgICAgICAgbiA9IG5ldyBVaW50OEFycmF5KDQpO24uc2V0KHRoaXMuX2J1ZmZlci5zdWJhcnJheSh0aGlzLl9idWZmZXJfaW5kZXgsIHRoaXMuX2J1ZmZlcl9pbmRleCArIHQpKSwgdGhpcy5fY3VycmVudF93b3JkID0gbmV3IERhdGFWaWV3KG4uYnVmZmVyKS5nZXRVaW50MzIoMCwgITEpLCB0aGlzLl9idWZmZXJfaW5kZXggKz0gdCwgdGhpcy5fY3VycmVudF93b3JkX2JpdHNfbGVmdCA9IDggKiB0O1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwicmVhZEJpdHNcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGlmIChlID4gMzIpIHRocm93IG5ldyBzLkludmFsaWRBcmd1bWVudEV4Y2VwdGlvbihcIkV4cEdvbG9tYjogcmVhZEJpdHMoKSBiaXRzIGV4Y2VlZGVkIG1heCAzMmJpdHMhXCIpO2lmIChlIDw9IHRoaXMuX2N1cnJlbnRfd29yZF9iaXRzX2xlZnQpIHtcbiAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9jdXJyZW50X3dvcmQgPj4+IDMyIC0gZTtyZXR1cm4gdGhpcy5fY3VycmVudF93b3JkIDw8PSBlLCB0aGlzLl9jdXJyZW50X3dvcmRfYml0c19sZWZ0IC09IGUsIHQ7XG4gICAgICAgICAgICB9dmFyIG4gPSB0aGlzLl9jdXJyZW50X3dvcmRfYml0c19sZWZ0ID8gdGhpcy5fY3VycmVudF93b3JkIDogMDtuID4+Pj0gMzIgLSB0aGlzLl9jdXJyZW50X3dvcmRfYml0c19sZWZ0O3ZhciBpID0gZSAtIHRoaXMuX2N1cnJlbnRfd29yZF9iaXRzX2xlZnQ7dGhpcy5fZmlsbEN1cnJlbnRXb3JkKCk7dmFyIHIgPSBNYXRoLm1pbihpLCB0aGlzLl9jdXJyZW50X3dvcmRfYml0c19sZWZ0KSxcbiAgICAgICAgICAgICAgICBhID0gdGhpcy5fY3VycmVudF93b3JkID4+PiAzMiAtIHI7cmV0dXJuIHRoaXMuX2N1cnJlbnRfd29yZCA8PD0gciwgdGhpcy5fY3VycmVudF93b3JkX2JpdHNfbGVmdCAtPSByLCBuID0gbiA8PCByIHwgYTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInJlYWRCb29sXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAxID09PSB0aGlzLnJlYWRCaXRzKDEpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwicmVhZEJ5dGVcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZEJpdHMoOCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfc2tpcExlYWRpbmdaZXJvXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gdm9pZCAwO2ZvciAoZSA9IDA7IGUgPCB0aGlzLl9jdXJyZW50X3dvcmRfYml0c19sZWZ0OyBlKyspIHtcbiAgICAgICAgICAgICAgaWYgKDAgIT0gKHRoaXMuX2N1cnJlbnRfd29yZCAmIDIxNDc0ODM2NDggPj4+IGUpKSByZXR1cm4gdGhpcy5fY3VycmVudF93b3JkIDw8PSBlLCB0aGlzLl9jdXJyZW50X3dvcmRfYml0c19sZWZ0IC09IGUsIGU7XG4gICAgICAgICAgICB9cmV0dXJuIHRoaXMuX2ZpbGxDdXJyZW50V29yZCgpLCBlICsgdGhpcy5fc2tpcExlYWRpbmdaZXJvKCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJyZWFkVUVHXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5fc2tpcExlYWRpbmdaZXJvKCk7cmV0dXJuIHRoaXMucmVhZEJpdHMoZSArIDEpIC0gMTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInJlYWRTRUdcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnJlYWRVRUcoKTtyZXR1cm4gMSAmIGUgPyBlICsgMSA+Pj4gMSA6IC0xICogKGUgPj4+IDEpO1xuICAgICAgICAgIH0gfV0pLCBlO1xuICAgICAgfSgpO24uZGVmYXVsdCA9IGE7XG4gICAgfSwgeyBcIi4uL3V0aWxzL2V4Y2VwdGlvbi5qc1wiOiA0MCB9XSwgMTg6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9O1xuICAgICAgfWZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICB9ZnVuY3Rpb24gcyhlLCB0KSB7XG4gICAgICAgIHJldHVybiBlW3RdIDw8IDI0IHwgZVt0ICsgMV0gPDwgMTYgfCBlW3QgKyAyXSA8PCA4IHwgZVt0ICsgM107XG4gICAgICB9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgYSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gX3R5cGVvZihTeW1ib2wuaXRlcmF0b3IpID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZSk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlKTtcbiAgICAgIH0sXG4gICAgICAgICAgbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRbbl07aS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1yZXR1cm4gZnVuY3Rpb24gKHQsIG4sIGkpIHtcbiAgICAgICAgICByZXR1cm4gbiAmJiBlKHQucHJvdG90eXBlLCBuKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICB9O1xuICAgICAgfSgpLFxuICAgICAgICAgIHUgPSBlKFwiLi4vdXRpbHMvbG9nZ2VyLmpzXCIpLFxuICAgICAgICAgIGwgPSBpKHUpLFxuICAgICAgICAgIGQgPSBlKFwiLi9hbWYtcGFyc2VyLmpzXCIpLFxuICAgICAgICAgIGggPSBpKGQpLFxuICAgICAgICAgIGYgPSBlKFwiLi9zcHMtcGFyc2VyLmpzXCIpLFxuICAgICAgICAgIGMgPSBpKGYpLFxuICAgICAgICAgIF8gPSBlKFwiLi9kZW11eC1lcnJvcnMuanNcIiksXG4gICAgICAgICAgbSA9IGkoXyksXG4gICAgICAgICAgcCA9IGUoXCIuLi9jb3JlL21lZGlhLWluZm8uanNcIiksXG4gICAgICAgICAgdiA9IGkocCksXG4gICAgICAgICAgZyA9IGUoXCIuLi91dGlscy9leGNlcHRpb24uanNcIiksXG4gICAgICAgICAgeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSh0LCBuKSB7XG4gICAgICAgICAgcih0aGlzLCBlKSwgdGhpcy5UQUcgPSBcIkZMVkRlbXV4ZXJcIiwgdGhpcy5fY29uZmlnID0gbiwgdGhpcy5fb25FcnJvciA9IG51bGwsIHRoaXMuX29uTWVkaWFJbmZvID0gbnVsbCwgdGhpcy5fb25NZXRhRGF0YUFycml2ZWQgPSBudWxsLCB0aGlzLl9vblNjcmlwdERhdGFBcnJpdmVkID0gbnVsbCwgdGhpcy5fb25UcmFja01ldGFkYXRhID0gbnVsbCwgdGhpcy5fb25EYXRhQXZhaWxhYmxlID0gbnVsbCwgdGhpcy5fZGF0YU9mZnNldCA9IHQuZGF0YU9mZnNldCwgdGhpcy5fZmlyc3RQYXJzZSA9ICEwLCB0aGlzLl9kaXNwYXRjaCA9ICExLCB0aGlzLl9oYXNBdWRpbyA9IHQuaGFzQXVkaW9UcmFjaywgdGhpcy5faGFzVmlkZW8gPSB0Lmhhc1ZpZGVvVHJhY2ssIHRoaXMuX2hhc0F1ZGlvRmxhZ092ZXJyaWRlZCA9ICExLCB0aGlzLl9oYXNWaWRlb0ZsYWdPdmVycmlkZWQgPSAhMSwgdGhpcy5fYXVkaW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkID0gITEsIHRoaXMuX3ZpZGVvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCA9ICExLCB0aGlzLl9tZWRpYUluZm8gPSBuZXcgdi5kZWZhdWx0KCksIHRoaXMuX21lZGlhSW5mby5oYXNBdWRpbyA9IHRoaXMuX2hhc0F1ZGlvLCB0aGlzLl9tZWRpYUluZm8uaGFzVmlkZW8gPSB0aGlzLl9oYXNWaWRlbywgdGhpcy5fbWV0YWRhdGEgPSBudWxsLCB0aGlzLl9hdWRpb01ldGFkYXRhID0gbnVsbCwgdGhpcy5fdmlkZW9NZXRhZGF0YSA9IG51bGwsIHRoaXMuX25hbHVMZW5ndGhTaXplID0gNCwgdGhpcy5fdGltZXN0YW1wQmFzZSA9IDAsIHRoaXMuX3RpbWVzY2FsZSA9IDFlMywgdGhpcy5fZHVyYXRpb24gPSAwLCB0aGlzLl9kdXJhdGlvbk92ZXJyaWRlZCA9ICExLCB0aGlzLl9yZWZlcmVuY2VGcmFtZVJhdGUgPSB7IGZpeGVkOiAhMCwgZnBzOiAyMy45NzYsIGZwc19udW06IDIzOTc2LCBmcHNfZGVuOiAxZTMgfSwgdGhpcy5fZmx2U291bmRSYXRlVGFibGUgPSBbNTUwMCwgMTEwMjUsIDIyMDUwLCA0NDEwMCwgNDhlM10sIHRoaXMuX21wZWdTYW1wbGluZ1JhdGVzID0gWzk2ZTMsIDg4MjAwLCA2NGUzLCA0OGUzLCA0NDEwMCwgMzJlMywgMjRlMywgMjIwNTAsIDE2ZTMsIDEyZTMsIDExMDI1LCA4ZTMsIDczNTBdLCB0aGlzLl9tcGVnQXVkaW9WMTBTYW1wbGVSYXRlVGFibGUgPSBbNDQxMDAsIDQ4ZTMsIDMyZTMsIDBdLCB0aGlzLl9tcGVnQXVkaW9WMjBTYW1wbGVSYXRlVGFibGUgPSBbMjIwNTAsIDI0ZTMsIDE2ZTMsIDBdLCB0aGlzLl9tcGVnQXVkaW9WMjVTYW1wbGVSYXRlVGFibGUgPSBbMTEwMjUsIDEyZTMsIDhlMywgMF0sIHRoaXMuX21wZWdBdWRpb0wxQml0UmF0ZVRhYmxlID0gWzAsIDMyLCA2NCwgOTYsIDEyOCwgMTYwLCAxOTIsIDIyNCwgMjU2LCAyODgsIDMyMCwgMzUyLCAzODQsIDQxNiwgNDQ4LCAtMV0sIHRoaXMuX21wZWdBdWRpb0wyQml0UmF0ZVRhYmxlID0gWzAsIDMyLCA0OCwgNTYsIDY0LCA4MCwgOTYsIDExMiwgMTI4LCAxNjAsIDE5MiwgMjI0LCAyNTYsIDMyMCwgMzg0LCAtMV0sIHRoaXMuX21wZWdBdWRpb0wzQml0UmF0ZVRhYmxlID0gWzAsIDMyLCA0MCwgNDgsIDU2LCA2NCwgODAsIDk2LCAxMTIsIDEyOCwgMTYwLCAxOTIsIDIyNCwgMjU2LCAzMjAsIC0xXSwgdGhpcy5fdmlkZW9UcmFjayA9IHsgdHlwZTogXCJ2aWRlb1wiLCBpZDogMSwgc2VxdWVuY2VOdW1iZXI6IDAsIHNhbXBsZXM6IFtdLCBsZW5ndGg6IDAgfSwgdGhpcy5fYXVkaW9UcmFjayA9IHsgdHlwZTogXCJhdWRpb1wiLCBpZDogMiwgc2VxdWVuY2VOdW1iZXI6IDAsIHNhbXBsZXM6IFtdLCBsZW5ndGg6IDAgfSwgdGhpcy5fbGl0dGxlRW5kaWFuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGUgPSBuZXcgQXJyYXlCdWZmZXIoMik7cmV0dXJuIG5ldyBEYXRhVmlldyhlKS5zZXRJbnQxNigwLCAyNTYsICEwKSwgMjU2ID09PSBuZXcgSW50MTZBcnJheShlKVswXTtcbiAgICAgICAgICB9KCk7XG4gICAgICAgIH1yZXR1cm4gbyhlLCBbeyBrZXk6IFwiZGVzdHJveVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUluZm8gPSBudWxsLCB0aGlzLl9tZXRhZGF0YSA9IG51bGwsIHRoaXMuX2F1ZGlvTWV0YWRhdGEgPSBudWxsLCB0aGlzLl92aWRlb01ldGFkYXRhID0gbnVsbCwgdGhpcy5fdmlkZW9UcmFjayA9IG51bGwsIHRoaXMuX2F1ZGlvVHJhY2sgPSBudWxsLCB0aGlzLl9vbkVycm9yID0gbnVsbCwgdGhpcy5fb25NZWRpYUluZm8gPSBudWxsLCB0aGlzLl9vbk1ldGFEYXRhQXJyaXZlZCA9IG51bGwsIHRoaXMuX29uU2NyaXB0RGF0YUFycml2ZWQgPSBudWxsLCB0aGlzLl9vblRyYWNrTWV0YWRhdGEgPSBudWxsLCB0aGlzLl9vbkRhdGFBdmFpbGFibGUgPSBudWxsO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiYmluZERhdGFTb3VyY2VcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLm9uRGF0YUFycml2YWwgPSB0aGlzLnBhcnNlQ2h1bmtzLmJpbmQodGhpcyksIHRoaXM7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJyZXNldE1lZGlhSW5mb1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUluZm8gPSBuZXcgdi5kZWZhdWx0KCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfaXNJbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNBdWRpbyAmJiB0aGlzLl9oYXNWaWRlbyA/IHRoaXMuX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCAmJiB0aGlzLl92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQgOiB0aGlzLl9oYXNBdWRpbyAmJiAhdGhpcy5faGFzVmlkZW8gPyB0aGlzLl9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQgOiAhKHRoaXMuX2hhc0F1ZGlvIHx8ICF0aGlzLl9oYXNWaWRlbykgJiYgdGhpcy5fdmlkZW9Jbml0aWFsTWV0YWRhdGFEaXNwYXRjaGVkO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwicGFyc2VDaHVua3NcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgICAgIGlmICghKHRoaXMuX29uRXJyb3IgJiYgdGhpcy5fb25NZWRpYUluZm8gJiYgdGhpcy5fb25UcmFja01ldGFkYXRhICYmIHRoaXMuX29uRGF0YUF2YWlsYWJsZSkpIHRocm93IG5ldyBnLklsbGVnYWxTdGF0ZUV4Y2VwdGlvbihcIkZsdjogb25FcnJvciAmIG9uTWVkaWFJbmZvICYgb25UcmFja01ldGFkYXRhICYgb25EYXRhQXZhaWxhYmxlIGNhbGxiYWNrIG11c3QgYmUgc3BlY2lmaWVkXCIpO3ZhciBpID0gMCxcbiAgICAgICAgICAgICAgICByID0gdGhpcy5fbGl0dGxlRW5kaWFuO2lmICgwID09PSBuKSB7XG4gICAgICAgICAgICAgIGlmICghKHQuYnl0ZUxlbmd0aCA+IDEzKSkgcmV0dXJuIDA7aSA9IGUucHJvYmUodCkuZGF0YU9mZnNldDtcbiAgICAgICAgICAgIH1pZiAodGhpcy5fZmlyc3RQYXJzZSkge1xuICAgICAgICAgICAgICB0aGlzLl9maXJzdFBhcnNlID0gITEsIG4gKyBpICE9PSB0aGlzLl9kYXRhT2Zmc2V0ICYmIGwuZGVmYXVsdC53KHRoaXMuVEFHLCBcIkZpcnN0IHRpbWUgcGFyc2luZyBidXQgY2h1bmsgYnl0ZVN0YXJ0IGludmFsaWQhXCIpOzAgIT09IG5ldyBEYXRhVmlldyh0LCBpKS5nZXRVaW50MzIoMCwgIXIpICYmIGwuZGVmYXVsdC53KHRoaXMuVEFHLCBcIlByZXZUYWdTaXplMCAhPT0gMCAhISFcIiksIGkgKz0gNDtcbiAgICAgICAgICAgIH1mb3IgKDsgaSA8IHQuYnl0ZUxlbmd0aDspIHtcbiAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2ggPSAhMDt2YXIgcyA9IG5ldyBEYXRhVmlldyh0LCBpKTtpZiAoaSArIDExICsgNCA+IHQuYnl0ZUxlbmd0aCkgYnJlYWs7dmFyIGEgPSBzLmdldFVpbnQ4KDApLFxuICAgICAgICAgICAgICAgICAgbyA9IDE2Nzc3MjE1ICYgcy5nZXRVaW50MzIoMCwgIXIpO2lmIChpICsgMTEgKyBvICsgNCA+IHQuYnl0ZUxlbmd0aCkgYnJlYWs7aWYgKDggPT09IGEgfHwgOSA9PT0gYSB8fCAxOCA9PT0gYSkge1xuICAgICAgICAgICAgICAgIHZhciB1ID0gcy5nZXRVaW50OCg0KSxcbiAgICAgICAgICAgICAgICAgICAgZCA9IHMuZ2V0VWludDgoNSksXG4gICAgICAgICAgICAgICAgICAgIGggPSBzLmdldFVpbnQ4KDYpLFxuICAgICAgICAgICAgICAgICAgICBmID0gcy5nZXRVaW50OCg3KSxcbiAgICAgICAgICAgICAgICAgICAgYyA9IGggfCBkIDw8IDggfCB1IDw8IDE2IHwgZiA8PCAyNDswICE9PSAoMTY3NzcyMTUgJiBzLmdldFVpbnQzMig3LCAhcikpICYmIGwuZGVmYXVsdC53KHRoaXMuVEFHLCBcIk1lZXQgdGFnIHdoaWNoIGhhcyBTdHJlYW1JRCAhPSAwIVwiKTt2YXIgXyA9IGkgKyAxMTtzd2l0Y2ggKGEpIHtjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlQXVkaW9EYXRhKHQsIF8sIG8sIGMpO2JyZWFrO2Nhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VWaWRlb0RhdGEodCwgXywgbywgYywgbiArIGkpO2JyZWFrO2Nhc2UgMTg6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlU2NyaXB0RGF0YSh0LCBfLCBvKTt9dmFyIG0gPSBzLmdldFVpbnQzMigxMSArIG8sICFyKTttICE9PSAxMSArIG8gJiYgbC5kZWZhdWx0LncodGhpcy5UQUcsIFwiSW52YWxpZCBQcmV2VGFnU2l6ZSBcIiArIG0pLCBpICs9IDExICsgbyArIDQ7XG4gICAgICAgICAgICAgIH0gZWxzZSBsLmRlZmF1bHQudyh0aGlzLlRBRywgXCJVbnN1cHBvcnRlZCB0YWcgdHlwZSBcIiArIGEgKyBcIiwgc2tpcHBlZFwiKSwgaSArPSAxMSArIG8gKyA0O1xuICAgICAgICAgICAgfXJldHVybiB0aGlzLl9pc0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQoKSAmJiB0aGlzLl9kaXNwYXRjaCAmJiAodGhpcy5fYXVkaW9UcmFjay5sZW5ndGggfHwgdGhpcy5fdmlkZW9UcmFjay5sZW5ndGgpICYmIHRoaXMuX29uRGF0YUF2YWlsYWJsZSh0aGlzLl9hdWRpb1RyYWNrLCB0aGlzLl92aWRlb1RyYWNrKSwgaTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9wYXJzZVNjcmlwdERhdGFcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQsIG4pIHtcbiAgICAgICAgICAgIHZhciBpID0gaC5kZWZhdWx0LnBhcnNlU2NyaXB0RGF0YShlLCB0LCBuKTtpZiAoaS5oYXNPd25Qcm9wZXJ0eShcIm9uTWV0YURhdGFcIikpIHtcbiAgICAgICAgICAgICAgaWYgKG51bGwgPT0gaS5vbk1ldGFEYXRhIHx8IFwib2JqZWN0XCIgIT09IGEoaS5vbk1ldGFEYXRhKSkgcmV0dXJuIHZvaWQgbC5kZWZhdWx0LncodGhpcy5UQUcsIFwiSW52YWxpZCBvbk1ldGFEYXRhIHN0cnVjdHVyZSFcIik7dGhpcy5fbWV0YWRhdGEgJiYgbC5kZWZhdWx0LncodGhpcy5UQUcsIFwiRm91bmQgYW5vdGhlciBvbk1ldGFEYXRhIHRhZyFcIiksIHRoaXMuX21ldGFkYXRhID0gaTt2YXIgciA9IHRoaXMuX21ldGFkYXRhLm9uTWV0YURhdGE7aWYgKHRoaXMuX29uTWV0YURhdGFBcnJpdmVkICYmIHRoaXMuX29uTWV0YURhdGFBcnJpdmVkKE9iamVjdC5hc3NpZ24oe30sIHIpKSwgXCJib29sZWFuXCIgPT0gdHlwZW9mIHIuaGFzQXVkaW8gJiYgITEgPT09IHRoaXMuX2hhc0F1ZGlvRmxhZ092ZXJyaWRlZCAmJiAodGhpcy5faGFzQXVkaW8gPSByLmhhc0F1ZGlvLCB0aGlzLl9tZWRpYUluZm8uaGFzQXVkaW8gPSB0aGlzLl9oYXNBdWRpbyksIFwiYm9vbGVhblwiID09IHR5cGVvZiByLmhhc1ZpZGVvICYmICExID09PSB0aGlzLl9oYXNWaWRlb0ZsYWdPdmVycmlkZWQgJiYgKHRoaXMuX2hhc1ZpZGVvID0gci5oYXNWaWRlbywgdGhpcy5fbWVkaWFJbmZvLmhhc1ZpZGVvID0gdGhpcy5faGFzVmlkZW8pLCBcIm51bWJlclwiID09IHR5cGVvZiByLmF1ZGlvZGF0YXJhdGUgJiYgKHRoaXMuX21lZGlhSW5mby5hdWRpb0RhdGFSYXRlID0gci5hdWRpb2RhdGFyYXRlKSwgXCJudW1iZXJcIiA9PSB0eXBlb2Ygci52aWRlb2RhdGFyYXRlICYmICh0aGlzLl9tZWRpYUluZm8udmlkZW9EYXRhUmF0ZSA9IHIudmlkZW9kYXRhcmF0ZSksIFwibnVtYmVyXCIgPT0gdHlwZW9mIHIud2lkdGggJiYgKHRoaXMuX21lZGlhSW5mby53aWR0aCA9IHIud2lkdGgpLCBcIm51bWJlclwiID09IHR5cGVvZiByLmhlaWdodCAmJiAodGhpcy5fbWVkaWFJbmZvLmhlaWdodCA9IHIuaGVpZ2h0KSwgXCJudW1iZXJcIiA9PSB0eXBlb2Ygci5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZHVyYXRpb25PdmVycmlkZWQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzID0gTWF0aC5mbG9vcihyLmR1cmF0aW9uICogdGhpcy5fdGltZXNjYWxlKTt0aGlzLl9kdXJhdGlvbiA9IHMsIHRoaXMuX21lZGlhSW5mby5kdXJhdGlvbiA9IHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5fbWVkaWFJbmZvLmR1cmF0aW9uID0gMDtpZiAoXCJudW1iZXJcIiA9PSB0eXBlb2Ygci5mcmFtZXJhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IE1hdGguZmxvb3IoMWUzICogci5mcmFtZXJhdGUpO2lmIChvID4gMCkge1xuICAgICAgICAgICAgICAgICAgdmFyIHUgPSBvIC8gMWUzO3RoaXMuX3JlZmVyZW5jZUZyYW1lUmF0ZS5maXhlZCA9ICEwLCB0aGlzLl9yZWZlcmVuY2VGcmFtZVJhdGUuZnBzID0gdSwgdGhpcy5fcmVmZXJlbmNlRnJhbWVSYXRlLmZwc19udW0gPSBvLCB0aGlzLl9yZWZlcmVuY2VGcmFtZVJhdGUuZnBzX2RlbiA9IDFlMywgdGhpcy5fbWVkaWFJbmZvLmZwcyA9IHU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9aWYgKFwib2JqZWN0XCIgPT09IGEoci5rZXlmcmFtZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVkaWFJbmZvLmhhc0tleWZyYW1lc0luZGV4ID0gITA7dmFyIGQgPSByLmtleWZyYW1lczt0aGlzLl9tZWRpYUluZm8ua2V5ZnJhbWVzSW5kZXggPSB0aGlzLl9wYXJzZUtleWZyYW1lc0luZGV4KGQpLCByLmtleWZyYW1lcyA9IG51bGw7XG4gICAgICAgICAgICAgIH0gZWxzZSB0aGlzLl9tZWRpYUluZm8uaGFzS2V5ZnJhbWVzSW5kZXggPSAhMTt0aGlzLl9kaXNwYXRjaCA9ICExLCB0aGlzLl9tZWRpYUluZm8ubWV0YWRhdGEgPSByLCBsLmRlZmF1bHQudih0aGlzLlRBRywgXCJQYXJzZWQgb25NZXRhRGF0YVwiKSwgdGhpcy5fbWVkaWFJbmZvLmlzQ29tcGxldGUoKSAmJiB0aGlzLl9vbk1lZGlhSW5mbyh0aGlzLl9tZWRpYUluZm8pO1xuICAgICAgICAgICAgfU9iamVjdC5rZXlzKGkpLmxlbmd0aCA+IDAgJiYgdGhpcy5fb25TY3JpcHREYXRhQXJyaXZlZCAmJiB0aGlzLl9vblNjcmlwdERhdGFBcnJpdmVkKE9iamVjdC5hc3NpZ24oe30sIGkpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9wYXJzZUtleWZyYW1lc0luZGV4XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gW10sIG4gPSBbXSwgaSA9IDE7IGkgPCBlLnRpbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciByID0gdGhpcy5fdGltZXN0YW1wQmFzZSArIE1hdGguZmxvb3IoMWUzICogZS50aW1lc1tpXSk7dC5wdXNoKHIpLCBuLnB1c2goZS5maWxlcG9zaXRpb25zW2ldKTtcbiAgICAgICAgICAgIH1yZXR1cm4geyB0aW1lczogdCwgZmlsZXBvc2l0aW9uczogbiB9O1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX3BhcnNlQXVkaW9EYXRhXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0LCBuLCBpKSB7XG4gICAgICAgICAgICBpZiAobiA8PSAxKSByZXR1cm4gdm9pZCBsLmRlZmF1bHQudyh0aGlzLlRBRywgXCJGbHY6IEludmFsaWQgYXVkaW8gcGFja2V0LCBtaXNzaW5nIFNvdW5kRGF0YSBwYXlsb2FkIVwiKTtpZiAoITAgIT09IHRoaXMuX2hhc0F1ZGlvRmxhZ092ZXJyaWRlZCB8fCAhMSAhPT0gdGhpcy5faGFzQXVkaW8pIHtcbiAgICAgICAgICAgICAgdmFyIHIgPSAodGhpcy5fbGl0dGxlRW5kaWFuLCBuZXcgRGF0YVZpZXcoZSwgdCwgbikpLFxuICAgICAgICAgICAgICAgICAgcyA9IHIuZ2V0VWludDgoMCksXG4gICAgICAgICAgICAgICAgICBhID0gcyA+Pj4gNDtpZiAoMiAhPT0gYSAmJiAxMCAhPT0gYSkgcmV0dXJuIHZvaWQgdGhpcy5fb25FcnJvcihtLmRlZmF1bHQuQ09ERUNfVU5TVVBQT1JURUQsIFwiRmx2OiBVbnN1cHBvcnRlZCBhdWRpbyBjb2RlYyBpZHg6IFwiICsgYSk7dmFyIG8gPSAwLFxuICAgICAgICAgICAgICAgICAgdSA9ICgxMiAmIHMpID4+PiAyO2lmICghKHUgPj0gMCAmJiB1IDw9IDQpKSByZXR1cm4gdm9pZCB0aGlzLl9vbkVycm9yKG0uZGVmYXVsdC5GT1JNQVRfRVJST1IsIFwiRmx2OiBJbnZhbGlkIGF1ZGlvIHNhbXBsZSByYXRlIGlkeDogXCIgKyB1KTtvID0gdGhpcy5fZmx2U291bmRSYXRlVGFibGVbdV07dmFyIGQgPSAxICYgcyxcbiAgICAgICAgICAgICAgICAgIGggPSB0aGlzLl9hdWRpb01ldGFkYXRhLFxuICAgICAgICAgICAgICAgICAgZiA9IHRoaXMuX2F1ZGlvVHJhY2s7aWYgKGggfHwgKCExID09PSB0aGlzLl9oYXNBdWRpbyAmJiAhMSA9PT0gdGhpcy5faGFzQXVkaW9GbGFnT3ZlcnJpZGVkICYmICh0aGlzLl9oYXNBdWRpbyA9ICEwLCB0aGlzLl9tZWRpYUluZm8uaGFzQXVkaW8gPSAhMCksIGggPSB0aGlzLl9hdWRpb01ldGFkYXRhID0ge30sIGgudHlwZSA9IFwiYXVkaW9cIiwgaC5pZCA9IGYuaWQsIGgudGltZXNjYWxlID0gdGhpcy5fdGltZXNjYWxlLCBoLmR1cmF0aW9uID0gdGhpcy5fZHVyYXRpb24sIGguYXVkaW9TYW1wbGVSYXRlID0gbywgaC5jaGFubmVsQ291bnQgPSAwID09PSBkID8gMSA6IDIpLCAxMCA9PT0gYSkge1xuICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5fcGFyc2VBQUNBdWRpb0RhdGEoZSwgdCArIDEsIG4gLSAxKTtpZiAodm9pZCAwID09IGMpIHJldHVybjtpZiAoMCA9PT0gYy5wYWNrZXRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICBoLmNvbmZpZyAmJiBsLmRlZmF1bHQudyh0aGlzLlRBRywgXCJGb3VuZCBhbm90aGVyIEF1ZGlvU3BlY2lmaWNDb25maWchXCIpO3ZhciBfID0gYy5kYXRhO2guYXVkaW9TYW1wbGVSYXRlID0gXy5zYW1wbGluZ1JhdGUsIGguY2hhbm5lbENvdW50ID0gXy5jaGFubmVsQ291bnQsIGguY29kZWMgPSBfLmNvZGVjLCBoLm9yaWdpbmFsQ29kZWMgPSBfLm9yaWdpbmFsQ29kZWMsIGguY29uZmlnID0gXy5jb25maWcsIGgucmVmU2FtcGxlRHVyYXRpb24gPSAxMDI0IC8gaC5hdWRpb1NhbXBsZVJhdGUgKiBoLnRpbWVzY2FsZSwgbC5kZWZhdWx0LnYodGhpcy5UQUcsIFwiUGFyc2VkIEF1ZGlvU3BlY2lmaWNDb25maWdcIiksIHRoaXMuX2lzSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCgpID8gdGhpcy5fZGlzcGF0Y2ggJiYgKHRoaXMuX2F1ZGlvVHJhY2subGVuZ3RoIHx8IHRoaXMuX3ZpZGVvVHJhY2subGVuZ3RoKSAmJiB0aGlzLl9vbkRhdGFBdmFpbGFibGUodGhpcy5fYXVkaW9UcmFjaywgdGhpcy5fdmlkZW9UcmFjaykgOiB0aGlzLl9hdWRpb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQgPSAhMCwgdGhpcy5fZGlzcGF0Y2ggPSAhMSwgdGhpcy5fb25UcmFja01ldGFkYXRhKFwiYXVkaW9cIiwgaCk7dmFyIHAgPSB0aGlzLl9tZWRpYUluZm87cC5hdWRpb0NvZGVjID0gaC5vcmlnaW5hbENvZGVjLCBwLmF1ZGlvU2FtcGxlUmF0ZSA9IGguYXVkaW9TYW1wbGVSYXRlLCBwLmF1ZGlvQ2hhbm5lbENvdW50ID0gaC5jaGFubmVsQ291bnQsIHAuaGFzVmlkZW8gPyBudWxsICE9IHAudmlkZW9Db2RlYyAmJiAocC5taW1lVHlwZSA9ICd2aWRlby94LWZsdjsgY29kZWNzPVwiJyArIHAudmlkZW9Db2RlYyArIFwiLFwiICsgcC5hdWRpb0NvZGVjICsgJ1wiJykgOiBwLm1pbWVUeXBlID0gJ3ZpZGVvL3gtZmx2OyBjb2RlY3M9XCInICsgcC5hdWRpb0NvZGVjICsgJ1wiJywgcC5pc0NvbXBsZXRlKCkgJiYgdGhpcy5fb25NZWRpYUluZm8ocCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgxID09PSBjLnBhY2tldFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2ID0gdGhpcy5fdGltZXN0YW1wQmFzZSArIGksXG4gICAgICAgICAgICAgICAgICAgICAgZyA9IHsgdW5pdDogYy5kYXRhLCBsZW5ndGg6IGMuZGF0YS5ieXRlTGVuZ3RoLCBkdHM6IHYsIHB0czogdiB9O2Yuc2FtcGxlcy5wdXNoKGcpLCBmLmxlbmd0aCArPSBjLmRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBsLmRlZmF1bHQuZSh0aGlzLlRBRywgXCJGbHY6IFVuc3VwcG9ydGVkIEFBQyBkYXRhIHR5cGUgXCIgKyBjLnBhY2tldFR5cGUpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKDIgPT09IGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWguY29kZWMpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5fcGFyc2VNUDNBdWRpb0RhdGEoZSwgdCArIDEsIG4gLSAxLCAhMCk7aWYgKHZvaWQgMCA9PSB5KSByZXR1cm47aC5hdWRpb1NhbXBsZVJhdGUgPSB5LnNhbXBsaW5nUmF0ZSwgaC5jaGFubmVsQ291bnQgPSB5LmNoYW5uZWxDb3VudCwgaC5jb2RlYyA9IHkuY29kZWMsIGgub3JpZ2luYWxDb2RlYyA9IHkub3JpZ2luYWxDb2RlYywgaC5yZWZTYW1wbGVEdXJhdGlvbiA9IDExNTIgLyBoLmF1ZGlvU2FtcGxlUmF0ZSAqIGgudGltZXNjYWxlLCBsLmRlZmF1bHQudih0aGlzLlRBRywgXCJQYXJzZWQgTVBFRyBBdWRpbyBGcmFtZSBIZWFkZXJcIiksIHRoaXMuX2F1ZGlvSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCA9ICEwLCB0aGlzLl9vblRyYWNrTWV0YWRhdGEoXCJhdWRpb1wiLCBoKTt2YXIgRSA9IHRoaXMuX21lZGlhSW5mbztFLmF1ZGlvQ29kZWMgPSBoLmNvZGVjLCBFLmF1ZGlvU2FtcGxlUmF0ZSA9IGguYXVkaW9TYW1wbGVSYXRlLCBFLmF1ZGlvQ2hhbm5lbENvdW50ID0gaC5jaGFubmVsQ291bnQsIEUuYXVkaW9EYXRhUmF0ZSA9IHkuYml0UmF0ZSwgRS5oYXNWaWRlbyA/IG51bGwgIT0gRS52aWRlb0NvZGVjICYmIChFLm1pbWVUeXBlID0gJ3ZpZGVvL3gtZmx2OyBjb2RlY3M9XCInICsgRS52aWRlb0NvZGVjICsgXCIsXCIgKyBFLmF1ZGlvQ29kZWMgKyAnXCInKSA6IEUubWltZVR5cGUgPSAndmlkZW8veC1mbHY7IGNvZGVjcz1cIicgKyBFLmF1ZGlvQ29kZWMgKyAnXCInLCBFLmlzQ29tcGxldGUoKSAmJiB0aGlzLl9vbk1lZGlhSW5mbyhFKTtcbiAgICAgICAgICAgICAgICB9dmFyIGIgPSB0aGlzLl9wYXJzZU1QM0F1ZGlvRGF0YShlLCB0ICsgMSwgbiAtIDEsICExKTtpZiAodm9pZCAwID09IGIpIHJldHVybjt2YXIgUyA9IHRoaXMuX3RpbWVzdGFtcEJhc2UgKyBpLFxuICAgICAgICAgICAgICAgICAgICBrID0geyB1bml0OiBiLCBsZW5ndGg6IGIuYnl0ZUxlbmd0aCwgZHRzOiBTLCBwdHM6IFMgfTtmLnNhbXBsZXMucHVzaChrKSwgZi5sZW5ndGggKz0gYi5sZW5ndGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9wYXJzZUFBQ0F1ZGlvRGF0YVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCwgbikge1xuICAgICAgICAgICAgaWYgKG4gPD0gMSkgcmV0dXJuIHZvaWQgbC5kZWZhdWx0LncodGhpcy5UQUcsIFwiRmx2OiBJbnZhbGlkIEFBQyBwYWNrZXQsIG1pc3NpbmcgQUFDUGFja2V0VHlwZSBvci9hbmQgRGF0YSFcIik7dmFyIGkgPSB7fSxcbiAgICAgICAgICAgICAgICByID0gbmV3IFVpbnQ4QXJyYXkoZSwgdCwgbik7cmV0dXJuIGkucGFja2V0VHlwZSA9IHJbMF0sIDAgPT09IHJbMF0gPyBpLmRhdGEgPSB0aGlzLl9wYXJzZUFBQ0F1ZGlvU3BlY2lmaWNDb25maWcoZSwgdCArIDEsIG4gLSAxKSA6IGkuZGF0YSA9IHIuc3ViYXJyYXkoMSksIGk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfcGFyc2VBQUNBdWRpb1NwZWNpZmljQ29uZmlnXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0LCBuKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG5ldyBVaW50OEFycmF5KGUsIHQsIG4pLFxuICAgICAgICAgICAgICAgIHIgPSBudWxsLFxuICAgICAgICAgICAgICAgIHMgPSAwLFxuICAgICAgICAgICAgICAgIGEgPSAwLFxuICAgICAgICAgICAgICAgIG8gPSAwLFxuICAgICAgICAgICAgICAgIHUgPSBudWxsO2lmIChzID0gYSA9IGlbMF0gPj4+IDMsIChvID0gKDcgJiBpWzBdKSA8PCAxIHwgaVsxXSA+Pj4gNykgPCAwIHx8IG8gPj0gdGhpcy5fbXBlZ1NhbXBsaW5nUmF0ZXMubGVuZ3RoKSByZXR1cm4gdm9pZCB0aGlzLl9vbkVycm9yKG0uZGVmYXVsdC5GT1JNQVRfRVJST1IsIFwiRmx2OiBBQUMgaW52YWxpZCBzYW1wbGluZyBmcmVxdWVuY3kgaW5kZXghXCIpO3ZhciBsID0gdGhpcy5fbXBlZ1NhbXBsaW5nUmF0ZXNbb10sXG4gICAgICAgICAgICAgICAgZCA9ICgxMjAgJiBpWzFdKSA+Pj4gMztpZiAoZCA8IDAgfHwgZCA+PSA4KSByZXR1cm4gdm9pZCB0aGlzLl9vbkVycm9yKG0uZGVmYXVsdC5GT1JNQVRfRVJST1IsIFwiRmx2OiBBQUMgaW52YWxpZCBjaGFubmVsIGNvbmZpZ3VyYXRpb25cIik7NSA9PT0gcyAmJiAodSA9ICg3ICYgaVsxXSkgPDwgMSB8IGlbMl0gPj4+IDcsIGlbMl0pO3ZhciBoID0gc2VsZi5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7cmV0dXJuIC0xICE9PSBoLmluZGV4T2YoXCJmaXJlZm94XCIpID8gbyA+PSA2ID8gKHMgPSA1LCByID0gbmV3IEFycmF5KDQpLCB1ID0gbyAtIDMpIDogKHMgPSAyLCByID0gbmV3IEFycmF5KDIpLCB1ID0gbykgOiAtMSAhPT0gaC5pbmRleE9mKFwiYW5kcm9pZFwiKSA/IChzID0gMiwgciA9IG5ldyBBcnJheSgyKSwgdSA9IG8pIDogKHMgPSA1LCB1ID0gbywgciA9IG5ldyBBcnJheSg0KSwgbyA+PSA2ID8gdSA9IG8gLSAzIDogMSA9PT0gZCAmJiAocyA9IDIsIHIgPSBuZXcgQXJyYXkoMiksIHUgPSBvKSksIHJbMF0gPSBzIDw8IDMsIHJbMF0gfD0gKDE1ICYgbykgPj4+IDEsIHJbMV0gPSAoMTUgJiBvKSA8PCA3LCByWzFdIHw9ICgxNSAmIGQpIDw8IDMsIDUgPT09IHMgJiYgKHJbMV0gfD0gKDE1ICYgdSkgPj4+IDEsIHJbMl0gPSAoMSAmIHUpIDw8IDcsIHJbMl0gfD0gOCwgclszXSA9IDApLCB7IGNvbmZpZzogciwgc2FtcGxpbmdSYXRlOiBsLCBjaGFubmVsQ291bnQ6IGQsIGNvZGVjOiBcIm1wNGEuNDAuXCIgKyBzLCBvcmlnaW5hbENvZGVjOiBcIm1wNGEuNDAuXCIgKyBhIH07XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfcGFyc2VNUDNBdWRpb0RhdGFcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQsIG4sIGkpIHtcbiAgICAgICAgICAgIGlmIChuIDwgNCkgcmV0dXJuIHZvaWQgbC5kZWZhdWx0LncodGhpcy5UQUcsIFwiRmx2OiBJbnZhbGlkIE1QMyBwYWNrZXQsIGhlYWRlciBtaXNzaW5nIVwiKTt2YXIgciA9ICh0aGlzLl9saXR0bGVFbmRpYW4sIG5ldyBVaW50OEFycmF5KGUsIHQsIG4pKSxcbiAgICAgICAgICAgICAgICBzID0gbnVsbDtpZiAoaSkge1xuICAgICAgICAgICAgICBpZiAoMjU1ICE9PSByWzBdKSByZXR1cm47dmFyIGEgPSByWzFdID4+PiAzICYgMyxcbiAgICAgICAgICAgICAgICAgIG8gPSAoNiAmIHJbMV0pID4+IDEsXG4gICAgICAgICAgICAgICAgICB1ID0gKDI0MCAmIHJbMl0pID4+PiA0LFxuICAgICAgICAgICAgICAgICAgZCA9ICgxMiAmIHJbMl0pID4+PiAyLFxuICAgICAgICAgICAgICAgICAgaCA9IHJbM10gPj4+IDYgJiAzLFxuICAgICAgICAgICAgICAgICAgZiA9IDMgIT09IGggPyAyIDogMSxcbiAgICAgICAgICAgICAgICAgIGMgPSAwLFxuICAgICAgICAgICAgICAgICAgXyA9IDA7c3dpdGNoIChhKSB7Y2FzZSAwOlxuICAgICAgICAgICAgICAgICAgYyA9IHRoaXMuX21wZWdBdWRpb1YyNVNhbXBsZVJhdGVUYWJsZVtkXTticmVhaztjYXNlIDI6XG4gICAgICAgICAgICAgICAgICBjID0gdGhpcy5fbXBlZ0F1ZGlvVjIwU2FtcGxlUmF0ZVRhYmxlW2RdO2JyZWFrO2Nhc2UgMzpcbiAgICAgICAgICAgICAgICAgIGMgPSB0aGlzLl9tcGVnQXVkaW9WMTBTYW1wbGVSYXRlVGFibGVbZF07fXN3aXRjaCAobykge2Nhc2UgMTpcbiAgICAgICAgICAgICAgICAgIDM0LCB1IDwgdGhpcy5fbXBlZ0F1ZGlvTDNCaXRSYXRlVGFibGUubGVuZ3RoICYmIChfID0gdGhpcy5fbXBlZ0F1ZGlvTDNCaXRSYXRlVGFibGVbdV0pO2JyZWFrO2Nhc2UgMjpcbiAgICAgICAgICAgICAgICAgIDMzLCB1IDwgdGhpcy5fbXBlZ0F1ZGlvTDJCaXRSYXRlVGFibGUubGVuZ3RoICYmIChfID0gdGhpcy5fbXBlZ0F1ZGlvTDJCaXRSYXRlVGFibGVbdV0pO2JyZWFrO2Nhc2UgMzpcbiAgICAgICAgICAgICAgICAgIDMyLCB1IDwgdGhpcy5fbXBlZ0F1ZGlvTDFCaXRSYXRlVGFibGUubGVuZ3RoICYmIChfID0gdGhpcy5fbXBlZ0F1ZGlvTDFCaXRSYXRlVGFibGVbdV0pO31zID0geyBiaXRSYXRlOiBfLCBzYW1wbGluZ1JhdGU6IGMsIGNoYW5uZWxDb3VudDogZiwgY29kZWM6IFwibXAzXCIsIG9yaWdpbmFsQ29kZWM6IFwibXAzXCIgfTtcbiAgICAgICAgICAgIH0gZWxzZSBzID0gcjtyZXR1cm4gcztcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9wYXJzZVZpZGVvRGF0YVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCwgbiwgaSwgcikge1xuICAgICAgICAgICAgaWYgKG4gPD0gMSkgcmV0dXJuIHZvaWQgbC5kZWZhdWx0LncodGhpcy5UQUcsIFwiRmx2OiBJbnZhbGlkIHZpZGVvIHBhY2tldCwgbWlzc2luZyBWaWRlb0RhdGEgcGF5bG9hZCFcIik7aWYgKCEwICE9PSB0aGlzLl9oYXNWaWRlb0ZsYWdPdmVycmlkZWQgfHwgITEgIT09IHRoaXMuX2hhc1ZpZGVvKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gbmV3IFVpbnQ4QXJyYXkoZSwgdCwgbilbMF0sXG4gICAgICAgICAgICAgICAgICBhID0gKDI0MCAmIHMpID4+PiA0LFxuICAgICAgICAgICAgICAgICAgbyA9IDE1ICYgcztpZiAoNyAhPT0gbykgcmV0dXJuIHZvaWQgdGhpcy5fb25FcnJvcihtLmRlZmF1bHQuQ09ERUNfVU5TVVBQT1JURUQsIFwiRmx2OiBVbnN1cHBvcnRlZCBjb2RlYyBpbiB2aWRlbyBmcmFtZTogXCIgKyBvKTt0aGlzLl9wYXJzZUFWQ1ZpZGVvUGFja2V0KGUsIHQgKyAxLCBuIC0gMSwgaSwgciwgYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfcGFyc2VBVkNWaWRlb1BhY2tldFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCwgbiwgaSwgciwgcykge1xuICAgICAgICAgICAgaWYgKG4gPCA0KSByZXR1cm4gdm9pZCBsLmRlZmF1bHQudyh0aGlzLlRBRywgXCJGbHY6IEludmFsaWQgQVZDIHBhY2tldCwgbWlzc2luZyBBVkNQYWNrZXRUeXBlIG9yL2FuZCBDb21wb3NpdGlvblRpbWVcIik7dmFyIGEgPSB0aGlzLl9saXR0bGVFbmRpYW4sXG4gICAgICAgICAgICAgICAgbyA9IG5ldyBEYXRhVmlldyhlLCB0LCBuKSxcbiAgICAgICAgICAgICAgICB1ID0gby5nZXRVaW50OCgwKSxcbiAgICAgICAgICAgICAgICBkID0gMTY3NzcyMTUgJiBvLmdldFVpbnQzMigwLCAhYSksXG4gICAgICAgICAgICAgICAgaCA9IGQgPDwgOCA+PiA4O2lmICgwID09PSB1KSB0aGlzLl9wYXJzZUFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkKGUsIHQgKyA0LCBuIC0gNCk7ZWxzZSBpZiAoMSA9PT0gdSkgdGhpcy5fcGFyc2VBVkNWaWRlb0RhdGEoZSwgdCArIDQsIG4gLSA0LCBpLCByLCBzLCBoKTtlbHNlIGlmICgyICE9PSB1KSByZXR1cm4gdm9pZCB0aGlzLl9vbkVycm9yKG0uZGVmYXVsdC5GT1JNQVRfRVJST1IsIFwiRmx2OiBJbnZhbGlkIHZpZGVvIHBhY2tldCB0eXBlIFwiICsgdSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfcGFyc2VBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCwgbikge1xuICAgICAgICAgICAgaWYgKG4gPCA3KSByZXR1cm4gdm9pZCBsLmRlZmF1bHQudyh0aGlzLlRBRywgXCJGbHY6IEludmFsaWQgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQsIGxhY2sgb2YgZGF0YSFcIik7dmFyIGkgPSB0aGlzLl92aWRlb01ldGFkYXRhLFxuICAgICAgICAgICAgICAgIHIgPSB0aGlzLl92aWRlb1RyYWNrLFxuICAgICAgICAgICAgICAgIHMgPSB0aGlzLl9saXR0bGVFbmRpYW4sXG4gICAgICAgICAgICAgICAgYSA9IG5ldyBEYXRhVmlldyhlLCB0LCBuKTtpID8gdm9pZCAwICE9PSBpLmF2Y2MgJiYgbC5kZWZhdWx0LncodGhpcy5UQUcsIFwiRm91bmQgYW5vdGhlciBBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCFcIikgOiAoITEgPT09IHRoaXMuX2hhc1ZpZGVvICYmICExID09PSB0aGlzLl9oYXNWaWRlb0ZsYWdPdmVycmlkZWQgJiYgKHRoaXMuX2hhc1ZpZGVvID0gITAsIHRoaXMuX21lZGlhSW5mby5oYXNWaWRlbyA9ICEwKSwgaSA9IHRoaXMuX3ZpZGVvTWV0YWRhdGEgPSB7fSwgaS50eXBlID0gXCJ2aWRlb1wiLCBpLmlkID0gci5pZCwgaS50aW1lc2NhbGUgPSB0aGlzLl90aW1lc2NhbGUsIGkuZHVyYXRpb24gPSB0aGlzLl9kdXJhdGlvbik7dmFyIG8gPSBhLmdldFVpbnQ4KDApLFxuICAgICAgICAgICAgICAgIHUgPSBhLmdldFVpbnQ4KDEpO2EuZ2V0VWludDgoMiksIGEuZ2V0VWludDgoMyk7aWYgKDEgIT09IG8gfHwgMCA9PT0gdSkgcmV0dXJuIHZvaWQgdGhpcy5fb25FcnJvcihtLmRlZmF1bHQuRk9STUFUX0VSUk9SLCBcIkZsdjogSW52YWxpZCBBVkNEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZFwiKTtpZiAodGhpcy5fbmFsdUxlbmd0aFNpemUgPSAxICsgKDMgJiBhLmdldFVpbnQ4KDQpKSwgMyAhPT0gdGhpcy5fbmFsdUxlbmd0aFNpemUgJiYgNCAhPT0gdGhpcy5fbmFsdUxlbmd0aFNpemUpIHJldHVybiB2b2lkIHRoaXMuX29uRXJyb3IobS5kZWZhdWx0LkZPUk1BVF9FUlJPUiwgXCJGbHY6IFN0cmFuZ2UgTmFsdUxlbmd0aFNpemVNaW51c09uZTogXCIgKyAodGhpcy5fbmFsdUxlbmd0aFNpemUgLSAxKSk7dmFyIGQgPSAzMSAmIGEuZ2V0VWludDgoNSk7aWYgKDAgPT09IGQpIHJldHVybiB2b2lkIHRoaXMuX29uRXJyb3IobS5kZWZhdWx0LkZPUk1BVF9FUlJPUiwgXCJGbHY6IEludmFsaWQgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQ6IE5vIFNQU1wiKTtkID4gMSAmJiBsLmRlZmF1bHQudyh0aGlzLlRBRywgXCJGbHY6IFN0cmFuZ2UgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQ6IFNQUyBDb3VudCA9IFwiICsgZCk7Zm9yICh2YXIgaCA9IDYsIGYgPSAwOyBmIDwgZDsgZisrKSB7XG4gICAgICAgICAgICAgIHZhciBfID0gYS5nZXRVaW50MTYoaCwgIXMpO2lmIChoICs9IDIsIDAgIT09IF8pIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IG5ldyBVaW50OEFycmF5KGUsIHQgKyBoLCBfKTtoICs9IF87dmFyIHYgPSBjLmRlZmF1bHQucGFyc2VTUFMocCk7aWYgKDAgPT09IGYpIHtcbiAgICAgICAgICAgICAgICAgIGkuY29kZWNXaWR0aCA9IHYuY29kZWNfc2l6ZS53aWR0aCwgaS5jb2RlY0hlaWdodCA9IHYuY29kZWNfc2l6ZS5oZWlnaHQsIGkucHJlc2VudFdpZHRoID0gdi5wcmVzZW50X3NpemUud2lkdGgsIGkucHJlc2VudEhlaWdodCA9IHYucHJlc2VudF9zaXplLmhlaWdodCwgaS5wcm9maWxlID0gdi5wcm9maWxlX3N0cmluZywgaS5sZXZlbCA9IHYubGV2ZWxfc3RyaW5nLCBpLmJpdERlcHRoID0gdi5iaXRfZGVwdGgsIGkuY2hyb21hRm9ybWF0ID0gdi5jaHJvbWFfZm9ybWF0LCBpLnNhclJhdGlvID0gdi5zYXJfcmF0aW8sIGkuZnJhbWVSYXRlID0gdi5mcmFtZV9yYXRlLCAhMSAhPT0gdi5mcmFtZV9yYXRlLmZpeGVkICYmIDAgIT09IHYuZnJhbWVfcmF0ZS5mcHNfbnVtICYmIDAgIT09IHYuZnJhbWVfcmF0ZS5mcHNfZGVuIHx8IChpLmZyYW1lUmF0ZSA9IHRoaXMuX3JlZmVyZW5jZUZyYW1lUmF0ZSk7dmFyIGcgPSBpLmZyYW1lUmF0ZS5mcHNfZGVuLFxuICAgICAgICAgICAgICAgICAgICAgIHkgPSBpLmZyYW1lUmF0ZS5mcHNfbnVtO2kucmVmU2FtcGxlRHVyYXRpb24gPSBpLnRpbWVzY2FsZSAqIChnIC8geSk7Zm9yICh2YXIgRSA9IHAuc3ViYXJyYXkoMSwgNCksIGIgPSBcImF2YzEuXCIsIFMgPSAwOyBTIDwgMzsgUysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrID0gRVtTXS50b1N0cmluZygxNik7ay5sZW5ndGggPCAyICYmIChrID0gXCIwXCIgKyBrKSwgYiArPSBrO1xuICAgICAgICAgICAgICAgICAgfWkuY29kZWMgPSBiO3ZhciBMID0gdGhpcy5fbWVkaWFJbmZvO0wud2lkdGggPSBpLmNvZGVjV2lkdGgsIEwuaGVpZ2h0ID0gaS5jb2RlY0hlaWdodCwgTC5mcHMgPSBpLmZyYW1lUmF0ZS5mcHMsIEwucHJvZmlsZSA9IGkucHJvZmlsZSwgTC5sZXZlbCA9IGkubGV2ZWwsIEwucmVmRnJhbWVzID0gdi5yZWZfZnJhbWVzLCBMLmNocm9tYUZvcm1hdCA9IHYuY2hyb21hX2Zvcm1hdF9zdHJpbmcsIEwuc2FyTnVtID0gaS5zYXJSYXRpby53aWR0aCwgTC5zYXJEZW4gPSBpLnNhclJhdGlvLmhlaWdodCwgTC52aWRlb0NvZGVjID0gYiwgTC5oYXNBdWRpbyA/IG51bGwgIT0gTC5hdWRpb0NvZGVjICYmIChMLm1pbWVUeXBlID0gJ3ZpZGVvL3gtZmx2OyBjb2RlY3M9XCInICsgTC52aWRlb0NvZGVjICsgXCIsXCIgKyBMLmF1ZGlvQ29kZWMgKyAnXCInKSA6IEwubWltZVR5cGUgPSAndmlkZW8veC1mbHY7IGNvZGVjcz1cIicgKyBMLnZpZGVvQ29kZWMgKyAnXCInLCBMLmlzQ29tcGxldGUoKSAmJiB0aGlzLl9vbk1lZGlhSW5mbyhMKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH12YXIgUiA9IGEuZ2V0VWludDgoaCk7aWYgKDAgPT09IFIpIHJldHVybiB2b2lkIHRoaXMuX29uRXJyb3IobS5kZWZhdWx0LkZPUk1BVF9FUlJPUiwgXCJGbHY6IEludmFsaWQgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQ6IE5vIFBQU1wiKTtSID4gMSAmJiBsLmRlZmF1bHQudyh0aGlzLlRBRywgXCJGbHY6IFN0cmFuZ2UgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQ6IFBQUyBDb3VudCA9IFwiICsgUiksIGgrKztmb3IgKHZhciBBID0gMDsgQSA8IFI7IEErKykge1xuICAgICAgICAgICAgICB2YXIgdyA9IGEuZ2V0VWludDE2KGgsICFzKTtoICs9IDIsIDAgIT09IHcgJiYgKGggKz0gdyk7XG4gICAgICAgICAgICB9aS5hdmNjID0gbmV3IFVpbnQ4QXJyYXkobiksIGkuYXZjYy5zZXQobmV3IFVpbnQ4QXJyYXkoZSwgdCwgbiksIDApLCBsLmRlZmF1bHQudih0aGlzLlRBRywgXCJQYXJzZWQgQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmRcIiksIHRoaXMuX2lzSW5pdGlhbE1ldGFkYXRhRGlzcGF0Y2hlZCgpID8gdGhpcy5fZGlzcGF0Y2ggJiYgKHRoaXMuX2F1ZGlvVHJhY2subGVuZ3RoIHx8IHRoaXMuX3ZpZGVvVHJhY2subGVuZ3RoKSAmJiB0aGlzLl9vbkRhdGFBdmFpbGFibGUodGhpcy5fYXVkaW9UcmFjaywgdGhpcy5fdmlkZW9UcmFjaykgOiB0aGlzLl92aWRlb0luaXRpYWxNZXRhZGF0YURpc3BhdGNoZWQgPSAhMCwgdGhpcy5fZGlzcGF0Y2ggPSAhMSwgdGhpcy5fb25UcmFja01ldGFkYXRhKFwidmlkZW9cIiwgaSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfcGFyc2VBVkNWaWRlb0RhdGFcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQsIG4sIGksIHIsIHMsIGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG8gPSB0aGlzLl9saXR0bGVFbmRpYW4sIHUgPSBuZXcgRGF0YVZpZXcoZSwgdCwgbiksIGQgPSBbXSwgaCA9IDAsIGYgPSAwLCBjID0gdGhpcy5fbmFsdUxlbmd0aFNpemUsIF8gPSB0aGlzLl90aW1lc3RhbXBCYXNlICsgaSwgbSA9IDEgPT09IHM7IGYgPCBuOykge1xuICAgICAgICAgICAgICBpZiAoZiArIDQgPj0gbikge1xuICAgICAgICAgICAgICAgIGwuZGVmYXVsdC53KHRoaXMuVEFHLCBcIk1hbGZvcm1lZCBOYWx1IG5lYXIgdGltZXN0YW1wIFwiICsgXyArIFwiLCBvZmZzZXQgPSBcIiArIGYgKyBcIiwgZGF0YVNpemUgPSBcIiArIG4pO2JyZWFrO1xuICAgICAgICAgICAgICB9dmFyIHAgPSB1LmdldFVpbnQzMihmLCAhbyk7aWYgKDMgPT09IGMgJiYgKHAgPj4+PSA4KSwgcCA+IG4gLSBjKSByZXR1cm4gdm9pZCBsLmRlZmF1bHQudyh0aGlzLlRBRywgXCJNYWxmb3JtZWQgTmFsdXMgbmVhciB0aW1lc3RhbXAgXCIgKyBfICsgXCIsIE5hbHVTaXplID4gRGF0YVNpemUhXCIpO3ZhciB2ID0gMzEgJiB1LmdldFVpbnQ4KGYgKyBjKTs1ID09PSB2ICYmIChtID0gITApO3ZhciBnID0gbmV3IFVpbnQ4QXJyYXkoZSwgdCArIGYsIGMgKyBwKSxcbiAgICAgICAgICAgICAgICAgIHkgPSB7IHR5cGU6IHYsIGRhdGE6IGcgfTtkLnB1c2goeSksIGggKz0gZy5ieXRlTGVuZ3RoLCBmICs9IGMgKyBwO1xuICAgICAgICAgICAgfWlmIChkLmxlbmd0aCkge1xuICAgICAgICAgICAgICB2YXIgRSA9IHRoaXMuX3ZpZGVvVHJhY2ssXG4gICAgICAgICAgICAgICAgICBiID0geyB1bml0czogZCwgbGVuZ3RoOiBoLCBpc0tleWZyYW1lOiBtLCBkdHM6IF8sIGN0czogYSwgcHRzOiBfICsgYSB9O20gJiYgKGIuZmlsZXBvc2l0aW9uID0gciksIEUuc2FtcGxlcy5wdXNoKGIpLCBFLmxlbmd0aCArPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25UcmFja01ldGFkYXRhXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uVHJhY2tNZXRhZGF0YTtcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldChlKSB7XG4gICAgICAgICAgICB0aGlzLl9vblRyYWNrTWV0YWRhdGEgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25NZWRpYUluZm9cIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb25NZWRpYUluZm87XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5fb25NZWRpYUluZm8gPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25NZXRhRGF0YUFycml2ZWRcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb25NZXRhRGF0YUFycml2ZWQ7XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5fb25NZXRhRGF0YUFycml2ZWQgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25TY3JpcHREYXRhQXJyaXZlZFwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vblNjcmlwdERhdGFBcnJpdmVkO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX29uU2NyaXB0RGF0YUFycml2ZWQgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25FcnJvclwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vbkVycm9yO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX29uRXJyb3IgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25EYXRhQXZhaWxhYmxlXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uRGF0YUF2YWlsYWJsZTtcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldChlKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkRhdGFBdmFpbGFibGUgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwidGltZXN0YW1wQmFzZVwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lc3RhbXBCYXNlO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVzdGFtcEJhc2UgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib3ZlcnJpZGVkRHVyYXRpb25cIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZHVyYXRpb247XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb25PdmVycmlkZWQgPSAhMCwgdGhpcy5fZHVyYXRpb24gPSBlLCB0aGlzLl9tZWRpYUluZm8uZHVyYXRpb24gPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib3ZlcnJpZGVkSGFzQXVkaW9cIiwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5faGFzQXVkaW9GbGFnT3ZlcnJpZGVkID0gITAsIHRoaXMuX2hhc0F1ZGlvID0gZSwgdGhpcy5fbWVkaWFJbmZvLmhhc0F1ZGlvID0gZTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIm92ZXJyaWRlZEhhc1ZpZGVvXCIsIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc1ZpZGVvRmxhZ092ZXJyaWRlZCA9ICEwLCB0aGlzLl9oYXNWaWRlbyA9IGUsIHRoaXMuX21lZGlhSW5mby5oYXNWaWRlbyA9IGU7XG4gICAgICAgICAgfSB9XSwgW3sga2V5OiBcInByb2JlXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IG5ldyBVaW50OEFycmF5KGUpLFxuICAgICAgICAgICAgICAgIG4gPSB7IG1hdGNoOiAhMSB9O2lmICg3MCAhPT0gdFswXSB8fCA3NiAhPT0gdFsxXSB8fCA4NiAhPT0gdFsyXSB8fCAxICE9PSB0WzNdKSByZXR1cm4gbjt2YXIgaSA9ICg0ICYgdFs0XSkgPj4+IDIgIT0gMCxcbiAgICAgICAgICAgICAgICByID0gMCAhPSAoMSAmIHRbNF0pLFxuICAgICAgICAgICAgICAgIGEgPSBzKHQsIDUpO3JldHVybiBhIDwgOSA/IG4gOiB7IG1hdGNoOiAhMCwgY29uc3VtZWQ6IGEsIGRhdGFPZmZzZXQ6IGEsIGhhc0F1ZGlvVHJhY2s6IGksIGhhc1ZpZGVvVHJhY2s6IHIgfTtcbiAgICAgICAgICB9IH1dKSwgZTtcbiAgICAgIH0oKTtuLmRlZmF1bHQgPSB5O1xuICAgIH0sIHsgXCIuLi9jb3JlL21lZGlhLWluZm8uanNcIjogNywgXCIuLi91dGlscy9leGNlcHRpb24uanNcIjogNDAsIFwiLi4vdXRpbHMvbG9nZ2VyLmpzXCI6IDQxLCBcIi4vYW1mLXBhcnNlci5qc1wiOiAxNSwgXCIuL2RlbXV4LWVycm9ycy5qc1wiOiAxNiwgXCIuL3Nwcy1wYXJzZXIuanNcIjogMTkgfV0sIDE5OiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciByID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgcyA9IGUoXCIuL2V4cC1nb2xvbWIuanNcIiksXG4gICAgICAgICAgYSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH0ocyksXG4gICAgICAgICAgbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICBpKHRoaXMsIGUpO1xuICAgICAgICB9cmV0dXJuIHIoZSwgbnVsbCwgW3sga2V5OiBcIl9lYnNwMnJic3BcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSBlLCBuID0gdC5ieXRlTGVuZ3RoLCBpID0gbmV3IFVpbnQ4QXJyYXkobiksIHIgPSAwLCBzID0gMDsgcyA8IG47IHMrKykge1xuICAgICAgICAgICAgICBzID49IDIgJiYgMyA9PT0gdFtzXSAmJiAwID09PSB0W3MgLSAxXSAmJiAwID09PSB0W3MgLSAyXSB8fCAoaVtyXSA9IHRbc10sIHIrKyk7XG4gICAgICAgICAgICB9cmV0dXJuIG5ldyBVaW50OEFycmF5KGkuYnVmZmVyLCAwLCByKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInBhcnNlU1BTXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IGUuX2Vic3AycmJzcCh0KSxcbiAgICAgICAgICAgICAgICBpID0gbmV3IGEuZGVmYXVsdChuKTtpLnJlYWRCeXRlKCk7dmFyIHIgPSBpLnJlYWRCeXRlKCk7aS5yZWFkQnl0ZSgpO3ZhciBzID0gaS5yZWFkQnl0ZSgpO2kucmVhZFVFRygpO3ZhciBvID0gZS5nZXRQcm9maWxlU3RyaW5nKHIpLFxuICAgICAgICAgICAgICAgIHUgPSBlLmdldExldmVsU3RyaW5nKHMpLFxuICAgICAgICAgICAgICAgIGwgPSAxLFxuICAgICAgICAgICAgICAgIGQgPSA0MjAsXG4gICAgICAgICAgICAgICAgaCA9IFswLCA0MjAsIDQyMiwgNDQ0XSxcbiAgICAgICAgICAgICAgICBmID0gODtpZiAoKDEwMCA9PT0gciB8fCAxMTAgPT09IHIgfHwgMTIyID09PSByIHx8IDI0NCA9PT0gciB8fCA0NCA9PT0gciB8fCA4MyA9PT0gciB8fCA4NiA9PT0gciB8fCAxMTggPT09IHIgfHwgMTI4ID09PSByIHx8IDEzOCA9PT0gciB8fCAxNDQgPT09IHIpICYmIChsID0gaS5yZWFkVUVHKCksIDMgPT09IGwgJiYgaS5yZWFkQml0cygxKSwgbCA8PSAzICYmIChkID0gaFtsXSksIGYgPSBpLnJlYWRVRUcoKSArIDgsIGkucmVhZFVFRygpLCBpLnJlYWRCaXRzKDEpLCBpLnJlYWRCb29sKCkpKSBmb3IgKHZhciBjID0gMyAhPT0gbCA/IDggOiAxMiwgXyA9IDA7IF8gPCBjOyBfKyspIHtcbiAgICAgICAgICAgICAgaS5yZWFkQm9vbCgpICYmIChfIDwgNiA/IGUuX3NraXBTY2FsaW5nTGlzdChpLCAxNikgOiBlLl9za2lwU2NhbGluZ0xpc3QoaSwgNjQpKTtcbiAgICAgICAgICAgIH1pLnJlYWRVRUcoKTt2YXIgbSA9IGkucmVhZFVFRygpO2lmICgwID09PSBtKSBpLnJlYWRVRUcoKTtlbHNlIGlmICgxID09PSBtKSB7XG4gICAgICAgICAgICAgIGkucmVhZEJpdHMoMSksIGkucmVhZFNFRygpLCBpLnJlYWRTRUcoKTtmb3IgKHZhciBwID0gaS5yZWFkVUVHKCksIHYgPSAwOyB2IDwgcDsgdisrKSB7XG4gICAgICAgICAgICAgICAgaS5yZWFkU0VHKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH12YXIgZyA9IGkucmVhZFVFRygpO2kucmVhZEJpdHMoMSk7dmFyIHkgPSBpLnJlYWRVRUcoKSxcbiAgICAgICAgICAgICAgICBFID0gaS5yZWFkVUVHKCksXG4gICAgICAgICAgICAgICAgYiA9IGkucmVhZEJpdHMoMSk7MCA9PT0gYiAmJiBpLnJlYWRCaXRzKDEpLCBpLnJlYWRCaXRzKDEpO3ZhciBTID0gMCxcbiAgICAgICAgICAgICAgICBrID0gMCxcbiAgICAgICAgICAgICAgICBMID0gMCxcbiAgICAgICAgICAgICAgICBSID0gMDtpLnJlYWRCb29sKCkgJiYgKFMgPSBpLnJlYWRVRUcoKSwgayA9IGkucmVhZFVFRygpLCBMID0gaS5yZWFkVUVHKCksIFIgPSBpLnJlYWRVRUcoKSk7dmFyIEEgPSAxLFxuICAgICAgICAgICAgICAgIHcgPSAxLFxuICAgICAgICAgICAgICAgIFQgPSAwLFxuICAgICAgICAgICAgICAgIE8gPSAhMCxcbiAgICAgICAgICAgICAgICBDID0gMCxcbiAgICAgICAgICAgICAgICBJID0gMDtpZiAoaS5yZWFkQm9vbCgpKSB7XG4gICAgICAgICAgICAgIGlmIChpLnJlYWRCb29sKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgRCA9IGkucmVhZEJ5dGUoKSxcbiAgICAgICAgICAgICAgICAgICAgeCA9IFsxLCAxMiwgMTAsIDE2LCA0MCwgMjQsIDIwLCAzMiwgODAsIDE4LCAxNSwgNjQsIDE2MCwgNCwgMywgMl0sXG4gICAgICAgICAgICAgICAgICAgIE0gPSBbMSwgMTEsIDExLCAxMSwgMzMsIDExLCAxMSwgMTEsIDMzLCAxMSwgMTEsIDMzLCA5OSwgMywgMiwgMV07RCA+IDAgJiYgRCA8IDE2ID8gKEEgPSB4W0QgLSAxXSwgdyA9IE1bRCAtIDFdKSA6IDI1NSA9PT0gRCAmJiAoQSA9IGkucmVhZEJ5dGUoKSA8PCA4IHwgaS5yZWFkQnl0ZSgpLCB3ID0gaS5yZWFkQnl0ZSgpIDw8IDggfCBpLnJlYWRCeXRlKCkpO1xuICAgICAgICAgICAgICB9aWYgKGkucmVhZEJvb2woKSAmJiBpLnJlYWRCb29sKCksIGkucmVhZEJvb2woKSAmJiAoaS5yZWFkQml0cyg0KSwgaS5yZWFkQm9vbCgpICYmIGkucmVhZEJpdHMoMjQpKSwgaS5yZWFkQm9vbCgpICYmIChpLnJlYWRVRUcoKSwgaS5yZWFkVUVHKCkpLCBpLnJlYWRCb29sKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgQiA9IGkucmVhZEJpdHMoMzIpLFxuICAgICAgICAgICAgICAgICAgICBqID0gaS5yZWFkQml0cygzMik7TyA9IGkucmVhZEJvb2woKSwgQyA9IGosIEkgPSAyICogQiwgVCA9IEMgLyBJO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9dmFyIFAgPSAxOzEgPT09IEEgJiYgMSA9PT0gdyB8fCAoUCA9IEEgLyB3KTt2YXIgVSA9IDAsXG4gICAgICAgICAgICAgICAgTiA9IDA7aWYgKDAgPT09IGwpIFUgPSAxLCBOID0gMiAtIGI7ZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBGID0gMyA9PT0gbCA/IDEgOiAyLFxuICAgICAgICAgICAgICAgICAgRyA9IDEgPT09IGwgPyAyIDogMTtVID0gRiwgTiA9IEcgKiAoMiAtIGIpO1xuICAgICAgICAgICAgfXZhciBWID0gMTYgKiAoeSArIDEpLFxuICAgICAgICAgICAgICAgIHogPSAxNiAqIChFICsgMSkgKiAoMiAtIGIpO1YgLT0gKFMgKyBrKSAqIFUsIHogLT0gKEwgKyBSKSAqIE47dmFyIEggPSBNYXRoLmNlaWwoViAqIFApO3JldHVybiBpLmRlc3Ryb3koKSwgaSA9IG51bGwsIHsgcHJvZmlsZV9zdHJpbmc6IG8sIGxldmVsX3N0cmluZzogdSwgYml0X2RlcHRoOiBmLCByZWZfZnJhbWVzOiBnLCBjaHJvbWFfZm9ybWF0OiBkLCBjaHJvbWFfZm9ybWF0X3N0cmluZzogZS5nZXRDaHJvbWFGb3JtYXRTdHJpbmcoZCksIGZyYW1lX3JhdGU6IHsgZml4ZWQ6IE8sIGZwczogVCwgZnBzX2RlbjogSSwgZnBzX251bTogQyB9LCBzYXJfcmF0aW86IHsgd2lkdGg6IEEsIGhlaWdodDogdyB9LCBjb2RlY19zaXplOiB7IHdpZHRoOiBWLCBoZWlnaHQ6IHogfSwgcHJlc2VudF9zaXplOiB7IHdpZHRoOiBILCBoZWlnaHQ6IHogfSB9O1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX3NraXBTY2FsaW5nTGlzdFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDgsIGkgPSA4LCByID0gMCwgcyA9IDA7IHMgPCB0OyBzKyspIHtcbiAgICAgICAgICAgICAgMCAhPT0gaSAmJiAociA9IGUucmVhZFNFRygpLCBpID0gKG4gKyByICsgMjU2KSAlIDI1NiksIG4gPSAwID09PSBpID8gbiA6IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJnZXRQcm9maWxlU3RyaW5nXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUpIHtjYXNlIDY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhc2VsaW5lXCI7Y2FzZSA3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWluXCI7Y2FzZSA4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeHRlbmRlZFwiO2Nhc2UgMTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhpZ2hcIjtjYXNlIDExMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIaWdoMTBcIjtjYXNlIDEyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIaWdoNDIyXCI7Y2FzZSAyNDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGlnaDQ0NFwiO2RlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5rbm93blwiO31cbiAgICAgICAgICB9IH0sIHsga2V5OiBcImdldExldmVsU3RyaW5nXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGUgLyAxMCkudG9GaXhlZCgxKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImdldENocm9tYUZvcm1hdFN0cmluZ1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgc3dpdGNoIChlKSB7Y2FzZSA0MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiNDoyOjBcIjtjYXNlIDQyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI0OjI6MlwiO2Nhc2UgNDQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjQ6NDo0XCI7ZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmtub3duXCI7fVxuICAgICAgICAgIH0gfV0pLCBlO1xuICAgICAgfSgpO24uZGVmYXVsdCA9IG87XG4gICAgfSwgeyBcIi4vZXhwLWdvbG9tYi5qc1wiOiAxNyB9XSwgMjA6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9O1xuICAgICAgfWZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICB2YXIgbiA9IGU7aWYgKG51bGwgPT0gbiB8fCBcIm9iamVjdFwiICE9PSAodm9pZCAwID09PSBuID8gXCJ1bmRlZmluZWRcIiA6IG8obikpKSB0aHJvdyBuZXcgUy5JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24oXCJNZWRpYURhdGFTb3VyY2UgbXVzdCBiZSBhbiBqYXZhc2NyaXB0IG9iamVjdCFcIik7aWYgKCFuLmhhc093blByb3BlcnR5KFwidHlwZVwiKSkgdGhyb3cgbmV3IFMuSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uKFwiTWVkaWFEYXRhU291cmNlIG11c3QgaGFzIHR5cGUgZmllbGQgdG8gaW5kaWNhdGUgdmlkZW8gZmlsZSB0eXBlIVwiKTtzd2l0Y2ggKG4udHlwZSkge2Nhc2UgXCJmbHZcIjpcbiAgICAgICAgICAgIHJldHVybiBuZXcgXy5kZWZhdWx0KG4sIHQpO2RlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IHAuZGVmYXVsdChuLCB0KTt9XG4gICAgICB9ZnVuY3Rpb24gcygpIHtcbiAgICAgICAgcmV0dXJuIGguZGVmYXVsdC5zdXBwb3J0TVNFSDI2NFBsYXliYWNrKCk7XG4gICAgICB9ZnVuY3Rpb24gYSgpIHtcbiAgICAgICAgcmV0dXJuIGguZGVmYXVsdC5nZXRGZWF0dXJlTGlzdCgpO1xuICAgICAgfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIG8gPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IF90eXBlb2YoU3ltYm9sLml0ZXJhdG9yKSA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGUpO1xuICAgICAgfSA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZSk7XG4gICAgICB9LFxuICAgICAgICAgIHUgPSBlKFwiLi91dGlscy9wb2x5ZmlsbC5qc1wiKSxcbiAgICAgICAgICBsID0gaSh1KSxcbiAgICAgICAgICBkID0gZShcIi4vY29yZS9mZWF0dXJlcy5qc1wiKSxcbiAgICAgICAgICBoID0gaShkKSxcbiAgICAgICAgICBmID0gZShcIi4vaW8vbG9hZGVyLmpzXCIpLFxuICAgICAgICAgIGMgPSBlKFwiLi9wbGF5ZXIvZmx2LXBsYXllci5qc1wiKSxcbiAgICAgICAgICBfID0gaShjKSxcbiAgICAgICAgICBtID0gZShcIi4vcGxheWVyL25hdGl2ZS1wbGF5ZXIuanNcIiksXG4gICAgICAgICAgcCA9IGkobSksXG4gICAgICAgICAgdiA9IGUoXCIuL3BsYXllci9wbGF5ZXItZXZlbnRzLmpzXCIpLFxuICAgICAgICAgIGcgPSBpKHYpLFxuICAgICAgICAgIHkgPSBlKFwiLi9wbGF5ZXIvcGxheWVyLWVycm9ycy5qc1wiKSxcbiAgICAgICAgICBFID0gZShcIi4vdXRpbHMvbG9nZ2luZy1jb250cm9sLmpzXCIpLFxuICAgICAgICAgIGIgPSBpKEUpLFxuICAgICAgICAgIFMgPSBlKFwiLi91dGlscy9leGNlcHRpb24uanNcIik7bC5kZWZhdWx0Lmluc3RhbGwoKTt2YXIgayA9IHt9O2suY3JlYXRlUGxheWVyID0gciwgay5pc1N1cHBvcnRlZCA9IHMsIGsuZ2V0RmVhdHVyZUxpc3QgPSBhLCBrLkJhc2VMb2FkZXIgPSBmLkJhc2VMb2FkZXIsIGsuTG9hZGVyU3RhdHVzID0gZi5Mb2FkZXJTdGF0dXMsIGsuTG9hZGVyRXJyb3JzID0gZi5Mb2FkZXJFcnJvcnMsIGsuRXZlbnRzID0gZy5kZWZhdWx0LCBrLkVycm9yVHlwZXMgPSB5LkVycm9yVHlwZXMsIGsuRXJyb3JEZXRhaWxzID0geS5FcnJvckRldGFpbHMsIGsuRmx2UGxheWVyID0gXy5kZWZhdWx0LCBrLk5hdGl2ZVBsYXllciA9IHAuZGVmYXVsdCwgay5Mb2dnaW5nQ29udHJvbCA9IGIuZGVmYXVsdCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGssIFwidmVyc2lvblwiLCB7IGVudW1lcmFibGU6ICEwLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gXCIxLjUuMFwiO1xuICAgICAgICB9IH0pLCBuLmRlZmF1bHQgPSBrO1xuICAgIH0sIHsgXCIuL2NvcmUvZmVhdHVyZXMuanNcIjogNiwgXCIuL2lvL2xvYWRlci5qc1wiOiAyNCwgXCIuL3BsYXllci9mbHYtcGxheWVyLmpzXCI6IDMyLCBcIi4vcGxheWVyL25hdGl2ZS1wbGF5ZXIuanNcIjogMzMsIFwiLi9wbGF5ZXIvcGxheWVyLWVycm9ycy5qc1wiOiAzNCwgXCIuL3BsYXllci9wbGF5ZXItZXZlbnRzLmpzXCI6IDM1LCBcIi4vdXRpbHMvZXhjZXB0aW9uLmpzXCI6IDQwLCBcIi4vdXRpbHMvbG9nZ2luZy1jb250cm9sLmpzXCI6IDQyLCBcIi4vdXRpbHMvcG9seWZpbGwuanNcIjogNDMgfV0sIDIxOiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgdC5leHBvcnRzID0gZShcIi4vZmx2LmpzXCIpLmRlZmF1bHQ7XG4gICAgfSwgeyBcIi4vZmx2LmpzXCI6IDIwIH1dLCAyMjogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07XG4gICAgICB9ZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1mdW5jdGlvbiBzKGUsIHQpIHtcbiAgICAgICAgaWYgKCFlKSB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuICF0IHx8IFwib2JqZWN0XCIgIT0gKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodCkpICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdCA/IGUgOiB0O1xuICAgICAgfWZ1bmN0aW9uIGEoZSwgdCkge1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ICYmIG51bGwgIT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodCkpKTtlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUodCAmJiB0LnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogZSwgZW51bWVyYWJsZTogITEsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9IH0pLCB0ICYmIChPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZSwgdCkgOiBlLl9fcHJvdG9fXyA9IHQpO1xuICAgICAgfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIG8gPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IF90eXBlb2YoU3ltYm9sLml0ZXJhdG9yKSA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGUpO1xuICAgICAgfSA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZSk7XG4gICAgICB9LFxuICAgICAgICAgIHUgPSBmdW5jdGlvbiBlKHQsIG4sIGkpIHtcbiAgICAgICAgbnVsbCA9PT0gdCAmJiAodCA9IEZ1bmN0aW9uLnByb3RvdHlwZSk7dmFyIHIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIG4pO2lmICh2b2lkIDAgPT09IHIpIHtcbiAgICAgICAgICB2YXIgcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtyZXR1cm4gbnVsbCA9PT0gcyA/IHZvaWQgMCA6IGUocywgbiwgaSk7XG4gICAgICAgIH1pZiAoXCJ2YWx1ZVwiIGluIHIpIHJldHVybiByLnZhbHVlO3ZhciBhID0gci5nZXQ7aWYgKHZvaWQgMCAhPT0gYSkgcmV0dXJuIGEuY2FsbChpKTtcbiAgICAgIH0sXG4gICAgICAgICAgbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRbbl07aS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1yZXR1cm4gZnVuY3Rpb24gKHQsIG4sIGkpIHtcbiAgICAgICAgICByZXR1cm4gbiAmJiBlKHQucHJvdG90eXBlLCBuKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICB9O1xuICAgICAgfSgpLFxuICAgICAgICAgIGQgPSBlKFwiLi4vdXRpbHMvbG9nZ2VyLmpzXCIpLFxuICAgICAgICAgIGggPSAoaShkKSwgZShcIi4uL3V0aWxzL2Jyb3dzZXIuanNcIikpLFxuICAgICAgICAgIGYgPSBpKGgpLFxuICAgICAgICAgIGMgPSBlKFwiLi9sb2FkZXIuanNcIiksXG4gICAgICAgICAgXyA9IGUoXCIuLi91dGlscy9leGNlcHRpb24uanNcIiksXG4gICAgICAgICAgbSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHQoZSwgbikge1xuICAgICAgICAgIHIodGhpcywgdCk7dmFyIGkgPSBzKHRoaXMsICh0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcywgXCJmZXRjaC1zdHJlYW0tbG9hZGVyXCIpKTtyZXR1cm4gaS5UQUcgPSBcIkZldGNoU3RyZWFtTG9hZGVyXCIsIGkuX3NlZWtIYW5kbGVyID0gZSwgaS5fY29uZmlnID0gbiwgaS5fbmVlZFN0YXNoID0gITAsIGkuX3JlcXVlc3RBYm9ydCA9ICExLCBpLl9jb250ZW50TGVuZ3RoID0gbnVsbCwgaS5fcmVjZWl2ZWRMZW5ndGggPSAwLCBpO1xuICAgICAgICB9cmV0dXJuIGEodCwgZSksIGwodCwgbnVsbCwgW3sga2V5OiBcImlzU3VwcG9ydGVkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBlID0gZi5kZWZhdWx0Lm1zZWRnZSAmJiBmLmRlZmF1bHQudmVyc2lvbi5taW5vciA+PSAxNTA0OCxcbiAgICAgICAgICAgICAgICAgIHQgPSAhZi5kZWZhdWx0Lm1zZWRnZSB8fCBlO3JldHVybiBzZWxmLmZldGNoICYmIHNlbGYuUmVhZGFibGVTdHJlYW0gJiYgdDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfV0pLCBsKHQsIFt7IGtleTogXCJkZXN0cm95XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNXb3JraW5nKCkgJiYgdGhpcy5hYm9ydCgpLCB1KHQucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLCBcImRlc3Ryb3lcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIm9wZW5cIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpczt0aGlzLl9kYXRhU291cmNlID0gZSwgdGhpcy5fcmFuZ2UgPSB0O3ZhciBpID0gZS51cmw7dGhpcy5fY29uZmlnLnJldXNlUmVkaXJlY3RlZFVSTCAmJiB2b2lkIDAgIT0gZS5yZWRpcmVjdGVkVVJMICYmIChpID0gZS5yZWRpcmVjdGVkVVJMKTt2YXIgciA9IHRoaXMuX3NlZWtIYW5kbGVyLmdldENvbmZpZyhpLCB0KSxcbiAgICAgICAgICAgICAgICBzID0gbmV3IHNlbGYuSGVhZGVycygpO2lmIChcIm9iamVjdFwiID09PSBvKHIuaGVhZGVycykpIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSByLmhlYWRlcnM7Zm9yICh2YXIgdSBpbiBhKSB7XG4gICAgICAgICAgICAgICAgYS5oYXNPd25Qcm9wZXJ0eSh1KSAmJiBzLmFwcGVuZCh1LCBhW3VdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfXZhciBsID0geyBtZXRob2Q6IFwiR0VUXCIsIGhlYWRlcnM6IHMsIG1vZGU6IFwiY29yc1wiLCBjYWNoZTogXCJkZWZhdWx0XCIsIHJlZmVycmVyUG9saWN5OiBcIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCIgfTtpZiAoXCJvYmplY3RcIiA9PT0gbyh0aGlzLl9jb25maWcuaGVhZGVycykpIGZvciAodmFyIGQgaW4gdGhpcy5fY29uZmlnLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgcy5hcHBlbmQoZCwgdGhpcy5fY29uZmlnLmhlYWRlcnNbZF0pO1xuICAgICAgICAgICAgfSExID09PSBlLmNvcnMgJiYgKGwubW9kZSA9IFwic2FtZS1vcmlnaW5cIiksIGUud2l0aENyZWRlbnRpYWxzICYmIChsLmNyZWRlbnRpYWxzID0gXCJpbmNsdWRlXCIpLCBlLnJlZmVycmVyUG9saWN5ICYmIChsLnJlZmVycmVyUG9saWN5ID0gZS5yZWZlcnJlclBvbGljeSksIHRoaXMuX3N0YXR1cyA9IGMuTG9hZGVyU3RhdHVzLmtDb25uZWN0aW5nLCBzZWxmLmZldGNoKHIudXJsLCBsKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGlmIChuLl9yZXF1ZXN0QWJvcnQpIHJldHVybiBuLl9yZXF1ZXN0QWJvcnQgPSAhMSwgdm9pZCAobi5fc3RhdHVzID0gYy5Mb2FkZXJTdGF0dXMua0lkbGUpO2lmIChlLm9rICYmIGUuc3RhdHVzID49IDIwMCAmJiBlLnN0YXR1cyA8PSAyOTkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS51cmwgIT09IHIudXJsICYmIG4uX29uVVJMUmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB0ID0gbi5fc2Vla0hhbmRsZXIucmVtb3ZlVVJMUGFyYW1ldGVycyhlLnVybCk7bi5fb25VUkxSZWRpcmVjdCh0KTtcbiAgICAgICAgICAgICAgICB9dmFyIGkgPSBlLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1MZW5ndGhcIik7cmV0dXJuIG51bGwgIT0gaSAmJiAobi5fY29udGVudExlbmd0aCA9IHBhcnNlSW50KGkpLCAwICE9PSBuLl9jb250ZW50TGVuZ3RoICYmIG4uX29uQ29udGVudExlbmd0aEtub3duICYmIG4uX29uQ29udGVudExlbmd0aEtub3duKG4uX2NvbnRlbnRMZW5ndGgpKSwgbi5fcHVtcC5jYWxsKG4sIGUuYm9keS5nZXRSZWFkZXIoKSk7XG4gICAgICAgICAgICAgIH1pZiAobi5fc3RhdHVzID0gYy5Mb2FkZXJTdGF0dXMua0Vycm9yLCAhbi5fb25FcnJvcikgdGhyb3cgbmV3IF8uUnVudGltZUV4Y2VwdGlvbihcIkZldGNoU3RyZWFtTG9hZGVyOiBIdHRwIGNvZGUgaW52YWxpZCwgXCIgKyBlLnN0YXR1cyArIFwiIFwiICsgZS5zdGF0dXNUZXh0KTtuLl9vbkVycm9yKGMuTG9hZGVyRXJyb3JzLkhUVFBfU1RBVFVTX0NPREVfSU5WQUxJRCwgeyBjb2RlOiBlLnN0YXR1cywgbXNnOiBlLnN0YXR1c1RleHQgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBpZiAobi5fc3RhdHVzID0gYy5Mb2FkZXJTdGF0dXMua0Vycm9yLCAhbi5fb25FcnJvcikgdGhyb3cgZTtuLl9vbkVycm9yKGMuTG9hZGVyRXJyb3JzLkVYQ0VQVElPTiwgeyBjb2RlOiAtMSwgbXNnOiBlLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImFib3J0XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RBYm9ydCA9ICEwO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX3B1bXBcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztyZXR1cm4gZS5yZWFkKCkudGhlbihmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICBpZiAobi5kb25lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHQuX2NvbnRlbnRMZW5ndGggJiYgdC5fcmVjZWl2ZWRMZW5ndGggPCB0Ll9jb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICB0Ll9zdGF0dXMgPSBjLkxvYWRlclN0YXR1cy5rRXJyb3I7dmFyIGkgPSBjLkxvYWRlckVycm9ycy5FQVJMWV9FT0YsXG4gICAgICAgICAgICAgICAgICAgICAgciA9IHsgY29kZTogLTEsIG1zZzogXCJGZXRjaCBzdHJlYW0gbWVldCBFYXJseS1FT0ZcIiB9O2lmICghdC5fb25FcnJvcikgdGhyb3cgbmV3IF8uUnVudGltZUV4Y2VwdGlvbihyLm1zZyk7dC5fb25FcnJvcihpLCByKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgdC5fc3RhdHVzID0gYy5Mb2FkZXJTdGF0dXMua0NvbXBsZXRlLCB0Ll9vbkNvbXBsZXRlICYmIHQuX29uQ29tcGxldGUodC5fcmFuZ2UuZnJvbSwgdC5fcmFuZ2UuZnJvbSArIHQuX3JlY2VpdmVkTGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCEwID09PSB0Ll9yZXF1ZXN0QWJvcnQpIHJldHVybiB0Ll9yZXF1ZXN0QWJvcnQgPSAhMSwgdC5fc3RhdHVzID0gYy5Mb2FkZXJTdGF0dXMua0NvbXBsZXRlLCBlLmNhbmNlbCgpO3QuX3N0YXR1cyA9IGMuTG9hZGVyU3RhdHVzLmtCdWZmZXJpbmc7dmFyIHMgPSBuLnZhbHVlLmJ1ZmZlcixcbiAgICAgICAgICAgICAgICAgICAgYSA9IHQuX3JhbmdlLmZyb20gKyB0Ll9yZWNlaXZlZExlbmd0aDt0Ll9yZWNlaXZlZExlbmd0aCArPSBzLmJ5dGVMZW5ndGgsIHQuX29uRGF0YUFycml2YWwgJiYgdC5fb25EYXRhQXJyaXZhbChzLCBhLCB0Ll9yZWNlaXZlZExlbmd0aCksIHQuX3B1bXAoZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGlmICgxMSAhPT0gZS5jb2RlIHx8ICFmLmRlZmF1bHQubXNlZGdlKSB7XG4gICAgICAgICAgICAgICAgdC5fc3RhdHVzID0gYy5Mb2FkZXJTdGF0dXMua0Vycm9yO3ZhciBuID0gMCxcbiAgICAgICAgICAgICAgICAgICAgaSA9IG51bGw7aWYgKDE5ICE9PSBlLmNvZGUgJiYgXCJuZXR3b3JrIGVycm9yXCIgIT09IGUubWVzc2FnZSB8fCAhKG51bGwgPT09IHQuX2NvbnRlbnRMZW5ndGggfHwgbnVsbCAhPT0gdC5fY29udGVudExlbmd0aCAmJiB0Ll9yZWNlaXZlZExlbmd0aCA8IHQuX2NvbnRlbnRMZW5ndGgpID8gKG4gPSBjLkxvYWRlckVycm9ycy5FWENFUFRJT04sIGkgPSB7IGNvZGU6IGUuY29kZSwgbXNnOiBlLm1lc3NhZ2UgfSkgOiAobiA9IGMuTG9hZGVyRXJyb3JzLkVBUkxZX0VPRiwgaSA9IHsgY29kZTogZS5jb2RlLCBtc2c6IFwiRmV0Y2ggc3RyZWFtIG1lZXQgRWFybHktRU9GXCIgfSksICF0Ll9vbkVycm9yKSB0aHJvdyBuZXcgXy5SdW50aW1lRXhjZXB0aW9uKGkubXNnKTt0Ll9vbkVycm9yKG4sIGkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IH1dKSwgdDtcbiAgICAgIH0oYy5CYXNlTG9hZGVyKTtuLmRlZmF1bHQgPSBtO1xuICAgIH0sIHsgXCIuLi91dGlscy9icm93c2VyLmpzXCI6IDM5LCBcIi4uL3V0aWxzL2V4Y2VwdGlvbi5qc1wiOiA0MCwgXCIuLi91dGlscy9sb2dnZXIuanNcIjogNDEsIFwiLi9sb2FkZXIuanNcIjogMjQgfV0sIDIzOiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlKSB7XG4gICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH1mdW5jdGlvbiByKGUsIHQpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0W25dO2kuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9cmV0dXJuIGZ1bmN0aW9uICh0LCBuLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIG4gJiYgZSh0LnByb3RvdHlwZSwgbiksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgfTtcbiAgICAgIH0oKSxcbiAgICAgICAgICBhID0gZShcIi4uL3V0aWxzL2xvZ2dlci5qc1wiKSxcbiAgICAgICAgICBvID0gaShhKSxcbiAgICAgICAgICB1ID0gZShcIi4vc3BlZWQtc2FtcGxlci5qc1wiKSxcbiAgICAgICAgICBsID0gaSh1KSxcbiAgICAgICAgICBkID0gZShcIi4vbG9hZGVyLmpzXCIpLFxuICAgICAgICAgIGggPSBlKFwiLi9mZXRjaC1zdHJlYW0tbG9hZGVyLmpzXCIpLFxuICAgICAgICAgIGYgPSBpKGgpLFxuICAgICAgICAgIGMgPSBlKFwiLi94aHItbW96LWNodW5rZWQtbG9hZGVyLmpzXCIpLFxuICAgICAgICAgIF8gPSBpKGMpLFxuICAgICAgICAgIG0gPSBlKFwiLi94aHItbXNzdHJlYW0tbG9hZGVyLmpzXCIpLFxuICAgICAgICAgIHAgPSAoaShtKSwgZShcIi4veGhyLXJhbmdlLWxvYWRlci5qc1wiKSksXG4gICAgICAgICAgdiA9IGkocCksXG4gICAgICAgICAgZyA9IGUoXCIuL3dlYnNvY2tldC1sb2FkZXIuanNcIiksXG4gICAgICAgICAgeSA9IGkoZyksXG4gICAgICAgICAgRSA9IGUoXCIuL3JhbmdlLXNlZWstaGFuZGxlci5qc1wiKSxcbiAgICAgICAgICBiID0gaShFKSxcbiAgICAgICAgICBTID0gZShcIi4vcGFyYW0tc2Vlay1oYW5kbGVyLmpzXCIpLFxuICAgICAgICAgIGsgPSBpKFMpLFxuICAgICAgICAgIEwgPSBlKFwiLi4vdXRpbHMvZXhjZXB0aW9uLmpzXCIpLFxuICAgICAgICAgIFIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUodCwgbiwgaSkge1xuICAgICAgICAgIHIodGhpcywgZSksIHRoaXMuVEFHID0gXCJJT0NvbnRyb2xsZXJcIiwgdGhpcy5fY29uZmlnID0gbiwgdGhpcy5fZXh0cmFEYXRhID0gaSwgdGhpcy5fc3Rhc2hJbml0aWFsU2l6ZSA9IDM5MzIxNiwgdm9pZCAwICE9IG4uc3Rhc2hJbml0aWFsU2l6ZSAmJiBuLnN0YXNoSW5pdGlhbFNpemUgPiAwICYmICh0aGlzLl9zdGFzaEluaXRpYWxTaXplID0gbi5zdGFzaEluaXRpYWxTaXplKSwgdGhpcy5fc3Rhc2hVc2VkID0gMCwgdGhpcy5fc3Rhc2hTaXplID0gdGhpcy5fc3Rhc2hJbml0aWFsU2l6ZSwgdGhpcy5fYnVmZmVyU2l6ZSA9IDMxNDU3MjgsIHRoaXMuX3N0YXNoQnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuX2J1ZmZlclNpemUpLCB0aGlzLl9zdGFzaEJ5dGVTdGFydCA9IDAsIHRoaXMuX2VuYWJsZVN0YXNoID0gITAsICExID09PSBuLmVuYWJsZVN0YXNoQnVmZmVyICYmICh0aGlzLl9lbmFibGVTdGFzaCA9ICExKSwgdGhpcy5fbG9hZGVyID0gbnVsbCwgdGhpcy5fbG9hZGVyQ2xhc3MgPSBudWxsLCB0aGlzLl9zZWVrSGFuZGxlciA9IG51bGwsIHRoaXMuX2RhdGFTb3VyY2UgPSB0LCB0aGlzLl9pc1dlYlNvY2tldFVSTCA9IC93c3M/OlxcL1xcLyguKz8pLy50ZXN0KHQudXJsKSwgdGhpcy5fcmVmVG90YWxMZW5ndGggPSB0LmZpbGVzaXplID8gdC5maWxlc2l6ZSA6IG51bGwsIHRoaXMuX3RvdGFsTGVuZ3RoID0gdGhpcy5fcmVmVG90YWxMZW5ndGgsIHRoaXMuX2Z1bGxSZXF1ZXN0RmxhZyA9ICExLCB0aGlzLl9jdXJyZW50UmFuZ2UgPSBudWxsLCB0aGlzLl9yZWRpcmVjdGVkVVJMID0gbnVsbCwgdGhpcy5fc3BlZWROb3JtYWxpemVkID0gMCwgdGhpcy5fc3BlZWRTYW1wbGVyID0gbmV3IGwuZGVmYXVsdCgpLCB0aGlzLl9zcGVlZE5vcm1hbGl6ZUxpc3QgPSBbNjQsIDEyOCwgMjU2LCAzODQsIDUxMiwgNzY4LCAxMDI0LCAxNTM2LCAyMDQ4LCAzMDcyLCA0MDk2XSwgdGhpcy5faXNFYXJseUVvZlJlY29ubmVjdGluZyA9ICExLCB0aGlzLl9wYXVzZWQgPSAhMSwgdGhpcy5fcmVzdW1lRnJvbSA9IDAsIHRoaXMuX29uRGF0YUFycml2YWwgPSBudWxsLCB0aGlzLl9vblNlZWtlZCA9IG51bGwsIHRoaXMuX29uRXJyb3IgPSBudWxsLCB0aGlzLl9vbkNvbXBsZXRlID0gbnVsbCwgdGhpcy5fb25SZWRpcmVjdCA9IG51bGwsIHRoaXMuX29uUmVjb3ZlcmVkRWFybHlFb2YgPSBudWxsLCB0aGlzLl9zZWxlY3RTZWVrSGFuZGxlcigpLCB0aGlzLl9zZWxlY3RMb2FkZXIoKSwgdGhpcy5fY3JlYXRlTG9hZGVyKCk7XG4gICAgICAgIH1yZXR1cm4gcyhlLCBbeyBrZXk6IFwiZGVzdHJveVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuaXNXb3JraW5nKCkgJiYgdGhpcy5fbG9hZGVyLmFib3J0KCksIHRoaXMuX2xvYWRlci5kZXN0cm95KCksIHRoaXMuX2xvYWRlciA9IG51bGwsIHRoaXMuX2xvYWRlckNsYXNzID0gbnVsbCwgdGhpcy5fZGF0YVNvdXJjZSA9IG51bGwsIHRoaXMuX3N0YXNoQnVmZmVyID0gbnVsbCwgdGhpcy5fc3Rhc2hVc2VkID0gdGhpcy5fc3Rhc2hTaXplID0gdGhpcy5fYnVmZmVyU2l6ZSA9IHRoaXMuX3N0YXNoQnl0ZVN0YXJ0ID0gMCwgdGhpcy5fY3VycmVudFJhbmdlID0gbnVsbCwgdGhpcy5fc3BlZWRTYW1wbGVyID0gbnVsbCwgdGhpcy5faXNFYXJseUVvZlJlY29ubmVjdGluZyA9ICExLCB0aGlzLl9vbkRhdGFBcnJpdmFsID0gbnVsbCwgdGhpcy5fb25TZWVrZWQgPSBudWxsLCB0aGlzLl9vbkVycm9yID0gbnVsbCwgdGhpcy5fb25Db21wbGV0ZSA9IG51bGwsIHRoaXMuX29uUmVkaXJlY3QgPSBudWxsLCB0aGlzLl9vblJlY292ZXJlZEVhcmx5RW9mID0gbnVsbCwgdGhpcy5fZXh0cmFEYXRhID0gbnVsbDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImlzV29ya2luZ1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyICYmIHRoaXMuX2xvYWRlci5pc1dvcmtpbmcoKSAmJiAhdGhpcy5fcGF1c2VkO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiaXNQYXVzZWRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9zZWxlY3RTZWVrSGFuZGxlclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuX2NvbmZpZztpZiAoXCJyYW5nZVwiID09PSBlLnNlZWtUeXBlKSB0aGlzLl9zZWVrSGFuZGxlciA9IG5ldyBiLmRlZmF1bHQodGhpcy5fY29uZmlnLnJhbmdlTG9hZFplcm9TdGFydCk7ZWxzZSBpZiAoXCJwYXJhbVwiID09PSBlLnNlZWtUeXBlKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gZS5zZWVrUGFyYW1TdGFydCB8fCBcImJzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgbiA9IGUuc2Vla1BhcmFtRW5kIHx8IFwiYmVuZFwiO3RoaXMuX3NlZWtIYW5kbGVyID0gbmV3IGsuZGVmYXVsdCh0LCBuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChcImN1c3RvbVwiICE9PSBlLnNlZWtUeXBlKSB0aHJvdyBuZXcgTC5JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24oXCJJbnZhbGlkIHNlZWtUeXBlIGluIGNvbmZpZzogXCIgKyBlLnNlZWtUeXBlKTtpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlLmN1c3RvbVNlZWtIYW5kbGVyKSB0aHJvdyBuZXcgTC5JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24oXCJDdXN0b20gc2Vla1R5cGUgc3BlY2lmaWVkIGluIGNvbmZpZyBidXQgaW52YWxpZCBjdXN0b21TZWVrSGFuZGxlciFcIik7dGhpcy5fc2Vla0hhbmRsZXIgPSBuZXcgZS5jdXN0b21TZWVrSGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX3NlbGVjdExvYWRlclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSB0aGlzLl9jb25maWcuY3VzdG9tTG9hZGVyKSB0aGlzLl9sb2FkZXJDbGFzcyA9IHRoaXMuX2NvbmZpZy5jdXN0b21Mb2FkZXI7ZWxzZSBpZiAodGhpcy5faXNXZWJTb2NrZXRVUkwpIHRoaXMuX2xvYWRlckNsYXNzID0geS5kZWZhdWx0O2Vsc2UgaWYgKGYuZGVmYXVsdC5pc1N1cHBvcnRlZCgpKSB0aGlzLl9sb2FkZXJDbGFzcyA9IGYuZGVmYXVsdDtlbHNlIGlmIChfLmRlZmF1bHQuaXNTdXBwb3J0ZWQoKSkgdGhpcy5fbG9hZGVyQ2xhc3MgPSBfLmRlZmF1bHQ7ZWxzZSB7XG4gICAgICAgICAgICAgIGlmICghdi5kZWZhdWx0LmlzU3VwcG9ydGVkKCkpIHRocm93IG5ldyBMLlJ1bnRpbWVFeGNlcHRpb24oXCJZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHhociB3aXRoIGFycmF5YnVmZmVyIHJlc3BvbnNlVHlwZSFcIik7dGhpcy5fbG9hZGVyQ2xhc3MgPSB2LmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfY3JlYXRlTG9hZGVyXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IG5ldyB0aGlzLl9sb2FkZXJDbGFzcyh0aGlzLl9zZWVrSGFuZGxlciwgdGhpcy5fY29uZmlnKSwgITEgPT09IHRoaXMuX2xvYWRlci5uZWVkU3Rhc2hCdWZmZXIgJiYgKHRoaXMuX2VuYWJsZVN0YXNoID0gITEpLCB0aGlzLl9sb2FkZXIub25Db250ZW50TGVuZ3RoS25vd24gPSB0aGlzLl9vbkNvbnRlbnRMZW5ndGhLbm93bi5iaW5kKHRoaXMpLCB0aGlzLl9sb2FkZXIub25VUkxSZWRpcmVjdCA9IHRoaXMuX29uVVJMUmVkaXJlY3QuYmluZCh0aGlzKSwgdGhpcy5fbG9hZGVyLm9uRGF0YUFycml2YWwgPSB0aGlzLl9vbkxvYWRlckNodW5rQXJyaXZhbC5iaW5kKHRoaXMpLCB0aGlzLl9sb2FkZXIub25Db21wbGV0ZSA9IHRoaXMuX29uTG9hZGVyQ29tcGxldGUuYmluZCh0aGlzKSwgdGhpcy5fbG9hZGVyLm9uRXJyb3IgPSB0aGlzLl9vbkxvYWRlckVycm9yLmJpbmQodGhpcyk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvcGVuXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UmFuZ2UgPSB7IGZyb206IDAsIHRvOiAtMSB9LCBlICYmICh0aGlzLl9jdXJyZW50UmFuZ2UuZnJvbSA9IGUpLCB0aGlzLl9zcGVlZFNhbXBsZXIucmVzZXQoKSwgZSB8fCAodGhpcy5fZnVsbFJlcXVlc3RGbGFnID0gITApLCB0aGlzLl9sb2FkZXIub3Blbih0aGlzLl9kYXRhU291cmNlLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jdXJyZW50UmFuZ2UpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImFib3J0XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5hYm9ydCgpLCB0aGlzLl9wYXVzZWQgJiYgKHRoaXMuX3BhdXNlZCA9ICExLCB0aGlzLl9yZXN1bWVGcm9tID0gMCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJwYXVzZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLmlzV29ya2luZygpICYmICh0aGlzLl9sb2FkZXIuYWJvcnQoKSwgMCAhPT0gdGhpcy5fc3Rhc2hVc2VkID8gKHRoaXMuX3Jlc3VtZUZyb20gPSB0aGlzLl9zdGFzaEJ5dGVTdGFydCwgdGhpcy5fY3VycmVudFJhbmdlLnRvID0gdGhpcy5fc3Rhc2hCeXRlU3RhcnQgLSAxKSA6IHRoaXMuX3Jlc3VtZUZyb20gPSB0aGlzLl9jdXJyZW50UmFuZ2UudG8gKyAxLCB0aGlzLl9zdGFzaFVzZWQgPSAwLCB0aGlzLl9zdGFzaEJ5dGVTdGFydCA9IDAsIHRoaXMuX3BhdXNlZCA9ICEwKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInJlc3VtZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGF1c2VkKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3BhdXNlZCA9ICExO3ZhciBlID0gdGhpcy5fcmVzdW1lRnJvbTt0aGlzLl9yZXN1bWVGcm9tID0gMCwgdGhpcy5faW50ZXJuYWxTZWVrKGUsICEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IH0sIHsga2V5OiBcInNlZWtcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhdXNlZCA9ICExLCB0aGlzLl9zdGFzaFVzZWQgPSAwLCB0aGlzLl9zdGFzaEJ5dGVTdGFydCA9IDAsIHRoaXMuX2ludGVybmFsU2VlayhlLCAhMCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfaW50ZXJuYWxTZWVrXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuaXNXb3JraW5nKCkgJiYgdGhpcy5fbG9hZGVyLmFib3J0KCksIHRoaXMuX2ZsdXNoU3Rhc2hCdWZmZXIodCksIHRoaXMuX2xvYWRlci5kZXN0cm95KCksIHRoaXMuX2xvYWRlciA9IG51bGw7dmFyIG4gPSB7IGZyb206IGUsIHRvOiAtMSB9O3RoaXMuX2N1cnJlbnRSYW5nZSA9IHsgZnJvbTogbi5mcm9tLCB0bzogLTEgfSwgdGhpcy5fc3BlZWRTYW1wbGVyLnJlc2V0KCksIHRoaXMuX3N0YXNoU2l6ZSA9IHRoaXMuX3N0YXNoSW5pdGlhbFNpemUsIHRoaXMuX2NyZWF0ZUxvYWRlcigpLCB0aGlzLl9sb2FkZXIub3Blbih0aGlzLl9kYXRhU291cmNlLCBuKSwgdGhpcy5fb25TZWVrZWQgJiYgdGhpcy5fb25TZWVrZWQoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInVwZGF0ZVVybFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgaWYgKCFlIHx8IFwic3RyaW5nXCIgIT0gdHlwZW9mIGUgfHwgMCA9PT0gZS5sZW5ndGgpIHRocm93IG5ldyBMLkludmFsaWRBcmd1bWVudEV4Y2VwdGlvbihcIlVybCBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZyFcIik7dGhpcy5fZGF0YVNvdXJjZS51cmwgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX2V4cGFuZEJ1ZmZlclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgdCA9IHRoaXMuX3N0YXNoU2l6ZTsgdCArIDEwNDg1NzYgPCBlOykge1xuICAgICAgICAgICAgICB0ICo9IDI7XG4gICAgICAgICAgICB9aWYgKCh0ICs9IDEwNDg1NzYpICE9PSB0aGlzLl9idWZmZXJTaXplKSB7XG4gICAgICAgICAgICAgIHZhciBuID0gbmV3IEFycmF5QnVmZmVyKHQpO2lmICh0aGlzLl9zdGFzaFVzZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBuZXcgVWludDhBcnJheSh0aGlzLl9zdGFzaEJ1ZmZlciwgMCwgdGhpcy5fc3Rhc2hVc2VkKTtuZXcgVWludDhBcnJheShuLCAwLCB0KS5zZXQoaSwgMCk7XG4gICAgICAgICAgICAgIH10aGlzLl9zdGFzaEJ1ZmZlciA9IG4sIHRoaXMuX2J1ZmZlclNpemUgPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX25vcm1hbGl6ZVNwZWVkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMuX3NwZWVkTm9ybWFsaXplTGlzdCxcbiAgICAgICAgICAgICAgICBuID0gdC5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgIHIgPSAwLFxuICAgICAgICAgICAgICAgIHMgPSBuO2lmIChlIDwgdFswXSkgcmV0dXJuIHRbMF07Zm9yICg7IHIgPD0gczspIHtcbiAgICAgICAgICAgICAgaWYgKChpID0gciArIE1hdGguZmxvb3IoKHMgLSByKSAvIDIpKSA9PT0gbiB8fCBlID49IHRbaV0gJiYgZSA8IHRbaSArIDFdKSByZXR1cm4gdFtpXTt0W2ldIDwgZSA/IHIgPSBpICsgMSA6IHMgPSBpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9hZGp1c3RTdGFzaFNpemVcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gMDsodCA9IHRoaXMuX2NvbmZpZy5pc0xpdmUgPyBlIDogZSA8IDUxMiA/IGUgOiBlID49IDUxMiAmJiBlIDw9IDEwMjQgPyBNYXRoLmZsb29yKDEuNSAqIGUpIDogMiAqIGUpID4gODE5MiAmJiAodCA9IDgxOTIpO3ZhciBuID0gMTAyNCAqIHQgKyAxMDQ4NTc2O3RoaXMuX2J1ZmZlclNpemUgPCBuICYmIHRoaXMuX2V4cGFuZEJ1ZmZlcihuKSwgdGhpcy5fc3Rhc2hTaXplID0gMTAyNCAqIHQ7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfZGlzcGF0Y2hDaHVua3NcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UmFuZ2UudG8gPSB0ICsgZS5ieXRlTGVuZ3RoIC0gMSwgdGhpcy5fb25EYXRhQXJyaXZhbChlLCB0KTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vblVSTFJlZGlyZWN0XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWRpcmVjdGVkVVJMID0gZSwgdGhpcy5fb25SZWRpcmVjdCAmJiB0aGlzLl9vblJlZGlyZWN0KGUpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uQ29udGVudExlbmd0aEtub3duXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICBlICYmIHRoaXMuX2Z1bGxSZXF1ZXN0RmxhZyAmJiAodGhpcy5fdG90YWxMZW5ndGggPSBlLCB0aGlzLl9mdWxsUmVxdWVzdEZsYWcgPSAhMSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25Mb2FkZXJDaHVua0Fycml2YWxcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQsIG4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fb25EYXRhQXJyaXZhbCkgdGhyb3cgbmV3IEwuSWxsZWdhbFN0YXRlRXhjZXB0aW9uKFwiSU9Db250cm9sbGVyOiBObyBleGlzdGluZyBjb25zdW1lciAob25EYXRhQXJyaXZhbCkgY2FsbGJhY2shXCIpO2lmICghdGhpcy5fcGF1c2VkKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2lzRWFybHlFb2ZSZWNvbm5lY3RpbmcgJiYgKHRoaXMuX2lzRWFybHlFb2ZSZWNvbm5lY3RpbmcgPSAhMSwgdGhpcy5fb25SZWNvdmVyZWRFYXJseUVvZiAmJiB0aGlzLl9vblJlY292ZXJlZEVhcmx5RW9mKCkpLCB0aGlzLl9zcGVlZFNhbXBsZXIuYWRkQnl0ZXMoZS5ieXRlTGVuZ3RoKTt2YXIgaSA9IHRoaXMuX3NwZWVkU2FtcGxlci5sYXN0U2Vjb25kS0JwcztpZiAoMCAhPT0gaSkge1xuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5fbm9ybWFsaXplU3BlZWQoaSk7dGhpcy5fc3BlZWROb3JtYWxpemVkICE9PSByICYmICh0aGlzLl9zcGVlZE5vcm1hbGl6ZWQgPSByLCB0aGlzLl9hZGp1c3RTdGFzaFNpemUocikpO1xuICAgICAgICAgICAgICB9aWYgKHRoaXMuX2VuYWJsZVN0YXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHRoaXMuX3N0YXNoVXNlZCAmJiAwID09PSB0aGlzLl9zdGFzaEJ5dGVTdGFydCAmJiAodGhpcy5fc3Rhc2hCeXRlU3RhcnQgPSB0KSwgdGhpcy5fc3Rhc2hVc2VkICsgZS5ieXRlTGVuZ3RoIDw9IHRoaXMuX3N0YXNoU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHMgPSBuZXcgVWludDhBcnJheSh0aGlzLl9zdGFzaEJ1ZmZlciwgMCwgdGhpcy5fc3Rhc2hTaXplKTtzLnNldChuZXcgVWludDhBcnJheShlKSwgdGhpcy5fc3Rhc2hVc2VkKSwgdGhpcy5fc3Rhc2hVc2VkICs9IGUuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl9zdGFzaEJ1ZmZlciwgMCwgdGhpcy5fYnVmZmVyU2l6ZSk7aWYgKHRoaXMuX3N0YXNoVXNlZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLl9zdGFzaEJ1ZmZlci5zbGljZSgwLCB0aGlzLl9zdGFzaFVzZWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdSA9IHRoaXMuX2Rpc3BhdGNoQ2h1bmtzKG8sIHRoaXMuX3N0YXNoQnl0ZVN0YXJ0KTtpZiAodSA8IG8uYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh1ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBuZXcgVWludDhBcnJheShvLCB1KTthLnNldChsLCAwKSwgdGhpcy5fc3Rhc2hVc2VkID0gbC5ieXRlTGVuZ3RoLCB0aGlzLl9zdGFzaEJ5dGVTdGFydCArPSB1O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuX3N0YXNoVXNlZCA9IDAsIHRoaXMuX3N0YXNoQnl0ZVN0YXJ0ICs9IHU7dGhpcy5fc3Rhc2hVc2VkICsgZS5ieXRlTGVuZ3RoID4gdGhpcy5fYnVmZmVyU2l6ZSAmJiAodGhpcy5fZXhwYW5kQnVmZmVyKHRoaXMuX3N0YXNoVXNlZCArIGUuYnl0ZUxlbmd0aCksIGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl9zdGFzaEJ1ZmZlciwgMCwgdGhpcy5fYnVmZmVyU2l6ZSkpLCBhLnNldChuZXcgVWludDhBcnJheShlKSwgdGhpcy5fc3Rhc2hVc2VkKSwgdGhpcy5fc3Rhc2hVc2VkICs9IGUuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5fZGlzcGF0Y2hDaHVua3MoZSwgdCk7aWYgKGQgPCBlLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGUuYnl0ZUxlbmd0aCAtIGQ7aCA+IHRoaXMuX2J1ZmZlclNpemUgJiYgKHRoaXMuX2V4cGFuZEJ1ZmZlcihoKSwgYSA9IG5ldyBVaW50OEFycmF5KHRoaXMuX3N0YXNoQnVmZmVyLCAwLCB0aGlzLl9idWZmZXJTaXplKSksIGEuc2V0KG5ldyBVaW50OEFycmF5KGUsIGQpLCAwKSwgdGhpcy5fc3Rhc2hVc2VkICs9IGgsIHRoaXMuX3N0YXNoQnl0ZVN0YXJ0ID0gdCArIGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoMCA9PT0gdGhpcy5fc3Rhc2hVc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSB0aGlzLl9kaXNwYXRjaENodW5rcyhlLCB0KTtpZiAoZiA8IGUuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGMgPSBlLmJ5dGVMZW5ndGggLSBmO2MgPiB0aGlzLl9idWZmZXJTaXplICYmIHRoaXMuX2V4cGFuZEJ1ZmZlcihjKTt2YXIgXyA9IG5ldyBVaW50OEFycmF5KHRoaXMuX3N0YXNoQnVmZmVyLCAwLCB0aGlzLl9idWZmZXJTaXplKTtfLnNldChuZXcgVWludDhBcnJheShlLCBmKSwgMCksIHRoaXMuX3N0YXNoVXNlZCArPSBjLCB0aGlzLl9zdGFzaEJ5dGVTdGFydCA9IHQgKyBmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFzaFVzZWQgKyBlLmJ5dGVMZW5ndGggPiB0aGlzLl9idWZmZXJTaXplICYmIHRoaXMuX2V4cGFuZEJ1ZmZlcih0aGlzLl9zdGFzaFVzZWQgKyBlLmJ5dGVMZW5ndGgpO3ZhciBtID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fc3Rhc2hCdWZmZXIsIDAsIHRoaXMuX2J1ZmZlclNpemUpO20uc2V0KG5ldyBVaW50OEFycmF5KGUpLCB0aGlzLl9zdGFzaFVzZWQpLCB0aGlzLl9zdGFzaFVzZWQgKz0gZS5ieXRlTGVuZ3RoO3ZhciBwID0gdGhpcy5fZGlzcGF0Y2hDaHVua3ModGhpcy5fc3Rhc2hCdWZmZXIuc2xpY2UoMCwgdGhpcy5fc3Rhc2hVc2VkKSwgdGhpcy5fc3Rhc2hCeXRlU3RhcnQpO2lmIChwIDwgdGhpcy5fc3Rhc2hVc2VkICYmIHAgPiAwKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdiA9IG5ldyBVaW50OEFycmF5KHRoaXMuX3N0YXNoQnVmZmVyLCBwKTttLnNldCh2LCAwKTtcbiAgICAgICAgICAgICAgICB9dGhpcy5fc3Rhc2hVc2VkIC09IHAsIHRoaXMuX3N0YXNoQnl0ZVN0YXJ0ICs9IHA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9mbHVzaFN0YXNoQnVmZmVyXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3Rhc2hVc2VkID4gMCkge1xuICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuX3N0YXNoQnVmZmVyLnNsaWNlKDAsIHRoaXMuX3N0YXNoVXNlZCksXG4gICAgICAgICAgICAgICAgICBuID0gdGhpcy5fZGlzcGF0Y2hDaHVua3ModCwgdGhpcy5fc3Rhc2hCeXRlU3RhcnQpLFxuICAgICAgICAgICAgICAgICAgaSA9IHQuYnl0ZUxlbmd0aCAtIG47aWYgKG4gPCB0LmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IG5ldyBVaW50OEFycmF5KHRoaXMuX3N0YXNoQnVmZmVyLCAwLCB0aGlzLl9idWZmZXJTaXplKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBuZXcgVWludDhBcnJheSh0LCBuKTtyLnNldChzLCAwKSwgdGhpcy5fc3Rhc2hVc2VkID0gcy5ieXRlTGVuZ3RoLCB0aGlzLl9zdGFzaEJ5dGVTdGFydCArPSBuO1xuICAgICAgICAgICAgICAgICAgfXJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1vLmRlZmF1bHQudyh0aGlzLlRBRywgaSArIFwiIGJ5dGVzIHVuY29uc3VtZWQgZGF0YSByZW1haW4gd2hlbiBmbHVzaCBidWZmZXIsIGRyb3BwZWRcIik7XG4gICAgICAgICAgICAgIH1yZXR1cm4gdGhpcy5fc3Rhc2hVc2VkID0gMCwgdGhpcy5fc3Rhc2hCeXRlU3RhcnQgPSAwLCBpO1xuICAgICAgICAgICAgfXJldHVybiAwO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uTG9hZGVyQ29tcGxldGVcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZsdXNoU3Rhc2hCdWZmZXIoITApLCB0aGlzLl9vbkNvbXBsZXRlICYmIHRoaXMuX29uQ29tcGxldGUodGhpcy5fZXh0cmFEYXRhKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbkxvYWRlckVycm9yXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG8uZGVmYXVsdC5lKHRoaXMuVEFHLCBcIkxvYWRlciBlcnJvciwgY29kZSA9IFwiICsgdC5jb2RlICsgXCIsIG1zZyA9IFwiICsgdC5tc2cpLCB0aGlzLl9mbHVzaFN0YXNoQnVmZmVyKCExKSwgdGhpcy5faXNFYXJseUVvZlJlY29ubmVjdGluZyAmJiAodGhpcy5faXNFYXJseUVvZlJlY29ubmVjdGluZyA9ICExLCBlID0gZC5Mb2FkZXJFcnJvcnMuVU5SRUNPVkVSQUJMRV9FQVJMWV9FT0YpLCBlKSB7Y2FzZSBkLkxvYWRlckVycm9ycy5FQVJMWV9FT0Y6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jb25maWcuaXNMaXZlICYmIHRoaXMuX3RvdGFsTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2N1cnJlbnRSYW5nZS50byArIDE7cmV0dXJuIHZvaWQgKG4gPCB0aGlzLl90b3RhbExlbmd0aCAmJiAoby5kZWZhdWx0LncodGhpcy5UQUcsIFwiQ29ubmVjdGlvbiBsb3N0LCB0cnlpbmcgcmVjb25uZWN0Li4uXCIpLCB0aGlzLl9pc0Vhcmx5RW9mUmVjb25uZWN0aW5nID0gITAsIHRoaXMuX2ludGVybmFsU2VlayhuLCAhMSkpKTtcbiAgICAgICAgICAgICAgICB9ZSA9IGQuTG9hZGVyRXJyb3JzLlVOUkVDT1ZFUkFCTEVfRUFSTFlfRU9GO2JyZWFrO2Nhc2UgZC5Mb2FkZXJFcnJvcnMuVU5SRUNPVkVSQUJMRV9FQVJMWV9FT0Y6Y2FzZSBkLkxvYWRlckVycm9ycy5DT05ORUNUSU5HX1RJTUVPVVQ6Y2FzZSBkLkxvYWRlckVycm9ycy5IVFRQX1NUQVRVU19DT0RFX0lOVkFMSUQ6Y2FzZSBkLkxvYWRlckVycm9ycy5FWENFUFRJT046fWlmICghdGhpcy5fb25FcnJvcikgdGhyb3cgbmV3IEwuUnVudGltZUV4Y2VwdGlvbihcIklPRXhjZXB0aW9uOiBcIiArIHQubXNnKTt0aGlzLl9vbkVycm9yKGUsIHQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwic3RhdHVzXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5zdGF0dXM7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJleHRyYURhdGFcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFEYXRhO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhRGF0YSA9IGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvbkRhdGFBcnJpdmFsXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uRGF0YUFycml2YWw7XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5fb25EYXRhQXJyaXZhbCA9IGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvblNlZWtlZFwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vblNlZWtlZDtcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldChlKSB7XG4gICAgICAgICAgICB0aGlzLl9vblNlZWtlZCA9IGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvbkVycm9yXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uRXJyb3I7XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5fb25FcnJvciA9IGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvbkNvbXBsZXRlXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uQ29tcGxldGU7XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5fb25Db21wbGV0ZSA9IGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvblJlZGlyZWN0XCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uUmVkaXJlY3Q7XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5fb25SZWRpcmVjdCA9IGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvblJlY292ZXJlZEVhcmx5RW9mXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uUmVjb3ZlcmVkRWFybHlFb2Y7XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5fb25SZWNvdmVyZWRFYXJseUVvZiA9IGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJjdXJyZW50VVJMXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2UudXJsO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiaGFzUmVkaXJlY3RcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbCAhPSB0aGlzLl9yZWRpcmVjdGVkVVJMIHx8IHZvaWQgMCAhPSB0aGlzLl9kYXRhU291cmNlLnJlZGlyZWN0ZWRVUkw7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJjdXJyZW50UmVkaXJlY3RlZFVSTFwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdGVkVVJMIHx8IHRoaXMuX2RhdGFTb3VyY2UucmVkaXJlY3RlZFVSTDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImN1cnJlbnRTcGVlZFwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXJDbGFzcyA9PT0gdi5kZWZhdWx0ID8gdGhpcy5fbG9hZGVyLmN1cnJlbnRTcGVlZCA6IHRoaXMuX3NwZWVkU2FtcGxlci5sYXN0U2Vjb25kS0JwcztcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImxvYWRlclR5cGVcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLnR5cGU7XG4gICAgICAgICAgfSB9XSksIGU7XG4gICAgICB9KCk7bi5kZWZhdWx0ID0gUjtcbiAgICB9LCB7IFwiLi4vdXRpbHMvZXhjZXB0aW9uLmpzXCI6IDQwLCBcIi4uL3V0aWxzL2xvZ2dlci5qc1wiOiA0MSwgXCIuL2ZldGNoLXN0cmVhbS1sb2FkZXIuanNcIjogMjIsIFwiLi9sb2FkZXIuanNcIjogMjQsXG4gICAgICBcIi4vcGFyYW0tc2Vlay1oYW5kbGVyLmpzXCI6IDI1LCBcIi4vcmFuZ2Utc2Vlay1oYW5kbGVyLmpzXCI6IDI2LCBcIi4vc3BlZWQtc2FtcGxlci5qc1wiOiAyNywgXCIuL3dlYnNvY2tldC1sb2FkZXIuanNcIjogMjgsIFwiLi94aHItbW96LWNodW5rZWQtbG9hZGVyLmpzXCI6IDI5LCBcIi4veGhyLW1zc3RyZWFtLWxvYWRlci5qc1wiOiAzMCwgXCIuL3hoci1yYW5nZS1sb2FkZXIuanNcIjogMzEgfV0sIDI0OiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pLCBuLkJhc2VMb2FkZXIgPSBuLkxvYWRlckVycm9ycyA9IG4uTG9hZGVyU3RhdHVzID0gdm9pZCAwO3ZhciByID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgcyA9IGUoXCIuLi91dGlscy9leGNlcHRpb24uanNcIiksXG4gICAgICAgICAgYSA9IG4uTG9hZGVyU3RhdHVzID0geyBrSWRsZTogMCwga0Nvbm5lY3Rpbmc6IDEsIGtCdWZmZXJpbmc6IDIsIGtFcnJvcjogMywga0NvbXBsZXRlOiA0IH07bi5Mb2FkZXJFcnJvcnMgPSB7IE9LOiBcIk9LXCIsIEVYQ0VQVElPTjogXCJFeGNlcHRpb25cIiwgSFRUUF9TVEFUVVNfQ09ERV9JTlZBTElEOiBcIkh0dHBTdGF0dXNDb2RlSW52YWxpZFwiLCBDT05ORUNUSU5HX1RJTUVPVVQ6IFwiQ29ubmVjdGluZ1RpbWVvdXRcIiwgRUFSTFlfRU9GOiBcIkVhcmx5RW9mXCIsIFVOUkVDT1ZFUkFCTEVfRUFSTFlfRU9GOiBcIlVucmVjb3ZlcmFibGVFYXJseUVvZlwiIH0sIG4uQmFzZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy5fdHlwZSA9IHQgfHwgXCJ1bmRlZmluZWRcIiwgdGhpcy5fc3RhdHVzID0gYS5rSWRsZSwgdGhpcy5fbmVlZFN0YXNoID0gITEsIHRoaXMuX29uQ29udGVudExlbmd0aEtub3duID0gbnVsbCwgdGhpcy5fb25VUkxSZWRpcmVjdCA9IG51bGwsIHRoaXMuX29uRGF0YUFycml2YWwgPSBudWxsLCB0aGlzLl9vbkVycm9yID0gbnVsbCwgdGhpcy5fb25Db21wbGV0ZSA9IG51bGw7XG4gICAgICAgIH1yZXR1cm4gcihlLCBbeyBrZXk6IFwiZGVzdHJveVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBhLmtJZGxlLCB0aGlzLl9vbkNvbnRlbnRMZW5ndGhLbm93biA9IG51bGwsIHRoaXMuX29uVVJMUmVkaXJlY3QgPSBudWxsLCB0aGlzLl9vbkRhdGFBcnJpdmFsID0gbnVsbCwgdGhpcy5fb25FcnJvciA9IG51bGwsIHRoaXMuX29uQ29tcGxldGUgPSBudWxsO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiaXNXb3JraW5nXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXMgPT09IGEua0Nvbm5lY3RpbmcgfHwgdGhpcy5fc3RhdHVzID09PSBhLmtCdWZmZXJpbmc7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvcGVuXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcy5Ob3RJbXBsZW1lbnRlZEV4Y2VwdGlvbihcIlVuaW1wbGVtZW50ZWQgYWJzdHJhY3QgZnVuY3Rpb24hXCIpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiYWJvcnRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IHMuTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oXCJVbmltcGxlbWVudGVkIGFic3RyYWN0IGZ1bmN0aW9uIVwiKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInR5cGVcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInN0YXR1c1wiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJuZWVkU3Rhc2hCdWZmZXJcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmVlZFN0YXNoO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25Db250ZW50TGVuZ3RoS25vd25cIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb25Db250ZW50TGVuZ3RoS25vd247XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5fb25Db250ZW50TGVuZ3RoS25vd24gPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25VUkxSZWRpcmVjdFwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vblVSTFJlZGlyZWN0O1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX29uVVJMUmVkaXJlY3QgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25EYXRhQXJyaXZhbFwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vbkRhdGFBcnJpdmFsO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX29uRGF0YUFycml2YWwgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25FcnJvclwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vbkVycm9yO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX29uRXJyb3IgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib25Db21wbGV0ZVwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vbkNvbXBsZXRlO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ29tcGxldGUgPSBlO1xuICAgICAgICAgIH0gfV0pLCBlO1xuICAgICAgfSgpO1xuICAgIH0sIHsgXCIuLi91dGlscy9leGNlcHRpb24uanNcIjogNDAgfV0sIDI1OiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciByID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSh0LCBuKSB7XG4gICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy5fc3RhcnROYW1lID0gdCwgdGhpcy5fZW5kTmFtZSA9IG47XG4gICAgICAgIH1yZXR1cm4gcihlLCBbeyBrZXk6IFwiZ2V0Q29uZmlnXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IGU7aWYgKDAgIT09IHQuZnJvbSB8fCAtMSAhPT0gdC50bykge1xuICAgICAgICAgICAgICB2YXIgaSA9ICEwOy0xID09PSBuLmluZGV4T2YoXCI/XCIpICYmIChuICs9IFwiP1wiLCBpID0gITEpLCBpICYmIChuICs9IFwiJlwiKSwgbiArPSB0aGlzLl9zdGFydE5hbWUgKyBcIj1cIiArIHQuZnJvbS50b1N0cmluZygpLCAtMSAhPT0gdC50byAmJiAobiArPSBcIiZcIiArIHRoaXMuX2VuZE5hbWUgKyBcIj1cIiArIHQudG8udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9cmV0dXJuIHsgdXJsOiBuLCBoZWFkZXJzOiB7fSB9O1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwicmVtb3ZlVVJMUGFyYW1ldGVyc1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLnNwbGl0KFwiP1wiKVswXSxcbiAgICAgICAgICAgICAgICBuID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgIGkgPSBlLmluZGV4T2YoXCI/XCIpOy0xICE9PSBpICYmIChuID0gZS5zdWJzdHJpbmcoaSArIDEpKTt2YXIgciA9IFwiXCI7aWYgKHZvaWQgMCAhPSBuICYmIG4ubGVuZ3RoID4gMCkgZm9yICh2YXIgcyA9IG4uc3BsaXQoXCImXCIpLCBhID0gMDsgYSA8IHMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgdmFyIG8gPSBzW2FdLnNwbGl0KFwiPVwiKSxcbiAgICAgICAgICAgICAgICAgIHUgPSBhID4gMDtvWzBdICE9PSB0aGlzLl9zdGFydE5hbWUgJiYgb1swXSAhPT0gdGhpcy5fZW5kTmFtZSAmJiAodSAmJiAociArPSBcIiZcIiksIHIgKz0gc1thXSk7XG4gICAgICAgICAgICB9cmV0dXJuIDAgPT09IHIubGVuZ3RoID8gdCA6IHQgKyBcIj9cIiArIHI7XG4gICAgICAgICAgfSB9XSksIGU7XG4gICAgICB9KCk7bi5kZWZhdWx0ID0gcztcbiAgICB9LCB7fV0sIDI2OiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciByID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgICAgaSh0aGlzLCBlKSwgdGhpcy5femVyb1N0YXJ0ID0gdCB8fCAhMTtcbiAgICAgICAgfXJldHVybiByKGUsIFt7IGtleTogXCJnZXRDb25maWdcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQpIHtcbiAgICAgICAgICAgIHZhciBuID0ge307aWYgKDAgIT09IHQuZnJvbSB8fCAtMSAhPT0gdC50bykge1xuICAgICAgICAgICAgICB2YXIgaSA9IHZvaWQgMDtpID0gLTEgIT09IHQudG8gPyBcImJ5dGVzPVwiICsgdC5mcm9tLnRvU3RyaW5nKCkgKyBcIi1cIiArIHQudG8udG9TdHJpbmcoKSA6IFwiYnl0ZXM9XCIgKyB0LmZyb20udG9TdHJpbmcoKSArIFwiLVwiLCBuLlJhbmdlID0gaTtcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLl96ZXJvU3RhcnQgJiYgKG4uUmFuZ2UgPSBcImJ5dGVzPTAtXCIpO3JldHVybiB7IHVybDogZSwgaGVhZGVyczogbiB9O1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwicmVtb3ZlVVJMUGFyYW1ldGVyc1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgfSB9XSksIGU7XG4gICAgICB9KCk7bi5kZWZhdWx0ID0gcztcbiAgICB9LCB7fV0sIDI3OiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciByID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICBpKHRoaXMsIGUpLCB0aGlzLl9maXJzdENoZWNrcG9pbnQgPSAwLCB0aGlzLl9sYXN0Q2hlY2twb2ludCA9IDAsIHRoaXMuX2ludGVydmFsQnl0ZXMgPSAwLCB0aGlzLl90b3RhbEJ5dGVzID0gMCwgdGhpcy5fbGFzdFNlY29uZEJ5dGVzID0gMCwgc2VsZi5wZXJmb3JtYW5jZSAmJiBzZWxmLnBlcmZvcm1hbmNlLm5vdyA/IHRoaXMuX25vdyA9IHNlbGYucGVyZm9ybWFuY2Uubm93LmJpbmQoc2VsZi5wZXJmb3JtYW5jZSkgOiB0aGlzLl9ub3cgPSBEYXRlLm5vdztcbiAgICAgICAgfXJldHVybiByKGUsIFt7IGtleTogXCJyZXNldFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdENoZWNrcG9pbnQgPSB0aGlzLl9sYXN0Q2hlY2twb2ludCA9IDAsIHRoaXMuX3RvdGFsQnl0ZXMgPSB0aGlzLl9pbnRlcnZhbEJ5dGVzID0gMCwgdGhpcy5fbGFzdFNlY29uZEJ5dGVzID0gMDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImFkZEJ5dGVzXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICAwID09PSB0aGlzLl9maXJzdENoZWNrcG9pbnQgPyAodGhpcy5fZmlyc3RDaGVja3BvaW50ID0gdGhpcy5fbm93KCksIHRoaXMuX2xhc3RDaGVja3BvaW50ID0gdGhpcy5fZmlyc3RDaGVja3BvaW50LCB0aGlzLl9pbnRlcnZhbEJ5dGVzICs9IGUsIHRoaXMuX3RvdGFsQnl0ZXMgKz0gZSkgOiB0aGlzLl9ub3coKSAtIHRoaXMuX2xhc3RDaGVja3BvaW50IDwgMWUzID8gKHRoaXMuX2ludGVydmFsQnl0ZXMgKz0gZSwgdGhpcy5fdG90YWxCeXRlcyArPSBlKSA6ICh0aGlzLl9sYXN0U2Vjb25kQnl0ZXMgPSB0aGlzLl9pbnRlcnZhbEJ5dGVzLCB0aGlzLl9pbnRlcnZhbEJ5dGVzID0gZSwgdGhpcy5fdG90YWxCeXRlcyArPSBlLCB0aGlzLl9sYXN0Q2hlY2twb2ludCA9IHRoaXMuX25vdygpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImN1cnJlbnRLQnBzXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgdGhpcy5hZGRCeXRlcygwKTt2YXIgZSA9ICh0aGlzLl9ub3coKSAtIHRoaXMuX2xhc3RDaGVja3BvaW50KSAvIDFlMztyZXR1cm4gMCA9PSBlICYmIChlID0gMSksIHRoaXMuX2ludGVydmFsQnl0ZXMgLyBlIC8gMTAyNDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImxhc3RTZWNvbmRLQnBzXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkQnl0ZXMoMCksIDAgIT09IHRoaXMuX2xhc3RTZWNvbmRCeXRlcyA/IHRoaXMuX2xhc3RTZWNvbmRCeXRlcyAvIDEwMjQgOiB0aGlzLl9ub3coKSAtIHRoaXMuX2xhc3RDaGVja3BvaW50ID49IDUwMCA/IHRoaXMuY3VycmVudEtCcHMgOiAwO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiYXZlcmFnZUtCcHNcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICB2YXIgZSA9ICh0aGlzLl9ub3coKSAtIHRoaXMuX2ZpcnN0Q2hlY2twb2ludCkgLyAxZTM7cmV0dXJuIHRoaXMuX3RvdGFsQnl0ZXMgLyBlIC8gMTAyNDtcbiAgICAgICAgICB9IH1dKSwgZTtcbiAgICAgIH0oKTtuLmRlZmF1bHQgPSBzO1xuICAgIH0sIHt9XSwgMjg6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfWZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICBpZiAoIWUpIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gIXQgfHwgXCJvYmplY3RcIiAhPSAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0KSkgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ID8gZSA6IHQ7XG4gICAgICB9ZnVuY3Rpb24gcyhlLCB0KSB7XG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQgJiYgbnVsbCAhPT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0KSkpO2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0ICYmIHQucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBlLCBlbnVtZXJhYmxlOiAhMSwgd3JpdGFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH0gfSksIHQgJiYgKE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihlLCB0KSA6IGUuX19wcm90b19fID0gdCk7XG4gICAgICB9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgYSA9IGZ1bmN0aW9uIGUodCwgbiwgaSkge1xuICAgICAgICBudWxsID09PSB0ICYmICh0ID0gRnVuY3Rpb24ucHJvdG90eXBlKTt2YXIgciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgbik7aWYgKHZvaWQgMCA9PT0gcikge1xuICAgICAgICAgIHZhciBzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO3JldHVybiBudWxsID09PSBzID8gdm9pZCAwIDogZShzLCBuLCBpKTtcbiAgICAgICAgfWlmIChcInZhbHVlXCIgaW4gcikgcmV0dXJuIHIudmFsdWU7dmFyIGEgPSByLmdldDtpZiAodm9pZCAwICE9PSBhKSByZXR1cm4gYS5jYWxsKGkpO1xuICAgICAgfSxcbiAgICAgICAgICBvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgdSA9IGUoXCIuLi91dGlscy9sb2dnZXIuanNcIiksXG4gICAgICAgICAgbCA9IChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlICYmIGUuX19lc01vZHVsZTtcbiAgICAgIH0odSksIGUoXCIuL2xvYWRlci5qc1wiKSksXG4gICAgICAgICAgZCA9IGUoXCIuLi91dGlscy9leGNlcHRpb24uanNcIiksXG4gICAgICAgICAgaCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgICAgaSh0aGlzLCB0KTt2YXIgZSA9IHIodGhpcywgKHQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLCBcIndlYnNvY2tldC1sb2FkZXJcIikpO3JldHVybiBlLlRBRyA9IFwiV2ViU29ja2V0TG9hZGVyXCIsIGUuX25lZWRTdGFzaCA9ICEwLCBlLl93cyA9IG51bGwsIGUuX3JlcXVlc3RBYm9ydCA9ICExLCBlLl9yZWNlaXZlZExlbmd0aCA9IDAsIGU7XG4gICAgICAgIH1yZXR1cm4gcyh0LCBlKSwgbyh0LCBudWxsLCBbeyBrZXk6IFwiaXNTdXBwb3J0ZWRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gc2VsZi5XZWJTb2NrZXQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IH1dKSwgbyh0LCBbeyBrZXk6IFwiZGVzdHJveVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl93cyAmJiB0aGlzLmFib3J0KCksIGEodC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0LnByb3RvdHlwZSksIFwiZGVzdHJveVwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib3BlblwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl93cyA9IG5ldyBzZWxmLldlYlNvY2tldChlLnVybCk7dC5iaW5hcnlUeXBlID0gXCJhcnJheWJ1ZmZlclwiLCB0Lm9ub3BlbiA9IHRoaXMuX29uV2ViU29ja2V0T3Blbi5iaW5kKHRoaXMpLCB0Lm9uY2xvc2UgPSB0aGlzLl9vbldlYlNvY2tldENsb3NlLmJpbmQodGhpcyksIHQub25tZXNzYWdlID0gdGhpcy5fb25XZWJTb2NrZXRNZXNzYWdlLmJpbmQodGhpcyksIHQub25lcnJvciA9IHRoaXMuX29uV2ViU29ja2V0RXJyb3IuYmluZCh0aGlzKSwgdGhpcy5fc3RhdHVzID0gbC5Mb2FkZXJTdGF0dXMua0Nvbm5lY3Rpbmc7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IGwuTG9hZGVyU3RhdHVzLmtFcnJvcjt2YXIgbiA9IHsgY29kZTogZS5jb2RlLCBtc2c6IGUubWVzc2FnZSB9O2lmICghdGhpcy5fb25FcnJvcikgdGhyb3cgbmV3IGQuUnVudGltZUV4Y2VwdGlvbihuLm1zZyk7dGhpcy5fb25FcnJvcihsLkxvYWRlckVycm9ycy5FWENFUFRJT04sIG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiYWJvcnRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl93czshZSB8fCAwICE9PSBlLnJlYWR5U3RhdGUgJiYgMSAhPT0gZS5yZWFkeVN0YXRlIHx8ICh0aGlzLl9yZXF1ZXN0QWJvcnQgPSAhMCwgZS5jbG9zZSgpKSwgdGhpcy5fd3MgPSBudWxsLCB0aGlzLl9zdGF0dXMgPSBsLkxvYWRlclN0YXR1cy5rQ29tcGxldGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25XZWJTb2NrZXRPcGVuXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBsLkxvYWRlclN0YXR1cy5rQnVmZmVyaW5nO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uV2ViU29ja2V0Q2xvc2VcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGlmICghMCA9PT0gdGhpcy5fcmVxdWVzdEFib3J0KSByZXR1cm4gdm9pZCAodGhpcy5fcmVxdWVzdEFib3J0ID0gITEpO3RoaXMuX3N0YXR1cyA9IGwuTG9hZGVyU3RhdHVzLmtDb21wbGV0ZSwgdGhpcy5fb25Db21wbGV0ZSAmJiB0aGlzLl9vbkNvbXBsZXRlKDAsIHRoaXMuX3JlY2VpdmVkTGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25XZWJTb2NrZXRNZXNzYWdlXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXM7aWYgKGUuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB0aGlzLl9kaXNwYXRjaEFycmF5QnVmZmVyKGUuZGF0YSk7ZWxzZSBpZiAoZS5kYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgICB2YXIgbiA9IG5ldyBGaWxlUmVhZGVyKCk7bi5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdC5fZGlzcGF0Y2hBcnJheUJ1ZmZlcihuLnJlc3VsdCk7XG4gICAgICAgICAgICAgIH0sIG4ucmVhZEFzQXJyYXlCdWZmZXIoZS5kYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IGwuTG9hZGVyU3RhdHVzLmtFcnJvcjt2YXIgaSA9IHsgY29kZTogLTEsIG1zZzogXCJVbnN1cHBvcnRlZCBXZWJTb2NrZXQgbWVzc2FnZSB0eXBlOiBcIiArIGUuZGF0YS5jb25zdHJ1Y3Rvci5uYW1lIH07aWYgKCF0aGlzLl9vbkVycm9yKSB0aHJvdyBuZXcgZC5SdW50aW1lRXhjZXB0aW9uKGkubXNnKTt0aGlzLl9vbkVycm9yKGwuTG9hZGVyRXJyb3JzLkVYQ0VQVElPTiwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfZGlzcGF0Y2hBcnJheUJ1ZmZlclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLFxuICAgICAgICAgICAgICAgIG4gPSB0aGlzLl9yZWNlaXZlZExlbmd0aDt0aGlzLl9yZWNlaXZlZExlbmd0aCArPSB0LmJ5dGVMZW5ndGgsIHRoaXMuX29uRGF0YUFycml2YWwgJiYgdGhpcy5fb25EYXRhQXJyaXZhbCh0LCBuLCB0aGlzLl9yZWNlaXZlZExlbmd0aCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25XZWJTb2NrZXRFcnJvclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gbC5Mb2FkZXJTdGF0dXMua0Vycm9yO3ZhciB0ID0geyBjb2RlOiBlLmNvZGUsIG1zZzogZS5tZXNzYWdlIH07aWYgKCF0aGlzLl9vbkVycm9yKSB0aHJvdyBuZXcgZC5SdW50aW1lRXhjZXB0aW9uKHQubXNnKTt0aGlzLl9vbkVycm9yKGwuTG9hZGVyRXJyb3JzLkVYQ0VQVElPTiwgdCk7XG4gICAgICAgICAgfSB9XSksIHQ7XG4gICAgICB9KGwuQmFzZUxvYWRlcik7bi5kZWZhdWx0ID0gaDtcbiAgICB9LCB7IFwiLi4vdXRpbHMvZXhjZXB0aW9uLmpzXCI6IDQwLCBcIi4uL3V0aWxzL2xvZ2dlci5qc1wiOiA0MSwgXCIuL2xvYWRlci5qc1wiOiAyNCB9XSwgMjk6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfWZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICBpZiAoIWUpIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gIXQgfHwgXCJvYmplY3RcIiAhPSAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0KSkgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ID8gZSA6IHQ7XG4gICAgICB9ZnVuY3Rpb24gcyhlLCB0KSB7XG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQgJiYgbnVsbCAhPT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0KSkpO2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0ICYmIHQucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBlLCBlbnVtZXJhYmxlOiAhMSwgd3JpdGFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH0gfSksIHQgJiYgKE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihlLCB0KSA6IGUuX19wcm90b19fID0gdCk7XG4gICAgICB9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgYSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gX3R5cGVvZihTeW1ib2wuaXRlcmF0b3IpID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZSk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlKTtcbiAgICAgIH0sXG4gICAgICAgICAgbyA9IGZ1bmN0aW9uIGUodCwgbiwgaSkge1xuICAgICAgICBudWxsID09PSB0ICYmICh0ID0gRnVuY3Rpb24ucHJvdG90eXBlKTt2YXIgciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgbik7aWYgKHZvaWQgMCA9PT0gcikge1xuICAgICAgICAgIHZhciBzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO3JldHVybiBudWxsID09PSBzID8gdm9pZCAwIDogZShzLCBuLCBpKTtcbiAgICAgICAgfWlmIChcInZhbHVlXCIgaW4gcikgcmV0dXJuIHIudmFsdWU7dmFyIGEgPSByLmdldDtpZiAodm9pZCAwICE9PSBhKSByZXR1cm4gYS5jYWxsKGkpO1xuICAgICAgfSxcbiAgICAgICAgICB1ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgbCA9IGUoXCIuLi91dGlscy9sb2dnZXIuanNcIiksXG4gICAgICAgICAgZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH0obCksXG4gICAgICAgICAgaCA9IGUoXCIuL2xvYWRlci5qc1wiKSxcbiAgICAgICAgICBmID0gZShcIi4uL3V0aWxzL2V4Y2VwdGlvbi5qc1wiKSxcbiAgICAgICAgICBjID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZnVuY3Rpb24gdChlLCBuKSB7XG4gICAgICAgICAgaSh0aGlzLCB0KTt2YXIgcyA9IHIodGhpcywgKHQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLCBcInhoci1tb3otY2h1bmtlZC1sb2FkZXJcIikpO3JldHVybiBzLlRBRyA9IFwiTW96Q2h1bmtlZExvYWRlclwiLCBzLl9zZWVrSGFuZGxlciA9IGUsIHMuX2NvbmZpZyA9IG4sIHMuX25lZWRTdGFzaCA9ICEwLCBzLl94aHIgPSBudWxsLCBzLl9yZXF1ZXN0QWJvcnQgPSAhMSwgcy5fY29udGVudExlbmd0aCA9IG51bGwsIHMuX3JlY2VpdmVkTGVuZ3RoID0gMCwgcztcbiAgICAgICAgfXJldHVybiBzKHQsIGUpLCB1KHQsIG51bGwsIFt7IGtleTogXCJpc1N1cHBvcnRlZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO3JldHVybiBlLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL2V4YW1wbGUuY29tXCIsICEwKSwgZS5yZXNwb25zZVR5cGUgPSBcIm1vei1jaHVua2VkLWFycmF5YnVmZmVyXCIsIFwibW96LWNodW5rZWQtYXJyYXlidWZmZXJcIiA9PT0gZS5yZXNwb25zZVR5cGU7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkLmRlZmF1bHQudyhcIk1vekNodW5rZWRMb2FkZXJcIiwgZS5tZXNzYWdlKSwgITE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9XSksIHUodCwgW3sga2V5OiBcImRlc3Ryb3lcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5pc1dvcmtpbmcoKSAmJiB0aGlzLmFib3J0KCksIHRoaXMuX3hociAmJiAodGhpcy5feGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGwsIHRoaXMuX3hoci5vbnByb2dyZXNzID0gbnVsbCwgdGhpcy5feGhyLm9ubG9hZGVuZCA9IG51bGwsIHRoaXMuX3hoci5vbmVycm9yID0gbnVsbCwgdGhpcy5feGhyID0gbnVsbCksIG8odC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0LnByb3RvdHlwZSksIFwiZGVzdHJveVwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib3BlblwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YVNvdXJjZSA9IGUsIHRoaXMuX3JhbmdlID0gdDt2YXIgbiA9IGUudXJsO3RoaXMuX2NvbmZpZy5yZXVzZVJlZGlyZWN0ZWRVUkwgJiYgdm9pZCAwICE9IGUucmVkaXJlY3RlZFVSTCAmJiAobiA9IGUucmVkaXJlY3RlZFVSTCk7dmFyIGkgPSB0aGlzLl9zZWVrSGFuZGxlci5nZXRDb25maWcobiwgdCk7dGhpcy5fcmVxdWVzdFVSTCA9IGkudXJsO3ZhciByID0gdGhpcy5feGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7aWYgKHIub3BlbihcIkdFVFwiLCBpLnVybCwgITApLCByLnJlc3BvbnNlVHlwZSA9IFwibW96LWNodW5rZWQtYXJyYXlidWZmZXJcIiwgci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSB0aGlzLl9vblJlYWR5U3RhdGVDaGFuZ2UuYmluZCh0aGlzKSwgci5vbnByb2dyZXNzID0gdGhpcy5fb25Qcm9ncmVzcy5iaW5kKHRoaXMpLCByLm9ubG9hZGVuZCA9IHRoaXMuX29uTG9hZEVuZC5iaW5kKHRoaXMpLCByLm9uZXJyb3IgPSB0aGlzLl9vblhockVycm9yLmJpbmQodGhpcyksIGUud2l0aENyZWRlbnRpYWxzICYmIChyLndpdGhDcmVkZW50aWFscyA9ICEwKSwgXCJvYmplY3RcIiA9PT0gYShpLmhlYWRlcnMpKSB7XG4gICAgICAgICAgICAgIHZhciBzID0gaS5oZWFkZXJzO2ZvciAodmFyIG8gaW4gcykge1xuICAgICAgICAgICAgICAgIHMuaGFzT3duUHJvcGVydHkobykgJiYgci5zZXRSZXF1ZXN0SGVhZGVyKG8sIHNbb10pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9aWYgKFwib2JqZWN0XCIgPT09IGEodGhpcy5fY29uZmlnLmhlYWRlcnMpKSB7XG4gICAgICAgICAgICAgIHZhciB1ID0gdGhpcy5fY29uZmlnLmhlYWRlcnM7Zm9yICh2YXIgbCBpbiB1KSB7XG4gICAgICAgICAgICAgICAgdS5oYXNPd25Qcm9wZXJ0eShsKSAmJiByLnNldFJlcXVlc3RIZWFkZXIobCwgdVtsXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH10aGlzLl9zdGF0dXMgPSBoLkxvYWRlclN0YXR1cy5rQ29ubmVjdGluZywgci5zZW5kKCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJhYm9ydFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0QWJvcnQgPSAhMCwgdGhpcy5feGhyICYmIHRoaXMuX3hoci5hYm9ydCgpLCB0aGlzLl9zdGF0dXMgPSBoLkxvYWRlclN0YXR1cy5rQ29tcGxldGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25SZWFkeVN0YXRlQ2hhbmdlXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUudGFyZ2V0O2lmICgyID09PSB0LnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPSB0LnJlc3BvbnNlVVJMICYmIHQucmVzcG9uc2VVUkwgIT09IHRoaXMuX3JlcXVlc3RVUkwgJiYgdGhpcy5fb25VUkxSZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5fc2Vla0hhbmRsZXIucmVtb3ZlVVJMUGFyYW1ldGVycyh0LnJlc3BvbnNlVVJMKTt0aGlzLl9vblVSTFJlZGlyZWN0KG4pO1xuICAgICAgICAgICAgICB9aWYgKDAgIT09IHQuc3RhdHVzICYmICh0LnN0YXR1cyA8IDIwMCB8fCB0LnN0YXR1cyA+IDI5OSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhdHVzID0gaC5Mb2FkZXJTdGF0dXMua0Vycm9yLCAhdGhpcy5fb25FcnJvcikgdGhyb3cgbmV3IGYuUnVudGltZUV4Y2VwdGlvbihcIk1vekNodW5rZWRMb2FkZXI6IEh0dHAgY29kZSBpbnZhbGlkLCBcIiArIHQuc3RhdHVzICsgXCIgXCIgKyB0LnN0YXR1c1RleHQpO3RoaXMuX29uRXJyb3IoaC5Mb2FkZXJFcnJvcnMuSFRUUF9TVEFUVVNfQ09ERV9JTlZBTElELCB7IGNvZGU6IHQuc3RhdHVzLCBtc2c6IHQuc3RhdHVzVGV4dCB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuX3N0YXR1cyA9IGguTG9hZGVyU3RhdHVzLmtCdWZmZXJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25Qcm9ncmVzc1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXR1cyAhPT0gaC5Mb2FkZXJTdGF0dXMua0Vycm9yKSB7XG4gICAgICAgICAgICAgIG51bGwgPT09IHRoaXMuX2NvbnRlbnRMZW5ndGggJiYgbnVsbCAhPT0gZS50b3RhbCAmJiAwICE9PSBlLnRvdGFsICYmICh0aGlzLl9jb250ZW50TGVuZ3RoID0gZS50b3RhbCwgdGhpcy5fb25Db250ZW50TGVuZ3RoS25vd24gJiYgdGhpcy5fb25Db250ZW50TGVuZ3RoS25vd24odGhpcy5fY29udGVudExlbmd0aCkpO3ZhciB0ID0gZS50YXJnZXQucmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICBuID0gdGhpcy5fcmFuZ2UuZnJvbSArIHRoaXMuX3JlY2VpdmVkTGVuZ3RoO3RoaXMuX3JlY2VpdmVkTGVuZ3RoICs9IHQuYnl0ZUxlbmd0aCwgdGhpcy5fb25EYXRhQXJyaXZhbCAmJiB0aGlzLl9vbkRhdGFBcnJpdmFsKHQsIG4sIHRoaXMuX3JlY2VpdmVkTGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbkxvYWRFbmRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGlmICghMCA9PT0gdGhpcy5fcmVxdWVzdEFib3J0KSByZXR1cm4gdm9pZCAodGhpcy5fcmVxdWVzdEFib3J0ID0gITEpO3RoaXMuX3N0YXR1cyAhPT0gaC5Mb2FkZXJTdGF0dXMua0Vycm9yICYmICh0aGlzLl9zdGF0dXMgPSBoLkxvYWRlclN0YXR1cy5rQ29tcGxldGUsIHRoaXMuX29uQ29tcGxldGUgJiYgdGhpcy5fb25Db21wbGV0ZSh0aGlzLl9yYW5nZS5mcm9tLCB0aGlzLl9yYW5nZS5mcm9tICsgdGhpcy5fcmVjZWl2ZWRMZW5ndGggLSAxKSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25YaHJFcnJvclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gaC5Mb2FkZXJTdGF0dXMua0Vycm9yO3ZhciB0ID0gMCxcbiAgICAgICAgICAgICAgICBuID0gbnVsbDtpZiAodGhpcy5fY29udGVudExlbmd0aCAmJiBlLmxvYWRlZCA8IHRoaXMuX2NvbnRlbnRMZW5ndGggPyAodCA9IGguTG9hZGVyRXJyb3JzLkVBUkxZX0VPRiwgbiA9IHsgY29kZTogLTEsIG1zZzogXCJNb3otQ2h1bmtlZCBzdHJlYW0gbWVldCBFYXJseS1Fb2ZcIiB9KSA6ICh0ID0gaC5Mb2FkZXJFcnJvcnMuRVhDRVBUSU9OLCBuID0geyBjb2RlOiAtMSwgbXNnOiBlLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiBcIiArIGUudHlwZSB9KSwgIXRoaXMuX29uRXJyb3IpIHRocm93IG5ldyBmLlJ1bnRpbWVFeGNlcHRpb24obi5tc2cpO3RoaXMuX29uRXJyb3IodCwgbik7XG4gICAgICAgICAgfSB9XSksIHQ7XG4gICAgICB9KGguQmFzZUxvYWRlcik7bi5kZWZhdWx0ID0gYztcbiAgICB9LCB7IFwiLi4vdXRpbHMvZXhjZXB0aW9uLmpzXCI6IDQwLCBcIi4uL3V0aWxzL2xvZ2dlci5qc1wiOiA0MSwgXCIuL2xvYWRlci5qc1wiOiAyNCB9XSwgMzA6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfWZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICBpZiAoIWUpIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gIXQgfHwgXCJvYmplY3RcIiAhPSAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0KSkgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ID8gZSA6IHQ7XG4gICAgICB9ZnVuY3Rpb24gcyhlLCB0KSB7XG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQgJiYgbnVsbCAhPT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0KSkpO2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0ICYmIHQucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBlLCBlbnVtZXJhYmxlOiAhMSwgd3JpdGFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH0gfSksIHQgJiYgKE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihlLCB0KSA6IGUuX19wcm90b19fID0gdCk7XG4gICAgICB9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgYSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gX3R5cGVvZihTeW1ib2wuaXRlcmF0b3IpID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZSk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlKTtcbiAgICAgIH0sXG4gICAgICAgICAgbyA9IGZ1bmN0aW9uIGUodCwgbiwgaSkge1xuICAgICAgICBudWxsID09PSB0ICYmICh0ID0gRnVuY3Rpb24ucHJvdG90eXBlKTt2YXIgciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgbik7aWYgKHZvaWQgMCA9PT0gcikge1xuICAgICAgICAgIHZhciBzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO3JldHVybiBudWxsID09PSBzID8gdm9pZCAwIDogZShzLCBuLCBpKTtcbiAgICAgICAgfWlmIChcInZhbHVlXCIgaW4gcikgcmV0dXJuIHIudmFsdWU7dmFyIGEgPSByLmdldDtpZiAodm9pZCAwICE9PSBhKSByZXR1cm4gYS5jYWxsKGkpO1xuICAgICAgfSxcbiAgICAgICAgICB1ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgbCA9IGUoXCIuLi91dGlscy9sb2dnZXIuanNcIiksXG4gICAgICAgICAgZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH0obCksXG4gICAgICAgICAgaCA9IGUoXCIuL2xvYWRlci5qc1wiKSxcbiAgICAgICAgICBmID0gZShcIi4uL3V0aWxzL2V4Y2VwdGlvbi5qc1wiKSxcbiAgICAgICAgICBjID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZnVuY3Rpb24gdChlLCBuKSB7XG4gICAgICAgICAgaSh0aGlzLCB0KTt2YXIgcyA9IHIodGhpcywgKHQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLCBcInhoci1tc3N0cmVhbS1sb2FkZXJcIikpO3JldHVybiBzLlRBRyA9IFwiTVNTdHJlYW1Mb2FkZXJcIiwgcy5fc2Vla0hhbmRsZXIgPSBlLCBzLl9jb25maWcgPSBuLCBzLl9uZWVkU3Rhc2ggPSAhMCwgcy5feGhyID0gbnVsbCwgcy5fcmVhZGVyID0gbnVsbCwgcy5fdG90YWxSYW5nZSA9IG51bGwsIHMuX2N1cnJlbnRSYW5nZSA9IG51bGwsIHMuX2N1cnJlbnRSZXF1ZXN0VVJMID0gbnVsbCwgcy5fY3VycmVudFJlZGlyZWN0ZWRVUkwgPSBudWxsLCBzLl9jb250ZW50TGVuZ3RoID0gbnVsbCwgcy5fcmVjZWl2ZWRMZW5ndGggPSAwLCBzLl9idWZmZXJMaW1pdCA9IDE2Nzc3MjE2LCBzLl9sYXN0VGltZUJ1ZmZlclNpemUgPSAwLCBzLl9pc1JlY29ubmVjdGluZyA9ICExLCBzO1xuICAgICAgICB9cmV0dXJuIHModCwgZSksIHUodCwgbnVsbCwgW3sga2V5OiBcImlzU3VwcG9ydGVkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHNlbGYuTVNTdHJlYW0gfHwgdm9pZCAwID09PSBzZWxmLk1TU3RyZWFtUmVhZGVyKSByZXR1cm4gITE7dmFyIGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtyZXR1cm4gZS5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLCAhMCksIGUucmVzcG9uc2VUeXBlID0gXCJtcy1zdHJlYW1cIiwgXCJtcy1zdHJlYW1cIiA9PT0gZS5yZXNwb25zZVR5cGU7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkLmRlZmF1bHQudyhcIk1TU3RyZWFtTG9hZGVyXCIsIGUubWVzc2FnZSksICExO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfV0pLCB1KHQsIFt7IGtleTogXCJkZXN0cm95XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNXb3JraW5nKCkgJiYgdGhpcy5hYm9ydCgpLCB0aGlzLl9yZWFkZXIgJiYgKHRoaXMuX3JlYWRlci5vbnByb2dyZXNzID0gbnVsbCwgdGhpcy5fcmVhZGVyLm9ubG9hZCA9IG51bGwsIHRoaXMuX3JlYWRlci5vbmVycm9yID0gbnVsbCwgdGhpcy5fcmVhZGVyID0gbnVsbCksIHRoaXMuX3hociAmJiAodGhpcy5feGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGwsIHRoaXMuX3hociA9IG51bGwpLCBvKHQucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLCBcImRlc3Ryb3lcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIm9wZW5cIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFsT3BlbihlLCB0LCAhMSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfaW50ZXJuYWxPcGVuXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0LCBuKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhU291cmNlID0gZSwgbiA/IHRoaXMuX2N1cnJlbnRSYW5nZSA9IHQgOiB0aGlzLl90b3RhbFJhbmdlID0gdDt2YXIgaSA9IGUudXJsO3RoaXMuX2NvbmZpZy5yZXVzZVJlZGlyZWN0ZWRVUkwgJiYgKHZvaWQgMCAhPSB0aGlzLl9jdXJyZW50UmVkaXJlY3RlZFVSTCA/IGkgPSB0aGlzLl9jdXJyZW50UmVkaXJlY3RlZFVSTCA6IHZvaWQgMCAhPSBlLnJlZGlyZWN0ZWRVUkwgJiYgKGkgPSBlLnJlZGlyZWN0ZWRVUkwpKTt2YXIgciA9IHRoaXMuX3NlZWtIYW5kbGVyLmdldENvbmZpZyhpLCB0KTt0aGlzLl9jdXJyZW50UmVxdWVzdFVSTCA9IHIudXJsO3ZhciBzID0gdGhpcy5fcmVhZGVyID0gbmV3IHNlbGYuTVNTdHJlYW1SZWFkZXIoKTtzLm9ucHJvZ3Jlc3MgPSB0aGlzLl9tc3JPblByb2dyZXNzLmJpbmQodGhpcyksIHMub25sb2FkID0gdGhpcy5fbXNyT25Mb2FkLmJpbmQodGhpcyksIHMub25lcnJvciA9IHRoaXMuX21zck9uRXJyb3IuYmluZCh0aGlzKTt2YXIgbyA9IHRoaXMuX3hociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO2lmIChvLm9wZW4oXCJHRVRcIiwgci51cmwsICEwKSwgby5yZXNwb25zZVR5cGUgPSBcIm1zLXN0cmVhbVwiLCBvLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHRoaXMuX3hock9uUmVhZHlTdGF0ZUNoYW5nZS5iaW5kKHRoaXMpLCBvLm9uZXJyb3IgPSB0aGlzLl94aHJPbkVycm9yLmJpbmQodGhpcyksIGUud2l0aENyZWRlbnRpYWxzICYmIChvLndpdGhDcmVkZW50aWFscyA9ICEwKSwgXCJvYmplY3RcIiA9PT0gYShyLmhlYWRlcnMpKSB7XG4gICAgICAgICAgICAgIHZhciB1ID0gci5oZWFkZXJzO2ZvciAodmFyIGwgaW4gdSkge1xuICAgICAgICAgICAgICAgIHUuaGFzT3duUHJvcGVydHkobCkgJiYgby5zZXRSZXF1ZXN0SGVhZGVyKGwsIHVbbF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9aWYgKFwib2JqZWN0XCIgPT09IGEodGhpcy5fY29uZmlnLmhlYWRlcnMpKSB7XG4gICAgICAgICAgICAgIHZhciBkID0gdGhpcy5fY29uZmlnLmhlYWRlcnM7Zm9yICh2YXIgZiBpbiBkKSB7XG4gICAgICAgICAgICAgICAgZC5oYXNPd25Qcm9wZXJ0eShmKSAmJiBvLnNldFJlcXVlc3RIZWFkZXIoZiwgZFtmXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH10aGlzLl9pc1JlY29ubmVjdGluZyA/IHRoaXMuX2lzUmVjb25uZWN0aW5nID0gITEgOiB0aGlzLl9zdGF0dXMgPSBoLkxvYWRlclN0YXR1cy5rQ29ubmVjdGluZywgby5zZW5kKCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJhYm9ydFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcm5hbEFib3J0KCksIHRoaXMuX3N0YXR1cyA9IGguTG9hZGVyU3RhdHVzLmtDb21wbGV0ZTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9pbnRlcm5hbEFib3J0XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlYWRlciAmJiAoMSA9PT0gdGhpcy5fcmVhZGVyLnJlYWR5U3RhdGUgJiYgdGhpcy5fcmVhZGVyLmFib3J0KCksIHRoaXMuX3JlYWRlci5vbnByb2dyZXNzID0gbnVsbCwgdGhpcy5fcmVhZGVyLm9ubG9hZCA9IG51bGwsIHRoaXMuX3JlYWRlci5vbmVycm9yID0gbnVsbCwgdGhpcy5fcmVhZGVyID0gbnVsbCksIHRoaXMuX3hociAmJiAodGhpcy5feGhyLmFib3J0KCksIHRoaXMuX3hoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsLCB0aGlzLl94aHIgPSBudWxsKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl94aHJPblJlYWR5U3RhdGVDaGFuZ2VcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZS50YXJnZXQ7aWYgKDIgPT09IHQucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICBpZiAodC5zdGF0dXMgPj0gMjAwICYmIHQuc3RhdHVzIDw9IDI5OSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0dXMgPSBoLkxvYWRlclN0YXR1cy5rQnVmZmVyaW5nLCB2b2lkIDAgIT0gdC5yZXNwb25zZVVSTCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9zZWVrSGFuZGxlci5yZW1vdmVVUkxQYXJhbWV0ZXJzKHQucmVzcG9uc2VVUkwpO3QucmVzcG9uc2VVUkwgIT09IHRoaXMuX2N1cnJlbnRSZXF1ZXN0VVJMICYmIG4gIT09IHRoaXMuX2N1cnJlbnRSZWRpcmVjdGVkVVJMICYmICh0aGlzLl9jdXJyZW50UmVkaXJlY3RlZFVSTCA9IG4sIHRoaXMuX29uVVJMUmVkaXJlY3QgJiYgdGhpcy5fb25VUkxSZWRpcmVjdChuKSk7XG4gICAgICAgICAgICAgICAgfXZhciBpID0gdC5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtTGVuZ3RoXCIpO2lmIChudWxsICE9IGkgJiYgbnVsbCA9PSB0aGlzLl9jb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgciA9IHBhcnNlSW50KGkpO3IgPiAwICYmICh0aGlzLl9jb250ZW50TGVuZ3RoID0gciwgdGhpcy5fb25Db250ZW50TGVuZ3RoS25vd24gJiYgdGhpcy5fb25Db250ZW50TGVuZ3RoS25vd24odGhpcy5fY29udGVudExlbmd0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhdHVzID0gaC5Mb2FkZXJTdGF0dXMua0Vycm9yLCAhdGhpcy5fb25FcnJvcikgdGhyb3cgbmV3IGYuUnVudGltZUV4Y2VwdGlvbihcIk1TU3RyZWFtTG9hZGVyOiBIdHRwIGNvZGUgaW52YWxpZCwgXCIgKyB0LnN0YXR1cyArIFwiIFwiICsgdC5zdGF0dXNUZXh0KTt0aGlzLl9vbkVycm9yKGguTG9hZGVyRXJyb3JzLkhUVFBfU1RBVFVTX0NPREVfSU5WQUxJRCwgeyBjb2RlOiB0LnN0YXR1cywgbXNnOiB0LnN0YXR1c1RleHQgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoMyA9PT0gdC5yZWFkeVN0YXRlICYmIHQuc3RhdHVzID49IDIwMCAmJiB0LnN0YXR1cyA8PSAyOTkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gaC5Mb2FkZXJTdGF0dXMua0J1ZmZlcmluZzt2YXIgcyA9IHQucmVzcG9uc2U7dGhpcy5fcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX3hock9uRXJyb3JcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IGguTG9hZGVyU3RhdHVzLmtFcnJvcjt2YXIgdCA9IGguTG9hZGVyRXJyb3JzLkVYQ0VQVElPTixcbiAgICAgICAgICAgICAgICBuID0geyBjb2RlOiAtMSwgbXNnOiBlLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiBcIiArIGUudHlwZSB9O2lmICghdGhpcy5fb25FcnJvcikgdGhyb3cgbmV3IGYuUnVudGltZUV4Y2VwdGlvbihuLm1zZyk7dGhpcy5fb25FcnJvcih0LCBuKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9tc3JPblByb2dyZXNzXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUudGFyZ2V0LFxuICAgICAgICAgICAgICAgIG4gPSB0LnJlc3VsdDtpZiAobnVsbCA9PSBuKSByZXR1cm4gdm9pZCB0aGlzLl9kb1JlY29ubmVjdElmTmVlZGVkKCk7dmFyIGkgPSBuLnNsaWNlKHRoaXMuX2xhc3RUaW1lQnVmZmVyU2l6ZSk7dGhpcy5fbGFzdFRpbWVCdWZmZXJTaXplID0gbi5ieXRlTGVuZ3RoO3ZhciByID0gdGhpcy5fdG90YWxSYW5nZS5mcm9tICsgdGhpcy5fcmVjZWl2ZWRMZW5ndGg7dGhpcy5fcmVjZWl2ZWRMZW5ndGggKz0gaS5ieXRlTGVuZ3RoLCB0aGlzLl9vbkRhdGFBcnJpdmFsICYmIHRoaXMuX29uRGF0YUFycml2YWwoaSwgciwgdGhpcy5fcmVjZWl2ZWRMZW5ndGgpLCBuLmJ5dGVMZW5ndGggPj0gdGhpcy5fYnVmZmVyTGltaXQgJiYgKGQuZGVmYXVsdC52KHRoaXMuVEFHLCBcIk1TU3RyZWFtIGJ1ZmZlciBleGNlZWRlZCBtYXggc2l6ZSBuZWFyIFwiICsgKHIgKyBpLmJ5dGVMZW5ndGgpICsgXCIsIHJlY29ubmVjdGluZy4uLlwiKSwgdGhpcy5fZG9SZWNvbm5lY3RJZk5lZWRlZCgpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9kb1JlY29ubmVjdElmTmVlZGVkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09IHRoaXMuX2NvbnRlbnRMZW5ndGggfHwgdGhpcy5fcmVjZWl2ZWRMZW5ndGggPCB0aGlzLl9jb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2lzUmVjb25uZWN0aW5nID0gITAsIHRoaXMuX2xhc3RUaW1lQnVmZmVyU2l6ZSA9IDAsIHRoaXMuX2ludGVybmFsQWJvcnQoKTt2YXIgZSA9IHsgZnJvbTogdGhpcy5fdG90YWxSYW5nZS5mcm9tICsgdGhpcy5fcmVjZWl2ZWRMZW5ndGgsIHRvOiAtMSB9O3RoaXMuX2ludGVybmFsT3Blbih0aGlzLl9kYXRhU291cmNlLCBlLCAhMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfbXNyT25Mb2FkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBoLkxvYWRlclN0YXR1cy5rQ29tcGxldGUsIHRoaXMuX29uQ29tcGxldGUgJiYgdGhpcy5fb25Db21wbGV0ZSh0aGlzLl90b3RhbFJhbmdlLmZyb20sIHRoaXMuX3RvdGFsUmFuZ2UuZnJvbSArIHRoaXMuX3JlY2VpdmVkTGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfbXNyT25FcnJvclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gaC5Mb2FkZXJTdGF0dXMua0Vycm9yO3ZhciB0ID0gMCxcbiAgICAgICAgICAgICAgICBuID0gbnVsbDtpZiAodGhpcy5fY29udGVudExlbmd0aCAmJiB0aGlzLl9yZWNlaXZlZExlbmd0aCA8IHRoaXMuX2NvbnRlbnRMZW5ndGggPyAodCA9IGguTG9hZGVyRXJyb3JzLkVBUkxZX0VPRiwgbiA9IHsgY29kZTogLTEsIG1zZzogXCJNU1N0cmVhbSBtZWV0IEVhcmx5LUVvZlwiIH0pIDogKHQgPSBoLkxvYWRlckVycm9ycy5FQVJMWV9FT0YsIG4gPSB7IGNvZGU6IC0xLCBtc2c6IGUuY29uc3RydWN0b3IubmFtZSArIFwiIFwiICsgZS50eXBlIH0pLCAhdGhpcy5fb25FcnJvcikgdGhyb3cgbmV3IGYuUnVudGltZUV4Y2VwdGlvbihuLm1zZyk7dGhpcy5fb25FcnJvcih0LCBuKTtcbiAgICAgICAgICB9IH1dKSwgdDtcbiAgICAgIH0oaC5CYXNlTG9hZGVyKTtuLmRlZmF1bHQgPSBjO1xuICAgIH0sIHsgXCIuLi91dGlscy9leGNlcHRpb24uanNcIjogNDAsIFwiLi4vdXRpbHMvbG9nZ2VyLmpzXCI6IDQxLCBcIi4vbG9hZGVyLmpzXCI6IDI0IH1dLCAzMTogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07XG4gICAgICB9ZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1mdW5jdGlvbiBzKGUsIHQpIHtcbiAgICAgICAgaWYgKCFlKSB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuICF0IHx8IFwib2JqZWN0XCIgIT0gKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodCkpICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdCA/IGUgOiB0O1xuICAgICAgfWZ1bmN0aW9uIGEoZSwgdCkge1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ICYmIG51bGwgIT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodCkpKTtlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUodCAmJiB0LnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogZSwgZW51bWVyYWJsZTogITEsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9IH0pLCB0ICYmIChPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZSwgdCkgOiBlLl9fcHJvdG9fXyA9IHQpO1xuICAgICAgfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIG8gPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IF90eXBlb2YoU3ltYm9sLml0ZXJhdG9yKSA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGUpO1xuICAgICAgfSA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZSk7XG4gICAgICB9LFxuICAgICAgICAgIHUgPSBmdW5jdGlvbiBlKHQsIG4sIGkpIHtcbiAgICAgICAgbnVsbCA9PT0gdCAmJiAodCA9IEZ1bmN0aW9uLnByb3RvdHlwZSk7dmFyIHIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIG4pO2lmICh2b2lkIDAgPT09IHIpIHtcbiAgICAgICAgICB2YXIgcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtyZXR1cm4gbnVsbCA9PT0gcyA/IHZvaWQgMCA6IGUocywgbiwgaSk7XG4gICAgICAgIH1pZiAoXCJ2YWx1ZVwiIGluIHIpIHJldHVybiByLnZhbHVlO3ZhciBhID0gci5nZXQ7aWYgKHZvaWQgMCAhPT0gYSkgcmV0dXJuIGEuY2FsbChpKTtcbiAgICAgIH0sXG4gICAgICAgICAgbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRbbl07aS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1yZXR1cm4gZnVuY3Rpb24gKHQsIG4sIGkpIHtcbiAgICAgICAgICByZXR1cm4gbiAmJiBlKHQucHJvdG90eXBlLCBuKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICB9O1xuICAgICAgfSgpLFxuICAgICAgICAgIGQgPSBlKFwiLi4vdXRpbHMvbG9nZ2VyLmpzXCIpLFxuICAgICAgICAgIGggPSBpKGQpLFxuICAgICAgICAgIGYgPSBlKFwiLi9zcGVlZC1zYW1wbGVyLmpzXCIpLFxuICAgICAgICAgIGMgPSBpKGYpLFxuICAgICAgICAgIF8gPSBlKFwiLi9sb2FkZXIuanNcIiksXG4gICAgICAgICAgbSA9IGUoXCIuLi91dGlscy9leGNlcHRpb24uanNcIiksXG4gICAgICAgICAgcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHQoZSwgbikge1xuICAgICAgICAgIHIodGhpcywgdCk7dmFyIGkgPSBzKHRoaXMsICh0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcywgXCJ4aHItcmFuZ2UtbG9hZGVyXCIpKTtyZXR1cm4gaS5UQUcgPSBcIlJhbmdlTG9hZGVyXCIsIGkuX3NlZWtIYW5kbGVyID0gZSwgaS5fY29uZmlnID0gbiwgaS5fbmVlZFN0YXNoID0gITEsIGkuX2NodW5rU2l6ZUtCTGlzdCA9IFsxMjgsIDI1NiwgMzg0LCA1MTIsIDc2OCwgMTAyNCwgMTUzNiwgMjA0OCwgMzA3MiwgNDA5NiwgNTEyMCwgNjE0NCwgNzE2OCwgODE5Ml0sIGkuX2N1cnJlbnRDaHVua1NpemVLQiA9IDM4NCwgaS5fY3VycmVudFNwZWVkTm9ybWFsaXplZCA9IDAsIGkuX3plcm9TcGVlZENodW5rQ291bnQgPSAwLCBpLl94aHIgPSBudWxsLCBpLl9zcGVlZFNhbXBsZXIgPSBuZXcgYy5kZWZhdWx0KCksIGkuX3JlcXVlc3RBYm9ydCA9ICExLCBpLl93YWl0Rm9yVG90YWxMZW5ndGggPSAhMSwgaS5fdG90YWxMZW5ndGhSZWNlaXZlZCA9ICExLCBpLl9jdXJyZW50UmVxdWVzdFVSTCA9IG51bGwsIGkuX2N1cnJlbnRSZWRpcmVjdGVkVVJMID0gbnVsbCwgaS5fY3VycmVudFJlcXVlc3RSYW5nZSA9IG51bGwsIGkuX3RvdGFsTGVuZ3RoID0gbnVsbCwgaS5fY29udGVudExlbmd0aCA9IG51bGwsIGkuX3JlY2VpdmVkTGVuZ3RoID0gMCwgaS5fbGFzdFRpbWVMb2FkZWQgPSAwLCBpO1xuICAgICAgICB9cmV0dXJuIGEodCwgZSksIGwodCwgbnVsbCwgW3sga2V5OiBcImlzU3VwcG9ydGVkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7cmV0dXJuIGUub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vZXhhbXBsZS5jb21cIiwgITApLCBlLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIiwgXCJhcnJheWJ1ZmZlclwiID09PSBlLnJlc3BvbnNlVHlwZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGguZGVmYXVsdC53KFwiUmFuZ2VMb2FkZXJcIiwgZS5tZXNzYWdlKSwgITE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9XSksIGwodCwgW3sga2V5OiBcImRlc3Ryb3lcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5pc1dvcmtpbmcoKSAmJiB0aGlzLmFib3J0KCksIHRoaXMuX3hociAmJiAodGhpcy5feGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGwsIHRoaXMuX3hoci5vbnByb2dyZXNzID0gbnVsbCwgdGhpcy5feGhyLm9ubG9hZCA9IG51bGwsIHRoaXMuX3hoci5vbmVycm9yID0gbnVsbCwgdGhpcy5feGhyID0gbnVsbCksIHUodC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0LnByb3RvdHlwZSksIFwiZGVzdHJveVwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib3BlblwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YVNvdXJjZSA9IGUsIHRoaXMuX3JhbmdlID0gdCwgdGhpcy5fc3RhdHVzID0gXy5Mb2FkZXJTdGF0dXMua0Nvbm5lY3Rpbmc7dmFyIG4gPSAhMTt2b2lkIDAgIT0gdGhpcy5fZGF0YVNvdXJjZS5maWxlc2l6ZSAmJiAwICE9PSB0aGlzLl9kYXRhU291cmNlLmZpbGVzaXplICYmIChuID0gITAsIHRoaXMuX3RvdGFsTGVuZ3RoID0gdGhpcy5fZGF0YVNvdXJjZS5maWxlc2l6ZSksIHRoaXMuX3RvdGFsTGVuZ3RoUmVjZWl2ZWQgfHwgbiA/IHRoaXMuX29wZW5TdWJSYW5nZSgpIDogKHRoaXMuX3dhaXRGb3JUb3RhbExlbmd0aCA9ICEwLCB0aGlzLl9pbnRlcm5hbE9wZW4odGhpcy5fZGF0YVNvdXJjZSwgeyBmcm9tOiAwLCB0bzogLTEgfSkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29wZW5TdWJSYW5nZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IDEwMjQgKiB0aGlzLl9jdXJyZW50Q2h1bmtTaXplS0IsXG4gICAgICAgICAgICAgICAgdCA9IHRoaXMuX3JhbmdlLmZyb20gKyB0aGlzLl9yZWNlaXZlZExlbmd0aCxcbiAgICAgICAgICAgICAgICBuID0gdCArIGU7bnVsbCAhPSB0aGlzLl9jb250ZW50TGVuZ3RoICYmIG4gLSB0aGlzLl9yYW5nZS5mcm9tID49IHRoaXMuX2NvbnRlbnRMZW5ndGggJiYgKG4gPSB0aGlzLl9yYW5nZS5mcm9tICsgdGhpcy5fY29udGVudExlbmd0aCAtIDEpLCB0aGlzLl9jdXJyZW50UmVxdWVzdFJhbmdlID0geyBmcm9tOiB0LCB0bzogbiB9LCB0aGlzLl9pbnRlcm5hbE9wZW4odGhpcy5fZGF0YVNvdXJjZSwgdGhpcy5fY3VycmVudFJlcXVlc3RSYW5nZSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfaW50ZXJuYWxPcGVuXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0VGltZUxvYWRlZCA9IDA7dmFyIG4gPSBlLnVybDt0aGlzLl9jb25maWcucmV1c2VSZWRpcmVjdGVkVVJMICYmICh2b2lkIDAgIT0gdGhpcy5fY3VycmVudFJlZGlyZWN0ZWRVUkwgPyBuID0gdGhpcy5fY3VycmVudFJlZGlyZWN0ZWRVUkwgOiB2b2lkIDAgIT0gZS5yZWRpcmVjdGVkVVJMICYmIChuID0gZS5yZWRpcmVjdGVkVVJMKSk7dmFyIGkgPSB0aGlzLl9zZWVrSGFuZGxlci5nZXRDb25maWcobiwgdCk7dGhpcy5fY3VycmVudFJlcXVlc3RVUkwgPSBpLnVybDt2YXIgciA9IHRoaXMuX3hociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO2lmIChyLm9wZW4oXCJHRVRcIiwgaS51cmwsICEwKSwgci5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCIsIHIub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5fb25SZWFkeVN0YXRlQ2hhbmdlLmJpbmQodGhpcyksIHIub25wcm9ncmVzcyA9IHRoaXMuX29uUHJvZ3Jlc3MuYmluZCh0aGlzKSwgci5vbmxvYWQgPSB0aGlzLl9vbkxvYWQuYmluZCh0aGlzKSwgci5vbmVycm9yID0gdGhpcy5fb25YaHJFcnJvci5iaW5kKHRoaXMpLCBlLndpdGhDcmVkZW50aWFscyAmJiAoci53aXRoQ3JlZGVudGlhbHMgPSAhMCksIFwib2JqZWN0XCIgPT09IG8oaS5oZWFkZXJzKSkge1xuICAgICAgICAgICAgICB2YXIgcyA9IGkuaGVhZGVycztmb3IgKHZhciBhIGluIHMpIHtcbiAgICAgICAgICAgICAgICBzLmhhc093blByb3BlcnR5KGEpICYmIHIuc2V0UmVxdWVzdEhlYWRlcihhLCBzW2FdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWlmIChcIm9iamVjdFwiID09PSBvKHRoaXMuX2NvbmZpZy5oZWFkZXJzKSkge1xuICAgICAgICAgICAgICB2YXIgdSA9IHRoaXMuX2NvbmZpZy5oZWFkZXJzO2ZvciAodmFyIGwgaW4gdSkge1xuICAgICAgICAgICAgICAgIHUuaGFzT3duUHJvcGVydHkobCkgJiYgci5zZXRSZXF1ZXN0SGVhZGVyKGwsIHVbbF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ci5zZW5kKCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJhYm9ydFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0QWJvcnQgPSAhMCwgdGhpcy5faW50ZXJuYWxBYm9ydCgpLCB0aGlzLl9zdGF0dXMgPSBfLkxvYWRlclN0YXR1cy5rQ29tcGxldGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfaW50ZXJuYWxBYm9ydFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl94aHIgJiYgKHRoaXMuX3hoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsLCB0aGlzLl94aHIub25wcm9ncmVzcyA9IG51bGwsIHRoaXMuX3hoci5vbmxvYWQgPSBudWxsLCB0aGlzLl94aHIub25lcnJvciA9IG51bGwsIHRoaXMuX3hoci5hYm9ydCgpLCB0aGlzLl94aHIgPSBudWxsKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vblJlYWR5U3RhdGVDaGFuZ2VcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZS50YXJnZXQ7aWYgKDIgPT09IHQucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICBpZiAodm9pZCAwICE9IHQucmVzcG9uc2VVUkwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMuX3NlZWtIYW5kbGVyLnJlbW92ZVVSTFBhcmFtZXRlcnModC5yZXNwb25zZVVSTCk7dC5yZXNwb25zZVVSTCAhPT0gdGhpcy5fY3VycmVudFJlcXVlc3RVUkwgJiYgbiAhPT0gdGhpcy5fY3VycmVudFJlZGlyZWN0ZWRVUkwgJiYgKHRoaXMuX2N1cnJlbnRSZWRpcmVjdGVkVVJMID0gbiwgdGhpcy5fb25VUkxSZWRpcmVjdCAmJiB0aGlzLl9vblVSTFJlZGlyZWN0KG4pKTtcbiAgICAgICAgICAgICAgfWlmICh0LnN0YXR1cyA+PSAyMDAgJiYgdC5zdGF0dXMgPD0gMjk5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3dhaXRGb3JUb3RhbExlbmd0aCkgcmV0dXJuO3RoaXMuX3N0YXR1cyA9IF8uTG9hZGVyU3RhdHVzLmtCdWZmZXJpbmc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXR1cyA9IF8uTG9hZGVyU3RhdHVzLmtFcnJvciwgIXRoaXMuX29uRXJyb3IpIHRocm93IG5ldyBtLlJ1bnRpbWVFeGNlcHRpb24oXCJSYW5nZUxvYWRlcjogSHR0cCBjb2RlIGludmFsaWQsIFwiICsgdC5zdGF0dXMgKyBcIiBcIiArIHQuc3RhdHVzVGV4dCk7dGhpcy5fb25FcnJvcihfLkxvYWRlckVycm9ycy5IVFRQX1NUQVRVU19DT0RFX0lOVkFMSUQsIHsgY29kZTogdC5zdGF0dXMsIG1zZzogdC5zdGF0dXNUZXh0IH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25Qcm9ncmVzc1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXR1cyAhPT0gXy5Mb2FkZXJTdGF0dXMua0Vycm9yKSB7XG4gICAgICAgICAgICAgIGlmIChudWxsID09PSB0aGlzLl9jb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSAhMTtpZiAodGhpcy5fd2FpdEZvclRvdGFsTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl93YWl0Rm9yVG90YWxMZW5ndGggPSAhMSwgdGhpcy5fdG90YWxMZW5ndGhSZWNlaXZlZCA9ICEwLCB0ID0gITA7dmFyIG4gPSBlLnRvdGFsO3RoaXMuX2ludGVybmFsQWJvcnQoKSwgbnVsbCAhPSBuICYgMCAhPT0gbiAmJiAodGhpcy5fdG90YWxMZW5ndGggPSBuKTtcbiAgICAgICAgICAgICAgICB9aWYgKC0xID09PSB0aGlzLl9yYW5nZS50byA/IHRoaXMuX2NvbnRlbnRMZW5ndGggPSB0aGlzLl90b3RhbExlbmd0aCAtIHRoaXMuX3JhbmdlLmZyb20gOiB0aGlzLl9jb250ZW50TGVuZ3RoID0gdGhpcy5fcmFuZ2UudG8gLSB0aGlzLl9yYW5nZS5mcm9tICsgMSwgdCkgcmV0dXJuIHZvaWQgdGhpcy5fb3BlblN1YlJhbmdlKCk7dGhpcy5fb25Db250ZW50TGVuZ3RoS25vd24gJiYgdGhpcy5fb25Db250ZW50TGVuZ3RoS25vd24odGhpcy5fY29udGVudExlbmd0aCk7XG4gICAgICAgICAgICAgIH12YXIgaSA9IGUubG9hZGVkIC0gdGhpcy5fbGFzdFRpbWVMb2FkZWQ7dGhpcy5fbGFzdFRpbWVMb2FkZWQgPSBlLmxvYWRlZCwgdGhpcy5fc3BlZWRTYW1wbGVyLmFkZEJ5dGVzKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX25vcm1hbGl6ZVNwZWVkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMuX2NodW5rU2l6ZUtCTGlzdCxcbiAgICAgICAgICAgICAgICBuID0gdC5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgIHIgPSAwLFxuICAgICAgICAgICAgICAgIHMgPSBuO2lmIChlIDwgdFswXSkgcmV0dXJuIHRbMF07Zm9yICg7IHIgPD0gczspIHtcbiAgICAgICAgICAgICAgaWYgKChpID0gciArIE1hdGguZmxvb3IoKHMgLSByKSAvIDIpKSA9PT0gbiB8fCBlID49IHRbaV0gJiYgZSA8IHRbaSArIDFdKSByZXR1cm4gdFtpXTt0W2ldIDwgZSA/IHIgPSBpICsgMSA6IHMgPSBpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbkxvYWRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0dXMgIT09IF8uTG9hZGVyU3RhdHVzLmtFcnJvcikge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fd2FpdEZvclRvdGFsTGVuZ3RoKSByZXR1cm4gdm9pZCAodGhpcy5fd2FpdEZvclRvdGFsTGVuZ3RoID0gITEpO3RoaXMuX2xhc3RUaW1lTG9hZGVkID0gMDt2YXIgdCA9IHRoaXMuX3NwZWVkU2FtcGxlci5sYXN0U2Vjb25kS0JwcztpZiAoMCA9PT0gdCAmJiArK3RoaXMuX3plcm9TcGVlZENodW5rQ291bnQgPj0gMyAmJiAodCA9IHRoaXMuX3NwZWVkU2FtcGxlci5jdXJyZW50S0JwcyksIDAgIT09IHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMuX25vcm1hbGl6ZVNwZWVkKHQpO3RoaXMuX2N1cnJlbnRTcGVlZE5vcm1hbGl6ZWQgIT09IG4gJiYgKHRoaXMuX2N1cnJlbnRTcGVlZE5vcm1hbGl6ZWQgPSBuLCB0aGlzLl9jdXJyZW50Q2h1bmtTaXplS0IgPSBuKTtcbiAgICAgICAgICAgICAgfXZhciBpID0gZS50YXJnZXQucmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICByID0gdGhpcy5fcmFuZ2UuZnJvbSArIHRoaXMuX3JlY2VpdmVkTGVuZ3RoO3RoaXMuX3JlY2VpdmVkTGVuZ3RoICs9IGkuYnl0ZUxlbmd0aDt2YXIgcyA9ICExO251bGwgIT0gdGhpcy5fY29udGVudExlbmd0aCAmJiB0aGlzLl9yZWNlaXZlZExlbmd0aCA8IHRoaXMuX2NvbnRlbnRMZW5ndGggPyB0aGlzLl9vcGVuU3ViUmFuZ2UoKSA6IHMgPSAhMCwgdGhpcy5fb25EYXRhQXJyaXZhbCAmJiB0aGlzLl9vbkRhdGFBcnJpdmFsKGksIHIsIHRoaXMuX3JlY2VpdmVkTGVuZ3RoKSwgcyAmJiAodGhpcy5fc3RhdHVzID0gXy5Mb2FkZXJTdGF0dXMua0NvbXBsZXRlLCB0aGlzLl9vbkNvbXBsZXRlICYmIHRoaXMuX29uQ29tcGxldGUodGhpcy5fcmFuZ2UuZnJvbSwgdGhpcy5fcmFuZ2UuZnJvbSArIHRoaXMuX3JlY2VpdmVkTGVuZ3RoIC0gMSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29uWGhyRXJyb3JcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IF8uTG9hZGVyU3RhdHVzLmtFcnJvcjt2YXIgdCA9IDAsXG4gICAgICAgICAgICAgICAgbiA9IG51bGw7aWYgKHRoaXMuX2NvbnRlbnRMZW5ndGggJiYgdGhpcy5fcmVjZWl2ZWRMZW5ndGggPiAwICYmIHRoaXMuX3JlY2VpdmVkTGVuZ3RoIDwgdGhpcy5fY29udGVudExlbmd0aCA/ICh0ID0gXy5Mb2FkZXJFcnJvcnMuRUFSTFlfRU9GLCBuID0geyBjb2RlOiAtMSwgbXNnOiBcIlJhbmdlTG9hZGVyIG1lZXQgRWFybHktRW9mXCIgfSkgOiAodCA9IF8uTG9hZGVyRXJyb3JzLkVYQ0VQVElPTiwgbiA9IHsgY29kZTogLTEsIG1zZzogZS5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgXCIgKyBlLnR5cGUgfSksICF0aGlzLl9vbkVycm9yKSB0aHJvdyBuZXcgbS5SdW50aW1lRXhjZXB0aW9uKG4ubXNnKTt0aGlzLl9vbkVycm9yKHQsIG4pO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiY3VycmVudFNwZWVkXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NwZWVkU2FtcGxlci5sYXN0U2Vjb25kS0JwcztcbiAgICAgICAgICB9IH1dKSwgdDtcbiAgICAgIH0oXy5CYXNlTG9hZGVyKTtuLmRlZmF1bHQgPSBwO1xuICAgIH0sIHsgXCIuLi91dGlscy9leGNlcHRpb24uanNcIjogNDAsIFwiLi4vdXRpbHMvbG9nZ2VyLmpzXCI6IDQxLCBcIi4vbG9hZGVyLmpzXCI6IDI0LCBcIi4vc3BlZWQtc2FtcGxlci5qc1wiOiAyNyB9XSwgMzI6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9O1xuICAgICAgfWZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICB9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgcyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gX3R5cGVvZihTeW1ib2wuaXRlcmF0b3IpID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZSk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlKTtcbiAgICAgIH0sXG4gICAgICAgICAgYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRbbl07aS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1yZXR1cm4gZnVuY3Rpb24gKHQsIG4sIGkpIHtcbiAgICAgICAgICByZXR1cm4gbiAmJiBlKHQucHJvdG90eXBlLCBuKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICB9O1xuICAgICAgfSgpLFxuICAgICAgICAgIG8gPSBlKFwiZXZlbnRzXCIpLFxuICAgICAgICAgIHUgPSBpKG8pLFxuICAgICAgICAgIGwgPSBlKFwiLi4vdXRpbHMvbG9nZ2VyLmpzXCIpLFxuICAgICAgICAgIGQgPSBpKGwpLFxuICAgICAgICAgIGggPSBlKFwiLi4vdXRpbHMvYnJvd3Nlci5qc1wiKSxcbiAgICAgICAgICBmID0gaShoKSxcbiAgICAgICAgICBjID0gZShcIi4vcGxheWVyLWV2ZW50cy5qc1wiKSxcbiAgICAgICAgICBfID0gaShjKSxcbiAgICAgICAgICBtID0gZShcIi4uL2NvcmUvdHJhbnNtdXhlci5qc1wiKSxcbiAgICAgICAgICBwID0gaShtKSxcbiAgICAgICAgICB2ID0gZShcIi4uL2NvcmUvdHJhbnNtdXhpbmctZXZlbnRzLmpzXCIpLFxuICAgICAgICAgIGcgPSBpKHYpLFxuICAgICAgICAgIHkgPSBlKFwiLi4vY29yZS9tc2UtY29udHJvbGxlci5qc1wiKSxcbiAgICAgICAgICBFID0gaSh5KSxcbiAgICAgICAgICBiID0gZShcIi4uL2NvcmUvbXNlLWV2ZW50cy5qc1wiKSxcbiAgICAgICAgICBTID0gaShiKSxcbiAgICAgICAgICBrID0gZShcIi4vcGxheWVyLWVycm9ycy5qc1wiKSxcbiAgICAgICAgICBMID0gZShcIi4uL2NvbmZpZy5qc1wiKSxcbiAgICAgICAgICBSID0gZShcIi4uL3V0aWxzL2V4Y2VwdGlvbi5qc1wiKSxcbiAgICAgICAgICBBID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKHQsIG4pIHtcbiAgICAgICAgICBpZiAocih0aGlzLCBlKSwgdGhpcy5UQUcgPSBcIkZsdlBsYXllclwiLCB0aGlzLl90eXBlID0gXCJGbHZQbGF5ZXJcIiwgdGhpcy5fZW1pdHRlciA9IG5ldyB1LmRlZmF1bHQoKSwgdGhpcy5fY29uZmlnID0gKDAsIEwuY3JlYXRlRGVmYXVsdENvbmZpZykoKSwgXCJvYmplY3RcIiA9PT0gKHZvaWQgMCA9PT0gbiA/IFwidW5kZWZpbmVkXCIgOiBzKG4pKSAmJiBPYmplY3QuYXNzaWduKHRoaXMuX2NvbmZpZywgbiksIFwiZmx2XCIgIT09IHQudHlwZS50b0xvd2VyQ2FzZSgpKSB0aHJvdyBuZXcgUi5JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24oXCJGbHZQbGF5ZXIgcmVxdWlyZXMgYW4gZmx2IE1lZGlhRGF0YVNvdXJjZSBpbnB1dCFcIik7ITAgPT09IHQuaXNMaXZlICYmICh0aGlzLl9jb25maWcuaXNMaXZlID0gITApLCB0aGlzLmUgPSB7IG9udkxvYWRlZE1ldGFkYXRhOiB0aGlzLl9vbnZMb2FkZWRNZXRhZGF0YS5iaW5kKHRoaXMpLCBvbnZTZWVraW5nOiB0aGlzLl9vbnZTZWVraW5nLmJpbmQodGhpcyksIG9udkNhblBsYXk6IHRoaXMuX29udkNhblBsYXkuYmluZCh0aGlzKSwgb252U3RhbGxlZDogdGhpcy5fb252U3RhbGxlZC5iaW5kKHRoaXMpLCBvbnZQcm9ncmVzczogdGhpcy5fb252UHJvZ3Jlc3MuYmluZCh0aGlzKSB9LCBzZWxmLnBlcmZvcm1hbmNlICYmIHNlbGYucGVyZm9ybWFuY2Uubm93ID8gdGhpcy5fbm93ID0gc2VsZi5wZXJmb3JtYW5jZS5ub3cuYmluZChzZWxmLnBlcmZvcm1hbmNlKSA6IHRoaXMuX25vdyA9IERhdGUubm93LCB0aGlzLl9wZW5kaW5nU2Vla1RpbWUgPSBudWxsLCB0aGlzLl9yZXF1ZXN0U2V0VGltZSA9ICExLCB0aGlzLl9zZWVrcG9pbnRSZWNvcmQgPSBudWxsLCB0aGlzLl9wcm9ncmVzc0NoZWNrZXIgPSBudWxsLCB0aGlzLl9tZWRpYURhdGFTb3VyY2UgPSB0LCB0aGlzLl9tZWRpYUVsZW1lbnQgPSBudWxsLCB0aGlzLl9tc2VjdGwgPSBudWxsLCB0aGlzLl90cmFuc211eGVyID0gbnVsbCwgdGhpcy5fbXNlU291cmNlT3BlbmVkID0gITEsIHRoaXMuX2hhc1BlbmRpbmdMb2FkID0gITEsIHRoaXMuX3JlY2VpdmVkQ2FuUGxheSA9ICExLCB0aGlzLl9tZWRpYUluZm8gPSBudWxsLCB0aGlzLl9zdGF0aXN0aWNzSW5mbyA9IG51bGw7dmFyIGkgPSBmLmRlZmF1bHQuY2hyb21lICYmIChmLmRlZmF1bHQudmVyc2lvbi5tYWpvciA8IDUwIHx8IDUwID09PSBmLmRlZmF1bHQudmVyc2lvbi5tYWpvciAmJiBmLmRlZmF1bHQudmVyc2lvbi5idWlsZCA8IDI2NjEpO3RoaXMuX2Fsd2F5c1NlZWtLZXlmcmFtZSA9ICEhKGkgfHwgZi5kZWZhdWx0Lm1zZWRnZSB8fCBmLmRlZmF1bHQubXNpZSksIHRoaXMuX2Fsd2F5c1NlZWtLZXlmcmFtZSAmJiAodGhpcy5fY29uZmlnLmFjY3VyYXRlU2VlayA9ICExKTtcbiAgICAgICAgfXJldHVybiBhKGUsIFt7IGtleTogXCJkZXN0cm95XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIG51bGwgIT0gdGhpcy5fcHJvZ3Jlc3NDaGVja2VyICYmICh3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9wcm9ncmVzc0NoZWNrZXIpLCB0aGlzLl9wcm9ncmVzc0NoZWNrZXIgPSBudWxsKSwgdGhpcy5fdHJhbnNtdXhlciAmJiB0aGlzLnVubG9hZCgpLCB0aGlzLl9tZWRpYUVsZW1lbnQgJiYgdGhpcy5kZXRhY2hNZWRpYUVsZW1lbnQoKSwgdGhpcy5lID0gbnVsbCwgdGhpcy5fbWVkaWFEYXRhU291cmNlID0gbnVsbCwgdGhpcy5fZW1pdHRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKSwgdGhpcy5fZW1pdHRlciA9IG51bGw7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvblwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzO2UgPT09IF8uZGVmYXVsdC5NRURJQV9JTkZPID8gbnVsbCAhPSB0aGlzLl9tZWRpYUluZm8gJiYgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG4uX2VtaXR0ZXIuZW1pdChfLmRlZmF1bHQuTUVESUFfSU5GTywgbi5tZWRpYUluZm8pO1xuICAgICAgICAgICAgfSkgOiBlID09PSBfLmRlZmF1bHQuU1RBVElTVElDU19JTkZPICYmIG51bGwgIT0gdGhpcy5fc3RhdGlzdGljc0luZm8gJiYgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG4uX2VtaXR0ZXIuZW1pdChfLmRlZmF1bHQuU1RBVElTVElDU19JTkZPLCBuLnN0YXRpc3RpY3NJbmZvKTtcbiAgICAgICAgICAgIH0pLCB0aGlzLl9lbWl0dGVyLmFkZExpc3RlbmVyKGUsIHQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwib2ZmXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGUsIHQpO1xuICAgICAgICAgIH0gfSwge1xuICAgICAgICAgIGtleTogXCJhdHRhY2hNZWRpYUVsZW1lbnRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztpZiAodGhpcy5fbWVkaWFFbGVtZW50ID0gZSwgZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkbWV0YWRhdGFcIiwgdGhpcy5lLm9udkxvYWRlZE1ldGFkYXRhKSwgZS5hZGRFdmVudExpc3RlbmVyKFwic2Vla2luZ1wiLCB0aGlzLmUub252U2Vla2luZyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgdGhpcy5lLm9udkNhblBsYXkpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGFsbGVkXCIsIHRoaXMuZS5vbnZTdGFsbGVkKSwgZS5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgdGhpcy5lLm9udlByb2dyZXNzKSwgdGhpcy5fbXNlY3RsID0gbmV3IEUuZGVmYXVsdCh0aGlzLl9jb25maWcpLCB0aGlzLl9tc2VjdGwub24oUy5kZWZhdWx0LlVQREFURV9FTkQsIHRoaXMuX29ubXNlVXBkYXRlRW5kLmJpbmQodGhpcykpLCB0aGlzLl9tc2VjdGwub24oUy5kZWZhdWx0LkJVRkZFUl9GVUxMLCB0aGlzLl9vbm1zZUJ1ZmZlckZ1bGwuYmluZCh0aGlzKSksIHRoaXMuX21zZWN0bC5vbihTLmRlZmF1bHQuU09VUkNFX09QRU4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdC5fbXNlU291cmNlT3BlbmVkID0gITAsIHQuX2hhc1BlbmRpbmdMb2FkICYmICh0Ll9oYXNQZW5kaW5nTG9hZCA9ICExLCB0LmxvYWQoKSk7XG4gICAgICAgICAgICB9KSwgdGhpcy5fbXNlY3RsLm9uKFMuZGVmYXVsdC5FUlJPUiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdC5fZW1pdHRlci5lbWl0KF8uZGVmYXVsdC5FUlJPUiwgay5FcnJvclR5cGVzLk1FRElBX0VSUk9SLCBrLkVycm9yRGV0YWlscy5NRURJQV9NU0VfRVJST1IsIGUpO1xuICAgICAgICAgICAgfSksIHRoaXMuX21zZWN0bC5hdHRhY2hNZWRpYUVsZW1lbnQoZSksIG51bGwgIT0gdGhpcy5fcGVuZGluZ1NlZWtUaW1lKSB0cnkge1xuICAgICAgICAgICAgICBlLmN1cnJlbnRUaW1lID0gdGhpcy5fcGVuZGluZ1NlZWtUaW1lLCB0aGlzLl9wZW5kaW5nU2Vla1RpbWUgPSBudWxsO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICB9IH0sIHsga2V5OiBcImRldGFjaE1lZGlhRWxlbWVudFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQgJiYgKHRoaXMuX21zZWN0bC5kZXRhY2hNZWRpYUVsZW1lbnQoKSwgdGhpcy5fbWVkaWFFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkZWRtZXRhZGF0YVwiLCB0aGlzLmUub252TG9hZGVkTWV0YWRhdGEpLCB0aGlzLl9tZWRpYUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNlZWtpbmdcIiwgdGhpcy5lLm9udlNlZWtpbmcpLCB0aGlzLl9tZWRpYUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgdGhpcy5lLm9udkNhblBsYXkpLCB0aGlzLl9tZWRpYUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0YWxsZWRcIiwgdGhpcy5lLm9udlN0YWxsZWQpLCB0aGlzLl9tZWRpYUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIHRoaXMuZS5vbnZQcm9ncmVzcyksIHRoaXMuX21lZGlhRWxlbWVudCA9IG51bGwpLCB0aGlzLl9tc2VjdGwgJiYgKHRoaXMuX21zZWN0bC5kZXN0cm95KCksIHRoaXMuX21zZWN0bCA9IG51bGwpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwibG9hZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXM7aWYgKCF0aGlzLl9tZWRpYUVsZW1lbnQpIHRocm93IG5ldyBSLklsbGVnYWxTdGF0ZUV4Y2VwdGlvbihcIkhUTUxNZWRpYUVsZW1lbnQgbXVzdCBiZSBhdHRhY2hlZCBiZWZvcmUgbG9hZCgpIVwiKTtpZiAodGhpcy5fdHJhbnNtdXhlcikgdGhyb3cgbmV3IFIuSWxsZWdhbFN0YXRlRXhjZXB0aW9uKFwiRmx2UGxheWVyLmxvYWQoKSBoYXMgYmVlbiBjYWxsZWQsIHBsZWFzZSBjYWxsIHVubG9hZCgpIGZpcnN0IVwiKTtpZiAoIXRoaXMuX2hhc1BlbmRpbmdMb2FkKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuZGVmZXJMb2FkQWZ0ZXJTb3VyY2VPcGVuICYmICExID09PSB0aGlzLl9tc2VTb3VyY2VPcGVuZWQpIHJldHVybiB2b2lkICh0aGlzLl9oYXNQZW5kaW5nTG9hZCA9ICEwKTt0aGlzLl9tZWRpYUVsZW1lbnQucmVhZHlTdGF0ZSA+IDAgJiYgKHRoaXMuX3JlcXVlc3RTZXRUaW1lID0gITAsIHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZSA9IDApLCB0aGlzLl90cmFuc211eGVyID0gbmV3IHAuZGVmYXVsdCh0aGlzLl9tZWRpYURhdGFTb3VyY2UsIHRoaXMuX2NvbmZpZyksIHRoaXMuX3RyYW5zbXV4ZXIub24oZy5kZWZhdWx0LklOSVRfU0VHTUVOVCwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgICAgICBlLl9tc2VjdGwuYXBwZW5kSW5pdFNlZ21lbnQobik7XG4gICAgICAgICAgICAgIH0pLCB0aGlzLl90cmFuc211eGVyLm9uKGcuZGVmYXVsdC5NRURJQV9TRUdNRU5ULCBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICAgICAgICAgIGlmIChlLl9tc2VjdGwuYXBwZW5kTWVkaWFTZWdtZW50KG4pLCBlLl9jb25maWcubGF6eUxvYWQgJiYgIWUuX2NvbmZpZy5pc0xpdmUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBpID0gZS5fbWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lO24uaW5mby5lbmREdHMgPj0gMWUzICogKGkgKyBlLl9jb25maWcubGF6eUxvYWRNYXhEdXJhdGlvbikgJiYgbnVsbCA9PSBlLl9wcm9ncmVzc0NoZWNrZXIgJiYgKGQuZGVmYXVsdC52KGUuVEFHLCBcIk1heGltdW0gYnVmZmVyaW5nIGR1cmF0aW9uIGV4Y2VlZGVkLCBzdXNwZW5kIHRyYW5zbXV4aW5nIHRhc2tcIiksIGUuX3N1c3BlbmRUcmFuc211eGVyKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksIHRoaXMuX3RyYW5zbXV4ZXIub24oZy5kZWZhdWx0LkxPQURJTkdfQ09NUExFVEUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlLl9tc2VjdGwuZW5kT2ZTdHJlYW0oKSwgZS5fZW1pdHRlci5lbWl0KF8uZGVmYXVsdC5MT0FESU5HX0NPTVBMRVRFKTtcbiAgICAgICAgICAgICAgfSksIHRoaXMuX3RyYW5zbXV4ZXIub24oZy5kZWZhdWx0LlJFQ09WRVJFRF9FQVJMWV9FT0YsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlLl9lbWl0dGVyLmVtaXQoXy5kZWZhdWx0LlJFQ09WRVJFRF9FQVJMWV9FT0YpO1xuICAgICAgICAgICAgICB9KSwgdGhpcy5fdHJhbnNtdXhlci5vbihnLmRlZmF1bHQuSU9fRVJST1IsIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgICAgICAgICAgZS5fZW1pdHRlci5lbWl0KF8uZGVmYXVsdC5FUlJPUiwgay5FcnJvclR5cGVzLk5FVFdPUktfRVJST1IsIHQsIG4pO1xuICAgICAgICAgICAgICB9KSwgdGhpcy5fdHJhbnNtdXhlci5vbihnLmRlZmF1bHQuREVNVVhfRVJST1IsIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgICAgICAgICAgZS5fZW1pdHRlci5lbWl0KF8uZGVmYXVsdC5FUlJPUiwgay5FcnJvclR5cGVzLk1FRElBX0VSUk9SLCB0LCB7IGNvZGU6IC0xLCBtc2c6IG4gfSk7XG4gICAgICAgICAgICAgIH0pLCB0aGlzLl90cmFuc211eGVyLm9uKGcuZGVmYXVsdC5NRURJQV9JTkZPLCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGUuX21lZGlhSW5mbyA9IHQsIGUuX2VtaXR0ZXIuZW1pdChfLmRlZmF1bHQuTUVESUFfSU5GTywgT2JqZWN0LmFzc2lnbih7fSwgdCkpO1xuICAgICAgICAgICAgICB9KSwgdGhpcy5fdHJhbnNtdXhlci5vbihnLmRlZmF1bHQuTUVUQURBVEFfQVJSSVZFRCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBlLl9lbWl0dGVyLmVtaXQoXy5kZWZhdWx0Lk1FVEFEQVRBX0FSUklWRUQsIHQpO1xuICAgICAgICAgICAgICB9KSwgdGhpcy5fdHJhbnNtdXhlci5vbihnLmRlZmF1bHQuU0NSSVBUREFUQV9BUlJJVkVELCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGUuX2VtaXR0ZXIuZW1pdChfLmRlZmF1bHQuU0NSSVBUREFUQV9BUlJJVkVELCB0KTtcbiAgICAgICAgICAgICAgfSksIHRoaXMuX3RyYW5zbXV4ZXIub24oZy5kZWZhdWx0LlNUQVRJU1RJQ1NfSU5GTywgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBlLl9zdGF0aXN0aWNzSW5mbyA9IGUuX2ZpbGxTdGF0aXN0aWNzSW5mbyh0KSwgZS5fZW1pdHRlci5lbWl0KF8uZGVmYXVsdC5TVEFUSVNUSUNTX0lORk8sIE9iamVjdC5hc3NpZ24oe30sIGUuX3N0YXRpc3RpY3NJbmZvKSk7XG4gICAgICAgICAgICAgIH0pLCB0aGlzLl90cmFuc211eGVyLm9uKGcuZGVmYXVsdC5SRUNPTU1FTkRfU0VFS1BPSU5ULCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGUuX21lZGlhRWxlbWVudCAmJiAhZS5fY29uZmlnLmFjY3VyYXRlU2VlayAmJiAoZS5fcmVxdWVzdFNldFRpbWUgPSAhMCwgZS5fbWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lID0gdCAvIDFlMyk7XG4gICAgICAgICAgICAgIH0pLCB0aGlzLl90cmFuc211eGVyLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IH0sIHsga2V5OiBcInVubG9hZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQgJiYgdGhpcy5fbWVkaWFFbGVtZW50LnBhdXNlKCksIHRoaXMuX21zZWN0bCAmJiB0aGlzLl9tc2VjdGwuc2VlaygwKSwgdGhpcy5fdHJhbnNtdXhlciAmJiAodGhpcy5fdHJhbnNtdXhlci5jbG9zZSgpLCB0aGlzLl90cmFuc211eGVyLmRlc3Ryb3koKSwgdGhpcy5fdHJhbnNtdXhlciA9IG51bGwpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwicGxheVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFFbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInBhdXNlXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX21lZGlhRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX2ZpbGxTdGF0aXN0aWNzSW5mb1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgaWYgKGUucGxheWVyVHlwZSA9IHRoaXMuX3R5cGUsICEodGhpcy5fbWVkaWFFbGVtZW50IGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkpIHJldHVybiBlO3ZhciB0ID0gITAsXG4gICAgICAgICAgICAgICAgbiA9IDAsXG4gICAgICAgICAgICAgICAgaSA9IDA7aWYgKHRoaXMuX21lZGlhRWxlbWVudC5nZXRWaWRlb1BsYXliYWNrUXVhbGl0eSkge1xuICAgICAgICAgICAgICB2YXIgciA9IHRoaXMuX21lZGlhRWxlbWVudC5nZXRWaWRlb1BsYXliYWNrUXVhbGl0eSgpO24gPSByLnRvdGFsVmlkZW9GcmFtZXMsIGkgPSByLmRyb3BwZWRWaWRlb0ZyYW1lcztcbiAgICAgICAgICAgIH0gZWxzZSB2b2lkIDAgIT0gdGhpcy5fbWVkaWFFbGVtZW50LndlYmtpdERlY29kZWRGcmFtZUNvdW50ID8gKG4gPSB0aGlzLl9tZWRpYUVsZW1lbnQud2Via2l0RGVjb2RlZEZyYW1lQ291bnQsIGkgPSB0aGlzLl9tZWRpYUVsZW1lbnQud2Via2l0RHJvcHBlZEZyYW1lQ291bnQpIDogdCA9ICExO3JldHVybiB0ICYmIChlLmRlY29kZWRGcmFtZXMgPSBuLCBlLmRyb3BwZWRGcmFtZXMgPSBpKSwgZTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbm1zZVVwZGF0ZUVuZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmxhenlMb2FkICYmICF0aGlzLl9jb25maWcuaXNMaXZlKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGUgPSB0aGlzLl9tZWRpYUVsZW1lbnQuYnVmZmVyZWQsIHQgPSB0aGlzLl9tZWRpYUVsZW1lbnQuY3VycmVudFRpbWUsIG4gPSAwLCBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGUuc3RhcnQoaSksXG4gICAgICAgICAgICAgICAgICAgIHMgPSBlLmVuZChpKTtpZiAociA8PSB0ICYmIHQgPCBzKSB7XG4gICAgICAgICAgICAgICAgICByLCBuID0gczticmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1uID49IHQgKyB0aGlzLl9jb25maWcubGF6eUxvYWRNYXhEdXJhdGlvbiAmJiBudWxsID09IHRoaXMuX3Byb2dyZXNzQ2hlY2tlciAmJiAoZC5kZWZhdWx0LnYodGhpcy5UQUcsIFwiTWF4aW11bSBidWZmZXJpbmcgZHVyYXRpb24gZXhjZWVkZWQsIHN1c3BlbmQgdHJhbnNtdXhpbmcgdGFza1wiKSwgdGhpcy5fc3VzcGVuZFRyYW5zbXV4ZXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb25tc2VCdWZmZXJGdWxsXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIGQuZGVmYXVsdC52KHRoaXMuVEFHLCBcIk1TRSBTb3VyY2VCdWZmZXIgaXMgZnVsbCwgc3VzcGVuZCB0cmFuc211eGluZyB0YXNrXCIpLCBudWxsID09IHRoaXMuX3Byb2dyZXNzQ2hlY2tlciAmJiB0aGlzLl9zdXNwZW5kVHJhbnNtdXhlcigpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX3N1c3BlbmRUcmFuc211eGVyXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbXV4ZXIgJiYgKHRoaXMuX3RyYW5zbXV4ZXIucGF1c2UoKSwgbnVsbCA9PSB0aGlzLl9wcm9ncmVzc0NoZWNrZXIgJiYgKHRoaXMuX3Byb2dyZXNzQ2hlY2tlciA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLl9jaGVja1Byb2dyZXNzQW5kUmVzdW1lLmJpbmQodGhpcyksIDFlMykpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9jaGVja1Byb2dyZXNzQW5kUmVzdW1lXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSB0aGlzLl9tZWRpYUVsZW1lbnQuY3VycmVudFRpbWUsIHQgPSB0aGlzLl9tZWRpYUVsZW1lbnQuYnVmZmVyZWQsIG4gPSAhMSwgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciByID0gdC5zdGFydChpKSxcbiAgICAgICAgICAgICAgICAgIHMgPSB0LmVuZChpKTtpZiAoZSA+PSByICYmIGUgPCBzKSB7XG4gICAgICAgICAgICAgICAgZSA+PSBzIC0gdGhpcy5fY29uZmlnLmxhenlMb2FkUmVjb3ZlckR1cmF0aW9uICYmIChuID0gITApO2JyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9biAmJiAod2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fcHJvZ3Jlc3NDaGVja2VyKSwgdGhpcy5fcHJvZ3Jlc3NDaGVja2VyID0gbnVsbCwgbiAmJiAoZC5kZWZhdWx0LnYodGhpcy5UQUcsIFwiQ29udGludWUgbG9hZGluZyBmcm9tIHBhdXNlZCBwb3NpdGlvblwiKSwgdGhpcy5fdHJhbnNtdXhlci5yZXN1bWUoKSkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX2lzVGltZXBvaW50QnVmZmVyZWRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSB0aGlzLl9tZWRpYUVsZW1lbnQuYnVmZmVyZWQsIG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICB2YXIgaSA9IHQuc3RhcnQobiksXG4gICAgICAgICAgICAgICAgICByID0gdC5lbmQobik7aWYgKGUgPj0gaSAmJiBlIDwgcikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfXJldHVybiAhMTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9pbnRlcm5hbFNlZWtcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5faXNUaW1lcG9pbnRCdWZmZXJlZChlKSxcbiAgICAgICAgICAgICAgICBuID0gITEsXG4gICAgICAgICAgICAgICAgaSA9IDA7aWYgKGUgPCAxICYmIHRoaXMuX21lZGlhRWxlbWVudC5idWZmZXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHZhciByID0gdGhpcy5fbWVkaWFFbGVtZW50LmJ1ZmZlcmVkLnN0YXJ0KDApOyhyIDwgMSAmJiBlIDwgciB8fCBmLmRlZmF1bHQuc2FmYXJpKSAmJiAobiA9ICEwLCBpID0gZi5kZWZhdWx0LnNhZmFyaSA/IC4xIDogcik7XG4gICAgICAgICAgICB9aWYgKG4pIHRoaXMuX3JlcXVlc3RTZXRUaW1lID0gITAsIHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZSA9IGk7ZWxzZSBpZiAodCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fYWx3YXlzU2Vla0tleWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSB0aGlzLl9tc2VjdGwuZ2V0TmVhcmVzdEtleWZyYW1lKE1hdGguZmxvb3IoMWUzICogZSkpO3RoaXMuX3JlcXVlc3RTZXRUaW1lID0gITAsIHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZSA9IG51bGwgIT0gcyA/IHMuZHRzIC8gMWUzIDogZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuX3JlcXVlc3RTZXRUaW1lID0gITAsIHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZSA9IGU7bnVsbCAhPSB0aGlzLl9wcm9ncmVzc0NoZWNrZXIgJiYgdGhpcy5fY2hlY2tQcm9ncmVzc0FuZFJlc3VtZSgpO1xuICAgICAgICAgICAgfSBlbHNlIG51bGwgIT0gdGhpcy5fcHJvZ3Jlc3NDaGVja2VyICYmICh3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9wcm9ncmVzc0NoZWNrZXIpLCB0aGlzLl9wcm9ncmVzc0NoZWNrZXIgPSBudWxsKSwgdGhpcy5fbXNlY3RsLnNlZWsoZSksIHRoaXMuX3RyYW5zbXV4ZXIuc2VlayhNYXRoLmZsb29yKDFlMyAqIGUpKSwgdGhpcy5fY29uZmlnLmFjY3VyYXRlU2VlayAmJiAodGhpcy5fcmVxdWVzdFNldFRpbWUgPSAhMCwgdGhpcy5fbWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lID0gZSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfY2hlY2tBbmRBcHBseVVuYnVmZmVyZWRTZWVrcG9pbnRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlZWtwb2ludFJlY29yZCkgaWYgKHRoaXMuX3NlZWtwb2ludFJlY29yZC5yZWNvcmRUaW1lIDw9IHRoaXMuX25vdygpIC0gMTAwKSB7XG4gICAgICAgICAgICAgIHZhciBlID0gdGhpcy5fbWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lO3RoaXMuX3NlZWtwb2ludFJlY29yZCA9IG51bGwsIHRoaXMuX2lzVGltZXBvaW50QnVmZmVyZWQoZSkgfHwgKG51bGwgIT0gdGhpcy5fcHJvZ3Jlc3NDaGVja2VyICYmICh3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3Byb2dyZXNzQ2hlY2tlciksIHRoaXMuX3Byb2dyZXNzQ2hlY2tlciA9IG51bGwpLCB0aGlzLl9tc2VjdGwuc2VlayhlKSwgdGhpcy5fdHJhbnNtdXhlci5zZWVrKE1hdGguZmxvb3IoMWUzICogZSkpLCB0aGlzLl9jb25maWcuYWNjdXJhdGVTZWVrICYmICh0aGlzLl9yZXF1ZXN0U2V0VGltZSA9ICEwLCB0aGlzLl9tZWRpYUVsZW1lbnQuY3VycmVudFRpbWUgPSBlKSk7XG4gICAgICAgICAgICB9IGVsc2Ugd2luZG93LnNldFRpbWVvdXQodGhpcy5fY2hlY2tBbmRBcHBseVVuYnVmZmVyZWRTZWVrcG9pbnQuYmluZCh0aGlzKSwgNTApO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX2NoZWNrQW5kUmVzdW1lU3R1Y2tQbGF5YmFja1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9tZWRpYUVsZW1lbnQ7aWYgKGUgfHwgIXRoaXMuX3JlY2VpdmVkQ2FuUGxheSB8fCB0LnJlYWR5U3RhdGUgPCAyKSB7XG4gICAgICAgICAgICAgIHZhciBuID0gdC5idWZmZXJlZDtuLmxlbmd0aCA+IDAgJiYgdC5jdXJyZW50VGltZSA8IG4uc3RhcnQoMCkgJiYgKGQuZGVmYXVsdC53KHRoaXMuVEFHLCBcIlBsYXliYWNrIHNlZW1zIHN0dWNrIGF0IFwiICsgdC5jdXJyZW50VGltZSArIFwiLCBzZWVrIHRvIFwiICsgbi5zdGFydCgwKSksIHRoaXMuX3JlcXVlc3RTZXRUaW1lID0gITAsIHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZSA9IG4uc3RhcnQoMCksIHRoaXMuX21lZGlhRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgdGhpcy5lLm9udlByb2dyZXNzKSk7XG4gICAgICAgICAgICB9IGVsc2UgdGhpcy5fbWVkaWFFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCB0aGlzLmUub252UHJvZ3Jlc3MpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX29udkxvYWRlZE1ldGFkYXRhXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICBudWxsICE9IHRoaXMuX3BlbmRpbmdTZWVrVGltZSAmJiAodGhpcy5fbWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lID0gdGhpcy5fcGVuZGluZ1NlZWtUaW1lLCB0aGlzLl9wZW5kaW5nU2Vla1RpbWUgPSBudWxsKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbnZTZWVraW5nXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZSxcbiAgICAgICAgICAgICAgICBuID0gdGhpcy5fbWVkaWFFbGVtZW50LmJ1ZmZlcmVkO2lmICh0aGlzLl9yZXF1ZXN0U2V0VGltZSkgcmV0dXJuIHZvaWQgKHRoaXMuX3JlcXVlc3RTZXRUaW1lID0gITEpO2lmICh0IDwgMSAmJiBuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSBuLnN0YXJ0KDApO2lmIChpIDwgMSAmJiB0IDwgaSB8fCBmLmRlZmF1bHQuc2FmYXJpKSByZXR1cm4gdGhpcy5fcmVxdWVzdFNldFRpbWUgPSAhMCwgdm9pZCAodGhpcy5fbWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lID0gZi5kZWZhdWx0LnNhZmFyaSA/IC4xIDogaSk7XG4gICAgICAgICAgICB9aWYgKHRoaXMuX2lzVGltZXBvaW50QnVmZmVyZWQodCkpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2Fsd2F5c1NlZWtLZXlmcmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5fbXNlY3RsLmdldE5lYXJlc3RLZXlmcmFtZShNYXRoLmZsb29yKDFlMyAqIHQpKTtudWxsICE9IHIgJiYgKHRoaXMuX3JlcXVlc3RTZXRUaW1lID0gITAsIHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZSA9IHIuZHRzIC8gMWUzKTtcbiAgICAgICAgICAgICAgfXJldHVybiB2b2lkIChudWxsICE9IHRoaXMuX3Byb2dyZXNzQ2hlY2tlciAmJiB0aGlzLl9jaGVja1Byb2dyZXNzQW5kUmVzdW1lKCkpO1xuICAgICAgICAgICAgfXRoaXMuX3NlZWtwb2ludFJlY29yZCA9IHsgc2Vla1BvaW50OiB0LCByZWNvcmRUaW1lOiB0aGlzLl9ub3coKSB9LCB3aW5kb3cuc2V0VGltZW91dCh0aGlzLl9jaGVja0FuZEFwcGx5VW5idWZmZXJlZFNlZWtwb2ludC5iaW5kKHRoaXMpLCA1MCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb252Q2FuUGxheVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVjZWl2ZWRDYW5QbGF5ID0gITAsIHRoaXMuX21lZGlhRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLCB0aGlzLmUub252Q2FuUGxheSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfb252U3RhbGxlZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tBbmRSZXN1bWVTdHVja1BsYXliYWNrKCEwKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbnZQcm9ncmVzc1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tBbmRSZXN1bWVTdHVja1BsYXliYWNrKCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJ0eXBlXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJidWZmZXJlZFwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZWRpYUVsZW1lbnQuYnVmZmVyZWQ7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJkdXJhdGlvblwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZWRpYUVsZW1lbnQuZHVyYXRpb247XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJ2b2x1bWVcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFFbGVtZW50LnZvbHVtZTtcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldChlKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQudm9sdW1lID0gZTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIm11dGVkXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhRWxlbWVudC5tdXRlZDtcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldChlKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQubXV0ZWQgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiY3VycmVudFRpbWVcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFFbGVtZW50ID8gdGhpcy5fbWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lIDogMDtcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldChlKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQgPyB0aGlzLl9pbnRlcm5hbFNlZWsoZSkgOiB0aGlzLl9wZW5kaW5nU2Vla1RpbWUgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwibWVkaWFJbmZvXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX21lZGlhSW5mbyk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJzdGF0aXN0aWNzSW5mb1wiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsID09IHRoaXMuX3N0YXRpc3RpY3NJbmZvICYmICh0aGlzLl9zdGF0aXN0aWNzSW5mbyA9IHt9KSwgdGhpcy5fc3RhdGlzdGljc0luZm8gPSB0aGlzLl9maWxsU3RhdGlzdGljc0luZm8odGhpcy5fc3RhdGlzdGljc0luZm8pLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9zdGF0aXN0aWNzSW5mbyk7XG4gICAgICAgICAgfSB9XSksIGU7XG4gICAgICB9KCk7bi5kZWZhdWx0ID0gQTtcbiAgICB9LCB7IFwiLi4vY29uZmlnLmpzXCI6IDUsIFwiLi4vY29yZS9tc2UtY29udHJvbGxlci5qc1wiOiA5LCBcIi4uL2NvcmUvbXNlLWV2ZW50cy5qc1wiOiAxMCwgXCIuLi9jb3JlL3RyYW5zbXV4ZXIuanNcIjogMTEsIFwiLi4vY29yZS90cmFuc211eGluZy1ldmVudHMuanNcIjogMTMsIFwiLi4vdXRpbHMvYnJvd3Nlci5qc1wiOiAzOSwgXCIuLi91dGlscy9leGNlcHRpb24uanNcIjogNDAsIFwiLi4vdXRpbHMvbG9nZ2VyLmpzXCI6IDQxLCBcIi4vcGxheWVyLWVycm9ycy5qc1wiOiAzNCwgXCIuL3BsYXllci1ldmVudHMuanNcIjogMzUsIGV2ZW50czogMiB9XSwgMzM6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9O1xuICAgICAgfWZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICB9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgcyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gX3R5cGVvZihTeW1ib2wuaXRlcmF0b3IpID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZSk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlKTtcbiAgICAgIH0sXG4gICAgICAgICAgYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRbbl07aS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1yZXR1cm4gZnVuY3Rpb24gKHQsIG4sIGkpIHtcbiAgICAgICAgICByZXR1cm4gbiAmJiBlKHQucHJvdG90eXBlLCBuKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICB9O1xuICAgICAgfSgpLFxuICAgICAgICAgIG8gPSBlKFwiZXZlbnRzXCIpLFxuICAgICAgICAgIHUgPSBpKG8pLFxuICAgICAgICAgIGwgPSBlKFwiLi9wbGF5ZXItZXZlbnRzLmpzXCIpLFxuICAgICAgICAgIGQgPSBpKGwpLFxuICAgICAgICAgIGggPSBlKFwiLi4vY29uZmlnLmpzXCIpLFxuICAgICAgICAgIGYgPSBlKFwiLi4vdXRpbHMvZXhjZXB0aW9uLmpzXCIpLFxuICAgICAgICAgIGMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUodCwgbikge1xuICAgICAgICAgIGlmIChyKHRoaXMsIGUpLCB0aGlzLlRBRyA9IFwiTmF0aXZlUGxheWVyXCIsIHRoaXMuX3R5cGUgPSBcIk5hdGl2ZVBsYXllclwiLCB0aGlzLl9lbWl0dGVyID0gbmV3IHUuZGVmYXVsdCgpLCB0aGlzLl9jb25maWcgPSAoMCwgaC5jcmVhdGVEZWZhdWx0Q29uZmlnKSgpLCBcIm9iamVjdFwiID09PSAodm9pZCAwID09PSBuID8gXCJ1bmRlZmluZWRcIiA6IHMobikpICYmIE9iamVjdC5hc3NpZ24odGhpcy5fY29uZmlnLCBuKSwgXCJmbHZcIiA9PT0gdC50eXBlLnRvTG93ZXJDYXNlKCkpIHRocm93IG5ldyBmLkludmFsaWRBcmd1bWVudEV4Y2VwdGlvbihcIk5hdGl2ZVBsYXllciBkb2VzJ3Qgc3VwcG9ydCBmbHYgTWVkaWFEYXRhU291cmNlIGlucHV0IVwiKTtpZiAodC5oYXNPd25Qcm9wZXJ0eShcInNlZ21lbnRzXCIpKSB0aHJvdyBuZXcgZi5JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24oXCJOYXRpdmVQbGF5ZXIoXCIgKyB0LnR5cGUgKyBcIikgZG9lc24ndCBzdXBwb3J0IG11bHRpcGFydCBwbGF5YmFjayFcIik7dGhpcy5lID0geyBvbnZMb2FkZWRNZXRhZGF0YTogdGhpcy5fb252TG9hZGVkTWV0YWRhdGEuYmluZCh0aGlzKSB9LCB0aGlzLl9wZW5kaW5nU2Vla1RpbWUgPSBudWxsLCB0aGlzLl9zdGF0aXN0aWNzUmVwb3J0ZXIgPSBudWxsLCB0aGlzLl9tZWRpYURhdGFTb3VyY2UgPSB0LCB0aGlzLl9tZWRpYUVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9cmV0dXJuIGEoZSwgW3sga2V5OiBcImRlc3Ryb3lcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fbWVkaWFFbGVtZW50ICYmICh0aGlzLnVubG9hZCgpLCB0aGlzLmRldGFjaE1lZGlhRWxlbWVudCgpKSwgdGhpcy5lID0gbnVsbCwgdGhpcy5fbWVkaWFEYXRhU291cmNlID0gbnVsbCwgdGhpcy5fZW1pdHRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoKSwgdGhpcy5fZW1pdHRlciA9IG51bGw7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvblwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzO2UgPT09IGQuZGVmYXVsdC5NRURJQV9JTkZPID8gbnVsbCAhPSB0aGlzLl9tZWRpYUVsZW1lbnQgJiYgMCAhPT0gdGhpcy5fbWVkaWFFbGVtZW50LnJlYWR5U3RhdGUgJiYgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG4uX2VtaXR0ZXIuZW1pdChkLmRlZmF1bHQuTUVESUFfSU5GTywgbi5tZWRpYUluZm8pO1xuICAgICAgICAgICAgfSkgOiBlID09PSBkLmRlZmF1bHQuU1RBVElTVElDU19JTkZPICYmIG51bGwgIT0gdGhpcy5fbWVkaWFFbGVtZW50ICYmIDAgIT09IHRoaXMuX21lZGlhRWxlbWVudC5yZWFkeVN0YXRlICYmIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBuLl9lbWl0dGVyLmVtaXQoZC5kZWZhdWx0LlNUQVRJU1RJQ1NfSU5GTywgbi5zdGF0aXN0aWNzSW5mbyk7XG4gICAgICAgICAgICB9KSwgdGhpcy5fZW1pdHRlci5hZGRMaXN0ZW5lcihlLCB0KTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIm9mZlwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgdGhpcy5fZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihlLCB0KTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImF0dGFjaE1lZGlhRWxlbWVudFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21lZGlhRWxlbWVudCA9IGUsIGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsIHRoaXMuZS5vbnZMb2FkZWRNZXRhZGF0YSksIG51bGwgIT0gdGhpcy5fcGVuZGluZ1NlZWtUaW1lKSB0cnkge1xuICAgICAgICAgICAgICBlLmN1cnJlbnRUaW1lID0gdGhpcy5fcGVuZGluZ1NlZWtUaW1lLCB0aGlzLl9wZW5kaW5nU2Vla1RpbWUgPSBudWxsO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICB9IH0sIHsga2V5OiBcImRldGFjaE1lZGlhRWxlbWVudFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQgJiYgKHRoaXMuX21lZGlhRWxlbWVudC5zcmMgPSBcIlwiLCB0aGlzLl9tZWRpYUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpLCB0aGlzLl9tZWRpYUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsIHRoaXMuZS5vbnZMb2FkZWRNZXRhZGF0YSksIHRoaXMuX21lZGlhRWxlbWVudCA9IG51bGwpLCBudWxsICE9IHRoaXMuX3N0YXRpc3RpY3NSZXBvcnRlciAmJiAod2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fc3RhdGlzdGljc1JlcG9ydGVyKSwgdGhpcy5fc3RhdGlzdGljc1JlcG9ydGVyID0gbnVsbCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJsb2FkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fbWVkaWFFbGVtZW50KSB0aHJvdyBuZXcgZi5JbGxlZ2FsU3RhdGVFeGNlcHRpb24oXCJIVE1MTWVkaWFFbGVtZW50IG11c3QgYmUgYXR0YWNoZWQgYmVmb3JlIGxvYWQoKSFcIik7dGhpcy5fbWVkaWFFbGVtZW50LnNyYyA9IHRoaXMuX21lZGlhRGF0YVNvdXJjZS51cmwsIHRoaXMuX21lZGlhRWxlbWVudC5yZWFkeVN0YXRlID4gMCAmJiAodGhpcy5fbWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lID0gMCksIHRoaXMuX21lZGlhRWxlbWVudC5wcmVsb2FkID0gXCJhdXRvXCIsIHRoaXMuX21lZGlhRWxlbWVudC5sb2FkKCksIHRoaXMuX3N0YXRpc3RpY3NSZXBvcnRlciA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLl9yZXBvcnRTdGF0aXN0aWNzSW5mby5iaW5kKHRoaXMpLCB0aGlzLl9jb25maWcuc3RhdGlzdGljc0luZm9SZXBvcnRJbnRlcnZhbCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJ1bmxvYWRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdGhpcy5fbWVkaWFFbGVtZW50ICYmICh0aGlzLl9tZWRpYUVsZW1lbnQuc3JjID0gXCJcIiwgdGhpcy5fbWVkaWFFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKSksIG51bGwgIT0gdGhpcy5fc3RhdGlzdGljc1JlcG9ydGVyICYmICh3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9zdGF0aXN0aWNzUmVwb3J0ZXIpLCB0aGlzLl9zdGF0aXN0aWNzUmVwb3J0ZXIgPSBudWxsKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInBsYXlcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJwYXVzZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vbnZMb2FkZWRNZXRhZGF0YVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgbnVsbCAhPSB0aGlzLl9wZW5kaW5nU2Vla1RpbWUgJiYgKHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZSA9IHRoaXMuX3BlbmRpbmdTZWVrVGltZSwgdGhpcy5fcGVuZGluZ1NlZWtUaW1lID0gbnVsbCksIHRoaXMuX2VtaXR0ZXIuZW1pdChkLmRlZmF1bHQuTUVESUFfSU5GTywgdGhpcy5tZWRpYUluZm8pO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX3JlcG9ydFN0YXRpc3RpY3NJbmZvXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChkLmRlZmF1bHQuU1RBVElTVElDU19JTkZPLCB0aGlzLnN0YXRpc3RpY3NJbmZvKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInR5cGVcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImJ1ZmZlcmVkXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhRWxlbWVudC5idWZmZXJlZDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImR1cmF0aW9uXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhRWxlbWVudC5kdXJhdGlvbjtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInZvbHVtZVwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZWRpYUVsZW1lbnQudm9sdW1lO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21lZGlhRWxlbWVudC52b2x1bWUgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwibXV0ZWRcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFFbGVtZW50Lm11dGVkO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21lZGlhRWxlbWVudC5tdXRlZCA9IGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJjdXJyZW50VGltZVwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZWRpYUVsZW1lbnQgPyB0aGlzLl9tZWRpYUVsZW1lbnQuY3VycmVudFRpbWUgOiAwO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21lZGlhRWxlbWVudCA/IHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZSA9IGUgOiB0aGlzLl9wZW5kaW5nU2Vla1RpbWUgPSBlO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwibWVkaWFJbmZvXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl9tZWRpYUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50ID8gXCJhdWRpby9cIiA6IFwidmlkZW8vXCIsXG4gICAgICAgICAgICAgICAgdCA9IHsgbWltZVR5cGU6IGUgKyB0aGlzLl9tZWRpYURhdGFTb3VyY2UudHlwZSB9O3JldHVybiB0aGlzLl9tZWRpYUVsZW1lbnQgJiYgKHQuZHVyYXRpb24gPSBNYXRoLmZsb29yKDFlMyAqIHRoaXMuX21lZGlhRWxlbWVudC5kdXJhdGlvbiksIHRoaXMuX21lZGlhRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQgJiYgKHQud2lkdGggPSB0aGlzLl9tZWRpYUVsZW1lbnQudmlkZW9XaWR0aCwgdC5oZWlnaHQgPSB0aGlzLl9tZWRpYUVsZW1lbnQudmlkZW9IZWlnaHQpKSwgdDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInN0YXRpc3RpY3NJbmZvXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgdmFyIGUgPSB7IHBsYXllclR5cGU6IHRoaXMuX3R5cGUsIHVybDogdGhpcy5fbWVkaWFEYXRhU291cmNlLnVybCB9O2lmICghKHRoaXMuX21lZGlhRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpKSByZXR1cm4gZTt2YXIgdCA9ICEwLFxuICAgICAgICAgICAgICAgIG4gPSAwLFxuICAgICAgICAgICAgICAgIGkgPSAwO2lmICh0aGlzLl9tZWRpYUVsZW1lbnQuZ2V0VmlkZW9QbGF5YmFja1F1YWxpdHkpIHtcbiAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLl9tZWRpYUVsZW1lbnQuZ2V0VmlkZW9QbGF5YmFja1F1YWxpdHkoKTtuID0gci50b3RhbFZpZGVvRnJhbWVzLCBpID0gci5kcm9wcGVkVmlkZW9GcmFtZXM7XG4gICAgICAgICAgICB9IGVsc2Ugdm9pZCAwICE9IHRoaXMuX21lZGlhRWxlbWVudC53ZWJraXREZWNvZGVkRnJhbWVDb3VudCA/IChuID0gdGhpcy5fbWVkaWFFbGVtZW50LndlYmtpdERlY29kZWRGcmFtZUNvdW50LCBpID0gdGhpcy5fbWVkaWFFbGVtZW50LndlYmtpdERyb3BwZWRGcmFtZUNvdW50KSA6IHQgPSAhMTtyZXR1cm4gdCAmJiAoZS5kZWNvZGVkRnJhbWVzID0gbiwgZS5kcm9wcGVkRnJhbWVzID0gaSksIGU7XG4gICAgICAgICAgfSB9XSksIGU7XG4gICAgICB9KCk7bi5kZWZhdWx0ID0gYztcbiAgICB9LCB7IFwiLi4vY29uZmlnLmpzXCI6IDUsIFwiLi4vdXRpbHMvZXhjZXB0aW9uLmpzXCI6IDQwLCBcIi4vcGxheWVyLWV2ZW50cy5qc1wiOiAzNSwgZXZlbnRzOiAyIH1dLCAzNDogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSksIG4uRXJyb3JEZXRhaWxzID0gbi5FcnJvclR5cGVzID0gdm9pZCAwO3ZhciBpID0gZShcIi4uL2lvL2xvYWRlci5qc1wiKSxcbiAgICAgICAgICByID0gZShcIi4uL2RlbXV4L2RlbXV4LWVycm9ycy5qc1wiKSxcbiAgICAgICAgICBzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9O1xuICAgICAgfShyKTtuLkVycm9yVHlwZXMgPSB7IE5FVFdPUktfRVJST1I6IFwiTmV0d29ya0Vycm9yXCIsIE1FRElBX0VSUk9SOiBcIk1lZGlhRXJyb3JcIiwgT1RIRVJfRVJST1I6IFwiT3RoZXJFcnJvclwiIH0sIG4uRXJyb3JEZXRhaWxzID0geyBORVRXT1JLX0VYQ0VQVElPTjogaS5Mb2FkZXJFcnJvcnMuRVhDRVBUSU9OLCBORVRXT1JLX1NUQVRVU19DT0RFX0lOVkFMSUQ6IGkuTG9hZGVyRXJyb3JzLkhUVFBfU1RBVFVTX0NPREVfSU5WQUxJRCwgTkVUV09SS19USU1FT1VUOiBpLkxvYWRlckVycm9ycy5DT05ORUNUSU5HX1RJTUVPVVQsIE5FVFdPUktfVU5SRUNPVkVSQUJMRV9FQVJMWV9FT0Y6IGkuTG9hZGVyRXJyb3JzLlVOUkVDT1ZFUkFCTEVfRUFSTFlfRU9GLCBNRURJQV9NU0VfRVJST1I6IFwiTWVkaWFNU0VFcnJvclwiLCBNRURJQV9GT1JNQVRfRVJST1I6IHMuZGVmYXVsdC5GT1JNQVRfRVJST1IsIE1FRElBX0ZPUk1BVF9VTlNVUFBPUlRFRDogcy5kZWZhdWx0LkZPUk1BVF9VTlNVUFBPUlRFRCwgTUVESUFfQ09ERUNfVU5TVVBQT1JURUQ6IHMuZGVmYXVsdC5DT0RFQ19VTlNVUFBPUlRFRCB9O1xuICAgIH0sIHsgXCIuLi9kZW11eC9kZW11eC1lcnJvcnMuanNcIjogMTYsIFwiLi4vaW8vbG9hZGVyLmpzXCI6IDI0IH1dLCAzNTogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIGkgPSB7IEVSUk9SOiBcImVycm9yXCIsIExPQURJTkdfQ09NUExFVEU6IFwibG9hZGluZ19jb21wbGV0ZVwiLCBSRUNPVkVSRURfRUFSTFlfRU9GOiBcInJlY292ZXJlZF9lYXJseV9lb2ZcIiwgTUVESUFfSU5GTzogXCJtZWRpYV9pbmZvXCIsIE1FVEFEQVRBX0FSUklWRUQ6IFwibWV0YWRhdGFfYXJyaXZlZFwiLCBTQ1JJUFREQVRBX0FSUklWRUQ6IFwic2NyaXB0ZGF0YV9hcnJpdmVkXCIsIFNUQVRJU1RJQ1NfSU5GTzogXCJzdGF0aXN0aWNzX2luZm9cIiB9O24uZGVmYXVsdCA9IGk7XG4gICAgfSwge31dLCAzNjogW2Z1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICB9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRbbl07aS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1yZXR1cm4gZnVuY3Rpb24gKHQsIG4sIGkpIHtcbiAgICAgICAgICByZXR1cm4gbiAmJiBlKHQucHJvdG90eXBlLCBuKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICB9O1xuICAgICAgfSgpLFxuICAgICAgICAgIHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgaSh0aGlzLCBlKTtcbiAgICAgICAgfXJldHVybiByKGUsIG51bGwsIFt7IGtleTogXCJnZXRTaWxlbnRGcmFtZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgaWYgKFwibXA0YS40MC4yXCIgPT09IGUpIHtcbiAgICAgICAgICAgICAgaWYgKDEgPT09IHQpIHJldHVybiBuZXcgVWludDhBcnJheShbMCwgMjAwLCAwLCAxMjgsIDM1LCAxMjhdKTtpZiAoMiA9PT0gdCkgcmV0dXJuIG5ldyBVaW50OEFycmF5KFszMywgMCwgNzMsIDE0NCwgMiwgMjUsIDAsIDM1LCAxMjhdKTtpZiAoMyA9PT0gdCkgcmV0dXJuIG5ldyBVaW50OEFycmF5KFswLCAyMDAsIDAsIDEyOCwgMzIsIDEzMiwgMSwgMzgsIDY0LCA4LCAxMDAsIDAsIDE0Ml0pO2lmICg0ID09PSB0KSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzAsIDIwMCwgMCwgMTI4LCAzMiwgMTMyLCAxLCAzOCwgNjQsIDgsIDEwMCwgMCwgMTI4LCA0NCwgMTI4LCA4LCAyLCA1Nl0pO2lmICg1ID09PSB0KSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzAsIDIwMCwgMCwgMTI4LCAzMiwgMTMyLCAxLCAzOCwgNjQsIDgsIDEwMCwgMCwgMTMwLCA0OCwgNCwgMTUzLCAwLCAzMywgMTQ0LCAyLCA1Nl0pO2lmICg2ID09PSB0KSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzAsIDIwMCwgMCwgMTI4LCAzMiwgMTMyLCAxLCAzOCwgNjQsIDgsIDEwMCwgMCwgMTMwLCA0OCwgNCwgMTUzLCAwLCAzMywgMTQ0LCAyLCAwLCAxNzgsIDAsIDMyLCA4LCAyMjRdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICgxID09PSB0KSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzEsIDY0LCAzNCwgMTI4LCAxNjMsIDc4LCAyMzAsIDEyOCwgMTg2LCA4LCAwLCAwLCAwLCAyOCwgNiwgMjQxLCAxOTMsIDEwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTRdKTtpZiAoMiA9PT0gdCkgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsxLCA2NCwgMzQsIDEyOCwgMTYzLCA5NCwgMjMwLCAxMjgsIDE4NiwgOCwgMCwgMCwgMCwgMCwgMTQ5LCAwLCA2LCAyNDEsIDE2MSwgMTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTRdKTtpZiAoMyA9PT0gdCkgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsxLCA2NCwgMzQsIDEyOCwgMTYzLCA5NCwgMjMwLCAxMjgsIDE4NiwgOCwgMCwgMCwgMCwgMCwgMTQ5LCAwLCA2LCAyNDEsIDE2MSwgMTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTAsIDkwLCA5MCwgOTRdKTtcbiAgICAgICAgICAgIH1yZXR1cm4gbnVsbDtcbiAgICAgICAgICB9IH1dKSwgZTtcbiAgICAgIH0oKTtuLmRlZmF1bHQgPSBzO1xuICAgIH0sIHt9XSwgMzc6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIHIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0W25dO2kuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9cmV0dXJuIGZ1bmN0aW9uICh0LCBuLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIG4gJiYgZSh0LnByb3RvdHlwZSwgbiksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgfTtcbiAgICAgIH0oKSxcbiAgICAgICAgICBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgIGkodGhpcywgZSk7XG4gICAgICAgIH1yZXR1cm4gcihlLCBudWxsLCBbeyBrZXk6IFwiaW5pdFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICBlLnR5cGVzID0geyBhdmMxOiBbXSwgYXZjQzogW10sIGJ0cnQ6IFtdLCBkaW5mOiBbXSwgZHJlZjogW10sIGVzZHM6IFtdLCBmdHlwOiBbXSwgaGRscjogW10sIG1kYXQ6IFtdLCBtZGhkOiBbXSwgbWRpYTogW10sIG1maGQ6IFtdLCBtaW5mOiBbXSwgbW9vZjogW10sIG1vb3Y6IFtdLCBtcDRhOiBbXSwgbXZleDogW10sIG12aGQ6IFtdLCBzZHRwOiBbXSwgc3RibDogW10sIHN0Y286IFtdLCBzdHNjOiBbXSwgc3RzZDogW10sIHN0c3o6IFtdLCBzdHRzOiBbXSwgdGZkdDogW10sIHRmaGQ6IFtdLCB0cmFmOiBbXSwgdHJhazogW10sIHRydW46IFtdLCB0cmV4OiBbXSwgdGtoZDogW10sIHZtaGQ6IFtdLCBzbWhkOiBbXSwgXCIubXAzXCI6IFtdIH07Zm9yICh2YXIgdCBpbiBlLnR5cGVzKSB7XG4gICAgICAgICAgICAgIGUudHlwZXMuaGFzT3duUHJvcGVydHkodCkgJiYgKGUudHlwZXNbdF0gPSBbdC5jaGFyQ29kZUF0KDApLCB0LmNoYXJDb2RlQXQoMSksIHQuY2hhckNvZGVBdCgyKSwgdC5jaGFyQ29kZUF0KDMpXSk7XG4gICAgICAgICAgICB9dmFyIG4gPSBlLmNvbnN0YW50cyA9IHt9O24uRlRZUCA9IG5ldyBVaW50OEFycmF5KFsxMDUsIDExNSwgMTExLCAxMDksIDAsIDAsIDAsIDEsIDEwNSwgMTE1LCAxMTEsIDEwOSwgOTcsIDExOCwgOTksIDQ5XSksIG4uU1RTRF9QUkVGSVggPSBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0pLCBuLlNUVFMgPSBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0pLCBuLlNUU0MgPSBuLlNUQ08gPSBuLlNUVFMsIG4uU1RTWiA9IG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSksIG4uSERMUl9WSURFTyA9IG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMTgsIDEwNSwgMTAwLCAxMDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDg2LCAxMDUsIDEwMCwgMTAxLCAxMTEsIDcyLCA5NywgMTEwLCAxMDAsIDEwOCwgMTAxLCAxMTQsIDBdKSwgbi5IRExSX0FVRElPID0gbmV3IFVpbnQ4QXJyYXkoWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDExNSwgMTExLCAxMTcsIDExMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgODMsIDExMSwgMTE3LCAxMTAsIDEwMCwgNzIsIDk3LCAxMTAsIDEwMCwgMTA4LCAxMDEsIDExNCwgMF0pLCBuLkRSRUYgPSBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMTIsIDExNywgMTE0LCAxMDgsIDMyLCAwLCAwLCAwLCAxXSksIG4uU01IRCA9IG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSksIG4uVk1IRCA9IG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJib3hcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSA4LCBuID0gbnVsbCwgaSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIHIgPSBpLmxlbmd0aCwgcyA9IDA7IHMgPCByOyBzKyspIHtcbiAgICAgICAgICAgICAgdCArPSBpW3NdLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICB9biA9IG5ldyBVaW50OEFycmF5KHQpLCBuWzBdID0gdCA+Pj4gMjQgJiAyNTUsIG5bMV0gPSB0ID4+PiAxNiAmIDI1NSwgblsyXSA9IHQgPj4+IDggJiAyNTUsIG5bM10gPSAyNTUgJiB0LCBuLnNldChlLCA0KTtmb3IgKHZhciBhID0gOCwgbyA9IDA7IG8gPCByOyBvKyspIHtcbiAgICAgICAgICAgICAgbi5zZXQoaVtvXSwgYSksIGEgKz0gaVtvXS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgfXJldHVybiBuO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiZ2VuZXJhdGVJbml0U2VnbWVudFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCkge1xuICAgICAgICAgICAgdmFyIG4gPSBlLmJveChlLnR5cGVzLmZ0eXAsIGUuY29uc3RhbnRzLkZUWVApLFxuICAgICAgICAgICAgICAgIGkgPSBlLm1vb3YodCksXG4gICAgICAgICAgICAgICAgciA9IG5ldyBVaW50OEFycmF5KG4uYnl0ZUxlbmd0aCArIGkuYnl0ZUxlbmd0aCk7cmV0dXJuIHIuc2V0KG4sIDApLCByLnNldChpLCBuLmJ5dGVMZW5ndGgpLCByO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwibW9vdlwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCkge1xuICAgICAgICAgICAgdmFyIG4gPSBlLm12aGQodC50aW1lc2NhbGUsIHQuZHVyYXRpb24pLFxuICAgICAgICAgICAgICAgIGkgPSBlLnRyYWsodCksXG4gICAgICAgICAgICAgICAgciA9IGUubXZleCh0KTtyZXR1cm4gZS5ib3goZS50eXBlcy5tb292LCBuLCBpLCByKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIm12aGRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgICAgIHJldHVybiBlLmJveChlLnR5cGVzLm12aGQsIG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCB0ID4+PiAyNCAmIDI1NSwgdCA+Pj4gMTYgJiAyNTUsIHQgPj4+IDggJiAyNTUsIDI1NSAmIHQsIG4gPj4+IDI0ICYgMjU1LCBuID4+PiAxNiAmIDI1NSwgbiA+Pj4gOCAmIDI1NSwgMjU1ICYgbiwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNjQsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDI1NSwgMjU1LCAyNTUsIDI1NV0pKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInRyYWtcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmJveChlLnR5cGVzLnRyYWssIGUudGtoZCh0KSwgZS5tZGlhKHQpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInRraGRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gdC5pZCxcbiAgICAgICAgICAgICAgICBpID0gdC5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICByID0gdC5wcmVzZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgcyA9IHQucHJlc2VudEhlaWdodDtyZXR1cm4gZS5ib3goZS50eXBlcy50a2hkLCBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgNywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgbiA+Pj4gMjQgJiAyNTUsIG4gPj4+IDE2ICYgMjU1LCBuID4+PiA4ICYgMjU1LCAyNTUgJiBuLCAwLCAwLCAwLCAwLCBpID4+PiAyNCAmIDI1NSwgaSA+Pj4gMTYgJiAyNTUsIGkgPj4+IDggJiAyNTUsIDI1NSAmIGksIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDY0LCAwLCAwLCAwLCByID4+PiA4ICYgMjU1LCAyNTUgJiByLCAwLCAwLCBzID4+PiA4ICYgMjU1LCAyNTUgJiBzLCAwLCAwXSkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwibWRpYVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCkge1xuICAgICAgICAgICAgcmV0dXJuIGUuYm94KGUudHlwZXMubWRpYSwgZS5tZGhkKHQpLCBlLmhkbHIodCksIGUubWluZih0KSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJtZGhkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHQudGltZXNjYWxlLFxuICAgICAgICAgICAgICAgIGkgPSB0LmR1cmF0aW9uO3JldHVybiBlLmJveChlLnR5cGVzLm1kaGQsIG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBuID4+PiAyNCAmIDI1NSwgbiA+Pj4gMTYgJiAyNTUsIG4gPj4+IDggJiAyNTUsIDI1NSAmIG4sIGkgPj4+IDI0ICYgMjU1LCBpID4+PiAxNiAmIDI1NSwgaSA+Pj4gOCAmIDI1NSwgMjU1ICYgaSwgODUsIDE5NiwgMCwgMF0pKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImhkbHJcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gbnVsbDtyZXR1cm4gbiA9IFwiYXVkaW9cIiA9PT0gdC50eXBlID8gZS5jb25zdGFudHMuSERMUl9BVURJTyA6IGUuY29uc3RhbnRzLkhETFJfVklERU8sIGUuYm94KGUudHlwZXMuaGRsciwgbik7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJtaW5mXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IG51bGw7cmV0dXJuIG4gPSBcImF1ZGlvXCIgPT09IHQudHlwZSA/IGUuYm94KGUudHlwZXMuc21oZCwgZS5jb25zdGFudHMuU01IRCkgOiBlLmJveChlLnR5cGVzLnZtaGQsIGUuY29uc3RhbnRzLlZNSEQpLCBlLmJveChlLnR5cGVzLm1pbmYsIG4sIGUuZGluZigpLCBlLnN0YmwodCkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiZGluZlwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5ib3goZS50eXBlcy5kaW5mLCBlLmJveChlLnR5cGVzLmRyZWYsIGUuY29uc3RhbnRzLkRSRUYpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInN0YmxcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmJveChlLnR5cGVzLnN0YmwsIGUuc3RzZCh0KSwgZS5ib3goZS50eXBlcy5zdHRzLCBlLmNvbnN0YW50cy5TVFRTKSwgZS5ib3goZS50eXBlcy5zdHNjLCBlLmNvbnN0YW50cy5TVFNDKSwgZS5ib3goZS50eXBlcy5zdHN6LCBlLmNvbnN0YW50cy5TVFNaKSwgZS5ib3goZS50eXBlcy5zdGNvLCBlLmNvbnN0YW50cy5TVENPKSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJzdHNkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJhdWRpb1wiID09PSB0LnR5cGUgPyBcIm1wM1wiID09PSB0LmNvZGVjID8gZS5ib3goZS50eXBlcy5zdHNkLCBlLmNvbnN0YW50cy5TVFNEX1BSRUZJWCwgZS5tcDModCkpIDogZS5ib3goZS50eXBlcy5zdHNkLCBlLmNvbnN0YW50cy5TVFNEX1BSRUZJWCwgZS5tcDRhKHQpKSA6IGUuYm94KGUudHlwZXMuc3RzZCwgZS5jb25zdGFudHMuU1RTRF9QUkVGSVgsIGUuYXZjMSh0KSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJtcDNcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gdC5jaGFubmVsQ291bnQsXG4gICAgICAgICAgICAgICAgaSA9IHQuYXVkaW9TYW1wbGVSYXRlLFxuICAgICAgICAgICAgICAgIHIgPSBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgbiwgMCwgMTYsIDAsIDAsIDAsIDAsIGkgPj4+IDggJiAyNTUsIDI1NSAmIGksIDAsIDBdKTtyZXR1cm4gZS5ib3goZS50eXBlc1tcIi5tcDNcIl0sIHIpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwibXA0YVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0LmNoYW5uZWxDb3VudCxcbiAgICAgICAgICAgICAgICBpID0gdC5hdWRpb1NhbXBsZVJhdGUsXG4gICAgICAgICAgICAgICAgciA9IG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBuLCAwLCAxNiwgMCwgMCwgMCwgMCwgaSA+Pj4gOCAmIDI1NSwgMjU1ICYgaSwgMCwgMF0pO3JldHVybiBlLmJveChlLnR5cGVzLm1wNGEsIHIsIGUuZXNkcyh0KSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJlc2RzXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHQuY29uZmlnIHx8IFtdLFxuICAgICAgICAgICAgICAgIGkgPSBuLmxlbmd0aCxcbiAgICAgICAgICAgICAgICByID0gbmV3IFVpbnQ4QXJyYXkoWzAsIDAsIDAsIDAsIDMsIDIzICsgaSwgMCwgMSwgMCwgNCwgMTUgKyBpLCA2NCwgMjEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDVdLmNvbmNhdChbaV0pLmNvbmNhdChuKS5jb25jYXQoWzYsIDEsIDJdKSk7cmV0dXJuIGUuYm94KGUudHlwZXMuZXNkcywgcik7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJhdmMxXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHQuYXZjYyxcbiAgICAgICAgICAgICAgICBpID0gdC5jb2RlY1dpZHRoLFxuICAgICAgICAgICAgICAgIHIgPSB0LmNvZGVjSGVpZ2h0LFxuICAgICAgICAgICAgICAgIHMgPSBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgaSA+Pj4gOCAmIDI1NSwgMjU1ICYgaSwgciA+Pj4gOCAmIDI1NSwgMjU1ICYgciwgMCwgNzIsIDAsIDAsIDAsIDcyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxMCwgMTIwLCAxMTMsIDExMywgNDcsIDEwMiwgMTA4LCAxMTgsIDQ2LCAxMDYsIDExNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMjQsIDI1NSwgMjU1XSk7cmV0dXJuIGUuYm94KGUudHlwZXMuYXZjMSwgcywgZS5ib3goZS50eXBlcy5hdmNDLCBuKSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJtdmV4XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICByZXR1cm4gZS5ib3goZS50eXBlcy5tdmV4LCBlLnRyZXgodCkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwidHJleFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0LmlkLFxuICAgICAgICAgICAgICAgIGkgPSBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMCwgbiA+Pj4gMjQgJiAyNTUsIG4gPj4+IDE2ICYgMjU1LCBuID4+PiA4ICYgMjU1LCAyNTUgJiBuLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxXSk7cmV0dXJuIGUuYm94KGUudHlwZXMudHJleCwgaSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJtb29mXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0LCBuKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5ib3goZS50eXBlcy5tb29mLCBlLm1maGQodC5zZXF1ZW5jZU51bWJlciksIGUudHJhZih0LCBuKSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJtZmhkXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAwLCB0ID4+PiAyNCAmIDI1NSwgdCA+Pj4gMTYgJiAyNTUsIHQgPj4+IDggJiAyNTUsIDI1NSAmIHRdKTtyZXR1cm4gZS5ib3goZS50eXBlcy5tZmhkLCBuKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInRyYWZcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgICAgIHZhciBpID0gdC5pZCxcbiAgICAgICAgICAgICAgICByID0gZS5ib3goZS50eXBlcy50ZmhkLCBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMCwgaSA+Pj4gMjQgJiAyNTUsIGkgPj4+IDE2ICYgMjU1LCBpID4+PiA4ICYgMjU1LCAyNTUgJiBpXSkpLFxuICAgICAgICAgICAgICAgIHMgPSBlLmJveChlLnR5cGVzLnRmZHQsIG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAwLCBuID4+PiAyNCAmIDI1NSwgbiA+Pj4gMTYgJiAyNTUsIG4gPj4+IDggJiAyNTUsIDI1NSAmIG5dKSksXG4gICAgICAgICAgICAgICAgYSA9IGUuc2R0cCh0KSxcbiAgICAgICAgICAgICAgICBvID0gZS50cnVuKHQsIGEuYnl0ZUxlbmd0aCArIDE2ICsgMTYgKyA4ICsgMTYgKyA4ICsgOCk7cmV0dXJuIGUuYm94KGUudHlwZXMudHJhZiwgciwgcywgbywgYSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJzZHRwXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gdC5zYW1wbGVzIHx8IFtdLCBpID0gbi5sZW5ndGgsIHIgPSBuZXcgVWludDhBcnJheSg0ICsgaSksIHMgPSAwOyBzIDwgaTsgcysrKSB7XG4gICAgICAgICAgICAgIHZhciBhID0gbltzXS5mbGFncztyW3MgKyA0XSA9IGEuaXNMZWFkaW5nIDw8IDYgfCBhLmRlcGVuZHNPbiA8PCA0IHwgYS5pc0RlcGVuZGVkT24gPDwgMiB8IGEuaGFzUmVkdW5kYW5jeTtcbiAgICAgICAgICAgIH1yZXR1cm4gZS5ib3goZS50eXBlcy5zZHRwLCByKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInRydW5cIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgICAgIHZhciBpID0gdC5zYW1wbGVzIHx8IFtdLFxuICAgICAgICAgICAgICAgIHIgPSBpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBzID0gMTIgKyAxNiAqIHIsXG4gICAgICAgICAgICAgICAgYSA9IG5ldyBVaW50OEFycmF5KHMpO24gKz0gOCArIHMsIGEuc2V0KFswLCAwLCAxNSwgMSwgciA+Pj4gMjQgJiAyNTUsIHIgPj4+IDE2ICYgMjU1LCByID4+PiA4ICYgMjU1LCAyNTUgJiByLCBuID4+PiAyNCAmIDI1NSwgbiA+Pj4gMTYgJiAyNTUsIG4gPj4+IDggJiAyNTUsIDI1NSAmIG5dLCAwKTtmb3IgKHZhciBvID0gMDsgbyA8IHI7IG8rKykge1xuICAgICAgICAgICAgICB2YXIgdSA9IGlbb10uZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICBsID0gaVtvXS5zaXplLFxuICAgICAgICAgICAgICAgICAgZCA9IGlbb10uZmxhZ3MsXG4gICAgICAgICAgICAgICAgICBoID0gaVtvXS5jdHM7YS5zZXQoW3UgPj4+IDI0ICYgMjU1LCB1ID4+PiAxNiAmIDI1NSwgdSA+Pj4gOCAmIDI1NSwgMjU1ICYgdSwgbCA+Pj4gMjQgJiAyNTUsIGwgPj4+IDE2ICYgMjU1LCBsID4+PiA4ICYgMjU1LCAyNTUgJiBsLCBkLmlzTGVhZGluZyA8PCAyIHwgZC5kZXBlbmRzT24sIGQuaXNEZXBlbmRlZE9uIDw8IDYgfCBkLmhhc1JlZHVuZGFuY3kgPDwgNCB8IGQuaXNOb25TeW5jLCAwLCAwLCBoID4+PiAyNCAmIDI1NSwgaCA+Pj4gMTYgJiAyNTUsIGggPj4+IDggJiAyNTUsIDI1NSAmIGhdLCAxMiArIDE2ICogbyk7XG4gICAgICAgICAgICB9cmV0dXJuIGUuYm94KGUudHlwZXMudHJ1biwgYSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJtZGF0XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICByZXR1cm4gZS5ib3goZS50eXBlcy5tZGF0LCB0KTtcbiAgICAgICAgICB9IH1dKSwgZTtcbiAgICAgIH0oKTtzLmluaXQoKSwgbi5kZWZhdWx0ID0gcztcbiAgICB9LCB7fV0sIDM4OiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlKSB7XG4gICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTtcbiAgICAgIH1mdW5jdGlvbiByKGUsIHQpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0W25dO2kuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9cmV0dXJuIGZ1bmN0aW9uICh0LCBuLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIG4gJiYgZSh0LnByb3RvdHlwZSwgbiksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgfTtcbiAgICAgIH0oKSxcbiAgICAgICAgICBhID0gZShcIi4uL3V0aWxzL2xvZ2dlci5qc1wiKSxcbiAgICAgICAgICBvID0gaShhKSxcbiAgICAgICAgICB1ID0gZShcIi4vbXA0LWdlbmVyYXRvci5qc1wiKSxcbiAgICAgICAgICBsID0gaSh1KSxcbiAgICAgICAgICBkID0gZShcIi4vYWFjLXNpbGVudC5qc1wiKSxcbiAgICAgICAgICBoID0gaShkKSxcbiAgICAgICAgICBmID0gZShcIi4uL3V0aWxzL2Jyb3dzZXIuanNcIiksXG4gICAgICAgICAgYyA9IGkoZiksXG4gICAgICAgICAgXyA9IGUoXCIuLi9jb3JlL21lZGlhLXNlZ21lbnQtaW5mby5qc1wiKSxcbiAgICAgICAgICBtID0gZShcIi4uL3V0aWxzL2V4Y2VwdGlvbi5qc1wiKSxcbiAgICAgICAgICBwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKHQpIHtcbiAgICAgICAgICByKHRoaXMsIGUpLCB0aGlzLlRBRyA9IFwiTVA0UmVtdXhlclwiLCB0aGlzLl9jb25maWcgPSB0LCB0aGlzLl9pc0xpdmUgPSAhMCA9PT0gdC5pc0xpdmUsIHRoaXMuX2R0c0Jhc2UgPSAtMSwgdGhpcy5fZHRzQmFzZUluaXRlZCA9ICExLCB0aGlzLl9hdWRpb0R0c0Jhc2UgPSAxIC8gMCwgdGhpcy5fdmlkZW9EdHNCYXNlID0gMSAvIDAsIHRoaXMuX2F1ZGlvTmV4dER0cyA9IHZvaWQgMCwgdGhpcy5fdmlkZW9OZXh0RHRzID0gdm9pZCAwLCB0aGlzLl9hdWRpb1N0YXNoZWRMYXN0U2FtcGxlID0gbnVsbCwgdGhpcy5fdmlkZW9TdGFzaGVkTGFzdFNhbXBsZSA9IG51bGwsIHRoaXMuX2F1ZGlvTWV0YSA9IG51bGwsIHRoaXMuX3ZpZGVvTWV0YSA9IG51bGwsIHRoaXMuX2F1ZGlvU2VnbWVudEluZm9MaXN0ID0gbmV3IF8uTWVkaWFTZWdtZW50SW5mb0xpc3QoXCJhdWRpb1wiKSwgdGhpcy5fdmlkZW9TZWdtZW50SW5mb0xpc3QgPSBuZXcgXy5NZWRpYVNlZ21lbnRJbmZvTGlzdChcInZpZGVvXCIpLCB0aGlzLl9vbkluaXRTZWdtZW50ID0gbnVsbCwgdGhpcy5fb25NZWRpYVNlZ21lbnQgPSBudWxsLCB0aGlzLl9mb3JjZUZpcnN0SURSID0gISghYy5kZWZhdWx0LmNocm9tZSB8fCAhKGMuZGVmYXVsdC52ZXJzaW9uLm1ham9yIDwgNTAgfHwgNTAgPT09IGMuZGVmYXVsdC52ZXJzaW9uLm1ham9yICYmIGMuZGVmYXVsdC52ZXJzaW9uLmJ1aWxkIDwgMjY2MSkpLCB0aGlzLl9maWxsU2lsZW50QWZ0ZXJTZWVrID0gYy5kZWZhdWx0Lm1zZWRnZSB8fCBjLmRlZmF1bHQubXNpZSwgdGhpcy5fbXAzVXNlTXBlZ0F1ZGlvID0gIWMuZGVmYXVsdC5maXJlZm94LCB0aGlzLl9maWxsQXVkaW9UaW1lc3RhbXBHYXAgPSB0aGlzLl9jb25maWcuZml4QXVkaW9UaW1lc3RhbXBHYXA7XG4gICAgICAgIH1yZXR1cm4gcyhlLCBbeyBrZXk6IFwiZGVzdHJveVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLl9kdHNCYXNlID0gLTEsIHRoaXMuX2R0c0Jhc2VJbml0ZWQgPSAhMSwgdGhpcy5fYXVkaW9NZXRhID0gbnVsbCwgdGhpcy5fdmlkZW9NZXRhID0gbnVsbCwgdGhpcy5fYXVkaW9TZWdtZW50SW5mb0xpc3QuY2xlYXIoKSwgdGhpcy5fYXVkaW9TZWdtZW50SW5mb0xpc3QgPSBudWxsLCB0aGlzLl92aWRlb1NlZ21lbnRJbmZvTGlzdC5jbGVhcigpLCB0aGlzLl92aWRlb1NlZ21lbnRJbmZvTGlzdCA9IG51bGwsIHRoaXMuX29uSW5pdFNlZ21lbnQgPSBudWxsLCB0aGlzLl9vbk1lZGlhU2VnbWVudCA9IG51bGw7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJiaW5kRGF0YVNvdXJjZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUub25EYXRhQXZhaWxhYmxlID0gdGhpcy5yZW11eC5iaW5kKHRoaXMpLCBlLm9uVHJhY2tNZXRhZGF0YSA9IHRoaXMuX29uVHJhY2tNZXRhZGF0YVJlY2VpdmVkLmJpbmQodGhpcyksIHRoaXM7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJpbnNlcnREaXNjb250aW51aXR5XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvTmV4dER0cyA9IHRoaXMuX3ZpZGVvTmV4dER0cyA9IHZvaWQgMDtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInNlZWtcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvU3Rhc2hlZExhc3RTYW1wbGUgPSBudWxsLCB0aGlzLl92aWRlb1N0YXNoZWRMYXN0U2FtcGxlID0gbnVsbCwgdGhpcy5fdmlkZW9TZWdtZW50SW5mb0xpc3QuY2xlYXIoKSwgdGhpcy5fYXVkaW9TZWdtZW50SW5mb0xpc3QuY2xlYXIoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcInJlbXV4XCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX29uTWVkaWFTZWdtZW50KSB0aHJvdyBuZXcgbS5JbGxlZ2FsU3RhdGVFeGNlcHRpb24oXCJNUDRSZW11eGVyOiBvbk1lZGlhU2VnbWVudCBjYWxsYmFjayBtdXN0IGJlIHNwZWNpZmljZWQhXCIpO3RoaXMuX2R0c0Jhc2VJbml0ZWQgfHwgdGhpcy5fY2FsY3VsYXRlRHRzQmFzZShlLCB0KSwgdGhpcy5fcmVtdXhWaWRlbyh0KSwgdGhpcy5fcmVtdXhBdWRpbyhlKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9vblRyYWNrTWV0YWRhdGFSZWNlaXZlZFwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgdmFyIG4gPSBudWxsLFxuICAgICAgICAgICAgICAgIGkgPSBcIm1wNFwiLFxuICAgICAgICAgICAgICAgIHIgPSB0LmNvZGVjO2lmIChcImF1ZGlvXCIgPT09IGUpIHRoaXMuX2F1ZGlvTWV0YSA9IHQsIFwibXAzXCIgPT09IHQuY29kZWMgJiYgdGhpcy5fbXAzVXNlTXBlZ0F1ZGlvID8gKGkgPSBcIm1wZWdcIiwgciA9IFwiXCIsIG4gPSBuZXcgVWludDhBcnJheSgpKSA6IG4gPSBsLmRlZmF1bHQuZ2VuZXJhdGVJbml0U2VnbWVudCh0KTtlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKFwidmlkZW9cIiAhPT0gZSkgcmV0dXJuO3RoaXMuX3ZpZGVvTWV0YSA9IHQsIG4gPSBsLmRlZmF1bHQuZ2VuZXJhdGVJbml0U2VnbWVudCh0KTtcbiAgICAgICAgICAgIH1pZiAoIXRoaXMuX29uSW5pdFNlZ21lbnQpIHRocm93IG5ldyBtLklsbGVnYWxTdGF0ZUV4Y2VwdGlvbihcIk1QNFJlbXV4ZXI6IG9uSW5pdFNlZ21lbnQgY2FsbGJhY2sgbXVzdCBiZSBzcGVjaWZpZWQhXCIpO3RoaXMuX29uSW5pdFNlZ21lbnQoZSwgeyB0eXBlOiBlLCBkYXRhOiBuLmJ1ZmZlciwgY29kZWM6IHIsIGNvbnRhaW5lcjogZSArIFwiL1wiICsgaSwgbWVkaWFEdXJhdGlvbjogdC5kdXJhdGlvbiB9KTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcIl9jYWxjdWxhdGVEdHNCYXNlXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlLCB0KSB7XG4gICAgICAgICAgICB0aGlzLl9kdHNCYXNlSW5pdGVkIHx8IChlLnNhbXBsZXMgJiYgZS5zYW1wbGVzLmxlbmd0aCAmJiAodGhpcy5fYXVkaW9EdHNCYXNlID0gZS5zYW1wbGVzWzBdLmR0cyksIHQuc2FtcGxlcyAmJiB0LnNhbXBsZXMubGVuZ3RoICYmICh0aGlzLl92aWRlb0R0c0Jhc2UgPSB0LnNhbXBsZXNbMF0uZHRzKSwgdGhpcy5fZHRzQmFzZSA9IE1hdGgubWluKHRoaXMuX2F1ZGlvRHRzQmFzZSwgdGhpcy5fdmlkZW9EdHNCYXNlKSwgdGhpcy5fZHRzQmFzZUluaXRlZCA9ICEwKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImZsdXNoU3Rhc2hlZFNhbXBsZXNcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLl92aWRlb1N0YXNoZWRMYXN0U2FtcGxlLFxuICAgICAgICAgICAgICAgIHQgPSB0aGlzLl9hdWRpb1N0YXNoZWRMYXN0U2FtcGxlLFxuICAgICAgICAgICAgICAgIG4gPSB7IHR5cGU6IFwidmlkZW9cIiwgaWQ6IDEsIHNlcXVlbmNlTnVtYmVyOiAwLCBzYW1wbGVzOiBbXSwgbGVuZ3RoOiAwIH07bnVsbCAhPSBlICYmIChuLnNhbXBsZXMucHVzaChlKSwgbi5sZW5ndGggPSBlLmxlbmd0aCk7dmFyIGkgPSB7IHR5cGU6IFwiYXVkaW9cIiwgaWQ6IDIsIHNlcXVlbmNlTnVtYmVyOiAwLCBzYW1wbGVzOiBbXSwgbGVuZ3RoOiAwIH07bnVsbCAhPSB0ICYmIChpLnNhbXBsZXMucHVzaCh0KSwgaS5sZW5ndGggPSB0Lmxlbmd0aCksIHRoaXMuX3ZpZGVvU3Rhc2hlZExhc3RTYW1wbGUgPSBudWxsLCB0aGlzLl9hdWRpb1N0YXNoZWRMYXN0U2FtcGxlID0gbnVsbCwgdGhpcy5fcmVtdXhWaWRlbyhuLCAhMCksIHRoaXMuX3JlbXV4QXVkaW8oaSwgITApO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX3JlbXV4QXVkaW9cIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQpIHtcbiAgICAgICAgICAgIGlmIChudWxsICE9IHRoaXMuX2F1ZGlvTWV0YSkge1xuICAgICAgICAgICAgICB2YXIgbiA9IGUsXG4gICAgICAgICAgICAgICAgICBpID0gbi5zYW1wbGVzLFxuICAgICAgICAgICAgICAgICAgciA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgIHMgPSAtMSxcbiAgICAgICAgICAgICAgICAgIGEgPSAtMSxcbiAgICAgICAgICAgICAgICAgIHUgPSB0aGlzLl9hdWRpb01ldGEucmVmU2FtcGxlRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICBkID0gXCJtcDNcIiA9PT0gdGhpcy5fYXVkaW9NZXRhLmNvZGVjICYmIHRoaXMuX21wM1VzZU1wZWdBdWRpbyxcbiAgICAgICAgICAgICAgICAgIGYgPSB0aGlzLl9kdHNCYXNlSW5pdGVkICYmIHZvaWQgMCA9PT0gdGhpcy5fYXVkaW9OZXh0RHRzLFxuICAgICAgICAgICAgICAgICAgbSA9ICExO2lmIChpICYmIDAgIT09IGkubGVuZ3RoICYmICgxICE9PSBpLmxlbmd0aCB8fCB0KSkge1xuICAgICAgICAgICAgICAgIHZhciBwID0gMCxcbiAgICAgICAgICAgICAgICAgICAgdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGcgPSAwO2QgPyAocCA9IDAsIGcgPSBuLmxlbmd0aCkgOiAocCA9IDgsIGcgPSA4ICsgbi5sZW5ndGgpO3ZhciB5ID0gbnVsbDtpZiAoaS5sZW5ndGggPiAxICYmICh5ID0gaS5wb3AoKSwgZyAtPSB5Lmxlbmd0aCksIG51bGwgIT0gdGhpcy5fYXVkaW9TdGFzaGVkTGFzdFNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIEUgPSB0aGlzLl9hdWRpb1N0YXNoZWRMYXN0U2FtcGxlO3RoaXMuX2F1ZGlvU3Rhc2hlZExhc3RTYW1wbGUgPSBudWxsLCBpLnVuc2hpZnQoRSksIGcgKz0gRS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfW51bGwgIT0geSAmJiAodGhpcy5fYXVkaW9TdGFzaGVkTGFzdFNhbXBsZSA9IHkpO3ZhciBiID0gaVswXS5kdHMgLSB0aGlzLl9kdHNCYXNlO2lmICh0aGlzLl9hdWRpb05leHREdHMpIHIgPSBiIC0gdGhpcy5fYXVkaW9OZXh0RHRzO2Vsc2UgaWYgKHRoaXMuX2F1ZGlvU2VnbWVudEluZm9MaXN0LmlzRW1wdHkoKSkgciA9IDAsIHRoaXMuX2ZpbGxTaWxlbnRBZnRlclNlZWsgJiYgIXRoaXMuX3ZpZGVvU2VnbWVudEluZm9MaXN0LmlzRW1wdHkoKSAmJiBcIm1wM1wiICE9PSB0aGlzLl9hdWRpb01ldGEub3JpZ2luYWxDb2RlYyAmJiAobSA9ICEwKTtlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBTID0gdGhpcy5fYXVkaW9TZWdtZW50SW5mb0xpc3QuZ2V0TGFzdFNhbXBsZUJlZm9yZShiKTtpZiAobnVsbCAhPSBTKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrID0gYiAtIChTLm9yaWdpbmFsRHRzICsgUy5kdXJhdGlvbik7ayA8PSAzICYmIChrID0gMCk7dmFyIEwgPSBTLmR0cyArIFMuZHVyYXRpb24gKyBrO3IgPSBiIC0gTDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSByID0gMDtcbiAgICAgICAgICAgICAgICB9aWYgKG0pIHtcbiAgICAgICAgICAgICAgICAgIHZhciBSID0gYiAtIHIsXG4gICAgICAgICAgICAgICAgICAgICAgQSA9IHRoaXMuX3ZpZGVvU2VnbWVudEluZm9MaXN0LmdldExhc3RTZWdtZW50QmVmb3JlKGIpO2lmIChudWxsICE9IEEgJiYgQS5iZWdpbkR0cyA8IFIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBoLmRlZmF1bHQuZ2V0U2lsZW50RnJhbWUodGhpcy5fYXVkaW9NZXRhLm9yaWdpbmFsQ29kZWMsIHRoaXMuX2F1ZGlvTWV0YS5jaGFubmVsQ291bnQpO2lmICh3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIFQgPSBBLmJlZ2luRHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBPID0gUiAtIEEuYmVnaW5EdHM7by5kZWZhdWx0LnYodGhpcy5UQUcsIFwiSW5zZXJ0UHJlZml4U2lsZW50QXVkaW86IGR0czogXCIgKyBUICsgXCIsIGR1cmF0aW9uOiBcIiArIE8pLCBpLnVuc2hpZnQoeyB1bml0OiB3LCBkdHM6IFQsIHB0czogVCB9KSwgZyArPSB3LmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBtID0gITE7XG4gICAgICAgICAgICAgICAgfWZvciAodmFyIEMgPSBbXSwgSSA9IDA7IEkgPCBpLmxlbmd0aDsgSSsrKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgRCA9IGlbSV0sXG4gICAgICAgICAgICAgICAgICAgICAgeCA9IEQudW5pdCxcbiAgICAgICAgICAgICAgICAgICAgICBNID0gRC5kdHMgLSB0aGlzLl9kdHNCYXNlLFxuICAgICAgICAgICAgICAgICAgICAgIEIgPSBNIC0gcjstMSA9PT0gcyAmJiAocyA9IEIpO3ZhciBqID0gMDtpZiAoSSAhPT0gaS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGogPSBpW0kgKyAxXS5kdHMgLSB0aGlzLl9kdHNCYXNlIC0gciAtIEI7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bGwgIT0geSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgUCA9IHkuZHRzIC0gdGhpcy5fZHRzQmFzZSAtIHI7aiA9IFAgLSBCO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGogPSBDLmxlbmd0aCA+PSAxID8gQ1tDLmxlbmd0aCAtIDFdLmR1cmF0aW9uIDogTWF0aC5mbG9vcih1KTt2YXIgVSA9ICExLFxuICAgICAgICAgICAgICAgICAgICAgIE4gPSBudWxsO2lmIChqID4gMS41ICogdSAmJiBcIm1wM1wiICE9PSB0aGlzLl9hdWRpb01ldGEuY29kZWMgJiYgdGhpcy5fZmlsbEF1ZGlvVGltZXN0YW1wR2FwICYmICFjLmRlZmF1bHQuc2FmYXJpKSB7XG4gICAgICAgICAgICAgICAgICAgIFUgPSAhMDt2YXIgRiA9IE1hdGguYWJzKGogLSB1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEcgPSBNYXRoLmNlaWwoRiAvIHUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgViA9IEIgKyB1O28uZGVmYXVsdC53KHRoaXMuVEFHLCBcIkxhcmdlIGF1ZGlvIHRpbWVzdGFtcCBnYXAgZGV0ZWN0ZWQsIG1heSBjYXVzZSBBViBzeW5jIHRvIGRyaWZ0LiBTaWxlbnQgZnJhbWVzIHdpbGwgYmUgZ2VuZXJhdGVkIHRvIGF2b2lkIHVuc3luYy5cXG5kdHM6IFwiICsgKEIgKyBqKSArIFwiIG1zLCBleHBlY3RlZDogXCIgKyAoQiArIE1hdGgucm91bmQodSkpICsgXCIgbXMsIGRlbHRhOiBcIiArIE1hdGgucm91bmQoRikgKyBcIiBtcywgZ2VuZXJhdGU6IFwiICsgRyArIFwiIGZyYW1lc1wiKTt2YXIgeiA9IGguZGVmYXVsdC5nZXRTaWxlbnRGcmFtZSh0aGlzLl9hdWRpb01ldGEub3JpZ2luYWxDb2RlYywgdGhpcy5fYXVkaW9NZXRhLmNoYW5uZWxDb3VudCk7bnVsbCA9PSB6ICYmIChvLmRlZmF1bHQudyh0aGlzLlRBRywgXCJVbmFibGUgdG8gZ2VuZXJhdGUgc2lsZW50IGZyYW1lIGZvciBcIiArIHRoaXMuX2F1ZGlvTWV0YS5vcmlnaW5hbENvZGVjICsgXCIgd2l0aCBcIiArIHRoaXMuX2F1ZGlvTWV0YS5jaGFubmVsQ291bnQgKyBcIiBjaGFubmVscywgcmVwZWF0IGxhc3QgZnJhbWVcIiksIHogPSB4KSwgTiA9IFtdO2ZvciAodmFyIEggPSAwOyBIIDwgRzsgSCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIEsgPSBNYXRoLnJvdW5kKFYpO2lmIChOLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxID0gTltOLmxlbmd0aCAtIDFdO3EuZHVyYXRpb24gPSBLIC0gcS5kdHM7XG4gICAgICAgICAgICAgICAgICAgICAgfXZhciBXID0geyBkdHM6IEssIHB0czogSywgY3RzOiAwLCB1bml0OiB6LCBzaXplOiB6LmJ5dGVMZW5ndGgsIGR1cmF0aW9uOiAwLCBvcmlnaW5hbER0czogTSwgZmxhZ3M6IHsgaXNMZWFkaW5nOiAwLCBkZXBlbmRzT246IDEsIGlzRGVwZW5kZWRPbjogMCwgaGFzUmVkdW5kYW5jeTogMCB9IH07Ti5wdXNoKFcpLCBnICs9IFcuc2l6ZSwgViArPSB1O1xuICAgICAgICAgICAgICAgICAgICB9dmFyIFggPSBOW04ubGVuZ3RoIC0gMV07WC5kdXJhdGlvbiA9IEIgKyBqIC0gWC5kdHMsIGogPSBNYXRoLnJvdW5kKHUpO1xuICAgICAgICAgICAgICAgICAgfUMucHVzaCh7IGR0czogQiwgcHRzOiBCLCBjdHM6IDAsIHVuaXQ6IEQudW5pdCwgc2l6ZTogRC51bml0LmJ5dGVMZW5ndGgsIGR1cmF0aW9uOiBqLCBvcmlnaW5hbER0czogTSwgZmxhZ3M6IHsgaXNMZWFkaW5nOiAwLCBkZXBlbmRzT246IDEsIGlzRGVwZW5kZWRPbjogMCwgaGFzUmVkdW5kYW5jeTogMCB9IH0pLCBVICYmIEMucHVzaC5hcHBseShDLCBOKTtcbiAgICAgICAgICAgICAgICB9ZCA/IHYgPSBuZXcgVWludDhBcnJheShnKSA6ICh2ID0gbmV3IFVpbnQ4QXJyYXkoZyksIHZbMF0gPSBnID4+PiAyNCAmIDI1NSwgdlsxXSA9IGcgPj4+IDE2ICYgMjU1LCB2WzJdID0gZyA+Pj4gOCAmIDI1NSwgdlszXSA9IDI1NSAmIGcsIHYuc2V0KGwuZGVmYXVsdC50eXBlcy5tZGF0LCA0KSk7Zm9yICh2YXIgWSA9IDA7IFkgPCBDLmxlbmd0aDsgWSsrKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgWiA9IENbWV0udW5pdDt2LnNldChaLCBwKSwgcCArPSBaLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICAgICAgfXZhciBRID0gQ1tDLmxlbmd0aCAtIDFdO2EgPSBRLmR0cyArIFEuZHVyYXRpb24sIHRoaXMuX2F1ZGlvTmV4dER0cyA9IGE7dmFyIEogPSBuZXcgXy5NZWRpYVNlZ21lbnRJbmZvKCk7Si5iZWdpbkR0cyA9IHMsIEouZW5kRHRzID0gYSwgSi5iZWdpblB0cyA9IHMsIEouZW5kUHRzID0gYSwgSi5vcmlnaW5hbEJlZ2luRHRzID0gQ1swXS5vcmlnaW5hbER0cywgSi5vcmlnaW5hbEVuZER0cyA9IFEub3JpZ2luYWxEdHMgKyBRLmR1cmF0aW9uLCBKLmZpcnN0U2FtcGxlID0gbmV3IF8uU2FtcGxlSW5mbyhDWzBdLmR0cywgQ1swXS5wdHMsIENbMF0uZHVyYXRpb24sIENbMF0ub3JpZ2luYWxEdHMsICExKSwgSi5sYXN0U2FtcGxlID0gbmV3IF8uU2FtcGxlSW5mbyhRLmR0cywgUS5wdHMsIFEuZHVyYXRpb24sIFEub3JpZ2luYWxEdHMsICExKSwgdGhpcy5faXNMaXZlIHx8IHRoaXMuX2F1ZGlvU2VnbWVudEluZm9MaXN0LmFwcGVuZChKKSwgbi5zYW1wbGVzID0gQywgbi5zZXF1ZW5jZU51bWJlcisrO3ZhciAkID0gbnVsbDskID0gZCA/IG5ldyBVaW50OEFycmF5KCkgOiBsLmRlZmF1bHQubW9vZihuLCBzKSwgbi5zYW1wbGVzID0gW10sIG4ubGVuZ3RoID0gMDt2YXIgZWUgPSB7IHR5cGU6IFwiYXVkaW9cIiwgZGF0YTogdGhpcy5fbWVyZ2VCb3hlcygkLCB2KS5idWZmZXIsIHNhbXBsZUNvdW50OiBDLmxlbmd0aCwgaW5mbzogSiB9O2QgJiYgZiAmJiAoZWUudGltZXN0YW1wT2Zmc2V0ID0gcyksIHRoaXMuX29uTWVkaWFTZWdtZW50KFwiYXVkaW9cIiwgZWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfcmVtdXhWaWRlb1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZSwgdCkge1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5fdmlkZW9NZXRhKSB7XG4gICAgICAgICAgICAgIHZhciBuID0gZSxcbiAgICAgICAgICAgICAgICAgIGkgPSBuLnNhbXBsZXMsXG4gICAgICAgICAgICAgICAgICByID0gdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgcyA9IC0xLFxuICAgICAgICAgICAgICAgICAgYSA9IC0xLFxuICAgICAgICAgICAgICAgICAgbyA9IC0xLFxuICAgICAgICAgICAgICAgICAgdSA9IC0xO2lmIChpICYmIDAgIT09IGkubGVuZ3RoICYmICgxICE9PSBpLmxlbmd0aCB8fCB0KSkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gOCxcbiAgICAgICAgICAgICAgICAgICAgaCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGYgPSA4ICsgZS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGMgPSBudWxsO2lmIChpLmxlbmd0aCA+IDEgJiYgKGMgPSBpLnBvcCgpLCBmIC09IGMubGVuZ3RoKSwgbnVsbCAhPSB0aGlzLl92aWRlb1N0YXNoZWRMYXN0U2FtcGxlKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMuX3ZpZGVvU3Rhc2hlZExhc3RTYW1wbGU7dGhpcy5fdmlkZW9TdGFzaGVkTGFzdFNhbXBsZSA9IG51bGwsIGkudW5zaGlmdChtKSwgZiArPSBtLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9bnVsbCAhPSBjICYmICh0aGlzLl92aWRlb1N0YXNoZWRMYXN0U2FtcGxlID0gYyk7dmFyIHAgPSBpWzBdLmR0cyAtIHRoaXMuX2R0c0Jhc2U7aWYgKHRoaXMuX3ZpZGVvTmV4dER0cykgciA9IHAgLSB0aGlzLl92aWRlb05leHREdHM7ZWxzZSBpZiAodGhpcy5fdmlkZW9TZWdtZW50SW5mb0xpc3QuaXNFbXB0eSgpKSByID0gMDtlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2ID0gdGhpcy5fdmlkZW9TZWdtZW50SW5mb0xpc3QuZ2V0TGFzdFNhbXBsZUJlZm9yZShwKTtpZiAobnVsbCAhPSB2KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gcCAtICh2Lm9yaWdpbmFsRHRzICsgdi5kdXJhdGlvbik7ZyA8PSAzICYmIChnID0gMCk7dmFyIHkgPSB2LmR0cyArIHYuZHVyYXRpb24gKyBnO3IgPSBwIC0geTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSByID0gMDtcbiAgICAgICAgICAgICAgICB9Zm9yICh2YXIgRSA9IG5ldyBfLk1lZGlhU2VnbWVudEluZm8oKSwgYiA9IFtdLCBTID0gMDsgUyA8IGkubGVuZ3RoOyBTKyspIHtcbiAgICAgICAgICAgICAgICAgIHZhciBrID0gaVtTXSxcbiAgICAgICAgICAgICAgICAgICAgICBMID0gay5kdHMgLSB0aGlzLl9kdHNCYXNlLFxuICAgICAgICAgICAgICAgICAgICAgIFIgPSBrLmlzS2V5ZnJhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgQSA9IEwgLSByLFxuICAgICAgICAgICAgICAgICAgICAgIHcgPSBrLmN0cyxcbiAgICAgICAgICAgICAgICAgICAgICBUID0gQSArIHc7LTEgPT09IHMgJiYgKHMgPSBBLCBvID0gVCk7dmFyIE8gPSAwO2lmIChTICE9PSBpLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgTyA9IGlbUyArIDFdLmR0cyAtIHRoaXMuX2R0c0Jhc2UgLSByIC0gQTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVsbCAhPSBjKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBDID0gYy5kdHMgLSB0aGlzLl9kdHNCYXNlIC0gcjtPID0gQyAtIEE7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgTyA9IGIubGVuZ3RoID49IDEgPyBiW2IubGVuZ3RoIC0gMV0uZHVyYXRpb24gOiBNYXRoLmZsb29yKHRoaXMuX3ZpZGVvTWV0YS5yZWZTYW1wbGVEdXJhdGlvbik7aWYgKFIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEkgPSBuZXcgXy5TYW1wbGVJbmZvKEEsIFQsIE8sIGsuZHRzLCAhMCk7SS5maWxlcG9zaXRpb24gPSBrLmZpbGVwb3NpdGlvbiwgRS5hcHBlbmRTeW5jUG9pbnQoSSk7XG4gICAgICAgICAgICAgICAgICB9Yi5wdXNoKHsgZHRzOiBBLCBwdHM6IFQsIGN0czogdywgdW5pdHM6IGsudW5pdHMsIHNpemU6IGsubGVuZ3RoLCBpc0tleWZyYW1lOiBSLCBkdXJhdGlvbjogTywgb3JpZ2luYWxEdHM6IEwsIGZsYWdzOiB7IGlzTGVhZGluZzogMCwgZGVwZW5kc09uOiBSID8gMiA6IDEsIGlzRGVwZW5kZWRPbjogUiA/IDEgOiAwLCBoYXNSZWR1bmRhbmN5OiAwLCBpc05vblN5bmM6IFIgPyAwIDogMSB9IH0pO1xuICAgICAgICAgICAgICAgIH1oID0gbmV3IFVpbnQ4QXJyYXkoZiksIGhbMF0gPSBmID4+PiAyNCAmIDI1NSwgaFsxXSA9IGYgPj4+IDE2ICYgMjU1LCBoWzJdID0gZiA+Pj4gOCAmIDI1NSwgaFszXSA9IDI1NSAmIGYsIGguc2V0KGwuZGVmYXVsdC50eXBlcy5tZGF0LCA0KTtmb3IgKHZhciBEID0gMDsgRCA8IGIubGVuZ3RoOyBEKyspIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSBiW0RdLnVuaXRzOyB4Lmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIE0gPSB4LnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBCID0gTS5kYXRhO2guc2V0KEIsIGQpLCBkICs9IEIuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9dmFyIGogPSBiW2IubGVuZ3RoIC0gMV07aWYgKGEgPSBqLmR0cyArIGouZHVyYXRpb24sIHUgPSBqLnB0cyArIGouZHVyYXRpb24sIHRoaXMuX3ZpZGVvTmV4dER0cyA9IGEsIEUuYmVnaW5EdHMgPSBzLCBFLmVuZER0cyA9IGEsIEUuYmVnaW5QdHMgPSBvLCBFLmVuZFB0cyA9IHUsIEUub3JpZ2luYWxCZWdpbkR0cyA9IGJbMF0ub3JpZ2luYWxEdHMsIEUub3JpZ2luYWxFbmREdHMgPSBqLm9yaWdpbmFsRHRzICsgai5kdXJhdGlvbiwgRS5maXJzdFNhbXBsZSA9IG5ldyBfLlNhbXBsZUluZm8oYlswXS5kdHMsIGJbMF0ucHRzLCBiWzBdLmR1cmF0aW9uLCBiWzBdLm9yaWdpbmFsRHRzLCBiWzBdLmlzS2V5ZnJhbWUpLCBFLmxhc3RTYW1wbGUgPSBuZXcgXy5TYW1wbGVJbmZvKGouZHRzLCBqLnB0cywgai5kdXJhdGlvbiwgai5vcmlnaW5hbER0cywgai5pc0tleWZyYW1lKSwgdGhpcy5faXNMaXZlIHx8IHRoaXMuX3ZpZGVvU2VnbWVudEluZm9MaXN0LmFwcGVuZChFKSwgbi5zYW1wbGVzID0gYiwgbi5zZXF1ZW5jZU51bWJlcisrLCB0aGlzLl9mb3JjZUZpcnN0SURSKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgUCA9IGJbMF0uZmxhZ3M7UC5kZXBlbmRzT24gPSAyLCBQLmlzTm9uU3luYyA9IDA7XG4gICAgICAgICAgICAgICAgfXZhciBVID0gbC5kZWZhdWx0Lm1vb2Yobiwgcyk7bi5zYW1wbGVzID0gW10sIG4ubGVuZ3RoID0gMCwgdGhpcy5fb25NZWRpYVNlZ21lbnQoXCJ2aWRlb1wiLCB7IHR5cGU6IFwidmlkZW9cIiwgZGF0YTogdGhpcy5fbWVyZ2VCb3hlcyhVLCBoKS5idWZmZXIsIHNhbXBsZUNvdW50OiBiLmxlbmd0aCwgaW5mbzogRSB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiX21lcmdlQm94ZXNcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGUsIHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gbmV3IFVpbnQ4QXJyYXkoZS5ieXRlTGVuZ3RoICsgdC5ieXRlTGVuZ3RoKTtyZXR1cm4gbi5zZXQoZSwgMCksIG4uc2V0KHQsIGUuYnl0ZUxlbmd0aCksIG47XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvbkluaXRTZWdtZW50XCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uSW5pdFNlZ21lbnQ7XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQoZSkge1xuICAgICAgICAgICAgdGhpcy5fb25Jbml0U2VnbWVudCA9IGU7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJvbk1lZGlhU2VnbWVudFwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vbk1lZGlhU2VnbWVudDtcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldChlKSB7XG4gICAgICAgICAgICB0aGlzLl9vbk1lZGlhU2VnbWVudCA9IGU7XG4gICAgICAgICAgfSB9XSksIGU7XG4gICAgICB9KCk7bi5kZWZhdWx0ID0gcDtcbiAgICB9LCB7IFwiLi4vY29yZS9tZWRpYS1zZWdtZW50LWluZm8uanNcIjogOCwgXCIuLi91dGlscy9icm93c2VyLmpzXCI6IDM5LCBcIi4uL3V0aWxzL2V4Y2VwdGlvbi5qc1wiOiA0MCwgXCIuLi91dGlscy9sb2dnZXIuanNcIjogNDEsIFwiLi9hYWMtc2lsZW50LmpzXCI6IDM2LCBcIi4vbXA0LWdlbmVyYXRvci5qc1wiOiAzNyB9XSwgMzk6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciBpID0ge307IWZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSBzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIHQgPSAvKGVkZ2UpXFwvKFtcXHcuXSspLy5leGVjKGUpIHx8IC8ob3ByKVtcXC9dKFtcXHcuXSspLy5leGVjKGUpIHx8IC8oY2hyb21lKVsgXFwvXShbXFx3Ll0rKS8uZXhlYyhlKSB8fCAvKGllbW9iaWxlKVtcXC9dKFtcXHcuXSspLy5leGVjKGUpIHx8IC8odmVyc2lvbikoYXBwbGV3ZWJraXQpWyBcXC9dKFtcXHcuXSspLiooc2FmYXJpKVsgXFwvXShbXFx3Ll0rKS8uZXhlYyhlKSB8fCAvKHdlYmtpdClbIFxcL10oW1xcdy5dKykuKih2ZXJzaW9uKVsgXFwvXShbXFx3Ll0rKS4qKHNhZmFyaSlbIFxcL10oW1xcdy5dKykvLmV4ZWMoZSkgfHwgLyh3ZWJraXQpWyBcXC9dKFtcXHcuXSspLy5leGVjKGUpIHx8IC8ob3BlcmEpKD86Lip2ZXJzaW9ufClbIFxcL10oW1xcdy5dKykvLmV4ZWMoZSkgfHwgLyhtc2llKSAoW1xcdy5dKykvLmV4ZWMoZSkgfHwgZS5pbmRleE9mKFwidHJpZGVudFwiKSA+PSAwICYmIC8ocnYpKD86OnwgKShbXFx3Ll0rKS8uZXhlYyhlKSB8fCBlLmluZGV4T2YoXCJjb21wYXRpYmxlXCIpIDwgMCAmJiAvKGZpcmVmb3gpWyBcXC9dKFtcXHcuXSspLy5leGVjKGUpIHx8IFtdLFxuICAgICAgICAgICAgbiA9IC8oaXBhZCkvLmV4ZWMoZSkgfHwgLyhpcG9kKS8uZXhlYyhlKSB8fCAvKHdpbmRvd3MgcGhvbmUpLy5leGVjKGUpIHx8IC8oaXBob25lKS8uZXhlYyhlKSB8fCAvKGtpbmRsZSkvLmV4ZWMoZSkgfHwgLyhhbmRyb2lkKS8uZXhlYyhlKSB8fCAvKHdpbmRvd3MpLy5leGVjKGUpIHx8IC8obWFjKS8uZXhlYyhlKSB8fCAvKGxpbnV4KS8uZXhlYyhlKSB8fCAvKGNyb3MpLy5leGVjKGUpIHx8IFtdLFxuICAgICAgICAgICAgciA9IHsgYnJvd3NlcjogdFs1XSB8fCB0WzNdIHx8IHRbMV0gfHwgXCJcIiwgdmVyc2lvbjogdFsyXSB8fCB0WzRdIHx8IFwiMFwiLCBtYWpvclZlcnNpb246IHRbNF0gfHwgdFsyXSB8fCBcIjBcIiwgcGxhdGZvcm06IG5bMF0gfHwgXCJcIiB9LFxuICAgICAgICAgICAgcyA9IHt9O2lmIChyLmJyb3dzZXIpIHtcbiAgICAgICAgICBzW3IuYnJvd3Nlcl0gPSAhMDt2YXIgYSA9IHIubWFqb3JWZXJzaW9uLnNwbGl0KFwiLlwiKTtzLnZlcnNpb24gPSB7IG1ham9yOiBwYXJzZUludChyLm1ham9yVmVyc2lvbiwgMTApLCBzdHJpbmc6IHIudmVyc2lvbiB9LCBhLmxlbmd0aCA+IDEgJiYgKHMudmVyc2lvbi5taW5vciA9IHBhcnNlSW50KGFbMV0sIDEwKSksIGEubGVuZ3RoID4gMiAmJiAocy52ZXJzaW9uLmJ1aWxkID0gcGFyc2VJbnQoYVsyXSwgMTApKTtcbiAgICAgICAgfXIucGxhdGZvcm0gJiYgKHNbci5wbGF0Zm9ybV0gPSAhMCksIChzLmNocm9tZSB8fCBzLm9wciB8fCBzLnNhZmFyaSkgJiYgKHMud2Via2l0ID0gITApLCAocy5ydiB8fCBzLmllbW9iaWxlKSAmJiAocy5ydiAmJiBkZWxldGUgcy5ydiwgci5icm93c2VyID0gXCJtc2llXCIsIHMubXNpZSA9ICEwKSwgcy5lZGdlICYmIChkZWxldGUgcy5lZGdlLCByLmJyb3dzZXIgPSBcIm1zZWRnZVwiLCBzLm1zZWRnZSA9ICEwKSwgcy5vcHIgJiYgKHIuYnJvd3NlciA9IFwib3BlcmFcIiwgcy5vcGVyYSA9ICEwKSwgcy5zYWZhcmkgJiYgcy5hbmRyb2lkICYmIChyLmJyb3dzZXIgPSBcImFuZHJvaWRcIiwgcy5hbmRyb2lkID0gITApLCBzLm5hbWUgPSByLmJyb3dzZXIsIHMucGxhdGZvcm0gPSByLnBsYXRmb3JtO2ZvciAodmFyIG8gaW4gaSkge1xuICAgICAgICAgIGkuaGFzT3duUHJvcGVydHkobykgJiYgZGVsZXRlIGlbb107XG4gICAgICAgIH1PYmplY3QuYXNzaWduKGksIHMpO1xuICAgICAgfSgpLCBuLmRlZmF1bHQgPSBpO1xuICAgIH0sIHt9XSwgNDA6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgaWYgKCFlKSB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuICF0IHx8IFwib2JqZWN0XCIgIT0gKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodCkpICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdCA/IGUgOiB0O1xuICAgICAgfWZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ICYmIG51bGwgIT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodCkpKTtlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUodCAmJiB0LnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogZSwgZW51bWVyYWJsZTogITEsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9IH0pLCB0ICYmIChPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZSwgdCkgOiBlLl9fcHJvdG9fXyA9IHQpO1xuICAgICAgfWZ1bmN0aW9uIHMoZSwgdCkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICB9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRbbl07aS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1yZXR1cm4gZnVuY3Rpb24gKHQsIG4sIGkpIHtcbiAgICAgICAgICByZXR1cm4gbiAmJiBlKHQucHJvdG90eXBlLCBuKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICB9O1xuICAgICAgfSgpLFxuICAgICAgICAgIG8gPSBuLlJ1bnRpbWVFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUodCkge1xuICAgICAgICAgIHModGhpcywgZSksIHRoaXMuX21lc3NhZ2UgPSB0O1xuICAgICAgICB9cmV0dXJuIGEoZSwgW3sga2V5OiBcInRvU3RyaW5nXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIjogXCIgKyB0aGlzLm1lc3NhZ2U7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJuYW1lXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiUnVudGltZUV4Y2VwdGlvblwiO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwibWVzc2FnZVwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICAgICAgICAgIH0gfV0pLCBlO1xuICAgICAgfSgpO24uSWxsZWdhbFN0YXRlRXhjZXB0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZnVuY3Rpb24gdChlKSB7XG4gICAgICAgICAgcmV0dXJuIHModGhpcywgdCksIGkodGhpcywgKHQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLCBlKSk7XG4gICAgICAgIH1yZXR1cm4gcih0LCBlKSwgYSh0LCBbeyBrZXk6IFwibmFtZVwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIklsbGVnYWxTdGF0ZUV4Y2VwdGlvblwiO1xuICAgICAgICAgIH0gfV0pLCB0O1xuICAgICAgfShvKSwgbi5JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmdW5jdGlvbiB0KGUpIHtcbiAgICAgICAgICByZXR1cm4gcyh0aGlzLCB0KSwgaSh0aGlzLCAodC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsIGUpKTtcbiAgICAgICAgfXJldHVybiByKHQsIGUpLCBhKHQsIFt7IGtleTogXCJuYW1lXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uXCI7XG4gICAgICAgICAgfSB9XSksIHQ7XG4gICAgICB9KG8pLCBuLk5vdEltcGxlbWVudGVkRXhjZXB0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZnVuY3Rpb24gdChlKSB7XG4gICAgICAgICAgcmV0dXJuIHModGhpcywgdCksIGkodGhpcywgKHQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLCBlKSk7XG4gICAgICAgIH1yZXR1cm4gcih0LCBlKSwgYSh0LCBbeyBrZXk6IFwibmFtZVwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIk5vdEltcGxlbWVudGVkRXhjZXB0aW9uXCI7XG4gICAgICAgICAgfSB9XSksIHQ7XG4gICAgICB9KG8pO1xuICAgIH0sIHt9XSwgNDE6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7dmFyIHIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0W25dO2kuZW51bWVyYWJsZSA9IGkuZW51bWVyYWJsZSB8fCAhMSwgaS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGkgJiYgKGkud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBpLmtleSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9cmV0dXJuIGZ1bmN0aW9uICh0LCBuLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIG4gJiYgZSh0LnByb3RvdHlwZSwgbiksIGkgJiYgZSh0LCBpKSwgdDtcbiAgICAgICAgfTtcbiAgICAgIH0oKSxcbiAgICAgICAgICBzID0gZShcImV2ZW50c1wiKSxcbiAgICAgICAgICBhID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9O1xuICAgICAgfShzKSxcbiAgICAgICAgICBvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgIGkodGhpcywgZSk7XG4gICAgICAgIH1yZXR1cm4gcihlLCBudWxsLCBbeyBrZXk6IFwiZVwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCwgbikge1xuICAgICAgICAgICAgdCAmJiAhZS5GT1JDRV9HTE9CQUxfVEFHIHx8ICh0ID0gZS5HTE9CQUxfVEFHKTt2YXIgaSA9IFwiW1wiICsgdCArIFwiXSA+IFwiICsgbjtlLkVOQUJMRV9DQUxMQkFDSyAmJiBlLmVtaXR0ZXIuZW1pdChcImxvZ1wiLCBcImVycm9yXCIsIGkpLCBlLkVOQUJMRV9FUlJPUiAmJiAoY29uc29sZS5lcnJvciA/IGNvbnNvbGUuZXJyb3IoaSkgOiBjb25zb2xlLndhcm4gPyBjb25zb2xlLndhcm4oaSkgOiBjb25zb2xlLmxvZyhpKSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJpXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0LCBuKSB7XG4gICAgICAgICAgICB0ICYmICFlLkZPUkNFX0dMT0JBTF9UQUcgfHwgKHQgPSBlLkdMT0JBTF9UQUcpO3ZhciBpID0gXCJbXCIgKyB0ICsgXCJdID4gXCIgKyBuO2UuRU5BQkxFX0NBTExCQUNLICYmIGUuZW1pdHRlci5lbWl0KFwibG9nXCIsIFwiaW5mb1wiLCBpKSwgZS5FTkFCTEVfSU5GTyAmJiAoY29uc29sZS5pbmZvID8gY29uc29sZS5pbmZvKGkpIDogY29uc29sZS5sb2coaSkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwid1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCwgbikge1xuICAgICAgICAgICAgdCAmJiAhZS5GT1JDRV9HTE9CQUxfVEFHIHx8ICh0ID0gZS5HTE9CQUxfVEFHKTt2YXIgaSA9IFwiW1wiICsgdCArIFwiXSA+IFwiICsgbjtlLkVOQUJMRV9DQUxMQkFDSyAmJiBlLmVtaXR0ZXIuZW1pdChcImxvZ1wiLCBcIndhcm5cIiwgaSksIGUuRU5BQkxFX1dBUk4gJiYgKGNvbnNvbGUud2FybiA/IGNvbnNvbGUud2FybihpKSA6IGNvbnNvbGUubG9nKGkpKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImRcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgICAgIHQgJiYgIWUuRk9SQ0VfR0xPQkFMX1RBRyB8fCAodCA9IGUuR0xPQkFMX1RBRyk7dmFyIGkgPSBcIltcIiArIHQgKyBcIl0gPiBcIiArIG47ZS5FTkFCTEVfQ0FMTEJBQ0sgJiYgZS5lbWl0dGVyLmVtaXQoXCJsb2dcIiwgXCJkZWJ1Z1wiLCBpKSwgZS5FTkFCTEVfREVCVUcgJiYgKGNvbnNvbGUuZGVidWcgPyBjb25zb2xlLmRlYnVnKGkpIDogY29uc29sZS5sb2coaSkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwidlwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCwgbikge1xuICAgICAgICAgICAgdCAmJiAhZS5GT1JDRV9HTE9CQUxfVEFHIHx8ICh0ID0gZS5HTE9CQUxfVEFHKTt2YXIgaSA9IFwiW1wiICsgdCArIFwiXSA+IFwiICsgbjtlLkVOQUJMRV9DQUxMQkFDSyAmJiBlLmVtaXR0ZXIuZW1pdChcImxvZ1wiLCBcInZlcmJvc2VcIiwgaSksIGUuRU5BQkxFX1ZFUkJPU0UgJiYgY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgfSB9XSksIGU7XG4gICAgICB9KCk7by5HTE9CQUxfVEFHID0gXCJmbHYuanNcIiwgby5GT1JDRV9HTE9CQUxfVEFHID0gITEsIG8uRU5BQkxFX0VSUk9SID0gITAsIG8uRU5BQkxFX0lORk8gPSAhMCwgby5FTkFCTEVfV0FSTiA9ICEwLCBvLkVOQUJMRV9ERUJVRyA9ICEwLCBvLkVOQUJMRV9WRVJCT1NFID0gITAsIG8uRU5BQkxFX0NBTExCQUNLID0gITEsIG8uZW1pdHRlciA9IG5ldyBhLmRlZmF1bHQoKSwgbi5kZWZhdWx0ID0gbztcbiAgICB9LCB7IGV2ZW50czogMiB9XSwgNDI6IFtmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9O1xuICAgICAgfWZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICB9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTt2YXIgcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZShlLCB0KSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRbbl07aS5lbnVtZXJhYmxlID0gaS5lbnVtZXJhYmxlIHx8ICExLCBpLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gaSAmJiAoaS53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIGkua2V5LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1yZXR1cm4gZnVuY3Rpb24gKHQsIG4sIGkpIHtcbiAgICAgICAgICByZXR1cm4gbiAmJiBlKHQucHJvdG90eXBlLCBuKSwgaSAmJiBlKHQsIGkpLCB0O1xuICAgICAgICB9O1xuICAgICAgfSgpLFxuICAgICAgICAgIGEgPSBlKFwiZXZlbnRzXCIpLFxuICAgICAgICAgIG8gPSBpKGEpLFxuICAgICAgICAgIHUgPSBlKFwiLi9sb2dnZXIuanNcIiksXG4gICAgICAgICAgbCA9IGkodSksXG4gICAgICAgICAgZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICByKHRoaXMsIGUpO1xuICAgICAgICB9cmV0dXJuIHMoZSwgbnVsbCwgW3sga2V5OiBcImdldENvbmZpZ1wiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBnbG9iYWxUYWc6IGwuZGVmYXVsdC5HTE9CQUxfVEFHLCBmb3JjZUdsb2JhbFRhZzogbC5kZWZhdWx0LkZPUkNFX0dMT0JBTF9UQUcsIGVuYWJsZVZlcmJvc2U6IGwuZGVmYXVsdC5FTkFCTEVfVkVSQk9TRSwgZW5hYmxlRGVidWc6IGwuZGVmYXVsdC5FTkFCTEVfREVCVUcsIGVuYWJsZUluZm86IGwuZGVmYXVsdC5FTkFCTEVfSU5GTywgZW5hYmxlV2FybjogbC5kZWZhdWx0LkVOQUJMRV9XQVJOLCBlbmFibGVFcnJvcjogbC5kZWZhdWx0LkVOQUJMRV9FUlJPUiwgZW5hYmxlQ2FsbGJhY2s6IGwuZGVmYXVsdC5FTkFCTEVfQ0FMTEJBQ0sgfTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImFwcGx5Q29uZmlnXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShlKSB7XG4gICAgICAgICAgICBsLmRlZmF1bHQuR0xPQkFMX1RBRyA9IGUuZ2xvYmFsVGFnLCBsLmRlZmF1bHQuRk9SQ0VfR0xPQkFMX1RBRyA9IGUuZm9yY2VHbG9iYWxUYWcsIGwuZGVmYXVsdC5FTkFCTEVfVkVSQk9TRSA9IGUuZW5hYmxlVmVyYm9zZSwgbC5kZWZhdWx0LkVOQUJMRV9ERUJVRyA9IGUuZW5hYmxlRGVidWcsIGwuZGVmYXVsdC5FTkFCTEVfSU5GTyA9IGUuZW5hYmxlSW5mbywgbC5kZWZhdWx0LkVOQUJMRV9XQVJOID0gZS5lbmFibGVXYXJuLCBsLmRlZmF1bHQuRU5BQkxFX0VSUk9SID0gZS5lbmFibGVFcnJvciwgbC5kZWZhdWx0LkVOQUJMRV9DQUxMQkFDSyA9IGUuZW5hYmxlQ2FsbGJhY2s7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJfbm90aWZ5Q2hhbmdlXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZS5lbWl0dGVyO2lmICh0Lmxpc3RlbmVyQ291bnQoXCJjaGFuZ2VcIikgPiAwKSB7XG4gICAgICAgICAgICAgIHZhciBuID0gZS5nZXRDb25maWcoKTt0LmVtaXQoXCJjaGFuZ2VcIiwgbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJyZWdpc3Rlckxpc3RlbmVyXCIsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0KSB7XG4gICAgICAgICAgICBlLmVtaXR0ZXIuYWRkTGlzdGVuZXIoXCJjaGFuZ2VcIiwgdCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJyZW1vdmVMaXN0ZW5lclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCkge1xuICAgICAgICAgICAgZS5lbWl0dGVyLnJlbW92ZUxpc3RlbmVyKFwiY2hhbmdlXCIsIHQpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiYWRkTG9nTGlzdGVuZXJcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQpIHtcbiAgICAgICAgICAgIGwuZGVmYXVsdC5lbWl0dGVyLmFkZExpc3RlbmVyKFwibG9nXCIsIHQpLCBsLmRlZmF1bHQuZW1pdHRlci5saXN0ZW5lckNvdW50KFwibG9nXCIpID4gMCAmJiAobC5kZWZhdWx0LkVOQUJMRV9DQUxMQkFDSyA9ICEwLCBlLl9ub3RpZnlDaGFuZ2UoKSk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJyZW1vdmVMb2dMaXN0ZW5lclwiLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCkge1xuICAgICAgICAgICAgbC5kZWZhdWx0LmVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoXCJsb2dcIiwgdCksIDAgPT09IGwuZGVmYXVsdC5lbWl0dGVyLmxpc3RlbmVyQ291bnQoXCJsb2dcIikgJiYgKGwuZGVmYXVsdC5FTkFCTEVfQ0FMTEJBQ0sgPSAhMSwgZS5fbm90aWZ5Q2hhbmdlKCkpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiZm9yY2VHbG9iYWxUYWdcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbC5kZWZhdWx0LkZPUkNFX0dMT0JBTF9UQUc7XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQodCkge1xuICAgICAgICAgICAgbC5kZWZhdWx0LkZPUkNFX0dMT0JBTF9UQUcgPSB0LCBlLl9ub3RpZnlDaGFuZ2UoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImdsb2JhbFRhZ1wiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBsLmRlZmF1bHQuR0xPQkFMX1RBRztcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICAgICAgICBsLmRlZmF1bHQuR0xPQkFMX1RBRyA9IHQsIGUuX25vdGlmeUNoYW5nZSgpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiZW5hYmxlQWxsXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGwuZGVmYXVsdC5FTkFCTEVfVkVSQk9TRSAmJiBsLmRlZmF1bHQuRU5BQkxFX0RFQlVHICYmIGwuZGVmYXVsdC5FTkFCTEVfSU5GTyAmJiBsLmRlZmF1bHQuRU5BQkxFX1dBUk4gJiYgbC5kZWZhdWx0LkVOQUJMRV9FUlJPUjtcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICAgICAgICBsLmRlZmF1bHQuRU5BQkxFX1ZFUkJPU0UgPSB0LCBsLmRlZmF1bHQuRU5BQkxFX0RFQlVHID0gdCwgbC5kZWZhdWx0LkVOQUJMRV9JTkZPID0gdCwgbC5kZWZhdWx0LkVOQUJMRV9XQVJOID0gdCwgbC5kZWZhdWx0LkVOQUJMRV9FUlJPUiA9IHQsIGUuX25vdGlmeUNoYW5nZSgpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiZW5hYmxlRGVidWdcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbC5kZWZhdWx0LkVOQUJMRV9ERUJVRztcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICAgICAgICBsLmRlZmF1bHQuRU5BQkxFX0RFQlVHID0gdCwgZS5fbm90aWZ5Q2hhbmdlKCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJlbmFibGVWZXJib3NlXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGwuZGVmYXVsdC5FTkFCTEVfVkVSQk9TRTtcbiAgICAgICAgICB9LCBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICAgICAgICBsLmRlZmF1bHQuRU5BQkxFX1ZFUkJPU0UgPSB0LCBlLl9ub3RpZnlDaGFuZ2UoKTtcbiAgICAgICAgICB9IH0sIHsga2V5OiBcImVuYWJsZUluZm9cIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gbC5kZWZhdWx0LkVOQUJMRV9JTkZPO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KHQpIHtcbiAgICAgICAgICAgIGwuZGVmYXVsdC5FTkFCTEVfSU5GTyA9IHQsIGUuX25vdGlmeUNoYW5nZSgpO1xuICAgICAgICAgIH0gfSwgeyBrZXk6IFwiZW5hYmxlV2FyblwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBsLmRlZmF1bHQuRU5BQkxFX1dBUk47XG4gICAgICAgICAgfSwgc2V0OiBmdW5jdGlvbiBzZXQodCkge1xuICAgICAgICAgICAgbC5kZWZhdWx0LkVOQUJMRV9XQVJOID0gdCwgZS5fbm90aWZ5Q2hhbmdlKCk7XG4gICAgICAgICAgfSB9LCB7IGtleTogXCJlbmFibGVFcnJvclwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBsLmRlZmF1bHQuRU5BQkxFX0VSUk9SO1xuICAgICAgICAgIH0sIHNldDogZnVuY3Rpb24gc2V0KHQpIHtcbiAgICAgICAgICAgIGwuZGVmYXVsdC5FTkFCTEVfRVJST1IgPSB0LCBlLl9ub3RpZnlDaGFuZ2UoKTtcbiAgICAgICAgICB9IH1dKSwgZTtcbiAgICAgIH0oKTtkLmVtaXR0ZXIgPSBuZXcgby5kZWZhdWx0KCksIG4uZGVmYXVsdCA9IGQ7XG4gICAgfSwgeyBcIi4vbG9nZ2VyLmpzXCI6IDQxLCBldmVudHM6IDIgfV0sIDQzOiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO3ZhciByID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtuXTtpLmVudW1lcmFibGUgPSBpLmVudW1lcmFibGUgfHwgITEsIGkuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBpICYmIChpLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgaS5rZXksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgICAgIHJldHVybiBuICYmIGUodC5wcm90b3R5cGUsIG4pLCBpICYmIGUodCwgaSksIHQ7XG4gICAgICAgIH07XG4gICAgICB9KCksXG4gICAgICAgICAgcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgICBpKHRoaXMsIHQpO1xuICAgICAgICB9cmV0dXJuIHIodCwgbnVsbCwgW3sga2V5OiBcImluc3RhbGxcIiwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLl9fcHJvdG9fXyA9IHQsIGU7XG4gICAgICAgICAgICB9LCBPYmplY3QuYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBlIHx8IG51bGwgPT09IGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIik7Zm9yICh2YXIgdCA9IE9iamVjdChlKSwgbiA9IDE7IG4gPCBhcmd1bWVudHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGFyZ3VtZW50c1tuXTtpZiAodm9pZCAwICE9PSBpICYmIG51bGwgIT09IGkpIGZvciAodmFyIHIgaW4gaSkge1xuICAgICAgICAgICAgICAgICAgaS5oYXNPd25Qcm9wZXJ0eShyKSAmJiAodFtyXSA9IGlbcl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfXJldHVybiB0O1xuICAgICAgICAgICAgfSwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBzZWxmLlByb21pc2UgJiYgZShcImVzNi1wcm9taXNlXCIpLnBvbHlmaWxsKCk7XG4gICAgICAgICAgfSB9XSksIHQ7XG4gICAgICB9KCk7cy5pbnN0YWxsKCksIG4uZGVmYXVsdCA9IHM7XG4gICAgfSwgeyBcImVzNi1wcm9taXNlXCI6IDEgfV0sIDQ0OiBbZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgZnVuY3Rpb24gaShlLCB0LCBuKSB7XG4gICAgICAgIHZhciBpID0gZTtpZiAodCArIG4gPCBpLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAoOyBuLS07KSB7XG4gICAgICAgICAgICBpZiAoMTI4ICE9ICgxOTIgJiBpWysrdF0pKSByZXR1cm4gITE7XG4gICAgICAgICAgfXJldHVybiAhMDtcbiAgICAgICAgfXJldHVybiAhMTtcbiAgICAgIH1mdW5jdGlvbiByKGUpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IFtdLCBuID0gZSwgciA9IDAsIHMgPSBlLmxlbmd0aDsgciA8IHM7KSB7XG4gICAgICAgICAgaWYgKG5bcl0gPCAxMjgpIHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKG5bcl0pKSwgKytyO2Vsc2Uge1xuICAgICAgICAgICAgaWYgKG5bcl0gPCAxOTIpIDtlbHNlIGlmIChuW3JdIDwgMjI0KSB7XG4gICAgICAgICAgICAgIGlmIChpKG4sIHIsIDEpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSAoMzEgJiBuW3JdKSA8PCA2IHwgNjMgJiBuW3IgKyAxXTtpZiAoYSA+PSAxMjgpIHtcbiAgICAgICAgICAgICAgICAgIHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDY1NTM1ICYgYSkpLCByICs9IDI7Y29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5bcl0gPCAyNDApIHtcbiAgICAgICAgICAgICAgaWYgKGkobiwgciwgMikpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9ICgxNSAmIG5bcl0pIDw8IDEyIHwgKDYzICYgbltyICsgMV0pIDw8IDYgfCA2MyAmIG5bciArIDJdO2lmIChvID49IDIwNDggJiYgNTUyOTYgIT0gKDYzNDg4ICYgbykpIHtcbiAgICAgICAgICAgICAgICAgIHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDY1NTM1ICYgbykpLCByICs9IDM7Y29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5bcl0gPCAyNDggJiYgaShuLCByLCAzKSkge1xuICAgICAgICAgICAgICB2YXIgdSA9ICg3ICYgbltyXSkgPDwgMTggfCAoNjMgJiBuW3IgKyAxXSkgPDwgMTIgfCAoNjMgJiBuW3IgKyAyXSkgPDwgNiB8IDYzICYgbltyICsgM107aWYgKHUgPiA2NTUzNiAmJiB1IDwgMTExNDExMikge1xuICAgICAgICAgICAgICAgIHUgLT0gNjU1MzYsIHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHUgPj4+IDEwIHwgNTUyOTYpKSwgdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAyMyAmIHUgfCA1NjMyMCkpLCByICs9IDQ7Y29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH10LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSg2NTUzMykpLCArK3I7XG4gICAgICAgICAgfVxuICAgICAgICB9cmV0dXJuIHQuam9pbihcIlwiKTtcbiAgICAgIH1PYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pLCBuLmRlZmF1bHQgPSByO1xuICAgIH0sIHt9XSB9LCB7fSwgWzIxXSkoMjEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbHYubWluLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=