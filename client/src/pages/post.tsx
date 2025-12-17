import { useRoute, Link } from "wouter";
import { POSTS } from "@/lib/data";
import { Header, Footer } from "@/components/layout";
import { Snippet } from "@/components/ui/snippet";
import { AuthorBio } from "@/components/ui/author-bio";
import { ProsCons } from "@/components/ui/pros-cons";
import { ItineraryTimeline } from "@/components/ui/itinerary-timeline";
import { AdPlaceholder } from "@/components/ui/ad-placeholder";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { Calendar, Clock, ChevronRight, Share2, Facebook, Twitter, Linkedin, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Post() {
  const [match, params] = useRoute("/post/:slug");
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Update reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!match) return <NotFound />;

  const post = POSTS.find(p => p.slug === params.slug);
  
  if (!post) return <NotFound />;

  // Get related posts (same category, excluding current)
  const relatedPosts = POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  // Default content for generic posts (like the new budget hacks)
  const renderDefaultContent = () => (
    <>
      <p className="lead text-lg mb-6">
        {post.excerpt}
      </p>
      <p>
        Travel doesn't have to be expensive. In this guide, we break down actionable tips to help you save money without compromising on the experience. Whether you are a student, a solo backpacker, or just looking to stretch your rupee further, these hacks are tested in the field.
      </p>
      
      <AdPlaceholder className="my-8" height="250px" label="In-Article Ad" />

      <h2>Why This Matters</h2>
      <p>
        Most travelers overspend on three things: Accommodation, Transport, and Food. By optimizing these three pillars, you can extend your trip duration by 2x or 3x.
      </p>

      <h2>Top Tips for {post.category}</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Plan Ahead:</strong> Last-minute bookings are the enemy of budget travel.</li>
        <li><strong>Live Like a Local:</strong> Eat where locals eat, take public transport.</li>
        <li><strong>Travel Slow:</strong> Staying in one place longer reduces transport costs and often gets you long-stay discounts.</li>
      </ul>

      <p>
        Implement these strategies on your next trip and watch your savings grow. Remember, every rupee saved is a rupee you can spend on your next adventure.
      </p>
    </>
  );

  // Mock content generation based on the post ID to make them distinct
  const renderContent = () => {
    if (post.id === "4") { // 50 Top Places
        return (
            <>
                <p className="lead text-xl text-gray-700 mb-8 drop-cap">
                    India is a land of staggering diversity. From the frozen summits of the Himalayas to the tropical greenery of Kerala, its borders encompass an incomparable range of landscapes, cultures, and people. Here are the 50 top tourist places in India you absolutely must visit in 2025.
                </p>

                <AdPlaceholder className="my-8" height="90px" label="Top Banner Ad" />

                <h2 className="text-3xl font-serif font-bold mt-12 mb-6 text-gray-900">North India: Mountains & History</h2>
                
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 1. Leh-Ladakh, Jammu & Kashmir</h3>
                <p>The land of high passes, crystal clear lakes like Pangong Tso, and ancient monasteries. A road trip here is the ultimate adventure.</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 2. Taj Mahal, Agra</h3>
                <p>No list is complete without the symbol of love. Visit at sunrise to avoid the crowds and see the marble change colors.</p>

                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2"><MapPin className="text-primary w-5 h-5"/> 3. Varanasi, Uttar Pradesh</h3>
                <p>One of the world's oldest living cities. The evening Ganga Aarti is a spiritual experience unlike any other.</p>

                <AdPlaceholder className="my-8" height="250px" label="Mid-Content Ad" />

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
    } else if (post.id === "5") { // Manali
        return (
            <>
                <p>Manali in winter is a fairytale. The entire town is draped in white, and the crisp mountain air is exhilarating. However, visiting during peak winter (Jan-Feb) requires preparation.</p>
                <AdPlaceholder className="my-8" height="90px" />
                <h2>Solang Valley vs. Rohtang Pass</h2>
                <p>In winter, Rohtang Pass is closed due to heavy snow. Solang Valley becomes the hub for all adventure activities like skiing, snowboarding, and paragliding.</p>
                
                <ProsCons 
                    pros={["Guaranteed snow in Jan/Feb", "Skiing and snowboarding options", "Lower hotel rates (except New Year)"]}
                    cons={["Road blocks due to heavy snow", "Extreme sub-zero temperatures", "Limited water availability in budget stays"]}
                />

                <h2>Where to Stay?</h2>
                <p><strong>Old Manali:</strong> For backpacker vibes and cafes. <br/><strong>Sethan (Hampta):</strong> For igloo stays and offbeat snow treks.</p>
            </>
        );
    } else if (post.id === "6") { // Andaman
        return (
            <>
                <p>The Andaman Islands offer some of the clearest waters in the world. Havelock Island (Swaraj Dweep) is the crown jewel, hosting excellent dive sites and luxury resorts.</p>
                <h2>Scuba Diving for Beginners</h2>
                <p>You don't need to be a swimmer to try a 'Discovery Scuba Dive'. Instructors hold your hand the entire time. The best spots are Nemo Reef (shallow, great for photos) and The Wall (deeper, more marine life).</p>
                
                <AdPlaceholder className="my-8" height="250px" />

                <ItineraryTimeline 
                    items={[
                        { day: "Day 1", title: "Arrival in Port Blair", description: "Visit Cellular Jail and watch the Light & Sound show." },
                        { day: "Day 2", title: "Ferry to Havelock", description: "Take the Makruzz ferry. Rent a scooty and visit Radhanagar Beach for sunset." },
                        { day: "Day 3", title: "Scuba Diving", description: "Morning dive at Nemo Reef. Afternoon chill at Kalapathar Beach." },
                        { day: "Day 4", title: "Elephant Beach", description: "Boat ride to Elephant Beach for snorkeling and water sports." },
                        { day: "Day 5", title: "Neil Island", description: "Short ferry to Neil. Visit the Natural Bridge and Laxmanpur Beach." }
                    ]}
                />
            </>
        );
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

          <AdPlaceholder className="my-8" height="250px" />

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

           <AdPlaceholder className="my-8" height="250px" />

           <h2>Cost Breakdown</h2>
           <p>
             Fuel in the mountains burns faster. Expect mileage of 25kmpl on a Himalayan. Accommodation in homestays averages ₹1200 per night with meals.
           </p>
        </>
      );
    } else if (["2", "7", "8", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"].includes(post.id)) {
        // Return default content for all other posts (including new budget hacks)
        return renderDefaultContent();
    } else {
        // Fallback
      return renderDefaultContent();
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-serif">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-primary z-[60]" style={{ width: `${scrollProgress}%` }} />
      
      <Header />
      
      <main className="flex-1 bg-white">
        <article className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          
          <div className="grid lg:grid-cols-[1fr_300px] gap-16">
            {/* Main Content Area */}
            <div className="max-w-3xl mx-auto w-full">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 font-sans">
                    <Link href="/">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href={`/category/${post.category.toLowerCase()}`}>{post.category}</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-gray-900 font-medium truncate">{post.title}</span>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6 font-sans">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-8">
                    {post.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-sans">
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

                <div className="prose prose-lg prose-slate max-w-none font-serif">
                    {/* AEO Snippet */}
                    <Snippet>
                        {post.snippet}
                    </Snippet>

                    {/* Table of Contents (Simulated) */}
                    <div className="bg-slate-50 p-6 rounded-lg my-8 border border-slate-100 font-sans not-prose">
                        <p className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wide">Table of Contents</p>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-primary hover:underline block py-1 border-b border-dashed border-gray-200">1. Quick Overview</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-primary transition-colors block py-1 border-b border-dashed border-gray-200">2. Detailed Breakdown</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-primary transition-colors block py-1 border-b border-dashed border-gray-200">3. Expert Tips</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-primary transition-colors block py-1">4. FAQ</a></li>
                        </ul>
                    </div>

                    {renderContent()}

                    <AuthorBio />

                    {/* FAQ Schema Section */}
                    <section className="mt-16 pt-10 border-t font-sans">
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
            </div>

            {/* Sidebar - Sticky */}
            <aside className="hidden lg:block space-y-8 h-fit sticky top-24 font-sans">
              <AdPlaceholder height="300px" label="Sidebar Ad" />

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
              
              <AdPlaceholder height="600px" label="Sticky Sidebar Ad" />
            </aside>
          </div>
          
          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t font-sans">
                <h2 className="text-3xl font-serif font-bold mb-10 text-center">More from {post.category}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {relatedPosts.map(p => (
                        <Link key={p.id} href={`/post/${p.slug}`} className="group cursor-pointer">
                            <div className="rounded-xl overflow-hidden mb-4 aspect-video">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                            </div>
                            <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
          )}
          
        </article>
      </main>

      <Footer />
    </div>
  );
}
