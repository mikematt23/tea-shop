import Header from "../Header/Header"
import Card from "../UI/Card/Card"
import Button from "../UI/Button/Button"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

const ProjectDetails = ()=>{
  const isLoggedIn = localStorage.getItem("loggedIn")
  const {id} = useParams()
  const [item, setItem] = useState()
  const [isLoading,setIsloading] = useState(true)
   useEffect(()=>{
    const fetchProduct = async ()=>{
     const response = await fetch(`http://localhost:3000/teaItem/${id}`,{
        method: "get"
      })
      const json = await response.json()
      setItem(json.product)
      setIsloading(false)
    }
    fetchProduct()
   },[])
   
   const handleAddToCart = (newItem,number)=>{
      let cart = JSON.parse(sessionStorage.getItem("cart")) 
      if(cart === null){
        const newCart = [{...newItem,quantity: number}]
        return sessionStorage.setItem("cart",JSON.stringify(newCart))
      }
      const addToArray = cart.find((item)=>{
        if(newItem.Id === item.Id){
          item.quantity++
          return true
        }
      })
      if(addToArray === undefined){
        cart.push({...newItem,quantity:number})
      }
 
      sessionStorage.setItem('cart', JSON.stringify(cart));
      console.log(cart)
   }

   return(
    <>
    <Header/>
      {isLoggedIn&& !isLoading &&<Card>
        <h1>{item.teaName}</h1>
        <h2>{item.teaDescription}</h2>
        <p>${item.Price}</p>
        <Button onClick={()=>{handleAddToCart(item,1)}}>Add To Cart</Button>
      </Card>}
      {!isLoggedIn&& <Card>
        <h1>not Logged In</h1>
        <h2>Please click to log in or sign up</h2>
        </Card>}
    </>
   )
}



export default ProjectDetails