import React from 'react'
import Products from './Products';

function ProductFeed({ products }) {
  return (
    <div>
      {products.map(({ id, title, price, description, category, image }) => {
        <Products
          key={id}
          id={id}
          title = {title}
          price = {price}
          description = {description}
          category = {category}
          image = {image}
        />
        
      })}

      
    </div>
  )
}

export default ProductFeed;
