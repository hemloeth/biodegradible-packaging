import Image from "next/image";
import Link from "next/link";

const products = {
  "banana-leaf": {
    name: "Banana Leaf Packaging",
    description: "Natural, fresh, chemical-free",
    icon: "🍌",
    price: "₹500",
    images: ["/banana1.jpeg"],
    fullDescription: "Our banana leaf packaging is 100% natural and biodegradable. Perfect for food packaging with authentic eco-friendly appeal.",
    variants: [
      {
        name: "Banana Leaf Container",
        image: "/banana1.jpeg",
        price: "₹500",
        description: "Natural banana leaf packaging for eco-friendly food service"
      }
    ],
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
    price: "₹600",
    images: ["/Bagasse1.jpeg", "/Bagasse2.jpeg"],
    fullDescription: "Made from sugarcane fiber waste, our bagasse boxes are sturdy, microwave-safe, and completely compostable.",
    variants: [
      {
        name: "Bagasse Box - Style 1",
        image: "/Bagasse1.jpeg",
        price: "₹600",
        description: "Classic rectangular bagasse container, perfect for takeout meals"
      },
      {
        name: "Bagasse Box - Style 2",
        image: "/Bagasse2.jpeg",
        price: "₹550",
        description: "Compartmented bagasse box, ideal for multi-item meals"
      }
    ],
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
    price: "₹700",
    images: ["/pla1.jpeg", "/pla2.png"],
    fullDescription: "Our PLA containers are made from plant-based materials like corn starch. Crystal clear, strong, and perfect for cold items.",
    variants: [
      {
        name: "PLA Clear Container - Type 1",
        image: "/pla1.jpeg",
        price: "₹700",
        description: "Plant-based clear container, perfect for cold beverages"
      },
      {
        name: "PLA Clear Container - Type 2",
        image: "/pla2.png",
        price: "₹750",
        description: "Premium PLA container with secure lid"
      }
    ],
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
    price: "₹550",
    images: ["/palm1.jpeg", "/palm2.jpeg", "/palm3.jpeg"],
    fullDescription: "Handcrafted from naturally fallen palm leaves, these plates are elegant, sturdy, and completely biodegradable.",
    variants: [
      {
        name: "Palm Leaf Plate - Round",
        image: "/palm1.jpeg",
        price: "₹550",
        description: "Classic round palm leaf plate for elegant dining"
      },
      {
        name: "Palm Leaf Plate - Square",
        image: "/palm2.jpeg",
        price: "₹600",
        description: "Modern square design with natural texture"
      },
      {
        name: "Palm Leaf Handbag",
        image: "/palm3.jpeg",
        price: "₹500",
        description: "Eco-friendly palm leaf handbag"
      }
    ],
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
    price: "₹650",
    images: ["/zoot1.jpeg", "/zoot2.jpeg", "/zoot3.jpeg"],
    fullDescription: "Zoot packaging represents the future of sustainable packaging. Modern, versatile, and completely biodegradable.",
    variants: [
      {
        name: "Zoot Container - Type A",
        image: "/zoot1.jpeg",
        price: "₹650",
        description: "Premium biodegradable container with secure lid"
      },
      {
        name: "Zoot Container - Type B",
        image: "/zoot2.jpeg",
        price: "₹700",
        description: "Multi-compartment design for varied meals"
      },
      {
        name: "Zoot Container - Type C",
        image: "/zoot3.jpeg",
        price: "₹600",
        description: "Compact size perfect for snacks and sides"
      }
    ],
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
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="EcoPackage Logo" 
              width={50} 
              height={50}
              className="w-12 h-12 object-contain rounded-full"
            />
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
          <div className="space-y-12">
            {/* Product Overview */}
            <div className="text-center">
              <h1 className="text-5xl font-black text-[#2C3E2C] mb-4">{product.name}</h1>
              <p className="text-xl text-[#4A5D4A]">{product.fullDescription}</p>
            </div>

            {/* Product Variants */}
            {product.variants && product.variants.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.variants.map((variant, i) => (
                  <div key={i} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-200 hover:scale-105 transition-all duration-300">
                    <div className="relative aspect-square bg-white p-4">
                      <Image 
                        src={variant.image} 
                        alt={variant.name}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="text-xl font-bold text-[#2C3E2C]">{variant.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-[#5CB85C]">{variant.price}</span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-[#5CB85C] to-[#4A9D4A] text-white px-6 py-3 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all">
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className={`bg-gradient-to-br ${product.color} rounded-3xl p-16 shadow-2xl border border-green-200 flex items-center justify-center sticky top-32`}>
                  <div className="text-[200px] leading-none">{product.icon}</div>
                </div>
                <div className="space-y-6">
                  <div className="text-4xl font-black text-[#5CB85C]">{product.price}</div>
                  <p className="text-sm text-[#4A5D4A]">per pack of 50 units</p>
                  <button className="w-full bg-gradient-to-r from-[#5CB85C] to-[#4A9D4A] text-white px-8 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            )}

            {/* Features & Sizes */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2C3E2C] mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#5CB85C] text-xl">✓</span>
                      <span className="text-[#4A5D4A]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2C3E2C] mb-6">Available Sizes</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size, i) => (
                    <div key={i} className="px-6 py-3 bg-[#E8F5E9] rounded-xl font-semibold border border-green-200">
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#2C3E2C] to-[#1a2a1a] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image 
              src="/logo.png" 
              alt="EcoPackage Logo" 
              width={48} 
              height={48}
              className="w-12 h-12 object-contain rounded-full"
            />
            <h3 className="text-2xl font-bold">EcoPackage</h3>
          </div>
          <p className="text-lg mb-4">Making the planet greener, one package at a time.</p>
          <p className="text-sm opacity-75">© 2025 EcoPackage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
