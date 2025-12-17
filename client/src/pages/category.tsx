import { useRoute, Link } from "wouter";
import { POSTS, CATEGORY_DETAILS } from "@/lib/data";
import { Header, Footer } from "@/components/layout";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import NotFound from "@/pages/not-found";

export default function Category() {
  const [match, params] = useRoute("/category/:name");
  
  if (!match) return <NotFound />;

  const categoryName = decodeURIComponent(params.name);
  // Match category name robustly (handle URL encoding/formatting differences if any)
  const normalizedCategoryName = Object.keys(CATEGORY_DETAILS).find(
    key => key.toLowerCase() === categoryName.toLowerCase()
  ) || categoryName;

  const categoryInfo = CATEGORY_DETAILS[normalizedCategoryName] || {
    description: `Explore our curated guides and tips for ${normalizedCategoryName}.`,
    subTopics: []
  };
  
  // Case-insensitive comparison and partial matching for broader categories
  const filteredPosts = POSTS.filter(post => 
    post.category.toLowerCase() === categoryName.toLowerCase() ||
    post.category.toLowerCase().includes(categoryName.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SEO 
        title={`${normalizedCategoryName} Travel Guides & Tips`}
        description={categoryInfo.description}
      />
      <Header />
      
      <main className="flex-1 bg-slate-50">
        <div className="bg-white border-b">
            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs 
                    items={[
                        { label: normalizedCategoryName }
                    ]}
                    className="mb-8 justify-center"
                />
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        Topic Hub
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 capitalize mb-6">
                        {normalizedCategoryName}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {categoryInfo.description}
                    </p>

                    {categoryInfo.subTopics.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-3 mt-8">
                            {categoryInfo.subTopics.map(topic => (
                                <span key={topic} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-sm font-medium text-slate-600">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                    {topic}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest Guides</h2>
            <span className="text-sm text-muted-foreground">{filteredPosts.length} articles</span>
          </div>

          {filteredPosts.length > 0 ? (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
             {filteredPosts.map((post) => (
               <Link key={post.id} href={`/post/${post.slug}`} className="group flex flex-col h-full cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                 <div className="overflow-hidden aspect-[16/10] relative">
                   <img 
                     src={post.image} 
                     alt={post.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                     {post.category}
                   </div>
                 </div>
                 <div className="flex-1 flex flex-col p-6">
                   <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                     <span>{post.date}</span>
                     <span className="w-1 h-1 rounded-full bg-gray-300" />
                     <span>{post.readTime}</span>
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                     {post.title}
                   </h3>
                   <p className="text-muted-foreground line-clamp-3 leading-relaxed mb-6 flex-1">
                     {post.excerpt}
                   </p>
                   <span className="inline-flex items-center text-primary font-bold text-sm group-hover:underline decoration-2 underline-offset-4">
                     Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                   </span>
                 </div>
               </Link>
             ))}
           </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <p className="text-xl text-muted-foreground">No posts found in this category yet.</p>
              <Link href="/">
                <a className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors">
                  Explore other topics
                </a>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
