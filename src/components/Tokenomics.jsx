// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
//w-full bg-maincolor p-5 px-10 md:px-32
//grid grid-cols-3 text-center
const Tokenomics = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
           <div className='bg-maincolor py-10 sm:py-26'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>

                <div className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
                    <div>
                        <h1 className='font-extrabold text-4xl'>
                            {counterOn && <CountUp start={0} end={21000000} duration={2} delay={0} /> }
                            
                        </h1>
                        <p className='font-semibold text-1xl'>Total Supply</p>
                    </div>
                    <div>
                    <h1 className='font-extrabold text-4xl  '>
                            {counterOn && <CountUp start={0} end={840000} duration={2} delay={0} /> }
                            
                        </h1>
                        <p className='font-semibold text-1xl'>Current Supply</p>
                    </div>
                    <div>
                    <h1 className='font-extrabold text-4xl'>
                            {counterOn && <CountUp start={0} end={7} duration={2} delay={0} /> }
                            %
                        </h1>
                        <p className='font-semibold text-1xl'>Giveaway</p>
                    </div>
                </div>
            </div>
            </div>
            

        </ScrollTrigger>

    )
}
export default Tokenomics
