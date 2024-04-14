import { object, string } from "zod";

export const EnvironmentVariables = object({
  NEXT_PUBLIC_SUPABASE_URL: string(),
  NEXT_PUBLIC_SUPABASE_KEY : string()
}).parse({ 
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY,
})