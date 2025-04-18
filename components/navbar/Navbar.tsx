"use client"
import { useState } from "react"
import Link from "next/link"
import { MdCancel } from "react-icons/md";
import { RiMenuUnfoldLine } from "react-icons/ri";
import Logo from "@/components/Logo";
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
                        <nav className="container flex items-center justify-between py-4 px-4">
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
                                                <RiMenuUnfoldLine size={30} onClick={toggleNavbar} />
                                          )
                                          : (
                                                < MdCancel size={35} onClick={toggleNavbar} />
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
            </>
      )
}

export default Navbar