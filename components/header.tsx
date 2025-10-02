"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      {/* Top badges bar */}
      <div className={`border-b bg-gray-50/90 transition-all duration-300 ${isScrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-20 opacity-100"}`}>
        <div className="container mx-auto px-4 sm:px-8 py-2.5">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">🇩🇪</span>
              <span className="font-medium">Made in Germany</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">8500+ zufriedene Kunden</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="font-medium">595,000+ Bewertungsfotos erstellt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 md:h-12 md:w-12">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-white md:h-7 md:w-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">KI Bilder Generator</span>
          </Link>

          {/* Navigation Links */}
          <nav className="ml-8 hidden items-center gap-6 md:flex">
            <Link
              href="#bewertungen"
              className="text-base font-medium text-gray-800/80 transition-colors hover:text-gray-900"
            >
              Bewertungen
            </Link>
            <Link
              href="#preise"
              className="text-base font-medium text-gray-800/80 transition-colors hover:text-gray-900"
            >
              Preise
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="ml-auto flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="h-11 text-base font-medium transition-colors hover:bg-gray-900 hover:text-white">
                Anmelden
              </Button>
            </Link>
            <Link href="/login">
              <Button className="h-11 rounded-lg border border-black bg-black px-6 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black">
                KI Bilder erstellen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
