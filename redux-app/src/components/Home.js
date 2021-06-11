const Home = (props) => {
    console.log("props: ", props);
    return (
    <div  className="home-container">
        <img src="https://static.fnac-static.com/multimedia/Images/ES/NR/33/31/4e/5124403/1540-1.jpg" alt="phone"/>
        <span> Samsung </span>
        <span> Price: $1000 </span>
        <button onClick={() => {props.addToCartHandler({price: 1000, name: "samsung"})}}>Add to cart</button>
        <button onClick={() => {props.removeFromCartHandler({name: "samsung"})}}>Remove from cart</button>   
    </div>
    )
}

export default Home
