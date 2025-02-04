import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import { useEffect,useRef,useState} from "react"


const CartItem = ({name,price,quantity,id, updateCart})=>{
    const quantityRef = useRef()
    const [hasMessage, setHasMessage] = useState(false)
    let cart = JSON.parse(sessionStorage.getItem("cart")) 
    
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
        <>
          {hasMessage && <h4>quantity Cant be zero</h4>}
          <h3>{name}</h3>
          <h5>For one: ${price}</h5>
          <h4>Total for {quantity}: ${price*quantity}.00</h4>
          <div>
            <Input ref={quantityRef} type="number" placeHolder = "Update Quanity"/>
            <div>
                <Button onClick={()=>{handleUpdateQuanity(id)}}>Update Quanity</Button>
                <Button onClick={()=>{handleItemRemoval(id)}}>Remove</Button>
            </div>
          </div>
        </>
    )
}


export default CartItem