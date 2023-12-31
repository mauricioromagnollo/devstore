'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems(state => {
      const productAlreadyExists = state.some(item => item.productId === productId)

      if (productAlreadyExists) {
        return state.map(item => item.productId === productId
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item)
      }

      return [...state, {
        productId,
        quantity: 1
      }]
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
