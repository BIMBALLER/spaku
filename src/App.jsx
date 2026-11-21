import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Star,
  Send,
  ArrowUpRight,
  Check,
  RotateCcw,
  ShieldCheck,
  Leaf,
  Sparkles,
  Building2,
  Home as HomeIcon,
  Sofa,
  HardHat,
  Bug,
  Calendar,
  ChevronDown,
  Clock
} from 'lucide-react';

const GA_ID = 'G-7MXVYMFT98';
const AW_ID = 'AW-18150730623';

// --- Helper for Smooth Section Navigation from Any Route ---
const useSectionNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (sectionId, closeMenu) => {
    if (closeMenu) closeMenu(false);

    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    }
  };
};

// --- Google Tag Tracker Component ---
const GoogleTagTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_ID, {
        page_path: location.pathname + location.search,
      });
      window.gtag('config', AW_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// --- Lazy Video Component (Existing Spaku Video Reels) ---
const LazyVideo = ({ src, title, category, locationTag }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {});
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#0c1730] rounded-2xl overflow-hidden border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
      <div className="aspect-video relative overflow-hidden bg-[#050b18]">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="none"
          webkit-playsinline="true"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081022] via-transparent to-transparent opacity-70 pointer-events-none" />
        <span className="absolute top-4 left-4 bg-[#081022]/85 backdrop-blur-md border border-[#d4af37]/40 text-[#e8c96b] text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6 flex justify-between items-center border-t border-[#d4af37]/20">
        <div>
          <p className="text-[11px] text-[#d4af37] uppercase tracking-widest mb-1">{locationTag}</p>
          <h3 className="font-serif-luxury text-xl text-white tracking-tight">{title}</h3>
        </div>
        <Link
          to="/contact"
          className="bg-[#d4af37]/10 hover:bg-[#d4af37] text-[#e8c96b] hover:text-[#081022] border border-[#d4af37]/40 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 ml-4"
        >
          Book <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
};

// --- Ornate Gold Filigree Divider ---
const GoldOrnateDivider = () => (
  <div className="w-full overflow-hidden border-y border-[#d4af37]/30 bg-[#060d1c] py-3 select-none">
    <svg
      viewBox="0 0 1440 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-8 md:h-10 text-[#d4af37]/55"
      preserveAspectRatio="none"
    >
      <path
        d="M0 24C60 6 120 42 180 24C240 6 300 42 360 24C420 6 480 42 540 24C600 6 660 42 720 24C780 6 840 42 900 24C960 6 1020 42 1080 24C1140 6 1200 42 1260 24C1320 6 1380 42 1440 24"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M0 24C60 42 120 6 180 24C240 42 300 6 360 24C420 42 480 6 540 24C600 42 660 6 720 24C780 42 840 6 900 24C960 42 1020 6 1080 24C1140 42 1200 6 1260 24C1320 42 1380 6 1440 24"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      {[90, 270, 450, 630, 720, 810, 990, 1170, 1350].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="24" r="4" stroke="currentColor" strokeWidth="1.2" />
          <circle cx={cx} cy="24" r="1.5" fill="currentColor" />
        </g>
      ))}
    </svg>
  </div>
);

// --- Shared Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const goToSection = useSectionNav();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#081022]/90 backdrop-blur-md border-b border-[#d4af37]/20 px-4 md:px-10 h-20 flex items-center justify-between">
      {/* Left: Stacked Luxury Brand Wordmark + Ranked.ng Badge */}
      <div className="flex items-center gap-3 md:gap-4">
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-full overflow-hidden border border-[#d4af37]/60 shrink-0 shadow-md">
            <img src="/logo.jpg" alt="Spaku Kleaners Logo" className="h-full w-full object-cover" />
          </div>
          <div className="leading-none">
            <span className="font-serif-luxury block text-xl md:text-2xl font-semibold tracking-tight text-[#e6c465] group-hover:text-white transition-colors">
              Spaku
            </span>
            <span className="font-serif-luxury block text-sm md:text-base tracking-wide text-[#d4af37]/90 -mt-1">
              Kleaners
            </span>
          </div>
        </Link>

        {/* RANKED.NG VERIFIED BADGE */}
        <a
          href="https://ranked.ng/place/spaku-kleaners-limited-ifqzbo?utm_source=verified-badge"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center shrink-0 hover:opacity-90 transition-opacity"
        >
          <img
            src="https://ranked.ng/api/badge/spaku-kleaners-limited-ifqzbo"
            alt="Spaku Kleaners Limited is RANKED VERIFIED"
            className="h-7 w-auto"
          />
        </a>
      </div>

      {/* Center Links */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
        <Link to="/" className="hover:text-[#e6c465] transition-colors">Home</Link>
        <button type="button" onClick={() => goToSection('services')} className="hover:text-[#e6c465] transition-colors">
          Services
        </button>
        <button type="button" onClick={() => goToSection('our-work')} className="hover:text-[#e6c465] transition-colors">
          Our Work
        </button>
        <button type="button" onClick={() => goToSection('reviews')} className="hover:text-[#e6c465] transition-colors">
          Reviews
        </button>
        <Link to="/services" className="hover:text-[#e6c465] transition-colors">About</Link>
        <Link to="/contact" className="hover:text-[#e6c465] transition-colors">Contact</Link>
      </div>

      {/* Right CTA + Mobile Menu */}
      <div className="flex items-center gap-3">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-[#e5c465] to-[#c99e32] hover:from-[#f0d37c] hover:to-[#d4af37] text-[#081022] px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all active:scale-95"
        >
          Book Now
        </Link>

        <button
          type="button"
          className="lg:hidden text-[#e6c465] p-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0a142b] border-b border-[#d4af37]/30 p-6 flex flex-col gap-5 text-sm font-medium text-slate-100 shadow-2xl lg:hidden items-start">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#e6c465]">Home</Link>
          <button type="button" onClick={() => goToSection('services', setIsOpen)} className="hover:text-[#e6c465]">
            Services
          </button>
          <button type="button" onClick={() => goToSection('our-work', setIsOpen)} className="hover:text-[#e6c465]">
            Our Work
          </button>
          <button type="button" onClick={() => goToSection('reviews', setIsOpen)} className="hover:text-[#e6c465]">
            Reviews
          </button>
          <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-[#e6c465]">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#e6c465]">Contact</Link>
          <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href="https://ranked.ng/place/spaku-kleaners-limited-ifqzbo?utm_source=verified-badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://ranked.ng/api/badge/spaku-kleaners-limited-ifqzbo"
                alt="Spaku Kleaners Limited is RANKED VERIFIED"
                className="h-7 w-auto"
              />
            </a>
            <a href="tel:08061946478" className="text-[#e6c465] font-semibold text-xs">
              Call: 08061946478
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Home Page ---
const Home = () => {
  const navigate = useNavigate();
  const goToSection = useSectionNav();

  const [bookingForm, setBookingForm] = useState({
    location: 'Ikoyi, Lagos',
    service: 'Deep Cleaning',
    date: '',
    propertySize: '3–5 Bedroom Duplex'
  });

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      location: bookingForm.location,
      service: bookingForm.service,
      date: bookingForm.date || 'Flexible Date',
      size: bookingForm.propertySize
    });
    navigate(`/contact?${params.toString()}`);
  };

  const servicesList = [
    {
      title: 'Commercial Cleaning',
      desc: 'Daily upkeep & suite detailing for offices, hotels & corporate spaces',
      promo: '30% Off First Booking',
      icon: Building2
    },
    {
      title: 'Deep Cleaning',
      desc: 'Comprehensive top-to-bottom sanitization for estates & luxury homes',
      promo: '30% Off Limited Offer',
      icon: Sparkles
    },
    {
      title: 'Fumigation',
      desc: 'Odorless, eco-safe pest eradication & preventive treatment',
      promo: '30% Off All Spaces',
      icon: Bug
    },
    {
      title: 'Rug & Upholstery',
      desc: 'Steam extraction & fabric restoration for sofas, rugs & drapes',
      promo: '30% Off Restoration',
      icon: Sofa
    },
    {
      title: 'Post-Construction',
      desc: 'Fine dust, paint & debris removal for a spotless move-in finish',
      promo: '30% Off New Builds',
      icon: HardHat
    }
  ];

  const videos = [
    {
      src: '/VID-20261121-WA0003.mp4',
      title: 'Commercial & Residential Overview',
      category: 'Full Estate Care',
      locationTag: 'Ikoyi & Victoria Island'
    },
    {
      src: '/VID-20261121-WA0005.mp4',
      title: 'Deep Cleaning Showcase',
      category: 'Sanitization',
      locationTag: 'Lekki Phase 1'
    },
    {
      src: '/VID-20261121-WA0004.mp4',
      title: 'Pest Eradication & Fumigation',
      category: 'Eco-Safe Treatment',
      locationTag: 'Banana Island'
    },
    {
      src: '/134662.mp4',
      title: 'Rug & Upholstery Restoration',
      category: 'Fabric Detailing',
      locationTag: 'Victoria Island'
    }
  ];

  const reviews = [
    {
      number: '01',
      stars: 5,
      quote:
        '“Spaku Kleaners transformed our residence after a full renovation. The team was punctual, discreet, and meticulous with every marble surface and chandelier. Truly spotless.”',
      author: 'Kolawole, Private Estate Client',
      location: 'Banana Island, Ikoyi'
    },
    {
      number: '02',
      stars: 5,
      quote:
        '“We rely on Spaku Kleaners weekly for our commercial suites and short-let apartments. Consistent, detail-oriented, and our guests constantly compliment the freshness.”',
      author: 'Abimbola O., Hospitality Director',
      location: 'Victoria Island, Lagos'
    },
    {
      number: '03',
      stars: 5,
      quote:
        '“Their upholstery extraction and odorless fumigation completely restored our living room sofas and rugs. Gold-standard service from booking to final inspection.”',
      author: 'Phillips, Residential Client',
      location: 'Lekki Phase 1, Lagos'
    }
  ];

  return (
    <div className="pt-20 overflow-x-hidden bg-[#081022]">
      {/* ================= HERO SECTION (ONLINE VIDEO BACKGROUND) ================= */}
      <section className="relative min-h-[82vh] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/VID-20261121-WA0003.mp4"
            poster="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081022] via-[#081022]/85 to-[#081022]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081022] via-transparent to-[#081022]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-14 md:pt-24 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/15 border border-[#d4af37]/50 text-[#f2d680] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              <Star size={13} className="fill-[#e6c465] text-[#e6c465]" />
              30% OFF ALL SERVICES • IKOYI, VI, LEKKI & BANANA ISLAND
            </div>

            <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-[1.06] tracking-tight mb-6">
              Luxury Cleaning, <br />
              <span className="text-[#f3e5be]">Redefined.</span>
            </h1>

            <p className="text-slate-200/90 text-base md:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              Premium residential & commercial cleaning tailored for estates, hotels, and corporate offices across Lagos. Trusted, discreet, impeccable.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:08061946478"
                className="bg-gradient-to-r from-[#e5c465] to-[#c99e32] hover:from-[#f0d37c] hover:to-[#d4af37] text-[#081022] px-7 py-3.5 rounded-lg text-sm font-bold tracking-wide shadow-lg transition-all"
              >
                Call 08061946478
              </a>
              <button
                type="button"
                onClick={() => goToSection('our-work')}
                className="bg-[#0c1730]/80 hover:bg-[#132244] text-white border border-[#d4af37]/40 px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide backdrop-blur-md transition-all"
              >
                Watch Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Floating Glassmorphic Availability & Booking Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-8">
          <form
            onSubmit={handleCheckAvailability}
            className="bg-[#0c1833]/85 backdrop-blur-xl border border-[#d4af37]/30 rounded-xl p-4 md:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.65)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center"
          >
            {/* Location */}
            <div className="flex items-start gap-3 lg:border-r border-white/10 pr-3">
              <MapPin className="text-[#e6c465] shrink-0 mt-1" size={18} />
              <div className="w-full">
                <label className="block text-[11px] uppercase tracking-wider text-slate-400">Location</label>
                <div className="relative">
                  <select
                    value={bookingForm.location}
                    onChange={(e) => setBookingForm({ ...bookingForm, location: e.target.value })}
                    className="w-full bg-transparent text-white font-semibold text-sm focus:outline-none appearance-none cursor-pointer pr-5"
                  >
                    <option value="Ikoyi, Lagos" className="bg-[#0c1833]">Ikoyi, Lagos</option>
                    <option value="Banana Island, Ikoyi" className="bg-[#0c1833]">Banana Island</option>
                    <option value="Victoria Island, Lagos" className="bg-[#0c1833]">Victoria Island</option>
                    <option value="Lekki Phase 1, Lagos" className="bg-[#0c1833]">Lekki Phase 1</option>
                    <option value="Lekki / Ajah Axis" className="bg-[#0c1833]">Lekki / Ajah Axis</option>
                  </select>
                  <ChevronDown size={14} className="text-slate-400 absolute right-0 top-1 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="flex items-start gap-3 lg:border-r border-white/10 pr-3">
              <Sparkles className="text-[#e6c465] shrink-0 mt-1" size={18} />
              <div className="w-full">
                <label className="block text-[11px] uppercase tracking-wider text-slate-400">Service</label>
                <div className="relative">
                  <select
                    value={bookingForm.service}
                    onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                    className="w-full bg-transparent text-white font-semibold text-sm focus:outline-none appearance-none cursor-pointer pr-5"
                  >
                    <option value="Deep Cleaning" className="bg-[#0c1833]">Deep Cleaning</option>
                    <option value="Commercial Cleaning" className="bg-[#0c1833]">Commercial Cleaning</option>
                    <option value="Fumigation" className="bg-[#0c1833]">Fumigation</option>
                    <option value="Industrial Cleaning" className="bg-[#0c1833]">Industrial Cleaning</option>
                    <option value="Post-Construction" className="bg-[#0c1833]">Post-Construction</option>
                    <option value="Rug & Upholstery" className="bg-[#0c1833]">Rug & Upholstery</option>
                  </select>
                  <ChevronDown size={14} className="text-slate-400 absolute right-0 top-1 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-start gap-3 lg:border-r border-white/10 pr-3">
              <Calendar className="text-[#e6c465] shrink-0 mt-1" size={18} />
              <div className="w-full">
                <label className="block text-[11px] uppercase tracking-wider text-slate-400">Preferred Date</label>
                <input
                  type="date"
                  value={bookingForm.date}
                  onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                  className="w-full bg-transparent text-white font-semibold text-sm focus:outline-none [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Property Size */}
            <div className="flex items-start gap-3 pr-2">
              <HomeIcon className="text-[#e6c465] shrink-0 mt-1" size={18} />
              <div className="w-full">
                <label className="block text-[11px] uppercase tracking-wider text-slate-400">Property Size</label>
                <div className="relative">
                  <select
                    value={bookingForm.propertySize}
                    onChange={(e) => setBookingForm({ ...bookingForm, propertySize: e.target.value })}
                    className="w-full bg-transparent text-white font-semibold text-sm focus:outline-none appearance-none cursor-pointer pr-5"
                  >
                    <option value="1–2 Bedroom Flat" className="bg-[#0c1833]">1–2 Bedroom Flat</option>
                    <option value="3–5 Bedroom Duplex" className="bg-[#0c1833]">3–5 Bedroom Duplex</option>
                    <option value="Luxury Villa / Estate" className="bg-[#0c1833]">Luxury Villa / Estate</option>
                    <option value="Office / Hotel Suite" className="bg-[#0c1833]">Office / Hotel Suite</option>
                  </select>
                  <ChevronDown size={14} className="text-slate-400 absolute right-0 top-1 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#e5c465] to-[#c99e32] hover:from-[#f0d37c] hover:to-[#d4af37] text-[#081022] font-bold text-sm py-3.5 px-5 rounded-lg shadow-lg transition-all active:scale-95"
            >
              Check Availability
            </button>
          </form>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-5 text-xs text-slate-300/90">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#e6c465]" />
              Ranked.ng Verified & Insured
            </span>
            <span className="flex items-center gap-2">
              <Leaf size={16} className="text-[#e6c465]" />
              Eco-Friendly Products
            </span>
            <span className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#e6c465]" />
              5-Star Rated Service in Lagos
            </span>
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES SECTION ================= */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif-luxury text-3xl md:text-5xl text-[#f3e5be] font-medium mb-3">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-[#d4af37]/50" />
            <span className="w-2 h-2 rotate-45 border border-[#d4af37]" />
            <span className="h-[1px] w-12 bg-[#d4af37]/50" />
          </div>
          <p className="text-slate-300 text-sm md:text-base">
            Tailored cleaning & hygiene solutions for the most discerning clients. Discreet, reliable, and meticulous.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.title}
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="group relative bg-[#0b152c] border border-[#d4af37]/40 hover:border-[#e6c465] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between"
              >
                <div className="absolute inset-1.5 border border-[#d4af37]/15 group-hover:border-[#d4af37]/40 rounded-lg pointer-events-none transition-colors" />

                <div>
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#e6c465] group-hover:scale-110 transition-transform">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif-luxury text-xl text-white mb-2.5 group-hover:text-[#f3e5be] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300/80 leading-relaxed mb-5">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#d4af37]/20">
                  <span className="text-xs font-semibold text-[#e6c465] tracking-wide">
                    {service.promo}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 bg-[#0c1730]/80 border border-[#d4af37]/25 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-slate-300">
            <span className="text-[#e6c465] font-semibold">Also Available:</span> Heavy-Duty Industrial Cleaning & Facility Management across Lagos.
          </p>
          <Link
            to="/contact?service=Industrial%20Cleaning"
            className="text-xs font-bold uppercase tracking-wider text-[#e6c465] hover:underline flex items-center gap-1 shrink-0"
          >
            Request Industrial Quote <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* ================= OUR WORK (VIDEO SHOWCASE) ================= */}
      <section id="our-work" className="py-20 px-6 bg-[#060d1c] border-y border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#e6c465] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
              Live Field Portfolio
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-5xl text-[#f3e5be] font-medium mb-3">
              Our Work in Action
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-[#d4af37]/50" />
              <span className="w-2 h-2 rotate-45 border border-[#d4af37]" />
              <span className="h-[1px] w-12 bg-[#d4af37]/50" />
            </div>
            <p className="text-slate-300 text-sm md:text-base">
              Real transformations delivered by the Spaku Kleaners team across Ikoyi, Victoria Island, Lekki, and Banana Island.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((vid, idx) => (
              <LazyVideo
                key={idx}
                src={vid.src}
                title={vid.title}
                category={vid.category}
                locationTag={vid.locationTag}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENT REVIEWS SECTION ================= */}
      <section id="reviews" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif-luxury text-3xl md:text-5xl text-[#f3e5be] font-medium mb-2">
            Client Reviews
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] text-[#e6c465] mb-3">
            Simple. Discreet. Flawless.
          </p>
          <p className="text-slate-300 text-sm md:text-base">
            Trusted by homeowners, hotels, and property managers across Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.number}
              className="relative bg-[#0b152c] border border-[#d4af37]/40 rounded-xl p-8 text-center flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-1.5 border border-[#d4af37]/15 rounded-lg pointer-events-none" />

              <div>
                <div className="flex items-center justify-center gap-2.5 mb-6">
                  <span className="w-7 h-7 rounded-full bg-[#e6c465] text-[#081022] font-bold text-xs flex items-center justify-center">
                    {review.number}
                  </span>
                  <div className="flex items-center gap-1 text-[#e6c465]">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} size={15} className="fill-[#e6c465] text-[#e6c465]" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed mb-6 italic">
                  {review.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#d4af37]/20">
                <p className="text-xs font-semibold text-[#f3e5be]">{review.author}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- Contact / Booking Page ---
const Contact = () => {
  const location = useLocation();
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const loc = params.get('location');
    const srv = params.get('service');
    const dt = params.get('date');
    const sz = params.get('size');

    if (loc || srv || dt || sz) {
      const parts = [];
      if (srv) parts.push(`Service: ${srv}`);
      if (loc) parts.push(`Location: ${loc}`);
      if (sz) parts.push(`Property Size: ${sz}`);
      if (dt) parts.push(`Preferred Date: ${dt}`);
      setMessage(parts.join(' | ') + '\nAdditional notes: ');
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xlggbzro', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        form.reset();

        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            event_category: 'Contact',
            event_label: 'Spaku Booking Form'
          });
          window.gtag('event', 'conversion', {
            send_to: AW_ID,
            value: 1.0,
            currency: 'NGN'
          });
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <span className="text-[#e6c465] text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Concierge Booking • 30% Off All Services
          </span>
          <h1 className="font-serif-luxury text-5xl md:text-6xl text-[#f3e5be] mb-6 leading-tight">
            Reserve Your <br /> Cleaning Session.
          </h1>
          <p className="text-slate-300 text-base leading-relaxed mb-10 max-w-lg">
            Reach out for instant scheduling, site inspection, or a tailored quote anywhere across Ikoyi, Victoria Island, Lekki, and Banana Island.
          </p>

          <div className="space-y-5 bg-[#0b152c] border border-[#d4af37]/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-4 text-sm md:text-base text-slate-200">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#e6c465] shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400">Service Areas</p>
                <p className="font-semibold">Ikoyi, Victoria Island, Lekki & Banana Island</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm md:text-base text-slate-200">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#e6c465] shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400">Direct Line / WhatsApp</p>
                <a href="tel:08061946478" className="font-semibold hover:text-[#e6c465] transition-colors">
                  08061946478
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm md:text-base text-slate-200">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#e6c465] shrink-0">
                <Mail size={18} />
              </div>
              <div className="break-all">
                <p className="text-[11px] uppercase tracking-wider text-slate-400">Email Concierge</p>
                <a href="mailto:spakucleaninglimited@yahoo.com" className="font-semibold hover:text-[#e6c465] transition-colors">
                  spakucleaninglimited@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm md:text-base text-slate-200">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#e6c465] shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400">Operating Hours</p>
                <p className="font-semibold">Mon–Sat: 8:00am – 7:00pm • Emergency: 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formspree Luxury Card */}
        <div className="bg-[#0b152c] border border-[#d4af37]/40 p-8 md:p-10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-[480px] flex flex-col justify-center">
          {status === 'success' ? (
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#e6c465] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Check className="text-[#081022]" size={40} strokeWidth={3} />
              </div>
              <h3 className="font-serif-luxury text-3xl text-[#f3e5be] mb-3">Request Confirmed</h3>
              <p className="text-slate-300 text-sm mb-8">
                Thank you for choosing Spaku Kleaners Limited. Our concierge team will reach out shortly to finalize your 30% discounted booking.
              </p>

              <button
                type="button"
                onClick={() => setStatus('')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest transition-all"
              >
                <RotateCcw size={14} /> Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <h2 className="font-serif-luxury text-2xl text-[#f3e5be]">Request a Quote</h2>
                <p className="text-xs text-slate-400 mt-1">Fill in your details below and we will respond promptly.</p>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-xl bg-[#060d1c] border border-[#d4af37]/30 text-white text-sm focus:border-[#e6c465] outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full p-4 rounded-xl bg-[#060d1c] border border-[#d4af37]/30 text-white text-sm focus:border-[#e6c465] outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0806 194 6478"
                  className="w-full p-4 rounded-xl bg-[#060d1c] border border-[#d4af37]/30 text-white text-sm focus:border-[#e6c465] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2">Service & Property Details</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your cleaning needs, location, and preferred schedule..."
                  className="w-full p-4 rounded-xl bg-[#060d1c] border border-[#d4af37]/30 text-white text-sm h-32 focus:border-[#e6c465] outline-none transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-[#e5c465] to-[#c99e32] hover:from-[#f0d37c] hover:to-[#d4af37] transition-all p-4 rounded-xl font-bold text-[#081022] flex items-center justify-center gap-2 text-sm tracking-wide uppercase disabled:opacity-50 shadow-lg"
              >
                {status === 'sending' ? (
                  'Sending Request...'
                ) : (
                  <>
                    Submit Booking Request <Send size={16} />
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center mt-2">
                  Something went wrong. Please call us directly on 08061946478.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// --- About Page ---
const About = () => (
  <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
    <span className="text-[#e6c465] text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
      About Spaku Kleaners Limited
    </span>
    <h1 className="font-serif-luxury text-4xl md:text-6xl text-[#f3e5be] mb-8 leading-tight">
      Redefining Cleaning Excellence for Lagos.
    </h1>

    <div className="bg-[#0b152c] border border-[#d4af37]/35 rounded-2xl p-8 md:p-12 space-y-6 shadow-2xl">
      <p className="text-lg md:text-xl text-slate-200 leading-relaxed border-l-2 border-[#e6c465] pl-6">
        Spaku Kleaners Limited delivers bespoke residential, commercial, and industrial hygiene services across Ikoyi, Victoria Island, Lekki, and Banana Island.
      </p>
      <p className="text-sm md:text-base text-slate-300 leading-relaxed">
        Our vetted, uniformed specialists ensure your spaces remain spotless, hygienic, and welcoming. Using eco-friendly, hospital-grade formulations and modern extraction equipment, we protect both your luxury finishes and your family’s health.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-[#d4af37]/20">
        <div>
          <h3 className="font-serif-luxury text-xl text-[#e6c465] mb-1">Discreet & Vetted</h3>
          <p className="text-xs text-slate-400">Background-checked professionals trained for high-trust private estates and corporate suites.</p>
        </div>
        <div>
          <h3 className="font-serif-luxury text-xl text-[#e6c465] mb-1">Eco-Conscious</h3>
          <p className="text-xs text-slate-400">Non-toxic, surface-safe solutions formulated for marble, hardwood, and fine upholstery.</p>
        </div>
        <div>
          <h3 className="font-serif-luxury text-xl text-[#e6c465] mb-1">Ranked Verified</h3>
          <p className="text-xs text-slate-400">Officially verified on Ranked.ng with a 30% promotional discount across all services.</p>
        </div>
      </div>

      <div className="pt-4">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e5c465] to-[#c99e32] text-[#081022] px-6 py-3 rounded-lg text-sm font-bold"
        >
          Book a Consultation <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  </div>
);

// --- Luxury Footer ---
const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#060d1c] text-slate-200 mt-10">
      <GoldOrnateDivider />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="h-11 w-11 rounded-full overflow-hidden border border-[#d4af37]/60 shrink-0">
              <img src="/logo.jpg" alt="Spaku Kleaners Logo" className="w-full h-full object-cover" />
            </div>
            <div className="leading-none">
              <span className="font-serif-luxury block text-2xl font-semibold text-[#e6c465]">Spaku</span>
              <span className="font-serif-luxury block text-lg text-[#d4af37]/90 -mt-1">Kleaners</span>
            </div>
          </Link>
          <p className="text-xs text-slate-300/80 leading-relaxed max-w-xs">
            Luxury cleaning, redefined. Premium cleaning & fumigation services for homes, estates, hotels, and offices across Lagos. Verified. Eco-conscious.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif-luxury text-lg text-[#f3e5be]">Contact</h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li>
              <a href="mailto:spakucleaninglimited@yahoo.com" className="hover:text-[#e6c465] transition-colors break-all">
                spakucleaninglimited@yahoo.com
              </a>
            </li>
            <li>
              <a href="tel:08061946478" className="hover:text-[#e6c465] transition-colors font-semibold">
                +234 806 194 6478
              </a>
            </li>
            <li className="text-slate-400">
              Ikoyi • VI • Lekki • Banana Island
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif-luxury text-lg text-[#f3e5be]">Hours</h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li>Mon–Sat: 8:00am – 7:00pm</li>
            <li>Sunday: By Appointment</li>
            <li className="text-[#e6c465] font-medium">Emergency Cleaning: 24/7</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif-luxury text-lg text-[#f3e5be]">Follow Us</h4>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/spaku.kleaners?igsh=MXR0cnJneWJtbWI3ag=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg border border-[#d4af37]/40 flex items-center justify-center text-[#e6c465] hover:bg-[#e6c465] hover:text-[#081022] transition-all"
            >
              <Instagram size={17} />
            </a>
            <a
              href="https://tiktok.com/@spaku.kleanerslimited"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 rounded-lg border border-[#d4af37]/40 flex items-center justify-center text-[#e6c465] hover:bg-[#e6c465] hover:text-[#081022] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.35-.14 6.7-.13 10.05-.03 2.1-.8 4.25-2.4 5.68-1.74 1.61-4.32 2.22-6.55 1.61-2.22-.55-4.15-2.2-4.9-4.32-.88-2.35-.38-5.18 1.34-7.01 1.4-1.57 3.53-2.36 5.62-2.13v4.18c-.8-.19-1.66-.08-2.36.35-.8.5-1.29 1.4-1.25 2.33.02 1.1.84 2.11 1.93 2.31 1.05.23 2.27-.15 2.87-1.07.28-.46.39-1.01.38-1.55-.02-4.34-.01-8.68-.01-13.03Z" />
              </svg>
            </a>
          </div>

          <div className="pt-1">
            <p className="text-xs text-slate-300 mb-2">
              <span className="text-[#e6c465] font-medium">Newsletter —</span> Get curated cleaning tips & 30% promo offers
            </p>
            {subscribed ? (
              <p className="text-xs text-[#e6c465] font-medium">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-[#0b152c] border border-[#d4af37]/30 rounded-md px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-[#e6c465] outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#e5c465] hover:bg-[#f0d37c] text-[#081022] font-bold text-xs px-3.5 py-2 rounded-md shrink-0 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 text-center text-[11px] text-slate-400">
        <p>
          © {new Date().getFullYear()} Spaku Kleaners Limited. All rights reserved. •{' '}
          <Link to="/services" className="hover:text-[#e6c465]">About Us</Link> •{' '}
          <Link to="/contact" className="hover:text-[#e6c465]">Book Service</Link> •{' '}
          <a
            href="https://ranked.ng/place/spaku-kleaners-limited-ifqzbo?utm_source=verified-badge"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e6c465]"
          >
            Ranked.ng Verified
          </a>
        </p>
      </div>
    </footer>
  );
};

// --- Main Router ---
export default function App() {
  useEffect(() => {
    if (!document.getElementById('gtag-ga-script')) {
      const script1 = document.createElement('script');
      script1.id = 'gtag-ga-script';
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script1);
    }

    if (!document.getElementById('gtag-ads-script')) {
      const scriptAds = document.createElement('script');
      scriptAds.id = 'gtag-ads-script';
      scriptAds.async = true;
      scriptAds.src = `https://www.googletagmanager.com/gtag/js?id=${AW_ID}`;
      document.head.appendChild(scriptAds);
    }

    if (!document.getElementById('gtag-init-script')) {
      const scriptInit = document.createElement('script');
      scriptInit.id = 'gtag-init-script';
      scriptInit.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
        gtag('config', '${AW_ID}');
      `;
      document.head.appendChild(scriptInit);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#081022] text-slate-100 selection:bg-[#e6c465] selection:text-[#081022]">
        <GoogleTagTracker />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}