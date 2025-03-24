import React from 'react'
import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from './components/Button'
import Header from './components/Header'
import Section from './components/Section'
import Hero from './components/Hero'
import Benefits from './components/Benefits'

const App = () => {
  
  return (
    <>
      <div className="pt-[4.75rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefits/>
      </div>
    
    </>
  )
}

export default App