import { createConfig } from "@tokenami/css";

import { config } from "@repo/css/config";

export default createConfig({
	...config,
	include: ["./src/**/*.{ts,tsx}"],
});
