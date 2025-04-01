import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { service1, service2, service3 } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'
import { check } from '../assets'
import Generating from './Generating'

const Services = () => {
  return (
    <Section className="" id="how-to-use">
      <Heading className="text-center" title="Generative AI for creators"/>
      <p className='text-center -mt-15 mb-20 text-gray-500'>something</p>

      <div className="relative lg:flex max-w-[77.5rem] mx-auto  xl:max-w-[87.5rem] justify-between mb-[10rem]">
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
          <Generating className="absolute left-4 right-4  md:left-1/2 md:right-auto lg:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
        </div>
        
        


      </div>

      
      <div className="relative z-1 grid gap-5 lg:grid-cols-2 px-4">
        <div className="relative min-h-[39rem] border border-gray-800 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service2}
              className="h-full w-full object-cover"
              width={630}
              height={750}
              alt="robot"
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
            <h4 className="text-[2rem] leading-normal mb-4">Photo editing</h4>
            <p className="body-2 mb-[3rem] text-gray-500">
              Automatically enhance your photos using our AI app&apos;s
              photo editing feature. Try it now!
            </p>
          </div>
          <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
            Hey Brainwave, enhance this photo
          </div>
        </div>

        <div className="p-4 bg-gray-950 rounded-3xl overflow-hidden lg:min-h-[46rem]">
          <div className="py-12 px-4 xl:px-8">
            <h4 className='text-[2rem] leading-normal mb-4'> Video Generation</h4>
            <p className="body-2 mb-[2rem] text-gray-500">
                  The world's most powerful AI photo and video art generation engine.
            </p>

            <ul className="flex items-center justify-between">
              {brainwaveServicesIcons.map((item, index) => (
                <li className={`rounded-2xl w-[3rem] h-[3rem] flex items-center justify-center ${index === 2 ? " p-0.3 bg-gray-600 w-[4rem] h-[4rem]" : "flex bg-gray-900"}`}>
                  <div>
                    <img src={item} width={24} height={24} alt={item}/>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={service3} className="w-full h-full object-cover" 
              width={520} height={400} alt='Scary robot'/>
            <div className="absolute top-8 left-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
              Hey Brainwave, enhance this photo
            </div>  
          </div>
        </div>
      </div>

      

     
    </Section>
  )
}

export default Services