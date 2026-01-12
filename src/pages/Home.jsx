import React from 'react';
import { CheckCircle2, PlayCircle } from 'lucide-react';

const Home = () => {
  const serviceList = [
    "Commercial Cleaning", "Decluttering & Space Mgmt", "Deep Cleaning", 
    "Fumigation", "Industrial Cleaning", "Office Cleaning", 
    "Household Cleaning", "Post Construction", "Move In/Out", "Rug & Upholstery"
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-slate-950 px-4 py-2 rounded-full font-black text-xs uppercase tracking-tighter mb-8 animate-bounce">
              <span>30% OFF ALL SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black italic uppercase leading-[0.9] tracking-tighter mb-6">
              Best <span className="text-blue-500">Cleaning</span> <br /> Solutions.
            </h2>
            <p className="text-slate-400 text-lg font-bold mb-10 max-w-md">
              Spaku Kleaners Limited offers top-notch solutions for your home and office in Lagos.
            </p>
            
            {/* Video Container placeholder */}
            <div className="aspect-video w-full max-w-2xl bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center group cursor-pointer overflow-hidden">
               <div className="text-white/20 group-hover:text-blue-500 transition-colors">
                 <PlayCircle size={64} strokeWidth={1} />
               </div>
               {/* When you have your video file in /public, use: 
               <video src="/waaa.mp4" autoPlay muted loop className="w-full h-full object-cover" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-950">Our Services</h3>
          <div className="h-2 w-20 bg-blue-600 mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-white border-2 border-slate-100 p-6 md:p-8 rounded-[2rem] flex items-center gap-4 hover:border-blue-600 transition-all group">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CheckCircle2 size={24} />
              </div>
              <span className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tight leading-tight">
                {service}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;