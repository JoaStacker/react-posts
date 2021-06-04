import React, { useContext } from 'react'
import { Number } from "../App"

export default function CompC() {
    const number = useContext(Number)

    return (
        <div>
            <h1>The number passed as context is {number}</h1>        
        </div>
    )
}
