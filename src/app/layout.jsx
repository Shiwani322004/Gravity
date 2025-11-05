import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArrowNavigation from '@/components/ArrowNavigation';
import { Metadata } from 'next';

// App Router metadata API
export const metadata = {
  title: "B2B Gravity - Tech Blog for B2B Professionals",
  description: "Get the latest tech advice and insights",
  keywords: [
    "B2B",
    "Tech Blog",
    "Business",
    "Digital Transformation",
    "Technology",
    "Marketing",
    "Content Syndication",
    "Lead Generation"
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  },
  openGraph: {
    title: "B2B Gravity - Tech Blog for B2B Professionals",
    description: "Empowering businesses with data-driven solutions. Get the latest advice and insights.",
    url: "https://b2bgravity.com",
    siteName: "B2B Gravity",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "B2B Gravity Tech Blog",
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Gravity - Tech Blog for B2B Professionals",
    description: "Empowering businesses with data-driven solutions. Get the latest tech advice.",
    images: ["/og-image.png"]
  },
  robots: "index, follow",
  themeColor: "#0a2540"
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" sizes="any" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://b2bgravity.com" />

        {/* Optional: Additional meta tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="B2B Gravity Team" />
        <meta name="theme-color" content="#0a2540" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <ArrowNavigation />
        <Footer />
      </body>
    </html>
  );
}
