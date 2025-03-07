<script lang="ts">
	import type { PageData } from './$types';
	import { invalidate } from '$app/navigation';
	let { data }: { data: PageData } = $props();
	let { database, supabase, user } = $derived(data);

	import {
		validateYearRange,
		validateEmail,
		hasErrors,
		errorMsgs
	} from '$lib/functions/validation';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let errors = $state({
		yearRange: errorMsgs.sessionYear, // Stores year range validation error
		email: errorMsgs.email // Stores email validation error
	});

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (event) => {
		event.preventDefault(); // Prevent form submission
		if (!event.target) return;

		const form = event.target as HTMLFormElement;
		// Reset errors and success message
		errors = { yearRange: '', email: '' };

		const { error } = await supabase.from('database').insert({ formData });
		if (error) console.error(error);

		invalidate('supabase:db:database');
		form.reset();
	};

	// Reactive statement to check if there are any errors
	// let isSubmitDisabled = $state(hasErrors(errors));
	let isSubmitDisabled = false;

	let selectedProfession = $state(0);

	const faculties = [
		'Agriculture',
		'ANSVM',
		'Business Administration',
		'Computer Science and Engineering',
		'ESDM',
		'Fisheries',
		'Law and Land Administration',
		'Nutrition and Food Science'
	];
	let formData = $state({
		Name: '',
		Faculty: 'Agriculture',
		Session: '',
		Profession: 'Student',
		JobRank: '',
		JobOrganization: '',
		Village: '',
		Upazilla: '',
		Email: '',
		WhatsApp: '',
		Facebook: ''
	});
</script>

<div class="container h-full mx-auto px-2">
	<form onsubmit={handleSubmit} class="form flex flex-col gap-4 max-w-[768px] mx-auto space-y-4">
		<h2 class="h2">Required</h2>
		<label class="label" for="name">
			<span>Name</span>
			<input
				type="text"
				placeholder="Enter name"
				class="input"
				required
				id="name"
				bind:value={formData.Name}
			/></label
		>

		<label for="faculty" class="label">
			<span>Faculty</span>
			<select id="faculty" class="input" bind:value={formData.Faculty} required>
				{#each faculties as f}
					<option value={f}>{f}</option>
				{/each}
			</select></label
		>
		<!-- Year Range Field -->
		<label for="year-range" class="label">
			<span> Session (YYYY-YY):</span>
			<input
				type="text"
				id="year-range"
				bind:value={formData.Session}
				placeholder="Enter year range (e.g. 2019-20)"
				oninput={() => {
					errors.yearRange = validateYearRange(formData.Session) ? '' : errorMsgs.sessionYear;
				}}
				class:input-error={errors.yearRange}
				class="input"
				required
			/>
			{#if errors.yearRange}
				<p style="color: red;">{errors.yearRange}</p>
			{/if}
		</label>

		<RadioGroup>
			<RadioItem bind:group={formData.Profession} name="student" value="Student">Student</RadioItem>
			<RadioItem bind:group={formData.Profession} name="job" value="Job Holder"
				>Job Holder</RadioItem
			>
			<RadioItem bind:group={formData.Profession} name="teacher" value="Teacher">Teacher</RadioItem>
		</RadioGroup>
		{#if formData.Profession !== 'Student'}
			<label class="label">
				<span>Position</span>
				<input
					type="text"
					placeholder="Enter job position"
					class="input"
					bind:value={formData.JobRank}
				/></label
			>
			<label class="label">
				<span>Institute/Organization</span>
				<input
					type="text"
					placeholder="Enter job place"
					class="input"
					bind:value={formData.JobOrganization}
				/></label
			>
		{/if}
		<h2 class="h2">Optional</h2>
		<label for="village" class="label">
			<span> Village: </span>
			<input
				type="text"
				id="village"
				placeholder="Village name"
				class="input"
				bind:value={formData.Village}
			/>
		</label>
		<label for="upazilla" class="label">
			<span> Upazilla: </span>
			<input
				type="text"
				id="upazilla"
				placeholder="Upazilla name"
				class="input"
				bind:value={formData.Upazilla}
			/>
		</label>
		<!-- Email Field -->
		<label for="email" class="label">
			<span> Email: </span>
			<input
				type="email"
				id="email"
				bind:value={formData.Email}
				placeholder="Enter email"
				oninput={() => {
					errors.email = validateEmail(formData.Email) ? '' : errorMsgs.email;
				}}
				class:input-error={errors.email}
				class="input"
			/>
			{#if errors.email}
				<p style="color: red;">{errors.email}</p>
			{/if}
		</label>

		<label for="whatsapp" class="label">
			<span> WhatsApp: </span>
			<input
				type="number"
				id="whatsapp"
				placeholder="Enter WhatsApp number"
				class="input"
				bind:value={formData.WhatsApp}
			/>
		</label>
		<label for="fb" class="label">
			<span> Facebook: </span>
			<input
				type="number"
				id="fb"
				placeholder="Enter Facebook link"
				class="input"
				bind:value={formData.Facebook}
			/>
		</label>
		<button type="submit" disabled={isSubmitDisabled} class="btn variant-filled mt-4">Submit</button
		>
	</form>
</div>
