<script>
	import { IsSearching, SearchingValue, selectedIndex } from "./SearchBarStore";
	import { shortcuts } from "../shortcuts/shortcutsStore.js";

	let results = $state([]);

	$effect(() => {
		$SearchingValue;

		fetch(`app/searchBar/getSearchAutofillResults?q=${encodeURIComponent($SearchingValue)}`)
			.then((response) => response.json())
			.then((data) => {
				const num = Number($SearchingValue);

				if (!isNaN(num) && Number.isInteger(num) && num > 0 && $shortcuts[num - 1] !== undefined) {
					results = [`${$shortcuts[num - 1].name} - Shortcut ${[$SearchingValue]}`, ...data[1]];
				} else {
					results = data[1];
				}

				$selectedIndex = 0;
			})
			.catch((error) => console.error("Error fetching autofill data:", error));
	});
</script>

<svelte:window
	on:keydown={(event) => {
		if (event.key === "Escape") {
			results = [];
			$selectedIndex = 0;
			document.activeElement?.blur();
			event.preventDefault();
		} else if (event.key === "ArrowDown") {
			$selectedIndex = ($selectedIndex + 1) % results.length;
			event.preventDefault();
		} else if (event.key === "ArrowUp") {
			$selectedIndex = ($selectedIndex - 1 + results.length) % results.length;
			event.preventDefault();
		} else if (event.key === "Enter") {
			const num = Number($SearchingValue);

			if (
				!isNaN(num) &&
				$selectedIndex == 0 &&
				Number.isInteger(num) &&
				num > 0 &&
				$shortcuts[num - 1] !== undefined
			) {
				window.location.href = $shortcuts[num - 1].link;
			} else if (results[$selectedIndex]) {
				window.location.href = `https://www.google.com/search?q=${encodeURIComponent(results[$selectedIndex])}`;
			}

			event.preventDefault();
		}
	}}
/>

<div
	class="fixed top-2/5 z-30 flex min-h-10 w-[50vw] flex-col rounded-xl border-4 border-blue-500 bg-blue-300 px-5 py-2 transition-opacity {$IsSearching
		? 'visible opacity-100'
		: 'invisible opacity-0'}"
>
	{#if $SearchingValue.trim() == ""}
		<div class="text-center text-lg text-blue-400">Type something!</div>
	{:else if results.length > 0}
		{#each results as result, i}
			<div
				class="flex items-center gap-2 rounded-lg px-2 py-1 text-xl text-blue-400 transition-colors"
			>
				<i class="nf text-blue-500 {$selectedIndex == i ? 'nf-fa-square' : 'nf-fa-square_o'}"></i>
				<span>{result}</span>
			</div>
		{/each}
	{:else}
		<div class="text-center text-lg text-blue-400">No results found</div>
	{/if}
</div>
