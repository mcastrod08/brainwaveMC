import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogos = () => {
  return (
    <div className='hidden relative z-10 mt-20 lg:block'>
      <h5 className='tagline mb-6 text-center text-gray-400/50'>Helping people create beautiful content</h5>
      <ul className='flex'>
        {companyLogos.map((logo, index) => (
          <li className="items-center flex justify-center flex-1 h-[8.5rem]" key={index}>
            <img src={logo} width={134} height={28} alt='logo'/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyLogos