import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Orders from './Orders';
import {BrowserRouter as Router, Routes, Route }
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51LRMH0SGteI4s56jJbWUIzyNUXBTTsiUlbkiy9NyBiVwdnjAaSuOjrSDlwGXyCCc5CGV4fFSn9h27P8GXUq2WJuP00NbkW5iy1')


function App() {
  
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //only runs once when app comp load
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS', authUser)
      if(authUser) {
        // the user just logged in the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
        
      }


    })

 
  }, [])
  return (
    <Router>
      <div className="app">
          
          <Routes>
              <Route path="/login" element ={<Login />}>  
                
              </Route>
              <Route path="/orders" element ={<Orders />}>  
                
              </Route>

              <Route exact path="/payment" element ={<><Header/><Elements stripe={promise}>  <Payment /></Elements></>
                     
                   

              }> 
              
              </Route>

              <Route exact path="/checkout" element ={<><Header/><Checkout/></>}>  

              </Route>

              


              <Route path="/" element ={<><Header/><Home/></>}>   
                
              </Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
