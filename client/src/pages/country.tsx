import { Link, useRoute } from "wouter";
import { POSTS } from "@/lib/data";
import { Header, Footer } from "@/components/layout";
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Country() {
  const [match, params] = useRoute("/country/:name");
  
  if (!match) return null;
  
  // Decode the URL parameter correctly
  const countryName = decodeURIComponent(params.name);
  
  // Filter posts by country (case insensitive)
  const countryPosts = POSTS.filter(post => 
    post.country?.toLowerCase() === countryName.toLowerCase()
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-1">
        {/* Country Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0 opacity-60">
             {/* Use a relevant image if available, otherwise a gradient/pattern */}
             {countryPosts.length > 0 ? (
               <img 
                 src={countryPosts[0].image} 
                 alt={countryName} 
                 className="w-full h-full object-cover"
               />
             ) : (
               <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900" />
             )}
             <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Explore Destination
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
              {countryName}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Discover the best travel guides, itineraries, and tips for your trip to {countryName}.
            </p>
          </div>
        </section>

        {/* Guides List */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            {countryPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {countryPosts.map((post) => (
                  <Link key={post.id} href={`/post/${post.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wide">
                          <MapPin className="w-3.5 h-3.5" />
                          {post.state || post.country}
                        </span>
                        <span className="inline-flex items-center text-primary font-bold text-sm group-hover:underline decoration-2 underline-offset-4">
                          Read Guide <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">No guides yet for {countryName}</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  We are currently working on creating comprehensive guides for {countryName}. Check back soon or explore other destinations!
                </p>
                <Link href="/">
                  <Button size="lg" className="rounded-full px-8">
                    Explore Other Destinations
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
