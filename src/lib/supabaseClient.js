import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://gbwsnorhirpjshilkhpj.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdid3Nub3JoaXJwanNoaWxraHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNzM0MzksImV4cCI6MjA1NjY0OTQzOX0._9yAb10n-JdIAUOwblmfWGV-AlcO96Bc7cXtrU2QDCk'
);
