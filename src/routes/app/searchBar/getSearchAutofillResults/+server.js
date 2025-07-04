export async function GET({ url }) {
	const query = encodeURIComponent(url.searchParams.get("q"));

	try {
		const res = await fetch(
			`https://suggestqueries.google.com/complete/search?client=firefox&q=${query}`,
			{
				headers: {
					"User-Agent": "Mozilla/5.0",
				},
			},
		);

		const data = await res.json();

		return new Response(JSON.stringify(data), {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: "Failed to fetch" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
