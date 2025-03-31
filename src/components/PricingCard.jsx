import React from 'react'
import { pricing } from '../constants'
import Button from './Button'
import { check } from '../assets'

const PricingCard = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) =>(
        <div key={item.id} 
          className="w-[19rem] max-lg:w-full h-full px-6 border border-gray-800 rounded-3xl bg-gray-950 lg:w-auto 
            even:py-14 odd:py-8 odd:my-4 ">
          <h4 className="text-2xl">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-gray-300">{item.description}</p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="text-3xl">$</div>
                <div className="text-[4rem] leading-none font-bold">{item.price}</div>
              </>
            )}
          </div> 
          <Button className="w-full mb-6 mt-6">
            {item.price ? "Get Started" : "Contact Us"}  
          </Button> 

          <ul className=''>
            {item.features.map((feature, index) => (
              <li className='flex mb-5'>
                <img src={check} width={24} height={24} alt="check" />
                <p className='ml-3'>{feature}</p>
              </li>
              
            ))}
          </ul>
        </div>  
      ))}
    </div>
  )
}

export default PricingCard