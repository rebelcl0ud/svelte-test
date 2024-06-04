<script lang="ts">
	export let handleSubmit: (formData: {
		firstName: string;
		lastName: string;
		city: string;
		state: string;
		postalCode: string;
	}) => void;

	let firstName = '';
	let lastName = '';
	let city = '';
	let state = '';
	let postalCode = '';

	const submitForm = (e: Event) => {
		const formData = { firstName, lastName, city, state, postalCode };
		handleSubmit(formData);
	};
</script>

<div class="search-container">
	<div class="search">
		<form on:submit|preventDefault={submitForm}>
			<label for="first-name">First Name:</label>
			<input type="text" id="first-name" bind:value={firstName} placeholder="Marlene" />
			<label for="last-name">Last Name:</label>
			<input type="text" id="last-name" bind:value={lastName} placeholder="Enzo" />
			<label for="city">City:</label>
			<input type="text" id="city" bind:value={city} placeholder="Brooklyn" />
			<label for="state">State:</label>
			<input type="text" id="state" bind:value={state} placeholder="NY" />
			<label for="postal-code">Postal code:</label>
			<input type="text" id="postal-code" bind:value={postalCode} placeholder="11224" />
			<button type="submit">Search</button>
		</form>
	</div>
</div>

<style>
	.search-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 2rem;
	}
</style>
