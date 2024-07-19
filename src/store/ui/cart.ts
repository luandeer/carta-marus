import { create } from "zustand";

interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: string;
    descuento?: string;
    imagen?: string;
    isLoading?: 'add' | 'increase' | 'decrease' | 'remove' | null; // Estado de carga para cada acción
}

interface CartState {
    cartItems: CartItem[];
    isCartOpen: boolean;
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    increaseQuantity: (itemId: number) => void;
    decreaseQuantity: (itemId: number) => void;
    removeFromCart: (index: number) => void;
    toggleCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
    cartItems: [],
    isCartOpen: false,
    addToCart: async (item) => {
        // Actualiza el estado inicial para reflejar que el ítem está en proceso de adición
        set((state) => {
            const itemInCart = state.cartItems.find((cartItem) => cartItem.id === item.id);
    
            return {
                ...state,
                cartItems: itemInCart
                    ? state.cartItems.map((cartItem) =>
                        cartItem.id === item.id
                            ? { ...cartItem, isLoading: 'add' }
                            : cartItem
                    )
                    : [...state.cartItems, { ...item, isLoading: 'add', quantity: 0 }],
            };
        });
    
        try {
            // Simulación de retraso
            await new Promise(resolve => setTimeout(resolve, 800));
    
            // Actualiza el estado después del retraso
            set((state) => {
                const itemInCart = state.cartItems.find((cartItem) => cartItem.id === item.id);
    
                return {
                    ...state,
                    cartItems: itemInCart
                        ? state.cartItems.map((cartItem) =>
                            cartItem.id === item.id
                                ? { ...cartItem, quantity: cartItem.quantity + 1, isLoading: null }
                                : cartItem
                        )
                        : [...state.cartItems, { ...item, quantity: 1, isLoading: null }],
                    isCartOpen: true,
                };
            });
        } catch (error) {
            console.error("Error al agregar al carrito:", error);
            // Restablece el estado de carga en caso de error
            set((state) => ({
                ...state,
                cartItems: state.cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, isLoading: null } : cartItem
                ),
            }));
        }
    },       
    increaseQuantity: async (itemId) => {
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === itemId ? { ...item, isLoading: 'increase' } : item
            ),
        }));

        await new Promise(resolve => setTimeout(resolve, 800));

        set((state) => {
            const item = state.cartItems.find((item) => item.id === itemId);
            if (!item || item.quantity >= 15) return state;

            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === itemId ? { ...item, quantity: item.quantity + 1, isLoading: null } : item
                ),
            };
        });
    },
    decreaseQuantity: async (itemId) => {
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === itemId ? { ...item, isLoading: 'decrease' } : item
            ),
        }));

        await new Promise(resolve => setTimeout(resolve, 800));

        set((state) => {
            const item = state.cartItems.find((item) => item.id === itemId);
            if (!item || item.quantity <= 1) return state;

            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === itemId ? { ...item, quantity: item.quantity - 1, isLoading: null } : item
                ),
            };
        });
    },
    removeFromCart: async (itemId) => {
        set((state) => ({
            ...state,
            cartItems: state.cartItems.map((item) =>
                item.id === itemId ? { ...item, isLoading: 'remove' } : item
            ),
        }));

        try {
            await new Promise(resolve => setTimeout(resolve, 800));

            set((state) => ({
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== itemId),
            }));
        } catch (error) {
            console.error("Error al eliminar del carrito:", error);
        }
    },
    toggleCart: () =>
        set((state) => ({
            isCartOpen: !state.isCartOpen,
        })),
}));

