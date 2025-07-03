<script>
	import SearchBar from "./searchBar/searchBar.svelte";
	import Shortcuts from "./shortcuts/shortcuts.svelte";
	import TimeAndDate from "./timeAndDate/timeAndDate.svelte";
</script>

<div class="flex flex-col h-full">
	<div class="flex flex-1 flex-col items-center justify-center gap-2">
		<TimeAndDate />
		<SearchBar />
	</div>

	<Shortcuts />
</div>

