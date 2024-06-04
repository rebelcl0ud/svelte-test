export async function load({ fetch }, formData) {
	if (formData) {
		const { name, city, state, postalCode } = formData;

		const url = `/api/?version=2.1&city=${city}&state=${state}&postal_code=${postalCode}&name=${name}`;
		console.log('coming from load', url);

		const res = await fetch(url);

		return res;
	} else {
		const res = await fetch(`/api/?version=2.1&city=miami`);
		const output = await res.json();
		console.log('output2', output);
		return {
			output
		};
	}
}
