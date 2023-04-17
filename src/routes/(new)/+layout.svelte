<script>
	import '../../app.css';
	import Background from '$lib/components/containers/Background.svelte';
	import SideBar from '$lib/components/containers/SideBar.svelte';
</script>

<Background>
	<SideBar />
	<slot />
</Background>
