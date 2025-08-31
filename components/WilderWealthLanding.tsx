import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Target, Brain, BookOpen, Mail, Youtube, Instagram } from "lucide-react";

export default function WilderWealthLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <motion.a initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500 text-white"><Sparkles size={18} /></span>
            <span className="text-lg">WilderWealth</span>
          </motion.a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#approach" className="hover:text-emerald-600">Approach</a>
            <a href="#coach" className="hover:text-emerald-600">AI Coach</a>
            <a href="#library" className="hover:text-emerald-600">Library</a>
            <a href="#join" className="hover:text-emerald-600">Join</a>
          </nav>
          <div className="flex items-center gap-2">
            <a aria-label="YouTube" href="#" className="p-2 rounded-xl hover:bg-slate-100"><Youtube size={18} /></a>
            <a aria-label="Instagram" href="#" className="p-2 rounded-xl hover:bg-slate-100"><Instagram size={18} /></a>
            <button className="ml-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-4 py-2">Start Free</button>
          </div>
        </div>
      </header>
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Smarter financial habits</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
          Money is not just math. It is stories, habits, and emotions. WilderWealth blends behavioral finance with practical systems so your money supports the life you are building.
        </p>
      </section>
    </div>
  );
}
