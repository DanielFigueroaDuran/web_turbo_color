import Image from "next/image"

const Logo = () => {
      return (
            <div className="flex item-center rounded-sm py-2 px-4 border-2 border-gray-400  shadow-2xl ">
                  <Image
                        src="/assets/logoTurboColor-removebg.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        priority
                        className="w-full h-auto"
                  />
            </div>
      )
}

export default Logo