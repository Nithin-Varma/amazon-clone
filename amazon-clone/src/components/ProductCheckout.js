import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function ProductCheckout({ id, title, price, description, category, image, hasPrime, }) {

    const dispatch = useDispatch();
    const addItemtoBasket = () => {
        const product = {
            id,
            title,
            price, 
            description, 
            category, 
            image 
        }

        dispatch(addToBasket(product))
    };

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }


  return (
    <div className='grid grid-cols-5'>
        <h1>nithin varma </h1>
        <Image 
          src={image}
          height={200}
          width={200}
          objectFit='contain'
        />

        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map((_, i) => {
                    <StarIcon key={i} className='h-5 text-yellow-500' />
                })}
            </div>
            <p className='text-xs mt-2 mb-2 line-clamp-3'>{description}</p>
            <Currency quantity={price} Currency="INR" />

            {hasPrime && (
                <div>
                    <img 
                      loading='lazy'
                      src='https://links.papareact.com/fdw'
                      alt='prime subscription'
                    />
                    <p className='text-xs text-gray-500'>Free Delivery</p>
                </div>
            )}
        </div>

        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button className='button mt-auto' onClick={addItemtoBasket}> Add to Cart</button>
            <button className='button mt-auto' onClick={removeItemFromBasket}> Remove from the Cart</button>


        </div>

      
    </div>
  )
}

export default ProductCheckout;
