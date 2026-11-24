
import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate = useNavigate()
    const {
        cartItems,
        food_list,
        removeFromCart,
        getTotalCartAmount
    } = useContext(StoreContext)

    const subtotal = getTotalCartAmount()
    const deliveryFee = subtotal === 0 ? 0 : 2
    const total = subtotal + deliveryFee

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                <hr />

                {food_list.map((item) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div
                                className="cart-items-title cart-items-item"
                                key={item._id}
                            >
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>
                                    ${item.price * cartItems[item._id]}
                                </p>
                                <p
                                    onClick={() => removeFromCart(item._id)}
                                    className="cross"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            removeFromCart(item._id)
                                        }
                                    }}
                                >
                                    ×
                                </p>
                            </div>
                        )
                    }

                    return null
                })}
            </div>

            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>

                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${subtotal}</p>
                        </div>

                        <hr />

                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${deliveryFee}</p>
                        </div>

                        <hr />

                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${total}</b>
                        </div>
                    </div>

                    <button disabled={subtotal === 0} onClick={()=>navigate('/order')}>
                        PROCEED TO CHECKOUT
                    </button>
                </div>

                <div className="cart-promo-code">
                    <div>
                        <p>If you have a promo code, enter it here</p>

                        <div className="cart-promocode-input">
                            <input
                                type="text"
                                placeholder="Promo code"
                            />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
