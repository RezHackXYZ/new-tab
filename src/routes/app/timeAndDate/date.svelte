<script>
	function getOrdinal(n) {
		if (n > 3 && n < 21) return "th";
		switch (n % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	}

	let now = new Date();
	let day = `${now.getDate()}${getOrdinal(now.getDate())}`;
	let month = now.toLocaleString("en-US", { month: "short" });
	let year = now.getFullYear();

	setInterval(() => {
		now = new Date();
		day = `${now.getDate()}${getOrdinal(now.getDate())}`;
		month = now.toLocaleString("en-US", { month: "short" });
		year = now.getFullYear();
	}, 1000);
</script>

<span class="text-3xl text-blue-400">{day} {month} {year}</span>
