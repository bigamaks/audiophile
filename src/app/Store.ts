import { create } from "zustand"

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartItem = Product & {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  cart: CartItem[]
  count: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}




export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  count: 0,
  

// increaseQuantity: (id: string) => {  
//   set((state): { cart: CartItem[]; count: number } => {
//     const existingItem = state.cart.find(item => item.id === id);
//     if (existingItem) {
//       return {
//         cart: state.cart.map(item => 
//           item.id === id ? {...item, quantity: item.quantity + 1} : item
//         ),
//         count: state.count + 1
//       };
//     } else {
//       return state;
//     }
//   });
// },
  
//   decreaseQuantity: (id: string) => {
//     set((state): { cart: CartItem[]; count: number } => {
//       const item = state.cart.find(item => item.id === id);
//       if (!item) return state;

//       if (item.quantity === 1) {
//         return {
//           cart: state.cart.filter(item => item.id !== id),
//           count: state.count - 1
//         };
//       } else {
//         return {
//           cart: state.cart.map(item =>
//             item.id === id
//               ? { ...item, quantity: item.quantity - 1 }
//               : item
//           ),
//           count: state.count - 1
//         };
//       }
//     });
//   },
  
  // addToCart: (product: CartItem) => {
  //   set((state): { cart: CartItem[]; count: number } => {
  //     const existingItem = state.cart.find((item) => item.id === product.id);
  //     if (existingItem) {
  //       return {
  //         cart: state.cart.map(item => 
  //           item.id === product.id 
  //           ? {...item, quantity: item.quantity + product.quantity } 
  //           : item
  //         ),
  //         count: state.count + product.quantity
  //       };
  //     } else {
  //       return {
  //         cart: [...state.cart, product],
  //         count: state.count + product.quantity
  //       };
  //     }
  //   });
  // },

    addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),



  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),
}));


  // removeFromCart: (id: string) => {
  //   set((state): { cart: CartItem[]; count: number } => {
  //     const removedItem = state.cart.find(item => item.id === id);
      
  //     if (!removedItem) {
  //       return state;
  //     }
  //     return {
  //       cart: state.cart.filter(item => item.id !== id),
  //       count: state.count - removedItem.quantity
  //     };
  //   });    
  // },
  
  // clearCart: () => set({
  //   cart: [],
  //   count: 0
  // })
// }));