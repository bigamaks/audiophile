import Image from "next/image";
import Link from "next/link";
import ProductClient from "./ProductClient"; 

const products:Product[] = [
   {
    id: "xx99-mark-two",
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: 2999,
    category: "headphones",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    image: "/images/products/xx99-mark-two.png",
    isNew: true,
    //             featuredImages: {
    //       imageOne: "/images/featured-products/headphone-alone.png",
    //       imageTwo: "/images/featured-products/headphone-alone.png",
    //       imageThree: "/images/featured-products/headphone-alone.png",
    //  },
  },
  {
    id: "xx99-mark-one",
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ",
    price: 1750,
    category: "headphones",
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector..",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
    ],
    image: "/images/products/xx99-mark-one.png",
    isNew: false,
    //             featuredImages: {
    //       imageOne: "/images/featured-products/headphone-alone.png",
    //       imageTwo: "/images/featured-products/headphone-alone.png",
    //       imageThree: "/images/featured-products/headphone-alone.png",
    //  },
  },
  {
    id: "XX59 Headphones",
    name: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    price: 899,
    category: "headphones",
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
    ],
    image: "/images/products/xx59-headphone.png",
    isNew: false,
    //             featuredImages: {
    //       imageOne: "/images/featured-products/headphone-alone.png",
    //       imageTwo: "/images/featured-products/headphone-alone.png",
    //       imageThree: "/images/featured-products/headphone-alone.png",
    //  },
  },

]

interface Props {
  params: {
    id: string;
  };
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


export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/headphones" className="text-[#D87D4A] hover:underline">
            ← Back to Headphones
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          href="/headphones"
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

            <ProductClient product={product} />
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
    </div>
  );
}