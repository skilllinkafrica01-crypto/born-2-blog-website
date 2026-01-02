-- Create a secure view for public comments that excludes email
CREATE OR REPLACE VIEW public.comments_public AS
SELECT 
  id,
  article_id,
  author_name,
  content,
  created_at,
  is_approved
FROM public.comments
WHERE is_approved = true;

-- Grant access to the view for anonymous and authenticated users
GRANT SELECT ON public.comments_public TO anon, authenticated;

-- Drop the old permissive public read policy
DROP POLICY IF EXISTS "Anyone can read approved comments" ON public.comments;

-- Create a new policy that only allows admins to read all comment data (including emails)
CREATE POLICY "Only admins can read all comment data"
ON public.comments
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));