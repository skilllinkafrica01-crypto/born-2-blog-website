-- Add unique constraint on source_url for upsert
ALTER TABLE public.articles ADD CONSTRAINT articles_source_url_key UNIQUE (source_url);