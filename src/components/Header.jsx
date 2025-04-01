import React, { useState } from 'react'
import { brainwave } from "../assets"
import { navigation } from "../constants";

import { useLocation  } from 'react-router-dom';
import Button from './Button';
import MenuSvg from "../assets/svg/MenuSvg"
import HamburgerMenu from './design/HamburgerMenu';


const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false)
  
  const toggleNavigation = () => {
    if(openNavigation) {
      setOpenNavigation(false);
    }
    else {
      setOpenNavigation(true)
    }
  }
  return (
    <div className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm
      ${openNavigation ? 'bg-[#0E0C15]' : 'bg-[#0E0C15]'}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="brainwave-logo"/>
        </a>

        <nav className={`fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto  bg-gray-300
            ${openNavigation ? 'flex' : 'hidden'}`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
        
              {navigation.map((item) => (
                <a 
                  key={item.id} 
                  href={item.url}
                  className={`block relative text-2xl uppercase transition-colors hover:text-[#AC6AFF] 
                    ${item.onlyMobile ? "lg:hidden" : "" } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold
                    ${item.url === pathname.hash ? "z-2 lg:text-white" : "lg:text-[#848188]"}`}
                    
                >
                  {item.title}
                </a>
              ))}
              <HamburgerMenu/>
          </div>

        </nav>

        <a className="button hidden mr-8 lg:text-[#848188] transition-colors hover:text-white lg:block">
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
            Sign In
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg/>
        </Button>
        
      </div>
    </div>
  )
}

export default Header