import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"


const Footer = () => {
      return (
            <footer className="bg-slate-950 text-white pt-8 md:pt-0">
                  <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-24 p-8 md:px-32 px-5">
                        <div className="w-full md:w-1/4 space-y-4">
                              <span className="text-2xl font-bold">WEEWISE</span>
                              <p className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Natus voluptates exercitationem possimus cumque, asperiores
                              </p>
                        </div>

                        <div className="">
                              <h2 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Products</h2>
                              <div className="space-y-5">
                                    <h3>Overview</h3>
                                    <h3>Marketplace</h3>
                                    <h3>Workes</h3>
                              </div>
                        </div>
                        <div className="">
                              <h2 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Services</h2>
                              <div className="space-y-5">
                                    <h3>Blog</h3>
                                    <h3>Faq</h3>
                                    <h3>Services</h3>
                              </div>
                        </div>
                        <div className="">
                              <h2 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Social</h2>
                              <div className="space-y-5">
                                    <FaFacebook size={32} />
                                    <FaInstagram size={32} />
                                    <FaSquareTwitter size={32} />
                              </div>
                        </div>
                  </div>
            </footer>
      )
}

export default Footer