<script>
	export let data;
</script>

<div class="mb-12 flex gap-4 flex-col md:flex-data-reverse">
	<!-- {#if data['Upload Image'] && data['Upload Image'].startsWith('http')} -->
	<img src="./images/{data.Name}.jpg" alt="" class="max-w-48" />
	<!-- {/if} -->
	<div class="w-full space-y-2 lg:space-y-4">
		<h2 class="h2">{data.Name}</h2>

		{#if data['Are you a_____?'] === 'Job Holder'}
			<h4 class="h4 text-surface-400">
				{data['What is your Job Rank?']} at {data['Company Or Organiation Name']}
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
			<span> {data.Faculty} ({data.Session})</span>
		</p>

		<!-- <p>{data.Village}, {data.Upazilla}</p> -->
		<div>
			<a href="mailto:{data.Email}" class="btn variant-filled-surface">
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
					><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
					></path><polyline points="22,6 12,13 2,6"></polyline></svg
				>
				Email
			</a>

			{#if data['Facebook Link']?.startsWith('http')}
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href={data['Facebook Link']} class="btn variant-soft-surface">
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
				</a>
			{/if}

			{#if data['WhatsApp Number']}
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="https://wa.me/{data['WhatsApp Number']}" class="btn variant-soft-surface">
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
						class="feather feather-phone"
						><path
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
						></path></svg
					>
				</a>
			{/if}
		</div>
	</div>
</div>
