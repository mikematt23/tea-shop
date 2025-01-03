import { useRef, forwardRef } from "react"
import style from "./Input.module.css"

const Input = ({type,placeHolder})=>{
  return(
    <input className={style.input} type = {type} placeholder={placeHolder}/>
  )
}

export default Input