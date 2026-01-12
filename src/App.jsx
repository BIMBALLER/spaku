import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, CheckCircle, Mail, Phone, MapPin, Instagram, Play, Star, Send } from 'lucide-react';

// --- Shared Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a3c87] text-white px-6 h-20 flex items-center justify-between shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 bg-white rounded-full overflow-hidden border-2 border-white">
          <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
        </div>
        <span className="text-2xl font-black italic tracking-tighter">SPAKU</span>
      </div>
      
      <div className="hidden md:flex gap-8 font-black uppercase text-[10px] tracking-widest">
        <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
        <Link to="/services" className="hover:text-yellow-400 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
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
          
          {/* THE CORRECTED VIDEO TAG */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-video bg-slate-900 group">
            <video 
              src="/what.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full text-white border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <Play size={40} fill="currentColor" className="ml-1" />
              </div>
            </div>
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
  <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
    <h1 className="text-6xl font-black italic text-[#1a3c87] mb-8 uppercase">About Us</h1>
    <p className="text-2xl font-bold text-slate-700 leading-relaxed border-l-8 border-blue-600 pl-6 mb-10">
      Spaku Kleaners Limited delivers top-notch cleaning solutions tailored to your unique needs in Lagos.
    </p>
    <div className="bg-slate-900 p-10 rounded-[3rem] text-white italic font-black text-xl">
      "Join the countless satisfied clients who have experienced the Spaku difference."
    </div>
  </div>
);

// --- Contact Page ---
const Contact = () => (
  <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-7xl font-black italic text-[#1a3c87] mb-8 uppercase">Contact.</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-xl font-black italic"><MapPin className="text-blue-600"/> Lagos: Ikoyi, VI, Lekki</div>
          <div className="flex items-center gap-4 text-xl font-black italic"><Phone className="text-blue-600"/> 08061946478</div>
          <div className="flex items-center gap-4 text-xl font-black italic"><Mail className="text-blue-600"/> spakucleaninglimited@yahoo.com</div>
        </div>
      </div>
      <div className="bg-slate-950 p-10 rounded-[3rem]">
        <form action="https://formspree.io/f/mjkwrkkz" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="NAME" className="w-full p-5 rounded-2xl bg-white/10 text-white font-black" required />
          <input type="email" name="email" placeholder="EMAIL" className="w-full p-5 rounded-2xl bg-white/10 text-white font-black" required />
          <textarea name="message" placeholder="MESSAGE" className="w-full p-5 rounded-2xl bg-white/10 text-white font-black h-32"></textarea>
          <button className="w-full bg-blue-600 p-5 rounded-2xl font-black text-white flex items-center justify-center gap-2">SEND <Send size={20}/></button>
        </form>
      </div>
    </div>
  </div>
);

// --- Main Router ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="bg-[#1a3c87] text-white py-12 mt-20 text-center">
          <p className="font-black uppercase text-[10px] tracking-[0.4em] opacity-60">
            © 2026 SPAKU KLEANERS LIMITED
          </p>
        </footer>
      </div>
    </Router>
  );
}