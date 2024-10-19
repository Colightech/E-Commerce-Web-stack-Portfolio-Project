import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='items'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <p className="item-new-price">${props.new_price}</p>
            <p className="item-old-price">${props.old_price}</p>
        </div>
    </div>
  )
}

export default Items
