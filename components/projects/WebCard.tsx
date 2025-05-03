import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"

type WebCardTypesProps = {
      img: StaticImport,
      project: string,
      title: string
};

const WebCard = ({ img, project, title }: WebCardTypesProps) => {
      return (
            <div className="flex flex-col-reverse lg:flex-row justify-between">
                  {/* Content Section */}
                  <div className="w-full lg:w-2/4 space-y-8 mt-14 lg:mt-0">
                        <button>{project}</button>
                        <h2>{title}</h2>
                        <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                              Distinctio quae debitis fugiat dolores tenetur tempore
                              aliquid ducimus, veritatis fuga nobis!
                        </p>
                        <button>See Full Project</button>
                  </div>

                  {/* Img Section */}
                  <div>
                        <Image
                              src={img}
                              alt="image"
                              className="bg-black shadow-[20px_20px_0px_0px_rgba(154,211,207)] rounded-md"
                              width={500}
                              height={500}
                              priority
                        />
                  </div>
            </div>
      )
}

export default WebCard