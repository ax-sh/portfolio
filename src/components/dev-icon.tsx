import { type SimpleIcon } from "simple-icons";
import SVG from "react-inlinesvg";
import React, { type ComponentProps, type CSSProperties } from "react";
import { Tooltip } from "react-tooltip";

type DevIconProps =
	| { readonly icon: SimpleIcon; readonly size: number }
export function DevIcon({ icon, size }: DevIconProps) {
	// @ts-ignore
	return <SVG src={icon.svg} fill={`#${icon.hex}`} height="auto" width={size} title={icon.title} />;
}

type DevIconWithToolTipProps = ComponentProps<typeof DevIcon> & {
	readonly tooltipStyle?: CSSProperties;
};

export function DevIconWithToolTip({ tooltipStyle, ...props }: DevIconWithToolTipProps) {
	const icon = props.icon ;
	const id = icon.slug;
	return (
		<>
			<span className="cursor-pointer" data-tooltip-id={id}>
				{React.isValidElement(props.icon) ? props.icon : <DevIcon {...props} />}
			</span>
			<Tooltip style={tooltipStyle} id={id}>
				{icon.title}
			</Tooltip>
		</>
	);
}
