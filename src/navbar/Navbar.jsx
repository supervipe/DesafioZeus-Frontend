import React from 'react'
import { Link } from 'react-dom'

export default function Navbar() {
    return (
        <>
            <nav className ="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <h1>Haro</h1>
                    </Link>
                </div>

            </nav>
        </>
    )
}
