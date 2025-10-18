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
    { name: 'QuickBooks', imageUrl: '/images/quick.jpg' }, // Adjusted order to match the image
    { name: 'OnPay', imageUrl: '/images/onpay.jpg' },
    { name: 'BambooHR', imageUrl: '/images/bamboo.jpg' },
    { name: 'Samsara', imageUrl: '/images/samsara.jpg' },
    { name: 'Teletrac', imageUrl: '/images/teletrac.jpg' }, // Adjusted order to match the image
    { name: 'Azuga', imageUrl: '/images/azuga.jpg' },
    // You can add more logos here if needed for the seamless scroll effect,
    // ensuring they are duplicated below to create the continuous loop.
  ];

  // Duplicate logos to create the continuous scroll effect
  const allLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Added the "Clients" heading and subheading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-500 mb-2">Clients</h2>
          <p className="text-lg sm:text-xl text-green-400">We cater to some renowned brands</p>
        </div>

        <div className="relative w-full overflow-hidden bg-white"> {/* Changed background to white for the scroll area */}
          <div
            ref={scrollRef}
            className="flex items-center whitespace-nowrap" // Removed bg-darkGreen here
            style={{ width: 'fit-content' }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mx-4 sm:mx-6 md:mx-12 lg:mx-10 inline-flex flex-col items-center justify-center"
              >
                {/* Changed background to white for the logo container */}
                <div className="flex items-center justify-center h-20 min-w-[150px] md:min-w-[180px] rounded-full p-3 sm:p-4 bg-white">
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