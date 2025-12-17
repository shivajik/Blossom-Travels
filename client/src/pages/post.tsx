import { useRoute, Link } from "wouter";
import { POSTS } from "@/lib/data";
import { Header, Footer } from "@/components/layout";
import { Snippet } from "@/components/ui/snippet";
import { AuthorBio } from "@/components/ui/author-bio";
import { ProsCons } from "@/components/ui/pros-cons";
import { ItineraryTimeline } from "@/components/ui/itinerary-timeline";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { Calendar, Clock, ChevronRight, Share2, Facebook, Twitter, Linkedin, MapPin } from "lucide-react";

export default function Post() {
  const [match, params] = useRoute("/post/:slug");
  
  if (!match) return <NotFound />;

  const post = POSTS.find(p => p.slug === params.slug);
  
  if (!post) return <NotFound />;

  // Mock content generation based on the post ID to make them distinct
  const renderContent = () => {
    if (post.id === "4") { // 50 Top Places
        return (
            <>
                <p className="lead text-xl text-gray-700 mb-8">
                    India is a land of staggering diversity. From the frozen summits of the Himalayas to the tropical greenery of Kerala, its borders encompass an incomparable range of landscapes, cultures, and people. Here are the 50 top tourist places in India you absolutely must visit in 2025.
                </p>

                <h2 className="text-3xl font-serif font-bold mt-12 mb-6 text-gray-900">North India: Mountains & History</h2>
                
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 1. Leh-Ladakh, Jammu & Kashmir</h3>
                <p>The land of high passes, crystal clear lakes like Pangong Tso, and ancient monasteries. A road trip here is the ultimate adventure.</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 2. Taj Mahal, Agra</h3>
                <p>No list is complete without the symbol of love. Visit at sunrise to avoid the crowds and see the marble change colors.</p>

                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 3. Varanasi, Uttar Pradesh</h3>
                <p>One of the world's oldest living cities. The evening Ganga Aarti is a spiritual experience unlike any other.</p>

                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 4. Jaipur, Rajasthan</h3>
                <p>The Pink City offers the Hawa Mahal, Amer Fort, and vibrant bazaars. Don't miss the pyaz kachori at Rawat.</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 5. Rishikesh, Uttarakhand</h3>
                <p>The Yoga Capital of the World and a hub for river rafting. Visit the Beatles Ashram for a slice of history.</p>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-8">
                   <h4 className="font-bold mb-4">Other Top North Indian Picks:</h4>
                   <ul className="grid md:grid-cols-2 gap-2 list-disc pl-5">
                       <li>6. Manali, Himachal Pradesh</li>
                       <li>7. Kasol & Parvati Valley</li>
                       <li>8. Udaipur (City of Lakes)</li>
                       <li>9. Jaisalmer (Golden City)</li>
                       <li>10. Amritsar (Golden Temple)</li>
                       <li>11. Dharamshala & McLeodGanj</li>
                       <li>12. Spiti Valley</li>
                       <li>13. Valley of Flowers, Uttarakhand</li>
                       <li>14. Gulmarg, Kashmir</li>
                       <li>15. Jim Corbett National Park</li>
                   </ul>
                </div>

                <h2 className="text-3xl font-serif font-bold mt-12 mb-6 text-gray-900">South India: Nature & Temples</h2>

                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 16. Alleppey, Kerala</h3>
                <p>Famous for its backwater houseboats. A night spent cruising the calm waters is pure therapy.</p>

                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 17. Hampi, Karnataka</h3>
                <p>A UNESCO World Heritage site with boulder-strewn landscapes and the magnificent ruins of the Vijayanagara Empire.</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 18. Pondicherry</h3>
                <p>A slice of France in India. Explore the French Quarter, Promenade Beach, and Auroville.</p>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-8">
                   <h4 className="font-bold mb-4">More South Indian Gems:</h4>
                   <ul className="grid md:grid-cols-2 gap-2 list-disc pl-5">
                       <li>19. Munnar, Kerala (Tea Gardens)</li>
                       <li>20. Coorg, Karnataka (Coffee)</li>
                       <li>21. Gokarna (Beaches)</li>
                       <li>22. Varkala (Cliff Beach)</li>
                       <li>23. Ooty, Tamil Nadu</li>
                       <li>24. Kodaikanal</li>
                       <li>25. Mysore (Palace)</li>
                       <li>26. Wayanad</li>
                       <li>27. Mahabalipuram</li>
                       <li>28. Madurai (Meenakshi Temple)</li>
                   </ul>
                </div>

                <h2 className="text-3xl font-serif font-bold mt-12 mb-6 text-gray-900">East & Northeast: Untouched Beauty</h2>
                 <ul className="space-y-4">
                    <li><strong>29. Darjeeling, West Bengal:</strong> Ride the toy train and see Kanchenjunga.</li>
                    <li><strong>30. Gangtok, Sikkim:</strong> Cleanest city, great food, and gateway to Nathu La.</li>
                    <li><strong>31. Ziro Valley, Arunachal:</strong> Home to the Apatani tribe and the famous music festival.</li>
                    <li><strong>32. Kaziranga, Assam:</strong> Spot the one-horned rhinoceros.</li>
                    <li><strong>33. Shillong, Meghalaya:</strong> The Scotland of the East. Visit the root bridges in Cherrapunji.</li>
                    <li><strong>34. Tawang, Arunachal:</strong> Visit the massive Tawang Monastery.</li>
                    <li><strong>35. Kolkata, West Bengal:</strong> The cultural capital. Food, history, and tram rides.</li>
                 </ul>

                 <h2 className="text-3xl font-serif font-bold mt-12 mb-6 text-gray-900">West & Central India</h2>
                 <ul className="space-y-4">
                    <li><strong>36. Goa:</strong> Beaches, nightlife, and Portuguese heritage.</li>
                    <li><strong>37. Mumbai:</strong> The city of dreams. Marine Drive, Colaba, and street food.</li>
                    <li><strong>38. Ellora & Ajanta Caves:</strong> Ancient rock-cut caves in Maharashtra.</li>
                    <li><strong>39. Rann of Kutch, Gujarat:</strong> The white salt desert festival (Rann Utsav).</li>
                    <li><strong>40. Gir National Park:</strong> The only home of the Asiatic Lion.</li>
                    <li><strong>41. Khajuraho, MP:</strong> Famous for its intricate erotic sculptures.</li>
                    <li><strong>42. Kanha National Park:</strong> The inspiration for The Jungle Book.</li>
                 </ul>

                 <h2 className="text-3xl font-serif font-bold mt-12 mb-6 text-gray-900">Islands & Offbeat</h2>
                 <ul className="space-y-4">
                    <li><strong>43. Havelock Island, Andaman:</strong> Radhanagar Beach is one of Asia's best.</li>
                    <li><strong>44. Lakshadweep:</strong> Prinstine coral reefs and blue lagoons.</li>
                    <li><strong>45. Great Himalayan National Park:</strong> For serious trekkers.</li>
                    <li><strong>46. Dzukou Valley, Nagaland:</strong> The valley of flowers of the Northeast.</li>
                    <li><strong>47. Majuli, Assam:</strong> The world's largest river island.</li>
                    <li><strong>48. Gandikota, Andhra Pradesh:</strong> The Grand Canyon of India.</li>
                    <li><strong>49. Lonavala, Maharashtra:</strong> Perfect monsoon getaway.</li>
                    <li><strong>50. Sundarbans, West Bengal:</strong> The largest mangrove forest.</li>
                 </ul>

            </>
        )
    } else if (post.id === "1") { // Gokarna
      return (
        <>
          <p>
            Gokarna has transformed from a sleepy temple town into a digital nomad hotspot. With the rise of remote work, hostels have upgraded their infrastructure to cater to the laptop-wielding crowd. We spent two weeks hopping between hostels to test WiFi speeds, power backup reliability, and the all-important "vibe check".
          </p>
          
          <h2>1. Zostel Gokarna (Our Top Pick)</h2>
          <p>
            Perched on a cliff overlooking the Arabian Sea, Zostel offers the best balance of work and play. The dedicated coworking space is air-conditioned and silent—a rarity in beach towns.
          </p>
          
          <ProsCons 
             pros={["Dedicated AC coworking space", "Starlink WiFi (150 Mbps)", "Amazing sunset views"]}
             cons={["Expensive private rooms", "Steep climb to reach the property"]}
          />

          <h2>2. Trippr Gokarna (Budget Choice)</h2>
          <p>
             Located right on the beach, Trippr is perfect if you want to dip your toes in the sand between Zoom calls. The WiFi is decent (40 Mbps), but reliability drops during storms.
          </p>
        </>
      );
    } else if (post.id === "3") { // Spiti
      return (
        <>
           <p>
             The "Middle Land" is not for the faint of heart, but the rewards are unmatched. Riding a bike through Spiti Valley is a rite of passage for Indian bikers. Here is the 10-day itinerary we followed.
           </p>

           <ItineraryTimeline 
             items={[
               { day: "Day 1", title: "Arrival in Manali", description: "Acclimatize and rent bikes. Do a short ride to Solang Valley to test the machines." },
               { day: "Day 2", title: "Manali to Chatru", description: "Cross the Atal Tunnel and enter Lahaul. The roads get rougher post-Gramphu." },
               { day: "Day 3", title: "Chatru to Kaza", description: "The toughest riding day. Cross Kunzum Pass (4590m) and descend into Spiti Valley." },
               { day: "Day 4", title: "Kaza Local Sightseeing", description: "Visit Key Monastery, Kibber, and Chicham Bridge (highest bridge in Asia)." },
               { day: "Day 5", title: "Kaza to Pin Valley", description: "A detour into the National Park. Stark landscapes and chance to spot snow leopards." }
             ]}
           />

           <h2>Cost Breakdown</h2>
           <p>
             Fuel in the mountains burns faster. Expect mileage of 25kmpl on a Himalayan. Accommodation in homestays averages ₹1200 per night with meals.
           </p>
        </>
      );
    } else {
      return (
        <>
          <p>
            Ziro Valley is famous for its music festival, but it's also a cultural gem of Arunachal Pradesh. Planning a trip here requires some logistics, especially regarding permits.
          </p>
          <h2>Getting the ILP</h2>
          <p>
            The Inner Line Permit can be applied for online at the Arunachal eILP portal. It costs ₹100 and takes about 2-3 days to process.
          </p>
          <p>
            Camping is the best way to experience the festival. Official campsites charge around ₹3000 for the duration, but bringing your own tent (BYOT) is much cheaper.
          </p>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white">
        <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/category/${post.category.toLowerCase()}`}>{post.category}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium truncate">{post.title}</span>
          </div>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-8">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div className="prose prose-lg prose-slate max-w-none">
              {/* AEO Snippet */}
              <Snippet>
                {post.snippet}
              </Snippet>

              {/* Table of Contents (Simulated) */}
              <div className="bg-slate-50 p-6 rounded-lg my-8 border border-slate-100">
                <p className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wide">Table of Contents</p>
                <ul className="space-y-2 text-sm !m-0 !pl-0 !list-none">
                  <li><a href="#" className="text-primary hover:underline">1. Quick Overview</a></li>
                  <li><a href="#" className="text-slate-600 hover:text-primary transition-colors">2. Detailed Breakdown</a></li>
                  <li><a href="#" className="text-slate-600 hover:text-primary transition-colors">3. Expert Tips</a></li>
                  <li><a href="#" className="text-slate-600 hover:text-primary transition-colors">4. FAQ</a></li>
                </ul>
              </div>

              {renderContent()}

              <AuthorBio />

              {/* FAQ Schema Section */}
              <section className="mt-16 pt-10 border-t">
                <h3 className="text-2xl font-serif font-bold mb-8">People Also Ask</h3>
                <div className="space-y-6">
                  {post.relatedQuestions.map((qa, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-2 text-base">{qa.question}</h4>
                      <p className="text-gray-600 text-base mb-0">{qa.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden md:block space-y-8">
              <div className="sticky top-24">
                <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
                  <h4 className="font-bold mb-4">Share this guide</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full"><Facebook className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full"><Twitter className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full"><Linkedin className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="rounded-full"><Share2 className="w-4 h-4" /></Button>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                  <h4 className="font-bold font-serif text-lg mb-2">Plan your trip</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need help planning your {post.category} trip? Download our free checklist.
                  </p>
                  <Button className="w-full">Download PDF</Button>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
