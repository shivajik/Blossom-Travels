import { ArrowRight, Check, X, Clock, MapPin, Calendar, DollarSign, Star } from "lucide-react";

// Import images (simulated imports for data file)
import spitiImg from "@assets/stock_images/spiti_valley_majesti_57ba6d9c.jpg";
import gokarnaImg from "@assets/stock_images/gokarna_beach_cliff__ffce5080.jpg";
import ziroImg from "@assets/stock_images/ziro_valley_green_ri_1d4e1193.jpg";
import authorImg from "@assets/stock_images/traveler_writing_in__55b9860e.jpg";

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
  image: string;
  date: string;
  readTime: string;
  snippet: string; // The AEO Direct Answer
  content: React.ReactNode; // Using React Node for "MDX" simulation
  relatedQuestions: { question: string; answer: string }[];
};

export const POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "best-hostels-gokarna-workation-2025",
    title: "Best Hostels in Gokarna for Workation 2025: WiFi Speed & Vibe Check",
    excerpt: "Looking for the perfect spot to work from the beach? We tested WiFi speeds and power backup at the top 10 hostels in Gokarna.",
    category: "Workations",
    image: gokarnaImg,
    date: "Dec 15, 2024",
    readTime: "8 min read",
    snippet: "The best hostel for workation in Gokarna in 2025 is Zostel Gokarna due to its dedicated coworking space, reliable Starlink WiFi (100Mbps+), and 24/7 power backup. For budget travelers, Trippr Gokarna offers the best value with decent connectivity.",
    relatedQuestions: [
      { question: "Is WiFi good in Gokarna?", answer: "WiFi in Gokarna has improved significantly in 2024. Most cafes and premium hostels now offer fiber connections, though power cuts are frequent so backup is essential." },
      { question: "Which beach is best for staying in Gokarna?", answer: "Kudle Beach is best for accessibility and cafes, while Om Beach offers better views. For peace and quiet, choose Paradise or Half Moon Beach." },
      { question: "How much does a workation in Gokarna cost?", answer: "A monthly workation in Gokarna costs between ₹15,000 to ₹35,000 ($180-$420) depending on your accommodation choice and dining habits." }
    ],
    content: null // Will be populated in the component for simplicity
  },
  {
    id: "2",
    slug: "ziro-valley-music-festival-budget-guide",
    title: "Ziro Valley Music Festival Budget Guide: Total Cost Breakdown",
    excerpt: "Planning for Ziro 2025? Here is exactly how much you need to save, from inner line permits to tent camping costs.",
    category: "Budget Hacks",
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
  }
];

export const CATEGORIES = [
  "Workations", "Budget Hacks", "Sustainable Travel", "Itineraries", "Gear Reviews"
];
