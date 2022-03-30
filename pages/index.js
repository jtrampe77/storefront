import {useState, useEffect} from 'react'

import Button from "../components/Button/Button"
import PageTitle from "../components/PageTitle/PageTitle"
import {User} from '../components/User'

// CRA version of data loading
// this is for assessment 4
// Firebase SDK, ref, get(ref)



function Product({title,...props}){
  return(
    <li>{title}</li>
  )
}

export default function Home() {
  
  // product data
  // Building UI from data
  // map inside the return implicit arrow function

  // const productData = [{name:"Nike", uid:"1"}, {name:"Yeezy", uid:"2"},{name:"Adidas", uid:"3"},]


  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState([])


  // this is what you would use to display products
  // have this in your view all panel
  useEffect(()=>{
    console.log('home render')
    async function loadExernalDataCRA(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
        setUserData(data)
    }
    loadExernalDataCRA()
  }, [])

 

   return (
     <>
       <PageTitle title="StoreFront" tagline="Featured Products"/>

       <div style={{textAlign:"center"}}>
          <Button 
          style={{margin:"2rem 0 0"}}
          onClick={()=>setIsLoading(!isLoading)}
          >Some Data</Button>

          {
            isLoading && <p style={{padding:"1rem"}}>This is my output</p>
          }
        
       </div>

      <main>
          {
            userData.map(({id,name,username,email}) => <User key={id} name={name} username={username} email={email} />)
          }
      </main>


       {/* <Product title="Sneaker" /> */}
       {/* {
         productData.map(({uid,name,...product})=> <Product key={uid} title={name}/>)
       } */}




     </>
 
  )

}
