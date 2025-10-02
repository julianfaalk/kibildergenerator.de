import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      {/* Top badges bar */}
      <div className="border-b bg-gray-50">
        <div className="container mx-auto px-4 py-2">
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
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">KI Bilder Generator</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#bewertungen"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Bewertungen
            </Link>
            <Link
              href="#preise"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Preise
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-sm font-medium">
                Anmelden
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-gray-900 text-sm font-semibold hover:bg-gray-800">
                KI Bilder erstellen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
