import {ADD_TO_CART} from "../constants"

const initialState = {
    cartData: []
}

export default function reducerCartItems (state=initialState, action) {
    console.log(action)
    switch(action.type){
        case ADD_TO_CART: 
            return {
                ...state, 
                cartData: action.data
            } 
            break;
        default:
            return state
    }
}
