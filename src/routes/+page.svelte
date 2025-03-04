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

	<div>
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
							<div class="space-y-1 my-8 flex gap-4 flex-col md:flex-row-reverse">
								{#if row['Upload Image'] && row['Upload Image'].startsWith('http')}
									<img src="./images/{row.Name}.jpg" alt="" class="max-w-48" />
								{/if}
								<div class="w-full">
									<h2 class="h2">{row.Name}</h2>
									<p>{row.Village}, {row.Upazilla}</p>
									<p><b>Faculty: </b>{row.Faculty} ({row.Session})</p>

									{#if row['Are you a_____?'] === 'Job Holder'}
										<b>Profession: </b>{row['What is your Job Rank?']} at {row[
											'Company Or Organiation Name'
										]}
									{/if}

									<p><b>Email: </b>{row.Email}</p>

									{#if row['Facebook Link']?.startsWith('http')}
										<p>
											<a href={row['Facebook Link']}>Facebook↗️</a>
										</p>
									{/if}
								</div>
							</div>
							<hr />
						{/each}
					{:else if tabSet === 1}
						{#each kritiStudent as row}
							<div class="space-y-1 my-8 flex gap-4 flex-col md:flex-row-reverse">
								{#if row['Upload Image'] && row['Upload Image'].startsWith('http')}
									<img src="./images/{row.Name}.jpg" alt="" class="max-w-48" />
								{/if}
								<div class="w-full">
									<h2 class="h2">{row.Name}</h2>
									<p>{row.Village}, {row.Upazilla}</p>
									<p><b>Faculty: </b>{row.Faculty} ({row.Session})</p>
									<p>
										<b>Profession: </b>

										{#if row['What is your Job Rank?']}
											{row['What is your Job Rank?']} at {row['Company Or Organiation Name']}
										{/if}
									</p>
									<p><b>Email: </b>{row.Email}</p>

									{#if row['Facebook Link']?.startsWith('http')}
										<p>
											<a href={row['Facebook Link']}>Facebook↗️</a>
										</p>
									{/if}
								</div>
							</div>
							<hr />
						{/each}
					{:else if tabSet === 2}
						No data
					{/if}
				
					{/snippet}
		</TabGroup>
	</div>
</div>
