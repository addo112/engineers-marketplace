-- ============================================================
-- BULLETPROOF REGISTRATION TRIGGER FIX
-- Copy and paste this into Supabase SQL Editor and click RUN
-- ============================================================

-- 1. Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();
DROP FUNCTION IF EXISTS handle_new_user();

-- 2. Create the bulletproof function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.email, ''),
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'),
    CASE 
      WHEN NEW.raw_user_meta_data->>'role' IN ('engineer', 'customer') 
      THEN NEW.raw_user_meta_data->>'role'
      ELSE 'customer'
    END
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    full_name = EXCLUDED.full_name,
    role = EXCLUDED.role,
    updated_at = NOW();

  -- If user registered as engineer, also create their engineer entry automatically!
  IF (NEW.raw_user_meta_data->>'role' = 'engineer') THEN
    INSERT INTO public.engineers (
      profile_id,
      title,
      bio,
      experience_years,
      hourly_rate,
      location,
      country,
      availability_status
    )
    VALUES (
      NEW.id,
      COALESCE(NEW.raw_user_meta_data->>'title', 'Professional Engineer'),
      COALESCE(NEW.raw_user_meta_data->>'bio', ''),
      COALESCE((NEW.raw_user_meta_data->>'experience_years')::INTEGER, 1),
      COALESCE((NEW.raw_user_meta_data->>'hourly_rate')::DECIMAL, 50.00),
      'Ghana',
      'Ghana',
      'available'
    )
    ON CONFLICT (profile_id) DO UPDATE SET
      title = EXCLUDED.title,
      bio = EXCLUDED.bio,
      experience_years = EXCLUDED.experience_years,
      hourly_rate = EXCLUDED.hourly_rate;
  END IF;

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Never let trigger failure block user registration!
    RETURN NEW;
END;
$$;

-- 3. Attach trigger to auth.users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
