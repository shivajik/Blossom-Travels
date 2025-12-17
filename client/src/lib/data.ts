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

// Worldwide Attractions Images
import eiffelTowerImg from "@assets/stock_images/eiffel_tower_paris_4873ce6e.jpg";
import colosseumImg from "@assets/stock_images/colosseum_rome_7f03dc6b.jpg";
import statueOfLibertyImg from "@assets/stock_images/statue_of_liberty_ne_41072b60.jpg";
import machuPicchuImg from "@assets/stock_images/machu_picchu_peru_054c6efb.jpg";
import greatWallImg from "@assets/stock_images/great_wall_of_china_f45cc7c6.jpg";
import sagradaFamiliaImg from "@assets/stock_images/sagrada_familia_barc_ff6f2931.jpg";
import louvreImg from "@assets/stock_images/louvre_museum_paris_af435aea.jpg";
import burjKhalifaImg from "@assets/stock_images/burj_khalifa_dubai_14c69d32.jpg";
import petraImg from "@assets/stock_images/petra_jordan_09c0ab36.jpg";
import grandCanyonImg from "@assets/stock_images/grand_canyon_usa_988474d3.jpg";
import pyramidsImg from "@assets/stock_images/pyramids_of_giza_egy_18e81fca.jpg";

// New Post Images
import jaipurImg from "@assets/stock_images/jaipur_pink_city_pal_cc94fc29.jpg";
import baliImg from "@assets/stock_images/bali_rice_terrace_98e6d4d5.jpg";
import tokyoImg from "@assets/stock_images/tokyo_shibuya_crossi_3685bb23.jpg";
import nycImg from "@assets/stock_images/new_york_city_skylin_50e96e47.jpg";
import londonImg from "@assets/stock_images/london_big_ben_55ae4a73.jpg";
import romeImg from "@assets/stock_images/rome_trevi_fountain_8ee90cef.jpg";
import sydneyImg from "@assets/stock_images/sydney_opera_house_8803fef7.jpg";
import santoriniImg from "@assets/stock_images/santorini_greece_a738c69f.jpg";
import kyotoImg from "@assets/stock_images/kyoto_bamboo_forest_8b14f933.jpg";
import cappadociaImg from "@assets/stock_images/cappadocia_turkey_8f92f332.jpg";
import maldivesImg from "@assets/stock_images/maldives_overwater_b_bf6c6a4a.jpg";
import swissAlpsImg from "@assets/stock_images/swiss_alps_hiking_016159f8.jpg";
import northernLightsImg from "@assets/stock_images/northern_lights_icel_893e8117.jpg";
import safariImg from "@assets/stock_images/safari_south_africa_ef5f3191.jpg";
import cherryBlossomsImg from "@assets/stock_images/cherry_blossoms_japa_587955b9.jpg";
import ajantaImg from "@assets/stock_images/ajanta_and_ellora_ca_e22276f8.jpg";


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
  },
  {
    id: "20",
    slug: "bali-digital-nomad-guide",
    title: "Living in Bali: The Ultimate Digital Nomad Guide 2025",
    excerpt: "From visa rules to the best coworking cafes in Canggu and Ubud. Here is everything you need to know about moving to the Island of Gods.",
    category: "Workations",
    state: "Bali",
    country: "Indonesia",
    season: "All Year",
    image: baliImg,
    date: "Feb 12, 2025",
    readTime: "15 min read",
    snippet: "Bali remains the top destination for digital nomads. Canggu offers a vibrant community and surfing, while Ubud provides a more serene, jungle environment. Internet speeds have improved drastically with fiber optics available in most villas.",
    relatedQuestions: [
        { question: "What visa do I need for Bali?", answer: "Most nomads use the B211A Social Visa which allows a 60-day stay extendable up to 6 months. The new 'Second Home Visa' is also an option for wealthier applicants." },
        { question: "Cost of living in Bali?", answer: "A comfortable lifestyle costs between $1,500 to $2,500 per month, including a private villa, scooter rental, and eating out daily." }
    ],
    content: null
  },
  {
    id: "21",
    slug: "cherry-blossom-forecast-japan-2025",
    title: "Japan Cherry Blossom Forecast 2025: When & Where to Go",
    excerpt: "Planning a trip for Sakura season? Check the latest forecast dates for Tokyo, Kyoto, and Osaka to catch the blooms at their peak.",
    category: "Destinations",
    state: "Tokyo",
    country: "Japan",
    season: "Spring",
    image: cherryBlossomsImg,
    date: "Jan 15, 2025",
    readTime: "8 min read",
    snippet: "The cherry blossom front (Sakura Zensen) typically starts in Okinawa in January and reaches Tokyo/Kyoto by late March. The full bloom (mankai) usually lasts only a week, so timing is crucial.",
    relatedQuestions: [
        { question: "When is the best time for Cherry Blossoms?", answer: "For Tokyo and Kyoto, the last week of March to the first week of April is usually the best time." },
        { question: "Is Japan expensive during Sakura season?", answer: "Yes, accommodation prices can double. It is highly recommended to book hotels at least 3-4 months in advance." }
    ],
    content: null
  },
  {
    id: "22",
    slug: "safari-guide-south-africa-kruger",
    title: "First Time Safari Guide: Kruger National Park on a Budget",
    excerpt: "You don't need to spend thousands of dollars to see the Big 5. How to self-drive Kruger and stay in affordable rest camps.",
    category: "Wildlife",
    state: "Mpumalanga",
    country: "South Africa",
    season: "Winter",
    image: safariImg,
    date: "Feb 20, 2025",
    readTime: "12 min read",
    snippet: "Kruger National Park is one of the few safari destinations where you can self-drive in a standard hatchback. Staying in SANParks rest camps like Skukuza or Lower Sabie is far cheaper than private luxury lodges.",
    relatedQuestions: [
        { question: "Do I need a 4x4 for Kruger?", answer: "No, the main roads in Kruger are paved and the gravel roads are well-maintained. A standard sedan is sufficient for most tourist routes." },
        { question: "Best time to visit Kruger?", answer: "The dry winter months (May to September) are best for game viewing as the grass is low and animals congregate around waterholes." }
    ],
    content: null
  },
  {
    id: "23",
    slug: "northern-lights-iceland-guide",
    title: "Chasing the Aurora: A 5-Day Iceland Road Trip Itinerary",
    excerpt: "The best spots to see the Northern Lights, rental car tips for winter driving, and how to photograph the Aurora Borealis.",
    category: "Itineraries",
    state: "Southern Region",
    country: "Iceland",
    season: "Winter",
    image: northernLightsImg,
    date: "Jan 30, 2025",
    readTime: "10 min read",
    snippet: "To see the Northern Lights, you need clear skies and high solar activity (KP index). The best time is from September to April. Renting a 4x4 with studded tires is essential for safety in winter.",
    relatedQuestions: [
        { question: "Can I see Northern Lights in Reykjavik?", answer: "It is possible if the aurora is strong, but light pollution makes it difficult. It's best to drive at least 30 mins out of the city." },
        { question: "Is Iceland expensive?", answer: "Yes, Iceland is one of the most expensive countries. Cook your own meals and shop at Bonus supermarkets to save money." }
    ],
    content: null
  },
  {
    id: "24",
    slug: "swiss-alps-hiking-beginners",
    title: "Hiking the Swiss Alps: Best Trails for Beginners",
    excerpt: "Experience the breathtaking beauty of Switzerland on foot. Easy to moderate trails in Grindelwald, Zermatt, and Lauterbrunnen.",
    category: "Adventure",
    state: "Bernese Oberland",
    country: "Switzerland",
    season: "Summer",
    image: swissAlpsImg,
    date: "Feb 25, 2025",
    readTime: "9 min read",
    snippet: "The Panorama Trail in Männlichen and the Five Lakes Walk in Zermatt offer stunning views with minimal technical difficulty. Use the Swiss Travel Pass for unlimited access to trains, buses, and boats.",
    relatedQuestions: [
        { question: "Do I need a guide for hiking in Switzerland?", answer: "No, trails are extremely well-marked with yellow signs. You can easily hike independently." },
        { question: "Best time for hiking?", answer: "July to September is the main hiking season when all trails are snow-free and cable cars are operating." }
    ],
    content: null
  },
  {
    id: "25",
    slug: "cappadocia-hot-air-balloon-guide",
    title: "Cappadocia Hot Air Balloon: Is It Worth the Hype?",
    excerpt: "Floating over fairy chimneys at sunrise. A complete guide to booking, costs, and safety for this bucket-list experience.",
    category: "Adventure",
    state: "Nevşehir",
    country: "Türkiye",
    season: "Spring",
    image: cappadociaImg,
    date: "Mar 05, 2025",
    readTime: "7 min read",
    snippet: "A hot air balloon ride in Cappadocia costs between €150 to €250 per person. Flights take off at sunrise and offer unparalleled views of the unique rock formations. Book in advance as they sell out quickly.",
    relatedQuestions: [
        { question: "Is hot air ballooning safe?", answer: "Yes, pilots are highly trained and flights are regulated by the Turkish Civil Aviation Authority. Flights are cancelled if wind conditions are not perfect." },
        { question: "How many days should I stay in Cappadocia?", answer: "Stay at least 3 days to allow a buffer for balloon cancellations due to weather." }
    ],
    content: null
  },
  {
    id: "26",
    slug: "maldives-budget-travel-guide",
    title: "Maldives on a Budget: Local Islands vs. Private Resorts",
    excerpt: "Yes, you can visit the Maldives without spending a fortune. How to stay on local islands like Maafushi and Thoddoo.",
    category: "Budget Hacks",
    state: "Kaafu Atoll",
    country: "Maldives",
    season: "Winter",
    image: maldivesImg,
    date: "Feb 18, 2025",
    readTime: "11 min read",
    snippet: "Staying in guesthouses on local islands costs a fraction of private resorts ($50-$80/night). You can still do excursions like snorkeling with sharks, visiting sandbanks, and day trips to luxury resorts.",
    relatedQuestions: [
        { question: "Is alcohol allowed on local islands?", answer: "No, alcohol is strictly prohibited on local inhabited islands. It is only available on private resort islands or 'floating bar' boats." },
        { question: "Can I wear a bikini on local islands?", answer: "Only on designated 'Bikini Beaches'. On other parts of the island, modest dress is required out of respect for local culture." }
    ],
    content: null
  },
  {
    id: "27",
    slug: "santorini-honeymoon-guide",
    title: "The Ultimate Santorini Honeymoon Guide: Oia, Fira & Beyond",
    excerpt: "Watching the world's most famous sunset. Best romantic hotels, caldera views, and wine tasting tours.",
    category: "Luxury",
    state: "South Aegean",
    country: "Greece",
    season: "Summer",
    image: santoriniImg,
    date: "Mar 10, 2025",
    readTime: "10 min read",
    snippet: "For the classic Santorini experience, stay in a cave hotel in Oia or Imerovigli. Rent an ATV to explore the Red Beach and the ancient ruins of Akrotiri. Don't miss a sunset dinner at Ammoudi Bay.",
    relatedQuestions: [
        { question: "Is Santorini too crowded?", answer: "In July and August, it is extremely crowded. Visit in May, June, or September for great weather and fewer crowds." },
        { question: "How to get around Santorini?", answer: "The local bus system (KTEL) is cheap and reliable. For more freedom, rent an ATV or a small car." }
    ],
    content: null
  },
  {
    id: "28",
    slug: "nyc-first-time-visitor-guide",
    title: "New York City: A 4-Day Itinerary for First Timers",
    excerpt: "From Times Square to Central Park. How to navigate the subway, see a Broadway show, and eat the best pizza.",
    category: "City Breaks",
    state: "New York",
    country: "United States",
    season: "Autumn",
    image: nycImg,
    date: "Mar 15, 2025",
    readTime: "14 min read",
    snippet: "Walk the High Line, take the Staten Island Ferry for free views of the Statue of Liberty, and explore the distinct neighborhoods of Manhattan. Get a MetroCard for unlimited subway rides.",
    relatedQuestions: [
        { question: "Is NYC safe for tourists?", answer: "Yes, NYC is generally very safe for tourists. Exercise standard big-city precautions, especially on the subway late at night." },
        { question: "Which pass is best for attractions?", answer: "The New York CityPASS or Go City Explorer Pass can save you up to 40% if you plan to visit multiple paid attractions like the Empire State Building and museums." }
    ],
    content: null
  },
  {
    id: "29",
    slug: "rome-food-guide-pasta-gelato",
    title: "Eating Your Way Through Rome: Best Pasta, Pizza & Gelato",
    excerpt: "Avoid tourist traps and eat like a Roman. Guide to Trastevere, Testaccio, and the best Carbonara in the city.",
    category: "Food & Drink",
    state: "Lazio",
    country: "Italy",
    season: "Spring",
    image: romeImg,
    date: "Mar 20, 2025",
    readTime: "8 min read",
    snippet: "Don't leave Rome without trying the four classic pastas: Carbonara, Cacio e Pepe, Amatriciana, and Gricia. For the best gelato, look for shops that keep their gelato in metal tins (pozzetti), not piled high.",
    relatedQuestions: [
        { question: "Do I need to tip in Rome?", answer: "Tipping is not mandatory in Italy as a 'coperto' (cover charge) is usually added. Leaving 1-2 Euros or rounding up is appreciated but not expected." },
        { question: "What time is dinner in Rome?", answer: "Romans eat late. Dinner service typically starts at 7:30 PM, but restaurants get busy around 8:30 PM or 9:00 PM." }
    ],
    content: null
  },
  {
    id: "30",
    slug: "ajanta-ellora-caves-aurangabad-travel-guide",
    title: "Ajanta & Ellora Caves: The Ultimate Travel Guide to Aurangabad's UNESCO Treasures",
    excerpt: "Explore the ancient rock-cut caves of Ajanta and Ellora, divine Shirdi, and the historic city of Aurangabad. A complete itinerary and travel guide.",
    category: "Destinations",
    state: "Maharashtra",
    country: "India",
    season: "Winter/Monsoon",
    image: ajantaImg,
    date: "Dec 18, 2025",
    readTime: "15 min read",
    snippet: "Ajanta and Ellora Caves are UNESCO World Heritage Sites located near Aurangabad. Ajanta is famous for Buddhist paintings, while Ellora features Hindu, Buddhist, and Jain sculptures, including the monolithic Kailasa Temple.",
    relatedQuestions: [
      { question: "How many days are needed for Ajanta and Ellora?", answer: "You need at least 2 days: one full day for Ajanta (100km away) and another for Ellora and Aurangabad city sights." },
      { question: "Best time to visit Ajanta Ellora?", answer: "June to March is ideal. Monsoons (June-Sept) make the surroundings lush green, while winter (Oct-March) is pleasant for walking." },
      { question: "How to reach Ajanta Caves from Aurangabad?", answer: "Ajanta is about 100km from Aurangabad. The best way is to hire a cab from Blossom Travels or take a state transport bus." }
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
  bestTime?: string;
  entryFee?: string;
  timings?: string;
  reviews?: number;
}

export const TOURIST_PLACES: TouristPlace[] = [
  {
    id: "1",
    name: "Taj Mahal",
    country: "India",
    location: "Agra, Uttar Pradesh",
    image: tajMahalImg,
    description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife. It is one of the Seven Wonders of the World and a symbol of eternal love.",
    rating: 4.9,
    bestTime: "October to March",
    entryFee: "₹50 (Indians), ₹1100 (Foreigners)",
    timings: "Sunrise to Sunset (Closed on Fridays)",
    reviews: 12500
  },
  {
    id: "2",
    name: "Kerala Backwaters",
    country: "India",
    location: "Alleppey, Kerala",
    image: keralaImg,
    description: "A network of brackish lagoons and lakes lying parallel to the Arabian Sea coast (known as the Malabar Coast) of Kerala state in southern India. Houseboat cruises here are a unique experience.",
    rating: 4.8,
    bestTime: "September to March",
    entryFee: "Varies by Houseboat",
    timings: "24 Hours",
    reviews: 8400
  },
  {
    id: "3",
    name: "Hawa Mahal",
    country: "India",
    location: "Jaipur, Rajasthan",
    image: hawaMahalImg,
    description: "The 'Palace of Winds' is a palace in Jaipur, India. It is constructed of red and pink sandstone and is famous for its unique honeycomb structure with 953 small windows called Jharokhas.",
    rating: 4.6,
    bestTime: "October to March",
    entryFee: "₹50 (Indians), ₹200 (Foreigners)",
    timings: "9:00 AM - 4:30 PM",
    reviews: 6200
  },
  {
    id: "4",
    name: "Pangong Lake",
    country: "India",
    location: "Ladakh",
    image: pangongImg,
    description: "An endorheic lake in the Himalayas situated at a height of about 4,350 m. It is 134 km long and extends from India to China. The lake is famous for its changing colors from shades of blue to green to red.",
    rating: 4.9,
    bestTime: "May to September",
    entryFee: "Permit Required",
    timings: "Sunrise to Sunset",
    reviews: 5100
  },
  {
    id: "5",
    name: "Munnar Tea Gardens",
    country: "India",
    location: "Munnar, Kerala",
    image: munnarImg,
    description: "Munnar is a town and hill station in the Idukki district of the southwestern Indian state of Kerala. It is famous for its rolling hills of tea plantations, mist-covered valleys, and rare flora like the Neelakurinji.",
    rating: 4.7,
    bestTime: "September to March",
    entryFee: "Free (Museums charge entry)",
    timings: "9:00 AM - 5:00 PM",
    reviews: 7300
  },
  {
    id: "6",
    name: "Lake Palace",
    country: "India",
    location: "Udaipur, Rajasthan",
    image: udaipurImg,
    description: "A former summer palace of the royal dynasty of Mewar, now a luxury hotel. It is located on the island of Jag Niwas in Lake Pichola. The white marble walls and the setting make it look like it's floating on the lake.",
    rating: 4.8,
    bestTime: "October to March",
    entryFee: "Restricted to Guests/Tours",
    timings: "24 Hours (For Guests)",
    reviews: 4100
  },
  {
    id: "7",
    name: "Mysore Palace",
    country: "India",
    location: "Mysore, Karnataka",
    image: mysoreImg,
    description: "A historical palace and a royal residence at Mysore in the Indian State of Karnataka. It is the official residence of the Wadiyar dynasty. The palace is a blend of Hindu, Mughal, Rajput, and Gothic styles.",
    rating: 4.7,
    bestTime: "October to February",
    entryFee: "₹70 (Indians), ₹200 (Foreigners)",
    timings: "10:00 AM - 5:30 PM",
    reviews: 9800
  },
  {
    id: "8",
    name: "Rishikesh",
    country: "India",
    location: "Uttarakhand",
    image: rishikeshImg,
    description: "Known as the 'Yoga Capital of the World', it lies at the foothills of the Himalayas and is famous for river rafting, spiritual retreats, and the iconic Laxman Jhula.",
    rating: 4.6,
    bestTime: "February to May, September to November",
    entryFee: "Free",
    timings: "24 Hours",
    reviews: 6500
  },
  {
    id: "9",
    name: "Golden Temple",
    country: "India",
    location: "Amritsar, Punjab",
    image: goldenTempleImg,
    description: "The holiest Gurdwara of Sikhism, located in the city of Amritsar, Punjab, India. It is famous for its gilded dome, the sacred pool, and the Langar (community kitchen) that serves thousands daily.",
    rating: 4.9,
    bestTime: "October to March",
    entryFee: "Free",
    timings: "24 Hours",
    reviews: 15000
  },
  {
    id: "10",
    name: "Varanasi Ghats",
    country: "India",
    location: "Varanasi, Uttar Pradesh",
    image: varanasiImg,
    description: "The riverfront steps leading to the banks of the River Ganges. The city has 88 ghats, most of which are used for bathing and puja ceremonies. Dashashwamedh Ghat is famous for the evening Ganga Aarti.",
    rating: 4.8,
    bestTime: "November to February",
    entryFee: "Free (Boat rides chargeable)",
    timings: "24 Hours",
    reviews: 11000
  },
  {
    id: "11",
    name: "Solang Valley",
    country: "India",
    location: "Manali, Himachal Pradesh",
    image: manaliImg,
    description: "A side valley at the top of the Kullu Valley in Himachal Pradesh, known for its summer and winter sport conditions. It offers skiing, paragliding, and breathtaking views of snow-capped peaks.",
    rating: 4.5,
    bestTime: "December to February (Snow), April to June (Summer)",
    entryFee: "Free (Activities chargeable)",
    timings: "9:00 AM - 6:00 PM",
    reviews: 5800
  },
  {
    id: "12",
    name: "Radhanagar Beach",
    country: "India",
    location: "Havelock Island, Andaman",
    image: andamanImg,
    description: "Ranked as one of the best beaches in Asia, known for its pristine white sand and turquoise blue waters. It is perfect for swimming and watching the sunset.",
    rating: 4.9,
    bestTime: "October to May",
    entryFee: "Free",
    timings: "Sunrise to Sunset",
    reviews: 4500
  },
  {
    id: "13",
    name: "Eiffel Tower",
    country: "France",
    location: "Paris, France",
    image: eiffelTowerImg,
    description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
    rating: 4.8,
    bestTime: "June to September",
    entryFee: "€26.80 (Adults)",
    timings: "9:30 AM - 11:45 PM",
    reviews: 250000
  },
  {
    id: "14",
    name: "Colosseum",
    country: "Italy",
    location: "Rome, Italy",
    image: colosseumImg,
    description: "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today.",
    rating: 4.7,
    bestTime: "April to May, September to October",
    entryFee: "€16 (Adults)",
    timings: "8:30 AM - 7:00 PM",
    reviews: 180000
  },
  {
    id: "15",
    name: "Statue of Liberty",
    country: "USA",
    location: "New York City, USA",
    image: statueOfLibertyImg,
    description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.",
    rating: 4.6,
    bestTime: "April to June, September to November",
    entryFee: "$24.80 (Adults)",
    timings: "8:30 AM - 4:00 PM",
    reviews: 150000
  },
  {
    id: "16",
    name: "Machu Picchu",
    country: "Peru",
    location: "Cusco Region, Peru",
    image: machuPicchuImg,
    description: "Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre mountain ridge.",
    rating: 4.9,
    bestTime: "May to October",
    entryFee: "$45 (Adults)",
    timings: "6:00 AM - 5:30 PM",
    reviews: 90000
  },
  {
    id: "17",
    name: "Great Wall of China",
    country: "China",
    location: "Beijing, China",
    image: greatWallImg,
    description: "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups.",
    rating: 4.7,
    bestTime: "September to October",
    entryFee: "CNY 40 (Adults)",
    timings: "7:30 AM - 5:30 PM",
    reviews: 120000
  },
  {
    id: "18",
    name: "Sagrada Familia",
    country: "Spain",
    location: "Barcelona, Spain",
    image: sagradaFamiliaImg,
    description: "The Basílica de la Sagrada Família is a large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain.",
    rating: 4.8,
    bestTime: "April to June, September to October",
    entryFee: "€26 (Adults)",
    timings: "9:00 AM - 6:00 PM",
    reviews: 160000
  },
  {
    id: "19",
    name: "Louvre Museum",
    country: "France",
    location: "Paris, France",
    image: louvreImg,
    description: "The Louvre, or the Louvre Museum, is the world's most-visited museum and a historic monument in Paris, France.",
    rating: 4.7,
    bestTime: "October to March",
    entryFee: "€17 (Adults)",
    timings: "9:00 AM - 6:00 PM (Closed on Tuesdays)",
    reviews: 200000
  },
  {
    id: "20",
    name: "Burj Khalifa",
    country: "UAE",
    location: "Dubai, UAE",
    image: burjKhalifaImg,
    description: "The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest building.",
    rating: 4.7,
    bestTime: "November to March",
    entryFee: "AED 149 (Adults)",
    timings: "8:30 AM - 11:00 PM",
    reviews: 140000
  },
  {
    id: "21",
    name: "Petra",
    country: "Jordan",
    location: "Ma'an Governorate, Jordan",
    image: petraImg,
    description: "Petra is a historic and archaeological city in southern Jordan. Petra lies around Jabal Al-Madbah in a basin surrounded by mountains which form the eastern flank of the Arabah valley.",
    rating: 4.9,
    bestTime: "March to May, September to November",
    entryFee: "JD 50 (1 Day)",
    timings: "6:00 AM - 6:00 PM",
    reviews: 60000
  },
  {
    id: "22",
    name: "Grand Canyon",
    country: "USA",
    location: "Arizona, USA",
    image: grandCanyonImg,
    description: "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles long, up to 18 miles wide and attains a depth of over a mile.",
    rating: 4.8,
    bestTime: "March to May, September to November",
    entryFee: "$35 (Vehicle)",
    timings: "24 Hours (South Rim)",
    reviews: 110000
  },
  {
    id: "23",
    name: "Pyramids of Giza",
    country: "Egypt",
    location: "Giza, Egypt",
    image: pyramidsImg,
    description: "The Giza Pyramid Complex, also called the Giza Necropolis, is the site on the Giza Plateau in Greater Cairo, Egypt that includes the Great Pyramid of Giza, the Pyramid of Khafre, and the Pyramid of Menkaure.",
    rating: 4.7,
    bestTime: "October to April",
    entryFee: "EGP 200 (Adults)",
    timings: "8:00 AM - 5:00 PM",
    reviews: 130000
  },
  {
    id: "24",
    name: "Jaipur City Palace",
    country: "India",
    location: "Jaipur, Rajasthan",
    image: jaipurImg,
    description: "The City Palace, Jaipur was established at the same time as the city of Jaipur, by Maharaja Sawai Jai Singh II, who moved his court to Jaipur from Amber, in 1727.",
    rating: 4.6,
    bestTime: "October to March",
    entryFee: "₹300 (Indians), ₹700 (Foreigners)",
    timings: "9:30 AM - 5:00 PM",
    reviews: 45000
  },
  {
    id: "25",
    name: "Tegalalang Rice Terrace",
    country: "Indonesia",
    location: "Bali, Indonesia",
    image: baliImg,
    description: "The Tegalalang Rice Terrace in Ubud is famous for its beautiful scenes of rice paddies involving the subak (traditional Balinese cooperative irrigation system).",
    rating: 4.7,
    bestTime: "May to September",
    entryFee: "IDR 15,000",
    timings: "8:00 AM - 6:00 PM",
    reviews: 60000
  },
  {
    id: "26",
    name: "Shibuya Crossing",
    country: "Japan",
    location: "Tokyo, Japan",
    image: tokyoImg,
    description: "Shibuya Crossing is a popular scramble crossing in Shibuya, Tokyo, Japan. It is often called 'the busiest pedestrian crossing in the world'.",
    rating: 4.5,
    bestTime: "All Year",
    entryFee: "Free",
    timings: "24 Hours",
    reviews: 80000
  },
  {
    id: "27",
    name: "Empire State Building",
    country: "USA",
    location: "New York City, USA",
    image: nycImg,
    description: "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. It was the world's tallest building for nearly 40 years.",
    rating: 4.7,
    bestTime: "All Year",
    entryFee: "$44 (Adults)",
    timings: "10:00 AM - 12:00 AM",
    reviews: 95000
  },
  {
    id: "28",
    name: "Big Ben",
    country: "United Kingdom",
    location: "London, UK",
    image: londonImg,
    description: "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster in London, and is usually extended to refer to both the clock and the clock tower.",
    rating: 4.6,
    bestTime: "May to September",
    entryFee: "Tours Only",
    timings: "Exterior View 24/7",
    reviews: 75000
  },
  {
    id: "29",
    name: "Trevi Fountain",
    country: "Italy",
    location: "Rome, Italy",
    image: romeImg,
    description: "The Trevi Fountain is a fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini.",
    rating: 4.8,
    bestTime: "Early Morning / Late Night",
    entryFee: "Free",
    timings: "24 Hours",
    reviews: 110000
  },
  {
    id: "30",
    name: "Sydney Opera House",
    country: "Australia",
    location: "Sydney, Australia",
    image: sydneyImg,
    description: "The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings.",
    rating: 4.7,
    bestTime: "September to November, March to May",
    entryFee: "Tours from $43 AUD",
    timings: "9:00 AM - 5:00 PM (Tours)",
    reviews: 65000
  },
  {
    id: "31",
    name: "Oia",
    country: "Greece",
    location: "Santorini, Greece",
    image: santoriniImg,
    description: "Oia is a coastal town on the northwestern tip of Santorini, a Greek Aegean island. It is famous for its whitewashed houses carved into the rugged clifftops, and overlooks a vast caldera.",
    rating: 4.9,
    bestTime: "April to June, September to October",
    entryFee: "Free",
    timings: "24 Hours",
    reviews: 55000
  },
  {
    id: "32",
    name: "Arashiyama Bamboo Grove",
    country: "Japan",
    location: "Kyoto, Japan",
    image: kyotoImg,
    description: "The Arashiyama Bamboo Grove is a natural forest of bamboo in Arashiyama, Kyoto, Japan. The forest consists mostly of Moso bamboo and consists of several pathways for tourists and visitors.",
    rating: 4.6,
    bestTime: "Spring and Autumn",
    entryFee: "Free",
    timings: "24 Hours",
    reviews: 48000
  },
  {
    id: "33",
    name: "Fairy Chimneys",
    country: "Türkiye",
    location: "Cappadocia, Türkiye",
    image: cappadociaImg,
    description: "Cappadocia is famous for its unique rock formations and amazing hot air ballooning opportunities. The surreal landscapes are a result of volcanic eruptions and erosion.",
    rating: 4.9,
    bestTime: "April to June, September to November",
    entryFee: "Varies by site",
    timings: "Sunrise (Balloons)",
    reviews: 70000
  },
  {
    id: "34",
    name: "Ajanta & Ellora Caves",
    country: "India",
    location: "Aurangabad, Maharashtra",
    image: ajantaImg,
    description: "UNESCO World Heritage Sites famous for ancient rock-cut caves. Ajanta features exquisite Buddhist paintings, while Ellora showcases a confluence of Buddhist, Hindu, and Jain rock-cut monuments, including the monolithic Kailasa Temple.",
    rating: 4.8,
    bestTime: "June to March",
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    timings: "9:00 AM - 5:00 PM (Closed Mon/Tue)",
    reviews: 35000
  }
];
