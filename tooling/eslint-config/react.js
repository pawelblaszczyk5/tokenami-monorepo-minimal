import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";
import reactRefresh from "eslint-plugin-react-refresh";
import reactCompiler from "eslint-plugin-react-compiler";
import jsxA11y from "eslint-plugin-jsx-a11y";
import stylisticJsx from "@stylistic/eslint-plugin-jsx";
import reactDom from "eslint-plugin-react-dom";
import reactHooksExtra from "eslint-plugin-react-hooks-extra";
import reactNamingConvention from "eslint-plugin-react-naming-convention";
import reactWebApi from "eslint-plugin-react-web-api";
import react from "eslint-plugin-react-x";

// cspell:ignore innerhtml, textnodes, setstate

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

export default tseslint.config(
	{
		name: "react",
		plugins: {
			react: react,
		},
		rules: {
			"react/ensure-forward-ref-using-ref": "error",
			"react/no-access-state-in-setstate": "error",
			"react/no-array-index-key": "error",
			"react/no-children-count": "error",
			"react/no-children-for-each": "error",
			"react/no-children-map": "error",
			"react/no-children-only": "error",
			"react/no-children-prop": "error",
			"react/no-children-to-array": "error",
			"react/no-class-component": "error",
			"react/no-clone-element": "error",
			"react/no-comment-textnodes": "error",
			"react/no-complex-conditional-rendering": "error",
			"react/no-component-will-mount": "error",
			"react/no-component-will-receive-props": "error",
			"react/no-component-will-update": "error",
			"react/no-create-ref": "error",
			"react/no-default-props": "error",
			"react/no-direct-mutation-state": "error",
			"react/no-duplicate-key": "error",
			"react/no-implicit-key": "error",
			"react/no-leaked-conditional-rendering": "error",
			"react/no-missing-component-display-name": "error",
			"react/no-missing-key": "error",
			"react/no-nested-components": "error",
			"react/no-prop-types": "error",
			"react/no-redundant-should-component-update": "error",
			"react/no-set-state-in-component-did-mount": "error",
			"react/no-set-state-in-component-did-update": "error",
			"react/no-set-state-in-component-will-update": "error",
			"react/no-string-refs": "error",
			"react/no-unsafe-component-will-mount": "error",
			"react/no-unsafe-component-will-receive-props": "error",
			"react/no-unsafe-component-will-update": "error",
			"react/no-unstable-context-value": "error",
			"react/no-unstable-default-props": "error",
			"react/no-unused-class-component-members": "error",
			"react/no-unused-state": "error",
			"react/no-useless-fragment": "error",
			"react/prefer-destructuring-assignment": "error",
			"react/prefer-read-only-props": "error",
			"react/prefer-shorthand-boolean": "error",
			"react/prefer-shorthand-fragment": "error",
		},
	},
	{
		name: "react-dom",
		plugins: {
			"react-dom": reactDom,
		},
		rules: {
			"react-dom/no-children-in-void-dom-elements": "error",
			"react-dom/no-dangerously-set-innerhtml": "error",
			"react-dom/no-dangerously-set-innerhtml-with-children": "error",
			"react-dom/no-find-dom-node": "error",
			"react-dom/no-missing-button-type": "error",
			"react-dom/no-missing-iframe-sandbox": "error",
			"react-dom/no-namespace": "error",
			"react-dom/no-render-return-value": "error",
			"react-dom/no-script-url": "error",
			"react-dom/no-unsafe-iframe-sandbox": "error",
			"react-dom/no-unsafe-target-blank": "error",
		},
	},
	{
		name: "react-web-api",
		plugins: {
			"react-web-api": reactWebApi,
		},
		rules: {
			"react-web-api/no-leaked-event-listener": "error",
			"react-web-api/no-leaked-interval": "error",
			"react-web-api/no-leaked-resize-observer": "error",
			"react-web-api/no-leaked-timeout": "error",
		},
	},
	{
		name: "react-hooks-extra",
		plugins: {
			"react-hooks-extra": reactHooksExtra,
		},
		rules: {
			"react-hooks-extra/no-direct-set-state-in-use-effect": "error",
			"react-hooks-extra/no-direct-set-state-in-use-layout-effect": "error",
			"react-hooks-extra/no-redundant-custom-hook": "error",
			"react-hooks-extra/no-unnecessary-use-callback": "error",
			"react-hooks-extra/no-unnecessary-use-memo": "error",
			"react-hooks-extra/prefer-use-state-lazy-initialization": "error",
		},
	},
	{
		name: "react-naming-convention",
		plugins: {
			"react-naming-convention": reactNamingConvention,
		},
		rules: {
			"react-naming-convention/component-name": "error",
			"react-naming-convention/use-state": "error",
		},
	},
	{
		name: "@stylistic/jsx",
		plugins: {
			"@stylistic/jsx": stylisticJsx,
		},
		rules: {
			"@stylistic/jsx/jsx-curly-brace-presence": [
				"error",
				{ propElementValues: "always", children: "never", props: "never" },
			],
			"@stylistic/jsx/jsx-self-closing-comp": ["error"],
		},
	},
	...compat.extends("plugin:react-hooks/recommended"),
	{
		name: "react-hooks overrides",
		rules: {
			"react-hooks/exhaustive-deps": "error",
		},
	},
	{
		name: "react-refresh",
		plugins: {
			"react-refresh": reactRefresh,
		},
		rules: {
			"react-refresh/only-export-components": ["error", { allowConstantExport: true }],
		},
	},
	jsxA11y.flatConfigs.strict,
	{
		name: "react-compiler",
		plugins: {
			"react-compiler": reactCompiler,
		},
		rules: {
			"react-compiler/react-compiler": "error",
		},
	},
);
