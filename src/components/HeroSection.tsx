import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, Clock, Shield, ChevronRight } from 'lucide-react'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Respect reduced motion preference for medical accessibility
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  const fadeInVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-gradient-to-b from-teal-50/50 to-white overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-100/30 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Content Column - 60% */}
          <motion.div 
            className="lg:col-span-3 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Badge */}
            <motion.div 
              variants={fadeInVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-teal-100 shadow-sm"
            >
              <Shield className="w-4 h-4 text-teal-600" strokeWidth={1.5} />
              <span className="text-sm font-medium text-teal-700">Accepting New Patients</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeInVariants} className="space-y-4">
              <p className="text-sm font-medium text-teal-600 uppercase tracking-widest">
                Welcome to Smile Bright Dental
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                Expert Dental Care for Your{' '}
                <span className="text-teal-600">Entire Family</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              variants={fadeInVariants}
              className="text-lg text-slate-600 leading-relaxed max-w-[65ch]"
            >
              Experience compassionate, state-of-the-art dental care in a comfortable environment. 
              Our team of specialists is dedicated to creating healthy, beautiful smiles for patients 
              of all ages — from first visits to advanced procedures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#book"
                className="group inline-flex items-center justify-center gap-2 h-12 px-8 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-all duration-200 hover:shadow-lg hover:shadow-teal-600/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Schedule Your Visit
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Our Services
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={fadeInVariants}
              className="flex flex-wrap items-center gap-6 pt-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600" strokeWidth={1.5} />
                <span>Same-day appointments available</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600" strokeWidth={1.5} />
                <span>Emergency care 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column - 40% */}
          <motion.div 
            className="lg:col-span-2 relative"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 group">
              {/* Placeholder for dental imagery - warm, professional, approachable */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-teal-50 to-white flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-16 h-16 text-teal-600"
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    >
                      <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 5 3 7 1 1.5 2 4 3 7 1-3 2-5.5 3-7 1.5-2 3-4.5 3-7 0-3.5-2.5-6-6-6z" />
                      <path d="M12 6v4" />
                    </svg>
                  </div>
                  <p className="text-slate-400 text-sm font-medium">
                    Dental imagery placeholder
                  </p>
                </div>
              </div>
              
              {/* Hover overlay with subtle scale effect */}
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/5 transition-colors duration-300" />
            </div>

            {/* Floating trust card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100 max-w-[200px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">4.9</p>
                  <p className="text-xs text-slate-500">from 200+ reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Open today: 8am – 6pm
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span>Most insurance accepted</span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span>Financing options available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
