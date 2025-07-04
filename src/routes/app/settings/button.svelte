<script>
	import { IsSettingOpen } from "./IsSettingsOpenStore";
</script>

<button
	aria-label="open settings"
	class="fixed top-3 right-3 flex cursor-pointer items-center justify-center rounded-xl border-4 border-blue-300 p-2 text-2xl text-blue-300 transition hover:border-blue-500 hover:text-blue-500"
	onclick={() => IsSettingOpen.set(true)}
>
	<i class="nf nf-fa-gear"></i>
</button>
