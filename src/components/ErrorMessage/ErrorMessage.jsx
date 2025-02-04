import { createPortal } from "react-dom"
import Button from "../UI/Button/Button"
import style from "./ErrorMessage.module.css"
import { useDispatch } from "react-redux"
import { closeError } from "../../Store/Slices/ErrorSlice"

const ErrorMessage = ({message})=>{
  const dispatch = useDispatch()

  function handleErrorClose(){
    dispatch(closeError())
  }
  return(
    <div onClick={handleErrorClose} className={style.modal}>
      <div className={style.modalContainer}>
        <h1>ERROR!</h1>
        <h3>{message}</h3>
        <Button isCancel={true} onClick={handleErrorClose}>Close</Button>
      </div>
    </div>
  )
}


export default ErrorMessage