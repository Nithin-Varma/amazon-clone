import React from 'react';;
import Image from "next/image";

function Products({ id, title, price, description, category, image }) {
  return (
    <div>
        <h1>hello boss</h1>
        <p>{category} </p>
        <Image 
            src={image}
            width="200"
            height= "200"
            objectFit="contain"
        />
      
    </div>
  )
}

export default Products;
