import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";
import { Dropdown } from "@qwik-ui/headless";

export default component$(() => {
	return (
		<Dropdown.Root>
			<Dropdown.Trigger class="dropdown-trigger">Git Settings</Dropdown.Trigger>
			<Dropdown.Popover class="dropdown-popover" gutter={8}>
				<div>I am an item!</div>
			</Dropdown.Popover>
		</Dropdown.Root>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
