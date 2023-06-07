import React from 'react'
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
            <div>
                <Image 
                 loading='lazy'
                 src="/banner1.jpg"
                 height={600} 
                 width={1100} 
                 />
            </div>

            <div>
                <Image 
                 loading='lazy'
                 src="/banner2.jpg" 
                 height={600} 
                 width={1100} 
                 />
            </div>

            <div>
                <Image  
                loading='lazy'
                src="/banner3.jpg"
                height={600} 
                width={1100} 
                />
            </div>
        </Carousel>
      
    </div>
  )
}

export default Banner;
