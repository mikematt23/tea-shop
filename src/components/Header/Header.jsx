import style from "./Header.module.css"
import { Link } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { showCart } from "../../Store/Slices/CartSlice"
import { createPortal } from "react-dom"
import Cart from "../Cart/Cart"

const Header = ({})=>{
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const showCart2 = useSelector(state =>state.cart.showCart) 
  const dispatch = useDispatch()

  const handleCart = ()=>{
    dispatch(showCart())
  }
  return(
    <header className={style.header}>
      <h1>Tea Shop</h1>
      <nav>
        {!isLoggedIn&& <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </ul>}
        {isLoggedIn&& <ul>
          <li onClick={handleCart}>
            <p>Cart</p>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
           log out
          </li>
        </ul>}
      </nav>
      {showCart2 && createPortal(
       <Cart/>,
       document.getElementById('modal')
      )}
    </header>
  )
}


export default Header