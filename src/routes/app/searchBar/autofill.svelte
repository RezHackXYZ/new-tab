<script>
	import { IsSearching, SearchingValue } from "./SearchBarStore";

	let results = $state([]);

	$effect(() => {
		$SearchingValue;

		fetch(`app/searchBar/getSearchAutofillResults?q=${encodeURIComponent($SearchingValue)}`)
			.then((response) => response.json())
			.then((data) => {
				results = data[1];
			})
			.catch((error) => console.error("Error fetching autofill data:", error));
	});
</script>

<div
	class="fixed top-2/5 z-30 flex flex-col h-10 w-[50vw] rounded-xl border-4 border-blue-500 bg-blue-300 px-5 py-2 transition-opacity {$IsSearching
		? 'visible opacity-100'
		: 'invisible opacity-0'}"
>
	{#each results as result}
		<div class="">{result}</div>
	{/each}
</div>
