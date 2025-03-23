'use client';
import {useEffect, useRef} from 'react'
import Image from 'next/image';

const logos: string[] = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
  
];

const LogoCarousel: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let scrollAmount = 0;

        const scrollLogos = () => {
            if (scrollContainer) {
                scrollAmount += 1;
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                scrollContainer.scrollLeft = scrollAmount;
            }
        };

        const interval = setInterval(scrollLogos, 20);

        return () => clearInterval(interval);
    }, []);

  return (
    <div className='overflow-hidden '>
        <div ref={scrollContainerRef} className='sm:flex space-x-11 justify-between animate-scroll w-max items-center hidden '>
            {logos.concat(logos).map((logo, index) => (
                <div key={index} className='min-w-max'>
                    <Image
                        src={logo}
                        alt={`Logo ${index}`}
                        width={150}
                        height={120}
                        className='object-contain'
                    />

                </div>
            ))

            }
        </div>

        {/* MOBILE LOGOS */}

        <div ref={scrollContainerRef} className='sm:hidden space-x-8 animate-scroll w-max items-center flex flex-wrap'>
            {logos.concat(logos).map((logo, index) => (
                <div key={index} className='min-w-max flex overflow-x-auto flex-wrap items-center justify-center'>
                    <Image
                        src={logo}
                        alt={`Logo ${index}`}
                        width={150}
                        height={120}
                        className='object-contain w-[100px] h-[100px] flex flex-wrap'
                    />

                </div>
            ))

            }
        </div>


    </div>
  )
}

export default LogoCarousel
