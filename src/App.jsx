import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, CheckCircle, Mail, Phone, MapPin, Instagram, Star, Send, ArrowUpRight } from 'lucide-react';

// --- Shared Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a3c87] text-white px-6 h-20 flex items-center justify-between shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-white rounded-full overflow-hidden border-2 border-white">
          <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
        </div>
        <span className="text-xl font-black italic tracking-tighter uppercase">SPAKU</span>
      </div>
      
      <div className="hidden md:flex gap-8 font-black uppercase text-[10px] tracking-widest">
        <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
        <Link to="/services" className="hover:text-yellow-400 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#1a3c87] p-8 flex flex-col gap-6 font-black uppercase text-sm border-t border-white/10 shadow-2xl">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

// --- Home Page ---
const Home = () => {
  const services = ["Commercial Cleaning", "Deep Cleaning", "Fumigation", "Industrial Cleaning", "Post Construction", "Rug & Upholstery"];
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-[#1a3c87] px-5 py-2 rounded-full font-black text-xs uppercase mb-8 shadow-lg">
              <Star size={14} fill="currentColor" /> 30% OFF ALL SERVICES
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-[#1a3c87] leading-[0.85] tracking-tighter mb-8 italic uppercase">
              Spotless <br /> <span className="text-blue-600">Spaces.</span> <br /> Everytime.
            </h1>
            <p className="text-slate-600 text-xl font-bold mb-10 max-w-lg leading-relaxed">
              Spaku Kleaners Limited: Premium cleaning for Ikoyi, VI, Lekki, and Banana Island.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:08061946478" className="bg-[#1a3c87] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-800 transition-all shadow-xl">
                Call Now
              </a>
              <Link to="/contact" className="bg-white text-[#1a3c87] border-2 border-[#1a3c87] px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-100 transition-all">
                Get a Quote
              </Link>
            </div>
          </div>
          
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-video bg-slate-900">
            <video src="/what.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black uppercase italic mb-12 text-[#1a3c87]">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s} className="bg-white border-2 border-slate-100 p-10 rounded-[2.5rem] hover:border-[#1a3c87] hover:shadow-2xl transition-all group">
              <CheckCircle className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-black uppercase text-slate-800 tracking-tight">{s}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- About Page ---
const About = () => (
  <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-left">
    <h1 className="text-6xl font-black italic text-[#1a3c87] mb-8 uppercase tracking-tighter">About Us</h1>
    <p className="text-2xl font-bold text-slate-700 leading-relaxed border-l-8 border-blue-600 pl-6 mb-10">
      At Spaku Kleaners Limited, we pride ourselves on delivering top-notch cleaning solutions tailored to meet the unique needs of our clients in Lagos.
    </p>
    <div className="bg-slate-100 p-10 rounded-[3rem] border border-slate-200">
      <h3 className="text-2xl font-black text-[#1a3c87] mb-4 uppercase">Our Commitment</h3>
      <p className="font-bold text-slate-600 leading-relaxed">
         Our dedicated team is committed to ensuring your spaces are spotless, hygienic, and welcoming.
      </p>
    </div>
  </div>
);

// --- Contact Page ---
const Contact = () => (
  <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-left">
    <div className="grid lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-7xl font-black italic text-[#1a3c87] mb-8 uppercase tracking-tighter">Contact.</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-xl font-black italic"><MapPin className="text-blue-600" size={24}/> Ikoyi, VI, Lekki, Banana Island</div>
          <div className="flex items-center gap-4 text-xl font-black italic"><Phone className="text-blue-600" size={24}/> 08061946478</div>
          <div className="flex items-center gap-4 text-xl font-black italic"><Mail className="text-blue-600" size={24}/> spakucleaninglimited@yahoo.com</div>
        </div>
      </div>
      <div className="bg-slate-950 p-10 rounded-[3rem] shadow-2xl">
        <form action="https://formspree.io/f/mjkwrkkz" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="YOUR NAME" className="w-full p-5 rounded-2xl bg-white/10 text-white font-black border border-white/10 focus:border-blue-500 outline-none" required />
          <input type="email" name="email" placeholder="EMAIL ADDRESS" className="w-full p-5 rounded-2xl bg-white/10 text-white font-black border border-white/10 focus:border-blue-500 outline-none" required />
          <textarea name="message" placeholder="TELL US ABOUT YOUR CLEANING NEEDS..." className="w-full p-5 rounded-2xl bg-white/10 text-white font-black h-32 border border-white/10 focus:border-blue-500 outline-none"></textarea>
          <button className="w-full bg-blue-600 hover:bg-white hover:text-blue-900 transition-all p-5 rounded-2xl font-black text-white flex items-center justify-center gap-2 tracking-widest uppercase">SEND REQUEST <Send size={20}/></button>
        </form>
      </div>
    </div>
  </div>
);

// --- Detailed Footer ---
const Footer = () => {
  return (
    <footer className="bg-[#1a3c87] text-white pt-20 pb-10 border-t border-white/10 px-6 mt-20 text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white rounded-full overflow-hidden border border-white">
              <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-xl font-black italic tracking-tighter uppercase">SPAKU</span>
          </div>
          <p className="text-sm font-bold opacity-70 leading-relaxed">
            Premium cleaning for Lagos' finest neighborhoods. Excellence in every corner.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/spaku_kleaners" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-yellow-400 hover:text-blue-900 transition-all">
              <Instagram size={20} />
            </a>
            {/* TikTok Link */}
            <a href="https://tiktok.com/@spaku.kleanerslimited" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-black transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.35-.14 6.7-.13 10.05-.03 2.1-.8 4.25-2.4 5.68-1.74 1.61-4.32 2.22-6.55 1.61-2.22-.55-4.15-2.2-4.9-4.32-.88-2.35-.38-5.18 1.34-7.01 1.4-1.57 3.53-2.36 5.62-2.13v4.18c-.8-.19-1.66-.08-2.36.35-.8.5-1.29 1.4-1.25 2.33.02 1.1.84 2.11 1.93 2.31 1.05.23 2.27-.15 2.87-1.07.28-.46.39-1.01.38-1.55-.02-4.34-.01-8.68-.01-13.03Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-black uppercase text-xs tracking-widest mb-6 text-yellow-400">Navigation</h4>
          <ul className="space-y-4 font-bold text-sm opacity-80">
            <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h4 className="font-black uppercase text-xs tracking-widest mb-6 text-yellow-400">Services</h4>
          <ul className="space-y-4 font-bold text-sm opacity-80 underline underline-offset-4 decoration-blue-400">
            <li>Deep Cleaning</li>
            <li>Fumigation</li>
            <li>Post Construction</li>
            <li>Rug & Upholstery</li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-black uppercase text-xs tracking-widest mb-6 text-yellow-400">Contact Info</h4>
          <div className="space-y-4 opacity-80 text-sm font-bold">
            <div className="flex gap-3"><MapPin size={18} className="text-yellow-400 shrink-0"/> Ikoyi, Lekki, VI, Banana Island</div>
            <div className="flex gap-3"><Phone size={18} className="text-yellow-400 shrink-0"/> 08061946478</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-center">
        <p className="font-black uppercase text-[9px] tracking-[0.4em] opacity-40">
          © 2026 SPAKU KLEANERS LIMITED. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

// --- Main Router ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-yellow-200">
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