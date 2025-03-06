<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	let { data } = $props();
	const { sheetData, kritiStudent } = data;
	let tabSet: number = $state(0);
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto px-2">
	<h1 class="h1 my-8">Students Association Of Satkhira</h1>

	<!-- <div class="table-container">
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>WhatsApp</th>
					<th>Upazilla</th>
					<th>Village</th>
					<th>Faculty</th>
					<th>Session</th>
					<th>Profession</th>
					<th>Facebook</th>
					<th>Job Rank</th>
					<th>Job Institute</th>
				</tr>
			</thead>
			<tbody>
				{#each sheetData as row, i}
					<tr>
						<td>{row.Name}</td>
						<td>{row.Email}</td>
						<td>{row['WhatsApp Number']}</td>
						<td>{row.Upazilla}</td>
						<td>{row.Village}</td>
						<td>{row.Faculty}</td>
						<td>{row.Session}</td>
						<td>{row['Are you a_____?']}</td>
						<td>{row['Facebook Link']}</td>
						<td>{row['What is your Job Rank?']}</td>
						<td>{row['Company Or Organiation Name']}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div> -->

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
						<div class="mb-12 flex gap-4 flex-col md:flex-row-reverse">
							<!-- {#if row['Upload Image'] && row['Upload Image'].startsWith('http')} -->
							<img src="./images/{row.Name}.jpg" alt="" class="max-w-48" />
							<!-- {/if} -->
							<div class="w-full space-y-2 lg:space-y-4">
								<h2 class="h2">{row.Name}</h2>

								{#if row['Are you a_____?'] === 'Job Holder'}
									<h4 class="h4 text-surface-400">
										{row['What is your Job Rank?']} at {row['Company Or Organiation Name']}
									</h4>
								{/if}
								<p class="flex gap-2">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-book"
											><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path
												d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
											></path></svg
										></span
									>
									<span> {row.Faculty} ({row.Session})</span>
								</p>

								<!-- <p>{row.Village}, {row.Upazilla}</p> -->
								<div>
									<a href="mailto:{row.Email}" class="btn variant-filled-surface">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-mail mr-2"
											><path
												d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
											></path><polyline points="22,6 12,13 2,6"></polyline></svg
										>
										Email
									</a>

									{#if row['Facebook Link']?.startsWith('http')}
										<a href={row['Facebook Link']} class="btn variant-soft-surface">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="feather feather-facebook mr-2"
												><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
												></path></svg
											>
											Facebook
										</a>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				{:else if tabSet === 1}
					{#each kritiStudent as row}
						<div class="mb-12 flex gap-4 flex-col md:flex-row-reverse">
							<!-- {#if row['Upload Image'] && row['Upload Image'].startsWith('http')} -->
							<img src="./images/{row.Name}.jpg" alt="" class="max-w-48" />
							<!-- {/if} -->
							<div class="w-full space-y-2">
								<h2 class="h2">{row.Name}</h2>

								{#if row['Are you a_____?'] === 'Job Holder'}
									<h4 class="h4 text-surface-400">
										{row['What is your Job Rank?']} at {row['Company Or Organiation Name']}
									</h4>
								{/if}
								<p class="flex gap-2">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-book"
											><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path
												d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
											></path></svg
										></span
									>
									<span> {row.Faculty} ({row.Session})</span>
								</p>

								<!-- <p>{row.Village}, {row.Upazilla}</p> -->

								<a href="mailto:{row.Email}" class="btn variant-filled-surface">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-mail mr-2"
										><path
											d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
										></path><polyline points="22,6 12,13 2,6"></polyline></svg
									>
									Email
								</a>

								{#if row['Facebook Link']?.startsWith('http')}
									<a href={row['Facebook Link']} class="btn variant-soft-surface">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-facebook mr-2"
											><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
											></path></svg
										>
										Facebook
									</a>
								{/if}
							</div>
						</div>
					{/each}
				{:else if tabSet === 2}
					No data
				{/if}
			{/snippet}
		</TabGroup>
	</div>
</div>

<style>
	svg {
		stroke-opacity: 0.8;
	}
</style>
