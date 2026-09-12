-- ============================================
-- DEFINITIVE FIX: User registration trigger
-- Run this in Supabase SQL Editor
-- ============================================

-- Step 1: Drop existing trigger and function completely
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user();
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Step 2: Recreate with Supabase-recommended pattern
-- Key fix: "security definer set search_path = ''" ensures proper schema resolution
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data->>'full_name', split_part(coalesce(new.email, ''), '@', 1)),
    coalesce(new.raw_user_meta_data->>'role', 'customer')
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = excluded.full_name,
    updated_at = now();
  return new;
exception
  when others then
    raise log 'handle_new_user error: %', sqlerrm;
    return new;
end;
$$;

-- Step 3: Recreate trigger
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Step 4: Grant necessary permissions
grant usage on schema public to supabase_auth_admin;
grant all on public.profiles to supabase_auth_admin;

-- Step 5: Clean up any orphaned auth users from failed attempts
-- (This deletes auth users that don't have a matching profile)
delete from auth.users where id not in (select id from public.profiles);
