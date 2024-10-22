import { useState } from "react";

import { css } from "@repo/css";

export const Button = () => {
	const [count, setCount] = useState(0);

	return (
		<button
			onClick={() => {
				setCount((count) => {
					return count + 1;
				});
			}}
			style={css({ "--background": "var(---, #eaeaea)" })}
			type="button"
		>
			Increase test: {count}
		</button>
	);
};
