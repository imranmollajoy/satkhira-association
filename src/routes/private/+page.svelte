<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { EventHandler } from 'svelte/elements';

	import type { PageData } from './$types';

	let { data } = $props();
	let { database, supabase, user } = $derived(data);

	import { TableHandler, Datatable, ThSort, ThFilter } from '@vincjo/datatables';

	const table = new TableHandler(database, { rowsPerPage: 10 });
	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (evt) => {
		evt.preventDefault();
		if (!evt.target) return;

		const form = evt.target as HTMLFormElement;

		const note = (new FormData(form).get('note') ?? '') as string;
		if (!note) return;

		const { error } = await supabase.from('notes').insert({ note });
		if (error) console.error(error);

		invalidate('supabase:db:database');
		form.reset();
	};
</script>

<h1>Hello! {user?.email}</h1>
<h2>Notes</h2>

<Datatable basic {table}>
	<table>
		<thead>
			<tr>
				<ThSort {table} field="name">Name</ThSort>
				<ThSort {table} field="last_name">Session</ThSort>
				<ThSort {table} field="edit">Edit</ThSort>
			</tr>
		</thead>
		<tbody>
			{#each table.rows as row}
				<tr>
					<td>{row.Name}</td>
					<td>{row.Session}</td>
					<td><button>Edit</button></td>
				</tr>
			{/each}
		</tbody>
	</table>
</Datatable>
<form onsubmit={handleSubmit}>
	<label>
		Add a note
		<input name="note" type="text" />
	</label>
</form>
