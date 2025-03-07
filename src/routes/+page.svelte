<script lang="ts">
	import InfoCard from '$lib/components/InfoCard.svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	let { data } = $props();
	const { sheetData, kritiStudent } = data;
	let tabSet: number = $state(0);
</script>

<div class="container h-full mx-auto px-2">
	<h1 class="h1 my-8">Students Association Of Satkhira</h1>
	<div class=" max-w-[768px] mx-auto">
		<TabGroup>
			<Tab bind:group={tabSet} name="tab1" value={0}>
				<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
				<span>শিক্ষার্থী</span>
			</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>কৃতি শিক্ষার্থী</Tab>
			<Tab bind:group={tabSet} name="tab3" value={2}>শিক্ষক</Tab>
			<!-- Tab Panels --->
			{#snippet panel()}
				{#if tabSet === 0}
					{#each sheetData as row}
						<InfoCard data={row} />
					{/each}
				{:else if tabSet === 1}
					{#each kritiStudent as row}
						<InfoCard data={row} />
					{/each}
				{:else if tabSet === 2}
					No data
				{/if}
			{/snippet}
		</TabGroup>
	</div>
</div>
