import React from 'react'
import "./Home.css"
import Clouds from '../src/media/Clouds.mp4'
import Product from "./Product";



function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
          <video src={Clouds} autoPlay loop muted playsInline />
          <div className='first_heading'>
            <h1 > Products </h1>
          </div>

          

          

          <div className='home__row'>
            <Product title="The lean startup."
                      price={29.99}
                      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                      
                      />
            <Product />
            <Product />
            

            
            
            
            

            
          </div>

          <div className='home__row'>
            
          </div>

          <div className='home__row'>
           

          </div>

            
          
         
                




           
           
        </div>
    </div>
  )
}

export default Home