import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";

const TOP_ATTRACTIONS = [
  { name: "Eiffel Tower", id: "13" },
  { name: "Colosseum", id: "14" },
  { name: "Statue of Liberty", id: "15" },
  { name: "Machu Picchu", id: "16" },
  { name: "Taj Mahal", id: "1" },
  { name: "Great Wall of China", id: "17" },
  { name: "Sagrada Familia", id: "18" },
  { name: "Louvre Museum", id: "19" },
  { name: "Burj Khalifa", id: "20" },
  { name: "Petra", id: "21" },
  { name: "Grand Canyon", id: "22" },
  { name: "Pyramids of Giza", id: "23" }
];

const TOP_DESTINATIONS = [
  "Paris", "London", "Rome", "Bali", "New York City", "Tokyo", 
  "Dubai", "Barcelona", "Bangkok", "Istanbul", "Singapore", "Amsterdam"
];

const TOP_COUNTRIES = [
  "United States", "Thailand", "Italy", "Spain", "United Kingdom", "United Arab Emirates", 
  "France", "Vietnam", "Australia", "Japan", "New Zealand", "India", 
  "Mexico", "Türkiye", "Portugal", "Poland", "Indonesia", "Netherlands", 
  "Hungary", "Morocco", "Germany", "Egypt", "Austria", "South Africa"
];

const TOP_CATEGORIES = [
  "Beaches", "Mountains", "Historical Sites", "City Breaks", "Adventure", "Food & Drink",
  "Wildlife", "Road Trips", "Islands", "Festivals", "Luxury", "Budget Travel"
];

export function TopDestinations() {
  return (
    <section className="py-16 bg-white border-t">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="attractions" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start h-auto bg-transparent border-b rounded-none p-0 mb-8 gap-6">
            <TabsTrigger 
              value="attractions" 
              className="rounded-none border-b-2 border-transparent px-0 py-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-foreground font-semibold text-lg"
            >
              Top attractions worldwide
            </TabsTrigger>
            <TabsTrigger 
              value="destinations" 
              className="rounded-none border-b-2 border-transparent px-0 py-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-foreground font-semibold text-lg"
            >
              Top destinations
            </TabsTrigger>
            <TabsTrigger 
              value="countries" 
              className="rounded-none border-b-2 border-transparent px-0 py-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-foreground font-semibold text-lg"
            >
              Top countries to visit
            </TabsTrigger>
            <TabsTrigger 
              value="categories" 
              className="rounded-none border-b-2 border-transparent px-0 py-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-foreground font-semibold text-lg"
            >
              Top attraction categories
            </TabsTrigger>
          </TabsList>

          <TabsContent value="attractions" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8">
              {TOP_ATTRACTIONS.map((item, i) => (
                <Link key={item.id} href={`/place/${item.id}`}>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors group">
                    <span className="font-medium text-gray-900 w-6">{i + 1}.</span>
                    <span className="group-hover:underline decoration-1 underline-offset-2">{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="destinations" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8">
              {TOP_DESTINATIONS.map((item, i) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  <span className="font-medium text-gray-900 w-6">{i + 1}.</span>
                  {item}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="countries" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-8">
              {TOP_COUNTRIES.map((item, i) => (
                <Link key={item} href={`/country/${item}`}>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors group">
                    <span className="font-medium text-gray-900 w-6">{i + 1}.</span>
                    <span className="group-hover:underline decoration-1 underline-offset-2">{item}</span>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8">
              {TOP_CATEGORIES.map((item, i) => (
                <Link key={item} href={`/category/${item}`}>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors group">
                    <span className="font-medium text-gray-900 w-6">{i + 1}.</span>
                    <span className="group-hover:underline decoration-1 underline-offset-2">{item}</span>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
