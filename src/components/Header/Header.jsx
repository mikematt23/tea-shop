import style from "./Header.module.css"

const Header = ({})=>{
  return(
    <header className={style.header}>
      <h1>Tea Shop</h1>
      <ul>
        <li><a>Home</a></li>
        <li><a>Products</a></li>
        <li><a>Cart</a></li>
      </ul>
    </header>
  )
}


export default Header