import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Check, Star, Shield, Lock, DollarSign, HandshakeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
            ⭐ DER #1 KI BILDER GENERATOR
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            KI Bilder erstellen mit{" "}<br />
            <span className="bg-emerald-500 px-2 text-white">eigenem Bild</span>{" "}
            <br />Professionell & Einzigartig
          </h1>

          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Erstellen Sie einzigartige KI-Bilder mit Ihren eigenen Fotos in wenigen Minuten.
            Professionelle Qualität mit künstlicher Intelligenz. Entwickelt in Deutschland.
          </p>

          <Button size="lg" className="mb-8 bg-orange-500 text-lg font-semibold hover:bg-orange-600">
            Jetzt KI Bilder erstellen <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Avatar key={i} className="h-10 w-10 border-2 border-white">
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-green-500 text-green-500" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              8500+ zufriedene Kunden
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="font-medium">BEKANNT AUS</span>
            <div className="flex gap-4">
              <div className="rounded bg-red-600 px-3 py-1 font-bold text-white">
                Heute
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 font-bold text-white">
                20
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative min-w-[200px] md:min-w-[250px]">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  Photo {i}
                </div>
              </div>
              <Badge className="absolute bottom-2 left-2 bg-emerald-500 text-xs">
                KI generiert
              </Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-600">
          BEWERTUNGEN & BEISPIELE
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">
          <span className="text-emerald-500">595.000+</span> KI Bilder{" "}
          <span className="block">erstellt</span>
        </h2>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center text-gray-600">
          Diese Bilder wurden alle mit KI aus eigenen Fotos erstellt.
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Katja Baran", role: "Poche Übersetzt", rating: 5, quote: "Sie können diese Bilder kaum von einem professionellen Foto..." },
            { name: "Irina S.", role: "IT", rating: 5, quote: "Die Bilder sind zu 90 % Top!" },
            { name: "Marco Meyer", role: "Marketing", rating: 5, quote: "Bei mir waren einige sehr gute Bilder dabei!" },
            { name: "Markus", role: "Vertrieb", rating: 5, quote: "Erstklassiger Service und durchaus authentisch!" },
          ].map((testimonial, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-square bg-gray-200">
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  Profile {i + 1}
                </div>
              </div>
              <CardContent className="p-4">
                <Badge className="mb-2 bg-emerald-500 text-xs">KI generiert</Badge>
                <p className="mb-2 italic text-gray-700">&quot;{testimonial.quote}&quot;</p>
                <div className="mb-1 flex items-center gap-1">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-semibold">{testimonial.name}</span>
                </div>
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" size="lg">
            Alle Bewertungen ansehen
          </Button>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            KI Bilder erstellen
          </Button>
        </div>
      </section>

      {/* Pricing Comparison Section - Mint Background */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Jedes Fotoshooting beinhaltet:</h3>
              <ul className="space-y-3">
                {[
                  "In maximal 30 Minuten fertig",
                  "8x günstiger als ein Fotograf",
                  "100+ Ergebnisse zur Auswahl",
                  "Bearbeitungscredits",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-sm">
              <div className="mb-2 text-5xl font-bold">€29</div>
              <div className="text-lg font-semibold">In 30 Minuten fertig</div>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <h3 className="mb-6 text-center text-2xl font-bold">Darum KI Bilder Generator:</h3>
            <ul className="space-y-3">
              {[
                "Täuschend echte KI-Bilder aus eigenen Fotos",
                "Ohne Studio, ohne Termin, 100% Online",
                "Unbegrenzte kreative Möglichkeiten",
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-center gap-3">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">SO FUNKTIONIERT&apos;S</h2>
        </div>

        {/* Step 1 */}
        <div className="mb-16">
          <div className="mb-8 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-xl font-bold text-white">
              1
            </div>
          </div>
          <h3 className="mb-4 text-center text-2xl font-bold">Fotos hochladen</h3>
          <p className="mb-8 text-center text-gray-600">
            Suche dein besten Bilder aus und lade sie hoch.
          </p>
          <div className="flex justify-center gap-8">
            <div className="h-48 w-32 rounded-lg bg-gray-200"></div>
            <div className="hidden h-64 w-32 rounded-3xl border-8 border-gray-800 bg-white md:block"></div>
            <div className="h-48 w-32 rounded-lg bg-gray-200"></div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-16">
          <div className="mb-8 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-xl font-bold text-white">
              2
            </div>
          </div>
          <h3 className="mb-4 text-center text-2xl font-bold">Bewerbungsbilder werden generiert</h3>
          <p className="mb-8 text-center text-gray-600">
            Unsere KI findet deine fotogensten Eigenschaften.
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-gray-200"></div>
            ))}
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <div className="mb-8 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-xl font-bold text-white">
              3
            </div>
          </div>
          <h3 className="mb-4 text-center text-2xl font-bold">Favoriten herunterladen</h3>
          <p className="mb-8 text-center text-gray-600">
            Verschiedene Hintergründe, Posen und Outfits um das perfekte Foto auszuwählen.
          </p>
          <div className="flex justify-center gap-4 overflow-x-auto">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="min-w-[150px]">
                <div className="aspect-[3/4] rounded-lg bg-gray-200"></div>
                <Badge className="mt-2 bg-emerald-500 text-xs">KI generiert</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Tools Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-wide text-emerald-600">
            WEITERE TOOLS
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Optimiere dein professionelles Auftreten
          </h2>
          <p className="text-center text-gray-600">
            Mit deinem Kauf erhältst du Zugriff auf nützliche Tools für dein professionelles Branding.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Bild-Stile anpassen",
              description: "Wähle aus verschiedenen KI-Stilen und verwandle deine Bilder in Kunstwerke, Portraits oder kreative Designs.",
            },
            {
              title: "Hintergrund ändern",
              description: "Ersetze Hintergründe automatisch mit KI – professionelle Studios, Landschaften oder kreative Szenen.",
            },
            {
              title: "Bildqualität verbessern",
              description: "Optimiere deine Bilder mit KI – höhere Auflösung, bessere Belichtung und perfekte Details.",
            },
            {
              title: "Kreative Filter",
              description: "Wende künstlerische Filter an und erstelle einzigartige Variationen deiner Bilder mit einem Klick.",
            },
          ].map((tool, i) => (
            <Card key={i} className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                <div className="h-6 w-6 rounded bg-emerald-200"></div>
              </div>
              <h3 className="mb-2 font-bold">{tool.title}</h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <Avatar key={i} className="h-10 w-10 border-2 border-white">
                <AvatarFallback>U{i}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="text-sm">
            <div className="font-semibold">92% unserer Kunden empfehlen uns weiter</div>
            <div className="text-gray-600">Vertraut von über 8500 zufriedenen Kunden</div>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-5 w-5 fill-emerald-500 text-emerald-500" />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="preise" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="h-10 w-10 border-2 border-white">
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <span className="text-sm font-medium">
                92% unserer Kunden empfehlen uns weiter
              </span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Transparente Preise, klare Leistungen</h2>
            <p className="mt-4 text-gray-600">
              Professionelle KI-Bildbearbeitung war noch nie so einfach und günstig. Unsere Pakete beginnen bei nur 29€ - <span className="font-semibold">unbegrenzte Kreativität</span> mit deinen eigenen Bildern.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {/* Basic */}
            <Card className="relative overflow-hidden p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold">Basic</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">€29</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Erhalte 40 KI-Bilder mit 4 verschiedenen Stilen und Hintergründen.
                </p>
              </div>
              <ul className="mb-6 space-y-3 text-sm">
                {[
                  "40 einzigartige KI-Bilder",
                  "4 verschiedene Bild-Stile",
                  "4 verschiedene Hintergründe",
                  "30 Minuten Bearbeitungszeit",
                  "5 Bearbeitungscredits",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                40 KI-Bilder in 30 Minuten
              </Button>
            </Card>

            {/* Professional */}
            <Card className="relative overflow-hidden border-2 border-emerald-500 p-6">
              <Badge className="absolute right-4 top-4 bg-emerald-500">BELIEBT</Badge>
              <div className="mb-6">
                <h3 className="text-xl font-bold">Professional</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">€39</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Erhalte 100 KI-Bilder mit 10 verschiedenen Stilen und Hintergründen.
                </p>
              </div>
              <ul className="mb-6 space-y-3 text-sm">
                {[
                  "100 einzigartige KI-Bilder",
                  "10 verschiedene Bild-Stile",
                  "10 verschiedene Hintergründe",
                  "10 Minuten Bearbeitungszeit",
                  "10 Bearbeitungscredits",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                100 KI-Bilder in 10 Minuten
              </Button>
            </Card>

            {/* Premium */}
            <Card className="relative overflow-hidden p-6">
              <Badge className="absolute right-4 top-4 bg-blue-500">BESTES ANGEBOT</Badge>
              <div className="mb-6">
                <h3 className="text-xl font-bold">Premium</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">€59</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Erhalte 200 KI-Bilder mit 20 verschiedenen Stilen und Hintergründen.
                </p>
              </div>
              <ul className="mb-6 space-y-3 text-sm">
                {[
                  "200 einzigartige KI-Bilder",
                  "20 verschiedene Bild-Stile",
                  "20 verschiedene Hintergründe",
                  "10 Minuten Bearbeitungszeit",
                  "20 Bearbeitungscredits",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                200 KI-Bilder in 10 Minuten
              </Button>
            </Card>
          </div>

          {/* Payment Methods */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex gap-2">
              <div className="h-8 w-12 rounded bg-gray-200"></div>
              <div className="h-8 w-12 rounded bg-gray-200"></div>
              <div className="h-8 w-12 rounded bg-gray-200"></div>
              <div className="h-8 w-12 rounded bg-gray-200"></div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
            <Lock className="h-4 w-4" />
            <span>SSL-verschlüsselte Bezahlung</span>
          </div>
        </div>
      </section>

      {/* Trust & Reviews */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Digitale Fotografie mit deutschem Qualitätsstandard
          </h2>
          <p className="text-center text-gray-600">
            Wir respektieren deine Daten und deine Entscheidung.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Unser Qualitätsversprechen",
              description: "Nicht überzeugt? Wir erstellen deine Fotos gern neu. Danach ist auch eine Rückerstattung möglich.",
            },
            {
              icon: Lock,
              title: "Deine Bilder bleiben deine Bilder",
              description: "Alle Rechte bleiben bei dir. Keine Nutzung, keine Weitergabe. Automatische Löschung nach 30 Tagen oder auf Wunsch sofort.",
            },
            {
              icon: DollarSign,
              title: "Klare Preise. Keine Abos.",
              description: "Du zahlst nur einmal. Es gibt keine Abos, keine versteckten Gebühren und keine laufenden Kosten.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                  <item.icon className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <h3 className="mb-2 font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
            Jetzt KI Bilder erstellen
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-emerald-600 md:text-4xl">
              Häufig gestellte Fragen
            </h2>
            <p className="text-gray-600">
              Alles was du über KI Bilder erstellen mit eigenem Bild wissen musst. Hast du weitere Fragen? Kontaktiere uns gerne.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-x-8 gap-y-6 md:grid-cols-2">
            {[
              {
                q: "Was ist KI Bilder Generator?",
                a: "KI Bilder Generator ist ein Online-Tool, das aus deinen eigenen Fotos einzigartige KI-Bilder erstellt – mit verschiedenen Stilen, Hintergründen und kreativen Effekten.",
              },
              {
                q: "Für wen eignet sich der Service?",
                a: "Für alle, die kreative und professionelle Bilder für Social Media, Bewerbungen, Websites oder persönliche Projekte brauchen – von Privatpersonen bis zu Unternehmen.",
              },
              {
                q: "Wie läuft die Erstellung ab?",
                a: "Du lädst deine eigenen Bilder hoch, wählst Stil und Hintergrund, und unsere KI erzeugt daraus mehrere kreative Varianten. Du prüfst die Ergebnisse und lädst deine Favoriten herunter.",
              },
              {
                q: "Wie realistisch sind die Ergebnisse?",
                a: "Unsere KI erstellt täuschend echte und kreative Bilder. Du bekommst eine Auswahl verschiedener Stile – von realistisch bis künstlerisch.",
              },
              {
                q: "Wie schnell bekomme ich meine Bilder?",
                a: "In der Regel innerhalb 10-30 Minuten. Die genaue Zeit hängt von der Serverauslastung ab.",
              },
              {
                q: "Welche Bilder soll ich hochladen?",
                a: "Finde einfach deine besten Bilder mit gleichmäßigem Licht und verschiedenen Perspektiven. Beachte auch unsere Hinweise im Upload Prozess. Vermeide starke Filter, Sonnenbrillen und extreme Schatten.",
              },
              {
                q: "Kann ich Stil und Hintergrund bestimmen?",
                a: "Ja. Du wählst aus einer Vielzahl von KI-Stilen, Hintergründen und kreativen Effekten. So wird jedes Bild einzigartig.",
              },
              {
                q: "Werden die Bilder optimiert?",
                a: "Ja. Unsere KI optimiert automatisch Belichtung, Farben und Details für bestmögliche Qualität.",
              },
              {
                q: "Darf ich die Bilder kommerziell nutzen?",
                a: "Ja. Du erhältst alle Nutzungsrechte für private und kommerzielle Zwecke, inklusive Social Media, Websites und Werbematerial.",
              },
              {
                q: "Wie lange speichert ihr meine Daten?",
                a: "Wir bewahren Uploads nur so lange auf, wie es zur Erstellung und Bereitstellung nötig ist. Du kannst eine vorzeitige Löschung jederzeit anstoßen.",
              },
              {
                q: "Was kostet KI Bilder Generator?",
                a: "Du wählst aus klaren Paketen – vom günstigen Einstieg bis zum umfangreichen Set. Du zahlst einmalig und erhältst alle generierten KI-Bilder deines Pakets.",
              },
              {
                q: "Gibt es eine kostenlose Option?",
                a: "Für einfache KI-Bilder bieten wir eine schlanke, kostenlose Variante zum Testen. Für höchste Qualität und unbegrenzte Kreativität empfehlen wir die kostenpflichtigen Pakete.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="mb-2 font-bold text-gray-900">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
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
            <span className="text-xl font-bold">KI Bilder Generator</span>
          </div>
          <p className="mb-8 max-w-md text-sm text-gray-400">
            Erstelle einzigartige KI-Bilder mit deinen eigenen Fotos in wenigen Minuten.
          </p>

          <div className="grid gap-8 md:grid-cols-5">
            <div>
              <h4 className="mb-4 font-bold">Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Für Teams</Link></li>
                <li><Link href="#" className="hover:text-white">Beispiele</Link></li>
                <li><Link href="#" className="hover:text-white">Preise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Gratis Tools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Gratis KI Bild Generator</Link></li>
                <li><Link href="#" className="hover:text-white">Bild Hintergrund entfernen</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Kontakt</Link></li>
                <li><Link href="#" className="hover:text-white">Affiliate</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Rückerstattung</Link></li>
                <li><Link href="#" className="hover:text-white">Nutzungsbedingungen</Link></li>
                <li><Link href="#" className="hover:text-white">Datenschutz</Link></li>
                <li><Link href="#" className="hover:text-white">Impressum</Link></li>
                <li><Link href="#" className="hover:text-white">Hilfe</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">KI Bild Arten</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">Porträt Bilder</Link></li>
                <li><Link href="#" className="hover:text-white">Künstlerische Bilder</Link></li>
                <li><Link href="#" className="hover:text-white">Business Bilder</Link></li>
                <li><Link href="#" className="hover:text-white">Social Media Bilder</Link></li>
                <li><Link href="#" className="hover:text-white">Kreative Designs</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2025 KI Bilder Generator. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-emerald-500 p-0 shadow-lg hover:bg-emerald-600"
        >
          <svg className="h-7 w-7" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
