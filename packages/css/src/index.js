"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.css = void 0;
var css_1 = require("@tokenami/css");
var config_js_1 = require("./config.js");
exports.css = (0, css_1.createCss)(config_js_1.config, { escapeSpecialChars: false });
