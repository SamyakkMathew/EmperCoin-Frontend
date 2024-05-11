import React from "react";

import openpdf from "../assets/files/whitepaper.pdf";





export default function Whitepaper() {




    return (
        <div className="mx-auto max-w-2xl py-20 ">
            <div className=" overflow-hidden bg-backgroundmain py-24 sm:py-32">


                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Whitepaper
                    </h1>
                    <p className="mt-6 text-2xl leading-8 text-gray-600 text-justify">
                    EmperMarket is an NFT marketplace where startups can launch NFT collections to raise funds. Investors use EmperCoin to purchase NFTs, supporting startups and gaining exclusive perks in return. Read white paper to know more!
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href={openpdf} rel="noreferrer" target="_blank" className="rounded-md bg-color3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-maincolor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                            Read Now
                        </a>


                    </div>
                </div>
            </div>
        </div>
    )
}
