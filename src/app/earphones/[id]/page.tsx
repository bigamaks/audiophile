import Image from "next/image";
import Link from "next/link";
import ProductClient from "./ProductClient";

const products:Product[] = [
   {
    id: "yx1-wireless-earphones",
    name: "YX1 WIRELESS EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    price: 599,
    category: "earphones",
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    inTheBox: [
      { quantity: 2, item: "Earphone Unit" },
      { quantity: 6, item: "Multi-size Earplugs" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "USB-C Charging Cable" },
      { quantity: 1, item: "Travel Pouch" },
    ],
    image: "/images/products/xx99-mark-two.png",
    isNew: true,
  },
];

interface Props{
 params:{
    id: string;
 }
}

interface Product { 
  id: string; 
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  features?: string;
  inTheBox?: Array<{ quantity: number; item: string }>;
  isNew?: boolean;
}

export default async function ProductPage({params}: Props){
    const {id} = await params
    const product = products.find((p) => p.id === id)

    if(!product){
      return(
          <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/earphones" className="text-[#D87D4A] hover:underline">
            ← Back to Headphones
          </Link>
        </div>
      </div>
      )
    }

    return(
            <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          href="/earphones"
          className="text-gray-500 hover:text-black transition-colors"
        >
          ← Go Back
        </Link>
      </div>

      {/* Product Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg p-8">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain mx-auto"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            {product.isNew && (
              <span className="text-sm text-[#D87D4A] font-light tracking-widest uppercase">
                New Product
              </span>
            )}

            <h1 className="text-3xl md:text-4xl font-bold my-4">
              {product.name}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="text-lg font-bold mb-8">${product.price}</div>

            <div className="flex gap-2">
             <ProductClient product={product} />
            </div>
          </div>
        </div>

        {/* Features & In the Box */}
        <div className="mt-16 flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">FEATURES</h2>
            <p className="text-gray-600 leading-relaxed">{product.features}</p>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">IN THE BOX</h2>
            <div className="space-y-2">
              {product.inTheBox?.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-[#D87D4A] font-bold">
                    {item.quantity}x
                  </span>
                  <span className="text-gray-600">{item.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="image-grid">
  <div className="image small">
     <Image
                src={product.image}
                alt={product.name}
 
              />
  </div>

  <div className="image small">
    <Image
                src={product.image}
                alt={product.name}
              />
  </div>

  <div className="image large">
   <Image
                src={product.image}
                alt={product.name}
              />
  </div>
</div> */}

    </div>
    )
}