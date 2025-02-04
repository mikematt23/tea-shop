import { useEffect,useState, createPortal } from "react"
import style from "./Cart.module.css"
import Button from "../UI/Button/Button"
import TeaProduct from "../Products/TeaProduct"
import CartItem from "../CartItem/CartItem"
import { closeCart } from "../../Store/Slices/CartSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"


const Cart = ({})=>{
  const [cartItems, setCartItems] = useState([])
  const [hasItems,setHasItems] = useState(false)
  const [hasMessage, setHasMessage] = useState(false)

  const naviagte = useNavigate()
  const dispatch = useDispatch()
  let cart = JSON.parse(sessionStorage.getItem("cart"))

  useEffect(()=>{
    if(!cart){
     return 
    }else{
      setHasItems(true)
      setCartItems(cart)
    }
  },[])


  const updateCart = (newItems)=>{
    setCartItems(newItems)
  }
  function handleCartClose(){
    dispatch(closeCart())
  }
  function handlePay(){
    if(cart === null){
      return  setHasMessage(true)
    }
    if(cart != null && cart.length === 0){
      return  setHasMessage(true)
    }
    naviagte("/payment")
    dispatch(closeCart())
  }

  return(
    <div className={style.modal}>
      <div className={style.modalContainer}>
        <h1>Your Cart</h1>
        {hasMessage && <p>Cart Is Empty! Want to add some teas</p>}
        {!hasItems &&<p>Cart containt</p>}
        <div className={style.cart}>
          {hasItems&& cartItems.map((item)=>{
            return <CartItem updateCart={updateCart} key={item.Id} id={item.Id} name={item.teaName} quantity = {item.quantity} price={item.Price}/>
          })}
        </div>
        <Button isCancel={true} onClick={handleCartClose}>Close</Button>
        <Button onClick={handlePay}>Pay</Button>
      </div>
    </div>
  )
}

export default Cart