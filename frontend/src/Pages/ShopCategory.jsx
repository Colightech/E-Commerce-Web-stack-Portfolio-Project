import React, { useContext } from 'react'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { ShopContext } from '../Context/ShopContext'
import Items from '../Components/Items/Items';
import './CSS/ShopCategory.css'



const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
        <div className="banners">
            <img src={props.banner} alt="" />
        </div>

        <div className="sort-container">
            <div className="left-sort">
                <p><span>Showing 1 -12 </span>out of 36</p>
            </div>
            <div className="right-sort">
                <p>Sorted by</p>
                <img src={dropdown_icon} alt="" />
            </div>
        </div>

        {/* <div className="shop-category-item">
            {all_product.map((item)=>{
              if (props.category === item.category) {
                  return <Items key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
              }
              else {
                return null;
              }
            })}
        </div> */}

        {/* using filter before map help to make the program more efficient,
        by reducing the time it take map to loop through a large data set,
        any unmatched item does not need to go through the map loop */}
        <div className="shop-category-item">
          {all_product.filter(item => props.category === item.category).map(item => (
              <Items key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            ))}
        </div>

    </div>
  )
}

export default ShopCategory
