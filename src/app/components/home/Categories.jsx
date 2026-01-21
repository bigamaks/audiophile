// import Link from "next/link"
// import Image from 'next/image';

// const categories = [
//   {
//     id: 1,
//     name: "HEADPHONES",
//     image: "/images/categories/image-removebg-preview-41.png",
//     href: "/headphones"
//   },
//   {
//     id: 2,
//     name: "SPEAKERS", 
//     image: "/images/categories/image-removebg-preview-38.png",
//     href: "/speakers"
//   },
//   {
//     id: 3,
//     name: "EARPHONES",
//     image: "/images/categories/image-removebg-preview-42.png", 
//     href: "/earphones"
//   }
// ];

// export default function Categories() {
//   return (
//     <section className="md:flex justify-center md:gap-8 space-y-16 py-16 mt-16 max-w-7xl">
//       {categories.map((category) => (
//         <div key={category.id} className="relative bg-gray-100 rounded-lg pt-20 pb-8 px-8 text-center w-80 mx-auto">
//           <div className="md:mb-4 absolute -top-20 left-1/2 transform -translate-x-1/2">
//             {category.image && 
//               (<Image 
//               src={category.image} 
//               alt={category.name}
//               width={120}
//               height={120}
//               className="mx-auto"
//             />)
//             }
//           </div>
//           <h3 className="text-lg font-bold mb-4 mt-5">{category.name}</h3>
//           <Link href={category.href} className="flex items-center justify-center gap-2 text-gray-500 hover:text-orange-500 cursor-pointer">
//             <span className="text-sm font-bold">SHOP</span>
//             <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
//               <path d="M1.322 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd"/>
//             </svg>
//           </Link>
//         </div>
//       ))}
//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "HEADPHONES",
    image: "/images/categories/image-removebg-preview-41.png",
    href: "/headphones",
  },
  {
    title: "SPEAKERS",
    image: "/images/categories/image-removebg-preview-38.png",
    href: "/speakers",
  },
  {
    title: "EARPHONES",
    image: "/images/categories/image-removebg-preview-42.png",
    href: "/earphones",
  },
];

const Categories = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16">

          {categories.map((category) => (
            <div
              key={category.title}
              className="relative bg-[#F1F1F1] rounded-lg pt-20 pb-6 flex flex-col items-center"
            >
              {/* Floating Image */}
              <div className="absolute -top-10">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <h2 className="text-base font-bold tracking-wide mb-2">
                {category.title}
              </h2>

              <Link
                href={category.href}
                className="flex items-center gap-2 text-sm font-semibold tracking-widest text-black/60 hover:text-[#D87D4A] transition"
              >
                SHOP
                <span className="text-[#D87D4A]">→</span>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Categories;
