// import Image from 'next/image';
// import Categories from './Categories';
// import FeaturedProducts from './FeaturedProducts';
// import About from './About'

// export default function Hero() {
//   return (
//     <main className="max-w-full">
//       {/* Hero Section */}
//       <div className="bg-[#0E0E0E] px-6 py-16 md:px-12 lg:px-24 lg:py-32">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Text Content */}
//           <div className="text-white text-center lg:text-left max-w-xl">
//             <h2 className="text-gray-400 text-sm font-light tracking-[8px] mb-4 uppercase">
//               New Product
//             </h2>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               XX99 Mark II<br />Headphones
//             </h1>
//             <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md">
//               Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
//             </p>
//             <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-8 rounded-sm transition-colors duration-200">
//               See Product
//             </button>
//           </div>
          
//           <div className="flex-1 flex justify-center lg:justify-end">
//             <div className="relative">
//               <Image
//                 src="/images/home/hero-img.png"
//                 alt="XX99 Mark II Headphones"
//                 width={500}
//                 height={500}
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <Categories />
//       <FeaturedProducts />
//       <About />
//     </main>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import About from './About'

const Hero = () => {
  return (
    <>
    <section className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Mobile Background Image */}
        <div className="relative h-[70vh] md:hidden">
          <Image
            src="/images/home/hero-img.png"
            alt="XX99 Mark II Headphones"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text on Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-44 text-center px-6 z-10">
            <p className="text-sm tracking-[0.6em] text-white/50 mb-4">
              NEW PRODUCT
            </p>

            <h1 className="text-4xl font-bold leading-tight mb-6">
              XX99 MARK II <br /> HEADPHONES
            </h1>

            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <Link
              href="/headphones/xx99-mark-two"
              className="bg-[#D87D4A] hover:bg-[#FBAF85] transition px-8 py-4 text-sm font-semibold tracking-wide"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex min-h-[90vh] items-center justify-between px-10">
          {/* Text */}
          <div className="max-w-md">
            <p className="text-sm tracking-[0.6em] text-white/50 mb-4">
              NEW PRODUCT
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              XX99 MARK II <br /> HEADPHONES
            </h1>

            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <Link
              href="/headphones/xx99-mark-two"
              className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] transition px-8 py-4 text-sm font-semibold tracking-wide"
            >
              SEE PRODUCT
            </Link>
          </div>

          {/* Image */}
          <div className="relative w-[500px] h-[450px]">
            <Image
              src="/images/home/hero-img.png"
              alt="XX99 Mark II Headphones"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
   
       <Categories />
      <FeaturedProducts />
    <About />

    </>
  );
};

export default Hero;
