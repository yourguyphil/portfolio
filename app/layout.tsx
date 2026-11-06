import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Plausible from "@/components/Plausible";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const description =
  "Philips Nguyen is a backend software engineer in Atlanta, GA with 7+ years of experience building fast, reliable, and secure systems in finance and retail.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Philips Nguyen | Backend Software Engineer", template: "%s | Philips Nguyen" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Philips Nguyen",
    title: "Philips Nguyen | Backend Software Engineer",
    description,
    images: [{ url: "/images/profile.webp", width: 560, height: 560, alt: "Philips Nguyen" }],
  },
  twitter: { card: "summary", title: "Philips Nguyen | Backend Software Engineer", description },
};

export const viewport: Viewport = {
  themeColor: "#0a0c12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        {/* Reveal animations are JS-driven; make sure content is visible without JS. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <Plausible />
      </body>
    </html>
  );
}
