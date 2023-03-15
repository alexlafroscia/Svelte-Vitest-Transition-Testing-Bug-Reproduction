<script>
	import { fade } from 'svelte/transition';

	export let show;
</script>

{#if show}
	<p data-testid="paragraph" out:fade>Some Text</p>
{/if}
