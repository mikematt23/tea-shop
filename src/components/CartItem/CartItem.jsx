import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import style from "./CartItem.module.css"
import { useEffect,useRef,useState} from "react"
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { closeCart } from "../../Store/Slices/CartSlice";


const CartItem = ({name,price,quantity,id, updateCart,update})=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const quantityRef = useRef()
    const [hasMessage, setHasMessage] = useState(false)
    const [cantUpdate, setCantUpdate] = useState(false)
    let cart = JSON.parse(sessionStorage.getItem("cart")) 
    useEffect(()=>{
       if(update){
        setCantUpdate(true)
       }
    },[])
    const hnadleMoreDetails = (id)=>{
      navigate(`/product/${id}`)
      dispatch(closeCart())
    }

    const handleItemRemoval = (id)=>{
       const newItems = cart.filter((item)=>{
         if(item.Id != id){
            return item
         }
       })
       sessionStorage.setItem("cart",JSON.stringify(newItems))
       updateCart(newItems)
    }

    const handleUpdateQuanity = (id)=>{
        if(quantityRef.current.value == 0){
          console.log('here')
          return setHasMessage(true)
        }
        cart.find((item)=>{
         if(item.Id === id){
          item.quantity = quantityRef.current.value
         }
       })
       sessionStorage.setItem('cart',JSON.stringify(cart))
       updateCart(cart)
    }
  
    return(
        <div className={style.cartItem}>
          {hasMessage && <h4>quantity Cant be zero</h4>}
          <h3>{name}</h3>
          {!cantUpdate&&<Button onClick={()=>{hnadleMoreDetails(id)}}>More Detials</Button>}
          <div className={style.priceHolder}> 
            {!cantUpdate &&<h5>For one: ${price}</h5>}
            <h4>Total {quantity}: ${price*quantity}.00</h4>
          </div>
          {!cantUpdate &&<div className={style.UiHolder}>
            <Input isCartInput ={true} ref={quantityRef} type="number" placeHolder = "Update Quanity"/>
            <div>
                <Button onClick={()=>{handleUpdateQuanity(id)}}>Update Quanity</Button>
                <Button isCancel={true} onClick={()=>{handleItemRemoval(id)}}>Remove</Button>
            </div>
          </div>}
        </div>
    )
}


export default CartItem