<script>
	import '../styles.css';
</script>

<nav>Health Care Providers</nav>

<main>
	<slot />
</main>

<footer>
	<p>
		Data provided by: <a href="https://npiregistry.cms.hhs.gov/api-page">NPPES NPI Registry</a>
	</p>
</footer>

<style>
	nav {
		display: flex;
		width: 100%;
		height: 5rem;
		align-items: center;
		justify-content: center;
		background-color: #4b93fe;
		color: white;
	}
	main {
		flex: 1;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	a:hover {
		color: yellow;
	}
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 5rem;
		background-color: #4b93fe;
		color: white;
	}
</style>
