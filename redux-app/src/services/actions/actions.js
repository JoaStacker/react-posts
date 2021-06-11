import {ADD_TO_CART} from "../constants"

/*
Action 

*/ 

function addToCart (data) {
    return {
        type: ADD_TO_CART,
        data: data
    }
}