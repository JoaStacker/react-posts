import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">Contact Book</Link>
                    <div>
                        <Link to="/contacts/add" className="btn btn-light ml-auto">Create contact</Link>
                    </div>
                </div>
            </nav>
        </div>
 
    )
}
