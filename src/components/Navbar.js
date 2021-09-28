import React from 'react'
import logo from './../img/ar_logo.png';

const MenuLink = ({description}) => {
    return (
        <div className="mx-4 px-3 py-2 text-yellow leading-5 font-medium cursor-pointer rounded-lg hover:text-black hover:bg-yellow">
            <span>{description}</span>
        </div>
    )
}

const Navbar = () => {
  return (
      <div className="sticky-navbar bg-blue w-screen">
        <div className="w-container mx-auto px-4 sm:px-6">
            <div className="flex margin-auto px-8 h-16 items-center">
                <img src={logo} alt="logo akademii rozwoju" className="h-logo mr-logo"/>
                <div className="flex flex-row items-center">
                    <MenuLink description={'Oferta'}/>
                    <MenuLink description={'O Nas'}/>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Navbar
