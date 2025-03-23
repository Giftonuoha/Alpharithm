import React from 'react'
import NavigationBar from './NavigationBar'
import LogoCarousel from './LogoCarousel'

const Hero = () => {
  return (
    <section className=" md:h-[780px] h-[780px] flex flex-col bg-gradient-to-b from-[#04142B] via-[#04142B] to-[#0037FF] text-white relative">
        <header>
           <NavigationBar/>
        </header>
        <div className='md:w-[860px] md:h-[384px] flex flex-col  bg-transparent md:mt-6 mt-34 mx-auto md:p-0 p-4 '>
            <div className='md:w-[636px] md:h-[210px] mx-auto items-center bg-transparent justify-center text-center font-bold mt-0'>
                <h2 className=' text-[#7191FF] text-4 font-[Plus_Jakarta_Sans] '>
                    Leverage on Automation
                </h2>

                <div className='lg:w-[636px] md:h-[164px]' >
                    <p className='sm:text-[76px] leading-[82px] font-[Figtree]'>
                        AI Models for Business Solutions 
                    </p>
                </div>
            </div>
            <div className='lg:w-[860px] md:w-[760px] md:h-[76px] mb-5 '>
                <p className='font-medium md:text-[22px] leading-[38px] text-center font-[Plus_Jakarta_Sans]'>
                    Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs
                </p>

            </div>

            <button className='md:w-[192px] md:h-[50px] rounded-[12px] pt-[14px] pr-[26px] pb-[14px] pl-[26px] bg-[#FFFFFF] text-[#000] mx-auto font-[Figtree] text-[18px]'>
                Get Started Now
            </button>

        </div>

        <div className='bg-[#FFFFFF] absolute mt-[628px] w-full h-[152px]'>
            <div className='mx-auto  items-center text-center'>
                <p className='font-[Plus_Jakarta_Sans] text-[#667085] font-medium text-4 mt-8 mb-5 mx-auto'>
                    Join 4,000+ companies already growing
                </p>
            </div>
            <LogoCarousel/>
        </div>

    </section>
  )
}

export default Hero