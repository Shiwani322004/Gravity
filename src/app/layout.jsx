import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArrowNavigation from '@/components/ArrowNavigation';

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "B2B Gravity | AI-Powered B2B Marketing & Lead Generation Platform",
  description: "B2B Gravity helps businesses automate lead generation, email marketing, CRM integration, and sales workflows — all in one powerful AI-driven platform. Start growing your leads today!",
  keywords: "B2B marketing automation, B2B lead generation software, B2B sales automation, email marketing automation, CRM integration tools, AI-powered B2B marketing platform",
  authors: [{ name: "B2B Gravity Team" }],
  creator: "B2B Gravity",
  publisher: "B2B Gravity",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "B2B Gravity | Automate Your B2B Growth",
    description: "AI-powered marketing automation and lead generation for modern B2B companies.",
    url: "https://b2bgravity.com",
    siteName: "B2B Gravity",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "B2B Gravity - Marketing Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Gravity | AI-Powered B2B Marketing Platform",
    description: "Automate lead generation, email marketing, and sales workflows with our AI-driven B2B platform.",
    images: ["/favicon.png"],
    creator: "@B2BGravity",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "B2B Gravity",
  "description": "AI-powered B2B marketing automation and lead generation platform",
  "url": "https://b2bgravity.com",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free trial available"
  },
  "provider": {
    "@type": "Organization",
    "name": "B2B Gravity",
    "url": "https://b2bgravity.com",
    "logo": "https://b2bgravity.com/favicon.png"
  },
  "featureList": [
    "B2B Lead Generation",
    "Email Marketing Automation",
    "CRM Integration",
    "Sales Pipeline Automation",
    "AI-Powered Analytics"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar/>
        {children}
        <ArrowNavigation />
        <Footer />
      </body>
    </html>
  );
}
