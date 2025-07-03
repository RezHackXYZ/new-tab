<script>
	import Logo from "./logo.svelte";
</script>

<label
	id="bar"
	class="flex items-center justify-center rounded-xl border-4 border-blue-400 bg-blue-300 px-5 py-2 has-[:focus]:border-blue-600"
>
	<Logo />
	<input
		id="bar"
		type="text"
		class="w-[50vw] rounded-lg px-4 py-2 text-xl text-blue-500 focus:outline-none"
		placeholder="Search Some Shit..."
	/>
</label>
