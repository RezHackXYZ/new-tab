<script>
	import SearchBar from "./searchBar/searchBar.svelte";
	import Settings from "./settings/settings.svelte";
	import Shortcuts from "./shortcuts/shortcuts.svelte";
	import TimeAndDate from "./timeAndDate/timeAndDate.svelte";

	import { onMount } from "svelte";
	let screenWidth = undefined;

	onMount(() => {
		screenWidth = window.innerWidth;
	});
</script>

{#if screenWidth == undefined}
	<div class="flex h-full flex-col items-center justify-center gap-2">
		<p class="text-2xl text-blue-500">Loading...</p>
	</div>
{:else if screenWidth < 750}
	<div class="flex h-full flex-col items-center justify-center gap-2 p-20">
		<p class="text-2xl text-blue-500">
			Sadly this app currently does not have support for mobile devices
		</p>
	</div>
{:else}
	<div class="flex h-full flex-col">
		<div class="flex flex-1 flex-col items-center justify-center gap-2">
			<TimeAndDate />
			<SearchBar />
		</div>

		<Shortcuts />
	</div>

	<Settings />
{/if}
