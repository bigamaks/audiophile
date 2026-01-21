import Image from "next/image";
export default function About() {
  return (
    <section className="max-w-7xl mx-auto md:px-16 py-10">
      <div className=" ">
        <div className="flex flex-col-reverse md:flex-row items-center gap-20">
          <div className="md:flex-1 md:text-left">
            <h2>Bringing you the best audio gear</h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="mb-8 md:mb-0 md:flex-1 flex justify-center">
            <Image
              src="/images/about/about.png"
              alt="ZX9 Speaker"
              width={400}
              height={400}
              className="object-contain"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
