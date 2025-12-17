import { useState } from "react";
import { Link } from "wouter";
import { Header, Footer } from "@/components/layout";
import { POSTS, STATES, SEASONS, CATEGORIES } from "@/lib/data";
import { ArrowRight, MapPin, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";

export default function Explore() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = POSTS.filter(post => {
    const stateMatch = selectedState ? post.state === selectedState : true;
    const seasonMatch = selectedSeason ? post.season === selectedSeason : true;
    const categoryMatch = selectedCategory ? post.category === selectedCategory : true;
    return stateMatch && seasonMatch && categoryMatch;
  });

  const clearFilters = () => {
    setSelectedState(null);
    setSelectedSeason(null);
    setSelectedCategory(null);
  };

  const hasFilters = selectedState || selectedSeason || selectedCategory;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Header with Filters */}
        <div className="bg-slate-50 border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Explore India</h1>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
                <select 
                  className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                  value={selectedState || ""}
                  onChange={(e) => setSelectedState(e.target.value || null)}
                >
                  <option value="">All States</option>
                  {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>

                <select 
                  className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                  value={selectedSeason || ""}
                  onChange={(e) => setSelectedSeason(e.target.value || null)}
                >
                  <option value="">All Seasons</option>
                  {SEASONS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>

                <select 
                  className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                  value={selectedCategory || ""}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              
              {hasFilters && (
                <Button variant="ghost" onClick={clearFilters} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                  <X className="w-4 h-4 mr-2" /> Clear Filters
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* SEO Header */}
          <div className="mb-10">
             <h2 className="text-2xl font-bold text-gray-800">
               {hasFilters ? `Showing results for: ${[selectedState, selectedSeason, selectedCategory].filter(Boolean).join(", ")}` : "All Travel Guides"}
             </h2>
             <p className="text-muted-foreground mt-2">
               {filteredPosts.length} guides found
             </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <div>
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <Link key={post.id} href={`/post/${post.slug}`} className="group flex flex-col h-full cursor-pointer bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                           <span className="bg-black/70 backdrop-blur text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                             {post.state}
                           </span>
                           {post.season && post.season !== "All Year" && (
                             <span className="bg-primary/90 backdrop-blur text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                               {post.season}
                             </span>
                           )}
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                          <span>{post.category}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest group-hover:underline decoration-2 underline-offset-4">
                          Read Guide <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed">
                  <Filter className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No guides found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-8">
               <AdPlaceholder height="600px" label="Explore Sidebar Ad" />
               
               <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                 <h4 className="font-bold text-lg mb-4 font-serif">Popular States</h4>
                 <div className="flex flex-wrap gap-2">
                   {STATES.slice(0, 8).map(s => (
                     <button 
                       key={s}
                       onClick={() => setSelectedState(s)}
                       className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${selectedState === s ? 'bg-primary text-white border-primary' : 'bg-white hover:border-primary hover:text-primary'}`}
                     >
                       {s}
                     </button>
                   ))}
                 </div>
               </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
