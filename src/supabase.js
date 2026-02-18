import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fnxjgguatjtwxgovaasm.supabase.co";
const supabaseAnonKey = "sb_publishable_l2dOflUiMCyitQdSP0CkmQ_IW_v7qBF";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
