import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const items = [
  { name: 'Ava M.', text: 'The guidance feels gentle and realistic. Our evenings are calmer and more connected.', avatar: 'https://i.pravatar.cc/100?img=5' },
  { name: 'Noah R.', text: 'Love the community—non-judgmental and so supportive. Tips actually work!', avatar: 'https://i.pravatar.cc/100?img=11' },
  { name: 'Liam S.', text: 'Beautifully designed and easy to use. The routines section is a lifesaver.', avatar: 'https://i.pravatar.cc/100?img=15' },
  { name: 'Mia K.', text: 'My toddler is sleeping better thanks to the bedtime module. Thank you!', avatar: 'https://i.pravatar.cc/100?img=47' },
]

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => setIndex(prev => (prev + 1) % items.length), 3500)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section id="testimonials" className="relative py-20 bg-black">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{background:'radial-gradient(500px_200px_at_70%_30%, rgba(160,102,255,0.25), transparent)'}} />
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What Parents Say</h2>

        <div className="mt-10 overflow-hidden">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
            {items.map((t, i) => (
              <div key={i} className="min-w-full px-2">
                <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
                  className="rounded-2xl p-8 bg-black/70 border border-purple-300/20 backdrop-blur shadow-[0_0_40px_rgba(160,102,255,0.35)]">
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-purple-400/50" />
                    <div>
                      <p className="text-white font-semibold">{t.name}</p>
                      <p className="text-white/70 text-sm">Parent</p>
                    </div>
                  </div>
                  <p className="text-white/80 mt-4 text-lg">“{t.text}”</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button key={i} onClick={()=>setIndex(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${index===i ? 'bg-purple-400 shadow-[0_0_12px_rgba(160,102,255,0.8)]' : 'bg-white/20'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
