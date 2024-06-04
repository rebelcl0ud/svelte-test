<script lang="ts">
	export let handleSubmit: (formData: {
		name: string;
		city: string;
		state: string;
		postalCode: string;
	}) => void;

	let name = '';
	let city = '';
	let state = '';
	let postalCode = '';

	const submitForm = (e: Event) => {
		const formData = { name, city, state, postalCode };
		handleSubmit(formData);
	};
</script>

<div class="search-container">
	<div class="search">
		<form on:submit|preventDefault={submitForm}>
			<label for="name">First Name:</label>
			<input type="text" id="name" bind:value={name} placeholder="Marlene" />
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
