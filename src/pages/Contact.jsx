import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
        <div>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-slate-950 mb-8">
            Contact <span className="text-blue-600">Us.</span>
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-700 font-bold text-lg">
              <MapPin className="text-blue-600" /> <span>Ikoyi, VI, Banana Island, Lekki/Ajah</span>
            </div>
            <a href="mailto:spakucleaninglimited@yahoo.com" className="flex items-center gap-4 text-slate-700 font-bold text-lg hover:text-blue-600 transition-colors">
              <Mail className="text-blue-600" /> <span>spakucleaninglimited@yahoo.com</span>
            </a>
            <div className="flex items-center gap-4 text-slate-700 font-bold text-lg">
              <Phone className="text-blue-600" /> <span>08061946478</span>
            </div>
            <a href="https://instagram.com/spaku_kleaners" target="_blank" className="flex items-center gap-4 text-slate-700 font-bold text-lg hover:text-pink-600 transition-colors">
              <Instagram className="text-blue-600" /> <span>@spaku_kleaners</span>
            </a>
          </div>
        </div>

        <div className="bg-slate-950 p-8 rounded-[2.5rem] text-white">
          <form action="https://formspree.io/f/mjkwrkkz" method="post" className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Full Name</label>
              <input type="text" name="name" className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white outline-none focus:border-blue-500" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Email Address</label>
              <input type="email" name="email" className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white outline-none focus:border-blue-500" placeholder="Email@example.com" required />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Book Us / Details</label>
              <textarea name="comments" rows="4" className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white outline-none focus:border-blue-500" placeholder="Leave a note for us..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-slate-950 transition-all active:scale-95">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;