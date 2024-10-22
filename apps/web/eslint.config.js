import core from "@repo/eslint-config/core";
import react from "@repo/eslint-config/react";
import node from "@repo/eslint-config/node";

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
	...node,
	{
		files: ["vite.config.ts", "app/entry.server.tsx", ".tokenami/tokenami.config.ts"],
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
	{
		files: ["app/routes/**/*.tsx", "app/root.tsx"],
		rules: {
			"import-x/no-default-export": "off",
			"react-refresh/only-export-components": [
				"error",
				{
					allowConstantExport: true,
					allowExportNames: ["meta", "links", "headers", "loader", "action", "clientLoader", "clientAction"],
				},
			],
		},
	},
];
