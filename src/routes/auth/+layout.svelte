<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<header class="py-8 text-center">
	<nav>
		<a href="/">Home</a>
	</nav>
</header>

{@render children()}
