
import PageTitle from "../components/PageTitle/PageTitle"


function Product({title,...props}){
  return(
    <li>{title}</li>
  )
}

export default function Home() {
  
  // product data
  // Building UI from data
  // map inside the return implicit arrow function

  const productData = [{name:"Nike", uid:"1"}, {name:"Yeezy", uid:"2"},{name:"Adidas", uid:"3"},]

  

   return (
     <>
       <PageTitle title="StoreFront" tagline="Featured Products"/>
       <Product title="Sneaker" />
       {
         productData.map(({uid,name,...product})=> <Product key={uid} title={name}/>)
       }
     </>
 
  )

}
