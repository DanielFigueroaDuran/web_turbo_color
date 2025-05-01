import { aboutData } from "@/lib/data"


const WhyUs = () => {
      return (
            <div className="min-h-screen flex flex-col items-center lg:text-start bg-gray-800">
                  <h1
                        className="text-6xl font-bold text-white w-full lg:w-1/3 py-10"
                        data-aos="fade-up"
                  >
                        Why Us?
                  </h1>
                  {aboutData.map(about => (
                        <div
                              key={about.id}
                              className="w-full lg:w-1/3 space-y-5 pr-5 pb-14 lg:pb-6"
                              data-aos="fade-up"
                        >
                              <div className="flex justify-center lg:items-center gap-5 w-full lg:w-2/4">
                                    <span className="text-6xl font-bold text-white">{about.num}</span>
                                    <h3 className="text-2xl font-bold text-white">{about.title}</h3>
                              </div>
                              <div>
                                    <p>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit!
                                    </p>
                              </div>
                        </div>
                  ))

                  }
            </div>
      )
}

export default WhyUs