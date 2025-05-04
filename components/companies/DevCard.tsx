import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"

type DevCardTypesProps = {
      img: StaticImport,
      project: string,
      title: string
};

const DevCard = ({ img, project, title }: DevCardTypesProps) => {

      return (
            <div className="flex flex-col lg:flex-row justify-between my-14">
                  {/* Img Section */}
                  <div
                        data-aos="fade-down"
                        className="w-full lg:w-2/5"
                  >
                        <Image
                              src={img}
                              alt="image"
                              className="max-h-[400px] w-auto h-auto bg-black shadow-[-10px_10px_0px_0px_rgba(0,0,0,0.15)] rounded-md"
                              width={400}
                              height={400}
                              priority
                        />
                  </div>

                  {/* Content Section */}
                  <div
                        data-aos="fade-up"
                        className="w-full lg:w-2/4 space-y-8 mt-14 lg:mt-0"
                  >
                        <button
                              className="bg-secondary font-bold px-5 py-2 rounded-full"
                        >
                              {project}
                        </button>
                        <h2 className="text-4xl font-semibold">{title}</h2>
                        <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                              Distinctio quae debitis fugiat dolores tenetur tempore
                              aliquid ducimus, veritatis fuga nobis!
                        </p>
                        <button className="border-2 border-black px-6 py-2 rounded-full font-medium">See Full Project</button>
                  </div>
            </div>
      )
}

export default DevCard