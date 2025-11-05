import { 
  Send,
  ChevronRight,
  CheckCircle,
  Users,
  Target,
  BarChart3,
  Mail,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function ContactForm() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [animatedText, setAnimatedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Our Global Presence";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            setIsVisible(true);
            if (currentIndex === 0) {
              setCurrentIndex(1);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    return () => observer.disconnect();
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex > 0 && currentIndex <= fullText.length && isVisible) {
      const timer = setTimeout(() => {
        setAnimatedText(prev => prev + fullText[currentIndex - 1]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText, isVisible]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFocus = (fieldName) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      }, 4000);
    }, 2000);
  };

  const features = [
    {
      title: "Expert Consultation",
      description: "Comprehensive analysis of your business needs",
      icon: Users
    },
    {
      title: "Custom Solutions",
      description: "Tailored strategies for your specific objectives",
      icon: Target
    },
    {
      title: "Ongoing Partnership",
      description: "Continuous support for long-term success",
      icon: BarChart3
    }
  ];

  
  const emails = [
    "contactus@b2bgravity.com"
  ];

  const FloatingInput = ({
    type = "text",
    id,
    name,
    value,
    onChange,
    onFocus,
    onBlur,
    required,
    placeholder,
    isFocused,
  }) => (
    <div className="relative my-4">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        className={`peer w-full px-5 py-4 appearance-none border rounded-xl bg-white/60 backdrop-blur-lg text-sm focus:ring-3 focus:ring-[#127bfd]/20 focus:border-[#127bfd] hover:border-gray-400 hover:shadow-md transition-all duration-500 ${
          isFocused ? 'ring-[#127bfd] scale-[1.03]' : ''
        }`}
        style={{
          borderColor: isFocused
            ? '#127bfd'
            : value
            ? '#10b981'
            : '#d1d5db'
        }}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-5 top-4 text-gray-500 font-semibold text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#127bfd] peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm transition-all duration-300 ${
          value ? '-top-3 text-xs text-[#127bfd]' : ''
        }`}
      >
        {placeholder}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
    </div>
  );

  return (
    <section
      id="contact-form"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100/30 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#127bfd]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a2540]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="text-5xl font-bold text-[#127bfd] mb-6 leading-tight">
                Start the Conversation
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tell us about your business challenges and goals. We'll craft a customized solution to drive your growth and success in today's competitive landscape.
              </p>
              <div className="space-y-6 mb-8">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex items-center gap-5 p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm group hover:shadow-lg hover:border-[#127bfd]/20 hover:scale-105 transition-all duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#127bfd] to-[#0a2540] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0a2540] text-xl mb-2 group-hover:text-[#127bfd] transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-[#127bfd]/10 p-8 lg:p-10 border border-gray-200/60 hover:shadow-2xl hover:shadow-[#127bfd]/20 transition-all duration-500">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/25">
                    <CheckCircle className="text-white" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0a2540] mb-6">Thank You!</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed text-lg">
                    Your message has been successfully sent. Our team will contact you within 24 hours to discuss your requirements.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#127bfd] font-semibold hover:text-[#0a2540] transition-colors duration-300 text-lg flex items-center gap-3 mx-auto group"
                  >
                    Send another message
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <FloatingInput 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      placeholder="Full Name"
                      isFocused={focusedField === 'name'}
                    />
                    <FloatingInput
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      placeholder="Email Address"
                      isFocused={focusedField === 'email'}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <FloatingInput
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => handleFocus('company')}
                      onBlur={handleBlur}
                      placeholder="Company Name"
                      isFocused={focusedField === 'company'}
                    />
                    <FloatingInput
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      placeholder="Phone Number"
                      isFocused={focusedField === 'phone'}
                    />
                  </div>
                  <div className="relative my-4">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      required
                      rows="4"
                      className={`peer w-full px-5 py-4 border rounded-xl bg-white/60 backdrop-blur-lg text-sm resize-none focus:ring-3 focus:ring-[#127bfd]/20 focus:border-[#127bfd] hover:border-gray-400 hover:shadow-md transition-all duration-500 ${focusedField === 'message' ? 'ring-[#127bfd] scale-[1.03]' : ''}`}
                      style={{
                        borderColor: focusedField === 'message'
                          ? '#127bfd'
                          : formData.message
                          ? '#10b981'
                          : '#d1d5db'
                      }}
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-5 top-4 text-gray-500 font-semibold text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#127bfd] peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm transition-all duration-300 ${
                        formData.message ? '-top-3 text-xs text-[#127bfd]' : ''
                      }`}
                    >
                      Your Message <span className="text-red-400">*</span>
                    </label>
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#127bfd] to-[#0a2540] text-white py-5 px-8 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#127bfd]/25 hover:scale-105 transition-all duration-500 disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Your Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  {/* Email Section Inside Form Card */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-3xl font-bold text-[#127bfd] mb-3 text-center">
                      <span>{animatedText}</span>
                      <span className="animate-pulse text-[#127bfd]">|</span>
                    </h3>
                    <p className="text-base text-gray-600 text-center mb-6 leading-relaxed">
                      Reach out to us via email for any business inquiries or support.
                    </p>
                    <div className="flex flex-col gap-4">
                      {emails.map((email, idx) => (
                        <a 
                          key={idx}
                          href={`mailto:${email}`} 
                          className="inline-flex items-center justify-center gap-3 text-[#127bfd] font-semibold text-base hover:underline transition-all duration-300 group hover:scale-105"
                        >
                          <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
        .animate-on-scroll.animate-slide-in { 
          opacity: 1; 
          transform: translateY(0); 
        }
      `}</style>
    </section>
  );
}