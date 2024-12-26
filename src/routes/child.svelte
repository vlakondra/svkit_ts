<svelte:options runes="{true}" />

<script lang="ts">


interface MyProps {
		test: number;
	}

	let {test}: MyProps = $props();
</script>

<h1>{test}</h1>
