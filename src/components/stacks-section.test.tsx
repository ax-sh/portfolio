import { render, screen } from "@testing-library/react";

import { StacksSection } from "./stacks-section";

describe(StacksSection.name, () => {
	it("Should render", () => {
		render(
			<main>
				<StacksSection label="foo">child</StacksSection>
			</main>
		);
		expect.hasAssertions();
		const main = screen.getByRole("main");
		expect(main).toBeDefined();
		// const o = within(main);
	});
});
