import React from 'react'
import './Offers.css'
import offer_icon from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers' >
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offer For Your...</h1>
            <h3>ONLY ON BEST SELLERS PRODUCTS</h3>
            <p>Check Now</p>
        </div>

        <div className="offer-right">
            <img src={offer_icon} alt="" />
        </div>
    </div>
  )
}

export default Offers
