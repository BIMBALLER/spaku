import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, CheckCircle, Mail, Phone, MapPin, Instagram, Star, Send, ArrowUpRight, Check, RotateCcw } from 'lucide-react';

// --- Shared Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a3c87] text-white px-6 h-20 flex items-center justify-between shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-white rounded-full overflow-hidden border-2 border-white shrink-0">
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
    <div className="pt-20 overflow-x-hidden">
      <section className="bg-slate-50 py-12 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-[#1a3c87] px-4 py-2 rounded-full font-black text-[10px] uppercase mb-6 shadow-lg animate-pulse">
              <Star size={12} fill="currentColor" /> 30% OFF ALL SERVICES
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#1a3c87] leading-[0.85] tracking-tighter mb-8 italic uppercase">
              Spotless <br /> <span className="text-blue-600">Spaces.</span> <br /> Everytime.
            </h1>
            <p className="text-slate-600 text-lg md:text-xl font-bold mb-10 max-w-lg leading-relaxed">
              Spaku Kleaners Limited: Premium cleaning for Ikoyi, VI, Lekki, and Banana Island.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:08061946478" className="bg-[#1a3c87] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-all shadow-xl">
                Call Now
              </a>
              <Link to="/contact" className="bg-white text-[#1a3c87] border-2 border-[#1a3c87] px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-100 transition-all">
                Get a Quote
              </Link>
            </div>
          </div>
          
          <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white aspect-video bg-slate-900">
            <video 
              src="/what.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              webkit-playsinline="true"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black uppercase italic mb-10 text-[#1a3c87] text-left">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
          {services.map((s) => (
            <div key={s} className="bg-white border-2 border-slate-100 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-[#1a3c87] hover:shadow-2xl transition-all group">
              <CheckCircle className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-lg font-black uppercase text-slate-800 tracking-tight">{s}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- Contact Page ---
const Contact = () => {
  const [status, setStatus] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlggbzro", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-left">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="text-6xl md:text-8xl font-black italic text-[#1a3c87] mb-8 uppercase tracking-tighter leading-none">Contact.</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-lg md:text-xl font-black italic"><MapPin className="text-blue-600" size={24}/> Ikoyi, VI, Lekki, Banana Island</div>
            <div className="flex items-center gap-4 text-lg md:text-xl font-black italic"><Phone className="text-blue-600" size={24}/> 08061946478</div>
            <div className="flex items-center gap-4 text-lg md:text-xl font-black italic break-all"><Mail className="text-blue-600" size={24}/> spakucleaninglimited@yahoo.com</div>
          </div>
        </div>

        <div className="bg-slate-950 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden min-h-[480px] flex flex-col justify-center">
          {status === "success" ? (
            <div className="text-center p-6 animate-in fade-in zoom-in duration-500">
               <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30">
                  <Check className="text-white" size={48} strokeWidth={4} />
               </div>
               <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-3">Great Success!</h3>
               <p className="text-slate-400 font-bold mb-10">Your message reached us. We'll be in touch shortly.</p>
               
               <button 
                onClick={() => setStatus("")} 
                className="flex items-center gap-2 mx-auto bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all"
               >
                 <RotateCcw size={14} /> Send Another message
               </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="mb-4">
                 <h4 className="text-white font-black uppercase text-xs tracking-widest opacity-40">Booking Form</h4>
              </div>
              <input type="text" name="name" placeholder="YOUR NAME" className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black focus:border-blue-500 outline-none transition-all" required />
              <input type="email" name="email" placeholder="EMAIL ADDRESS" className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black focus:border-blue-500 outline-none transition-all" required />
              <textarea name="message" placeholder="CLEANING NEEDS..." className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black h-32 focus:border-blue-500 outline-none transition-all"></textarea>
              <button 
                type="submit" 
                disabled={status === "sending"}
                className="w-full bg-blue-600 hover:bg-white hover:text-blue-900 transition-all p-5 rounded-2xl font-black text-white flex items-center justify-center gap-2 tracking-widest uppercase disabled:opacity-50"
              >
                {status === "sending" ? "SENDING..." : <>SEND REQUEST <Send size={18}/></>}
              </button>
              {status === "error" && <p className="text-red-500 text-xs font-black text-center mt-2">Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// --- About Page ---
const About = () => (
  <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-left">
    <h1 className="text-5xl md:text-7xl font-black italic text-[#1a3c87] mb-8 uppercase tracking-tighter">About Us</h1>
    <p className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed border-l-8 border-blue-600 pl-6 mb-10">
      Redefining cleaning excellence for Lagos.
    </p>
    <div className="bg-slate-100 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-200">
      <h3 className="text-2xl font-black text-[#1a3c87] mb-4 uppercase">Our Commitment</h3>
      <p className="font-bold text-slate-600 leading-relaxed">
         Our team ensures your spaces are spotless, hygienic, and welcoming. We use eco-friendly materials to protect your environment and health.
      </p>
    </div>
  </div>
);

// --- Detailed Footer ---
const Footer = () => (
    <footer className="bg-[#1a3c87] text-white pt-20 pb-10 px-6 mt-20 text-left border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white rounded-full overflow-hidden shrink-0"><img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" /></div>
            <span className="text-xl font-black italic uppercase">SPAKU</span>
          </div>
          <p className="text-sm font-bold opacity-70 leading-relaxed max-w-xs">Premium hygiene solutions for Ikoyi, VI, and Lekki.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/spaku.kleaners?igsh=MXR0cnJneWJtbWI3ag==" className="bg-white/10 p-3 rounded-xl hover:bg-yellow-400 hover:text-blue-900 transition-all"><Instagram size={20} /></a>
            <a href="https://tiktok.com/@spaku.kleanerslimited" className="bg-white/10 p-3 rounded-xl hover:bg-black transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.35-.14 6.7-.13 10.05-.03 2.1-.8 4.25-2.4 5.68-1.74 1.61-4.32 2.22-6.55 1.61-2.22-.55-4.15-2.2-4.9-4.32-.88-2.35-.38-5.18 1.34-7.01 1.4-1.57 3.53-2.36 5.62-2.13v4.18c-.8-.19-1.66-.08-2.36.35-.8.5-1.29 1.4-1.25 2.33.02 1.1.84 2.11 1.93 2.31 1.05.23 2.27-.15 2.87-1.07.28-.46.39-1.01.38-1.55-.02-4.34-.01-8.68-.01-13.03Z"/></svg>
            </a>
          </div>
        </div>
        <div><h4 className="font-black uppercase text-xs tracking-widest mb-6 text-yellow-400">Navigation</h4><ul className="space-y-4 font-bold text-sm opacity-80"><li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li><li><Link to="/services" className="hover:text-yellow-400 transition-colors">About Us</Link></li><li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li></ul></div>
        <div><h4 className="font-black uppercase text-xs tracking-widest mb-6 text-yellow-400">Expertise</h4><ul className="space-y-4 font-bold text-sm opacity-80"><li>Deep Cleaning</li><li>Fumigation</li><li>Industrial</li><li>Rug & Upholstery</li></ul></div>
        <div><h4 className="font-black uppercase text-xs tracking-widest mb-6 text-yellow-400">Location</h4><div className="space-y-4 opacity-80 text-sm font-bold flex flex-col items-start"><span className="flex gap-2"><MapPin size={16}/> Ikoyi, Lekki, VI, Banana Island</span><span className="flex gap-2"><Phone size={16}/> 08061946478</span></div></div>
      </div>
      <div className="pt-10 border-t border-white/5 text-center"><p className="text-[9px] font-black opacity-30 tracking-[0.4em]">© 2026 SPAKU KLEANERS LIMITED</p></div>
    </footer>
);

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