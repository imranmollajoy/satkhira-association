<script lang="ts">
</script>

<div class="container h-full mx-auto px-2">
	<div class="flex items-center justify-center">
		<form
			method="POST"
			action="?/login"
			class="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
		>
			<label class="label">
				Email
				<input
					name="email"
					type="email"
					class="w-full px-3 py-2 border border-gray-300 rounded-md"
					required
				/>
			</label>
			<label class="label">
				Password
				<input
					name="password"
					type="password"
					class="w-full px-3 py-2 border border-gray-300 rounded-md"
					required
				/>
			</label>
			<button class="btn variant-filled-primary">Login</button>
		</form>
	</div>
</div>
