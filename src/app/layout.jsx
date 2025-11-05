import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArrowNavigation from '@/components/ArrowNavigation';

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Technology Advice",
  description: "Get the latest tech advice and insights",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar/>
        {children}
        <ArrowNavigation />
        <Footer />
      </body>

    </html>
  );
}
