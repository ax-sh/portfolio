import { type SimpleIcon } from "simple-icons";
import SVG from "react-inlinesvg";
import { type ComponentProps, type CSSProperties } from "react";
import { Tooltip } from "react-tooltip";

export function DevIcon({ icon, size }: { readonly icon: SimpleIcon; readonly size: number }) {
	// @ts-ignore
	return <SVG src={icon.svg} fill={`#${icon.hex}`} height="auto" width={size} title={icon.title} />;
}

type DevIconWithToolTipProps = ComponentProps<typeof DevIcon> & {
	readonly tooltipStyle?: CSSProperties;
};

export function DevIconWithToolTip({ tooltipStyle, ...props }: DevIconWithToolTipProps) {
	const id = props.icon.slug;
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
