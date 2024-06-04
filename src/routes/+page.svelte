<script lang="ts">
	import type { ProviderList } from '$lib/types';
	import Card from './Card.svelte';
	export let data;

	console.log({ data });

	const results = data.output.results.map((result: ProviderList) => {
		const basicInfo = result.basic;
		const location = result.addresses[1];

		return {
			basicInfo,
			location
		};
	});
</script>

<div class="results">
	{#if results.length > 0}
		{#each results as r}
			<div class="result">
				<Card
					name={`${r.basicInfo.authorized_official_first_name} ${r.basicInfo.authorized_official_last_name}`}
					title={`${r.basicInfo.authorized_official_title_or_position}`}
					organization={`${r.basicInfo.organization_name}`}
					address={`${r.location.address_1} - ${r.location.city}, ${r.location.state} ${r.location.postal_code.substring(0, 5)}`}
					phone={`${r.location.telephone_number}`}
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
