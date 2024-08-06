import { create } from 'zustand'

interface CartItem {
  id: number
  name: string
  quantity: number
  price: string
  descuento?: string
  imagen?: string
}

interface CartState {
  cartItems: CartItem[]
  isCartOpen: boolean
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  increaseQuantity: (itemId: number) => void
  decreaseQuantity: (itemId: number) => void
  removeFromCart: (itemId: number) => void
  toggleCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  isCartOpen: false,
  addToCart: (item) => {
    set((state) => {
      const itemInCart = state.cartItems.find((cartItem) => cartItem.id === item.id)

      return {
        ...state,
        cartItems: itemInCart
          ? state.cartItems.map((cartItem) =>
              cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            )
          : [...state.cartItems, { ...item, quantity: 1 }],
        isCartOpen: true
      }
    })
  },
  increaseQuantity: (itemId) => {
    set((state) => {
      const item = state.cartItems.find((item) => item.id === itemId)
      if (!item || item.quantity >= 15) return state

      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      }
    })
  },
  decreaseQuantity: (itemId) => {
    set((state) => {
      const item = state.cartItems.find((item) => item.id === itemId)
      if (!item || item.quantity <= 1) return state

      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      }
    })
  },
  removeFromCart: (itemId) => {
    set((state) => ({
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== itemId)
    }))
  },
  toggleCart: () =>
    set((state) => ({
      isCartOpen: !state.isCartOpen
    }))
}))
