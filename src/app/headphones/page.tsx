import Image from "next/image";
import Link from "next/link";
import Categories from "../components/home/Categories";

const headphones = [
  {
    name: "XX99 Mark II Headphones",
    description: "Experience natural, lifelike audio and exceptional build quality.",
    price: 1,
    image: "/images/products/xx99-mark-two.png",
    id: "xx99-mark-two",
    isNew: true
  },
  {
    name: "XX99 Mark I Headphones", 
    description: "As the gold standard for headphones, offering detailed audio reproduction.",
    price: 2,
    image: "/images/products/xx99-mark-one.png",
    id: "xx99-mark-one",
    isNew: false
  },
  {
    name: "XX59 Headphones",
    description: "Enjoy your audio almost anywhere and customize it to your tastes.",
    price: 899,
    image: "/images/products/xx59-headphone.png",
    id: 3,
    isNew: false
  }
]

export default function Headphones() {
  return (
      <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">HEADPHONES</h1>
      </div>

      {/* Products List */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-32">
          {headphones.map((product, index) => (
            <div 
              key={product.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}
            >
              {/* Product Image */}
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="rounded-lg mx-auto"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 text-center md:text-left">
                {product.isNew && (
                  <span className="text-sm text-[#D87D4A] font-light tracking-widest uppercase">
                    New Product
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-bold my-4">{product.name}</h2>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Link 
                  href={`/headphones/${product.id}`}
                  className="bg-[#D87D4A] text-white px-6 py-3 font-bold hover:bg-[#FBAF85] transition-colors inline-block"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Categories />
    </div>
  );
}
