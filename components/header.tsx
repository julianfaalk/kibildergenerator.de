"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Star, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-gray-200/40 bg-white/80 backdrop-blur-md">
      {/* Top badges bar */}
      <div className={`border-b border-b-gray-400/40 bg-gray-50/90 transition-all duration-300 ${isScrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-20 opacity-100"}`}>
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
              <Check className="h-4 w-4 text-[#20C997]" />
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
            <div className="flex h-12 w-12 items-center justify-center rounded-lg p-1.5 md:h-16 md:w-16 md:p-2">
              <Image
                src="/web/icons-384.svg"
                alt="KI Bilder Generator Logo"
                width={60}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">KI Bilder Generator</span>
          </Link>

          {/* Navigation Links - Desktop */}
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

          {/* CTA Buttons - Desktop */}
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link href="/login">
              <Button variant="ghost" className="h-11 text-base font-medium transition-colors hover:bg-gray-900 hover:text-white">
                Anmelden
              </Button>
            </Link>
            <Link href="/login">
              <Button className="h-11 rounded-lg bg-[#FF6B35] px-6 font-bold text-white transition-colors duration-200 hover:bg-[#FF5722]">
                KI Bilder erstellen
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="ml-auto md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-[100] h-screen w-screen overflow-hidden bg-white md:hidden">
          <div className="flex h-full flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg p-1.5">
                  <Image
                    src="/web/icons-384.svg"
                    alt="KI Bilder Generator Logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-lg font-bold text-gray-900">KI Bilder Generator</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Menü schließen"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <nav className="flex flex-col gap-6">
                <Link
                  href="#bewertungen"
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bewertungen
                </Link>
                <Link
                  href="#preise"
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Preise
                </Link>
                <div className="my-4 border-t border-gray-200" />
                <Link
                  href="/login"
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Anmelden
                </Link>
              </nav>

              <Link href="/login" className="mt-6">
                <Button className="w-full h-14 rounded-lg bg-[#FF6B35] text-lg font-bold text-white transition-colors hover:bg-[#FF5722]">
                  KI Bilder erstellen →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 
