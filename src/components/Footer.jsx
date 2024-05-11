import React from 'react'
import logo from '../images/Tlogo.png'

import { RiInstagramFill } from "react-icons/ri";


import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";







const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center">
              <img src={logo} className="h-12 me-3" alt="EmperCoin Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EmperCoin</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#whitepaper" className="hover:underline">Whitepaper</a>
                </li>
                <li className="mb-4">
                  <a href="#roadmap" className="hover:underline">Roadmap</a>
                </li>
                <li>
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0xCEd1Fe76d1Ded7066bc57AbD38D9FFB3C3b4B6FC" className="hover:underline">Buy Coin</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://twitter.com/empercoin" target='_blank'  rel='noreferrer' className="hover:underline ">Twitter</a>
                </li>
                <li className="mb-4">
                  <a href="https://t.me/empercoin" target='_blank'  rel='noreferrer' className="hover:underline">Telegram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/empercoin" target='_blank'  rel='noreferrer' className="hover:underline">Facebook</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">EmperCoin</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/empercoin" target='_blank'  rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaFacebookF  size={26}/>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <RiInstagramFill size={26} />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="https://twitter.com/empercoin" target='_blank'  rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <FaTwitter size={26} />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="https://t.me/empercoin" target='_blank'  rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <FaTelegramPlane size={26}/>

              <span className="sr-only">Telegram account</span>
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
