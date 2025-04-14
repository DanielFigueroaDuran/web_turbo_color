import Image from "next/image"
import Link from "next/link"

const Logo = () => {
      return (
            <div className=" rounded-sm py-2 px-4 border-2 border-gray-400  shadow-2xl ">
                  <Link href="/">
                        <Image
                              src="/logoTurboColor-removebg.png"
                              alt="Logo"
                              width={100}
                              height={100}
                              priority
                              className="w-full h-auto"
                        />
                  </Link>
            </div>
      )
}

export default Logo