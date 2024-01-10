<script>
	import Auth from '$lib/auth/auth.svelte';
</script>

<div class="w-full h-screen bg-gradient-to-r from-[#000428] to-[#000046] flex items-center justify-center">
	<Auth />
</div>

<style>
    .container {
        min-height: 100vh;
        background: linear-gradient(to right, #000428, #000046);
        color: white;
        position: relative;
        display: flex;
        flex-direction: column;
        /* font-family: 'Ostrich-Sans-black', Courier, monospace; */
    }
</style>
