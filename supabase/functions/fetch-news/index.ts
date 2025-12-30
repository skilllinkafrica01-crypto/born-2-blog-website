import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const newsApiKey = Deno.env.get('NEWSAPI_KEY');
    if (!newsApiKey) {
      throw new Error('NEWSAPI_KEY not configured');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { query = 'Sierra Leone', category = 'general' } = await req.json().catch(() => ({}));

    console.log(`Fetching news for query: ${query}, category: ${category}`);

    // Fetch Sierra Leone news
    const sierraLeoneUrl = `https://newsapi.org/v2/everything?q=Sierra+Leone&sortBy=publishedAt&pageSize=10&apiKey=${newsApiKey}`;
    const sierraLeoneResponse = await fetch(sierraLeoneUrl);
    const sierraLeoneData = await sierraLeoneResponse.json();

    // Fetch world news
    const worldUrl = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=10&apiKey=${newsApiKey}`;
    const worldResponse = await fetch(worldUrl);
    const worldData = await worldResponse.json();

    if (sierraLeoneData.status === 'error') {
      console.error('Sierra Leone API error:', sierraLeoneData.message);
    }
    if (worldData.status === 'error') {
      console.error('World news API error:', worldData.message);
    }

    const articles = [];

    // Process Sierra Leone articles
    if (sierraLeoneData.articles) {
      for (const article of sierraLeoneData.articles) {
        if (article.title && article.title !== '[Removed]') {
          articles.push({
            title: article.title,
            excerpt: article.description || '',
            content: article.content || article.description || '',
            category: 'Sierra Leone',
            author: article.author || 'News Agency',
            image_url: article.urlToImage,
            source_url: article.url,
            source_name: article.source?.name || 'Unknown',
            published_at: article.publishedAt,
            is_published: true,
            is_featured: false,
          });
        }
      }
    }

    // Process world articles
    if (worldData.articles) {
      for (const article of worldData.articles) {
        if (article.title && article.title !== '[Removed]') {
          articles.push({
            title: article.title,
            excerpt: article.description || '',
            content: article.content || article.description || '',
            category: 'World News',
            author: article.author || 'News Agency',
            image_url: article.urlToImage,
            source_url: article.url,
            source_name: article.source?.name || 'Unknown',
            published_at: article.publishedAt,
            is_published: true,
            is_featured: false,
          });
        }
      }
    }

    console.log(`Processed ${articles.length} articles total`);

    // Insert articles into database (upsert based on source_url)
    if (articles.length > 0) {
      const { data, error } = await supabase
        .from('articles')
        .upsert(articles, { 
          onConflict: 'source_url',
          ignoreDuplicates: true 
        })
        .select();

      if (error) {
        console.error('Database insert error:', error);
        // Don't throw, just log - some articles may have been inserted
      } else {
        console.log(`Inserted/updated ${data?.length || 0} articles`);
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      articlesProcessed: articles.length,
      sierraLeoneCount: sierraLeoneData.articles?.length || 0,
      worldCount: worldData.articles?.length || 0
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in fetch-news function:', errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
