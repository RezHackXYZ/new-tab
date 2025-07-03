<script>
	import Logo from "./logo.svelte";
</script>

<div class="flex items-center justify-center rounded-xl border-4 border-blue-400 bg-blue-300 px-5 py-2 has-[:focus]:border-blue-600 transition ">
	<Logo />
    <input type="text" class="w-[50vw] rounded-lg text-blue-500 px-4 py-2 text-xl focus:outline-none" placeholder="Search Some Shit..." />
</div>
