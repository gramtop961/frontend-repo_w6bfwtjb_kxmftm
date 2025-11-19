import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Articles from './components/Articles'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-[#0b0017] text-white">
      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-wide">ParentGuide</a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#articles" className="hover:text-white">Articles</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:shadow-[0_0_30px_rgba(160,102,255,0.8)] transition">Contact</a>
          </nav>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Articles />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
