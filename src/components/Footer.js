import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/Facebook.png'
import instagram from '../img/social/Instagram.png'
import email from '../img/social/Email.png'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import Title from "../UI/Title";

const MenuFooter = ({name, link}) => {
    return (
        <div className="h-6 m-2 mx-6 text-sm font-medium">
            <a href={`#${link}`}>{name}</a>
        </div>
    );
};

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer bg-blue text-white mt-12">
        <section className="m-auto md:w-container p-4">
            <div className="flex flex-col w-full">
                <div className="flex md:flex-row flex-col content-center justify-center text-center md:text-left">
                    <MenuFooter name={'Oferta'} link={'oferta'}/>
                    <MenuFooter name={'O Nas'} link={'o_nas'}/>
                    <MenuFooter name={'Polityka Prywatności'}/>
                </div>
                <div className="flex flex-row content-center justify-center">
                    <a title="facebook" href="https://facebook.com">
                        <img
                            className="w-8 h-8 m-4 text-white"
                            src={facebook}
                            alt="Facebook"
                        />
                    </a>
                    <a title="instagram" href="https://instagram.com">
                        <img
                            className="w-8 h-8 m-4 text-white"
                            src={instagram}
                            alt="Instagram"
                        />
                    </a>
                    <a title="email" href="">
                        <img
                            className="w-8 h-8 m-4 text-white"
                            src={email}
                            alt="email"
                        />
                    </a>
                </div>
            </div>
            <div className="flex justify-center text-xs font-bold mt-4">
                <span>©️ Stowarzyszenie Widzących Więcej</span>
            </div>
        </section>
      </footer>
    )
  }
}

export default Footer
//
// <div className="content has-text-centered">
//     <img
// src={logo}
// alt="Kaldi"
// style={{ width: '14em', height: '10em' }}
// />
// </div>
// <div className="content has-text-centered has-background-black has-text-white-ter">
//   <div className="container has-background-black has-text-white-ter">
//     <div style={{ maxWidth: '100vw' }} className="columns">
//       <div className="column is-4">
//         <section className="menu">
//           <ul className="menu-list">
//             <li>
//               <Link to="/" className="navbar-item">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="navbar-item" to="/about">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link className="navbar-item" to="/products">
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link className="navbar-item" to="/contact/examples">
//                 Form Examples
//               </Link>
//             </li>
//             <li>
//               <a
//                   className="navbar-item"
//                   href="/admin/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//               >
//                 Admin
//               </a>
//             </li>
//           </ul>
//         </section>
//       </div>
//       <div className="column is-4">
//         <section>
//           <ul className="menu-list">
//             <li>
//               <Link className="navbar-item" to="/blog">
//                 Latest Stories
//               </Link>
//             </li>
//             <li>
//               <Link className="navbar-item" to="/contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </section>
//       </div>
//       <div className="column is-4 social">

//       </div>
//     </div>
//   </div>
// </div>
