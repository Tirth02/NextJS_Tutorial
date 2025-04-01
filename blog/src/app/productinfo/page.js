import React from 'react'
import ProductButton from './product';

async function fetchData() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}
// It is always recommended to call api through server component than client component as it give benefits like security, fast fetching of data, better seo(search engine optimization) and many more 
const ProductInfo = async () => {
  
    let products = await fetchData();
    console.log(products);
    
    return(
        <div>
            <h1>Product List</h1>
            {
                products.map((item) =>(
                    <div>
                        <br/>  
                        <h3>Name: {item.title}</h3>
                        <br/>
                        <ProductButton price={item.price}/>  
                    </div>
                ))
            }
        </div>
    )
    
}

export default ProductInfo
