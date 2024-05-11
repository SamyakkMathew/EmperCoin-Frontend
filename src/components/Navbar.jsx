// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import img4 from '../images/Tlogo.png'

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    return (
        <div className="fixed top-0 w-full z-10">
            <div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-maincolor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="flex flex-row">
                    <img src={img4} className="mx-auto h-14 w-14"/>
                    <Link to="/" className=" ml-4 font-semibold text-4xl p-1 cursor-pointer hover:text-backgroundmain">
                        EmperCoin
                    </Link>
                </div>

                <nav className="hidden md:flex gap-10 font-bold p-1 text-2xl">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-backgroundmain transition-all cursor-pointer"
                    >
                        Home
                    </Link>
                    <Link
                        to="roadmap"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-backgroundmain transition-all cursor-pointer"
                    >
                        Roadmap
                    </Link>
                    <Link
                        to="whitepaper"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-backgroundmain transition-all cursor-pointer"
                    >
                        Whitepaper
                    </Link>
                    <Link
                        to="team"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-backgroundmain transition-all cursor-pointer"
                    >
                        Team
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-backgroundmain transition-all cursor-pointer"
                    >
                        Contact
                    </Link>
                    <div className="">
                        <a href="https://pancakeswap.finance/swap?outputCurrency=0xCEd1Fe76d1Ded7066bc57AbD38D9FFB3C3b4B6FC" rel="noreferrer" target="_blank" className="rounded-md bg-color3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-color4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                            Buy Now
                        </a>


                    </div>
                </nav>

                <div className="flex md:hidden" onClick={handleChange}>
                    <div className=" p-2">
                        <AiOutlineMenu size={22} />
                    </div>
                </div>
            </div>
            <div
                className={` ${menu ? "translate-x-0" : "-translate-x-full"
                    } md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
            >
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-maincolor transition-all cursor-pointer"
                >
                    Home
                </Link>
                <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-maincolor transition-all cursor-pointer"
                >
                    Team
                </Link>
                <Link
                    to="roadmap"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-maincolor transition-all cursor-pointer"
                >
                    Roadmap
                </Link>
                <Link
                    to="whitepaper"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-maincolor transition-all cursor-pointer"
                >
                    Whitepaper
                </Link>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-maincolor transition-all cursor-pointer"
                >
                    Contact
                </Link>
                <div className="">
                        <a href="https://pancakeswap.finance/swap?outputCurrency=0xCEd1Fe76d1Ded7066bc57AbD38D9FFB3C3b4B6FC" rel="noreferrer" target="_blank" className="rounded-md bg-color3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-color4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                            Buy Now
                        </a>


                    </div>
            </div>
        </div>
    );
};

export default Navbar;