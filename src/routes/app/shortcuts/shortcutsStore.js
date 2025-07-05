import { writable } from "svelte/store";

export let shortcuts = writable([
	{
		name: "Github",
		logo: "github",
		link: "https://github.com",
	},
	{
		name: "Gmail",
		logo: "gmail",
		link: "https://mail.google.com",
	},
	{
		name: "Figma",
		logo: "figma",
		link: "https://figma.com",
	},
	{
		name: "Slack",
		logo: "slack",
		link: "https://slack.com",
	},
]);
