export default function Home() {
  return (
    <>
      {/* 1. Scheduling Widget - file:6 */}
      <section className="min-h-[60vh] bg-gradient-to-b from-amber-50 to-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 font-serif">Book an appointment</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Add booking link and scheduling widget here. Squarespace top-tier HIPAA compliant account users can use scheduling widget.
          </p>
          <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-2xl mx-auto border border-gray-100">
            <p className="text-2xl text-gray-500 mb-8 font-medium">This page not active</p>
            <p className="text-sm text-gray-400 mb-8">
              If you need login account to start trial
            </p>
            <button className="bg-emerald-600 text-white px-12 py-5 rounded-2xl text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 inline-block">
              Go to Account →
            </button>
          </div>
        </div>
      </section>

      {/* 2. Hero "Let's Connect" - file:7 */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-16">
              <h2 className="text-6xl lg:text-8xl font-serif font-black text-gray-800 mb-12 leading-none">
                Let's Connect
              </h2>
              <p className="text-2xl text-gray-600 mb-16 max-w-lg leading-relaxed">
                Starting therapy, courageous. <br />
                Get in touch questions, or book a free <br />
                15 min consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-emerald-700 shadow-xl w-fit">
                  Free Consultation
                </button>
                <button className="border-4 border-gray-200 text-gray-800 px-12 py-6 rounded-full text-xl font-semibold hover:bg-gray-50 w-fit shadow-lg">
                  Contact
                </button>
              </div>
            </div>
            <div className="relative lg:-mr-32">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-8 border-purple-400 p-12 rounded-3xl shadow-2xl">
                <p className="text-lg text-purple-800 leading-relaxed">
                  <strong className="block mb-4 text-2xl">PLEASE NOTE:</strong> 
                  If you use a "Form Block" Squarespace stores data not HIPAA-compliant. 
                  Forms embedded or a simple form link can be used on client contact page.
                </p>
              </div>
              <div className="absolute -bottom-32 right-0 w-64 h-64 bg-gradient-to-r from-purple-200/50 to-pink-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Social Images Grid - file:8 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-5xl font-serif font-black text-gray-800 text-center mb-24">Find me on social.</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="w-full h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                <span className="text-4xl">🌸</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer col-span-2 md:col-auto">
              <div className="w-full h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 flex items-center justify-center">
                <span className="text-4xl">📚</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="w-full h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center">
                <span className="text-4xl">🌿</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="w-full h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                <span className="text-4xl">💐</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Office Section - file:9 + file:10 */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-5xl lg:text-6xl font-serif font-black text-gray-800 mb-12">My Office</h3>
            <div className="space-y-6 text-xl text-gray-600">
              <div>
                <h4 className="font-semibold text-2xl text-gray-800 mb-2">123 Example Street</h4>
                <p>Minneapolis, MN</p>
              </div>
              <div>
                <h4 className="font-semibold text-2xl text-gray-800 mb-4">Hours</h4>
                <div className="space-y-2">
                  <p>Monday - Friday</p>
                  <p className="text-3xl font-bold text-emerald-600">10am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl shadow-2xl overflow-hidden">
              {/* Map placeholder - replace with Google Maps iframe later */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-emerald-400/20 to-blue-400/20">
                <div className="text-center">
                  <span className="text-6xl mb-4">📍</span>
                  <p className="text-xl font-semibold text-gray-700">Interactive Map Here</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* 5. Footer - file:10 */}
      <footer className="bg-gradient-to-t from-gray-900 to-gray-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-3xl font-serif font-bold mb-6">Lilac Template</h4>
            <p className="text-gray-400 mb-6">123 Example Street<br/>Minneapolis, MN</p>
            <p className="text-gray-400">hello@example.com</p>
            <p className="text-gray-400">(555) 555-5555</p>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-6">Hours</h5>
            <p className="text-gray-300">Monday - Friday</p>
            <p className="text-2xl font-bold text-emerald-400 mb-6">10am - 6pm</p>
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">📘</a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">📷</a>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-6">Find</h5>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-emerald-400 transition-colors">Blog</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400 text-sm">
          <p>Privacy Policy | Terms of Service | Website created by GoBloom Creative | © 2024 Your Business Name, LLC</p>
        </div>
      </footer>
    </>
  )
}
