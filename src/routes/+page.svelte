<script lang="ts">
	import { writable } from 'svelte/store';
	import { load } from './+page';
	import Card from './Card.svelte';
	import Search from './Search.svelte';

	let testingRes = writable([]);

	const handleSubmit = async (e) => {
		const res = await load({ fetch }, e);
		if (!res.ok) {
			throw new Error('failed to fetch');
		}
		const output = await res.json();

		testingRes.set(output.results || []);
	};
</script>

<div>
	<Search {handleSubmit} />
</div>
<div class="results">
	{#if $testingRes.length > 0}
		{#each $testingRes as r}
			<div class="result">
				<Card
					firstName={`${r.basic.first_name ? r.basic.first_name : r.basic.authorized_official_first_name}`}
					lastName={`${r.basic.last_name ? r.basic.last_name : r.basic.authorized_official_last_name}`}
					title={`${r.basic.authorized_official_title_or_position ? r.basic.authorized_official_title_or_position : ''}`}
					organization={`${r.basic.organization_name ? r.basic.organization_name : ''}`}
					address={`${r.addresses[1].address_1} - ${r.addresses[1].city}, ${r.addresses[1].state} ${r.addresses[1].postal_code}`}
					phone={`${r.addresses[1].telephone_number ? r.addresses[1].telephone_number : r.number}`}
				/>
			</div>
		{/each}
	{:else}
		<p>no results found</p>
	{/if}
</div>

<style>
	.results {
		display: flex;
		flex-direction: column;
		margin: 1rem 0;
	}
	p {
		text-align: center;
	}
</style>
