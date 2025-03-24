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
        
        <ul className="max-w-[45rem] mb-10 md:mb-14">
          {collabContent.map((item)=>(
            <li key={item.id} className="mb-3 py-3 px-[1rem]">
              <div className="flex items-center">
                <img src={check} width={24} height={24} alt="check"/>
                <h6 className="ml-5">{item.title}</h6>
              </div>
              {item.text && 
              <p className="mt-3 text-gray-400">{item.text}</p>}
            </li>
          ))}
        </ul>
        <Button className="ml-5">Try it now</Button>
      
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className=" ml-5 mb-8 text-gray-500 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>  

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-gray-900 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-gray-900 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-240 from-gray-600 to-[#AC6AFF] to-50% rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-gray-950 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>  
          
            </div>
            
          </div>
        </div>
      </div>

    </Section>
  )
}

export default Collaboration