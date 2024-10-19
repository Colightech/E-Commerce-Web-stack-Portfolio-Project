import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='product-display'>
        <div className="product-display-left">
            <div className="product-display-left-mini">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="product-display-left-larg">
                <img src={product.image} alt="" />
            </div>
        </div>

        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="product-display-rating">
                <div>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                </div>
                <p>(133)</p>
            </div>
           <div className="product-display-price">
                <div className="product-display-old-price">${product.old_price}</div>
                <div className="product-display-new-price">${product.new_price}</div>
           </div>
           <p>We serve a retail customer base that continues to grow exponentially, 
            offering products that span various categories including Phones, Computers, 
            Clothing, Shoes, Home Appliances, Books, healthcare, Baby Products, 
            personal care and much more.
            
            Our range of services are designed to ensure optimum levels of convenience 
            and customer satisfaction with the retail process; these services include our 
            lowest price guarantee, 7-day free return policy*, order delivery-tracking, 
            dedicated customer service support and many other premium services.</p>

            <div className="product-display-size">
                <h3>Select Size</h3>
                <div className="product-display-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDisplay
