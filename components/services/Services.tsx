import { servicesData } from "@/lib/data"
import ServicesCard from "./ServicesCard"

const Services = () => {
      return (
            <div className="min-h-screen container flex flex-col justify-center items-center gap-10 py-10">
                  <h1
                        className="text-3xl lg:text-5xl font-bold text-center w-full lg:w-3/4"
                        data-aos="fade-up"
                  >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, Services.
                  </h1>
                  <p
                        className=" text-sm lg:text-base w-full lg:w-3/4 text-center"
                        data-aos="fade-up"
                  >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil quis voluptatem minus nulla enim consequatur ratione ad.
                        Possimus, officia iusto?
                  </p>
                  <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        data-aos="fade-up"
                  >
                        {servicesData.map(services => (
                              <ServicesCard
                                    key={services.id}
                                    id={services.id}
                                    icon={services.icon}
                                    title={services.title}
                                    color={services.color}
                              />
                        ))}
                  </div>
            </div>
      )
}

export default Services