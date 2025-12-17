import { Header, Footer } from "@/components/layout";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none">
          <p>Last updated: December 17, 2025</p>
          
          <h3>1. Agreement to Terms</h3>
          <p>
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) 
            and BlossomTravels ("we," "us" or "our"), concerning your access to and use of the BlossomTravels website.
          </p>

          <h3>2. Intellectual Property Rights</h3>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, 
            website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, 
            service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, 
            and are protected by copyright and trademark laws.
          </p>

          <h3>3. User Representations</h3>
          <p>
            By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; 
            (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, 
            whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; 
            and (5) your use of the Site will not violate any applicable law or regulation.
          </p>

          <h3>4. Third-Party Websites and Content</h3>
          <p>
            The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, 
            photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content 
            or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content 
            are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for 
            any Third-Party Websites accessed through the Site.
          </p>

          <h3>5. Modifications and Interruptions</h3>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. 
            However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the 
            Site without notice at any time.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These Terms shall be governed by and defined following the laws of India. BlossomTravels and yourself irrevocably consent that the 
            courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
