import React from 'react'

import Section from './Section'
import { signatureImg } from '../assets'

const Footer = () => {
  return (
    <Section className="w-full flex justify-center gap-3 bg-neutral-950">
      <p className='text-white'>Frontend Developer - María Castro - 2025 </p>
      <img src={signatureImg} alt="signature" width={100} className="-mt-[1rem]"/>
    </Section>
  )
}

export default Footer