import React from 'react'
import { motion } from 'framer-motion'
import { Baby, Brain, HeartPulse, BookOpenText, Salad, MessagesSquare } from 'lucide-react'

const features = [
  { icon: BookOpenText, title: 'Parenting Tips', desc: 'Practical, age-appropriate advice for everyday moments and challenges.' },
  { icon: Brain, title: 'Child Growth', desc: 'Milestone tracking and activities that nurture cognitive development.' },
  { icon: MessagesSquare, title: 'Behavior Guidance', desc: 'Gentle strategies to encourage positive behavior and emotional regulation.' },
  { icon: HeartPulse, title: 'Health & Nutrition', desc: 'Balanced meal plans, sleep routines, and wellness checklists.' },
  { icon: Baby, title: 'Early Years', desc: 'Foundational bonding, play, and early learning best practices.' },
  { icon: Salad, title: 'Family Routines', desc: 'Build predictable rhythms that make days calmer for everyone.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-black">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{background: 'radial-gradient(600px_200px_at_20%_20%, rgba(160,102,255,0.25), transparent), radial-gradient(600px_200px_at_80%_60%, rgba(42,0,92,0.35), transparent)'}} />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-white text-center">
          Built for Calm, Confident Parenting
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div key={f.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx*0.05}}
              className="group rounded-2xl p-6 bg-black/80 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(160,102,255,0.5)] hover:border-purple-300/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#2A005C] to-[#A066FF] text-white shadow-[0_0_20px_rgba(160,102,255,0.6)]">
                  {React.createElement(f.icon, { size: 24 })}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{f.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
