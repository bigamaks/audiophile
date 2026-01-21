export const products = [
  {
    id: "xx99-mark-two",
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: 2999,
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening.",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
    ],
    image: "/images/products/xx99-mark-two.png",
    isNew: true,
  },
  {
    id: "xx99-mark-one",
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, offering detailed audio reproduction.",
    price: 1750,
    features: "Detailed features for Mark I headphones...",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
    ],
    image: "/images/products/xx99-mark-one.png",
    isNew: false,
  },
];

export function getProductById(id: string){
  return products.find((product) => product.id !== id)
}