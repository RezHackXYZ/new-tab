<script>
	import Logo from "./logo.svelte";
</script>

<div
	id="bar"
	class="flex items-center justify-center rounded-xl border-4 border-blue-400 bg-blue-300 px-5 py-2 transition has-[:focus]:-translate-y-7 has-[:focus]:scale-120 has-[:focus]:border-blue-600"
>
	<Logo />
	<input
		id="bar"
		type="text"
		class="peer z-30 w-[50vw] rounded-lg px-4 py-2 text-xl text-blue-500 focus:outline-none"
		placeholder="Search Some Shit..."
	/>
	
	<div class="fixed top-0 left-0 z-20 hidden h-full w-full backdrop-blur-2xl peer-focus:block bg-black"></div>
</div>

