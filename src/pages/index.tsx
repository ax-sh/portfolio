import clsx from "clsx";
import { siNextdotjs, siReact } from "simple-icons";
import { ConnectSection } from "../components/connect-section.tsx";
import { DevIcon } from "../components/dev-icon.tsx";
import { PersonalLink } from "../components/personal-link.tsx";
import { MainStacksSection } from "../components/main-stacks-section.tsx";
import { social } from "../constants";

export const info = {
	email: "example@example.com",
	// cv: "",
	links: {
		Works: "https://bit.ly/4418VWz",
		Github: "https://github.com/ax-sh",
		CodeSandbox: "https://codesandbox.io/u/ax-sh",
		Website: "https://ax-sh.github.io/",
		// CV: "",
	},
	social,
} as const;

function Home() {
	return (
		<header
			className={clsx(
				"container mx-auto min-h-screen py-8",
				"grid place-content-center",
				"prose-headings:text-dark-fg",
				"prose-lead:text-dark-fg",
				"prose-p:text-dark-fg",
				"prose-span:text-dark-fg"
			)}
		>
			<article className="prose px-4">
				<h1 className="prose-2xl not-prose font-medium text-white prose-slate">Axmin Shrestha</h1>
				<h2 className="prose-xl font-medium !p-0 !m-0">
					<span>Full-Stack Web Developer </span>
					<span className={"before:content-['_{'] after:content-['}_'] gap-2 inline-flex"}>
						<DevIcon icon={siReact} size={30} />
						<DevIcon icon={siNextdotjs} size={30} />
					</span>
				</h2>
				<p>I am a full-stack web developer with strong background in front-end development.</p>
				<p>
					I am currently open to new opportunities and eager to contribute my skills to your next project. Should you
					have any initiatives in mind that align with my expertise, please don't hesitate to reach out.
				</p>
				<p>I look forward to the possibility of working with you.</p>
				{/* <p>I am available for hire. If you've got a project in mind, feel free to contact me.</p> */}
				<div className="flex flex-col gap-4">
					<ConnectSection />

					<section className="flex gap-2 flex-wrap text-dark-fg">
						<span>Projects: </span>
						{Object.entries(info.links).map(([label, url]) => (
							<PersonalLink key={url} target="_blank" href={url}>
								{label}
							</PersonalLink>
						))}
					</section>
				</div>
				<MainStacksSection />
			</article>
		</header>
	);
}

export default Home;
