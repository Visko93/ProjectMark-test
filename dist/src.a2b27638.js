// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/components/Button/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = button;
/**
 * @param {string} label
 * @param {string} variant "primary", "secondary"
 */
function button(_ref) {
  var label = _ref.label,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant;
  var type = "button ".concat(variant);
  return "\n      <button class=\"".concat(type, "\">\n        ").concat(label, "\n      </button>\n    ");
}
},{}],"src/components/Step/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.step = step;
/**
 * @param {string} label
 * @param {string} description
 * @param {number} index
 * @param {number} active
 */
function step(_ref) {
  var label = _ref.label,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? "" : _ref$description,
    index = _ref.index,
    active = _ref.active;
  return "\n  <div class=\"step\" data-index=\"".concat(index, "\">\n    <button class=\"step__button\" data-active=\"").concat(index === active, "\">\n      ").concat(label, "\n    </button>\n    <small class=\"step__description\">\n      ").concat(description, "\n    </small>\n  </div>\n  ");
}
},{}],"src/components/Header/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.header = header;
var _Button = require("../Button");
var _Step = require("../Step");
function header() {
  return "\n  <header class=\"header\">\n    <span>\n      <svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g id=\"Symbol\">\n          <path id=\"Union\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.757 1.75736L35.2714 14.2717C37.6145 16.6149 37.6145 20.4139 35.2714 22.757L22.757 35.2714C20.4139 37.6145 16.6149 37.6145 14.2717 35.2714L1.75736 22.757C-0.585786 20.4139 -0.585787 16.6149 1.75736 14.2717L14.2717 1.75736C16.6149 -0.585786 20.4139 -0.585786 22.757 1.75736Z\" fill=\"#1B3E67\"/>\n          <path id=\"Path 5090\" d=\"M17.9174 7.47347C16.0111 7.75269 14.2713 8.71523 13.022 10.1818C11.7727 11.6484 11.099 13.5191 11.1264 15.4455V27.5575C11.1263 27.6829 11.1633 27.8056 11.2328 27.9101C11.3022 28.0147 11.4009 28.0963 11.5166 28.1449C11.6323 28.1935 11.7598 28.2069 11.883 28.1833C12.0062 28.1598 12.1198 28.1003 12.2094 28.0125L17.5004 22.8145C19.5424 23.1855 21.8324 22.8915 24.3114 20.3915C25.0782 19.6626 25.6828 18.7804 26.0858 17.8022C26.4889 16.8241 26.6812 15.772 26.6504 14.7145C26.586 13.6531 26.3045 12.6162 25.8233 11.6679C25.3422 10.7197 24.6716 9.88022 23.853 9.20151C23.0344 8.52279 22.0853 8.01924 21.0644 7.72201C20.0434 7.42478 18.9723 7.34019 17.9174 7.47347ZM18.8954 20.3305C17.5295 20.3305 16.2196 19.7879 15.2538 18.8221C14.2879 17.8563 13.7454 16.5463 13.7454 15.1805C13.7454 13.8146 14.2879 12.5047 15.2538 11.5389C16.2196 10.5731 17.5295 10.0305 18.8954 10.0305C20.2612 10.0305 21.5711 10.5731 22.537 11.5389C23.5028 12.5047 24.0454 13.8146 24.0454 15.1805C24.0454 16.5463 23.5028 17.8563 22.537 18.8221C21.5711 19.7879 20.2612 20.3305 18.8954 20.3305Z\" fill=\"#EDEEEF\"/>\n        </g>\n      </svg>\n    </span>\n    <div class=\"steps\">\n      ".concat((0, _Step.step)({
    label: "1",
    description: "Sales Pipeline Settings",
    index: 0,
    active: 0
  }), "\n      ").concat((0, _Step.step)({
    label: "2",
    description: "Opportunity Details Settings",
    index: 1,
    active: 0
  }), "\n    </div>\n    <div>\n      ").concat((0, _Button.button)({
    label: "Next",
    variant: "primary"
  }), "\n    </div>\n  </header>\n  ");
}
},{"../Button":"src/components/Button/index.js","../Step":"src/components/Step/index.js"}],"src/components/Lane/ActiveToggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveToggle = ActiveToggle;
/**
 * @param {string} background
 * @param {string} slider
 */
function ActiveToggle(_ref) {
  var background = _ref.background,
    slider = _ref.slider;
  return "\n    <span class=\"lane__activate\" style=\"background: var(".concat(background, ");\">\n        <input type=\"checkbox\">\n        <span class=\"slider\"style=\"background-color: var(").concat(slider, ");\"></span>\n    </span>\n    ");
}
},{}],"src/components/Lane/Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = Card;
/**
 * @param {string} border
 * @param {string} background
 */
function Card(_ref) {
  var border = _ref.border,
    background = _ref.background;
  return "\n    <div class=\"lane__card\" style=\"\n        border: 1px solid var(".concat(border, ");\n        background: var(").concat(background, ");\n    \">\n    </div>");
}
},{}],"src/components/Lane/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lane = lane;
var _ActiveToggle = require("./ActiveToggle");
var _Card = require("./Card");
/**
 * @param {string} background
 * @param {string} title
 */

function lane(_ref) {
  var background = _ref.background,
    title = _ref.title;
  var lighter = "--s-".concat(background, "-lighter");
  var darker = "--s-".concat(background, "-darker");
  var light = "--s-".concat(background, "-light");
  var primary = "--s-".concat(background);
  return "\n    <div class=\"lane\" style=\" background: linear-gradient(180deg, var(".concat(lighter, "), #fff 100%);\">\n      <h3 class=\"lane__title\"\n      style=\" color: var(").concat(darker, ");\"\n      >\n        ").concat(title, "\n      </h3>\n      ").concat((0, _ActiveToggle.ActiveToggle)({
    background: light,
    slider: primary
  }), "\n      ").concat((0, _Card.Card)({
    border: light,
    background: lighter
  }), "\n    </div>\n  ");
}
},{"./ActiveToggle":"src/components/Lane/ActiveToggle.js","./Card":"src/components/Lane/Card.js"}],"src/constants/mocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockOptions = exports.lanesMock = void 0;
var lanesMock = [{
  title: "LEAD",
  background: "1"
}, {
  title: "RFP IN PROGRESS",
  background: "2"
}, {
  title: "SUBMITTED",
  background: "3"
}, {
  title: "WON",
  background: "4"
}, {
  title: "LOST",
  background: "5"
}, {
  title: "CLOSED",
  background: "6"
}];
exports.lanesMock = lanesMock;
var mockOptions = [{
  label: "Basic"
}, {
  label: "Advanced"
}, {
  label: "Expert"
}, {
  label: "Custom"
}];
exports.mockOptions = mockOptions;
},{}],"src/components/Options/Item/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = item;
/**
 * @param {boolean} index Is this options index
 * @param {string} label Name of the selection
 */
function item(_ref) {
  var index = _ref.index,
    label = _ref.label;
  return "\n      <div class=\"options__item\" data-index=\"".concat(index, "\" data-selected=\"false\">\n        <label class=\"options__label\">\n          <input class=\"options__input\" type=\"checkbox\" />\n          ").concat(label, "\n        </label>\n      </div>\n    ");
}
},{}],"src/components/Options/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleOptionSelection = handleOptionSelection;
function toggle(item, input) {
  var _element$selected, _inputElement$selecte;
  var element = item.dataset;
  var inputElement = input.dataset;
  console.log(inputElement, element);
  var isSelected = (_element$selected = element === null || element === void 0 ? void 0 : element.selected) !== null && _element$selected !== void 0 ? _element$selected : "false";
  var isSelectedInput = (_inputElement$selecte = inputElement === null || inputElement === void 0 ? void 0 : inputElement.selected) !== null && _inputElement$selecte !== void 0 ? _inputElement$selecte : "false";
  item.setAttribute("data-selected", isSelected === "false" ? "true" : "false");
  input.setAttribute("data-selected", isSelectedInput === "false" ? "true" : "false");
}
function handleOptionSelection() {
  var options = document.querySelectorAll(".options__item");
  var optionsInputs = document.querySelectorAll(".options__input");

  // For container clicks
  options.forEach(function (item, i) {
    return item.addEventListener("click", function () {
      return toggle(item, optionsInputs[i]);
    });
  });
  // For input clicks
  optionsInputs.forEach(function (item, i) {
    item.addEventListener("click", function () {
      return toggle(options[i], item);
    });
  });
  options.forEach(function (item, i) {
    return item.removeEventListener("click", function () {
      return toggle(item, optionsInputs[i]);
    });
  });
  optionsInputs.forEach(function (item, i) {
    return item.removeEventListener("click", function () {
      return toggle(options[i], item);
    });
  });
}
},{}],"src/components/Options/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "handleOptionSelection", {
  enumerable: true,
  get: function () {
    return _events.handleOptionSelection;
  }
});
exports.options = options;
var _mocks = require("../../constants/mocks");
var _Item = require("./Item");
var _events = require("./events");
function options() {
  return "\n      <nav class=\"options__container\">\n        ".concat(_mocks.mockOptions.map(function (_ref, i) {
    var label = _ref.label;
    return (0, _Item.item)({
      label: label,
      index: i
    });
  }).join(""), "\n      </nav>\n    ");
}
},{"../../constants/mocks":"src/constants/mocks.js","./Item":"src/components/Options/Item/index.js","./events":"src/components/Options/events.js"}],"src/components/Main/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = main;
var _mocks = require("../../constants/mocks");
var _Lane = require("../Lane");
var _Options = require("../Options");
function main() {
  return "\n    <main class=\"main\">\n      <h1>\n        Please select the type of sales pipeline that best fits to you company\n      </h1>\n        ".concat((0, _Options.options)(), "\n        <div class=\"lane__container\">\n          ").concat(_mocks.lanesMock.map(function (_ref) {
    var background = _ref.background,
      title = _ref.title;
    return (0, _Lane.lane)({
      background: background,
      title: title
    });
  }).join(""), "\n        </div>\n    </main>\n  ");
}
},{"../../constants/mocks":"src/constants/mocks.js","../Lane":"src/components/Lane/index.js","../Options":"src/components/Options/index.js"}],"src/components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "button", {
  enumerable: true,
  get: function () {
    return _Button.button;
  }
});
Object.defineProperty(exports, "header", {
  enumerable: true,
  get: function () {
    return _Header.header;
  }
});
Object.defineProperty(exports, "lane", {
  enumerable: true,
  get: function () {
    return _Lane.lane;
  }
});
Object.defineProperty(exports, "main", {
  enumerable: true,
  get: function () {
    return _Main.main;
  }
});
Object.defineProperty(exports, "options", {
  enumerable: true,
  get: function () {
    return _Options.options;
  }
});
Object.defineProperty(exports, "step", {
  enumerable: true,
  get: function () {
    return _Step.step;
  }
});
var _Header = require("./Header");
var _Button = require("./Button");
var _Lane = require("./Lane");
var _Main = require("./Main");
var _Step = require("./Step");
var _Options = require("./Options");
},{"./Header":"src/components/Header/index.js","./Button":"src/components/Button/index.js","./Lane":"src/components/Lane/index.js","./Main":"src/components/Main/index.js","./Step":"src/components/Step/index.js","./Options":"src/components/Options/index.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHTMLString = generateHTMLString;
/**
 * @param {array} components Receive an array of stringfied html elements
 * @returns The result of all the components into a single string
 */
function generateHTMLString(components) {
  return components.reduce(function (acc, component) {
    return acc += component();
  }, "");
}
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var _components = require("./components");
var _Options = require("./components/Options");
require("./styles.css");
var _utils = require("./utils");
var content = (0, _utils.generateHTMLString)([_components.header, _components.main]);
document.getElementById("app").innerHTML = content;
(0, _Options.handleOptionSelection)();
},{"./components":"src/components/index.js","./components/Options":"src/components/Options/index.js","./styles.css":"src/styles.css","./utils":"src/utils.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39911" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map