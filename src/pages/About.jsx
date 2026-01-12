import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-20 px-4 md:px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-slate-950 mb-6">
        About <span className="text-blue-600">Spaku.</span>
      </h1>
      
      <div className="space-y-8">
        <p className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed">
          At <span className="text-slate-950 underline decoration-blue-600 decoration-4">SparklePro</span>, we pride ourselves on delivering top-notch cleaning solutions tailored to meet the unique needs of our clients.
        </p>
        
        <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border-2 border-slate-100">
          <h2 className="text-2xl font-black uppercase mb-4 text-slate-950">Why Choose Us?</h2>
          <p className="text-slate-600 text-lg font-bold leading-relaxed mb-6">
            Join the countless satisfied clients who have experienced the SparklePro difference. Let us take the hassle out of cleaning, so you can focus on what truly matters.
          </p>
          <h3 className="text-lg md:text-xl font-black text-blue-600 uppercase tracking-tight italic">
            "Discover why we’re the go-to choice for cleaning services in Lagos and beyond!"
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;