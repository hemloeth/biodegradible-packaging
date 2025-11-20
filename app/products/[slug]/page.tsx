import Image from "next/image";
import Link from "next/link";

const products = {
  "banana-leaf": {
    name: "Banana Leaf Packaging",
    description: "Natural, fresh, chemical-free",
    icon: "🍌",
    price: "$12.99",
    fullDescription: "Our banana leaf packaging is 100% natural and biodegradable. Perfect for food packaging, these leaves are chemical-free and add an authentic, eco-friendly touch to your products.",
    features: [
      "100% Natural & Chemical-Free",
      "Biodegradable within 60 days",
      "Perfect for hot & cold food",
      "Unique natural patterns",
      "Water-resistant coating"
    ],
    sizes: ["Small (6x6 inch)", "Medium (8x8 inch)", "Large (10x10 inch)"],
    color: "from-yellow-100 to-green-100"
  },
  "bagasse-boxes": {
    name: "Bagasse Boxes",
    description: "Made from sugarcane fibers",
    icon: "📦",
    price: "$15.99",
    fullDescription: "Made from sugarcane fiber waste, our bagasse boxes are sturdy, microwave-safe, and completely compostable. An excellent alternative to plastic containers.",
    features: [
      "Made from sugarcane waste",
      "Microwave & freezer safe",
      "Oil & leak resistant",
      "Sturdy and durable",
      "Composts in 90 days"
    ],
    sizes: ["Small (500ml)", "Medium (750ml)", "Large (1000ml)"],
    color: "from-amber-100 to-green-100"
  },
  "pla-containers": {
    name: "PLA Containers",
    description: "Plant-based, clear, strong",
    icon: "🥤",
    price: "$18.99",
    fullDescription: "Our PLA containers are made from plant-based materials like corn starch. They're crystal clear, strong, and perfect for cold beverages and food items.",
    features: [
      "Made from plant-based materials",
      "Crystal clear visibility",
      "Strong & durable",
      "Perfect for cold items",
      "Industrially compostable"
    ],
    sizes: ["12oz", "16oz", "20oz"],
    color: "from-blue-100 to-green-100"
  },
  "palm-leaf-plates": {
    name: "Palm Leaf Plates",
    description: "Aesthetic and compostable",
    icon: "🌴",
    price: "$14.99",
    fullDescription: "Handcrafted from naturally fallen palm leaves, these plates are elegant, sturdy, and completely biodegradable. Perfect for events and daily use.",
    features: [
      "Made from fallen palm leaves",
      "Elegant natural appearance",
      "Heat & moisture resistant",
      "No chemicals or additives",
      "Biodegrades in 60 days"
    ],
    sizes: ["7 inch", "9 inch", "11 inch"],
    color: "from-emerald-100 to-green-100"
  },
  "zoot-packaging": {
    name: "Zoot Packaging",
    description: "Modern biodegradable alternatives",
    icon: "♻️",
    price: "$16.99",
    fullDescription: "Zoot packaging represents the future of sustainable packaging. Modern, versatile, and completely biodegradable - perfect for any business need.",
    features: [
      "Modern design aesthetic",
      "Versatile applications",
      "100% biodegradable",
      "Customizable options",
      "Premium quality"
    ],
    sizes: ["Standard", "Premium", "Custom"],
    color: "from-teal-100 to-green-100"
  }
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#E8F5E9] to-[#dcfce7]">
      {/* Navigation */}
      <nav className="bg-white/70 backdrop-blur-md fixed w-full z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#5CB85C] to-[#4A9D4A] rounded-xl flex items-center justify-center text-white text-xl">🌿</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#2C3E2C] to-[#4A5D4A] bg-clip-text text-transparent">EcoPackage</h1>
          </Link>
          <Link href="/#products" className="text-[#4A5D4A] hover:text-[#5CB85C] transition font-medium">
            ← Back to Products
          </Link>
        </div>
      </nav>

      {/* Product Details */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image/Icon */}
            <div className={`bg-gradient-to-br ${product.color} rounded-3xl p-16 shadow-2xl border border-green-200 flex items-center justify-center sticky top-32`}>
              <div className="text-[200px] leading-none">{product.icon}</div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-black text-[#2C3E2C] mb-4">{product.name}</h1>
                <p className="text-2xl text-[#4A5D4A] mb-6">{product.description}</p>
                <div className="text-4xl font-black text-[#5CB85C]">{product.price}</div>
                <p className="text-sm text-[#4A5D4A] mt-2">per pack of 50 units</p>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#2C3E2C] mb-4">About This Product</h3>
                <p className="text-[#4A5D4A] leading-relaxed">{product.fullDescription}</p>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#2C3E2C] mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#5CB85C] text-xl">✓</span>
                      <span className="text-[#4A5D4A]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#2C3E2C] mb-4">Available Sizes</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size, i) => (
                    <button key={i} className="px-6 py-3 bg-[#E8F5E9] hover:bg-[#5CB85C] hover:text-white rounded-xl font-semibold transition-all border border-green-200">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-[#5CB85C] to-[#4A9D4A] text-white px-8 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Add to Cart
                </button>
                <button className="px-8 py-5 bg-white/90 backdrop-blur text-[#5CB85C] rounded-2xl text-xl font-bold hover:bg-white hover:shadow-xl transition-all border-2 border-[#5CB85C]/20">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#2C3E2C] to-[#1a2a1a] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-4">🌿 Making the planet greener, one package at a time.</p>
          <p className="text-sm opacity-75">© 2025 EcoPackage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
