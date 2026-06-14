import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Djoulde Balde | Portfolio Académique - Candidate SUPINFO",
  description: "Découvrez le portfolio académique de Djoulde Balde, étudiante en Licence 1 MIAGE à l'Université Kofi Annan de Guinée. Candidate passionnée par l'informatique visant à devenir Administratrice de Bases de Données (DBA) et motivée à intégrer SUPINFO.",
  keywords: [
    "Djoulde Balde",
    "Portfolio",
    "SUPINFO",
    "MIAGE",
    "Université Kofi Annan",
    "Administratrice de Bases de Données",
    "DBA",
    "Informatique",
    "Candidature"
  ],
  authors: [{ name: "Djoulde Balde" }],
  creator: "Djoulde Balde",
  openGraph: {
    title: "Djoulde Balde | Portfolio Académique",
    description: "Étudiante en Licence 1 MIAGE - Candidate motivée à intégrer SUPINFO pour devenir Administratrice de Bases de Données.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-navy-deep text-text-primary antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
