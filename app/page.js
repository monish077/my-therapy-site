export default function Home() {
  return (
    <>
      {/* 1. Hero - Anxiety Therapy Santa Monica */}
      <section className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-teal-800 mb-8 leading-tight">
            Anxiety & Trauma Therapy
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-600 mb-12 font-light">
            Santa Monica, CA • Dr. Maya Reynolds, PsyD
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Support for high-achieving adults feeling overwhelmed, stuck in overthinking, 
            or emotionally on edge from anxiety, trauma, and burnout.
          </p>
          <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-12 max-w-3xl mx-auto border border-teal-100">
            <p className="text-2xl text-teal-700 mb-8 font-semibold">Ready to feel more regulated?</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-teal-600 text-white px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-teal-700 shadow-xl">
                Free 15-min Consultation
              </button>
              <button className="border-4 border-teal-200 text-teal-800 px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-teal-50 shadow-lg">
                Contact Dr. Maya
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Dr. Maya */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl lg:text-7xl font-serif font-black text-gray-800 mb-8 leading-tight">
                A warm, collaborative approach
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Licensed Clinical Psychologist helping high-achieving adults who feel 
                exhausted, stuck in overthinking, or emotionally on edge.
              </p>
              <div className="space-y-6 text-lg text-gray-700">
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-2xl">
                  <span className="text-3xl">🧠</span>
                  <div>
                    <h4 className="font-semibold text-xl text-teal-800 mb-2">Anxiety & Panic</h4>
                    <p>CBT and mindfulness for constant worry and tension</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-2xl">
                  <span className="text-3xl">🌀</span>
                  <div>
                    <h4 className="font-semibold text-xl text-teal-800 mb-2">EMDR Trauma Therapy</h4>
                    <p>Safe processing for single-incident and complex trauma</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-2xl">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <h4 className="font-semibold text-xl text-teal-800 mb-2">Burnout Recovery</h4>
                    <p>Entrepreneurs and professionals reconnecting with themselves</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-500/5 to-emerald-500/5 border-4 border-teal-100 p-12 rounded-3xl shadow-2xl">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "Therapy can become a space to slow down, reconnect, and develop 
                  more sustainable ways of living and working."
                </p>
                <p className="mt-8 font-semibold text-teal-800 text-xl">— Dr. Maya Reynolds, PsyD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW "Our Office" Section (Part 3) */}
      <section className="py-32 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl lg:text-7xl font-serif font-black text-teal-800 mb-12">Our Office</h2>
            <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-lg">
              A quiet, private space designed to feel calm and grounding. Natural light, 
              comfortable furniture, and an uncluttered environment that helps 
              clients feel at ease.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-teal-100">
                <span className="text-3xl">📍</span>
                <div>
                  <h4 className="font-semibold text-xl text-teal-800">123th Street 45 W</h4>
                  <p className="text-gray-600">Santa Monica, CA 90401</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-teal-100">
                <span className="text-3xl">🩺</span>
                <p className="text-lg text-gray-700">In-person & secure California telehealth</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl h-64 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 hover:scale-105 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">🏠</div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl h-64 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 hover:scale-105 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">🌿</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="bg-gradient-to-t from-gray-900 via-teal-900 to-gray-800 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-serif font-bold mb-12">Dr. Maya Reynolds, PsyD</h3>
          <div className="grid md:grid-cols-3 gap-12 mb-16 text-left max-w-4xl mx-auto">
            <div>
              <p className="text-xl mb-6">123th Street 45 W<br/>Santa Monica, CA 90401</p>
              <p className="text-lg mb-4">Licensed Clinical Psychologist</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-teal-300">Specialties</h4>
              <div className="space-y-2 text-teal-100">
                <p>Anxiety & Panic</p>
                <p>EMDR Trauma Therapy</p>
                <p>Burnout Recovery</p>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-teal-300">Connect</h4>
              <div className="flex gap-6 justify-center md:justify-start">
                <a className="w-14 h-14 bg-teal-600/20 rounded-2xl flex items-center justify-center hover:bg-teal-500/30 transition-all text-xl">📘</a>
                <a className="w-14 h-14 bg-teal-600/20 rounded-2xl flex items-center justify-center hover:bg-teal-500/30 transition-all text-xl">📷</a>
                <a className="w-14 h-14 bg-teal-600/20 rounded-2xl flex items-center justify-center hover:bg-teal-500/30 transition-all text-xl">💌</a>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-500/30 pt-12 text-teal-200 text-sm">
            <p>HIPAA-compliant • California Licensed • © 2026 Dr. Maya Reynolds, PsyD</p>
          </div>
        </div>
      </footer>
    </>
  )
}
