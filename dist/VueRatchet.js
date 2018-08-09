(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueRatchet"] = factory();
	else
		root["VueRatchet"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _badge = __webpack_require__(1);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _btn = __webpack_require__(8);
	
	var _btn2 = _interopRequireDefault(_btn);
	
	var _check = __webpack_require__(22);
	
	var _check2 = _interopRequireDefault(_check);
	
	var _checks = __webpack_require__(25);
	
	var _checks2 = _interopRequireDefault(_checks);
	
	var _datepicker = __webpack_require__(30);
	
	var _datepicker2 = _interopRequireDefault(_datepicker);
	
	var _datetime = __webpack_require__(35);
	
	var _datetime2 = _interopRequireDefault(_datetime);
	
	var _flash = __webpack_require__(110);
	
	var _flash2 = _interopRequireDefault(_flash);
	
	var _hd = __webpack_require__(115);
	
	var _hd2 = _interopRequireDefault(_hd);
	
	var _icon = __webpack_require__(12);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _item = __webpack_require__(92);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _list = __webpack_require__(87);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _listdata = __webpack_require__(120);
	
	var _listdata2 = _interopRequireDefault(_listdata);
	
	var _modal = __webpack_require__(102);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _loading = __webpack_require__(123);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _popover = __webpack_require__(128);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _num = __webpack_require__(133);
	
	var _num2 = _interopRequireDefault(_num);
	
	var _option = __webpack_require__(40);
	
	var _option2 = _interopRequireDefault(_option);
	
	var _radio = __webpack_require__(138);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _scroll = __webpack_require__(44);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	var _select = __webpack_require__(98);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _tab = __webpack_require__(143);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _tabs = __webpack_require__(146);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _toast = __webpack_require__(151);
	
	var _toast2 = _interopRequireDefault(_toast);
	
	var _toggle = __webpack_require__(156);
	
	var _toggle2 = _interopRequireDefault(_toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import uc from '../scene/uc.vue'
	
	var VueRatchet = {
		badge: _badge2.default,
		btn: _btn2.default,
		check: _check2.default,
		checks: _checks2.default,
		datepicker: _datepicker2.default,
		datetime: _datetime2.default,
		flash: _flash2.default,
		hd: _hd2.default,
		icon: _icon2.default,
		item: _item2.default,
		list: _list2.default,
		listdata: _listdata2.default,
		modal: _modal2.default,
		loading: _loading2.default,
		popover: _popover2.default,
		num: _num2.default,
		option: _option2.default,
		radio: _radio2.default,
		scroll: _scroll2.default,
		select: _select2.default,
		tab: _tab2.default,
		tabs: _tabs2.default,
		toast: _toast2.default,
		toggle: _toggle2.default
	};
	
	module.exports = VueRatchet;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(2)
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\badge.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1d00adfe", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1d00adfe", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] badge.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1d00adfe!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./badge.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1d00adfe!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./badge.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.badge {\n  display: inline-block;\n  padding: 2px 9px 3px;\n  font-size: 12px;\n  line-height: 1;\n  color: #333;\n  background-color: rgba(0, 0, 0, 0.15);\n  border-radius: 100px;\n}\n.badge.badge-inverted {\n    padding: 0 5px 0 0;\n    background-color: transparent;\n}\n.badge-primary {\n  color: #fff;\n  background-color: #428bca;\n}\n.badge-primary.badge-inverted {\n    color: #428bca;\n}\n.badge-positive {\n  color: #fff;\n  background-color: #5cb85c;\n}\n.badge-positive.badge-inverted {\n    color: #5cb85c;\n}\n.badge-negative {\n  color: #fff;\n  background-color: #d9534f;\n}\n.badge-negative.badge-inverted {\n    color: #d9534f;\n}\n", "", {"version":3,"sources":["/./src/badge.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,sCAAsC;EACtC,qBAAqB;CAAE;AACvB;IACE,mBAAmB;IACnB,8BAA8B;CAAE;AAEpC;EACE,YAAY;EACZ,0BAA0B;CAAE;AAC5B;IACE,eAAe;CAAE;AAErB;EACE,YAAY;EACZ,0BAA0B;CAAE;AAC5B;IACE,eAAe;CAAE;AAErB;EACE,YAAY;EACZ,0BAA0B;CAAE;AAC5B;IACE,eAAe;CAAE","file":"badge.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.badge {\n  display: inline-block;\n  padding: 2px 9px 3px;\n  font-size: 12px;\n  line-height: 1;\n  color: #333;\n  background-color: rgba(0, 0, 0, 0.15);\n  border-radius: 100px; }\n  .badge.badge-inverted {\n    padding: 0 5px 0 0;\n    background-color: transparent; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #428bca; }\n  .badge-primary.badge-inverted {\n    color: #428bca; }\n\n.badge-positive {\n  color: #fff;\n  background-color: #5cb85c; }\n  .badge-positive.badge-inverted {\n    color: #5cb85c; }\n\n.badge-negative {\n  color: #fff;\n  background-color: #d9534f; }\n  .badge-negative.badge-inverted {\n    color: #d9534f; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	
	exports.default = {
	    name: 'badge',
	    props: {
	        color: {
	            type: String,
	            default: 'primary'
	        },
	        inverted: void 0
	    },
	    methods: {
	        //传入的值为inverted为否时
	        isInverted: function isInverted() {
	            var inverted = this.inverted;
	            return !(inverted === void 0 || inverted === false);
	        }
	    }
	
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "badge",
	    class: [_vm.color ? 'badge-' + _vm.color : '', _vm.isInverted() ? 'badge-inverted' : '']
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1d00adfe", module.exports)
	  }
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(9)
	
	/* script */
	__vue_exports__ = __webpack_require__(11)
	
	/* template */
	var __vue_template__ = __webpack_require__(21)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\btn.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3ebd00f7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3ebd00f7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] btn.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ebd00f7!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./btn.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ebd00f7!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./btn.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.btn {\n  position: relative;\n  display: inline-block;\n  padding: 6px 8px 7px;\n  margin-bottom: 0;\n  font-size: 0.5rem;\n  font-weight: 400;\n  line-height: 1;\n  color: #333;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n.btn:active, .btn.active {\n    color: inherit;\n    background-color: #ccc;\n}\n.btn:disabled, .btn.disabled {\n    opacity: .6;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border: 1px solid #428bca;\n}\n.btn-primary:active, .btn-primary.active {\n    color: #fff;\n    background-color: #3071a9;\n    border: 1px solid #3071a9;\n}\n.btn-positive {\n  color: #fff;\n  background-color: #5cb85c;\n  border: 1px solid #5cb85c;\n}\n.btn-positive:active, .btn-positive.active {\n    color: #fff;\n    background-color: #449d44;\n    border: 1px solid #449d44;\n}\n.btn-negative {\n  color: #fff;\n  background-color: #d9534f;\n  border: 1px solid #d9534f;\n}\n.btn-negative:active, .btn-negative.active {\n    color: #fff;\n    background-color: #c9302c;\n    border: 1px solid #c9302c;\n}\n.btn-outlined {\n  background-color: transparent;\n}\n.btn-outlined.btn-primary {\n    color: #428bca;\n}\n.btn-outlined.btn-positive {\n    color: #5cb85c;\n}\n.btn-outlined.btn-negative {\n    color: #d9534f;\n}\n.btn-outlined.btn-primary:active, .btn-outlined.btn-positive:active, .btn-outlined.btn-negative:active {\n    color: #fff;\n}\n.btn-link {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  color: #428bca;\n  background-color: transparent;\n  border: 0;\n}\n.btn-link:active, .btn-link.active {\n    color: #3071a9;\n    background-color: transparent;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n  padding: 15px 0;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  width: 100%;\n}\n.btn .badge {\n  margin: -2px -4px -2px 4px;\n  font-size: 12px;\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.btn .badge-inverted,\n.btn:active .badge-inverted {\n  background-color: transparent;\n}\n.btn-primary:active .badge-inverted,\n.btn-positive:active .badge-inverted,\n.btn-negative:active .badge-inverted {\n  color: #fff;\n}\n.btn-block .badge {\n  position: absolute;\n  right: 0;\n  margin-right: 10px;\n}\n.btn .icon {\n  font-size: inherit;\n}\n", "", {"version":3,"sources":["/./src/btn.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;CAAE;AACrB;IACE,eAAe;IACf,uBAAuB;CAAE;AAC3B;IACE,YAAY;CAAE;AAElB;EACE,YAAY;EACZ,0BAA0B;EAC1B,0BAA0B;CAAE;AAC5B;IACE,YAAY;IACZ,0BAA0B;IAC1B,0BAA0B;CAAE;AAEhC;EACE,YAAY;EACZ,0BAA0B;EAC1B,0BAA0B;CAAE;AAC5B;IACE,YAAY;IACZ,0BAA0B;IAC1B,0BAA0B;CAAE;AAEhC;EACE,YAAY;EACZ,0BAA0B;EAC1B,0BAA0B;CAAE;AAC5B;IACE,YAAY;IACZ,0BAA0B;IAC1B,0BAA0B;CAAE;AAEhC;EACE,8BAA8B;CAAE;AAChC;IACE,eAAe;CAAE;AACnB;IACE,eAAe;CAAE;AACnB;IACE,eAAe;CAAE;AACnB;IACE,YAAY;CAAE;AAElB;EACE,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,8BAA8B;EAC9B,UAAU;CAAE;AACZ;IACE,eAAe;IACf,8BAA8B;CAAE;AAEpC;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;CAAE;AAEpB;;;EAGE,YAAY;CAAE;AAEhB;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,sCAAsC;CAAE;AAE1C;;EAEE,8BAA8B;CAAE;AAElC;;;EAGE,YAAY;CAAE;AAEhB;EACE,mBAAmB;EACnB,SAAS;EACT,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;CAAE","file":"btn.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.btn {\n  position: relative;\n  display: inline-block;\n  padding: 6px 8px 7px;\n  margin-bottom: 0;\n  font-size: 0.5rem;\n  font-weight: 400;\n  line-height: 1;\n  color: #333;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px; }\n  .btn:active, .btn.active {\n    color: inherit;\n    background-color: #ccc; }\n  .btn:disabled, .btn.disabled {\n    opacity: .6; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border: 1px solid #428bca; }\n  .btn-primary:active, .btn-primary.active {\n    color: #fff;\n    background-color: #3071a9;\n    border: 1px solid #3071a9; }\n\n.btn-positive {\n  color: #fff;\n  background-color: #5cb85c;\n  border: 1px solid #5cb85c; }\n  .btn-positive:active, .btn-positive.active {\n    color: #fff;\n    background-color: #449d44;\n    border: 1px solid #449d44; }\n\n.btn-negative {\n  color: #fff;\n  background-color: #d9534f;\n  border: 1px solid #d9534f; }\n  .btn-negative:active, .btn-negative.active {\n    color: #fff;\n    background-color: #c9302c;\n    border: 1px solid #c9302c; }\n\n.btn-outlined {\n  background-color: transparent; }\n  .btn-outlined.btn-primary {\n    color: #428bca; }\n  .btn-outlined.btn-positive {\n    color: #5cb85c; }\n  .btn-outlined.btn-negative {\n    color: #d9534f; }\n  .btn-outlined.btn-primary:active, .btn-outlined.btn-positive:active, .btn-outlined.btn-negative:active {\n    color: #fff; }\n\n.btn-link {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  color: #428bca;\n  background-color: transparent;\n  border: 0; }\n  .btn-link:active, .btn-link.active {\n    color: #3071a9;\n    background-color: transparent; }\n\n.btn-block {\n  display: block;\n  width: 100%;\n  padding: 15px 0;\n  margin-bottom: 10px;\n  font-size: 18px; }\n\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  width: 100%; }\n\n.btn .badge {\n  margin: -2px -4px -2px 4px;\n  font-size: 12px;\n  background-color: rgba(0, 0, 0, 0.15); }\n\n.btn .badge-inverted,\n.btn:active .badge-inverted {\n  background-color: transparent; }\n\n.btn-primary:active .badge-inverted,\n.btn-positive:active .badge-inverted,\n.btn-negative:active .badge-inverted {\n  color: #fff; }\n\n.btn-block .badge {\n  position: absolute;\n  right: 0;\n  margin-right: 10px; }\n\n.btn .icon {\n  font-size: inherit; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _badge = __webpack_require__(1);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _icon = __webpack_require__(12);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	
	exports.default = {
	    name: 'btn',
	    components: { icon: _icon2.default, badge: _badge2.default },
	    props: {
	        text: String,
	        classes: String,
	        color: {
	            type: String,
	            default: '' //primary, positive, negative, link
	        },
	        outlined: String, //undefined| or not
	        block: String, //undefined| or not
	        icon: false,
	        badge: void 0
	    }
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(13)
	
	/* script */
	__vue_exports__ = __webpack_require__(19)
	
	/* template */
	var __vue_template__ = __webpack_require__(20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\icon.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1c492624", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1c492624", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] icon.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1c492624!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./icon.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1c492624!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./icon.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n@font-face {\n  font-family: Ratchicons;\n  font-weight: normal;\n  font-style: normal;\n  src: url(" + __webpack_require__(15) + ");\n  src: url(" + __webpack_require__(15) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(16) + ") format(\"woff\"), url(" + __webpack_require__(17) + ") format(\"truetype\"), url(" + __webpack_require__(18) + "#svgFontName) format(\"svg\");\n}\n.icon {\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: 24px;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n}\n.icon-back:before {\n  content: '\\E80A';\n}\n.icon-bars:before {\n  content: '\\E80E';\n}\n.icon-caret:before {\n  content: '\\E80F';\n}\n.icon-check:before {\n  content: '\\E810';\n}\n.icon-close:before {\n  content: '\\E811';\n}\n.icon-code:before {\n  content: '\\E812';\n}\n.icon-compose:before {\n  content: '\\E813';\n}\n.icon-download:before {\n  content: '\\E815';\n}\n.icon-edit:before {\n  content: '\\E829';\n}\n.icon-forward:before {\n  content: '\\E82A';\n}\n.icon-gear:before {\n  content: '\\E821';\n}\n.icon-home:before {\n  content: '\\E82B';\n}\n.icon-info:before {\n  content: '\\E82C';\n}\n.icon-list:before {\n  content: '\\E823';\n}\n.icon-more-vertical:before {\n  content: '\\E82E';\n}\n.icon-more:before {\n  content: '\\E82F';\n}\n.icon-pages:before {\n  content: '\\E824';\n}\n.icon-pause:before {\n  content: '\\E830';\n}\n.icon-person:before {\n  content: '\\E832';\n}\n.icon-play:before {\n  content: '\\E816';\n}\n.icon-plus:before {\n  content: '\\E817';\n}\n.icon-refresh:before {\n  content: '\\E825';\n}\n.icon-search:before {\n  content: '\\E819';\n}\n.icon-share:before {\n  content: '\\E81A';\n}\n.icon-sound:before {\n  content: '\\E827';\n}\n.icon-sound2:before {\n  content: '\\E828';\n}\n.icon-sound3:before {\n  content: '\\E80B';\n}\n.icon-sound4:before {\n  content: '\\E80C';\n}\n.icon-star-filled:before {\n  content: '\\E81B';\n}\n.icon-star:before {\n  content: '\\E81C';\n}\n.icon-stop:before {\n  content: '\\E81D';\n}\n.icon-trash:before {\n  content: '\\E81E';\n}\n.icon-up-nav:before {\n  content: '\\E81F';\n}\n.icon-up:before {\n  content: '\\E80D';\n}\n.icon-right-nav:before {\n  content: '\\E818';\n}\n.icon-right:before {\n  content: '\\E826';\n}\n.icon-down-nav:before {\n  content: '\\E814';\n}\n.icon-down:before {\n  content: '\\E820';\n}\n.icon-left-nav:before {\n  content: '\\E82D';\n}\n.icon-left:before {\n  content: '\\E822';\n}\n", "", {"version":3,"sources":["/./src/icon.vue"],"names":[],"mappings":";AAAA;EACE,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,mCAAmC;EACnC,4MAAgO;CAAE;AAEpO;EACE,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;EACf,sBAAsB;EACtB,oCAAoC;CAAE;AAExC;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE","file":"icon.vue","sourcesContent":["@font-face {\n  font-family: Ratchicons;\n  font-weight: normal;\n  font-style: normal;\n  src: url(\"./fonts/ratchicons.eot\");\n  src: url(\"./fonts/ratchicons.eot?#iefix\") format(\"embedded-opentype\"), url(\"./fonts/ratchicons.woff\") format(\"woff\"), url(\"./fonts/ratchicons.ttf\") format(\"truetype\"), url(\"./fonts/ratchicons.svg#svgFontName\") format(\"svg\"); }\n\n.icon {\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: 24px;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased; }\n\n.icon-back:before {\n  content: '\\e80a'; }\n\n.icon-bars:before {\n  content: '\\e80e'; }\n\n.icon-caret:before {\n  content: '\\e80f'; }\n\n.icon-check:before {\n  content: '\\e810'; }\n\n.icon-close:before {\n  content: '\\e811'; }\n\n.icon-code:before {\n  content: '\\e812'; }\n\n.icon-compose:before {\n  content: '\\e813'; }\n\n.icon-download:before {\n  content: '\\e815'; }\n\n.icon-edit:before {\n  content: '\\e829'; }\n\n.icon-forward:before {\n  content: '\\e82a'; }\n\n.icon-gear:before {\n  content: '\\e821'; }\n\n.icon-home:before {\n  content: '\\e82b'; }\n\n.icon-info:before {\n  content: '\\e82c'; }\n\n.icon-list:before {\n  content: '\\e823'; }\n\n.icon-more-vertical:before {\n  content: '\\e82e'; }\n\n.icon-more:before {\n  content: '\\e82f'; }\n\n.icon-pages:before {\n  content: '\\e824'; }\n\n.icon-pause:before {\n  content: '\\e830'; }\n\n.icon-person:before {\n  content: '\\e832'; }\n\n.icon-play:before {\n  content: '\\e816'; }\n\n.icon-plus:before {\n  content: '\\e817'; }\n\n.icon-refresh:before {\n  content: '\\e825'; }\n\n.icon-search:before {\n  content: '\\e819'; }\n\n.icon-share:before {\n  content: '\\e81a'; }\n\n.icon-sound:before {\n  content: '\\e827'; }\n\n.icon-sound2:before {\n  content: '\\e828'; }\n\n.icon-sound3:before {\n  content: '\\e80b'; }\n\n.icon-sound4:before {\n  content: '\\e80c'; }\n\n.icon-star-filled:before {\n  content: '\\e81b'; }\n\n.icon-star:before {\n  content: '\\e81c'; }\n\n.icon-stop:before {\n  content: '\\e81d'; }\n\n.icon-trash:before {\n  content: '\\e81e'; }\n\n.icon-up-nav:before {\n  content: '\\e81f'; }\n\n.icon-up:before {\n  content: '\\e80d'; }\n\n.icon-right-nav:before {\n  content: '\\e818'; }\n\n.icon-right:before {\n  content: '\\e826'; }\n\n.icon-down-nav:before {\n  content: '\\e814'; }\n\n.icon-down:before {\n  content: '\\e820'; }\n\n.icon-left-nav:before {\n  content: '\\e82d'; }\n\n.icon-left:before {\n  content: '\\e822'; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ea4a08a9d13eac796eb335310c8084f0.eot";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "data:application/font-woff;base64,d09GRgABAAAAABp8AA4AAAAALPgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABRAAAAEQAAABWPiRJqWNtYXAAAAGIAAAAOwAAAVLoc+n+Y3Z0IAAAAcQAAAAUAAAAHAbX/w5mcGdtAAAB2AAABPkAAAmRigp4O2dhc3AAAAbUAAAACAAAAAgAAAAQZ2x5ZgAABtwAAA+OAAAZvMT5PoJoZWFkAAAWbAAAADYAAAA2AWkTF2hoZWEAABakAAAAHQAAACQHlgOGaG10eAAAFsQAAAAPAAAAzMc4AABsb2NhAAAW1AAAAGgAAABoh9SO0m1heHAAABc8AAAAIAAAACABQApCbmFtZQAAF1wAAAGHAAAC5Rn5kSRwb3N0AAAY5AAAAUAAAAH5Slv8oXByZXAAABokAAAAVgAAAFaSoZr/eJxjYGR+wTiBgZWBg6mKaQ8DA0MPhGZ8wGDIyMTAwMTAysyAFQSkuaYwOLxgeGHEHPQ/iyGKOYhhElCYESQHABBnDEt4nGNgYGBmgGAZBkYGEPAB8hjBfBYGAyDNAYRMIIkXBi+M/v8HsxggLAlGCQaoLjBgZGMY8QAAbQEJPwB4nGNgQANGDEbMQf/zQBgAEegD6XicnVXZdtNWFJU8ZHASOmSgoA7X3DhQ68qEKRgwaSrFdiEdHAitBB2kDHTkncc+62uOQrtWH/m07n09JLR0rbYsls++R1tn2DrnRhwjKn0aiGvUoZKXA6msPZZK90lc13Uvj5UMBnFdthJPSZuonSRKat3sUC7xWOsqWSdYJ+PlIFZPVZ5noAziFB5lSUQbRBuplyZJ4onjJ4kWZxAfJUkgJaMQp9LIUEI1GsRS1aFM6dCr1xNx00DKRqMedVhU90PFJ8c1p9SsA0YqVznCFevVRr4bpwMve5DEOsGzrYcxHnisfpQqkIqR6cg/dkpOlIaBVHHUoVbi6DCTX/eRTCrNQKaMYkWl7oG43f102xYxPXQ6vi5KlUaqurnOKJrt0fGogygP2cbppNzQ2fbw5RlTVKtdcbPtQGYNXErJbHSfRAAdJlLj6QFONZwCqRn1R8XZ588BEslclKo8VTKHegOZMzt7cTHtbiersnCknwcyb3Z2452HQ6dXh3/R+hdM4cxHj+Jifj5C+lBqfiJOJKVGWMzyp4YfcVcgQrkxiAsXyuBThDl0RdrZZl3jtTH2hs/5SqlhPQna6KP4fgr9TiQrHGdRo/VInM1j13Wt3GdQS7W7Fzsyr0OVIu7vCwuuM+eEYZ4WC1VfnvneBTT/Bohn/EDeNIVL+5YpSrRvm6JMu2iKCu0SVKVdNsUU7YoppmnPmmKG9h1TzNKeMzLj/8vc55H7HN7xkJv2XeSmfQ+5ad9HbtoPkJtWITdtHblpLyA3rUZu2lWjOnYEGgZpF1IVQdA0svph3Fab9UDWjDR8aWDyLmLI+upER521tcofxX914gsHcmmip7siF5viLq/bFj483e6rj5pG3bDV+MaR8jAeRnocmtBZ+c3hv+1N3S6a7jKqMugBFUwKwABl7UAC0zrbCaT1mqf48gdgXIZ4zkpDtVSfO4am7+V5X/exOfG+x+3GLrdcd3kJWdYNcmP28N9SZKrrH+UtrVQnR6wrJ49VaxhDKrwour6SlHu0tRu/KKmy8l6U1srnk5CbPYMbQlu27mGwI0xpyiUeXlOlKD3UUo6yQyxvKco84JSLC1qGxLgOdQ9qa8TpoXoYGwshhqG0vRBwSCldFd+0ynfxHqtr2Oj4xRXh6XpyEhGf4ir7UfBU10b96A7avGbdMoMpVaqn+4xPsa/b9lFZaaSOsxe3VAfXNOsaORXTT+Rr4HRvOGjdAz1UfDRBI1U1x+jGKGM0ljXl3wR0MVZ+w2jVYvs93E+dpFWsuUuY7JsT9+C0u/0q+7WcW0bW/dcGvW3kip8jMb8tCvw7B2K3ZA3UO5OBGAvIWdAYxhYmdxiug23EbfY/Jqf/34aFRXJXOxq7eerD1ZNRJXfZ8rjLTXZZ16M2R9VOGvsIjS0PN+bY4XIstsRgQbb+wf8x7gF3aVEC4NDIZZiI2nShnurh6h6rsW04VxIBds2x43QAegAuQd8cu9bzCYD13CPnLsB9cgh2yCH4lByCz8i5BfA5OQRfkEMwIIdgl5w7AA/IIXhIDsEeOQSPyNkE+JIcgq/IIYjJIUjIuQ3wmByCJ+QQfE0OwTdGrk5k/pYH2QD6zqKbQKmdGhzaOGRGrk3Y+zxY9oFFZB9aROqRkesT6lMeLPV7i0j9wSJSfzRyY0L9iQdL/dkiUn+xiNRnxpeZIymvDp7zjg7+BJfqrV4AAAAAAQAB//8AD3icrVkJbBzXeX7/e3Pt7HJ3Z2cPXiK5XO5BLe+9SNEix5KoMzJN0Q28pqNQapHKpGPJlmQbsWg5QOQglWwFiWS1aGqrCCrLh5x10wgWySCAE8tuegSIpDaV4RRNj6gCIheIjKqy9qn/m9klJVl2HMDLmdnZmf+9+d9/fP//DQkQ/NASLRJKvJabArHwwhY/+NPxqAED8Ni/weN4xZZjU7SNyET5PiWQSseh4IIIXOb7B2EZDA5+B0ZW8vfBWGlPactP0yOEEZ30Wl0uAAYrCGV0SpYoAzYl5oSNBICMiflHJEnSJd0IGH7FxIfnopCLhWKRApsuB+gl/s7MzNx8YggGruJHjL3+azpLf04U1EcG1AeVcYEK0FfVg8/BF2D3ID/N3xqE3aiOPWYT/Sc8U4mb7NhQ8t59r5UgjLIpFWSJEHkSNZdkKhWJUGyjWPkmBc9gdYOVXBSUZLLtYyWLVkjTCNHcmlt3qQqKM8IMzZ+Wc5kQy+RiJi4Mnpu3P3Xz8zQzz9Pz80I/YTOYr+jXbXXICsWxUxJQoNOLDxrD9QMaDOfXJFVS0WZqIG1mQrF4KJOT8REzYto53jE3B/Nz9ofc3mZJFxSAzvK5lRDgl1bBKrhfOBRdOsj32368foydYCZpIR0kZ/UpILEQgBRGlRj609aLMFzjBJHw+iiRJBgnIMGatmRtW1oOpuPJhOKD5BDkuiDpBbUJIn35QsQLzRDOD8MQ4FbAi3irC9jRF2sSPjbSEmOvP/10ibHX9+UnUyNeqDnmjfsGvezaz9kzDzzwDGMHpqYOZF6sYV420r61sO91Ibrvr1lr02pfvOZYDfUt8yXgb4RkRZ44cXz9A7aOniZdZLW1UgOgsQiVGAOZiOUQYBQm0AG4IGlCASLLZBS/iDyOkS+vAbI0FW1uqAv4PTrpgi7Vl463Kmo8n03GmyCDC3HWGIzIXRBbWKyshPDEvkt/UZf28/+jFFR/uq7HArB6eu4Eyj/0p+vxBO7sqevwg0zxxL77z6bxZ66A60+NoCOJ13X3c0ZI/LIgZBzRPZVZrNvmKSYFuhkuw6OD/C1+epC2CWcb/P2VC3naQb14JhPtBzKjhKbSnRQ6AVP7bUSAfv4O9L9WKvGjpZIjT1+jX8cIXUpe3lByYQaZiXjYX+NWMD5XYApYKpDhhg0l/YZb9MZbtx1QLDqTBRkIYBjFLyDjEsU1kDWV2UJ4EXOBAJ1wbhP75u3HFIuWqz21pCFmROVAutCThlymYBRaY8lsbxcUHFclMADzmb5maIKQF3zghVjPhzA7d+VZxnyqzCAAEKBM0nyShLmm+cCkILlcv7pyonzidRWoS4V8MpWhmkvSqN9V05NuGJKo5qliJvzWtlWz1Vhd6CLuOeobUWosqGc/25686ssTiKFyNV8LEZGuy/Zgxizfw9f88klYxk8/Caeq2EEfr2DHgJUXD0dDILIrwGTKigK5JHkjfsnSGGKXNKJpkuTAVAVFtEAaoiE5lIsuodGcg7xip48PwYfDw3PLl1fXRUvwLiZJ0DKwZgwL82/BXcL08aUBUTsGJxGvZ+BdBOuF+lGkDy6uBWMyqUZYcYw///WxX9C6cX7gqfEzCzFp0hl7LdoPFIkBxqSJK49iwTlHA+ny+/Bf5UtpatKx8qUOGrAPi3XnJTqJz3HjWF2RRDyDGlGF6ZKFJNDj6994Yz1A+Yj45pxOrp09tQ4TkK+dnV3LuVMn2HEWIBoJkEZhywAw4gLKGk1VoTKerBDlZAp3REEsnoCgJ1wqbUITSKsNwwg2I/Jh6hVQY/wr5LPdkGj1ATOiRrSAu8G+wqcfCsMhg0/3w6GWoNud0hv1oFQ+CG8Ml3+KRt/PHww/BIcN/mA/HIYg3k253UH+P3wlfXgI3bKsatdjN9tVlEF2DO3KXxiD79uWhV3jfMCxz/XjbJptQusERYUJmuh2n0cVCSoBwQxyYobIVP48URRdWRUwxMevhtGxoQxqjvXFiIIRM9B/hSSbnpspH5yZxxp9fGhn+9z8Ulo/zD1webj8LHTTJ8r7diTn51NVXXsxnmkVm0wXXKWF8t/SI/xt/k5Fv19jHJ+zfZ+2UlhTKEwJa09j88DoRkIpao+VeDUhC8VV9qfByJgiduHccoB77aA9ZzcOx5eDg/uv0ovoU2EnSTxbwGIEIDYOu/iBcXibBYTFnkeLVfR4mb3IgsQgS0iPhWjIqF8cVhjo82Ehgs6fEAZjowTrB9Y8hjUv0ZaQzLQMt1Q710017kX+30ui0qn9+08x6Y39ucl2iJTb2KEdOw4zdnjHjkM6RNq35PafkhyZliX8Am3dcYgJEXG81Y/9Vq7qR+zfFLSYQrc53lRsb8qybTh5TLh15OMcmjHQnZiSiw6dGtq5dH6ufdGhrFD+Cb1jR2purt226UH2LusgLlJrhfC3JRzC5AoehA0ENjCjshnHLQqXd8FOfnYnP8PPPsLPwk7WwZ8/z184fx62nK/k7sJ8Jumy0n4Ecsus8Yg2B2fWqZgXr20U09MxRAVCRwL1AT9aHKJuiMosLjMzqZrJaANEVfYuP7DzEf4MdO7Ecpbe2Xvx4h9eg+T9E5Aqw09h68Lj+bXXXoPAK9DKf/m9apx20OcwtCJW8NY+1fDjsrA5jrKO8kH6cJw+jOIK6v4S+iNHIiRK0qSbZEiBnD8Z8lJJgxUbSkEsXzlfDXUznbknvR6qa5q+GedDBykTKq7KhRjtRowkApRHCWLzPUTSpLVY+0I4OH/zYKZrX/pUo61CdaC+7fcaifWzrpDPZTN9vT3dXZ0d6aUZE/8MM+P312Lk5LKJNLQqS0QMmcFwJtqXz5mZeDY/CH1hvApBJRZtTeRYFGIsY8bMDIsZGTZ91fSd9JlXRwaCXij5zGUreM6rP657j0Ozz83/wu1dChf5W93Jrn/vSnY/3d1Nzw15g0Hv0HA55zNNH/27SbfX646WO9w+n5seLn+T9pX/0dkX8fC+W2vmnWOwFbaM8bu+Vcn3dxbq6+aPYOeJPfzH/M09MAv/upe/BYN7+ZoF7HwZMSGJ3l1nrcaEw7hUGEnUhUMB7Ng0yuJtscaGesUpEQhT2BeL7h3oKH5R0blTGGlPdXemMu2ZluYGgVyFXDKBlUlNdENMVVRMQeyXQ5Ew1qxCuBkyBeyWC8k8dpTJKoqw7KOPehoLme2d2eS6VKZre6bQULN7d01jf3Z7Rza1LpntxEuN/O+nRf87PX0AjxBIrU051z03js52bM/2N3oee8xjj/5KVX5q6lk7x/+K/pbVLuKmXBDtJN21l5+GZWiZiScQ24b28NXEyQNc9QWb94k+xIeZHCH3W0XRA9hYpBIFSRFikgcY2quIya65XVqRuGXdvbEG+3BJl5FVud36GNHdut2kRMIhB+C8NZ6bGhbvTQ0LWjJmgxnu7EK1eblWO2N/FpsYeA5m+DfEZqu74Fehs0G+5SRcH7ZI2DFNukEjsqTJRaSwOjBspoq4TJUqqiiTxAZWAQ2UjDRYGWcQbPs9RhWtZrFGZIyG5iyxsj5Ftoubx582EaRV3AtI76KGAO1h+r2h8j8MD2EnMEOL5VFawp80c3VmqHxwiF6qch2spSxPasmQNejGINRF+7zCA9SS8QzbFpvGgiQ4DxYxMirMMS6eKgK+ltS2hYOtSMfBrlsi+kKFZCjY69Q1/Mk6a1/d/TXBvb723nsvnJWksy9882e10LL9G5SV9u0rSVu/+tQXqXTm6NEzEnv1T5x4Yp03xlOlDu/aK3rZvXCK1e7hb/I3n8CuFhtKlL/IXkbOnsac20y+Cs0OTYj1BbCvHQFJmdnz5T/+o60Kk+4r3jEgySyTTGjI2mR5RYU1fERUu43op5qwylHidiyPukDSMYSx5E0QBdtqosgTdl+PLfEiaVnqCOugIY0QY8jHj/iUMyM0R57au+uRLV/8wv2fW5/PIkB3Lm2vi7S4/WkZCU5PThAclk0kb6Y4mEbouSrPid9AiXp6nRFd9CZ5lEYo6ulVhXzyd1MnNkCZX9Cm+paGBr+/HpikGhLTVUlb4otDg99owH5Jd5XftHkOc4QD4QBuUGVZsq+DQsDtcemCad3zyUQsXOFg9+399pPprnyFh2leq3v3zjUzHT0FQDJ2RRCqPk0Itg6MbRnrj4Ij56597PM9Yw1NhoFSez+ZzlU4VrvN5/rIH5DfOMHQVIdLGrv7zsH+PLquq9NfIyHqI69lSPdolQjfKCXfRup3TVMNvUZs6igbRTKpytj+AMEWlNFxTGtGqxEXdWRE3IAsRMlHBD95Howv3z3ja1fnMr09LU3YG2o3E+jPKFo+/KyC4FefiX8d7thIn7Z5X8DyBVyC7RHR7G9pBv8incss0Dn6G/6gIHF+wdEWSRxct6kbXp4uwKEqc1t4Ruet71ugBsR2GQYEDxKvXKi3VILJUqlSn15ir2B90oiHhASWh4I1mioxdJsuWQiSQCUoykxhdmmxT6rVxeVyCqfL4/IEQ6qRdtFIAUtJBL0ZMpHEiT9gr/D1fH1Pnh7N88GZn/3lvxxFfTbDSb6+O89XwXye//CDD2AeT2P8PZiHmopeDlcTdb6WDFr99psyicgTqoA5KmHRE72PKHaCIFFYY/iBhIL+WqNWFDoVWTq4NZ9dYKpvyESbiMCVzfeFgwpcdqqKfZycmRmuj8WybTF6rnoNj+Vvw8AQNqQx3MhtuV6lZzlSZcL3iG5w6xjfWK3/4r3wObSvQerJA8574TZcDJJ5MonA+4Bg+uirCSJeoYxiLZDGxRsUgdgVMdj2SXJFKwCkrhZX7vO40UIaaOLVYRM2ya2JbJ41QV8+m2hVFk7gciqXuzuXy4M43p2Dyvd3q7/PJXO5u/I5/iNHbgGfxPtjZx05q0+VMBKATsmAJX3aZjKji2+ezIDuioQD9Wa9t8Zl6IYZ0AzhCaFRXzjuhWBYKLNwAgMLD09ls3hWfThsvr2ylXhHKu70g41WnfOmbqP9pm7MrmYjgosig4uj20HsJ+fnoX9uDokV9vYPO333Q+w/kWa7yUrxv4T+9oaAR8ZoWiF6FsQsQvSVlRADN6wCMry8tcWJLRljC/uuMInkSSFBTIQiB5NwyydUbK3zCUHTlUgTgpQ4ii2sqAsdjw1s8MFZfkGWofbsGaiVZX5hm5kKTvdKEA0oPp8WoFiqXXdNdS9rXG4oHoX6FX9A8rUoWv5L5tLAMgvkK7Oz/yuDxUZx8NkzzmRnzkDdtf9wGdTV193o2xCp74rqNBxasuHLDKKRnk3NaUr1aHtT7Tr/ku4+FwLWHX9+7+wVGScrfuf/ATMabHAAAAABAAAAAQAAamrn+V8PPPUACwPoAAAAAM8xA9kAAAAAzzDLmQAA/24D6ANSAAAACAACAAAAAAAAeJxjYGRgYA76n8UQxfyCAQiAJCMDKjAGAGalBCQAAAB4nGN+wcDAPEwwANiKLtIAAAAAAAAUACwAXAB2AMYA9gEQAXgB6AIAAhgCrgLOAuQDGgM0A0oDaAOKA+AD+AQ2BEgEdASMBNwFHgVGBYoFpAZoBn4GlgcQBygHggfuCDgIUAmWCoYKuArSCx4LaguCC+YMMAxSDN4AAQAAADMAggAGAAAAAAACACAALQBuAAAAeAmRAAAAAHicdZLLSgMxGIVP7EVswYWKbrOSSmF6QRd2o1CwK0FcdOEuHdOZKdOkZFKlz+Ab+A6+kuCbeDoNVqHOMO33fzlJ/gkD4AifENhcV3w2LNBgteE97OMmcIX+LnCV/BC4hiaeAtfpdeAG2rCBmzjGO1cQ1QNWM3wEFjgRZ4H3cCjagSv014Gr5PvANZwKFbhO/xq4gbF4C9zEufga2sXKZUnqZWt4Ifvd3qWcrKSlyozKpVr61LpC3sqpNV7nuY1iO3fKx2kWW1M86mSZK7cVWxprV2TWyF7U3cqRNpqVfl7vUrwkfe+ncursXN6F9eXC2ZmOfZR6vxh0Or/3xZAHtcAKDhkSpPCQaNFe8L+PLnq4JE2YkExuUhkMFHIahSVnpOVIwfqWz5SVodVM5OQIMX/nTCjamOmsNIYzHplKuEbOMbczscuNOWu9X1bWkj1G7HRXcsSkKdOq7Oj5510KvHDnPq1nx+uuXdml5If2t3/J81mPzWhi+qg8JU87QIf3P+/7DcAAi28AeJxtUGlTwyAUzFZI0kut933fGo/WP4RAmow0ZIC047830OkHZ3wfHvsW2F2IOtGyetH/NYkidLAGAooYCVJ00UMfAwyxjg1sYoQtbGMHu9jDPg5wiCMc4wSnOMM5LnCJK1zjBre4wz0e8IgnPOMFGV7xhnd8YIxJl1Ui48xIl3ok9KIarIDSTARWydyNPJhpI7O5NK7kTKUrJmiYclq4nkdWMsOLQNqiVY49amryxfh3bHVTicly+ewE1lgaAlBeSP5NudJWEq6FTLie1e2Q+jBZxebpKhWpFftpW2O7wddvxktfGjz71jGT5aVSUhCP26Zr6gyzRdzU/jzxYmTaXiL+fUSV1tGaTaVNjMyNtAUN2jRkXSYeEylKl+TaLJgRpNAzScoq16lX8KLDPz9E/NRqNlbGtTRWV1H0C03Bht1LuADIUlixAQGOWbkIAAgAYyCwASNEsAMjcLIEKAlFUkSyCgIHKrEGAUSxJAGIUViwQIhYsQYDRLEmAYhRWLgEAIhYsQYBRFlZWVm4Af+FsASNsQUARAAA"

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5f48561abb43ace3f2a761ee719f0113.ttf";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "891748d22cec952712edded9037e09b0.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	
	exports.default = {
	    name: 'icon',
	    props: {
	        icon: {
	            type: String,
	            required: true
	        }
	    },
	    data: function data() {
	        return {
	            classData: 'icon-' + this.icon
	        };
	    }
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    class: ("icon " + _vm.classData)
	  })
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1c492624", module.exports)
	  }
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', {
	    staticClass: "btn",
	    class: [_vm.color ? 'btn-' + _vm.color : '', _vm.outlined !== void 0 ? 'btn-outlined' : '', _vm.block !== void 0 ? 'btn-block' : '', _vm.classes ? _vm.classes : '']
	  }, [(_vm.icon) ? _c('icon', {
	    attrs: {
	      "icon": _vm.icon
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _vm._t("content"), _vm._v(" "), (_vm.badge !== void 0) ? _c('badge', {
	    attrs: {
	      "inverted": _vm.outlined !== void 0,
	      "color": _vm.color
	    }
	  }, [_vm._v(_vm._s(_vm.badge))]) : _vm._e()], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3ebd00f7", module.exports)
	  }
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(23)
	
	/* template */
	var __vue_template__ = __webpack_require__(24)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\check.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9256863a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9256863a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] check.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	
	//这是个很神奇的组件，父组件可以是checkbox 或 radio 或是其它, 父组件有个属性model可以取得选中的值
	//适用于一切选择项
	exports.default = {
	    name: 'check',
	    props: {
	        //选中后写到model的值
	        vkey: {
	            required: true
	        },
	        hasicon: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            active: false
	        };
	    },
	    created: function created() {
	        this.m2v();
	    },
	
	    methods: {
	        m2v: function m2v() {
	            var val = this.vkey;
	            this.active = this.ischeckbox ? !!~this.$parent.model.indexOf(val) : this.$parent.model[0] === val;
	        },
	        v2m: function v2m() {
	            this.active = this.ischeckbox ? !this.active : true;
	            this.getval();
	        },
	        getval: function getval() {
	            var pmodel = this.$parent.model,
	                val = this.vkey;
	            if (this.ischeckbox) {
	                if (this.active) {
	                    pmodel.push(val);
	                } else {
	                    pmodel.splice(pmodel.indexOf(val), 1);
	                }
	            } else {
	                this.$parent.$children.forEach(function (item) {
	                    item.active = false;
	                });
	                pmodel.splice(pmodel.indexOf(val), 1);
	                pmodel.push(val);
	                this.m2v();
	            }
	        }
	    },
	    computed: {
	        ischeckbox: function ischeckbox() {
	            return this.$parent.type === 'checkbox';
	        }
	    }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: 'table-view-cell item' + (_vm.active ? ' active' : ''),
	    on: {
	      "click": _vm.v2m
	    }
	  }, [_c('label', {
	    class: _vm.hasicon ? 'check-cion' : ''
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-9256863a", module.exports)
	  }
	}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(26)
	
	/* script */
	__vue_exports__ = __webpack_require__(28)
	
	/* template */
	var __vue_template__ = __webpack_require__(29)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\checks.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-276e80a0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-276e80a0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] checks.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-276e80a0!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checks.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-276e80a0!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checks.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.input-row {\n  height: 40px;\n  line-height: 25px;\n}\n.input-row label {\n    height: 40px;\n}\n.input-row .input {\n    float: right;\n    height: 40px;\n    width: 65%;\n    margin-bottom: 0;\n    border: 0;\n    background: none;\n    box-shadow: none;\n}\n.input-row select {\n    padding: 10px 15px !important;\n}\n.input-row .toggle {\n    width: 50px;\n    height: 30px;\n    margin: 5px 13px;\n    border: 2px solid #e6e6e6;\n}\n.input-row .input-select {\n    margin-top: 3px;\n}\n.checkbox,\n.radio {\n  position: relative;\n}\n.checkbox label,\n  .radio label {\n    cursor: pointer;\n}\n.checkbox label:before,\n  .checkbox label:after,\n  .radio label:before,\n  .radio label:after {\n    font-family: FontAwesome;\n    font-size: 21px;\n    /*absolutely positioned*/\n    position: absolute;\n    top: 11px;\n    width: 22px;\n    height: 22px;\n    border-radius: 22px;\n    box-sizing: border-box;\n    background-color: #007aff;\n    content: '';\n}\n.checkbox label:after,\n  .radio label:after {\n    content: '';\n    background: no-repeat center;\n    -webkit-background-size: 12px 9px;\n    background-size: 12px 9px;\n    max-width: 0;\n    overflow: hidden;\n    opacity: 0.5;\n    transition: all 0.2s;\n}\n.checkbox input[type=\"checkbox\"],\n  .checkbox input[type=\"radio\"],\n  .radio input[type=\"checkbox\"],\n  .radio input[type=\"radio\"] {\n    display: none;\n}\n.checkbox input[type=\"checkbox\"]:checked ~ label:after,\n  .checkbox input[type=\"radio\"]:checked ~ label:after,\n  .checkbox .item.active label:after,\n  .radio input[type=\"checkbox\"]:checked ~ label:after,\n  .radio input[type=\"radio\"]:checked ~ label:after,\n  .radio .item.active label:after {\n    max-width: 25px;\n    /*an arbitratry number more than the icon's width*/\n    opacity: 1;\n    /*for fade in effect*/\n}\n.checkbox label:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E\");\n}\n.radio label:after {\n  background: #FFFFFF;\n  width: 8px;\n  height: 8px;\n  margin: 7px;\n}\n.checkbox-left label,\n.radio-left label {\n  padding-left: 30px;\n}\n.checkbox-left label:before,\n.checkbox-left label:after,\n.radio-left label:before,\n.radio-left label:after {\n  left: 0.625rem;\n}\n.checkbox-right label:before,\n.checkbox-right label:after,\n.radio-right label:before,\n.radio-right label:after {\n  right: 0.625rem;\n}\n", "", {"version":3,"sources":["/./src/checks.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,aAAa;EACb,kBAAkB;CAAE;AACpB;IACE,aAAa;CAAE;AACjB;IACE,aAAa;IACb,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,iBAAiB;IACjB,iBAAiB;CAAE;AACrB;IACE,8BAA8B;CAAE;AAClC;IACE,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,0BAA0B;CAAE;AAC9B;IACE,gBAAgB;CAAE;AAEtB;;EAEE,mBAAmB;CAAE;AACrB;;IAEE,gBAAgB;CAAE;AACpB;;;;IAIE,yBAAyB;IACzB,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,uBAAuB;IACvB,0BAA0B;IAC1B,YAAY;CAAE;AAChB;;IAEE,YAAY;IACZ,6BAA6B;IAC7B,kCAAkC;IAClC,0BAA0B;IAC1B,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,qBAAqB;CAAE;AACzB;;;;IAIE,cAAc;CAAE;AAClB;;;;;;IAME,gBAAgB;IAChB,mDAAmD;IACnD,WAAW;IACX,sBAAsB;CAAE;AAE5B;EACE,gWAAgW;CAAE;AAEpW;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,YAAY;CAAE;AAEhB;;EAEE,mBAAmB;CAAE;AAEvB;;;;EAIE,eAAe;CAAE;AAEnB;;;;EAIE,gBAAgB;CAAE","file":"checks.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.input-row {\n  height: 40px;\n  line-height: 25px; }\n  .input-row label {\n    height: 40px; }\n  .input-row .input {\n    float: right;\n    height: 40px;\n    width: 65%;\n    margin-bottom: 0;\n    border: 0;\n    background: none;\n    box-shadow: none; }\n  .input-row select {\n    padding: 10px 15px !important; }\n  .input-row .toggle {\n    width: 50px;\n    height: 30px;\n    margin: 5px 13px;\n    border: 2px solid #e6e6e6; }\n  .input-row .input-select {\n    margin-top: 3px; }\n\n.checkbox,\n.radio {\n  position: relative; }\n  .checkbox label,\n  .radio label {\n    cursor: pointer; }\n  .checkbox label:before,\n  .checkbox label:after,\n  .radio label:before,\n  .radio label:after {\n    font-family: FontAwesome;\n    font-size: 21px;\n    /*absolutely positioned*/\n    position: absolute;\n    top: 11px;\n    width: 22px;\n    height: 22px;\n    border-radius: 22px;\n    box-sizing: border-box;\n    background-color: #007aff;\n    content: ''; }\n  .checkbox label:after,\n  .radio label:after {\n    content: '';\n    background: no-repeat center;\n    -webkit-background-size: 12px 9px;\n    background-size: 12px 9px;\n    max-width: 0;\n    overflow: hidden;\n    opacity: 0.5;\n    transition: all 0.2s; }\n  .checkbox input[type=\"checkbox\"],\n  .checkbox input[type=\"radio\"],\n  .radio input[type=\"checkbox\"],\n  .radio input[type=\"radio\"] {\n    display: none; }\n  .checkbox input[type=\"checkbox\"]:checked ~ label:after,\n  .checkbox input[type=\"radio\"]:checked ~ label:after,\n  .checkbox .item.active label:after,\n  .radio input[type=\"checkbox\"]:checked ~ label:after,\n  .radio input[type=\"radio\"]:checked ~ label:after,\n  .radio .item.active label:after {\n    max-width: 25px;\n    /*an arbitratry number more than the icon's width*/\n    opacity: 1;\n    /*for fade in effect*/ }\n\n.checkbox label:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E\"); }\n\n.radio label:after {\n  background: #FFFFFF;\n  width: 8px;\n  height: 8px;\n  margin: 7px; }\n\n.checkbox-left label,\n.radio-left label {\n  padding-left: 30px; }\n\n.checkbox-left label:before,\n.checkbox-left label:after,\n.radio-left label:before,\n.radio-left label:after {\n  left: 0.625rem; }\n\n.checkbox-right label:before,\n.checkbox-right label:after,\n.radio-right label:before,\n.radio-right label:after {\n  right: 0.625rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        type: {
	            type: String,
	            default: 'checkbox' //radio options
	        },
	        model: {
	            required: true
	        },
	        position: {
	            type: String,
	            default: 'right'
	        }
	    }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    class: ("table-view " + _vm.type + " " + _vm.type + "-" + _vm.position)
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-276e80a0", module.exports)
	  }
	}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(31)
	
	/* script */
	__vue_exports__ = __webpack_require__(33)
	
	/* template */
	var __vue_template__ = __webpack_require__(34)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\datepicker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2b164a1e"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2b164a1e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2b164a1e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] datepicker.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b164a1e&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./datepicker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b164a1e&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.calendar[data-v-2b164a1e] {\n  width: 300px;\n  background: #fff;\n  border: 1px solid #dedede;\n  border-radius: 2px;\n  opacity: 0.95;\n  transition: all 0.5s ease;\n  z-index: 100;\n}\n.calendar.calendar-popup[data-v-2b164a1e] {\n  position: absolute;\n}\n.calendar.calendar-static[data-v-2b164a1e] {\n  width: 100%;\n}\n.calendar-enter[data-v-2b164a1e],\n.calendar-leave-active[data-v-2b164a1e] {\n  opacity: 0;\n  transform: translate3d(0, -10px, 0);\n}\n.calendar[data-v-2b164a1e]:before {\n  position: absolute;\n  left: 30px;\n  top: -10px;\n  content: '';\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #dedede;\n}\n.calendar[data-v-2b164a1e]:after {\n  position: absolute;\n  left: 30px;\n  top: -9px;\n  content: '';\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.calendar-panes[data-v-2b164a1e] {\n  background: #fff;\n}\n.calendar-tools[data-v-2b164a1e] {\n  color: #ff6c1a;\n  text-align: center;\n}\n.calendar-tools input[data-v-2b164a1e] {\n  color: #ff6c1a;\n  width: 60px;\n  text-align: center;\n  border: none;\n  background-color: transparent;\n}\n.calendar-tools > i[data-v-2b164a1e] {\n  margin: 0 16px;\n  cursor: pointer;\n  color: #707070;\n}\n.calendar-tools > i[data-v-2b164a1e]:hover {\n  color: #ff6c1a;\n}\n.calendar table[data-v-2b164a1e] {\n  clear: both;\n  width: 100%;\n  border-collapse: collapse;\n  color: #444444;\n}\n.calendar td[data-v-2b164a1e] {\n  text-align: center;\n  font-size: 13px;\n  color: #000;\n  font-weight: 500;\n  position: relative;\n  cursor: pointer;\n  width: 14.28%;\n}\n.calendar td[data-v-2b164a1e]:hover {\n  background: #f3f8fa;\n}\n.calendar td.week[data-v-2b164a1e] {\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.calendar td.disabled[data-v-2b164a1e] {\n  color: #c0c0c0;\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.calendar td.selected[data-v-2b164a1e] {\n  color: #fff;\n}\n.calendar td.selected .day-addon[data-v-2b164a1e] {\n  color: #fff;\n}\n.calendar td.selected .day-area[data-v-2b164a1e] {\n  background-color: #ff6c1a;\n}\n.calendar thead td[data-v-2b164a1e] {\n  padding: 0;\n  height: 20px;\n  text-transform: uppercase;\n  color: #a1a1a1;\n  font-size: 12px;\n  background-color: #f7f7f7;\n}\n.calendar .timer[data-v-2b164a1e] {\n  margin: 10px 0;\n  text-align: center;\n}\n.calendar .timer input[data-v-2b164a1e] {\n  border-radius: 2px;\n  padding: 5px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #ff6c1a;\n  width: 50px;\n  text-align: center;\n  border: 1px solid #efefef;\n}\n.calendar .timer input[data-v-2b164a1e]:focus {\n  border: 1px solid #ff6c1a;\n}\n.calendar-button[data-v-2b164a1e] {\n  text-align: center;\n}\n.calendar-button button[data-v-2b164a1e] {\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  min-width: 8em;\n  vertical-align: baseline;\n  background: #ff6c1a;\n  color: #fff;\n  margin: 0 0.25em 0 0;\n  padding: 0.8em 2.5em;\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  border-radius: 0.3em;\n}\n.calendar-button button.cancel[data-v-2b164a1e] {\n  background: #efefef;\n  color: #666;\n}\n.calendar td.selected .lunar[data-v-2b164a1e] {\n  color: #fff;\n}\n.calendar-header[data-v-2b164a1e] {\n  position: relative;\n  padding: 5px;\n  font-size: 20px;\n  line-height: 32px;\n}\n.icon-left[data-v-2b164a1e],\n.icon-right[data-v-2b164a1e] {\n  position: absolute;\n  top: 15px;\n  text-indent: -2000px;\n}\n.icon-left[data-v-2b164a1e] {\n  border-right: 2px solid #333;\n  border-bottom: 2px solid #333;\n  height: 10px;\n  width: 10px;\n  transform: rotate(135deg);\n  left: 25px;\n}\n.icon-right[data-v-2b164a1e] {\n  border-right: 2px solid #333;\n  border-bottom: 2px solid #333;\n  height: 10px;\n  width: 10px;\n  transform: rotate(-45deg);\n  right: 25px;\n}\n.day-area[data-v-2b164a1e] {\n  padding: 8px 0;\n  border-radius: 4px;\n  margin: 5px;\n}\n.lunar[data-v-2b164a1e],\n.day-addon[data-v-2b164a1e] {\n  font-size: 8px;\n  line-height: 10px;\n  color: #a1a1a1;\n}\n", "", {"version":3,"sources":["/./src/datepicker.vue"],"names":[],"mappings":";AAAA;EACE,aAAa;EACb,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;EACnB,cAAc;EACd,0BAA0B;EAC1B,aAAa;CACd;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;;EAEE,WAAW;EACX,oCAAoC;CACrC;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,6BAA6B;CAC9B;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,mCAAmC;EACnC,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,8BAA8B;CAC/B;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,YAAY;EACZ,0BAA0B;EAC1B,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;CACf;AACD;EACE,oBAAoB;CACrB;AACD;EACE,gCAAgC;EAChC,2BAA2B;CAC5B;AACD;EACE,eAAe;EACf,gCAAgC;EAChC,2BAA2B;CAC5B;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,WAAW;EACX,aAAa;EACb,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;EAChB,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,oBAAoB;EACpB,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;CACtB;AACD;EACE,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;CACnB;AACD;;EAEE,mBAAmB;EACnB,UAAU;EACV,qBAAqB;CACtB;AACD;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,WAAW;CACZ;AACD;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,YAAY;CACb;AACD;;EAEE,eAAe;EACf,kBAAkB;EAClB,eAAe;CAChB","file":"datepicker.vue","sourcesContent":[".calendar {\n  width: 300px;\n  background: #fff;\n  border: 1px solid #dedede;\n  border-radius: 2px;\n  opacity: 0.95;\n  transition: all 0.5s ease;\n  z-index: 100;\n}\n.calendar.calendar-popup {\n  position: absolute;\n}\n.calendar.calendar-static {\n  width: 100%;\n}\n.calendar-enter,\n.calendar-leave-active {\n  opacity: 0;\n  transform: translate3d(0, -10px, 0);\n}\n.calendar:before {\n  position: absolute;\n  left: 30px;\n  top: -10px;\n  content: '';\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #dedede;\n}\n.calendar:after {\n  position: absolute;\n  left: 30px;\n  top: -9px;\n  content: '';\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.calendar-panes {\n  background: #fff;\n}\n.calendar-tools {\n  color: #ff6c1a;\n  text-align: center;\n}\n.calendar-tools input {\n  color: #ff6c1a;\n  width: 60px;\n  text-align: center;\n  border: none;\n  background-color: transparent;\n}\n.calendar-tools > i {\n  margin: 0 16px;\n  cursor: pointer;\n  color: #707070;\n}\n.calendar-tools > i:hover {\n  color: #ff6c1a;\n}\n.calendar table {\n  clear: both;\n  width: 100%;\n  border-collapse: collapse;\n  color: #444444;\n}\n.calendar td {\n  text-align: center;\n  font-size: 13px;\n  color: #000;\n  font-weight: 500;\n  position: relative;\n  cursor: pointer;\n  width: 14.28%;\n}\n.calendar td:hover {\n  background: #f3f8fa;\n}\n.calendar td.week {\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.calendar td.disabled {\n  color: #c0c0c0;\n  pointer-events: none !important;\n  cursor: default !important;\n}\n.calendar td.selected {\n  color: #fff;\n}\n.calendar td.selected .day-addon {\n  color: #fff;\n}\n.calendar td.selected .day-area {\n  background-color: #ff6c1a;\n}\n.calendar thead td {\n  padding: 0;\n  height: 20px;\n  text-transform: uppercase;\n  color: #a1a1a1;\n  font-size: 12px;\n  background-color: #f7f7f7;\n}\n.calendar .timer {\n  margin: 10px 0;\n  text-align: center;\n}\n.calendar .timer input {\n  border-radius: 2px;\n  padding: 5px;\n  font-size: 14px;\n  line-height: 18px;\n  color: #ff6c1a;\n  width: 50px;\n  text-align: center;\n  border: 1px solid #efefef;\n}\n.calendar .timer input:focus {\n  border: 1px solid #ff6c1a;\n}\n.calendar-button {\n  text-align: center;\n}\n.calendar-button button {\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  min-width: 8em;\n  vertical-align: baseline;\n  background: #ff6c1a;\n  color: #fff;\n  margin: 0 0.25em 0 0;\n  padding: 0.8em 2.5em;\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  border-radius: 0.3em;\n}\n.calendar-button button.cancel {\n  background: #efefef;\n  color: #666;\n}\n.calendar td.selected .lunar {\n  color: #fff;\n}\n.calendar-header {\n  position: relative;\n  padding: 5px;\n  font-size: 20px;\n  line-height: 32px;\n}\n.icon-left,\n.icon-right {\n  position: absolute;\n  top: 15px;\n  text-indent: -2000px;\n}\n.icon-left {\n  border-right: 2px solid #333;\n  border-bottom: 2px solid #333;\n  height: 10px;\n  width: 10px;\n  transform: rotate(135deg);\n  left: 25px;\n}\n.icon-right {\n  border-right: 2px solid #333;\n  border-bottom: 2px solid #333;\n  height: 10px;\n  width: 10px;\n  transform: rotate(-45deg);\n  right: 25px;\n}\n.day-area {\n  padding: 8px 0;\n  border-radius: 4px;\n  margin: 5px;\n}\n.lunar,\n.day-addon {\n  font-size: 8px;\n  line-height: 10px;\n  color: #a1a1a1;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  model: {
	    prop: 'value', // Rename from default 'value' property.
	    event: 'change' // Rename from default 'input' event.
	  },
	  props: {
	    //显示未来几个月的日历 (0为一年)
	    //普通日历(1)  是否选择双日历面板(2), 或展开型的日历面板(0)
	    monthes: {
	      type: Number,
	      default: 1 // 1, 2, 0
	    },
	    popup: {
	      //是否浮层显示
	      type: Boolean,
	      default: false
	    },
	    dayAddon: {
	      type: Function,
	      default: function _default() {}
	    },
	    //type仅日期date //datatime 日期与时间
	    type: {
	      type: String,
	      default: 'date'
	    },
	    //默认值
	    value: '',
	    //日历是否显示与选择后自动隐藏
	    show: {
	      type: Boolean,
	      default: false
	    },
	    autohide: {
	      type: Boolean,
	      default: false
	    },
	    //日历坐标x, y
	    x: {
	      type: Number,
	      default: 0
	    },
	    y: {
	      type: Number,
	      default: 0
	    },
	    // min max 允许操作的日期范围
	    min: {
	      type: String,
	      default: ''
	    },
	    max: {
	      type: String,
	      default: ''
	    },
	    //双联日期选择器的第二个选择器有些属性。其值需为第一个选择器的值
	    begin: {
	      type: String,
	      default: ''
	    },
	    end: {
	      type: String,
	      default: ''
	    },
	    // 是否允许阴历lunar|节气terms|节日festival
	    lunar: {
	      type: Boolean,
	      default: false
	    },
	    terms: {
	      type: Boolean,
	      default: false
	    },
	    festival: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      //注意传进去的month为5即五月, 在程序里月份都应该是4(即this.month=5，即为5月)
	      year: 0,
	      month: 0,
	      day: 0,
	      hour: 0,
	      minute: 0,
	      second: 0,
	      sep: '-',
	      days: [],
	      innerShow: this.show,
	      innerValue: this.value,
	      innerMin: this.min,
	      innerMax: this.max,
	      selected: [],
	      weeksHan: ['日', '一', '二', '三', '四', '五', '六'],
	      weeksEng: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	      months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	      monthsEng: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	      monthsHan: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
	      lunarStr: ['初', '十', '廿', '三'],
	      lunardays: {
	        '0101': '春节',
	        '0115': '元宵',
	        '0505': '端午',
	        '0707': '七夕',
	        '0715': '中元',
	        '0815': '中秋',
	        '0909': '重阳',
	        '1208': '腊八',
	        '1224': '小年'
	      },
	      salardays: {
	        '0101': '元旦',
	        '0214': '情人节',
	        '0308': '妇女节',
	        '0312': '植树节',
	        '0401': '愚人节',
	        '0501': '劳动节',
	        '0504': '青年节',
	        '0601': '儿童节',
	        '0701': '建党节',
	        '0801': '建军节',
	        '0910': '教师节',
	        '1001': '国庆节',
	        '1224': '平安夜',
	        '1225': '圣诞'
	      }
	    };
	  },
	  created: function created() {
	    var now = new Date();
	    // 如果有默认值
	    if (this.innerValue) {
	      var timeAtom = this.gettime(this.innerValue);
	      this.year = timeAtom[0];
	      this.month = timeAtom[1];
	      this.day = timeAtom[2];
	      if (this.type == 'datetime') {
	        this.hour = timeAtom[3] || 0;
	        this.minute = timeAtom[4] || 0;
	        this.second = timeAtom[5] || 0;
	      }
	    } else {
	      //取当前时间为默认值
	      this.year = now.getFullYear();
	      this.month = now.getMonth() + 1;
	      this.day = now.getDate();
	      this.hour = this.zero(now.getHours());
	      this.minute = this.zero(now.getMinutes());
	      this.second = this.zero(now.getSeconds());
	    }
	    this.render(this.year, this.month);
	  },
	  watch: {
	    innerShow: function innerShow(val) {
	      this.show = val;
	    },
	    value: function value(val) {
	      var dateStr = val.split('-');
	      this.innerValue = val;
	      this.render(dateStr[0], dateStr[1]);
	    },
	    innerValue: function innerValue(value) {
	      this.$emit('change', value);
	    },
	    show: function show(val) {
	      this.innerShow = val;
	      if (val) {
	        this.render(this.year, this.month);
	      }
	    }
	  },
	  methods: {
	    zero: function zero(n) {
	      return n < 10 ? '0' + n : n;
	    },
	    //time string 2 time element array;
	    gettime: function gettime(dateStr) {
	      if (typeof dateStr !== 'string') {
	        console.warn('date value must be string; for example 1900-01-01');
	        return [];
	      }
	      var arr = [];
	      dateStr.replace(/\d+/g, function ($i) {
	        arr.push(parseInt($i, 10));
	      });
	      return arr;
	    },
	    //计算几个月后的年与月
	    addmonths: function addmonths(y, m, addmonth) {
	      var total = m + addmonth,
	          next = total > 12,
	          prev = total < 1;
	      return next ? {
	        y: y + 1,
	        m: total - 12
	      } : prev ? {
	        y: y - 1,
	        m: 12 + total
	      } : {
	        y: y,
	        m: total
	      };
	    },
	    //获取某天的所有信息 m+1才是显示用的月分
	    getDayInfo: function getDayInfo(y, m, d) {
	      var date = new Date(y, m, d);
	      var dayinfo = {
	        day: d,
	        month: m,
	        year: y,
	        date: date,
	        lunar: this.getLunarInfo(date),
	        sterm: this.solarTermInfo(y, m)[d],
	        salarfest: this.salardays[this.zero(m + 1) + this.zero(d)] //这里的月份用的是视图的
	      };
	      dayinfo.lunarfest = this.lunardays[this.zero(dayinfo.lunar.month) + this.zero(dayinfo.lunar.day)];
	      dayinfo.tolunar = this.tolunar(dayinfo.lunar.day);
	      dayinfo.outadd = this.outadd(dayinfo);
	      if (this.dayAddon) {
	        dayinfo.addon = this.dayAddon(dayinfo);
	      }
	      return dayinfo;
	    },
	    //显示的附加日历信息， 优先级是: 节日>节气>今天>农历
	    outadd: function outadd(daysinfo) {
	      return daysinfo.lunarfest ? daysinfo.lunarfest : daysinfo.salarfest ? daysinfo.salarfest : daysinfo.sterm ? daysinfo.sterm : daysinfo.tolunar;
	    },
	    //将农历数字转化为汉字
	    tolunar: function tolunar(d) {
	      var dstr = d + '',
	          str = this.monthsHan,
	          leftDeco = this.lunarStr[0],
	          rightNum = dstr.length < 2 ? '' : dstr.substring(1),
	          rightDeco = rightNum === '0' ? '十' : str[Number(rightNum) - 1];
	      if (d > 10) {
	        leftDeco = this.lunarStr[1];
	        if (d >= 20) {
	          leftDeco = this.lunarStr[2];
	          if (d >= 30) {
	            leftDeco = this.lunarStr[3];
	          }
	        }
	      }
	      return leftDeco + (dstr.length < 2 ? str[d - 1] : rightDeco);
	    },
	    //calc is between by year|month|day, for performance, no new Date()
	    //传入时为m为Date对象里的month, 比较时m为字符意义上的month
	    isBetween: function isBetween(y, m, d, min, max) {
	      var between = true;
	      m = m + 1;
	      if (min) {
	        var bdate = this.gettime(min);
	        var by = bdate[0],
	            bm = bdate[1],
	            bd = bdate[2];
	        if (y < by) {
	          between = false;
	        } else if (y == by) {
	          if (m < bm) {
	            between = false;
	          } else if (m == bm) {
	            if (d < bd) {
	              between = false;
	            }
	          }
	        }
	      }
	      if (max) {
	        var edate = this.gettime(max);
	        var ey = edate[0],
	            em = edate[1],
	            ed = edate[2];
	        if (y > ey) {
	          between = false;
	        } else if (y == ey) {
	          if (m > em) {
	            between = false;
	          } else if (m == em) {
	            if (d > ed) {
	              between = false;
	            }
	          }
	        }
	      }
	      // console.log(y, m, d, min, max, between, 'between');
	      return between;
	    },
	    //计算渲染每个月的日历数据
	    //考虑已有值的需要选择状态
	    //已有begin/end范围的需要禁止可点击状态
	    //多维数组即日历面板数据[[1month[1row][2row][2month[1row][2row]]
	    calcPane: function calcPane(y, m) {
	      var that = this,
	          options,
	          line = 0,
	          temp = [];
	      m = m - 1;
	      var prevMonthLastDate = new Date(y, m, 0).getDate(); //前一个月的最后一天
	      var currMonth1DayWeek = new Date(y, m, 1).getDay(); //当月第一天星期
	      var currMonthLastDate = new Date(y, m + 1, 0).getDate(); //当月最后一天
	
	      //第一行(上个月)
	      temp[line] = [];
	      if (currMonth1DayWeek) {
	        var k = prevMonthLastDate - currMonth1DayWeek + 1;
	        for (var j = 0; j < currMonth1DayWeek; j++) {
	          options = that.getDayInfo(y, m - 1, k);
	          options.disabled = true;
	          temp[line].push(options);
	          k++;
	        }
	      }
	
	      var begin = this.begin || this.innerValue; //没有begin时即为this.innerValue一个值非范围
	      var end = this.end || this.innerValue;
	      if (this.begin) {
	        this.innerMin = this.begin;
	      }
	      if (this.end) {
	        this.innerMax = this.end;
	      }
	
	      //当前月
	      for (var i = 1; i <= currMonthLastDate; i++) {
	        options = that.getDayInfo(y, m, i);
	        options.disabled = !this.isBetween(y, m, i, this.innerMin, this.innerMax);
	
	        if (begin && end) {
	          options.selected = this.isBetween(y, m, i, begin, end);
	        }
	
	        var index = [0, line, new Date(y, m, i).getDay()].join('/');
	        if (options.selected && !~this.selected.indexOf(index)) {
	          this.selected.push(index);
	        }
	        var dow = new Date(y, m, i).getDay(); //week
	        if (dow == 0) {
	          temp[line] = [];
	        }
	        temp[line].push(options);
	        if (dow == 6) {
	          line++;
	        }
	      }
	      //最后一行(下个月)
	      var kk = 1;
	      for (dow; dow < 6; dow++) {
	        options = that.getDayInfo(y, m + 1, kk);
	        options.disabled = true;
	        temp[line].push(options);
	        kk++;
	      }
	      return temp;
	    },
	    //渲染 monthes 个月的日历数据
	    render: function render(y, m) {
	      this.currentMonth = m;
	      this.days = [this.calcPane(y, m)];
	      if (this.monthes !== 1) {
	        var daysarr = [];
	        for (var i = 0; i < this.monthes; i++) {
	          var month = m + i;
	          if (month > 12) {
	            month = month - 12;
	            if (month === 12) y++;
	          }
	          daysarr.push(this.calcPane(y, month));
	        }
	        this.days = daysarr;
	      }
	    },
	    prev: function prev(e) {
	      var ym = this.addmonths(this.year, this.month--, -1);
	      this.year = ym.y;
	      this.month = ym.m;
	      this.render(ym.y, ym.m);
	    },
	    next: function next(e) {
	      var ym = this.addmonths(this.year, this.month++, 1);
	      this.year = ym.y;
	      this.month = ym.m;
	      this.render(ym.y, ym.m);
	    },
	    //k0,第几月的面板， k1行，k2列
	    select: function select(k0, k1, k2, e) {
	      var that = this,
	          date = this.days[k0][k1][k2];
	      this.day = date.day;
	      this.currentMonth = date.month + 1;
	      this.month = this.currentMonth;
	
	      this.setRange(false);
	      var selval = date.year + '-' + this.zero(this.currentMonth) + '-' + this.zero(date.day);
	
	      if (!this.begin) {
	        this.selected = [[k0, k1, k2].join('/')];
	      } else {
	        this.selected = [];
	        this.days.forEach(function (month, i) {
	          month.forEach(function (row, ind) {
	            row.forEach(function (day, index) {
	              day.selected = that.isBetween(day.year, day.month, day.day, that.begin, selval);
	              var arrindex = [i, ind, index].join('/');
	              if (day.selected && !~that.selected.indexOf(arrindex)) {
	                that.selected.push(arrindex);
	              }
	            });
	          });
	        });
	      }
	      this.setRange(true);
	      var d = this.addmonths(this.year, this.month, k0);
	      this.innerValue = this.output([d.y, d.m, this.day]);
	      if (this.autohide && this.type == 'date') {
	        this.innerShow = false;
	      }
	      this.render(d.y, d.m);
	    },
	    // 根据日期或日期坐标获取坐标范围数组
	    getRange: function getRange(begin, end) {
	      // [0, 0, 0]
	      // [1, 6, 5]
	      var endDay = this.days[end[0]][end[1]][end[2]];
	      var days = (new Date(end) - new Date(begin)) / 3600000 * 24;
	      for (var i = 0; i < days; i++) {
	        // this.days[]
	      }
	    },
	    setRange: function setRange(isSelect) {
	      var selected = this.selected;
	      for (var s = 0; s < selected.length; s++) {
	        var si = selected[s].split('/');
	        // console.log(this.days[si[0]][si[1]][si[2]], 'si');
	        var siitem = this.days[si[0]][si[1]];
	        if (siitem) {
	          siitem[si[2]].selected = isSelect; // 设置当前范围选中
	        }
	      }
	    },
	    ok: function ok() {
	      this.innerValue = this.output([this.year, this.month, this.day, this.hour, this.minute, this.second]);
	      this.innerShow = false;
	    },
	    cancel: function cancel() {
	      this.innerShow = false;
	    },
	    // 格式化输出
	    output: function output(args) {
	      if (this.type == 'date') {
	        return args[0] + this.sep + this.zero(args[1]) + this.sep + this.zero(args[2]);
	      }
	      if (this.type == 'time') {
	        return this.zero(args[3]) + ':' + this.zero(args[4]) + ':' + this.zero(args[5]);
	      }
	      if (this.type == 'datetime') {
	        return args[0] + this.sep + this.zero(args[1]) + this.sep + this.zero(args[2]) + ' ' + this.zero(args[3]) + ':' + this.zero(args[4]) + ':' + this.zero(args[5]);
	      }
	    },
	
	    // 农历二十四节气，相关代码在网络上获取并修改
	    solarTermInfo: function () {
	      //refs: https://www.cnblogs.com/bluedream2009/archive/2010/06/02/1750359.html
	      var sTermMap = '0|gd4|wrn|1d98|1tuh|2akm|2rfn|38g9|3plp|46vz|4o9k|55px|5n73|64o5|6m37|73fd|7kna|81qe|8io7|8zgq|9g4b|9wnk|ad3g|ath2|'.split('|');
	      var sTermNames = '小寒|大寒|立春|雨水|惊蛰|春分|清明|谷雨|立夏|小满|芒种|夏至|小暑|大暑|立秋|处暑|白露|秋分|寒露|霜降|立冬|小雪|大雪|冬至'.split('|');
	      for (var i = 24; i--;) {
	        sTermMap[i] = parseInt(sTermMap[i], 36);
	      }function term(y, n) {
	        var d = new Date(31556925974.7 * (y - 1900) + sTermMap[n] * 60000 + Date.UTC(1900, 0, 6, 2, 5));
	        return {
	          m: d.getUTCMonth(),
	          d: d.getUTCDate()
	        };
	      }
	
	      function getTerm(y, m, d) {
	        for (var i = sTermNames.length, x; i--;) {
	          x = term(y, i);
	          if (x.m == m && x.d == d) return sTermNames[i];
	        }
	        return '';
	      }
	
	      // 返回该月的节气信息
	      var getMonthSolarTerms = function getMonthSolarTerms(year, month) {
	        if (year instanceof Date) {
	          month = year.getMonth();
	          year = year.getFullYear();
	        }
	        var ret = {},
	            index;
	        index = term(year, month * 2).d;
	        ret[index] = getTerm(year, month, index);
	        index = term(year, month * 2 + 1).d;
	        ret[index] = getTerm(year, month, index);
	        return ret;
	      };
	      return getMonthSolarTerms;
	    }(),
	
	    // 农历
	    getLunarInfo: function () {
	      // 农历月份信息表
	      var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0];
	
	      //传回农历 y 年的总天数
	      function lYearDays(y) {
	        var i,
	            sum = 348;
	        for (i = 0x8000; i > 0x8; i >>= 1) {
	          sum += lunarInfo[y - 1900] & i ? 1 : 0;
	        }return sum + leapDays(y);
	      }
	
	      //传回农历 y 年闰月的天數
	      function leapDays(y) {
	        if (leapMonth(y)) return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;else return 0;
	      }
	
	      //传回农历 y 年闰哪个月 1-12 , 沒闰传回 0
	      function leapMonth(y) {
	        return lunarInfo[y - 1900] & 0xf;
	      }
	
	      //传回农历 y 年m月的总天数
	      function monthDays(y, m) {
	        return lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
	      }
	
	      //公历转农历
	      function convertToLunar(objDate) {
	        var i,
	            leap = 0,
	            temp = 0;
	        var baseDate = new Date(1900, 0, 31);
	        var offset = (objDate - baseDate) / 86400000;
	
	        var result = {};
	        result.dayCyl = offset + 40;
	        result.monCyl = 14;
	
	        for (i = 1900; i < 2050 && offset > 0; i++) {
	          temp = lYearDays(i);
	          offset -= temp;
	          result.monCyl += 12;
	        }
	
	        if (offset < 0) {
	          offset += temp;
	          i--;
	          result.monCyl -= 12;
	        }
	
	        result.year = i;
	        result.yearCyl = i - 1864;
	
	        leap = leapMonth(i); //闰哪个月
	        result.isLeap = false;
	
	        for (i = 1; i < 13 && offset > 0; i++) {
	          //闰月
	          if (leap > 0 && i == leap + 1 && result.isLeap == false) {
	            --i;
	            result.isLeap = true;
	            temp = leapDays(result.year);
	          } else {
	            temp = monthDays(result.year, i);
	          }
	
	          //解除闰月
	          if (result.isLeap == true && i == leap + 1) {
	            result.isLeap = false;
	          }
	
	          offset -= temp;
	          if (result.isLeap == false) {
	            result.monCyl++;
	          }
	        }
	
	        if (offset == 0 && leap > 0 && i == leap + 1) if (result.isLeap) {
	          result.isLeap = false;
	        } else {
	          result.isLeap = true;
	          --i;
	          --result.monCyl;
	        }
	
	        if (offset < 0) {
	          offset += temp;
	          --i;
	          --result.monCyl;
	        }
	
	        result.month = i;
	        result.day = offset + 1;
	        return result;
	      }
	
	      return convertToLunar;
	    }()
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.innerShow),
	      expression: "innerShow"
	    }],
	    class: ("calendar " + (_vm.popup ? 'calendar-popup':'calendar-static')),
	    style: ({
	      'left': _vm.x + 'px',
	      'top': _vm.y + 'px'
	    })
	  }, [_c('div', {
	    staticClass: "calendar-tools"
	  }, [_c('div', {
	    staticClass: "calendar-header"
	  }, [_c('i', {
	    staticClass: "icon-left",
	    on: {
	      "click": _vm.prev
	    }
	  }), _vm._v(" "), _c('i', {
	    staticClass: "icon-right",
	    on: {
	      "click": _vm.next
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "text center-inline"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model.number",
	      value: (_vm.year),
	      expression: "year",
	      modifiers: {
	        "number": true
	      }
	    }],
	    attrs: {
	      "type": "number",
	      "min": "1970",
	      "max": "2100",
	      "maxlength": "4"
	    },
	    domProps: {
	      "value": (_vm.year)
	    },
	    on: {
	      "change": function($event) {
	        _vm.render(_vm.year, _vm.month)
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.year = _vm._n($event.target.value)
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  }), _vm._v("/ " + _vm._s(_vm.month) + "\r\n            ")])]), _vm._v(" "), _vm._l((_vm.days), function(amonth, index) {
	    return _c('div', {
	      key: index,
	      staticClass: "calendar-panes"
	    }, [(_vm.monthes > 1) ? _c('div', {
	      staticClass: "text center-inline"
	    }, [(_vm.month + index <= 12) ? _c('span', [_vm._v(_vm._s(_vm.year) + "/" + _vm._s(_vm.month + index))]) : _c('span', [_vm._v(_vm._s(_vm.year + 1) + "/" + _vm._s(_vm.month + index - 12))])]) : _vm._e(), _vm._v(" "), _c('table', [_c('thead', [_c('tr', _vm._l((_vm.weeksHan), function(week) {
	      return _c('td', {
	        key: week,
	        staticClass: "week"
	      }, [_vm._v(_vm._s(week))])
	    }))]), _vm._v(" "), _vm._l((amonth), function(day, k1) {
	      return _c('tr', {
	        key: k1
	      }, _vm._l((day), function(child, k2) {
	        return _c('td', {
	          key: k2,
	          class: {
	            'selected': child.selected, 'disabled': child.disabled
	          },
	          on: {
	            "click": function($event) {
	              _vm.select(index, k1, k2, $event)
	            },
	            "touchstart": function($event) {
	              _vm.select(index, k1, k2, $event)
	            }
	          }
	        }, [_c('div', {
	          staticClass: "day-area"
	        }, [_c('div', [_vm._v(_vm._s(child.day))]), _vm._v(" "), (child.addon) ? _c('div', {
	          staticClass: "day-addon"
	        }, [_vm._v(_vm._s(child.addon))]) : _vm._e(), _vm._v(" "), (_vm.lunar) ? _c('div', {
	          staticClass: "lunar"
	        }, [_vm._v("\r\n                                " + _vm._s(child.outadd) + "\r\n                            ")]) : _vm._e()])])
	      }))
	    })], 2)])
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.type == 'datetime' || _vm.type == 'time'),
	      expression: "type=='datetime'||type=='time'"
	    }],
	    staticClass: "calendar-time"
	  }, [_c('div', {
	    staticClass: "timer"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model.number",
	      value: (_vm.hour),
	      expression: "hour",
	      modifiers: {
	        "number": true
	      }
	    }],
	    attrs: {
	      "type": "number",
	      "min": "0",
	      "max": "23",
	      "maxlength": "2"
	    },
	    domProps: {
	      "value": (_vm.hour)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.hour = _vm._n($event.target.value)
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  }), _vm._v("时\r\n                "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model.number",
	      value: (_vm.minute),
	      expression: "minute",
	      modifiers: {
	        "number": true
	      }
	    }],
	    attrs: {
	      "type": "number",
	      "min": "0",
	      "max": "59",
	      "maxlength": "2"
	    },
	    domProps: {
	      "value": (_vm.minute)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.minute = _vm._n($event.target.value)
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  }), _vm._v("分\r\n                "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model.number",
	      value: (_vm.second),
	      expression: "second",
	      modifiers: {
	        "number": true
	      }
	    }],
	    attrs: {
	      "type": "number",
	      "min": "0",
	      "max": "59",
	      "maxlength": "2"
	    },
	    domProps: {
	      "value": (_vm.second)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.second = _vm._n($event.target.value)
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  }), _vm._v("秒\r\n            ")])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.type == 'datetime' || _vm.type == 'time'),
	      expression: "type=='datetime'||type=='time'"
	    }],
	    staticClass: "calendar-button"
	  }, [_c('button', {
	    on: {
	      "click": _vm.ok
	    }
	  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
	    staticClass: "cancel",
	    on: {
	      "click": _vm.cancel
	    }
	  }, [_vm._v("取消")])])], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2b164a1e", module.exports)
	  }
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(36)
	
	/* script */
	__vue_exports__ = __webpack_require__(38)
	
	/* template */
	var __vue_template__ = __webpack_require__(109)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\datetime.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-74762470"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-74762470", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-74762470", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] datetime.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-74762470&scoped=true!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./datetime.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-74762470&scoped=true!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./datetime.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.v-options[data-v-74762470] {\n  float: left;\n}\n", "", {"version":3,"sources":["/./src/datetime.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;CAAE","file":"datetime.vue","sourcesContent":[".v-options {\n  float: left; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _date = __webpack_require__(39);
	
	var _option = __webpack_require__(40);
	
	var _option2 = _interopRequireDefault(_option);
	
	var _select = __webpack_require__(98);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _modal = __webpack_require__(102);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	__webpack_require__(108);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dpr = window.document.documentElement.getAttribute('data-dpr') || 1; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        show: {
	            default: false,
	            type: Boolean
	        },
	        datevalue: { //时间戳，最终获取的值
	            type: Number
	
	        },
	        max: {
	            type: Number
	        },
	        toastContent: {
	            type: String,
	            default: '选择已超出最大值'
	        }
	    },
	    components: {
	        voption: _option2.default,
	        vselect: _select2.default,
	        modal: _modal2.default
	    },
	    data: function data() {
	        return {
	            height: 165 * dpr,
	            dateObj: new Date(), //日历开始日期对象
	            date: [], //datatime select use
	            datestr: [], //datatime select use
	            // week: ['周日', '周一','周二','周三','周四','周五','周六'],
	            ampm: ['上午', '下午'],
	            hour: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	            minute: ['00', 10, 20, 30, 40, 50],
	            step: 33 * dpr,
	            toastShow: false,
	            innerShow: this.show
	        };
	    },
	
	    watch: {
	        innerShow: function innerShow(val) {
	            this.$emit('update:show', val);
	        },
	        show: function show(nv, ov) {
	            this.innerShow = nv;
	            this.days = (0, _date.dateDiff)(this.max);
	            if (this.days > 100) {
	                console.warn('这种场景可能不适用这个组件了');
	                return;
	            }
	            this.genDays(this.days);
	            this.dateObj = new Date(this.datevalue);
	            nv && this.dateSelected(this.dateObj);
	        }
	    },
	    methods: {
	        genDays: function genDays(days) {
	            var dateStrArr = [],
	                dateKeyArr = [];
	            for (var i = 0; i < days; i++) {
	                var idate = new Date(+_date.todayStart + 3600 * 1000 * 24 * i);
	                dateKeyArr.push(idate);
	                dateStrArr.push(this.$options.filters.dateFormat(idate, 'M月d日  周W'));
	            }
	            this.date = dateKeyArr;
	            this.datestr = dateStrArr;
	        },
	
	        //选择某个日期，或根据swipe选择， $event可以为时间或滑动事件
	        dateSelected: function dateSelected(curDate) {
	            var h = curDate.getHours(),
	                showh = h > 12 ? h - 12 : h;
	            this.selectItem(this.$refs.date, (0, _date.dateDiff)(curDate) - 1);
	            this.selectItem(this.$refs.ampm, h > 12 ? 1 : 0);
	            this.selectItem(this.$refs.hour, showh - 1);
	            this.selectItem(this.$refs.minute, Math.ceil(curDate.getMinutes() / 10));
	            this.dateObj = curDate;
	        },
	        selectItem: function selectItem($voption, index) {
	            $voption.$children[0].scrollTo(-index * this.step);
	            $voption.activeindex = index;
	        },
	        getVal: function getVal() {
	            this.datevalue = +this.dateObj;
	        },
	        setVal: function setVal() {
	            var h = !this.$refs.ampm.$children[0].steps ? this.$refs.hour.$children[0].steps : this.$refs.hour.$children[0].steps + 12;
	            this.dateObj = this.date[this.$refs.date.$children[0].steps];
	            this.dateObj.setHours(h + 1);
	            this.dateObj.setMinutes(this.$refs.minute.$children[0].steps * 10);
	            this.dateObj.setSeconds(0, 0);
	        },
	        onyes: function onyes() {
	            this.getVal();
	        },
	
	        //超过range 返回false
	        checkRange: function checkRange() {
	            this.setVal();
	            var maxDate = new Date(this.max);
	            var pass = +this.dateObj > this.max;
	            if (pass) {
	                this.dateSelected(maxDate);
	                this.toastShow = true;
	            }
	        }
	    }
	};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * date api封装
	 * @author Joe Liu
	 * @email icareu.joe@gmail.com
	 */
	function dateObject(date) {
	  if (!date) return date;
	  if (typeof date === 'string') {
	    //"2017-11-28T11:01:14.025Z" len=24
	    //'2017-10-10 00:00:00' len=19
	    //'2017-10-10' len=10
	    if (date.indexOf('/') && date.length < 24) {
	      date = date.replace(/-/g, '/');
	    }
	    date = date.length <= 10 ? new Date(date + ' 00:00:00') : new Date(date);
	  }
	  return date instanceof Date ? date : new Date(date);
	}
	
	function dateFormat(date, format) {
	  if (!date) return '';
	  var weeks = ['日', '一', '二', '三', '四', '五', '六'];
	  if (format === undefined) {
	    format = date;
	    date = new Date();
	  }
	  date = dateObject(date);
	  var map = {
	    M: date.getMonth() + 1, //月份
	    d: date.getDate(), //日
	    h: date.getHours(), //小时
	    m: date.getMinutes(), //分
	    s: date.getSeconds(), //秒
	    q: Math.floor((date.getMonth() + 3) / 3), //季度
	    S: date.getMilliseconds(), //毫秒
	    W: weeks[date.getDay()] //周
	  };
	  format = format.replace(/([yMdhmsqSW])+/g, function (all, t) {
	    var v = map[t];
	    if (v !== undefined) {
	      if (all.length > 1) {
	        v = '0' + v;
	        v = v.substr(v.length - 2);
	      }
	      return v;
	    } else if (t === 'y') {
	      return (date.getFullYear() + '').substr(4 - all.length);
	    }
	    return all;
	  });
	  return format;
	}
	var today = new Date();
	var todayStart = today.setHours(0, 0, 0, 0);
	var dateDiff = function dateDiff(timestape, time) {
	  return Math.ceil((timestape - (time ? time : +todayStart)) / (3600 * 1000 * 24));
	};
	
	var plusDay = function plusDay(date, num) {
	  num = num !== void 0 ? num : 1;
	  return new Date(+date + 3600000 * 24 * num);
	};
	
	var minusDay = function minusDay(date, num) {
	  return plusDay(-num);
	};
	
	exports.dateFormat = dateFormat;
	exports.dateDiff = dateDiff;
	exports.today = today;
	exports.todayStart = todayStart;
	exports.dateObject = dateObject;
	exports.plusDay = plusDay;
	exports.minusDay = minusDay;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(41)
	
	/* script */
	__vue_exports__ = __webpack_require__(43)
	
	/* template */
	var __vue_template__ = __webpack_require__(97)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\option.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d1b190ac", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d1b190ac", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] option.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d1b190ac!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./option.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d1b190ac!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.ui-options {\n  position: relative;\n  background-color: #efefef;\n  -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);\n}\n.ui-options .ui-cell {\n    flex: 1;\n    padding: 66px 0;\n}\n.ui-options .ui-cell .table-view-cell {\n      border: 0 none;\n      padding: 0;\n      height: 33px;\n      line-height: 33px;\n      text-align: center;\n      background-image: none !important;\n}\n.ui-options .ui-cell .table-view-cell a.navigate-right {\n        color: #999;\n        text-decoration: none;\n}\n.ui-options .ui-cell .table-view-cell.active a.navigate-right {\n        font-weight: bold;\n        color: #007aff;\n}\n.ui-options .ui-cell .table-view-cell > a:not(.btn) {\n        padding: 0;\n        margin: 0;\n}\n.ui-options .ui-cell .table-view-cell .navigate-right:after,\n      .ui-options .ui-cell .table-view-cell .push-right:after {\n        display: none;\n}\n.ui-options .ui-cell-yard {\n    top: 66px;\n    position: absolute;\n    height: 33px;\n    width: 100%;\n    border-top: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n    background-color: #fff;\n}\n.ui-options .table-view,\n  .ui-options .ui-scroll-content .ui-scroll-core {\n    background: none !important;\n    border: 0 none !important;\n}\n", "", {"version":3,"sources":["/./src/option.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,iIAAiI;CAAE;AACnI;IACE,QAAQ;IACR,gBAAgB;CAAE;AAClB;MACE,eAAe;MACf,WAAW;MACX,aAAa;MACb,kBAAkB;MAClB,mBAAmB;MACnB,kCAAkC;CAAE;AACpC;QACE,YAAY;QACZ,sBAAsB;CAAE;AAC1B;QACE,kBAAkB;QAClB,eAAe;CAAE;AACnB;QACE,WAAW;QACX,UAAU;CAAE;AACd;;QAEE,cAAc;CAAE;AACtB;IACE,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,uBAAuB;CAAE;AAC3B;;IAEE,4BAA4B;IAC5B,0BAA0B;CAAE","file":"option.vue","sourcesContent":[".ui-options {\n  position: relative;\n  background-color: #efefef;\n  -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent); }\n  .ui-options .ui-cell {\n    flex: 1;\n    padding: 66px 0; }\n    .ui-options .ui-cell .table-view-cell {\n      border: 0 none;\n      padding: 0;\n      height: 33px;\n      line-height: 33px;\n      text-align: center;\n      background-image: none !important; }\n      .ui-options .ui-cell .table-view-cell a.navigate-right {\n        color: #999;\n        text-decoration: none; }\n      .ui-options .ui-cell .table-view-cell.active a.navigate-right {\n        font-weight: bold;\n        color: #007aff; }\n      .ui-options .ui-cell .table-view-cell > a:not(.btn) {\n        padding: 0;\n        margin: 0; }\n      .ui-options .ui-cell .table-view-cell .navigate-right:after,\n      .ui-options .ui-cell .table-view-cell .push-right:after {\n        display: none; }\n  .ui-options .ui-cell-yard {\n    top: 66px;\n    position: absolute;\n    height: 33px;\n    width: 100%;\n    border-top: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n    background-color: #fff; }\n  .ui-options .table-view,\n  .ui-options .ui-scroll-content .ui-scroll-core {\n    background: none !important;\n    border: 0 none !important; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _scroll = __webpack_require__(44);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	var _list = __webpack_require__(87);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _item = __webpack_require__(92);
	
	var _item2 = _interopRequireDefault(_item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'voption',
	    props: {
	        width: {
	            default: '100%'
	        },
	        height: {
	            default: 165
	        },
	
	        data: { //展示的options列表数据
	            default: []
	        },
	        onpanend: {
	            type: Function,
	            default: function _default() {}
	        },
	        enable: {
	            type: Boolean,
	            default: true
	        },
	        val: {
	            type: Date
	        },
	        step: {
	            default: 33,
	            type: Number
	        }
	    },
	    data: function data() {
	        return {
	            activeindex: 0,
	            cellStyle: {
	                paddingTop: this.step * 2 + 'px',
	                paddingBottom: this.step * 2 + 'px'
	            },
	
	            yardStyle: {
	                top: this.step * 2 + 'px',
	                height: this.step + 'px'
	            }
	        };
	    },
	
	    components: {
	        scroll: _scroll2.default,
	        list: _list2.default,
	        item: _item2.default
	    },
	    /*mounted(){
	        	let uicell = this.$el.querySelectorAll('.ui-cell')[0]
	        	let uiyard = this.$el.querySelectorAll('.ui-cell-yard')[0]		        	uicell.style.paddingTop = this.step*2 + 'px'		        	uicell.style.paddingBottom = this.step*2+ 'px'
	        	let items = this.$el.querySelectorAll('.ui-cell .table-view-cell')
	        	console.log(items, 'items');
	        	for(var i=0; i<items.length; i++){
	        		items[i].style.height = this.step+'px'
	        		items[i].style.lineHeight = this.step+'px'
	        	}
	        	uiyard.style.top = this.step*2+'px'
	        	uiyard.style.height = this.step+'px'
	        },*/
	    methods: {
	        panend: function panend($event, that) {
	            this.activeindex = that.steps;
	            this.onpanend($event, that);
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(45)
	
	/* script */
	__vue_exports__ = __webpack_require__(47)
	
	/* template */
	var __vue_template__ = __webpack_require__(86)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\scroll.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-493baa02"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-493baa02", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-493baa02", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] scroll.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-493baa02&scoped=true!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scroll.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-493baa02&scoped=true!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scroll.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/* === Scroll === */\n.gom-scroll[data-v-493baa02] {\n  background-color: #fff;\n  padding: 10px;\n}\n.ui-scroll[data-v-493baa02] {\n  overflow: hidden;\n  background-color: #eee;\n}\n.ui-scroll > div[data-v-493baa02] {\n    -webkit-backface-visibility: hidden;\n    -webkit-perspective: 1000;\n}\n.ui-scroll .ui-scroll-core[data-v-493baa02] {\n    background-color: #FFF;\n    width: auto;\n}\n.ui-scroll .ui-scroll-front[data-v-493baa02],\n  .ui-scroll .ui-scroll-end[data-v-493baa02] {\n    width: 100%;\n    text-align: center;\n    background-color: #eee;\n    font-size: 13px;\n}\n.ui-scroll .ui-scroll-front[data-v-493baa02] {\n    top: 0;\n}\n.ui-scroll .ui-scroll-end[data-v-493baa02] {\n    bottom: 0;\n}\n.ui-scroll-trans[data-v-493baa02] {\n  transition: transform .3s ease;\n}\n.statusbar-overlay[data-v-493baa02] {\n  background: #f7f7f8;\n  z-index: 10000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 20px;\n  width: 100%;\n  display: none;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n}\n\n/* === Preloader === */\n.preloader[data-v-493baa02] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  -webkit-animation: preloader-spin 1s steps(12, end) infinite;\n  animation: preloader-spin 1s steps(12, end) infinite;\n}\n.preloader-white[data-v-493baa02] {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n@-webkit-keyframes preloader-spin {\n100% {\n    -webkit-transform: rotate(360deg);\n}\n}\n@keyframes preloader-spin {\n100% {\n    transform: rotate(360deg);\n}\n}\n\n/* === Pull To Refresh === */\n.pull-to-refresh-layer[data-v-493baa02] {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 100%;\n  min-height: 44px;\n}\n.pull-to-refresh-layer .pull-to-refresh-arrow[data-v-493baa02],\n.pull-to-refresh-layer .preloader[data-v-493baa02] {\n  display: inline-block;\n  position: relative;\n  margin-left: 5px;\n  top: 5px;\n}\n.pull-to-refresh-layer .preloader[data-v-493baa02],\n.pull-to-refresh-layer .preloader-text[data-v-493baa02] {\n  visibility: hidden;\n}\n.pull-to-refresh-layer .pull-to-refresh-arrow[data-v-493baa02] {\n  width: 13px;\n  height: 20px;\n  background: no-repeat center;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2026%2040'%3E%3Cpolygon%20points%3D'9%2C22%209%2C0%2017%2C0%2017%2C22%2026%2C22%2013.5%2C40%200%2C22'%20fill%3D'%238c8c8c'%2F%3E%3C%2Fsvg%3E\");\n  background-size: 13px 20px;\n  z-index: 10;\n  -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n  transform: rotate(0deg) translate3d(0, 0, 0);\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n}\n.ui-scroll[data-v-493baa02] {\n  overflow: hidden;\n}\n.ui-scroll-out.pull-to-refresh-no-navbar[data-v-493baa02] {\n  margin-top: -44px;\n  height: -webkit-calc(100% + 44px);\n  height: -moz-calc(100% + 44px);\n  height: calc(100% + 44px);\n}\n.ui-scroll-out.pull-to-refresh-no-navbar .pull-to-refresh-layer[data-v-493baa02] {\n  margin-top: 0;\n}\n.ui-scroll-out.transitioning[data-v-493baa02],\n.ui-scroll-out.refreshing[data-v-493baa02] {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n}\n.ui-scroll-out:not(.refreshing) .pull-to-refresh-layer .preloader[data-v-493baa02] {\n  -webkit-animation: none;\n  animation: none;\n}\n.ui-scroll-out.refreshing .pull-to-refresh-arrow[data-v-493baa02],\n.ui-scroll-out.refreshing .pull-to-refresh-text[data-v-493baa02] {\n  visibility: hidden;\n  -webkit-transition-duration: 0ms;\n  transition-duration: 0ms;\n}\n.ui-scroll-out.refreshing .preloader[data-v-493baa02],\n.ui-scroll-out.refreshing .preloader-text[data-v-493baa02] {\n  visibility: visible;\n}\n.ui-scroll-out.pull-up .pull-to-refresh-arrow[data-v-493baa02] {\n  -webkit-transform: rotate(180deg) translate3d(0, 0, 0);\n  transform: rotate(180deg) translate3d(0, 0, 0);\n}\n.pull-show-item[data-v-493baa02] {\n  position: absolute;\n  width: 100%;\n}\n", "", {"version":3,"sources":["/./src/scroll.vue"],"names":[],"mappings":"AAAA,oBAAoB;AACpB;EACE,uBAAuB;EACvB,cAAc;CAAE;AAElB;EACE,iBAAiB;EACjB,uBAAuB;CAAE;AACzB;IACE,oCAAoC;IACpC,0BAA0B;CAAE;AAC9B;IACE,uBAAuB;IACvB,YAAY;CAAE;AAChB;;IAEE,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;CAAE;AACpB;IACE,OAAO;CAAE;AACX;IACE,UAAU;CAAE;AAEhB;EACE,+BAA+B;CAAE;AAEnC;EACE,oBAAoB;EACpB,eAAe;EACf,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,aAAa;EACb,YAAY;EACZ,cAAc;EACd,mCAAmC;EACnC,2BAA2B;CAAE;;AAE/B,uBAAuB;AACvB;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,07CAA07C;EAC17C,yBAAyB;EACzB,sBAAsB;EACtB,6BAA6B;EAC7B,6DAA6D;EAC7D,qDAAqD;CAAE;AAEzD;EACE,u7CAAu7C;CAAE;AAE37C;AACE;IACE,kCAAkC;CAAE;CAAE;AAE1C;AACE;IACE,0BAA0B;CAAE;CAAE;;AAElC,6BAA6B;AAC7B;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,iBAAiB;CAAE;AAErB;;EAEE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,SAAS;CAAE;AAEb;;EAEE,mBAAmB;CAAE;AAEvB;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,kRAAkR;EAClR,2BAA2B;EAC3B,YAAY;EACZ,qDAAqD;EACrD,6CAA6C;EAC7C,mCAAmC;EACnC,2BAA2B;CAAE;AAE/B;EACE,iBAAiB;CAAE;AAErB;EACE,kBAAkB;EAClB,kCAAkC;EAClC,+BAA+B;EAC/B,0BAA0B;CAAE;AAE9B;EACE,cAAc;CAAE;AAElB;;EAEE,mCAAmC;EACnC,2BAA2B;CAAE;AAE/B;EACE,wBAAwB;EACxB,gBAAgB;CAAE;AAEpB;;EAEE,mBAAmB;EACnB,iCAAiC;EACjC,yBAAyB;CAAE;AAE7B;;EAEE,oBAAoB;CAAE;AAExB;EACE,uDAAuD;EACvD,+CAA+C;CAAE;AAEnD;EACE,mBAAmB;EACnB,YAAY;CAAE","file":"scroll.vue","sourcesContent":["/* === Scroll === */\n.gom-scroll {\n  background-color: #fff;\n  padding: 10px; }\n\n.ui-scroll {\n  overflow: hidden;\n  background-color: #eee; }\n  .ui-scroll > div {\n    -webkit-backface-visibility: hidden;\n    -webkit-perspective: 1000; }\n  .ui-scroll .ui-scroll-core {\n    background-color: #FFF;\n    width: auto; }\n  .ui-scroll .ui-scroll-front,\n  .ui-scroll .ui-scroll-end {\n    width: 100%;\n    text-align: center;\n    background-color: #eee;\n    font-size: 13px; }\n  .ui-scroll .ui-scroll-front {\n    top: 0; }\n  .ui-scroll .ui-scroll-end {\n    bottom: 0; }\n\n.ui-scroll-trans {\n  transition: transform .3s ease; }\n\n.statusbar-overlay {\n  background: #f7f7f8;\n  z-index: 10000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 20px;\n  width: 100%;\n  display: none;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms; }\n\n/* === Preloader === */\n.preloader {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  -webkit-animation: preloader-spin 1s steps(12, end) infinite;\n  animation: preloader-spin 1s steps(12, end) infinite; }\n\n.preloader-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n@-webkit-keyframes preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes preloader-spin {\n  100% {\n    transform: rotate(360deg); } }\n\n/* === Pull To Refresh === */\n.pull-to-refresh-layer {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 100%;\n  min-height: 44px; }\n\n.pull-to-refresh-layer .pull-to-refresh-arrow,\n.pull-to-refresh-layer .preloader {\n  display: inline-block;\n  position: relative;\n  margin-left: 5px;\n  top: 5px; }\n\n.pull-to-refresh-layer .preloader,\n.pull-to-refresh-layer .preloader-text {\n  visibility: hidden; }\n\n.pull-to-refresh-layer .pull-to-refresh-arrow {\n  width: 13px;\n  height: 20px;\n  background: no-repeat center;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2026%2040'%3E%3Cpolygon%20points%3D'9%2C22%209%2C0%2017%2C0%2017%2C22%2026%2C22%2013.5%2C40%200%2C22'%20fill%3D'%238c8c8c'%2F%3E%3C%2Fsvg%3E\");\n  background-size: 13px 20px;\n  z-index: 10;\n  -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n  transform: rotate(0deg) translate3d(0, 0, 0);\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms; }\n\n.ui-scroll {\n  overflow: hidden; }\n\n.ui-scroll-out.pull-to-refresh-no-navbar {\n  margin-top: -44px;\n  height: -webkit-calc(100% + 44px);\n  height: -moz-calc(100% + 44px);\n  height: calc(100% + 44px); }\n\n.ui-scroll-out.pull-to-refresh-no-navbar .pull-to-refresh-layer {\n  margin-top: 0; }\n\n.ui-scroll-out.transitioning,\n.ui-scroll-out.refreshing {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms; }\n\n.ui-scroll-out:not(.refreshing) .pull-to-refresh-layer .preloader {\n  -webkit-animation: none;\n  animation: none; }\n\n.ui-scroll-out.refreshing .pull-to-refresh-arrow,\n.ui-scroll-out.refreshing .pull-to-refresh-text {\n  visibility: hidden;\n  -webkit-transition-duration: 0ms;\n  transition-duration: 0ms; }\n\n.ui-scroll-out.refreshing .preloader,\n.ui-scroll-out.refreshing .preloader-text {\n  visibility: visible; }\n\n.ui-scroll-out.pull-up .pull-to-refresh-arrow {\n  -webkit-transform: rotate(180deg) translate3d(0, 0, 0);\n  transform: rotate(180deg) translate3d(0, 0, 0); }\n\n.pull-show-item {\n  position: absolute;\n  width: 100%; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof2 = __webpack_require__(48);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _vue = __webpack_require__(80);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueTouch = __webpack_require__(84);
	
	var _vueTouch2 = _interopRequireDefault(_vueTouch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	_vue2.default.use(_vueTouch2.default);
	
	var vendor = /webkit/i.test(navigator.appVersion) ? 'webkit' : /firefox/i.test(navigator.userAgent) ? 'Moz' : 'opera' in window ? 'O' : '';
	
	var has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix();
	
	exports.default = {
	    name: 'scroll',
	    props: {
	        onpan: {
	            type: Function,
	            default: function _default() {}
	        },
	        onpanend: {
	            type: Function,
	            default: function _default() {}
	        },
	        front: {
	            type: Boolean,
	            default: false
	        },
	        end: {
	            type: Boolean,
	            default: false
	        },
	        isx: {
	            type: Boolean,
	            default: false
	        },
	        step: { // swipe a time step px
	            type: Number,
	            default: 1
	        },
	        height: {
	            default: 300
	        },
	        width: {
	            default: '100%'
	        },
	        range: { // swipe range out of the eventArea
	            type: Number,
	            default: 100
	        },
	        freshtext: {
	            type: String,
	            default: 'up to fresh'
	        },
	        movetext: {
	            type: String,
	            default: 'freshing'
	        },
	        toucharea: {
	            type: String,
	            default: ''
	        },
	        enable: { //是否禁用事件
	            type: Boolean,
	            default: true
	        }
	    },
	    data: function data() {
	        return {
	            outerheight: 44, // swipe out text height
	            currentTranslate: !this.isx && this.front ? this.outerheight : 0,
	            x: 0,
	            y: !this.isx && this.front ? -this.outerheight : 0,
	            uiScrollStyle: {
	                // border: '1px solid #000',
	                width: typeof this.width === 'number' ? this.width + 'px' : this.width,
	                height: typeof this.height === 'number' ? this.height + 'px' : this.height
	            },
	            isEnd: false,
	            steps: 0 //当前共swipe鸟多少steps
	        };
	    },
	    created: function created() {
	        if (this.isx || !this.front) {
	            this.outerheight = 0;
	            this.front = false;
	            this.end = false;
	        }
	    },
	
	    computed: {
	        scrollContentStyle: function scrollContentStyle() {
	            var props = {},
	                x = this.x,
	                y = this.y;
	
	            props['-' + vendor + '-transform'] = has3d ? "translate3d(" + x + "px," + y + "px,0)" : "translate(" + x + "px," + y + "px)";
	            return props;
	        }
	    },
	    methods: {
	        /**
	         * 滚动到...
	         * @method Gom.UI.Scroll#scrollTo
	         * @param {object} where 可以为具体的数字，元素, top, bottom字符串
	         * @param {function} callback 滚动到后回调
	         */
	        scrollTo: function scrollTo(where, callback) {
	            var toType = typeof where === 'undefined' ? 'undefined' : (0, _typeof3.default)(where),
	                val;
	            if (where === 'top') {
	                val = 0;
	            } else if (where === 'bottom') {
	                // val = -this.getMaxTrans();
	            }
	            if (toType === 'number') {
	                val = where;
	            }
	            this.currentTranslate = val;
	            var isx = this.isX; //水平垂直
	            this.steps = Math.abs(Math.round(val / this.step));
	            this.x = isx ? val : '0', this.y = isx ? '0' : val;
	        },
	
	
	        setDirection: function setDirection($event) {
	            $event.isX = null;
	            $event.direction = null;
	
	            var angle = $event.angle,
	                absAngle = Math.abs(angle);
	
	            $event.isX = absAngle >= 45 && absAngle <= 135 ? false : true;
	            if ($event.isX) {
	                $event.direction = absAngle < 45 ? 'right' : 'left';
	            } else {
	                $event.direction = angle < 0 ? 'up' : 'down';
	            }
	        },
	        getDistance: function getDistance($event) {
	            var d = $event.distance,
	                direct = $event.direction;
	            if (direct === 'up' || direct === 'left') d = -d;
	            return d;
	        },
	        getDisByStep: function getDisByStep($event) {
	            var steps = Math.round(this.getDistance($event) / this.step);
	            return steps * this.step;
	        },
	
	        panArea: function panArea($event) {
	            if (!this.enable) {
	                return;
	            };
	            this.isEnd = false;
	            this.setDirection($event);
	            this.scrollCount($event);
	            this.onpan($event);
	        },
	        panendArea: function panendArea($event) {
	            if (!this.enable) {
	                return;
	            }
	            this.isEnd = true;
	            this.setDirection($event);
	            this.scrollCount($event, true);
	            this.currentTranslate += this.getDisByStep($event);
	
	            var range = this.getRange(true);
	            this.currentTranslate = this.currentTranslate > range.min ? range.min : this.currentTranslate;
	            this.currentTranslate = this.currentTranslate < -range.max ? -range.max : this.currentTranslate;
	
	            this.steps = Math.abs(Math.round(this.currentTranslate / this.step));
	            // onpanend function provide  $event props, scrollVue instance, and scroll steps...
	            this.onpanend($event, this);
	        },
	        //根据值计算滚动translate对象
	        scrollCount: function scrollCount($event) {
	            this.setDirection($event);
	            if (this.isx !== $event.isX) return;
	            var addTranslate = this.currentTranslate + this[this.isEnd ? 'getDisByStep' : 'getDistance']($event);
	
	            addTranslate = this.rangeCheck(addTranslate, this.isEnd);
	            this.x = !this.isx ? 0 : addTranslate, this.y = !this.isx ? addTranslate : 0;
	        },
	        /*
	         * 计算各种状态的边界值
	         * isCountCurrent -是否为记录End后的刻度;
	         */
	        getRange: function getRange(isCountCurrent) {
	            var range = this.isEnd ? -this.outerheight : this.range;
	            var hw = !this.isx ? 'height' : 'width',
	                chw = !this.isx ? 'clientHeight' : 'clientWidth';
	            var corehw = this.$el.querySelectorAll('.ui-scroll-core > *')[0][chw];
	            var fullhw = typeof this[hw] === 'number' ? this[hw] : this.$el[chw];
	            var fronthw = this.$el.querySelectorAll('.ui-scroll-front').length && this.$el.querySelectorAll('.ui-scroll-front')[0][chw];
	            var endhw = this.$el.querySelectorAll('.ui-scroll-end').length && this.$el.querySelectorAll('.ui-scroll-end')[0][chw];
	            return {
	                'min': range,
	                'max': fronthw * 2 + endhw + range + corehw - fullhw
	            };
	        },
	        rangeCheck: function rangeCheck(dis) {
	            var range = this.getRange();
	            dis = dis < -range.max ? -range.max : dis;
	            dis = dis > range.min ? range.min : dis;
	            return dis;
	        }
	    }
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(49)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(79);
	module.exports = __webpack_require__(58).Symbol;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(52)
	  , global         = __webpack_require__(53)
	  , has            = __webpack_require__(54)
	  , DESCRIPTORS    = __webpack_require__(55)
	  , $export        = __webpack_require__(57)
	  , redefine       = __webpack_require__(61)
	  , $fails         = __webpack_require__(56)
	  , shared         = __webpack_require__(64)
	  , setToStringTag = __webpack_require__(65)
	  , uid            = __webpack_require__(67)
	  , wks            = __webpack_require__(66)
	  , keyOf          = __webpack_require__(68)
	  , $names         = __webpack_require__(73)
	  , enumKeys       = __webpack_require__(74)
	  , isArray        = __webpack_require__(75)
	  , anObject       = __webpack_require__(76)
	  , toIObject      = __webpack_require__(69)
	  , createDesc     = __webpack_require__(63)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(78)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(56)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(53)
	  , core      = __webpack_require__(58)
	  , ctx       = __webpack_require__(59)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(60);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(62);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(52)
	  , createDesc = __webpack_require__(63);
	module.exports = __webpack_require__(55) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(53)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(52).setDesc
	  , has = __webpack_require__(54)
	  , TAG = __webpack_require__(66)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(64)('wks')
	  , uid    = __webpack_require__(67)
	  , Symbol = __webpack_require__(53).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(52)
	  , toIObject = __webpack_require__(69);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(70)
	  , defined = __webpack_require__(72);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(71);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(69)
	  , getNames  = __webpack_require__(52).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(52);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(71);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(77);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 79 */
/***/ (function(module, exports) {



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
	 * Vue.js v2.5.16
	 * (c) 2014-2018 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Vue = factory());
	}(this, (function () { 'use strict';
	
	/*  */
	
	var emptyObject = Object.freeze({});
	
	// these helpers produces better vm code in JS engines due to their
	// explicitness and function inlining
	function isUndef (v) {
	  return v === undefined || v === null
	}
	
	function isDef (v) {
	  return v !== undefined && v !== null
	}
	
	function isTrue (v) {
	  return v === true
	}
	
	function isFalse (v) {
	  return v === false
	}
	
	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return (
	    typeof value === 'string' ||
	    typeof value === 'number' ||
	    // $flow-disable-line
	    typeof value === 'symbol' ||
	    typeof value === 'boolean'
	  )
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Get the raw type string of a value e.g. [object Object]
	 */
	var _toString = Object.prototype.toString;
	
	function toRawType (value) {
	  return _toString.call(value).slice(8, -1)
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	function isPlainObject (obj) {
	  return _toString.call(obj) === '[object Object]'
	}
	
	function isRegExp (v) {
	  return _toString.call(v) === '[object RegExp]'
	}
	
	/**
	 * Check if val is a valid array index.
	 */
	function isValidArrayIndex (val) {
	  var n = parseFloat(String(val));
	  return n >= 0 && Math.floor(n) === n && isFinite(val)
	}
	
	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}
	
	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val);
	  return isNaN(n) ? val : n
	}
	
	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}
	
	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);
	
	/**
	 * Check if a attribute is a reserved attribute.
	 */
	var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
	
	/**
	 * Remove an item from an array
	 */
	function remove (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}
	
	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return (function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  })
	}
	
	/**
	 * Camelize a hyphen-delimited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});
	
	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});
	
	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /\B([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '-$1').toLowerCase()
	});
	
	/**
	 * Simple bind polyfill for environments that do not support it... e.g.
	 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
	 * now more performant in most browsers, but removing it would be breaking for
	 * code that was able to run in PhantomJS 1.x, so this must be kept for
	 * backwards compatibility.
	 */
	
	/* istanbul ignore next */
	function polyfillBind (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	
	  boundFn._length = fn.length;
	  return boundFn
	}
	
	function nativeBind (fn, ctx) {
	  return fn.bind(ctx)
	}
	
	var bind = Function.prototype.bind
	  ? nativeBind
	  : polyfillBind;
	
	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}
	
	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}
	
	/**
	 * Perform no operation.
	 * Stubbing args to make Flow happy without leaving useless transpiled code
	 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
	 */
	function noop (a, b, c) {}
	
	/**
	 * Always return false.
	 */
	var no = function (a, b, c) { return false; };
	
	/**
	 * Return same value
	 */
	var identity = function (_) { return _; };
	
	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  if (a === b) { return true }
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    try {
	      var isArrayA = Array.isArray(a);
	      var isArrayB = Array.isArray(b);
	      if (isArrayA && isArrayB) {
	        return a.length === b.length && a.every(function (e, i) {
	          return looseEqual(e, b[i])
	        })
	      } else if (!isArrayA && !isArrayB) {
	        var keysA = Object.keys(a);
	        var keysB = Object.keys(b);
	        return keysA.length === keysB.length && keysA.every(function (key) {
	          return looseEqual(a[key], b[key])
	        })
	      } else {
	        /* istanbul ignore next */
	        return false
	      }
	    } catch (e) {
	      /* istanbul ignore next */
	      return false
	    }
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b)
	  } else {
	    return false
	  }
	}
	
	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}
	
	/**
	 * Ensure a function is called only once.
	 */
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn.apply(this, arguments);
	    }
	  }
	}
	
	var SSR_ATTR = 'data-server-rendered';
	
	var ASSET_TYPES = [
	  'component',
	  'directive',
	  'filter'
	];
	
	var LIFECYCLE_HOOKS = [
	  'beforeCreate',
	  'created',
	  'beforeMount',
	  'mounted',
	  'beforeUpdate',
	  'updated',
	  'beforeDestroy',
	  'destroyed',
	  'activated',
	  'deactivated',
	  'errorCaptured'
	];
	
	/*  */
	
	var config = ({
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  // $flow-disable-line
	  optionMergeStrategies: Object.create(null),
	
	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,
	
	  /**
	   * Show production mode tip message on boot?
	   */
	  productionTip: "development" !== 'production',
	
	  /**
	   * Whether to enable devtools
	   */
	  devtools: "development" !== 'production',
	
	  /**
	   * Whether to record perf
	   */
	  performance: false,
	
	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,
	
	  /**
	   * Warn handler for watcher warns
	   */
	  warnHandler: null,
	
	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: [],
	
	  /**
	   * Custom user key aliases for v-on
	   */
	  // $flow-disable-line
	  keyCodes: Object.create(null),
	
	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,
	
	  /**
	   * Check if an attribute is reserved so that it cannot be used as a component
	   * prop. This is platform-dependent and may be overwritten.
	   */
	  isReservedAttr: no,
	
	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,
	
	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,
	
	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,
	
	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,
	
	  /**
	   * Exposed for legacy reasons
	   */
	  _lifecycleHooks: LIFECYCLE_HOOKS
	})
	
	/*  */
	
	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  }
	  var segments = path.split('.');
	  return function (obj) {
	    for (var i = 0; i < segments.length; i++) {
	      if (!obj) { return }
	      obj = obj[segments[i]];
	    }
	    return obj
	  }
	}
	
	/*  */
	
	// can we use __proto__?
	var hasProto = '__proto__' in {};
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
	var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
	var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
	var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
	
	// Firefox has a "watch" function on Object.prototype...
	var nativeWatch = ({}).watch;
	
	var supportsPassive = false;
	if (inBrowser) {
	  try {
	    var opts = {};
	    Object.defineProperty(opts, 'passive', ({
	      get: function get () {
	        /* istanbul ignore next */
	        supportsPassive = true;
	      }
	    })); // https://github.com/facebook/flow/issues/285
	    window.addEventListener('test-passive', null, opts);
	  } catch (e) {}
	}
	
	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	/* istanbul ignore next */
	function isNative (Ctor) {
	  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
	}
	
	var hasSymbol =
	  typeof Symbol !== 'undefined' && isNative(Symbol) &&
	  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
	
	var _Set;
	/* istanbul ignore if */ // $flow-disable-line
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };
	
	    return Set;
	  }());
	}
	
	/*  */
	
	var warn = noop;
	var tip = noop;
	var generateComponentTrace = (noop); // work around flow check
	var formatComponentName = (noop);
	
	{
	  var hasConsole = typeof console !== 'undefined';
	  var classifyRE = /(?:^|[-_])(\w)/g;
	  var classify = function (str) { return str
	    .replace(classifyRE, function (c) { return c.toUpperCase(); })
	    .replace(/[-_]/g, ''); };
	
	  warn = function (msg, vm) {
	    var trace = vm ? generateComponentTrace(vm) : '';
	
	    if (config.warnHandler) {
	      config.warnHandler.call(null, msg, vm, trace);
	    } else if (hasConsole && (!config.silent)) {
	      console.error(("[Vue warn]: " + msg + trace));
	    }
	  };
	
	  tip = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.warn("[Vue tip]: " + msg + (
	        vm ? generateComponentTrace(vm) : ''
	      ));
	    }
	  };
	
	  formatComponentName = function (vm, includeFile) {
	    if (vm.$root === vm) {
	      return '<Root>'
	    }
	    var options = typeof vm === 'function' && vm.cid != null
	      ? vm.options
	      : vm._isVue
	        ? vm.$options || vm.constructor.options
	        : vm || {};
	    var name = options.name || options._componentTag;
	    var file = options.__file;
	    if (!name && file) {
	      var match = file.match(/([^/\\]+)\.vue$/);
	      name = match && match[1];
	    }
	
	    return (
	      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
	      (file && includeFile !== false ? (" at " + file) : '')
	    )
	  };
	
	  var repeat = function (str, n) {
	    var res = '';
	    while (n) {
	      if (n % 2 === 1) { res += str; }
	      if (n > 1) { str += str; }
	      n >>= 1;
	    }
	    return res
	  };
	
	  generateComponentTrace = function (vm) {
	    if (vm._isVue && vm.$parent) {
	      var tree = [];
	      var currentRecursiveSequence = 0;
	      while (vm) {
	        if (tree.length > 0) {
	          var last = tree[tree.length - 1];
	          if (last.constructor === vm.constructor) {
	            currentRecursiveSequence++;
	            vm = vm.$parent;
	            continue
	          } else if (currentRecursiveSequence > 0) {
	            tree[tree.length - 1] = [last, currentRecursiveSequence];
	            currentRecursiveSequence = 0;
	          }
	        }
	        tree.push(vm);
	        vm = vm.$parent;
	      }
	      return '\n\nfound in\n\n' + tree
	        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
	            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
	            : formatComponentName(vm))); })
	        .join('\n')
	    } else {
	      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
	    }
	  };
	}
	
	/*  */
	
	
	var uid = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid++;
	  this.subs = [];
	};
	
	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};
	
	Dep.prototype.removeSub = function removeSub (sub) {
	  remove(this.subs, sub);
	};
	
	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};
	
	Dep.prototype.notify = function notify () {
	  // stabilize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];
	
	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}
	
	function popTarget () {
	  Dep.target = targetStack.pop();
	}
	
	/*  */
	
	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions,
	  asyncFactory
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.fnContext = undefined;
	  this.fnOptions = undefined;
	  this.fnScopeId = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.componentInstance = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	  this.asyncFactory = asyncFactory;
	  this.asyncMeta = undefined;
	  this.isAsyncPlaceholder = false;
	};
	
	var prototypeAccessors = { child: { configurable: true } };
	
	// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
	  return this.componentInstance
	};
	
	Object.defineProperties( VNode.prototype, prototypeAccessors );
	
	var createEmptyVNode = function (text) {
	  if ( text === void 0 ) text = '';
	
	  var node = new VNode();
	  node.text = text;
	  node.isComment = true;
	  return node
	};
	
	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}
	
	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions,
	    vnode.asyncFactory
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isComment = vnode.isComment;
	  cloned.fnContext = vnode.fnContext;
	  cloned.fnOptions = vnode.fnOptions;
	  cloned.fnScopeId = vnode.fnScopeId;
	  cloned.isCloned = true;
	  return cloned
	}
	
	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);
	
	var methodsToPatch = [
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	];
	
	/**
	 * Intercept mutating methods and emit events
	 */
	methodsToPatch.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];
	
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});
	
	/*  */
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * In some cases we may want to disable observation inside a component's
	 * update computation.
	 */
	var shouldObserve = true;
	
	function toggleObserving (value) {
	  shouldObserve = value;
	}
	
	/**
	 * Observer class that is attached to each observed
	 * object. Once attached, the observer converts the target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatch updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive(obj, keys[i]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src, keys) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value, asRootData) {
	  if (!isObject(value) || value instanceof VNode) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    shouldObserve &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob
	}
	
	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive (
	  obj,
	  key,
	  val,
	  customSetter,
	  shallow
	) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  if (!getter && arguments.length === 2) {
	    val = obj[key];
	  }
	  var setter = property && property.set;
	
	  var childOb = !shallow && observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	          if (Array.isArray(value)) {
	            dependArray(value);
	          }
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if ("development" !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = !shallow && observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (target, key, val) {
	  if ("development" !== 'production' &&
	    (isUndef(target) || isPrimitive(target))
	  ) {
	    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
	  }
	  if (Array.isArray(target) && isValidArrayIndex(key)) {
	    target.length = Math.max(target.length, key);
	    target.splice(key, 1, val);
	    return val
	  }
	  if (key in target && !(key in Object.prototype)) {
	    target[key] = val;
	    return val
	  }
	  var ob = (target).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return val
	  }
	  if (!ob) {
	    target[key] = val;
	    return val
	  }
	  defineReactive(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (target, key) {
	  if ("development" !== 'production' &&
	    (isUndef(target) || isPrimitive(target))
	  ) {
	    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
	  }
	  if (Array.isArray(target) && isValidArrayIndex(key)) {
	    target.splice(key, 1);
	    return
	  }
	  var ob = (target).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(target, key)) {
	    return
	  }
	  delete target[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}
	
	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}
	
	/*  */
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;
	
	/**
	 * Options with restrictions
	 */
	{
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	function mergeDataOrFn (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
	        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
	      )
	    }
	  } else {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm, vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm, vm)
	        : parentVal;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}
	
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    if (childVal && typeof childVal !== 'function') {
	      "development" !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	
	      return parentVal
	    }
	    return mergeDataOrFn(parentVal, childVal)
	  }
	
	  return mergeDataOrFn(parentVal, childVal, vm)
	};
	
	/**
	 * Hooks and props are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	LIFECYCLE_HOOKS.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  var res = Object.create(parentVal || null);
	  if (childVal) {
	    "development" !== 'production' && assertObjectType(key, childVal, vm);
	    return extend(res, childVal)
	  } else {
	    return res
	  }
	}
	
	ASSET_TYPES.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  // work around Firefox's Object.prototype.watch...
	  if (parentVal === nativeWatch) { parentVal = undefined; }
	  if (childVal === nativeWatch) { childVal = undefined; }
	  /* istanbul ignore if */
	  if (!childVal) { return Object.create(parentVal || null) }
	  {
	    assertObjectType(key, childVal, vm);
	  }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key$1 in childVal) {
	    var parent = ret[key$1];
	    var child = childVal[key$1];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key$1] = parent
	      ? parent.concat(child)
	      : Array.isArray(child) ? child : [child];
	  }
	  return ret
	};
	
	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.inject =
	strats.computed = function (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  if (childVal && "development" !== 'production') {
	    assertObjectType(key, childVal, vm);
	  }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  if (childVal) { extend(ret, childVal); }
	  return ret
	};
	strats.provide = mergeDataOrFn;
	
	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};
	
	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    validateComponentName(key);
	  }
	}
	
	function validateComponentName (name) {
	  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	    warn(
	      'Invalid component name: "' + name + '". Component names ' +
	      'can only contain alphanumeric characters and the hyphen, ' +
	      'and must start with a letter.'
	    );
	  }
	  if (isBuiltInTag(name) || config.isReservedTag(name)) {
	    warn(
	      'Do not use built-in or reserved HTML elements as component ' +
	      'id: ' + name
	    );
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options, vm) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  } else {
	    warn(
	      "Invalid value for option \"props\": expected an Array or an Object, " +
	      "but got " + (toRawType(props)) + ".",
	      vm
	    );
	  }
	  options.props = res;
	}
	
	/**
	 * Normalize all injections into Object-based format
	 */
	function normalizeInject (options, vm) {
	  var inject = options.inject;
	  if (!inject) { return }
	  var normalized = options.inject = {};
	  if (Array.isArray(inject)) {
	    for (var i = 0; i < inject.length; i++) {
	      normalized[inject[i]] = { from: inject[i] };
	    }
	  } else if (isPlainObject(inject)) {
	    for (var key in inject) {
	      var val = inject[key];
	      normalized[key] = isPlainObject(val)
	        ? extend({ from: key }, val)
	        : { from: val };
	    }
	  } else {
	    warn(
	      "Invalid value for option \"inject\": expected an Array or an Object, " +
	      "but got " + (toRawType(inject)) + ".",
	      vm
	    );
	  }
	}
	
	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}
	
	function assertObjectType (name, value, vm) {
	  if (!isPlainObject(value)) {
	    warn(
	      "Invalid value for option \"" + name + "\": expected an Object, " +
	      "but got " + (toRawType(value)) + ".",
	      vm
	    );
	  }
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  {
	    checkComponents(child);
	  }
	
	  if (typeof child === 'function') {
	    child = child.options;
	  }
	
	  normalizeProps(child, vm);
	  normalizeInject(child, vm);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if ("development" !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}
	
	/*  */
	
	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // boolean casting
	  var booleanIndex = getTypeIndex(Boolean, prop.type);
	  if (booleanIndex > -1) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      // only cast empty string / same name to boolean if
	      // boolean has higher priority
	      var stringIndex = getTypeIndex(String, prop.type);
	      if (stringIndex < 0 || booleanIndex < stringIndex) {
	        value = true;
	      }
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldObserve = shouldObserve;
	    toggleObserving(true);
	    observe(value);
	    toggleObserving(prevShouldObserve);
	  }
	  {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}
	
	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if ("development" !== 'production' && isObject(def)) {
	    warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm._props[key] !== undefined
	  ) {
	    return vm._props[key]
	  }
	  // call factory function for non-Function types
	  // a value is Function if its prototype is function even across different execution context
	  return typeof def === 'function' && getType(prop.type) !== 'Function'
	    ? def.call(vm)
	    : def
	}
	
	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType || '');
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      "Invalid prop: type check failed for prop \"" + name + "\"." +
	      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
	      ", got " + (toRawType(value)) + ".",
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}
	
	var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
	
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (simpleCheckRE.test(expectedType)) {
	    var t = typeof value;
	    valid = t === expectedType.toLowerCase();
	    // for primitive wrapper objects
	    if (!valid && t === 'object') {
	      valid = value instanceof type;
	    }
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}
	
	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match ? match[1] : ''
	}
	
	function isSameType (a, b) {
	  return getType(a) === getType(b)
	}
	
	function getTypeIndex (type, expectedTypes) {
	  if (!Array.isArray(expectedTypes)) {
	    return isSameType(expectedTypes, type) ? 0 : -1
	  }
	  for (var i = 0, len = expectedTypes.length; i < len; i++) {
	    if (isSameType(expectedTypes[i], type)) {
	      return i
	    }
	  }
	  return -1
	}
	
	/*  */
	
	function handleError (err, vm, info) {
	  if (vm) {
	    var cur = vm;
	    while ((cur = cur.$parent)) {
	      var hooks = cur.$options.errorCaptured;
	      if (hooks) {
	        for (var i = 0; i < hooks.length; i++) {
	          try {
	            var capture = hooks[i].call(cur, err, vm, info) === false;
	            if (capture) { return }
	          } catch (e) {
	            globalHandleError(e, cur, 'errorCaptured hook');
	          }
	        }
	      }
	    }
	  }
	  globalHandleError(err, vm, info);
	}
	
	function globalHandleError (err, vm, info) {
	  if (config.errorHandler) {
	    try {
	      return config.errorHandler.call(null, err, vm, info)
	    } catch (e) {
	      logError(e, null, 'config.errorHandler');
	    }
	  }
	  logError(err, vm, info);
	}
	
	function logError (err, vm, info) {
	  {
	    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
	  }
	  /* istanbul ignore else */
	  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
	    console.error(err);
	  } else {
	    throw err
	  }
	}
	
	/*  */
	/* globals MessageChannel */
	
	var callbacks = [];
	var pending = false;
	
	function flushCallbacks () {
	  pending = false;
	  var copies = callbacks.slice(0);
	  callbacks.length = 0;
	  for (var i = 0; i < copies.length; i++) {
	    copies[i]();
	  }
	}
	
	// Here we have async deferring wrappers using both microtasks and (macro) tasks.
	// In < 2.4 we used microtasks everywhere, but there are some scenarios where
	// microtasks have too high a priority and fire in between supposedly
	// sequential events (e.g. #4521, #6690) or even between bubbling of the same
	// event (#6566). However, using (macro) tasks everywhere also has subtle problems
	// when state is changed right before repaint (e.g. #6813, out-in transitions).
	// Here we use microtask by default, but expose a way to force (macro) task when
	// needed (e.g. in event handlers attached by v-on).
	var microTimerFunc;
	var macroTimerFunc;
	var useMacroTask = false;
	
	// Determine (macro) task defer implementation.
	// Technically setImmediate should be the ideal choice, but it's only available
	// in IE. The only polyfill that consistently queues the callback after all DOM
	// events triggered in the same loop is by using MessageChannel.
	/* istanbul ignore if */
	if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
	  macroTimerFunc = function () {
	    setImmediate(flushCallbacks);
	  };
	} else if (typeof MessageChannel !== 'undefined' && (
	  isNative(MessageChannel) ||
	  // PhantomJS
	  MessageChannel.toString() === '[object MessageChannelConstructor]'
	)) {
	  var channel = new MessageChannel();
	  var port = channel.port2;
	  channel.port1.onmessage = flushCallbacks;
	  macroTimerFunc = function () {
	    port.postMessage(1);
	  };
	} else {
	  /* istanbul ignore next */
	  macroTimerFunc = function () {
	    setTimeout(flushCallbacks, 0);
	  };
	}
	
	// Determine microtask defer implementation.
	/* istanbul ignore next, $flow-disable-line */
	if (typeof Promise !== 'undefined' && isNative(Promise)) {
	  var p = Promise.resolve();
	  microTimerFunc = function () {
	    p.then(flushCallbacks);
	    // in problematic UIWebViews, Promise.then doesn't completely break, but
	    // it can get stuck in a weird state where callbacks are pushed into the
	    // microtask queue but the queue isn't being flushed, until the browser
	    // needs to do some other work, e.g. handle a timer. Therefore we can
	    // "force" the microtask queue to be flushed by adding an empty timer.
	    if (isIOS) { setTimeout(noop); }
	  };
	} else {
	  // fallback to macro
	  microTimerFunc = macroTimerFunc;
	}
	
	/**
	 * Wrap a function so that if any code inside triggers state change,
	 * the changes are queued using a (macro) task instead of a microtask.
	 */
	function withMacroTask (fn) {
	  return fn._withTask || (fn._withTask = function () {
	    useMacroTask = true;
	    var res = fn.apply(null, arguments);
	    useMacroTask = false;
	    return res
	  })
	}
	
	function nextTick (cb, ctx) {
	  var _resolve;
	  callbacks.push(function () {
	    if (cb) {
	      try {
	        cb.call(ctx);
	      } catch (e) {
	        handleError(e, ctx, 'nextTick');
	      }
	    } else if (_resolve) {
	      _resolve(ctx);
	    }
	  });
	  if (!pending) {
	    pending = true;
	    if (useMacroTask) {
	      macroTimerFunc();
	    } else {
	      microTimerFunc();
	    }
	  }
	  // $flow-disable-line
	  if (!cb && typeof Promise !== 'undefined') {
	    return new Promise(function (resolve) {
	      _resolve = resolve;
	    })
	  }
	}
	
	/*  */
	
	var mark;
	var measure;
	
	{
	  var perf = inBrowser && window.performance;
	  /* istanbul ignore if */
	  if (
	    perf &&
	    perf.mark &&
	    perf.measure &&
	    perf.clearMarks &&
	    perf.clearMeasures
	  ) {
	    mark = function (tag) { return perf.mark(tag); };
	    measure = function (name, startTag, endTag) {
	      perf.measure(name, startTag, endTag);
	      perf.clearMarks(startTag);
	      perf.clearMarks(endTag);
	      perf.clearMeasures(name);
	    };
	  }
	}
	
	/* not type checking this file because flow doesn't play well with Proxy */
	
	var initProxy;
	
	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );
	
	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      'referenced during render. Make sure that this property is reactive, ' +
	      'either in the data option, or for class-based components, by ' +
	      'initializing the property. ' +
	      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
	      target
	    );
	  };
	
	  var hasProxy =
	    typeof Proxy !== 'undefined' && isNative(Proxy);
	
	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }
	
	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };
	
	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };
	
	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}
	
	/*  */
	
	var seenObjects = new _Set();
	
	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	function traverse (val) {
	  _traverse(val, seenObjects);
	  seenObjects.clear();
	}
	
	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}
	
	/*  */
	
	var normalizeEvent = cached(function (name) {
	  var passive = name.charAt(0) === '&';
	  name = passive ? name.slice(1) : name;
	  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
	  name = once$$1 ? name.slice(1) : name;
	  var capture = name.charAt(0) === '!';
	  name = capture ? name.slice(1) : name;
	  return {
	    name: name,
	    once: once$$1,
	    capture: capture,
	    passive: passive
	  }
	});
	
	function createFnInvoker (fns) {
	  function invoker () {
	    var arguments$1 = arguments;
	
	    var fns = invoker.fns;
	    if (Array.isArray(fns)) {
	      var cloned = fns.slice();
	      for (var i = 0; i < cloned.length; i++) {
	        cloned[i].apply(null, arguments$1);
	      }
	    } else {
	      // return handler return value for single handlers
	      return fns.apply(null, arguments)
	    }
	  }
	  invoker.fns = fns;
	  return invoker
	}
	
	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, def, cur, old, event;
	  for (name in on) {
	    def = cur = on[name];
	    old = oldOn[name];
	    event = normalizeEvent(name);
	    /* istanbul ignore if */
	    if (isUndef(cur)) {
	      "development" !== 'production' && warn(
	        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
	        vm
	      );
	    } else if (isUndef(old)) {
	      if (isUndef(cur.fns)) {
	        cur = on[name] = createFnInvoker(cur);
	      }
	      add(event.name, cur, event.once, event.capture, event.passive, event.params);
	    } else if (cur !== old) {
	      old.fns = cur;
	      on[name] = old;
	    }
	  }
	  for (name in oldOn) {
	    if (isUndef(on[name])) {
	      event = normalizeEvent(name);
	      remove$$1(event.name, oldOn[name], event.capture);
	    }
	  }
	}
	
	/*  */
	
	function mergeVNodeHook (def, hookKey, hook) {
	  if (def instanceof VNode) {
	    def = def.data.hook || (def.data.hook = {});
	  }
	  var invoker;
	  var oldHook = def[hookKey];
	
	  function wrappedHook () {
	    hook.apply(this, arguments);
	    // important: remove merged hook to ensure it's called only once
	    // and prevent memory leak
	    remove(invoker.fns, wrappedHook);
	  }
	
	  if (isUndef(oldHook)) {
	    // no existing hook
	    invoker = createFnInvoker([wrappedHook]);
	  } else {
	    /* istanbul ignore if */
	    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
	      // already a merged invoker
	      invoker = oldHook;
	      invoker.fns.push(wrappedHook);
	    } else {
	      // existing plain hook
	      invoker = createFnInvoker([oldHook, wrappedHook]);
	    }
	  }
	
	  invoker.merged = true;
	  def[hookKey] = invoker;
	}
	
	/*  */
	
	function extractPropsFromVNodeData (
	  data,
	  Ctor,
	  tag
	) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (isUndef(propOptions)) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  if (isDef(attrs) || isDef(props)) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      {
	        var keyInLowerCase = key.toLowerCase();
	        if (
	          key !== keyInLowerCase &&
	          attrs && hasOwn(attrs, keyInLowerCase)
	        ) {
	          tip(
	            "Prop \"" + keyInLowerCase + "\" is passed to component " +
	            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
	            " \"" + key + "\". " +
	            "Note that HTML attributes are case-insensitive and camelCased " +
	            "props need to use their kebab-case equivalents when using in-DOM " +
	            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
	          );
	        }
	      }
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey, false);
	    }
	  }
	  return res
	}
	
	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (isDef(hash)) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}
	
	/*  */
	
	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:
	
	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// normalization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren (children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children)
	    }
	  }
	  return children
	}
	
	// 2. When the children contains constructs that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}
	
	function isTextNode (node) {
	  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
	}
	
	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, lastIndex, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (isUndef(c) || typeof c === 'boolean') { continue }
	    lastIndex = res.length - 1;
	    last = res[lastIndex];
	    //  nested
	    if (Array.isArray(c)) {
	      if (c.length > 0) {
	        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
	        // merge adjacent text nodes
	        if (isTextNode(c[0]) && isTextNode(last)) {
	          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
	          c.shift();
	        }
	        res.push.apply(res, c);
	      }
	    } else if (isPrimitive(c)) {
	      if (isTextNode(last)) {
	        // merge adjacent text nodes
	        // this is necessary for SSR hydration because text nodes are
	        // essentially merged when rendered to HTML strings
	        res[lastIndex] = createTextVNode(last.text + c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (isTextNode(c) && isTextNode(last)) {
	        // merge adjacent text nodes
	        res[lastIndex] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (isTrue(children._isVList) &&
	          isDef(c.tag) &&
	          isUndef(c.key) &&
	          isDef(nestedIndex)) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}
	
	/*  */
	
	function ensureCtor (comp, base) {
	  if (
	    comp.__esModule ||
	    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
	  ) {
	    comp = comp.default;
	  }
	  return isObject(comp)
	    ? base.extend(comp)
	    : comp
	}
	
	function createAsyncPlaceholder (
	  factory,
	  data,
	  context,
	  children,
	  tag
	) {
	  var node = createEmptyVNode();
	  node.asyncFactory = factory;
	  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
	  return node
	}
	
	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  context
	) {
	  if (isTrue(factory.error) && isDef(factory.errorComp)) {
	    return factory.errorComp
	  }
	
	  if (isDef(factory.resolved)) {
	    return factory.resolved
	  }
	
	  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
	    return factory.loadingComp
	  }
	
	  if (isDef(factory.contexts)) {
	    // already pending
	    factory.contexts.push(context);
	  } else {
	    var contexts = factory.contexts = [context];
	    var sync = true;
	
	    var forceRender = function () {
	      for (var i = 0, l = contexts.length; i < l; i++) {
	        contexts[i].$forceUpdate();
	      }
	    };
	
	    var resolve = once(function (res) {
	      // cache resolved
	      factory.resolved = ensureCtor(res, baseCtor);
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        forceRender();
	      }
	    });
	
	    var reject = once(function (reason) {
	      "development" !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	      if (isDef(factory.errorComp)) {
	        factory.error = true;
	        forceRender();
	      }
	    });
	
	    var res = factory(resolve, reject);
	
	    if (isObject(res)) {
	      if (typeof res.then === 'function') {
	        // () => Promise
	        if (isUndef(factory.resolved)) {
	          res.then(resolve, reject);
	        }
	      } else if (isDef(res.component) && typeof res.component.then === 'function') {
	        res.component.then(resolve, reject);
	
	        if (isDef(res.error)) {
	          factory.errorComp = ensureCtor(res.error, baseCtor);
	        }
	
	        if (isDef(res.loading)) {
	          factory.loadingComp = ensureCtor(res.loading, baseCtor);
	          if (res.delay === 0) {
	            factory.loading = true;
	          } else {
	            setTimeout(function () {
	              if (isUndef(factory.resolved) && isUndef(factory.error)) {
	                factory.loading = true;
	                forceRender();
	              }
	            }, res.delay || 200);
	          }
	        }
	
	        if (isDef(res.timeout)) {
	          setTimeout(function () {
	            if (isUndef(factory.resolved)) {
	              reject(
	                "timeout (" + (res.timeout) + "ms)"
	              );
	            }
	          }, res.timeout);
	        }
	      }
	    }
	
	    sync = false;
	    // return in case resolved synchronously
	    return factory.loading
	      ? factory.loadingComp
	      : factory.resolved
	  }
	}
	
	/*  */
	
	function isAsyncPlaceholder (node) {
	  return node.isComment && node.asyncFactory
	}
	
	/*  */
	
	function getFirstComponentChild (children) {
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      var c = children[i];
	      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
	        return c
	      }
	    }
	  }
	}
	
	/*  */
	
	/*  */
	
	function initEvents (vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}
	
	var target;
	
	function add (event, fn, once) {
	  if (once) {
	    target.$once(event, fn);
	  } else {
	    target.$on(event, fn);
	  }
	}
	
	function remove$1 (event, fn) {
	  target.$off(event, fn);
	}
	
	function updateComponentListeners (
	  vm,
	  listeners,
	  oldListeners
	) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
	  target = undefined;
	}
	
	function eventsMixin (Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var this$1 = this;
	
	    var vm = this;
	    if (Array.isArray(event)) {
	      for (var i = 0, l = event.length; i < l; i++) {
	        this$1.$on(event[i], fn);
	      }
	    } else {
	      (vm._events[event] || (vm._events[event] = [])).push(fn);
	      // optimize hook:event cost by using a boolean flag marked at registration
	      // instead of a hash lookup
	      if (hookRE.test(event)) {
	        vm._hasHookEvent = true;
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };
	
	  Vue.prototype.$off = function (event, fn) {
	    var this$1 = this;
	
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // array of events
	    if (Array.isArray(event)) {
	      for (var i = 0, l = event.length; i < l; i++) {
	        this$1.$off(event[i], fn);
	      }
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (!fn) {
	      vm._events[event] = null;
	      return vm
	    }
	    if (fn) {
	      // specific handler
	      var cb;
	      var i$1 = cbs.length;
	      while (i$1--) {
	        cb = cbs[i$1];
	        if (cb === fn || cb.fn === fn) {
	          cbs.splice(i$1, 1);
	          break
	        }
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    {
	      var lowerCaseEvent = event.toLowerCase();
	      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
	        tip(
	          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
	          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
	          "Note that HTML attributes are case-insensitive and you cannot use " +
	          "v-on to listen to camelCase events when using in-DOM templates. " +
	          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
	        );
	      }
	    }
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        try {
	          cbs[i].apply(vm, args);
	        } catch (e) {
	          handleError(e, vm, ("event handler for \"" + event + "\""));
	        }
	      }
	    }
	    return vm
	  };
	}
	
	/*  */
	
	
	
	/**
	 * Runtime helper for resolving raw children VNodes into a slot object.
	 */
	function resolveSlots (
	  children,
	  context
	) {
	  var slots = {};
	  if (!children) {
	    return slots
	  }
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i];
	    var data = child.data;
	    // remove slot attribute if the node is resolved as a Vue slot node
	    if (data && data.attrs && data.attrs.slot) {
	      delete data.attrs.slot;
	    }
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.fnContext === context) &&
	      data && data.slot != null
	    ) {
	      var name = data.slot;
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children || []);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      (slots.default || (slots.default = [])).push(child);
	    }
	  }
	  // ignore slots that contains only whitespace
	  for (var name$1 in slots) {
	    if (slots[name$1].every(isWhitespace)) {
	      delete slots[name$1];
	    }
	  }
	  return slots
	}
	
	function isWhitespace (node) {
	  return (node.isComment && !node.asyncFactory) || node.text === ' '
	}
	
	function resolveScopedSlots (
	  fns, // see flow/vnode
	  res
	) {
	  res = res || {};
	  for (var i = 0; i < fns.length; i++) {
	    if (Array.isArray(fns[i])) {
	      resolveScopedSlots(fns[i], res);
	    } else {
	      res[fns[i].key] = fns[i].fn;
	    }
	  }
	  return res
	}
	
	/*  */
	
	var activeInstance = null;
	var isUpdatingChildComponent = false;
	
	function initLifecycle (vm) {
	  var options = vm.$options;
	
	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }
	
	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;
	
	  vm.$children = [];
	  vm.$refs = {};
	
	  vm._watcher = null;
	  vm._inactive = null;
	  vm._directInactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}
	
	function lifecycleMixin (Vue) {
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
	      // no need for the ref nodes after initial patch
	      // this prevents keeping a detached DOM tree in memory (#5851)
	      vm.$options._parentElm = vm.$options._refElm = null;
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    // updated hook is called by the scheduler to ensure that children are
	    // updated in a parent's updated hook.
	  };
	
	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };
	
	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	    // fire destroyed hook
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // release circular reference (#6759)
	    if (vm.$vnode) {
	      vm.$vnode.parent = null;
	    }
	  };
	}
	
	function mountComponent (
	  vm,
	  el,
	  hydrating
	) {
	  vm.$el = el;
	  if (!vm.$options.render) {
	    vm.$options.render = createEmptyVNode;
	    {
	      /* istanbul ignore if */
	      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
	        vm.$options.el || el) {
	        warn(
	          'You are using the runtime-only build of Vue where the template ' +
	          'compiler is not available. Either pre-compile the templates into ' +
	          'render functions, or use the compiler-included build.',
	          vm
	        );
	      } else {
	        warn(
	          'Failed to mount component: template or render function not defined.',
	          vm
	        );
	      }
	    }
	  }
	  callHook(vm, 'beforeMount');
	
	  var updateComponent;
	  /* istanbul ignore if */
	  if ("development" !== 'production' && config.performance && mark) {
	    updateComponent = function () {
	      var name = vm._name;
	      var id = vm._uid;
	      var startTag = "vue-perf-start:" + id;
	      var endTag = "vue-perf-end:" + id;
	
	      mark(startTag);
	      var vnode = vm._render();
	      mark(endTag);
	      measure(("vue " + name + " render"), startTag, endTag);
	
	      mark(startTag);
	      vm._update(vnode, hydrating);
	      mark(endTag);
	      measure(("vue " + name + " patch"), startTag, endTag);
	    };
	  } else {
	    updateComponent = function () {
	      vm._update(vm._render(), hydrating);
	    };
	  }
	
	  // we set this to vm._watcher inside the watcher's constructor
	  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
	  // component's mounted hook), which relies on vm._watcher being already defined
	  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
	  hydrating = false;
	
	  // manually mounted instance, call mounted on self
	  // mounted is called for render-created child components in its inserted hook
	  if (vm.$vnode == null) {
	    vm._isMounted = true;
	    callHook(vm, 'mounted');
	  }
	  return vm
	}
	
	function updateChildComponent (
	  vm,
	  propsData,
	  listeners,
	  parentVnode,
	  renderChildren
	) {
	  {
	    isUpdatingChildComponent = true;
	  }
	
	  // determine whether component has slot children
	  // we need to do this before overwriting $options._renderChildren
	  var hasChildren = !!(
	    renderChildren ||               // has new static slots
	    vm.$options._renderChildren ||  // has old static slots
	    parentVnode.data.scopedSlots || // has new scoped slots
	    vm.$scopedSlots !== emptyObject // has old scoped slots
	  );
	
	  vm.$options._parentVnode = parentVnode;
	  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	
	  if (vm._vnode) { // update child tree's parent
	    vm._vnode.parent = parentVnode;
	  }
	  vm.$options._renderChildren = renderChildren;
	
	  // update $attrs and $listeners hash
	  // these are also reactive so they may trigger child update if the child
	  // used them during render
	  vm.$attrs = parentVnode.data.attrs || emptyObject;
	  vm.$listeners = listeners || emptyObject;
	
	  // update props
	  if (propsData && vm.$options.props) {
	    toggleObserving(false);
	    var props = vm._props;
	    var propKeys = vm.$options._propKeys || [];
	    for (var i = 0; i < propKeys.length; i++) {
	      var key = propKeys[i];
	      var propOptions = vm.$options.props; // wtf flow?
	      props[key] = validateProp(key, propOptions, propsData, vm);
	    }
	    toggleObserving(true);
	    // keep a copy of raw propsData
	    vm.$options.propsData = propsData;
	  }
	
	  // update listeners
	  listeners = listeners || emptyObject;
	  var oldListeners = vm.$options._parentListeners;
	  vm.$options._parentListeners = listeners;
	  updateComponentListeners(vm, listeners, oldListeners);
	
	  // resolve slots + force update if has children
	  if (hasChildren) {
	    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	    vm.$forceUpdate();
	  }
	
	  {
	    isUpdatingChildComponent = false;
	  }
	}
	
	function isInInactiveTree (vm) {
	  while (vm && (vm = vm.$parent)) {
	    if (vm._inactive) { return true }
	  }
	  return false
	}
	
	function activateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = false;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  } else if (vm._directInactive) {
	    return
	  }
	  if (vm._inactive || vm._inactive === null) {
	    vm._inactive = false;
	    for (var i = 0; i < vm.$children.length; i++) {
	      activateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'activated');
	  }
	}
	
	function deactivateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = true;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  }
	  if (!vm._inactive) {
	    vm._inactive = true;
	    for (var i = 0; i < vm.$children.length; i++) {
	      deactivateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'deactivated');
	  }
	}
	
	function callHook (vm, hook) {
	  // #7573 disable dep collection when invoking lifecycle hooks
	  pushTarget();
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      try {
	        handlers[i].call(vm);
	      } catch (e) {
	        handleError(e, vm, (hook + " hook"));
	      }
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	  popTarget();
	}
	
	/*  */
	
	
	var MAX_UPDATE_COUNT = 100;
	
	var queue = [];
	var activatedChildren = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;
	
	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  index = queue.length = activatedChildren.length = 0;
	  has = {};
	  {
	    circular = {};
	  }
	  waiting = flushing = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	  var watcher, id;
	
	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });
	
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    watcher = queue[index];
	    id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if ("development" !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > MAX_UPDATE_COUNT) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }
	
	  // keep copies of post queues before resetting state
	  var activatedQueue = activatedChildren.slice();
	  var updatedQueue = queue.slice();
	
	  resetSchedulerState();
	
	  // call component updated and activated hooks
	  callActivatedHooks(activatedQueue);
	  callUpdatedHooks(updatedQueue);
	
	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	}
	
	function callUpdatedHooks (queue) {
	  var i = queue.length;
	  while (i--) {
	    var watcher = queue[i];
	    var vm = watcher.vm;
	    if (vm._watcher === watcher && vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  }
	}
	
	/**
	 * Queue a kept-alive component that was activated during patch.
	 * The queue will be processed after the entire tree has been patched.
	 */
	function queueActivatedComponent (vm) {
	  // setting _inactive to false here so that a render function can
	  // rely on checking whether it's in an inactive tree (e.g. router-view)
	  vm._inactive = false;
	  activatedChildren.push(vm);
	}
	
	function callActivatedHooks (queue) {
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]._inactive = true;
	    activateChildComponent(queue[i], true /* true */);
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    has[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i > index && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(i + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}
	
	/*  */
	
	var uid$1 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options,
	  isRenderWatcher
	) {
	  this.vm = vm;
	  if (isRenderWatcher) {
	    vm._watcher = this;
	  }
	  vm._watchers.push(this);
	  // options
	  if (options) {
	    this.deep = !!options.deep;
	    this.user = !!options.user;
	    this.lazy = !!options.lazy;
	    this.sync = !!options.sync;
	  } else {
	    this.deep = this.user = this.lazy = this.sync = false;
	  }
	  this.cb = cb;
	  this.id = ++uid$1; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.expression = expOrFn.toString();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      "development" !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value;
	  var vm = this.vm;
	  try {
	    value = this.getter.call(vm, vm);
	  } catch (e) {
	    if (this.user) {
	      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
	    } else {
	      throw e
	    }
	  } finally {
	    // "touch" every property so they are all tracked as
	    // dependencies for deep watching
	    if (this.deep) {
	      traverse(value);
	    }
	    popTarget();
	    this.cleanupDeps();
	  }
	  return value
	};
	
	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};
	
	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	    if (
	      value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;
	
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed.
	    if (!this.vm._isBeingDestroyed) {
	      remove(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};
	
	/*  */
	
	var sharedPropertyDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};
	
	function proxy (target, sourceKey, key) {
	  sharedPropertyDefinition.get = function proxyGetter () {
	    return this[sourceKey][key]
	  };
	  sharedPropertyDefinition.set = function proxySetter (val) {
	    this[sourceKey][key] = val;
	  };
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}
	
	function initState (vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) { initProps(vm, opts.props); }
	  if (opts.methods) { initMethods(vm, opts.methods); }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) { initComputed(vm, opts.computed); }
	  if (opts.watch && opts.watch !== nativeWatch) {
	    initWatch(vm, opts.watch);
	  }
	}
	
	function initProps (vm, propsOptions) {
	  var propsData = vm.$options.propsData || {};
	  var props = vm._props = {};
	  // cache prop keys so that future props updates can iterate using Array
	  // instead of dynamic object key enumeration.
	  var keys = vm.$options._propKeys = [];
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  if (!isRoot) {
	    toggleObserving(false);
	  }
	  var loop = function ( key ) {
	    keys.push(key);
	    var value = validateProp(key, propsOptions, propsData, vm);
	    /* istanbul ignore else */
	    {
	      var hyphenatedKey = hyphenate(key);
	      if (isReservedAttribute(hyphenatedKey) ||
	          config.isReservedAttr(hyphenatedKey)) {
	        warn(
	          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
	          vm
	        );
	      }
	      defineReactive(props, key, value, function () {
	        if (vm.$parent && !isUpdatingChildComponent) {
	          warn(
	            "Avoid mutating a prop directly since the value will be " +
	            "overwritten whenever the parent component re-renders. " +
	            "Instead, use a data or computed property based on the prop's " +
	            "value. Prop being mutated: \"" + key + "\"",
	            vm
	          );
	        }
	      });
	    }
	    // static props are already proxied on the component's prototype
	    // during Vue.extend(). We only need to proxy props defined at
	    // instantiation here.
	    if (!(key in vm)) {
	      proxy(vm, "_props", key);
	    }
	  };
	
	  for (var key in propsOptions) loop( key );
	  toggleObserving(true);
	}
	
	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? getData(data, vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    "development" !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var methods = vm.$options.methods;
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    {
	      if (methods && hasOwn(methods, key)) {
	        warn(
	          ("Method \"" + key + "\" has already been defined as a data property."),
	          vm
	        );
	      }
	    }
	    if (props && hasOwn(props, key)) {
	      "development" !== 'production' && warn(
	        "The data property \"" + key + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else if (!isReserved(key)) {
	      proxy(vm, "_data", key);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}
	
	function getData (data, vm) {
	  // #7573 disable dep collection when invoking data getters
	  pushTarget();
	  try {
	    return data.call(vm, vm)
	  } catch (e) {
	    handleError(e, vm, "data()");
	    return {}
	  } finally {
	    popTarget();
	  }
	}
	
	var computedWatcherOptions = { lazy: true };
	
	function initComputed (vm, computed) {
	  // $flow-disable-line
	  var watchers = vm._computedWatchers = Object.create(null);
	  // computed properties are just getters during SSR
	  var isSSR = isServerRendering();
	
	  for (var key in computed) {
	    var userDef = computed[key];
	    var getter = typeof userDef === 'function' ? userDef : userDef.get;
	    if ("development" !== 'production' && getter == null) {
	      warn(
	        ("Getter is missing for computed property \"" + key + "\"."),
	        vm
	      );
	    }
	
	    if (!isSSR) {
	      // create internal watcher for the computed property.
	      watchers[key] = new Watcher(
	        vm,
	        getter || noop,
	        noop,
	        computedWatcherOptions
	      );
	    }
	
	    // component-defined computed properties are already defined on the
	    // component prototype. We only need to define computed properties defined
	    // at instantiation here.
	    if (!(key in vm)) {
	      defineComputed(vm, key, userDef);
	    } else {
	      if (key in vm.$data) {
	        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
	      } else if (vm.$options.props && key in vm.$options.props) {
	        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
	      }
	    }
	  }
	}
	
	function defineComputed (
	  target,
	  key,
	  userDef
	) {
	  var shouldCache = !isServerRendering();
	  if (typeof userDef === 'function') {
	    sharedPropertyDefinition.get = shouldCache
	      ? createComputedGetter(key)
	      : userDef;
	    sharedPropertyDefinition.set = noop;
	  } else {
	    sharedPropertyDefinition.get = userDef.get
	      ? shouldCache && userDef.cache !== false
	        ? createComputedGetter(key)
	        : userDef.get
	      : noop;
	    sharedPropertyDefinition.set = userDef.set
	      ? userDef.set
	      : noop;
	  }
	  if ("development" !== 'production' &&
	      sharedPropertyDefinition.set === noop) {
	    sharedPropertyDefinition.set = function () {
	      warn(
	        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
	        this
	      );
	    };
	  }
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}
	
	function createComputedGetter (key) {
	  return function computedGetter () {
	    var watcher = this._computedWatchers && this._computedWatchers[key];
	    if (watcher) {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value
	    }
	  }
	}
	
	function initMethods (vm, methods) {
	  var props = vm.$options.props;
	  for (var key in methods) {
	    {
	      if (methods[key] == null) {
	        warn(
	          "Method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	      if (props && hasOwn(props, key)) {
	        warn(
	          ("Method \"" + key + "\" has already been defined as a prop."),
	          vm
	        );
	      }
	      if ((key in vm) && isReserved(key)) {
	        warn(
	          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
	          "Avoid defining component methods that start with _ or $."
	        );
	      }
	    }
	    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
	  }
	}
	
	function initWatch (vm, watch) {
	  for (var key in watch) {
	    var handler = watch[key];
	    if (Array.isArray(handler)) {
	      for (var i = 0; i < handler.length; i++) {
	        createWatcher(vm, key, handler[i]);
	      }
	    } else {
	      createWatcher(vm, key, handler);
	    }
	  }
	}
	
	function createWatcher (
	  vm,
	  expOrFn,
	  handler,
	  options
	) {
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  return vm.$watch(expOrFn, handler, options)
	}
	
	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () { return this._data };
	  var propsDef = {};
	  propsDef.get = function () { return this._props };
	  {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	    propsDef.set = function () {
	      warn("$props is readonly.", this);
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	  Object.defineProperty(Vue.prototype, '$props', propsDef);
	
	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;
	
	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    if (isPlainObject(cb)) {
	      return createWatcher(vm, expOrFn, cb, options)
	    }
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}
	
	/*  */
	
	function initProvide (vm) {
	  var provide = vm.$options.provide;
	  if (provide) {
	    vm._provided = typeof provide === 'function'
	      ? provide.call(vm)
	      : provide;
	  }
	}
	
	function initInjections (vm) {
	  var result = resolveInject(vm.$options.inject, vm);
	  if (result) {
	    toggleObserving(false);
	    Object.keys(result).forEach(function (key) {
	      /* istanbul ignore else */
	      {
	        defineReactive(vm, key, result[key], function () {
	          warn(
	            "Avoid mutating an injected value directly since the changes will be " +
	            "overwritten whenever the provided component re-renders. " +
	            "injection being mutated: \"" + key + "\"",
	            vm
	          );
	        });
	      }
	    });
	    toggleObserving(true);
	  }
	}
	
	function resolveInject (inject, vm) {
	  if (inject) {
	    // inject is :any because flow is not smart enough to figure out cached
	    var result = Object.create(null);
	    var keys = hasSymbol
	      ? Reflect.ownKeys(inject).filter(function (key) {
	        /* istanbul ignore next */
	        return Object.getOwnPropertyDescriptor(inject, key).enumerable
	      })
	      : Object.keys(inject);
	
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var provideKey = inject[key].from;
	      var source = vm;
	      while (source) {
	        if (source._provided && hasOwn(source._provided, provideKey)) {
	          result[key] = source._provided[provideKey];
	          break
	        }
	        source = source.$parent;
	      }
	      if (!source) {
	        if ('default' in inject[key]) {
	          var provideDefault = inject[key].default;
	          result[key] = typeof provideDefault === 'function'
	            ? provideDefault.call(vm)
	            : provideDefault;
	        } else {
	          warn(("Injection \"" + key + "\" not found"), vm);
	        }
	      }
	    }
	    return result
	  }
	}
	
	/*  */
	
	/**
	 * Runtime helper for rendering v-for lists.
	 */
	function renderList (
	  val,
	  render
	) {
	  var ret, i, l, keys, key;
	  if (Array.isArray(val) || typeof val === 'string') {
	    ret = new Array(val.length);
	    for (i = 0, l = val.length; i < l; i++) {
	      ret[i] = render(val[i], i);
	    }
	  } else if (typeof val === 'number') {
	    ret = new Array(val);
	    for (i = 0; i < val; i++) {
	      ret[i] = render(i + 1, i);
	    }
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    ret = new Array(keys.length);
	    for (i = 0, l = keys.length; i < l; i++) {
	      key = keys[i];
	      ret[i] = render(val[key], key, i);
	    }
	  }
	  if (isDef(ret)) {
	    (ret)._isVList = true;
	  }
	  return ret
	}
	
	/*  */
	
	/**
	 * Runtime helper for rendering <slot>
	 */
	function renderSlot (
	  name,
	  fallback,
	  props,
	  bindObject
	) {
	  var scopedSlotFn = this.$scopedSlots[name];
	  var nodes;
	  if (scopedSlotFn) { // scoped slot
	    props = props || {};
	    if (bindObject) {
	      if ("development" !== 'production' && !isObject(bindObject)) {
	        warn(
	          'slot v-bind without argument expects an Object',
	          this
	        );
	      }
	      props = extend(extend({}, bindObject), props);
	    }
	    nodes = scopedSlotFn(props) || fallback;
	  } else {
	    var slotNodes = this.$slots[name];
	    // warn duplicate slot usage
	    if (slotNodes) {
	      if ("development" !== 'production' && slotNodes._rendered) {
	        warn(
	          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	          "- this will likely cause render errors.",
	          this
	        );
	      }
	      slotNodes._rendered = true;
	    }
	    nodes = slotNodes || fallback;
	  }
	
	  var target = props && props.slot;
	  if (target) {
	    return this.$createElement('template', { slot: target }, nodes)
	  } else {
	    return nodes
	  }
	}
	
	/*  */
	
	/**
	 * Runtime helper for resolving filters
	 */
	function resolveFilter (id) {
	  return resolveAsset(this.$options, 'filters', id, true) || identity
	}
	
	/*  */
	
	function isKeyNotMatch (expect, actual) {
	  if (Array.isArray(expect)) {
	    return expect.indexOf(actual) === -1
	  } else {
	    return expect !== actual
	  }
	}
	
	/**
	 * Runtime helper for checking keyCodes from config.
	 * exposed as Vue.prototype._k
	 * passing in eventKeyName as last argument separately for backwards compat
	 */
	function checkKeyCodes (
	  eventKeyCode,
	  key,
	  builtInKeyCode,
	  eventKeyName,
	  builtInKeyName
	) {
	  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
	  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
	    return isKeyNotMatch(builtInKeyName, eventKeyName)
	  } else if (mappedKeyCode) {
	    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
	  } else if (eventKeyName) {
	    return hyphenate(eventKeyName) !== key
	  }
	}
	
	/*  */
	
	/**
	 * Runtime helper for merging v-bind="object" into a VNode's data.
	 */
	function bindObjectProps (
	  data,
	  tag,
	  value,
	  asProp,
	  isSync
	) {
	  if (value) {
	    if (!isObject(value)) {
	      "development" !== 'production' && warn(
	        'v-bind without argument expects an Object or Array value',
	        this
	      );
	    } else {
	      if (Array.isArray(value)) {
	        value = toObject(value);
	      }
	      var hash;
	      var loop = function ( key ) {
	        if (
	          key === 'class' ||
	          key === 'style' ||
	          isReservedAttribute(key)
	        ) {
	          hash = data;
	        } else {
	          var type = data.attrs && data.attrs.type;
	          hash = asProp || config.mustUseProp(tag, type, key)
	            ? data.domProps || (data.domProps = {})
	            : data.attrs || (data.attrs = {});
	        }
	        if (!(key in hash)) {
	          hash[key] = value[key];
	
	          if (isSync) {
	            var on = data.on || (data.on = {});
	            on[("update:" + key)] = function ($event) {
	              value[key] = $event;
	            };
	          }
	        }
	      };
	
	      for (var key in value) loop( key );
	    }
	  }
	  return data
	}
	
	/*  */
	
	/**
	 * Runtime helper for rendering static trees.
	 */
	function renderStatic (
	  index,
	  isInFor
	) {
	  var cached = this._staticTrees || (this._staticTrees = []);
	  var tree = cached[index];
	  // if has already-rendered static tree and not inside v-for,
	  // we can reuse the same tree.
	  if (tree && !isInFor) {
	    return tree
	  }
	  // otherwise, render a fresh tree.
	  tree = cached[index] = this.$options.staticRenderFns[index].call(
	    this._renderProxy,
	    null,
	    this // for render fns generated for functional component templates
	  );
	  markStatic(tree, ("__static__" + index), false);
	  return tree
	}
	
	/**
	 * Runtime helper for v-once.
	 * Effectively it means marking the node as static with a unique key.
	 */
	function markOnce (
	  tree,
	  index,
	  key
	) {
	  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	  return tree
	}
	
	function markStatic (
	  tree,
	  key,
	  isOnce
	) {
	  if (Array.isArray(tree)) {
	    for (var i = 0; i < tree.length; i++) {
	      if (tree[i] && typeof tree[i] !== 'string') {
	        markStaticNode(tree[i], (key + "_" + i), isOnce);
	      }
	    }
	  } else {
	    markStaticNode(tree, key, isOnce);
	  }
	}
	
	function markStaticNode (node, key, isOnce) {
	  node.isStatic = true;
	  node.key = key;
	  node.isOnce = isOnce;
	}
	
	/*  */
	
	function bindObjectListeners (data, value) {
	  if (value) {
	    if (!isPlainObject(value)) {
	      "development" !== 'production' && warn(
	        'v-on without argument expects an Object value',
	        this
	      );
	    } else {
	      var on = data.on = data.on ? extend({}, data.on) : {};
	      for (var key in value) {
	        var existing = on[key];
	        var ours = value[key];
	        on[key] = existing ? [].concat(existing, ours) : ours;
	      }
	    }
	  }
	  return data
	}
	
	/*  */
	
	function installRenderHelpers (target) {
	  target._o = markOnce;
	  target._n = toNumber;
	  target._s = toString;
	  target._l = renderList;
	  target._t = renderSlot;
	  target._q = looseEqual;
	  target._i = looseIndexOf;
	  target._m = renderStatic;
	  target._f = resolveFilter;
	  target._k = checkKeyCodes;
	  target._b = bindObjectProps;
	  target._v = createTextVNode;
	  target._e = createEmptyVNode;
	  target._u = resolveScopedSlots;
	  target._g = bindObjectListeners;
	}
	
	/*  */
	
	function FunctionalRenderContext (
	  data,
	  props,
	  children,
	  parent,
	  Ctor
	) {
	  var options = Ctor.options;
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var contextVm;
	  if (hasOwn(parent, '_uid')) {
	    contextVm = Object.create(parent);
	    // $flow-disable-line
	    contextVm._original = parent;
	  } else {
	    // the context vm passed in is a functional context as well.
	    // in this case we want to make sure we are able to get a hold to the
	    // real context instance.
	    contextVm = parent;
	    // $flow-disable-line
	    parent = parent._original;
	  }
	  var isCompiled = isTrue(options._compiled);
	  var needNormalization = !isCompiled;
	
	  this.data = data;
	  this.props = props;
	  this.children = children;
	  this.parent = parent;
	  this.listeners = data.on || emptyObject;
	  this.injections = resolveInject(options.inject, parent);
	  this.slots = function () { return resolveSlots(children, parent); };
	
	  // support for compiled functional template
	  if (isCompiled) {
	    // exposing $options for renderStatic()
	    this.$options = options;
	    // pre-resolve slots for renderSlot()
	    this.$slots = this.slots();
	    this.$scopedSlots = data.scopedSlots || emptyObject;
	  }
	
	  if (options._scopeId) {
	    this._c = function (a, b, c, d) {
	      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
	      if (vnode && !Array.isArray(vnode)) {
	        vnode.fnScopeId = options._scopeId;
	        vnode.fnContext = parent;
	      }
	      return vnode
	    };
	  } else {
	    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
	  }
	}
	
	installRenderHelpers(FunctionalRenderContext.prototype);
	
	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  contextVm,
	  children
	) {
	  var options = Ctor.options;
	  var props = {};
	  var propOptions = options.props;
	  if (isDef(propOptions)) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData || emptyObject);
	    }
	  } else {
	    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
	    if (isDef(data.props)) { mergeProps(props, data.props); }
	  }
	
	  var renderContext = new FunctionalRenderContext(
	    data,
	    props,
	    children,
	    contextVm,
	    Ctor
	  );
	
	  var vnode = options.render.call(null, renderContext._c, renderContext);
	
	  if (vnode instanceof VNode) {
	    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
	  } else if (Array.isArray(vnode)) {
	    var vnodes = normalizeChildren(vnode) || [];
	    var res = new Array(vnodes.length);
	    for (var i = 0; i < vnodes.length; i++) {
	      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
	    }
	    return res
	  }
	}
	
	function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
	  // #7817 clone node before setting fnContext, otherwise if the node is reused
	  // (e.g. it was from a cached normal slot) the fnContext causes named slots
	  // that should not be matched to match.
	  var clone = cloneVNode(vnode);
	  clone.fnContext = contextVm;
	  clone.fnOptions = options;
	  if (data.slot) {
	    (clone.data || (clone.data = {})).slot = data.slot;
	  }
	  return clone
	}
	
	function mergeProps (to, from) {
	  for (var key in from) {
	    to[camelize(key)] = from[key];
	  }
	}
	
	/*  */
	
	
	
	
	// Register the component hook to weex native render engine.
	// The hook will be triggered by native, not javascript.
	
	
	// Updates the state of the component to weex native render engine.
	
	/*  */
	
	// https://github.com/Hanks10100/weex-native-directive/tree/master/component
	
	// listening on native callback
	
	/*  */
	
	/*  */
	
	// inline hooks to be invoked on component VNodes during patch
	var componentVNodeHooks = {
	  init: function init (
	    vnode,
	    hydrating,
	    parentElm,
	    refElm
	  ) {
	    if (
	      vnode.componentInstance &&
	      !vnode.componentInstance._isDestroyed &&
	      vnode.data.keepAlive
	    ) {
	      // kept-alive components, treat as a patch
	      var mountedNode = vnode; // work around flow
	      componentVNodeHooks.prepatch(mountedNode, mountedNode);
	    } else {
	      var child = vnode.componentInstance = createComponentInstanceForVnode(
	        vnode,
	        activeInstance,
	        parentElm,
	        refElm
	      );
	      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	    }
	  },
	
	  prepatch: function prepatch (oldVnode, vnode) {
	    var options = vnode.componentOptions;
	    var child = vnode.componentInstance = oldVnode.componentInstance;
	    updateChildComponent(
	      child,
	      options.propsData, // updated props
	      options.listeners, // updated listeners
	      vnode, // new parent vnode
	      options.children // new children
	    );
	  },
	
	  insert: function insert (vnode) {
	    var context = vnode.context;
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isMounted) {
	      componentInstance._isMounted = true;
	      callHook(componentInstance, 'mounted');
	    }
	    if (vnode.data.keepAlive) {
	      if (context._isMounted) {
	        // vue-router#1212
	        // During updates, a kept-alive component's child components may
	        // change, so directly walking the tree here may call activated hooks
	        // on incorrect children. Instead we push them into a queue which will
	        // be processed after the whole patch process ended.
	        queueActivatedComponent(componentInstance);
	      } else {
	        activateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  },
	
	  destroy: function destroy (vnode) {
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isDestroyed) {
	      if (!vnode.data.keepAlive) {
	        componentInstance.$destroy();
	      } else {
	        deactivateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  }
	};
	
	var hooksToMerge = Object.keys(componentVNodeHooks);
	
	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (isUndef(Ctor)) {
	    return
	  }
	
	  var baseCtor = context.$options._base;
	
	  // plain options object: turn it into a constructor
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }
	
	  // if at this stage it's not a constructor or an async component factory,
	  // reject.
	  if (typeof Ctor !== 'function') {
	    {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }
	
	  // async component
	  var asyncFactory;
	  if (isUndef(Ctor.cid)) {
	    asyncFactory = Ctor;
	    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
	    if (Ctor === undefined) {
	      // return a placeholder node for async component, which is rendered
	      // as a comment node but preserves all the raw information for the node.
	      // the information will be used for async server-rendering and hydration.
	      return createAsyncPlaceholder(
	        asyncFactory,
	        data,
	        context,
	        children,
	        tag
	      )
	    }
	  }
	
	  data = data || {};
	
	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);
	
	  // transform component v-model data into props & events
	  if (isDef(data.model)) {
	    transformModel(Ctor.options, data);
	  }
	
	  // extract props
	  var propsData = extractPropsFromVNodeData(data, Ctor, tag);
	
	  // functional component
	  if (isTrue(Ctor.options.functional)) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }
	
	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  // so it gets processed during parent component patch.
	  data.on = data.nativeOn;
	
	  if (isTrue(Ctor.options.abstract)) {
	    // abstract components do not keep anything
	    // other than props & listeners & slot
	
	    // work around flow
	    var slot = data.slot;
	    data = {};
	    if (slot) {
	      data.slot = slot;
	    }
	  }
	
	  // install component management hooks onto the placeholder node
	  installComponentHooks(data);
	
	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
	    asyncFactory
	  );
	
	  // Weex specific: invoke recycle-list optimized @render function for
	  // extracting cell-slot template.
	  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
	  /* istanbul ignore if */
	  return vnode
	}
	
	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    _parentVnode: vnode,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (isDef(inlineTemplate)) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnode.componentOptions.Ctor(options)
	}
	
	function installComponentHooks (data) {
	  var hooks = data.hook || (data.hook = {});
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    hooks[key] = componentVNodeHooks[key];
	  }
	}
	
	// transform component v-model info (value and callback) into
	// prop and event handler respectively.
	function transformModel (options, data) {
	  var prop = (options.model && options.model.prop) || 'value';
	  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
	  var on = data.on || (data.on = {});
	  if (isDef(on[event])) {
	    on[event] = [data.model.callback].concat(on[event]);
	  } else {
	    on[event] = data.model.callback;
	  }
	}
	
	/*  */
	
	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;
	
	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (isTrue(alwaysNormalize)) {
	    normalizationType = ALWAYS_NORMALIZE;
	  }
	  return _createElement(context, tag, data, children, normalizationType)
	}
	
	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType
	) {
	  if (isDef(data) && isDef((data).__ob__)) {
	    "development" !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  // object syntax in v-bind
	  if (isDef(data) && isDef(data.is)) {
	    tag = data.is;
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // warn against non-primitive key
	  if ("development" !== 'production' &&
	    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
	  ) {
	    {
	      warn(
	        'Avoid using non-primitive value as key, ' +
	        'use string/number value instead.',
	        context
	      );
	    }
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	    typeof children[0] === 'function'
	  ) {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (normalizationType === ALWAYS_NORMALIZE) {
	    children = normalizeChildren(children);
	  } else if (normalizationType === SIMPLE_NORMALIZE) {
	    children = simpleNormalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (Array.isArray(vnode)) {
	    return vnode
	  } else if (isDef(vnode)) {
	    if (isDef(ns)) { applyNS(vnode, ns); }
	    if (isDef(data)) { registerDeepBindings(data); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}
	
	function applyNS (vnode, ns, force) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    ns = undefined;
	    force = true;
	  }
	  if (isDef(vnode.children)) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (isDef(child.tag) && (
	        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
	        applyNS(child, ns, force);
	      }
	    }
	  }
	}
	
	// ref #5318
	// necessary to ensure parent re-render when deep bindings like :style and
	// :class are used on slot nodes
	function registerDeepBindings (data) {
	  if (isObject(data.style)) {
	    traverse(data.style);
	  }
	  if (isObject(data.class)) {
	    traverse(data.class);
	  }
	}
	
	/*  */
	
	function initRender (vm) {
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null; // v-once cached trees
	  var options = vm.$options;
	  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(options._renderChildren, renderContext);
	  vm.$scopedSlots = emptyObject;
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
	
	  // $attrs & $listeners are exposed for easier HOC creation.
	  // they need to be reactive so that HOCs using them are always updated
	  var parentData = parentVnode && parentVnode.data;
	
	  /* istanbul ignore else */
	  {
	    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
	      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
	    }, true);
	    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
	      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
	    }, true);
	  }
	}
	
	function renderMixin (Vue) {
	  // install runtime convenience helpers
	  installRenderHelpers(Vue.prototype);
	
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };
	
	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var _parentVnode = ref._parentVnode;
	
	    // reset _rendered flag on slots for duplicate slot check
	    {
	      for (var key in vm.$slots) {
	        // $flow-disable-line
	        vm.$slots[key]._rendered = false;
	      }
	    }
	
	    if (_parentVnode) {
	      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
	    }
	
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      handleError(e, vm, "render");
	      // return error render result,
	      // or previous vnode to prevent render error causing blank component
	      /* istanbul ignore else */
	      {
	        if (vm.$options.renderError) {
	          try {
	            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
	          } catch (e) {
	            handleError(e, vm, "renderError");
	            vnode = vm._vnode;
	          }
	        } else {
	          vnode = vm._vnode;
	        }
	      }
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if ("development" !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	}
	
	/*  */
	
	var uid$3 = 0;
	
	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid$3++;
	
	    var startTag, endTag;
	    /* istanbul ignore if */
	    if ("development" !== 'production' && config.performance && mark) {
	      startTag = "vue-perf-start:" + (vm._uid);
	      endTag = "vue-perf-end:" + (vm._uid);
	      mark(startTag);
	    }
	
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    {
	      initProxy(vm);
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    initRender(vm);
	    callHook(vm, 'beforeCreate');
	    initInjections(vm); // resolve injections before data/props
	    initState(vm);
	    initProvide(vm); // resolve provide after data/props
	    callHook(vm, 'created');
	
	    /* istanbul ignore if */
	    if ("development" !== 'production' && config.performance && mark) {
	      vm._name = formatComponentName(vm, false);
	      mark(endTag);
	      measure(("vue " + (vm._name) + " init"), startTag, endTag);
	    }
	
	    if (vm.$options.el) {
	      vm.$mount(vm.$options.el);
	    }
	  };
	}
	
	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  var parentVnode = options._parentVnode;
	  opts.parent = options.parent;
	  opts._parentVnode = parentVnode;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	
	  var vnodeComponentOptions = parentVnode.componentOptions;
	  opts.propsData = vnodeComponentOptions.propsData;
	  opts._parentListeners = vnodeComponentOptions.listeners;
	  opts._renderChildren = vnodeComponentOptions.children;
	  opts._componentTag = vnodeComponentOptions.tag;
	
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}
	
	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = resolveConstructorOptions(Ctor.super);
	    var cachedSuperOptions = Ctor.superOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed,
	      // need to resolve new options.
	      Ctor.superOptions = superOptions;
	      // check if there are any late-modified/attached options (#4976)
	      var modifiedOptions = resolveModifiedOptions(Ctor);
	      // update base extend options
	      if (modifiedOptions) {
	        extend(Ctor.extendOptions, modifiedOptions);
	      }
	      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}
	
	function resolveModifiedOptions (Ctor) {
	  var modified;
	  var latest = Ctor.options;
	  var extended = Ctor.extendOptions;
	  var sealed = Ctor.sealedOptions;
	  for (var key in latest) {
	    if (latest[key] !== sealed[key]) {
	      if (!modified) { modified = {}; }
	      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
	    }
	  }
	  return modified
	}
	
	function dedupe (latest, extended, sealed) {
	  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
	  // between merges
	  if (Array.isArray(latest)) {
	    var res = [];
	    sealed = Array.isArray(sealed) ? sealed : [sealed];
	    extended = Array.isArray(extended) ? extended : [extended];
	    for (var i = 0; i < latest.length; i++) {
	      // push original options and not sealed options to exclude duplicated options
	      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
	        res.push(latest[i]);
	      }
	    }
	    return res
	  } else {
	    return latest
	  }
	}
	
	function Vue (options) {
	  if ("development" !== 'production' &&
	    !(this instanceof Vue)
	  ) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}
	
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	renderMixin(Vue);
	
	/*  */
	
	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
	    if (installedPlugins.indexOf(plugin) > -1) {
	      return this
	    }
	
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else if (typeof plugin === 'function') {
	      plugin.apply(null, args);
	    }
	    installedPlugins.push(plugin);
	    return this
	  };
	}
	
	/*  */
	
	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	    return this
	  };
	}
	
	/*  */
	
	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }
	
	    var name = extendOptions.name || Super.options.name;
	    if ("development" !== 'production' && name) {
	      validateComponentName(name);
	    }
	
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	
	    // For props and computed properties, we define the proxy getters on
	    // the Vue instances at extension time, on the extended prototype. This
	    // avoids Object.defineProperty calls for each instance created.
	    if (Sub.options.props) {
	      initProps$1(Sub);
	    }
	    if (Sub.options.computed) {
	      initComputed$1(Sub);
	    }
	
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    ASSET_TYPES.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    Sub.sealedOptions = extend({}, Sub.options);
	
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}
	
	function initProps$1 (Comp) {
	  var props = Comp.options.props;
	  for (var key in props) {
	    proxy(Comp.prototype, "_props", key);
	  }
	}
	
	function initComputed$1 (Comp) {
	  var computed = Comp.options.computed;
	  for (var key in computed) {
	    defineComputed(Comp.prototype, key, computed[key]);
	  }
	}
	
	/*  */
	
	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  ASSET_TYPES.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if ("development" !== 'production' && type === 'component') {
	          validateComponentName(id);
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}
	
	/*  */
	
	function getComponentName (opts) {
	  return opts && (opts.Ctor.options.name || opts.tag)
	}
	
	function matches (pattern, name) {
	  if (Array.isArray(pattern)) {
	    return pattern.indexOf(name) > -1
	  } else if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else if (isRegExp(pattern)) {
	    return pattern.test(name)
	  }
	  /* istanbul ignore next */
	  return false
	}
	
	function pruneCache (keepAliveInstance, filter) {
	  var cache = keepAliveInstance.cache;
	  var keys = keepAliveInstance.keys;
	  var _vnode = keepAliveInstance._vnode;
	  for (var key in cache) {
	    var cachedNode = cache[key];
	    if (cachedNode) {
	      var name = getComponentName(cachedNode.componentOptions);
	      if (name && !filter(name)) {
	        pruneCacheEntry(cache, key, keys, _vnode);
	      }
	    }
	  }
	}
	
	function pruneCacheEntry (
	  cache,
	  key,
	  keys,
	  current
	) {
	  var cached$$1 = cache[key];
	  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
	    cached$$1.componentInstance.$destroy();
	  }
	  cache[key] = null;
	  remove(keys, key);
	}
	
	var patternTypes = [String, RegExp, Array];
	
	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	
	  props: {
	    include: patternTypes,
	    exclude: patternTypes,
	    max: [String, Number]
	  },
	
	  created: function created () {
	    this.cache = Object.create(null);
	    this.keys = [];
	  },
	
	  destroyed: function destroyed () {
	    var this$1 = this;
	
	    for (var key in this$1.cache) {
	      pruneCacheEntry(this$1.cache, key, this$1.keys);
	    }
	  },
	
	  mounted: function mounted () {
	    var this$1 = this;
	
	    this.$watch('include', function (val) {
	      pruneCache(this$1, function (name) { return matches(val, name); });
	    });
	    this.$watch('exclude', function (val) {
	      pruneCache(this$1, function (name) { return !matches(val, name); });
	    });
	  },
	
	  render: function render () {
	    var slot = this.$slots.default;
	    var vnode = getFirstComponentChild(slot);
	    var componentOptions = vnode && vnode.componentOptions;
	    if (componentOptions) {
	      // check pattern
	      var name = getComponentName(componentOptions);
	      var ref = this;
	      var include = ref.include;
	      var exclude = ref.exclude;
	      if (
	        // not included
	        (include && (!name || !matches(include, name))) ||
	        // excluded
	        (exclude && name && matches(exclude, name))
	      ) {
	        return vnode
	      }
	
	      var ref$1 = this;
	      var cache = ref$1.cache;
	      var keys = ref$1.keys;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
	        : vnode.key;
	      if (cache[key]) {
	        vnode.componentInstance = cache[key].componentInstance;
	        // make current key freshest
	        remove(keys, key);
	        keys.push(key);
	      } else {
	        cache[key] = vnode;
	        keys.push(key);
	        // prune oldest entry
	        if (this.max && keys.length > parseInt(this.max)) {
	          pruneCacheEntry(cache, keys[0], keys, this._vnode);
	        }
	      }
	
	      vnode.data.keepAlive = true;
	    }
	    return vnode || (slot && slot[0])
	  }
	}
	
	var builtInComponents = {
	  KeepAlive: KeepAlive
	}
	
	/*  */
	
	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	
	  // exposed util methods.
	  // NOTE: these are not considered part of the public API - avoid relying on
	  // them unless you are aware of the risk.
	  Vue.util = {
	    warn: warn,
	    extend: extend,
	    mergeOptions: mergeOptions,
	    defineReactive: defineReactive
	  };
	
	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;
	
	  Vue.options = Object.create(null);
	  ASSET_TYPES.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });
	
	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;
	
	  extend(Vue.options.components, builtInComponents);
	
	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}
	
	initGlobalAPI(Vue);
	
	Object.defineProperty(Vue.prototype, '$isServer', {
	  get: isServerRendering
	});
	
	Object.defineProperty(Vue.prototype, '$ssrContext', {
	  get: function get () {
	    /* istanbul ignore next */
	    return this.$vnode && this.$vnode.ssrContext
	  }
	});
	
	// expose FunctionalRenderContext for ssr runtime helper installation
	Object.defineProperty(Vue, 'FunctionalRenderContext', {
	  value: FunctionalRenderContext
	});
	
	Vue.version = '2.5.16';
	
	/*  */
	
	// these are reserved for web because they are directly compiled away
	// during template compilation
	var isReservedAttr = makeMap('style,class');
	
	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select,progress');
	var mustUseProp = function (tag, type, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};
	
	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
	
	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);
	
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	
	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};
	
	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};
	
	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};
	
	/*  */
	
	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (isDef(childNode.componentInstance)) {
	    childNode = childNode.componentInstance._vnode;
	    if (childNode && childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while (isDef(parentNode = parentNode.parent)) {
	    if (parentNode && parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return renderClass(data.staticClass, data.class)
	}
	
	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: isDef(child.class)
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}
	
	function renderClass (
	  staticClass,
	  dynamicClass
	) {
	  if (isDef(staticClass) || isDef(dynamicClass)) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}
	
	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}
	
	function stringifyClass (value) {
	  if (Array.isArray(value)) {
	    return stringifyArray(value)
	  }
	  if (isObject(value)) {
	    return stringifyObject(value)
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  /* istanbul ignore next */
	  return ''
	}
	
	function stringifyArray (value) {
	  var res = '';
	  var stringified;
	  for (var i = 0, l = value.length; i < l; i++) {
	    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
	      if (res) { res += ' '; }
	      res += stringified;
	    }
	  }
	  return res
	}
	
	function stringifyObject (value) {
	  var res = '';
	  for (var key in value) {
	    if (value[key]) {
	      if (res) { res += ' '; }
	      res += key;
	    }
	  }
	  return res
	}
	
	/*  */
	
	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};
	
	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template,blockquote,iframe,tfoot'
	);
	
	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
	  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);
	
	var isPreTag = function (tag) { return tag === 'pre'; };
	
	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};
	
	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}
	
	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}
	
	var isTextInputType = makeMap('text,number,password,search,email,tel,url');
	
	/*  */
	
	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selected = document.querySelector(el);
	    if (!selected) {
	      "development" !== 'production' && warn(
	        'Cannot find element: ' + el
	      );
	      return document.createElement('div')
	    }
	    return selected
	  } else {
	    return el
	  }
	}
	
	/*  */
	
	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  // false or null will remove the attribute but undefined will not
	  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}
	
	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}
	
	function createTextNode (text) {
	  return document.createTextNode(text)
	}
	
	function createComment (text) {
	  return document.createComment(text)
	}
	
	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}
	
	function removeChild (node, child) {
	  node.removeChild(child);
	}
	
	function appendChild (node, child) {
	  node.appendChild(child);
	}
	
	function parentNode (node) {
	  return node.parentNode
	}
	
	function nextSibling (node) {
	  return node.nextSibling
	}
	
	function tagName (node) {
	  return node.tagName
	}
	
	function setTextContent (node, text) {
	  node.textContent = text;
	}
	
	function setStyleScope (node, scopeId) {
	  node.setAttribute(scopeId, '');
	}
	
	
	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		setStyleScope: setStyleScope
	});
	
	/*  */
	
	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	}
	
	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!isDef(key)) { return }
	
	  var vm = vnode.context;
	  var ref = vnode.componentInstance || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (!Array.isArray(refs[key])) {
	        refs[key] = [ref];
	      } else if (refs[key].indexOf(ref) < 0) {
	        // $flow-disable-line
	        refs[key].push(ref);
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}
	
	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */
	
	var emptyNode = new VNode('', {}, []);
	
	var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
	
	function sameVnode (a, b) {
	  return (
	    a.key === b.key && (
	      (
	        a.tag === b.tag &&
	        a.isComment === b.isComment &&
	        isDef(a.data) === isDef(b.data) &&
	        sameInputType(a, b)
	      ) || (
	        isTrue(a.isAsyncPlaceholder) &&
	        a.asyncFactory === b.asyncFactory &&
	        isUndef(b.asyncFactory.error)
	      )
	    )
	  )
	}
	
	function sameInputType (a, b) {
	  if (a.tag !== 'input') { return true }
	  var i;
	  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
	  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
	  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
	}
	
	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}
	
	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};
	
	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;
	
	  for (i = 0; i < hooks.length; ++i) {
	    cbs[hooks[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (isDef(modules[j][hooks[i]])) {
	        cbs[hooks[i]].push(modules[j][hooks[i]]);
	      }
	    }
	  }
	
	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }
	
	  function createRmCb (childElm, listeners) {
	    function remove () {
	      if (--remove.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove.listeners = listeners;
	    return remove
	  }
	
	  function removeNode (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (isDef(parent)) {
	      nodeOps.removeChild(parent, el);
	    }
	  }
	
	  function isUnknownElement$$1 (vnode, inVPre) {
	    return (
	      !inVPre &&
	      !vnode.ns &&
	      !(
	        config.ignoredElements.length &&
	        config.ignoredElements.some(function (ignore) {
	          return isRegExp(ignore)
	            ? ignore.test(vnode.tag)
	            : ignore === vnode.tag
	        })
	      ) &&
	      config.isUnknownElement(vnode.tag)
	    )
	  }
	
	  var creatingElmInVPre = 0;
	
	  function createElm (
	    vnode,
	    insertedVnodeQueue,
	    parentElm,
	    refElm,
	    nested,
	    ownerArray,
	    index
	  ) {
	    if (isDef(vnode.elm) && isDef(ownerArray)) {
	      // This vnode was used in a previous render!
	      // now it's used as a new node, overwriting its elm would cause
	      // potential patch errors down the road when it's used as an insertion
	      // reference node. Instead, we clone the node on-demand before creating
	      // associated DOM element for it.
	      vnode = ownerArray[index] = cloneVNode(vnode);
	    }
	
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }
	
	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      {
	        if (data && data.pre) {
	          creatingElmInVPre++;
	        }
	        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);
	
	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }
	
	      if ("development" !== 'production' && data && data.pre) {
	        creatingElmInVPre--;
	      }
	    } else if (isTrue(vnode.isComment)) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }
	
	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.componentInstance)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isTrue(isReactivated)) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }
	
	  function initComponent (vnode, insertedVnodeQueue) {
	    if (isDef(vnode.data.pendingInsert)) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	      vnode.data.pendingInsert = null;
	    }
	    vnode.elm = vnode.componentInstance.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }
	
	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.componentInstance) {
	      innerNode = innerNode.componentInstance._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }
	
	  function insert (parent, elm, ref$$1) {
	    if (isDef(parent)) {
	      if (isDef(ref$$1)) {
	        if (ref$$1.parentNode === parent) {
	          nodeOps.insertBefore(parent, elm, ref$$1);
	        }
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }
	
	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      {
	        checkDuplicateKeys(children);
	      }
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
	    }
	  }
	
	  function isPatchable (vnode) {
	    while (vnode.componentInstance) {
	      vnode = vnode.componentInstance._vnode;
	    }
	    return isDef(vnode.tag)
	  }
	
	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (isDef(i.create)) { i.create(emptyNode, vnode); }
	      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
	    }
	  }
	
	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.fnScopeId)) {
	      nodeOps.setStyleScope(vnode.elm, i);
	    } else {
	      var ancestor = vnode;
	      while (ancestor) {
	        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
	          nodeOps.setStyleScope(vnode.elm, i);
	        }
	        ancestor = ancestor.parent;
	      }
	    }
	    // for slot content they should also get the scopeId from the host instance.
	    if (isDef(i = activeInstance) &&
	      i !== vnode.context &&
	      i !== vnode.fnContext &&
	      isDef(i = i.$options._scopeId)
	    ) {
	      nodeOps.setStyleScope(vnode.elm, i);
	    }
	  }
	
	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
	    }
	  }
	
	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }
	
	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }
	
	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (isDef(rm) || isDef(vnode.data)) {
	      var i;
	      var listeners = cbs.remove.length + 1;
	      if (isDef(rm)) {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      } else {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeNode(vnode.elm);
	    }
	  }
	
	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
	
	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;
	
	    {
	      checkDuplicateKeys(newCh);
	    }
	
	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key)
	          ? oldKeyToIdx[newStartVnode.key]
	          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
	        } else {
	          vnodeToMove = oldCh[idxInOld];
	          if (sameVnode(vnodeToMove, newStartVnode)) {
	            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
	          }
	        }
	        newStartVnode = newCh[++newStartIdx];
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }
	
	  function checkDuplicateKeys (children) {
	    var seenKeys = {};
	    for (var i = 0; i < children.length; i++) {
	      var vnode = children[i];
	      var key = vnode.key;
	      if (isDef(key)) {
	        if (seenKeys[key]) {
	          warn(
	            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
	            vnode.context
	          );
	        } else {
	          seenKeys[key] = true;
	        }
	      }
	    }
	  }
	
	  function findIdxInOld (node, oldCh, start, end) {
	    for (var i = start; i < end; i++) {
	      var c = oldCh[i];
	      if (isDef(c) && sameVnode(node, c)) { return i }
	    }
	  }
	
	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	
	    var elm = vnode.elm = oldVnode.elm;
	
	    if (isTrue(oldVnode.isAsyncPlaceholder)) {
	      if (isDef(vnode.asyncFactory.resolved)) {
	        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
	      } else {
	        vnode.isAsyncPlaceholder = true;
	      }
	      return
	    }
	
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (isTrue(vnode.isStatic) &&
	      isTrue(oldVnode.isStatic) &&
	      vnode.key === oldVnode.key &&
	      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
	    ) {
	      vnode.componentInstance = oldVnode.componentInstance;
	      return
	    }
	
	    var i;
	    var data = vnode.data;
	    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (isDef(data) && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }
	
	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (isTrue(initial) && isDef(vnode.parent)) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }
	
	  var hydrationBailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  // Note: style is excluded because it relies on initial clone for future
	  // deep updates (#7063).
	  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
	
	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
	    var i;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    inVPre = inVPre || (data && data.pre);
	    vnode.elm = elm;
	
	    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
	      vnode.isAsyncPlaceholder = true;
	      return true
	    }
	    // assert node match
	    {
	      if (!assertNodeMatch(elm, vnode, inVPre)) {
	        return false
	      }
	    }
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.componentInstance)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          // v-html and domProps: innerHTML
	          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
	            if (i !== elm.innerHTML) {
	              /* istanbul ignore if */
	              if ("development" !== 'production' &&
	                typeof console !== 'undefined' &&
	                !hydrationBailed
	              ) {
	                hydrationBailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('server innerHTML: ', i);
	                console.warn('client innerHTML: ', elm.innerHTML);
	              }
	              return false
	            }
	          } else {
	            // iterate and compare children lists
	            var childrenMatch = true;
	            var childNode = elm.firstChild;
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
	                childrenMatch = false;
	                break
	              }
	              childNode = childNode.nextSibling;
	            }
	            // if childNode is not null, it means the actual childNodes list is
	            // longer than the virtual children list.
	            if (!childrenMatch || childNode) {
	              /* istanbul ignore if */
	              if ("development" !== 'production' &&
	                typeof console !== 'undefined' &&
	                !hydrationBailed
	              ) {
	                hydrationBailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	              }
	              return false
	            }
	          }
	        }
	      }
	      if (isDef(data)) {
	        var fullInvoke = false;
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            fullInvoke = true;
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	        if (!fullInvoke && data['class']) {
	          // ensure collecting deps for deep class bindings for future updates
	          traverse(data['class']);
	        }
	      }
	    } else if (elm.data !== vnode.text) {
	      elm.data = vnode.text;
	    }
	    return true
	  }
	
	  function assertNodeMatch (node, vnode, inVPre) {
	    if (isDef(vnode.tag)) {
	      return vnode.tag.indexOf('vue-component') === 0 || (
	        !isUnknownElement$$1(vnode, inVPre) &&
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3)
	    }
	  }
	
	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (isUndef(vnode)) {
	      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
	      return
	    }
	
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];
	
	    if (isUndef(oldVnode)) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
	            oldVnode.removeAttribute(SSR_ATTR);
	            hydrating = true;
	          }
	          if (isTrue(hydrating)) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	
	        // replacing existing element
	        var oldElm = oldVnode.elm;
	        var parentElm$1 = nodeOps.parentNode(oldElm);
	
	        // create new node
	        createElm(
	          vnode,
	          insertedVnodeQueue,
	          // extremely rare edge case: do not insert if old element is in a
	          // leaving transition. Only happens when combining transition +
	          // keep-alive + HOCs. (#4590)
	          oldElm._leaveCb ? null : parentElm$1,
	          nodeOps.nextSibling(oldElm)
	        );
	
	        // update parent placeholder node element, recursively
	        if (isDef(vnode.parent)) {
	          var ancestor = vnode.parent;
	          var patchable = isPatchable(vnode);
	          while (ancestor) {
	            for (var i = 0; i < cbs.destroy.length; ++i) {
	              cbs.destroy[i](ancestor);
	            }
	            ancestor.elm = vnode.elm;
	            if (patchable) {
	              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	                cbs.create[i$1](emptyNode, ancestor);
	              }
	              // #6513
	              // invoke insert hooks that may have been merged by create hooks.
	              // e.g. for directives that uses the "inserted" hook.
	              var insert = ancestor.data.hook.insert;
	              if (insert.merged) {
	                // start at index 1 to avoid re-invoking component mounted hook
	                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
	                  insert.fns[i$2]();
	                }
	              }
	            } else {
	              registerRef(ancestor);
	            }
	            ancestor = ancestor.parent;
	          }
	        }
	
	        // destroy old node
	        if (isDef(parentElm$1)) {
	          removeVnodes(parentElm$1, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }
	
	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}
	
	/*  */
	
	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	}
	
	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}
	
	function _update (oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var isDestroy = vnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
	
	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];
	
	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }
	
	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode, 'insert', callInsert);
	    } else {
	      callInsert();
	    }
	  }
	
	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode, 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    });
	  }
	
	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	      }
	    }
	  }
	}
	
	var emptyModifiers = Object.create(null);
	
	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    // $flow-disable-line
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      // $flow-disable-line
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  // $flow-disable-line
	  return res
	}
	
	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}
	
	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    try {
	      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	    } catch (e) {
	      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
	    }
	  }
	}
	
	var baseModules = [
	  ref,
	  directives
	]
	
	/*  */
	
	function updateAttrs (oldVnode, vnode) {
	  var opts = vnode.componentOptions;
	  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
	    return
	  }
	  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(attrs.__ob__)) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }
	
	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  // #6666: IE/Edge forces progress value down to 1 before setting a max
	  /* istanbul ignore if */
	  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (isUndef(attrs[key])) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}
	
	function setAttr (el, key, value) {
	  if (el.tagName.indexOf('-') > -1) {
	    baseSetAttr(el, key, value);
	  } else if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      // technically allowfullscreen is a boolean attribute for <iframe>,
	      // but Flash expects a value of "true" when used on <embed> tag
	      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
	        ? 'true'
	        : key;
	      el.setAttribute(key, value);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    baseSetAttr(el, key, value);
	  }
	}
	
	function baseSetAttr (el, key, value) {
	  if (isFalsyAttrValue(value)) {
	    el.removeAttribute(key);
	  } else {
	    // #7138: IE10 & 11 fires input event when setting placeholder on
	    // <textarea>... block the first input event and remove the blocker
	    // immediately.
	    /* istanbul ignore if */
	    if (
	      isIE && !isIE9 &&
	      el.tagName === 'TEXTAREA' &&
	      key === 'placeholder' && !el.__ieph
	    ) {
	      var blocker = function (e) {
	        e.stopImmediatePropagation();
	        el.removeEventListener('input', blocker);
	      };
	      el.addEventListener('input', blocker);
	      // $flow-disable-line
	      el.__ieph = true; /* IE placeholder patched */
	    }
	    el.setAttribute(key, value);
	  }
	}
	
	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	}
	
	/*  */
	
	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (
	    isUndef(data.staticClass) &&
	    isUndef(data.class) && (
	      isUndef(oldData) || (
	        isUndef(oldData.staticClass) &&
	        isUndef(oldData.class)
	      )
	    )
	  ) {
	    return
	  }
	
	  var cls = genClassForVnode(vnode);
	
	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (isDef(transitionClass)) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }
	
	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}
	
	var klass = {
	  create: updateClass,
	  update: updateClass
	}
	
	/*  */
	
	var validDivisionCharRE = /[\w).+\-_$\]]/;
	
	function parseFilters (exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var inTemplateString = false;
	  var inRegex = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;
	
	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
	    } else if (inDouble) {
	      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
	    } else if (inTemplateString) {
	      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
	    } else if (inRegex) {
	      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break         // "
	        case 0x27: inSingle = true; break         // '
	        case 0x60: inTemplateString = true; break // `
	        case 0x28: paren++; break                 // (
	        case 0x29: paren--; break                 // )
	        case 0x5B: square++; break                // [
	        case 0x5D: square--; break                // ]
	        case 0x7B: curly++; break                 // {
	        case 0x7D: curly--; break                 // }
	      }
	      if (c === 0x2f) { // /
	        var j = i - 1;
	        var p = (void 0);
	        // find first non-whitespace prev char
	        for (; j >= 0; j--) {
	          p = exp.charAt(j);
	          if (p !== ' ') { break }
	        }
	        if (!p || !validDivisionCharRE.test(p)) {
	          inRegex = true;
	        }
	      }
	    }
	  }
	
	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }
	
	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }
	
	  return expression
	}
	
	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
	  }
	}
	
	/*  */
	
	function baseWarn (msg) {
	  console.error(("[Vue compiler]: " + msg));
	}
	
	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}
	
	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	  el.plain = false;
	}
	
	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	  el.plain = false;
	}
	
	// add a raw attr (use this in preTransforms)
	function addRawAttr (el, name, value) {
	  el.attrsMap[name] = value;
	  el.attrsList.push({ name: name, value: value });
	}
	
	function addDirective (
	  el,
	  name,
	  rawName,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	  el.plain = false;
	}
	
	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important,
	  warn
	) {
	  modifiers = modifiers || emptyObject;
	  // warn prevent and passive modifier
	  /* istanbul ignore if */
	  if (
	    "development" !== 'production' && warn &&
	    modifiers.prevent && modifiers.passive
	  ) {
	    warn(
	      'passive and prevent can\'t be used together. ' +
	      'Passive handler can\'t prevent default event.'
	    );
	  }
	
	  // check capture modifier
	  if (modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  if (modifiers.once) {
	    delete modifiers.once;
	    name = '~' + name; // mark the event as once
	  }
	  /* istanbul ignore if */
	  if (modifiers.passive) {
	    delete modifiers.passive;
	    name = '&' + name; // mark the event as passive
	  }
	
	  // normalize click.right and click.middle since they don't actually fire
	  // this is technically browser-specific, but at least for now browsers are
	  // the only target envs that have right/middle clicks.
	  if (name === 'click') {
	    if (modifiers.right) {
	      name = 'contextmenu';
	      delete modifiers.right;
	    } else if (modifiers.middle) {
	      name = 'mouseup';
	    }
	  }
	
	  var events;
	  if (modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	
	  var newHandler = {
	    value: value.trim()
	  };
	  if (modifiers !== emptyObject) {
	    newHandler.modifiers = modifiers;
	  }
	
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	
	  el.plain = false;
	}
	
	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return parseFilters(dynamicValue)
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}
	
	// note: this only removes the attr from the Array (attrsList) so that it
	// doesn't get processed by processAttrs.
	// By default it does NOT remove it from the map (attrsMap) because the map is
	// needed during codegen.
	function getAndRemoveAttr (
	  el,
	  name,
	  removeFromMap
	) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break
	      }
	    }
	  }
	  if (removeFromMap) {
	    delete el.attrsMap[name];
	  }
	  return val
	}
	
	/*  */
	
	/**
	 * Cross-platform code generation for component v-model
	 */
	function genComponentModel (
	  el,
	  value,
	  modifiers
	) {
	  var ref = modifiers || {};
	  var number = ref.number;
	  var trim = ref.trim;
	
	  var baseValueExpression = '$$v';
	  var valueExpression = baseValueExpression;
	  if (trim) {
	    valueExpression =
	      "(typeof " + baseValueExpression + " === 'string'" +
	      "? " + baseValueExpression + ".trim()" +
	      ": " + baseValueExpression + ")";
	  }
	  if (number) {
	    valueExpression = "_n(" + valueExpression + ")";
	  }
	  var assignment = genAssignmentCode(value, valueExpression);
	
	  el.model = {
	    value: ("(" + value + ")"),
	    expression: ("\"" + value + "\""),
	    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
	  };
	}
	
	/**
	 * Cross-platform codegen helper for generating v-model value assignment code.
	 */
	function genAssignmentCode (
	  value,
	  assignment
	) {
	  var res = parseModel(value);
	  if (res.key === null) {
	    return (value + "=" + assignment)
	  } else {
	    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
	  }
	}
	
	/**
	 * Parse a v-model expression into a base path and a final key segment.
	 * Handles both dot-path and possible square brackets.
	 *
	 * Possible cases:
	 *
	 * - test
	 * - test[key]
	 * - test[test1[key]]
	 * - test["a"][key]
	 * - xxx.test[a[a].test1[key]]
	 * - test.xxx.a["asa"][test1[key]]
	 *
	 */
	
	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;
	
	
	
	function parseModel (val) {
	  // Fix https://github.com/vuejs/vue/pull/7730
	  // allow v-model="obj.val " (trailing whitespace)
	  val = val.trim();
	  len = val.length;
	
	  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
	    index$1 = val.lastIndexOf('.');
	    if (index$1 > -1) {
	      return {
	        exp: val.slice(0, index$1),
	        key: '"' + val.slice(index$1 + 1) + '"'
	      }
	    } else {
	      return {
	        exp: val,
	        key: null
	      }
	    }
	  }
	
	  str = val;
	  index$1 = expressionPos = expressionEndPos = 0;
	
	  while (!eof()) {
	    chr = next();
	    /* istanbul ignore if */
	    if (isStringStart(chr)) {
	      parseString(chr);
	    } else if (chr === 0x5B) {
	      parseBracket(chr);
	    }
	  }
	
	  return {
	    exp: val.slice(0, expressionPos),
	    key: val.slice(expressionPos + 1, expressionEndPos)
	  }
	}
	
	function next () {
	  return str.charCodeAt(++index$1)
	}
	
	function eof () {
	  return index$1 >= len
	}
	
	function isStringStart (chr) {
	  return chr === 0x22 || chr === 0x27
	}
	
	function parseBracket (chr) {
	  var inBracket = 1;
	  expressionPos = index$1;
	  while (!eof()) {
	    chr = next();
	    if (isStringStart(chr)) {
	      parseString(chr);
	      continue
	    }
	    if (chr === 0x5B) { inBracket++; }
	    if (chr === 0x5D) { inBracket--; }
	    if (inBracket === 0) {
	      expressionEndPos = index$1;
	      break
	    }
	  }
	}
	
	function parseString (chr) {
	  var stringQuote = chr;
	  while (!eof()) {
	    chr = next();
	    if (chr === stringQuote) {
	      break
	    }
	  }
	}
	
	/*  */
	
	var warn$1;
	
	// in some cases, the event used has to be determined at runtime
	// so we used some reserved tokens during compile.
	var RANGE_TOKEN = '__r';
	var CHECKBOX_RADIO_TOKEN = '__c';
	
	function model (
	  el,
	  dir,
	  _warn
	) {
	  warn$1 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	
	  {
	    // inputs with type="file" are read only and setting the input's
	    // value will throw an error.
	    if (tag === 'input' && type === 'file') {
	      warn$1(
	        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	        "File inputs are read only. Use a v-on:change listener instead."
	      );
	    }
	  }
	
	  if (el.component) {
	    genComponentModel(el, value, modifiers);
	    // component v-model doesn't need extra runtime
	    return false
	  } else if (tag === 'select') {
	    genSelect(el, value, modifiers);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value, modifiers);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value, modifiers);
	  } else if (tag === 'input' || tag === 'textarea') {
	    genDefaultModel(el, value, modifiers);
	  } else if (!config.isReservedTag(tag)) {
	    genComponentModel(el, value, modifiers);
	    // component v-model doesn't need extra runtime
	    return false
	  } else {
	    warn$1(
	      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	      "v-model is not supported on this element type. " +
	      'If you are working with contenteditable, it\'s recommended to ' +
	      'wrap a library dedicated for that purpose inside a custom component.'
	    );
	  }
	
	  // ensure runtime directive metadata
	  return true
	}
	
	function genCheckboxModel (
	  el,
	  value,
	  modifiers
	) {
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	    "?_i(" + value + "," + valueBinding + ")>-1" + (
	      trueValueBinding === 'true'
	        ? (":(" + value + ")")
	        : (":_q(" + value + "," + trueValueBinding + ")")
	    )
	  );
	  addHandler(el, 'change',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
	      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
	    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
	    null, true
	  );
	}
	
	function genRadioModel (
	  el,
	  value,
	  modifiers
	) {
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
	}
	
	function genSelect (
	  el,
	  value,
	  modifiers
	) {
	  var number = modifiers && modifiers.number;
	  var selectedVal = "Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
	    "return " + (number ? '_n(val)' : 'val') + "})";
	
	  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
	  var code = "var $$selectedVal = " + selectedVal + ";";
	  code = code + " " + (genAssignmentCode(value, assignment));
	  addHandler(el, 'change', code, null, true);
	}
	
	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  var type = el.attrsMap.type;
	
	  // warn if v-bind:value conflicts with v-model
	  // except for inputs with v-bind:type
	  {
	    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
	    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (value$1 && !typeBinding) {
	      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
	      warn$1(
	        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
	        'because the latter already expands to a value binding internally'
	      );
	    }
	  }
	
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var needCompositionGuard = !lazy && type !== 'range';
	  var event = lazy
	    ? 'change'
	    : type === 'range'
	      ? RANGE_TOKEN
	      : 'input';
	
	  var valueExpression = '$event.target.value';
	  if (trim) {
	    valueExpression = "$event.target.value.trim()";
	  }
	  if (number) {
	    valueExpression = "_n(" + valueExpression + ")";
	  }
	
	  var code = genAssignmentCode(value, valueExpression);
	  if (needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }
	
	  addProp(el, 'value', ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	  if (trim || number) {
	    addHandler(el, 'blur', '$forceUpdate()');
	  }
	}
	
	/*  */
	
	// normalize v-model event tokens that can only be determined at runtime.
	// it's important to place the event as the first in the array because
	// the whole point is ensuring the v-model callback gets called before
	// user-attached handlers.
	function normalizeEvents (on) {
	  /* istanbul ignore if */
	  if (isDef(on[RANGE_TOKEN])) {
	    // IE input[type=range] only supports `change` event
	    var event = isIE ? 'change' : 'input';
	    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
	    delete on[RANGE_TOKEN];
	  }
	  // This was originally intended to fix #4521 but no longer necessary
	  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
	  /* istanbul ignore if */
	  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
	    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
	    delete on[CHECKBOX_RADIO_TOKEN];
	  }
	}
	
	var target$1;
	
	function createOnceHandler (handler, event, capture) {
	  var _target = target$1; // save current target element in closure
	  return function onceHandler () {
	    var res = handler.apply(null, arguments);
	    if (res !== null) {
	      remove$2(event, onceHandler, capture, _target);
	    }
	  }
	}
	
	function add$1 (
	  event,
	  handler,
	  once$$1,
	  capture,
	  passive
	) {
	  handler = withMacroTask(handler);
	  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
	  target$1.addEventListener(
	    event,
	    handler,
	    supportsPassive
	      ? { capture: capture, passive: passive }
	      : capture
	  );
	}
	
	function remove$2 (
	  event,
	  handler,
	  capture,
	  _target
	) {
	  (_target || target$1).removeEventListener(
	    event,
	    handler._withTask || handler,
	    capture
	  );
	}
	
	function updateDOMListeners (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  normalizeEvents(on);
	  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
	  target$1 = undefined;
	}
	
	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	}
	
	/*  */
	
	function updateDOMProps (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(props.__ob__)) {
	    props = vnode.data.domProps = extend({}, props);
	  }
	
	  for (key in oldProps) {
	    if (isUndef(props[key])) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	      // #6601 work around Chrome version <= 55 bug where single textNode
	      // replaced by innerHTML/textContent retains its parentNode property
	      if (elm.childNodes.length === 1) {
	        elm.removeChild(elm.childNodes[0]);
	      }
	    }
	
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = isUndef(cur) ? '' : String(cur);
	      if (shouldUpdateValue(elm, strCur)) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}
	
	// check platforms/web/util/attrs.js acceptValue
	
	
	function shouldUpdateValue (elm, checkVal) {
	  return (!elm.composing && (
	    elm.tagName === 'OPTION' ||
	    isNotInFocusAndDirty(elm, checkVal) ||
	    isDirtyWithModifiers(elm, checkVal)
	  ))
	}
	
	function isNotInFocusAndDirty (elm, checkVal) {
	  // return true when textbox (.number and .trim) loses focus and its value is
	  // not equal to the updated value
	  var notInFocus = true;
	  // #6157
	  // work around IE bug when accessing document.activeElement in an iframe
	  try { notInFocus = document.activeElement !== elm; } catch (e) {}
	  return notInFocus && elm.value !== checkVal
	}
	
	function isDirtyWithModifiers (elm, newVal) {
	  var value = elm.value;
	  var modifiers = elm._vModifiers; // injected by v-model runtime
	  if (isDef(modifiers)) {
	    if (modifiers.lazy) {
	      // inputs with lazy should only be updated when not in focus
	      return false
	    }
	    if (modifiers.number) {
	      return toNumber(value) !== toNumber(newVal)
	    }
	    if (modifiers.trim) {
	      return value.trim() !== newVal.trim()
	    }
	  }
	  return value !== newVal
	}
	
	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	}
	
	/*  */
	
	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});
	
	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}
	
	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}
	
	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;
	
	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.componentInstance) {
	      childNode = childNode.componentInstance._vnode;
	      if (
	        childNode && childNode.data &&
	        (styleData = normalizeStyleData(childNode.data))
	      ) {
	        extend(res, styleData);
	      }
	    }
	  }
	
	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }
	
	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}
	
	/*  */
	
	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    var normalizedName = normalize(name);
	    if (Array.isArray(val)) {
	      // Support values array created by autoprefixer, e.g.
	      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
	      // Set them one by one, and the browser will only set those it can recognize
	      for (var i = 0, len = val.length; i < len; i++) {
	        el.style[normalizedName] = val[i];
	      }
	    } else {
	      el.style[normalizedName] = val;
	    }
	  }
	};
	
	var vendorNames = ['Webkit', 'Moz', 'ms'];
	
	var emptyStyle;
	var normalize = cached(function (prop) {
	  emptyStyle = emptyStyle || document.createElement('div').style;
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in emptyStyle)) {
	    return prop
	  }
	  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < vendorNames.length; i++) {
	    var name = vendorNames[i] + capName;
	    if (name in emptyStyle) {
	      return name
	    }
	  }
	});
	
	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	
	  if (isUndef(data.staticStyle) && isUndef(data.style) &&
	    isUndef(oldData.staticStyle) && isUndef(oldData.style)
	  ) {
	    return
	  }
	
	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldData.staticStyle;
	  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
	
	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;
	
	  var style = normalizeStyleBinding(vnode.data.style) || {};
	
	  // store normalized style under a different key for next diff
	  // make sure to clone it if it's reactive, since the user likely wants
	  // to mutate it.
	  vnode.data.normalizedStyle = isDef(style.__ob__)
	    ? extend({}, style)
	    : style;
	
	  var newStyle = getStyle(vnode, true);
	
	  for (name in oldStyle) {
	    if (isUndef(newStyle[name])) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}
	
	var style = {
	  create: updateStyle,
	  update: updateStyle
	}
	
	/*  */
	
	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }
	
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }
	
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	    if (!el.classList.length) {
	      el.removeAttribute('class');
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    cur = cur.trim();
	    if (cur) {
	      el.setAttribute('class', cur);
	    } else {
	      el.removeAttribute('class');
	    }
	  }
	}
	
	/*  */
	
	function resolveTransition (def) {
	  if (!def) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def === 'object') {
	    var res = {};
	    if (def.css !== false) {
	      extend(res, autoCssTransition(def.name || 'v'));
	    }
	    extend(res, def);
	    return res
	  } else if (typeof def === 'string') {
	    return autoCssTransition(def)
	  }
	}
	
	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    enterToClass: (name + "-enter-to"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveClass: (name + "-leave"),
	    leaveToClass: (name + "-leave-to"),
	    leaveActiveClass: (name + "-leave-active")
	  }
	});
	
	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';
	
	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  ) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  ) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}
	
	// binding to window is necessary to make hot reload work in IE in strict mode
	var raf = inBrowser
	  ? window.requestAnimationFrame
	    ? window.requestAnimationFrame.bind(window)
	    : setTimeout
	  : /* istanbul ignore next */ function (fn) { return fn(); };
	
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}
	
	function addTransitionClass (el, cls) {
	  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
	  if (transitionClasses.indexOf(cls) < 0) {
	    transitionClasses.push(cls);
	    addClass(el, cls);
	  }
	}
	
	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}
	
	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}
	
	var transformRE = /\b(transform|all)(,|$)/;
	
	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);
	
	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}
	
	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }
	
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}
	
	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}
	
	/*  */
	
	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;
	
	  // call leave callback now
	  if (isDef(el._leaveCb)) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data)) {
	    return
	  }
	
	  /* istanbul ignore if */
	  if (isDef(el._enterCb) || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterToClass = data.enterToClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearToClass = data.appearToClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	  var duration = data.duration;
	
	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }
	
	  var isAppear = !context._isMounted || !vnode.isRootInsert;
	
	  if (isAppear && !appear && appear !== '') {
	    return
	  }
	
	  var startClass = isAppear && appearClass
	    ? appearClass
	    : enterClass;
	  var activeClass = isAppear && appearActiveClass
	    ? appearActiveClass
	    : enterActiveClass;
	  var toClass = isAppear && appearToClass
	    ? appearToClass
	    : enterToClass;
	
	  var beforeEnterHook = isAppear
	    ? (beforeAppear || beforeEnter)
	    : beforeEnter;
	  var enterHook = isAppear
	    ? (typeof appear === 'function' ? appear : enter)
	    : enter;
	  var afterEnterHook = isAppear
	    ? (afterAppear || afterEnter)
	    : afterEnter;
	  var enterCancelledHook = isAppear
	    ? (appearCancelled || enterCancelled)
	    : enterCancelled;
	
	  var explicitEnterDuration = toNumber(
	    isObject(duration)
	      ? duration.enter
	      : duration
	  );
	
	  if ("development" !== 'production' && explicitEnterDuration != null) {
	    checkDuration(explicitEnterDuration, 'enter', vnode);
	  }
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(enterHook);
	
	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, toClass);
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });
	
	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode, 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	        pendingNode.tag === vnode.tag &&
	        pendingNode.elm._leaveCb
	      ) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    });
	  }
	
	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled) {
	        addTransitionClass(el, toClass);
	        if (!userWantsControl) {
	          if (isValidDuration(explicitEnterDuration)) {
	            setTimeout(cb, explicitEnterDuration);
	          } else {
	            whenTransitionEnds(el, type, cb);
	          }
	        }
	      }
	    });
	  }
	
	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }
	
	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}
	
	function leave (vnode, rm) {
	  var el = vnode.elm;
	
	  // call enter callback now
	  if (isDef(el._enterCb)) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data) || el.nodeType !== 1) {
	    return rm()
	  }
	
	  /* istanbul ignore if */
	  if (isDef(el._leaveCb)) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveToClass = data.leaveToClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	  var duration = data.duration;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(leave);
	
	  var explicitLeaveDuration = toNumber(
	    isObject(duration)
	      ? duration.leave
	      : duration
	  );
	
	  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
	    checkDuration(explicitLeaveDuration, 'leave', vnode);
	  }
	
	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveToClass);
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });
	
	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }
	
	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled) {
	          addTransitionClass(el, leaveToClass);
	          if (!userWantsControl) {
	            if (isValidDuration(explicitLeaveDuration)) {
	              setTimeout(cb, explicitLeaveDuration);
	            } else {
	              whenTransitionEnds(el, type, cb);
	            }
	          }
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}
	
	// only used in dev mode
	function checkDuration (val, name, vnode) {
	  if (typeof val !== 'number') {
	    warn(
	      "<transition> explicit " + name + " duration is not a valid number - " +
	      "got " + (JSON.stringify(val)) + ".",
	      vnode.context
	    );
	  } else if (isNaN(val)) {
	    warn(
	      "<transition> explicit " + name + " duration is NaN - " +
	      'the duration expression might be incorrect.',
	      vnode.context
	    );
	  }
	}
	
	function isValidDuration (val) {
	  return typeof val === 'number' && !isNaN(val)
	}
	
	/**
	 * Normalize a transition hook's argument length. The hook may be:
	 * - a merged hook (invoker) with the original in .fns
	 * - a wrapped component method (check ._length)
	 * - a plain function (.length)
	 */
	function getHookArgumentsLength (fn) {
	  if (isUndef(fn)) {
	    return false
	  }
	  var invokerFns = fn.fns;
	  if (isDef(invokerFns)) {
	    // invoker
	    return getHookArgumentsLength(
	      Array.isArray(invokerFns)
	        ? invokerFns[0]
	        : invokerFns
	    )
	  } else {
	    return (fn._length || fn.length) > 1
	  }
	}
	
	function _enter (_, vnode) {
	  if (vnode.data.show !== true) {
	    enter(vnode);
	  }
	}
	
	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove$$1 (vnode, rm) {
	    /* istanbul ignore else */
	    if (vnode.data.show !== true) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {}
	
	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	]
	
	/*  */
	
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);
	
	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });
	
	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */
	
	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}
	
	var directive = {
	  inserted: function inserted (el, binding, vnode, oldVnode) {
	    if (vnode.tag === 'select') {
	      // #6903
	      if (oldVnode.elm && !oldVnode.elm._vOptions) {
	        mergeVNodeHook(vnode, 'postpatch', function () {
	          directive.componentUpdated(el, binding, vnode);
	        });
	      } else {
	        setSelected(el, binding, vnode.context);
	      }
	      el._vOptions = [].map.call(el.options, getValue);
	    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	        // Safari < 10.2 & UIWebView doesn't fire compositionend when
	        // switching focus before confirming composition choice
	        // this also fixes the issue where some browsers e.g. iOS Chrome
	        // fires "change" instead of "input" on autocomplete.
	        el.addEventListener('change', onCompositionEnd);
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },
	
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var prevOptions = el._vOptions;
	      var curOptions = el._vOptions = [].map.call(el.options, getValue);
	      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
	        // trigger change event if
	        // no matching option found for at least one value
	        var needReset = el.multiple
	          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
	          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
	        if (needReset) {
	          trigger(el, 'change');
	        }
	      }
	    }
	  }
	};
	
	function setSelected (el, binding, vm) {
	  actuallySetSelected(el, binding, vm);
	  /* istanbul ignore if */
	  if (isIE || isEdge) {
	    setTimeout(function () {
	      actuallySetSelected(el, binding, vm);
	    }, 0);
	  }
	}
	
	function actuallySetSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    "development" !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}
	
	function hasNoMatchingOption (value, options) {
	  return options.every(function (o) { return !looseEqual(o, value); })
	}
	
	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}
	
	function onCompositionStart (e) {
	  e.target.composing = true;
	}
	
	function onCompositionEnd (e) {
	  // prevent triggering an input event for no reason
	  if (!e.target.composing) { return }
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}
	
	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}
	
	/*  */
	
	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.componentInstance._vnode)
	    : vnode
	}
	
	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;
	
	    vnode = locateNode(vnode);
	    var transition$$1 = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition$$1) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },
	
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;
	
	    /* istanbul ignore if */
	    if (!value === !oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition$$1 = vnode.data && vnode.data.transition;
	    if (transition$$1) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  },
	
	  unbind: function unbind (
	    el,
	    binding,
	    vnode,
	    oldVnode,
	    isDestroy
	  ) {
	    if (!isDestroy) {
	      el.style.display = el.__vOriginalDisplay;
	    }
	  }
	}
	
	var platformDirectives = {
	  model: directive,
	  show: show
	}
	
	/*  */
	
	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	
	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterToClass: String,
	  leaveToClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String,
	  appearToClass: String,
	  duration: [Number, String, Object]
	};
	
	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}
	
	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1];
	  }
	  return data
	}
	
	function placeholder (h, rawChild) {
	  if (/\d-keep-alive$/.test(rawChild.tag)) {
	    return h('keep-alive', {
	      props: rawChild.componentOptions.propsData
	    })
	  }
	}
	
	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}
	
	function isSameChild (child, oldChild) {
	  return oldChild.key === child.key && oldChild.tag === child.tag
	}
	
	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	
	  render: function render (h) {
	    var this$1 = this;
	
	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }
	
	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }
	
	    // warn multiple elements
	    if ("development" !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }
	
	    var mode = this.mode;
	
	    // warn invalid mode
	    if ("development" !== 'production' &&
	      mode && mode !== 'in-out' && mode !== 'out-in'
	    ) {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }
	
	    var rawChild = children[0];
	
	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }
	
	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }
	
	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }
	
	    // ensure a key that is unique to the vnode type and to this transition
	    // component instance. This key will be used to remove pending leaving nodes
	    // during entering.
	    var id = "__transition-" + (this._uid) + "-";
	    child.key = child.key == null
	      ? child.isComment
	        ? id + 'comment'
	        : id + child.tag
	      : isPrimitive(child.key)
	        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
	        : child.key;
	
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);
	
	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }
	
	    if (
	      oldChild &&
	      oldChild.data &&
	      !isSameChild(child, oldChild) &&
	      !isAsyncPlaceholder(oldChild) &&
	      // #6687 component root is a comment node
	      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
	    ) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        });
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        if (isAsyncPlaceholder(child)) {
	          return oldRawChild
	        }
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave);
	        mergeVNodeHook(data, 'enterCancelled', performLeave);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
	      }
	    }
	
	    return rawChild
	  }
	}
	
	/*  */
	
	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final desired state. This way in the second pass removed
	// nodes will remain where they should be.
	
	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);
	
	delete props.mode;
	
	var TransitionGroup = {
	  props: props,
	
	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);
	
	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else {
	          var opts = c.componentOptions;
	          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }
	
	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }
	
	    return h(tag, null, children)
	  },
	
	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },
	
	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }
	
	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);
	
	    // force reflow to put everything in position
	    // assign to this to avoid being removed in tree-shaking
	    // $flow-disable-line
	    this._reflow = document.body.offsetHeight;
	
	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },
	
	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      /* istanbul ignore if */
	      if (this._hasMove) {
	        return this._hasMove
	      }
	      // Detect whether an element with the move class applied has
	      // CSS transitions. Since the element may be inside an entering
	      // transition at this very moment, we make a clone of it and remove
	      // all other transition classes applied to ensure only the move class
	      // is applied.
	      var clone = el.cloneNode();
	      if (el._transitionClasses) {
	        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
	      }
	      addClass(clone, moveClass);
	      clone.style.display = 'none';
	      this.$el.appendChild(clone);
	      var info = getTransitionInfo(clone);
	      this.$el.removeChild(clone);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	}
	
	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}
	
	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}
	
	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}
	
	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	}
	
	/*  */
	
	// install platform specific utils
	Vue.config.mustUseProp = mustUseProp;
	Vue.config.isReservedTag = isReservedTag;
	Vue.config.isReservedAttr = isReservedAttr;
	Vue.config.getTagNamespace = getTagNamespace;
	Vue.config.isUnknownElement = isUnknownElement;
	
	// install platform runtime directives & components
	extend(Vue.options.directives, platformDirectives);
	extend(Vue.options.components, platformComponents);
	
	// install platform patch function
	Vue.prototype.__patch__ = inBrowser ? patch : noop;
	
	// public mount method
	Vue.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return mountComponent(this, el, hydrating)
	};
	
	// devtools global hook
	/* istanbul ignore next */
	if (inBrowser) {
	  setTimeout(function () {
	    if (config.devtools) {
	      if (devtools) {
	        devtools.emit('init', Vue);
	      } else if (
	        "development" !== 'production' &&
	        "development" !== 'test' &&
	        isChrome
	      ) {
	        console[console.info ? 'info' : 'log'](
	          'Download the Vue Devtools extension for a better development experience:\n' +
	          'https://github.com/vuejs/vue-devtools'
	        );
	      }
	    }
	    if ("development" !== 'production' &&
	      "development" !== 'test' &&
	      config.productionTip !== false &&
	      typeof console !== 'undefined'
	    ) {
	      console[console.info ? 'info' : 'log'](
	        "You are running Vue in development mode.\n" +
	        "Make sure to turn on production mode when deploying for production.\n" +
	        "See more tips at https://vuejs.org/guide/deployment.html"
	      );
	    }
	  }, 0);
	}
	
	/*  */
	
	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	
	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});
	
	
	
	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = [];
	  var rawTokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, tokenValue;
	  while ((match = tagRE.exec(text))) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      rawTokens.push(tokenValue = text.slice(lastIndex, index));
	      tokens.push(JSON.stringify(tokenValue));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push(("_s(" + exp + ")"));
	    rawTokens.push({ '@binding': exp });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    rawTokens.push(tokenValue = text.slice(lastIndex));
	    tokens.push(JSON.stringify(tokenValue));
	  }
	  return {
	    expression: tokens.join('+'),
	    tokens: rawTokens
	  }
	}
	
	/*  */
	
	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if ("development" !== 'production' && staticClass) {
	    var res = parseText(staticClass, options.delimiters);
	    if (res) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been removed. ' +
	        'Use v-bind or the colon shorthand instead. For example, ' +
	        'instead of <div class="{{ val }}">, use <div :class="val">.'
	      );
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}
	
	function genData (el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ",";
	  }
	  return data
	}
	
	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData
	}
	
	/*  */
	
	function transformNode$1 (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticStyle = getAndRemoveAttr(el, 'style');
	  if (staticStyle) {
	    /* istanbul ignore if */
	    {
	      var res = parseText(staticStyle, options.delimiters);
	      if (res) {
	        warn(
	          "style=\"" + staticStyle + "\": " +
	          'Interpolation inside attributes has been removed. ' +
	          'Use v-bind or the colon shorthand instead. For example, ' +
	          'instead of <div style="{{ val }}">, use <div :style="val">.'
	        );
	      }
	    }
	    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
	  }
	
	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}
	
	function genData$1 (el) {
	  var data = '';
	  if (el.staticStyle) {
	    data += "staticStyle:" + (el.staticStyle) + ",";
	  }
	  if (el.styleBinding) {
	    data += "style:(" + (el.styleBinding) + "),";
	  }
	  return data
	}
	
	var style$1 = {
	  staticKeys: ['staticStyle'],
	  transformNode: transformNode$1,
	  genData: genData$1
	}
	
	/*  */
	
	var decoder;
	
	var he = {
	  decode: function decode (html) {
	    decoder = decoder || document.createElement('div');
	    decoder.innerHTML = html;
	    return decoder.textContent
	  }
	}
	
	/*  */
	
	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr'
	);
	
	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
	);
	
	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track'
	);
	
	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */
	
	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */
	
	// Regular Expressions for parsing tags and attributes
	var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
	var startTagOpen = new RegExp(("^<" + qnameCapture));
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
	var doctype = /^<!DOCTYPE [^>]+>/i;
	// #7298: escape - to avoid being pased as HTML comment when inlined in page
	var comment = /^<!\--/;
	var conditionalComment = /^<!\[/;
	
	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});
	
	// Special Elements (can contain anything)
	var isPlainTextElement = makeMap('script,style,textarea', true);
	var reCache = {};
	
	var decodingMap = {
	  '&lt;': '<',
	  '&gt;': '>',
	  '&quot;': '"',
	  '&amp;': '&',
	  '&#10;': '\n',
	  '&#9;': '\t'
	};
	var encodedAttr = /&(?:lt|gt|quot|amp);/g;
	var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;
	
	// #5992
	var isIgnoreNewlineTag = makeMap('pre,textarea', true);
	var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };
	
	function decodeAttr (value, shouldDecodeNewlines) {
	  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
	  return value.replace(re, function (match) { return decodingMap[match]; })
	}
	
	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a plaintext content element like script/style
	    if (!lastTag || !isPlainTextElement(lastTag)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (comment.test(html)) {
	          var commentEnd = html.indexOf('-->');
	
	          if (commentEnd >= 0) {
	            if (options.shouldKeepComment) {
	              options.comment(html.substring(4, commentEnd));
	            }
	            advance(commentEnd + 3);
	            continue
	          }
	        }
	
	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (conditionalComment.test(html)) {
	          var conditionalEnd = html.indexOf(']>');
	
	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue
	          }
	        }
	
	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue
	        }
	
	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[1], curIndex, index);
	          continue
	        }
	
	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          if (shouldIgnoreFirstNewline(lastTag, html)) {
	            advance(1);
	          }
	          continue
	        }
	      }
	
	      var text = (void 0), rest = (void 0), next = (void 0);
	      if (textEnd >= 0) {
	        rest = html.slice(textEnd);
	        while (
	          !endTag.test(rest) &&
	          !startTagOpen.test(rest) &&
	          !comment.test(rest) &&
	          !conditionalComment.test(rest)
	        ) {
	          // < in plain text, be forgiving and treat it as text
	          next = rest.indexOf('<', 1);
	          if (next < 0) { break }
	          textEnd += next;
	          rest = html.slice(textEnd);
	        }
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      }
	
	      if (textEnd < 0) {
	        text = html;
	        html = '';
	      }
	
	      if (options.chars && text) {
	        options.chars(text);
	      }
	    } else {
	      var endTagLength = 0;
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
	            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	        }
	        if (shouldIgnoreFirstNewline(stackedTag, text)) {
	          text = text.slice(1);
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest$1.length;
	      html = rest$1;
	      parseEndTag(stackedTag, index - endTagLength, index);
	    }
	
	    if (html === last) {
	      options.chars && options.chars(html);
	      if ("development" !== 'production' && !stack.length && options.warn) {
	        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
	      }
	      break
	    }
	  }
	
	  // Clean up any remaining tags
	  parseEndTag();
	
	  function advance (n) {
	    index += n;
	    html = html.substring(n);
	  }
	
	  function parseStartTag () {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match
	      }
	    }
	  }
	
	  function handleStartTag (match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;
	
	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag(lastTag);
	      }
	      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
	        parseEndTag(tagName);
	      }
	    }
	
	    var unary = isUnaryTag$$1(tagName) || !!unarySlash;
	
	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3]; }
	        if (args[4] === '') { delete args[4]; }
	        if (args[5] === '') { delete args[5]; }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
	        ? options.shouldDecodeNewlinesForHref
	        : options.shouldDecodeNewlines;
	      attrs[i] = {
	        name: args[1],
	        value: decodeAttr(value, shouldDecodeNewlines)
	      };
	    }
	
	    if (!unary) {
	      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
	      lastTag = tagName;
	    }
	
	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }
	
	  function parseEndTag (tagName, start, end) {
	    var pos, lowerCasedTagName;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }
	
	    if (tagName) {
	      lowerCasedTagName = tagName.toLowerCase();
	    }
	
	    // Find the closest opened tag of the same type
	    if (tagName) {
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }
	
	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if ("development" !== 'production' &&
	          (i > pos || !tagName) &&
	          options.warn
	        ) {
	          options.warn(
	            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
	          );
	        }
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }
	
	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (lowerCasedTagName === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (lowerCasedTagName === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}
	
	/*  */
	
	var onRE = /^@|^v-on:/;
	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
	var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
	var stripParensRE = /^\(|\)$/g;
	
	var argRE = /:(.*)$/;
	var bindRE = /^:|^v-bind:/;
	var modifierRE = /\.[^.]+/g;
	
	var decodeHTMLCached = cached(he.decode);
	
	// configurable state
	var warn$2;
	var delimiters;
	var transforms;
	var preTransforms;
	var postTransforms;
	var platformIsPreTag;
	var platformMustUseProp;
	var platformGetTagNamespace;
	
	
	
	function createASTElement (
	  tag,
	  attrs,
	  parent
	) {
	  return {
	    type: 1,
	    tag: tag,
	    attrsList: attrs,
	    attrsMap: makeAttrsMap(attrs),
	    parent: parent,
	    children: []
	  }
	}
	
	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$2 = options.warn || baseWarn;
	
	  platformIsPreTag = options.isPreTag || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformGetTagNamespace = options.getTagNamespace || no;
	
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	
	  delimiters = options.delimiters;
	
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	
	  function warnOnce (msg) {
	    if (!warned) {
	      warned = true;
	      warn$2(msg);
	    }
	  }
	
	  function closeElement (element) {
	    // check pre state
	    if (element.pre) {
	      inVPre = false;
	    }
	    if (platformIsPreTag(element.tag)) {
	      inPre = false;
	    }
	    // apply post-transforms
	    for (var i = 0; i < postTransforms.length; i++) {
	      postTransforms[i](element, options);
	    }
	  }
	
	  parseHTML(template, {
	    warn: warn$2,
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    canBeLeftOpenTag: options.canBeLeftOpenTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
	    shouldKeepComment: options.comments,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
	
	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }
	
	      var element = createASTElement(tag, attrs, currentParent);
	      if (ns) {
	        element.ns = ns;
	      }
	
	      if (isForbiddenTag(element) && !isServerRendering()) {
	        element.forbidden = true;
	        "development" !== 'production' && warn$2(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">" + ', as they will not be parsed.'
	        );
	      }
	
	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        element = preTransforms[i](element, options) || element;
	      }
	
	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else if (!element.processed) {
	        // structural directives
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        // element-scope stuff
	        processElement(element, options);
	      }
	
	      function checkRootConstraints (el) {
	        {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warnOnce(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes.'
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warnOnce(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements.'
	            );
	          }
	        }
	      }
	
	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if (!stack.length) {
	        // allow root elements with v-if, v-else-if and v-else
	        if (root.if && (element.elseif || element.else)) {
	          checkRootConstraints(element);
	          addIfCondition(root, {
	            exp: element.elseif,
	            block: element
	          });
	        } else {
	          warnOnce(
	            "Component template should contain exactly one root element. " +
	            "If you are using v-if on multiple elements, " +
	            "use v-else-if to chain them instead."
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.elseif || element.else) {
	          processIfConditions(element, currentParent);
	        } else if (element.slotScope) { // scoped slot
	          currentParent.plain = false;
	          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      } else {
	        closeElement(element);
	      }
	    },
	
	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      closeElement(element);
	    },
	
	    chars: function chars (text) {
	      if (!currentParent) {
	        {
	          if (text === template) {
	            warnOnce(
	              'Component template requires a root element, rather than just text.'
	            );
	          } else if ((text = text.trim())) {
	            warnOnce(
	              ("text \"" + text + "\" outside root element will be ignored.")
	            );
	          }
	        }
	        return
	      }
	      // IE textarea placeholder bug
	      /* istanbul ignore if */
	      if (isIE &&
	        currentParent.tag === 'textarea' &&
	        currentParent.attrsMap.placeholder === text
	      ) {
	        return
	      }
	      var children = currentParent.children;
	      text = inPre || text.trim()
	        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && children.length ? ' ' : '';
	      if (text) {
	        var res;
	        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
	          children.push({
	            type: 2,
	            expression: res.expression,
	            tokens: res.tokens,
	            text: text
	          });
	        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
	          children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    },
	    comment: function comment (text) {
	      currentParent.children.push({
	        type: 3,
	        text: text,
	        isComment: true
	      });
	    }
	  });
	  return root
	}
	
	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}
	
	function processRawAttrs (el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}
	
	function processElement (element, options) {
	  processKey(element);
	
	  // determine whether this is a plain element after
	  // removing structural attributes
	  element.plain = !element.key && !element.attrsList.length;
	
	  processRef(element);
	  processSlot(element);
	  processComponent(element);
	  for (var i = 0; i < transforms.length; i++) {
	    element = transforms[i](element, options) || element;
	  }
	  processAttrs(element);
	}
	
	function processKey (el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if ("development" !== 'production' && el.tag === 'template') {
	      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}
	
	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}
	
	function processFor (el) {
	  var exp;
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var res = parseFor(exp);
	    if (res) {
	      extend(el, res);
	    } else {
	      warn$2(
	        ("Invalid v-for expression: " + exp)
	      );
	    }
	  }
	}
	
	
	
	function parseFor (exp) {
	  var inMatch = exp.match(forAliasRE);
	  if (!inMatch) { return }
	  var res = {};
	  res.for = inMatch[2].trim();
	  var alias = inMatch[1].trim().replace(stripParensRE, '');
	  var iteratorMatch = alias.match(forIteratorRE);
	  if (iteratorMatch) {
	    res.alias = alias.replace(forIteratorRE, '');
	    res.iterator1 = iteratorMatch[1].trim();
	    if (iteratorMatch[2]) {
	      res.iterator2 = iteratorMatch[2].trim();
	    }
	  } else {
	    res.alias = alias;
	  }
	  return res
	}
	
	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	    addIfCondition(el, {
	      exp: exp,
	      block: el
	    });
	  } else {
	    if (getAndRemoveAttr(el, 'v-else') != null) {
	      el.else = true;
	    }
	    var elseif = getAndRemoveAttr(el, 'v-else-if');
	    if (elseif) {
	      el.elseif = elseif;
	    }
	  }
	}
	
	function processIfConditions (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    addIfCondition(prev, {
	      exp: el.elseif,
	      block: el
	    });
	  } else {
	    warn$2(
	      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
	      "used on element <" + (el.tag) + "> without corresponding v-if."
	    );
	  }
	}
	
	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].type === 1) {
	      return children[i]
	    } else {
	      if ("development" !== 'production' && children[i].text !== ' ') {
	        warn$2(
	          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
	          "will be ignored."
	        );
	      }
	      children.pop();
	    }
	  }
	}
	
	function addIfCondition (el, condition) {
	  if (!el.ifConditions) {
	    el.ifConditions = [];
	  }
	  el.ifConditions.push(condition);
	}
	
	function processOnce (el) {
	  var once$$1 = getAndRemoveAttr(el, 'v-once');
	  if (once$$1 != null) {
	    el.once = true;
	  }
	}
	
	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	    if ("development" !== 'production' && el.key) {
	      warn$2(
	        "`key` does not work on <slot> because slots are abstract outlets " +
	        "and can possibly expand into multiple elements. " +
	        "Use the key on a wrapping element instead."
	      );
	    }
	  } else {
	    var slotScope;
	    if (el.tag === 'template') {
	      slotScope = getAndRemoveAttr(el, 'scope');
	      /* istanbul ignore if */
	      if ("development" !== 'production' && slotScope) {
	        warn$2(
	          "the \"scope\" attribute for scoped slots have been deprecated and " +
	          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
	          "can also be used on plain elements in addition to <template> to " +
	          "denote scoped slots.",
	          true
	        );
	      }
	      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
	    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
	      /* istanbul ignore if */
	      if ("development" !== 'production' && el.attrsMap['v-for']) {
	        warn$2(
	          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
	          "(v-for takes higher priority). Use a wrapper <template> for the " +
	          "scoped slot to make it clearer.",
	          true
	        );
	      }
	      el.slotScope = slotScope;
	    }
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
	      // preserve slot as an attribute for native shadow DOM compat
	      // only for non-scoped slots.
	      if (el.tag !== 'template' && !el.slotScope) {
	        addAttr(el, 'slot', slotTarget);
	      }
	    }
	  }
	}
	
	function processComponent (el) {
	  var binding;
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}
	
	function processAttrs (el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '');
	        value = parseFilters(value);
	        isProp = false;
	        if (modifiers) {
	          if (modifiers.prop) {
	            isProp = true;
	            name = camelize(name);
	            if (name === 'innerHtml') { name = 'innerHTML'; }
	          }
	          if (modifiers.camel) {
	            name = camelize(name);
	          }
	          if (modifiers.sync) {
	            addHandler(
	              el,
	              ("update:" + (camelize(name))),
	              genAssignmentCode(value, "$event")
	            );
	          }
	        }
	        if (isProp || (
	          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
	        )) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers, false, warn$2);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        var arg = argMatch && argMatch[1];
	        if (arg) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if ("development" !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      {
	        var res = parseText(value, delimiters);
	        if (res) {
	          warn$2(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been removed. ' +
	            'Use v-bind or the colon shorthand instead. For example, ' +
	            'instead of <div id="{{ val }}">, use <div :id="val">.'
	          );
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	      // #6887 firefox doesn't update muted state if set via attribute
	      // even immediately after element creation
	      if (!el.component &&
	          name === 'muted' &&
	          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
	        addProp(el, name, 'true');
	      }
	    }
	  }
	}
	
	function checkInFor (el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent;
	  }
	  return false
	}
	
	function parseModifiers (name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) { ret[m.slice(1)] = true; });
	    return ret
	  }
	}
	
	function makeAttrsMap (attrs) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if (
	      "development" !== 'production' &&
	      map[attrs[i].name] && !isIE && !isEdge
	    ) {
	      warn$2('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}
	
	// for script (e.g. type="x/template") or style, do not decode content
	function isTextTag (el) {
	  return el.tag === 'script' || el.tag === 'style'
	}
	
	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}
	
	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;
	
	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res
	}
	
	function checkForAliasModel (el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$2(
	        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	        "You are binding v-model directly to a v-for iteration alias. " +
	        "This will not be able to modify the v-for source array because " +
	        "writing to the alias is like modifying a function local variable. " +
	        "Consider using an array of objects and use v-model on an object property instead."
	      );
	    }
	    _el = _el.parent;
	  }
	}
	
	/*  */
	
	/**
	 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
	 * Turn this:
	 *   <input v-model="data[type]" :type="type">
	 * into this:
	 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
	 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
	 *   <input v-else :type="type" v-model="data[type]">
	 */
	
	function preTransformNode (el, options) {
	  if (el.tag === 'input') {
	    var map = el.attrsMap;
	    if (!map['v-model']) {
	      return
	    }
	
	    var typeBinding;
	    if (map[':type'] || map['v-bind:type']) {
	      typeBinding = getBindingAttr(el, 'type');
	    }
	    if (!map.type && !typeBinding && map['v-bind']) {
	      typeBinding = "(" + (map['v-bind']) + ").type";
	    }
	
	    if (typeBinding) {
	      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
	      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
	      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
	      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
	      // 1. checkbox
	      var branch0 = cloneASTElement(el);
	      // process for on the main node
	      processFor(branch0);
	      addRawAttr(branch0, 'type', 'checkbox');
	      processElement(branch0, options);
	      branch0.processed = true; // prevent it from double-processed
	      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
	      addIfCondition(branch0, {
	        exp: branch0.if,
	        block: branch0
	      });
	      // 2. add radio else-if condition
	      var branch1 = cloneASTElement(el);
	      getAndRemoveAttr(branch1, 'v-for', true);
	      addRawAttr(branch1, 'type', 'radio');
	      processElement(branch1, options);
	      addIfCondition(branch0, {
	        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
	        block: branch1
	      });
	      // 3. other
	      var branch2 = cloneASTElement(el);
	      getAndRemoveAttr(branch2, 'v-for', true);
	      addRawAttr(branch2, ':type', typeBinding);
	      processElement(branch2, options);
	      addIfCondition(branch0, {
	        exp: ifCondition,
	        block: branch2
	      });
	
	      if (hasElse) {
	        branch0.else = true;
	      } else if (elseIfCondition) {
	        branch0.elseif = elseIfCondition;
	      }
	
	      return branch0
	    }
	  }
	}
	
	function cloneASTElement (el) {
	  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
	}
	
	var model$2 = {
	  preTransformNode: preTransformNode
	}
	
	var modules$1 = [
	  klass$1,
	  style$1,
	  model$2
	]
	
	/*  */
	
	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	/*  */
	
	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	var directives$1 = {
	  model: model,
	  text: text,
	  html: html
	}
	
	/*  */
	
	var baseOptions = {
	  expectHTML: true,
	  modules: modules$1,
	  directives: directives$1,
	  isPreTag: isPreTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  canBeLeftOpenTag: canBeLeftOpenTag,
	  isReservedTag: isReservedTag,
	  getTagNamespace: getTagNamespace,
	  staticKeys: genStaticKeys(modules$1)
	};
	
	/*  */
	
	var isStaticKey;
	var isPlatformReservedTag;
	
	var genStaticKeysCached = cached(genStaticKeys$1);
	
	/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || no;
	  // first pass: mark all non-static nodes.
	  markStatic$1(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}
	
	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}
	
	function markStatic$1 (node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    // do not make component slot content static. this avoids
	    // 1. components not able to mutate slot nodes
	    // 2. static slot content fails for hot-reloading
	    if (
	      !isPlatformReservedTag(node.tag) &&
	      node.tag !== 'slot' &&
	      node.attrsMap['inline-template'] == null
	    ) {
	      return
	    }
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic$1(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	    if (node.ifConditions) {
	      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
	        var block = node.ifConditions[i$1].block;
	        markStatic$1(block);
	        if (!block.static) {
	          node.static = false;
	        }
	      }
	    }
	  }
	}
	
	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.static || node.once) {
	      node.staticInFor = isInFor;
	    }
	    // For a node to qualify as a static root, it should have children that
	    // are not just static text. Otherwise the cost of hoisting out will
	    // outweigh the benefits and it's better off to just always render it fresh.
	    if (node.static && node.children.length && !(
	      node.children.length === 1 &&
	      node.children[0].type === 3
	    )) {
	      node.staticRoot = true;
	      return
	    } else {
	      node.staticRoot = false;
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
	    if (node.ifConditions) {
	      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
	        markStaticRoots(node.ifConditions[i$1].block, isInFor);
	      }
	    }
	  }
	}
	
	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    !isDirectChildOfTemplateFor(node) &&
	    Object.keys(node).every(isStaticKey)
	  ))
	}
	
	function isDirectChildOfTemplateFor (node) {
	  while (node.parent) {
	    node = node.parent;
	    if (node.tag !== 'template') {
	      return false
	    }
	    if (node.for) {
	      return true
	    }
	  }
	  return false
	}
	
	/*  */
	
	var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
	var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
	
	// KeyboardEvent.keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};
	
	// KeyboardEvent.key aliases
	var keyNames = {
	  esc: 'Escape',
	  tab: 'Tab',
	  enter: 'Enter',
	  space: ' ',
	  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
	  up: ['Up', 'ArrowUp'],
	  left: ['Left', 'ArrowLeft'],
	  right: ['Right', 'ArrowRight'],
	  down: ['Down', 'ArrowDown'],
	  'delete': ['Backspace', 'Delete']
	};
	
	// #4868: modifiers that prevent the execution of the listener
	// need to explicitly return null so that we can determine whether to remove
	// the listener for .once
	var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };
	
	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: genGuard("$event.target !== $event.currentTarget"),
	  ctrl: genGuard("!$event.ctrlKey"),
	  shift: genGuard("!$event.shiftKey"),
	  alt: genGuard("!$event.altKey"),
	  meta: genGuard("!$event.metaKey"),
	  left: genGuard("'button' in $event && $event.button !== 0"),
	  middle: genGuard("'button' in $event && $event.button !== 1"),
	  right: genGuard("'button' in $event && $event.button !== 2")
	};
	
	function genHandlers (
	  events,
	  isNative,
	  warn
	) {
	  var res = isNative ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}
	
	function genHandler (
	  name,
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  }
	
	  if (Array.isArray(handler)) {
	    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
	  }
	
	  var isMethodPath = simplePathRE.test(handler.value);
	  var isFunctionExpression = fnExpRE.test(handler.value);
	
	  if (!handler.modifiers) {
	    if (isMethodPath || isFunctionExpression) {
	      return handler.value
	    }
	    /* istanbul ignore if */
	    return ("function($event){" + (handler.value) + "}") // inline statement
	  } else {
	    var code = '';
	    var genModifierCode = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        genModifierCode += modifierCode[key];
	        // left/right
	        if (keyCodes[key]) {
	          keys.push(key);
	        }
	      } else if (key === 'exact') {
	        var modifiers = (handler.modifiers);
	        genModifierCode += genGuard(
	          ['ctrl', 'shift', 'alt', 'meta']
	            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
	            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
	            .join('||')
	        );
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code += genKeyFilter(keys);
	    }
	    // Make sure modifiers like prevent and stop get executed after key filtering
	    if (genModifierCode) {
	      code += genModifierCode;
	    }
	    var handlerCode = isMethodPath
	      ? ("return " + (handler.value) + "($event)")
	      : isFunctionExpression
	        ? ("return (" + (handler.value) + ")($event)")
	        : handler.value;
	    /* istanbul ignore if */
	    return ("function($event){" + code + handlerCode + "}")
	  }
	}
	
	function genKeyFilter (keys) {
	  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
	}
	
	function genFilterCode (key) {
	  var keyVal = parseInt(key, 10);
	  if (keyVal) {
	    return ("$event.keyCode!==" + keyVal)
	  }
	  var keyCode = keyCodes[key];
	  var keyName = keyNames[key];
	  return (
	    "_k($event.keyCode," +
	    (JSON.stringify(key)) + "," +
	    (JSON.stringify(keyCode)) + "," +
	    "$event.key," +
	    "" + (JSON.stringify(keyName)) +
	    ")"
	  )
	}
	
	/*  */
	
	function on (el, dir) {
	  if ("development" !== 'production' && dir.modifiers) {
	    warn("v-on without argument does not support modifiers.");
	  }
	  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
	}
	
	/*  */
	
	function bind$1 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
	  };
	}
	
	/*  */
	
	var baseDirectives = {
	  on: on,
	  bind: bind$1,
	  cloak: noop
	}
	
	/*  */
	
	var CodegenState = function CodegenState (options) {
	  this.options = options;
	  this.warn = options.warn || baseWarn;
	  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
	  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  this.directives = extend(extend({}, baseDirectives), options.directives);
	  var isReservedTag = options.isReservedTag || no;
	  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
	  this.onceId = 0;
	  this.staticRenderFns = [];
	};
	
	
	
	function generate (
	  ast,
	  options
	) {
	  var state = new CodegenState(options);
	  var code = ast ? genElement(ast, state) : '_c("div")';
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: state.staticRenderFns
	  }
	}
	
	function genElement (el, state) {
	  if (el.staticRoot && !el.staticProcessed) {
	    return genStatic(el, state)
	  } else if (el.once && !el.onceProcessed) {
	    return genOnce(el, state)
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el, state)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el, state)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el, state) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el, state)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el.component, el, state);
	    } else {
	      var data = el.plain ? undefined : genData$2(el, state);
	
	      var children = el.inlineTemplate ? null : genChildren(el, state, true);
	      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < state.transforms.length; i++) {
	      code = state.transforms[i](el, code);
	    }
	    return code
	  }
	}
	
	// hoist static sub-trees out
	function genStatic (el, state) {
	  el.staticProcessed = true;
	  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
	  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	}
	
	// v-once
	function genOnce (el, state) {
	  el.onceProcessed = true;
	  if (el.if && !el.ifProcessed) {
	    return genIf(el, state)
	  } else if (el.staticInFor) {
	    var key = '';
	    var parent = el.parent;
	    while (parent) {
	      if (parent.for) {
	        key = parent.key;
	        break
	      }
	      parent = parent.parent;
	    }
	    if (!key) {
	      "development" !== 'production' && state.warn(
	        "v-once can only be used inside v-for that is keyed. "
	      );
	      return genElement(el, state)
	    }
	    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
	  } else {
	    return genStatic(el, state)
	  }
	}
	
	function genIf (
	  el,
	  state,
	  altGen,
	  altEmpty
	) {
	  el.ifProcessed = true; // avoid recursion
	  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
	}
	
	function genIfConditions (
	  conditions,
	  state,
	  altGen,
	  altEmpty
	) {
	  if (!conditions.length) {
	    return altEmpty || '_e()'
	  }
	
	  var condition = conditions.shift();
	  if (condition.exp) {
	    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
	  } else {
	    return ("" + (genTernaryExp(condition.block)))
	  }
	
	  // v-if with v-once should generate code like (a)?_m(0):_m(1)
	  function genTernaryExp (el) {
	    return altGen
	      ? altGen(el, state)
	      : el.once
	        ? genOnce(el, state)
	        : genElement(el, state)
	  }
	}
	
	function genFor (
	  el,
	  state,
	  altGen,
	  altHelper
	) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	
	  if ("development" !== 'production' &&
	    state.maybeComponent(el) &&
	    el.tag !== 'slot' &&
	    el.tag !== 'template' &&
	    !el.key
	  ) {
	    state.warn(
	      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
	      "v-for should have explicit keys. " +
	      "See https://vuejs.org/guide/list.html#key for more info.",
	      true /* tip */
	    );
	  }
	
	  el.forProcessed = true; // avoid recursion
	  return (altHelper || '_l') + "((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + ((altGen || genElement)(el, state)) +
	    '})'
	}
	
	function genData$2 (el, state) {
	  var data = '{';
	
	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el, state);
	  if (dirs) { data += dirs + ','; }
	
	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // pre
	  if (el.pre) {
	    data += "pre:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // module data generation functions
	  for (var i = 0; i < state.dataGenFns.length; i++) {
	    data += state.dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events, false, state.warn)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
	  }
	  // slot target
	  // only for non-scoped slots
	  if (el.slotTarget && !el.slotScope) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // scoped slots
	  if (el.scopedSlots) {
	    data += (genScopedSlots(el.scopedSlots, state)) + ",";
	  }
	  // component v-model
	  if (el.model) {
	    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var inlineTemplate = genInlineTemplate(el, state);
	    if (inlineTemplate) {
	      data += inlineTemplate + ",";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  // v-on data wrap
	  if (el.wrapListeners) {
	    data = el.wrapListeners(data);
	  }
	  return data
	}
	
	function genDirectives (el, state) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = state.directives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, state.warn);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}
	
	function genInlineTemplate (el, state) {
	  var ast = el.children[0];
	  if ("development" !== 'production' && (
	    el.children.length !== 1 || ast.type !== 1
	  )) {
	    state.warn('Inline-template components must have exactly one child element.');
	  }
	  if (ast.type === 1) {
	    var inlineRenderFns = generate(ast, state.options);
	    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
	  }
	}
	
	function genScopedSlots (
	  slots,
	  state
	) {
	  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
	      return genScopedSlot(key, slots[key], state)
	    }).join(',')) + "])")
	}
	
	function genScopedSlot (
	  key,
	  el,
	  state
	) {
	  if (el.for && !el.forProcessed) {
	    return genForScopedSlot(key, el, state)
	  }
	  var fn = "function(" + (String(el.slotScope)) + "){" +
	    "return " + (el.tag === 'template'
	      ? el.if
	        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
	        : genChildren(el, state) || 'undefined'
	      : genElement(el, state)) + "}";
	  return ("{key:" + key + ",fn:" + fn + "}")
	}
	
	function genForScopedSlot (
	  key,
	  el,
	  state
	) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genScopedSlot(key, el, state)) +
	    '})'
	}
	
	function genChildren (
	  el,
	  state,
	  checkSkip,
	  altGenElement,
	  altGenNode
	) {
	  var children = el.children;
	  if (children.length) {
	    var el$1 = children[0];
	    // optimize single v-for
	    if (children.length === 1 &&
	      el$1.for &&
	      el$1.tag !== 'template' &&
	      el$1.tag !== 'slot'
	    ) {
	      return (altGenElement || genElement)(el$1, state)
	    }
	    var normalizationType = checkSkip
	      ? getNormalizationType(children, state.maybeComponent)
	      : 0;
	    var gen = altGenNode || genNode;
	    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
	  }
	}
	
	// determine the normalization needed for the children array.
	// 0: no normalization needed
	// 1: simple normalization needed (possible 1-level deep nested array)
	// 2: full normalization needed
	function getNormalizationType (
	  children,
	  maybeComponent
	) {
	  var res = 0;
	  for (var i = 0; i < children.length; i++) {
	    var el = children[i];
	    if (el.type !== 1) {
	      continue
	    }
	    if (needsNormalization(el) ||
	        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
	      res = 2;
	      break
	    }
	    if (maybeComponent(el) ||
	        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
	      res = 1;
	    }
	  }
	  return res
	}
	
	function needsNormalization (el) {
	  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
	}
	
	function genNode (node, state) {
	  if (node.type === 1) {
	    return genElement(node, state)
	  } if (node.type === 3 && node.isComment) {
	    return genComment(node)
	  } else {
	    return genText(node)
	  }
	}
	
	function genText (text) {
	  return ("_v(" + (text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
	}
	
	function genComment (comment) {
	  return ("_e(" + (JSON.stringify(comment.text)) + ")")
	}
	
	function genSlot (el, state) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el, state);
	  var res = "_t(" + slotName + (children ? ("," + children) : '');
	  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
	  var bind$$1 = el.attrsMap['v-bind'];
	  if ((attrs || bind$$1) && !children) {
	    res += ",null";
	  }
	  if (attrs) {
	    res += "," + attrs;
	  }
	  if (bind$$1) {
	    res += (attrs ? '' : ',null') + "," + bind$$1;
	  }
	  return res + ')'
	}
	
	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent (
	  componentName,
	  el,
	  state
	) {
	  var children = el.inlineTemplate ? null : genChildren(el, state, true);
	  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
	}
	
	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    /* istanbul ignore if */
	    {
	      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
	    }
	  }
	  return res.slice(0, -1)
	}
	
	// #3895, #4268
	function transformSpecialNewlines (text) {
	  return text
	    .replace(/\u2028/g, '\\u2028')
	    .replace(/\u2029/g, '\\u2029')
	}
	
	/*  */
	
	// these keywords should not appear inside expressions, but operators like
	// typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
	
	// these unary operators should not be used as property/method names
	var unaryOperatorsRE = new RegExp('\\b' + (
	  'delete,typeof,void'
	).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');
	
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
	
	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors
	}
	
	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors);
	          } else if (onRE.test(name)) {
	            checkEvent(value, (name + "=\"" + value + "\""), errors);
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}
	
	function checkEvent (exp, text, errors) {
	  var stipped = exp.replace(stripStringRE, '');
	  var keywordMatch = stipped.match(unaryOperatorsRE);
	  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
	    errors.push(
	      "avoid using JavaScript unary operator as property name: " +
	      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
	    );
	  }
	  checkExpression(exp, text, errors);
	}
	
	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}
	
	function checkIdentifier (
	  ident,
	  type,
	  text,
	  errors
	) {
	  if (typeof ident === 'string') {
	    try {
	      new Function(("var " + ident + "=_"));
	    } catch (e) {
	      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
	    }
	  }
	}
	
	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
	      );
	    } else {
	      errors.push(
	        "invalid expression: " + (e.message) + " in\n\n" +
	        "    " + exp + "\n\n" +
	        "  Raw expression: " + (text.trim()) + "\n"
	      );
	    }
	  }
	}
	
	/*  */
	
	function createFunction (code, errors) {
	  try {
	    return new Function(code)
	  } catch (err) {
	    errors.push({ err: err, code: code });
	    return noop
	  }
	}
	
	function createCompileToFunctionFn (compile) {
	  var cache = Object.create(null);
	
	  return function compileToFunctions (
	    template,
	    options,
	    vm
	  ) {
	    options = extend({}, options);
	    var warn$$1 = options.warn || warn;
	    delete options.warn;
	
	    /* istanbul ignore if */
	    {
	      // detect possible CSP restriction
	      try {
	        new Function('return 1');
	      } catch (e) {
	        if (e.toString().match(/unsafe-eval|CSP/)) {
	          warn$$1(
	            'It seems you are using the standalone build of Vue.js in an ' +
	            'environment with Content Security Policy that prohibits unsafe-eval. ' +
	            'The template compiler cannot work in this environment. Consider ' +
	            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	            'templates into render functions.'
	          );
	        }
	      }
	    }
	
	    // check cache
	    var key = options.delimiters
	      ? String(options.delimiters) + template
	      : template;
	    if (cache[key]) {
	      return cache[key]
	    }
	
	    // compile
	    var compiled = compile(template, options);
	
	    // check compilation errors/tips
	    {
	      if (compiled.errors && compiled.errors.length) {
	        warn$$1(
	          "Error compiling template:\n\n" + template + "\n\n" +
	          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
	          vm
	        );
	      }
	      if (compiled.tips && compiled.tips.length) {
	        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
	      }
	    }
	
	    // turn code into functions
	    var res = {};
	    var fnGenErrors = [];
	    res.render = createFunction(compiled.render, fnGenErrors);
	    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
	      return createFunction(code, fnGenErrors)
	    });
	
	    // check function generation errors.
	    // this should only happen if there is a bug in the compiler itself.
	    // mostly for codegen development use
	    /* istanbul ignore if */
	    {
	      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
	        warn$$1(
	          "Failed to generate render function:\n\n" +
	          fnGenErrors.map(function (ref) {
	            var err = ref.err;
	            var code = ref.code;
	
	            return ((err.toString()) + " in\n\n" + code + "\n");
	        }).join('\n'),
	          vm
	        );
	      }
	    }
	
	    return (cache[key] = res)
	  }
	}
	
	/*  */
	
	function createCompilerCreator (baseCompile) {
	  return function createCompiler (baseOptions) {
	    function compile (
	      template,
	      options
	    ) {
	      var finalOptions = Object.create(baseOptions);
	      var errors = [];
	      var tips = [];
	      finalOptions.warn = function (msg, tip) {
	        (tip ? tips : errors).push(msg);
	      };
	
	      if (options) {
	        // merge custom modules
	        if (options.modules) {
	          finalOptions.modules =
	            (baseOptions.modules || []).concat(options.modules);
	        }
	        // merge custom directives
	        if (options.directives) {
	          finalOptions.directives = extend(
	            Object.create(baseOptions.directives || null),
	            options.directives
	          );
	        }
	        // copy other options
	        for (var key in options) {
	          if (key !== 'modules' && key !== 'directives') {
	            finalOptions[key] = options[key];
	          }
	        }
	      }
	
	      var compiled = baseCompile(template, finalOptions);
	      {
	        errors.push.apply(errors, detectErrors(compiled.ast));
	      }
	      compiled.errors = errors;
	      compiled.tips = tips;
	      return compiled
	    }
	
	    return {
	      compile: compile,
	      compileToFunctions: createCompileToFunctionFn(compile)
	    }
	  }
	}
	
	/*  */
	
	// `createCompilerCreator` allows creating compilers that use alternative
	// parser/optimizer/codegen, e.g the SSR optimizing compiler.
	// Here we just export a default compiler using the default parts.
	var createCompiler = createCompilerCreator(function baseCompile (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options);
	  if (options.optimize !== false) {
	    optimize(ast, options);
	  }
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	});
	
	/*  */
	
	var ref$1 = createCompiler(baseOptions);
	var compileToFunctions = ref$1.compileToFunctions;
	
	/*  */
	
	// check whether current browser encodes a char inside attribute values
	var div;
	function getShouldDecode (href) {
	  div = div || document.createElement('div');
	  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
	  return div.innerHTML.indexOf('&#10;') > 0
	}
	
	// #3663: IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
	// #6828: chrome encodes content in a[href]
	var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
	
	/*  */
	
	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML
	});
	
	var mount = Vue.prototype.$mount;
	Vue.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el);
	
	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    "development" !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    );
	    return this
	  }
	
	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          template = idToTemplate(template);
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !template) {
	            warn(
	              ("Template element not found or is empty: " + (options.template)),
	              this
	            );
	          }
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      /* istanbul ignore if */
	      if ("development" !== 'production' && config.performance && mark) {
	        mark('compile');
	      }
	
	      var ref = compileToFunctions(template, {
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
	        delimiters: options.delimiters,
	        comments: options.comments
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
	
	      /* istanbul ignore if */
	      if ("development" !== 'production' && config.performance && mark) {
	        mark('compile end');
	        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
	      }
	    }
	  }
	  return mount.call(this, el, hydrating)
	};
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}
	
	Vue.compile = compileToFunctions;
	
	return Vue;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(81).setImmediate))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(82);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(83)))

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(__webpack_require__(85)) :
	  typeof define === 'function' && define.amd ? define(['hammerjs'], factory) :
	  (factory(global.Hammer));
	}(this, (function (Hammer) { 'use strict';
	
	Hammer = 'default' in Hammer ? Hammer['default'] : Hammer;
	
	function assign(target) {
	  var sources = [], len = arguments.length - 1;
	  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];
	  for (var i = 0; i < sources.length; i++) {
	    var source = sources[i];
	    var keys = Object.keys(source);
	    for (var i$1 = 0; i$1 < keys.length; i$1++) {
	      var key = keys[i$1];
	      target[key] = source[key];
	    }
	  }
	  return target
	}
	function createProp() {
	  return {
	    type: Object,
	    default: function() { return {} }
	  }
	}
	function capitalize (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	}
	var directions = ['up', 'down', 'left', 'right', 'horizontal', 'vertical', 'all'];
	function guardDirections (options) {
	  var dir = options.direction;
	  if (typeof dir === 'string') {
	    var hammerDirection = 'DIRECTION_' + dir.toUpperCase();
	    if (directions.indexOf(dir) > -1 && Hammer.hasOwnProperty(hammerDirection)) {
	      options.direction = Hammer[hammerDirection];
	    } else {
	      console.warn('[vue-touch] invalid direction: ' + dir);
	    }
	  }
	  return options
	}
	var config = {
	};
	var customEvents = {
	};
	var gestures = [
	  'pan','panstart','panmove','panend','pancancel','panleft','panright','panup','pandown',
	  'pinch','pinchstart','pinchmove','pinchend','pinchcancel','pinchin','pinchout',
	  'press','pressup',
	  'rotate','rotatestart','rotatemove','rotateend','rotatecancel',
	  'swipe','swipeleft','swiperight','swipeup','swipedown',
	  'tap'
	];
	var gestureMap = {
	  pan: 'pan',
	  panstart: 'pan',
	  panmove: 'pan',
	  panend: 'pan',
	  pancancel: 'pan',
	  panleft: 'pan',
	  panright: 'pan',
	  panup: 'pan',
	  pandown: 'pan',
	  pinch: 'pinch',
	  pinchstart: 'pinch',
	  pinchmove: 'pinch',
	  pinchend: 'pinch',
	  pinchcancel: 'pinch',
	  pinchin: 'pinch',
	  pinchout: 'pinch',
	  press: 'press',
	  pressup: 'press',
	  rotate: 'rotate',
	  rotatestart: 'rotate',
	  rotatemove: 'rotate',
	  rotateend: 'rotate',
	  rotatecancel: 'rotate',
	  swipe: 'swipe',
	  swipeleft: 'swipe',
	  swiperight: 'swipe',
	  swipeup: 'swipe',
	  swipedown: 'swipe',
	  tap: 'tap'
	};
	
	var Component = {
	  props: {
	    options: createProp(),
	    tapOptions: createProp(),
	    panOptions: createProp(),
	    pinchOptions: createProp(),
	    pressOptions: createProp(),
	    rotateOptions: createProp(),
	    swipeOptions: createProp(),
	    tag: { type: String, default: 'div' },
	    enabled: {
	      default: true,
	      type: [Boolean, Object],
	    }
	  },
	  mounted: function mounted() {
	    if (!this.$isServer) {
	      this.hammer = new Hammer.Manager(this.$el, this.options);
	      this.recognizers = {};
	      this.setupBuiltinRecognizers();
	      this.setupCustomRecognizers();
	      this.updateEnabled(this.enabled);
	    }
	  },
	  destroyed: function destroyed() {
	    if (!this.$isServer) {
	      this.hammer.destroy();
	    }
	  },
	  watch: {
	    enabled: {
	      deep: true,
	      handler: function handler() {
	        var args = [], len = arguments.length;
	        while ( len-- ) args[ len ] = arguments[ len ];
	        (ref = this).updateEnabled.apply(ref, args);
	        var ref;
	      }
	    }
	  },
	  methods: {
	    setupBuiltinRecognizers: function setupBuiltinRecognizers()  {
	      var this$1 = this;
	      for (var i = 0; i < gestures.length; i++) {
	        var gesture = gestures[i];
	        if (this$1._events[gesture]) {
	          var mainGesture = gestureMap[gesture];
	          var options = assign({}, (config[mainGesture] || {}), this$1[(mainGesture + "Options")]);
	          this$1.addRecognizer(mainGesture, options);
	          this$1.addEvent(gesture);
	        }
	      }
	    },
	    setupCustomRecognizers: function setupCustomRecognizers() {
	      var this$1 = this;
	      var gestures$$1 = Object.keys(customEvents);
	      for (var i = 0; i < gestures$$1.length; i++) {
	        var gesture = gestures$$1[i];
	        if (this$1._events[gesture]) {
	          var opts = customEvents[gesture];
	          var localCustomOpts = this$1[(gesture + "Options")] || {};
	          var options = assign({}, opts, localCustomOpts);
	          this$1.addRecognizer(gesture, options, {mainGesture: options.type});
	          this$1.addEvent(gesture);
	        }
	      }
	    },
	    addRecognizer: function addRecognizer(gesture, options, ref) {
	      if ( ref === void 0 ) ref = {};
	      var mainGesture = ref.mainGesture;
	      if (!this.recognizers[gesture]) {
	        var recognizer = new Hammer[capitalize(mainGesture || gesture)](guardDirections(options));
	        this.recognizers[gesture] = recognizer;
	        this.hammer.add(recognizer);
	        recognizer.recognizeWith(this.hammer.recognizers);
	      }
	    },
	    addEvent: function addEvent(gesture) {
	      var this$1 = this;
	      this.hammer.on(gesture, function (e) { return this$1.$emit(gesture, e); });
	    },
	    updateEnabled: function updateEnabled(newVal, oldVal) {
	      var this$1 = this;
	      if (newVal === true) {
	        this.enableAll();
	      } else if (newVal === false) {
	        this.disableAll();
	      } else if (typeof newVal === 'object') {
	        var keys = Object.keys(newVal);
	        for (var i = 0; i < keys.length; i++) {
	          var event = keys[i];
	          if (this$1.recognizers[event]) {
	            newVal[event]
	              ? this$1.enable(event)
	              : this$1.disable(event);
	          }
	        }
	      }
	    },
	    enable: function enable(r) {
	      var recognizer = this.recognizers[r];
	      if (!recognizer.options.enable) {
	        recognizer.set({ enable: true });
	      }
	    },
	    disable: function disable(r) {
	      var recognizer = this.recognizers[r];
	      if (recognizer.options.enable) {
	        recognizer.set({ enable: false });
	      }
	    },
	    toggle: function toggle(r) {
	      var recognizer = this.recognizers[r];
	      if (recognizer) {
	        recognizer.options.enable
	          ? this.disable(r)
	          : this.enable(r);
	      }
	    },
	    enableAll: function enableAll(r) {
	      this.toggleAll({ enable: true });
	    },
	    disableAll: function disableAll(r) {
	      this.toggleAll({ enable: false });
	    },
	    toggleAll: function toggleAll(ref) {
	      var this$1 = this;
	      var enable = ref.enable;
	      var keys = Object.keys(this.recognizers);
	      for (var i = 0; i < keys.length; i++) {
	        var r = this$1.recognizers[keys[i]];
	        if (r.options.enable !== enable) {
	          r.set({ enable: enable });
	        }
	      }
	    },
	    isEnabled: function isEnabled(r) {
	      return this.recognizers[r] && this.recognizers[r].options.enable
	    }
	  },
	  render: function render(h) {
	    return h(this.tag, {}, this.$slots.default)
	  }
	};
	
	var installed = false;
	var vueTouch = { config: config, customEvents: customEvents };
	vueTouch.install = function install(Vue, opts) {
	  if ( opts === void 0 ) opts = {};
	  var name = opts.name || 'v-touch';
	  Vue.component(name, assign(Component, { name: name }));
	  installed = true;
	}.bind(vueTouch);
	vueTouch.registerCustomEvent = function registerCustomEvent(event, options) {
	  if ( options === void 0 ) options = {};
	  if (installed) {
	    console.warn(("\n      [vue-touch]: Custom Event '" + event + "' couldn't be added to vue-touch.\n      Custom Events have to be registered before installing the plugin.\n      "));
	    return
	  }
	  options.event = event;
	  customEvents[event] = options;
	  Component.props[(event + "Options")] = {
	    type: Object,
	    default: function default$1() { return {} }
	  };
	}.bind(vueTouch);
	vueTouch.component = Component;
	if (true) {
	  module.exports = vueTouch;
	} else if (typeof define == "function" && define.amd) {
	  define([], function(){ return vueTouch });
	} else if (typeof window !== 'undefined' && window.Vue) {
	  window.VueTouch = vueTouch;
	  Vue.use(vueTouch);
	}
	
	})));
	//# sourceMappingURL=vue-touch.js.map


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined) {
	  'use strict';
	
	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');
	
	var TYPE_FUNCTION = 'function';
	
	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;
	
	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}
	
	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}
	
	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;
	
	    if (!obj) {
	        return;
	    }
	
	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}
	
	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
	
	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	
	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');
	
	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');
	
	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;
	
	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;
	
	    if (properties) {
	        assign(childP, properties);
	    }
	}
	
	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}
	
	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}
	
	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}
	
	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}
	
	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}
	
	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}
	
	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}
	
	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}
	
	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}
	
	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}
	
	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;
	
	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }
	
	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }
	
	    return results;
	}
	
	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);
	
	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;
	
	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}
	
	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}
	
	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}
	
	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
	
	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
	
	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';
	
	var COMPUTE_INTERVAL = 25;
	
	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;
	
	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;
	
	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
	
	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];
	
	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;
	
	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };
	
	    this.init();
	
	}
	
	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },
	
	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },
	
	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};
	
	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;
	
	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}
	
	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
	
	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;
	
	    if (isFirst) {
	        manager.session = {};
	    }
	
	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;
	
	    // compute scale, rotation etc
	    computeInputData(manager, input);
	
	    // emit secret event
	    manager.emit('hammer.input', input);
	
	    manager.recognize(input);
	    manager.session.prevInput = input;
	}
	
	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;
	
	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }
	
	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }
	
	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
	
	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;
	
	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);
	
	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
	
	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
	
	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
	
	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
	
	    computeIntervalInputData(session, input);
	
	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}
	
	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};
	
	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };
	
	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }
	
	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}
	
	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;
	
	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;
	
	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);
	
	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }
	
	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}
	
	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }
	
	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}
	
	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;
	
	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }
	
	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }
	
	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}
	
	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}
	
	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }
	
	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}
	
	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	
	    return Math.sqrt((x * x) + (y * y));
	}
	
	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}
	
	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}
	
	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}
	
	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};
	
	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
	
	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;
	
	    this.pressed = false; // mousedown state
	
	    Input.apply(this, arguments);
	}
	
	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];
	
	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }
	
	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }
	
	        // mouse must be down
	        if (!this.pressed) {
	            return;
	        }
	
	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }
	
	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});
	
	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};
	
	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};
	
	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
	
	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}
	
	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;
	
	    Input.apply(this, arguments);
	
	    this.store = (this.manager.session.pointerEvents = []);
	}
	
	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;
	
	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
	
	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);
	
	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
	
	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }
	
	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }
	
	        // update the event in the store
	        store[storeIndex] = ev;
	
	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });
	
	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});
	
	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;
	
	    Input.apply(this, arguments);
	}
	
	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
	
	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }
	
	        if (!this.started) {
	            return;
	        }
	
	        var touches = normalizeSingleTouches.call(this, ev, type);
	
	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);
	
	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }
	
	    return [all, changed];
	}
	
	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};
	
	    Input.apply(this, arguments);
	}
	
	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;
	
	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }
	
	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;
	
	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });
	
	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }
	
	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }
	
	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }
	
	    if (!changedTargetTouches.length) {
	        return;
	    }
	
	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}
	
	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */
	
	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;
	
	function TouchMouseInput() {
	    Input.apply(this, arguments);
	
	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);
	
	    this.primaryTouch = null;
	    this.lastTouches = [];
	}
	
	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
	
	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	            return;
	        }
	
	        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	        if (isTouch) {
	            recordTouches.call(this, inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	            return;
	        }
	
	        this.callback(manager, inputEvent, inputData);
	    },
	
	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});
	
	function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	        this.primaryTouch = eventData.changedPointers[0].identifier;
	        setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        setLastTouch.call(this, eventData);
	    }
	}
	
	function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];
	
	    if (touch.identifier === this.primaryTouch) {
	        var lastTouch = {x: touch.clientX, y: touch.clientY};
	        this.lastTouches.push(lastTouch);
	        var lts = this.lastTouches;
	        var removeLastTouch = function() {
	            var i = lts.indexOf(lastTouch);
	            if (i > -1) {
	                lts.splice(i, 1);
	            }
	        };
	        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	}
	
	function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	        var t = this.lastTouches[i];
	        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	            return true;
	        }
	    }
	    return false;
	}
	
	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
	
	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();
	
	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}
	
	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }
	
	        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },
	
	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },
	
	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },
	
	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;
	
	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }
	
	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
	
	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture
	
	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;
	
	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }
	
	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }
	
	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },
	
	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};
	
	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	
	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }
	
	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }
	
	    return TOUCH_ACTION_AUTO;
	}
	
	function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	        return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {
	
	        // If css.supports is not supported but there is native touch-action assume it supports
	        // all values. This is the case for IE 10 and 11.
	        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	    });
	    return touchMap;
	}
	
	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;
	
	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});
	
	    this.id = uniqueId();
	
	    this.manager = null;
	
	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);
	
	    this.state = STATE_POSSIBLE;
	
	    this.simultaneous = {};
	    this.requireFail = [];
	}
	
	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},
	
	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },
	
	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }
	
	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },
	
	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }
	
	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },
	
	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },
	
	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },
	
	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;
	
	        function emit(event) {
	            self.manager.emit(event, input);
	        }
	
	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	
	        emit(self.options.event); // simple 'eventName' events
	
	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }
	
	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },
	
	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },
	
	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },
	
	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);
	
	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }
	
	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }
	
	        this.state = this.process(inputDataClone);
	
	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },
	
	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line
	
	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },
	
	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};
	
	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}
	
	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}
	
	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}
	
	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}
	
	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },
	
	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },
	
	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;
	
	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);
	
	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});
	
	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	
	    this.pX = null;
	    this.pY = null;
	}
	
	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },
	
	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },
	
	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;
	
	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },
	
	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },
	
	    emit: function(input) {
	
	        this.pX = input.deltaX;
	        this.pY = input.deltaY;
	
	        var direction = directionStr(input.direction);
	
	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },
	
	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    this._timer = null;
	    this._input = null;
	}
	
	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },
	
	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;
	
	        this._input = input;
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }
	
	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});
	
	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },
	
	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },
	
	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;
	
	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }
	
	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },
	
	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }
	
	        this.manager.emit(this.options.event, input);
	    }
	});
	
	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;
	
	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}
	
	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },
	
	    process: function(input) {
	        var options = this.options;
	
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;
	
	        this.reset();
	
	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }
	
	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
	
	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;
	
	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }
	
	            this._input = input;
	
	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },
	
	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}
	
	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.7';
	
	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,
	
	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,
	
	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,
	
	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,
	
	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,
	
	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],
	
	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',
	
	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',
	
	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',
	
	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',
	
	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',
	
	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};
	
	var STOP = 1;
	var FORCED_STOP = 2;
	
	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});
	
	    this.options.inputTarget = this.options.inputTarget || element;
	
	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};
	
	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);
	
	    toggleCssProps(this, true);
	
	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}
	
	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },
	
	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },
	
	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }
	
	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);
	
	        var recognizer;
	        var recognizers = this.recognizers;
	
	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;
	
	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }
	
	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];
	
	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }
	
	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },
	
	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }
	
	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },
	
	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }
	
	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }
	
	        this.recognizers.push(recognizer);
	        recognizer.manager = this;
	
	        this.touchAction.update();
	        return recognizer;
	    },
	
	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }
	
	        recognizer = this.get(recognizer);
	
	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);
	
	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }
	
	        return this;
	    },
	
	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	        if (handler === undefined) {
	            return;
	        }
	
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },
	
	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },
	
	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }
	
	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }
	
	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };
	
	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },
	
	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);
	
	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};
	
	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	        prop = prefixed(element.style, name);
	        if (add) {
	            manager.oldCssProps[prop] = element.style[prop];
	            element.style[prop] = value;
	        } else {
	            element.style[prop] = manager.oldCssProps[prop] || '';
	        }
	    });
	    if (!add) {
	        manager.oldCssProps = {};
	    }
	}
	
	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}
	
	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,
	
	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,
	
	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,
	
	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,
	
	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,
	
	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,
	
	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});
	
	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;
	
	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}
	
	})(window, document, 'Hammer');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('v-touch', {
	    on: {
	      "pan": _vm.panArea,
	      "panend": _vm.panendArea
	    }
	  }, [_c('div', {
	    class: ("ui-scroll ui-scroll-" + (_vm.isx?'x':'y')),
	    style: (_vm.uiScrollStyle)
	  }, [_c('div', {
	    class: ("ui-scroll-content " + (_vm.isEnd || !_vm.enable ? 'ui-scroll-trans' : '')),
	    style: (_vm.scrollContentStyle)
	  }, [(_vm.front) ? _vm._t("front", [(_vm.front) ? _c('div', {
	    staticClass: "ui-scroll-front ui-scroll-out",
	    class: {
	      'pull-up': _vm.y > 0, 'refreshing': _vm.y > _vm.range / 2
	    }
	  }, [_c('div', {
	    staticClass: "pull-to-refresh-layer"
	  }, [_c('div', {
	    staticClass: "pull-show-item"
	  }, [_c('span', {
	    staticClass: "preloader-text"
	  }, [_vm._v(_vm._s(_vm.movetext))]), _c('span', {
	    staticClass: "preloader"
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "pull-show-item"
	  }, [_c('span', {
	    staticClass: "pull-to-refresh-text"
	  }, [_vm._v(_vm._s(_vm.freshtext))]), _c('span', {
	    staticClass: "pull-to-refresh-arrow"
	  })])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "ui-scroll-core"
	  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.end) ? _vm._t("end", [_c('div', {
	    staticClass: "ui-scroll-end gom-scroll-out pull-up"
	  }, [_c('div', {
	    staticClass: "pull-to-refresh-layer"
	  }, [_c('div', {
	    staticClass: "pull-show-item"
	  }, [_c('span', {
	    staticClass: "preloader-text"
	  }, [_vm._v(_vm._s(_vm.movetext))]), _c('span', {
	    staticClass: "preloader"
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "pull-show-item"
	  }, [_c('span', {
	    staticClass: "pull-to-refresh-text"
	  }, [_vm._v(_vm._s(_vm.freshtext))]), _c('span', {
	    staticClass: "pull-to-refresh-arrow"
	  })])])])]) : _vm._e()], 2)])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-493baa02", module.exports)
	  }
	}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(88)
	
	/* script */
	__vue_exports__ = __webpack_require__(90)
	
	/* template */
	var __vue_template__ = __webpack_require__(91)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6e0c4693", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6e0c4693", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] list.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(89);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6e0c4693!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6e0c4693!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.table-view {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 15px;\n  list-style: none;\n  background-color: #fff;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  font-size: 16px;\n}\n.table-view.media {\n  width: 200px;\n}\n.table-view.media .table-view-cell {\n    background-color: #eee;\n    border-radius: 6px;\n    display: inline-block;\n    float: left;\n    padding: 0;\n}\n.table-view.media .table-view-cell .media-body {\n      padding: 10px 15px;\n}\n.table-view.media .table-view-cell a {\n      margin: 0;\n}\n.table-view.media .table-view-cell a > .btn,\n      .table-view.media .table-view-cell a > .badge,\n      .table-view.media .table-view-cell a > .toggle {\n        position: relative;\n        top: auto;\n}\n.table-view.media .table-view-cell img {\n      display: block;\n      width: 100%;\n      max-width: 100%;\n      max-height: 150px;\n}\n.table-view.media .pull-left {\n    float: none;\n}\n.table-view-cell {\n  position: relative;\n  padding: 11px 65px 11px 15px;\n  overflow: hidden;\n  border-bottom: 1px solid #ddd;\n}\n.table-view-cell:last-child {\n    border-bottom: 0;\n}\n.table-view-cell > a:not(.btn) {\n    position: relative;\n    display: block;\n    padding: inherit;\n    margin: -11px -65px -11px -15px;\n    overflow: hidden;\n    color: inherit;\n}\n.table-view-cell > a:not(.btn):active {\n      background-color: #eee;\n}\n.table-view-cell p {\n    margin-bottom: 0;\n}\n.table-view-divider {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-left: 15px;\n  margin-top: -1px;\n  margin-left: 0;\n  font-weight: 500;\n  color: #999;\n  background-color: #fafafa;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.table-view-divider a {\n    color: #999;\n}\n.table-view .media,\n.table-view .media-body {\n  overflow: hidden;\n}\n.table-view .media-object.pull-left {\n  margin-right: 10px;\n}\n.table-view .media-object.pull-right {\n  margin-left: 10px;\n}\n.table-view-cell > .btn,\n.table-view-cell > .badge,\n.table-view-cell > .toggle,\n.table-view-cell > a > .btn,\n.table-view-cell > a > .badge,\n.table-view-cell > a > .toggle {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.content > .table-view:first-child {\n  margin-top: 15px;\n}\n.table-noarrow .navigate-left:after {\n  content: '';\n}\n.table-noarrow .navigate-right:after {\n  content: '';\n}\n.navigate-left:after,\n.navigate-right:after {\n  position: absolute;\n  top: 50%;\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: inherit;\n  line-height: 1;\n  color: #bbb;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.navigate-left:after {\n  left: 15px;\n  content: '\\E822';\n}\n.navigate-right:after {\n  right: 15px;\n  content: '\\E826';\n}\n", "", {"version":3,"sources":["/./src/list.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,gBAAgB;EAChB,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;EACvB,2BAA2B;EAC3B,8BAA8B;EAC9B,gBAAgB;CAAE;AAEpB;EACE,aAAa;CAAE;AACf;IACE,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,WAAW;CAAE;AACb;MACE,mBAAmB;CAAE;AACvB;MACE,UAAU;CAAE;AACZ;;;QAGE,mBAAmB;QACnB,UAAU;CAAE;AAChB;MACE,eAAe;MACf,YAAY;MACZ,gBAAgB;MAChB,kBAAkB;CAAE;AACxB;IACE,YAAY;CAAE;AAElB;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,iBAAiB;EACjB,8BAA8B;CAAE;AAChC;IACE,iBAAiB;CAAE;AACrB;IACE,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,gCAAgC;IAChC,iBAAiB;IACjB,eAAe;CAAE;AACjB;MACE,uBAAuB;CAAE;AAC7B;IACE,iBAAiB;CAAE;AAEvB;EACE,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;EAC1B,2BAA2B;EAC3B,8BAA8B;CAAE;AAChC;IACE,YAAY;CAAE;AAElB;;EAEE,iBAAiB;CAAE;AAErB;EACE,mBAAmB;CAAE;AAEvB;EACE,kBAAkB;CAAE;AAEtB;;;;;;EAME,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;CAAE;AAEhC;EACE,iBAAiB;CAAE;AAErB;EACE,YAAY;CAAE;AAEhB;EACE,YAAY;CAAE;AAEhB;;EAEE,mBAAmB;EACnB,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,oCAAoC;EACpC,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;CAAE;AAEhC;EACE,WAAW;EACX,iBAAiB;CAAE;AAErB;EACE,YAAY;EACZ,iBAAiB;CAAE","file":"list.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.table-view {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 15px;\n  list-style: none;\n  background-color: #fff;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  font-size: 16px; }\n\n.table-view.media {\n  width: 200px; }\n  .table-view.media .table-view-cell {\n    background-color: #eee;\n    border-radius: 6px;\n    display: inline-block;\n    float: left;\n    padding: 0; }\n    .table-view.media .table-view-cell .media-body {\n      padding: 10px 15px; }\n    .table-view.media .table-view-cell a {\n      margin: 0; }\n      .table-view.media .table-view-cell a > .btn,\n      .table-view.media .table-view-cell a > .badge,\n      .table-view.media .table-view-cell a > .toggle {\n        position: relative;\n        top: auto; }\n    .table-view.media .table-view-cell img {\n      display: block;\n      width: 100%;\n      max-width: 100%;\n      max-height: 150px; }\n  .table-view.media .pull-left {\n    float: none; }\n\n.table-view-cell {\n  position: relative;\n  padding: 11px 65px 11px 15px;\n  overflow: hidden;\n  border-bottom: 1px solid #ddd; }\n  .table-view-cell:last-child {\n    border-bottom: 0; }\n  .table-view-cell > a:not(.btn) {\n    position: relative;\n    display: block;\n    padding: inherit;\n    margin: -11px -65px -11px -15px;\n    overflow: hidden;\n    color: inherit; }\n    .table-view-cell > a:not(.btn):active {\n      background-color: #eee; }\n  .table-view-cell p {\n    margin-bottom: 0; }\n\n.table-view-divider {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-left: 15px;\n  margin-top: -1px;\n  margin-left: 0;\n  font-weight: 500;\n  color: #999;\n  background-color: #fafafa;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd; }\n  .table-view-divider a {\n    color: #999; }\n\n.table-view .media,\n.table-view .media-body {\n  overflow: hidden; }\n\n.table-view .media-object.pull-left {\n  margin-right: 10px; }\n\n.table-view .media-object.pull-right {\n  margin-left: 10px; }\n\n.table-view-cell > .btn,\n.table-view-cell > .badge,\n.table-view-cell > .toggle,\n.table-view-cell > a > .btn,\n.table-view-cell > a > .badge,\n.table-view-cell > a > .toggle {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.content > .table-view:first-child {\n  margin-top: 15px; }\n\n.table-noarrow .navigate-left:after {\n  content: ''; }\n\n.table-noarrow .navigate-right:after {\n  content: ''; }\n\n.navigate-left:after,\n.navigate-right:after {\n  position: absolute;\n  top: 50%;\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: inherit;\n  line-height: 1;\n  color: #bbb;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.navigate-left:after {\n  left: 15px;\n  content: '\\e822'; }\n\n.navigate-right:after {\n  right: 15px;\n  content: '\\e826'; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 90 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    className: {
	      type: String,
	      default: ''
	    },
	    media: {
	      type: Boolean,
	      default: false
	    },
	    card: {
	      type: Boolean,
	      default: false
	    },
	    arrow: {
	      type: Boolean,
	      default: true
	    }
	  }
	};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "table-view",
	    class: {
	      'media clearfix': _vm.media, 'card': _vm.card, 'table-noarrow': !_vm.arrow
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6e0c4693", module.exports)
	  }
	}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(93)
	
	/* script */
	__vue_exports__ = __webpack_require__(95)
	
	/* template */
	var __vue_template__ = __webpack_require__(96)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6406ce88", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6406ce88", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] item.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6406ce88!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6406ce88!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\na {\n  text-decoration: none;\n  color: #333;\n}\n", "", {"version":3,"sources":["/./src/item.vue"],"names":[],"mappings":";AAAA;EACE,sBAAsB;EACtB,YAAY;CAAE","file":"item.vue","sourcesContent":["a {\n  text-decoration: none;\n  color: #333; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _badge = __webpack_require__(1);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _icon = __webpack_require__(12);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _btn = __webpack_require__(8);
	
	var _btn2 = _interopRequireDefault(_btn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'item',
	  components: { icon: _icon2.default, badge: _badge2.default, btn: _btn2.default },
	  props: {
	    btn: {
	      type: String,
	      default: ''
	    },
	    icon: {
	      type: String,
	      default: ''
	    },
	    img: {
	      type: String,
	      default: ''
	    },
	    badge: {
	      type: String,
	      default: void 0
	    },
	    content: {
	      type: String,
	      default: ''
	    },
	    link: {
	      //vue path route link
	      type: String
	    },
	    href: {
	      //a html link
	      type: String,
	      default: ''
	    },
	    divider: {
	      type: Boolean,
	      default: false
	    },
	    collapse: {
	      type: Boolean,
	      default: false
	    },
	    active: {
	      type: Boolean,
	      default: false
	    },
	    height: {
	      type: Number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      collapseState: false,
	      styleobject: this.height ? {
	        height: this.height + 'px',
	        lineHeight: this.height + 'px'
	      } : {} //列表单项行内样式
	    };
	  },
	
	
	  methods: {
	    collapseListGroup: function collapseListGroup(event) {
	      if (this.divider !== 'true') return;
	    }
	  },
	  beforeDestroy: function beforeDestroy() {}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: {
	      'active': _vm.active, 'table-view-cell': !_vm.divider, 'table-view-divider': _vm.divider, 'table-view-collapse': _vm.collapse, 'table-view-full': (_vm.badge === void 0)
	    },
	    style: (_vm.styleobject),
	    on: {
	      "click": _vm.collapseListGroup
	    }
	  }, [(_vm.divider) ? _c('span', [_vm._t("default", [_vm._v(_vm._s(_vm.title))])], 2) : _vm._e(), _vm._v(" "), (!_vm.divider) ? _c('a', {
	    staticClass: "navigate-right",
	    attrs: {
	      "href": _vm.href ? _vm.href : 'javascript:'
	    }
	  }, [(_vm.img) ? _c('img', {
	    staticClass: "media-object pull-left",
	    attrs: {
	      "src": _vm.img
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.icon) ? _c('icon', {
	    staticClass: "media-object  pull-left",
	    attrs: {
	      "icon": _vm.icon
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "media-body"
	  }, [_vm._t("default", [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.content) ? _c('p', [_vm._v(_vm._s(_vm.content))]) : _vm._e()], 2), _vm._v(" "), (_vm.btn) ? _c('btn', [_vm._v(_vm._s(_vm.btn))]) : _vm._e(), _vm._v(" "), (_vm.badge) ? _c('badge', [_vm._v(_vm._s(_vm.badge))]) : _vm._e()], 1) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6406ce88", module.exports)
	  }
	}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ui-options",
	    style: ({
	      width: _vm.width
	    }),
	    attrs: {
	      "onpanend": _vm.onpanend
	    }
	  }, [_c('div', {
	    staticClass: "ui-cell-yard",
	    style: (_vm.yardStyle)
	  }), _vm._v(" "), _c('scroll', {
	    attrs: {
	      "enable": _vm.enable,
	      "isx": false,
	      "height": _vm.height,
	      "width": "100%",
	      "range": 50,
	      "step": _vm.step,
	      "onpanend": _vm.panend
	    }
	  }, [_c('list', {
	    staticClass: "ui-cell",
	    style: (_vm.cellStyle)
	  }, _vm._l((_vm.data), function(val, key) {
	    return _c('item', {
	      key: val.index,
	      attrs: {
	        "active": _vm.activeindex === _vm.index,
	        "height": _vm.step
	      }
	    }, [_vm._v(_vm._s(val))])
	  }))], 1)], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d1b190ac", module.exports)
	  }
	}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(99)
	
	/* script */
	__vue_exports__ = __webpack_require__(101)
	
	/* template */
	var __vue_template__ = __webpack_require__(107)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3ad76e9e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3ad76e9e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] select.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ad76e9e!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3ad76e9e!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.ui-select .modal-title {\n  height: 1.45833rem;\n}\n.ui-select .ui-scroll {\n  float: left;\n}\n.ui-scroll-select {\n  display: flex;\n  height: 100%;\n}\n.ui-scroll-select .ui-scroll-select-item {\n    flex: 1;\n}\n.ui-select .modal-title {\n  height: 2.29167rem;\n  line-height: 2.29167rem !important;\n  font-weight: 400;\n  color: #fff;\n  background-color: #435163;\n}\n.ui-select .btn-link {\n  font-size: 0.70833rem;\n  padding: 0.83333rem !important;\n  color: #fff;\n}\n.ui-select .modal-btn-no {\n  position: relative;\n}\n.ui-select .modal-btn-no::after {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    width: 0.04167rem;\n    height: 1.04167rem;\n    background-color: #525f6f;\n    transform: translateY(-50%);\n}\n.ui-select .modal-btn-yes {\n  position: relative;\n}\n.ui-select .modal-btn-yes::after {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 0.04167rem;\n    height: 1.04167rem;\n    background-color: #525f6f;\n    transform: translateY(-50%);\n}\n.ui-select .modal-inner {\n  background-color: #fff;\n}\n.ui-select .ui-options .ui-cell .table-view-cell.active a.navigate-right {\n  color: #099fde;\n}\n.ui-select .ui-scroll {\n  background-color: #fff;\n}\n.ui-select .ui-options {\n  -webkit-mask-box-image: none;\n}\n", "", {"version":3,"sources":["/./src/select.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,mBAAmB;CAAE;AAEvB;EACE,YAAY;CAAE;AAEhB;EACE,cAAc;EACd,aAAa;CAAE;AACf;IACE,QAAQ;CAAE;AAEd;EACE,mBAAmB;EACnB,mCAAmC;EACnC,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;CAAE;AAE9B;EACE,sBAAsB;EACtB,+BAA+B;EAC/B,YAAY;CAAE;AAEhB;EACE,mBAAmB;CAAE;AACrB;IACE,mBAAmB;IACnB,SAAS;IACT,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,4BAA4B;CAAE;AAElC;EACE,mBAAmB;CAAE;AACrB;IACE,mBAAmB;IACnB,SAAS;IACT,QAAQ;IACR,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,4BAA4B;CAAE;AAElC;EACE,uBAAuB;CAAE;AAE3B;EACE,eAAe;CAAE;AAEnB;EACE,uBAAuB;CAAE;AAE3B;EACE,6BAA6B;CAAE","file":"select.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.ui-select .modal-title {\n  height: 1.45833rem; }\n\n.ui-select .ui-scroll {\n  float: left; }\n\n.ui-scroll-select {\n  display: flex;\n  height: 100%; }\n  .ui-scroll-select .ui-scroll-select-item {\n    flex: 1; }\n\n.ui-select .modal-title {\n  height: 2.29167rem;\n  line-height: 2.29167rem !important;\n  font-weight: 400;\n  color: #fff;\n  background-color: #435163; }\n\n.ui-select .btn-link {\n  font-size: 0.70833rem;\n  padding: 0.83333rem !important;\n  color: #fff; }\n\n.ui-select .modal-btn-no {\n  position: relative; }\n  .ui-select .modal-btn-no::after {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    width: 0.04167rem;\n    height: 1.04167rem;\n    background-color: #525f6f;\n    transform: translateY(-50%); }\n\n.ui-select .modal-btn-yes {\n  position: relative; }\n  .ui-select .modal-btn-yes::after {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 0.04167rem;\n    height: 1.04167rem;\n    background-color: #525f6f;\n    transform: translateY(-50%); }\n\n.ui-select .modal-inner {\n  background-color: #fff; }\n\n.ui-select .ui-options .ui-cell .table-view-cell.active a.navigate-right {\n  color: #099fde; }\n\n.ui-select .ui-scroll {\n  background-color: #fff; }\n\n.ui-select .ui-options {\n  -webkit-mask-box-image: none; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _modal = __webpack_require__(102);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'vselect',
	    components: {
	        modal: _modal2.default
	    },
	    props: {
	        show: {
	            type: Boolean,
	            default: true
	        },
	        title: {
	            type: String,
	            default: ''
	        },
	        onyes: {
	            default: function _default() {},
	            type: Function
	        },
	        oncancel: {
	            default: function _default() {},
	            type: Function
	        }
	    },
	    data: function data() {
	        return {
	            innerShow: this.show
	        };
	    },
	
	    watch: {
	        innerShow: function innerShow(val) {
	            this.$emit('update:show', val);
	        },
	        show: function show(val) {
	            this.innerShow = val;
	        }
	    }
	}; //
	//
	//
	//
	//
	//

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(103)
	
	/* script */
	__vue_exports__ = __webpack_require__(105)
	
	/* template */
	var __vue_template__ = __webpack_require__(106)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\modal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-20677808", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-20677808", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] modal.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-20677808!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-20677808!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n/* === Modals === */\n.modal-mask,\n.modal-wrapper {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  z-index: 1000;\n}\n.modal-mask {\n  background-color: rgba(55, 55, 55, 0.6);\n}\n.modal-wrapper {\n  transition: all .3s ease;\n  z-index: 1001;\n}\n.modal-nomask {\n  background-color: rgba(0, 0, 0, 0);\n}\n.modal-layout {\n  margin: 35% auto 0;\n  border-radius: 0.25rem;\n  width: 12.5rem;\n  z-index: 1001;\n}\n.modal-inner {\n  border-radius: 0.25rem 0.25rem 0 0;\n  position: relative;\n  background: rgba(255, 255, 255, 0.95);\n}\n.modal-title {\n  line-height: 1.8rem;\n  text-align: center;\n  background-color: #08A9E5;\n  font-size: 0.7rem;\n  font-weight: 300;\n  color: #fff;\n}\nhtml.ios-gt-8 .modal-title {\n    font-weight: 600;\n}\n.modal-title + .modal-text {\n    position: relative;\n    background-color: #fff;\n    padding: 0.41667rem;\n}\n.modal-buttons {\n  display: flex;\n  line-height: 2.25rem;\n  background-color: #fafafa;\n}\n.modal-buttons.modal-buttons-vertical {\n    display: block;\n    height: auto;\n}\n.modal-button {\n  width: 100%;\n  text-align: center;\n  border-right: 1px solid #DFDFDF;\n  display: block;\n  width: 49%;\n  font-size: 0.75rem;\n  font-weight: 300;\n}\n.modal-button:last-child {\n    border-right: none;\n}\n.modal-button-emphasize {\n    color: #009EE1;\n}\n.modal-button-disabled {\n    color: #ccc;\n}\n.modal-button:first-child {\n    border-radius: 0 0 0 0.54167rem;\n}\n.modal-button:last-child {\n    border-radius: 0 0 0.54167rem 0;\n}\n.modal-button:first-child:last-child {\n    border-radius: 0 0 0.54167rem 0.54167rem;\n}\n.modal-button.modal-button-bold {\n    font-weight: 500;\n}\nhtml.ios-gt-8 .modal-button.modal-button-bold {\n      font-weight: 600;\n}\nhtml:not(.watch-active-state) .modal-button:active, .modal-button.active-state {\n    background: rgba(230, 230, 230, 0.95);\n}\n.modal-buttons-vertical .modal-button {\n    border-radius: 0;\n}\n.modal-buttons-vertical .modal-button:last-child {\n      border-radius: 0 0 0.54167rem 0.54167rem;\n}\n.modal-button:after {\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 0;\n    left: auto;\n    bottom: auto;\n    width: 1px;\n    height: 100%;\n    background-color: #b5b5b5;\n    display: block;\n    z-index: 15;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n}\n.modal-no-buttons .modal-inner {\n  border-radius: 0.54167rem;\n}\n.modal-no-buttons .modal-buttons {\n  display: none;\n}\n.modal-preload .modal-layout,\n.modal-top .modal-layout {\n  margin-top: 0;\n}\n.modal-tips {\n  background-color: transparent;\n}\n.modal-confirm .modal-buttons .modal-button {\n  flex: 2;\n}\n.modal-alert .modal-buttons .modal-button {\n  flex: 1;\n}\n.modal-top .modal-layout,\n.modal-bottom .modal-layout,\n.modal-popup .modal-layout {\n  width: 100%;\n  border-radius: 0;\n}\n.modal-top .modal-layout .modal-inner,\n  .modal-top .modal-layout .modal-button,\n  .modal-bottom .modal-layout .modal-inner,\n  .modal-bottom .modal-layout .modal-button,\n  .modal-popup .modal-layout .modal-inner,\n  .modal-popup .modal-layout .modal-button {\n    border-radius: 0;\n}\n.modal-top .modal-layout .modal-button:first-child, .modal-top .modal-layout .modal-button:last-child,\n  .modal-bottom .modal-layout .modal-button:first-child,\n  .modal-bottom .modal-layout .modal-button:last-child,\n  .modal-popup .modal-layout .modal-button:first-child,\n  .modal-popup .modal-layout .modal-button:last-child {\n    border-radius: 0;\n}\n.modal-top .modal-layout {\n  align-self: flex-start;\n}\n.modal-top .modal-title,\n.modal-top .modal-title + .modal-text {\n  text-align: left;\n  background-color: transparent;\n}\n.modal-top .modal-inner {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #d2d2d2;\n  font-size: 0.58333rem;\n}\n.modal-top .icon-close {\n  position: absolute;\n  right: 0.41667rem;\n  color: #fff;\n  z-index: 1;\n}\n.modal-bottom .modal-layout,\n.modal-popup .modal-layout {\n  align-self: flex-end;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  max-height: 10.41667rem;\n}\n.modal-bottom .modal-layout .table-view,\n  .modal-popup .modal-layout .table-view {\n    margin-bottom: 0;\n}\n.modal-bottom .modal-layout .modal-title,\n  .modal-popup .modal-layout .modal-title {\n    line-height: 1.45833rem;\n    font-size: 0.66667rem;\n    border-bottom: 1px solid #ddd;\n}\n.modal-bottom .modal-layout .modal-title .btn-link,\n    .modal-popup .modal-layout .modal-title .btn-link {\n      font-size: 0.625rem;\n      padding: 0.41667rem;\n}\n.modal-bottom .modal-layout .modal-title .modal-btn-no,\n    .modal-popup .modal-layout .modal-title .modal-btn-no {\n      float: left;\n}\n.modal-bottom .modal-layout .modal-title .modal-btn-yes,\n    .modal-popup .modal-layout .modal-title .modal-btn-yes {\n      float: right;\n}\n.modal-bottom .modal-layout .modal-title + .modal-text,\n  .modal-popup .modal-layout .modal-title + .modal-text {\n    height: 7.08333rem;\n    padding: 0;\n}\n.modal-popup .modal-layout {\n  height: 100%;\n  max-height: 100%;\n  background-color: #fff;\n}\n.modal-popup .modal-layout .modal-title + .modal-text {\n    height: auto;\n}\n.modal-popup .modal-text {\n  text-align: left;\n}\n\n/* Animate For Vue Modal */\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity .5s;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n.preload-enter-active,\n.preload-leave-active {\n  margin: 0 auto;\n}\n.loading-enter-active,\n.loading-leave-active,\n.alert-enter-active,\n.alert-leave-active,\n.confirm-enter-active,\n.confirm-leave-active,\n.center-enter-active,\n.center-leave-active,\n.toast-enter-active,\n.toast-leave-active {\n  transform: scale(1);\n  opacity: 1;\n  overflow: hidden;\n}\n.top-enter-active,\n.top-leave-active,\n.bottom-enter-active,\n.bottom-leave-active,\n.popup-enter-active,\n.popup-leave-active,\n.popover-enter-active,\n.popover-leave-active,\n.toast-enter-active,\n.toast-leave-active {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n.tips-enter-active,\n.tips-leave-active {\n  opacity: 1;\n}\n.loading-enter,\n.preload-enter,\n.alert-enter,\n.confirm-enter,\n.center-enter,\n.toast-enter {\n  transform: scale(1.5);\n  opacity: 0.5;\n}\n.alert-leave-active,\n.confirm-leave-active,\n.center-leave-active,\n.loading-leave-active,\n.preload-leave-active,\n.toast-leave-active {\n  transform: scale(0.8);\n  opacity: 0;\n}\n.popover-enter,\n.popover-leave-active {\n  top: 0 !important;\n  opacity: 0.5;\n}\n.top-enter,\n.top-leave-active {\n  transform: translate3d(0, -100%, 0);\n}\n.bottom-enter,\n.bottom-leave-active,\n.popup-enter,\n.popup-leave-active {\n  transform: translate3d(0, 100%, 0);\n}\n.tips-enter,\n.tips-leave-active {\n  opacity: 0;\n}\n", "", {"version":3,"sources":["/./src/modal.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH,oBAAoB;AACpB;;EAEE,gBAAgB;EAChB,OAAO;EACP,UAAU;EACV,QAAQ;EACR,SAAS;EACT,aAAa;EACb,cAAc;CAAE;AAElB;EACE,wCAAwC;CAAE;AAE5C;EACE,yBAAyB;EACzB,cAAc;CAAE;AAElB;EACE,mCAAmC;CAAE;AAEvC;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,cAAc;CAAE;AAElB;EACE,mCAAmC;EACnC,mBAAmB;EACnB,sCAAsC;CAAE;AAE1C;EACE,oBAAoB;EACpB,mBAAmB;EACnB,0BAA0B;EAC1B,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;CAAE;AACd;IACE,iBAAiB;CAAE;AACrB;IACE,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;CAAE;AAE1B;EACE,cAAc;EACd,qBAAqB;EACrB,0BAA0B;CAAE;AAC5B;IACE,eAAe;IACf,aAAa;CAAE;AAEnB;EACE,YAAY;EACZ,mBAAmB;EACnB,gCAAgC;EAChC,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,iBAAiB;CAAE;AACnB;IACE,mBAAmB;CAAE;AACvB;IACE,eAAe;CAAE;AACnB;IACE,YAAY;CAAE;AAChB;IACE,gCAAgC;CAAE;AACpC;IACE,gCAAgC;CAAE;AACpC;IACE,yCAAyC;CAAE;AAC7C;IACE,iBAAiB;CAAE;AACnB;MACE,iBAAiB;CAAE;AACvB;IACE,sCAAsC;CAAE;AAC1C;IACE,iBAAiB;CAAE;AACnB;MACE,yCAAyC;CAAE;AAC/C;IACE,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,OAAO;IACP,WAAW;IACX,aAAa;IACb,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B,eAAe;IACf,YAAY;IACZ,mCAAmC;IACnC,2BAA2B;CAAE;AAEjC;EACE,0BAA0B;CAAE;AAE9B;EACE,cAAc;CAAE;AAElB;;EAEE,cAAc;CAAE;AAElB;EACE,8BAA8B;CAAE;AAElC;EACE,QAAQ;CAAE;AAEZ;EACE,QAAQ;CAAE;AAEZ;;;EAGE,YAAY;EACZ,iBAAiB;CAAE;AACnB;;;;;;IAME,iBAAiB;CAAE;AACrB;;;;;IAKE,iBAAiB;CAAE;AAEvB;EACE,uBAAuB;CAAE;AAE3B;;EAEE,iBAAiB;EACjB,8BAA8B;CAAE;AAElC;EACE,qCAAqC;EACrC,eAAe;EACf,sBAAsB;CAAE;AAE1B;EACE,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,WAAW;CAAE;AAEf;;EAEE,qBAAqB;EACrB,UAAU;EACV,QAAQ;EACR,mBAAmB;EACnB,wBAAwB;CAAE;AAC1B;;IAEE,iBAAiB;CAAE;AACrB;;IAEE,wBAAwB;IACxB,sBAAsB;IACtB,8BAA8B;CAAE;AAChC;;MAEE,oBAAoB;MACpB,oBAAoB;CAAE;AACxB;;MAEE,YAAY;CAAE;AAChB;;MAEE,aAAa;CAAE;AACnB;;IAEE,mBAAmB;IACnB,WAAW;CAAE;AAEjB;EACE,aAAa;EACb,iBAAiB;EACjB,uBAAuB;CAAE;AACzB;IACE,aAAa;CAAE;AAEnB;EACE,iBAAiB;CAAE;;AAErB,2BAA2B;AAC3B;;EAEE,wBAAwB;CAAE;AAE5B;;EAEE,WAAW;CAAE;AAEf;;EAEE,eAAe;CAAE;AAEnB;;;;;;;;;;EAUE,oBAAoB;EACpB,WAAW;EACX,iBAAiB;CAAE;AAErB;;;;;;;;;;EAUE,WAAW;EACX,gCAAgC;CAAE;AAEpC;;EAEE,WAAW;CAAE;AAEf;;;;;;EAME,sBAAsB;EACtB,aAAa;CAAE;AAEjB;;;;;;EAME,sBAAsB;EACtB,WAAW;CAAE;AAEf;;EAEE,kBAAkB;EAClB,aAAa;CAAE;AAEjB;;EAEE,oCAAoC;CAAE;AAExC;;;;EAIE,mCAAmC;CAAE;AAEvC;;EAEE,WAAW;CAAE","file":"modal.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n/* === Modals === */\n.modal-mask,\n.modal-wrapper {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  z-index: 1000; }\n\n.modal-mask {\n  background-color: rgba(55, 55, 55, 0.6); }\n\n.modal-wrapper {\n  transition: all .3s ease;\n  z-index: 1001; }\n\n.modal-nomask {\n  background-color: rgba(0, 0, 0, 0); }\n\n.modal-layout {\n  margin: 35% auto 0;\n  border-radius: 0.25rem;\n  width: 12.5rem;\n  z-index: 1001; }\n\n.modal-inner {\n  border-radius: 0.25rem 0.25rem 0 0;\n  position: relative;\n  background: rgba(255, 255, 255, 0.95); }\n\n.modal-title {\n  line-height: 1.8rem;\n  text-align: center;\n  background-color: #08A9E5;\n  font-size: 0.7rem;\n  font-weight: 300;\n  color: #fff; }\n  html.ios-gt-8 .modal-title {\n    font-weight: 600; }\n  .modal-title + .modal-text {\n    position: relative;\n    background-color: #fff;\n    padding: 0.41667rem; }\n\n.modal-buttons {\n  display: flex;\n  line-height: 2.25rem;\n  background-color: #fafafa; }\n  .modal-buttons.modal-buttons-vertical {\n    display: block;\n    height: auto; }\n\n.modal-button {\n  width: 100%;\n  text-align: center;\n  border-right: 1px solid #DFDFDF;\n  display: block;\n  width: 49%;\n  font-size: 0.75rem;\n  font-weight: 300; }\n  .modal-button:last-child {\n    border-right: none; }\n  .modal-button-emphasize {\n    color: #009EE1; }\n  .modal-button-disabled {\n    color: #ccc; }\n  .modal-button:first-child {\n    border-radius: 0 0 0 0.54167rem; }\n  .modal-button:last-child {\n    border-radius: 0 0 0.54167rem 0; }\n  .modal-button:first-child:last-child {\n    border-radius: 0 0 0.54167rem 0.54167rem; }\n  .modal-button.modal-button-bold {\n    font-weight: 500; }\n    html.ios-gt-8 .modal-button.modal-button-bold {\n      font-weight: 600; }\n  html:not(.watch-active-state) .modal-button:active, .modal-button.active-state {\n    background: rgba(230, 230, 230, 0.95); }\n  .modal-buttons-vertical .modal-button {\n    border-radius: 0; }\n    .modal-buttons-vertical .modal-button:last-child {\n      border-radius: 0 0 0.54167rem 0.54167rem; }\n  .modal-button:after {\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 0;\n    left: auto;\n    bottom: auto;\n    width: 1px;\n    height: 100%;\n    background-color: #b5b5b5;\n    display: block;\n    z-index: 15;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%; }\n\n.modal-no-buttons .modal-inner {\n  border-radius: 0.54167rem; }\n\n.modal-no-buttons .modal-buttons {\n  display: none; }\n\n.modal-preload .modal-layout,\n.modal-top .modal-layout {\n  margin-top: 0; }\n\n.modal-tips {\n  background-color: transparent; }\n\n.modal-confirm .modal-buttons .modal-button {\n  flex: 2; }\n\n.modal-alert .modal-buttons .modal-button {\n  flex: 1; }\n\n.modal-top .modal-layout,\n.modal-bottom .modal-layout,\n.modal-popup .modal-layout {\n  width: 100%;\n  border-radius: 0; }\n  .modal-top .modal-layout .modal-inner,\n  .modal-top .modal-layout .modal-button,\n  .modal-bottom .modal-layout .modal-inner,\n  .modal-bottom .modal-layout .modal-button,\n  .modal-popup .modal-layout .modal-inner,\n  .modal-popup .modal-layout .modal-button {\n    border-radius: 0; }\n  .modal-top .modal-layout .modal-button:first-child, .modal-top .modal-layout .modal-button:last-child,\n  .modal-bottom .modal-layout .modal-button:first-child,\n  .modal-bottom .modal-layout .modal-button:last-child,\n  .modal-popup .modal-layout .modal-button:first-child,\n  .modal-popup .modal-layout .modal-button:last-child {\n    border-radius: 0; }\n\n.modal-top .modal-layout {\n  align-self: flex-start; }\n\n.modal-top .modal-title,\n.modal-top .modal-title + .modal-text {\n  text-align: left;\n  background-color: transparent; }\n\n.modal-top .modal-inner {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #d2d2d2;\n  font-size: 0.58333rem; }\n\n.modal-top .icon-close {\n  position: absolute;\n  right: 0.41667rem;\n  color: #fff;\n  z-index: 1; }\n\n.modal-bottom .modal-layout,\n.modal-popup .modal-layout {\n  align-self: flex-end;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  max-height: 10.41667rem; }\n  .modal-bottom .modal-layout .table-view,\n  .modal-popup .modal-layout .table-view {\n    margin-bottom: 0; }\n  .modal-bottom .modal-layout .modal-title,\n  .modal-popup .modal-layout .modal-title {\n    line-height: 1.45833rem;\n    font-size: 0.66667rem;\n    border-bottom: 1px solid #ddd; }\n    .modal-bottom .modal-layout .modal-title .btn-link,\n    .modal-popup .modal-layout .modal-title .btn-link {\n      font-size: 0.625rem;\n      padding: 0.41667rem; }\n    .modal-bottom .modal-layout .modal-title .modal-btn-no,\n    .modal-popup .modal-layout .modal-title .modal-btn-no {\n      float: left; }\n    .modal-bottom .modal-layout .modal-title .modal-btn-yes,\n    .modal-popup .modal-layout .modal-title .modal-btn-yes {\n      float: right; }\n  .modal-bottom .modal-layout .modal-title + .modal-text,\n  .modal-popup .modal-layout .modal-title + .modal-text {\n    height: 7.08333rem;\n    padding: 0; }\n\n.modal-popup .modal-layout {\n  height: 100%;\n  max-height: 100%;\n  background-color: #fff; }\n  .modal-popup .modal-layout .modal-title + .modal-text {\n    height: auto; }\n\n.modal-popup .modal-text {\n  text-align: left; }\n\n/* Animate For Vue Modal */\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity .5s; }\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0; }\n\n.preload-enter-active,\n.preload-leave-active {\n  margin: 0 auto; }\n\n.loading-enter-active,\n.loading-leave-active,\n.alert-enter-active,\n.alert-leave-active,\n.confirm-enter-active,\n.confirm-leave-active,\n.center-enter-active,\n.center-leave-active,\n.toast-enter-active,\n.toast-leave-active {\n  transform: scale(1);\n  opacity: 1;\n  overflow: hidden; }\n\n.top-enter-active,\n.top-leave-active,\n.bottom-enter-active,\n.bottom-leave-active,\n.popup-enter-active,\n.popup-leave-active,\n.popover-enter-active,\n.popover-leave-active,\n.toast-enter-active,\n.toast-leave-active {\n  opacity: 1;\n  transform: translate3d(0, 0, 0); }\n\n.tips-enter-active,\n.tips-leave-active {\n  opacity: 1; }\n\n.loading-enter,\n.preload-enter,\n.alert-enter,\n.confirm-enter,\n.center-enter,\n.toast-enter {\n  transform: scale(1.5);\n  opacity: 0.5; }\n\n.alert-leave-active,\n.confirm-leave-active,\n.center-leave-active,\n.loading-leave-active,\n.preload-leave-active,\n.toast-leave-active {\n  transform: scale(0.8);\n  opacity: 0; }\n\n.popover-enter,\n.popover-leave-active {\n  top: 0 !important;\n  opacity: 0.5; }\n\n.top-enter,\n.top-leave-active {\n  transform: translate3d(0, -100%, 0); }\n\n.bottom-enter,\n.bottom-leave-active,\n.popup-enter,\n.popup-leave-active {\n  transform: translate3d(0, 100%, 0); }\n\n.tips-enter,\n.tips-leave-active {\n  opacity: 0; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        //是否显示右上角关闭标签
	        close: {
	            type: Boolean,
	            default: false
	        },
	        showChange: function showChange() {},
	        show: {
	            type: Boolean,
	            default: false
	        },
	        type: '', //loading preload  confirm alert center top bottom popup popover tips toast 在具体实例中已定义，扩展时可自定义名称
	        title: '',
	        content: '', //content为str或html,如果为function则需要返回str或html
	        role: String, //弹层位置
	        //是否存在mask
	        mask: {
	            type: Boolean,
	            default: true
	        },
	        //点击mask关闭
	        maskclose: {
	            type: Boolean,
	            default: true
	        },
	        //弹层标题栏
	        hastitle: {
	            default: true,
	            type: Boolean
	        },
	        onyes: {
	            default: function _default() {},
	            type: Function
	        },
	        oncancel: {
	            default: function _default() {},
	            type: Function
	        },
	        disabled: {
	            default: false,
	            type: Boolean
	        }
	    },
	    data: function data() {
	        return {
	            innerShow: this.show,
	            tripos: 'tri-bottom'
	        };
	    },
	
	    watch: {
	        innerShow: function innerShow(val) {
	            // this.show = val
	            this.$emit('update:show', val);
	        },
	        show: function show(val) {
	            this.innerShow = val;
	        }
	    },
	    methods: {
	        onYes: function onYes(e) {
	            if (this.disabled) return;
	            this.onyes();
	            this.hide();
	        },
	        onCancel: function onCancel(e) {
	            this.oncancel(e);
	            this.hide();
	        },
	        hide: function hide() {
	            this.innerShow = false;
	        }
	    }
	};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "modal"
	  }, [_c('transition', {
	    attrs: {
	      "name": "fade",
	      "mode": "out-in"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.innerShow),
	      expression: "innerShow"
	    }],
	    class: _vm.mask ? 'modal-mask' : 'modal-nomask'
	  })]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.type,
	      "mode": "out-in"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.innerShow),
	      expression: "innerShow"
	    }],
	    class: ("modal-wrapper modal-" + _vm.type),
	    on: {
	      "click": function($event) {
	        if ($event.target !== $event.currentTarget) { return null; }
	        _vm.maskclose ? _vm.onCancel() : void 0;
	      }
	    }
	  }, [_c('div', {
	    class: ("modal-layout  " + ((_vm.type==='popover' || _vm.type==='tips') && _vm.tripos ? _vm.tripos : ''))
	  }, [(_vm.close === true) ? _c('span', {
	    staticClass: "icon icon-close",
	    on: {
	      "click": _vm.onCancel
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "modal-inner"
	  }, [_vm._t("loading"), _vm._v(" "), (_vm.hastitle) ? _c('div', {
	    staticClass: "modal-title"
	  }, [_vm._t("title", [(_vm.type === 'bottom' || _vm.type === 'popup') ? _c('span', {
	    staticClass: "btn modal-btn btn-link modal-btn-no",
	    on: {
	      "click": _vm.onCancel
	    }
	  }, [_vm._v("取消")]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.type === 'bottom' || _vm.type === 'popup') ? _c('span', {
	    staticClass: "btn modal-btn btn-link modal-btn-yes",
	    on: {
	      "click": _vm.onYes
	    }
	  }, [_vm._v("确定")]) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "modal-text"
	  }, [_vm._t("default", [_vm._v(_vm._s(_vm.content))])], 2)], 2), _vm._v(" "), (_vm.type === 'alert' || _vm.type === 'confirm') ? _c('div', {
	    staticClass: "modal-buttons"
	  }, [_vm._t("btns", [(_vm.type !== 'confirm') ? _c('span', {
	    staticClass: "modal-button modal-btn modal-btn-def modal-button-bold",
	    on: {
	      "click": _vm.onCancel
	    }
	  }, [_vm._v("取消")]) : _vm._e(), _vm._v(" "), _c('span', {
	    class: ("modal-button modal-btn modal-btn-yes modal-button-bold " + (_vm.disabled ? 'modal-button-disabled' : '')),
	    on: {
	      "click": _vm.onYes
	    }
	  }, [_vm._v("确定")])])], 2) : _vm._e()])])])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-20677808", module.exports)
	  }
	}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('modal', {
	    staticClass: "ui-select",
	    attrs: {
	      "show": _vm.innerShow,
	      "type": "bottom",
	      "title": _vm.title,
	      "onyes": _vm.onyes,
	      "oncancel": _vm.oncancel
	    },
	    on: {
	      "update:show": function($event) {
	        _vm.innerShow = $event
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3ad76e9e", module.exports)
	  }
	}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(80);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _date = __webpack_require__(39);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/** 
	 * 对日期进行格式化， 
	 * @param date 要格式化的日期 
	 * @param format 进行格式化的模式字符串
	 *     支持的模式字母有： 
	 *     y:年, 
	 *     M:年中的月份(1-12), 
	 *     d:月份中的天(1-31), 
	 *     h:小时(0-23), 
	 *     m:分(0-59), 
	 *     s:秒(0-59), 
	 *     S:毫秒(0-999),
	 *     q:季度(1-4)
	 *     W:周几
	 * @return String
	 * @author yanis.wang@gmail.com
	 */
	_vue2.default.filter('dateFormat', _date.dateFormat);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('vselect', {
	    attrs: {
	      "title": "选择交车时间",
	      "show": _vm.innerShow,
	      "onyes": _vm.onyes
	    },
	    on: {
	      "update:show": function($event) {
	        _vm.innerShow = $event
	      }
	    }
	  }, [_c('voption', {
	    ref: "date",
	    staticClass: "v-options",
	    attrs: {
	      "height": _vm.height,
	      "step": _vm.step,
	      "data": _vm.datestr,
	      "width": "35%",
	      "onpanend": _vm.checkRange
	    }
	  }), _vm._v(" "), _c('voption', {
	    ref: "ampm",
	    staticClass: "v-options",
	    attrs: {
	      "height": _vm.height,
	      "step": _vm.step,
	      "data": _vm.ampm,
	      "width": "20%",
	      "onpanend": _vm.checkRange
	    }
	  }), _vm._v(" "), _c('voption', {
	    ref: "hour",
	    staticClass: "v-options",
	    attrs: {
	      "height": _vm.height,
	      "step": _vm.step,
	      "data": _vm.hour,
	      "width": "20%",
	      "onpanend": _vm.checkRange
	    }
	  }), _vm._v(" "), _c('voption', {
	    ref: "minute",
	    staticClass: "v-options",
	    attrs: {
	      "height": _vm.height,
	      "step": _vm.step,
	      "data": _vm.minute,
	      "width": "25%",
	      "onpanend": _vm.checkRange
	    }
	  })], 1), _vm._v(" "), _c('modal', {
	    attrs: {
	      "show": _vm.toastShow,
	      "hastitle": false,
	      "type": "toast",
	      "time": 1500,
	      "mask": false
	    },
	    on: {
	      "update:show": function($event) {
	        _vm.toastShow = $event
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.toastContent))])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-74762470", module.exports)
	  }
	}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(111)
	
	/* script */
	__vue_exports__ = __webpack_require__(113)
	
	/* template */
	var __vue_template__ = __webpack_require__(114)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\flash.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5ab113cb"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5ab113cb", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5ab113cb", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] flash.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(112);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5ab113cb&scoped=true!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./flash.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5ab113cb&scoped=true!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./flash.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.modal-toast[data-v-5ab113cb] {\n  position: fixed;\n  width: 60%;\n  left: 20%;\n  text-align: center;\n  color: #fff;\n  z-index: 100000;\n  transition: all .3s ease;\n  bottom: 35%;\n}\n.modal-toast .icon[data-v-5ab113cb] {\n    -webkit-font-smoothing: antialiased;\n    font-size: 15px;\n    padding: 8px 0;\n    border-radius: 6px;\n    width: 100%;\n    display: block;\n    pointer-events: fill;\n}\n.modal-toast .icon[data-v-5ab113cb]:before {\n      font-size: 18px;\n      position: relative;\n      top: 1px;\n      margin-right: 5px;\n}\n.modal-toast.modal-toast-info .icon[data-v-5ab113cb] {\n    background: rgba(0, 0, 0, 0.7);\n}\n.modal-toast.modal-toast-success .icon[data-v-5ab113cb] {\n    background-color: forestgreen;\n}\n.modal-toast.modal-toast-error .icon[data-v-5ab113cb] {\n    background-color: orangered;\n}\n", "", {"version":3,"sources":["/./src/flash.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;CAAE;AACd;IACE,oCAAoC;IACpC,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,qBAAqB;CAAE;AACvB;MACE,gBAAgB;MAChB,mBAAmB;MACnB,SAAS;MACT,kBAAkB;CAAE;AACxB;IACE,+BAA+B;CAAE;AACnC;IACE,8BAA8B;CAAE;AAClC;IACE,4BAA4B;CAAE","file":"flash.vue","sourcesContent":[".modal-toast {\n  position: fixed;\n  width: 60%;\n  left: 20%;\n  text-align: center;\n  color: #fff;\n  z-index: 100000;\n  transition: all .3s ease;\n  bottom: 35%; }\n  .modal-toast .icon {\n    -webkit-font-smoothing: antialiased;\n    font-size: 15px;\n    padding: 8px 0;\n    border-radius: 6px;\n    width: 100%;\n    display: block;\n    pointer-events: fill; }\n    .modal-toast .icon:before {\n      font-size: 18px;\n      position: relative;\n      top: 1px;\n      margin-right: 5px; }\n  .modal-toast.modal-toast-info .icon {\n    background: rgba(0, 0, 0, 0.7); }\n  .modal-toast.modal-toast-success .icon {\n    background-color: forestgreen; }\n  .modal-toast.modal-toast-error .icon {\n    background-color: orangered; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 113 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        type: {
	            type: String,
	            default: 'info'
	        },
	        time: {
	            type: Number,
	            default: 3000
	        },
	        show: {
	            default: false
	        },
	        content: String
	    },
	    watch: {
	        show: function show() {
	            var t,
	                that = this;
	            if (this.show) {
	                t = setTimeout(function () {
	                    that.show = false;
	                }, Number(this.time));
	            } else {
	                clearTimeout(t);
	            }
	        }
	    }
	};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "modal-toast modal-toast-info"
	  }, [_c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    class: ("icon icon-" + (_vm.type==='info' ? 'info' : (_vm.type==='error'?'close': 'check')) + " icon-in")
	  }, [_vm._t("default", [_vm._v(_vm._s(_vm.content))])], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5ab113cb", module.exports)
	  }
	}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(116)
	
	/* script */
	__vue_exports__ = __webpack_require__(118)
	
	/* template */
	var __vue_template__ = __webpack_require__(119)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\hd.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5d11919e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5d11919e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] hd.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(117);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5d11919e!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./hd.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5d11919e!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./hd.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n@font-face {\n  font-family: Ratchicons;\n  font-weight: normal;\n  font-style: normal;\n  src: url(" + __webpack_require__(15) + ");\n  src: url(" + __webpack_require__(15) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(16) + ") format(\"woff\"), url(" + __webpack_require__(17) + ") format(\"truetype\"), url(" + __webpack_require__(18) + "#svgFontName) format(\"svg\");\n}\n.icon {\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: 24px;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n}\n.icon-back:before {\n  content: '\\E80A';\n}\n.icon-bars:before {\n  content: '\\E80E';\n}\n.icon-caret:before {\n  content: '\\E80F';\n}\n.icon-check:before {\n  content: '\\E810';\n}\n.icon-close:before {\n  content: '\\E811';\n}\n.icon-code:before {\n  content: '\\E812';\n}\n.icon-compose:before {\n  content: '\\E813';\n}\n.icon-download:before {\n  content: '\\E815';\n}\n.icon-edit:before {\n  content: '\\E829';\n}\n.icon-forward:before {\n  content: '\\E82A';\n}\n.icon-gear:before {\n  content: '\\E821';\n}\n.icon-home:before {\n  content: '\\E82B';\n}\n.icon-info:before {\n  content: '\\E82C';\n}\n.icon-list:before {\n  content: '\\E823';\n}\n.icon-more-vertical:before {\n  content: '\\E82E';\n}\n.icon-more:before {\n  content: '\\E82F';\n}\n.icon-pages:before {\n  content: '\\E824';\n}\n.icon-pause:before {\n  content: '\\E830';\n}\n.icon-person:before {\n  content: '\\E832';\n}\n.icon-play:before {\n  content: '\\E816';\n}\n.icon-plus:before {\n  content: '\\E817';\n}\n.icon-refresh:before {\n  content: '\\E825';\n}\n.icon-search:before {\n  content: '\\E819';\n}\n.icon-share:before {\n  content: '\\E81A';\n}\n.icon-sound:before {\n  content: '\\E827';\n}\n.icon-sound2:before {\n  content: '\\E828';\n}\n.icon-sound3:before {\n  content: '\\E80B';\n}\n.icon-sound4:before {\n  content: '\\E80C';\n}\n.icon-star-filled:before {\n  content: '\\E81B';\n}\n.icon-star:before {\n  content: '\\E81C';\n}\n.icon-stop:before {\n  content: '\\E81D';\n}\n.icon-trash:before {\n  content: '\\E81E';\n}\n.icon-up-nav:before {\n  content: '\\E81F';\n}\n.icon-up:before {\n  content: '\\E80D';\n}\n.icon-right-nav:before {\n  content: '\\E818';\n}\n.icon-right:before {\n  content: '\\E826';\n}\n.icon-down-nav:before {\n  content: '\\E814';\n}\n.icon-down:before {\n  content: '\\E820';\n}\n.icon-left-nav:before {\n  content: '\\E82D';\n}\n.icon-left:before {\n  content: '\\E822';\n}\n\n/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.bar {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  height: 2rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n  backface-visibility: hidden;\n}\n\n/*\t\t.bar-header-secondary {\t\t  top: $bar-base-height;\t\t}\t\t.bar-footer {\t\t  bottom: 0;\t\t}\t\t.bar-footer-secondary {\t\t  bottom: $bar-base-height;\t\t}\t\t.bar-footer-secondary-tab {\t\t  bottom: $bar-tab-height;\t\t}\t\t.bar-footer,\t\t.bar-footer-secondary,\t\t.bar-footer-secondary-tab {\t\t  border-top: $border-default;\t\t  border-bottom: 0;\t\t}\t\t// Nav bar\t\t// --------------------------------------------------\t\t.bar-nav {\t\t  top: 0;\t\t} */\n.title {\n  width: 100%;\n  padding: 0;\n  font-size: 0.66667rem;\n  font-weight: 500;\n  line-height: 2rem;\n  color: #000;\n  text-align: center;\n  white-space: nowrap;\n  top: 0;\n}\n.title a {\n  color: inherit;\n}\n.bar .icon,\n.bar .btn {\n  position: absolute;\n  z-index: 20;\n  text-align: center;\n}\n.bar .icon.pull-right,\n  .bar .btn.pull-right {\n    right: 0;\n}\n.bar .icon {\n  width: 2rem;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 1rem;\n}\n.bar .btn .icon {\n  top: 0.125rem;\n  padding: 0;\n}\n.bar .title .icon {\n  padding: 0;\n}\n.bar .title .icon.icon-caret {\n    top: 0.16667rem;\n    margin-left: -r(5px);\n}\n.title-ms {\n  display: block;\n  width: 100%;\n}\n.title-ms .title,\n  .title-ms .subtitle {\n    margin: 0;\n    width: 100%;\n    text-align: center;\n}\n.title-ms .title {\n    font-size: 0.75rem;\n    height: 1.2rem;\n    line-height: 1.2rem;\n}\n.title-ms .subtitle {\n    font-size: 0.58333rem;\n    height: 0.8rem;\n    line-height: 0.4rem;\n    color: #0B5684;\n}\n.bar-tab {\n  display: table;\n  bottom: 0;\n  width: 100%;\n  height: 2rem;\n  padding: 0;\n  table-layout: fixed;\n  border-top: 1px solid #ddd;\n  border-bottom: 0;\n}\n.bar-tab .tab-item {\n    display: table-cell;\n    width: 1%;\n    height: 2rem;\n    color: #929292;\n    text-align: center;\n    vertical-align: middle;\n}\n.bar-tab .tab-item.active, .bar-tab .tab-item:active {\n      color: #428bca;\n}\n.bar-tab .tab-item .icon {\n      top: 0.125rem;\n      width: 1rem;\n      height: 1rem;\n      padding-top: 0;\n      padding-bottom: 0;\n}\n.bar-tab .tab-item .icon ~ .tab-label {\n        display: block;\n        font-size: 0.45833rem;\n}\n.bar .btn {\n  top: 0.29167rem;\n  z-index: 20;\n  padding: 0.25rem 0.5rem 0.29167rem;\n  margin: 0 0.41667rem;\n  font-weight: 400;\n}\n.bar .btn-link {\n  top: 0;\n  padding: 0;\n  font-size: 0.66667rem;\n  line-height: 2rem;\n  color: #428bca;\n  border: 0;\n}\n.bar .btn-link:active, .bar .btn-link.active {\n    color: #3071a9;\n}\n.bar .btn-block {\n  top: 0.25rem;\n  padding: 0.29167rem 0;\n  margin-bottom: 0;\n  font-size: 0.66667rem;\n}\n.bar .btn-nav.pull-left {\n  margin-left: -r(5px);\n}\n.bar .btn-nav.pull-left .icon-left-nav {\n    margin-right: -r(3px);\n}\n.bar .btn-nav.pull-right {\n  margin-right: -r(5px);\n}\n.bar .btn-nav.pull-right .icon-right-nav {\n    margin-left: -r(3px);\n}\n.bar input[type=\"search\"] {\n  height: 1.20833rem;\n  margin: 0.25rem 0;\n}\n.bar .segmented-control {\n  top: 0.29167rem;\n  margin: 0 auto;\n  width: 60%;\n}\na,\n.btn-link,\n.active,\n.modal-button {\n  color: #099fde;\n}\n.bar {\n  background-color: #099fde;\n}\n.bar a {\n    color: #fff;\n}\n.bar .title {\n    color: #fff;\n}\n.ios {\n  height: 2.6rem;\n}\n.ios .title {\n    line-height: 3.2rem;\n}\n.ios .btn-link {\n    line-height: 2rem;\n}\n.ios .icon {\n    top: 0.725rem;\n}\n", "", {"version":3,"sources":["/./src/hd.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,mCAAmC;EACnC,4MAAgO;CAAE;AAEpO;EACE,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;EACf,sBAAsB;EACtB,oCAAoC;CAAE;AAExC;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;;AAErB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,gBAAgB;EAChB,SAAS;EACT,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,4BAA4B;CAAE;;AAEhC,waAAwa;AACxa;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,OAAO;CAAE;AAEX;EACE,eAAe;CAAE;AAEnB;;EAEE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;CAAE;AACrB;;IAEE,SAAS;CAAE;AAEf;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,gBAAgB;CAAE;AAEpB;EACE,cAAc;EACd,WAAW;CAAE;AAEf;EACE,WAAW;CAAE;AACb;IACE,gBAAgB;IAChB,qBAAqB;CAAE;AAE3B;EACE,eAAe;EACf,YAAY;CAAE;AACd;;IAEE,UAAU;IACV,YAAY;IACZ,mBAAmB;CAAE;AACvB;IACE,mBAAmB;IACnB,eAAe;IACf,oBAAoB;CAAE;AACxB;IACE,sBAAsB;IACtB,eAAe;IACf,oBAAoB;IACpB,eAAe;CAAE;AAErB;EACE,eAAe;EACf,UAAU;EACV,YAAY;EACZ,aAAa;EACb,WAAW;EACX,oBAAoB;EACpB,2BAA2B;EAC3B,iBAAiB;CAAE;AACnB;IACE,oBAAoB;IACpB,UAAU;IACV,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,uBAAuB;CAAE;AACzB;MACE,eAAe;CAAE;AACnB;MACE,cAAc;MACd,YAAY;MACZ,aAAa;MACb,eAAe;MACf,kBAAkB;CAAE;AACpB;QACE,eAAe;QACf,sBAAsB;CAAE;AAEhC;EACE,gBAAgB;EAChB,YAAY;EACZ,mCAAmC;EACnC,qBAAqB;EACrB,iBAAiB;CAAE;AAErB;EACE,OAAO;EACP,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,UAAU;CAAE;AACZ;IACE,eAAe;CAAE;AAErB;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;CAAE;AAE1B;EACE,qBAAqB;CAAE;AACvB;IACE,sBAAsB;CAAE;AAE5B;EACE,sBAAsB;CAAE;AACxB;IACE,qBAAqB;CAAE;AAE3B;EACE,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;CAAE;AAEf;;;;EAIE,eAAe;CAAE;AAEnB;EACE,0BAA0B;CAAE;AAC5B;IACE,YAAY;CAAE;AAChB;IACE,YAAY;CAAE;AAElB;EACE,eAAe;CAAE;AACjB;IACE,oBAAoB;CAAE;AACxB;IACE,kBAAkB;CAAE;AACtB;IACE,cAAc;CAAE","file":"hd.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n@font-face {\n  font-family: Ratchicons;\n  font-weight: normal;\n  font-style: normal;\n  src: url(\"./fonts/ratchicons.eot\");\n  src: url(\"./fonts/ratchicons.eot?#iefix\") format(\"embedded-opentype\"), url(\"./fonts/ratchicons.woff\") format(\"woff\"), url(\"./fonts/ratchicons.ttf\") format(\"truetype\"), url(\"./fonts/ratchicons.svg#svgFontName\") format(\"svg\"); }\n\n.icon {\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: 24px;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased; }\n\n.icon-back:before {\n  content: '\\e80a'; }\n\n.icon-bars:before {\n  content: '\\e80e'; }\n\n.icon-caret:before {\n  content: '\\e80f'; }\n\n.icon-check:before {\n  content: '\\e810'; }\n\n.icon-close:before {\n  content: '\\e811'; }\n\n.icon-code:before {\n  content: '\\e812'; }\n\n.icon-compose:before {\n  content: '\\e813'; }\n\n.icon-download:before {\n  content: '\\e815'; }\n\n.icon-edit:before {\n  content: '\\e829'; }\n\n.icon-forward:before {\n  content: '\\e82a'; }\n\n.icon-gear:before {\n  content: '\\e821'; }\n\n.icon-home:before {\n  content: '\\e82b'; }\n\n.icon-info:before {\n  content: '\\e82c'; }\n\n.icon-list:before {\n  content: '\\e823'; }\n\n.icon-more-vertical:before {\n  content: '\\e82e'; }\n\n.icon-more:before {\n  content: '\\e82f'; }\n\n.icon-pages:before {\n  content: '\\e824'; }\n\n.icon-pause:before {\n  content: '\\e830'; }\n\n.icon-person:before {\n  content: '\\e832'; }\n\n.icon-play:before {\n  content: '\\e816'; }\n\n.icon-plus:before {\n  content: '\\e817'; }\n\n.icon-refresh:before {\n  content: '\\e825'; }\n\n.icon-search:before {\n  content: '\\e819'; }\n\n.icon-share:before {\n  content: '\\e81a'; }\n\n.icon-sound:before {\n  content: '\\e827'; }\n\n.icon-sound2:before {\n  content: '\\e828'; }\n\n.icon-sound3:before {\n  content: '\\e80b'; }\n\n.icon-sound4:before {\n  content: '\\e80c'; }\n\n.icon-star-filled:before {\n  content: '\\e81b'; }\n\n.icon-star:before {\n  content: '\\e81c'; }\n\n.icon-stop:before {\n  content: '\\e81d'; }\n\n.icon-trash:before {\n  content: '\\e81e'; }\n\n.icon-up-nav:before {\n  content: '\\e81f'; }\n\n.icon-up:before {\n  content: '\\e80d'; }\n\n.icon-right-nav:before {\n  content: '\\e818'; }\n\n.icon-right:before {\n  content: '\\e826'; }\n\n.icon-down-nav:before {\n  content: '\\e814'; }\n\n.icon-down:before {\n  content: '\\e820'; }\n\n.icon-left-nav:before {\n  content: '\\e82d'; }\n\n.icon-left:before {\n  content: '\\e822'; }\n\n/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.bar {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  height: 2rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n  backface-visibility: hidden; }\n\n/*\t\t.bar-header-secondary {\t\t  top: $bar-base-height;\t\t}\t\t.bar-footer {\t\t  bottom: 0;\t\t}\t\t.bar-footer-secondary {\t\t  bottom: $bar-base-height;\t\t}\t\t.bar-footer-secondary-tab {\t\t  bottom: $bar-tab-height;\t\t}\t\t.bar-footer,\t\t.bar-footer-secondary,\t\t.bar-footer-secondary-tab {\t\t  border-top: $border-default;\t\t  border-bottom: 0;\t\t}\t\t// Nav bar\t\t// --------------------------------------------------\t\t.bar-nav {\t\t  top: 0;\t\t} */\n.title {\n  width: 100%;\n  padding: 0;\n  font-size: 0.66667rem;\n  font-weight: 500;\n  line-height: 2rem;\n  color: #000;\n  text-align: center;\n  white-space: nowrap;\n  top: 0; }\n\n.title a {\n  color: inherit; }\n\n.bar .icon,\n.bar .btn {\n  position: absolute;\n  z-index: 20;\n  text-align: center; }\n  .bar .icon.pull-right,\n  .bar .btn.pull-right {\n    right: 0; }\n\n.bar .icon {\n  width: 2rem;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 1rem; }\n\n.bar .btn .icon {\n  top: 0.125rem;\n  padding: 0; }\n\n.bar .title .icon {\n  padding: 0; }\n  .bar .title .icon.icon-caret {\n    top: 0.16667rem;\n    margin-left: -r(5px); }\n\n.title-ms {\n  display: block;\n  width: 100%; }\n  .title-ms .title,\n  .title-ms .subtitle {\n    margin: 0;\n    width: 100%;\n    text-align: center; }\n  .title-ms .title {\n    font-size: 0.75rem;\n    height: 1.2rem;\n    line-height: 1.2rem; }\n  .title-ms .subtitle {\n    font-size: 0.58333rem;\n    height: 0.8rem;\n    line-height: 0.4rem;\n    color: #0B5684; }\n\n.bar-tab {\n  display: table;\n  bottom: 0;\n  width: 100%;\n  height: 2rem;\n  padding: 0;\n  table-layout: fixed;\n  border-top: 1px solid #ddd;\n  border-bottom: 0; }\n  .bar-tab .tab-item {\n    display: table-cell;\n    width: 1%;\n    height: 2rem;\n    color: #929292;\n    text-align: center;\n    vertical-align: middle; }\n    .bar-tab .tab-item.active, .bar-tab .tab-item:active {\n      color: #428bca; }\n    .bar-tab .tab-item .icon {\n      top: 0.125rem;\n      width: 1rem;\n      height: 1rem;\n      padding-top: 0;\n      padding-bottom: 0; }\n      .bar-tab .tab-item .icon ~ .tab-label {\n        display: block;\n        font-size: 0.45833rem; }\n\n.bar .btn {\n  top: 0.29167rem;\n  z-index: 20;\n  padding: 0.25rem 0.5rem 0.29167rem;\n  margin: 0 0.41667rem;\n  font-weight: 400; }\n\n.bar .btn-link {\n  top: 0;\n  padding: 0;\n  font-size: 0.66667rem;\n  line-height: 2rem;\n  color: #428bca;\n  border: 0; }\n  .bar .btn-link:active, .bar .btn-link.active {\n    color: #3071a9; }\n\n.bar .btn-block {\n  top: 0.25rem;\n  padding: 0.29167rem 0;\n  margin-bottom: 0;\n  font-size: 0.66667rem; }\n\n.bar .btn-nav.pull-left {\n  margin-left: -r(5px); }\n  .bar .btn-nav.pull-left .icon-left-nav {\n    margin-right: -r(3px); }\n\n.bar .btn-nav.pull-right {\n  margin-right: -r(5px); }\n  .bar .btn-nav.pull-right .icon-right-nav {\n    margin-left: -r(3px); }\n\n.bar input[type=\"search\"] {\n  height: 1.20833rem;\n  margin: 0.25rem 0; }\n\n.bar .segmented-control {\n  top: 0.29167rem;\n  margin: 0 auto;\n  width: 60%; }\n\na,\n.btn-link,\n.active,\n.modal-button {\n  color: #099fde; }\n\n.bar {\n  background-color: #099fde; }\n  .bar a {\n    color: #fff; }\n  .bar .title {\n    color: #fff; }\n\n.ios {\n  height: 2.6rem; }\n  .ios .title {\n    line-height: 3.2rem; }\n  .ios .btn-link {\n    line-height: 2rem; }\n  .ios .icon {\n    top: 0.725rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 118 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        title: String,
	        subtitle: String,
	        onleft: {
	            type: Function,
	            default: function _default() {
	                history.go(-1);
	            }
	        },
	        onright: {
	            type: Function,
	            default: function _default() {
	                // console.warn('rewrite the "onright" events pls, otherwise event do nothing');
	            }
	        },
	        ios: {
	            default: false,
	            type: Boolean
	        }
	    }
	};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', {
	    class: ("bar bar-nav " + (_vm.ios ? 'ios' : ''))
	  }, [_vm._t("left", [_c('a', {
	    staticClass: "icon icon-left-nav",
	    on: {
	      "click": _vm.onleft
	    }
	  })]), _vm._v(" "), _vm._t("right", [_c('a', {
	    staticClass: "icon icon-bars pull-right",
	    on: {
	      "click": _vm.onright
	    }
	  })]), _vm._v(" "), _vm._t("default", [_c('div', {
	    staticClass: "title-wrapper",
	    class: {
	      'title-ms': _vm.subtitle
	    }
	  }, [_c('h1', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.subtitle) ? _c('h2', {
	    staticClass: "subtitle"
	  }, [_vm._v(_vm._s(_vm.subtitle))]) : _vm._e()])])], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5d11919e", module.exports)
	  }
	}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(121)
	
	/* template */
	var __vue_template__ = __webpack_require__(122)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\listdata.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-09524886", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-09524886", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] listdata.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _badge = __webpack_require__(1);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _icon = __webpack_require__(12);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _btn = __webpack_require__(8);
	
	var _btn2 = _interopRequireDefault(_btn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    components: { icon: _icon2.default, badge: _badge2.default, btn: _btn2.default },
	    props: {
	        list: {
	            type: Array,
	            default: []
	        },
	        media: {
	            type: String,
	            default: '' //or img
	        },
	        card: {
	            type: Boolean,
	            default: false
	        },
	        arrow: {
	            type: Boolean,
	            default: true
	        }
	    },
	    data: function data() {
	        return {
	            collapseState: false
	        };
	    },
	
	    watch: {
	        'collapseState': function collapseState() {}
	    },
	    methods: {
	        collapseListGroup: function collapseListGroup(event) {
	            var elem = event.currentTarget,
	                classes = elem.className;
	            if (!~classes.indexOf('table-view-divider') || !~classes.indexOf('table-view-collapse')) {
	                return;
	            }
	
	            var compon = this;
	            next(elem);
	            //获取相连的满足相同条件的元素
	            function next(element) {
	                var nextElem = element.nextSibling;
	                if (nextElem.tagName === 'LI' && !!~nextElem.className.indexOf('table-view-cell')) {
	                    if (!compon.collapseState) {
	                        nextElem.style.display = 'none';
	                        compon.collapseState = true;
	                    } else {
	                        nextElem.style.display = 'block';
	                        compon.collapseState = false;
	                    }
	                } else {
	                    return;
	                }
	                next(nextElem);
	            }
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	//@todo list change to <list><item></item></list>

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "table-view",
	    class: {
	      'card': _vm.card, 'table-noarrow': !_vm.arrow
	    }
	  }, _vm._l((_vm.list), function(it) {
	    return _c('li', {
	      key: it.id,
	      class: {
	        'table-view-cell': !it.isDivider, 'table-view-divider': it.isDivider, 'table-view-collapse': it.collapse, 'table-view-full': (it.badge === void 0)
	      },
	      on: {
	        "click": _vm.collapseListGroup
	      }
	    }, [(it.isDivider) ? _c('span', [_vm._v(_vm._s(it.title))]) : _vm._e(), _vm._v(" "), (!it.isDivider) ? _c('router-link', {
	      staticClass: "navigate-right",
	      attrs: {
	        "to": it.link ? it.link : ''
	      }
	    }, [(it.badge) ? _c('badge', [_vm._v(_vm._s(it.badge))]) : _vm._e(), _vm._v(" "), (_vm.media === 'img' && it.img) ? _c('img', {
	      staticClass: "media-object pull-left",
	      attrs: {
	        "src": it.img
	      }
	    }) : _vm._e(), _vm._v(" "), (_vm.media === 'icon') ? _c('icon', {
	      staticClass: "media-object  pull-left",
	      attrs: {
	        "icon": it.icon
	      }
	    }) : _vm._e(), _vm._v(" "), (_vm.media === 'btn') ? _c('btn', [_vm._v(_vm._s(it.btn))]) : _vm._e(), _vm._v(" "), _c('div', {
	      staticClass: "media-body"
	    }, [_c('span', [_vm._v(_vm._s(it.title))]), _vm._v(" "), (it.content) ? _c('p', [_vm._v(_vm._s(it.content))]) : _vm._e()])], 1) : _vm._e()], 1)
	  }))
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-09524886", module.exports)
	  }
	}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(124)
	
	/* script */
	__vue_exports__ = __webpack_require__(126)
	
	/* template */
	var __vue_template__ = __webpack_require__(127)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\loading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-57eb3a57", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-57eb3a57", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-57eb3a57!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-57eb3a57!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.loading-enter-active,\n.loading-leave-active {\n  text-align: center;\n}\n.modal-loading .modal-layout,\n.modal-preload .modal-layout {\n  overflow: hidden;\n  width: 5rem;\n}\n.modal-loading .modal-layout .modal-inner,\n  .modal-preload .modal-layout .modal-inner {\n    background-color: transparent;\n    width: 5rem;\n    height: 5rem;\n    text-align: center;\n}\n.modal-loading .modal-layout .modal-text,\n  .modal-preload .modal-layout .modal-text {\n    position: relative;\n    padding: 0;\n}\n.modal-preload {\n  position: static;\n  background-color: transparent;\n  transform: scale(0.8);\n}\n\n/* loading layer */\n.modal-loading .modal-layout {\n  height: 5rem;\n}\n.modal-loading .modal-inner {\n  padding: 0;\n  display: inline-block;\n  background-color: #FFF !important;\n  border-radius: 0.54167rem;\n}\n.loading-layer {\n  z-index: 10000;\n  color: #666;\n  font-size: 0.5rem;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n.loading-layer .loading-img {\n    width: 3.33333rem;\n    height: 3.33333rem;\n    margin: 0.41667rem auto 0.08333rem;\n    position: relative;\n}\n.loading-layer .loading-cycle,\n  .loading-layer .loading-cycle-before {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACMCAMAAAC6YLfwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAALzj+bzj+cHo+rfi+cDl+rzj+abb+Lnj+rbi+r/l+rzj+b3k+bzj+cDn+bzk+b7l+bvj+rzk+bzj+b3l+rzj+bzj+bzj+cz3+b7m+b3k+r7m+bzj+bzj+bzj+b7l+b3k+bzj+bzj+bzj+b7m+bzk+b7m+rzj+bzj+bzj+YbP+Lzj+YbP+Lzj+bzj+b3l+bzj+YbP+Lzj+YbP+IbP+Lzj+bzj+YbP+IXP+Lzj+XzL9IXP+Lzj+bzj+bzj+Wu14Lzj+YXP+IbP+Lzj+bzj+bzj+bzj+bzj+YfP+Lzj+YbP+IbP+Lzj+bzj+cDo+bzj+YfQ+IbP+IbP+MDo+bzj+bzk+c33+bzj+bzj+f///4bP+IbP+IbP+IfQ+IbP+Lzj+bzj+YbP+Lzj+YbP+HLK84bP+IbP+M33+c33+YnQ+YHN9s33+b7v+c33+c33+f3+/zm75IbP+C+54c33+f///////4bP+Giy33W/60G95s33+cz3+c33+c33+c33+f////////////7//////9H1+2+55WW45F+34////////////////833+aTe+Wy24+X1/bXq+XzG8f///67m+cTy+a/m+XG75z285XfA63bA61K24cLw+Lvn+8Ts+f///3/J8r3o+7/n+YbP+P///7zj+c33+Wiy3yFumHG+7P/I5qPc9IPN9vL9/ojQ+P/I4YvS+Mz3+XzG8Mf0+cDw+ZTW+YHL9W234zF+qJjY+XG75q7k93PA7XnE78Ty+cr1+TOAq7fr+X/J87Lo+aPb+nbA6o7T+J3b+are+rvt+USQupDU+XbC7qrj+YXO+Nzx/Sx5o/r9/+f8/dTu/f3+/02Ywl6q0z2KtCW23rPm9qTg+MrL7jeDrrnk+1ahy/rI5yZznb3l++75/pra+WDG7tj5++r3/urJ58Dn+/LJ5vT7/2Sv2GnI8T+95qjf9Z/e+LHg+6DO9Mnq/OX1/pnO9avN85HP97Ti+3fL9LXM8NvK6XDK8k/B6VTC66Da9NP4+pjU+N7YRUMAAACidFJOUwDx/REFDOUBAggb+xf+JiIrH8rYNGf1xP5A4Tt37upID6xM+FXOL8B/be5xat5iRJHHqP03sYnPibwa2aNqUP7RSJOG+Zbbn6O1DrVZjV7Vrh7oN3qCmuiYynP0LOBZuRQkm78UP3jM2IBQ9v3mZ4vS+frgSO9g4eyqu3btfrAdPNmCMI2SrMmtbbyYqcZ4luS+qNfti9popNtC6v7QtPz5xTa0CHwAABJkSURBVHja5Z13WBTnvsdfYLYvy7KwrHSWXqRIABEpSlVpFhDUGFFj98RjTHJz0ntOL7ecc++5/+3O4okcghRp0hYQQdFYsSf2rmkak9x789z3nQFclplldrYMkO+TPJJlzb7z2d/7a+/7zgBggUQABACeGFS4Ap4r+pkbLUp4ZcuC/FlzV0dGLl09e/bs/AWZM+evteMABABIgVzuHeGpjItQ54Wry31yCouClekyIBbZk4QoYeXipRpKReZvTBDYZRBiUYF7Ul65n8ohyA139MBxBxz3dcRz3RyLS8NLlctAAM8ew1i7cv0qjUmtTl5i4zFUCGMLUtVuHmW4M04lX77ELy6qQCy08TiWbJytYaBnFj9rw0HIA9MS5+C+w5cuQXbhV4aX8XEHPmEjSBCTpLjEpnNGMD//GfJya6onJLIgxTaDcHGNy8Ojh1E44IpcRVxIqU9huk9pYFphTNQadY6Kn813JH69ELMdDOFzc0kUB7/rOWQaRU3zua6O9v+wgdMSx+SESEgUfnh8cYlPsDQWOLkCkQhgIiBwAkK5q3hZeFaJOhpXqEJtNlkEJIya744e7TGJovrA1cGudh1U3R+sbKsCaVIeOUcc8DCVMkbmJAYYEWGMJa2QukSli21mGgmz0KVePXHsykGTZtHwsLu+Tjesjn9zsuYY3AOjSX8RpEiN8Rc5AVMRDNqFzWaKKBP5jJ6jWu2JAyZQ9EGz6NAZaMafPa01BB4IVxMwfPHCQp4ccKgNq+HVNkMY2st0KA5BFPUde3XG+ncrDUEWmIoTPmNNnr+USxZAsHEnvODLx7Tak19S+gpkFfV141FAtbfOtMoYYtXziFmiipO62OeqnV7b9QLVVF+UD6/5EDIN7UVjEnB+nOve3t5BiQKqv7l6p+UJiFAQ44uyCQk/wh8I7GQE/tt0bywPHfdyCkq7mq8gGl8bzo4DDc3nuinnx6jqWpGjmWVpsON5JhEOVBXvar/yDPs9uoLNxgbyLHIbmr6jJ7XaKzUjLvPqw8GufprpMaqOrqvk+1+xsDSJmkPQyPK3Z63q+QviIra95T2GBirUGi4e0By6decgih3nBqFJ1HXoJlJH18NhepqlFmUfsvhcyMLDo0gosKfD/GDkQn7x+lMDWYto9NzR3vm672Frd1d/e8cMHRN1dF+teTqxLPGm7ipYquK56lj7hg/ZJngVra316Ht/a9lIebC6oXnw1vHjx6//9NPevTqGqqsfbB5T0sxl7z3SiYxcFSGzczQt2gYv5MGePWcRkF0vEJ0C8Z/rOq7/E+q4jrE66rv7aoxj8Xy2o1I6Ixqpnk52piFajq6lvnUPArJXN2M5/DowhU73E6Lxz+tM7aK/9SFV1rqY5ah8CB9aXiGyMw0Qupm8nrOQx4OzsADbFAxKoZ0cZ2ocM+rqu88102TwO59nNagIgka4k9DeNID899uIq9q7HRnIg+0zdG+8Xq/TXWdiHHvb67u6zzUcMNECYeVMfZATxYMFwP4SOgUv30VO/n5ixtTptusmNI69He393YPQKCbqBs1iMaQsRCM7FnAkofebm7aR3vDsgz0PiNKUMI6fjCHM6Kira9/e1T348GrzgWomvUKN2b1TLC0ItTUCuazVZC+8tQslFjPa+1uJuHr9+PER40AQ2uv7u7q7W8/1NTc0HKip0TDXRnNpFKDkix8MuBUme2H5pjcgkq66p2qvr9/e39XV3Tp4ru9qc8MhhhYxJvUw0wOEhkAa0f4YtzQEUpnc/83Xdm0/26CxrsxMPdYgGsGc0hC6Q8vYDPXfrQ/+z8o0zKxr81DXK4rHIQuXouWbSU/aBZNTaxuHRpPJ/KsWhpPZF3c0ij4go8pwJranxqooek9dgu5jA+PWlx+koeCyBbh822g3D9EYtCqNloEvmtCfyQwnDOpv5Lpy6Tdkrw1XYERS2t9qRRhtlz7bvfsLcmGOEY9SSKPMm9uY8jrZyOhHGWm77irriz+yTw+17+kLdy/s3j2CQ5PJYCTe2aj1JeQWhzeZop/d0woL2o5qdiz0bfv/QWq/fuS1LwgaQxrGjcJESGOemFsaQPQWaR2tsJqdoWAFY9/hfzzV/pFXEYyBjBE6kRPWtlEoN+d4qkC9Odr22/XmFjY0ag1Y7D9sYB2dp6sM4u1EzUC0ESGJcxojrWOd7rVYsICFzyBN43CtvurImF8MfXZJb9j6mGCbgxoah5sL9zgCNhEwNr8Op+1sFvEDwWiron/DV+d/uHnzh68mKObkqBkYDCaBUHvwjeXu6MdV5hvHRDBufkrodrXJ1ocoDjWKweRSCpu50jYaXGszLp0aGBg4dbr26e9/+HRYXz2zyFR8Q/lo4CTDkWBB0lV7eqgJqbMT/jvsNaDVPB62jk8faUzk6qJUSCNxktEA81nD2HcJUhi6dLe3CoEZaLqALKT3NFrd/v42MVkePzHRN/VGGzi8JxuO51iXakNNnad6DU1loHNo6MLwK99+f/77x5p7H9F/cCGkETbZaICZdNFjYPdTfTH+9xmdTadqje2lt0U/5oV7H9N+ritqCPpPOhwraXCcbjLA8dm4X99taro7sQVd+yXt58agFhhv0uHYSHMlF3abwlHZ1JmhsQQHD1UrpWDKWMfAZ6SaOi9cGDplPFOampjQ0PwPLQ7vIJify8CU8R2mBP1GJaM33qfDIUDF28LJRwO8Yj6N08xmCtSLv6KbK/MmS35uaaDtHWga6mX21idn/kYXV1D33GkS4jAvDatqPAXTrSMM333tDF3HQwlL+zXCSYjDZJJe/ej8zds3H6Ekq7ex8u6lU51NQ3erGMO7/yLNh2KoYZw2CWmAtfRX8/j8558gnUeRlSjULt1tM8OUnpyhcx1SPsThMhlxiGgtYxjGJ59/yzKNv3/m73RtMAmO54JJKZpjbt/e/GSYxiOWNO6dGTNXNqxHq9kzCYeBVt7WcXvZdAtds6hbOMOm8cntrxjUtpSd9hfHzJUN5HGhSFTjCtdwHmYrSnKok0DKXum3IzTOT7hiWVV7eD8Fj6r7Z140iCtL1o+cJJwPPakbxMHpsQyQxnfMEjHO0s+T8+S8KbdR1QZ1eD9UG6XjOPOrDVs3jBy13bpz9Bwh/Gr8cDxbxCUNDPryRBHjxOPR7c9v//D9Y9NmsZ/UYT2l47j/I7krO3PJWOhLAQiFntSNU+NwQuvkIis1S0dcRm1bW62eOg2pujf646qZY0qjSJiEoe203MbTaBz34pkTWqy53UMIEkY/ZRUA5RBHBLeBZQ1tZ3KxzXFo8pcs2mIwWdBY0jmlgaG+dZFZHQ+zVdPcc/BgD+Vm5J2z8leNbtLGVHAs7tziyHGmM9AEa6BovnzihpbUnROmzt7CQMsr5jxFF2bBIZRQk1plKYuer69ox+hoM+17kzFQ4YXjjhxX9+hAQCFmA+dx6PIN7Tgd+5JuU2EKAGKYdniIuMVRAHGoeVbrD44axomTWiqdpOaxFC3LyXxx3I/jSi0WrQ9T41jCEkX1uEliaB9947dOtbU9hz4vFOLgc7zH2BvimENjoSz2NNT0XD56R2tKN8ZssjpSpW9rafyQLO8daHMgu2kZwiE0b62FjsTFEzdOaifUd0R2qtfv09e29bY0VlY2fkiahLsH9ytO7iaWRNcyj6cXT1zRMtQNYuW2JaMxoxKp8b/mGzZ/nCYvDmazpWGi6WEs5D30vQSLjJZXk0d3RoWiPVBS7nGo2K89Hbj4jdZc3UI+Q59R2djSOzfT4HS+HA6lmGMcnqasY9EEmVjNrTta83WUcB4tLa/+ZeVaw0BSAX2HG8ebSYNN7rUxvX2w54qWjY6RsSV/S4JRRHODeYcrtzjQwcxy2t8+a4rGxZNadiJPhozPMMJwXMJtbxCgmiWL/tf5Jmho2Yos5cavxKHNDJ7c4lhnvO6Vkok6MnNXkpv76Jdq+06yxkFmHuMOTgromw12q2gXGrVcUoZvkrYqGfn85+mdxzesaZA3D3oyDoewBCYe3O69xuYZGWjyaGcGHZqn35h+kD0NItJq7o1v9BRk4/hCThespbBs8ggweCHyaUMGTpVIWhwnLMVx7QPKoD+P08TDG9pniOELBsdewbNz6R3pHQtxHLn2p3GDkcMaLprT0BJj3Ms3wDG6QkaVmVtAg7i51BMKHCIVjjtwGlrKjXuDBi2Z9aYyMEtwoBbQj9d2jB9NIdfbO0KMe/kGXW5TKZglnpTIO67de2/8aJQwTY/nchEOzlaPMTU1XZWyr6XF8D+/tAQHykr/98f3KTxZGY7zOex4+DviuIJBv/hIbWNlo7Ws4ySqWe4nUwyH2IHtKeAMRw78+JyxVQpVj4PoTrRYy3dcQf+DX1I1RZ1gXirx4S7z8IIfb3SSJmHcPpd9vY2oVTNml+QhC3CgAj+S8jicMC0bl6g5o+ECjcNrXEtwgaH/qNKTMCob9dbKO9BtC7fSNKOKuazxfSibHaLn8iOr9lVB6Wt7W8iOZmWj0amMo1pLKrhkuhIq0Rl39uHKeShw3FFJ1QXb+pdXW1paGoe7u6inqbdaea9tNnEOH90Jah5H5iEPglkg5RqxaOt//jVjhEVlxqvjD0A2s6ZxrHo97dqSkFh64uh0DzqhGU/9RQlT/v7HDz/6+F+gPv7owz9S7Hm7whbHN7NNnJPE4iV4dg4nNAK8mJ7QFFFkqF+zxeFl8gi+fzR0ppwcaEHlW0gFo7dSJCN9LGm8a9ozBKBt6eFCbhwprmT2wZkUudkNVjRWTLByIPCBiXIIB8sL/ujsCMPuwlYKHJfZ0PjthBUJcqa+SvvjCIM48hjuLnn+GYr9LCx6x/868edh4UG4o8ruu15ioVF6MG49rbdKf3AHk6kpRk2HKDvv80CdJ2fmvYWZVmgBvfwSs4CHln5CQu2LIx2d0FzG+O0plq8trHib4VqHHMZaDx+70qgIMfPoyCxLW2I7mAfPGAfc2W2ZHWlg6CCNhzlNa8rlOOax9t13zPgsV7QWprajNw1FCal5C15UK1BMW4Qv/8asa8Ni0KOalHbzpkIUZBXm/R0xRaytZmYev37bzPE55UEe0fbqEmLoaLevufeTWcDSe6x4yfwRyqA3leTZqXQJRR3aOHPnZiir4PLbd1iZb4QfrOQi7GMe6KCEm9n9e+Fi83OPX7/Pcoi8dUH2upUtuk2sH5sWS8qWueakpu++9zb7QXqq0JqH7c8vCErQbWJzWC7uJGQaLeo3HKMJJr97x6JhipQOOJ6ttnWfEAsmbhPLvoLG5m8Zk5LdovKe771kcdYgKkXPLoq37ZqcMBZ1OaIthL5ofvKsSOpg+/KKHS9Z5xKkaKuYQ7gt3QcmRhkH3yq35VqUMDM5c9bs2X9Ahf4KqN/t+M371txDLV+Dbj5YaLtt2UIZIs73mYx3yKDKPtBpMF/bnZ2UI9vITpJODRoAC0Sn0D18bNQq5CG/IVk4VWhAeSP78AiX2sKcpaioD1KLpw4NgBWh8MJPsv5xUpGceJztugAwpZSuyEb5h7+VA65ISTyqcw4GppiCQ4JwZw+VdW/rURFFPKpTDaacsPR4OHDHeQXWM2sB8URGR99yMBUVmhSNHmUeF2ilCcNTohpW4qeckjQA5uqDcDiEREmt0TAUJ6Lw7cAvAFNVAcoQWN9KcsPdLXZ9Uk8iovBTA8EUlmcSalk5z7E0oQ4mCkNcES6fyjQAJi0qdkDPtVdHVLCfJhWp8+C0c8bj3cVgiiugIBW1JnAPVRHLbza2JIx4+HNZIcDA1JesAPlAZ9wrJM38ffy8wDQvPuE1cmLANJE8S0U8YtLLLSsQBhmmnWUMeLrPUREPSfdSLJOBaSMneZwCPUlQ4uGVmCYWAiaBV+TqGR5GGAaOp/rwwHQS5pJeGoaCgyPunLsu2FNmqq8Ho5ArFhXjFkYYBp7LD5aD6SaR2DMr0Yv8soMUOeuiAp1ELhhx7WN8BcDk0qh0dbwkm3irc65a6Q2mozBX96h1ChII7suXKJKSfGLcZf4y4OICxC7AJTSgIDY9LqJ4oa8z8fxWCZ7rFV4EnMB0lVTmH5XnICEnAWQS7chPVPDL41R5SWHquOiFxXjxMC5nPMhXUR4hk4JpLV5AQGyEys2tbOSqERpH8o8RwR/9JInx6f6AB6a9oLMQ+ytLclRlvl4kEPIfkoMHNJmyuLCYmNAADAjAz0ViV1dvn/A4tVtImF8QtJVcL9ytODo1RB2R5JnO4wUAIfjZSerCcwlcFqpMi1VGxSrTKvxdeKFAiIGfrQQo9wQiAcCwn6M9TH/9P94MoK1RB0b4AAAAAElFTkSuQmCC\") !important;\n    background-size: 5.625rem auto;\n    background-repeat: no-repeat;\n    position: absolute;\n}\n.loading-layer .loading-cycle-before {\n    content: \"\";\n    background-position: -3rem 0;\n    position: absolute;\n    top: 0.70833rem;\n    left: 0.5rem;\n    width: 3rem;\n    height: 3rem;\n}\n.loading-layer .loading-cycle {\n    position: absolute;\n    top: 0.20833rem;\n    left: 0.20833rem;\n    width: 3rem;\n    height: 3rem;\n    background-position: 0.08333rem 0.08333rem;\n    -webkit-animation: loading 1s linear 0s infinite;\n    animation: loading 1s linear 0s infinite;\n}\n.loading-layer .cp-h5-text {\n    width: 5rem;\n    text-align: center;\n    font-size: 0.54167rem;\n    /*     position: absolute;\t\t    bottom: r(10px); */\n}\n@-webkit-keyframes loading {\n0% {\n    -webkit-transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n}\n}\n@keyframes loading {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n", "", {"version":3,"sources":["/./src/loading.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;;EAEE,mBAAmB;CAAE;AAEvB;;EAEE,iBAAiB;EACjB,YAAY;CAAE;AACd;;IAEE,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,mBAAmB;CAAE;AACvB;;IAEE,mBAAmB;IACnB,WAAW;CAAE;AAEjB;EACE,iBAAiB;EACjB,8BAA8B;EAC9B,sBAAsB;CAAE;;AAE1B,mBAAmB;AACnB;EACE,aAAa;CAAE;AAEjB;EACE,WAAW;EACX,sBAAsB;EACtB,kCAAkC;EAClC,0BAA0B;CAAE;AAE9B;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;CAAE;AACf;IACE,kBAAkB;IAClB,mBAAmB;IACnB,mCAAmC;IACnC,mBAAmB;CAAE;AACvB;;IAEE,2iPAA2iP;IAC3iP,+BAA+B;IAC/B,6BAA6B;IAC7B,mBAAmB;CAAE;AACvB;IACE,YAAY;IACZ,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,aAAa;CAAE;AACjB;IACE,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,2CAA2C;IAC3C,iDAAiD;IACjD,yCAAyC;CAAE;AAC7C;IACE,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,mDAAmD;CAAE;AAEzD;AACE;IACE,gCAAgC;CAAE;AACpC;IACE,kCAAkC;CAAE;CAAE;AAE1C;AACE;IACE,wBAAwB;CAAE;AAC5B;IACE,0BAA0B;CAAE;CAAE","file":"loading.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.loading-enter-active,\n.loading-leave-active {\n  text-align: center; }\n\n.modal-loading .modal-layout,\n.modal-preload .modal-layout {\n  overflow: hidden;\n  width: 5rem; }\n  .modal-loading .modal-layout .modal-inner,\n  .modal-preload .modal-layout .modal-inner {\n    background-color: transparent;\n    width: 5rem;\n    height: 5rem;\n    text-align: center; }\n  .modal-loading .modal-layout .modal-text,\n  .modal-preload .modal-layout .modal-text {\n    position: relative;\n    padding: 0; }\n\n.modal-preload {\n  position: static;\n  background-color: transparent;\n  transform: scale(0.8); }\n\n/* loading layer */\n.modal-loading .modal-layout {\n  height: 5rem; }\n\n.modal-loading .modal-inner {\n  padding: 0;\n  display: inline-block;\n  background-color: #FFF !important;\n  border-radius: 0.54167rem; }\n\n.loading-layer {\n  z-index: 10000;\n  color: #666;\n  font-size: 0.5rem;\n  text-align: center;\n  width: 100%;\n  height: 100%; }\n  .loading-layer .loading-img {\n    width: 3.33333rem;\n    height: 3.33333rem;\n    margin: 0.41667rem auto 0.08333rem;\n    position: relative; }\n  .loading-layer .loading-cycle,\n  .loading-layer .loading-cycle-before {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACMCAMAAAC6YLfwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAALzj+bzj+cHo+rfi+cDl+rzj+abb+Lnj+rbi+r/l+rzj+b3k+bzj+cDn+bzk+b7l+bvj+rzk+bzj+b3l+rzj+bzj+bzj+cz3+b7m+b3k+r7m+bzj+bzj+bzj+b7l+b3k+bzj+bzj+bzj+b7m+bzk+b7m+rzj+bzj+bzj+YbP+Lzj+YbP+Lzj+bzj+b3l+bzj+YbP+Lzj+YbP+IbP+Lzj+bzj+YbP+IXP+Lzj+XzL9IXP+Lzj+bzj+bzj+Wu14Lzj+YXP+IbP+Lzj+bzj+bzj+bzj+bzj+YfP+Lzj+YbP+IbP+Lzj+bzj+cDo+bzj+YfQ+IbP+IbP+MDo+bzj+bzk+c33+bzj+bzj+f///4bP+IbP+IbP+IfQ+IbP+Lzj+bzj+YbP+Lzj+YbP+HLK84bP+IbP+M33+c33+YnQ+YHN9s33+b7v+c33+c33+f3+/zm75IbP+C+54c33+f///////4bP+Giy33W/60G95s33+cz3+c33+c33+c33+f////////////7//////9H1+2+55WW45F+34////////////////833+aTe+Wy24+X1/bXq+XzG8f///67m+cTy+a/m+XG75z285XfA63bA61K24cLw+Lvn+8Ts+f///3/J8r3o+7/n+YbP+P///7zj+c33+Wiy3yFumHG+7P/I5qPc9IPN9vL9/ojQ+P/I4YvS+Mz3+XzG8Mf0+cDw+ZTW+YHL9W234zF+qJjY+XG75q7k93PA7XnE78Ty+cr1+TOAq7fr+X/J87Lo+aPb+nbA6o7T+J3b+are+rvt+USQupDU+XbC7qrj+YXO+Nzx/Sx5o/r9/+f8/dTu/f3+/02Ywl6q0z2KtCW23rPm9qTg+MrL7jeDrrnk+1ahy/rI5yZznb3l++75/pra+WDG7tj5++r3/urJ58Dn+/LJ5vT7/2Sv2GnI8T+95qjf9Z/e+LHg+6DO9Mnq/OX1/pnO9avN85HP97Ti+3fL9LXM8NvK6XDK8k/B6VTC66Da9NP4+pjU+N7YRUMAAACidFJOUwDx/REFDOUBAggb+xf+JiIrH8rYNGf1xP5A4Tt37upID6xM+FXOL8B/be5xat5iRJHHqP03sYnPibwa2aNqUP7RSJOG+Zbbn6O1DrVZjV7Vrh7oN3qCmuiYynP0LOBZuRQkm78UP3jM2IBQ9v3mZ4vS+frgSO9g4eyqu3btfrAdPNmCMI2SrMmtbbyYqcZ4luS+qNfti9popNtC6v7QtPz5xTa0CHwAABJkSURBVHja5Z13WBTnvsdfYLYvy7KwrHSWXqRIABEpSlVpFhDUGFFj98RjTHJz0ntOL7ecc++5/+3O4okcghRp0hYQQdFYsSf2rmkak9x789z3nQFclplldrYMkO+TPJJlzb7z2d/7a+/7zgBggUQABACeGFS4Ap4r+pkbLUp4ZcuC/FlzV0dGLl09e/bs/AWZM+evteMABABIgVzuHeGpjItQ54Wry31yCouClekyIBbZk4QoYeXipRpKReZvTBDYZRBiUYF7Ul65n8ohyA139MBxBxz3dcRz3RyLS8NLlctAAM8ew1i7cv0qjUmtTl5i4zFUCGMLUtVuHmW4M04lX77ELy6qQCy08TiWbJytYaBnFj9rw0HIA9MS5+C+w5cuQXbhV4aX8XEHPmEjSBCTpLjEpnNGMD//GfJya6onJLIgxTaDcHGNy8Ojh1E44IpcRVxIqU9huk9pYFphTNQadY6Kn813JH69ELMdDOFzc0kUB7/rOWQaRU3zua6O9v+wgdMSx+SESEgUfnh8cYlPsDQWOLkCkQhgIiBwAkK5q3hZeFaJOhpXqEJtNlkEJIya744e7TGJovrA1cGudh1U3R+sbKsCaVIeOUcc8DCVMkbmJAYYEWGMJa2QukSli21mGgmz0KVePXHsykGTZtHwsLu+Tjesjn9zsuYY3AOjSX8RpEiN8Rc5AVMRDNqFzWaKKBP5jJ6jWu2JAyZQ9EGz6NAZaMafPa01BB4IVxMwfPHCQp4ccKgNq+HVNkMY2st0KA5BFPUde3XG+ncrDUEWmIoTPmNNnr+USxZAsHEnvODLx7Tak19S+gpkFfV141FAtbfOtMoYYtXziFmiipO62OeqnV7b9QLVVF+UD6/5EDIN7UVjEnB+nOve3t5BiQKqv7l6p+UJiFAQ44uyCQk/wh8I7GQE/tt0bywPHfdyCkq7mq8gGl8bzo4DDc3nuinnx6jqWpGjmWVpsON5JhEOVBXvar/yDPs9uoLNxgbyLHIbmr6jJ7XaKzUjLvPqw8GufprpMaqOrqvk+1+xsDSJmkPQyPK3Z63q+QviIra95T2GBirUGi4e0By6decgih3nBqFJ1HXoJlJH18NhepqlFmUfsvhcyMLDo0gosKfD/GDkQn7x+lMDWYto9NzR3vm672Frd1d/e8cMHRN1dF+teTqxLPGm7ipYquK56lj7hg/ZJngVra316Ht/a9lIebC6oXnw1vHjx6//9NPevTqGqqsfbB5T0sxl7z3SiYxcFSGzczQt2gYv5MGePWcRkF0vEJ0C8Z/rOq7/E+q4jrE66rv7aoxj8Xy2o1I6Ixqpnk52piFajq6lvnUPArJXN2M5/DowhU73E6Lxz+tM7aK/9SFV1rqY5ah8CB9aXiGyMw0Qupm8nrOQx4OzsADbFAxKoZ0cZ2ocM+rqu88102TwO59nNagIgka4k9DeNID899uIq9q7HRnIg+0zdG+8Xq/TXWdiHHvb67u6zzUcMNECYeVMfZATxYMFwP4SOgUv30VO/n5ixtTptusmNI69He393YPQKCbqBs1iMaQsRCM7FnAkofebm7aR3vDsgz0PiNKUMI6fjCHM6Kira9/e1T348GrzgWomvUKN2b1TLC0ItTUCuazVZC+8tQslFjPa+1uJuHr9+PER40AQ2uv7u7q7W8/1NTc0HKip0TDXRnNpFKDkix8MuBUme2H5pjcgkq66p2qvr9/e39XV3Tp4ru9qc8MhhhYxJvUw0wOEhkAa0f4YtzQEUpnc/83Xdm0/26CxrsxMPdYgGsGc0hC6Q8vYDPXfrQ/+z8o0zKxr81DXK4rHIQuXouWbSU/aBZNTaxuHRpPJ/KsWhpPZF3c0ij4go8pwJranxqooek9dgu5jA+PWlx+koeCyBbh822g3D9EYtCqNloEvmtCfyQwnDOpv5Lpy6Tdkrw1XYERS2t9qRRhtlz7bvfsLcmGOEY9SSKPMm9uY8jrZyOhHGWm77irriz+yTw+17+kLdy/s3j2CQ5PJYCTe2aj1JeQWhzeZop/d0woL2o5qdiz0bfv/QWq/fuS1LwgaQxrGjcJESGOemFsaQPQWaR2tsJqdoWAFY9/hfzzV/pFXEYyBjBE6kRPWtlEoN+d4qkC9Odr22/XmFjY0ag1Y7D9sYB2dp6sM4u1EzUC0ESGJcxojrWOd7rVYsICFzyBN43CtvurImF8MfXZJb9j6mGCbgxoah5sL9zgCNhEwNr8Op+1sFvEDwWiron/DV+d/uHnzh68mKObkqBkYDCaBUHvwjeXu6MdV5hvHRDBufkrodrXJ1ocoDjWKweRSCpu50jYaXGszLp0aGBg4dbr26e9/+HRYXz2zyFR8Q/lo4CTDkWBB0lV7eqgJqbMT/jvsNaDVPB62jk8faUzk6qJUSCNxktEA81nD2HcJUhi6dLe3CoEZaLqALKT3NFrd/v42MVkePzHRN/VGGzi8JxuO51iXakNNnad6DU1loHNo6MLwK99+f/77x5p7H9F/cCGkETbZaICZdNFjYPdTfTH+9xmdTadqje2lt0U/5oV7H9N+ritqCPpPOhwraXCcbjLA8dm4X99taro7sQVd+yXt58agFhhv0uHYSHMlF3abwlHZ1JmhsQQHD1UrpWDKWMfAZ6SaOi9cGDplPFOampjQ0PwPLQ7vIJify8CU8R2mBP1GJaM33qfDIUDF28LJRwO8Yj6N08xmCtSLv6KbK/MmS35uaaDtHWga6mX21idn/kYXV1D33GkS4jAvDatqPAXTrSMM333tDF3HQwlL+zXCSYjDZJJe/ej8zds3H6Ekq7ex8u6lU51NQ3erGMO7/yLNh2KoYZw2CWmAtfRX8/j8558gnUeRlSjULt1tM8OUnpyhcx1SPsThMhlxiGgtYxjGJ59/yzKNv3/m73RtMAmO54JJKZpjbt/e/GSYxiOWNO6dGTNXNqxHq9kzCYeBVt7WcXvZdAtds6hbOMOm8cntrxjUtpSd9hfHzJUN5HGhSFTjCtdwHmYrSnKok0DKXum3IzTOT7hiWVV7eD8Fj6r7Z140iCtL1o+cJJwPPakbxMHpsQyQxnfMEjHO0s+T8+S8KbdR1QZ1eD9UG6XjOPOrDVs3jBy13bpz9Bwh/Gr8cDxbxCUNDPryRBHjxOPR7c9v//D9Y9NmsZ/UYT2l47j/I7krO3PJWOhLAQiFntSNU+NwQuvkIis1S0dcRm1bW62eOg2pujf646qZY0qjSJiEoe203MbTaBz34pkTWqy53UMIEkY/ZRUA5RBHBLeBZQ1tZ3KxzXFo8pcs2mIwWdBY0jmlgaG+dZFZHQ+zVdPcc/BgD+Vm5J2z8leNbtLGVHAs7tziyHGmM9AEa6BovnzihpbUnROmzt7CQMsr5jxFF2bBIZRQk1plKYuer69ox+hoM+17kzFQ4YXjjhxX9+hAQCFmA+dx6PIN7Tgd+5JuU2EKAGKYdniIuMVRAHGoeVbrD44axomTWiqdpOaxFC3LyXxx3I/jSi0WrQ9T41jCEkX1uEliaB9947dOtbU9hz4vFOLgc7zH2BvimENjoSz2NNT0XD56R2tKN8ZssjpSpW9rafyQLO8daHMgu2kZwiE0b62FjsTFEzdOaifUd0R2qtfv09e29bY0VlY2fkiahLsH9ytO7iaWRNcyj6cXT1zRMtQNYuW2JaMxoxKp8b/mGzZ/nCYvDmazpWGi6WEs5D30vQSLjJZXk0d3RoWiPVBS7nGo2K89Hbj4jdZc3UI+Q59R2djSOzfT4HS+HA6lmGMcnqasY9EEmVjNrTta83WUcB4tLa/+ZeVaw0BSAX2HG8ebSYNN7rUxvX2w54qWjY6RsSV/S4JRRHODeYcrtzjQwcxy2t8+a4rGxZNadiJPhozPMMJwXMJtbxCgmiWL/tf5Jmho2Yos5cavxKHNDJ7c4lhnvO6Vkok6MnNXkpv76Jdq+06yxkFmHuMOTgromw12q2gXGrVcUoZvkrYqGfn85+mdxzesaZA3D3oyDoewBCYe3O69xuYZGWjyaGcGHZqn35h+kD0NItJq7o1v9BRk4/hCThespbBs8ggweCHyaUMGTpVIWhwnLMVx7QPKoD+P08TDG9pniOELBsdewbNz6R3pHQtxHLn2p3GDkcMaLprT0BJj3Ms3wDG6QkaVmVtAg7i51BMKHCIVjjtwGlrKjXuDBi2Z9aYyMEtwoBbQj9d2jB9NIdfbO0KMe/kGXW5TKZglnpTIO67de2/8aJQwTY/nchEOzlaPMTU1XZWyr6XF8D+/tAQHykr/98f3KTxZGY7zOex4+DviuIJBv/hIbWNlo7Ws4ySqWe4nUwyH2IHtKeAMRw78+JyxVQpVj4PoTrRYy3dcQf+DX1I1RZ1gXirx4S7z8IIfb3SSJmHcPpd9vY2oVTNml+QhC3CgAj+S8jicMC0bl6g5o+ECjcNrXEtwgaH/qNKTMCob9dbKO9BtC7fSNKOKuazxfSibHaLn8iOr9lVB6Wt7W8iOZmWj0amMo1pLKrhkuhIq0Rl39uHKeShw3FFJ1QXb+pdXW1paGoe7u6inqbdaea9tNnEOH90Jah5H5iEPglkg5RqxaOt//jVjhEVlxqvjD0A2s6ZxrHo97dqSkFh64uh0DzqhGU/9RQlT/v7HDz/6+F+gPv7owz9S7Hm7whbHN7NNnJPE4iV4dg4nNAK8mJ7QFFFkqF+zxeFl8gi+fzR0ppwcaEHlW0gFo7dSJCN9LGm8a9ozBKBt6eFCbhwprmT2wZkUudkNVjRWTLByIPCBiXIIB8sL/ujsCMPuwlYKHJfZ0PjthBUJcqa+SvvjCIM48hjuLnn+GYr9LCx6x/868edh4UG4o8ruu15ioVF6MG49rbdKf3AHk6kpRk2HKDvv80CdJ2fmvYWZVmgBvfwSs4CHln5CQu2LIx2d0FzG+O0plq8trHib4VqHHMZaDx+70qgIMfPoyCxLW2I7mAfPGAfc2W2ZHWlg6CCNhzlNa8rlOOax9t13zPgsV7QWprajNw1FCal5C15UK1BMW4Qv/8asa8Ni0KOalHbzpkIUZBXm/R0xRaytZmYev37bzPE55UEe0fbqEmLoaLevufeTWcDSe6x4yfwRyqA3leTZqXQJRR3aOHPnZiir4PLbd1iZb4QfrOQi7GMe6KCEm9n9e+Fi83OPX7/Pcoi8dUH2upUtuk2sH5sWS8qWueakpu++9zb7QXqq0JqH7c8vCErQbWJzWC7uJGQaLeo3HKMJJr97x6JhipQOOJ6ttnWfEAsmbhPLvoLG5m8Zk5LdovKe771kcdYgKkXPLoq37ZqcMBZ1OaIthL5ofvKsSOpg+/KKHS9Z5xKkaKuYQ7gt3QcmRhkH3yq35VqUMDM5c9bs2X9Ahf4KqN/t+M371txDLV+Dbj5YaLtt2UIZIs73mYx3yKDKPtBpMF/bnZ2UI9vITpJODRoAC0Sn0D18bNQq5CG/IVk4VWhAeSP78AiX2sKcpaioD1KLpw4NgBWh8MJPsv5xUpGceJztugAwpZSuyEb5h7+VA65ISTyqcw4GppiCQ4JwZw+VdW/rURFFPKpTDaacsPR4OHDHeQXWM2sB8URGR99yMBUVmhSNHmUeF2ilCcNTohpW4qeckjQA5uqDcDiEREmt0TAUJ6Lw7cAvAFNVAcoQWN9KcsPdLXZ9Uk8iovBTA8EUlmcSalk5z7E0oQ4mCkNcES6fyjQAJi0qdkDPtVdHVLCfJhWp8+C0c8bj3cVgiiugIBW1JnAPVRHLbza2JIx4+HNZIcDA1JesAPlAZ9wrJM38ffy8wDQvPuE1cmLANJE8S0U8YtLLLSsQBhmmnWUMeLrPUREPSfdSLJOBaSMneZwCPUlQ4uGVmCYWAiaBV+TqGR5GGAaOp/rwwHQS5pJeGoaCgyPunLsu2FNmqq8Ho5ArFhXjFkYYBp7LD5aD6SaR2DMr0Yv8soMUOeuiAp1ELhhx7WN8BcDk0qh0dbwkm3irc65a6Q2mozBX96h1ChII7suXKJKSfGLcZf4y4OICxC7AJTSgIDY9LqJ4oa8z8fxWCZ7rFV4EnMB0lVTmH5XnICEnAWQS7chPVPDL41R5SWHquOiFxXjxMC5nPMhXUR4hk4JpLV5AQGyEys2tbOSqERpH8o8RwR/9JInx6f6AB6a9oLMQ+ytLclRlvl4kEPIfkoMHNJmyuLCYmNAADAjAz0ViV1dvn/A4tVtImF8QtJVcL9ytODo1RB2R5JnO4wUAIfjZSerCcwlcFqpMi1VGxSrTKvxdeKFAiIGfrQQo9wQiAcCwn6M9TH/9P94MoK1RB0b4AAAAAElFTkSuQmCC\") !important;\n    background-size: 5.625rem auto;\n    background-repeat: no-repeat;\n    position: absolute; }\n  .loading-layer .loading-cycle-before {\n    content: \"\";\n    background-position: -3rem 0;\n    position: absolute;\n    top: 0.70833rem;\n    left: 0.5rem;\n    width: 3rem;\n    height: 3rem; }\n  .loading-layer .loading-cycle {\n    position: absolute;\n    top: 0.20833rem;\n    left: 0.20833rem;\n    width: 3rem;\n    height: 3rem;\n    background-position: 0.08333rem 0.08333rem;\n    -webkit-animation: loading 1s linear 0s infinite;\n    animation: loading 1s linear 0s infinite; }\n  .loading-layer .cp-h5-text {\n    width: 5rem;\n    text-align: center;\n    font-size: 0.54167rem;\n    /*     position: absolute;\t\t    bottom: r(10px); */ }\n\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _modal = __webpack_require__(102);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    components: {
	        modal: _modal2.default
	    },
	    props: {
	        show: {
	            type: Boolean,
	            default: false
	        },
	        type: {
	            type: String,
	            default: 'loading'
	        }, //loading preload
	        //是否存在mask
	        mask: {
	            type: Boolean,
	            default: true
	        },
	        //点击mask关闭
	        maskclose: {
	            type: Boolean,
	            default: true
	        },
	        title: {
	            type: String,
	            default: "游游努力加载中"
	        }
	    },
	    data: function data() {
	        return {
	            innerShow: this.show
	        };
	    },
	
	    watch: {
	        innerShow: function innerShow(val) {
	            // this.show = val
	            this.$emit('update:show', val);
	        },
	        show: function show(val) {
	            this.innerShow = val;
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('modal', {
	    attrs: {
	      "show": _vm.innerShow,
	      "type": _vm.type,
	      "maskclose": _vm.maskclose,
	      "mask": _vm.mask,
	      "title": _vm.title,
	      "hastitle": false
	    },
	    on: {
	      "update:show": function($event) {
	        _vm.innerShow = $event
	      }
	    }
	  }, [_vm._t("default", [(_vm.type === 'loading' || _vm.type === 'preload') ? _c('div', {
	    staticClass: "spinner"
	  }, [_c('div', {
	    staticClass: "loading-layer"
	  }, [_c('div', {
	    staticClass: "loading-img"
	  }, [_c('div', {
	    staticClass: "loading-cycle"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "loading-cycle-before"
	  })]), _vm._v(" "), _c('p', {
	    staticClass: "cp-h5-text"
	  }, [_vm._v(_vm._s(_vm.title))])])]) : _vm._e()])], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-57eb3a57", module.exports)
	  }
	}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(129)
	
	/* script */
	__vue_exports__ = __webpack_require__(131)
	
	/* template */
	var __vue_template__ = __webpack_require__(132)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\popover.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-731ddb40", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-731ddb40", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] popover.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-731ddb40!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popover.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-731ddb40!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.modal-popover .modal-layout,\n.modal-tips .modal-layout {\n  position: fixed;\n  max-width: 10.41667rem;\n  width: auto;\n  margin: 0;\n  overflow: visible;\n  border-radius: 0.25rem;\n}\n.modal-popover .modal-layout:before, .modal-popover .modal-layout:after,\n  .modal-tips .modal-layout:before,\n  .modal-tips .modal-layout:after {\n    position: absolute;\n    left: 50%;\n    width: 0;\n    height: 0;\n    margin-left: -0.41667rem;\n    content: '';\n    border-right: 0.41667rem solid transparent;\n    border-left: 0.41667rem solid transparent;\n}\n.modal-popover .modal-layout.tri-top:before,\n  .modal-tips .modal-layout.tri-top:before {\n    border-bottom: 0.41667rem solid #fff;\n    top: -0.41667rem;\n}\n.modal-popover .modal-layout.tri-bottom:after,\n  .modal-tips .modal-layout.tri-bottom:after {\n    border-top: 0.41667rem solid #fff;\n    bottom: -0.41667rem;\n}\n.modal-popover .modal-layout.tri-left:before, .modal-popover .modal-layout.tri-left:after,\n  .modal-tips .modal-layout.tri-left:before,\n  .modal-tips .modal-layout.tri-left:after {\n    left: 25%;\n}\n.modal-popover .modal-layout.tri-right:before, .modal-popover .modal-layout.tri-right:after,\n  .modal-tips .modal-layout.tri-right:before,\n  .modal-tips .modal-layout.tri-right:after {\n    left: 75%;\n}\n.modal-popover .modal-layout .modal-title,\n  .modal-tips .modal-layout .modal-title {\n    padding: 0.20833rem;\n    background-color: #666;\n    line-height: 1rem;\n}\n.modal-popover .modal-layout.visible,\n  .modal-tips .modal-layout.visible {\n    opacity: 1;\n}\n.modal-popover .modal-layout .modal-inner,\n  .modal-tips .modal-layout .modal-inner {\n    border-radius: 0.33333rem;\n    padding: 0;\n}\n.modal-popover .modal-layout .modal-title + .modal-text,\n  .modal-tips .modal-layout .modal-title + .modal-text {\n    margin-top: 0;\n    padding: 0;\n    background-color: #666;\n}\n.modal-popover .modal-layout .modal-text > *,\n  .modal-tips .modal-layout .modal-text > * {\n    margin: 0;\n}\n.modal-popover .modal-layout .table-view,\n  .modal-tips .modal-layout .table-view {\n    margin-bottom: 0;\n    border-bottom: 0;\n}\n.modal-tips .modal-layout {\n  max-width: 6.25rem;\n}\n.modal-tips .modal-layout .modal-text {\n    padding: 0.20833rem;\n    color: #fff;\n    font-size: 0.54167rem;\n}\n.modal-tips .modal-layout .modal-inner {\n    background-color: #666;\n    border-radius: 0.16667rem;\n}\n.modal-tips .modal-layout.tri-top:before {\n    top: -0.29167rem;\n    border-bottom-color: #666;\n}\n.modal-tips .modal-layout.tri-bottom:after {\n    bottom: -0.29167rem;\n    border-top-color: #666;\n}\n", "", {"version":3,"sources":["/./src/popover.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;;EAEE,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,uBAAuB;CAAE;AACzB;;;IAGE,mBAAmB;IACnB,UAAU;IACV,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,YAAY;IACZ,2CAA2C;IAC3C,0CAA0C;CAAE;AAC9C;;IAEE,qCAAqC;IACrC,iBAAiB;CAAE;AACrB;;IAEE,kCAAkC;IAClC,oBAAoB;CAAE;AACxB;;;IAGE,UAAU;CAAE;AACd;;;IAGE,UAAU;CAAE;AACd;;IAEE,oBAAoB;IACpB,uBAAuB;IACvB,kBAAkB;CAAE;AACtB;;IAEE,WAAW;CAAE;AACf;;IAEE,0BAA0B;IAC1B,WAAW;CAAE;AACf;;IAEE,cAAc;IACd,WAAW;IACX,uBAAuB;CAAE;AAC3B;;IAEE,UAAU;CAAE;AACd;;IAEE,iBAAiB;IACjB,iBAAiB;CAAE;AAEvB;EACE,mBAAmB;CAAE;AACrB;IACE,oBAAoB;IACpB,YAAY;IACZ,sBAAsB;CAAE;AAC1B;IACE,uBAAuB;IACvB,0BAA0B;CAAE;AAC9B;IACE,iBAAiB;IACjB,0BAA0B;CAAE;AAC9B;IACE,oBAAoB;IACpB,uBAAuB;CAAE","file":"popover.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.modal-popover .modal-layout,\n.modal-tips .modal-layout {\n  position: fixed;\n  max-width: 10.41667rem;\n  width: auto;\n  margin: 0;\n  overflow: visible;\n  border-radius: 0.25rem; }\n  .modal-popover .modal-layout:before, .modal-popover .modal-layout:after,\n  .modal-tips .modal-layout:before,\n  .modal-tips .modal-layout:after {\n    position: absolute;\n    left: 50%;\n    width: 0;\n    height: 0;\n    margin-left: -0.41667rem;\n    content: '';\n    border-right: 0.41667rem solid transparent;\n    border-left: 0.41667rem solid transparent; }\n  .modal-popover .modal-layout.tri-top:before,\n  .modal-tips .modal-layout.tri-top:before {\n    border-bottom: 0.41667rem solid #fff;\n    top: -0.41667rem; }\n  .modal-popover .modal-layout.tri-bottom:after,\n  .modal-tips .modal-layout.tri-bottom:after {\n    border-top: 0.41667rem solid #fff;\n    bottom: -0.41667rem; }\n  .modal-popover .modal-layout.tri-left:before, .modal-popover .modal-layout.tri-left:after,\n  .modal-tips .modal-layout.tri-left:before,\n  .modal-tips .modal-layout.tri-left:after {\n    left: 25%; }\n  .modal-popover .modal-layout.tri-right:before, .modal-popover .modal-layout.tri-right:after,\n  .modal-tips .modal-layout.tri-right:before,\n  .modal-tips .modal-layout.tri-right:after {\n    left: 75%; }\n  .modal-popover .modal-layout .modal-title,\n  .modal-tips .modal-layout .modal-title {\n    padding: 0.20833rem;\n    background-color: #666;\n    line-height: 1rem; }\n  .modal-popover .modal-layout.visible,\n  .modal-tips .modal-layout.visible {\n    opacity: 1; }\n  .modal-popover .modal-layout .modal-inner,\n  .modal-tips .modal-layout .modal-inner {\n    border-radius: 0.33333rem;\n    padding: 0; }\n  .modal-popover .modal-layout .modal-title + .modal-text,\n  .modal-tips .modal-layout .modal-title + .modal-text {\n    margin-top: 0;\n    padding: 0;\n    background-color: #666; }\n  .modal-popover .modal-layout .modal-text > *,\n  .modal-tips .modal-layout .modal-text > * {\n    margin: 0; }\n  .modal-popover .modal-layout .table-view,\n  .modal-tips .modal-layout .table-view {\n    margin-bottom: 0;\n    border-bottom: 0; }\n\n.modal-tips .modal-layout {\n  max-width: 6.25rem; }\n  .modal-tips .modal-layout .modal-text {\n    padding: 0.20833rem;\n    color: #fff;\n    font-size: 0.54167rem; }\n  .modal-tips .modal-layout .modal-inner {\n    background-color: #666;\n    border-radius: 0.16667rem; }\n  .modal-tips .modal-layout.tri-top:before {\n    top: -0.29167rem;\n    border-bottom-color: #666; }\n  .modal-tips .modal-layout.tri-bottom:after {\n    bottom: -0.29167rem;\n    border-top-color: #666; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _modal = __webpack_require__(102);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        type: {
	            type: String,
	            default: 'popover'
	        }, //popover tips
	        show: {
	            type: Boolean,
	            default: false
	        },
	        mask: {
	            type: Boolean,
	            default: true
	        }, //是否存在mask
	        maskclose: {
	            type: Boolean,
	            default: true
	        }, //点击mask关闭
	        title: {
	            type: String,
	            default: ''
	        },
	        hastitle: {
	            type: Boolean,
	            default: true
	        },
	        role: {
	            type: String
	        } //选择器
	    },
	    components: {
	        modal: _modal2.default
	    },
	    data: function data() {
	        return {
	            innerShow: this.show
	        };
	    },
	
	    watch: {
	        innerShow: function innerShow(val) {
	            this.$emit('update:show', val);
	        },
	        show: function show(val, oldVal) {
	            this.innerShow = val;
	            if (val && (this.type === 'popover' || this.type === 'tips')) {
	                var $pos = document.querySelectorAll(this.role)[0],
	                    $modal = this.$el.querySelectorAll('.modal-layout')[0];
	
	                var trisize = 20;
	                var pos = $pos.getBoundingClientRect();
	                var mw = $modal.clientWidth,
	                    mh = $modal.clientHeight,
	                    top = pos.top - mh - trisize / 2,
	                    left = pos.left + ($pos.clientWidth - mw) / 2,
	                    fullWidth = document.body.clientWidth,
	                    gap = 10;
	
	                if (pos.top < mh) {
	                    top = pos.top + trisize * 1.5;
	                    this.tripos = 'tri-top';
	                } else {
	                    this.tripos = 'tri-bottom';
	                }
	                if (left < gap) {
	                    left = gap;
	                    this.tripos += ' tri-left';
	                } else if (left > fullWidth - mw - gap) {
	                    left = fullWidth - mw - gap;
	                    this.tripos += ' tri-right';
	                }
	                $modal.style.left = left + 'px';
	                $modal.style.top = top + 'px';
	            }
	        }
	    }
	}; //
	//
	//
	//
	//
	//

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('modal', {
	    attrs: {
	      "show": _vm.innerShow,
	      "type": _vm.type,
	      "maskclose": _vm.maskclose,
	      "mask": _vm.mask,
	      "hastitle": _vm.hastitle,
	      "role": _vm.role,
	      "title": _vm.title
	    },
	    on: {
	      "update:show": function($event) {
	        _vm.innerShow = $event
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-731ddb40", module.exports)
	  }
	}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(134)
	
	/* script */
	__vue_exports__ = __webpack_require__(136)
	
	/* template */
	var __vue_template__ = __webpack_require__(137)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\num.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-89a2edbe"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-89a2edbe", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-89a2edbe", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] num.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(135);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-89a2edbe&scoped=true!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./num.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-89a2edbe&scoped=true!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./num.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.day-choose .minus[data-v-89a2edbe],\n.day-choose .plus[data-v-89a2edbe] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 1.05rem;\n  height: 1.05rem;\n  border: 1px solid #C6C6C6;\n  border-radius: 4px;\n}\n.day-choose .minus[data-v-89a2edbe]:before,\n  .day-choose .plus[data-v-89a2edbe]:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 0.6rem;\n    height: 0.075rem;\n    background-color: #A7A7A7;\n    transform: translate(-50%, -50%);\n}\n.day-choose .minus.disabled[data-v-89a2edbe],\n  .day-choose .plus.disabled[data-v-89a2edbe] {\n    border-color: #E4E4E4;\n}\n.day-choose .minus.disabled[data-v-89a2edbe]:before,\n    .day-choose .plus.disabled[data-v-89a2edbe]:before {\n      background-color: #E4E4E4;\n}\n.day-choose .minus.disabled[data-v-89a2edbe]:after,\n    .day-choose .plus.disabled[data-v-89a2edbe]:after {\n      background-color: #E4E4E4;\n}\n.day-choose .plus[data-v-89a2edbe]:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0.075rem;\n  height: 0.6rem;\n  background-color: #A7A7A7;\n  transform: translate(-50%, -50%);\n}\n.day-choose input[data-v-89a2edbe] {\n  vertical-align: middle;\n  width: 1rem;\n  line-height: 1.05rem;\n  text-align: center;\n  font-weight: 300;\n}\n.day-choose .area-val[data-v-89a2edbe] {\n  width: 3.5rem;\n  display: inline-block;\n  text-align: center;\n}\n", "", {"version":3,"sources":["/./src/num.vue"],"names":[],"mappings":";AAAA;;EAEE,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,0BAA0B;EAC1B,mBAAmB;CAAE;AACrB;;IAEE,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,cAAc;IACd,iBAAiB;IACjB,0BAA0B;IAC1B,iCAAiC;CAAE;AACrC;;IAEE,sBAAsB;CAAE;AACxB;;MAEE,0BAA0B;CAAE;AAC9B;;MAEE,0BAA0B;CAAE;AAElC;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,eAAe;EACf,0BAA0B;EAC1B,iCAAiC;CAAE;AAErC;EACE,uBAAuB;EACvB,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;CAAE;AAErB;EACE,cAAc;EACd,sBAAsB;EACtB,mBAAmB;CAAE","file":"num.vue","sourcesContent":[".day-choose .minus,\n.day-choose .plus {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 1.05rem;\n  height: 1.05rem;\n  border: 1px solid #C6C6C6;\n  border-radius: 4px; }\n  .day-choose .minus:before,\n  .day-choose .plus:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 0.6rem;\n    height: 0.075rem;\n    background-color: #A7A7A7;\n    transform: translate(-50%, -50%); }\n  .day-choose .minus.disabled,\n  .day-choose .plus.disabled {\n    border-color: #E4E4E4; }\n    .day-choose .minus.disabled:before,\n    .day-choose .plus.disabled:before {\n      background-color: #E4E4E4; }\n    .day-choose .minus.disabled:after,\n    .day-choose .plus.disabled:after {\n      background-color: #E4E4E4; }\n\n.day-choose .plus:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0.075rem;\n  height: 0.6rem;\n  background-color: #A7A7A7;\n  transform: translate(-50%, -50%); }\n\n.day-choose input {\n  vertical-align: middle;\n  width: 1rem;\n  line-height: 1.05rem;\n  text-align: center;\n  font-weight: 300; }\n\n.day-choose .area-val {\n  width: 3.5rem;\n  display: inline-block;\n  text-align: center; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 136 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	
	//slot 为需要显示的值，一般用于特殊需求, 即显示的值不是val而是val对应的某值（如数据index为val）
	exports.default = {
	    props: {
	        val: {
	            type: Number,
	            default: 3
	
	        },
	        min: {
	            type: Number,
	            default: 1
	        },
	        max: {
	            type: Number,
	            default: 10
	        }
	    }
	};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "day-choose"
	  }, [_c('i', {
	    directives: [{
	      name: "touch",
	      rawName: "v-touch:tap",
	      value: (_vm.val > _vm.min ? _vm.val-- : _vm.val),
	      expression: "val > min ? val-- : val",
	      arg: "tap"
	    }],
	    class: {
	      'disabled': _vm.val <= _vm.min, 'minus': true
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "area-val"
	  }, [_vm._t("default", [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    attrs: {
	      "type": "number"
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }
	    }
	  }), _vm._v("天")])], 2), _vm._v(" "), _c('i', {
	    directives: [{
	      name: "touch",
	      rawName: "v-touch:tap",
	      value: ((_vm.max === void 0) ? _vm.val++ : (_vm.val < _vm.max ? _vm.val++ : _vm.val)),
	      expression: "(max===void 0) ? val++ : (val < max ? val++ : val)",
	      arg: "tap"
	    }],
	    class: {
	      'disabled': (_vm.max !== void 0) && _vm.val >= _vm.max, 'plus': true
	    }
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-89a2edbe", module.exports)
	  }
	}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(139)
	
	/* script */
	__vue_exports__ = __webpack_require__(141)
	
	/* template */
	var __vue_template__ = __webpack_require__(142)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-653e3a56", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-653e3a56", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] radio.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(140);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-653e3a56!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./radio.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-653e3a56!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.input-row {\n  height: 40px;\n  line-height: 25px;\n}\n.input-row label {\n    height: 40px;\n}\n.input-row .input {\n    float: right;\n    height: 40px;\n    width: 65%;\n    margin-bottom: 0;\n    border: 0;\n    background: none;\n    box-shadow: none;\n}\n.input-row select {\n    padding: 10px 15px !important;\n}\n.input-row .toggle {\n    width: 50px;\n    height: 30px;\n    margin: 5px 13px;\n    border: 2px solid #e6e6e6;\n}\n.input-row .input-select {\n    margin-top: 3px;\n}\n.location {\n  position: relative;\n}\n.location .icon-area {\n    position: absolute;\n    right: 15px;\n    width: 40px;\n    height: 40px;\n    border-left: 1px solid #eee;\n    text-align: center;\n}\n.checkbox,\n.radio {\n  position: relative;\n}\n.checkbox label,\n  .radio label {\n    cursor: pointer;\n}\n.checkbox .check-cion:before,\n  .checkbox .check-cion:after,\n  .radio .check-cion:before,\n  .radio .check-cion:after {\n    font-family: FontAwesome;\n    font-size: 21px;\n    /*absolutely positioned*/\n    position: absolute;\n    top: 11px;\n    width: 22px;\n    height: 22px;\n    border-radius: 22px;\n    box-sizing: border-box;\n    background-color: #007aff;\n    content: '';\n}\n.checkbox .check-cion:after,\n  .radio .check-cion:after {\n    content: '';\n    background: no-repeat center;\n    -webkit-background-size: 12px 9px;\n    background-size: 12px 9px;\n    max-width: 0;\n    overflow: hidden;\n    opacity: 0.5;\n    transition: all 0.2s;\n}\n.checkbox input[type=\"checkbox\"],\n  .checkbox input[type=\"radio\"],\n  .radio input[type=\"checkbox\"],\n  .radio input[type=\"radio\"] {\n    display: none;\n}\n.checkbox input[type=\"checkbox\"]:checked ~ .check-cion:after,\n  .checkbox input[type=\"radio\"]:checked ~ .check-cion:after,\n  .checkbox .item.active .check-cion:after,\n  .radio input[type=\"checkbox\"]:checked ~ .check-cion:after,\n  .radio input[type=\"radio\"]:checked ~ .check-cion:after,\n  .radio .item.active .check-cion:after {\n    max-width: 25px;\n    /*an arbitratry number more than the icon's width*/\n    opacity: 1;\n    /*for fade in effect*/\n}\n.checkbox .check-cion:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E\");\n}\n.radio .check-cion:after {\n  background: #FFFFFF;\n  width: 8px;\n  height: 8px;\n  margin: 7px;\n}\n.checkbox-left label,\n.radio-left label {\n  padding-left: 30px;\n}\n.checkbox-left .check-cion:before,\n.checkbox-left .check-cion:after,\n.radio-left .check-cion:before,\n.radio-left .check-cion:after {\n  left: 0.625rem;\n}\n.checkbox-right .check-cion:before,\n.checkbox-right .check-cion:after,\n.radio-right .check-cion:before,\n.radio-right .check-cion:after {\n  right: 0.625rem;\n}\n", "", {"version":3,"sources":["/./src/radio.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,aAAa;EACb,kBAAkB;CAAE;AACpB;IACE,aAAa;CAAE;AACjB;IACE,aAAa;IACb,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,iBAAiB;IACjB,iBAAiB;CAAE;AACrB;IACE,8BAA8B;CAAE;AAClC;IACE,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,0BAA0B;CAAE;AAC9B;IACE,gBAAgB;CAAE;AAEtB;EACE,mBAAmB;CAAE;AACrB;IACE,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,4BAA4B;IAC5B,mBAAmB;CAAE;AAEzB;;EAEE,mBAAmB;CAAE;AACrB;;IAEE,gBAAgB;CAAE;AACpB;;;;IAIE,yBAAyB;IACzB,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,uBAAuB;IACvB,0BAA0B;IAC1B,YAAY;CAAE;AAChB;;IAEE,YAAY;IACZ,6BAA6B;IAC7B,kCAAkC;IAClC,0BAA0B;IAC1B,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,qBAAqB;CAAE;AACzB;;;;IAIE,cAAc;CAAE;AAClB;;;;;;IAME,gBAAgB;IAChB,mDAAmD;IACnD,WAAW;IACX,sBAAsB;CAAE;AAE5B;EACE,gWAAgW;CAAE;AAEpW;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,YAAY;CAAE;AAEhB;;EAEE,mBAAmB;CAAE;AAEvB;;;;EAIE,eAAe;CAAE;AAEnB;;;;EAIE,gBAAgB;CAAE","file":"radio.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.input-row {\n  height: 40px;\n  line-height: 25px; }\n  .input-row label {\n    height: 40px; }\n  .input-row .input {\n    float: right;\n    height: 40px;\n    width: 65%;\n    margin-bottom: 0;\n    border: 0;\n    background: none;\n    box-shadow: none; }\n  .input-row select {\n    padding: 10px 15px !important; }\n  .input-row .toggle {\n    width: 50px;\n    height: 30px;\n    margin: 5px 13px;\n    border: 2px solid #e6e6e6; }\n  .input-row .input-select {\n    margin-top: 3px; }\n\n.location {\n  position: relative; }\n  .location .icon-area {\n    position: absolute;\n    right: 15px;\n    width: 40px;\n    height: 40px;\n    border-left: 1px solid #eee;\n    text-align: center; }\n\n.checkbox,\n.radio {\n  position: relative; }\n  .checkbox label,\n  .radio label {\n    cursor: pointer; }\n  .checkbox .check-cion:before,\n  .checkbox .check-cion:after,\n  .radio .check-cion:before,\n  .radio .check-cion:after {\n    font-family: FontAwesome;\n    font-size: 21px;\n    /*absolutely positioned*/\n    position: absolute;\n    top: 11px;\n    width: 22px;\n    height: 22px;\n    border-radius: 22px;\n    box-sizing: border-box;\n    background-color: #007aff;\n    content: ''; }\n  .checkbox .check-cion:after,\n  .radio .check-cion:after {\n    content: '';\n    background: no-repeat center;\n    -webkit-background-size: 12px 9px;\n    background-size: 12px 9px;\n    max-width: 0;\n    overflow: hidden;\n    opacity: 0.5;\n    transition: all 0.2s; }\n  .checkbox input[type=\"checkbox\"],\n  .checkbox input[type=\"radio\"],\n  .radio input[type=\"checkbox\"],\n  .radio input[type=\"radio\"] {\n    display: none; }\n  .checkbox input[type=\"checkbox\"]:checked ~ .check-cion:after,\n  .checkbox input[type=\"radio\"]:checked ~ .check-cion:after,\n  .checkbox .item.active .check-cion:after,\n  .radio input[type=\"checkbox\"]:checked ~ .check-cion:after,\n  .radio input[type=\"radio\"]:checked ~ .check-cion:after,\n  .radio .item.active .check-cion:after {\n    max-width: 25px;\n    /*an arbitratry number more than the icon's width*/\n    opacity: 1;\n    /*for fade in effect*/ }\n\n.checkbox .check-cion:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E\"); }\n\n.radio .check-cion:after {\n  background: #FFFFFF;\n  width: 8px;\n  height: 8px;\n  margin: 7px; }\n\n.checkbox-left label,\n.radio-left label {\n  padding-left: 30px; }\n\n.checkbox-left .check-cion:before,\n.checkbox-left .check-cion:after,\n.radio-left .check-cion:before,\n.radio-left .check-cion:after {\n  left: 0.625rem; }\n\n.checkbox-right .check-cion:before,\n.checkbox-right .check-cion:after,\n.radio-right .check-cion:before,\n.radio-right .check-cion:after {\n  right: 0.625rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    name: 'radio',
	    props: {
	        model: {
	            required: true
	        },
	        position: {
	            type: String,
	            default: 'right'
	        }
	    }
	};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    class: 'table-view radio radio-' + _vm.position
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-653e3a56", module.exports)
	  }
	}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(144)
	
	/* template */
	var __vue_template__ = __webpack_require__(145)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-545004a0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-545004a0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tab.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 144 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        header: {
	            type: String
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            index: 0
	        };
	    },
	
	    computed: {
	        show: function show() {
	            return this.$parent.active == this.index;
	        },
	        transition: function transition() {
	            return this.$parent.effect;
	        }
	    },
	    created: function created() {
	        this.$parent.renderData.push({
	            header: this.header,
	            disabled: this.disabled
	        });
	    },
	    mounted: function mounted() {
	        for (var c in this.$parent.$children) {
	            if (this.$parent.$children[c].$el == this.$el) {
	                this.index = c;
	                break;
	            }
	        }
	    }
	};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "control-content",
	    class: {
	      hide: !_vm.show
	    },
	    attrs: {
	      "transition": _vm.transition
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-545004a0", module.exports)
	  }
	}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(147)
	
	/* script */
	__vue_exports__ = __webpack_require__(149)
	
	/* template */
	var __vue_template__ = __webpack_require__(150)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\tabs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2e594d1a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2e594d1a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(148);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2e594d1a!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabs.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2e594d1a!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.segmented-control {\n  position: relative;\n  display: table;\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  width: auto;\n  padding-left: 0;\n}\n.segmented-control .control-item {\n    display: table-cell;\n    width: 1%;\n    padding-top: 6px;\n    padding-bottom: 7px;\n    overflow: hidden;\n    line-height: 1;\n    color: #333;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    border-left: 1px solid #ccc;\n}\n.segmented-control .control-item:first-child {\n      border-left-width: 0;\n}\n.segmented-control .control-item:active {\n      background-color: #eee;\n}\n.segmented-control .control-item.active {\n      background-color: #ccc;\n}\n.segmented-control-primary {\n  border-color: #428bca;\n}\n.segmented-control-primary .control-item {\n    color: #428bca;\n    border-color: inherit;\n}\n.segmented-control-primary .control-item:active {\n      background-color: #cde1f1;\n}\n.segmented-control-primary .control-item.active {\n      color: #fff;\n      background-color: #428bca;\n}\n.segmented-control-positive {\n  border-color: #5cb85c;\n}\n.segmented-control-positive .control-item {\n    color: #5cb85c;\n    border-color: inherit;\n}\n.segmented-control-positive .control-item:active {\n      background-color: #d8eed8;\n}\n.segmented-control-positive .control-item.active {\n      color: #fff;\n      background-color: #5cb85c;\n}\n.segmented-control-negative {\n  border-color: #d9534f;\n}\n.segmented-control-negative .control-item {\n    color: #d9534f;\n    border-color: inherit;\n}\n.segmented-control-negative .control-item:active {\n      background-color: #f9e2e2;\n}\n.segmented-control-negative .control-item.active {\n      color: #fff;\n      background-color: #d9534f;\n}\n.segmented-control-negative .control-item a.disabled {\n      color: #777;\n}\n.control-content.active {\n  display: block;\n}\n", "", {"version":3,"sources":["/./src/tabs.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;CAAE;AAClB;IACE,oBAAoB;IACpB,UAAU;IACV,iBAAiB;IACjB,oBAAoB;IACpB,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,oBAAoB;IACpB,4BAA4B;CAAE;AAC9B;MACE,qBAAqB;CAAE;AACzB;MACE,uBAAuB;CAAE;AAC3B;MACE,uBAAuB;CAAE;AAE/B;EACE,sBAAsB;CAAE;AACxB;IACE,eAAe;IACf,sBAAsB;CAAE;AACxB;MACE,0BAA0B;CAAE;AAC9B;MACE,YAAY;MACZ,0BAA0B;CAAE;AAElC;EACE,sBAAsB;CAAE;AACxB;IACE,eAAe;IACf,sBAAsB;CAAE;AACxB;MACE,0BAA0B;CAAE;AAC9B;MACE,YAAY;MACZ,0BAA0B;CAAE;AAElC;EACE,sBAAsB;CAAE;AACxB;IACE,eAAe;IACf,sBAAsB;CAAE;AACxB;MACE,0BAA0B;CAAE;AAC9B;MACE,YAAY;MACZ,0BAA0B;CAAE;AAC9B;MACE,YAAY;CAAE;AAEpB;EACE,eAAe;CAAE","file":"tabs.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.segmented-control {\n  position: relative;\n  display: table;\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  width: auto;\n  padding-left: 0; }\n  .segmented-control .control-item {\n    display: table-cell;\n    width: 1%;\n    padding-top: 6px;\n    padding-bottom: 7px;\n    overflow: hidden;\n    line-height: 1;\n    color: #333;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    border-left: 1px solid #ccc; }\n    .segmented-control .control-item:first-child {\n      border-left-width: 0; }\n    .segmented-control .control-item:active {\n      background-color: #eee; }\n    .segmented-control .control-item.active {\n      background-color: #ccc; }\n\n.segmented-control-primary {\n  border-color: #428bca; }\n  .segmented-control-primary .control-item {\n    color: #428bca;\n    border-color: inherit; }\n    .segmented-control-primary .control-item:active {\n      background-color: #cde1f1; }\n    .segmented-control-primary .control-item.active {\n      color: #fff;\n      background-color: #428bca; }\n\n.segmented-control-positive {\n  border-color: #5cb85c; }\n  .segmented-control-positive .control-item {\n    color: #5cb85c;\n    border-color: inherit; }\n    .segmented-control-positive .control-item:active {\n      background-color: #d8eed8; }\n    .segmented-control-positive .control-item.active {\n      color: #fff;\n      background-color: #5cb85c; }\n\n.segmented-control-negative {\n  border-color: #d9534f; }\n  .segmented-control-negative .control-item {\n    color: #d9534f;\n    border-color: inherit; }\n    .segmented-control-negative .control-item:active {\n      background-color: #f9e2e2; }\n    .segmented-control-negative .control-item.active {\n      color: #fff;\n      background-color: #d9534f; }\n    .segmented-control-negative .control-item a.disabled {\n      color: #777; }\n\n.control-content.active {\n  display: block; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 149 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        effect: {
	            type: String,
	            default: 'fadein'
	        }
	    },
	    data: function data() {
	        return {
	            renderData: [],
	            active: 0
	        };
	    },
	
	    methods: {
	        handleTabListClick: function handleTabListClick(index, el) {
	            if (!el.disabled) this.active = index;
	        }
	    }
	};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('ul', {
	    staticClass: "segmented-control",
	    attrs: {
	      "role": "tablist"
	    }
	  }, _vm._l((_vm.renderData), function(r, index) {
	    return _c('a', {
	      staticClass: "control-item",
	      class: {
	        'active': (index === _vm.active),
	        'disabled': r.disabled
	      },
	      attrs: {
	        "disabled": r.disabled
	      },
	      domProps: {
	        "innerHTML": _vm._s(r.header)
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.handleTabListClick(index, r)
	        }
	      }
	    })
	  })), _vm._v(" "), _c('div', {
	    staticClass: "card"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2e594d1a", module.exports)
	  }
	}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(152)
	
	/* script */
	__vue_exports__ = __webpack_require__(154)
	
	/* template */
	var __vue_template__ = __webpack_require__(155)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\toast.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a28872fc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a28872fc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] toast.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a28872fc!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./toast.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a28872fc!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./toast.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.modal-toast {\n  z-index: 100000;\n}\n.modal-toast .modal-inner {\n    background-color: transparent;\n}\n.modal-toast .modal-text {\n    background: rgba(0, 0, 0, 0.7);\n    padding: 0.33333rem;\n    border-radius: 0.25rem;\n    color: #fff;\n    text-align: center;\n}\n", "", {"version":3,"sources":["/./src/toast.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,gBAAgB;CAAE;AAClB;IACE,8BAA8B;CAAE;AAClC;IACE,+BAA+B;IAC/B,oBAAoB;IACpB,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;CAAE","file":"toast.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.modal-toast {\n  z-index: 100000; }\n  .modal-toast .modal-inner {\n    background-color: transparent; }\n  .modal-toast .modal-text {\n    background: rgba(0, 0, 0, 0.7);\n    padding: 0.33333rem;\n    border-radius: 0.25rem;\n    color: #fff;\n    text-align: center; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _modal = __webpack_require__(102);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        show: {
	            type: Boolean,
	            default: false
	        }, //是否存在mask
	        mask: {
	            type: Boolean,
	            default: true
	        }, //点击mask关闭
	        maskclose: {
	            type: Boolean,
	            default: true
	        },
	        time: {
	            type: Number,
	            default: 3000
	        }
	    },
	    components: {
	        modal: _modal2.default
	    },
	    data: function data() {
	        return {
	            innerShow: this.show
	        };
	    },
	
	    watch: {
	        innerShow: function innerShow(val) {
	            this.$emit('update:show', val);
	        },
	        show: function show(val, oldVal) {
	            this.innerShow = val;
	            if (val) {
	                this.t = setTimeout(function () {
	                    this.show = false;
	                }.bind(this), Number(this.time));
	            } else {
	                clearTimeout(this.t);
	            }
	        }
	    }
	}; //
	//
	//
	//
	//
	//

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('modal', {
	    attrs: {
	      "show": _vm.innerShow,
	      "type": "toast",
	      "maskclose": _vm.maskclose,
	      "mask": _vm.mask,
	      "time": _vm.time,
	      "hastitle": false
	    },
	    on: {
	      "update:show": function($event) {
	        _vm.innerShow = $event
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a28872fc", module.exports)
	  }
	}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(157)
	
	/* script */
	__vue_exports__ = __webpack_require__(159)
	
	/* template */
	var __vue_template__ = __webpack_require__(160)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\git\\vue-ratchet\\src\\toggle.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1278e309"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1278e309", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1278e309", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] toggle.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1278e309&scoped=true!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./toggle.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1278e309&scoped=true!./../node_modules/sass-loader/lib/loader.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./toggle.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.toggle[data-v-1278e309] {\n  position: relative;\n  display: block;\n  /*   width: 74px;\r\n  height: 30px;\r\n  background-color: #fff;\r\n  border: 2px solid #ddd;\r\n  border-radius: 20px; */\n  width: 2.5rem;\n  height: 1.5rem;\n  border-radius: 64px;\n  background-color: #ccc;\n  -webkit-transition-property: background-color, border;\n  -moz-transition-property: background-color, border;\n  transition-property: background-color, border;\n  -webkit-transition-duration: 0.2s;\n  -moz-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n}\n.toggle .toggle-handle[data-v-1278e309] {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    z-index: 2;\n    /*     width: 30px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 100px; */\n    top: 2px;\n    left: 2px;\n    height: 1.375rem;\n    width: 1.375rem;\n    border-radius: 50%;\n    background-color: #fff;\n    -webkit-transition-property: -webkit-transform, border, width;\n    -moz-transition-property: -moz-transform, border, width;\n    transition-property: transform, border, width;\n    -webkit-transition-duration: 0.2s;\n    -moz-transition-duration: 0.2s;\n    transition-duration: 0.2s;\n}\n.toggle[data-v-1278e309]:before {\n    position: absolute;\n    top: 5px;\n    right: 11px;\n    font-size: 13px;\n    color: #999;\n    text-transform: uppercase;\n}\n.toggle.active[data-v-1278e309] {\n    background-color: #099fde;\n}\n.toggle.active .toggle-handle[data-v-1278e309] {\n      border-color: #099fde;\n      -webkit-transform: translate3d(1rem, 0, 0);\n      -ms-transform: translate3d(1rem, 0, 0);\n      transform: translate3d(1rem, 0, 0);\n}\n.toggle.active[data-v-1278e309]:before {\n      right: auto;\n      left: 15px;\n      color: #fff;\n}\n.toggle input[type=\"checkbox\"][data-v-1278e309] {\n    display: none;\n}\n", "", {"version":3,"sources":["/./src/toggle.vue"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,mBAAmB;EACnB,eAAe;EACf;;;;yBAIuB;EACvB,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,uBAAuB;EACvB,sDAAsD;EACtD,mDAAmD;EACnD,8CAA8C;EAC9C,kCAAkC;EAClC,+BAA+B;EAC/B,0BAA0B;CAAE;AAC5B;IACE,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,WAAW;IACX;;;;4BAIwB;IACxB,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,8DAA8D;IAC9D,wDAAwD;IACxD,8CAA8C;IAC9C,kCAAkC;IAClC,+BAA+B;IAC/B,0BAA0B;CAAE;AAC9B;IACE,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,0BAA0B;CAAE;AAC9B;IACE,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,2CAA2C;MAC3C,uCAAuC;MACvC,mCAAmC;CAAE;AACvC;MACE,YAAY;MACZ,WAAW;MACX,YAAY;CAAE;AAClB;IACE,cAAc;CAAE","file":"toggle.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.toggle {\n  position: relative;\n  display: block;\n  /*   width: 74px;\r\n  height: 30px;\r\n  background-color: #fff;\r\n  border: 2px solid #ddd;\r\n  border-radius: 20px; */\n  width: 2.5rem;\n  height: 1.5rem;\n  border-radius: 64px;\n  background-color: #ccc;\n  -webkit-transition-property: background-color, border;\n  -moz-transition-property: background-color, border;\n  transition-property: background-color, border;\n  -webkit-transition-duration: 0.2s;\n  -moz-transition-duration: 0.2s;\n  transition-duration: 0.2s; }\n  .toggle .toggle-handle {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    z-index: 2;\n    /*     width: 30px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 100px; */\n    top: 2px;\n    left: 2px;\n    height: 1.375rem;\n    width: 1.375rem;\n    border-radius: 50%;\n    background-color: #fff;\n    -webkit-transition-property: -webkit-transform, border, width;\n    -moz-transition-property: -moz-transform, border, width;\n    transition-property: transform, border, width;\n    -webkit-transition-duration: 0.2s;\n    -moz-transition-duration: 0.2s;\n    transition-duration: 0.2s; }\n  .toggle:before {\n    position: absolute;\n    top: 5px;\n    right: 11px;\n    font-size: 13px;\n    color: #999;\n    text-transform: uppercase; }\n  .toggle.active {\n    background-color: #099fde; }\n    .toggle.active .toggle-handle {\n      border-color: #099fde;\n      -webkit-transform: translate3d(1rem, 0, 0);\n      -ms-transform: translate3d(1rem, 0, 0);\n      transform: translate3d(1rem, 0, 0); }\n    .toggle.active:before {\n      right: auto;\n      left: 15px;\n      color: #fff; }\n  .toggle input[type=\"checkbox\"] {\n    display: none; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 159 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    name: 'toggle',
	    model: {
	        prop: 'checked', // Rename from default 'value' property.
	        event: 'change' // Rename from default 'input' event.
	    },
	    props: {
	        checked: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            innnerChecked: this.checked
	        };
	    },
	
	    watch: {
	        innnerChecked: function innnerChecked(value) {
	            this.$emit('change', Boolean(value));
	        }
	    },
	    methods: {
	        toggle: function toggle() {
	            this.innnerChecked = !this.innnerChecked;
	        }
	    }
	};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "toggle",
	    class: {
	      'active': _vm.checked
	    }
	  }, [_c('v-touch', {
	    on: {
	      "tap": _vm.toggle
	    }
	  }, [_c('div', {
	    staticClass: "toggle-handle"
	  })])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1278e309", module.exports)
	  }
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=VueRatchet.js.map