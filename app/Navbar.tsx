"use client"
import { useState } from "react"
import Link from "next/link"
import { AlignJustify, X } from 'lucide-react';
import Logo from "@/components/Logo";


const Navbar = () => {
      const [isClick, setIsClick] = useState(false);

      const toggleNavbar = (): void => {
            setIsClick(!isClick);
      };

      return (
            <>
                  <nav className="">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                              <div className="flex items-center px-6 justify-between h-16 border-2">
                                    <div className="flex items-center">
                                          <div className="flex-shrink-0">
                                                <Link href="/" className="text-white"><Logo /></Link>
                                          </div>
                                    </div>
                                    <div className="hidden md:block">
                                          <div className="ml-4 flex items-center space-x-4">
                                                <Link
                                                      href="/"
                                                      className="text-black hover:bg-black hover:text-black rounded-lg p-2"
                                                >
                                                      Home
                                                </Link>
                                                <Link
                                                      href="/"
                                                      className="text-black hover:bg-white hover:text-black rounded-lg p-2"
                                                >
                                                      About
                                                </Link>
                                                <Link
                                                      href="/"
                                                      className="text-black hover:bg-white hover:text-black rounded-lg p-2"
                                                >
                                                      Services
                                                </Link>
                                                <Link
                                                      href="/"
                                                      className="text-black hover:bg-white hover:text-black rounded-lg p-2"
                                                >
                                                      Contact
                                                </Link>
                                          </div>
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
                        </div>
                        {!isClick && (
                              <div className="md:hidden">
                                    <div className="px-2 pt-2 space-y-1 sm:px-3 ">
                                          <Link
                                                href="/"
                                                className="text-black block hover:bg-white hover:text-black rounded-lg p-2"
                                          >
                                                Home
                                          </Link>
                                          <Link
                                                href="/"
                                                className="text-black block hover:bg-white hover:text-black rounded-lg p-2"
                                          >
                                                About
                                          </Link>
                                          <Link
                                                href="/"
                                                className="text-black block hover:bg-white hover:text-black rounded-lg p-2"
                                          >
                                                Services
                                          </Link>
                                          <Link
                                                href="/"
                                                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                                          >
                                                Contact
                                          </Link>
                                    </div>
                              </div>
                        )
                        }
                  </nav>
            </>
      )
}

export default Navbar