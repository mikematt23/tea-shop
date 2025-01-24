import { createPortal } from "react-dom"
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
        <p>{message}</p>
      </div>
    </div>
  )
}


export default ErrorMessage