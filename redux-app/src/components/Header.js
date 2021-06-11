import React from "react";

const Header = (props) => {
    return (
        <div className="cart">
            <h1>Cart: {props.data.reducerCartItems.cartData.length} </h1>
        </div>
    )
}


export default Header
