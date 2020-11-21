(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/view/DashboardIndex.jsx":
/*!*************************************!*\
  !*** ./src/view/DashboardIndex.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell/HeaderContainer */ "../node_modules/carbon-components-react/lib/components/UIShell/HeaderContainer.js");
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderContainer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell_HeaderContainer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell */ "../node_modules/carbon-components-react/lib/components/UIShell/index.js");
/* harmony import */ var carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _carbon_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon/icons-react */ "../node_modules/@carbon/icons-react/es/index.js");
/* harmony import */ var _components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NavLink.jsx */ "./src/view/components/NavLink.jsx");
/* harmony import */ var _components_NavGroup_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NavGroup.jsx */ "./src/view/components/NavGroup.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var ChatConponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./DashboardChat.jsx */ "./src/view/DashboardChat.jsx"));
});

function Chat() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
      ChatName = _useParams.ChatName;

  var chatLink = "/chats/" + ChatName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChatConponent, {
    chatLink: chatLink
  });
}

__signature__(Chat, "useParams{{ ChatName }}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"]];
});

var DashboardIndex = function DashboardIndex() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container bx--theme--g100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderContainer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    render: function render(_ref) {
      var isSideNavExpanded = _ref.isSideNavExpanded,
          onClickSideNavExpand = _ref.onClickSideNavExpand;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        "aria-label": "Open Evening Dashboard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_3__["SkipToContent"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_3__["HeaderMenuButton"], {
        "aria-label": "Open menu",
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_3__["HeaderName"], {
        href: "/Dashboard",
        prefix: ""
      }, "Open Evening Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_3__["SideNav"], {
        "aria-label": "Side navigation",
        expanded: isSideNavExpanded
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_3__["SideNavItems"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/ArtDesign",
        label: "Art & Design"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Biology",
        label: "Biology"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Business",
        label: "Business"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Chemistry",
        label: "Chemistry"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Classics",
        label: "Classics"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/ComputerScience",
        label: "Computer Science"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/DramaTheatre",
        label: "Drama & Theatre"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Economics",
        label: "Economics"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/English",
        label: "English"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/French",
        label: "French"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Geography",
        label: "Geography"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/History",
        label: "History"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Maths",
        label: "Maths"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Music",
        label: "Music"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/PhilosophyEthics",
        label: "Philosophy & Ethics"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/PhysicalEducation",
        label: "Physical Education"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Physics",
        label: "Physics"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Politics",
        label: "Politics"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Psychology",
        label: "Psychology"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Spanish",
        label: "Spanish"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/Careers",
        label: "Careers"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavLink_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        to: "/Dashboard/StudentForum",
        label: "StudentForum"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_3__["Content"], {
        id: "main-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bx--grid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bx--row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "bx--offset-lg-2 bx--col-lg-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            'height': '100%',
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            'padding': '10px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            "padding": "10px",
            "margin": "10px",
            "backgroundClip": "padding-box",
            "backgroundColor": "#FFFFFF",
            "height": "100%",
            'textAlign': 'center',
            'fontFamily': 'Candara'
          }
        }, "Loading...."))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/Dashboard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Teacher Chat Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Click on your subject to moderate and send chat messages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/Dashboard/:ChatName",
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Chat, null)
      }))))))));
    }
  })));
};

var _default = DashboardIndex;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChatConponent, "ChatConponent", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\DashboardIndex.jsx");
  reactHotLoader.register(Chat, "Chat", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\DashboardIndex.jsx");
  reactHotLoader.register(DashboardIndex, "DashboardIndex", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\DashboardIndex.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\DashboardIndex.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/view/components/NavGroup.jsx":
/*!******************************************!*\
  !*** ./src/view/components/NavGroup.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell */ "../node_modules/carbon-components-react/lib/components/UIShell/index.js");
/* harmony import */ var carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



 // eslint-disable-next-line react/prop-types

function NavGroup(_ref) {
  var icon = _ref.icon,
      label = _ref.label,
      grouppath = _ref.grouppath,
      children = _ref.children;
  var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])(grouppath);

  if (match) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_2__["SideNavMenu"], {
      renderIcon: icon,
      title: label,
      defaultExpanded: true
    }, children);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_2__["SideNavMenu"], {
      renderIcon: icon,
      title: label
    }, children);
  }
}

__signature__(NavGroup, "useRouteMatch{match}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"]];
});

var _default = NavGroup;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavGroup, "NavGroup", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\components\\NavGroup.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\components\\NavGroup.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/view/components/NavLink.jsx":
/*!*****************************************!*\
  !*** ./src/view/components/NavLink.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell */ "../node_modules/carbon-components-react/lib/components/UIShell/index.js");
/* harmony import */ var carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



 // eslint-disable-next-line react/prop-types

function NavLink(_ref) {
  var label = _ref.label,
      to = _ref.to;
  var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])(to);

  if (match) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_2__["SideNavMenuItem"], {
      href: to,
      "aria-current": "page"
    }, label);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell__WEBPACK_IMPORTED_MODULE_2__["SideNavMenuItem"], {
      href: to
    }, label);
  }
}

__signature__(NavLink, "useRouteMatch{match}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"]];
});

var _default = NavLink;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavLink, "NavLink", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\components\\NavLink.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\JoshuaSanderson\\Downloads\\StreamingPlatform\\CollegeOpenEvening\\WebsiteConponents\\src\\view\\components\\NavLink.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9EYXNoYm9hcmRJbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY29tcG9uZW50cy9OYXZHcm91cC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY29tcG9uZW50cy9OYXZMaW5rLmpzeCJdLCJuYW1lcyI6WyJDaGF0Q29ucG9uZW50IiwiUmVhY3QiLCJsYXp5IiwiQ2hhdCIsInVzZVBhcmFtcyIsIkNoYXROYW1lIiwiY2hhdExpbmsiLCJEYXNoYm9hcmRJbmRleCIsImlzU2lkZU5hdkV4cGFuZGVkIiwib25DbGlja1NpZGVOYXZFeHBhbmQiLCJOYXZHcm91cCIsImljb24iLCJsYWJlbCIsImdyb3VwcGF0aCIsImNoaWxkcmVuIiwibWF0Y2giLCJ1c2VSb3V0ZU1hdGNoIiwiTmF2TGluayIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGFBQWEsZ0JBQUdDLDRDQUFLLENBQUNDLElBQU4sQ0FBVztBQUFBLFNBQU0sME1BQU47QUFBQSxDQUFYLENBQXRCOztBQUdBLFNBQVNDLElBQVQsR0FBZ0I7QUFBQSxtQkFDS0Msa0VBQVMsRUFEZDtBQUFBLE1BQ1JDLFFBRFEsY0FDUkEsUUFEUTs7QUFFZCxNQUFJQyxRQUFRLEdBQUcsWUFBWUQsUUFBM0I7QUFDQSxzQkFBUSwyREFBRSxhQUFGO0FBQWdCLFlBQVEsRUFBRUM7QUFBMUIsSUFBUjtBQUNEOztjQUpRSCxJO1VBQ1lDLDBEOzs7QUFLckIsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHNCQUNyQjtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLDJEQUFDLDhEQUFELHFCQUNFLDJEQUFDLHFHQUFEO0FBQ0UsVUFBTSxFQUFFO0FBQUEsVUFBR0MsaUJBQUgsUUFBR0EsaUJBQUg7QUFBQSxVQUFzQkMsb0JBQXRCLFFBQXNC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QUE5QkEsS0FBOEI7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3ZELE1BQU1DLEtBQUssR0FBR0Msc0VBQWEsQ0FBQ0gsU0FBRCxDQUEzQjs7QUFDQSxNQUFJRSxLQUFKLEVBQVc7QUFDVCx3QkFDRSwyREFBQywwRkFBRDtBQUFhLGdCQUFVLEVBQUVKLElBQXpCO0FBQStCLFdBQUssRUFBRUMsS0FBdEM7QUFBNkMscUJBQWUsRUFBRTtBQUE5RCxPQUNHRSxRQURILENBREY7QUFLRCxHQU5ELE1BTU87QUFDTCx3QkFDRSwyREFBQywwRkFBRDtBQUFhLGdCQUFVLEVBQUVILElBQXpCO0FBQStCLFdBQUssRUFBRUM7QUFBdEMsT0FDR0UsUUFESCxDQURGO0FBS0Q7QUFDRjs7Y0FmUUosUTtVQUNPTSw4RDs7O2VBZ0JETixRO0FBQUE7Ozs7Ozs7Ozs7MEJBakJOQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFQ7QUFDQTtDQUtBOztBQUNBLFNBQVNPLE9BQVQsT0FBaUM7QUFBQSxNQUFiTCxLQUFhLFFBQWJBLEtBQWE7QUFBQSxNQUFOTSxFQUFNLFFBQU5BLEVBQU07QUFDL0IsTUFBTUgsS0FBSyxHQUFHQyxzRUFBYSxDQUFDRSxFQUFELENBQTNCOztBQUNBLE1BQUlILEtBQUosRUFBVztBQUNULHdCQUNFLDJEQUFDLDhGQUFEO0FBQWlCLFVBQUksRUFBRUcsRUFBdkI7QUFBMkIsc0JBQWE7QUFBeEMsT0FDR04sS0FESCxDQURGO0FBS0QsR0FORCxNQU1PO0FBQ0wsd0JBQ0UsMkRBQUMsOEZBQUQ7QUFBaUIsVUFBSSxFQUFFTTtBQUF2QixPQUNHTixLQURILENBREY7QUFLRDtBQUNGOztjQWZRSyxPO1VBQ09ELDhEOzs7ZUFnQkRDLE87QUFBQTs7Ozs7Ozs7OzswQkFqQk5BLE8iLCJmaWxlIjoiMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxuICBTd2l0Y2gsXG4gIFJvdXRlLFxuICBSZWRpcmVjdCxcbiAgdXNlUGFyYW1zXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJ2NhcmJvbi1jb21wb25lbnRzLXJlYWN0L2xpYi9jb21wb25lbnRzL1VJU2hlbGwvSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IHtcbiAgQ29udGVudCxcbiAgSGVhZGVyLFxuICBIZWFkZXJNZW51QnV0dG9uLFxuICBIZWFkZXJOYW1lLFxuICBTa2lwVG9Db250ZW50LFxuICBTaWRlTmF2LFxuICBTaWRlTmF2SXRlbXNcbn0gZnJvbSAnY2FyYm9uLWNvbXBvbmVudHMtcmVhY3QvbGliL2NvbXBvbmVudHMvVUlTaGVsbCdcbmltcG9ydCB7IFZpZXczMiB9IGZyb20gJ0BjYXJib24vaWNvbnMtcmVhY3QnXG5pbXBvcnQgTmF2TGluayBmcm9tICcuL2NvbXBvbmVudHMvTmF2TGluay5qc3gnXG5pbXBvcnQgTmF2R3JvdXAgZnJvbSAnLi9jb21wb25lbnRzL05hdkdyb3VwLmpzeCdcbmNvbnN0IENoYXRDb25wb25lbnQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9EYXNoYm9hcmRDaGF0LmpzeCcpKVxuXG5cbmZ1bmN0aW9uIENoYXQoKSB7XG4gIGxldCB7IENoYXROYW1lIH0gPSB1c2VQYXJhbXMoKVxuICB2YXIgY2hhdExpbmsgPSBcIi9jaGF0cy9cIiArIENoYXROYW1lXG4gIHJldHVybiAoPCBDaGF0Q29ucG9uZW50IGNoYXRMaW5rPXtjaGF0TGlua30gLz4pXG59XG5cbmNvbnN0IERhc2hib2FyZEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBieC0tdGhlbWUtLWcxMDBcIj5cbiAgICA8Um91dGVyPlxuICAgICAgPEhlYWRlckNvbnRhaW5lclxuICAgICAgICByZW5kZXI9eyh7IGlzU2lkZU5hdkV4cGFuZGVkLCBvbkNsaWNrU2lkZU5hdkV4cGFuZCB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIgYXJpYS1sYWJlbD1cIk9wZW4gRXZlbmluZyBEYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgPFNraXBUb0NvbnRlbnQgLz5cbiAgICAgICAgICAgICAgPEhlYWRlck1lbnVCdXR0b25cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBtZW51XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrU2lkZU5hdkV4cGFuZH1cbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17aXNTaWRlTmF2RXhwYW5kZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxIZWFkZXJOYW1lIGhyZWY9XCIvRGFzaGJvYXJkXCIgcHJlZml4PScnPlxuICAgICAgICAgICAgICAgIE9wZW4gRXZlbmluZyBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgPC9IZWFkZXJOYW1lPlxuICAgICAgICAgICAgICA8U2lkZU5hdiBhcmlhLWxhYmVsPVwiU2lkZSBuYXZpZ2F0aW9uXCIgZXhwYW5kZWQ9e2lzU2lkZU5hdkV4cGFuZGVkfT5cbiAgICAgICAgICAgICAgICA8U2lkZU5hdkl0ZW1zPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRGFzaGJvYXJkL0FydERlc2lnblwiIGxhYmVsPVwiQXJ0ICYgRGVzaWduXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0Rhc2hib2FyZC9CaW9sb2d5XCIgbGFiZWw9XCJCaW9sb2d5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0Rhc2hib2FyZC9CdXNpbmVzc1wiIGxhYmVsPVwiQnVzaW5lc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRGFzaGJvYXJkL0NoZW1pc3RyeVwiIGxhYmVsPVwiQ2hlbWlzdHJ5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0Rhc2hib2FyZC9DbGFzc2ljc1wiIGxhYmVsPVwiQ2xhc3NpY3NcIiAvPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRGFzaGJvYXJkL0NvbXB1dGVyU2NpZW5jZVwiIGxhYmVsPVwiQ29tcHV0ZXIgU2NpZW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9EYXNoYm9hcmQvRHJhbWFUaGVhdHJlXCIgbGFiZWw9XCJEcmFtYSAmIFRoZWF0cmVcIiAvPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRGFzaGJvYXJkL0Vjb25vbWljc1wiIGxhYmVsPVwiRWNvbm9taWNzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0Rhc2hib2FyZC9FbmdsaXNoXCIgbGFiZWw9XCJFbmdsaXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0Rhc2hib2FyZC9GcmVuY2hcIiBsYWJlbD1cIkZyZW5jaFwiIC8+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9EYXNoYm9hcmQvR2VvZ3JhcGh5XCIgbGFiZWw9XCJHZW9ncmFwaHlcIiAvPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRGFzaGJvYXJkL0hpc3RvcnlcIiBsYWJlbD1cIkhpc3RvcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRGFzaGJvYXJkL01hdGhzXCIgbGFiZWw9XCJNYXRoc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9EYXNoYm9hcmQvTXVzaWNcIiBsYWJlbD1cIk11c2ljXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0Rhc2hib2FyZC9QaGlsb3NvcGh5RXRoaWNzXCIgbGFiZWw9XCJQaGlsb3NvcGh5ICYgRXRoaWNzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0Rhc2hib2FyZC9QaHlzaWNhbEVkdWNhdGlvblwiIGxhYmVsPVwiUGh5c2ljYWwgRWR1Y2F0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0Rhc2hib2FyZC9QaHlzaWNzXCIgbGFiZWw9XCJQaHlzaWNzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0Rhc2hib2FyZC9Qb2xpdGljc1wiIGxhYmVsPVwiUG9saXRpY3NcIiAvPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRGFzaGJvYXJkL1BzeWNob2xvZ3lcIiBsYWJlbD1cIlBzeWNob2xvZ3lcIiAvPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRGFzaGJvYXJkL1NwYW5pc2hcIiBsYWJlbD1cIlNwYW5pc2hcIiAvPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRGFzaGJvYXJkL0NhcmVlcnNcIiBsYWJlbD1cIkNhcmVlcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvRGFzaGJvYXJkL1N0dWRlbnRGb3J1bVwiIGxhYmVsPVwiU3R1ZGVudEZvcnVtXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDwvU2lkZU5hdkl0ZW1zPlxuICAgICAgICAgICAgICA8L1NpZGVOYXY+XG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgIDxDb250ZW50IGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJieC0tZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJieC0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJ4LS1vZmZzZXQtbGctMiBieC0tY29sLWxnLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2IHN0eWxlPXt7ICdoZWlnaHQnOiAnMTAwJScsICdkaXNwbGF5JzogJ2ZsZXgnLCAnYWxpZ24taXRlbXMnOiAnY2VudGVyJywgJ2p1c3RpZnktY29udGVudCc6ICdjZW50ZXInLCAncGFkZGluZyc6ICcxMHB4JyB9fT48ZGl2IHN0eWxlPXt7IFwicGFkZGluZ1wiOiBcIjEwcHhcIiwgXCJtYXJnaW5cIjogXCIxMHB4XCIsIFwiYmFja2dyb3VuZENsaXBcIjogXCJwYWRkaW5nLWJveFwiLCBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIiwgXCJoZWlnaHRcIjogXCIxMDAlXCIsICd0ZXh0QWxpZ24nOiAnY2VudGVyJywgJ2ZvbnRGYW1pbHknOiAnQ2FuZGFyYScgfX0+TG9hZGluZy4uLi48L2Rpdj48L2Rpdj59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvRGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5UZWFjaGVyIENoYXQgRGFzaGJvYXJkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNsaWNrIG9uIHlvdXIgc3ViamVjdCB0byBtb2RlcmF0ZSBhbmQgc2VuZCBjaGF0IG1lc3NhZ2VzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9EYXNoYm9hcmQvOkNoYXROYW1lXCIgY2hpbGRyZW49ezxDaGF0IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRJbmRleFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdXNlUm91dGVNYXRjaFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgU2lkZU5hdk1lbnUgfSBmcm9tICdjYXJib24tY29tcG9uZW50cy1yZWFjdC9saWIvY29tcG9uZW50cy9VSVNoZWxsJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuZnVuY3Rpb24gTmF2R3JvdXAgKHsgaWNvbiwgbGFiZWwsIGdyb3VwcGF0aCwgY2hpbGRyZW4gfSkge1xuICBjb25zdCBtYXRjaCA9IHVzZVJvdXRlTWF0Y2goZ3JvdXBwYXRoKVxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNpZGVOYXZNZW51IHJlbmRlckljb249e2ljb259IHRpdGxlPXtsYWJlbH0gZGVmYXVsdEV4cGFuZGVkPXt0cnVlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9TaWRlTmF2TWVudT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlTmF2TWVudSByZW5kZXJJY29uPXtpY29ufSB0aXRsZT17bGFiZWx9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1NpZGVOYXZNZW51PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZHcm91cFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdXNlUm91dGVNYXRjaFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgU2lkZU5hdk1lbnVJdGVtIH0gZnJvbSAnY2FyYm9uLWNvbXBvbmVudHMtcmVhY3QvbGliL2NvbXBvbmVudHMvVUlTaGVsbCdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbmZ1bmN0aW9uIE5hdkxpbmsgKHsgbGFiZWwsIHRvIH0pIHtcbiAgY29uc3QgbWF0Y2ggPSB1c2VSb3V0ZU1hdGNoKHRvKVxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNpZGVOYXZNZW51SXRlbSBocmVmPXt0b30gYXJpYS1jdXJyZW50PVwicGFnZVwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L1NpZGVOYXZNZW51SXRlbT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlTmF2TWVudUl0ZW0gaHJlZj17dG99PlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L1NpZGVOYXZNZW51SXRlbT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2TGlua1xuIl0sInNvdXJjZVJvb3QiOiIifQ==