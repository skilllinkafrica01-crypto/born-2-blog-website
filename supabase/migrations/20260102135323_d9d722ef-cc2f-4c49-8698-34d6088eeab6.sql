-- Drop the security definer view and recreate with security invoker (default)
DROP VIEW IF EXISTS public.comments_public;

CREATE VIEW public.comments_public 
WITH (security_invoker = true) AS
SELECT 
  id,
  article_id,
  author_name,
  content,
  created_at,
  is_approved
FROM public.comments
WHERE is_approved = true;

-- Grant access to the view
GRANT SELECT ON public.comments_public TO anon, authenticated;