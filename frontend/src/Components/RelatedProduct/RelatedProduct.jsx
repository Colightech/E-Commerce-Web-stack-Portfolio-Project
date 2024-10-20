import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Items from '../Items/Items'

const RelatedProduct = () => {
  return (
    <div className='related-product'>
        <h1>Related Product</h1>
        <hr/>
        <div className="related-product-item">
            {data_product.map((item,i)=>{
                return <Items key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProduct
