import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 h-20 flex items-center px-4 md:px-10 justify-between">
      <div className="flex items-center gap-3">
        {/* Logo & Brand Name */}
        <Link to="/" className="text-xl md:text-2xl font-black italic tracking-tighter uppercase text-slate-950">
          SPAKU <span className="text-blue-600 font-black">KLEANERS.</span>
        </Link>

        {/* RANKED.NG VERIFIED BADGE */}
        <a 
          href="https://ranked.ng/place/spaku-kleaners-limited-ifqzbo?utm_source=verified-badge" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
        >
          <img 
            src="https://ranked.ng/api/badge/spaku-kleaners-limited-ifqzbo" 
            alt="Spaku Kleaners Limited is RANKED VERIFIED" 
            className="h-7 w-auto" 
          />
        </a>
      </div>
      
      <div className="flex items-center gap-6 md:gap-10">
        <div className="hidden sm:flex gap-6 md:gap-8 text-xs font-black uppercase tracking-widest text-slate-900">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/services" className="hover:text-blue-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>
        
        <a href="tel:08061946478" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-950 transition-all active:scale-95">
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;