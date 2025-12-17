import { Link, useLocation } from "wouter";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Destinations", href: "/#destinations" },
    { label: "Workations", href: "/category/workations" },
    { label: "Budget Hacks", href: "/category/budget-hacks" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <span className="font-serif text-2xl font-bold tracking-tight text-primary">Blossom.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                location === item.href ? "text-primary" : "text-muted-foreground"
              }`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button className="hidden md:flex bg-primary text-white hover:bg-primary/90 font-medium">
            Subscribe
          </Button>
          
          <button 
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-base font-medium text-muted-foreground hover:text-primary cursor-pointer" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-primary mt-4">Subscribe</Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <span className="font-serif text-2xl font-bold text-primary block mb-4">Blossom.</span>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Your trusted guide for authentic, budget-friendly, and sustainable travel experiences. 
              We help you explore the world without breaking the bank.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#destinations" className="hover:text-primary cursor-pointer">Destinations</Link></li>
              <li><Link href="/category/itineraries" className="hover:text-primary cursor-pointer">Itineraries</Link></li>
              <li><Link href="/category/gear-reviews" className="hover:text-primary cursor-pointer">Gear Reviews</Link></li>
              <li><Link href="/category/budget-hacks" className="hover:text-primary cursor-pointer">Travel Hacks</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary cursor-pointer">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary cursor-pointer">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-primary cursor-pointer">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary cursor-pointer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          © 2025 BlossomTravels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
