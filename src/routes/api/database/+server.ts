// src/routes/api/data.json.js
import { supabase } from '$lib/supabaseClient';

export async function GET() {
	const { data, error } = await supabase.from('data').select('*');

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
	console.log(data);

	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' }
	});
}
