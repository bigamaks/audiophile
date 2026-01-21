import Image from 'next/image';

export default function FeaturedProducts(){
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 space-y-8 max-w-7xl">
      {/* ZX9 SPEAKER */}
      <div className="bg-[#D87D4A] rounded-lg px-8 py-16 md:py-24 text-white overflow-hidden relative">
         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-64 border-2 border-white border-opacity-20 rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-80 border-2 border-white border-opacity-20 rounded-full"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-64 border-2 border-white border-opacity-20 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-8 md:mb-0 md:flex-1 flex justify-center">
            <Image
              src="/images/featured/image-removebg-preview-38.png"
              alt="ZX9 Speaker"
              width={180}
              height={180}
              // style={{ width: "100%", height: "auto" }}
              className="object-cover"
            />
          </div>
          
          <div className="md:flex-1 md:text-left max-w-md">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">ZX9 SPEAKER</h2>
            <p className="text-gray-100 mb-8">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <button className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>

      {/* ZX7 SPEAKER */}
      <div className="relative rounded-lg overflow-hidden w-full h-80">
        <Image
          src="/images/featured/speaker-img.png"
          alt="ZX7 Speaker"
          fill
            sizes="100vw"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          // className="object-cover"
        />
        <div className="relative z-10 px-8 md:px-16 py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">ZX7 SPEAKER</h2>
          <button className="bg-transparent border-2 border-black text-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-colors">
            SEE PRODUCT
          </button>
        </div>
      </div>

      {/* EARPHONES */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Earphone Image */}
        <div className="md:flex-1">
          <div className="relative rounded-lg overflow-hidden w-full h-80">
            <Image
              src="/images/featured/Bitmap-2.png"
              alt="High-quality earphones"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Earphone Content */}
        <div className="md:flex-1 bg-gray-100 rounded-lg flex flex-col justify-center px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">YX1 EARPHONES</h2>
          <button className="bg-transparent border-2 border-black text-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-colors w-fit">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </section>
  );

}