
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('home')
    const { getTotalCartAmount } = useContext(StoreContext)
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <img
                src={assets.logo}
                className="logo"
                alt="Logo"
                onClick={() => navigate('/')}
            />

            <ul className="navbar-menu">
                <Link
                    to="/"
                    onClick={() => setMenu('home')}
                    className={menu === 'home' ? 'active' : ''}
                >
                    Home
                </Link>

                <Link
                    to="/#explore-menu"
                    onClick={() => setMenu('menu')}
                    className={menu === 'menu' ? 'active' : ''}
                >
                    Menu
                </Link>

                <Link
                    to="/#footer"
                    onClick={() => setMenu('mobile-app')}
                    className={menu === 'mobile-app' ? 'active' : ''}
                >
                    Mobile App
                </Link>

                <Link
                    to="/#footer"
                    onClick={() => setMenu('contact-us')}
                    className={menu === 'contact-us' ? 'active' : ''}
                >
                    Contact Us
                </Link>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />

                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="Cart" />
                    </Link>

                    {getTotalCartAmount() > 0 && (
                        <div className="dot"></div>
                    )}
                </div>

                <button onClick={() => setShowLogin(true)}>
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Navbar
