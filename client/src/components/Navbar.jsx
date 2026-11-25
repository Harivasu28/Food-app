
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('home')
    const [showSearch, setShowSearch] = useState(false)
    const {
        getCartItemCount,
        searchQuery,
        setSearchQuery
    } = useContext(StoreContext)
    const navigate = useNavigate()
    const cartItemCount = getCartItemCount()

    const openSearch = () => {
        setShowSearch((previous) => !previous)
        if (window.location.pathname !== '/') {
            navigate('/')
        }
    }

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
                {showSearch && (
                    <input
                        className="navbar-search-input"
                        type="search"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        placeholder="Search food..."
                        autoFocus
                        aria-label="Search food"
                    />
                )}
                <button
                    type="button"
                    className="navbar-search-button"
                    onClick={openSearch}
                    aria-label={showSearch ? 'Close search' : 'Open search'}
                >
                    <img src={assets.search_icon} alt="" />
                </button>

                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="Cart" />
                    </Link>

                    {cartItemCount > 0 && (
                        <div className="cart-count" aria-label={`${cartItemCount} items in cart`}>
                            {cartItemCount}
                        </div>
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
