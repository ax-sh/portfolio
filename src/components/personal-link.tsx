import { type ComponentPropsWithoutRef } from "react";
import Obfuscate from "react-obfuscate";
import clsx from "clsx";

export function PersonalLink({ className, ...props }: ComponentPropsWithoutRef<"a">) {
	return <Obfuscate className={clsx("prose text-blue-400 hover:text-red-400", className)} {...props} />;
}
