import Image from "next/image"
import Link from "next/link"

const Logo = () => {
      return (
            <div>
                  <Link href="/">
                        <Image
                              src="/logoTurboColor-removebg.png"
                              alt="Logo"
                              width={100}
                              height={100}
                              priority
                              className="w-full h-auto "
                        />
                  </Link>
            </div>
      )
}

export default Logo