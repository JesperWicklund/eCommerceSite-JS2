import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
}


const getTotalPrice = (cart) => {
    let total = 0
    cart.map(item => {
        total += item.product.price * item.quantity
    })
    return total
}

const getQuantity = (cart) => {
    let total = 0
    cart.map(item => {
        total +=  item.quantity
    })
    return total
}

export const ShoppingCartSlice = createSlice({
    name: 'shoppingcart',
    initialState, 
    reducers: {
        addToCart: (state, action) => {
            const itemRef = state.cart.find(item => item.product._id === action.payload._id)
            
            itemRef ? itemRef.quantity ++ : state.cart = [...state.cart, { product: action.payload, quantity: 1}]
            state.totalPrice = getTotalPrice(state.cart)
            state.totalQuantity = getQuantity(state.cart)
        },
        removeOne: (state, action) => {
            const itemRef = state.cart.find(item => item.product._id === action.payload)
            itemRef.quantity <= 1
            ? state.cart = state.cart.filter(item => item.product._id !== action.payload)
            : itemRef.quantity --
            state.totalPrice = getTotalPrice(state.cart)
            state.totalQuantity = getQuantity(state.cart)
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.product._id !== action.payload)
            state.totalPrice = getTotalPrice(state.cart)
            state.totalQuantity = getQuantity(state.cart)
        },
        cleatCart: (state) => {
            state.cart = []
            state.totalPrice = getTotalPrice(state.cart)
            state.totalQuantity = getQuantity(state.cart)
        }
    }
})


export const { addToCart, removeOne, removeItem, cleatCart } = ShoppingCartSlice.actions

export default ShoppingCartSlice.reducer