import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

const Hero = () => {
      return (
            <div className="max-w-screen-xl mx-auto px-10 py-10 flex flex-col justify-center lg:flex-row lg:justify-between items-center">
                  {/* Hero content section */}
                  <div className="space-y-8">
                        <h1
                              data-aos='fade-up'
                              data-aos-delay='600'
                              className="text-5xl w-full md:w-3/4 font-bold leading-tight"
                        >
                              Grow Your Eusiness
                              <BsArrowRightCircle className=" inline ml-5" />
                        </h1>
                        <p
                              data-aos='fade-up'
                              data-aos-delay='800'
                              className="w-full md:w-3/4"
                        >
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                              Odio fugiat ipsam nobis amet animi accusantium
                              beatae libero assumenda nesciunt! Distinctio blanditiis
                              expedita quod laborum nostrum voluptates laboriosam suscipit
                              rerum asperiores.
                        </p>
                        <button
                              data-aos='fade-up'
                              data-aos-delay='1000'
                              className="bg-blue-400 px-6 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0)] rounded-md cursor-pointer"
                        >
                              Get Started
                        </button>
                  </div>
                  {/* Hero img section */}
                  <div
                        data-aos='zoom-in'
                        className="w-full flex items-center justify-center lg:w-2/4 mt-14
                   lg:mt-0 ring-8 lg:ring-[15px] border-2 border-black rounded-md"
                  >
                        <Image
                              src="/assets/img_cromauto.jpg"
                              alt="Logo"
                              width={100}
                              height={100}
                              priority
                              className="w-full h-full roumded-md"
                        />
                  </div>
            </div>
      )
}

export default Hero