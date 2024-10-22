import n from "eslint-plugin-n";

import tseslint from "typescript-eslint";

export default tseslint.config(n.configs["flat/recommended"], {
	name: "n overrides",
	rules: {
		"n/no-path-concat": "error",
		"n/no-process-env": "error",
		"n/no-unsupported-features/es-builtins": [
			"error",
			{
				ignores: [],
			},
		],
		"n/no-unsupported-features/es-syntax": [
			"error",
			{
				/* cspell:ignore withresolvers */
				ignores: ["promise-withresolvers"],
			},
		],
		"n/no-unsupported-features/node-builtins": [
			"error",
			{
				ignores: [],
			},
		],
		"n/prefer-global/buffer": "error",
		"n/prefer-promises/dns": "error",
		"n/prefer-promises/fs": "error",
	},
	settings: {
		node: {
			version: "22.6.0",
		},
	},
});
