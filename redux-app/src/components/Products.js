const PRODUCTS = [
    { 
        name: 'samsung',
        price: 420,
        img: "https://static.fnac-static.com/multimedia/Images/ES/NR/33/31/4e/5124403/1540-1.jpg"
    },
    { 
        name: 'lg',
        price: 320,
        img: "https://static.toiimg.com/thumb/msid-75117026,width-1200,resizemode-4/75117026.jpg"
    },
    { 
        name: 'apple',
        price: 985,
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000"
    },
    { 
        name: 'motorola',
        price: 650,
        img: "https://i.blogs.es/31ce03/moto-g8-power-lite-04/1366_2000.jpg"
    }
]

const Product = (props) => {
    console.log("props: ", props);
    return (
    PRODUCTS.map((el, index) => (
        <div key={index}className="product-container">
            <img src={el.img} alt="phone-img" width="300px"/>
            <span>{el.name.charAt(0).toUpperCase() + el.name.slice(1)} </span>
            <span> Price: <b>${el.price}</b> </span>
            <button onClick={() => {props.addToCartHandler(el)}}>Add to cart</button>
            <button onClick={() => {props.removeFromCartHandler(el.name)}}>Remove from cart</button>   
        </div>
    ))
    )
}

export default Product
