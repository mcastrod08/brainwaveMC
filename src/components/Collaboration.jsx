import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check } from '../assets'
import Button from './Button'

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
      
        <Heading className="text-center mb-4 md:mb-8 md:max-w-md lg:max-w-2xl" title="AI Chat App for seamless collaboration"/>
        <div className='max-w-[50%]'>
        
          <ul className="max-w-[70%] mb-10 md:mb-14">
            {collabContent.map((item)=>(
              <li key={item.id} className="mb-3 py-3 px-[1rem]">
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check"/>
                  <h6 className="ml-5">{item.title}</h6>
                </div>
                {item.text && 
                  <p className="mt-3 text-gray-400">{item.text}</p>
                }
              </li>
            ))}
          </ul>
          <Button className="ml-5">Try it now</Button>
        </div>  
      </div>
    </Section>
  )
}

export default Collaboration