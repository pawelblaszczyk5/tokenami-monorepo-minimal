"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/Users/pawelblaszczyk/dev/tokenami-monorepo-minimal/packages/design-system/src/button.tsx";
var react_1 = require("react");
var css_1 = require("@repo/css");
var Button = function () {
	var _a = (0, react_1.useState)(0),
		count = _a[0],
		setCount = _a[1];
	return (0, jsx_dev_runtime_1.jsxDEV)(
		"button",
		{
			onClick: function () {
				setCount(function (count) {
					return count + 1;
				});
			},
			style: (0, css_1.css)({ "--background": "var(---, #eaeaea)" }),
			type: "button",
			children: ["Increase test: ", count],
		},
		void 0,
		true,
		{ fileName: _jsxFileName, lineNumber: 8, columnNumber: 10 },
		_this,
	);
};
exports.Button = Button;
