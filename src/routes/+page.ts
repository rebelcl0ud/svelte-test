export async function load({ fetch }, formData) {
	if (formData) {
		const { firstName, lastName, city, state, postalCode } = formData;

		const url = `/api/?version=2.1&city=${city}&state=${state}&postal_code=${postalCode}&first_name=${firstName}&last_name=${lastName}`;
		console.log('coming from load', url);

		const res = await fetch(url);

		return res;
	} else {
		console.log('check load');
	}
}
