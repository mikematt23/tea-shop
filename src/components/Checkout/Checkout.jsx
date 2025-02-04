import Header from '../Header/Header';
import Card from '../UI/Card/Card';
import CartItem from '../CartItem/CartItem';
import style from './Checkout.module.css'
import {loadStripe} from '@stripe/stripe-js';
import {EmbeddedCheckoutProvider,EmbeddedCheckout } from '@stripe/react-stripe-js'
import { useEffect, useState, useCallback } from 'react';

const stripePromise = loadStripe("pk_test_51Qnpq3CXhlu9fWmE5SgmRfZ6hOypWQ2Al4qIX6UutJrVqxan1cRVodZB9M2JJefniKVn756PS0YdYFKaXO8WwcE200YYp6OV5F")
const Checkout = ()=>{
  const [cartItems, setCartItems] = useState(JSON.parse(sessionStorage.getItem('cart')))
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
        const response = await fetch("https://reashopnode-production.up.railway.app/teaCheckout",{
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
    <div className={style.holder}>
      <h2>Order Summary</h2>
      <p>Scroll Down to pay</p>
      <div className={style.cartHolder} >
         {cartItems.map((item)=>{
          {console.log(item)}
           return <CartItem update={true} key={item.Id} id={item.Id} name={item.teaName} quantity = {item.quantity} price={item.Price}/>
         })}
      </div>
      <div className={style.checkout}>
        <p>This is a test so use card number 4242-4242-4242-42424 and use ramndom values for other entries</p>
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={options}
        >
          <EmbeddedCheckout/>
        </EmbeddedCheckoutProvider>
      </div>
    </div>  
    </>
  )
}


export default Checkout