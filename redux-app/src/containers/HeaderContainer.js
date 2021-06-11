import { connect } from "react-redux";
// import { removeFromCart } from "../services/actions/actions" 
import Header from "../components/Header";

const mapStateToProps = state => ({
    data: state
})

//this method will dispatch the action.
const mapDispatchToProps = dispatch => ({
    // removeFromCartHandler: id => dispatch(removeFromCart(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Header); //The connect() function connects a React component to a Redux store.