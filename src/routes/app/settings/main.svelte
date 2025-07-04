<script>
	import { IsSettingOpen } from "./IsSettingsOpenStore";
</script>

<div
	class="fixed top-0 right-0 z-50 rounded-l-2xl transition {$IsSettingOpen
		? 'translate-x-0'
		: 'translate-x-full'} h-screen border-4 border-blue-400 bg-blue-300 p-3"
>
	<div class="flex justify-end">
		<button
			class="flex cursor-pointer items-center justify-center rounded-xl border-4 border-blue-400 p-1.5 text-lg text-blue-400 transition hover:border-blue-600 hover:text-blue-600"
			onclick={() => IsSettingOpen.set(false)}
			aria-label="close settings"
		>
			<i class="nf nf-fa-close"></i>
		</button>
	</div>
	<h1 class="text-4xl text-blue-600">Settings</h1>
	<p class="text-blue-400">Random setting for testing, i am needing to put this as why tf not?</p>
</div>
