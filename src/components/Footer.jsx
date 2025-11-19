import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="relative bg-black border-t border-purple-300/20">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/70">© {new Date().getFullYear()} ParentGuide. All rights reserved.</div>
        <div className="flex items-center gap-4">
          {[Facebook, Twitter, Instagram].map((Icon, idx) => (
            <a href="#" key={idx} className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-purple-300/40 hover:shadow-[0_0_20px_rgba(160,102,255,0.65)] transition">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
