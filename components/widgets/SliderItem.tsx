import { cn } from "@/lib/utils"
import Image from "next/image"

interface SliderItemProps {
      itemActive: number,
      id: number,
      image: string,
      brand: string,
      name: string,
      desc: string
};

const SliderItem = ({ itemActive, id, image, brand, name, desc }: SliderItemProps) => {

      return (
            <div>
                  <li className={cn(
                        `absolute inset-0 overflow-hidden after:absolute after:w-full 
                        after:h-full after:left-0 after:bottom-0 after:bg-slider transition-all duration-500 
                        ${itemActive === id ? "opacity-100" : "opacity-0"}`
                  )}
                  >
                        <div className="relative  w-full h-[600px]">
                              <Image src={image} alt="Image" fill className="" priority />
                        </div>
                        <div className="space-y-5 lg:text-center absolute left-[5%] top-[10%] w-[500px] max-w-[80%] z-10">
                              <p className={cn(
                                    `uppercase tracking-[10px] text-white translate-y-[30px] blur-[20px] 
                                    opacity-0 animation-delay-2
                                    ${itemActive === id && 'animate-show-content '}`
                              )}
                              >
                                    {brand}
                              </p>
                              <h2 className={cn(
                                    `text-4xl m-0 text-white font-bold translate-y-[30px]
                                     blur-[20px] opacity-0 animation-delay-5
                                    ${itemActive === id && 'animate-show-content'}`
                              )}
                              >
                                    {name}
                              </h2>
                              <p className={cn(
                                    `text-gray-200 text-sm translate-y-[30px] blur-[20px] opacity-0 
                                     animation-delay-6
                                    ${itemActive === id && 'animate-show-content'}`
                              )}
                              >
                                    {desc}
                              </p>
                        </div>
                  </li>
            </div>
      )
}

export default SliderItem