import {
	siAirtable,
	siApollographql,
	siAuth0,
	siAwsamplify,
	siBiome,
	siCommitlint,
	siContentful,
	siConventionalcommits,
	siD3dotjs,
	siDocker,
	siDotenv,
	siDrizzle,
	siEslint,
	siFigma,
	siFirebase,
	siGit,
	siGithub,
	siGithubactions,
	siGithubpages,
	siGitignoredotio,
	siGitlab,
	siGoogleanalytics,
	siGraphql,
	siGreensock,
	siHotjar,
	siLighthouse,
	siMockserviceworker,
	siMongodb,
	siNetlify,
	siNextdotjs,
	siNotion,
	siPocketbase,
	siPostman,
	siPrecommit,
	siPrettier,
	siPrisma,
	siReact,
	siReacthookform,
	siReactquery,
	siReacttable,
	siRedux,
	siReduxsaga,
	siSanity,
	siSass,
	siSemanticrelease,
	siSemver,
	siSonarlint,
	siStorybook,
	siTailwindcss,
	siTampermonkey,
	siTypescript,
	siVercel,
	siVite,
	siVitest,
	siXo,
	siZapier,
	siZod,
	// siHomebrew,
	// siHtml5,
	// siCss3,
	// siIterm2,
	// siJavascript,
} from "simple-icons";
import { DevIconWithToolTip } from "./dev-icon";
import { StacksSection } from "./stacks-section.tsx";

export function MainStacksSection() {
	const iconSize = 24;
	return (
		<section className="flex flex-col gap-8 py-8 text-dark-fg">
			<StacksSection label="Skills">
				{/* <DevIconWithToolTip icon={siIterm2} size={iconSize} /> */}
				<DevIconWithToolTip icon={siNotion} size={iconSize} />

				{/* <DevIconWithToolTip icon={siHomebrew} size={iconSize} /> */}
				<DevIconWithToolTip icon={siVite} size={iconSize} />
				<DevIconWithToolTip icon={siTampermonkey} size={iconSize} />
				<DevIconWithToolTip icon={siGithub} size={iconSize} />
				<DevIconWithToolTip icon={siGitlab} size={iconSize} />

				{/* <DevIconWithToolTip icon={siNodedotjs} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siNpm} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siPnpm} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siYarn} size={iconSize} /> */}

				{/* <DevIconWithToolTip icon={siAnsible} size={iconSize} /> */}
				<DevIconWithToolTip icon={siFigma} size={iconSize} />
				<DevIconWithToolTip icon={siGoogleanalytics} size={iconSize} />
				<DevIconWithToolTip icon={siAuth0} size={iconSize} />
				<DevIconWithToolTip icon={siAwsamplify} size={iconSize} />

				{/* <DevIconWithToolTip icon={siServerless} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siSst} size={iconSize} /> */}

				<DevIconWithToolTip icon={siPostman} size={iconSize} />
				<DevIconWithToolTip icon={siZapier} size={iconSize} />
				<DevIconWithToolTip icon={siDocker} size={iconSize} />

				<DevIconWithToolTip icon={siNetlify} size={iconSize} />
				<DevIconWithToolTip icon={siVercel} size={iconSize} />
				{/* <DevIconWithToolTip icon={siNrwl} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siNx} size={iconSize} /> */}
				<DevIconWithToolTip icon={siAirtable} size={iconSize} />
				<DevIconWithToolTip icon={siContentful} size={iconSize} />
				<DevIconWithToolTip icon={siHotjar} size={iconSize} />
				<DevIconWithToolTip icon={siGithubpages} size={iconSize} />

				{/* <DevIconWithToolTip icon={siGitlab} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siGithub} size={iconSize} /> */}

				{/* <DevIconWithToolTip icon={siAnaconda} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siPython} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siPytorch} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siJupyter} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siStreamlit} size={iconSize} /> */}
			</StacksSection>
			<StacksSection label="Frontend">
				<DevIconWithToolTip icon={siTypescript} size={iconSize} />
				{/* <DevIconWithToolTip icon={siJavascript} size={iconSize} /> */}
				<DevIconWithToolTip icon={siZod} size={iconSize} />

				<DevIconWithToolTip icon={siNextdotjs} size={iconSize} />
				<DevIconWithToolTip icon={siReact} size={iconSize} />
				<DevIconWithToolTip icon={siRedux} size={iconSize} />
				<DevIconWithToolTip icon={siReduxsaga} size={iconSize} />

				<DevIconWithToolTip icon={siReacthookform} size={iconSize} />
				<DevIconWithToolTip icon={siReactquery} size={iconSize} />
				<DevIconWithToolTip icon={siReacttable} size={iconSize} />

				{/* <DevIconWithToolTip icon={siHtml5} size={iconSize} /> */}
				{/* <DevIconWithToolTip icon={siCss3} size={iconSize} /> */}
				<DevIconWithToolTip icon={siMockserviceworker} size={iconSize} />
				<DevIconWithToolTip icon={siTailwindcss} size={iconSize} />
				<DevIconWithToolTip icon={siSass} size={iconSize} />

				<DevIconWithToolTip icon={siD3dotjs} size={iconSize} />
				{/* <DevIconWithToolTip icon={siSvg} size={iconSize} /> */}

				<DevIconWithToolTip icon={siGraphql} size={iconSize} />
				<DevIconWithToolTip icon={siSanity} size={iconSize} />
				<DevIconWithToolTip icon={siApollographql} size={iconSize} />
				<DevIconWithToolTip icon={siGreensock} size={iconSize} />
			</StacksSection>
			<StacksSection label="Backend">
				<DevIconWithToolTip icon={siPrisma} size={iconSize} />
				<DevIconWithToolTip icon={siPocketbase} size={iconSize} />
				<DevIconWithToolTip icon={siMongodb} size={iconSize} />
				<DevIconWithToolTip icon={siDrizzle} size={iconSize} />

				<DevIconWithToolTip icon={siFirebase} size={iconSize} />
			</StacksSection>
			<section className="flex items-center flex-wrap gap-2 before:content-['Code_Quality:'] ">
				<DevIconWithToolTip icon={siPrettier} size={iconSize} />
				<DevIconWithToolTip icon={siEslint} size={iconSize} />
				<DevIconWithToolTip icon={siCommitlint} size={iconSize} />
				<DevIconWithToolTip icon={siConventionalcommits} size={iconSize} />
				<DevIconWithToolTip icon={siSemver} size={iconSize} />
				<DevIconWithToolTip icon={siSonarlint} size={iconSize} />
				<DevIconWithToolTip icon={siGit} size={iconSize} />
				<DevIconWithToolTip icon={siPrecommit} size={iconSize} />
				<DevIconWithToolTip icon={siLighthouse} size={iconSize} />
				<DevIconWithToolTip icon={siDotenv} size={iconSize} />
				<DevIconWithToolTip icon={siVitest} size={iconSize} />
				<DevIconWithToolTip icon={siXo} size={iconSize} />
				<DevIconWithToolTip icon={siStorybook} size={iconSize} />
				<DevIconWithToolTip icon={siGithubactions} size={iconSize} />
				<DevIconWithToolTip icon={siZod} size={iconSize} />
				<DevIconWithToolTip icon={siGitignoredotio} size={iconSize} />
				<DevIconWithToolTip icon={siSemanticrelease} size={iconSize} />
				<DevIconWithToolTip icon={siBiome} size={iconSize} />
			</section>
		</section>
	);
}
