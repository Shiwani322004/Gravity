'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 2;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const logos = [
    { name: 'Ooma', imageUrl: '/images/ooma.png' },
    { name: 'Ringcentral', imageUrl: '/images/ringcentral.png' },
    { name: 'Zoom', imageUrl: '/images/zoom.png' },
    { name: 'Dialpad', imageUrl: '/images/dialpad.png' },
    { name: 'Vonage', imageUrl: '/images/vonage.png' },
    { name: 'Zoho', imageUrl: '/images/zoho.png' },
    { name: 'Creatio', imageUrl: '/images/creatio.png' },
    { name: 'HubSpot', imageUrl: '/images/hubspot.png' },
    { name: 'Honeybook', imageUrl: '/images/honeybook.png' },
    { name: 'Pipedrive', imageUrl: '/images/pipedrive.png' },
    { name: 'Tableau', imageUrl: '/images/tableau.png' },
    { name: 'Sisense', imageUrl: '/images/sisense.png' },
    { name: 'Qlik', imageUrl: '/images/qlikicon.png' },
    { name: 'Zoho Analytics', imageUrl: '/images/zoho copy.png' },
    { name: 'ActivTrak', imageUrl: '/images/activtrak.png' },
    { name: 'GoTo', imageUrl: '/images/goto.png' },
    { name: 'RingCentral', imageUrl: '/images/ringcentral.png' },
    { name: 'GoAnswer', imageUrl: '/images/goan.png' },
    { name: 'Twilio', imageUrl: '/images/twilio.png' },
    { name: 'SalesCloud', imageUrl: '/images/cloud.png' },
    { name: 'ADP', imageUrl: '/images/adp.png' },
    { name: 'Zohopayroll', imageUrl: '/images/zopayroll.png' },
    { name: 'Bamboo', imageUrl: '/images/bam.png' },
    { name: 'Onpay', imageUrl: '/images/onpay.png' },
    { name: 'Quickbooks', imageUrl: '/images/quickbooks.png' },
    // { name: 'Meta', imageUrl: '/images/meta.png' },
    // { name: 'Twitter', imageUrl: '/images/twitter.png' },
    // { name: 'LinkedIn', imageUrl: '/images/linkedin.png' },
    // { name: 'Instagram', imageUrl: '/images/instagram.png' },
    // { name: 'YouTube', imageUrl: '/images/youtube.png' },
    // { name: 'GitHub', imageUrl: '/images/github.png' },
    // { name: 'Stripe', imageUrl: '/images/stripe.png' },
    // { name: 'PayPal', imageUrl: '/images/paypal.png' },
    // { name: 'Square', imageUrl: '/images/square.png' },
    // { name: 'Airbnb', imageUrl: '/images/airbnb.png' },
    // Add more logos as needed
  ];

  // Duplicate logos to create the continuous scroll effect
  const allLogos = [...logos, ...logos];

  return ( 
    <div className="w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Added the "Clients" heading and subheading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">Meet our renowned Clients</h2>
          <p className="text-lg sm:text-xl text-black">We cater to some renowned brands</p>
        </div>

        <div className="relative w-full overflow-hidden bg-white">
          <div
            ref={scrollRef}
            className="flex items-center whitespace-nowrap"
            style={{ width: 'fit-content' }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 inline-flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center h-20 min-w-[120px] sm:min-w-[140px] md:min-w-[150px] lg:min-w-[160px] rounded-full p-3 sm:p-4 bg-white">
                  <Image
                    src={logo.imageUrl}
                    alt={logo.name}
                    width={140}
                    height={60}
                    className="h-full max-h-[70px] sm:max-h-[60px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;