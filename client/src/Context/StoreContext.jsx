
import React, { useEffect, useState, createContext } from 'react'
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState('')
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId] || prev[itemId] <= 0) {
                return prev
            }

            return {
                ...prev,
                [itemId]: prev[itemId] - 1
            }
        })
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find(
                    (product) => product._id === item
                )

                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item]
                }
            }
        }

        return totalAmount
    }

    const getCartItemCount = () =>
        Object.values(cartItems).reduce(
            (total, quantity) => total + (quantity > 0 ? quantity : 0),
            0
        )

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        searchQuery,
        setSearchQuery,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getCartItemCount
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
