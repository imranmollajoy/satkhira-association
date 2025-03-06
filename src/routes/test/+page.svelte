<script lang="ts">
	import {
		validateYearRange,
		validateEmail,
		hasErrors,
		errorMsgs
	} from '$lib/functions/validation';

	let yearRange = ''; // Stores the year range input
	let email = ''; // Stores the email input
	let errors = {
		yearRange: errorMsgs.sessionYear, // Stores year range validation error
		email: errorMsgs.email // Stores email validation error
	};
	let success = ''; // Stores success message

	function handleSubmit(event: Event) {
		event.preventDefault(); // Prevent form submission

		// Reset errors and success message
		errors = { yearRange: '', email: '' };
		success = '';
	}

	// Reactive statement to check if there are any errors
	$: isSubmitDisabled = hasErrors(errors);
</script>

<div class="container h-full mx-auto px-2">
	<form onsubmit={handleSubmit}>
		<!-- Year Range Field -->
		<label for="year-range" class="label">
			<span> Session (YYYY-YY):</span>
			<input
				type="text"
				id="year-range"
				bind:value={yearRange}
				placeholder="Enter year range (e.g. 2019-20)"
				oninput={() => {
					errors.yearRange = validateYearRange(yearRange) ? '' : errorMsgs.sessionYear;
				}}
				class:input-error={errors.yearRange}
				class="input"
			/>
		</label>
		{#if errors.yearRange}
			<p style="color: red;">{errors.yearRange}</p>
		{/if}

		<!-- Email Field -->
		<label for="email" class="label">
			<span> Email: </span>
			<input
				type="email"
				id="email"
				bind:value={email}
				placeholder="Enter email"
				oninput={() => {
					errors.email = validateEmail(email) ? '' : errorMsgs.email;
				}}
				class:input-error={errors.email}
				class="input"
			/>
		</label>
		{#if errors.email}
			<p style="color: red;">{errors.email}</p>
		{/if}

		<!-- Success Message -->
		{#if success}
			<p style="color: green;">{success}</p>
		{/if}
		<button type="submit" disabled={isSubmitDisabled} class="btn variant-filled mt-4">Submit</button
		>
	</form>
</div>
