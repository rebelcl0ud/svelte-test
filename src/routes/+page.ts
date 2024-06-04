export async function load({ fetch }) {
	const res = await fetch(`/api/?version=2.1&city=miami`);

	if (!res.ok) {
		throw new Error('failed to fetch data from API');
	}

	const output = await res.json();

	return {
		output
	};
}
