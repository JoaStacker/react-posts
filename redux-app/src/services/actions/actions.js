import {ADD_TO_CART, REMOVE_FROM_CART} from "../constants"

/*
Action 
*/ 

function addToCart (data) {
    console.warn("Action add: ", data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

function removeFromCart (name) {
    console.warn("Action remove name: ", name)
    return {
        type: REMOVE_FROM_CART,
        name
    }
} 

export {addToCart, removeFromCart}