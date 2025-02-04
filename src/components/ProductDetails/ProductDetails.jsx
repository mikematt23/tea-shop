import Header from "../Header/Header"
import Card from "../UI/Card/Card"
import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import style from "./ProductDetails.module.css"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useEffect, useState, useRef } from "react"
import { showCart } from "../../Store/Slices/CartSlice"


const ProjectDetails = ()=>{
   const dispatch = useDispatch()
   const {id} = useParams()
   const isLoggedIn = localStorage.getItem("loggedIn")

   const quantityRef = useRef()

   const [imgPath,setImgPath] = useState()
   const [item, setItem] = useState()
   const [isLoading,setIsloading] = useState(true)

   useEffect(()=>{
    import(`../../assets/teaShop/${id}.webp`).then((image)=>{
      setImgPath(image.default)
    })
    const fetchProduct = async ()=>{
     const response = await fetch(`https://reashopnode-production.up.railway.app/teaItem/${id}`,{
        method: "get"
      })
      const json = await response.json()
      setItem(json.product)
      setIsloading(false)
    }
    fetchProduct()
   },[])
   const handleAddToCart = (newItem,number)=>{
      if(number === '' || number === undefined){
         number = 1
      }
      console.log(typeof number)
      let cart = JSON.parse(sessionStorage.getItem("cart")) 
      if(cart === null){
        const newCart = [{...newItem,quantity: number}]
        return sessionStorage.setItem("cart",JSON.stringify(newCart))
      }
      const addToArray = cart.find((item)=>{
        if(newItem.Id === item.Id){
          console.log(typeof item.quantity, typeof number)
          item.quantity = Number(item.quantity) + Number(number)
          return item
        }
      })
      if(addToArray === undefined){
        cart.push({...newItem,quantity:number})
      }
      sessionStorage.setItem('cart', JSON.stringify(cart));
      dispatch(showCart())
   }

   return(
    <>
    <Header/>
      {isLoggedIn&& !isLoading &&<Card>
        <h2>{item.teaName}</h2>
        <img className={style.img} src={imgPath} />
        <h3 className={style.h3}>{item.teaDescription}</h3>
        <div className={style.quantityHolder}>
          <Input isCartInput = {true} ref={quantityRef} type="number" placeHolder="Quantity"/>
          <Button onClick={()=>{handleAddToCart(item,quantityRef.current.value)}}>Add To Cart</Button>
        </div> 
      </Card>}
      {!isLoggedIn&& <Card>
        <h1>not Logged In</h1>
        <h2>Please click to log in or sign up</h2>
        </Card>}
    </>
   )
}



export default ProjectDetails