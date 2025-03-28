import React from 'react'
import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from './components/Button'
import Header from './components/Header'
import Section from './components/Section'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Services from './components/Services'

const App = () => {
  
  return (
    <>
      <div className="pt-[4.75rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <Services/> 
      </div>
    
    </>
  )
}

export default App