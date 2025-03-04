<script lang="ts">
</script>

<div class="container h-full mx-auto px-2">
	<form method="POST" action="?/login">
		<label>
			Email
			<input name="email" type="email" />
		</label>
		<label>
			Password
			<input name="password" type="password" />
		</label>
		<button>Login</button>
		<button formaction="?/signup">Sign up</button>
	</form>
</div>
