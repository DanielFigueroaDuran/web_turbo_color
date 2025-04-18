"use client"
import { useState } from "react"
import Link from "next/link"
import { AlignJustify, X } from 'lucide-react';
import Logo from "@/components/Logo";
import { headerData } from '../../contants/index';
import { usePathname } from 'next/navigation';
import HeaderMenu from "@/components/HeaderMenu";


const Navbar = () => {
      const [isClick, setIsClick] = useState(false);

      const toggleNavbar = (): void => {
            setIsClick(!isClick);
      };

      const closeMenu = (): void => {
            setIsClick(false);
      };

      return (
            <>
                  <header className="border-b border-b-gray-400 py-4">
                        {/* Desktop navigation section */}
                        <nav className="container flex items-center justify-between py-4">
                              {/* Nav Logo */}
                              <div className="px-6 h-16">
                                    <Link href='/' className="flex items-center">
                                          <Logo />
                                    </Link>
                                    {/* <div className="hidden md:block"> */}
                              </div>
                              {/* Nav Link */}
                              <div className="hidden md:flex">
                                    <ul className='flex items-center gap-10'>
                                          <HeaderMenu />
                                    </ul>
                              </div>

                              {/* Menu button */}
                              <div className="md:hidden flex items-center">
                                    {!isClick ?
                                          (
                                                <AlignJustify size={25} onClick={toggleNavbar} />
                                          )
                                          : (
                                                <X size={25} onClick={toggleNavbar} />
                                          )
                                    }
                              </div>
                        </nav>
                        {/* Responsive navigation section */}
                        <div className={`${isClick ? 'translate-x-0' : '-translate-x-full'} md:hidden  flex flex-col 
                  absolute bg-black text-white z-10 left-0 top-14 list-none font-medium text-2xl text-center
                  mt-18 pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                              <HeaderMenu
                                    closeMenu={closeMenu}
                              />
                        </div>
                  </header>


                  {/* <div className={`    `}>
                        {headerData?.map((data) => {
                              return (
                                    <li
                                          className='text-lg font-medium hover:border-2 border-black px-3 rounded-full transition-all'
                                          key={data.title}
                                          onClick={closeMenu}
                                    >
                                          <Link href={data.href} >{data.title}</Link>
                                    </li>
                              )
                        })
                        }
                  </div> */}
            </>
      )
}

export default Navbar