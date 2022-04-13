async function getProduct(uid){
    const res = await fetch(`https://sneakerheadz-336fe-default-rtdb.firebaseio.com/products/${uid}.json`)
    const product = await res.json()
    return product
}

export {getProduct}