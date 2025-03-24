import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants'
import { GradientLight } from './design/Benefits'

const Benefits = () => {
  return (
    <Section id="features" crosses>
      <div className="container relative z-2">
        <Heading className="text-center md:max-w-md lg:max-w-2xl" title="Chat Smarter, Not Harder with Brainwave"/>
      

        <div className="flex flex-wrap gap-30 mb-10 items-center justify-center p-[1rem]">
          {benefits.map((item) => (
            <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                border: "2px solid #AC6AFF",

                borderRadius: "10% 0% 10% 10%" 
              }}
              key={item.id}
            >
              <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]'>
                <h2 className="mb-5">{item.title}</h2>
                <p className="body-2 mb-6 text-gray-400">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    
                  />
                  <p className='ml-auto font-code text-xs font-bold uppercase'>Explore More {"->"} </p>
                </div>
              </div>
              {item.light && <GradientLight />}
            </div>
          ))}

        </div>
      </div>
        
    </Section>
  )
}

export default Benefits