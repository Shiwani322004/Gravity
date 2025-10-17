import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArrowNavigation from '@/components/ArrowNavigation';

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Technology Advice",
  description: "Get the latest tech advice and insights",
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
