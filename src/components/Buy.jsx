import React from "react";

import { TbSquareRoundedNumber1Filled } from "react-icons/tb";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import { TbSquareRoundedNumber3Filled } from "react-icons/tb";
import { TbSquareRoundedNumber4Filled } from "react-icons/tb";



const Buy = () => {
  return (
    <section className="pb-12 pt-20 bg-maincolor lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[1000px] text-center lg:mb-20">

              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-color4 sm:text-4xl md:text-[40px]">
                How to buy
              </h2>

            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard

            title="Create a wallet"
            details="Set up a wallet by downloading Metamask or your preferred wallet from the App Store or Google Play Store for free. For desktop users, get the Google Chrome extension by visiting metamask.io"
            icon={
              <TbSquareRoundedNumber1Filled size={500} />
            }
          />
          <ServiceCard
            title="Get BNB"
            details="Acquire BNB as your primary currency from any exchange and transfer it to your wallet"
            icon={
              <TbSquareRoundedNumber2Filled size={500} />

            }
          />
          <ServiceCard
            title="Go to PancakeSwap"
            details="Connect to PancakeSwap by visiting https://pancakeswap.finance/swap in Google Chrome or your browser within the Metamask app. Link your wallet, paste the '0xCEd1Fe76d1Ded7066bc57AbD38D9FFB3C3b4B6FC' token address into PancakeSwap, choose EmperCoin, and confirm the transaction. Sign the wallet signature when prompted by Metamask"
            icon={
              <TbSquareRoundedNumber3Filled size={500} />
            }
          />
          <ServiceCard
            title="Swap '0xCEd1Fe76d1Ded7066bc57AbD38D9FFB3C3b4B6FC' for BNB"
            details="Ensure you're swapping BNB for '0xCEd1Fe76d1Ded7066bc57AbD38D9FFB3C3b4B6FC' without concerns about hefty fees"
            icon={
              <TbSquareRoundedNumber4Filled size={500} />
            }
          />


        </div>
        
      <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="https://pancakeswap.finance/swap?outputCurrency=0xCEd1Fe76d1Ded7066bc57AbD38D9FFB3C3b4B6FC" rel="noreferrer" target="_blank" className="rounded-md bg-color3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-color4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            Buy Now
          </a>


        </div>
        
      </div>
    </section>
  );
};

export default Buy;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 ">
        <div className=" container mb-9 rounded-[20px] bg-backgroundmain p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">

            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-color4 ">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6 text-1xl ">{details}</p>
        </div>
        
      </div>
    </>
  );
};
