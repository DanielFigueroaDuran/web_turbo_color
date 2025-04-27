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
            <div className="bg-black text-white py-4 w-full">
                  <div className="">
                        <Slider {...setting}>
                              {companiesData.map(company => (
                                    <div
                                          className="flex text-center space-x-3"
                                          key={company.id}
                                    >
                                          <span className="inline-block text-2xl font-bold">
                                                <Image
                                                      className="w-full h-auto rounded-sm"
                                                      src={company.icon as string}
                                                      alt="icon"
                                                      width={40}
                                                      height={40}
                                                      priority />
                                          </span>
                                          <h1>{company.name}</h1>
                                    </div>
                              ))}
                        </Slider>
                  </div>
            </div>
      )
}

export default Banner