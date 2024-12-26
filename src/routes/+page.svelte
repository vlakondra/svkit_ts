	
<svelte:options runes="{true}" />

<script lang="ts">

	let  props  = $props();

	let name: string = 'world!';

	function greet(name: string) {
		alert(`Hello, ${name}!`);
	}
	import Child from './child.svelte'

	let num =$state(1234)
</script>

<p>{JSON.stringify(props)}</p> 

 <!-- {#each props.data.rows2 as item}
	<p> {item.Name}</p>
{/each}  -->

<button onclick={(e: Event) => greet(e.target.innerText)}>
	{name as string}
</button>

<Child test={num}/>