import { servicesDataType } from "@/lib/data"

const ServicesCard = ({ id, icon, title, color }: servicesDataType) => {
      return (
            <div
                  className={`${color} p-5 space-y-5 rounded-md hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all cursor-pointer `}
                  key={id}
            >
                  <div className="bg-white inline-block px-3 py-3 border-2 border-black rounded-full ">{icon}</div>
                  <div className="space-y-4">
                        <h1 className="text-3xl text-center font-bold">{title}</h1>
                        <p className="text-center">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequuntur,
                              nisi fuga beatae, libero incidunt quisquam perspiciatis saepe inventore alias
                              expedita nemo facere cumque quasi similique. Culpa consectetur in quis.
                        </p>
                  </div>
            </div>
      )
}

export default ServicesCard