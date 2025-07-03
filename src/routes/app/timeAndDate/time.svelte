<script>
	let now = new Date();
	let hours = now.getHours();
	let amPm = hours >= 12 ? "PM" : "AM";
	hours = now.getHours() % 12;
	hours = hours ? hours : 12;
	let minutes = String(now.getMinutes()).padStart(2, "0");

	setInterval(() => {
		now = new Date();
		hours = now.getHours();
		amPm = hours >= 12 ? "pm" : "am";
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = String(now.getMinutes()).padStart(2, "0");
	}, 1000);
</script>

<div>
	<span class="text-9xl text-blue-600">{hours}:{minutes}</span>
	<span class="text-6xl text-blue-400">{amPm}</span>
</div>
