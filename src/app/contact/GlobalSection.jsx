'use client';

import { 
  MapPin, 
  Phone, 
  Mail,
  Building,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function GlobalSection() {
  const sectionRef = useRef(null);
  const [activeOffice, setActiveOffice] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const offices = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 500, New York, NY 10001",
      phone: "+1 (212) 555-1234",
      email: "ny@b2bgravity.com",
      hours: "Mon-Fri: 9AM-6PM EST"
    },
    {
      city: "San Francisco",
      address: "456 Tech Street, Floor 8, San Francisco, CA 94105",
      phone: "+1 (415) 555-5678",
      email: "sf@b2bgravity.com",
      hours: "Mon-Fri: 9AM-6PM PST"
    },
    {
      city: "London",
      address: "789 Global Lane, London, UK EC2A 4NE",
      phone: "+44 20 7946 0958",
      email: "london@b2bgravity.com",
      hours: "Mon-Fri: 9AM-6PM GMT"
    }
  ];

  return (
    <section 
      id="locations"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-[#0a2540] mb-6">Our Global Presence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With offices in strategic business hubs worldwide, we're positioned to serve your global needs with local expertise.
          </p>
        </div>
        
        {/* Office Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 flex space-x-2 border border-gray-200">
            {offices.map((office, index) => (
              <button
                key={index}
                onClick={() => setActiveOffice(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeOffice === index
                    ? 'bg-[#007bff] text-white'
                    : 'text-gray-600 hover:text-[#007bff]'
                }`}
              >
                {office.city}
              </button>
            ))}
          </div>
        </div>
        
        {/* Office Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Office Image */}
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-[#007bff] to-[#0a2540] flex items-center justify-center">
              <div className="text-white text-center p-8">
                <Building size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{offices[activeOffice].city} Office</h3>
                <p className="text-white/80">Professional workspace for business excellence</p>
              </div>
            </div>
          </div>
          
          {/* Office Details */}
          <div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-[#007bff]/10 flex items-center justify-center">
                  <MapPin className="text-[#007bff]" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0a2540]">{offices[activeOffice].city}</h3>
                  <p className="text-gray-600">{offices[activeOffice].hours}</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gray-400 mt-1 shrink-0" size={20} />
                  <p className="text-gray-600 leading-relaxed">
                    {offices[activeOffice].address}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="text-gray-400 shrink-0" size={20} />
                  <a 
                    href={`tel:${offices[activeOffice].phone}`} 
                    className="text-gray-600 hover:text-[#007bff] transition-colors duration-300 font-medium"
                  >
                    {offices[activeOffice].phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="text-gray-400 shrink-0" size={20} />
                  <a 
                    href={`mailto:${offices[activeOffice].email}`} 
                    className="text-gray-600 hover:text-[#007bff] transition-colors duration-300 font-medium break-all"
                  >
                    {offices[activeOffice].email}
                  </a>
                </div>
              </div>
              
              <button className="w-full py-3 bg-white border-2 border-gray-300 rounded-lg text-[#0a2540] font-semibold hover:border-[#007bff] transition-all duration-300 flex items-center justify-center gap-3">
                Get Directions 
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}