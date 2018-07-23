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
/***/ function(module, exports, __webpack_require__) {

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
	
	var _flash = __webpack_require__(108);
	
	var _flash2 = _interopRequireDefault(_flash);
	
	var _hd = __webpack_require__(113);
	
	var _hd2 = _interopRequireDefault(_hd);
	
	var _icon = __webpack_require__(12);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _item = __webpack_require__(90);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _list = __webpack_require__(85);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _listdata = __webpack_require__(118);
	
	var _listdata2 = _interopRequireDefault(_listdata);
	
	var _modal = __webpack_require__(100);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _loading = __webpack_require__(121);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _popover = __webpack_require__(126);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _num = __webpack_require__(131);
	
	var _num2 = _interopRequireDefault(_num);
	
	var _option = __webpack_require__(40);
	
	var _option2 = _interopRequireDefault(_option);
	
	var _radio = __webpack_require__(136);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _scroll = __webpack_require__(44);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	var _select = __webpack_require__(96);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _tab = __webpack_require__(141);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _tabs = __webpack_require__(144);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _toast = __webpack_require__(149);
	
	var _toast2 = _interopRequireDefault(_toast);
	
	var _toggle = __webpack_require__(154);
	
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\badge.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2308a9de&file=badge.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./badge.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2308a9de&file=badge.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./badge.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.badge {\n  display: inline-block;\n  padding: 2px 9px 3px;\n  font-size: 12px;\n  line-height: 1;\n  color: #333;\n  background-color: rgba(0, 0, 0, 0.15);\n  border-radius: 100px; }\n  .badge.badge-inverted {\n    padding: 0 5px 0 0;\n    background-color: transparent; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #428bca; }\n  .badge-primary.badge-inverted {\n    color: #428bca; }\n\n.badge-positive {\n  color: #fff;\n  background-color: #5cb85c; }\n  .badge-positive.badge-inverted {\n    color: #5cb85c; }\n\n.badge-negative {\n  color: #fff;\n  background-color: #d9534f; }\n  .badge-negative.badge-inverted {\n    color: #d9534f; }\n", "", {"version":3,"sources":["/./src/badge.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,sCAAsC;EACtC,qBAAqB,EAAE;EACvB;IACE,mBAAmB;IACnB,8BAA8B,EAAE;;AAEpC;EACE,YAAY;EACZ,0BAA0B,EAAE;EAC5B;IACE,eAAe,EAAE;;AAErB;EACE,YAAY;EACZ,0BAA0B,EAAE;EAC5B;IACE,eAAe,EAAE;;AAErB;EACE,YAAY;EACZ,0BAA0B,EAAE;EAC5B;IACE,eAAe,EAAE","file":"badge.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.badge {\n  display: inline-block;\n  padding: 2px 9px 3px;\n  font-size: 12px;\n  line-height: 1;\n  color: #333;\n  background-color: rgba(0, 0, 0, 0.15);\n  border-radius: 100px; }\n  .badge.badge-inverted {\n    padding: 0 5px 0 0;\n    background-color: transparent; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #428bca; }\n  .badge-primary.badge-inverted {\n    color: #428bca; }\n\n.badge-positive {\n  color: #fff;\n  background-color: #5cb85c; }\n  .badge-positive.badge-inverted {\n    color: #5cb85c; }\n\n.badge-negative {\n  color: #fff;\n  background-color: #d9534f; }\n  .badge-negative.badge-inverted {\n    color: #d9534f; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
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
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	     value: true
	});
	// <template>
	// 	<span class="badge" v-bind:class="[color?'badge-'+color:'', isInverted()?'badge-inverted':'']"><slot></slot></span>
	// </template>
	//
	// <script>
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
	// </script>
	//
	// <style lang="sass">
	// @import './scss/variables';
	// @import './scss/mixins';
	// .badge {
	//   display: inline-block;
	//   padding: 2px 9px 3px;
	//   font-size: 12px;
	//   line-height: 1;
	//   color: #333;
	//   background-color: rgba(0, 0, 0, .15);
	//   border-radius: 100px;
	//
	//   // Inverted badges have no background.
	//   &.badge-inverted {
	//     padding: 0 5px 0 0;
	//     background-color: transparent;
	//   }
	// }
	//
	//
	// // Badge modifiers
	// // --------------------------------------------------
	//
	// // Main badge
	// .badge-primary {
	//   color: #fff;
	//   background-color: $primary-color;
	//
	//   &.badge-inverted {
	//     color: $primary-color;
	//   }
	// }
	//
	// // Positive badge
	// .badge-positive {
	//   color: #fff;
	//   background-color: $positive-color;
	//
	//   &.badge-inverted {
	//     color: $positive-color;
	//   }
	// }
	//
	// // Negative badge
	// .badge-negative {
	//   color: #fff;
	//   background-color: $negative-color;
	//
	//   &.badge-inverted {
	//     color: $negative-color;
	//   }
	// }
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\r\n\t<span class=\"badge\" v-bind:class=\"[color?'badge-'+color:'', isInverted()?'badge-inverted':'']\"><slot></slot></span>\r\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\btn.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-545274d7&file=btn.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./btn.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-545274d7&file=btn.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./btn.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.btn {\n  position: relative;\n  display: inline-block;\n  padding: 6px 8px 7px;\n  margin-bottom: 0;\n  font-size: 0.5rem;\n  font-weight: 400;\n  line-height: 1;\n  color: #333;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px; }\n  .btn:active, .btn.active {\n    color: inherit;\n    background-color: #ccc; }\n  .btn:disabled, .btn.disabled {\n    opacity: .6; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border: 1px solid #428bca; }\n  .btn-primary:active, .btn-primary.active {\n    color: #fff;\n    background-color: #3071a9;\n    border: 1px solid #3071a9; }\n\n.btn-positive {\n  color: #fff;\n  background-color: #5cb85c;\n  border: 1px solid #5cb85c; }\n  .btn-positive:active, .btn-positive.active {\n    color: #fff;\n    background-color: #449d44;\n    border: 1px solid #449d44; }\n\n.btn-negative {\n  color: #fff;\n  background-color: #d9534f;\n  border: 1px solid #d9534f; }\n  .btn-negative:active, .btn-negative.active {\n    color: #fff;\n    background-color: #c9302c;\n    border: 1px solid #c9302c; }\n\n.btn-outlined {\n  background-color: transparent; }\n  .btn-outlined.btn-primary {\n    color: #428bca; }\n  .btn-outlined.btn-positive {\n    color: #5cb85c; }\n  .btn-outlined.btn-negative {\n    color: #d9534f; }\n  .btn-outlined.btn-primary:active, .btn-outlined.btn-positive:active, .btn-outlined.btn-negative:active {\n    color: #fff; }\n\n.btn-link {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  color: #428bca;\n  background-color: transparent;\n  border: 0; }\n  .btn-link:active, .btn-link.active {\n    color: #3071a9;\n    background-color: transparent; }\n\n.btn-block {\n  display: block;\n  width: 100%;\n  padding: 15px 0;\n  margin-bottom: 10px;\n  font-size: 18px; }\n\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  width: 100%; }\n\n.btn .badge {\n  margin: -2px -4px -2px 4px;\n  font-size: 12px;\n  background-color: rgba(0, 0, 0, 0.15); }\n\n.btn .badge-inverted,\n.btn:active .badge-inverted {\n  background-color: transparent; }\n\n.btn-primary:active .badge-inverted,\n.btn-positive:active .badge-inverted,\n.btn-negative:active .badge-inverted {\n  color: #fff; }\n\n.btn-block .badge {\n  position: absolute;\n  right: 0;\n  margin-right: 10px; }\n\n.btn .icon {\n  font-size: inherit; }\n", "", {"version":3,"sources":["/./src/btn.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB,EAAE;EACrB;IACE,eAAe;IACf,uBAAuB,EAAE;EAC3B;IACE,YAAY,EAAE;;AAElB;EACE,YAAY;EACZ,0BAA0B;EAC1B,0BAA0B,EAAE;EAC5B;IACE,YAAY;IACZ,0BAA0B;IAC1B,0BAA0B,EAAE;;AAEhC;EACE,YAAY;EACZ,0BAA0B;EAC1B,0BAA0B,EAAE;EAC5B;IACE,YAAY;IACZ,0BAA0B;IAC1B,0BAA0B,EAAE;;AAEhC;EACE,YAAY;EACZ,0BAA0B;EAC1B,0BAA0B,EAAE;EAC5B;IACE,YAAY;IACZ,0BAA0B;IAC1B,0BAA0B,EAAE;;AAEhC;EACE,8BAA8B,EAAE;EAChC;IACE,eAAe,EAAE;EACnB;IACE,eAAe,EAAE;EACnB;IACE,eAAe,EAAE;EACnB;IACE,YAAY,EAAE;;AAElB;EACE,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,8BAA8B;EAC9B,UAAU,EAAE;EACZ;IACE,eAAe;IACf,8BAA8B,EAAE;;AAEpC;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB,EAAE;;AAEpB;;;EAGE,YAAY,EAAE;;AAEhB;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,sCAAsC,EAAE;;AAE1C;;EAEE,8BAA8B,EAAE;;AAElC;;;EAGE,YAAY,EAAE;;AAEhB;EACE,mBAAmB;EACnB,SAAS;EACT,mBAAmB,EAAE;;AAEvB;EACE,mBAAmB,EAAE","file":"btn.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.btn {\n  position: relative;\n  display: inline-block;\n  padding: 6px 8px 7px;\n  margin-bottom: 0;\n  font-size: 0.5rem;\n  font-weight: 400;\n  line-height: 1;\n  color: #333;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px; }\n  .btn:active, .btn.active {\n    color: inherit;\n    background-color: #ccc; }\n  .btn:disabled, .btn.disabled {\n    opacity: .6; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #428bca;\n  border: 1px solid #428bca; }\n  .btn-primary:active, .btn-primary.active {\n    color: #fff;\n    background-color: #3071a9;\n    border: 1px solid #3071a9; }\n\n.btn-positive {\n  color: #fff;\n  background-color: #5cb85c;\n  border: 1px solid #5cb85c; }\n  .btn-positive:active, .btn-positive.active {\n    color: #fff;\n    background-color: #449d44;\n    border: 1px solid #449d44; }\n\n.btn-negative {\n  color: #fff;\n  background-color: #d9534f;\n  border: 1px solid #d9534f; }\n  .btn-negative:active, .btn-negative.active {\n    color: #fff;\n    background-color: #c9302c;\n    border: 1px solid #c9302c; }\n\n.btn-outlined {\n  background-color: transparent; }\n  .btn-outlined.btn-primary {\n    color: #428bca; }\n  .btn-outlined.btn-positive {\n    color: #5cb85c; }\n  .btn-outlined.btn-negative {\n    color: #d9534f; }\n  .btn-outlined.btn-primary:active, .btn-outlined.btn-positive:active, .btn-outlined.btn-negative:active {\n    color: #fff; }\n\n.btn-link {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  color: #428bca;\n  background-color: transparent;\n  border: 0; }\n  .btn-link:active, .btn-link.active {\n    color: #3071a9;\n    background-color: transparent; }\n\n.btn-block {\n  display: block;\n  width: 100%;\n  padding: 15px 0;\n  margin-bottom: 10px;\n  font-size: 18px; }\n\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  width: 100%; }\n\n.btn .badge {\n  margin: -2px -4px -2px 4px;\n  font-size: 12px;\n  background-color: rgba(0, 0, 0, 0.15); }\n\n.btn .badge-inverted,\n.btn:active .badge-inverted {\n  background-color: transparent; }\n\n.btn-primary:active .badge-inverted,\n.btn-positive:active .badge-inverted,\n.btn-negative:active .badge-inverted {\n  color: #fff; }\n\n.btn-block .badge {\n  position: absolute;\n  right: 0;\n  margin-right: 10px; }\n\n.btn .icon {\n  font-size: inherit; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _badge = __webpack_require__(1);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _icon = __webpack_require__(12);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<button class="btn"
	// 	 v-bind:class="[color?'btn-'+color:'', outlined!==void 0?'btn-outlined':'', block!==void 0?'btn-block':'', classes?classes:'']">
	// 		<icon v-if="icon" :icon="icon"></icon>
	// 		<slot>{{text}}</slot>
	// 		<slot name="content"></slot>
	// 		<badge v-if="badge!==void 0" :inverted="outlined!==void 0" :color="color">{{badge}}</badge>
	// 	</button>
	// </template>
	//
	// <script>
	exports.default = {
		name: 'btn',
		components: [_icon2.default, _badge2.default],
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
	// </script>
	//
	// <style lang="sass">
	// 	@import './scss/variables';
	// 	@import './scss/mixins';
	// 	.btn {
	// 	  position: relative;
	// 	  display: inline-block;
	// 	  padding: 6px 8px 7px;
	// 	  margin-bottom: 0; // For input.btn
	// 	  font-size: $button-font-size;
	// 	  font-weight: $font-weight-light;
	// 	  line-height: 1;
	// 	  color: #333;
	// 	  text-align: center;
	// 	  white-space: nowrap;
	// 	  vertical-align: top;
	// 	  cursor: pointer;
	// 	  background-color: $chrome-color;
	// 	  border: 1px solid #ccc;
	// 	  border-radius: 3px;
	//
	// 	  // Active & filled button styles
	// 	  &:active,
	// 	  &.active {
	// 	    color: inherit; // Overriding the global style for all anchors.
	// 	    background-color: #ccc;
	// 	  }
	//
	// 	  // Disabled styles & filled button active styles
	// 	  &:disabled,
	// 	  &.disabled {
	// 	    opacity: .6;
	// 	  }
	// 	}
	//
	//
	// 	// Other button types
	// 	// --------------------------------------------------
	//
	// 	// Primary button (Default color is blue)
	// 	.btn-primary {
	// 	  color: #fff;
	// 	  background-color: $primary-color;
	// 	  border: 1px solid $primary-color;
	//
	// 	  &:active,
	// 	  &.active {
	// 	    color: #fff;
	// 	    background-color: darken($primary-color, 10%);
	// 	    border: 1px solid darken($primary-color, 10%);
	// 	  }
	// 	}
	//
	// 	// Positive button (Default color is green)
	// 	.btn-positive {
	// 	  color: #fff;
	// 	  background-color: $positive-color;
	// 	  border: 1px solid $positive-color;
	//
	// 	  &:active,
	// 	  &.active {
	// 	    color: #fff;
	// 	    background-color: darken($positive-color, 10%);
	// 	    border: 1px solid darken($positive-color, 10%);
	// 	  }
	// 	}
	//
	// 	// Negative button (Default color is red)
	// 	.btn-negative {
	// 	  color: #fff;
	// 	  background-color: $negative-color;
	// 	  border: 1px solid $negative-color;
	//
	// 	  &:active,
	// 	  &.active {
	// 	    color: #fff;
	// 	    background-color: darken($negative-color, 10%);
	// 	    border: 1px solid darken($negative-color, 10%);
	// 	  }
	// 	}
	//
	// 	// Outlined buttons
	// 	.btn-outlined {
	// 	  background-color: transparent;
	//
	// 	  &.btn-primary {
	// 	    color: $primary-color;
	// 	  }
	// 	  &.btn-positive {
	// 	    color: $positive-color;
	// 	  }
	// 	  &.btn-negative {
	// 	    color: $negative-color;
	// 	  }
	// 	  // Active states
	// 	  &.btn-primary:active,
	// 	  &.btn-positive:active,
	// 	  &.btn-negative:active {
	// 	    color: #fff;
	// 	  }
	// 	}
	//
	// 	// Link button (Buttons that look like links)
	// 	.btn-link {
	// 	  padding-top: 6px;
	// 	  padding-bottom: 6px;
	// 	  color: $primary-color;
	// 	  background-color: transparent;
	// 	  border: 0;
	//
	// 	  &:active,
	// 	  &.active {
	// 	    color: darken($primary-color, 10%);
	// 	    background-color: transparent;
	// 	  }
	// 	}
	//
	// 	// Block level buttons (full width buttons)
	// 	.btn-block {
	// 	  display: block;
	// 	  width: 100%;
	// 	  padding: 15px 0;
	// 	  margin-bottom: 10px;
	// 	  font-size: 18px;
	// 	}
	//
	//
	// 	// Button overrides
	// 	// --------------------------------------------------
	//
	// 	input[type="submit"],
	// 	input[type="reset"],
	// 	input[type="button"] {
	// 	  width: 100%;
	// 	}
	//
	//
	// 	// Buttons with badges
	// 	// --------------------------------------------------
	//
	// 	// Generic styles for all badges within default buttons
	// 	.btn .badge {
	// 	  margin: -2px -4px -2px 4px;
	// 	  font-size: 12px;
	// 	  background-color: rgba(0,0,0,.15);
	// 	}
	//
	// 	// Buttons with inverted badges
	// 	.btn .badge-inverted,
	// 	.btn:active .badge-inverted {
	// 	  background-color: transparent;
	// 	}
	// 	.btn-primary:active .badge-inverted,
	// 	.btn-positive:active .badge-inverted,
	// 	.btn-negative:active .badge-inverted {
	// 	  color: #fff;
	// 	}
	//
	// 	// Position badges within block level buttons
	// 	// Note: These are absolutely positioned so that text of button isn't "pushed" by badge and always
	// 	// stays at the center of button
	// 	.btn-block .badge {
	// 	  position: absolute;
	// 	  right: 0;
	// 	  margin-right: 10px;
	// 	}
	//
	//
	// 	// Buttons with Ratchicons
	// 	// --------------------------------------------------
	//
	// 	.btn .icon {
	// 	  font-size: inherit;
	// 	}
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(13)
	__vue_script__ = __webpack_require__(19)
	__vue_template__ = __webpack_require__(20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e21715e4&file=icon.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./icon.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e21715e4&file=icon.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./icon.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n  font-family: Ratchicons;\n  font-weight: normal;\n  font-style: normal;\n  src: url(" + __webpack_require__(15) + ");\n  src: url(" + __webpack_require__(15) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(16) + ") format(\"woff\"), url(" + __webpack_require__(17) + ") format(\"truetype\"), url(" + __webpack_require__(18) + "#svgFontName) format(\"svg\"); }\n\n.icon {\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: 24px;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased; }\n\n.icon-back:before {\n  content: '\\E80A'; }\n\n.icon-bars:before {\n  content: '\\E80E'; }\n\n.icon-caret:before {\n  content: '\\E80F'; }\n\n.icon-check:before {\n  content: '\\E810'; }\n\n.icon-close:before {\n  content: '\\E811'; }\n\n.icon-code:before {\n  content: '\\E812'; }\n\n.icon-compose:before {\n  content: '\\E813'; }\n\n.icon-download:before {\n  content: '\\E815'; }\n\n.icon-edit:before {\n  content: '\\E829'; }\n\n.icon-forward:before {\n  content: '\\E82A'; }\n\n.icon-gear:before {\n  content: '\\E821'; }\n\n.icon-home:before {\n  content: '\\E82B'; }\n\n.icon-info:before {\n  content: '\\E82C'; }\n\n.icon-list:before {\n  content: '\\E823'; }\n\n.icon-more-vertical:before {\n  content: '\\E82E'; }\n\n.icon-more:before {\n  content: '\\E82F'; }\n\n.icon-pages:before {\n  content: '\\E824'; }\n\n.icon-pause:before {\n  content: '\\E830'; }\n\n.icon-person:before {\n  content: '\\E832'; }\n\n.icon-play:before {\n  content: '\\E816'; }\n\n.icon-plus:before {\n  content: '\\E817'; }\n\n.icon-refresh:before {\n  content: '\\E825'; }\n\n.icon-search:before {\n  content: '\\E819'; }\n\n.icon-share:before {\n  content: '\\E81A'; }\n\n.icon-sound:before {\n  content: '\\E827'; }\n\n.icon-sound2:before {\n  content: '\\E828'; }\n\n.icon-sound3:before {\n  content: '\\E80B'; }\n\n.icon-sound4:before {\n  content: '\\E80C'; }\n\n.icon-star-filled:before {\n  content: '\\E81B'; }\n\n.icon-star:before {\n  content: '\\E81C'; }\n\n.icon-stop:before {\n  content: '\\E81D'; }\n\n.icon-trash:before {\n  content: '\\E81E'; }\n\n.icon-up-nav:before {\n  content: '\\E81F'; }\n\n.icon-up:before {\n  content: '\\E80D'; }\n\n.icon-right-nav:before {\n  content: '\\E818'; }\n\n.icon-right:before {\n  content: '\\E826'; }\n\n.icon-down-nav:before {\n  content: '\\E814'; }\n\n.icon-down:before {\n  content: '\\E820'; }\n\n.icon-left-nav:before {\n  content: '\\E82D'; }\n\n.icon-left:before {\n  content: '\\E822'; }\n", "", {"version":3,"sources":["/./src/icon.vue.style"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,mCAAmC;EACnC,4MAAgO,EAAE;;AAEpO;EACE,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;EACf,sBAAsB;EACtB,oCAAoC,EAAE;;AAExC;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE","file":"icon.vue","sourcesContent":["@font-face {\n  font-family: Ratchicons;\n  font-weight: normal;\n  font-style: normal;\n  src: url(\"./fonts/ratchicons.eot\");\n  src: url(\"./fonts/ratchicons.eot?#iefix\") format(\"embedded-opentype\"), url(\"./fonts/ratchicons.woff\") format(\"woff\"), url(\"./fonts/ratchicons.ttf\") format(\"truetype\"), url(\"./fonts/ratchicons.svg#svgFontName\") format(\"svg\"); }\n\n.icon {\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: 24px;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased; }\n\n.icon-back:before {\n  content: '\\e80a'; }\n\n.icon-bars:before {\n  content: '\\e80e'; }\n\n.icon-caret:before {\n  content: '\\e80f'; }\n\n.icon-check:before {\n  content: '\\e810'; }\n\n.icon-close:before {\n  content: '\\e811'; }\n\n.icon-code:before {\n  content: '\\e812'; }\n\n.icon-compose:before {\n  content: '\\e813'; }\n\n.icon-download:before {\n  content: '\\e815'; }\n\n.icon-edit:before {\n  content: '\\e829'; }\n\n.icon-forward:before {\n  content: '\\e82a'; }\n\n.icon-gear:before {\n  content: '\\e821'; }\n\n.icon-home:before {\n  content: '\\e82b'; }\n\n.icon-info:before {\n  content: '\\e82c'; }\n\n.icon-list:before {\n  content: '\\e823'; }\n\n.icon-more-vertical:before {\n  content: '\\e82e'; }\n\n.icon-more:before {\n  content: '\\e82f'; }\n\n.icon-pages:before {\n  content: '\\e824'; }\n\n.icon-pause:before {\n  content: '\\e830'; }\n\n.icon-person:before {\n  content: '\\e832'; }\n\n.icon-play:before {\n  content: '\\e816'; }\n\n.icon-plus:before {\n  content: '\\e817'; }\n\n.icon-refresh:before {\n  content: '\\e825'; }\n\n.icon-search:before {\n  content: '\\e819'; }\n\n.icon-share:before {\n  content: '\\e81a'; }\n\n.icon-sound:before {\n  content: '\\e827'; }\n\n.icon-sound2:before {\n  content: '\\e828'; }\n\n.icon-sound3:before {\n  content: '\\e80b'; }\n\n.icon-sound4:before {\n  content: '\\e80c'; }\n\n.icon-star-filled:before {\n  content: '\\e81b'; }\n\n.icon-star:before {\n  content: '\\e81c'; }\n\n.icon-stop:before {\n  content: '\\e81d'; }\n\n.icon-trash:before {\n  content: '\\e81e'; }\n\n.icon-up-nav:before {\n  content: '\\e81f'; }\n\n.icon-up:before {\n  content: '\\e80d'; }\n\n.icon-right-nav:before {\n  content: '\\e818'; }\n\n.icon-right:before {\n  content: '\\e826'; }\n\n.icon-down-nav:before {\n  content: '\\e814'; }\n\n.icon-down:before {\n  content: '\\e820'; }\n\n.icon-left-nav:before {\n  content: '\\e82d'; }\n\n.icon-left:before {\n  content: '\\e822'; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ea4a08a9d13eac796eb335310c8084f0.eot";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5f48561abb43ace3f2a761ee719f0113.ttf";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "891748d22cec952712edded9037e09b0.svg";

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	     value: true
	});
	// <template>
	// 	<span class="icon {{classData}}"></span>
	// </template>
	//
	// <script>
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

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\r\n\t<span class=\"icon {{classData}}\"></span>\r\n";

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\r\n\t<button class=\"btn\"\r\n\t v-bind:class=\"[color?'btn-'+color:'', outlined!==void 0?'btn-outlined':'', block!==void 0?'btn-block':'', classes?classes:'']\">\r\n\t\t<icon v-if=\"icon\" :icon=\"icon\"></icon>\r\n\t\t<slot>{{text}}</slot>\r\n\t\t<slot name=\"content\"></slot>\r\n\t\t<badge v-if=\"badge!==void 0\" :inverted=\"outlined!==void 0\" :color=\"color\">{{badge}}</badge>\r\n\t</button>\r\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(23)
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\check.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	// <li @click="v2m" class="table-view-cell item {{active?'active':''}}">
	//     <label class="{{hasicon?'check-cion':''}}"><slot>{{title}}</slot></label>
	// </li>
	// </template>
	//
	// <script>
	//这是个很神奇的组件，父组件可以是checkbox 或 radio 或是其它, 父组件有个属性model可以取得选中的值
	//适用于一切选择项
	exports.default = {
	    name: 'check',
	    props: {
	        //选中后写到model的值
	        key: {
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
	            var val = this.key || title;
	            this.active = this.ischeckbox ? !! ~this.$parent.model.indexOf(val) : this.$parent.model === val;
	        },
	        v2m: function v2m() {
	            this.active = this.ischeckbox ? !this.active : true;
	            this.getval();
	        },
	        getval: function getval() {
	            var pmodel = this.$parent.model,
	                val = this.key || title;
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
	                this.$parent.model = val;
	                this.m2v();
	            }
	        }
	    },
	    computed: {
	        ischeckbox: function ischeckbox() {
	            return this.$parent.type === 'checkbox';
	            // return this.$parent.constructor.name.toLowerCase() === 'checkbox';
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\r\n<li @click=\"v2m\" class=\"table-view-cell item {{active?'active':''}}\">\r\n    <label class=\"{{hasicon?'check-cion':''}}\"><slot>{{title}}</slot></label>\r\n</li>\r\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(26)
	__vue_script__ = __webpack_require__(28)
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\checks.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3b33fe80&file=checks.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./checks.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3b33fe80&file=checks.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./checks.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.input-row {\n  height: 40px;\n  line-height: 25px; }\n  .input-row label {\n    height: 40px; }\n  .input-row .input {\n    float: right;\n    height: 40px;\n    width: 65%;\n    margin-bottom: 0;\n    border: 0;\n    background: none;\n    box-shadow: none; }\n  .input-row select {\n    padding: 10px 15px !important; }\n  .input-row .toggle {\n    width: 50px;\n    height: 30px;\n    margin: 5px 13px;\n    border: 2px solid #e6e6e6; }\n  .input-row .input-select {\n    margin-top: 3px; }\n\n.checkbox, .radio {\n  position: relative; }\n  .checkbox label, .radio label {\n    cursor: pointer; }\n  .checkbox label:before, .checkbox label:after, .radio label:before, .radio label:after {\n    font-family: FontAwesome;\n    font-size: 21px;\n    /*absolutely positioned*/\n    position: absolute;\n    top: 11px;\n    width: 22px;\n    height: 22px;\n    border-radius: 22px;\n    box-sizing: border-box;\n    background-color: #007aff;\n    content: ''; }\n  .checkbox label:after, .radio label:after {\n    content: '';\n    background: no-repeat center;\n    background-size: 12px 9px;\n    max-width: 0;\n    overflow: hidden;\n    opacity: 0.5;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n  .checkbox input[type=\"checkbox\"],\n  .checkbox input[type=\"radio\"], .radio input[type=\"checkbox\"],\n  .radio input[type=\"radio\"] {\n    display: none; }\n  .checkbox input[type=\"checkbox\"]:checked ~ label:after,\n  .checkbox input[type=\"radio\"]:checked ~ label:after,\n  .checkbox .item.active label:after, .radio input[type=\"checkbox\"]:checked ~ label:after,\n  .radio input[type=\"radio\"]:checked ~ label:after,\n  .radio .item.active label:after {\n    max-width: 25px;\n    /*an arbitratry number more than the icon's width*/\n    opacity: 1;\n    /*for fade in effect*/ }\n\n.checkbox label:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E\"); }\n\n.radio label:after {\n  background: #FFFFFF;\n  width: 8px;\n  height: 8px;\n  margin: 7px; }\n\n.checkbox-left label, .radio-left label {\n  padding-left: 30px; }\n\n.checkbox-left label:before, .checkbox-left label:after, .radio-left label:before, .radio-left label:after {\n  left: 0.625rem; }\n\n.checkbox-right label:before, .checkbox-right label:after, .radio-right label:before, .radio-right label:after {\n  right: 0.625rem; }\n", "", {"version":3,"sources":["/./src/checks.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,aAAa;EACb,kBAAkB,EAAE;EACpB;IACE,aAAa,EAAE;EACjB;IACE,aAAa;IACb,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,iBAAiB;IACjB,iBAAiB,EAAE;EACrB;IACE,8BAA8B,EAAE;EAClC;IACE,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,0BAA0B,EAAE;EAC9B;IACE,gBAAgB,EAAE;;AAEtB;EACE,mBAAmB,EAAE;EACrB;IACE,gBAAgB,EAAE;EACpB;IACE,yBAAyB;IACzB,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,uBAAuB;IACvB,0BAA0B;IAC1B,YAAY,EAAE;EAChB;IACE,YAAY;IACZ,6BAA6B;IAE7B,0BAA0B;IAC1B,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,6BAAqB;IAArB,qBAAqB,EAAE;EACzB;;;IAGE,cAAc,EAAE;EAClB;;;;;IAKE,gBAAgB;IAChB,mDAAmD;IACnD,WAAW;IACX,sBAAsB,EAAE;;AAE5B;EACE,gWAAgW,EAAE;;AAEpW;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,YAAY,EAAE;;AAEhB;EACE,mBAAmB,EAAE;;AAEvB;EACE,eAAe,EAAE;;AAEnB;EACE,gBAAgB,EAAE","file":"checks.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.input-row {\n  height: 40px;\n  line-height: 25px; }\n  .input-row label {\n    height: 40px; }\n  .input-row .input {\n    float: right;\n    height: 40px;\n    width: 65%;\n    margin-bottom: 0;\n    border: 0;\n    background: none;\n    box-shadow: none; }\n  .input-row select {\n    padding: 10px 15px !important; }\n  .input-row .toggle {\n    width: 50px;\n    height: 30px;\n    margin: 5px 13px;\n    border: 2px solid #e6e6e6; }\n  .input-row .input-select {\n    margin-top: 3px; }\n\n.checkbox, .radio {\n  position: relative; }\n  .checkbox label, .radio label {\n    cursor: pointer; }\n  .checkbox label:before, .checkbox label:after, .radio label:before, .radio label:after {\n    font-family: FontAwesome;\n    font-size: 21px;\n    /*absolutely positioned*/\n    position: absolute;\n    top: 11px;\n    width: 22px;\n    height: 22px;\n    border-radius: 22px;\n    box-sizing: border-box;\n    background-color: #007aff;\n    content: ''; }\n  .checkbox label:after, .radio label:after {\n    content: '';\n    background: no-repeat center;\n    -webkit-background-size: 12px 9px;\n    background-size: 12px 9px;\n    max-width: 0;\n    overflow: hidden;\n    opacity: 0.5;\n    transition: all 0.2s; }\n  .checkbox input[type=\"checkbox\"],\n  .checkbox input[type=\"radio\"], .radio input[type=\"checkbox\"],\n  .radio input[type=\"radio\"] {\n    display: none; }\n  .checkbox input[type=\"checkbox\"]:checked ~ label:after,\n  .checkbox input[type=\"radio\"]:checked ~ label:after,\n  .checkbox .item.active label:after, .radio input[type=\"checkbox\"]:checked ~ label:after,\n  .radio input[type=\"radio\"]:checked ~ label:after,\n  .radio .item.active label:after {\n    max-width: 25px;\n    /*an arbitratry number more than the icon's width*/\n    opacity: 1;\n    /*for fade in effect*/ }\n\n.checkbox label:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E\"); }\n\n.radio label:after {\n  background: #FFFFFF;\n  width: 8px;\n  height: 8px;\n  margin: 7px; }\n\n.checkbox-left label, .radio-left label {\n  padding-left: 30px; }\n\n.checkbox-left label:before, .checkbox-left label:after, .radio-left label:before, .radio-left label:after {\n  left: 0.625rem; }\n\n.checkbox-right label:before, .checkbox-right label:after, .radio-right label:before, .radio-right label:after {\n  right: 0.625rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <ul class="table-view {{type}} {{type}}-{{position}}">
	// 	<slot></slot>
	// </ul>
	// </template>
	//
	// <script>
	exports.default = {
		props: {
			type: {
				type: String,
				default: 'checkbox' //radio options
			},
			model: {
				twoWay: true,
				required: true
			},
			position: {
				type: String,
				default: 'right'
			}

		}
	};
	// </script>
	//
	// <style lang="sass">
	// @import './scss/variables';
	// @import './scss/mixins';
	// .input-row {
	//     height: 40px;
	//     line-height: 25px;
	//     label{
	//         height: 40px;
	//     }
	//     .input{
	//         float: right;
	//         height: 40px;
	//         width: 65%;
	//         //padding-left: 0;
	//         margin-bottom: 0;
	//         border: 0;
	//         background: none;
	//         box-shadow: none;
	//     }
	//     select{
	//         padding: 10px 15px!important;
	//     }
	//     .toggle{
	//         width: 50px;
	//         height: 30px;
	//         margin: 5px 13px;
	//         border: 2px solid #e6e6e6;
	//     }
	//     .input-select{
	//         margin-top: 3px;
	//     }
	// }
	//
	// //checkbox
	// .checkbox, .radio{
	//     position: relative;
	//     label {
	//         cursor: pointer;
	//     }
	//     label:before, label:after {
	//         font-family: FontAwesome;
	//         font-size: 21px;
	//         /*absolutely positioned*/
	//         position: absolute; top: 11px;
	//         width: 22px;
	//         height: 22px;
	//         border-radius: 22px;
	//         box-sizing: border-box;
	//         background-color: #007aff;
	//         content: '';
	//     }
	//     label:after {
	//         content: '';
	//         background: no-repeat center;
	//         -webkit-background-size: 12px 9px;
	//         background-size: 12px 9px;
	//
	//         max-width: 0;
	//         overflow: hidden;
	//         opacity: 0.5;
	//         transition: all 0.2s;
	//     }
	//
	//     input[type="checkbox"],
	//     input[type="radio"] {
	//         display: none;
	//     }
	//     input[type="checkbox"]:checked ~ label:after,
	//     input[type="radio"]:checked ~ label:after,
	//     .item.active label:after{
	//         max-width: 25px; /*an arbitratry number more than the icon's width*/
	//         opacity: 1; /*for fade in effect*/
	//     }
	// }
	//
	// .checkbox{
	//     label:after{
	//         background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E");
	//     }
	// }
	//
	// .radio{
	//     label:after{
	//         background: #FFFFFF;
	//         width: 8px;
	//         height: 8px;
	//         margin: 7px;
	//     }
	// }
	//
	// .checkbox-left, .radio-left{
	//     label{
	//         padding-left: 30px;
	//     }
	//     label:before, label:after{
	//         left:$gapH;
	//     }
	// }
	// .checkbox-right,.radio-right{
	//     label:before, label:after{
	//         right:$gapH;
	//     }
	// }
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\r\n<ul class=\"table-view {{type}} {{type}}-{{position}}\">\r\n\t<slot></slot>\r\n</ul>\r\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(33)
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\datepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5f6f4b11&file=datepicker.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./datepicker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5f6f4b11&file=datepicker.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".center-inline[_v-5f6f4b11] {\n  display: inline-block; }\n\n.calendar[_v-5f6f4b11] {\n  width: 300px;\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #DEDEDE;\n  border-radius: 2px;\n  opacity: .95;\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease;\n  z-index: 100; }\n  .calendar.calendar-popup[_v-5f6f4b11] {\n    position: absolute; }\n  .calendar.calendar-static[_v-5f6f4b11] {\n    width: 100%; }\n\n.calendar-enter[_v-5f6f4b11], .calendar-leave[_v-5f6f4b11] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -10px, 0);\n          transform: translate3d(0, -10px, 0); }\n\n.calendar[_v-5f6f4b11]:before {\n  position: absolute;\n  left: 30px;\n  top: -10px;\n  content: \"\";\n  border: 5px solid transparent;\n  border-bottom-color: #DEDEDE; }\n\n.calendar[_v-5f6f4b11]:after {\n  position: absolute;\n  left: 30px;\n  top: -9px;\n  content: \"\";\n  border: 5px solid transparent;\n  border-bottom-color: #fff; }\n\n.calendar-panes[_v-5f6f4b11] {\n  background: #fff; }\n\n.calendar-tools[_v-5f6f4b11] {\n  font-size: 20px;\n  line-height: 32px;\n  color: #5e7a88;\n  text-align: center; }\n  .calendar-tools .float.left[_v-5f6f4b11] {\n    float: left; }\n  .calendar-tools .float.right[_v-5f6f4b11] {\n    float: right; }\n  .calendar-tools input[_v-5f6f4b11] {\n    font-size: 20px;\n    line-height: 32px;\n    color: #5e7a88;\n    width: 80px;\n    text-align: center;\n    border: none;\n    background-color: transparent; }\n  .calendar-tools > i[_v-5f6f4b11] {\n    margin: 0 16px;\n    line-height: 32px;\n    cursor: pointer;\n    color: #707070; }\n  .calendar-tools > i[_v-5f6f4b11]:hover {\n    color: #5e7a88; }\n\n.calendar table[_v-5f6f4b11] {\n  clear: both;\n  width: 100%;\n  margin-bottom: 10px;\n  border-collapse: collapse;\n  color: #444444; }\n\n.calendar td[_v-5f6f4b11] {\n  margin: 2px !important;\n  padding: 8px 0;\n  width: 14.28571429%;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 16px;\n  line-height: 125%;\n  cursor: pointer; }\n  .calendar td[_v-5f6f4b11]:hover {\n    background: #f3f8fa; }\n  .calendar td.week[_v-5f6f4b11] {\n    pointer-events: none !important;\n    cursor: default !important; }\n  .calendar td.disabled[_v-5f6f4b11] {\n    color: #c0c0c0;\n    pointer-events: none !important;\n    cursor: default !important; }\n  .calendar td.selected[_v-5f6f4b11] {\n    background-color: #5e7a88;\n    color: #fff;\n    font-size: 16px; }\n\n.calendar thead td[_v-5f6f4b11] {\n  text-transform: uppercase; }\n\n.calendar .timer[_v-5f6f4b11] {\n  margin: 10px 0;\n  text-align: center; }\n  .calendar .timer input[_v-5f6f4b11] {\n    border-radius: 2px;\n    padding: 5px;\n    font-size: 14px;\n    line-height: 18px;\n    color: #5e7a88;\n    width: 50px;\n    text-align: center;\n    border: 1px solid #efefef; }\n  .calendar .timer input[_v-5f6f4b11]:focus {\n    border: 1px solid #5e7a88; }\n\n.calendar-button[_v-5f6f4b11] {\n  text-align: center; }\n\n.calendar-button button[_v-5f6f4b11] {\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  min-width: 8em;\n  vertical-align: baseline;\n  background: #5e7a88;\n  color: #fff;\n  margin: 0 .25em 0 0;\n  padding: .8em 2.5em;\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  border-radius: .3em; }\n\n.calendar-button button.cancel[_v-5f6f4b11] {\n  background: #efefef;\n  color: #666; }\n\n.calendar .lunar[_v-5f6f4b11] {\n  font-size: 11px;\n  line-height: 150%;\n  color: #aaa; }\n\n.calendar td.selected .lunar[_v-5f6f4b11] {\n  color: #fff; }\n", "", {"version":3,"sources":["/./src/datepicker.vue.style"],"names":[],"mappings":"AAAA;EACE,sBAAsB,EAAE;;AAE1B;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;EACnB,aAAa;EACb,iCAAyB;EAAzB,yBAAyB;EACzB,aAAa,EAAE;EACf;IACE,mBAAmB,EAAE;EACvB;IACE,YAAY,EAAE;;AAElB;EACE,WAAW;EACX,4CAAoC;UAApC,oCAAoC,EAAE;;AAExC;EACE,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,6BAA6B,EAAE;;AAEjC;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,8BAA8B;EAC9B,0BAA0B,EAAE;;AAE9B;EACE,iBAAiB,EAAE;;AAErB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,mBAAmB,EAAE;EACrB;IACE,YAAY,EAAE;EAChB;IACE,aAAa,EAAE;EACjB;IACE,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,8BAA8B,EAAE;EAClC;IACE,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,eAAe,EAAE;EACnB;IACE,eAAe,EAAE;;AAErB;EACE,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,0BAA0B;EAC1B,eAAe,EAAE;;AAEnB;EACE,uBAAuB;EACvB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB,EAAE;EAClB;IACE,oBAAoB,EAAE;EACxB;IACE,gCAAgC;IAChC,2BAA2B,EAAE;EAC/B;IACE,eAAe;IACf,gCAAgC;IAChC,2BAA2B,EAAE;EAC/B;IACE,0BAA0B;IAC1B,YAAY;IACZ,gBAAgB,EAAE;;AAEtB;EACE,0BAA0B,EAAE;;AAE9B;EACE,eAAe;EACf,mBAAmB,EAAE;EACrB;IACE,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;;AAEhC;EACE,mBAAmB,EAAE;;AAEvB;EACE,aAAa;EACb,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,oBAAoB;EACpB,YAAY;EACZ,oBAAoB;EACpB,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB,EAAE;;AAExB;EACE,oBAAoB;EACpB,YAAY,EAAE;;AAEhB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE","file":"datepicker.vue","sourcesContent":[".center-inline {\n  display: inline-block; }\n\n.calendar {\n  width: 300px;\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #DEDEDE;\n  border-radius: 2px;\n  opacity: .95;\n  transition: all .5s ease;\n  z-index: 100; }\n  .calendar.calendar-popup {\n    position: absolute; }\n  .calendar.calendar-static {\n    width: 100%; }\n\n.calendar-enter, .calendar-leave {\n  opacity: 0;\n  transform: translate3d(0, -10px, 0); }\n\n.calendar:before {\n  position: absolute;\n  left: 30px;\n  top: -10px;\n  content: \"\";\n  border: 5px solid transparent;\n  border-bottom-color: #DEDEDE; }\n\n.calendar:after {\n  position: absolute;\n  left: 30px;\n  top: -9px;\n  content: \"\";\n  border: 5px solid transparent;\n  border-bottom-color: #fff; }\n\n.calendar-panes {\n  background: #fff; }\n\n.calendar-tools {\n  font-size: 20px;\n  line-height: 32px;\n  color: #5e7a88;\n  text-align: center; }\n  .calendar-tools .float.left {\n    float: left; }\n  .calendar-tools .float.right {\n    float: right; }\n  .calendar-tools input {\n    font-size: 20px;\n    line-height: 32px;\n    color: #5e7a88;\n    width: 80px;\n    text-align: center;\n    border: none;\n    background-color: transparent; }\n  .calendar-tools > i {\n    margin: 0 16px;\n    line-height: 32px;\n    cursor: pointer;\n    color: #707070; }\n  .calendar-tools > i:hover {\n    color: #5e7a88; }\n\n.calendar table {\n  clear: both;\n  width: 100%;\n  margin-bottom: 10px;\n  border-collapse: collapse;\n  color: #444444; }\n\n.calendar td {\n  margin: 2px !important;\n  padding: 8px 0;\n  width: 14.28571429%;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 16px;\n  line-height: 125%;\n  cursor: pointer; }\n  .calendar td:hover {\n    background: #f3f8fa; }\n  .calendar td.week {\n    pointer-events: none !important;\n    cursor: default !important; }\n  .calendar td.disabled {\n    color: #c0c0c0;\n    pointer-events: none !important;\n    cursor: default !important; }\n  .calendar td.selected {\n    background-color: #5e7a88;\n    color: #fff;\n    font-size: 16px; }\n\n.calendar thead td {\n  text-transform: uppercase; }\n\n.calendar .timer {\n  margin: 10px 0;\n  text-align: center; }\n  .calendar .timer input {\n    border-radius: 2px;\n    padding: 5px;\n    font-size: 14px;\n    line-height: 18px;\n    color: #5e7a88;\n    width: 50px;\n    text-align: center;\n    border: 1px solid #efefef; }\n  .calendar .timer input:focus {\n    border: 1px solid #5e7a88; }\n\n.calendar-button {\n  text-align: center; }\n\n.calendar-button button {\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  min-height: 1em;\n  min-width: 8em;\n  vertical-align: baseline;\n  background: #5e7a88;\n  color: #fff;\n  margin: 0 .25em 0 0;\n  padding: .8em 2.5em;\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  border-radius: .3em; }\n\n.calendar-button button.cancel {\n  background: #efefef;\n  color: #666; }\n\n.calendar .lunar {\n  font-size: 11px;\n  line-height: 150%;\n  color: #aaa; }\n\n.calendar td.selected .lunar {\n  color: #fff; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	// <template>
	//     <div @click.stop=""  @touchstart.stop="" class="calendar {{popup ? 'calendar-popup':'calendar-static'}}" v-show="show" :style="{'left':x+'px','top':y+'px'}" transition="calendar" transition-mode="out-in">
	//         <div class="calendar-tools">
	//             <i class="icon icon-left-nav  float left glyphicon glyphicon-menu-left" @click="prev"></i>
	//             <i class="icon icon-right-nav float right glyphicon glyphicon-menu-right" @click="next"></i>
	//             <div class="text center-inline">
	//                 <input type="number" v-model="year" :value="year" @change="render(year, month)" min="1970" max="2100" maxlength="4" number>/ {{month}}
	//             </div>
	//             <div class="calendar-panes" v-for="(index, amonth) in days">
	//                 <div class="text center-inline" v-if="pickerstyle>1">
	//                     <span v-if="month+index <= 12">{{year}}/{{month+index}}</span>
	//                     <span v-else>{{year+1}}/{{month+index-12}}</span>
	//                 </div>
	//                 <table cellpadding="5">
	//                     <thead>
	//                         <tr>
	//                             <td v-for="week in weeksHan" class="week">{{week}}</td>
	//                         </tr>
	//                     </thead>
	//                     <tr v-for="(k1,day) in amonth">
	//                         <td
	//                             v-for="(k2,child) in day"
	//                             :class="{ 'selected': child.selected, 'disabled': child.disabled }"
	//                             @click="select(index, k1,k2,$event)" @touchstart="select(index,k1,k2,$event)">
	//                             {{child.day}}
	//                             <div class="lunar" v-if="lunar">
	//                                 {{child.outadd}} 
	//                             </div>
	//                         </td>
	//                     </tr>
	//                 </table>
	//             </div>
	//             <div class="calendar-time" v-show="type=='datetime'||type=='time'">
	//                 <div class="timer">
	//                     <input type="number" v-model="hour" :value="hour" min="0" max="23" maxlength="2" number>时
	//                     <input type="number" v-model="minute" :value="minute" min="0" max="59" maxlength="2" number>分
	//                     <input type="number" v-model="second" :value="second" min="0" max="59" maxlength="2" number>秒
	//                 </div>
	//             </div>
	//             <div class="calendar-button" v-show="type=='datetime'||type=='time'||range">
	//                 <button @click="ok">确定</button>
	//                 <button @click="cancel" class="cancel">取消</button>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	
	module.exports = {
	    props: {
	        //显示未来几个月的日历 (0为一年)
	        //普通日历(1)  是否选择双日历面板(2), 或展开型的日历面板(0)
	        pickerstyle: {
	            type: Number,
	            default: 1 // 1, 2, 0           
	        },
	        popup: { //是否浮层显示
	            type: Boolean,
	            default: true
	        },
	        //type仅日期date //datatime 日期与时间
	        type: {
	            type: String,
	            default: "date"
	        },
	        //默认值
	        value: {
	            type: String,
	            twoWay: true,
	            default: ""
	        },
	        //日历是否显示与选择后自动隐藏
	        show: {
	            type: Boolean,
	            twoWay: true,
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
	            default: ""
	        },
	        max: {
	            type: String,
	            default: ""
	        },
	        //双联日期选择器的第二个选择器有些属性。其值需为第一个选择器的值
	        begin: {
	            type: String,
	            default: ''
	        }, end: {
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
	            year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0, sep: "-",
	            days: [], selected: [],
	            weeksHan: ['日', '一', '二', '三', '四', '五', '六'],
	            weeksEng: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	            months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	            monthsEng: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	            monthsHan: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
	            lunarStr: ['初', '十', '廿', '三'],
	            lunardays: { '0101': '春节', '0115': '元宵', '0505': '端午', '0707': '七夕', '0715': '中元', '0815': '中秋', '0909': '重阳', '1208': '腊八', '1224': '小年' },
	            salardays: { '0101': '元旦', '0214': '情人节', '0308': '妇女节', '0312': '植树节', '0401': '愚人节', '0501': '劳动节', '0504': '青年节', '0601': '儿童节', '0701': '建党节', '0801': '建军节', '0910': '教师节', '1001': '国庆节', '1224': '平安夜', '1225': '圣诞' }
	        };
	    },
	    created: function created() {
	        var now = new Date();
	        // 如果有默认值
	        if (this.value) {
	            var timeAtom = this.gettime(this.value);
	            this.year = timeAtom[0];
	            this.month = timeAtom[1];
	            this.day = timeAtom[2];
	            if (this.type == "datetime") {
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
	            // this.value = this.output([this.year,this.month,this.day]);
	            // this.value = this.year + '-' + this.month + '-' + this.day;
	        }
	
	        this.currentMonth = this.month;
	        this.render(this.year, this.month);
	    },
	    watch: {
	        'show': function show(val, old) {
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
	            return next ? { y: y + 1, m: total - 12 } : prev ? { y: y - 1, m: 12 + total } : { y: y, m: total };
	        },
	        //获取某天的所有信息 m+1才是显示用的月分
	        getDayInfo: function getDayInfo(y, m, d) {
	            var date = new Date(y, m, d);
	            var dayinfo = {
	                day: d, month: m, year: y,
	                date: date,
	                lunar: this.getLunarInfo(date),
	                sterm: this.solarTermInfo(y, m)[d],
	                salarfest: this.salardays[this.zero(m + 1) + this.zero(d)] //这里的月份用的是视图的
	            };
	            dayinfo.lunarfest = this.lunardays[this.zero(dayinfo.lunar.month) + this.zero(dayinfo.lunar.day)];
	            dayinfo.tolunar = this.tolunar(dayinfo.lunar.day);
	            dayinfo.outadd = this.outadd(dayinfo);
	            // console.log(y, m, d, dayinfo.lunar.month, dayinfo.lunar.day)
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
	            var between = true;m = m + 1;
	            if (min) {
	                var bdate = this.gettime(min);
	                var by = bdate[0],
	                    bm = bdate[1],
	                    bd = bdate[2];
	                if (y < by) {
	                    between = false;
	                } else if (y === by) {
	                    if (m < bm) {
	                        between = false;
	                    } else if (m === bm) {
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
	                } else if (y === ey) {
	                    if (m > em) {
	                        between = false;
	                    } else if (m === em) {
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
	                temp = [];m = m - 1;
	            var prevMonthLastDate = new Date(y, m - 1, 0).getDate(); //前一个月的最后一天
	            var currMonth1DayWeek = new Date(y, m, 1).getDay(); //当月第一天星期
	            var currMonthLastDate = new Date(y, m + 1, 0).getDate(); //当月最后一天
	
	            //第一行(上个月)
	            temp[line] = [];
	            if (currMonth1DayWeek) {
	                var k = prevMonthLastDate - currMonth1DayWeek + 1;
	                for (var j = 0; j < currMonth1DayWeek; j++) {
	                    options = that.getDayInfo(y, m - 1, k);options.disabled = true;
	                    temp[line].push(options);
	                    k++;
	                }
	            }
	
	            var begin = this.begin || this.value; //没有begin时即为this.value一个值非范围
	            var end = this.end || this.value;
	            if (this.begin) {
	                this.min = this.begin;
	            }
	            if (this.end) {
	                this.max = this.end;
	            }
	
	            //当前月
	            for (var i = 1; i <= currMonthLastDate; i++) {
	                options = that.getDayInfo(y, m, i);
	                options.disabled = !this.isBetween(y, m, i, this.min, this.max);
	
	                if (begin && end) {
	                    options.selected = this.isBetween(y, m, i, begin, end);
	                }
	
	                var index = [0, line, new Date(y, m, i).getDay()].join('/');
	                if (options.selected && ! ~this.selected.indexOf(index)) {
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
	                options = that.getDayInfo(y, m + 1, kk);options.disabled = true;
	                temp[line].push(options);
	                kk++;
	            }
	            // console.log(this.selected,' this.selected');
	            return temp;
	        },
	        //渲染 pickerstyle 个月的日历数据
	        render: function render(y, m) {
	            this.days = [this.calcPane(y, m)];
	            if (this.pickerstyle !== 1) {
	                var daysarr = [];
	                for (var i = 0; i < this.pickerstyle; i++) {
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
	            this.year = ym.y;this.month = ym.m;
	            this.render(ym.y, ym.m);
	        },
	        next: function next(e) {
	            var ym = this.addmonths(this.year, this.month++, 1);
	            this.year = ym.y;this.month = ym.m;
	            this.render(ym.y, ym.m);
	        },
	        //k0,第几月的面板， k1行，k2列
	        select: function select(k0, k1, k2, e) {
	            var that = this,
	                date = this.days[k0][k1][k2];
	            this.day = date.day;
	            this.currentMonth = date.month + 1;
	            this.setRange(false);
	            var selval = date.year + '-' + this.currentMonth + '-' + date.day;
	            if (!this.begin) {
	                this.selected = [[k0, k1, k2].join('/')];
	            } else {
	                this.selected = [];
	                this.days.forEach(function (month, i) {
	                    month.forEach(function (row, ind) {
	                        row.forEach(function (day, index) {
	                            day.selected = that.isBetween(day.year, day.month, day.day, that.begin, selval);
	                            var arrindex = [i, ind, index].join('/');
	                            if (day.selected && ! ~that.selected.indexOf(arrindex)) {
	                                that.selected.push(arrindex);
	                            }
	                        });
	                    });
	                });
	            }
	            this.setRange(true);
	            var d = this.addmonths(this.year, this.month, k0);
	            this.value = this.output([d.y, d.m, this.day]);
	            if (this.autohide && this.type == 'date') {
	                this.show = false;
	            }
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
	            this.value = this.output([this.year, this.month, this.day, this.hour, this.minute, this.second]);
	            this.show = false;
	        },
	        cancel: function cancel() {
	            this.show = false;
	        },
	        // 格式化输出
	        output: function output(args) {
	            if (this.type == 'date') {
	                return args[0] + this.sep + this.zero(args[1]) + this.sep + this.zero(args[2]);
	            }
	            if (this.type == 'time') {
	                return this.zero(args[3]) + ":" + this.zero(args[4]) + ":" + this.zero(args[5]);
	            }
	            if (this.type == 'datetime') {
	                return args[0] + this.sep + this.zero(args[1]) + this.sep + this.zero(args[2]) + " " + this.zero(args[3]) + ":" + this.zero(args[4]) + ":" + this.zero(args[5]);
	            }
	        },
	
	        // 农历二十四节气，相关代码在网络上获取并修改
	        solarTermInfo: function () {
	            var cache = {};
	            var cachekeys = [];
	            var solarTerm = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];
	            var sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
	            // 返回某年的第n个节气为几日(从0小寒起算)
	            var getSolarTermIndex = function getSolarTermIndex(year, index) {
	                var offDate = new Date(31556925974.7 * (year - 1900) + sTermInfo[index] * 60000 + Date.UTC(1900, 0, 6, 2, 5));
	                return offDate.getUTCDate();
	            };
	
	            // 返回该月的节气信息
	            var getMonthSolarTerms = function getMonthSolarTerms(year, month) {
	                if (year instanceof Date) {
	                    month = year.getMonth();
	                    year = year.getFullYear();
	                }
	                var key = '' + year + month;
	                if (key in cache) {
	                    return cache[key];
	                }
	                var ret = cache[key] = {};
	                var index;
	                index = getSolarTermIndex(year - 1900, month * 2);
	                ret[index - 1] = solarTerm[month * 2];
	                index = getSolarTermIndex(year - 1900, month * 2 + 1);
	                ret[index - 1] = solarTerm[month * 2 + 1];
	                cachekeys.push(key);
	                if (cachekeys.length > 12) {
	                    delete cache[cachekeys.shift()];
	                }
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
	// </script>
	//
	// <style lang="sass" scoped>
	//     .center-inline{
	//         display: inline-block;
	//     }
	//     .calendar {
	//         width: 300px;
	//         padding: 10px;
	//         background: #fff;
	//         border: 1px solid #DEDEDE;
	//         border-radius: 2px;
	//         opacity:.95;
	//         transition: all .5s ease;
	//         z-index: 100;
	//         &.calendar-popup{
	//             position: absolute;
	//         }
	//         &.calendar-static{
	//             width:100%;
	//         }
	//     }
	//
	//     .calendar-enter, .calendar-leave {
	//         opacity: 0;
	//         transform: translate3d(0,-10px, 0);
	//     }
	//     .calendar:before {
	//         position: absolute;
	//         left:30px;
	//         top: -10px;
	//         content: "";
	//         border:5px solid rgba(0, 0, 0, 0);
	//         border-bottom-color: #DEDEDE;
	//     }
	//     .calendar:after {
	//         position: absolute;
	//         left:30px;
	//         top: -9px;
	//         content: "";
	//         border:5px solid rgba(0, 0, 0, 0);
	//         border-bottom-color: #fff;
	//     }
	//     .calendar-panes{
	//         background: #fff;
	//     }
	//     .calendar-tools{
	//         font-size: 20px;
	//         line-height: 32px;
	//         color:#5e7a88;
	//         text-align: center;
	//             .float.left{
	//                 float:left;
	//             }
	//             .float.right{
	//                 float:right;
	//             }
	//             input{
	//                 font-size: 20px;
	//                 line-height: 32px;
	//                 color: #5e7a88;
	//                 width: 80px;
	//                 text-align: center;
	//                 border:none;
	//                 background-color: transparent;
	//             }
	//             &>i{
	//                 margin:0 16px;
	//                 line-height: 32px;
	//                 cursor: pointer;
	//                 color:#707070;
	//             }
	//             &>i:hover{
	//                 color:#5e7a88;
	//             }
	//     }
	//
	//     .calendar table {
	//         clear: both;
	//         width: 100%;
	//         margin-bottom:10px;
	//         border-collapse: collapse;
	//         color: #444444;
	//     }
	//     .calendar td {
	//         margin:2px !important;
	//         padding:8px 0;
	//         width: 14.28571429%;
	//         text-align: center;
	//         vertical-align: middle;
	//         font-size:16px;
	//         line-height: 125%;
	//         cursor: pointer;
	//             &:hover{
	//                 background:#f3f8fa;
	//             }
	//             &.week{
	//                 pointer-events:none !important;
	//                 cursor: default !important;   
	//             }
	//             &.disabled {
	//                 color: #c0c0c0;
	//                 pointer-events:none !important;
	//                 cursor: default !important;
	//             }
	//             &.selected {
	//                 background-color: #5e7a88;
	//                 color: #fff;
	//                 font-size:16px;
	//             }
	//     }
	//
	//     .calendar thead td {
	//       text-transform: uppercase;
	//     }
	//     .calendar .timer{
	//         margin:10px 0;
	//         text-align: center;
	//         input{
	//             border-radius: 2px;
	//             padding:5px;
	//             font-size: 14px;
	//             line-height: 18px;
	//             color: #5e7a88;
	//             width: 50px;
	//             text-align: center;
	//             border:1px solid #efefef;
	//         }
	//         input:focus{
	//             border:1px solid #5e7a88;
	//         }
	//     }
	//
	//     .calendar-button{
	//         text-align: center;
	//     }
	//     .calendar-button button{
	//         border:none;
	//         cursor: pointer;
	//         display: inline-block;
	//         min-height: 1em;
	//         min-width: 8em;
	//         vertical-align: baseline;
	//         background:#5e7a88;
	//         color:#fff;
	//         margin: 0 .25em 0 0;
	//         padding: .8em 2.5em;
	//         font-size: 1em;
	//         line-height: 1em;
	//         text-align: center;
	//         border-radius: .3em;
	//     }
	//     .calendar-button button.cancel{
	//         background:#efefef;
	//         color:#666;
	//     }
	//     .calendar .lunar{
	//          font-size:11px;
	//          line-height: 150%;
	//          color:#aaa;  
	//     }
	//     .calendar td.selected .lunar{
	//          color:#fff;  
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n    <div @click.stop=\"\" @touchstart.stop=\"\" class=\"calendar {{popup ? 'calendar-popup':'calendar-static'}}\" v-show=\"show\" :style=\"{'left':x+'px','top':y+'px'}\" transition=\"calendar\" transition-mode=\"out-in\" _v-5f6f4b11=\"\">\n        <div class=\"calendar-tools\" _v-5f6f4b11=\"\">\n            <i class=\"icon icon-left-nav  float left glyphicon glyphicon-menu-left\" @click=\"prev\" _v-5f6f4b11=\"\"></i>\n            <i class=\"icon icon-right-nav float right glyphicon glyphicon-menu-right\" @click=\"next\" _v-5f6f4b11=\"\"></i>\n            <div class=\"text center-inline\" _v-5f6f4b11=\"\">\n                <input type=\"number\" v-model=\"year\" :value=\"year\" @change=\"render(year, month)\" min=\"1970\" max=\"2100\" maxlength=\"4\" number=\"\" _v-5f6f4b11=\"\">/ {{month}}\n            </div>\n            <div class=\"calendar-panes\" v-for=\"(index, amonth) in days\" _v-5f6f4b11=\"\">\n                <div class=\"text center-inline\" v-if=\"pickerstyle>1\" _v-5f6f4b11=\"\">\n                    <span v-if=\"month+index <= 12\" _v-5f6f4b11=\"\">{{year}}/{{month+index}}</span>\n                    <span v-else=\"\" _v-5f6f4b11=\"\">{{year+1}}/{{month+index-12}}</span>\n                </div>\n                <table cellpadding=\"5\" _v-5f6f4b11=\"\">\n                    <thead _v-5f6f4b11=\"\">\n                        <tr _v-5f6f4b11=\"\">\n                            <td v-for=\"week in weeksHan\" class=\"week\" _v-5f6f4b11=\"\">{{week}}</td>\n                        </tr>\n                    </thead>\n                    <tbody _v-5f6f4b11=\"\"><tr v-for=\"(k1,day) in amonth\" _v-5f6f4b11=\"\">\n                        <td v-for=\"(k2,child) in day\" :class=\"{ 'selected': child.selected, 'disabled': child.disabled }\" @click=\"select(index, k1,k2,$event)\" @touchstart=\"select(index,k1,k2,$event)\" _v-5f6f4b11=\"\">\n                            {{child.day}}\n                            <div class=\"lunar\" v-if=\"lunar\" _v-5f6f4b11=\"\">\n                                {{child.outadd}}  \n                            </div>\n                        </td>\n                    </tr>\n                </tbody></table>\n            </div>\n            <div class=\"calendar-time\" v-show=\"type=='datetime'||type=='time'\" _v-5f6f4b11=\"\">\n                <div class=\"timer\" _v-5f6f4b11=\"\">\n                    <input type=\"number\" v-model=\"hour\" :value=\"hour\" min=\"0\" max=\"23\" maxlength=\"2\" number=\"\" _v-5f6f4b11=\"\">时\n                    <input type=\"number\" v-model=\"minute\" :value=\"minute\" min=\"0\" max=\"59\" maxlength=\"2\" number=\"\" _v-5f6f4b11=\"\">分\n                    <input type=\"number\" v-model=\"second\" :value=\"second\" min=\"0\" max=\"59\" maxlength=\"2\" number=\"\" _v-5f6f4b11=\"\">秒\n                </div>\n            </div>\n            <div class=\"calendar-button\" v-show=\"type=='datetime'||type=='time'||range\" _v-5f6f4b11=\"\">\n                <button @click=\"ok\" _v-5f6f4b11=\"\">确定</button>\n                <button @click=\"cancel\" class=\"cancel\" _v-5f6f4b11=\"\">取消</button>\n            </div>\n        </div>\n    </div>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(36)
	__vue_script__ = __webpack_require__(38)
	__vue_template__ = __webpack_require__(107)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\datetime.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4f8e1c90&file=datetime.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./datetime.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4f8e1c90&file=datetime.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./datetime.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-options[_v-4f8e1c90] {\n  float: left; }\n", "", {"version":3,"sources":["/./src/datetime.vue.style"],"names":[],"mappings":"AAAA;EACE,YAAY,EAAE","file":"datetime.vue","sourcesContent":[".v-options {\n  float: left; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _date = __webpack_require__(39);
	
	var _option = __webpack_require__(40);
	
	var _option2 = _interopRequireDefault(_option);
	
	var _select = __webpack_require__(96);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _modal = __webpack_require__(100);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	__webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dpr = window.document.documentElement.getAttribute('data-dpr') || 1; // <template>
	//   	<vselect title="选择交车时间" :show.sync="show" :onyes="onyes">
	//     		<voption v-ref:date class="v-options" :height="height" :step="step" :data="datestr" width="35%" :onpanend="checkRange"></voption>
	//     		<voption v-ref:ampm class="v-options" :height="height" :step="step" :data="ampm" width="20%"  :onpanend="checkRange"></voption>
	//     		<voption v-ref:hour class="v-options" :height="height" :step="step" :data="hour" width="20%" :onpanend="checkRange"></voption>
	//     		<voption v-ref:minute class="v-options" :height="height" :step="step" :data="minute" width="25%" :onpanend="checkRange"></voption>
	//   	</vselect>
	//     <modal :show.sync="toastShow" :hastitle="false" type="toast" :time="1500" :mask="false">{{toastContent}}</modal>
	// </template>
	//
	// <script>
	
	exports.default = {
	  replace: false,
	  props: {
	    show: {
	      default: false,
	      type: Boolean
	    },
	    datevalue: { //时间戳，最终获取的值
	      type: Number,
	      twoWay: true
	    },
	    max: {
	      type: Number
	    },
	    toastContent: {
	      type: String,
	      default: '选择已超出最大值'
	    }
	  },
	  components: { voption: _option2.default, vselect: _select2.default, modal: _modal2.default },
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
	      toastShow: false
	    };
	  },
	  ready: function ready() {},
	
	  watch: {
	    'show': function show(nv, ov) {
	      this.days = (0, _date.dateDiff)(this.max);
	      // console.log(this.days, 'days');
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
	      console.log(+this.dateObj, this.dateObj, this.max, 'compare MAX');
	      var pass = +this.dateObj > this.max;
	      if (pass) {
	        this.dateSelected(maxDate);
	        this.toastShow = true;
	      }
	    }
	  }
	};
	// </script>
	// <style lang="sass" scoped>
	//   .v-options{
	//     float: left;
	//   }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * date api封装
	 * @author Joe Liu
	 * @email icareu.joe@gmail.com
	 */
	function dateFormat(date, format) {
	    if (!date) return;
	    var weeks = ['日', '一', '二', '三', '四', '五', '六'];
	    if (format === undefined) {
	        format = date;
	        date = new Date();
	    }
	    date = typeof date === 'number' ? new Date(date) : date;
	    var map = {
	        "M": date.getMonth() + 1, //月份
	        "d": date.getDate(), //日
	        "h": date.getHours(), //小时
	        "m": date.getMinutes(), //分
	        "s": date.getSeconds(), //秒
	        "q": Math.floor((date.getMonth() + 3) / 3), //季度
	        "S": date.getMilliseconds(), //毫秒
	        "W": weeks[date.getDay()] //周
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
	
	var todayStart = new Date().setHours(0, 0, 0, 0);
	var dateDiff = function dateDiff(timestape, time) {
	    return Math.ceil((timestape - (time ? time : +todayStart)) / (3600 * 1000 * 24));
	};
	
	exports.dateFormat = dateFormat;
	exports.dateDiff = dateDiff;
	exports.todayStart = todayStart;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(41)
	__vue_script__ = __webpack_require__(43)
	__vue_template__ = __webpack_require__(95)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\option.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-521eb7ca&file=option.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./option.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-521eb7ca&file=option.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui-options {\n  position: relative;\n  background-color: #efefef;\n  -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent); }\n  .ui-options .ui-cell {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 66px 0; }\n    .ui-options .ui-cell .table-view-cell {\n      border: 0 none;\n      padding: 0;\n      height: 33px;\n      line-height: 33px;\n      text-align: center;\n      background-image: none !important; }\n      .ui-options .ui-cell .table-view-cell a.navigate-right {\n        color: #999;\n        text-decoration: none; }\n      .ui-options .ui-cell .table-view-cell.active a.navigate-right {\n        font-weight: bold;\n        color: #007aff; }\n      .ui-options .ui-cell .table-view-cell > a:not(.btn) {\n        padding: 0;\n        margin: 0; }\n      .ui-options .ui-cell .table-view-cell .navigate-right:after, .ui-options .ui-cell .table-view-cell .push-right:after {\n        display: none; }\n  .ui-options .ui-cell-yard {\n    top: 66px;\n    position: absolute;\n    height: 33px;\n    width: 100%;\n    border-top: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n    background-color: #fff; }\n  .ui-options .table-view,\n  .ui-options .ui-scroll-content .ui-scroll-core {\n    background: none !important;\n    border: 0 none !important; }\n", "", {"version":3,"sources":["/./src/option.vue.style"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,iIAAiI,EAAE;EACnI;IACE,oBAAQ;IAAR,gBAAQ;QAAR,YAAQ;YAAR,QAAQ;IACR,gBAAgB,EAAE;IAClB;MACE,eAAe;MACf,WAAW;MACX,aAAa;MACb,kBAAkB;MAClB,mBAAmB;MACnB,kCAAkC,EAAE;MACpC;QACE,YAAY;QACZ,sBAAsB,EAAE;MAC1B;QACE,kBAAkB;QAClB,eAAe,EAAE;MACnB;QACE,WAAW;QACX,UAAU,EAAE;MACd;QACE,cAAc,EAAE;EACtB;IACE,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,uBAAuB,EAAE;EAC3B;;IAEE,4BAA4B;IAC5B,0BAA0B,EAAE","file":"option.vue","sourcesContent":[".ui-options {\n  position: relative;\n  background-color: #efefef;\n  -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent); }\n  .ui-options .ui-cell {\n    flex: 1;\n    padding: 66px 0; }\n    .ui-options .ui-cell .table-view-cell {\n      border: 0 none;\n      padding: 0;\n      height: 33px;\n      line-height: 33px;\n      text-align: center;\n      background-image: none !important; }\n      .ui-options .ui-cell .table-view-cell a.navigate-right {\n        color: #999;\n        text-decoration: none; }\n      .ui-options .ui-cell .table-view-cell.active a.navigate-right {\n        font-weight: bold;\n        color: #007aff; }\n      .ui-options .ui-cell .table-view-cell > a:not(.btn) {\n        padding: 0;\n        margin: 0; }\n      .ui-options .ui-cell .table-view-cell .navigate-right:after, .ui-options .ui-cell .table-view-cell .push-right:after {\n        display: none; }\n  .ui-options .ui-cell-yard {\n    top: 66px;\n    position: absolute;\n    height: 33px;\n    width: 100%;\n    border-top: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n    background-color: #fff; }\n  .ui-options .table-view,\n  .ui-options .ui-scroll-content .ui-scroll-core {\n    background: none !important;\n    border: 0 none !important; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _scroll = __webpack_require__(44);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	var _list = __webpack_require__(85);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _item = __webpack_require__(90);
	
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
	        activeindex: {
	            type: Number,
	            default: 0
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
	        scroll: _scroll2.default, list: _list2.default, item: _item2.default
	    },
	    /*ready(){
	    	let uicell = this.$el.querySelectorAll('.ui-cell')[0]
	    	let uiyard = this.$el.querySelectorAll('.ui-cell-yard')[0]
	     	uicell.style.paddingTop = this.step*2 + 'px'
	     	uicell.style.paddingBottom = this.step*2+ 'px'
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
	};
	// </script>
	//
	// <style lang="sass">
	// $selectItemHeight: 33px;
	// .ui-options{
	// 	position:relative;
	// 	background-color: #efefef;
	//     -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);
	// 	.ui-cell{
	// 	    flex: 1;
	// 	    padding: $selectItemHeight*2 0;
	//
	// 	    .table-view-cell{
	// 	        border: 0 none;
	// 	        padding: 0;
	// 	        height: $selectItemHeight;
	// 	        line-height: $selectItemHeight;
	// 	        text-align: center;
	// 	        background-image: none!important;
	// 	        a.navigate-right{
	// 		    	 color: #999;
	// 		    	 text-decoration: none;
	// 		    }
	// 	        &.active a.navigate-right{
	// 	            font-weight: bold;
	// 	            color: #007aff;
	// 	        }
	// 	        & > a:not(.btn){
	// 	            padding: 0;
	//                 margin: 0;
	// 	        }
	// 	        .navigate-right:after, .push-right:after{
	// 	            display: none;
	// 	        }
	// 	    }
	// 	}
	// 	.ui-cell-yard{
	// 	    top: $selectItemHeight*2;
	// 	    position: absolute;
	// 	    height: $selectItemHeight;
	// 	    width: 100%;
	// 	    border-top: 1px solid #ccc;
	// 	    border-bottom: 1px solid #ccc;
	// 	    background-color: #fff;
	// 	}
	// 	.table-view,
	//     .ui-scroll-content .ui-scroll-core{
	//         background: none!important;
	//         border: 0 none!important;
	//     }
	// }
	//
	// </style>
	//
	/* generated by vue-loader */
	// <template> 
	// 	<div class="ui-options" :style="{width: width}" :onpanend = "onpanend">
	// 		<div class="ui-cell-yard" :style="yardStyle"></div>
	// 		<scroll :enable="enable" :isx="false" :height="height" width='100%' :range="50" :step="step"  :onpanend="panend" >
	// 	        <list class="ui-cell" :style="cellStyle">
	// 	            <item :active='activeindex === $index' v-for="(key, val) in data" track-by="$index" :height="step">{{val}}</item>
	// 	        </list>
	// 	    </scroll>
	//     </div> 
	// </template>
	//
	// <script>

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(45)
	__vue_script__ = __webpack_require__(47)
	__vue_template__ = __webpack_require__(84)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\scroll.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

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
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-04332a22&file=scroll.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./scroll.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-04332a22&file=scroll.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./scroll.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/* === Scroll === */\n.gom-scroll[_v-04332a22] {\n  background-color: #fff;\n  padding: 10px; }\n\n.ui-scroll[_v-04332a22] {\n  overflow: hidden;\n  background-color: #eee; }\n  .ui-scroll > div[_v-04332a22] {\n    -webkit-backface-visibility: hidden;\n    -webkit-perspective: 1000; }\n  .ui-scroll .ui-scroll-core[_v-04332a22] {\n    background-color: #FFF;\n    width: auto; }\n  .ui-scroll .ui-scroll-front[_v-04332a22], .ui-scroll .ui-scroll-end[_v-04332a22] {\n    width: 100%;\n    text-align: center;\n    background-color: #eee;\n    font-size: 13px; }\n  .ui-scroll .ui-scroll-front[_v-04332a22] {\n    top: 0; }\n  .ui-scroll .ui-scroll-end[_v-04332a22] {\n    bottom: 0; }\n\n.ui-scroll-trans[_v-04332a22] {\n  -webkit-transition: -webkit-transform .3s ease;\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease; }\n\n.statusbar-overlay[_v-04332a22] {\n  background: #f7f7f8;\n  z-index: 10000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 20px;\n  width: 100%;\n  display: none;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms; }\n\n/* === Preloader === */\n.preloader[_v-04332a22] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  -webkit-animation: preloader-spin 1s steps(12, end) infinite;\n  animation: preloader-spin 1s steps(12, end) infinite; }\n\n.preloader-white[_v-04332a22] {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n@-webkit-keyframes preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/* === Pull To Refresh === */\n.pull-to-refresh-layer[_v-04332a22] {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 100%;\n  min-height: 44px; }\n\n.pull-to-refresh-layer .pull-to-refresh-arrow[_v-04332a22],\n.pull-to-refresh-layer .preloader[_v-04332a22] {\n  display: inline-block;\n  position: relative;\n  margin-left: 5px;\n  top: 5px; }\n\n.pull-to-refresh-layer .preloader[_v-04332a22],\n.pull-to-refresh-layer .preloader-text[_v-04332a22] {\n  visibility: hidden; }\n\n.pull-to-refresh-layer .pull-to-refresh-arrow[_v-04332a22] {\n  width: 13px;\n  height: 20px;\n  background: no-repeat center;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2026%2040'%3E%3Cpolygon%20points%3D'9%2C22%209%2C0%2017%2C0%2017%2C22%2026%2C22%2013.5%2C40%200%2C22'%20fill%3D'%238c8c8c'%2F%3E%3C%2Fsvg%3E\");\n  background-size: 13px 20px;\n  z-index: 10;\n  -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n  transform: rotate(0deg) translate3d(0, 0, 0);\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms; }\n\n.ui-scroll[_v-04332a22] {\n  overflow: hidden; }\n\n.ui-scroll-out.pull-to-refresh-no-navbar[_v-04332a22] {\n  margin-top: -44px;\n  height: calc(100% + 44px); }\n\n.ui-scroll-out.pull-to-refresh-no-navbar .pull-to-refresh-layer[_v-04332a22] {\n  margin-top: 0; }\n\n.ui-scroll-out.transitioning[_v-04332a22],\n.ui-scroll-out.refreshing[_v-04332a22] {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms; }\n\n.ui-scroll-out:not(.refreshing) .pull-to-refresh-layer .preloader[_v-04332a22] {\n  -webkit-animation: none;\n  animation: none; }\n\n.ui-scroll-out.refreshing .pull-to-refresh-arrow[_v-04332a22],\n.ui-scroll-out.refreshing .pull-to-refresh-text[_v-04332a22] {\n  visibility: hidden;\n  -webkit-transition-duration: 0ms;\n  transition-duration: 0ms; }\n\n.ui-scroll-out.refreshing .preloader[_v-04332a22],\n.ui-scroll-out.refreshing .preloader-text[_v-04332a22] {\n  visibility: visible; }\n\n.ui-scroll-out.pull-up .pull-to-refresh-arrow[_v-04332a22] {\n  -webkit-transform: rotate(180deg) translate3d(0, 0, 0);\n  transform: rotate(180deg) translate3d(0, 0, 0); }\n\n.pull-show-item[_v-04332a22] {\n  position: absolute;\n  width: 100%; }\n", "", {"version":3,"sources":["/./src/scroll.vue.style"],"names":[],"mappings":"AAAA,oBAAoB;AACpB;EACE,uBAAuB;EACvB,cAAc,EAAE;;AAElB;EACE,iBAAiB;EACjB,uBAAuB,EAAE;EACzB;IACE,oCAAoC;IACpC,0BAA0B,EAAE;EAC9B;IACE,uBAAuB;IACvB,YAAY,EAAE;EAChB;IACE,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB,EAAE;EACpB;IACE,OAAO,EAAE;EACX;IACE,UAAU,EAAE;;AAEhB;EACE,+CAA+B;EAA/B,uCAA+B;EAA/B,+BAA+B;EAA/B,2DAA+B,EAAE;;AAEnC;EACE,oBAAoB;EACpB,eAAe;EACf,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,aAAa;EACb,YAAY;EACZ,cAAc;EACd,mCAAmC;EACnC,2BAA2B,EAAE;;AAE/B,uBAAuB;AACvB;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,07CAA07C;EAC17C,yBAAyB;EACzB,sBAAsB;EACtB,6BAA6B;EAC7B,6DAA6D;EAC7D,qDAAqD,EAAE;;AAEzD;EACE,u7CAAu7C,EAAE;;AAE37C;EACE;IACE,kCAAkC,EAAE,EAAE;;AAE1C;EACE;IACE,kCAA0B;YAA1B,0BAA0B,EAAE,EAAE;;AAElC,6BAA6B;AAC7B;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,iBAAiB,EAAE;;AAErB;;EAEE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,SAAS,EAAE;;AAEb;;EAEE,mBAAmB,EAAE;;AAEvB;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,kRAAkR;EAClR,2BAA2B;EAC3B,YAAY;EACZ,qDAAqD;EACrD,6CAA6C;EAC7C,mCAAmC;EACnC,2BAA2B,EAAE;;AAE/B;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAGlB,0BAA0B,EAAE;;AAE9B;EACE,cAAc,EAAE;;AAElB;;EAEE,mCAAmC;EACnC,2BAA2B,EAAE;;AAE/B;EACE,wBAAwB;EACxB,gBAAgB,EAAE;;AAEpB;;EAEE,mBAAmB;EACnB,iCAAiC;EACjC,yBAAyB,EAAE;;AAE7B;;EAEE,oBAAoB,EAAE;;AAExB;EACE,uDAAuD;EACvD,+CAA+C,EAAE;;AAEnD;EACE,mBAAmB;EACnB,YAAY,EAAE","file":"scroll.vue","sourcesContent":["/* === Scroll === */\n.gom-scroll {\n  background-color: #fff;\n  padding: 10px; }\n\n.ui-scroll {\n  overflow: hidden;\n  background-color: #eee; }\n  .ui-scroll > div {\n    -webkit-backface-visibility: hidden;\n    -webkit-perspective: 1000; }\n  .ui-scroll .ui-scroll-core {\n    background-color: #FFF;\n    width: auto; }\n  .ui-scroll .ui-scroll-front, .ui-scroll .ui-scroll-end {\n    width: 100%;\n    text-align: center;\n    background-color: #eee;\n    font-size: 13px; }\n  .ui-scroll .ui-scroll-front {\n    top: 0; }\n  .ui-scroll .ui-scroll-end {\n    bottom: 0; }\n\n.ui-scroll-trans {\n  transition: transform .3s ease; }\n\n.statusbar-overlay {\n  background: #f7f7f8;\n  z-index: 10000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 20px;\n  width: 100%;\n  display: none;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms; }\n\n/* === Preloader === */\n.preloader {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  -webkit-animation: preloader-spin 1s steps(12, end) infinite;\n  animation: preloader-spin 1s steps(12, end) infinite; }\n\n.preloader-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n@-webkit-keyframes preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes preloader-spin {\n  100% {\n    transform: rotate(360deg); } }\n\n/* === Pull To Refresh === */\n.pull-to-refresh-layer {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 100%;\n  min-height: 44px; }\n\n.pull-to-refresh-layer .pull-to-refresh-arrow,\n.pull-to-refresh-layer .preloader {\n  display: inline-block;\n  position: relative;\n  margin-left: 5px;\n  top: 5px; }\n\n.pull-to-refresh-layer .preloader,\n.pull-to-refresh-layer .preloader-text {\n  visibility: hidden; }\n\n.pull-to-refresh-layer .pull-to-refresh-arrow {\n  width: 13px;\n  height: 20px;\n  background: no-repeat center;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2026%2040'%3E%3Cpolygon%20points%3D'9%2C22%209%2C0%2017%2C0%2017%2C22%2026%2C22%2013.5%2C40%200%2C22'%20fill%3D'%238c8c8c'%2F%3E%3C%2Fsvg%3E\");\n  background-size: 13px 20px;\n  z-index: 10;\n  -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n  transform: rotate(0deg) translate3d(0, 0, 0);\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms; }\n\n.ui-scroll {\n  overflow: hidden; }\n\n.ui-scroll-out.pull-to-refresh-no-navbar {\n  margin-top: -44px;\n  height: -webkit-calc(100% + 44px);\n  height: -moz-calc(100% + 44px);\n  height: calc(100% + 44px); }\n\n.ui-scroll-out.pull-to-refresh-no-navbar .pull-to-refresh-layer {\n  margin-top: 0; }\n\n.ui-scroll-out.transitioning,\n.ui-scroll-out.refreshing {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms; }\n\n.ui-scroll-out:not(.refreshing) .pull-to-refresh-layer .preloader {\n  -webkit-animation: none;\n  animation: none; }\n\n.ui-scroll-out.refreshing .pull-to-refresh-arrow,\n.ui-scroll-out.refreshing .pull-to-refresh-text {\n  visibility: hidden;\n  -webkit-transition-duration: 0ms;\n  transition-duration: 0ms; }\n\n.ui-scroll-out.refreshing .preloader,\n.ui-scroll-out.refreshing .preloader-text {\n  visibility: visible; }\n\n.ui-scroll-out.pull-up .pull-to-refresh-arrow {\n  -webkit-transform: rotate(180deg) translate3d(0, 0, 0);\n  transform: rotate(180deg) translate3d(0, 0, 0); }\n\n.pull-show-item {\n  position: absolute;\n  width: 100%; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof2 = __webpack_require__(48);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _vue = __webpack_require__(80);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueTouch = __webpack_require__(82);
	
	var _vueTouch2 = _interopRequireDefault(_vueTouch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="ui-scroll ui-scroll-{{isx?'x':'y'}}"  v-touch:pan="panArea"  v-touch:panend="panendArea" v-bind:style="uiScrollStyle">
	//     	<div class="ui-scroll-content {{isEnd || !enable ? 'ui-scroll-trans' : ''}}"  v-bind:style="scrollContentStyle">
	//     		<slot name="front" v-if="front">
	// 				<div class="ui-scroll-front ui-scroll-out" v-bind:class="{'pull-up': y > 0, 'refreshing': y > range/2}" v-if="front">
	// 					<div class="pull-to-refresh-layer">
	// 					    <div class="pull-show-item"><span class="preloader-text">{{movetext}}</span><span class="preloader"></span></div>
	// 					    <div class="pull-show-item"><span class="pull-to-refresh-text">{{freshtext}}</span><span class="pull-to-refresh-arrow"></span></div>
	// 			    	</div>
	// 		    	</div>
	// 	    	</slot>
	// 	    	<div class="ui-scroll-core">
	//     			<slot></slot>
	//     		</div>
	//     		<slot name="end" v-if="end">
	// 	    		<div class="ui-scroll-end gom-scroll-out pull-up">
	// 			    	<div class="pull-to-refresh-layer">
	// 					    <div class="pull-show-item"><span class="preloader-text">{{movetext}}</span><span class="preloader"></span></div>
	// 					    <div class="pull-show-item"><span class="pull-to-refresh-text">{{freshtext}}</span><span class="pull-to-refresh-arrow"></span></div>
	// 			    	</div>
	// 		    	</div>
	// 	    	</slot>
	//     	</div>	
	//     </div>	
	// </template>
	//
	// <script>
	
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
			outerheight: { // swipe out text height
				type: Number,
				default: 44
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
				var props = {};var x = this.x;
				var y = this.y;
	
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
	// </script>
	//
	// <style lang="sass" scoped>
	// 	/* === Scroll === */
	// 	.gom-scroll{
	// 	    background-color: #fff;
	// 	    padding: 10px;
	// 	}
	// 	.ui-scroll{
	// 	    overflow: hidden;
	// 	    background-color: #eee;
	// 	    > div{
	// 	        -webkit-backface-visibility: hidden;
	// 	        -webkit-perspective:1000;
	// 	    }
	// 	    .ui-scroll-core{
	// 	    	background-color: #FFF;
	// 	    	width: auto;
	// 	    }
	// 	    .ui-scroll-front, .ui-scroll-end{
	// 	        width: 100%;
	// 	        text-align: center;
	// 	        background-color: #eee;
	// 	        font-size: 13px;
	//
	// 	    }
	// 	    .ui-scroll-front{
	// 	        top:0;
	// 	    }
	// 	    .ui-scroll-end{
	// 	        bottom:0;
	// 	    }
	// 	}
	//
	// 	.ui-scroll-trans{
	// 		transition: transform .3s ease;
	// 	}
	//
	// 	.statusbar-overlay {
	// 	    background: #f7f7f8;
	// 	    z-index: 10000;
	// 	    position: absolute;
	// 	    left: 0;
	// 	    top: 0;
	// 	    height: 20px;
	// 	    width: 100%;
	// 	    display: none;
	// 	    -webkit-transition-duration: 400ms;
	// 	    transition-duration: 400ms;
	// 	}
	// 	/* === Preloader === */
	// 	.preloader {
	// 	    display: inline-block;
	// 	    width: 20px;
	// 	    height: 20px;
	// 	    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
	// 	    background-position: 50%;
	// 	    background-size: 100%;
	// 	    background-repeat: no-repeat;
	// 	    -webkit-animation: preloader-spin 1s steps(12, end) infinite;
	// 	    animation: preloader-spin 1s steps(12, end) infinite;
	// 	}
	// 	.preloader-white {
	// 	    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
	// 	}
	// 	@-webkit-keyframes preloader-spin {
	// 	    100% {
	// 	        -webkit-transform: rotate(360deg);
	// 	    }
	// 	}
	// 	@keyframes preloader-spin {
	// 	    100% {
	// 	        transform: rotate(360deg);
	// 	    }
	// 	}
	// 	/* === Pull To Refresh === */
	// 	.pull-to-refresh-layer {
	// 	    // position: absolute;
	// 	    position: relative;
	// 	    left: 0;
	// 	    top: 0;
	// 	    width: 100%;
	// 	    min-height: 44px;
	// 	}
	// 	.pull-to-refresh-layer .pull-to-refresh-arrow,
	// 	.pull-to-refresh-layer .preloader{
	// 	    display: inline-block;
	// 	    position: relative;
	// 	    margin-left: 5px;
	// 	    top:5px;
	// 	}
	// 	.pull-to-refresh-layer .preloader,
	// 	.pull-to-refresh-layer .preloader-text{
	// 	    visibility: hidden;
	// 	}
	// 	.pull-to-refresh-layer .pull-to-refresh-arrow {
	// 	    width: 13px;
	// 	    height: 20px;
	// 	    background: no-repeat center;
	// 	    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2026%2040'%3E%3Cpolygon%20points%3D'9%2C22%209%2C0%2017%2C0%2017%2C22%2026%2C22%2013.5%2C40%200%2C22'%20fill%3D'%238c8c8c'%2F%3E%3C%2Fsvg%3E");
	// 	    background-size: 13px 20px;
	// 	    z-index: 10;
	// 	    -webkit-transform: rotate(0deg) translate3d(0, 0, 0);
	// 	    transform: rotate(0deg) translate3d(0, 0, 0);
	// 	    -webkit-transition-duration: 300ms;
	// 	    transition-duration: 300ms;
	// 	}
	// 	.ui-scroll{
	// 		overflow: hidden;
	// 	}
	// 	.ui-scroll-out.pull-to-refresh-no-navbar {
	// 	    margin-top: -44px;
	// 	    height: -webkit-calc(100% + 44px);
	// 	    height: -moz-calc(100% + 44px);
	// 	    height: calc(100% + 44px);
	// 	}
	// 	.ui-scroll-out.pull-to-refresh-no-navbar .pull-to-refresh-layer {
	// 	    margin-top: 0;
	// 	}
	// 	.ui-scroll-out.transitioning,
	// 	.ui-scroll-out.refreshing {
	// 	    -webkit-transition-duration: 400ms;
	// 	    transition-duration: 400ms;
	// 	}
	// 	.ui-scroll-out:not(.refreshing) .pull-to-refresh-layer .preloader
	// 	{
	// 	    -webkit-animation: none;
	// 	    animation: none;
	// 	}
	//
	// 	.ui-scroll-out.refreshing .pull-to-refresh-arrow,
	// 	.ui-scroll-out.refreshing .pull-to-refresh-text{
	// 	    visibility: hidden;
	// 	    -webkit-transition-duration: 0ms;
	// 	    transition-duration: 0ms;
	// 	}
	// 	.ui-scroll-out.refreshing .preloader,
	// 	.ui-scroll-out.refreshing .preloader-text{
	// 	    visibility: visible;
	// 	}
	// 	.ui-scroll-out.pull-up .pull-to-refresh-arrow {
	// 	    -webkit-transform: rotate(180deg) translate3d(0, 0, 0);
	// 	    transform: rotate(180deg) translate3d(0, 0, 0);
	// 	}
	// 	.pull-show-item{
	// 	    position: absolute;
	// 	    width: 100%;
	// 	}
	//
	// </style>
	/* generated by vue-loader */

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(49)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(79);
	module.exports = __webpack_require__(58).Symbol;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 52 */
/***/ function(module, exports) {

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

/***/ },
/* 53 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 54 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(56)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 58 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(62);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(52)
	  , createDesc = __webpack_require__(63);
	module.exports = __webpack_require__(55) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(53)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(52).setDesc
	  , has = __webpack_require__(54)
	  , TAG = __webpack_require__(66)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(64)('wks')
	  , uid    = __webpack_require__(67)
	  , Symbol = __webpack_require__(53).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(70)
	  , defined = __webpack_require__(72);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(71);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(71);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(77);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 79 */
/***/ function(module, exports) {



/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.16
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind$1(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	var isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;
	
	var isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE$1 = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE$1.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text$1 = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether or not to handle fully object properties which
	   * are already backed by getters and seters. Depending on
	   * use case and environment, this might introduce non-neglible
	   * performance penalties.
	   */
	  convertAllProperties: false,
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on$1(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !(el instanceof SVGElement)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && el.content instanceof DocumentFragment) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__vue_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
	var reservedTagRE = /^(slot|partial|component)$/;
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        if (tag.indexOf('-') > -1 || /HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function assertProp(prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true;
	  }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var def;
	    var ids = Object.keys(components);
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}
	
	/**
	 * Assert asset exists
	 */
	
	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var uid$3 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$3++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment(target, src) {
	  target.__proto__ = src;
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  // cater for pre-defined getter/setters
	  var getter, setter;
	  if (config.convertAllProperties) {
	    var property = Object.getOwnPropertyDescriptor(obj, key);
	    if (property && property.configurable === false) {
	      return;
	    }
	    getter = property && property.get;
	    setter = property && property.set;
	  }
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on$1,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		initProp: initProp,
		assertProp: assertProp,
		coerceProp: coerceProp,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    if (process.env.NODE_ENV !== 'production') {
	      this._runtimeData = options.data;
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    return new Function('scope', 'return ' + body + ';');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (devtools) {
	    devtools.emit('flush');
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = Object.create(null);
	  this.newDeps = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep;
	    if (!this.deps[id]) {
	      this.deps[id] = dep;
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDeps = Object.create(null);
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var ids = Object.keys(this.deps);
	  var i = ids.length;
	  while (i--) {
	    var id = ids[i];
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps);
	  var i = depIds.length;
	  while (i--) {
	    this.deps[depIds[i]].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var depIds = Object.keys(this.deps);
	    var i = depIds.length;
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var FOR = 2000;
	var IF = 2000;
	var SLOT = 2100;
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on = {
	
	  acceptStatement: true,
	  priority: ON,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on$1(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on$1(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.listener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.listener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && node.content instanceof DocumentFragment;
	}
	
	var tagRE$1 = /<([\w:]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__vue_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__vfrag__ = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__vfrag__ = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : el.outerHTML);
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var vIf = {
	
	  priority: IF,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseFactory = new FragmentFactory(this.vm, next);
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	      this.factory = new FragmentFactory(this.vm, el);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseFactory && !this.elseFrag) {
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var uid$1 = 0;
	
	var vFor = {
	
	  priority: FOR,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in items" syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$1;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value;
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    this.vm._watchers = this.vm._watchers.filter(function (w) {
	      return w.active;
	    });
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    defineReactive(scope, alias, value);
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__vfrag__ = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__vfrag__;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__vfrag__;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	var text = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	// must export plain object
	var publicDirectives = {
	  text: text,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on,
	  bind: bind,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind$1(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	
	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true;
	  var self = this;
	  setTimeout(function () {
	    self.justEntered = false;
	  }, 17);
	
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on$1(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	}
	
	var transition = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    // apply on closest vm
	    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id;
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHook = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHook && !cached) {
	      this.waitingFor = newComponent;
	      activateHook.call(newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (process.env.NODE_ENV !== 'production') {
	      if (current) current._inactive = true;
	      target._inactive = false;
	    }
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i]);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (key && (!value || !contains$1(value, key))) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	function contains$1(value, key) {
	  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
	}
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition
	};
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (options.required) {
	      // warn missing required
	      process.env.NODE_ENV !== 'production' && warn('Missing required prop: ' + name);
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, getDefault(vm, options));
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = (scope || vm._context).$get(prop.parentPath);
	            initProp(vm, prop, value);
	          } else {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          }
	        } else {
	            process.env.NODE_ENV !== 'production' && warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');
	          }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === '' ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// terminal directives
	var terminalDirectives = ['for', 'if'];
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: publicDirectives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) return;
	  // special case: give named slot a higher priority
	  // than unnamed slots
	  if (tag === 'slot' && hasBindAttr(el, 'name')) {
	    tag = '_namedSlot';
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    value = el.getAttribute('v-' + dirName);
	    if (value != null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    def: def || publicDirectives[dirName]
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', publicDirectives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', publicDirectives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', publicDirectives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName);
	
	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }
	
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value)) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		terminalDirectives: terminalDirectives,
		transclude: transclude
	});
	
	function stateMixin (Vue) {
	
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var propsData = this._data;
	    var optionsDataFn = this.$options.data;
	    var optionsData = optionsDataFn && optionsDataFn();
	    var runtimeData;
	    if (process.env.NODE_ENV !== 'production') {
	      runtimeData = (typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData) || {};
	      this._runtimeData = null;
	    }
	    if (optionsData) {
	      this._data = optionsData;
	      for (var prop in propsData) {
	        if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop) && !hasOwn(runtimeData, prop)) {
	          warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
	        }
	        if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
	          set(optionsData, prop, propsData[prop]);
	        }
	      }
	    }
	    var data = this._data;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      this._proxy(key);
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind$1(userDef.get, this) : noop;
	          def.set = userDef.set ? bind$1(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind$1(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind$1(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind$1(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = params[i];
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on$1(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (el instanceof DocumentFragment) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (id, cb) {
	    var factory = resolveAsset(this.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(factory, 'component', id);
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory(function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	function globalAPI (Vue) {
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text$1,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	}
	
	var filterRE = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      for (var key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install APIs
	globalAPI(Vue);
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return _currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.
	
	// We are exporting two versions, one for named and one
	// for unnamed, because the unnamed slots must be compiled
	// AFTER all named slots have selected their content. So
	// we need to give them different priorities in the compilation
	// process. (See #1965)
	
	var slot = {
	
	  priority: SLOT,
	
	  bind: function bind() {
	    var host = this.vm;
	    var raw = host.$options._content;
	    if (!raw) {
	      this.fallback();
	      return;
	    }
	    var context = host._context;
	    var slotName = this.params && this.params.name;
	    if (!slotName) {
	      // Default slot
	      this.tryCompile(extractFragment(raw.childNodes, raw, true), context, host);
	    } else {
	      // Named slot
	      var selector = '[slot="' + slotName + '"]';
	      var nodes = raw.querySelectorAll(selector);
	      if (nodes.length) {
	        this.tryCompile(extractFragment(nodes, raw), context, host);
	      } else {
	        this.fallback();
	      }
	    }
	  },
	
	  tryCompile: function tryCompile(content, context, host) {
	    if (content.hasChildNodes()) {
	      this.compile(content, context, host);
	    } else {
	      this.fallback();
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var namedSlot = extend(extend({}, slot), {
	  priority: slot.priority + 1,
	  params: ['name']
	});
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent, main) {
	  var frag = document.createDocumentFragment();
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      append(node);
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true;
	      append(node);
	    }
	  }
	  return frag;
	
	  function append(node) {
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      node = parseTemplate(node);
	    }
	    node = cloneNode(node);
	    frag.appendChild(node);
	  }
	}
	
	var elementDirectives = {
	  slot: slot,
	  _namedSlot: namedSlot, // same as slot but with higher priority
	  partial: partial
	};
	
	Vue.version = '1.0.16';
	
	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */
	
	Vue.options = {
	  directives: publicDirectives,
	  elementDirectives: elementDirectives,
	  filters: filters,
	  transitions: {},
	  components: {},
	  partials: {},
	  replace: true
	};
	
	// devtools global hook
	/* istanbul ignore next */
	if (devtools) {
	  devtools.emit('init', Vue);
	} else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(navigator.userAgent)) {
	  console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(81)))

/***/ },
/* 81 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	;(function () {
	
	  var vueTouch = {}
	  var Hammer =  true
	    ? __webpack_require__(83)
	    : window.Hammer
	  var gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe']
	  var directions = ['up', 'down', 'left', 'right', 'horizontal', 'vertical']
	  var customeEvents = {}
	
	  if (!Hammer) {
	    throw new Error('[vue-touch] cannot locate Hammer.js.')
	  }
	
	  // exposed global options
	  vueTouch.config = {}
	
	  vueTouch.install = function (Vue) {
	
	    Vue.directive('touch', {
	
	      isFn: true,
	      acceptStatement: true,
	      priority: Vue.directive('on').priority,
	
	      bind: function () {
	        if (!this.el.hammer) {
	          this.el.hammer = new Hammer.Manager(this.el)
	        }
	        var mc = this.mc = this.el.hammer
	        // determine event type
	        var event = this.arg
	        if (!event) {
	          console.warn('[vue-touch] event type argument is required.')
	        }
	        var recognizerType, recognizer
	
	        if (customeEvents[event]) {
	          // custom event
	          var custom = customeEvents[event]
	          recognizerType = custom.type
	          recognizer = new Hammer[capitalize(recognizerType)](custom)
	          recognizer.recognizeWith(mc.recognizers)
	          mc.add(recognizer)
	        } else {
	          // built-in event
	          for (var i = 0; i < gestures.length; i++) {
	            if (event.indexOf(gestures[i]) === 0) {
	              recognizerType = gestures[i]
	              break
	            }
	          }
	          if (!recognizerType) {
	            console.warn('[vue-touch] invalid event type: ' + event)
	            return
	          }
	          recognizer = mc.get(recognizerType)
	          if (!recognizer) {
	            // add recognizer
	            recognizer = new Hammer[capitalize(recognizerType)]()
	            // make sure multiple recognizers work together...
	            recognizer.recognizeWith(mc.recognizers)
	            mc.add(recognizer)
	          }
	          // apply global options
	          var globalOptions = vueTouch.config[recognizerType]
	          if (globalOptions) {
	            guardDirections(globalOptions)
	            recognizer.set(globalOptions)
	          }
	          // apply local options
	          var localOptions =
	            this.el.hammerOptions &&
	            this.el.hammerOptions[recognizerType]
	          if (localOptions) {
	            guardDirections(localOptions)
	            recognizer.set(localOptions)
	          }
	        }
	        this.recognizer = recognizer
	      },
	
	      update: function (fn) {
	        var mc = this.mc
	        var vm = this.vm
	        var event = this.arg
	        // teardown old handler
	        if (this.handler) {
	          mc.off(event, this.handler)
	        }
	        if (typeof fn !== 'function') {
	          console.warn(
	            '[vue-touch] invalid handler function for v-touch: ' +
	            this.arg + '="' + this.descriptor.raw
	          )
	        } else {
	          mc.on(event, fn)
	        }
	      },
	
	      unbind: function () {
	        this.mc.off(this.arg, this.handler)
	        if (!Object.keys(this.mc.handlers).length) {
	          this.mc.destroy()
	          this.el.hammer = null
	        }
	      }
	    })
	
	    Vue.directive('touch-options', {
	      priority: Vue.directive('on').priority + 1,
	      update: function (options) {
	        var opts = this.el.hammerOptions || (this.el.hammerOptions = {})
	        if (!this.arg) {
	          console.warn('[vue-touch] recognizer type argument for v-touch-options is required.')
	        } else {
	          opts[this.arg] = options
	        }
	      }
	    })
	  }
	
	  /**
	   * Register a custom event.
	   *
	   * @param {String} event
	   * @param {Object} options - a Hammer.js recognizer option object.
	   *                           required fields:
	   *                           - type: the base recognizer to use for this event
	   */
	
	  vueTouch.registerCustomEvent = function (event, options) {
	    options.event = event
	    customeEvents[event] = options
	  }
	
	  function capitalize (str) {
	    return str.charAt(0).toUpperCase() + str.slice(1)
	  }
	
	  function guardDirections (options) {
	    var dir = options.direction
	    if (typeof dir === 'string') {
	      if (directions.indexOf(dir) > -1) {
	        options.direction = Hammer['DIRECTION_' + dir.toUpperCase()]
	      } else {
	        console.warn('[vue-touch] invalid direction: ' + dir)
	      }
	    }
	  }
	
	  if (true) {
	    module.exports = vueTouch
	  } else if (typeof define == "function" && define.amd) {
	    define([], function(){ return vueTouch })
	  } else if (window.Vue) {
	    window.VueTouch = vueTouch
	    Vue.use(vueTouch)
	  }
	
	})()


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.6 - 2015-12-23
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2015 Jorik Tangelder;
	 * Licensed under the  license */
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
	 * @param {Boolean=false} [merge]
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
	
	    this.allow = true; // used by Input.TouchMouse to disable mouse events
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
	
	        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
	        if (!this.pressed || !this.allow) {
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
	function TouchMouseInput() {
	    Input.apply(this, arguments);
	
	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);
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
	
	        // when we're in a touch event, so  block all upcoming mouse events
	        // most mobile browser also emit mouseevents, right after touchstart
	        if (isTouch) {
	            this.mouse.allow = false;
	        } else if (isMouse && !this.mouse.allow) {
	            return;
	        }
	
	        // reset the allowMouse when we're done
	        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
	            this.mouse.allow = true;
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
	
	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
	
	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	
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
	
	        if (NATIVE_TOUCH_ACTION && this.manager.element.style) {
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
	        // not needed with native support for the touchAction property
	        if (NATIVE_TOUCH_ACTION) {
	            return;
	        }
	
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;
	
	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }
	
	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	
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
	Hammer.VERSION = '2.0.6';
	
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
	    each(manager.options.cssProps, function(value, name) {
	        element.style[prefixed(element.style, name)] = add ? value : '';
	    });
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


/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"ui-scroll ui-scroll-{{isx?'x':'y'}}\" v-touch:pan=\"panArea\" v-touch:panend=\"panendArea\" v-bind:style=\"uiScrollStyle\" _v-04332a22=\"\">\n    \t<div class=\"ui-scroll-content {{isEnd || !enable ? 'ui-scroll-trans' : ''}}\" v-bind:style=\"scrollContentStyle\" _v-04332a22=\"\">\n    \t\t<slot name=\"front\" v-if=\"front\" _v-04332a22=\"\">\n\t\t\t\t<div class=\"ui-scroll-front ui-scroll-out\" v-bind:class=\"{'pull-up': y > 0, 'refreshing': y > range/2}\" v-if=\"front\" _v-04332a22=\"\">\n\t\t\t\t\t<div class=\"pull-to-refresh-layer\" _v-04332a22=\"\">\n\t\t\t\t\t    <div class=\"pull-show-item\" _v-04332a22=\"\"><span class=\"preloader-text\" _v-04332a22=\"\">{{movetext}}</span><span class=\"preloader\" _v-04332a22=\"\"></span></div>\n\t\t\t\t\t    <div class=\"pull-show-item\" _v-04332a22=\"\"><span class=\"pull-to-refresh-text\" _v-04332a22=\"\">{{freshtext}}</span><span class=\"pull-to-refresh-arrow\" _v-04332a22=\"\"></span></div>\n\t\t\t    \t</div>\n\t\t    \t</div>\n\t    \t</slot>\n\t    \t<div class=\"ui-scroll-core\" _v-04332a22=\"\">\n    \t\t\t<slot _v-04332a22=\"\"></slot>\n    \t\t</div>\n    \t\t<slot name=\"end\" v-if=\"end\" _v-04332a22=\"\">\n\t    \t\t<div class=\"ui-scroll-end gom-scroll-out pull-up\" _v-04332a22=\"\">\n\t\t\t    \t<div class=\"pull-to-refresh-layer\" _v-04332a22=\"\">\n\t\t\t\t\t    <div class=\"pull-show-item\" _v-04332a22=\"\"><span class=\"preloader-text\" _v-04332a22=\"\">{{movetext}}</span><span class=\"preloader\" _v-04332a22=\"\"></span></div>\n\t\t\t\t\t    <div class=\"pull-show-item\" _v-04332a22=\"\"><span class=\"pull-to-refresh-text\" _v-04332a22=\"\">{{freshtext}}</span><span class=\"pull-to-refresh-arrow\" _v-04332a22=\"\"></span></div>\n\t\t\t    \t</div>\n\t\t    \t</div>\n\t    \t</slot>\n    \t</div>\t\n    </div>\t\n";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(86)
	__vue_script__ = __webpack_require__(88)
	__vue_template__ = __webpack_require__(89)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(87);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0b254eb3&file=list.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./list.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0b254eb3&file=list.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.table-view {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 15px;\n  list-style: none;\n  background-color: #fff;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  font-size: 18px; }\n\n.table-view-cell {\n  position: relative;\n  padding: 11px 65px 11px 15px;\n  overflow: hidden;\n  border-bottom: 1px solid #ddd; }\n  .table-view-cell:last-child {\n    border-bottom: 0; }\n  .table-view-cell > a:not(.btn) {\n    position: relative;\n    display: block;\n    padding: inherit;\n    margin: -11px -65px -11px -15px;\n    overflow: hidden;\n    color: inherit; }\n    .table-view-cell > a:not(.btn):active {\n      background-color: #eee; }\n  .table-view-cell p {\n    margin-bottom: 0; }\n\n.table-view-divider {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-left: 15px;\n  margin-top: -1px;\n  margin-left: 0;\n  font-weight: 500;\n  color: #999;\n  background-color: #fafafa;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd; }\n  .table-view-divider a {\n    color: #999; }\n\n.table-view .media,\n.table-view .media-body {\n  overflow: hidden; }\n\n.table-view .media-object.pull-left {\n  margin-right: 10px; }\n\n.table-view .media-object.pull-right {\n  margin-left: 10px; }\n\n.table-view-cell > .btn,\n.table-view-cell > .badge,\n.table-view-cell > .toggle,\n.table-view-cell > a > .btn,\n.table-view-cell > a > .badge,\n.table-view-cell > a > .toggle {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.content > .table-view:first-child {\n  margin-top: 15px; }\n\n.table-noarrow .navigate-left:after {\n  content: ''; }\n\n.table-noarrow .navigate-right:after {\n  content: ''; }\n\n.navigate-left:after,\n.navigate-right:after {\n  position: absolute;\n  top: 50%;\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: inherit;\n  line-height: 1;\n  color: #bbb;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.navigate-left:after {\n  left: 15px;\n  content: '\\E822'; }\n\n.navigate-right:after {\n  right: 15px;\n  content: '\\E826'; }\n", "", {"version":3,"sources":["/./src/list.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,gBAAgB;EAChB,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;EACvB,2BAA2B;EAC3B,8BAA8B;EAC9B,gBAAgB,EAAE;;AAEpB;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,iBAAiB;EACjB,8BAA8B,EAAE;EAChC;IACE,iBAAiB,EAAE;EACrB;IACE,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,gCAAgC;IAChC,iBAAiB;IACjB,eAAe,EAAE;IACjB;MACE,uBAAuB,EAAE;EAC7B;IACE,iBAAiB,EAAE;;AAEvB;EACE,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;EAC1B,2BAA2B;EAC3B,8BAA8B,EAAE;EAChC;IACE,YAAY,EAAE;;AAElB;;EAEE,iBAAiB,EAAE;;AAErB;EACE,mBAAmB,EAAE;;AAEvB;EACE,kBAAkB,EAAE;;AAEtB;;;;;;EAME,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,oCAAoC;EAEpC,4BAA4B,EAAE;;AAEhC;EACE,iBAAiB,EAAE;;AAErB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;;EAEE,mBAAmB;EACnB,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,oCAAoC;EACpC,oCAAoC;EAEpC,4BAA4B,EAAE;;AAEhC;EACE,WAAW;EACX,iBAAiB,EAAE;;AAErB;EACE,YAAY;EACZ,iBAAiB,EAAE","file":"list.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.table-view {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 15px;\n  list-style: none;\n  background-color: #fff;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  font-size: 18px; }\n\n.table-view-cell {\n  position: relative;\n  padding: 11px 65px 11px 15px;\n  overflow: hidden;\n  border-bottom: 1px solid #ddd; }\n  .table-view-cell:last-child {\n    border-bottom: 0; }\n  .table-view-cell > a:not(.btn) {\n    position: relative;\n    display: block;\n    padding: inherit;\n    margin: -11px -65px -11px -15px;\n    overflow: hidden;\n    color: inherit; }\n    .table-view-cell > a:not(.btn):active {\n      background-color: #eee; }\n  .table-view-cell p {\n    margin-bottom: 0; }\n\n.table-view-divider {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-left: 15px;\n  margin-top: -1px;\n  margin-left: 0;\n  font-weight: 500;\n  color: #999;\n  background-color: #fafafa;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd; }\n  .table-view-divider a {\n    color: #999; }\n\n.table-view .media,\n.table-view .media-body {\n  overflow: hidden; }\n\n.table-view .media-object.pull-left {\n  margin-right: 10px; }\n\n.table-view .media-object.pull-right {\n  margin-left: 10px; }\n\n.table-view-cell > .btn,\n.table-view-cell > .badge,\n.table-view-cell > .toggle,\n.table-view-cell > a > .btn,\n.table-view-cell > a > .badge,\n.table-view-cell > a > .toggle {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.content > .table-view:first-child {\n  margin-top: 15px; }\n\n.table-noarrow .navigate-left:after {\n  content: ''; }\n\n.table-noarrow .navigate-right:after {\n  content: ''; }\n\n.navigate-left:after,\n.navigate-right:after {\n  position: absolute;\n  top: 50%;\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: inherit;\n  line-height: 1;\n  color: #bbb;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.navigate-left:after {\n  left: 15px;\n  content: '\\e822'; }\n\n.navigate-right:after {\n  right: 15px;\n  content: '\\e826'; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <ul class="table-view" v-bind:class="{'card':card, 'table-noarrow':!arrow}">
	//      <slot></slot>
	//   </ul>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    card: { type: Boolean, default: false },
	    arrow: { type: Boolean, default: true }
	  }
	};
	// </script>
	//
	// <style lang="sass">
	//   @import './scss/variables';
	//   @import './scss/mixins';
	//     .table-view {
	//       padding-left: 0;
	//       margin-top: 0;
	//       margin-bottom: 15px;
	//       list-style: none;
	//       background-color: #fff;
	//       border-top: $border-default;
	//       border-bottom: $border-default;
	//       font-size: 18px;
	//     }
	//
	//     .table-view-cell {
	//       position: relative;
	//       padding: 11px 65px 11px 15px;
	//       overflow: hidden;
	//       border-bottom: $border-default;
	//       &:last-child {
	//         border-bottom: 0;
	//       }
	//       > a:not(.btn) {
	//         position: relative;
	//         display: block;
	//         padding: inherit;
	//         margin: -11px -65px -11px -15px;
	//         overflow: hidden;
	//         color: inherit;
	//
	//         &:active {
	//           background-color: #eee;
	//         }
	//       }
	//       p {
	//         margin-bottom: 0;
	//       }
	//     }
	//
	//
	//     // Table view dividers
	//     // --------------------------------------------------
	//     .table-view-divider {
	//       padding-top: 6px;
	//       padding-bottom: 6px;
	//       padding-left: 15px;
	//       margin-top: -1px; // Hides the border of the previous list item
	//       margin-left: 0;
	//       font-weight: $font-weight;
	//       color: #999;
	//       background-color: #fafafa;
	//       border-top: $border-default;
	//       border-bottom: $border-default;
	//       a{
	//         color: #999;
	//       }
	//     }
	//
	//
	//     // Table-views with media (images,avatars, icons)
	//     // --------------------------------------------------
	//     .table-view .media,
	//     .table-view .media-body {
	//       overflow: hidden;
	//     }
	//     .table-view .media-object {
	//       &.pull-left {
	//         margin-right: 10px;
	//       }
	//       &.pull-right {
	//         margin-left: 10px;
	//       }
	//     }
	//
	//
	//     // Table-views with buttons, badges and toggles
	//     // --------------------------------------------------
	//     .table-view-cell,
	//     .table-view-cell > a {
	//       > .btn,
	//       > .badge,
	//       > .toggle {
	//         position: absolute;
	//         top: 50%;
	//         right: 15px;
	//         @include transform(translateY(-50%));
	//       }
	//     }
	//
	//     // If the table view is the first component, give it extra margin on top.
	//     .content > .table-view:first-child {
	//       margin-top: 15px;
	//     }
	//
	//     // Add chevrons to elements
	//     .table-noarrow {
	//       .navigate-left:after{
	//         content: '';
	//       }
	//       .navigate-right:after{
	//         content: '';
	//       }
	//     }
	//     .navigate-left,
	//     .navigate-right{
	//       &:after {
	//         position: absolute;
	//         top: 50%;
	//         display: inline-block;
	//         font-family: Ratchicons;
	//         font-size: inherit;
	//         line-height: 1;
	//         color: #bbb;
	//         text-decoration: none;
	//         -webkit-font-smoothing: antialiased;
	//         @include transform(translateY(-50%));
	//       }
	//     }
	//     .navigate-left:after{
	//       left: 15px;
	//       content: '\e822';
	//     }
	//     .navigate-right:after{
	//       right: 15px;
	//       content: '\e826';
	//     }
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "\r\n  <ul class=\"table-view\" v-bind:class=\"{'card':card, 'table-noarrow':!arrow}\">\r\n     <slot></slot>\r\n  </ul>\r\n";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(91)
	__vue_script__ = __webpack_require__(93)
	__vue_template__ = __webpack_require__(94)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-011fd6a8&file=item.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./item.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-011fd6a8&file=item.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./item.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "a {\n  text-decoration: none;\n  color: #333; }\n", "", {"version":3,"sources":["/./src/item.vue.style"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,YAAY,EAAE","file":"item.vue","sourcesContent":["a {\n  text-decoration: none;\n  color: #333; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

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
					components: [_icon2.default, _badge2.default, _btn2.default],
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
									link: { //vue path route link
													type: String
									},
									href: { //a html link
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
	};
	// </script>
	// <style lang="sass">
	// 	a{
	// 		text-decoration: none;
	// 		color: #333;
	// 	}
	// </style>
	//
	/* generated by vue-loader */
	// <template>
	//   <li v-on:click="collapseListGroup"
	//       v-bind:class="{'active':active, 'table-view-cell':!divider, 'table-view-divider':divider,  'table-view-collapse':collapse, 'table-view-full':(badge===void 0)}" :style="styleobject">
	//     <span v-if="divider"><slot>{{title}}</slot></span>
	//     <a v-if="!divider" class="navigate-right" href="{{href?href:'javascript:'}}">
	//         <badge v-if="badge">{{badge}}</badge>
	//         <img  v-if="img" class="media-object pull-left" :src="img" />
	//         <icon v-if="icon" :icon="icon" class="media-object  pull-left"></icon>
	//         <btn  v-if="btn">{{btn}}</btn>
	//         <div class="media-body">
	//             <slot>{{title}}</slot>
	//             <p v-if="content">{{content}}</p>
	//         </div>
	//     </a>
	//   </li>
	// </template>
	//
	// <script>

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "\r\n  <li v-on:click=\"collapseListGroup\"\r\n      v-bind:class=\"{'active':active, 'table-view-cell':!divider, 'table-view-divider':divider,  'table-view-collapse':collapse, 'table-view-full':(badge===void 0)}\" :style=\"styleobject\">\r\n    <span v-if=\"divider\"><slot>{{title}}</slot></span>\r\n    <a v-if=\"!divider\" class=\"navigate-right\" href=\"{{href?href:'javascript:'}}\">\r\n        <badge v-if=\"badge\">{{badge}}</badge>\r\n        <img  v-if=\"img\" class=\"media-object pull-left\" :src=\"img\" />\r\n        <icon v-if=\"icon\" :icon=\"icon\" class=\"media-object  pull-left\"></icon>\r\n        <btn  v-if=\"btn\">{{btn}}</btn>\r\n        <div class=\"media-body\">\r\n            <slot>{{title}}</slot>\r\n            <p v-if=\"content\">{{content}}</p> \r\n        </div>\r\n    </a>\r\n  </li>\r\n";

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "  \r\n\t<div class=\"ui-options\" :style=\"{width: width}\" :onpanend = \"onpanend\">\r\n\t\t<div class=\"ui-cell-yard\" :style=\"yardStyle\"></div>\r\n\t\t<scroll :enable=\"enable\" :isx=\"false\" :height=\"height\" width='100%' :range=\"50\" :step=\"step\"  :onpanend=\"panend\" >\r\n\t        <list class=\"ui-cell\" :style=\"cellStyle\">\r\n\t            <item :active='activeindex === $index' v-for=\"(key, val) in data\" track-by=\"$index\" :height=\"step\">{{val}}</item>\r\n\t        </list> \r\n\t    </scroll>\r\n    </div>  \r\n";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(97)
	__vue_script__ = __webpack_require__(99)
	__vue_template__ = __webpack_require__(105)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c4e86e5e&file=select.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./select.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c4e86e5e&file=select.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.ui-select .modal-title {\n  height: 1.45833rem; }\n\n.ui-select .ui-scroll {\n  float: left; }\n\n.ui-scroll-select {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%; }\n  .ui-scroll-select .ui-scroll-select-item {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\n.ui-select .modal-title {\n  height: 2.29167rem;\n  line-height: 2.29167rem !important;\n  font-weight: 400;\n  color: #fff;\n  background-color: #435163; }\n\n.ui-select .btn-link {\n  font-size: 0.70833rem;\n  padding: 0.83333rem !important;\n  color: #fff; }\n\n.ui-select .modal-btn-no {\n  position: relative; }\n  .ui-select .modal-btn-no::after {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    width: 0.04167rem;\n    height: 1.04167rem;\n    background-color: #525f6f;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\n.ui-select .modal-btn-yes {\n  position: relative; }\n  .ui-select .modal-btn-yes::after {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 0.04167rem;\n    height: 1.04167rem;\n    background-color: #525f6f;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\n.ui-select .modal-inner {\n  background-color: #fff; }\n\n.ui-select .ui-options .ui-cell .table-view-cell.active a.navigate-right {\n  color: #099fde; }\n\n.ui-select .ui-scroll {\n  background-color: #fff; }\n\n.ui-select .ui-options {\n  -webkit-mask-box-image: none; }\n", "", {"version":3,"sources":["/./src/select.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,mBAAmB,EAAE;;AAEvB;EACE,YAAY,EAAE;;AAEhB;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,aAAa,EAAE;EACf;IACE,oBAAQ;IAAR,gBAAQ;QAAR,YAAQ;YAAR,QAAQ,EAAE;;AAEd;EACE,mBAAmB;EACnB,mCAAmC;EACnC,iBAAiB;EACjB,YAAY;EACZ,0BAA0B,EAAE;;AAE9B;EACE,sBAAsB;EACtB,+BAA+B;EAC/B,YAAY,EAAE;;AAEhB;EACE,mBAAmB,EAAE;EACrB;IACE,mBAAmB;IACnB,SAAS;IACT,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,oCAA4B;YAA5B,4BAA4B,EAAE;;AAElC;EACE,mBAAmB,EAAE;EACrB;IACE,mBAAmB;IACnB,SAAS;IACT,QAAQ;IACR,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,oCAA4B;YAA5B,4BAA4B,EAAE;;AAElC;EACE,uBAAuB,EAAE;;AAE3B;EACE,eAAe,EAAE;;AAEnB;EACE,uBAAuB,EAAE;;AAE3B;EACE,6BAA6B,EAAE","file":"select.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.ui-select .modal-title {\n  height: 1.45833rem; }\n\n.ui-select .ui-scroll {\n  float: left; }\n\n.ui-scroll-select {\n  display: flex;\n  height: 100%; }\n  .ui-scroll-select .ui-scroll-select-item {\n    flex: 1; }\n\n.ui-select .modal-title {\n  height: 2.29167rem;\n  line-height: 2.29167rem !important;\n  font-weight: 400;\n  color: #fff;\n  background-color: #435163; }\n\n.ui-select .btn-link {\n  font-size: 0.70833rem;\n  padding: 0.83333rem !important;\n  color: #fff; }\n\n.ui-select .modal-btn-no {\n  position: relative; }\n  .ui-select .modal-btn-no::after {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    width: 0.04167rem;\n    height: 1.04167rem;\n    background-color: #525f6f;\n    transform: translateY(-50%); }\n\n.ui-select .modal-btn-yes {\n  position: relative; }\n  .ui-select .modal-btn-yes::after {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 0.04167rem;\n    height: 1.04167rem;\n    background-color: #525f6f;\n    transform: translateY(-50%); }\n\n.ui-select .modal-inner {\n  background-color: #fff; }\n\n.ui-select .ui-options .ui-cell .table-view-cell.active a.navigate-right {\n  color: #099fde; }\n\n.ui-select .ui-scroll {\n  background-color: #fff; }\n\n.ui-select .ui-options {\n  -webkit-mask-box-image: none; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _modal = __webpack_require__(100);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'vselect',
	    components: { modal: _modal2.default },
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
	    }
	};
	// </script>
	//
	// <style lang="sass">
	// @import './scss/phone';
	// .ui-select{
	//     .modal-title{
	//         height: r(35px);
	//     }
	//     .ui-scroll{
	//         float: left;
	//     }
	// }
	// .ui-scroll-select{
	//     display: flex;
	//     height: 100%;
	//     .ui-scroll-select-item{
	//         flex: 1;
	//     }
	// }
	//
	// .ui-select {
	//     .modal-title {
	//         height: r(55px);
	//         line-height: r(55px)!important;
	//         font-weight: 400;
	//         color: #fff;
	//         background-color: #435163;
	//     }
	//     .btn-link {
	//         font-size: r(17px);
	//         padding: r(20px)!important;
	//         color: #fff;
	//     }
	//     .modal-btn-no {
	//         position: relative;
	//         &::after {
	//             position: absolute;
	//             top: 50%;
	//             right: 0;
	//             width: r(1px);
	//             height: r(25px);
	//             background-color: #525f6f;
	//             transform: translateY(-50%);
	//         }
	//     }
	//     .modal-btn-yes {
	//         position: relative;
	//         &::after {
	//             position: absolute;
	//             top: 50%;
	//             left: 0;
	//             width: r(1px);
	//             height: r(25px);
	//             background-color: #525f6f;
	//             transform: translateY(-50%);
	//         }
	//     }
	//     .modal-inner {
	//         background-color: #fff;
	//     }
	//     .ui-options .ui-cell .table-view-cell.active a.navigate-right {
	//         color: #099fde;
	//     }
	//     .ui-scroll {
	//         background-color: #fff;
	//     }
	//     .ui-options {
	//         -webkit-mask-box-image: none;
	//     }
	// }
	// </style>
	//
	/* generated by vue-loader */
	// <template>
	//     <modal :show.sync="show" type="bottom" :title="title" class="ui-select" :onyes="onyes" :oncancel="oncancel">
	//         <slot></slot>
	//     </modal>
	// </template>
	//
	// <script>

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(101)
	__vue_script__ = __webpack_require__(103)
	__vue_template__ = __webpack_require__(104)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(102);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-266f73e8&file=modal.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-266f73e8&file=modal.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n/* === Modals === */\n.modal {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  outline: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-overflow-scrolling: touch;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  z-index: 13500; }\n  .modal.modal-nomask {\n    background-color: transparent; }\n\n.modal-inner {\n  border-radius: 0.25rem 0.25rem 0 0;\n  position: relative;\n  background: rgba(255, 255, 255, 0.95); }\n\n.modal-title {\n  line-height: 1.8rem;\n  text-align: center;\n  background-color: #08A9E5;\n  font-size: 0.7rem;\n  font-weight: 300;\n  color: #fff; }\n  html.ios-gt-8 .modal-title {\n    font-weight: 600; }\n  .modal-title + .modal-text {\n    position: relative;\n    background-color: #fff;\n    padding: 0.41667rem; }\n\n.modal-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  line-height: 2.25rem;\n  background-color: #fafafa; }\n  .modal-buttons.modal-buttons-vertical {\n    display: block;\n    height: auto; }\n\n.modal-button {\n  width: 100%;\n  text-align: center;\n  border-right: 1px solid #DFDFDF;\n  display: block;\n  width: 49%;\n  font-size: 0.75rem;\n  font-weight: 300; }\n  .modal-button:last-child {\n    border-right: none; }\n  .modal-button-emphasize {\n    color: #009EE1; }\n  .modal-button-disabled {\n    color: #ccc; }\n  .modal-button:first-child {\n    border-radius: 0 0 0 0.54167rem; }\n  .modal-button:last-child {\n    border-radius: 0 0 0.54167rem 0; }\n  .modal-button:first-child:last-child {\n    border-radius: 0 0 0.54167rem 0.54167rem; }\n  .modal-button.modal-button-bold {\n    font-weight: 500; }\n    html.ios-gt-8 .modal-button.modal-button-bold {\n      font-weight: 600; }\n  html:not(.watch-active-state) .modal-button:active, .modal-button.active-state {\n    background: rgba(230, 230, 230, 0.95); }\n  .modal-buttons-vertical .modal-button {\n    border-radius: 0; }\n    .modal-buttons-vertical .modal-button:last-child {\n      border-radius: 0 0 0.54167rem 0.54167rem; }\n  .modal-button:after {\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 0;\n    left: auto;\n    bottom: auto;\n    width: 1px;\n    height: 100%;\n    background-color: #b5b5b5;\n    display: block;\n    z-index: 15;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%; }\n\n.modal-no-buttons .modal-inner {\n  border-radius: 0.54167rem; }\n\n.modal-no-buttons .modal-buttons {\n  display: none; }\n\n.modal-tips {\n  background-color: transparent; }\n\n.modal-confirm .modal-buttons .modal-button {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2; }\n\n.modal-alert .modal-buttons .modal-button {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.modal-top .modal-layout, .modal-bottom .modal-layout, .modal-popup .modal-layout {\n  width: 100%;\n  border-radius: 0; }\n  .modal-top .modal-layout .modal-inner, .modal-top .modal-layout .modal-button, .modal-bottom .modal-layout .modal-inner, .modal-bottom .modal-layout .modal-button, .modal-popup .modal-layout .modal-inner, .modal-popup .modal-layout .modal-button {\n    border-radius: 0; }\n  .modal-top .modal-layout .modal-button:first-child, .modal-top .modal-layout .modal-button:last-child, .modal-bottom .modal-layout .modal-button:first-child, .modal-bottom .modal-layout .modal-button:last-child, .modal-popup .modal-layout .modal-button:first-child, .modal-popup .modal-layout .modal-button:last-child {\n    border-radius: 0; }\n\n.modal-top .modal-layout {\n  -webkit-align-self: flex-start;\n      -ms-flex-item-align: start;\n          align-self: flex-start; }\n\n.modal-top .modal-title, .modal-top .modal-title + .modal-text {\n  text-align: left;\n  background-color: transparent; }\n\n.modal-top .modal-inner {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #d2d2d2;\n  font-size: 0.58333rem; }\n\n.modal-top .icon-close {\n  position: absolute;\n  right: 0.41667rem;\n  color: #fff;\n  z-index: 1; }\n\n.modal-bottom .modal-layout, .modal-popup .modal-layout {\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  max-height: 10.41667rem; }\n  .modal-bottom .modal-layout .table-view, .modal-popup .modal-layout .table-view {\n    margin-bottom: 0; }\n  .modal-bottom .modal-layout .modal-title, .modal-popup .modal-layout .modal-title {\n    line-height: 1.45833rem;\n    font-size: 0.66667rem;\n    border-bottom: 1px solid #ddd; }\n    .modal-bottom .modal-layout .modal-title .btn-link, .modal-popup .modal-layout .modal-title .btn-link {\n      font-size: 0.625rem;\n      padding: 0.41667rem; }\n    .modal-bottom .modal-layout .modal-title .modal-btn-no, .modal-popup .modal-layout .modal-title .modal-btn-no {\n      float: left; }\n    .modal-bottom .modal-layout .modal-title .modal-btn-yes, .modal-popup .modal-layout .modal-title .modal-btn-yes {\n      float: right; }\n  .modal-bottom .modal-layout .modal-title + .modal-text, .modal-popup .modal-layout .modal-title + .modal-text {\n    height: 7.08333rem;\n    padding: 0; }\n\n.modal-popup .modal-layout {\n  height: 100%;\n  max-height: 100%;\n  background-color: #fff; }\n  .modal-popup .modal-layout .modal-title + .modal-text {\n    height: auto; }\n\n.modal-popup .modal-text {\n  text-align: left; }\n\n/* Animate For Vue Modal */\n.modal {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease; }\n\n.preload-transition {\n  margin: 0 auto; }\n\n.loading-transition .modal-layout,\n.alert-transition .modal-layout,\n.confirm-transition .modal-layout,\n.center-transition .modal-layout,\n.toast-transition .modal-layout {\n  position: relative;\n  border-radius: 0.25rem;\n  width: 12.5rem;\n  margin: 0 auto;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n  overflow: hidden; }\n\n.top-transition,\n.bottom-transition,\n.popup-transition,\n.popover-transition,\n.toast-transition {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  opacity: 1; }\n\n.tips-transition {\n  opacity: 1; }\n\n.loading-enter,\n.preload-enter,\n.alert-enter,\n.confirm-enter,\n.center-enter,\n.toast-enter {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n  opacity: 0.5; }\n\n.alert-leave,\n.confirm-leave,\n.center-leave,\n.loading-leave,\n.preload-leave,\n.toast-leave {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0; }\n\n.popover-enter, .popover-leave {\n  top: 0 !important;\n  opacity: 0.5; }\n\n.top-enter, .top-leave {\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0); }\n\n.bottom-enter, .bottom-leave,\n.popup-enter, .popup-leave {\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0); }\n\n.tips-enter, .tips-leave {\n  opacity: 0; }\n", "", {"version":3,"sources":["/./src/modal.vue.style"],"names":[],"mappings":"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","file":"modal.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n/* === Modals === */\n.modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  outline: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-overflow-scrolling: touch;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  z-index: 13500; }\n  .modal.modal-nomask {\n    background-color: transparent; }\n\n.modal-inner {\n  border-radius: 0.25rem 0.25rem 0 0;\n  position: relative;\n  background: rgba(255, 255, 255, 0.95); }\n\n.modal-title {\n  line-height: 1.8rem;\n  text-align: center;\n  background-color: #08A9E5;\n  font-size: 0.7rem;\n  font-weight: 300;\n  color: #fff; }\n  html.ios-gt-8 .modal-title {\n    font-weight: 600; }\n  .modal-title + .modal-text {\n    position: relative;\n    background-color: #fff;\n    padding: 0.41667rem; }\n\n.modal-buttons {\n  display: flex;\n  line-height: 2.25rem;\n  background-color: #fafafa; }\n  .modal-buttons.modal-buttons-vertical {\n    display: block;\n    height: auto; }\n\n.modal-button {\n  width: 100%;\n  text-align: center;\n  border-right: 1px solid #DFDFDF;\n  display: block;\n  width: 49%;\n  font-size: 0.75rem;\n  font-weight: 300; }\n  .modal-button:last-child {\n    border-right: none; }\n  .modal-button-emphasize {\n    color: #009EE1; }\n  .modal-button-disabled {\n    color: #ccc; }\n  .modal-button:first-child {\n    border-radius: 0 0 0 0.54167rem; }\n  .modal-button:last-child {\n    border-radius: 0 0 0.54167rem 0; }\n  .modal-button:first-child:last-child {\n    border-radius: 0 0 0.54167rem 0.54167rem; }\n  .modal-button.modal-button-bold {\n    font-weight: 500; }\n    html.ios-gt-8 .modal-button.modal-button-bold {\n      font-weight: 600; }\n  html:not(.watch-active-state) .modal-button:active, .modal-button.active-state {\n    background: rgba(230, 230, 230, 0.95); }\n  .modal-buttons-vertical .modal-button {\n    border-radius: 0; }\n    .modal-buttons-vertical .modal-button:last-child {\n      border-radius: 0 0 0.54167rem 0.54167rem; }\n  .modal-button:after {\n    content: '';\n    position: absolute;\n    right: 0;\n    top: 0;\n    left: auto;\n    bottom: auto;\n    width: 1px;\n    height: 100%;\n    background-color: #b5b5b5;\n    display: block;\n    z-index: 15;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%; }\n\n.modal-no-buttons .modal-inner {\n  border-radius: 0.54167rem; }\n\n.modal-no-buttons .modal-buttons {\n  display: none; }\n\n.modal-tips {\n  background-color: transparent; }\n\n.modal-confirm .modal-buttons .modal-button {\n  flex: 2; }\n\n.modal-alert .modal-buttons .modal-button {\n  flex: 1; }\n\n.modal-top .modal-layout, .modal-bottom .modal-layout, .modal-popup .modal-layout {\n  width: 100%;\n  border-radius: 0; }\n  .modal-top .modal-layout .modal-inner, .modal-top .modal-layout .modal-button, .modal-bottom .modal-layout .modal-inner, .modal-bottom .modal-layout .modal-button, .modal-popup .modal-layout .modal-inner, .modal-popup .modal-layout .modal-button {\n    border-radius: 0; }\n  .modal-top .modal-layout .modal-button:first-child, .modal-top .modal-layout .modal-button:last-child, .modal-bottom .modal-layout .modal-button:first-child, .modal-bottom .modal-layout .modal-button:last-child, .modal-popup .modal-layout .modal-button:first-child, .modal-popup .modal-layout .modal-button:last-child {\n    border-radius: 0; }\n\n.modal-top .modal-layout {\n  align-self: flex-start; }\n\n.modal-top .modal-title, .modal-top .modal-title + .modal-text {\n  text-align: left;\n  background-color: transparent; }\n\n.modal-top .modal-inner {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #d2d2d2;\n  font-size: 0.58333rem; }\n\n.modal-top .icon-close {\n  position: absolute;\n  right: 0.41667rem;\n  color: #fff;\n  z-index: 1; }\n\n.modal-bottom .modal-layout, .modal-popup .modal-layout {\n  align-self: flex-end;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  max-height: 10.41667rem; }\n  .modal-bottom .modal-layout .table-view, .modal-popup .modal-layout .table-view {\n    margin-bottom: 0; }\n  .modal-bottom .modal-layout .modal-title, .modal-popup .modal-layout .modal-title {\n    line-height: 1.45833rem;\n    font-size: 0.66667rem;\n    border-bottom: 1px solid #ddd; }\n    .modal-bottom .modal-layout .modal-title .btn-link, .modal-popup .modal-layout .modal-title .btn-link {\n      font-size: 0.625rem;\n      padding: 0.41667rem; }\n    .modal-bottom .modal-layout .modal-title .modal-btn-no, .modal-popup .modal-layout .modal-title .modal-btn-no {\n      float: left; }\n    .modal-bottom .modal-layout .modal-title .modal-btn-yes, .modal-popup .modal-layout .modal-title .modal-btn-yes {\n      float: right; }\n  .modal-bottom .modal-layout .modal-title + .modal-text, .modal-popup .modal-layout .modal-title + .modal-text {\n    height: 7.08333rem;\n    padding: 0; }\n\n.modal-popup .modal-layout {\n  height: 100%;\n  max-height: 100%;\n  background-color: #fff; }\n  .modal-popup .modal-layout .modal-title + .modal-text {\n    height: auto; }\n\n.modal-popup .modal-text {\n  text-align: left; }\n\n/* Animate For Vue Modal */\n.modal {\n  transition: all .3s ease; }\n\n.preload-transition {\n  margin: 0 auto; }\n\n.loading-transition .modal-layout,\n.alert-transition .modal-layout,\n.confirm-transition .modal-layout,\n.center-transition .modal-layout,\n.toast-transition .modal-layout {\n  position: relative;\n  border-radius: 0.25rem;\n  width: 12.5rem;\n  margin: 0 auto;\n  transform: scale(1);\n  opacity: 1;\n  overflow: hidden; }\n\n.top-transition,\n.bottom-transition,\n.popup-transition,\n.popover-transition,\n.toast-transition {\n  transform: translate3d(0, 0, 0);\n  opacity: 1; }\n\n.tips-transition {\n  opacity: 1; }\n\n.loading-enter,\n.preload-enter,\n.alert-enter,\n.confirm-enter,\n.center-enter,\n.toast-enter {\n  transform: scale(1.5);\n  opacity: 0.5; }\n\n.alert-leave,\n.confirm-leave,\n.center-leave,\n.loading-leave,\n.preload-leave,\n.toast-leave {\n  transform: scale(0.8);\n  opacity: 0; }\n\n.popover-enter, .popover-leave {\n  top: 0 !important;\n  opacity: 0.5; }\n\n.top-enter, .top-leave {\n  transform: translate3d(0, -100%, 0); }\n\n.bottom-enter, .bottom-leave,\n.popup-enter, .popup-leave {\n  transform: translate3d(0, 100%, 0); }\n\n.tips-enter, .tips-leave {\n  opacity: 0; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="modal modal-{{type}} {{mask?'':'modal-nomask'}}" v-show="show" :transition="type"  @click.self="maskclose ? onCancel() : void 0;">
	// 		<div class="modal-layout {{(type==='popover' || type==='tips') && tripos ? tripos : ''}}">
	// 		    <span v-if="close===true" @click="onCancel" class="icon icon-close"></span>
	// 		    <div class="modal-inner">
	// 		        <slot name="loading"></slot>
	// 		        <div v-if="hastitle" class="modal-title">
	// 		        	<slot name="title">
	// 		        		<span v-if="type==='bottom' || type==='popup'" @click="onCancel" class='btn modal-btn btn-link modal-btn-no'>取消</span>
	// 		        		{{title}}
	// 		        		<span v-if="type==='bottom' || type==='popup'" @click="onYes" class='btn modal-btn btn-link modal-btn-yes'>确定</span>
	// 		        	</slot>
	// 		        </div>
	// 		        <div class="modal-text">
	// 		        	<slot>{{content}}</slot>
	// 		        </div>
	// 		    </div>
	// 		    <div class="modal-buttons" v-if="type==='alert'  || type==='confirm'">
	// 	    		<slot name="btns">
	// 	        		<span v-if="type!=='confirm'" @click="onCancel" class="modal-button modal-btn modal-btn-def modal-button-bold">取消</span>
	// 	    			<span @click="onYes" class="modal-button modal-btn modal-btn-yes modal-button-bold  {{disabled ? 'modal-button-disabled' : ''}}">确定</span>
	// 	    		</slot>
	// 		    </div>
	// 	    </div>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		props: {
			//是否显示右上角关闭标签
			close: { type: Boolean, default: false },
			show: { type: Boolean, default: false, twoWay: true },
			type: '', //loading preload  confirm alert center top bottom popup popover tips toast 在具体实例中已定义，扩展时可自定义名称
			title: '',
			content: '', //content为str或html,如果为function则需要返回str或html
			role: String, //弹层位置
			//是否存在mask
			mask: { type: Boolean, default: true },
			//点击mask关闭
			maskclose: { type: Boolean, default: true },
			//弹层标题栏
			hastitle: { default: true, type: Boolean },
			onyes: { default: function _default() {}, type: Function },
			oncancel: { default: function _default() {}, type: Function },
			disabled: { default: false, type: Boolean, twoWay: true }
		},
		data: function data() {
			return {
				tripos: 'tri-bottom'
			};
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
				this.show = false;
			}
		},
		transition: {}
	};
	// </script>
	//
	// <style lang="sass">
	// 	@import './scss/variables';
	// 	@import './scss/mixins';
	// 	@import './scss/phone';
	// 	/* === Modals === */
	// 	$modalBg: rgba(255,255,255,0.95);
	// 	$modalBd: rgba(230,230,230,0.9);
	// 	$modalButonColor : #007aff;
	// 	$modalButonActiveBg: rgba(230,230,230,0.95);
	// 	$modalHairlineColor: rgba(0,0,0,0.2);
	// 	$modalDuration: 400ms;
	//
	// 	$modalWidth: r(300px);
	// 	$modalHeight: r(270px);
	// 	$modalButtonSize: r(44px);		
	//
	// 	$actionsModalBg: rgba(255,255,255,0.95);
	// 	$actionsModalButtonActiveBg: rgba(230,230,230,0.9);
	// 	$actionsModalHairlineColor: rgba(0,0,0,0.2);
	// 	$actionsModalDuration: 300ms;
	//
	// 	$popupDuration: 400ms;
	// 	$actionsPopoverHairline: rgba(0,0,0,0.2);
	//
	// 	.modal {
	// 		display: flex;
	// 		align-items: center;
	//   		justify-content: center;
	// 		position: fixed;
	// 		top: 0;
	// 		right: 0;
	// 		bottom: 0;
	// 		left: 0;
	// 		outline: 0;
	// 		background-color: rgba(0,0,0,.5);
	// 		-webkit-overflow-scrolling: touch;
	// 		-webkit-backface-visibility: hidden;
	// 		-moz-backface-visibility: hidden;
	// 		backface-visibility: hidden;
	// 		-webkit-perspective: 1000px;
	// 		perspective: 1000px;
	// 		z-index: 13500;
	// 		&.modal-nomask{
	// 			background-color: rgba(0,0,0,0);
	// 		}
	// 	}
	//
	// 	.modal-inner {
	// 	    border-radius: r(6px) r(6px) 0 0;
	// 	    position: relative;
	// 	    background: $modalBg;
	// 	}
	//
	// 	.modal-title {
	// 	    line-height: 1.8rem;
	// 		text-align: center;
	// 		background-color: #08A9E5;
	// 		font: {
	// 			size: 0.7rem;
	// 			weight: 300;
	// 		}
	// 		color: #fff;
	//
	// 	    html.ios-gt-8 & {
	// 	        font-weight: 600;
	// 	    }
	// 	    +.modal-text {
	// 	        position: relative;
	// 	        background-color: #fff;
	// 	        padding: r(10px);
	// 	    }
	// 	}
	//
	// 	.modal-buttons {
	// 	    display: flex;
	// 		line-height: 2.25rem;
	// 		background-color: #fafafa;
	// 	    &.modal-buttons-vertical {
	// 	        display: block;
	// 	        height: auto;
	// 	    }
	// 	}
	//
	// 	.modal-button {
	// 		width: 100%;
	// 		text-align: center;
	// 		border-right: 1px solid #DFDFDF;
	// 		display:block; width:49%; //android uc not support flex
	// 		font: {
	// 			size: 0.75rem;
	// 			weight: 300;
	// 		}
	// 		&:last-child {
	// 			border-right: none;
	// 		}
	// 		&-emphasize {
	// 			color: #009EE1;
	// 		}
	// 		&-disabled {
	// 			color: #ccc;
	// 		}
	//
	// 	    &:first-child {
	// 	        border-radius: 0 0 0 r(13px);
	// 	    }
	// 	    &:last-child {
	// 	        border-radius: 0 0 r(13px) 0;
	// 	    }
	// 	    &:first-child:last-child {
	// 	        border-radius: 0 0 r(13px) r(13px);
	// 	    }
	// 	    &.modal-button-bold {
	// 	        font-weight: 500;
	// 	        html.ios-gt-8 & {
	// 	            font-weight: 600;
	// 	        }
	// 	    }
	// 	    html:not(.watch-active-state) &:active, &.active-state {
	// 	        background: $modalButonActiveBg;
	// 	    }
	// 	    .modal-buttons-vertical & {
	// 	        border-radius: 0;
	// 	        &:last-child {
	// 	            border-radius: 0 0 r(13px) r(13px);
	// 	        }
	// 	    }
	// 	    &:after{
	// 	        content: '';
	// 	        position: absolute;
	// 	        right: 0;
	// 	        top: 0;
	// 	        left: auto;
	// 	        bottom: auto;
	// 	        width: 1px;
	// 	        height: 100%;
	// 	        background-color: #b5b5b5;
	// 	        display: block;
	// 	        z-index: 15;
	// 	        -webkit-transform-origin: 100% 50%;
	// 	        transform-origin: 100% 50%;
	// 	    }
	// 	}
	//
	// 	.modal-no-buttons {
	// 	    .modal-inner {
	// 	        border-radius: r(13px);
	// 	    }
	// 	    .modal-buttons {
	// 	        display: none;
	// 	    }
	// 	}
	//
	// 	.modal-tips{
	// 		background-color: transparent;
	// 	}
	//
	// 	.modal-confirm{
	// 	    .modal-buttons{
	// 	        .modal-button{
	// 	        	flex:2;
	// 	        }
	// 	    }
	// 	}
	//
	// 	.modal-alert{
	// 	    .modal-buttons{
	// 	        .modal-button{
	// 	        	flex: 1;
	// 	        }
	// 	    }
	// 	}
	//
	// 	.modal-top, .modal-bottom, .modal-popup{
	// 		.modal-layout{
	// 		    width: 100%;
	// 		    border-radius: 0;
	// 		    .modal-inner, .modal-button{
	// 		        border-radius: 0;
	// 		    }
	// 		    .modal-button{
	// 		        &:first-child,&:last-child{
	// 		            border-radius: 0;
	// 		        }
	// 		    }
	// 	    }
	// 	}
	//
	// 	.modal-top{
	// 		.modal-layout{
	// 		    align-self: flex-start;
	// 		}
	// 	    .modal-title, .modal-title + .modal-text{
	// 	        text-align: left;
	// 	        background-color: transparent;
	// 	    }
	// 	    .modal-inner{
	// 	        background-color:rgba(0, 0, 0, 0.8);
	// 	        color: #d2d2d2;
	// 	        font-size:r(14px);
	// 	    }
	// 	    .icon-close{
	// 	        position: absolute;
	// 	        right:$gapV;
	// 	        color: #fff;
	// 	        z-index: 1;
	// 	    }
	// 	}
	//
	// 	.modal-bottom, .modal-popup{
	// 		.modal-layout{
	// 		    align-self: flex-end;
	// 			bottom: 0; left:0; position: absolute; //android uc not support flex
	// 		    max-height: r(250px);
	// 		    .table-view{
	// 		        margin-bottom: 0;
	// 		    }
	// 		    .modal-title{
	// 		        line-height: r(35px);
	// 		        font-size: r(16px);
	// 		        border-bottom:1px solid #ddd;
	// 		        .btn-link{
	// 		            font-size: r(15px);
	// 		            padding:r(10px);
	// 		        }
	// 		        .modal-btn-no{
	// 		            float: left;
	// 		        }
	// 		        .modal-btn-yes{
	// 		            float: right;
	// 		        }
	// 		    }
	// 		    .modal-title + .modal-text{
	// 		        height: r(170px);
	// 		        padding: 0;
	// 		    }
	// 	    }
	// 	}
	//
	// 	.modal-popup{
	// 		.modal-layout{
	// 		    height:100%;
	// 		    max-height: 100%;
	// 		    background-color: #fff;
	// 		    .modal-title+.modal-text{
	// 		        height:auto;
	// 		    }
	// 	    }
	// 	    .modal-text{
	// 	    	text-align: left;
	// 	    }
	// 	}
	//
	// 	/* Animate For Vue Modal */
	// 	.modal{
	// 	  transition: all .3s ease;
	// 	}
	// 	.preload-transition{
	// 		margin: 0 auto;
	// 	}
	// 	.loading-transition,
	// 	.alert-transition,
	// 	.confirm-transition,
	// 	.center-transition,
	// 	.toast-transition{
	// 		.modal-layout{
	// 			position: relative;
	// 		    border-radius: r(6px);
	// 			width: $modalWidth;
	// 			margin: 0 auto;
	// 			transform: scale(1);
	// 			opacity: 1;
	// 		    overflow: hidden;
	// 		}
	// 	}
	// 	.top-transition,
	// 	.bottom-transition,
	// 	.popup-transition,
	// 	.popover-transition,
	// 	.toast-transition{
	// 		transform: translate3d(0, 0, 0);
	// 		opacity: 1;
	// 	}
	// 	.tips-transition{
	// 		opacity: 1;
	// 	}
	// 	.loading-enter,
	// 	.preload-enter,
	//  	.alert-enter,
	//  	.confirm-enter,
	//  	.center-enter,
	//  	.toast-enter{
	// 	  	transform: scale(1.5);
	// 	  	opacity: 0.5;
	// 	}
	//
	// 	.alert-leave,
	// 	.confirm-leave,
	// 	.center-leave,
	// 	.loading-leave,
	// 	.preload-leave,
	// 	.toast-leave{
	// 		transform: scale(0.8);
	// 		opacity: 0;
	// 	}
	// 	.popover-enter, .popover-leave{
	// 		top: 0!important;
	// 		opacity: 0.5;
	// 	}
	// 	.top-enter, .top-leave{
	// 		transform: translate3d(0, -100%, 0);
	// 	}	
	// 	.bottom-enter, .bottom-leave,
	// 	.popup-enter, .popup-leave{
	// 		transform: translate3d(0, 100%, 0);
	// 	}
	// 	.tips-enter, .tips-leave{
	// 		opacity: 0;
	// 	}
	// </style>
	/* generated by vue-loader */

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "\r\n\t<div class=\"modal modal-{{type}} {{mask?'':'modal-nomask'}}\" v-show=\"show\" :transition=\"type\"  @click.self=\"maskclose ? onCancel() : void 0;\">\r\n\t\t<div class=\"modal-layout {{(type==='popover' || type==='tips') && tripos ? tripos : ''}}\">\r\n\t\t    <span v-if=\"close===true\" @click=\"onCancel\" class=\"icon icon-close\"></span>\r\n\t\t    <div class=\"modal-inner\">\r\n\t\t        <slot name=\"loading\"></slot>\r\n\t\t        <div v-if=\"hastitle\" class=\"modal-title\">\r\n\t\t        \t<slot name=\"title\">\r\n\t\t        \t\t<span v-if=\"type==='bottom' || type==='popup'\" @click=\"onCancel\" class='btn modal-btn btn-link modal-btn-no'>取消</span>\r\n\t\t        \t\t{{title}}\r\n\t\t        \t\t<span v-if=\"type==='bottom' || type==='popup'\" @click=\"onYes\" class='btn modal-btn btn-link modal-btn-yes'>确定</span>\r\n\t\t        \t</slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-text\">\r\n\t\t        \t<slot>{{content}}</slot>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t    <div class=\"modal-buttons\" v-if=\"type==='alert'  || type==='confirm'\">\r\n\t    \t\t<slot name=\"btns\">\r\n\t        \t\t<span v-if=\"type!=='confirm'\" @click=\"onCancel\" class=\"modal-button modal-btn modal-btn-def modal-button-bold\">取消</span>\r\n\t    \t\t\t<span @click=\"onYes\" class=\"modal-button modal-btn modal-btn-yes modal-button-bold  {{disabled ? 'modal-button-disabled' : ''}}\">确定</span>\r\n\t    \t\t</slot>\r\n\t\t    </div>\r\n\t    </div>\r\n\t</div>\r\n";

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "\r\n    <modal :show.sync=\"show\" type=\"bottom\" :title=\"title\" class=\"ui-select\" :onyes=\"onyes\" :oncancel=\"oncancel\">\r\n        <slot></slot>\r\n    </modal>\r\n";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "\n  \t<vselect title=\"选择交车时间\" :show.sync=\"show\" :onyes=\"onyes\" _v-4f8e1c90=\"\">\n    \t\t<voption v-ref:date=\"\" class=\"v-options\" :height=\"height\" :step=\"step\" :data=\"datestr\" width=\"35%\" :onpanend=\"checkRange\" _v-4f8e1c90=\"\"></voption>\n    \t\t<voption v-ref:ampm=\"\" class=\"v-options\" :height=\"height\" :step=\"step\" :data=\"ampm\" width=\"20%\" :onpanend=\"checkRange\" _v-4f8e1c90=\"\"></voption>\n    \t\t<voption v-ref:hour=\"\" class=\"v-options\" :height=\"height\" :step=\"step\" :data=\"hour\" width=\"20%\" :onpanend=\"checkRange\" _v-4f8e1c90=\"\"></voption>\n    \t\t<voption v-ref:minute=\"\" class=\"v-options\" :height=\"height\" :step=\"step\" :data=\"minute\" width=\"25%\" :onpanend=\"checkRange\" _v-4f8e1c90=\"\"></voption>\n  \t</vselect>\n    <modal :show.sync=\"toastShow\" :hastitle=\"false\" type=\"toast\" :time=\"1500\" :mask=\"false\" _v-4f8e1c90=\"\">{{toastContent}}</modal>\n";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(109)
	__vue_script__ = __webpack_require__(111)
	__vue_template__ = __webpack_require__(112)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\flash.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(110);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-60b90fab&file=flash.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./flash.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-60b90fab&file=flash.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./flash.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal-toast[_v-60b90fab] {\n  position: fixed;\n  width: 60%;\n  left: 20%;\n  text-align: center;\n  color: #fff;\n  z-index: 100000;\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  bottom: 35%; }\n  .modal-toast .icon[_v-60b90fab] {\n    -webkit-font-smoothing: antialiased;\n    font-size: 15px;\n    padding: 8px 0;\n    border-radius: 6px;\n    width: 100%;\n    display: block;\n    pointer-events: fill; }\n    .modal-toast .icon[_v-60b90fab]:before {\n      font-size: 18px;\n      position: relative;\n      top: 1px;\n      margin-right: 5px; }\n  .modal-toast.modal-toast-info .icon[_v-60b90fab] {\n    background: rgba(0, 0, 0, 0.7); }\n  .modal-toast.modal-toast-success .icon[_v-60b90fab] {\n    background-color: forestgreen; }\n  .modal-toast.modal-toast-error .icon[_v-60b90fab] {\n    background-color: orangered; }\n", "", {"version":3,"sources":["/./src/flash.vue.style"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,iCAAyB;EAAzB,yBAAyB;EACzB,YAAY,EAAE;EACd;IACE,oCAAoC;IACpC,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,qBAAqB,EAAE;IACvB;MACE,gBAAgB;MAChB,mBAAmB;MACnB,SAAS;MACT,kBAAkB,EAAE;EACxB;IACE,+BAA+B,EAAE;EACnC;IACE,8BAA8B,EAAE;EAClC;IACE,4BAA4B,EAAE","file":"flash.vue","sourcesContent":[".modal-toast {\n  position: fixed;\n  width: 60%;\n  left: 20%;\n  text-align: center;\n  color: #fff;\n  z-index: 100000;\n  transition: all .3s ease;\n  bottom: 35%; }\n  .modal-toast .icon {\n    -webkit-font-smoothing: antialiased;\n    font-size: 15px;\n    padding: 8px 0;\n    border-radius: 6px;\n    width: 100%;\n    display: block;\n    pointer-events: fill; }\n    .modal-toast .icon:before {\n      font-size: 18px;\n      position: relative;\n      top: 1px;\n      margin-right: 5px; }\n  .modal-toast.modal-toast-info .icon {\n    background: rgba(0, 0, 0, 0.7); }\n  .modal-toast.modal-toast-success .icon {\n    background-color: forestgreen; }\n  .modal-toast.modal-toast-error .icon {\n    background-color: orangered; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="modal-toast modal-toast-info" v-show="show">
	// 	    <span class="icon icon-{{type==='info' ? 'info' : (type==='error'?'close': 'check') }} icon-in"  v-show="show">
	// 	    	<slot>{{content}}</slot>
	// 	    </span>
	// 	</div>
	// </template>
	//
	// <script>
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
			show: { default: false },
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
	// </script>
	//
	// <style lang="sass" scoped>
	// 	.modal-toast{
	// 	    position: fixed;
	// 	    width:60%;
	// 	    left: 20%;
	// 	    text-align: center;
	// 	    color: #fff;
	// 	    z-index: 100000;
	// 	    transition: all .3s ease;
	// 	    // pointer-events: none;
	// 	    bottom: 35%;
	// 	    .icon{
	// 	        -webkit-font-smoothing: antialiased;
	// 	        font-size: 15px;
	// 	        padding: 8px 0;
	// 	        border-radius: 6px;
	// 	        width:100%;
	// 	        display: block;
	// 	        pointer-events: fill;
	// 	        &:before{
	// 	            font-size: 18px;
	// 	            position: relative;
	// 	            top:1px;
	// 	            margin-right: 5px;
	// 	            //background-color: #fff;
	// 	            //border-radius: 100%;
	// 	        }
	// 	    }
	// 	    &.modal-toast-info .icon{
	// 	        background: rgba(0,0,0,.7);
	// 	    }
	// 	    &.modal-toast-success .icon{
	// 	        background-color: forestgreen;
	// 	    }
	// 	    &.modal-toast-error .icon{
	// 	        background-color: orangered;
	// 	    }
	// 	}
	// </style>
	/* generated by vue-loader */

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"modal-toast modal-toast-info\" v-show=\"show\" _v-60b90fab=\"\">\n\t    <span class=\"icon icon-{{type==='info' ? 'info' : (type==='error'?'close': 'check') }} icon-in\" v-show=\"show\" _v-60b90fab=\"\">\n\t    \t<slot _v-60b90fab=\"\">{{content}}</slot>\n\t    </span>\n\t</div>\n";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(114)
	__vue_script__ = __webpack_require__(116)
	__vue_template__ = __webpack_require__(117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\hd.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(115);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0918715e&file=hd.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./hd.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0918715e&file=hd.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./hd.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n@font-face {\n  font-family: Ratchicons;\n  font-weight: normal;\n  font-style: normal;\n  src: url(" + __webpack_require__(15) + ");\n  src: url(" + __webpack_require__(15) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(16) + ") format(\"woff\"), url(" + __webpack_require__(17) + ") format(\"truetype\"), url(" + __webpack_require__(18) + "#svgFontName) format(\"svg\"); }\n\n.icon {\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: 24px;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased; }\n\n.icon-back:before {\n  content: '\\E80A'; }\n\n.icon-bars:before {\n  content: '\\E80E'; }\n\n.icon-caret:before {\n  content: '\\E80F'; }\n\n.icon-check:before {\n  content: '\\E810'; }\n\n.icon-close:before {\n  content: '\\E811'; }\n\n.icon-code:before {\n  content: '\\E812'; }\n\n.icon-compose:before {\n  content: '\\E813'; }\n\n.icon-download:before {\n  content: '\\E815'; }\n\n.icon-edit:before {\n  content: '\\E829'; }\n\n.icon-forward:before {\n  content: '\\E82A'; }\n\n.icon-gear:before {\n  content: '\\E821'; }\n\n.icon-home:before {\n  content: '\\E82B'; }\n\n.icon-info:before {\n  content: '\\E82C'; }\n\n.icon-list:before {\n  content: '\\E823'; }\n\n.icon-more-vertical:before {\n  content: '\\E82E'; }\n\n.icon-more:before {\n  content: '\\E82F'; }\n\n.icon-pages:before {\n  content: '\\E824'; }\n\n.icon-pause:before {\n  content: '\\E830'; }\n\n.icon-person:before {\n  content: '\\E832'; }\n\n.icon-play:before {\n  content: '\\E816'; }\n\n.icon-plus:before {\n  content: '\\E817'; }\n\n.icon-refresh:before {\n  content: '\\E825'; }\n\n.icon-search:before {\n  content: '\\E819'; }\n\n.icon-share:before {\n  content: '\\E81A'; }\n\n.icon-sound:before {\n  content: '\\E827'; }\n\n.icon-sound2:before {\n  content: '\\E828'; }\n\n.icon-sound3:before {\n  content: '\\E80B'; }\n\n.icon-sound4:before {\n  content: '\\E80C'; }\n\n.icon-star-filled:before {\n  content: '\\E81B'; }\n\n.icon-star:before {\n  content: '\\E81C'; }\n\n.icon-stop:before {\n  content: '\\E81D'; }\n\n.icon-trash:before {\n  content: '\\E81E'; }\n\n.icon-up-nav:before {\n  content: '\\E81F'; }\n\n.icon-up:before {\n  content: '\\E80D'; }\n\n.icon-right-nav:before {\n  content: '\\E818'; }\n\n.icon-right:before {\n  content: '\\E826'; }\n\n.icon-down-nav:before {\n  content: '\\E814'; }\n\n.icon-down:before {\n  content: '\\E820'; }\n\n.icon-left-nav:before {\n  content: '\\E82D'; }\n\n.icon-left:before {\n  content: '\\E822'; }\n\n/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.bar {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  height: 2rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n/* \r\n\t.bar-header-secondary {\r\n\t  top: $bar-base-height;\r\n\t}\r\n\r\n\t.bar-footer {\r\n\t  bottom: 0;\r\n\t}\r\n\r\n\t.bar-footer-secondary {\r\n\t  bottom: $bar-base-height;\r\n\t}\r\n\r\n\t.bar-footer-secondary-tab {\r\n\t  bottom: $bar-tab-height;\r\n\t}\r\n\r\n\t.bar-footer,\r\n\t.bar-footer-secondary,\r\n\t.bar-footer-secondary-tab {\r\n\t  border-top: $border-default;\r\n\t  border-bottom: 0;\r\n\t}\r\n\r\n\r\n\t// Nav bar\r\n\t// --------------------------------------------------\r\n\t.bar-nav {\r\n\t  top: 0;\r\n\t} */\n.title {\n  width: 100%;\n  padding: 0;\n  font-size: 0.66667rem;\n  font-weight: 500;\n  line-height: 2rem;\n  color: #000;\n  text-align: center;\n  white-space: nowrap;\n  top: 0; }\n\n.title a {\n  color: inherit; }\n\n.bar .icon, .bar .btn {\n  position: absolute;\n  z-index: 20;\n  text-align: center; }\n  .bar .icon.pull-right, .bar .btn.pull-right {\n    right: 0; }\n\n.bar .icon {\n  width: 2rem;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 1rem; }\n\n.bar .btn .icon {\n  top: 0.125rem;\n  padding: 0; }\n\n.bar .title .icon {\n  padding: 0; }\n  .bar .title .icon.icon-caret {\n    top: 0.16667rem;\n    margin-left: -r(5px); }\n\n.title-ms {\n  display: block;\n  width: 100%; }\n  .title-ms .title, .title-ms .subtitle {\n    margin: 0;\n    width: 100%;\n    text-align: center; }\n  .title-ms .title {\n    font-size: 0.75rem;\n    height: 1.2rem;\n    line-height: 1.2rem; }\n  .title-ms .subtitle {\n    font-size: 0.58333rem;\n    height: 0.8rem;\n    line-height: 0.4rem;\n    color: #0B5684; }\n\n.bar-tab {\n  display: table;\n  bottom: 0;\n  width: 100%;\n  height: 2rem;\n  padding: 0;\n  table-layout: fixed;\n  border-top: 1px solid #ddd;\n  border-bottom: 0; }\n  .bar-tab .tab-item {\n    display: table-cell;\n    width: 1%;\n    height: 2rem;\n    color: #929292;\n    text-align: center;\n    vertical-align: middle; }\n    .bar-tab .tab-item.active, .bar-tab .tab-item:active {\n      color: #428bca; }\n    .bar-tab .tab-item .icon {\n      top: 0.125rem;\n      width: 1rem;\n      height: 1rem;\n      padding-top: 0;\n      padding-bottom: 0; }\n      .bar-tab .tab-item .icon ~ .tab-label {\n        display: block;\n        font-size: 0.45833rem; }\n\n.bar .btn {\n  top: 0.29167rem;\n  z-index: 20;\n  padding: 0.25rem 0.5rem 0.29167rem;\n  margin: 0 0.41667rem;\n  font-weight: 400; }\n\n.bar .btn-link {\n  top: 0;\n  padding: 0;\n  font-size: 0.66667rem;\n  line-height: 2rem;\n  color: #428bca;\n  border: 0; }\n  .bar .btn-link:active, .bar .btn-link.active {\n    color: #3071a9; }\n\n.bar .btn-block {\n  top: 0.25rem;\n  padding: 0.29167rem 0;\n  margin-bottom: 0;\n  font-size: 0.66667rem; }\n\n.bar .btn-nav.pull-left {\n  margin-left: -r(5px); }\n  .bar .btn-nav.pull-left .icon-left-nav {\n    margin-right: -r(3px); }\n\n.bar .btn-nav.pull-right {\n  margin-right: -r(5px); }\n  .bar .btn-nav.pull-right .icon-right-nav {\n    margin-left: -r(3px); }\n\n.bar input[type=\"search\"] {\n  height: 1.20833rem;\n  margin: 0.25rem 0; }\n\n.bar .segmented-control {\n  top: 0.29167rem;\n  margin: 0 auto;\n  width: 60%; }\n\na, .btn-link, .active, .modal-button {\n  color: #099fde; }\n\n.bar {\n  background-color: #099fde; }\n  .bar a {\n    color: #fff; }\n  .bar .title {\n    color: #fff; }\n\n.ios {\n  height: 2.6rem; }\n  .ios .title {\n    line-height: 3.2rem; }\n  .ios .btn-link {\n    line-height: 2rem; }\n  .ios .icon {\n    top: 0.725rem; }\n", "", {"version":3,"sources":["/./src/hd.vue.style"],"names":[],"mappings":"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","file":"hd.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n@font-face {\n  font-family: Ratchicons;\n  font-weight: normal;\n  font-style: normal;\n  src: url(\"./fonts/ratchicons.eot\");\n  src: url(\"./fonts/ratchicons.eot?#iefix\") format(\"embedded-opentype\"), url(\"./fonts/ratchicons.woff\") format(\"woff\"), url(\"./fonts/ratchicons.ttf\") format(\"truetype\"), url(\"./fonts/ratchicons.svg#svgFontName\") format(\"svg\"); }\n\n.icon {\n  display: inline-block;\n  font-family: Ratchicons;\n  font-size: 24px;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased; }\n\n.icon-back:before {\n  content: '\\e80a'; }\n\n.icon-bars:before {\n  content: '\\e80e'; }\n\n.icon-caret:before {\n  content: '\\e80f'; }\n\n.icon-check:before {\n  content: '\\e810'; }\n\n.icon-close:before {\n  content: '\\e811'; }\n\n.icon-code:before {\n  content: '\\e812'; }\n\n.icon-compose:before {\n  content: '\\e813'; }\n\n.icon-download:before {\n  content: '\\e815'; }\n\n.icon-edit:before {\n  content: '\\e829'; }\n\n.icon-forward:before {\n  content: '\\e82a'; }\n\n.icon-gear:before {\n  content: '\\e821'; }\n\n.icon-home:before {\n  content: '\\e82b'; }\n\n.icon-info:before {\n  content: '\\e82c'; }\n\n.icon-list:before {\n  content: '\\e823'; }\n\n.icon-more-vertical:before {\n  content: '\\e82e'; }\n\n.icon-more:before {\n  content: '\\e82f'; }\n\n.icon-pages:before {\n  content: '\\e824'; }\n\n.icon-pause:before {\n  content: '\\e830'; }\n\n.icon-person:before {\n  content: '\\e832'; }\n\n.icon-play:before {\n  content: '\\e816'; }\n\n.icon-plus:before {\n  content: '\\e817'; }\n\n.icon-refresh:before {\n  content: '\\e825'; }\n\n.icon-search:before {\n  content: '\\e819'; }\n\n.icon-share:before {\n  content: '\\e81a'; }\n\n.icon-sound:before {\n  content: '\\e827'; }\n\n.icon-sound2:before {\n  content: '\\e828'; }\n\n.icon-sound3:before {\n  content: '\\e80b'; }\n\n.icon-sound4:before {\n  content: '\\e80c'; }\n\n.icon-star-filled:before {\n  content: '\\e81b'; }\n\n.icon-star:before {\n  content: '\\e81c'; }\n\n.icon-stop:before {\n  content: '\\e81d'; }\n\n.icon-trash:before {\n  content: '\\e81e'; }\n\n.icon-up-nav:before {\n  content: '\\e81f'; }\n\n.icon-up:before {\n  content: '\\e80d'; }\n\n.icon-right-nav:before {\n  content: '\\e818'; }\n\n.icon-right:before {\n  content: '\\e826'; }\n\n.icon-down-nav:before {\n  content: '\\e814'; }\n\n.icon-down:before {\n  content: '\\e820'; }\n\n.icon-left-nav:before {\n  content: '\\e82d'; }\n\n.icon-left:before {\n  content: '\\e822'; }\n\n/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.bar {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  height: 2rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n  backface-visibility: hidden; }\n\n/* \r\n\t.bar-header-secondary {\r\n\t  top: $bar-base-height;\r\n\t}\r\n\r\n\t.bar-footer {\r\n\t  bottom: 0;\r\n\t}\r\n\r\n\t.bar-footer-secondary {\r\n\t  bottom: $bar-base-height;\r\n\t}\r\n\r\n\t.bar-footer-secondary-tab {\r\n\t  bottom: $bar-tab-height;\r\n\t}\r\n\r\n\t.bar-footer,\r\n\t.bar-footer-secondary,\r\n\t.bar-footer-secondary-tab {\r\n\t  border-top: $border-default;\r\n\t  border-bottom: 0;\r\n\t}\r\n\r\n\r\n\t// Nav bar\r\n\t// --------------------------------------------------\r\n\t.bar-nav {\r\n\t  top: 0;\r\n\t} */\n.title {\n  width: 100%;\n  padding: 0;\n  font-size: 0.66667rem;\n  font-weight: 500;\n  line-height: 2rem;\n  color: #000;\n  text-align: center;\n  white-space: nowrap;\n  top: 0; }\n\n.title a {\n  color: inherit; }\n\n.bar .icon, .bar .btn {\n  position: absolute;\n  z-index: 20;\n  text-align: center; }\n  .bar .icon.pull-right, .bar .btn.pull-right {\n    right: 0; }\n\n.bar .icon {\n  width: 2rem;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 1rem; }\n\n.bar .btn .icon {\n  top: 0.125rem;\n  padding: 0; }\n\n.bar .title .icon {\n  padding: 0; }\n  .bar .title .icon.icon-caret {\n    top: 0.16667rem;\n    margin-left: -r(5px); }\n\n.title-ms {\n  display: block;\n  width: 100%; }\n  .title-ms .title, .title-ms .subtitle {\n    margin: 0;\n    width: 100%;\n    text-align: center; }\n  .title-ms .title {\n    font-size: 0.75rem;\n    height: 1.2rem;\n    line-height: 1.2rem; }\n  .title-ms .subtitle {\n    font-size: 0.58333rem;\n    height: 0.8rem;\n    line-height: 0.4rem;\n    color: #0B5684; }\n\n.bar-tab {\n  display: table;\n  bottom: 0;\n  width: 100%;\n  height: 2rem;\n  padding: 0;\n  table-layout: fixed;\n  border-top: 1px solid #ddd;\n  border-bottom: 0; }\n  .bar-tab .tab-item {\n    display: table-cell;\n    width: 1%;\n    height: 2rem;\n    color: #929292;\n    text-align: center;\n    vertical-align: middle; }\n    .bar-tab .tab-item.active, .bar-tab .tab-item:active {\n      color: #428bca; }\n    .bar-tab .tab-item .icon {\n      top: 0.125rem;\n      width: 1rem;\n      height: 1rem;\n      padding-top: 0;\n      padding-bottom: 0; }\n      .bar-tab .tab-item .icon ~ .tab-label {\n        display: block;\n        font-size: 0.45833rem; }\n\n.bar .btn {\n  top: 0.29167rem;\n  z-index: 20;\n  padding: 0.25rem 0.5rem 0.29167rem;\n  margin: 0 0.41667rem;\n  font-weight: 400; }\n\n.bar .btn-link {\n  top: 0;\n  padding: 0;\n  font-size: 0.66667rem;\n  line-height: 2rem;\n  color: #428bca;\n  border: 0; }\n  .bar .btn-link:active, .bar .btn-link.active {\n    color: #3071a9; }\n\n.bar .btn-block {\n  top: 0.25rem;\n  padding: 0.29167rem 0;\n  margin-bottom: 0;\n  font-size: 0.66667rem; }\n\n.bar .btn-nav.pull-left {\n  margin-left: -r(5px); }\n  .bar .btn-nav.pull-left .icon-left-nav {\n    margin-right: -r(3px); }\n\n.bar .btn-nav.pull-right {\n  margin-right: -r(5px); }\n  .bar .btn-nav.pull-right .icon-right-nav {\n    margin-left: -r(3px); }\n\n.bar input[type=\"search\"] {\n  height: 1.20833rem;\n  margin: 0.25rem 0; }\n\n.bar .segmented-control {\n  top: 0.29167rem;\n  margin: 0 auto;\n  width: 60%; }\n\na, .btn-link, .active, .modal-button {\n  color: #099fde; }\n\n.bar {\n  background-color: #099fde; }\n  .bar a {\n    color: #fff; }\n  .bar .title {\n    color: #fff; }\n\n.ios {\n  height: 2.6rem; }\n  .ios .title {\n    line-height: 3.2rem; }\n  .ios .btn-link {\n    line-height: 2rem; }\n  .ios .icon {\n    top: 0.725rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	     value: true
	});
	// <template>
	// 	<header class="bar bar-nav {{ios ? 'ios' : ''}}">
	// 		<slot name="left" class="pull-left"><a v-on:click="onleft" class="icon icon-left-nav"></a></slot>
	// 		<slot name="right" class="pull-right"><a v-on:click="onright" class="icon icon-bars pull-right"></a></slot>
	// 		<slot>
	// 			<div class="title-wrapper" v-bind:class="{'title-ms':subtitle}">
	// 			    <h1 class="title">{{title}}</h1>
	// 			    <h2 v-if="subtitle" class="subtitle">{{subtitle}}</h2>
	// 			</div>
	// 		</slot>
	// 	</header>
	// </template>
	//
	// <script>
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
	// </script>
	//
	// <style lang="sass">
	// 	@import './scss/variables';
	// 	@import './scss/mixins';
	// 	@import './scss/icons';
	// 	@import './scss/phone';
	// 	.bar {
	// 	  position: fixed;
	// 	  right: 0;
	// 	  left: 0;
	// 	  z-index: 10;
	// 	  height: $bar-base-height;
	// 	  background-color: $chrome-color;
	// 	  border-bottom: $border-default;
	// 	  backface-visibility: hidden;
	// 	}
	// /*
	// 	.bar-header-secondary {
	// 	  top: $bar-base-height;
	// 	}
	//
	// 	.bar-footer {
	// 	  bottom: 0;
	// 	}
	//
	// 	.bar-footer-secondary {
	// 	  bottom: $bar-base-height;
	// 	}
	//
	// 	.bar-footer-secondary-tab {
	// 	  bottom: $bar-tab-height;
	// 	}
	//
	// 	.bar-footer,
	// 	.bar-footer-secondary,
	// 	.bar-footer-secondary-tab {
	// 	  border-top: $border-default;
	// 	  border-bottom: 0;
	// 	}
	//
	//
	// 	// Nav bar
	// 	// --------------------------------------------------
	// 	.bar-nav {
	// 	  top: 0;
	// 	} */
	//
	// 	.title {
	// 	  width: 100%;
	// 	  padding: 0;
	// 	  font-size: $font-size-default;
	// 	  font-weight: $font-weight;
	// 	  line-height: $bar-base-height;
	// 	  color: #000;
	// 	  text-align: center;
	// 	  white-space: nowrap;
	// 	  top:0;
	// 	}
	//
	// 	.title a {
	// 	  color: inherit;
	// 	}
	//
	// 	// Bars with Ratchicons
	// 	// --------------------------------------------------
	//
	// 	.bar {
	// 	  .icon, .btn{
	// 	    position: absolute;
	// 	    z-index: 20;
	// 	    text-align: center;
	// 	    &.pull-right{
	// 			right:0;
	// 	    }
	// 	  }
	//
	// 	  .icon{
	// 		width: $bar-base-height;
	// 		height: $bar-base-height;
	// 	    line-height: $bar-base-height;
	// 	    font-size: r(24px);
	// 	  }	
	//
	// 	  .btn .icon {
	// 	    top: r(3px);
	// 	    padding: 0;
	// 	  }
	//
	// 	  .title .icon {
	// 	    padding: 0;
	//
	// 	    &.icon-caret {
	// 	      top: r(4px);
	// 	      margin-left: -r(5px);
	// 	    }
	// 	  }
	// 	}
	//
	// 	.title-ms{
	// 	    display: block;
	// 		width: 100%;
	// 	    .title, .subtitle{
	// 			margin: 0;
	// 			width: 100%;
	// 			text-align: center;
	// 	    }
	// 	    .title {
	// 	        font-size: r(18px);
	// 	        height: $bar-base-height*3/5;
	// 	        line-height: $bar-base-height*3/5;
	// 	    }
	// 	    .subtitle {
	// 	        font-size: r(14px);
	// 	        height: $bar-base-height*2/5;
	// 	        line-height: $bar-base-height*1/5;
	// 	        color: #0B5684;
	// 	    }
	// 	}
	//
	// 	// Tab bar
	// 	// --------------------------------------------------
	//
	// 	.bar-tab {
	// 	  display: table;
	// 	  bottom: 0;
	// 	  width: 100%;
	// 	  height: $bar-tab-height;
	// 	  padding: 0;
	// 	  table-layout: fixed;
	// 	  border-top: $border-default;
	// 	  border-bottom: 0;
	//
	// 	  .tab-item {
	// 	    display: table-cell;
	// 	    width: 1%;
	// 	    height: $bar-tab-height;
	// 	    color: #929292;
	// 	    text-align: center;
	// 	    vertical-align: middle;
	//
	// 	    &.active,
	// 	    &:active {
	// 	      color: $primary-color;
	// 	    }
	//
	// 	    // Tab icon
	// 	    .icon {
	// 	      top: r(3px);
	// 	      width: r(24px);
	// 	      height: r(24px);
	// 	      padding-top: 0;
	// 	      padding-bottom: 0;
	//
	// 	      ~ .tab-label {
	// 	        display: block;
	// 	        font-size: r(11px);
	// 	      }
	// 	    }
	// 	  }
	// 	}
	//
	// 	// Bars with buttons
	// 	// --------------------------------------------------
	//
	// 	.bar .btn {
	// 	  top: r(7px);
	// 	  z-index: 20;
	// 	  padding: r(6px) r(12px) r(7px);
	// 	  margin: 0  $bar-side-spacing;
	// 	  font-weight: $font-weight-light;
	// 	}
	//
	// 	.bar .btn-link {
	// 	  top: 0;
	// 	  padding: 0;
	// 	  font-size: r(16px);
	// 	  line-height: $bar-base-height;
	// 	  color: $primary-color;
	// 	  border: 0;
	//
	// 	  &:active,
	// 	  &.active {
	// 	    color: darken($primary-color, 10%);
	// 	  }
	// 	}
	//
	// 	.bar .btn-block {
	// 	  top: r(6px);
	// 	  padding: r(7px) 0;
	// 	  margin-bottom: 0;
	// 	  font-size: r(16px); // Scale down font size to fit in bar.
	// 	}
	//
	//
	// 	.bar .btn-nav {
	// 	  &.pull-left {
	// 	    margin-left: -r(5px);
	//
	// 	    .icon-left-nav {
	// 	      margin-right: -r(3px);
	// 	    }
	// 	  }
	// 	  &.pull-right {
	// 	    margin-right: -r(5px);
	//
	// 	    .icon-right-nav {
	// 	      margin-left: -r(3px);
	// 	    }
	// 	  }
	// 	}
	//
	// 	// Bars for search forms
	// 	// --------------------------------------------------
	//
	// 	// Position/size search bar within the bar
	// 	.bar input[type="search"] {
	// 	  height: r(29px);
	// 	  margin: r(6px) 0;
	// 	}
	//
	//
	// 	// Bars with segmented controls
	// 	// --------------------------------------------------
	// 	.bar .segmented-control {
	// 	  top: r(7px);
	// 	  margin: 0 auto;
	// 	  width: 60%;
	// 	}
	//
	//
	//
	// 	$h5Color: #099fde;
	// 	a, .btn-link, .active, .modal-button{
	// 	    color: $h5Color;
	// 	}
	//
	// 	.bar{
	// 	    background-color: $h5Color;
	// 	    a{
	// 	        color: #fff;
	// 	    }
	// 	    .title{
	// 	        color: #fff;
	// 	    }
	// 	}
	//
	// 	//ios hybrid app bugs
	// 	$iosTopGap: 0.6rem;
	// 	.ios{
	// 		height: $bar-base-height + $iosTopGap;
	// 		.title{
	// 			line-height: $bar-base-height + $iosTopGap*2;
	// 		}
	// 		.btn-link {
	// 		  line-height: $bar-base-height;
	// 		}
	// 		.icon{
	// 			top: r(3px) + $iosTopGap;
	// 		}
	// 	}
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "\r\n\t<header class=\"bar bar-nav {{ios ? 'ios' : ''}}\">\r\n\t\t<slot name=\"left\" class=\"pull-left\"><a v-on:click=\"onleft\" class=\"icon icon-left-nav\"></a></slot>\r\n\t\t<slot name=\"right\" class=\"pull-right\"><a v-on:click=\"onright\" class=\"icon icon-bars pull-right\"></a></slot>\r\n\t\t<slot>\r\n\t\t\t<div class=\"title-wrapper\" v-bind:class=\"{'title-ms':subtitle}\">\r\n\t\t\t    <h1 class=\"title\">{{title}}</h1>\r\n\t\t\t    <h2 v-if=\"subtitle\" class=\"subtitle\">{{subtitle}}</h2>\r\n\t\t\t</div>\r\n\t\t</slot>\r\n\t</header>\r\n";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(119)
	__vue_template__ = __webpack_require__(120)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\listdata.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

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
	  components: [_icon2.default, _badge2.default, _btn2.default],
	  replace: false,
	  props: {
	    list: {
	      type: Array,
	      default: []
	    },
	    media: {
	      type: String,
	      default: '' //or img
	    },
	    card: { type: Boolean, default: false },
	    arrow: { type: Boolean, default: true }
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
	      if (! ~classes.indexOf('table-view-divider') || ! ~classes.indexOf('table-view-collapse')) {
	        return;
	      }
	
	      var compon = this;
	      next(elem);
	      //获取相连的满足相同条件的元素
	      function next(element) {
	        var nextElem = element.nextSibling;
	        if (nextElem.tagName === 'LI' && !! ~nextElem.className.indexOf('table-view-cell')) {
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
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//   <ul class="table-view" v-bind:class="{'card':card, 'table-noarrow':!arrow}">
	//       <li v-for="it in list"
	//           track-by="$index"
	//           v-on:click="collapseListGroup"
	//           v-bind:class="{'table-view-cell':!it.isDivider, 'table-view-divider':it.isDivider,  'table-view-collapse':it.collapse, 'table-view-full':(it.badge===void 0)}">
	//         <span v-if="it.isDivider">{{it.title}}</span>
	//         <a v-if="!it.isDivider" class="navigate-right" v-link="{path: it.link}">
	//             <badge v-if="it.badge">{{it.badge}}</badge>
	//             <img v-if="media === 'img' && it.img" class="media-object pull-left" v-bind:src="it.img" />
	//             <icon v-if="media === 'icon'" :icon="it.icon" class="media-object  pull-left"></icon>
	//             <btn v-if="media === 'btn'">{{it.btn}}</btn>
	//             <div class="media-body">
	//                 <span>{{it.title}}</span>
	//                 <p v-if="it.content">{{it.content}}</p>
	//             </div>
	//         </a>
	//       </li>
	//   </ul>
	// </template>
	//
	// <script>
	//@todo list change to <list><item></item></list>

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = "\r\n  <ul class=\"table-view\" v-bind:class=\"{'card':card, 'table-noarrow':!arrow}\">\r\n      <li v-for=\"it in list\"\r\n          track-by=\"$index\"\r\n          v-on:click=\"collapseListGroup\"\r\n          v-bind:class=\"{'table-view-cell':!it.isDivider, 'table-view-divider':it.isDivider,  'table-view-collapse':it.collapse, 'table-view-full':(it.badge===void 0)}\">\r\n        <span v-if=\"it.isDivider\">{{it.title}}</span>\r\n        <a v-if=\"!it.isDivider\" class=\"navigate-right\" v-link=\"{path: it.link}\">\r\n            <badge v-if=\"it.badge\">{{it.badge}}</badge>\r\n            <img v-if=\"media === 'img' && it.img\" class=\"media-object pull-left\" v-bind:src=\"it.img\" />\r\n            <icon v-if=\"media === 'icon'\" :icon=\"it.icon\" class=\"media-object  pull-left\"></icon>\r\n            <btn v-if=\"media === 'btn'\">{{it.btn}}</btn>\r\n            <div class=\"media-body\">\r\n                <span>{{it.title}}</span>\r\n                <p v-if=\"it.content\">{{it.content}}</p>\r\n            </div>\r\n        </a>\r\n      </li>\r\n  </ul>\r\n";

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(122)
	__vue_script__ = __webpack_require__(124)
	__vue_template__ = __webpack_require__(125)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\loading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(123);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-08388392&file=loading.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loading.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-08388392&file=loading.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.loading-transition {\n  text-align: center; }\n\n.modal-loading .modal-layout, .modal-preload .modal-layout {\n  overflow: hidden;\n  width: 5rem; }\n  .modal-loading .modal-layout .modal-inner, .modal-preload .modal-layout .modal-inner {\n    background-color: transparent;\n    width: 5rem;\n    height: 5rem;\n    text-align: center; }\n  .modal-loading .modal-layout .modal-text, .modal-preload .modal-layout .modal-text {\n    position: relative;\n    padding: 0; }\n\n.modal-preload {\n  position: static;\n  background-color: transparent;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n/* loading layer */\n.modal-loading .modal-layout {\n  height: 5rem; }\n\n.modal-loading .modal-inner {\n  padding: 0;\n  display: inline-block;\n  background-color: #FFF !important;\n  border-radius: 0.54167rem; }\n\n.loading-layer {\n  z-index: 10000;\n  color: #666;\n  font-size: 0.5rem;\n  text-align: center;\n  width: 100%;\n  height: 100%; }\n  .loading-layer .loading-img {\n    width: 3.33333rem;\n    height: 3.33333rem;\n    margin: 0.41667rem auto 0.08333rem;\n    position: relative; }\n  .loading-layer .loading-cycle, .loading-layer .loading-cycle-before {\n    background-image: url(\"data:image/png;base64,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\") !important;\n    background-size: 5.625rem auto;\n    background-repeat: no-repeat;\n    position: absolute; }\n  .loading-layer .loading-cycle-before {\n    content: \"\";\n    background-position: -3rem 0;\n    position: absolute;\n    top: 0.70833rem;\n    left: 0.5rem;\n    width: 3rem;\n    height: 3rem; }\n  .loading-layer .loading-cycle {\n    position: absolute;\n    top: 0.20833rem;\n    left: 0.20833rem;\n    width: 3rem;\n    height: 3rem;\n    background-position: 0.08333rem 0.08333rem;\n    -webkit-animation: loading 1s linear 0s infinite;\n    animation: loading 1s linear 0s infinite; }\n  .loading-layer .cp-h5-text {\n    width: 5rem;\n    text-align: center;\n    font-size: 0.54167rem;\n    /*     position: absolute;\r\n\t\t    bottom: r(10px); */ }\n\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", "", {"version":3,"sources":["/./src/loading.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB;EACjB,YAAY,EAAE;EACd;IACE,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,mBAAmB,EAAE;EACvB;IACE,mBAAmB;IACnB,WAAW,EAAE;;AAEjB;EACE,iBAAiB;EACjB,8BAA8B;EAC9B,8BAAsB;UAAtB,sBAAsB,EAAE;;AAE1B,mBAAmB;AACnB;EACE,aAAa,EAAE;;AAEjB;EACE,WAAW;EACX,sBAAsB;EACtB,kCAAkC;EAClC,0BAA0B,EAAE;;AAE9B;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa,EAAE;EACf;IACE,kBAAkB;IAClB,mBAAmB;IACnB,mCAAmC;IACnC,mBAAmB,EAAE;EACvB;IACE,2iPAA2iP;IAC3iP,+BAA+B;IAC/B,6BAA6B;IAC7B,mBAAmB,EAAE;EACvB;IACE,YAAY;IACZ,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,aAAa,EAAE;EACjB;IACE,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,2CAA2C;IAC3C,iDAAiD;IACjD,yCAAyC,EAAE;EAC7C;IACE,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB;yBACqB,EAAE;;AAE3B;EACE;IACE,gCAAgC,EAAE;EACpC;IACE,kCAAkC,EAAE,EAAE;;AAE1C;EACE;IACE,gCAAwB;YAAxB,wBAAwB,EAAE;EAC5B;IACE,kCAA0B;YAA1B,0BAA0B,EAAE,EAAE","file":"loading.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.loading-transition {\n  text-align: center; }\n\n.modal-loading .modal-layout, .modal-preload .modal-layout {\n  overflow: hidden;\n  width: 5rem; }\n  .modal-loading .modal-layout .modal-inner, .modal-preload .modal-layout .modal-inner {\n    background-color: transparent;\n    width: 5rem;\n    height: 5rem;\n    text-align: center; }\n  .modal-loading .modal-layout .modal-text, .modal-preload .modal-layout .modal-text {\n    position: relative;\n    padding: 0; }\n\n.modal-preload {\n  position: static;\n  background-color: transparent;\n  transform: scale(0.8); }\n\n/* loading layer */\n.modal-loading .modal-layout {\n  height: 5rem; }\n\n.modal-loading .modal-inner {\n  padding: 0;\n  display: inline-block;\n  background-color: #FFF !important;\n  border-radius: 0.54167rem; }\n\n.loading-layer {\n  z-index: 10000;\n  color: #666;\n  font-size: 0.5rem;\n  text-align: center;\n  width: 100%;\n  height: 100%; }\n  .loading-layer .loading-img {\n    width: 3.33333rem;\n    height: 3.33333rem;\n    margin: 0.41667rem auto 0.08333rem;\n    position: relative; }\n  .loading-layer .loading-cycle, .loading-layer .loading-cycle-before {\n    background-image: url(\"data:image/png;base64,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\") !important;\n    background-size: 5.625rem auto;\n    background-repeat: no-repeat;\n    position: absolute; }\n  .loading-layer .loading-cycle-before {\n    content: \"\";\n    background-position: -3rem 0;\n    position: absolute;\n    top: 0.70833rem;\n    left: 0.5rem;\n    width: 3rem;\n    height: 3rem; }\n  .loading-layer .loading-cycle {\n    position: absolute;\n    top: 0.20833rem;\n    left: 0.20833rem;\n    width: 3rem;\n    height: 3rem;\n    background-position: 0.08333rem 0.08333rem;\n    -webkit-animation: loading 1s linear 0s infinite;\n    animation: loading 1s linear 0s infinite; }\n  .loading-layer .cp-h5-text {\n    width: 5rem;\n    text-align: center;\n    font-size: 0.54167rem;\n    /*     position: absolute;\r\n\t\t    bottom: r(10px); */ }\n\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _modal = __webpack_require__(100);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    show: { type: Boolean, default: false },
	    type: { type: String, default: 'loading' }, //loading preload
	    //是否存在mask
	    mask: { type: Boolean, default: true },
	    //点击mask关闭
	    maskclose: { type: Boolean, default: true },
	    title: { type: String, default: "游游努力加载中" }
	  },
	  components: { modal: _modal2.default }
	};
	// </script>
	//
	// <style lang="sass">
	// 	@import './scss/phone';
	// 	$loadingSize: r(120px);
	// 	$loadingImgSize: r(72px);
	// 	.loading-transition{
	// 		text-align: center;
	// 	}
	// 	.modal-loading, .modal-preload{
	// 		.modal-layout{
	// 		    overflow: hidden;
	// 		    width:$loadingSize;
	// 		    .modal-inner{
	// 		        background-color: transparent;
	// 			    width:$loadingSize;
	// 			    height:$loadingSize;
	// 			    text-align: center;
	// 		    }
	// 		    .modal-text{
	// 			    position: relative;
	// 			    padding: 0;
	// 		    }
	// 	    }
	// 	}
	//
	// 	.modal-preload{
	// 		position:static;
	// 		background-color: transparent;
	// 		transform: scale(.8);
	// 	}
	//
	// 	/* loading layer */
	// 	.modal-loading {
	// 		.modal-layout{
	// 			height: $loadingSize;
	// 		}
	// 		.modal-inner{
	// 		    padding: 0;
	// 		    display: inline-block;
	// 		    background-color: #FFF!important;
	// 		    border-radius: r(13px);
	// 		}
	// 	}
	// 	.loading-layer {
	// 	    z-index: 10000;
	// 	    color: #666;
	// 	    font-size: r(12px);
	// 	    text-align: center;
	// 	    width: 100%;
	// 	    height: 100%;
	// 	    .loading-img{
	// 	    	width: $loadingSize*2/3;
	// 	    	height: $loadingSize*2/3;
	// 	    	margin: r(10px) auto r(2px);
	// 	    	position: relative;
	// 	    }
	// 	    .loading-cycle, .loading-cycle-before{
	// 	        background-image: url("data:image/png;base64,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") !important;
	// 	        background-size: r(135px) auto;
	// 	        // background-size: 200%;
	// 	        background-repeat: no-repeat;
	// 	        position: absolute;
	// 	    }
	// 	    .loading-cycle-before{
	// 	        content: "";
	// 	        background-position: r(-72px) 0;
	// 	        // background-position: 105% 0;
	// 	        position: absolute;
	// 	        top: r(17px);
	// 	        left: r(12px);
	// 	        width: $loadingImgSize;
	// 	        height: $loadingImgSize;
	// 	    }
	//
	// 	    .loading-cycle {
	// 	        position: absolute;
	// 	        top:r(5px) ; left:r(5px);
	// 	        width: $loadingImgSize;
	// 	        height: $loadingImgSize;
	// 	        background-position: r(2px) r(2px);
	// 	        -webkit-animation: loading 1s linear 0s infinite;
	// 	        animation: loading 1s linear 0s infinite;
	// 	    }
	// 	    .cp-h5-text{
	// 	    	width: $loadingSize;
	// 		    text-align: center;
	// 		    font-size: r(13px);
	// 		/*     position: absolute;
	// 		    bottom: r(10px); */
	// 		}
	// 	}
	//
	// 	@-webkit-keyframes loading {
	// 	    0% {
	// 	        -webkit-transform: rotate(0deg);
	// 	    }
	// 	    100% {
	// 	        -webkit-transform: rotate(360deg);
	// 	    }
	// 	}
	//
	// 	@keyframes loading {
	// 	    0% {
	// 	        transform: rotate(0deg);
	// 	    }
	// 	    100% {
	// 	        transform: rotate(360deg);
	// 	    }
	// 	}
	// </style>
	/* generated by vue-loader */
	// <template>
	// 	<modal :show.sync="show" :type="type" :maskclose="maskclose" :mask="mask" :title="title" :hastitle="false">
	// 		<slot>
	// 			<div v-if="type==='loading' || type==='preload'" class="spinner">
	// 	              <div class="loading-layer">
	// 	              	  <div class="loading-img">
	// 			            <div class="loading-cycle"></div>
	// 			            <div class="loading-cycle-before"></div>
	// 			          </div>
	// 			          <p class="cp-h5-text">{{title}}</p>
	// 			       </div>
	// 	        </div>
	// 		</slot>	
	// 	</modal>
	// </template>
	//
	// <script>

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "\r\n\t<modal :show.sync=\"show\" :type=\"type\" :maskclose=\"maskclose\" :mask=\"mask\" :title=\"title\" :hastitle=\"false\">\r\n\t\t<slot>\r\n\t\t\t<div v-if=\"type==='loading' || type==='preload'\" class=\"spinner\">\r\n\t              <div class=\"loading-layer\">\r\n\t              \t  <div class=\"loading-img\">\r\n\t\t\t            <div class=\"loading-cycle\"></div>\r\n\t\t\t            <div class=\"loading-cycle-before\"></div>\r\n\t\t\t          </div>\r\n\t\t\t          <p class=\"cp-h5-text\">{{title}}</p>\r\n\t\t\t       </div>\r\n\t        </div>\r\n\t\t</slot>\t\r\n\t</modal>\r\n";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(127)
	__vue_script__ = __webpack_require__(129)
	__vue_template__ = __webpack_require__(130)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(128);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-17165f20&file=popover.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./popover.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-17165f20&file=popover.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.modal-popover .modal-layout, .modal-tips .modal-layout {\n  position: fixed;\n  max-width: 10.41667rem;\n  width: auto;\n  margin: 0;\n  overflow: visible;\n  border-radius: 0.25rem; }\n  .modal-popover .modal-layout:before, .modal-popover .modal-layout:after, .modal-tips .modal-layout:before, .modal-tips .modal-layout:after {\n    position: absolute;\n    left: 50%;\n    width: 0;\n    height: 0;\n    margin-left: -0.41667rem;\n    content: '';\n    border-right: 0.41667rem solid transparent;\n    border-left: 0.41667rem solid transparent; }\n  .modal-popover .modal-layout.tri-top:before, .modal-tips .modal-layout.tri-top:before {\n    border-bottom: 0.41667rem solid #fff;\n    top: -0.41667rem; }\n  .modal-popover .modal-layout.tri-bottom:after, .modal-tips .modal-layout.tri-bottom:after {\n    border-top: 0.41667rem solid #fff;\n    bottom: -0.41667rem; }\n  .modal-popover .modal-layout.tri-left:before, .modal-popover .modal-layout.tri-left:after, .modal-tips .modal-layout.tri-left:before, .modal-tips .modal-layout.tri-left:after {\n    left: 25%; }\n  .modal-popover .modal-layout.tri-right:before, .modal-popover .modal-layout.tri-right:after, .modal-tips .modal-layout.tri-right:before, .modal-tips .modal-layout.tri-right:after {\n    left: 75%; }\n  .modal-popover .modal-layout .modal-title, .modal-tips .modal-layout .modal-title {\n    padding: 0.20833rem;\n    background-color: #666;\n    line-height: 1rem; }\n  .modal-popover .modal-layout.visible, .modal-tips .modal-layout.visible {\n    opacity: 1; }\n  .modal-popover .modal-layout .modal-inner, .modal-tips .modal-layout .modal-inner {\n    border-radius: 0.33333rem;\n    padding: 0; }\n  .modal-popover .modal-layout .modal-title + .modal-text, .modal-tips .modal-layout .modal-title + .modal-text {\n    margin-top: 0;\n    padding: 0;\n    background-color: #666; }\n  .modal-popover .modal-layout .modal-text > *, .modal-tips .modal-layout .modal-text > * {\n    margin: 0; }\n  .modal-popover .modal-layout .table-view, .modal-tips .modal-layout .table-view {\n    margin-bottom: 0;\n    border-bottom: 0; }\n\n.modal-tips .modal-layout {\n  max-width: 6.25rem; }\n  .modal-tips .modal-layout .modal-text {\n    padding: 0.20833rem;\n    color: #fff;\n    font-size: 0.54167rem; }\n  .modal-tips .modal-layout .modal-inner {\n    background-color: #666;\n    border-radius: 0.16667rem; }\n  .modal-tips .modal-layout.tri-top:before {\n    top: -0.29167rem;\n    border-bottom-color: #666; }\n  .modal-tips .modal-layout.tri-bottom:after {\n    bottom: -0.29167rem;\n    border-top-color: #666; }\n", "", {"version":3,"sources":["/./src/popover.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,uBAAuB,EAAE;EACzB;IACE,mBAAmB;IACnB,UAAU;IACV,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,YAAY;IACZ,2CAA2C;IAC3C,0CAA0C,EAAE;EAC9C;IACE,qCAAqC;IACrC,iBAAiB,EAAE;EACrB;IACE,kCAAkC;IAClC,oBAAoB,EAAE;EACxB;IACE,UAAU,EAAE;EACd;IACE,UAAU,EAAE;EACd;IACE,oBAAoB;IACpB,uBAAuB;IACvB,kBAAkB,EAAE;EACtB;IACE,WAAW,EAAE;EACf;IACE,0BAA0B;IAC1B,WAAW,EAAE;EACf;IACE,cAAc;IACd,WAAW;IACX,uBAAuB,EAAE;EAC3B;IACE,UAAU,EAAE;EACd;IACE,iBAAiB;IACjB,iBAAiB,EAAE;;AAEvB;EACE,mBAAmB,EAAE;EACrB;IACE,oBAAoB;IACpB,YAAY;IACZ,sBAAsB,EAAE;EAC1B;IACE,uBAAuB;IACvB,0BAA0B,EAAE;EAC9B;IACE,iBAAiB;IACjB,0BAA0B,EAAE;EAC9B;IACE,oBAAoB;IACpB,uBAAuB,EAAE","file":"popover.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.modal-popover .modal-layout, .modal-tips .modal-layout {\n  position: fixed;\n  max-width: 10.41667rem;\n  width: auto;\n  margin: 0;\n  overflow: visible;\n  border-radius: 0.25rem; }\n  .modal-popover .modal-layout:before, .modal-popover .modal-layout:after, .modal-tips .modal-layout:before, .modal-tips .modal-layout:after {\n    position: absolute;\n    left: 50%;\n    width: 0;\n    height: 0;\n    margin-left: -0.41667rem;\n    content: '';\n    border-right: 0.41667rem solid transparent;\n    border-left: 0.41667rem solid transparent; }\n  .modal-popover .modal-layout.tri-top:before, .modal-tips .modal-layout.tri-top:before {\n    border-bottom: 0.41667rem solid #fff;\n    top: -0.41667rem; }\n  .modal-popover .modal-layout.tri-bottom:after, .modal-tips .modal-layout.tri-bottom:after {\n    border-top: 0.41667rem solid #fff;\n    bottom: -0.41667rem; }\n  .modal-popover .modal-layout.tri-left:before, .modal-popover .modal-layout.tri-left:after, .modal-tips .modal-layout.tri-left:before, .modal-tips .modal-layout.tri-left:after {\n    left: 25%; }\n  .modal-popover .modal-layout.tri-right:before, .modal-popover .modal-layout.tri-right:after, .modal-tips .modal-layout.tri-right:before, .modal-tips .modal-layout.tri-right:after {\n    left: 75%; }\n  .modal-popover .modal-layout .modal-title, .modal-tips .modal-layout .modal-title {\n    padding: 0.20833rem;\n    background-color: #666;\n    line-height: 1rem; }\n  .modal-popover .modal-layout.visible, .modal-tips .modal-layout.visible {\n    opacity: 1; }\n  .modal-popover .modal-layout .modal-inner, .modal-tips .modal-layout .modal-inner {\n    border-radius: 0.33333rem;\n    padding: 0; }\n  .modal-popover .modal-layout .modal-title + .modal-text, .modal-tips .modal-layout .modal-title + .modal-text {\n    margin-top: 0;\n    padding: 0;\n    background-color: #666; }\n  .modal-popover .modal-layout .modal-text > *, .modal-tips .modal-layout .modal-text > * {\n    margin: 0; }\n  .modal-popover .modal-layout .table-view, .modal-tips .modal-layout .table-view {\n    margin-bottom: 0;\n    border-bottom: 0; }\n\n.modal-tips .modal-layout {\n  max-width: 6.25rem; }\n  .modal-tips .modal-layout .modal-text {\n    padding: 0.20833rem;\n    color: #fff;\n    font-size: 0.54167rem; }\n  .modal-tips .modal-layout .modal-inner {\n    background-color: #666;\n    border-radius: 0.16667rem; }\n  .modal-tips .modal-layout.tri-top:before {\n    top: -0.29167rem;\n    border-bottom-color: #666; }\n  .modal-tips .modal-layout.tri-bottom:after {\n    bottom: -0.29167rem;\n    border-top-color: #666; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _modal = __webpack_require__(100);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		replace: false,
		props: {
			type: { type: String, default: 'popover' }, //popover tips
			show: { type: Boolean, default: false, twoWay: true },
			mask: { type: Boolean, default: true }, //是否存在mask
			maskclose: { type: Boolean, default: true }, //点击mask关闭
			title: { type: String, default: '' },
			hastitle: { type: Boolean, default: true },
			role: { type: String } //选择器
		},
		components: { modal: _modal2.default },
		watch: {
			'show': function show(val, oldVal) {
				if (val && (this.type === 'popover' || this.type === 'tips')) {
					console.log(this, 'this');
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
	};
	// </script>
	//
	// <style lang="sass">
	// 	@import './scss/phone';
	// 	$popoverBg: rgba(255,255,255,0.95);
	// 	$triSize: r(20px);
	// 	$chrome-color: #fff !global;
	// 	$tipsColor: #666;
	// 	.modal-popover, .modal-tips{
	// 		.modal-layout{
	// 			position: fixed;
	// 		    max-width: r(250px);
	// 		    width:auto;
	// 		    margin:0;
	// 		    overflow: visible;
	// 			border-radius: r(6px);
	// 			&:before, &:after {
	// 				position: absolute;
	// 				left: 50%;
	// 				width: 0;
	// 				height: 0;
	// 				margin-left: -$triSize/2;
	// 				content: '';
	// 				border-right: $triSize/2 solid transparent;
	// 				border-left: $triSize/2 solid transparent;
	// 			}
	//
	// 		    &.tri-top:before{
	// 		        border-bottom: $triSize/2 solid $chrome-color;
	// 		        top: -$triSize/2;
	// 		    }
	// 		    &.tri-bottom:after{
	// 		        border-top: $triSize/2 solid $chrome-color;
	// 		        bottom: -$triSize/2;
	// 		    }
	// 		    &.tri-left:before, &.tri-left:after{
	// 		        left: 25%;
	// 		    }
	// 		    &.tri-right:before, &.tri-right:after{
	// 		        left: 75%;
	// 		    }
	// 		    .modal-title{
	// 		    	padding: r(5px);
	// 		    	background-color:$tipsColor;
	// 		    	line-height: 1rem;
	// 		    }
	//
	// 			&.visible {
	// 				opacity: 1;
	// 				// @include transform(translate3d(0, 0, 0));
	// 			}
	//
	// 			// Give correct spacing to the content if there is a bar inside the popover.
	// 			.bar ~ .table-view {
	// 				// padding-top: $bar-base-height;
	// 			}
	//
	// 		    .modal-inner{
	// 		        border-radius:r(8px);
	// 		        padding: 0;
	// 		    }
	// 		    .modal-title + .modal-text{
	// 		        margin-top: 0;
	// 		        padding: 0;
	// 		        background-color:$tipsColor;
	// 		    }
	//
	// 		    .modal-text > *{
	// 		        margin: 0;
	// 		    }
	// 		    .table-view{
	// 		    	margin-bottom: 0;
	// 		    	border-bottom: 0;
	// 		    }
	// 	    }
	// 	}
	//
	// 	.modal-tips{
	// 		.modal-layout{
	// 		    max-width: r(150px);
	// 		    .modal-text{
	// 		        padding: r(5px);
	// 		        color: #fff;
	// 		        font-size:r(13px);
	// 		    }
	// 		    .modal-inner{
	// 		        background-color: $tipsColor;
	// 		        border-radius:r(4px);
	// 		    }
	// 		    &.tri-top:before{
	// 		        top: r(-7px);
	// 		        border-bottom-color: $tipsColor;
	// 		    }
	// 		    &.tri-bottom:after{
	// 		        bottom: r(-7px);
	// 		        border-top-color: $tipsColor;
	// 		    }
	// 	    }
	// 	}
	//
	// </style>       
	/* generated by vue-loader */
	// <template>
	// 	<modal :show.sync="show" :type="type" :maskclose="maskclose" :mask="mask"  :hastitle="hastitle" :role="role" :title="title">
	// 		<slot></slot>
	// 	</modal>
	// </template>
	//
	// <script>

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "\r\n\t<modal :show.sync=\"show\" :type=\"type\" :maskclose=\"maskclose\" :mask=\"mask\"  :hastitle=\"hastitle\" :role=\"role\" :title=\"title\">\r\n\t\t<slot></slot>\r\n\t</modal>\r\n";

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(132)
	__vue_script__ = __webpack_require__(134)
	__vue_template__ = __webpack_require__(135)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\num.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(133);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5e7805fe&file=num.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./num.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5e7805fe&file=num.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./num.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".day-choose .minus[_v-5e7805fe], .day-choose .plus[_v-5e7805fe] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 1.05rem;\n  height: 1.05rem;\n  border: 1px solid #C6C6C6;\n  border-radius: 4px; }\n  .day-choose .minus[_v-5e7805fe]:before, .day-choose .plus[_v-5e7805fe]:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 0.6rem;\n    height: 0.075rem;\n    background-color: #A7A7A7;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  .day-choose .minus.disabled[_v-5e7805fe], .day-choose .plus.disabled[_v-5e7805fe] {\n    border-color: #E4E4E4; }\n    .day-choose .minus.disabled[_v-5e7805fe]:before, .day-choose .plus.disabled[_v-5e7805fe]:before {\n      background-color: #E4E4E4; }\n    .day-choose .minus.disabled[_v-5e7805fe]:after, .day-choose .plus.disabled[_v-5e7805fe]:after {\n      background-color: #E4E4E4; }\n\n.day-choose .plus[_v-5e7805fe]:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0.075rem;\n  height: 0.6rem;\n  background-color: #A7A7A7;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.day-choose input[_v-5e7805fe] {\n  vertical-align: middle;\n  width: 1rem;\n  line-height: 1.05rem;\n  text-align: center;\n  font-weight: 300; }\n\n.day-choose .area-val[_v-5e7805fe] {\n  width: 3.5rem;\n  display: inline-block;\n  text-align: center; }\n", "", {"version":3,"sources":["/./src/num.vue.style"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,0BAA0B;EAC1B,mBAAmB,EAAE;EACrB;IACE,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,cAAc;IACd,iBAAiB;IACjB,0BAA0B;IAC1B,yCAAiC;YAAjC,iCAAiC,EAAE;EACrC;IACE,sBAAsB,EAAE;IACxB;MACE,0BAA0B,EAAE;IAC9B;MACE,0BAA0B,EAAE;;AAElC;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,eAAe;EACf,0BAA0B;EAC1B,yCAAiC;UAAjC,iCAAiC,EAAE;;AAErC;EACE,uBAAuB;EACvB,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB,EAAE;;AAErB;EACE,cAAc;EACd,sBAAsB;EACtB,mBAAmB,EAAE","file":"num.vue","sourcesContent":[".day-choose .minus, .day-choose .plus {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 1.05rem;\n  height: 1.05rem;\n  border: 1px solid #C6C6C6;\n  border-radius: 4px; }\n  .day-choose .minus:before, .day-choose .plus:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 0.6rem;\n    height: 0.075rem;\n    background-color: #A7A7A7;\n    transform: translate(-50%, -50%); }\n  .day-choose .minus.disabled, .day-choose .plus.disabled {\n    border-color: #E4E4E4; }\n    .day-choose .minus.disabled:before, .day-choose .plus.disabled:before {\n      background-color: #E4E4E4; }\n    .day-choose .minus.disabled:after, .day-choose .plus.disabled:after {\n      background-color: #E4E4E4; }\n\n.day-choose .plus:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0.075rem;\n  height: 0.6rem;\n  background-color: #A7A7A7;\n  transform: translate(-50%, -50%); }\n\n.day-choose input {\n  vertical-align: middle;\n  width: 1rem;\n  line-height: 1.05rem;\n  text-align: center;\n  font-weight: 300; }\n\n.day-choose .area-val {\n  width: 3.5rem;\n  display: inline-block;\n  text-align: center; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 134 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="day-choose">
	// 	  <i :class="{'disabled': val<=min, 'minus':true}" v-touch:tap="val > min ? val-- : val"></i>
	// 	    <span class="area-val"><slot><input type="number" v-model="val">天</slot></span>
	//       <i :class="{'disabled': (max!==void 0) && val>=max, 'plus':true}" v-touch:tap="(max===void 0) ? val++ : (val < max ? val++ : val)"></i>
	// 	</div>
	// </template>
	//
	// <script>
	//slot 为需要显示的值，一般用于特殊需求, 即显示的值不是val而是val对应的某值（如数据index为val）
	exports.default = {
		props: {
			val: {
				type: Number,
				default: 3,
				twoWay: true
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
	// </script>
	//
	// <style lang="sass" scoped>
	// 	.day-choose {
	//         .minus, .plus {
	//             position: relative;
	//             display: inline-block;
	//             vertical-align: middle;
	//             width: 1.05rem;
	//             height: 1.05rem;
	//             border: 1px solid #C6C6C6;
	//             border-radius: 4px;
	//             &:before {
	//                 content: '';
	//                 position: absolute;
	//                 top: 50%;
	//                 left: 50%;
	//                 width: 0.6rem;
	//                 height: 0.075rem;
	//                 background-color: #A7A7A7;
	//                 transform: translate(-50%,-50%);
	//             }
	//             &.disabled {
	//                 border-color: #E4E4E4;
	//                 &:before {
	//                     background-color: #E4E4E4;
	//                 }
	//                 &:after {
	//                     background-color: #E4E4E4;
	//                 }
	//             }
	//         }
	//         .plus {
	//             &:after {
	//                 content: '';
	//                 position: absolute;
	//                 top: 50%;
	//                 left: 50%;
	//                 width: 0.075rem;
	//                 height: 0.6rem;
	//                 background-color: #A7A7A7;
	//                 transform: translate(-50%,-50%);
	//             }
	//         }
	//         input {
	//             vertical-align: middle;
	//             width: 1rem;
	//             line-height: 1.05rem;
	//             text-align: center;
	//             font-weight: 300;
	//         }
	//         .area-val{
	//         	width: 3.5rem;
	//         	display: inline-block;
	//         	text-align: center;
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"day-choose\" _v-5e7805fe=\"\">\n\t  <i :class=\"{'disabled': val<=min, 'minus':true}\" v-touch:tap=\"val > min ? val-- : val\" _v-5e7805fe=\"\"></i>\n\t    <span class=\"area-val\" _v-5e7805fe=\"\"><slot _v-5e7805fe=\"\"><input type=\"number\" v-model=\"val\" _v-5e7805fe=\"\">天</slot></span>\n      <i :class=\"{'disabled': (max!==void 0) &amp;&amp; val>=max, 'plus':true}\" v-touch:tap=\"(max===void 0) ? val++ : (val < max ? val++ : val)\" _v-5e7805fe=\"\"></i>\n\t</div>\n";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(137)
	__vue_script__ = __webpack_require__(139)
	__vue_template__ = __webpack_require__(140)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6b463636&file=radio.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./radio.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6b463636&file=radio.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.input-row {\n  height: 40px;\n  line-height: 25px; }\n  .input-row label {\n    height: 40px; }\n  .input-row .input {\n    float: right;\n    height: 40px;\n    width: 65%;\n    margin-bottom: 0;\n    border: 0;\n    background: none;\n    box-shadow: none; }\n  .input-row select {\n    padding: 10px 15px !important; }\n  .input-row .toggle {\n    width: 50px;\n    height: 30px;\n    margin: 5px 13px;\n    border: 2px solid #e6e6e6; }\n  .input-row .input-select {\n    margin-top: 3px; }\n\n.location {\n  position: relative; }\n  .location .icon-area {\n    position: absolute;\n    right: 15px;\n    width: 40px;\n    height: 40px;\n    border-left: 1px solid #eee;\n    text-align: center; }\n\n.checkbox, .radio {\n  position: relative; }\n  .checkbox label, .radio label {\n    cursor: pointer; }\n  .checkbox .check-cion:before, .checkbox .check-cion:after, .radio .check-cion:before, .radio .check-cion:after {\n    font-family: FontAwesome;\n    font-size: 21px;\n    /*absolutely positioned*/\n    position: absolute;\n    top: 11px;\n    width: 22px;\n    height: 22px;\n    border-radius: 22px;\n    box-sizing: border-box;\n    background-color: #007aff;\n    content: ''; }\n  .checkbox .check-cion:after, .radio .check-cion:after {\n    content: '';\n    background: no-repeat center;\n    background-size: 12px 9px;\n    max-width: 0;\n    overflow: hidden;\n    opacity: 0.5;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n  .checkbox input[type=\"checkbox\"],\n  .checkbox input[type=\"radio\"], .radio input[type=\"checkbox\"],\n  .radio input[type=\"radio\"] {\n    display: none; }\n  .checkbox input[type=\"checkbox\"]:checked ~ .check-cion:after,\n  .checkbox input[type=\"radio\"]:checked ~ .check-cion:after,\n  .checkbox .item.active .check-cion:after, .radio input[type=\"checkbox\"]:checked ~ .check-cion:after,\n  .radio input[type=\"radio\"]:checked ~ .check-cion:after,\n  .radio .item.active .check-cion:after {\n    max-width: 25px;\n    /*an arbitratry number more than the icon's width*/\n    opacity: 1;\n    /*for fade in effect*/ }\n\n.checkbox .check-cion:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E\"); }\n\n.radio .check-cion:after {\n  background: #FFFFFF;\n  width: 8px;\n  height: 8px;\n  margin: 7px; }\n\n.checkbox-left label, .radio-left label {\n  padding-left: 30px; }\n\n.checkbox-left .check-cion:before, .checkbox-left .check-cion:after, .radio-left .check-cion:before, .radio-left .check-cion:after {\n  left: 0.625rem; }\n\n.checkbox-right .check-cion:before, .checkbox-right .check-cion:after, .radio-right .check-cion:before, .radio-right .check-cion:after {\n  right: 0.625rem; }\n", "", {"version":3,"sources":["/./src/radio.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,aAAa;EACb,kBAAkB,EAAE;EACpB;IACE,aAAa,EAAE;EACjB;IACE,aAAa;IACb,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,iBAAiB;IACjB,iBAAiB,EAAE;EACrB;IACE,8BAA8B,EAAE;EAClC;IACE,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,0BAA0B,EAAE;EAC9B;IACE,gBAAgB,EAAE;;AAEtB;EACE,mBAAmB,EAAE;EACrB;IACE,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,4BAA4B;IAC5B,mBAAmB,EAAE;;AAEzB;EACE,mBAAmB,EAAE;EACrB;IACE,gBAAgB,EAAE;EACpB;IACE,yBAAyB;IACzB,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,uBAAuB;IACvB,0BAA0B;IAC1B,YAAY,EAAE;EAChB;IACE,YAAY;IACZ,6BAA6B;IAE7B,0BAA0B;IAC1B,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,6BAAqB;IAArB,qBAAqB,EAAE;EACzB;;;IAGE,cAAc,EAAE;EAClB;;;;;IAKE,gBAAgB;IAChB,mDAAmD;IACnD,WAAW;IACX,sBAAsB,EAAE;;AAE5B;EACE,gWAAgW,EAAE;;AAEpW;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,YAAY,EAAE;;AAEhB;EACE,mBAAmB,EAAE;;AAEvB;EACE,eAAe,EAAE;;AAEnB;EACE,gBAAgB,EAAE","file":"radio.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.input-row {\n  height: 40px;\n  line-height: 25px; }\n  .input-row label {\n    height: 40px; }\n  .input-row .input {\n    float: right;\n    height: 40px;\n    width: 65%;\n    margin-bottom: 0;\n    border: 0;\n    background: none;\n    box-shadow: none; }\n  .input-row select {\n    padding: 10px 15px !important; }\n  .input-row .toggle {\n    width: 50px;\n    height: 30px;\n    margin: 5px 13px;\n    border: 2px solid #e6e6e6; }\n  .input-row .input-select {\n    margin-top: 3px; }\n\n.location {\n  position: relative; }\n  .location .icon-area {\n    position: absolute;\n    right: 15px;\n    width: 40px;\n    height: 40px;\n    border-left: 1px solid #eee;\n    text-align: center; }\n\n.checkbox, .radio {\n  position: relative; }\n  .checkbox label, .radio label {\n    cursor: pointer; }\n  .checkbox .check-cion:before, .checkbox .check-cion:after, .radio .check-cion:before, .radio .check-cion:after {\n    font-family: FontAwesome;\n    font-size: 21px;\n    /*absolutely positioned*/\n    position: absolute;\n    top: 11px;\n    width: 22px;\n    height: 22px;\n    border-radius: 22px;\n    box-sizing: border-box;\n    background-color: #007aff;\n    content: ''; }\n  .checkbox .check-cion:after, .radio .check-cion:after {\n    content: '';\n    background: no-repeat center;\n    -webkit-background-size: 12px 9px;\n    background-size: 12px 9px;\n    max-width: 0;\n    overflow: hidden;\n    opacity: 0.5;\n    transition: all 0.2s; }\n  .checkbox input[type=\"checkbox\"],\n  .checkbox input[type=\"radio\"], .radio input[type=\"checkbox\"],\n  .radio input[type=\"radio\"] {\n    display: none; }\n  .checkbox input[type=\"checkbox\"]:checked ~ .check-cion:after,\n  .checkbox input[type=\"radio\"]:checked ~ .check-cion:after,\n  .checkbox .item.active .check-cion:after, .radio input[type=\"checkbox\"]:checked ~ .check-cion:after,\n  .radio input[type=\"radio\"]:checked ~ .check-cion:after,\n  .radio .item.active .check-cion:after {\n    max-width: 25px;\n    /*an arbitratry number more than the icon's width*/\n    opacity: 1;\n    /*for fade in effect*/ }\n\n.checkbox .check-cion:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E\"); }\n\n.radio .check-cion:after {\n  background: #FFFFFF;\n  width: 8px;\n  height: 8px;\n  margin: 7px; }\n\n.checkbox-left label, .radio-left label {\n  padding-left: 30px; }\n\n.checkbox-left .check-cion:before, .checkbox-left .check-cion:after, .radio-left .check-cion:before, .radio-left .check-cion:after {\n  left: 0.625rem; }\n\n.checkbox-right .check-cion:before, .checkbox-right .check-cion:after, .radio-right .check-cion:before, .radio-right .check-cion:after {\n  right: 0.625rem; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 139 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <ul class="table-view radio radio-{{position}}">
	//   <slot></slot>
	// </ul>
	// </template>
	// <script>
	exports.default = {
	  name: 'radio',
	  props: {
	    model: {
	      twoWay: true,
	      required: true
	    },
	    position: {
	      type: String,
	      default: 'right'
	    }
	  }
	};
	// </script>
	//
	// <style lang="sass">
	// @import './scss/variables';
	// @import './scss/mixins';
	// .input-row {
	//     height: 40px;
	//     line-height: 25px;
	//     label{
	//         height: 40px;
	//     }
	//     .input{
	//         float: right;
	//         height: 40px;
	//         width: 65%;
	//         //padding-left: 0;
	//         margin-bottom: 0;
	//         border: 0;
	//         background: none;
	//         box-shadow: none;
	//     }
	//     select{
	//         padding: 10px 15px!important;
	//     }
	//     .toggle{
	//         width: 50px;
	//         height: 30px;
	//         margin: 5px 13px;
	//         border: 2px solid #e6e6e6;
	//     }
	//     .input-select{
	//         margin-top: 3px;
	//     }
	// }
	//
	// .location{
	//     position: relative;
	//     .icon-area{
	//         position: absolute;
	//         right: 15px;
	//         width: 40px;
	//         height: 40px;
	//         border-left: 1px solid #eee;
	//         text-align: center;
	//     }
	// }
	//
	// //checkbox
	// .checkbox, .radio{
	//     position: relative;
	//     label {
	//         cursor: pointer;
	//     }
	//     .check-cion:before, .check-cion:after {
	//         font-family: FontAwesome;
	//         font-size: 21px;
	//         /*absolutely positioned*/
	//         position: absolute; top: 11px;
	//         width: 22px;
	//         height: 22px;
	//         border-radius: 22px;
	//         box-sizing: border-box;
	//         background-color: #007aff;
	//         content: '';
	//     }
	//     .check-cion:after {
	//         content: '';
	//         background: no-repeat center;
	//         -webkit-background-size: 12px 9px;
	//         background-size: 12px 9px;
	//
	//         max-width: 0;
	//         overflow: hidden;
	//         opacity: 0.5;
	//         transition: all 0.2s;
	//     }
	//
	//     input[type="checkbox"],
	//     input[type="radio"] {
	//         display: none;
	//     }
	//     input[type="checkbox"]:checked ~ .check-cion:after,
	//     input[type="radio"]:checked ~ .check-cion:after,
	//     .item.active .check-cion:after{
	//         max-width: 25px; /*an arbitratry number more than the icon's width*/
	//         opacity: 1; /*for fade in effect*/
	//     }
	// }
	//
	// .checkbox{
	//     .check-cion:after{
	//         background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E");
	//     }
	// }
	// .radio{
	//     .check-cion:after{
	//         background: #FFFFFF;
	//         width: 8px;
	//         height: 8px;
	//         margin: 7px;
	//     }
	// }
	//
	// .checkbox-left,.radio-left{
	//     label{
	//         padding-left: 30px;
	//     }
	//     .check-cion:before, .check-cion:after{
	//         left:$gapH;
	//     }
	// }
	// .checkbox-right,.radio-right{
	//     .check-cion:before, .check-cion:after{
	//         right:$gapH;
	//     }
	// }
	//
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "\r\n<ul class=\"table-view radio radio-{{position}}\">\r\n  <slot></slot>\r\n</ul>\r\n";

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(142)
	__vue_template__ = __webpack_require__(143)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 142 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="control-content"
	//       v-bind:class="{hide:!show}"
	//       v-show="show"
	//       :transition="transition"
	//   >
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
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
	      index: 0,
	      show: false
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
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
	        this.index = c;
	        break;
	      }
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"control-content\"\r\n      v-bind:class=\"{hide:!show}\"\r\n      v-show=\"show\"\r\n      :transition=\"transition\"\r\n  >\r\n    <slot></slot>\r\n  </div>\r\n";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(145)
	__vue_script__ = __webpack_require__(147)
	__vue_template__ = __webpack_require__(148)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\tabs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f4273cda&file=tabs.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabs.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f4273cda&file=tabs.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.segmented-control {\n  position: relative;\n  display: table;\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  width: auto;\n  padding-left: 0; }\n  .segmented-control .control-item {\n    display: table-cell;\n    width: 1%;\n    padding-top: 6px;\n    padding-bottom: 7px;\n    overflow: hidden;\n    line-height: 1;\n    color: #333;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    border-left: 1px solid #ccc; }\n    .segmented-control .control-item:first-child {\n      border-left-width: 0; }\n    .segmented-control .control-item:active {\n      background-color: #eee; }\n    .segmented-control .control-item.active {\n      background-color: #ccc; }\n\n.segmented-control-primary {\n  border-color: #428bca; }\n  .segmented-control-primary .control-item {\n    color: #428bca;\n    border-color: inherit; }\n    .segmented-control-primary .control-item:active {\n      background-color: #cde1f1; }\n    .segmented-control-primary .control-item.active {\n      color: #fff;\n      background-color: #428bca; }\n\n.segmented-control-positive {\n  border-color: #5cb85c; }\n  .segmented-control-positive .control-item {\n    color: #5cb85c;\n    border-color: inherit; }\n    .segmented-control-positive .control-item:active {\n      background-color: #d8eed8; }\n    .segmented-control-positive .control-item.active {\n      color: #fff;\n      background-color: #5cb85c; }\n\n.segmented-control-negative {\n  border-color: #d9534f; }\n  .segmented-control-negative .control-item {\n    color: #d9534f;\n    border-color: inherit; }\n    .segmented-control-negative .control-item:active {\n      background-color: #f9e2e2; }\n    .segmented-control-negative .control-item.active {\n      color: #fff;\n      background-color: #d9534f; }\n    .segmented-control-negative .control-item a.disabled {\n      color: #777; }\n\n.control-content.active {\n  display: block; }\n", "", {"version":3,"sources":["/./src/tabs.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB,EAAE;EAClB;IACE,oBAAoB;IACpB,UAAU;IACV,iBAAiB;IACjB,oBAAoB;IACpB,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,oBAAoB;IACpB,4BAA4B,EAAE;IAC9B;MACE,qBAAqB,EAAE;IACzB;MACE,uBAAuB,EAAE;IAC3B;MACE,uBAAuB,EAAE;;AAE/B;EACE,sBAAsB,EAAE;EACxB;IACE,eAAe;IACf,sBAAsB,EAAE;IACxB;MACE,0BAA0B,EAAE;IAC9B;MACE,YAAY;MACZ,0BAA0B,EAAE;;AAElC;EACE,sBAAsB,EAAE;EACxB;IACE,eAAe;IACf,sBAAsB,EAAE;IACxB;MACE,0BAA0B,EAAE;IAC9B;MACE,YAAY;MACZ,0BAA0B,EAAE;;AAElC;EACE,sBAAsB,EAAE;EACxB;IACE,eAAe;IACf,sBAAsB,EAAE;IACxB;MACE,0BAA0B,EAAE;IAC9B;MACE,YAAY;MACZ,0BAA0B,EAAE;IAC9B;MACE,YAAY,EAAE;;AAEpB;EACE,eAAe,EAAE","file":"tabs.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.segmented-control {\n  position: relative;\n  display: table;\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  width: auto;\n  padding-left: 0; }\n  .segmented-control .control-item {\n    display: table-cell;\n    width: 1%;\n    padding-top: 6px;\n    padding-bottom: 7px;\n    overflow: hidden;\n    line-height: 1;\n    color: #333;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    border-left: 1px solid #ccc; }\n    .segmented-control .control-item:first-child {\n      border-left-width: 0; }\n    .segmented-control .control-item:active {\n      background-color: #eee; }\n    .segmented-control .control-item.active {\n      background-color: #ccc; }\n\n.segmented-control-primary {\n  border-color: #428bca; }\n  .segmented-control-primary .control-item {\n    color: #428bca;\n    border-color: inherit; }\n    .segmented-control-primary .control-item:active {\n      background-color: #cde1f1; }\n    .segmented-control-primary .control-item.active {\n      color: #fff;\n      background-color: #428bca; }\n\n.segmented-control-positive {\n  border-color: #5cb85c; }\n  .segmented-control-positive .control-item {\n    color: #5cb85c;\n    border-color: inherit; }\n    .segmented-control-positive .control-item:active {\n      background-color: #d8eed8; }\n    .segmented-control-positive .control-item.active {\n      color: #fff;\n      background-color: #5cb85c; }\n\n.segmented-control-negative {\n  border-color: #d9534f; }\n  .segmented-control-negative .control-item {\n    color: #d9534f;\n    border-color: inherit; }\n    .segmented-control-negative .control-item:active {\n      background-color: #f9e2e2; }\n    .segmented-control-negative .control-item.active {\n      color: #fff;\n      background-color: #d9534f; }\n    .segmented-control-negative .control-item a.disabled {\n      color: #777; }\n\n.control-content.active {\n  display: block; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 147 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div>
	// 	 <ul class="segmented-control" role="tablist">
	// 	        <a class="control-item"
	// 	            v-for="r in renderData"
	// 	            v-bind:class="{
	// 	              'active': ($index === active),
	// 	              'disabled': r.disabled
	// 	            }"
	// 	            @click.prevent="handleTabListClick($index, r)"
	// 	            :disabled="r.disabled"
	// 	        >
	// 	            {{{r.header}}}
	// 	        </a>
	// 	 </ul>
	// 	 <div class="card">
	// 	    <slot></slot>
	// 	 </div>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    active: {
	      type: Number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      renderData: []
	    };
	  },
	
	  methods: {
	    handleTabListClick: function handleTabListClick(index, el) {
	      if (!el.disabled) this.active = index;
	    }
	  }
	};
	// </script>
	//
	// <style lang="sass">
	// 	@import './scss/variables';
	// 	@import './scss/mixins';
	// 	.segmented-control {
	//   position: relative;
	//   display: table;
	//   overflow: hidden;
	//   font-size: 12px;
	//   font-weight: $font-weight-light;
	//   background-color: $chrome-color;
	//   border: 1px solid #ccc;
	//   border-radius: 3px;
	//   width:auto;
	//   padding-left: 0;
	//   // Section within controller
	//   .control-item {
	//     display: table-cell;
	//     width: 1%;
	//     padding-top: 6px;
	//     padding-bottom: 7px;
	//     overflow: hidden;
	//     line-height: 1;
	//     color: #333;
	//     text-align: center;
	//     text-overflow: ellipsis;
	//     white-space: nowrap;
	//     border-left: 1px solid #ccc;
	//
	//     // Remove border-left and shadow from first section
	//     &:first-child {
	//       border-left-width: 0;
	//     }
	//
	//     // Tap state of segmented controller
	//     &:active {
	//       background-color: #eee;
	//     }
	//
	//     // Selected state of segmented controller
	//     &.active {
	//       background-color: #ccc;
	//     }
	//   }
	// }
	//
	// // Other segmented controller types
	// // --------------------------------------------------
	//
	// // Primary
	// .segmented-control-primary {
	//   border-color: $primary-color;
	//
	//   .control-item {
	//     color: $primary-color;
	//     border-color: inherit;
	//
	//     &:active {
	//       background-color: lighten($primary-color, 35%);
	//     }
	//     &.active {
	//       color: #fff;
	//       background-color: $primary-color;
	//     }
	//   }
	// }
	//
	// // Positive
	// .segmented-control-positive {
	//   border-color: $positive-color;
	//
	//   .control-item {
	//     color: $positive-color;
	//     border-color: inherit;
	//
	//     &:active {
	//       background-color: lighten($positive-color, 35%);
	//     }
	//     &.active {
	//       color: #fff;
	//       background-color: $positive-color;
	//     }
	//   }
	// }
	//
	// // Negative
	// .segmented-control-negative {
	//   border-color: $negative-color;
	//
	//   .control-item {
	//     color: $negative-color;
	//     border-color: inherit;
	//
	//     &:active {
	//       background-color: lighten($negative-color, 35%);
	//     }
	//     &.active {
	//       color: #fff;
	//       background-color: $negative-color;
	//     }
	//     a.disabled {
	// 	    color: #777;
	// 	}
	//   }
	// }
	//
	// // This is used to by the js to show and hide content tide to the segmented control.
	// .control-content {
	//   &.active {
	//     display: block;
	//   }
	// }
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = "\r\n\t<div>\r\n\t <ul class=\"segmented-control\" role=\"tablist\">\r\n\t        <a class=\"control-item\"\r\n\t            v-for=\"r in renderData\"\r\n\t            v-bind:class=\"{\r\n\t              'active': ($index === active),\r\n\t              'disabled': r.disabled\r\n\t            }\"\r\n\t            @click.prevent=\"handleTabListClick($index, r)\"\r\n\t            :disabled=\"r.disabled\"\r\n\t        >\r\n\t            {{{r.header}}}\r\n\t        </a>\r\n\t </ul>\r\n\t <div class=\"card\">\r\n\t    <slot></slot>\r\n\t </div>\r\n\t</div>\r\n";

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(150)
	__vue_script__ = __webpack_require__(152)
	__vue_template__ = __webpack_require__(153)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\toast.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(151);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-96787b3c&file=toast.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./toast.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-96787b3c&file=toast.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./toast.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.modal-toast {\n  z-index: 100000; }\n  .modal-toast .modal-inner {\n    background-color: transparent; }\n  .modal-toast .modal-text {\n    background: rgba(0, 0, 0, 0.7);\n    padding: 0.33333rem;\n    border-radius: 0.25rem;\n    color: #fff;\n    text-align: center; }\n", "", {"version":3,"sources":["/./src/toast.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,gBAAgB,EAAE;EAClB;IACE,8BAA8B,EAAE;EAClC;IACE,+BAA+B;IAC/B,oBAAoB;IACpB,uBAAuB;IACvB,YAAY;IACZ,mBAAmB,EAAE","file":"toast.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.modal-toast {\n  z-index: 100000; }\n  .modal-toast .modal-inner {\n    background-color: transparent; }\n  .modal-toast .modal-text {\n    background: rgba(0, 0, 0, 0.7);\n    padding: 0.33333rem;\n    border-radius: 0.25rem;\n    color: #fff;\n    text-align: center; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _modal = __webpack_require__(100);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: {
			show: { type: Boolean, default: false }, //是否存在mask
			mask: { type: Boolean, default: true }, //点击mask关闭
			maskclose: { type: Boolean, default: true },
			time: { type: Number, default: 3000 }
		},
		components: { modal: _modal2.default },
		watch: {
			'show': function show(val, oldVal) {
				if (val) {
					this.t = setTimeout(function () {
						this.show = false;
					}.bind(this), Number(this.time));
				} else {
					clearTimeout(this.t);
				}
			}
		}
	};
	// </script>
	//
	// <style lang="sass">
	// 	@import './scss/phone';
	// 	.modal-toast{
	// 	    z-index: 100000;
	// 	    // pointer-events: none;
	// 	  	.modal-inner{
	// 	  		background-color: transparent;
	// 	  	}
	//
	// 	  	.modal-text{
	// 			background: rgba(0,0,0,.7);
	// 			padding: r(8px); border-radius: r(6px);
	// 			color: #fff;
	// 			text-align: center;
	// 	  	}
	// 	}
	// </style>
	/* generated by vue-loader */
	// <template>
	// 	<modal :show.sync="show" type="toast" :maskclose="maskclose" :mask="mask" :time="time" :hastitle="false">
	// 		<slot></slot>	
	// 	</modal>
	// </template>
	//
	// <script>

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = "\r\n\t<modal :show.sync=\"show\" type=\"toast\" :maskclose=\"maskclose\" :mask=\"mask\" :time=\"time\" :hastitle=\"false\">\r\n\t\t<slot></slot>\t\r\n\t</modal>\r\n";

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(155)
	__vue_script__ = __webpack_require__(157)
	__vue_template__ = __webpack_require__(158)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "e:\\git\\vue-ratchet\\src\\toggle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(156);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-651f39ae&file=toggle.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./toggle.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-651f39ae&file=toggle.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./toggle.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.toggle[_v-651f39ae] {\n  position: relative;\n  display: block;\n  /*   width: 74px;\r\n  height: 30px;\r\n  background-color: #fff;\r\n  border: 2px solid #ddd;\r\n  border-radius: 20px; */\n  width: 2.5rem;\n  height: 1.5rem;\n  border-radius: 64px;\n  background-color: #ccc;\n  -webkit-transition-property: background-color, border;\n  transition-property: background-color, border;\n  -webkit-transition-duration: 0.2s;\n  transition-duration: 0.2s; }\n  .toggle .toggle-handle[_v-651f39ae] {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    z-index: 2;\n    /*     width: 30px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 100px; */\n    top: 2px;\n    left: 2px;\n    height: 1.375rem;\n    width: 1.375rem;\n    border-radius: 50%;\n    background-color: #fff;\n    -webkit-transition-property: -webkit-transform, border, width;\n    -webkit-transition-property: border, width, -webkit-transform;\n    transition-property: border, width, -webkit-transform;\n    transition-property: transform, border, width;\n    transition-property: transform, border, width, -webkit-transform;\n    -webkit-transition-duration: 0.2s;\n    transition-duration: 0.2s; }\n  .toggle[_v-651f39ae]:before {\n    position: absolute;\n    top: 5px;\n    right: 11px;\n    font-size: 13px;\n    color: #999;\n    text-transform: uppercase; }\n  .toggle.active[_v-651f39ae] {\n    background-color: #099fde; }\n    .toggle.active .toggle-handle[_v-651f39ae] {\n      border-color: #099fde;\n      -webkit-transform: translate3d(1rem, 0, 0);\n      transform: translate3d(1rem, 0, 0); }\n    .toggle.active[_v-651f39ae]:before {\n      right: auto;\n      left: 15px;\n      color: #fff; }\n  .toggle input[type=\"checkbox\"][_v-651f39ae] {\n    display: none; }\n", "", {"version":3,"sources":["/./src/toggle.vue.style"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA+CG;AACH;EACE,mBAAmB;EACnB,eAAe;EACf;;;;yBAIuB;EACvB,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,uBAAuB;EACvB,sDAAsD;EAEtD,8CAA8C;EAC9C,kCAAkC;EAElC,0BAA0B,EAAE;EAC5B;IACE,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,WAAW;IACX;;;;4BAIwB;IACxB,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,8DAA8D;IAE9D,8DAA8C;IAA9C,sDAA8C;IAA9C,8CAA8C;IAA9C,iEAA8C;IAC9C,kCAAkC;IAElC,0BAA0B,EAAE;EAC9B;IACE,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;IAC5B;MACE,sBAAsB;MACtB,2CAA2C;MAE3C,mCAAmC,EAAE;IACvC;MACE,YAAY;MACZ,WAAW;MACX,YAAY,EAAE;EAClB;IACE,cAAc,EAAE","file":"toggle.vue","sourcesContent":["/*\r\n\r\n$font-family-sans-serif: \"Segoe UI\", \"Lucida Grande\", Helvetica, Arial, \"Microsoft YaHei\", FreeSans, Arimo, \"Droid Sans\",\"wenquanyi micro hei\",\"Hiragino Sans GB\", \"Hiragino Sans GB W3\", sans-serif;\r\n$font-family-serif: Georgia, \"Times New Roman\", Times, SimSun, serif;\r\n$font-family-monospace: Monaco, Menlo, Consolas, \"Courier New\", \"FontAwesome\", monospace;\r\n$font-family-kai: Georgia, \"Times New Roman\", Times, Kai, \"Kaiti SC\", KaiTi, BiauKai, serif;\r\n\r\n html, body{\r\n  min-width: 320px;\r\n  font-size: 12px;\r\n}\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea{\r\n  font-family: $font-family-sans-serif;\r\n}\r\n\r\n@mixin html {\r\n  font-size: $baseFontSize/($baseWidth/$currentminWidth);\r\n  // max-width: $currentWidth !important;\r\n}\r\n\r\n//attention comments can't be chinese charset? sass compile will be wrong\r\n//mobile width range 320px->100%\r\n$queryWidthList: (320px, 400px), (400px, 500px), (500px, 600px), (600px, 720px);\r\n@each $minWidth, $maxWidth in $queryWidthList {\r\n  @if $maxWidth == 720px {\r\n    @include min-screen($minWidth) {\r\n      $currentWidth: 100%!global;\r\n      $currentminWidth: 720px!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n  @else {\r\n    @include screen($minWidth, $maxWidth) {\r\n      $currentWidth: $maxWidth!global;\r\n      $currentminWidth: $minWidth!global;\r\n      html {\r\n        @include html\r\n      }\r\n    }\r\n  }\r\n}\r\n */\n.toggle {\n  position: relative;\n  display: block;\n  /*   width: 74px;\r\n  height: 30px;\r\n  background-color: #fff;\r\n  border: 2px solid #ddd;\r\n  border-radius: 20px; */\n  width: 2.5rem;\n  height: 1.5rem;\n  border-radius: 64px;\n  background-color: #ccc;\n  -webkit-transition-property: background-color, border;\n  -moz-transition-property: background-color, border;\n  transition-property: background-color, border;\n  -webkit-transition-duration: 0.2s;\n  -moz-transition-duration: 0.2s;\n  transition-duration: 0.2s; }\n  .toggle .toggle-handle {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    z-index: 2;\n    /*     width: 30px;\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 100px; */\n    top: 2px;\n    left: 2px;\n    height: 1.375rem;\n    width: 1.375rem;\n    border-radius: 50%;\n    background-color: #fff;\n    -webkit-transition-property: -webkit-transform, border, width;\n    -moz-transition-property: -moz-transform, border, width;\n    transition-property: transform, border, width;\n    -webkit-transition-duration: 0.2s;\n    -moz-transition-duration: 0.2s;\n    transition-duration: 0.2s; }\n  .toggle:before {\n    position: absolute;\n    top: 5px;\n    right: 11px;\n    font-size: 13px;\n    color: #999;\n    text-transform: uppercase; }\n  .toggle.active {\n    background-color: #099fde; }\n    .toggle.active .toggle-handle {\n      border-color: #099fde;\n      -webkit-transform: translate3d(1rem, 0, 0);\n      -ms-transform: translate3d(1rem, 0, 0);\n      transform: translate3d(1rem, 0, 0); }\n    .toggle.active:before {\n      right: auto;\n      left: 15px;\n      color: #fff; }\n  .toggle input[type=\"checkbox\"] {\n    display: none; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 157 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div class="toggle" :class="{'active': model}"><div class="toggle-handle" v-touch:panend="toggle"  v-touch:tap="toggle"></div></div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'toggle',
	  props: {
	    model: {
	      type: Boolean,
	      twoWay: true,
	      default: false
	    }
	  },
	
	  methods: {
	    toggle: function toggle() {
	      this.model = !this.model;
	    }
	  }
	};
	// </script>
	//
	// <style lang="sass" scoped>
	// @import './scss/variables';
	// @import './scss/mixins';
	// $positive-color : #099fde;
	// .toggle {
	//   position: relative;
	//   display: block;
	// /*   width: 74px;
	//   height: 30px;
	//   background-color: #fff;
	//   border: 2px solid #ddd;
	//   border-radius: 20px; */
	//        width: 2.5rem;
	//       height: 1.5rem;
	//       border-radius: 64px;
	//       background-color: #ccc;
	//   @include transition-property(background-color, border);
	//   @include transition-duration(.2s);
	//
	//   // Sliding handle
	//   .toggle-handle {
	//     position: absolute;
	//     top: -1px;
	//     left: -1px;
	//     z-index: 2;
	// /*     width: 30px;
	//     height: 30px;
	//     background-color: #fff;
	//     border: 1px solid #ddd;
	//     border-radius: 100px; */
	//       top: 2px;
	//       left: 2px;
	//       height: 1.375rem;
	//       width: 1.375rem;
	//       border-radius: 50%;
	//       background-color: #fff;
	//
	//     -webkit-transition-property: -webkit-transform, border, width;
	//        -moz-transition-property: -moz-transform, border, width;
	//             transition-property: transform, border, width;
	//     @include transition-duration(.2s);
	//   }
	//   &:before {
	//     position: absolute;
	//     top: 5px;
	//     right: 11px;
	//     font-size: 13px;
	//     color: #999;
	//     text-transform: uppercase;
	//     // content: "Off";
	//   }
	//
	//   // Active state for toggle
	//   &.active {
	//     background-color: $positive-color;
	//     // border: 2px solid $positive-color;
	//
	//     .toggle-handle {
	//       border-color: $positive-color;
	//       @include transform(translate3d(1rem,0,0));
	//     }
	//     &:before {
	//       right: auto;
	//       left: 15px;
	//       color: #fff;
	//       // content: "On";
	//     }
	//   }
	//   // Hide the checkbox
	//   input[type="checkbox"] {
	//     display: none;
	//   }
	// }
	//
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"toggle\" :class=\"{'active': model}\" _v-651f39ae=\"\"><div class=\"toggle-handle\" v-touch:panend=\"toggle\" v-touch:tap=\"toggle\" _v-651f39ae=\"\"></div></div>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=VueRatchet.js.map