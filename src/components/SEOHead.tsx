import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({
  title = "Born to Blog (B2B) - Top Notch Social Media Agency",
  description = "Born to Blog (B2B) is a top-notch social media agency helping brands grow their online presence with creative content strategies and expert blogging services.",
  image = "/seo.jpg",
  url,
  type = "website",
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${property}"]`);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    // Standard meta tags
    updateMetaTag("description", description);

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:type", type, true);
    if (url) {
      updateMetaTag("og:url", url, true);
    }

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Update canonical link
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", url);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", url);
        document.head.appendChild(canonical);
      }
    }
  }, [title, description, image, url, type]);

  return null;
};

export default SEOHead;
