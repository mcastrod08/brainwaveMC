import React, { useRef } from 'react'
import Section from './Section'
import { curve, heroBackground, robot } from '../assets'
import Button from './Button'
import { BackgroundCirclesHero, BottomLine, Gradient } from './design/Hero'
import { heroIcons } from '../constants'
import { ScrollParallax } from 'react-just-parallax'
import Generating from "./Generating";
import Notification from './Notification'

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
       <BackgroundCirclesHero/>
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-[4rem]
          md:mb-20 lg:mb:[6rem] mt-20">
          <h1>Explore the Possibilities of 
            <h1>AI Chatting with</h1>
            <span className='inline-block relative'>
              Brainwave
              <img src={curve}
                className="absolute top-full left-0 w-full xl:mt-2"
                width={100}
                height={28}
              />
              
            </span>
          </h1> 
          <p className="mt-20 max-w-2xl mx-auto mb-6 text-gray-400">Unleash the power of AI within Brainwave. Upwrade your productivity with Brainwave, the open AI chat app.</p>
          <Button white href="/pricing">
            Get started
          </Button>  
        </div>
        
        
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"> 
          <div className="relative z-0 p-0.5 rounded-2xl bg-conic from-gray-600 to-[#AC6AFF] to-50%">
            <div className="relative bg-[#0E0C15] rounded-[1rem] z-0 "> 
              <div className="h-[1.4rem] bg-[#43435C] rounded-t-[0.9rem] "/> 
              <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'><BackgroundCirclesHero/>
                <img 
                  src={robot}
                  className="relative  w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  height={490}
                  width={1024}
                  alt="hero"
                />
                <ScrollParallax isAbsolutelyPositioned>
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                </ScrollParallax>
                
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-gray-600/50 border backdrop-blur border-[#AC6AFF]  rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon}/>
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" title="Code generation"/>
                </ScrollParallax>
              </div>
              
            
               
            
            </div>
            <Gradient/>
          </div>
          
        </div>
        
      </div>
    </Section>
  )
}

export default Hero