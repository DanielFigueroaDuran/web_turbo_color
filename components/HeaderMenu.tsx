"use client"
import Link from 'next/link';
import { headerData } from '../contants/index';
import { usePathname } from 'next/navigation';

const HeaderMenu = () => {
      const pathName = usePathname();
      console.log(pathName);
      return (
            <div className='hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold'>
                  {headerData?.map((data) => (
                        <Link
                              href={data?.href}
                              key={data?.title}
                              className={`hover:text-black hoverEffect relative group ${pathName === data?.href && "text-red-800"}`}
                        >
                              {data?.title}
                              <span
                                    className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-black hoverEffect group-hover:w-1/2
                                     group-hover:left-0 ${pathName === data?.href && "w-1/2"}`} /
                              >
                              <span
                                    className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-black hoverEffect group-hover:w-1/2
                                     group-hover:right-0 ${pathName === data?.href && "w-1/2"}`} /
                              >
                        </Link>
                  ))}
            </div>
      )
}

export default HeaderMenu