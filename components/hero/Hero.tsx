import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

const Hero = () => {
      return (
            <div
                  className=" min-h-[70vh]  mx-auto container text-center  flex flex-col items-center justify-center 
            lg:-mt-10 lg:flex-row lg:justify-between"
            >
                  {/* Hero content section */}
                  <div className="flex flex-col items-center justify-center w-4/5 space-y-8">
                        <h1
                              data-aos='fade-up'
                              data-aos-delay='600'
                              className="text-4xl  w-full md:w-3/4 font-bold leading-tight"
                        >
                              INNOVACIÓN Y TECNOLOGÍA
                              <BsArrowRightCircle className=" inline ml-5" />
                        </h1>
                        <p
                              data-aos='fade-up'
                              data-aos-delay='800'
                              className="w-full text-justify text-lg  md:w-3/4"
                        >
                              Es ya una realidad que responde a una apuesta ambiciosa y determinada: estar cerca
                              del mercado, aportar valor, convertirnos en una referencia por nuestra especialización
                              y capacidad en toda su cadena de valor, tanto usuario final como distribuidores.
                        </p>

                  </div>
                  {/* Hero img section*/}
                  <div
                        data-aos='zoom-in'
                        className="flex justify-center w-[300px] sm:w-[350px] md:w-[350px] lg:w-[300px] mt-14 lg:mt-0 
             ring-8 lg:ring-[5px] rounded-lg"
                  >
                        <Image
                              src="/assets/cromauto.png"
                              alt="Logo"
                              width={500}
                              height={500}
                              className=" h-auto rounded-md"
                              priority
                        />
                  </div>
            </div>
      )
}

export default Hero