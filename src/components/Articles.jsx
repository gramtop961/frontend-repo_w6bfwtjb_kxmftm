import React from 'react'
import { motion } from 'framer-motion'

const posts = [
  { id:1, img:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop', title:'Gentle Bedtime Routines that Stick', desc:'Create soothing rituals that help little ones drift off peacefully.' },
  { id:2, img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop', title:'Play that Builds Brains', desc:'Turn everyday moments into powerful learning opportunities.' },
  { id:3, img:'https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=1200&auto=format&fit=crop', title:'Navigating Big Feelings', desc:'Simple scripts and tools to help kids name and tame emotions.' },
  { id:4, img:'https://images.unsplash.com/photo-1508179522353-d4f9a27c31fb?q=80&w=1200&auto=format&fit=crop', title:'Nutrition for Busy Families', desc:'Quick, balanced meals kids love—without the stress.' }
]

export default function Articles() {
  return (
    <section id="articles" className="relative py-20" style={{background:'linear-gradient(180deg, #0b0017, #14002b)'}}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-white text-center">
          Latest Articles & Guides
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, idx) => (
            <motion.a key={p.id} href="#" initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx*0.06}}
              className="group rounded-2xl overflow-hidden bg-black/60 border border-white/10 relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-white/70 text-sm mt-1">{p.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[rgba(160,102,255,0.6)] transition-shadow" style={{boxShadow:'0 0 0 0 rgba(160,102,255,0)',}} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
