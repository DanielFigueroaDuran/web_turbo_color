"use client"
import Link from 'next/link';
import { headerData } from '../contants/index';

type FuntionTypeProps = {
      closeMenu?: () => void
};

const HeaderMenu = ({ closeMenu }: FuntionTypeProps) => {

      return (
            // <div className='hidden md:inline-flex  w-1/3 items-center gap-5 text-sm capitalize font-semibold'>
            <>
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
            </>

      )
}

export default HeaderMenu