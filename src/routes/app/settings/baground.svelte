<script>
	import { IsSettingOpen } from "./IsSettingsOpenStore";
</script>

<button
	class="fixed top-0 left-0 z-40 h-screen w-screen backdrop-blur-xl transition {$IsSettingOpen
		? 'visible opacity-100'
		: 'hidden opacity-0'}"
	onclick={() => IsSettingOpen.set(false)}
	aria-label="close settings"
></button>
