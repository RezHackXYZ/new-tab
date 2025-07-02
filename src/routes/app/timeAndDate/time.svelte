<script>
	let now;
	let hours;
	let minutes;
	let amPm;

	setInterval(() => {
		now = new Date();
		hours = now.getHours();
		minutes = now.getMinutes();
		amPm = hours >= 12 ? "PM" : "AM";
		hours = hours % 12;
		hours = hours ? hours : 12;
	}, 1000);
</script>

<div>
	<span class="text-9xl text-blue-600">{hours}:{minutes}</span>
	<span class="text-6xl text-blue-400">{amPm}</span>
</div>
