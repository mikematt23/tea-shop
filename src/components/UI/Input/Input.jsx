import { forwardRef, useState, useEffect } from "react"
import style from "./Input.module.css"

const Input = forwardRef(({type,name,placeHolder, isCartInput},ref)=>{
  const [inputStyle, setInputStyle] = useState(style.input)
  useEffect(()=>{
    if(isCartInput){
      setInputStyle(style.cartInput)
    }
  },[])
  return(
    <div className={style.inputHolder}>
      <label  htmlFor={name}>{name}</label>
      <input name={name} ref={ref} className={inputStyle} type = {type} placeholder={`${placeHolder}`}/>
    </div>
  )
})

export default Input