import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Eye } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:min-h-screen lg:grid-cols-2">
        {/* Left Side - Mint Background with Photos */}
        <div className="bg-emerald-50 p-12">
          <div className="flex h-full flex-col justify-between">
            <div>
              <h2 className="mb-2 text-4xl font-bold">
                Erstelle deine KI-Bilder in
              </h2>
              <h2 className="mb-12 text-4xl font-bold">
                <span className="text-orange-500">Minuten</span>, nicht Tagen
              </h2>

              {/* Photo Grid */}
              <div className="grid grid-cols-4 gap-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
                    <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                      {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <Card className="mt-8 bg-white p-6">
              <div className="mb-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-3 italic text-gray-700">
                &quot;Ich war skeptisch, aber die Ergebnisse haben mich völlig überzeugt! Die Bilder
                sehen so professionell aus, dass niemand glaubt, dass sie mit KI erstellt wurden.
                Perfekt für meine Bewerbungen!&quot;
              </p>
              <p className="text-sm font-semibold">- Lisa Schmidt</p>
            </Card>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex items-center justify-center p-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-2">
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
            </div>

            <h1 className="mb-2 text-2xl font-bold">Erstelle dein Konto um anzufangen.</h1>

            {/* Social Login */}
            <div className="mt-6 space-y-3">
              <Button variant="outline" className="w-full" size="lg">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Mit Google fortfahren
              </Button>

              <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                <svg className="mr-2 h-5 w-5" fill="white" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Mit LinkedIn fortfahren
              </Button>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">Oder</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Email/Password Form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-Mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="deine@email.de"
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Passwort
                </label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <Button className="w-full bg-gray-300 text-gray-700 hover:bg-gray-400" size="lg">
                Registrieren
              </Button>
            </form>

            {/* Sign In Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Bereits Mitglied?{" "}
              <Link href="#" className="font-semibold text-gray-900 hover:underline">
                Anmelden
              </Link>
            </p>

            {/* Terms */}
            <p className="mt-4 text-center text-xs text-gray-500">
              Mit Ihrer Registrierung stimmen Sie den{" "}
              <Link href="#" className="underline">
                Nutzungsbedingungen
              </Link>{" "}
              von kibildergenerator.de zu.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="p-6">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-2">
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
          </div>

          <h1 className="mb-6 text-xl font-bold">Erstelle dein Konto um anzufangen.</h1>

          {/* Social Login */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Mit Google fortfahren
            </Button>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <svg className="mr-2 h-5 w-5" fill="white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Mit LinkedIn fortfahren
            </Button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Oder</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email-mobile" className="block text-sm font-medium text-gray-700">
                E-Mail
              </label>
              <Input
                id="email-mobile"
                type="email"
                placeholder="deine@email.de"
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="password-mobile" className="block text-sm font-medium text-gray-700">
                Passwort
              </label>
              <div className="relative mt-1">
                <Input
                  id="password-mobile"
                  type="password"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <Eye className="h-5 w-5" />
                </button>
              </div>
            </div>

            <Button className="w-full bg-gray-300 text-gray-700 hover:bg-gray-400">
              Registrieren
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Bereits Mitglied?{" "}
            <Link href="#" className="font-semibold text-gray-900 hover:underline">
              Anmelden
            </Link>
          </p>

          {/* Terms */}
          <p className="mt-4 text-center text-xs text-gray-500">
            Mit Ihrer Registrierung stimmen Sie den{" "}
            <Link href="#" className="underline">
              Nutzungsbedingungen
            </Link>{" "}
            von bewerbungsbild.ai zu.
          </p>

          {/* Photo Grid - Mobile */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
                <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials - Mobile */}
          <div className="mt-8 space-y-6">
            {[
              {
                name: "Sarah M.",
                text: "Perfekte Qualität! Das Bewerbungsbild sieht professionell aus und wurde schnell geliefert.",
              },
              {
                name: "Michael R.",
                text: "Einfach zu bedienen und das Ergebnis übertrifft meine Erwartungen. Sehr empfehlenswert!",
              },
              {
                name: "Anna K.",
                text: "Studioqualität von zuhause aus. Ich bin begeistert von der KI-Technologie!",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-4">
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-2 text-sm italic text-gray-700">&quot;{testimonial.text}&quot;</p>
                <p className="text-xs font-semibold">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
