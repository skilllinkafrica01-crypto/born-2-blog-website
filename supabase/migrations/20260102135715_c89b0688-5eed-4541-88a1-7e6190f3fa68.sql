-- Drop the insecure policy that allows any authenticated user to view submissions
DROP POLICY IF EXISTS "Only admins can view submissions" ON public.contact_submissions;

-- Create a proper admin-only policy using the has_role function
CREATE POLICY "Only admins can view submissions"
ON public.contact_submissions
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));