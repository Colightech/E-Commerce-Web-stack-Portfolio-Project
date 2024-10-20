import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })


    // image upload function
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    // changeHandler function for onChange logic
    const changeHandler = (e) => {
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    // Add_Product function for Add button
    const Add_Product =  async() => {
        console.log(productDetails);
        let respondData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{respondData=data})

        if(respondData.success)
        {
            product.image = respondData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp) => resp.json()).then((data)=>{
                data.success?alert("Product Added Successfully"):alert("Operation Failed");
            })
            clearFieldHandler();
        }
    }

  return (
    <div className='add-product'>
       <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" required name='name' placeholder='enter eroduct name...' />
       </div>
       <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="number" name='old_price' placeholder='enter old price...' />
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="number" name='new_price' placeholder='enter new price...' />
            </div>
       </div>
       <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className="addproduct-selector">
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kids</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt="" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
        </div>
        <button onClick={() => {Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct
