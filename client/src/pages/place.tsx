import { Link, useRoute } from "wouter";
import { TOURIST_PLACES } from "@/lib/data";
import { Header, Footer } from "@/components/layout";
import { MapPin, Calendar, Clock, Star, ArrowLeft, Ticket, Info, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { TopDestinations } from "@/components/top-destinations";

export default function Place() {
  const [match, params] = useRoute("/place/:id");
  
  if (!match) return null;
  
  const place = TOURIST_PLACES.find(p => p.id === params.id);
  
  if (!place) {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold mb-4">Place Not Found</h1>
          <Link href="/explore">
            <Button>Go Back to Explore</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <SEO 
        title={`${place.name} - Travel Guide & Info`}
        description={`Detailed guide for visiting ${place.name} in ${place.location}. Best time to visit, entry fees, and what to expect.`}
      />

      <Header />
      
      <main className="flex-1">
        {/* Breadcrumbs & Back */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs 
              items={[
                { label: "Destinations", href: "/explore" },
                { label: place.country, href: `/country/${place.country}` },
                { label: place.name }
              ]}
              className="mb-4"
            />
            <Link href={`/country/${place.country}`}>
              <Button variant="ghost" size="sm" className="-ml-2 text-slate-500 hover:text-slate-900">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to {place.country}
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white pb-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start pt-8">
              {/* Image Gallery (Placeholder for single image now) */}
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-square relative group">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-semibold shadow-sm">
                  <Camera className="w-4 h-4" />
                  View Gallery
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col h-full justify-center">
                <div className="flex items-center gap-2 mb-4">
                   <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                     Must Visit
                   </span>
                   <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                     <Star className="w-4 h-4 fill-current" />
                     {place.rating} ({place.reviews?.toLocaleString()} reviews)
                   </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                  {place.name}
                </h1>

                <div className="flex items-center gap-2 text-slate-500 font-medium mb-8 text-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                  {place.location}, {place.country}
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {place.description}
                </p>

                {/* Key Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      Best Time to Visit
                    </div>
                    <p className="text-slate-600 text-sm">{place.bestTime || "All year round"}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                      <Clock className="w-4 h-4 text-primary" />
                      Timings
                    </div>
                    <p className="text-slate-600 text-sm">{place.timings || "Open 24 Hours"}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 sm:col-span-2">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                      <Ticket className="w-4 h-4 text-primary" />
                      Entry Fee
                    </div>
                    <p className="text-slate-600 text-sm">{place.entryFee || "Free Entry"}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                   <Button size="lg" className="flex-1 sm:flex-none">
                     Plan a Trip Here
                   </Button>
                   <Button size="lg" variant="outline" className="flex-1 sm:flex-none">
                     <Info className="w-4 h-4 mr-2" />
                     More Details
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold font-serif mb-6">Location & Map</h2>
            <div className="bg-slate-200 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
               <div className="text-slate-400 font-medium flex flex-col items-center gap-2">
                 <MapPin className="w-10 h-10" />
                 <span>Interactive Map Loading...</span>
               </div>
            </div>
          </div>
        </section>

        {/* Similar Places / Top Destinations */}
        <TopDestinations />
      </main>

      <Footer />
    </div>
  );
}
