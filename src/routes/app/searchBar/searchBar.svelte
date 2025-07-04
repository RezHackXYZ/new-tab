<script>
	import { IsSearching, SearchingValue } from "./SearchBarStore";
	import Autofill from "./autofill.svelte";
	import Logo from "./logo.svelte";
</script>

<label
	class="z-30 flex items-center justify-center rounded-xl border-4 border-blue-400 bg-blue-300 px-5 py-2 transition has-[:focus]:-translate-y-48 has-[:focus]:scale-120 has-[:focus]:border-blue-600"
>
	<Logo />
	<input
		id="bar"
		type="text"
		class="peer w-[50vw] rounded-lg px-4 py-2 text-xl text-blue-500 focus:outline-none"
		placeholder="Search Some Shit..."
		onfocus={() => IsSearching.set(true)}
		onblur={() => IsSearching.set(false)}
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
