import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { service1 } from '../assets'
import { brainwaveServices } from '../constants'
import { check } from '../assets'

const Services = () => {
  return (
    <Section className="">
      <Heading className="text-center" title="Generative AI for creators"/>
      <p className='text-center -mt-15 mb-20 text-gray-500'>something</p>

      <div className="lg:flex container justify-around">
        <img 
          src={service1}
          width={560}
          className='ml-20'
        />

        <div className='items-center mr-[25rem] ml-5 sm:mt-10'>

          <h3 className='text-4xl mb-2'>Smartest AI</h3>
          <p className='mb-8 text-gray-500'>Brainwave unlocks the potencial</p>
          <ul className=" mb-10 md:mb-14">
            {brainwaveServices.map((item, index) => (
              <li key={index} className="mb-3 py-3 px-[1rem]">
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check"/>
                  <h6 className="ml-5">{item}</h6>
                </div>
                
              </li>
            ))}
          </ul>
        </div>

      </div>
    </Section>
  )
}

export default Services