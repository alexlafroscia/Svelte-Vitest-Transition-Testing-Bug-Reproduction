<script>
	import { fade } from 'svelte/transition';
	import SidePanel from './SidePanel.svelte';

	let visible = false;

	function toggleVisible() {
		visible = !visible;
	}
</script>

<button data-testid="button" on:click={toggleVisible}>click me</button>

<SidePanel show={visible} />
