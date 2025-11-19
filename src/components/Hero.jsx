import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const gradientFrom = '#2A005C'
const gradientTo = '#A066FF'

export default function Hero() {
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 600], [0, -60])
  const float1 = {
    initial: { y: 0 },
    animate: { y: [0, -12, 0] },
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  }
  const float2 = {
    initial: { y: 0 },
    animate: { y: [0, -18, 0] },
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`}}>
      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" style={{backgroundImage:'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 75% 75%, rgba(0,0,0,0.3), transparent 40%)'}}/>

      {/* 3D Spline scene */}
      <motion.div style={{ y: parallaxY }} className="absolute right-0 top-0 h-full w-full md:w-1/2">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-xs uppercase tracking-widest text-white/70 bg-black/30 rounded-full px-3 py-1 backdrop-blur">
                Parenting & Guidance Platform
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_4px_24px_rgba(160,102,255,0.45)]">
                Nurturing Stronger Bonds
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
                Evidence-based tips, gentle guidance, and a supportive community to help you raise confident, happy children.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="group inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-black bg-white shadow-[0_0_0_0_rgba(160,102,255,0.0)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(160,102,255,0.8)]">
                  Start Learning
                </a>
                <a href="#community" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-black/60 border border-white/10 backdrop-blur hover:border-white/30 hover:shadow-[0_0_30px_rgba(160,102,255,0.6)] transition-all">
                  Join Community
                </a>
              </div>
            </motion.div>

            {/* Floating decorative elements */}
            <div className="relative mt-10">
              <motion.div {...float1} className="absolute -left-6 top-0 w-24 h-24 rounded-3xl bg-black/50 border border-white/10 shadow-[0_0_40px_rgba(160,102,255,0.45)]" />
              <motion.div {...float2} className="absolute left-36 -top-10 w-12 h-12 rounded-full bg-black/40 border border-white/10 shadow-[0_0_30px_rgba(160,102,255,0.55)]" />
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>

      {/* subtle bottom gradient to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/60" />
    </section>
  )
}
