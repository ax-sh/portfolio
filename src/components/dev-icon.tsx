import { type SimpleIcon } from "simple-icons";
import SVG from "react-inlinesvg";
import React, { type ComponentProps, type CSSProperties, ReactNode } from "react";
import { Tooltip } from "react-tooltip";

export function DevIcon({ icon, size }: { readonly icon: SimpleIcon | ReactNode ; readonly size: number }) {
	// @ts-ignore
	return <SVG src={icon.svg} fill={`#${icon.hex}`} height="auto" width={size} title={icon.title} />;
}

type DevIconWithToolTipProps = ComponentProps<typeof DevIcon> & {
	readonly tooltipStyle?: CSSProperties;

};

export function DevIconWithToolTip({ tooltipStyle, ...props }: DevIconWithToolTipProps) {
	if (React.isValidElement(props.icon)) return props.icon;
	const id = props.icon?.slug;
	return (
		<>
			<span className="cursor-pointer" data-tooltip-id={id}>
				<DevIcon {...props} />
			</span>
			<Tooltip style={tooltipStyle} id={id}>
				{props.icon.title}
			</Tooltip>
		</>
	);
}
