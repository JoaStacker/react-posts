import {ADD_TO_CART, REMOVE_FROM_CART} from "../constants"

const initialState = {
    cartData: []
}

export default function reducerCartItems (state=initialState, action) {
    console.log(action)
    switch(action.type){
        case ADD_TO_CART: 
            return {
                ...state, 
                cartData: [...state.cartData, action.data]
            } 
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartData: [...state.cartData.filter(el => el.name !== action.name)] 
            }
        default:
            return state
    }
}
