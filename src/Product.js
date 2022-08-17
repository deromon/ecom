import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider";




function Product({id,title, image, price}) {
  const [{basket}, dispatch] = useStateValue();

  


  const addToBasket = () =>{
    //dispatch item to dta layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
      id: id,
      title: title,
      image: image,
      price: price,
    },
   });
  };
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={image} alt='nil'/>
      </div>
      <div className='card-title'>
        <h3>{title}</h3>
        <p>eu dp</p>
      </div>
      <div className='card-detail'>
        <div className='price'>
          <span>Price</span>
          <p>{price}</p>
        </div>
        <div>
           <button onClick={addToBasket}>Buy Now</button>
        </div>
      </div>


      
      
      
    </div>
  )
}

export default Product