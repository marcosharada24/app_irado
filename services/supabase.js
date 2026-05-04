import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kcymhxtdawyuwgrefipk.supabase.co';

const supabaseKey = 'sb_publishable_UFVHaI53RlUiSFWdGVefZg_M7dXIcoZ';

export const supabase = createClient(supabaseUrl, supabaseKey);