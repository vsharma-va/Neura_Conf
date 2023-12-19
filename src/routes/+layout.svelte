<script>
	import Header from '$lib/header/header.svelte';
	import '../app.pcss';
	import { SvelteUIProvider } from '@svelteuidev/core';
	import 'aos/dist/aos.css';
	import AOS from "aos";
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<Header></Header>
	<slot />
</SvelteUIProvider>
