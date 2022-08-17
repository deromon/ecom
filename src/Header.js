import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom"
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user } , dispatch] = useStateValue();
  
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
      
    }
  } 
  return (
    <div className='header'>
      <Link to="/">
          <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='not available' />
      </Link>
      <div className='header__search'>
         <input
         className="header_searchInput" type="text" />
         <SearchIcon 
         className='header_searchIcon'/>
      </div>
      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className='header_option'>
            <span className='header_optionLineOne'>
              Hellow {!user ? 'Guest' : user.email}
            </span>

            <span className='header_optionLineTwo'>
               {user ? 'Sign Out' : 'Sign In'}
            </span>

            

          </div>
        </Link>

        <Link to='/orders'>
            <div className='header_option'>
              <span className='header_optionLineOne'>
                returns
              </span>

              <span className='header_optionLineTwo'>
                & Orders
              </span>

            </div> 
        </Link>

        <div className='header_option'>
          <span className='header_optionLineOne'>
            Your
          </span>

          <span className='header_optionLineTwo'>
            Prime
          </span>

        </div> 
        <Link to="/checkout">

          <div className="header_optionBasket">
            <ShoppingBagIcon/>
            <span className='header__basketCount'>
              {basket?.length}
              
            </span>  
          </div>
        </Link>


        


      </div>

      

    </div>
    

  )
}

export default Header