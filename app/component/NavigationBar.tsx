'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from 'next/image'
import Logo from '../../public/logo.png'


const NavigationBar: React.FC = () => {

    const currentPath = usePathname();
    const isActive = (path: string) => (currentPath === path ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]');
    const isActiveMobile = (path: string) => (currentPath === path ? 'text-[#FFFFFF] font-bold' : 'text-[#FFFFFF]');

    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
  return (
    <nav className="bg-transparent w-full lg:h-[]  justify-between items-center lg:px-10 px-2 py-5 top-0 fixed md:static z-10 flex h-[87px] ">
    {/* LOGO AREA */}
    <div className="left-[70px]">
        <Image
            src={Logo}
            alt="Logo"
            width={48}
            height={24}
            className="top-6"
        />
    </div>
    
    {/* LIST AREA */}
    <ul className=" justify-center  items-center lg:space-x-6 md:space-x-2 bg-transparent  px-2 py-2 text-[#FFFFFF] hidden md:flex sm:hidden lg:w-[711px] font-[Figtree]">
        <li><Link href='/' className={`${isActive('/')} hover:text-green-500 duration-500 transition-colors lg:text-4  text-4 `} >Models</Link></li>
        <li><Link href='/Pricing'className={`${isActive ('/About')} hover:text-green-500 duration-500 transition-colors lg:text-4 text-4 `} >Pricing</Link></li>
        <li><Link href='/AboutUs'className={`${isActive ('/About')} hover:text-green-500 duration-500 transition-colors lg:text-4 text-4 `} >About Us</Link></li>
        <li><Link href='/ContactUs'className={`${isActive ('/About')} hover:text-green-500 duration-500 transition-colors lg:text-4 text-4 `} >Contact Us</Link></li>
        <li><Link href='/CustomModels'className={`${isActive ('/ContactUs')} hover:text-green-500 duration-500 transition-colors lg:text-4 text-4 `} >Custom Models</Link></li>
    </ul>
    
    <Link href="/ContactUs">
        <div className="flex gap-3">
            <button className="hidden md:flex bg-transparent border-1 rounded-[4px] w-[88px] h-[37px] text-[#FFFFFF]  justify-center items-center p-[10px] text-[14px] font-[Figtree]">
                Login
            </button>
            <button className="hidden md:flex bg-white w-[128px] h-[37px] rounded-[4px] border-1 p-[10px] justify-center items-center gap-1 text-black text-[14px] font-[Figtree]">
                Get Started Now
            </button>
        </div>
    </Link>

     {/* MOBILE SCREENS NAVIGATION HAMBURGER MENU  */}

    <div onClick={handleMenu} className="lg:hidden md:hidden absolute right-7">
       <FaBars size={30} className="text-#FFFFFF]" />
    </div>

    {/* MOBILE SCREENS NAVIGATION  */}

    <div className={
        openMenu
        ? "fixed top-16 right-0 w-[214px] h-[204] p-5 bg-[#0037FF] border border-zinc-100 rounded-xl md:hidden ease-in duration-500"
        : "fixed right-[-100%] top-16 p-5 ease-in duration-500"
    }>
        <div>
            <ul className="flex-col items-center space-y-3 font-[Figtree] ">
                <li><Link href='/' className={`${isActiveMobile('/')} hover:text-green-500 duration-500 transition-colors lg:text-4  text-4 `} >Models</Link></li>
                <li><Link href='/Pricing'className={`${isActiveMobile('/About')} hover:text-green-500 duration-500 transition-colors lg:text-4 text-4 `} >Pricing</Link></li>
                <li><Link href='/AboutUs'className={`${isActiveMobile('/About')} hover:text-green-500 duration-500 transition-colors lg:text-4 text-4 `} >About Us</Link></li>
                <li><Link href='/ContactUs'className={`${isActiveMobile('/About')} hover:text-green-500 duration-500 transition-colors lg:text-4 text4 `} >Contact Us</Link></li>
                <li><Link href='/CustomModels'className={`${isActiveMobile('/ContactUs')} hover:text-green-500 duration-500 transition-colors lg:text-4 text-4 `} >Custom Models</Link></li>
            </ul>

        </div>

    </div>
    

</nav>
    
  )
}

export default NavigationBar