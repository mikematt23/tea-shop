import style from "./Card.module.css"

const Card = ({children})=>{
  return (
    <div className={style.Card}>
      {children}
    </div>
  )
}

export default Card