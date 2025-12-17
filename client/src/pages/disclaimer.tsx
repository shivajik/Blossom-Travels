import { Header, Footer } from "@/components/layout";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold mb-8">Disclaimer</h1>
        <div className="prose prose-slate max-w-none">
          <p>Last updated: December 17, 2025</p>
          
          <h3>1. General Disclaimer</h3>
          <p>
            The information provided by BlossomTravels (“we,” “us” or “our”) on this website is for general informational purposes only. 
            All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, 
            regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
          </p>

          <h3>2. Travel Disclaimer</h3>
          <p>
            Travel information (prices, schedules, visa requirements, etc.) can change rapidly. While we strive to keep our content updated, 
            we cannot guarantee that all information is current at the time of your reading. You should verify critical information (like visa rules, 
            health requirements, and safety warnings) with official sources before traveling. We are not responsible for any loss, injury, or inconvenience 
            sustained by any person resulting from information published on this site.
          </p>

          <h3>3. Affiliate Disclaimer</h3>
          <p>
            This website may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate 
            website using such links. Our affiliates include, but are not limited to:
          </p>
          <ul>
            <li>Booking.com</li>
            <li>Agoda</li>
            <li>Skyscanner</li>
            <li>Amazon Associates</li>
          </ul>
          <p>
            We only recommend products and services that we have personally used or believe will add value to our readers. The price you pay remains the same 
            whether you use our affiliate link or not.
          </p>

          <h3>4. External Links Disclaimer</h3>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. 
            Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
