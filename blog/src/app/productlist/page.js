"use client"
import React, { useEffect, useState } from 'react'

const ProductList = () => {

    const [product,setProduct] = useState([]);
    useEffect(() =>{

        async function fetchData() {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            // console.log(data);
            setProduct(data.products);
        }
        fetchData();
    },[])
  return (
    <div>
      <h1>Product List</h1>
      <table>
     <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
        </tr>
     </thead>
     <tbody>
        {
        product.map((item) => (
            <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
            </tr>
        ))
        }
     </tbody>
      </table>
      
    </div>
  )
}



export default ProductList
