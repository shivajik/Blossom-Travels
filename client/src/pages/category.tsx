import { useRoute, Link } from "wouter";
import { POSTS } from "@/lib/data";
import { Header, Footer } from "@/components/layout";
import { ArrowRight, MapPin } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function Category() {
  const [match, params] = useRoute("/category/:name");
  
  if (!match) return <NotFound />;

  const categoryName = decodeURIComponent(params.name).replace(/-/g, " ");
  
  // Case-insensitive comparison and partial matching for broader categories
  const filteredPosts = POSTS.filter(post => 
    post.category.toLowerCase() === categoryName.toLowerCase() ||
    post.category.toLowerCase().includes(categoryName.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 bg-slate-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Category</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 capitalize">{categoryName}</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore our curated guides and tips for {categoryName}.
            </p>
          </div>

          {filteredPosts.length > 0 ? (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
             {filteredPosts.map((post) => (
               <Link key={post.id} href={`/post/${post.slug}`} className="group flex flex-col h-full cursor-pointer">
                 <div className="overflow-hidden rounded-2xl mb-6 aspect-[16/10] relative shadow-md group-hover:shadow-xl transition-all duration-300">
                   <img 
                     src={post.image} 
                     alt={post.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                     {post.category}
                   </div>
                 </div>
                 <div className="flex-1 flex flex-col">
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
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No posts found in this category yet. Check back soon!</p>
              <Link href="/">
                <a className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors">
                  Back to Home
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
