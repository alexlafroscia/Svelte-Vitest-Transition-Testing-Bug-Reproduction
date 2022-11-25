<script>
	import { fade } from 'svelte/transition';

	let visible = false;

	function toggleVisible() {
		visible = !visible;
	}
</script>

<button data-testid="button" on:click={toggleVisible}>click me</button>

{#if visible}
	<!--
        With the `transition:fade` on the following line, the test fails
        If it's removed, the tests pass again
        When the transition is present, the DOM node is not *actually* removed
    -->
	<p data-testid="paragraph" transition:fade>Some Text</p>
{/if}
