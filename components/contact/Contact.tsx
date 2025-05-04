
const Contact = () => {
      return (
            <div className="bg-gray-400">
                  <div className="min-h-screen mx-auto container flex flex-col lg:flex-row 
                  justify-center lg:justify-between items-center ">
                        <div
                              data-aos="fade-up"
                              className="w-full lg:w-2/4"
                        >
                              <h2 className="text-4xl text-center lg:text-5xl font-semibold leading-tight">
                                    Ready to contact us
                              </h2>
                              <div className="border-b-2 border-black pb-3 mt-10">
                                    <input
                                          type="text"
                                          placeholder="Nombre"
                                          className="text-2xl bg-transparent border-none outline-none "
                                    />
                              </div>
                              <div className="border-b-2 border-black pb-3 mt-10">
                                    <input
                                          type="email"
                                          placeholder="Email"
                                          className="text-2xl bg-transparent border-none outline-none "
                                    />
                              </div>
                              <div className="border-b-2 border-black pb-3 mt-10">
                                    <input
                                          type="text"
                                          placeholder="Mensaje"
                                          className="text-2xl bg-transparent border-none outline-none "
                                    />
                              </div>
                        </div>

                        <div
                              data-aos="fade-up"
                              className="w-full lg:w-1/3 space-y-8 mt-14 lg:mt-0"
                        >
                              <p className="text-xl lg:text-2xl font-medium">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, est!
                              </p>
                              <button className="bg-blue-300 px-6 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0)] rounded-md cursor-pointer ">
                                    Bock a call
                              </button>
                        </div>
                  </div>
            </div>
      )
}

export default Contact