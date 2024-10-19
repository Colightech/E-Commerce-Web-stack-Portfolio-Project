import React, { useEffect, useState } from 'react'
import './NewCollections.css'
// import new_collections from '../Assets/new_collections'
import Items from '../Items/Items'


const NewCollections = () => {

  const [new_collections,setNew_Collections] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((responds)=>responds.json())
    .then((data)=>{setNew_Collections(data)})
  },[])

  return (
    <div className='new-collections'>
       <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="new-collection-items">
            {new_collections.map((item,i)=>{
                return <Items  key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections
