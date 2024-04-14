import { createClient } from "@supabase/supabase-js";
import { EnvironmentVariables } from "../internals/environment-variables";


export const supabase = createClient(EnvironmentVariables.NEXT_PUBLIC_SUPABASE_URL, 
  EnvironmentVariables.NEXT_PUBLIC_SUPABASE_KEY)