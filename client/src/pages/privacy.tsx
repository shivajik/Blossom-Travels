import { Header, Footer } from "@/components/layout";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p>Last updated: December 17, 2025</p>
          
          <h3>1. Introduction</h3>
          <p>
            Welcome to BlossomTravels. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>

          <h3>2. Data We Collect</h3>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone number (if provided via contact forms).</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h3>3. Cookies</h3>
          <p>
            We use cookies and similar tracking technologies to track the activity on Our Service and store certain information. 
            Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
          </p>
          <p>
            <strong>Third-Party Cookies (AdSense):</strong> Google uses cookies to help serve the ads it displays on the websites of its partners, 
            such as websites displaying Google ads or participating in Google certified ad networks. When users visit a Google partner's website, 
            a cookie may be dropped on that end user's browser.
          </p>

          <h3>4. How We Use Your Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>To provide and maintain our Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our Service.</li>
            <li>To monitor the usage of our Service.</li>
            <li>To detect, prevent and address technical issues.</li>
          </ul>

          <h3>5. Data Security</h3>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, 
            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, 
            we cannot guarantee its absolute security.
          </p>

          <h3>6. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us via our Contact page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
