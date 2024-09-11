import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__margin">
          <ul className="navbar__items">
            <li className="navbar__item"><Link to="/">HOME</Link></li>
            <li className="navbar__item"><Link to="/">SHOP</Link></li>
            <li className="navbar__item"><Link to="/">FINDER</Link></li>
            <li className="navbar__item"><Link to="/">CONTACT</Link></li>
          </ul>
        
          <button>
            login
          </button>
          
        </div>
    </nav>
  )
}

export default Navbar