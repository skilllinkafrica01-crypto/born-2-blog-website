-- Create comments table
CREATE TABLE public.comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID REFERENCES public.articles(id) ON DELETE CASCADE NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_approved BOOLEAN DEFAULT true
);

-- Enable RLS on comments
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read approved comments
CREATE POLICY "Anyone can read approved comments"
ON public.comments
FOR SELECT
USING (is_approved = true);

-- Policy: Anyone can submit comments
CREATE POLICY "Anyone can submit comments"
ON public.comments
FOR INSERT
WITH CHECK (true);

-- Policy: Admins can manage all comments
CREATE POLICY "Admins can manage comments"
ON public.comments
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Enable realtime for comments
ALTER PUBLICATION supabase_realtime ADD TABLE public.comments;