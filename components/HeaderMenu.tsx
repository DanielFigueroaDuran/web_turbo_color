"use client"
import Link from 'next/link';
import { headerData } from '../contants/index';
import { usePathname } from 'next/navigation';

const HeaderMenu = () => {
      const pathName = usePathname();
      // <Link
      //       href={data?.href}
      //       key={data?.title}
      //       className={`hover:text-black hoverEffect relative group ${pathName === data?.href && "text-red-800"}`}
      // >
      //       {data?.title}
      //       <span
      //             className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-black hoverEffect group-hover:w-1/2
      //              group-hover:left-0 ${pathName === data?.href && "w-1/2"}`} /
      //       >
      //       <span
      //             className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-black hoverEffect group-hover:w-1/2
      //              group-hover:right-0 ${pathName === data?.href && "w-1/2"}`} /
      //       >
      // </Link>


      return (
            // <div className='hidden md:inline-flex  w-1/3 items-center gap-5 text-sm capitalize font-semibold'>
            <ul className='flex items-center gap-10'>

                  {headerData?.map((data) => {
                        return (
                              <li
                                    className='text-lg font-medium hover:border-2 border-black px-3 rounded-full transition-all'
                                    key={data.title}
                              >
                                    <Link href={data.href} >{data.title}</Link>
                              </li>
                        )
                  })
                  }
            </ul>
      )
}

export default HeaderMenu