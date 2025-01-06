import { useRef, forwardRef } from "react"
import style from "./Input.module.css"

const Input = forwardRef(({type,placeHolder},ref)=>{
  return(
    <input ref={ref} className={style.input} type = {type} placeholder={placeHolder}/>
  )
})

export default Input