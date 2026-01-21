import Image from "next/image";
import Link from "next/link";
import ProductClient from "./ProductClient";
import LayoutWrapper from "@/app/components/LayoutWrapper";

const products: Product[] = [
  {
    id: "zx9-speaker",
    name: "ZX9 SPEAKER",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups..",
    price: 4500,
    category: "speakers",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    inTheBox: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 10m Audio Cable" },
      { quantity: 1, item: "10m Optical Cable" },
    ],
    image: "/images/products/xx99-mark-two.png",
    isNew: true,
  },
  {
    id: "zx7-speaker",
    name: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    price: 3500,
    category: "speakers",
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    inTheBox: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 7.5m Audio Cab" },
      { quantity: 1, item: "7.5m Optical Cable" },
    ],
    image: "/images/products/xx99-mark-one.png",
    isNew: false,
  },
];

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

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/speakers" className="text-[#D87D4A] hover:underline">
            ← Back to Speakers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <LayoutWrapper>
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          href="/speakers"
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
              <div className="bg-[#F1F1F1] text-white px-6 py-3 font-bold hover:bg-[#FBAF85] transition-colors">
                {/* <button>+</button>{1} <button>-</button> */}
              </div>
              {/* <button 
              className="bg-[#D87D4A] text-white px-6 py-3 font-bold hover:bg-[#FBAF85] transition-colors"
              >
                ADD TO CART
              </button> */}
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
      </LayoutWrapper>
    </div>
  );
}
