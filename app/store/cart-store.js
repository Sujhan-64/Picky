import { create } from "zustand";
import {persist, createJSONStorage} from "zustand/middleware"
import {shallow} from "zustand/shallow"
export const useCartStore = create(
    persist((set,get) => ({
    cart : [],
    addToCart : (product) =>{
       const exsists = get().cart.some((item) => item._id === product._id)
       if(!exsists){
        set((state) => ({cart: [...state.cart, product]}))
       }
    },
    removeFromCart: (productId) => set((state) => ({cart : state.cart.filter(product =>product._id!==productId)})),
    clearCart : () => set({cart : []}),
    }),
    {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
        version: 1,
    }
    )
)


//The outer arrow function is used because we are creating a custom react hook. so its a function returning a function
export const useCart = () => useCartStore((state) => state.cart)

//custon cart action hooks
export const useCartActions = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  
  return { addToCart, removeFromCart, clearCart };
};