import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#E8F5E9] to-[#dcfce7]">
      {/* Navigation */}
      <nav className="bg-white/70 backdrop-blur-md fixed w-full z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#5CB85C] to-[#4A9D4A] rounded-xl flex items-center justify-center text-white text-xl">🌿</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#2C3E2C] to-[#4A5D4A] bg-clip-text text-transparent">EcoPackage</h1>
          </div>
          <div className="hidden md:flex gap-8 text-[#4A5D4A] font-medium">
            <a href="#about" className="hover:text-[#5CB85C] transition-all hover:scale-105">About</a>
            <a href="#products" className="hover:text-[#5CB85C] transition-all hover:scale-105">Products</a>
            <a href="#partner" className="hover:text-[#5CB85C] transition-all hover:scale-105">Partner</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5CB85C]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#90EE90]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-sm">
            <span className="text-[#5CB85C] font-semibold">♻️ 100% Biodegradable Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-[#2C3E2C] mb-8 leading-tight tracking-tight">
            We Don't Do<br />
            <span className="bg-gradient-to-r from-[#5CB85C] to-[#4A9D4A] bg-clip-text text-transparent">Ordinary</span> —<br />
            We Replace Plastic.
          </h1>
          
          <p className="text-xl md:text-2xl text-[#4A5D4A] mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Leading the movement to eliminate plastic packaging with 100% biodegradable alternatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
            <a href="#products" className="group bg-gradient-to-r from-[#5CB85C] to-[#4A9D4A] text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
              Explore Our Solutions
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#partner" className="bg-white/90 backdrop-blur text-[#5CB85C] px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-[#5CB85C]/20">
              Join the Revolution
            </a>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              <Image 
                src="/image.png" 
                alt="People holding biodegradable packaging" 
                width={1200} 
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-green-100">
              <div className="text-5xl font-black text-[#5CB85C] mb-2">100%</div>
              <p className="text-[#4A5D4A] font-semibold">Compostable</p>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-green-100">
              <div className="text-5xl font-black text-[#5CB85C] mb-2">0</div>
              <p className="text-[#4A5D4A] font-semibold">Plastic Used</p>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-green-100">
              <div className="text-5xl font-black text-[#5CB85C] mb-2">∞</div>
              <p className="text-[#4A5D4A] font-semibold">Impact Potential</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-32 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-6xl mb-6">🌱</div>
            <h2 className="text-5xl md:text-6xl font-black text-[#2C3E2C] mb-6">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5CB85C] to-[#4A9D4A] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-[#4A5D4A] leading-relaxed">
                We are an organisation dedicated to replacing plastic packaging with sustainable, biodegradable solutions like banana leaf packaging, bagasse, Zoot packaging, PLA, and palm leaf products.
              </p>
              <p className="text-xl text-[#4A5D4A] leading-relaxed">
                Our mission is to create a cleaner, greener planet by offering packaging that decomposes naturally and leaves zero environmental harm.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/image.png" 
                alt="People holding biodegradable packaging" 
                width={600} 
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#5CB85C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#90EE90] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block text-6xl mb-6">🌍</div>
            <h2 className="text-5xl md:text-6xl font-black text-[#2C3E2C] mb-6">Why Choose Biodegradable?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5CB85C] to-[#4A9D4A] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: '100% Compostable', icon: '♻️' },
              { text: 'Zero Plastic', icon: '🚫' },
              { text: 'Eco-friendly manufacturing', icon: '🏭' },
              { text: 'Safe for food & daily use', icon: '🍽️' },
              { text: 'Cost-effective alternatives', icon: '💰' },
              { text: 'Supports circular economy', icon: '🔄' }
            ].map((benefit, i) => (
              <div key={i} className="group bg-white/90 backdrop-blur p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-green-100">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <p className="text-lg font-bold text-[#2C3E2C]">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block text-6xl mb-6">🍃</div>
            <h2 className="text-5xl md:text-6xl font-black text-[#2C3E2C] mb-6">Our Products</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5CB85C] to-[#4A9D4A] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-[#4A5D4A] max-w-2xl mx-auto">Sustainable packaging solutions for every need</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Banana Leaf Packaging', desc: 'Natural, fresh, chemical-free', icon: '🍌', color: 'from-yellow-100 to-green-100' },
              { name: 'Bagasse Boxes', desc: 'Made from sugarcane fibers', icon: '📦', color: 'from-amber-100 to-green-100' },
              { name: 'PLA Containers', desc: 'Plant-based, clear, strong', icon: '🥤', color: 'from-blue-100 to-green-100' },
              { name: 'Palm Leaf Plates', desc: 'Aesthetic and compostable', icon: '🌴', color: 'from-emerald-100 to-green-100' },
              { name: 'Zoot Packaging', desc: 'Modern biodegradable alternatives', icon: '♻️', color: 'from-teal-100 to-green-100' }
            ].map((product, i) => (
              <div key={i} className={`group relative bg-gradient-to-br ${product.color} p-10 rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-green-200 overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{product.icon}</div>
                  <h3 className="text-2xl font-black text-[#2C3E2C] mb-3">{product.name}</h3>
                  <p className="text-[#4A5D4A] text-lg">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#5CB85C] to-[#4A9D4A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="text-7xl mb-8">🌎</div>
          <h2 className="text-5xl md:text-6xl font-black mb-8">Our Vision</h2>
          <p className="text-2xl md:text-3xl leading-relaxed font-light mb-12">
            A world where every brand chooses earth-friendly packaging and plastic pollution becomes a thing of the past.
          </p>
          <div className="inline-block px-8 py-3 bg-white/20 backdrop-blur rounded-full border border-white/30">
            <span className="text-lg font-semibold">Building a sustainable future, together</span>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section id="partner" className="py-32 px-6 bg-gradient-to-br from-white to-[#f0fdf4]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl p-12 md:p-16 border border-green-100">
            <div className="text-center mb-12">
              <div className="text-6xl mb-6">🤝</div>
              <h2 className="text-5xl md:text-6xl font-black text-[#2C3E2C] mb-6">Partner With Us</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#5CB85C] to-[#4A9D4A] mx-auto rounded-full"></div>
            </div>
            
            <p className="text-xl text-[#4A5D4A] leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              Whether you're a restaurant, e-commerce brand, or food business, we help you switch to green packaging easily and affordably.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-[#E8F5E9] rounded-2xl">
                <div className="text-4xl mb-3">🍽️</div>
                <p className="font-bold text-[#2C3E2C]">Restaurants</p>
              </div>
              <div className="text-center p-6 bg-[#E8F5E9] rounded-2xl">
                <div className="text-4xl mb-3">🛒</div>
                <p className="font-bold text-[#2C3E2C]">E-commerce</p>
              </div>
              <div className="text-center p-6 bg-[#E8F5E9] rounded-2xl">
                <div className="text-4xl mb-3">🏢</div>
                <p className="font-bold text-[#2C3E2C]">Food Business</p>
              </div>
            </div>
            
            <div className="text-center">
              <a href="mailto:contact@ecopackage.com" className="group inline-block bg-gradient-to-r from-[#5CB85C] to-[#4A9D4A] text-white px-12 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get Started Today
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#2C3E2C] to-[#1a2a1a] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5CB85C] to-[#4A9D4A] rounded-xl flex items-center justify-center text-2xl">🌿</div>
              <h3 className="text-3xl font-bold">EcoPackage</h3>
            </div>
            <p className="text-lg mb-6 text-green-200">Making the planet greener, one package at a time.</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#about" className="hover:text-[#5CB85C] transition">About</a>
              <a href="#products" className="hover:text-[#5CB85C] transition">Products</a>
              <a href="#partner" className="hover:text-[#5CB85C] transition">Partner</a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm opacity-75">© 2025 EcoPackage. All rights reserved. Building a sustainable future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
