import style from "./Header.module.css"
import { Link } from "react-router"
import { useSelector } from "react-redux"

const Header = ({})=>{
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

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
        </ul>}
        {isLoggedIn&& <ul>
          <li>
           <Cart></Cart>
          </li>
          <li>
            products
          </li>
          <li>
           log out
          </li>
        </ul>}
      </nav>
    </header>
  )
}


export default Header