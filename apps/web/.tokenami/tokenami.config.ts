import { createConfig } from "@tokenami/css";

import { config } from "@repo/css/config";

export default createConfig({
	...config,
	include: ["./app/**/*.{ts,tsx}", "./node_modules/@repo/design-system/build/styles.css"],
});
