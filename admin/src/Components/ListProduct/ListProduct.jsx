import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const [allProduct, setAllProduct] = useState([]);

  // fetch function to fetch and display data on listproduct page
  const fetchInfo = async() =>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProduct(data)});
  }

  useEffect(()=>{
    fetchInfo()
  },[])

  // Remove function use to remove item from listproduct page
  const remove_product = async (id) => {
      await fetch('http://localhost:4000/removeproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id:id})
      })

      await fetchInfo();
  }

  return (
    <div className='list-product'>
        <h1>All Product List</h1>
        <div className="listproduct-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Remove</p>
        </div> 
        <div className="listproduct-allproduct"> 
           <hr/> 
            {allProduct.map((product,i)=>{
              return <div> 
                <div key={i} className="listproduct-format-main listproduct-format">
                    <img src={product.image} alt="" className="listproduct-product-img" />
                    <p>{product.name}</p>
                    <p>${product.old_price}</p>
                    <p>${product.new_price}</p>
                    <p>{product.category}</p>
                    <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon" />
                </div>
                <hr/>
              </div>
            })}
        </div>
    </div>
  )
}

export default ListProduct
