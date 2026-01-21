import Image from "next/image";
import Link from "next/link";
import Categories from "../components/home/Categories";
import About from "../components/home/About";


const earphones = [
  {
    name: "ZX9 Speakers",
    description:
      "Experience natural, lifelike audio and exceptional build quality.",
    price: 2999,
    image: "/images/products/yx1-earphone.png",
    id: "yx1-wireless-earphones",
    isNew: true,
  },
];

export default function Earphones(){
    return (
            <div className="min-h-screen bg-white">
              <div className="bg-black text-white py-16 text-center">
                <h1 className="text-3xl md:text-4xl font-bold">EARPHONES</h1>
              </div>
              <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="space-y-32">
                  {earphones.map((product, index) => (
                    <div 
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}
                    >
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-lg p-6">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={250}
                            height={250}
                            className="rounded-lg mx-auto"
                          />
                        </div>
                      </div>
                        <div className="flex-1 text-center md:text-left">
                          {product.isNew && (
                             <span className="text-sm text-[#D87D4A] font-light tracking-widest uppercase">
                            New Product
                          </span>
                          )}
                          <h2 className="text-2xl md:text-3xl font-bold my-4">{product.name}</h2>
                          <p className="text-gray-600 mb-6">{product.description}</p>
                          <Link href={`/earphones/${product.id}`} className="bg-[#D87D4A] text-white px-6 py-3 font-bold hover:bg-[#FBAF85] transition-colors inline-block">SEE PRODUCT</Link>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
              <Categories />
              <About />
            </div>
    )
}