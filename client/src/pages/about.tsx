import { Header, Footer } from "@/components/layout";
import { AUTHOR } from "@/lib/data";
import { CheckCircle2, Instagram, Twitter, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Hero */}
        <div className="bg-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About BlossomTravels</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              We believe travel should be authentic, sustainable, and accessible to everyone.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Mission */}
          <div className="mb-20 text-center">
             <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Mission</span>
             <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">To Inspire Conscious Exploration</h2>
             <p className="text-lg text-gray-600 leading-relaxed">
               BlossomTravels was born out of a frustration with generic, cookie-cutter travel guides. We wanted to create a platform that digs deeper—finding the hidden homestays, the street food stalls locals love, and the trails less trodden. We focus on <strong>AEO (Answer Engine Optimization)</strong> because we respect your time: we give you the answers you need, fast, without the fluff.
             </p>
          </div>

          {/* Author Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-slate-50 p-8 rounded-3xl">
             <div className="relative">
               <img 
                 src={AUTHOR.image} 
                 alt={AUTHOR.name} 
                 className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover"
               />
               <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px] hidden md:block">
                 <p className="font-serif italic text-gray-600 text-sm">"The world is a book and those who do not travel read only one page."</p>
               </div>
             </div>
             <div>
               <h3 className="text-2xl font-bold font-serif mb-2">{AUTHOR.name}</h3>
               <p className="text-primary font-bold uppercase text-xs tracking-wider mb-6">{AUTHOR.role}</p>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 {AUTHOR.bio} Sarah started BlossomTravels after a life-changing trip to Spiti Valley. She realized that the best travel advice comes from experience, not brochures.
               </p>
               <div className="space-y-3 mb-8">
                 <div className="flex items-center gap-3 text-gray-700">
                   <CheckCircle2 className="w-5 h-5 text-green-500" />
                   <span>45+ Countries Visited</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-700">
                   <CheckCircle2 className="w-5 h-5 text-green-500" />
                   <span>Sustainable Travel Advocate</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-700">
                   <CheckCircle2 className="w-5 h-5 text-green-500" />
                   <span>Budget Travel Expert</span>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <a href="#" className="p-2 bg-white border rounded-full hover:text-primary transition-colors"><Instagram className="w-5 h-5"/></a>
                 <a href="#" className="p-2 bg-white border rounded-full hover:text-primary transition-colors"><Twitter className="w-5 h-5"/></a>
                 <a href="#" className="p-2 bg-white border rounded-full hover:text-primary transition-colors"><Globe className="w-5 h-5"/></a>
               </div>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
