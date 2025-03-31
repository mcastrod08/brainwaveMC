import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingCard from './PricingCard'

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img 
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="sphere"
          />
          <div className='absolute'>
            <img src={stars} 
              className='w-full'
              width={950}
              height={400}  
              alt="stars"
            />
          </div>
        </div>
        <Heading title="Pay once, use forever" className="text-center" />
      </div>
      <div className="">
        <PricingCard />
        <div className='text-center mt-10'>
          <a className="text-xs font-bold uppercase" href='/pricing'>See the full details</a>
        </div>
        
      </div>
    </Section>
  )
}

export default Pricing