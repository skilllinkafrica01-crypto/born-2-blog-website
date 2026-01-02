import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// List of verified/trusted news sources
const VERIFIED_SOURCES = [
  'bbc-news',
  'cnn',
  'reuters',
  'associated-press',
  'al-jazeera-english',
  'the-guardian-uk',
  'bloomberg',
  'abc-news',
  'nbc-news',
  'cbs-news'
];

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

    const { category = 'general' } = await req.json().catch(() => ({}));

    console.log(`[${new Date().toISOString()}] Starting news fetch...`);

    const articles = [];

    // Fetch Sierra Leone news from verified sources
    const sierraLeoneUrl = `https://newsapi.org/v2/everything?q=Sierra+Leone&sortBy=publishedAt&pageSize=15&language=en&apiKey=${newsApiKey}`;
    console.log('Fetching Sierra Leone news...');
    const sierraLeoneResponse = await fetch(sierraLeoneUrl);
    const sierraLeoneData = await sierraLeoneResponse.json();

    if (sierraLeoneData.status === 'error') {
      console.error('Sierra Leone API error:', sierraLeoneData.message);
    } else if (sierraLeoneData.articles) {
      console.log(`Found ${sierraLeoneData.articles.length} Sierra Leone articles`);
      for (const article of sierraLeoneData.articles) {
        if (article.title && article.title !== '[Removed]' && article.url) {
          articles.push({
            title: article.title,
            excerpt: article.description || '',
            content: article.content || article.description || '',
            category: 'Sierra Leone',
            author: article.author || article.source?.name || 'News Agency',
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

    // Fetch top headlines from verified sources
    const verifiedSourcesParam = VERIFIED_SOURCES.join(',');
    const worldUrl = `https://newsapi.org/v2/top-headlines?sources=${verifiedSourcesParam}&pageSize=20&apiKey=${newsApiKey}`;
    console.log('Fetching world news from verified sources...');
    const worldResponse = await fetch(worldUrl);
    const worldData = await worldResponse.json();

    if (worldData.status === 'error') {
      console.error('World news API error:', worldData.message);
      
      // Fallback to category-based fetch if sources fail
      console.log('Trying fallback category-based fetch...');
      const fallbackUrl = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=15&apiKey=${newsApiKey}`;
      const fallbackResponse = await fetch(fallbackUrl);
      const fallbackData = await fallbackResponse.json();
      
      if (fallbackData.articles) {
        console.log(`Found ${fallbackData.articles.length} fallback articles`);
        for (const article of fallbackData.articles) {
          if (article.title && article.title !== '[Removed]' && article.url) {
            articles.push({
              title: article.title,
              excerpt: article.description || '',
              content: article.content || article.description || '',
              category: 'World News',
              author: article.author || article.source?.name || 'News Agency',
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
    } else if (worldData.articles) {
      console.log(`Found ${worldData.articles.length} verified world news articles`);
      for (const article of worldData.articles) {
        if (article.title && article.title !== '[Removed]' && article.url) {
          articles.push({
            title: article.title,
            excerpt: article.description || '',
            content: article.content || article.description || '',
            category: 'World News',
            author: article.author || article.source?.name || 'News Agency',
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

    // Fetch Africa-specific news
    const africaUrl = `https://newsapi.org/v2/everything?q=Africa+OR+West+Africa&sortBy=publishedAt&pageSize=10&language=en&apiKey=${newsApiKey}`;
    console.log('Fetching Africa news...');
    const africaResponse = await fetch(africaUrl);
    const africaData = await africaResponse.json();

    if (africaData.articles) {
      console.log(`Found ${africaData.articles.length} Africa articles`);
      for (const article of africaData.articles) {
        if (article.title && article.title !== '[Removed]' && article.url) {
          // Avoid duplicates
          const isDuplicate = articles.some(a => a.source_url === article.url);
          if (!isDuplicate) {
            articles.push({
              title: article.title,
              excerpt: article.description || '',
              content: article.content || article.description || '',
              category: 'Africa',
              author: article.author || article.source?.name || 'News Agency',
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
    }

    console.log(`Total articles to process: ${articles.length}`);

    // Insert articles into database (upsert based on source_url)
    let insertedCount = 0;
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
      } else {
        insertedCount = data?.length || 0;
        console.log(`Successfully inserted/updated ${insertedCount} articles`);
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Fetched ${articles.length} articles, inserted ${insertedCount} new articles`,
      articlesProcessed: articles.length,
      articlesInserted: insertedCount,
      timestamp: new Date().toISOString()
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