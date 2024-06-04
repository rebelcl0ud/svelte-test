<script lang="ts">
	export let name: string;
	export let organization: string;
	export let title: string;
	export let phone: string;
	export let address: string;
</script>

<div class="card">
	<div class="card-content">
		<h2>{name}</h2>
		<p>{title}</p>
		<p>{organization}</p>
		<p>{address}</p>
		<p>{phone}</p>
	</div>
</div>

<style>
	.card {
		border: 1px solid #ccc;
		border-radius: 1rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		max-width: 400px;
		margin: 1rem 3rem;
	}
	h2 {
		font-size: 1rem;
	}
	.card-content {
		padding: 0 1rem;
	}
</style>
