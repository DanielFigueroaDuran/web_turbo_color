import { companiesData } from "@/lib/data";
import Image from "next/image";
import Slider from "react-slick";

const Banner = () => {
      const setting = {
            dots: false,
            infinte: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            responsive: [
                  {
                        breakpoint: 1023,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              infinte: true,
                              dots: false
                        },
                  },
                  {
                        breakpoint: 768,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              initialSlides: 1
                        },
                  },
                  {
                        breakpoint: 480,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              initialSlides: 1
                        },
                  },
            ],
      };

      return (
            <div className="bg-black text-white py-4 w-full mt-5">
                  <div className="">
                        <Slider {...setting}>
                              {companiesData.map(company => (
                                    <div
                                          className="text-center px-2 cursor-pointer"
                                          key={company.id}
                                    >
                                          <div className="w-[100px] h-[100px] flex items-center mx-auto ">
                                                <Image
                                                      src={company.icon as string}
                                                      alt="icon"
                                                      width={500}
                                                      height={500}
                                                      className="object-cover rounded-sm"
                                                      priority />
                                          </div>
                                    </div>
                              ))}
                        </Slider>
                  </div>
            </div>
      )
}

export default Banner