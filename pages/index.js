import Head from 'next/head';
import PageTitle from "../components/PageTitle/PageTitle"
import ProductCard from "../components/ProductCard/ProductCard"


export default function Home(props) {
  
   const products = props.products

   return (
     <>
     <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>StoreFront</title>
     </Head>
        <PageTitle title="Storefront" tagline="our store" />
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
    }
  }

}