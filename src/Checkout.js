import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <h2 className="checkout_title">Your shopping Basket</h2>
            {basket.map(item => (
              <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  
              />
            ))}      
        </div>
        <div className="checkout_right">
            <Subtotal />

        </div>
    </div>
  )
}

export default Checkout