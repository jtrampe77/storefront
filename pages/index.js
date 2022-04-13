import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head';
import PageTitle from "../components/PageTitle/PageTitle"
import ProductCard from "../components/ProductCard/ProductCard"




export default function Home(props) {
  
   const products = props.products

  //  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  //  console.log(process.env.STRIPE_SECRET_KEY)

   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

   return (
     <>
     <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SneakerHeadz</title>
     </Head>
        <PageTitle title="SneakerHeadz" tagline="Get the best sneakerz out there" />
        <main>
            {
              products.map(product => <ProductCard key={product.uid} product={product} />)
            }
        </main>
     </>
 
  )

}

// NextJS sees getStaticProps = your telling it to build static pages from the data

export async function getStaticProps(){
  //server code
  // access file systems, read, write

  const res = await fetch('https://sneakerheadz-336fe-default-rtdb.firebaseio.com/products.json')
  const productData = await res.json()
  const products = Object.values(productData)
  
  return {
    props:{
      products,
      fallback:false
    },
    revalidate:60
  }

}