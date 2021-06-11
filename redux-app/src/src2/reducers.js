//reducer has to be a pure function. A small function in an isolated world.
import * as actions from "./actionTypes"

let lastId = 0;

export default function reducers (state = [], action) {
   switch(action.type){
    case actions.BUG_ADDED: return [
        ...state,
        {
            id: ++lastId,
            description: action.payload.description,
            resolved: false,
        }
    ];
    case actions.BUG_REMOVED:
        return state.filter(bug => bug.id !== action.payload.id)
    case actions.BUG_RESOLVED:
        return state.map(bug => 
            bug.id !== action.payload.id ? bug : {...bug, resolved:true})
   }
   return state
}
