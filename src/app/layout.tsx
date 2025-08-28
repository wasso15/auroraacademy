import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Shared/Header";
import Providers from "@/components/Shared/Providers";
import Footer from "@/components/Shared/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aurora Academy | École des métiers du futur",
    template: "%s | Aurora Academy",
  },
  description:
    "Programmes en culture numérique, design, coding et IA pour enfants, ados et adultes à Kinshasa.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: "https://auroraacademy.online",
    title: "Aurora Academy | École des métiers du futur",
    description:
      "Programmes en culture numérique, design, coding et IA pour enfants, ados et adultes à Kinshasa.",
    siteName: "Aurora Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Academy | École des métiers du futur",
    description:
      "Programmes en culture numérique, design, coding et IA pour enfants, ados et adultes à Kinshasa.",
  },
  metadataBase: new URL("https://auroraacademy.online"),
};

export const viewport: Viewport = {
  themeColor: "#0EA5E9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      {/* Utilisez la variable de police pour Tailwind: font-sans via --font-poppins */}
      <body
        className={`${poppins.variable} min-h-dvh  bg-white text-gray-900 antialiased`}
      >
        <Providers>
          <Header currentPage="home" />
          <main className="min-h-[70dvh] border-2 border-red-500">
            {children}
          </main>
        <Footer/>
        </Providers>

        {/* Vercel Analytics peut être utilisé dans un Server Component */}
        <Analytics />
      </body>
    </html>
  );
}
