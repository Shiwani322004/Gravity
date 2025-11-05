'use client';

import ContactHero from './ContactHero';
import ConnectSection from './ConnectSection';
import ContactForm from './ContactForm';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <ConnectSection />
      <ContactForm />

      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}