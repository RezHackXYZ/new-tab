<script>
	import { IsSettingOpen } from "./IsSettingsOpenStore";
</script>

<button
	class="fixed top-0 left-0 z-20 h-screen w-screen backdrop-blur-xl transition {$IsSettingOpen
		? 'hidden opacity-0'
		: 'visible opacity-100'}"
	onclick={() => IsSettingOpen.set(!$IsSettingOpen)}
	aria-label="close settings"
></button>
