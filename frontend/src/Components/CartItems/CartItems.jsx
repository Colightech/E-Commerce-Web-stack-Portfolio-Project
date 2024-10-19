import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import cart_cross_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalAmount} = useContext(ShopContext);

  return (
    <div className='cart-item'>
        <div className="product-heading">
            <div className="product-image">Product</div>
            <div className="product-title">Title</div>
            <div className="product-price">Price</div>
            <div className="product-quantity">Quantity</div>
            <div className="product-total">Total</div>
            <div className="product-delete">Remove</div>
        </div>
        <hr/>

        {all_product.map((e)=>{
            if (cartItems[e.id]>0) {
                return  <div>
                <div className="product-items-container product-heading">
                    <img className='product-item-image' src={e.image} alt="" />
                    <h3>{e.name}</h3>
                    <div className="price">${e.new_price}</div>
                    <div className="quantity">{cartItems[e.id]}</div>
                    <div className="total">${e.new_price*cartItems[e.id]}</div>
                    <div className="delete">
                        <img onClick={()=>{removeFromCart(e.id)}} src={cart_cross_icon} alt="" />
                    </div>
                </div>
                <hr/>
            </div>
            }
            else {
                return null;
            }
        })}

        <div className="product-cart-total-coupon">
            <div className="cart-total">
                <h2>Cart Total</h2>
                <div className="subtotal">
                    <p>Subtotal</p>
                    <div className="subtotal-price">${getTotalAmount()}</div>
                </div>
                <hr/>
                <div className="shipping-fee">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="total">
                    <h3>Total</h3>
                    <p>${getTotalAmount()}</p>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="product-coupon">
                <p>If you have a promo code, enter it here</p>
                <div className="input-button">
                    <input type="text" placeholder='Promo code...' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
