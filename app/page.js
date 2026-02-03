'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/3 to-emerald-500/3" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-gray-900 leading-tight tracking-tight mb-6">
              Anxiety & Trauma Therapy
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-light mb-12 max-w-3xl mx-auto">
              <span>Santa Monica</span>
              <span className="block font-serif font-semibold text-teal-700 mt-2">Dr. Maya Reynolds, PsyD</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto mb-20">
            <div className="lg:pr-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-10 lg:mb-12">
                Licensed Clinical Psychologist specializing in high-achieving adults experiencing 
                overwhelm, overthinking, and emotional dysregulation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {['CBT', 'EMDR', 'Telehealth'].map((service, idx) => (
                  <span
                    key={service}
                    className="px-8 py-4 bg-white/60 backdrop-blur-sm text-lg font-semibold text-gray-800 rounded-2xl shadow-lg border border-teal-200/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative w-full h-96 lg:h-[700px] mx-auto lg:mx-0 rounded-3xl shadow-2xl overflow-hidden group">
              <Image
                src="/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds, PsyD - Licensed Psychologist in Santa Monica"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 lg:p-12 max-w-5xl mx-auto border border-teal-100/50">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Ready to Begin?</h3>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">Complimentary 15-minute phone consultation</p>
                <button className="bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600 text-white px-12 lg:px-16 py-6 lg:py-7 rounded-2xl text-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full lg:w-auto">
                  Schedule Consultation
                </button>
              </div>
              <div className="border-l border-teal-200 pl-8 lg:pl-12 pt-4">
                <blockquote className="text-lg lg:text-xl text-gray-700 italic leading-relaxed mb-4">
                  "A space to slow down, reconnect, and build sustainable ways of living"
                </blockquote>
                <cite className="text-2xl font-serif font-semibold text-teal-700 not-italic">— Dr. Maya Reynolds</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24 lg:mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-gray-900 mb-8 tracking-tight">
              Clinical Specialties
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Evidence-based treatment for anxiety, trauma, and burnout recovery in Santa Monica adults
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: '🧠', title: 'Anxiety & Panic', desc: 'CBT and mindfulness-based interventions for chronic worry, somatic symptoms, and insomnia' },
              { icon: '🌀', title: 'EMDR Trauma Therapy', desc: 'Processing single-incident and complex trauma from childhood, relationships, and life transitions' },
              { icon: '⚡', title: 'Burnout Recovery', desc: 'Restoration for professionals, entrepreneurs, and creatives experiencing chronic stress and disconnection' }
            ].map((service, idx) => (
              <div
                key={service.title}
                className="group p-10 lg:p-12 bg-gradient-to-b from-white to-gray-50/50 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:border-teal-200 overflow-hidden h-full"
              >
                <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-8 lg:mb-10 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-8 text-center leading-tight group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 text-center leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Practice Location */}
<section className="py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/30 relative">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/5 to-transparent" />
  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
    <div className="text-center mb-24 lg:mb-32">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-gray-900 mb-8 tracking-tight">
        Santa Monica Practice
      </h2>
      <p className="text-2xl lg:text-3xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Private, calming office designed for emotional safety with natural light and intentional comfort
      </p>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start lg:items-center">
      {/* Location Info */}
      <div className="lg:w-11/12 xl:w-3/4 order-2 lg:order-1">
        <div className="bg-white/80 backdrop-blur-xl p-8 lg:p-10 xl:p-12 rounded-3xl shadow-2xl border border-white/50">
          <div className="flex items-start gap-6 mb-8 lg:mb-10">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl lg:text-4xl flex-shrink-0 shadow-lg mt-1" />
            <div>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-gray-900 mb-3 leading-tight">
                123th Street 45 W
              </h3>
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-700 font-semibold">
                Santa Monica, CA 90401
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 rounded-3xl">
            <div className="text-center">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-teal-500 text-white rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl lg:text-3xl font-bold shadow-lg" />
              <p className="text-xs lg:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
                In-Person
              </p>
              <p className="text-lg lg:text-xl xl:text-2xl font-bold text-teal-800">
                Adults 18+
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-emerald-500 text-white rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl lg:text-3xl font-bold shadow-lg" />
              <p className="text-xs lg:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Telehealth
              </p>
              <p className="text-lg lg:text-xl xl:text-2xl font-bold text-emerald-700">
                California
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Office Photos - CRYSTAL CLEAR */}
      <div className="order-1 lg:order-2 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
        <div className="group relative rounded-3xl shadow-2xl lg:shadow-3xl overflow-hidden hover:shadow-teal-500/30 transition-all duration-500 h-96 lg:h-[450px] xl:h-[500px] bg-gray-50">
          <Image
            src="/office1.jpeg"
            alt="Dr. Maya Reynolds therapy office in Santa Monica - cozy seating area with natural light"
            fill
            sizes="(max-width: 1024px) 50vw, 40vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-100 contrast-110 saturate-110"
            priority
          />
          {/* Subtle light overlay on hover only */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
        </div>
        <div className="group relative rounded-3xl shadow-2xl lg:shadow-3xl overflow-hidden hover:shadow-teal-500/30 transition-all duration-500 h-96 lg:h-[450px] xl:h-[500px] bg-gray-50">
          <Image
            src="/office2.jpeg"
            alt="Dr. Maya Reynolds therapy office in Santa Monica - calming space with comfortable seating"
            fill
            sizes="(max-width: 1024px) 50vw, 40vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-100 contrast-110 saturate-110"
          />
          {/* Subtle light overlay on hover only */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Final CTA + Footer */}
      <footer className="bg-gradient-to-t from-gray-900 to-slate-900 py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,theme(colors.teal.500/0.08),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 lg:p-16 xl:p-20 mb-20 lg:mb-24 max-w-5xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-8 bg-gradient-to-r from-teal-300 via-emerald-200 to-teal-400 bg-clip-text text-transparent leading-tight">
              Begin Feeling More Regulated
            </h3>
            <p className="text-xl lg:text-2xl text-teal-100/90 mb-12 lg:mb-16 leading-relaxed max-w-2xl mx-auto">
              Schedule your complimentary 15-minute consultation with Dr. Maya Reynolds, PsyD
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600 text-white px-12 lg:px-16 py-6 lg:py-7 rounded-2xl text-xl lg:text-2xl font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Book Consultation
              </button>
              <button className="border-3 border-teal-400/40 text-teal-200 px-12 lg:px-16 py-6 lg:py-7 rounded-2xl text-xl lg:text-2xl font-semibold hover:bg-teal-500/10 hover:border-teal-400 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto">
                Contact Today
              </button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto mb-16 lg:mb-20 opacity-95">
            <div className="lg:col-span-1">
              <h4 className="text-3xl lg:text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                Dr. Maya Reynolds, PsyD
              </h4>
              <p className="text-xl lg:text-2xl mb-8 text-teal-200 font-medium">Licensed Clinical Psychologist</p>
              <div className="text-lg lg:text-xl space-y-2 text-teal-300">
                <p>📍 123th Street 45 W</p>
                <p>Santa Monica, CA 90401</p>
              </div>
            </div>
            <div>
              <h5 className="text-xl lg:text-2xl font-semibold mb-8 text-teal-200">Specialties</h5>
              <div className="space-y-3 text-lg">
                {['Anxiety Treatment', 'EMDR Trauma Therapy', 'Burnout Recovery', 'Telehealth (CA)'].map((item) => (
                  <p key={item} className="hover:text-teal-300 transition-colors duration-200 group">{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xl lg:text-2xl font-semibold mb-8 text-teal-200">Connect</h5>
              <div className="flex gap-6 justify-center lg:justify-start mb-8">
                {[
                  { icon: '📘', color: 'teal' },
                  { icon: '📷', color: 'emerald' },
                  { icon: '✉️', color: 'blue' }
                ].map(({ icon, color }) => (
                  <a
                    key={icon}
                    className={`w-14 h-14 lg:w-16 lg:h-16 bg-${color}-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-${color}-500/40 border border-${color}-500/30 hover:border-${color}-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110`}
                    aria-label={`Connect on ${icon}`}
                  >
                    <span className="text-2xl">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-teal-500/20 pt-12 text-center text-teal-300 text-lg lg:text-xl">
            <p className="mb-4">HIPAA Compliant • California Licensed Psychologist #PSYXXXXX</p>
            <p>&copy; 2026 Dr. Maya Reynolds, PsyD. Santa Monica Psychotherapy Practice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
