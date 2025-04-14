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
      const pathName = usePathname();

      const toggleNavbar = (): void => {
            setIsClick(!isClick);
      };

      const closeMenu = (): void => {
            setIsClick(false);
      };

      return (
            <>
                  <header className="border-b border-b-gray-400 py-4">
                        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                              <div className="flex items-center px-6 justify-between h-16">
                                    <div className="flex items-center">
                                          <div className="">
                                                <Logo />
                                          </div>
                                    </div>
                                    {/* <div className="hidden md:block"> */}
                                    <div className="hidden md:flex">
                                          <HeaderMenu />
                                    </div>
                                    <div className="md:hidden flex items-center"
                                    >
                                          <button
                                                className="inline-flex items-center justify-center p-2 rounded-md text-white
                                                  hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
                                                onClick={toggleNavbar}
                                          >
                                                {isClick ?
                                                      (
                                                            <AlignJustify className="h-6 w-6 text-black" />
                                                      )
                                                      : (
                                                            <X className="h-6 w-6 text-black" />
                                                      )
                                                }
                                          </button>
                                    </div>
                              </div>
                        </nav>
                  </header>
                  {/* Responsive navigation section */}

                  <div className={`${isClick ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col 
                  absolute bg-black text-white z-10 left-0 top-14 list-none font-medium text-2xl text-center
                  mt-10 pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}>
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
                  </div>
            </>
      )
}

export default Navbar