import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
    console.error(
      'Supabase URL is not configured. Set NEXT_PUBLIC_SUPABASE_URL in your environment variables.'
    );
  }

  if (!supabaseKey || supabaseKey.includes('placeholder')) {
    console.error(
      'Supabase Anon Key is not configured. Set NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment variables.'
    );
  }

  return createBrowserClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseKey || 'placeholder-key'
  );
}
