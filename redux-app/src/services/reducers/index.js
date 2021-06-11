import { combineReducers } from "redux" //it allow us to compress all reducers in one object.
import reducerCartItems from "./reducer"

//with this reducer we compress all reducers to the main store.
export default combineReducers ({
    reducerCartItems,
})