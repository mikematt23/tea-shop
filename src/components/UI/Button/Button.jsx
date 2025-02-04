import { useState, useEffect } from "react"
import style from "./Button.module.css"

const Button = ({children, onClick,isCancel})=>{
  const [buttonStyle, setbuttonStyle] = useState(style.button)
  useEffect(()=>{
    if(isCancel){
      setbuttonStyle(style.cancel)
    }
  },[])
  return(
    <button onClick={onClick} className={buttonStyle}>{children}</button>
  )
}

export default Button