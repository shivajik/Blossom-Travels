import { ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? window.location.origin + item.href : undefined
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm text-muted-foreground font-sans mb-6 overflow-hidden", className)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <Link href="/" className="flex items-center hover:text-primary transition-colors flex-shrink-0">
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center min-w-0">
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0 text-muted-foreground/50" />
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors truncate">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium truncate" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
