import { SupabaseClient } from '@supabase/supabase-js';
import { Database, Tables} from './supabase';

export type TypedSupabaseClient = SupabaseClient<Database>
export type ReportType = Tables<"report_types">;
export type ReportTitle = Tables<"report_titles">