"use client"
import Link from 'next/link';
import { headerData } from '../lib/index';

type FuntionTypeProps = {
      closeMenu?: () => void
};

const HeaderMenu = ({ closeMenu }: FuntionTypeProps) => {

      return (
            <>
                  {headerData?.map((data) => {
                        return (
                              <li
                                    className='text-gray-500 text-lg font-medium hover:border-2 hover:text-black border-black px-3 rounded-full transition-all'
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