import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";

const TOP_ATTRACTIONS = [
  "Eiffel Tower", "Colosseum", "Statue of Liberty", "Machu Picchu", "Taj Mahal", "Great Wall of China", 
  "Sagrada Familia", "Louvre Museum", "Burj Khalifa", "Petra", "Grand Canyon", "Pyramids of Giza"
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
        <Tabs defaultValue="countries" className="w-full">
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
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  <span className="font-medium text-gray-900 w-6">{i + 1}.</span>
                  {item}
                </div>
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
                  <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    <span className="font-medium text-gray-900 w-6">{i + 1}.</span>
                    {item}
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8">
              {TOP_CATEGORIES.map((item, i) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  <span className="font-medium text-gray-900 w-6">{i + 1}.</span>
                  {item}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
