<script lang="ts">
	import '../../app.css';
	import SideBar from '$lib/components/containers/SideBar.svelte';
</script>

<div class="bg-white w-full h-full">
	<SideBar />
	<slot />
</div>
