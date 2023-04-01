import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link className="ss" to="/" style={{fontSize:"22px"} }> SHOP</Link>
            <Link to="/cart">
                <ShoppingCart style={{color:"coral"}} size={22}/> </Link>
        </div>
    </div>
  )
}

export default Navbar