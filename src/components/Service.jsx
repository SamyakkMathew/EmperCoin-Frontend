import React from "react";
import { FaCoins } from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import { IoBriefcase } from "react-icons/io5";

const Service = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[1000px] text-center lg:mb-20">
              
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-color4 sm:text-4xl md:text-[40px]">
                What is EmperMarket
              </h2>
              <p className=" text-1xl text-body-color dark:text-dark-6 text-justify">
              EmperMarket is a cutting-edge NFT marketplace. It serves as a platform for connecting entrepreneurs and investors in a seamless, secure, 
              and transparent ecosystem. Built on the Binance blockchain and fueled by EmperCoin, EmperMarket is at the forefront of revolutionizing how ideas are funded and partnerships are formed in the world of entrepreneurship
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Coin"
            details="EmperCoin is used to purchase NFTs on EmperMarket, facilitating investment in startups"
            icon={
              <FaCoins size={500}/>
            }
          />
          <ServiceCard
            title="Investors"
            details="Investors enjoy exclusive perks and contribute to the growth of startups by buying NFTs with EmperCoin"
            icon={
              <FcBusinessman size={500}/>
              
            }
          />
          <ServiceCard
            title="Business"
            details="Businesses on EmperMarket raise funds by selling NFTs, gaining support from investors and fostering growth"
            icon={
              <IoBriefcase size={500} />
            }
          />
          <ServiceCard
            title="Coin Holders"
            details="EmperCoin holders access exclusive perks and contribute to the success of startups through NFT investments"
            icon={
              <RiHandCoinFill size={500} />
            }
          />
          
        
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 ">
        <div className="mb-9 rounded-[20px] bg-maincolor p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-3xl font-semibold text-dark dark:text-color4 ">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6 text-2xl text-justify">{details}</p>
        </div>
      </div>
    </>
  );
};
