<script>
	import { onMount } from "svelte";
	import { shortcuts } from "./shortcutsStore.js";

	onMount(() => {
		shortcuts.set(JSON.parse(localStorage.getItem("shortcuts")) || $shortcuts);
	});
</script>

<div class="flex justify-center gap-3 p-3">
	{#each $shortcuts as shortcut}
		<a class="group overflow-y-hidden" href={shortcut.link}>
			<button
				class="flex h-15 w-15 translate-y-7 cursor-pointer items-center justify-center rounded-xl border-4 border-blue-400 bg-blue-300 transition group-hover:translate-0"
			>
				<img
					class="h-10 w-10"
					alt="shortcut logo for {shortcut.name}"
					src="https://cdn.simpleicons.org/{shortcut.logo}/2b7fff"
				/>
			</button>
			<span
				class="block translate-y-7 text-center text-lg text-blue-500 transition group-hover:translate-0"
			>
				{shortcut.name}
			</span>
		</a>
	{/each}
</div>
