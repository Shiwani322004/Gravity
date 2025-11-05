import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArrowNavigation from '@/components/ArrowNavigation';

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "B2B Gravity | Technology Solutions & Digital Marketing Services",
  description: "Leading B2B technology solutions provider offering digital marketing, lead generation, content syndication, and business intelligence services for enterprise growth.",
  keywords: "B2B technology solutions, digital marketing services, lead generation, content syndication, business intelligence, CRM systems, phone systems, payroll software, GPS fleet management, email marketing, account-based marketing, enterprise solutions",
  authors: [{ name: "B2B Gravity Team" }],
  creator: "B2B Gravity",
  publisher: "B2B Gravity",
  robots: "index, follow",
  openGraph: {
    title: "B2B Gravity | Technology Solutions & Digital Marketing Services",
    description: "Leading B2B technology solutions provider offering digital marketing, lead generation, and enterprise services for business growth.",
    url: "https://b2bgravity.com",
    siteName: "B2B Gravity",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "B2B Gravity - Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Gravity | Technology Solutions & Digital Marketing",
    description: "Leading B2B technology solutions provider for enterprise growth.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: [
      {
        url: "/favicon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://b2bgravity.com" />
      </head>
      <body className="antialiased">
        <Navbar/>
        {children}
        <ArrowNavigation />
        <Footer />
      </body>
    </html>
  );
}
