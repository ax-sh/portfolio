import type { PropsWithChildren } from "react";
import clsx from "clsx";

export function StacksSection({ children, label }: PropsWithChildren<{ readonly label: string }>) {
	return (
		<section
			data-before={label}
			className={clsx("before:content-[attr(data-before)]", "flex items-center flex-wrap gap-2")}
		>
			{children}
		</section>
	);
}
