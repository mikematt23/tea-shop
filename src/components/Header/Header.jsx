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
    dispatch(logOut())
    navigate("/")
  }
  return(
    <header className={style.header}>
      <h1>Tea Time</h1>
      <nav>
        {!isLoggedIn&& <ul>
          <li>
            <Link className={style.link} to="/">Home</Link>
          </li>
          <li>
            <Link className={style.link}  to="/login">Login</Link>
          </li>
          <li>
            <Link className={style.link}  to="/signUp">Sign Up</Link>
          </li>
        </ul>}
        {isLoggedIn&& <ul>
          <li onClick={handleCart}>
            <Link className={style.link}>Cart</Link>
          </li>
          <li>
            <Link className={style.link} to="/products">Products</Link>
          </li>
          <li onClick={handleLogOut}>
           <Link className={style.link}>Log Out</Link>
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