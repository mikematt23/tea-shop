import style from "./Cart.module.css"
import Button from "../UI/Button/Button"
import { closeCart } from "../../Store/Slices/CartSlice"
import { useDispatch } from "react-redux"

const Cart = ({})=>{
  const dispatch = useDispatch()

  function handleCartClose(){
    dispatch(closeCart())
  }

  return(
    <div onClick={handleCartClose} className={style.modal}>
      <div className={style.modalContainer}>
        <p>Cart containt</p>
        <Button onClick={handleCartClose}>Close</Button>
      </div>
    </div>
  )
}

export default Cart