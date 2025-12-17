import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Have a question about a destination? Want to partner with us? Or just want to say hi? 
          We'd love to hear from you. Fill out the form below or reach us via email.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
             <div className="bg-slate-50 p-8 rounded-2xl">
                <h3 className="font-bold text-xl mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full text-primary shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wide mb-1">Email</h4>
                      <p className="text-gray-600">hello@blossomtravels.com</p>
                      <p className="text-gray-600">partnerships@blossomtravels.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full text-primary shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wide mb-1">Office</h4>
                      <p className="text-gray-600">123 Nomad Street, Indiranagar</p>
                      <p className="text-gray-600">Bangalore, Karnataka 560038, India</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="font-bold text-lg mb-2">Work With Us</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We are always looking for authentic travel stories. If you are a travel writer with a unique perspective, pitch us your story.
                </p>
                <Button variant="outline" className="w-full">View Submission Guidelines</Button>
             </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                  <input id="first-name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                  <input id="last-name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <select id="subject" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white">
                  <option>General Inquiry</option>
                  <option>Press / Media</option>
                  <option>Advertising</option>
                  <option>Report an Issue</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[120px]" placeholder="How can we help you?" />
              </div>

              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
