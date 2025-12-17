import { ArrowRight, Check, X, Clock, MapPin, Calendar, DollarSign, Star } from "lucide-react";

// Import images (simulated imports for data file)
import spitiImg from "@assets/stock_images/spiti_valley_majesti_57ba6d9c.jpg";
import gokarnaImg from "@assets/stock_images/gokarna_beach_cliff__ffce5080.jpg";
import ziroImg from "@assets/stock_images/ziro_valley_green_ri_1d4e1193.jpg";
import authorImg from "@assets/stock_images/traveler_writing_in__55b9860e.jpg";
import tajMahalImg from "@assets/stock_images/taj_mahal_sunrise_ic_ec05b9d8.jpg";
import manaliImg from "@assets/stock_images/manali_snow_covered__59d7d053.jpg";
import andamanImg from "@assets/stock_images/andaman_havelock_isl_53d032a2.jpg";
import varanasiImg from "@assets/stock_images/varanasi_ganga_aarti_08a81441.jpg";
import kutchImg from "@assets/stock_images/rann_of_kutch_white__143cf4c7.jpg";

// Budget Hacks Images
import hostelImg from "@assets/stock_images/backpacker_cooking_h_dc9bd562.jpg";
import busImg from "@assets/stock_images/overnight_sleeper_bu_6fa57be0.jpg";
import streetFoodImg from "@assets/stock_images/street_food_india_ma_71c65109.jpg";
import sharingTaxiImg from "@assets/stock_images/group_of_travelers_s_9aee52fb.jpg";
import flightDealsImg from "@assets/stock_images/booking_flight_ticke_34a68ed0.jpg";
import packingImg from "@assets/stock_images/packing_light_backpa_37cb592f.jpg";
import campingImg from "@assets/stock_images/camping_tent_nature__b7783c0a.jpg";
import localTrainImg from "@assets/stock_images/local_train_india_cr_747f9d5a.jpg";
import waterBottleImg from "@assets/stock_images/travel_water_bottle__8fbac3b4.jpg";
import studentIdImg from "@assets/stock_images/student_id_card_disc_01911b6f.jpg";

// Tourist Places Images
import keralaImg from "@assets/stock_images/kerala_backwaters_ho_66f26b81.jpg";
import hawaMahalImg from "@assets/stock_images/jaipur_hawa_mahal_c03156ea.jpg";
import pangongImg from "@assets/stock_images/ladakh_pangong_lake_d82d0e35.jpg";
import munnarImg from "@assets/stock_images/munnar_tea_gardens_4fe6bfa6.jpg";
import udaipurImg from "@assets/stock_images/udaipur_lake_palace_6f5ebe6e.jpg";
import mysoreImg from "@assets/stock_images/mysore_palace_d069e50a.jpg";
import rishikeshImg from "@assets/stock_images/rishikesh_river_raft_5146eb21.jpg";
import goldenTempleImg from "@assets/stock_images/golden_temple_amrits_cac8eda4.jpg";


export const AUTHOR = {
  name: "Sarah Jenkins",
  role: "Senior Travel Editor",
  image: authorImg,
  bio: "Sarah has visited 45+ countries and specializes in budget-friendly, sustainable travel. She lived in a van for 2 years exploring the Himalayas."
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  state?: string; 
  country?: string; // New field
  season?: string; 
  image: string;
  date: string;
  readTime: string;
  snippet: string;
  content: React.ReactNode; 
  relatedQuestions: { question: string; answer: string }[];
};

export const POSTS: BlogPost[] = [
  {
    id: "4",
    slug: "50-top-tourist-places-india-2025",
    title: "50 Top Tourist Places in India You Must Visit in 2025 (State-wise List)",
    excerpt: "From the snow-capped peaks of the Himalayas to the backwaters of Kerala, here is the ultimate bucket list of 50+ destinations for every traveler.",
    category: "Itineraries",
    state: "India",
    country: "India",
    season: "All Year",
    image: tajMahalImg,
    date: "Jan 02, 2025",
    readTime: "25 min read",
    snippet: "The top tourist places in India for 2025 include the Taj Mahal (Agra), Jaipur (Rajasthan), Kerala Backwaters, and Goa beaches. For offbeat travel, consider Ziro Valley, Spiti, and Hampi. This comprehensive guide covers key attractions across all 28 states.",
    relatedQuestions: [
      { question: "Which is the No 1 tourist place in India?", answer: "The Taj Mahal in Agra remains the number one tourist attraction in India, drawing millions of international and domestic visitors annually." },
      { question: "Which is the most beautiful state in India?", answer: "Kerala (God's Own Country) is often cited as the most beautiful state for its lush greenery and backwaters, while Kashmir is known as 'Paradise on Earth'." },
      { question: "Best places to visit in India for couples?", answer: "Goa, Andaman Islands, Manali, Udaipur, and Alleppey are top choices for couples seeking romance and scenic beauty." }
    ],
    content: null
  },
  {
    id: "5",
    slug: "manali-winter-guide-2025",
    title: "Manali in Winter: A Complete Snow Guide (2025 Edition)",
    excerpt: "Experience the magic of Manali covered in a blanket of snow. Best time to visit, snow activities in Solang Valley, and staying in an igloo.",
    category: "Destinations",
    state: "Himachal Pradesh",
    country: "India",
    season: "Winter",
    image: manaliImg,
    date: "Dec 20, 2024",
    readTime: "10 min read",
    snippet: "The best time to visit Manali for snowfall is from late December to February. Solang Valley offers skiing and paragliding, while Sethan Village (Hampta) provides unique igloo stays. Pack heavy woolens and waterproof boots.",
    relatedQuestions: [
      { question: "Is Manali open in December?", answer: "Yes, Manali is open and very popular in December for Christmas and New Year celebrations, though some high-altitude roads may be closed due to snow." },
      { question: "How much does a trip to Manali cost?", answer: "A 4-day budget trip to Manali costs around ₹8,000 - ₹12,000 per person, including Volvo bus tickets from Delhi, budget stays, and food." },
      { question: "Is driving to Manali safe in winter?", answer: "Driving can be risky due to black ice. It is recommended to hire experienced local drivers or take the Volvo bus if you are not accustomed to mountain driving." }
    ],
    content: null
  },
  {
    id: "6",
    slug: "andaman-islands-scuba-diving-guide",
    title: "Andaman Islands: The Ultimate Scuba Diving & Beach Guide",
    excerpt: "Dive into the turquoise waters of Havelock and Neil Island. A guide to the best beaches, scuba certification costs, and ferry bookings.",
    category: "Sustainable Travel",
    state: "Andaman & Nicobar",
    country: "India",
    season: "Winter",
    image: andamanImg,
    date: "Jan 05, 2025",
    readTime: "14 min read",
    snippet: "Havelock Island (Swaraj Dweep) is the best place for scuba diving in India, specifically at Nemo Reef and The Wall. Radhanagar Beach is consistently ranked among Asia's best beaches for its pristine white sand and sunset views.",
    relatedQuestions: [
      { question: "Do Indians need a passport for Andaman?", answer: "No, Indian citizens do not need a passport to visit the Andaman & Nicobar Islands. A valid government ID like Aadhar or Voter ID is sufficient." },
      { question: "Best time to visit Andaman?", answer: "October to May is the best time to visit Andaman as the weather is pleasant and seas are calm for water sports. Monsoons (June-Sept) can be unpredictable." },
      { question: "Cost of scuba diving in Andaman?", answer: "A discovery scuba dive for beginners costs between ₹3,500 to ₹5,500. A PADI Open Water certification course costs around ₹25,000." }
    ],
    content: null
  },
  {
    id: "7",
    slug: "varanasi-spiritual-guide",
    title: "Varanasi: A Spiritual Journey Through the Oldest Living City",
    excerpt: "Witness the mesmerizing Ganga Aarti, explore the narrow lanes of Kashi, and understand the profound history of India's spiritual capital.",
    category: "Culture",
    state: "Uttar Pradesh",
    country: "India",
    season: "Winter",
    image: varanasiImg,
    date: "Nov 15, 2024",
    readTime: "11 min read",
    snippet: "Varanasi (Kashi) is best experienced by taking a sunrise boat ride on the Ganges and witnessing the evening Ganga Aarti at Dashashwamedh Ghat. Try the famous Blue Lassi and explore the weaving districts for Banarasi silk.",
    relatedQuestions: [
      { question: "Why is Varanasi famous?", answer: "Varanasi is considered the spiritual capital of India, famous for its Kashi Vishwanath Temple, the burning ghats (Manikarnika), and its ancient history dating back 3000 years." },
      { question: "Is Varanasi safe for solo travelers?", answer: "Yes, Varanasi is generally safe, but the narrow lanes can be confusing. It is advisable to stay near the main ghats and be cautious of touts." },
      { question: "What food is famous in Varanasi?", answer: "Don't miss the Kachori Sabzi for breakfast, Malaiyo (winter sweet), Tamatar Chaat, and the world-famous Banarasi Paan." }
    ],
    content: null
  },
  {
    id: "8",
    slug: "rann-utsav-kutch-guide",
    title: "Rann of Kutch: A Guide to the White Desert Festival 2025",
    excerpt: "Camping under the full moon on a salt desert. Everything you need to know about Rann Utsav bookings, permits, and cultural performances.",
    category: "Festivals",
    state: "Gujarat",
    country: "India",
    season: "Winter",
    image: kutchImg,
    date: "Dec 05, 2024",
    readTime: "9 min read",
    snippet: "Rann Utsav is a cultural festival held in the White Rann of Kutch, Gujarat. The best time to visit is during the full moon nights. Visitors need a permit to enter the salt desert, which can be obtained at the Bhirandiyara check post.",
    relatedQuestions: [
      { question: "When is Rann Utsav 2025?", answer: "Rann Utsav typically runs from November to February. The 2024-2025 edition dates are Nov 1st to Feb 28th." },
      { question: "How to reach Rann of Kutch?", answer: "The nearest airport and railway station is Bhuj (80km away). From Bhuj, you can hire a taxi or take a bus to Dhordo, the tent city." },
      { question: "Is Rann Utsav worth the cost?", answer: "While the official tent city is expensive, staying in nearby homestays in Hodka or Gorewali offers a more authentic and affordable experience." }
    ],
    content: null
  },
  {
    id: "1",
    slug: "best-hostels-gokarna-workation-2025",
    title: "Best Hostels in Gokarna for Workation 2025: WiFi Speed & Vibe Check",
    excerpt: "Looking for the perfect spot to work from the beach? We tested WiFi speeds and power backup at the top 10 hostels in Gokarna.",
    category: "Workations",
    state: "Karnataka",
    country: "India",
    season: "Winter",
    image: gokarnaImg,
    date: "Dec 15, 2024",
    readTime: "8 min read",
    snippet: "The best hostel for workation in Gokarna in 2025 is Zostel Gokarna due to its dedicated coworking space, reliable Starlink WiFi (100Mbps+), and 24/7 power backup. For budget travelers, Trippr Gokarna offers the best value with decent connectivity.",
    relatedQuestions: [
      { question: "Is WiFi good in Gokarna?", answer: "WiFi in Gokarna has improved significantly in 2024. Most cafes and premium hostels now offer fiber connections, though power cuts are frequent so backup is essential." },
      { question: "Which beach is best for staying in Gokarna?", answer: "Kudle Beach is best for accessibility and cafes, while Om Beach offers better views. For peace and quiet, choose Paradise or Half Moon Beach." },
      { question: "How much does a workation in Gokarna cost?", answer: "A monthly workation in Gokarna costs between ₹15,000 to ₹35,000 ($180-$420) depending on your accommodation choice and dining habits." }
    ],
    content: null 
  },
  {
    id: "2",
    slug: "ziro-valley-music-festival-budget-guide",
    title: "Ziro Valley Music Festival Budget Guide: Total Cost Breakdown",
    excerpt: "Planning for Ziro 2025? Here is exactly how much you need to save, from inner line permits to tent camping costs.",
    category: "Budget Hacks",
    state: "Arunachal Pradesh",
    country: "India",
    season: "Autumn",
    image: ziroImg,
    date: "Nov 28, 2024",
    readTime: "12 min read",
    snippet: "A 4-day trip to Ziro Festival of Music typically costs ₹12,000 - ₹15,000 per person ex-Guwahati. This includes festival passes (₹6,000), camping (₹3,000), food (₹2,000), and local transport. Book early to save 20%.",
    relatedQuestions: [
      { question: "Do I need a permit for Ziro Valley?", answer: "Yes, an Inner Line Permit (ILP) is mandatory for Indian nationals, and a Protected Area Permit (PAP) for foreigners." },
      { question: "Is alcohol allowed in Ziro?", answer: "Yes, local rice beer (Apong) is a specialty and widely available. Standard alcohol is also available but slightly pricier than MRP." },
      { question: "How to reach Ziro cheaply?", answer: "Take an overnight train from Guwahati to Naharlagun, then a shared sumo taxi to Ziro for the most budget-friendly route." }
    ],
    content: null
  },
  {
    id: "3",
    slug: "spiti-valley-bike-trip-cost-couples",
    title: "Spiti Valley Bike Trip Cost for Couples: 10-Day Itinerary",
    excerpt: "The ultimate guide to riding through the middle land. Fuel costs, bike rentals in Manali, and homestay prices for two.",
    category: "Itineraries",
    state: "Himachal Pradesh",
    country: "India",
    season: "Summer",
    image: spitiImg,
    date: "Oct 10, 2024",
    readTime: "15 min read",
    snippet: "A 10-day Spiti Valley bike trip for a couple costs approximately ₹35,000 - ₹45,000. Bike rental (Himalayan) takes ₹12,000, fuel ₹5,000, accommodation ₹10,000, and food/permits cover the rest.",
    relatedQuestions: [
      { question: "Is it safe for couples in Spiti?", answer: "Spiti is extremely safe for couples. The locals are hospitable and crime is virtually non-existent." },
      { question: "Best time for bike trip to Spiti?", answer: "June to September is the ideal window when all roads including Kunzum Pass are open and snow is cleared." },
      { question: "Can we rent bikes in Kaza?", answer: "It is better to rent bikes in Manali or Shimla as options in Kaza are limited and often less maintained." }
    ],
    content: null
  },
  {
    id: "10",
    slug: "hostel-cooking-guide-save-money",
    title: "How to Cook in Hostels: Save ₹500/Day on Food",
    excerpt: "Stop eating out for every meal. Here are 5 one-pot recipes you can make in any hostel kitchen for under ₹100.",
    category: "Budget Hacks",
    state: "India",
    country: "India",
    season: "All Year",
    image: hostelImg,
    date: "Feb 10, 2025",
    readTime: "7 min read",
    snippet: "Cooking your own breakfast and dinner in hostel kitchens can save you up to ₹15,000 per month on long trips. Essential items to carry include a small spice kit, instant oats, and reusable containers.",
    relatedQuestions: [
        { question: "Do hostels provide free food?", answer: "Most hostels offer free breakfast (toast/eggs), but lunch and dinner are usually paid. Using the communal kitchen is free." },
        { question: "What should I cook in a hostel?", answer: "Pasta, oatmeal, egg bhurji, and one-pot rice dishes are easiest as they require minimal utensils and cleanup." }
    ],
    content: null
  },
  {
    id: "11",
    slug: "overnight-bus-travel-india-guide",
    title: "Mastering Overnight Buses in India: Sleep Better & Pay Less",
    excerpt: "Volvo vs. Scania vs. Non-AC Sleeper. Which one is worth the money? Plus, how to pick the safest seat.",
    category: "Budget Hacks",
    state: "India",
    country: "India",
    season: "All Year",
    image: busImg,
    date: "Feb 08, 2025",
    readTime: "9 min read",
    snippet: "Overnight sleeper buses save you the cost of a hotel room for one night. Always book a 'lower berth' in the middle of the bus for the least bumps. Apps like RedBus often offer cheaper rates than offline agents.",
    relatedQuestions: [
        { question: "Is it safe to travel by bus at night in India?", answer: "Yes, reputable operators like Zingbus and IntrCity are safe and offer GPS tracking. Avoid unbranded local buses for long overnight journeys." },
        { question: "Which seat is best in a sleeper bus?", answer: "Lower berths are more stable than upper berths. Avoid the last row (bumpy) and the first row (headlight glare/horn noise)." }
    ],
    content: null
  },
  {
    id: "12",
    slug: "street-food-safety-guide-india",
    title: "Eat Street Food Without Getting Sick: The Iron Stomach Guide",
    excerpt: "Don't let 'Delhi Belly' ruin your trip. Learn how to identify safe stalls, what to avoid, and the rule of 'Peel it, Boil it, or Leave it'.",
    category: "Budget Hacks",
    state: "India",
    country: "India",
    season: "All Year",
    image: streetFoodImg,
    date: "Feb 05, 2025",
    readTime: "8 min read",
    snippet: "To eat street food safely, choose stalls with high turnover (fresh food), avoid tap water and raw chutneys, and stick to hot, cooked-in-front-of-you dishes like aloo tikki or dosa.",
    relatedQuestions: [
        { question: "Is street food cheaper than restaurants?", answer: "Yes, street food costs 1/5th the price of a restaurant meal. A filling meal can cost as little as ₹50-₹80." },
        { question: "What medicine to carry for food poisoning?", answer: "Carry ORS, probiotics, and activated charcoal. Consult a doctor before taking antibiotics." }
    ],
    content: null
  },
  {
    id: "13",
    slug: "sharing-cabs-taxis-india-apps",
    title: "Taxi Cost Splitting: Apps & Tricks to Travel for Cheap",
    excerpt: "How to use BlaBlaCar, find travel buddies on Instagram, and split costs for expensive routes like Manali-Leh.",
    category: "Budget Hacks",
    state: "India",
    country: "India",
    season: "All Year",
    image: sharingTaxiImg,
    date: "Feb 01, 2025",
    readTime: "6 min read",
    snippet: "Sharing a taxi can reduce travel costs by 75%. Use BlaBlaCar for intercity rides or join destination-specific WhatsApp/Facebook groups to find fellow travelers to split cab fares.",
    relatedQuestions: [
        { question: "Is BlaBlaCar safe in India?", answer: "Generally yes, as profiles are verified. Always check reviews and ratings before booking a ride." },
        { question: "How to find people to share cabs?", answer: "Check hostel notice boards or search for 'Travel Partners [Destination]' groups on Facebook." }
    ],
    content: null
  },
  {
    id: "14",
    slug: "flight-booking-hacks-india-2025",
    title: "Secret Flight Booking Hacks: Save ₹2000 on Every Ticket",
    excerpt: "Incognito mode is a myth. Here is what actually works: VPN tricks, student discounts, and the 'Goldilocks Window'.",
    category: "Budget Hacks",
    state: "India",
    country: "India",
    season: "All Year",
    image: flightDealsImg,
    date: "Jan 28, 2025",
    readTime: "10 min read",
    snippet: "Book domestic flights 3-4 weeks in advance for the best rates. Use Skyscanner's 'Whole Month' view to find the cheapest dates. Booking directly on the airline website often saves convenience fees.",
    relatedQuestions: [
        { question: "Does incognito mode lower flight prices?", answer: "No, this is largely a myth. Prices are determined by demand and yield management algorithms, not your cookies." },
        { question: "Which day is cheapest to fly?", answer: "Mid-week flights (Tuesday/Wednesday) are typically cheaper than weekends." }
    ],
    content: null
  },
  {
    id: "15",
    slug: "packing-light-save-baggage-fees",
    title: "One Bag Travel: Avoid Excess Baggage Fees Forever",
    excerpt: "How to pack for a 2-week trip in a 40L backpack. The art of layering and choosing multi-purpose clothing.",
    category: "Budget Hacks",
    state: "India",
    country: "India",
    season: "All Year",
    image: packingImg,
    date: "Jan 25, 2025",
    readTime: "8 min read",
    snippet: "Travel with carry-on only to save time and money. Wear your heaviest items (jacket/boots) on the flight. Use packing cubes to compress clothes and organize your bag.",
    relatedQuestions: [
        { question: "What is the cabin baggage limit in India?", answer: "Most domestic airlines allow 7kg cabin baggage. Some budget fares (like Indigo Saver) may charge for cabin bags, so check the fine print." },
        { question: "Can I carry a laptop bag extra?", answer: "Yes, most airlines allow one laptop bag/handbag in addition to your 7kg cabin luggage." }
    ],
    content: null
  },
  {
    id: "16",
    slug: "camping-vs-hotels-india-cost",
    title: "Camping vs. Hotels: When Does It Actually Save Money?",
    excerpt: "Camping isn't always cheaper. We break down the costs of buying gear vs. renting spots vs. budget hotels.",
    category: "Budget Hacks",
    state: "Himachal Pradesh",
    country: "India",
    season: "Summer",
    image: campingImg,
    date: "Jan 20, 2025",
    readTime: "9 min read",
    snippet: "BYOT (Bring Your Own Tent) saves money only on long trips (7+ days). For short trips, renting a tent or staying in a hostel dorm is often cheaper and less hassle than carrying gear.",
    relatedQuestions: [
        { question: "Is wild camping legal in India?", answer: "It varies by state. In Himachal and Ladakh, it is generally tolerated away from settlements. In National Parks, it is strictly illegal." },
        { question: "How much does a good tent cost?", answer: "A decent 2-person trekking tent (Quechua) costs around ₹3,000 - ₹5,000." }
    ],
    content: null
  },
  {
    id: "17",
    slug: "general-unreserved-train-travel-guide",
    title: "The Unreserved General Class Guide: Extreme Budget Travel",
    excerpt: "Traveling across India for ₹500? It's possible if you dare to take the General Class. Survival tips inside.",
    category: "Budget Hacks",
    state: "India",
    country: "India",
    season: "All Year",
    image: localTrainImg,
    date: "Jan 15, 2025",
    readTime: "11 min read",
    snippet: "General class tickets are 1/5th the price of Sleeper. To survive, board from the starting station to get a seat, carry plenty of water, and avoid traveling during major festivals like Diwali/Chhath.",
    relatedQuestions: [
        { question: "Can I upgrade my general ticket?", answer: "Yes, you can approach the TTE and pay the difference + penalty to upgrade to Sleeper/AC if berths are available." },
        { question: "Is general class safe for solo women?", answer: "It can be extremely crowded and uncomfortable. It is generally recommended to opt for Sleeper or Ladies Coupe instead." }
    ],
    content: null
  },
  {
    id: "18",
    slug: "water-bottle-hack-save-plastic-money",
    title: "Stop Buying Water: Save ₹3000/Month and the Planet",
    excerpt: "Bottled water adds up fast. Why you need a filtered bottle or how to find free RO water stations across India.",
    category: "Budget Hacks",
    state: "India",
    country: "India",
    season: "All Year",
    image: waterBottleImg,
    date: "Jan 10, 2025",
    readTime: "5 min read",
    snippet: "Carrying a filtered water bottle (like Lifestraw or Brita) allows you to drink tap water safely. Alternatively, fill up at Railway RO stations where 1L costs just ₹5.",
    relatedQuestions: [
        { question: "Is railway station water safe?", answer: "The RO water from designated 'Water Vending Machines' on platforms is safe and chilled. Avoid tap water from washrooms." },
        { question: "How much plastic do I save?", answer: "A traveler drinks 3 bottles a day. Switching to reusable saves ~90 plastic bottles a month." }
    ],
    content: null
  },
  {
    id: "19",
    slug: "student-discounts-travel-india",
    title: "The Power of a Student ID: Discounts You Didn't Know Existed",
    excerpt: "From monuments to flight tickets, your college ID is a goldmine. Here is where you can use it.",
    category: "Budget Hacks",
    state: "India",
    country: "India",
    season: "All Year",
    image: studentIdImg,
    date: "Jan 08, 2025",
    readTime: "6 min read",
    snippet: "A valid Student ID gets you huge discounts (up to 90%) on entry tickets to ASI monuments (Taj Mahal, Qutub Minar). Airlines like Indigo and Air India also offer 'Student Fares' with extra baggage allowance.",
    relatedQuestions: [
        { question: "Does ISIC card work in India?", answer: "Yes, the International Student Identity Card (ISIC) is accepted at many tourist sites and for Microsoft/Adobe software discounts." },
        { question: "What is the age limit for student flights?", answer: "Most airlines offer student fares for ages 12-26. You must show a valid school/university ID at check-in." }
    ],
    content: null
  }
];

export const CATEGORY_DETAILS: Record<string, { description: string, subTopics: string[] }> = {
  "Workations": {
    description: "Find the best places to work remotely. We review WiFi speeds, coworking spaces, and community vibes.",
    subTopics: ["Coliving Spaces", "Digital Nomad Visas", "Cafe Reviews", "Tech Gear"]
  },
  "Budget Hacks": {
    description: "Travel longer for less. Expert tips on saving money on flights, accommodation, and food without missing out.",
    subTopics: ["Cheap Flights", "Hostel Life", "Street Food Guide", "Transport Hacks"]
  },
  "Sustainable Travel": {
    description: "Leave no trace. Guides on eco-friendly stays, volunteering, and ethical animal tourism.",
    subTopics: ["Eco Lodges", "Volunteering", "Plastic-Free Tips", "Community Tourism"]
  },
  "Itineraries": {
    description: "Day-by-day plans crafted by experts. From weekend getaways to month-long expeditions.",
    subTopics: ["Weekend Trips", "Road Trips", "Backpacking Routes", "Family Vacations"]
  },
  "Gear Reviews": {
    description: "Tested in the field. Honest reviews of backpacks, cameras, shoes, and tech for travelers.",
    subTopics: ["Backpacks", "Cameras", "Clothing", "Travel Tech"]
  },
  "Destinations": {
    description: "Deep dives into specific locations. Where to stay, what to eat, and hidden gems.",
    subTopics: ["Beaches", "Mountains", "Cities", "Offbeat"]
  },
  "Culture": {
    description: "Immerse yourself. Festivals, food history, art, and local traditions.",
    subTopics: ["Food History", "Art & Craft", "Local Traditions", "Language"]
  },
  "Festivals": {
    description: "Celebrate with the locals. Guides to the best music, cultural, and religious festivals.",
    subTopics: ["Music Festivals", "Religious Events", "Cultural Fairs", "Seasonal Events"]
  }
};

export const CATEGORIES = [
  "Workations", "Budget Hacks", "Sustainable Travel", "Itineraries", "Gear Reviews", "Destinations", "Culture", "Festivals"
];

export const STATES = [
  "Himachal Pradesh", "Uttarakhand", "Kerala", "Rajasthan", "Goa", "Karnataka", "Arunachal Pradesh", "Gujarat", "Andaman & Nicobar", "Uttar Pradesh", "India"
];

export const SEASONS = [
  "Winter", "Summer", "Monsoon", "Autumn", "All Year"
];

export interface TouristPlace {
  id: string;
  name: string;
  country: string;
  location: string;
  image: string;
  description: string;
  rating: number;
}

export const TOURIST_PLACES: TouristPlace[] = [
  {
    id: "1",
    name: "Taj Mahal",
    country: "India",
    location: "Agra, Uttar Pradesh",
    image: tajMahalImg,
    description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife.",
    rating: 4.9
  },
  {
    id: "2",
    name: "Kerala Backwaters",
    country: "India",
    location: "Alleppey, Kerala",
    image: keralaImg,
    description: "A network of brackish lagoons and lakes lying parallel to the Arabian Sea coast (known as the Malabar Coast) of Kerala state in southern India.",
    rating: 4.8
  },
  {
    id: "3",
    name: "Hawa Mahal",
    country: "India",
    location: "Jaipur, Rajasthan",
    image: hawaMahalImg,
    description: "The 'Palace of Winds' is a palace in Jaipur, India. It is constructed of red and pink sandstone and is famous for its unique honeycomb structure.",
    rating: 4.6
  },
  {
    id: "4",
    name: "Pangong Lake",
    country: "India",
    location: "Ladakh",
    image: pangongImg,
    description: "An endorheic lake in the Himalayas situated at a height of about 4,350 m. It is 134 km long and extends from India to China.",
    rating: 4.9
  },
  {
    id: "5",
    name: "Munnar Tea Gardens",
    country: "India",
    location: "Munnar, Kerala",
    image: munnarImg,
    description: "Munnar is a town and hill station in the Idukki district of the southwestern Indian state of Kerala. It is famous for its rolling hills of tea plantations.",
    rating: 4.7
  },
  {
    id: "6",
    name: "Lake Palace",
    country: "India",
    location: "Udaipur, Rajasthan",
    image: udaipurImg,
    description: "A former summer palace of the royal dynasty of Mewar, now a luxury hotel. It is located on the island of Jag Niwas in Lake Pichola.",
    rating: 4.8
  },
  {
    id: "7",
    name: "Mysore Palace",
    country: "India",
    location: "Mysore, Karnataka",
    image: mysoreImg,
    description: "A historical palace and a royal residence at Mysore in the Indian State of Karnataka. It is the official residence of the Wadiyar dynasty.",
    rating: 4.7
  },
  {
    id: "8",
    name: "Rishikesh",
    country: "India",
    location: "Uttarakhand",
    image: rishikeshImg,
    description: "Known as the 'Yoga Capital of the World', it lies at the foothills of the Himalayas and is famous for river rafting and spiritual retreats.",
    rating: 4.6
  },
  {
    id: "9",
    name: "Golden Temple",
    country: "India",
    location: "Amritsar, Punjab",
    image: goldenTempleImg,
    description: "The holiest Gurdwara of Sikhism, located in the city of Amritsar, Punjab, India. It is famous for its gilded dome and the sacred pool.",
    rating: 4.9
  },
  {
    id: "10",
    name: "Varanasi Ghats",
    country: "India",
    location: "Varanasi, Uttar Pradesh",
    image: varanasiImg,
    description: "The riverfront steps leading to the banks of the River Ganges. The city has 88 ghats, most of which are used for bathing and puja ceremonies.",
    rating: 4.8
  },
  {
    id: "11",
    name: "Solang Valley",
    country: "India",
    location: "Manali, Himachal Pradesh",
    image: manaliImg,
    description: "A side valley at the top of the Kullu Valley in Himachal Pradesh, known for its summer and winter sport conditions.",
    rating: 4.5
  },
  {
    id: "12",
    name: "Radhanagar Beach",
    country: "India",
    location: "Havelock Island, Andaman",
    image: andamanImg,
    description: "Ranked as one of the best beaches in Asia, known for its pristine white sand and turquoise blue waters.",
    rating: 4.9
  }
];
