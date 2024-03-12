import { siDevdotto, siLinkedin, siTwitter, siUpwork } from "simple-icons";
import { social, type SocialType } from "../constants";
import { DevIconWithToolTip } from "./dev-icon.tsx";
import { PersonalLink } from "./personal-link.tsx";

export function ConnectSection() {
	return (
		<section className="flex gap-4 flex-wrap items-center lead">
			<span>Connect:</span>
			{Object.entries(social).map(([label, url]) => {
				switch (label as SocialType) {
					case "Twitter": {
						return (
							<PersonalLink key={url} target="_blank" href={url}>
								<DevIconWithToolTip
									tooltipStyle={{
										backgroundColor: `#${siTwitter.hex}`,
										color: "#fff",
									}}
									size={30}
									icon={siTwitter}
								/>
							</PersonalLink>
						);
					}

					case "LinkedIn": {
						return (
							<PersonalLink
								key={url}
								className="text-[#0A66C2]"
								target="_blank"
								href={url}
							>
								<DevIconWithToolTip
									size={30}
									icon={siLinkedin}
									tooltipStyle={{
										backgroundColor: `#${siLinkedin.hex}`,
										color: "#fff",
									}}
								/>
							</PersonalLink>
						);
					}

					case "Upwork": {
						return (
							<PersonalLink key={url} target="_blank" href={url}>
								<DevIconWithToolTip
									size={30}
									icon={siUpwork}
									tooltipStyle={{
										backgroundColor: `#${siUpwork.hex}`,
										color: "#000",
									}}
								/>
							</PersonalLink>
						);
					}

					case "Dev.To": {
						return (
							<PersonalLink key={url} target="_blank" href={url}>
								<DevIconWithToolTip
									size={30}
									icon={siDevdotto}
									tooltipStyle={{
										backgroundColor: `#${siDevdotto.hex}`,
										color: "#fff",
									}}
								/>
							</PersonalLink>
						);
					}

					default: {
						return (
							<PersonalLink key={url} target="_blank" href={url}>
								{label}
							</PersonalLink>
						);
					}
				}
			})}
		</section>
	);
}
