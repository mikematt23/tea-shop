import Header from '../Header/Header';
import Card from '../UI/Card/Card';
import style from './Checkout.module.css'
import {loadStripe} from '@stripe/stripe-js';
import {EmbeddedCheckoutProvider,EmbeddedCheckout } from '@stripe/react-stripe-js'
import { useEffect, useState, useCallback } from 'react';

const stripePromise = loadStripe("pk_test_51Qnpq3CXhlu9fWmE5SgmRfZ6hOypWQ2Al4qIX6UutJrVqxan1cRVodZB9M2JJefniKVn756PS0YdYFKaXO8WwcE200YYp6OV5F")
const Checkout = ()=>{
  const cart = JSON.parse(sessionStorage.getItem('cart'))
  let sessionID

  const fetchClientSecret = useCallback(async()=>{    
        let amount = 0 
        cart.forEach((item)=>{
          let num = Number(item.Price)*item.quantity
          console.log(num)
          amount = amount + num
        })
        console.log(typeof amount)
        const response = await fetch("http://localhost:3000/teaCheckout",{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body:JSON.stringify({
            amount:amount,
            cart:cart
          })
        })
        const json = await response.json()
        sessionID = await json.id
        const data = await json.clientSecret
        return data
   },[])

  
   
   const options = {fetchClientSecret}

    return(
    <>
    <Header/>
      <div className={style.checkout}>
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={options}
        >
          <EmbeddedCheckout/>
        </EmbeddedCheckoutProvider>
      </div>  
  
    </>
  )
}


export default Checkout