import { connect } from "react-redux";
import { addToCart } from "../services/actions/actions" 
import Home from '../components/Home'

const mapStateToProps = state => ({
    cardData: state
})

//this method will 
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);

