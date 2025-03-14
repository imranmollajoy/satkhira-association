import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:database');
	const { data } = await supabase.from('database').select('*');
	return { database: data ?? [] };
};
