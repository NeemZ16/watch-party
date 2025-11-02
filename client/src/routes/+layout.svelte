<script>
	import '../app.css'
	import favicon from '$lib/assets/favicon.svg';
	import { title } from 'process';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>watch party!</title>
</svelte:head>

{@render children?.()}
