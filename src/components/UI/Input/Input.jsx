import { forwardRef, useState, useEffect } from "react"
import style from "./Input.module.css"

const Input = forwardRef(({type,placeHolder, isCartInput},ref)=>{
  const [inputStyle, setInputStyle] = useState(style.input)
  useEffect(()=>{
    if(isCartInput){
      setInputStyle(style.cartInput)
    }
  },[])
  return(
    <div className={style.inputHolder}>
      <label  for={placeHolder}>{placeHolder}</label>
      <input name={placeHolder} ref={ref} className={inputStyle} type = {type} placeholder={`Please enter your ${placeHolder}`}/>
    </div>
  )
})

export default Input