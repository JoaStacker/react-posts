import { connect } from "react-redux";
import { addToCart } from "../services/actions/actions" 
import Home from '../components/Home'

const mapStateToProps = state => ({
    cartData: state
})

//this method will dispatch the action.
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home); //The connect() function connects a React component to a Redux store.
 
