import style from "./Header.module.css"
import { Link } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { showCart } from "../../Store/Slices/CartSlice"
import { logOut } from "../../Store/Slices/UserSlice"
import { createPortal } from "react-dom"
import { useNavigate } from "react-router";
import Cart from "../Cart/Cart"

const Header = ({})=>{
  const isLoggedIn = localStorage.getItem("loggedIn")
  const showCart2 = useSelector(state =>state.cart.showCart) 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCart = ()=>{
    dispatch(showCart())
  }
  const handleLogOut = ()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("loggedIn")
    dispatch(logOut())
    navigate("/")
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
          <li onClick={handleLogOut}>
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