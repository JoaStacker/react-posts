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

function removeFromCart (data) {
    console.warn("Action remove id: ", data)
    return {
        type: REMOVE_FROM_CART,
        name: data.name
    }
} 

export {addToCart, removeFromCart}