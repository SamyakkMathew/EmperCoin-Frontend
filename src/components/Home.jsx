import back from '../images/Default.png'
import React, { useState } from 'react';

const Home =()=> {
    const [backgroundImage, setBackgroundImage] = useState('url("https://i.ibb.co/W58Kpbg/White-Yellow-Minimalist-Beauty-Hair-Salon-Sale-Banner.png")');
    const [title, setTitle] = useState('Welcome to EmperCoin');
    const [content, setContent] = useState('Nurturing Innovations with NFTs');

    const change1 = () => {
        setBackgroundImage('url("https://i.ibb.co/MhbjnZp/business.png")');
        setTitle('Empower Your Growth');
        setContent("Businesses benefit from EmperMarket by selling NFTs to raise money for their growth. It's like a new way of getting support from a wider group of investors");
      };
    
      const change2 = () => {
        setBackgroundImage('url("https://i.ibb.co/zGQkMn4/investor.png")');
        setTitle('Empower Your Investments');
        setContent('Investors enjoy special perks and benefits, such as exclusive access and rewards, by buying verified businesses NFT on EmperMarket');
      };
    

  return (
   // <div className =' bg-[url("https://i.ibb.co/W58Kpbg/White-Yellow-Minimalist-Beauty-Hair-Salon-Sale-Banner.png")] bg-center bg-cover' >
   <div className='bg-center bg-cover h-screen' style={{ backgroundImage}} >
       
       
      

      <div className ="  px-6 pt-14 lg:px-8 " >
        
          
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {content}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                
                className="rounded-md bg-maincolor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-color4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " onClick={change1}>
                For Business
              </button>
              <button
                
                className="rounded-md bg-maincolor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-color4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "  onClick={change2}>
                For Investor
              </button>
              
            </div>
          </div>
        </div>
        
        </div>
    </div>
    
    
  )
}
export default Home
