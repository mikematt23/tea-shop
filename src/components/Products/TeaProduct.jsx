import { useEffect, useState } from "react"

const TeaProduct = ({name,id,price})=>{
 
  useEffect(()=>{
     import(`../../assets/teaShop/${id}.webp`).then()
  },[])

  return(
    <>
    <div>
      <h3>{name}</h3>
      <h5>${price}</h5>
    </div> 
    </>
  )
}


export default TeaProduct