import {combineReducers} from "redux"
import cardItems from "./reducer"

//with this reducer we compress all reducers to the main store.
export default combineReducers ({
    cardItems,
})