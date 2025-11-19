import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="relative py-20" style={{background: 'linear-gradient(180deg, #2A005C 0%, #000000 100%)'}}>
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(600px_200px_at_20%_20%, rgba(160,102,255,0.25), transparent), radial-gradient(600px_200px_at_80%_60%, rgba(42,0,92,0.35), transparent)'}} />
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-white text-center">
          Contact Us
        </motion.h2>

        <motion.form initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7}} onSubmit={(e)=>e.preventDefault()} className="mt-10 grid md:grid-cols-2 gap-6 bg-black/70 border border-white/10 rounded-2xl p-6 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="grid gap-4">
            <div>
              <label className="text-white/80 text-sm">Name</label>
              <input required className="mt-1 w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/60" placeholder="Your name" />
            </div>
            <div>
              <label className="text-white/80 text-sm">Email</label>
              <input type="email" required className="mt-1 w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/60" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-white/80 text-sm">Subject</label>
              <input className="mt-1 w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/60" placeholder="How can we help?" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-white/80 text-sm">Message</label>
            <textarea rows={8} className="mt-1 w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400/60" placeholder="Your message..." />
            <button className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-black bg-white shadow-[0_0_0_0_rgba(160,102,255,0.0)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(160,102,255,0.8)]">
              Send Message
            </button>
          </div>
        </motion.form>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="flex items-center gap-3 text-white/80">
            <div className="p-2 rounded-lg bg-black/60 border border-white/10"><Phone size={18} className="text-white"/></div>
            <span>+1 (222) 333-4444</span>
          </motion.div>
          <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.05}} className="flex items-center gap-3 text-white/80">
            <div className="p-2 rounded-lg bg-black/60 border border-white/10"><Mail size={18} className="text-white"/></div>
            <span>hello@parentguide.app</span>
          </motion.div>
          <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="flex items-center gap-3 text-white/80">
            <div className="p-2 rounded-lg bg-black/60 border border-white/10"><MapPin size={18} className="text-white"/></div>
            <span>Remote • Worldwide</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
