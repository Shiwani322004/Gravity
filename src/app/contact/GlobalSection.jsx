// 'use client';

// import { Mail } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// export default function GlobalSection() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [animatedText, setAnimatedText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const fullText = "Our Global Presence";

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             entry.target.classList.add('animate-fade-in');
//             if (currentIndex === 0) {
//               setCurrentIndex(1);
//               setAnimatedText('');
//             }
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, [currentIndex]);

//   useEffect(() => {
//     if (currentIndex > 0 && currentIndex <= fullText.length && isVisible) {
//       const timer = setTimeout(() => {
//         setAnimatedText(prev => prev + fullText[currentIndex - 1]);
//         setCurrentIndex(prev => prev + 1);
//       }, 100);
//       return () => clearTimeout(timer);
//     }
//   }, [currentIndex, fullText, isVisible]);

//   const emails = [
//     "india@b2bgravity.com"
//   ];

//   return (
//     <section 
//       id="contact-emails"
//       ref={sectionRef}
//       className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
//     >
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-[#007bff]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a2540]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
//       <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
//         <h2 className="text-5xl font-bold text-[#007bff] mb-6 min-h-[72px]">
//           <span>{animatedText}</span>
//           <span className="animate-pulse text-[#007bff]">|</span>
//         </h2>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-16 animate-fade-in animation-delay-1000">
//           Reach out to us via email for any business inquiries or support.
//         </p>

//         <div className="flex flex-col gap-8">
//           {emails.map((email, idx) => (
//             <a 
//               key={idx}
//               href={`mailto:${email}`} 
//               className="inline-flex items-center justify-center gap-4 text-[#007bff] font-semibold text-lg hover:underline transition-colors duration-300"
//             >
//               <Mail size={28} />
//               {email}
//             </a>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }
//         .animation-delay-1000 {
//           animation-delay: 1000ms;
//         }
//       `}</style>
//     </section>
//   );
// }
