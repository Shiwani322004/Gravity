'use client'
import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 10);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 10);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={countRef}>{count.toLocaleString()}</span>;
};

export default function PhoneSystemStats() {
  const stats = [
    { value: 50000, label: "Active Users", suffix: "+" },
    { value: 99.9, label: "Uptime SLA", suffix: "%" },
    { value: 4.9, label: "Customer Rating", suffix: "/5" },
    { value: 150, label: "Countries", suffix: "+" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-[#007bff] hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#007bff] mb-2 group-hover:scale-110 transition-transform duration-300">
                <Counter end={stat.value} />{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}