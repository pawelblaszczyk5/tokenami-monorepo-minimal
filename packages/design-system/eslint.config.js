import core from "@repo/eslint-config/core";
import react from "@repo/eslint-config/react";

export default [
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	...core,
	...react,
	{
		files: [".tokenami/tokenami.config.ts"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
	{
		files: [".tokenami/tokenami.env.d.ts"],
		rules: {
			"@typescript-eslint/no-empty-object-type": "off",
		},
	},
];
