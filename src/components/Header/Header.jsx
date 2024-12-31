import style from "./Header.module.css"
import { Link } from "react-router"

const Header = ({})=>{
  return(
    <header className={style.header}>
      <h1>Tea Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default Header