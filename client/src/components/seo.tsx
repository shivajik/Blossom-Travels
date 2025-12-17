import { useEffect } from 'react';
import { useLocation } from 'wouter';

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: Record<string, any>;
  publishedTime?: string;
  author?: string;
}

export function useSEO({ 
  title, 
  description, 
  image, 
  type = 'website',
  schema,
  publishedTime,
  author
}: SEOProps) {
  const [location] = useLocation();
  const url = window.location.origin + location;
  const defaultImage = window.location.origin + '/opengraph.jpg';
  const finalImage = image ? (image.startsWith('http') ? image : window.location.origin + image) : defaultImage;

  useEffect(() => {
    // Update Title
    document.title = `${title} | BlossomTravels`;

    // Helper to update meta tags
    const updateMeta = (name: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic Meta
    updateMeta('description', description);

    // Open Graph
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', finalImage, 'property');
    updateMeta('og:url', url, 'property');
    updateMeta('og:type', type, 'property');

    // Twitter
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', finalImage);
    updateMeta('twitter:card', 'summary_large_image');

    // Article Specifics
    if (type === 'article' && publishedTime) {
      updateMeta('article:published_time', publishedTime, 'property');
    }
    if (type === 'article' && author) {
      updateMeta('author', author);
    }

    // JSON-LD Schema
    if (schema) {
      let script = document.querySelector('#json-ld-schema');
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    // Cleanup function? Not strictly necessary for meta tags as they get overwritten, 
    // but good practice if we wanted to revert. For now, we'll rely on the next page overwriting.

  }, [title, description, image, type, url, schema, publishedTime, author]);
}

export function SEO(props: SEOProps) {
  useSEO(props);
  return null;
}
