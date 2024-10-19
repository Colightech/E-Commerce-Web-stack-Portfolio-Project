import React, {useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import '../Pages/CSS/Product.css'
import Description from '../Components/Description/Description';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div className='product'>
       <BreadCrum product={product} />
       <ProductDisplay product={product}/>
       <Description/>
       <RelatedProduct/>
    </div>
  )
}

export default Product
