import type { TokenProperties } from "@tokenami/dev";

import type config from "./tokenami.config.js";

export type Config = typeof config;

declare module "@tokenami/dev" {
	interface TokenamiConfig extends Config {
		CI: false;
	}
	// prettier-ignore
	interface TokenamiProperties extends TokenProperties<'aaaaaa'> {}
}
