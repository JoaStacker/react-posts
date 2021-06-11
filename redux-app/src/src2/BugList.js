import {useState} from "react"

const BugList = (props) => {
    const [state, setState] = useState()

    return (
        <div>
            <ul>
                
            </ul>
            <input type="text" value={state} onChange={e => setState(e.target.value)}/>
            <button onClick={() => props.bugAdded(state)}>Add</button>
        </div>
    )
}

export default BugList
