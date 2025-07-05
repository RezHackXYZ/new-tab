<script>
	import { onMount } from "svelte";
	import { IsSearching, SearchingValue, selectedIndex } from "./SearchBarStore";
	import Autofill from "./autofill.svelte";
	import Logo from "./logo.svelte";
	let bar;

	onMount(() => {
		bar.focus();
	});
</script>

<svelte:window
	on:keydown={(event) => {
		if (
			event.key === "Enter" ||
			event.key === "/" ||
			event.key === "k" ||
			event.key === "f" ||
			event.key === "K" ||
			event.key === "F"
		) {
			bar.focus();
			event.preventDefault();
		} 
	}}
/>

<label
	class="z-30 flex items-center justify-center rounded-xl border-4 border-blue-400 bg-blue-300 px-5 py-2 transition has-[:focus]:-translate-y-48 has-[:focus]:scale-120 has-[:focus]:border-blue-600"
>
	<Logo />
	<input
		id="bar"
		type="text"
		bind:this={bar}
		class="peer w-[50vw] rounded-lg px-4 py-2 text-xl text-blue-500 focus:outline-none"
		placeholder="Search Some Shit..."
		onfocus={() => {
			IsSearching.set(true);
			$selectedIndex = 0;
			$SearchingValue = "";
		}}
		onblur={() => {
			IsSearching.set(false);
			$SearchingValue = "";
			$selectedIndex = 0;
		}}
		bind:value={$SearchingValue}
	/>
</label>

<Autofill />

<div
	id="bg"
	class="fixed top-0 left-0 z-20 h-full w-full backdrop-blur-2xl transition {$IsSearching
		? 'block opacity-100'
		: 'invisible opacity-0'}"
></div>
