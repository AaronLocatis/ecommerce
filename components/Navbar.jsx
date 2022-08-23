import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">Pioneer Subwoofer</Link>
            </p>
            <button type="button"
                className="cart-icon" onClick="">
                <AiOutlineShopping />
                <span classNam="cart-item-qty"></span>
            </button>
        </div>
    )
}

export default Navbar