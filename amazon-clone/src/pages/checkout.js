import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import ProductCheckout from '../components/ProductCheckout'
import { useSession } from 'next-auth/react'
import Currency from "react-currency-formatter"
import { loadStripe } from "@stripe/stripe-js/pure";
import "./api/create-checkout-session"
const stripePromise = loadStripe(process.env.stripe_public_key);


function checkout() {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const {data: session} = useSession();
    console.log("fuck you brohhhhhhhhhhh")

    const CreateCheckoutSession = async() => {

      const stripe = await stripePromise;
      // try {
        const response = await axios.post('/api/create-checkout-session', {
        items: items,
        email: session.user.email,
      });

      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id
      })

      if(result.error) {
        alert(result.error.message);
      }

    }

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
                      {items.map((item, i) => (
                          <ProductCheckout
                            key = {i}
                            id = {item.id}
                            title = {item.title}
                            rating = {item.rating}
                            price = {item.price}
                            description = {item.description}
                            category = {item.category}
                            image = {item.image}
                            hasPrime = {item.hasPrime}
                          />
                      ) )}
                 </div>
            </div>


            {/* right */}
            <div className='flex flex-col bg-white p-40 m-20 shadow-md'>
              {items.length > 0 && (
                <>
                  <h2 className='whitespace-nowrap'> 
                    Subtotal ({items.length} items) :
                    <span className='font-bold'>
                      <Currency quantity={total} currency="GBP" />
                    </span>
                  </h2>

                  <button
                    role = "link"
                    onClick={CreateCheckoutSession}

                    disabled={!session}
                    className={`button m-20 mt-2 ${!session && 
                        "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                          {!session ? "SignIn to checkout" : "Proceed to checkout"}
                  </button>
                </>
              )}
            </div>

        </main>
      
    </div>
  )
}

export default checkout
