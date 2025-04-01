import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { roadmap } from '../constants'
import { check2, grid, loading1 } from '../assets'

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className='container justify md:pb-10'>
        <Heading  className="text-center" title="What we're working on"/>
        
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) =>{
            const status = item.status === "done" ?
            "Done" : "In Progress";

            return (
              <div key={item.id} 
                className="md:flex justify-end even:justify-start even:md:translate-y-[7rem] p-0.25 px-4
                  rounded-[2.5rem]">
                <div className="relative p-8 bg-gray-900 rounded-[2rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img 
                      src={grid} 
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>

                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20 ">
                      [ {item.date} ]
                      <div className={` flex px-4 py-1 ${status === "Done" ? "bg-green-500" : "bg-white"} rounded text-gray-900`}>
                        <img 
                          className="mr-2"
                          src={item.status === "Done" ? check2 : loading1 }
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div>{status}</div>
                      </div>
                        
                    
                    </div>
                    <div className="max-w-[27rem]  mb-8 md:mb-20">
                      <div className='mb-10 -my-10 -mx-15'>
                        <img src={item.imageUrl}
                          className="w-full "
                          width={630}
                          height={420}
                          alt={item.title}
                        />
                      </div>
                      <h4 className="text-4xl mb-4">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Roadmap