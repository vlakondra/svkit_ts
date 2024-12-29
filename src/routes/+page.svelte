	
<svelte:options runes="{true}" />

<script lang="ts">

	let  props  = $props();

	let name: string = 'world!';

	function greet(name: string) {
		alert(`Hello, ${name}!`);
	}
	import Child from './child.svelte'

	let num =$state(1234)

    import CodeMirror from "svelte-codemirror-editor";
    import { sql } from "@codemirror/lang-sql";
	import { oneDark } from "@codemirror/theme-one-dark";

    let value = $state("");


</script>
<!-- {Object.getOwnPropertyNames(CodeMirror)}
<h3>{JSON.stringify(Object.getOwnPropertyDescriptors(CodeMirror))}</h3> -->

<!-- https://www.npmjs.com/package/svelte-codemirror-editor -->
<CodeMirror bind:value tabSize={10} lang={sql()} theme={oneDark}
editable!=false
readonly!=true
placeholder='select qwerty'
styles={{
	"&": {
		width: "500px",
		maxWidth: "70%",
		fontSize: "20px",
		height: "5rem",
	},
}}
/>
<p>{value}</p>
<p>{JSON.stringify(props)}</p> 

 <!-- {#each props.data.rows2 as item}
	<p> {item.Name}</p>
{/each}  -->

<button onclick={(e: Event) => greet(e.target.innerText)}>
	{name as string}
</button>

<Child test={num}/>