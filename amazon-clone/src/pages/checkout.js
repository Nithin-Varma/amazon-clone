import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import ProductCheckout from '../components/ProductCheckout'


function checkout() {

    const items = useSelector(selectItems);

  return (
    <div className='bg-gray-600'>
        <Header />

        <main className='lg:flex max-w-screen-2xl '>
            {/* left */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                 src="/checkout_banner.png"
                 width={1020}
                 height={250}
                 objectFit='contain'
                 />

                 <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                        {items.length === 0 ? "Your Basket is Empty" : "Your Shopping Basket"}
                    </h1>
                    {items.map((item, i) => {
                        <ProductCheckout
                          key = {i}
                          id = {item.id}
                          title = {item.title}
                          rating = {item.rating}
                          price = {item.price}
                          description = {item.description}
                          category = {item.category}
                          image = {item.image}
                          hasPrice = {item.hasPrice}
                         />
                    } )}
                 </div>
            </div>


            {/* right */}

        </main>
      
    </div>
  )
}

export default checkout
