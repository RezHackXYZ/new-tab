<script>
	import SearchBar from "./searchBar/searchBar.svelte";
	import Settings from "./settings/settings.svelte";
	import Shortcuts from "./shortcuts/shortcuts.svelte";
	import TimeAndDate from "./timeAndDate/timeAndDate.svelte";
</script>

<div class="flex h-full flex-col">
	<div class="flex flex-1 flex-col items-center justify-center gap-2">
		<TimeAndDate />
		<SearchBar />
	</div>

	<Shortcuts />
</div>

<Settings />
