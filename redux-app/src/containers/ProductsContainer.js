import { connect } from "react-redux";
import { addToCart, removeFromCart} from "../services/actions/actions" 
import Products from '../components/Products'

const mapStateToProps = state => ({
    data: state
})

//this method will dispatch the action.
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeFromCartHandler: data => dispatch(removeFromCart(data)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Products); //The connect() function connects a React component to a Redux store.
 
