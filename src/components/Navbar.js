import React, {useState} from 'react'
import logo from './../img/ar_logo.png';

const MenuLink = ({description, idSection}) => {
    return (
        <div className="md:mx-4 md:w-max md:bg-blue px-3 md:py-2 md:text-yellow md:leading-5 md:font-medium md:cursor-pointer rounded-lg md:hover:text-black md:hover:bg-yellow m-2 bg-yellow text-blue py-4 w-72 text-center">
            <a className="leading-5 font-medium cursor-pointer" href={'#' + idSection}>{description}</a>
        </div>
    )
}

const Navbar = () => {
    const [mobileClass, setMobileClass] = useState('pb-4 mt-4 md:hidden hidden');
    const [menuStatus, setMenuStatus] = useState(false);

    const openMenuOnMobile = () => {
        if (!menuStatus) {
            setMobileClass('pb-4 mt-4 md:hidden block');
            setMenuStatus(true);
        } else {
            setMobileClass('pb-4 mt-4 md:hidden hidden');
            setMenuStatus(false);
        }
    }

  return (
      <div className="sticky-navbar bg-blue w-screen">
        <div className="md:w-container mx-auto px-4 sm:px-6 w-full">
            <div className="flex margin-auto px-8 h-16 items-center justify-between md:justify-start">
                <img src={logo} alt="logo akademii rozwoju" className="h-logo mr-logo"/>
                <div className="flex flex-row items-center md:flex hidden">
                    <MenuLink description={'Oferta'} idSection="oferta"/>
                    <MenuLink description={'O Nas'} idSection="o_nas"/>
                </div>
                <div className="md:hidden text-white">
                    <svg onClick={openMenuOnMobile} className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className={mobileClass}>
            <div className="flex flex-col items-center ">
                <MenuLink description={'Oferta'} idSection="oferta"/>
                <MenuLink description={'O Nas'} idSection="o_nas"/>
            </div>
        </div>


      </div>
  )
}

export default Navbar
