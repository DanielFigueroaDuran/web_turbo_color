import Image from "next/image"

const Logo = () => {
      return (
            <div className="flex items-center py-2 px-4 ">
                  <Image
                        src="/assets/logoTurboColorBg.png"
                        alt="Logo"
                        width={200}
                        height={200}
                        priority
                        className="w-full h-full"
                  />
            </div>
      )
}

export default Logo