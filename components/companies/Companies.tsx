import octoral from "../../public/assets/octoral.png";
import cromauto from "../../public/assets/cromauto.png";
import indasa from "../../public/assets/indasa.png";
import iwata from "../../public/assets/iwata.png";
import rupes from "../../public/assets/rupes.png";
import WebCard from "./WebCard";
import DevCard from "./DevCard";

const Companies = () => {

      return (
            <div className="min-h-screen mx-auto container flex flex-col items-center justify-center mt-16 mb-8">
                  <h2
                        data-aos="fade-up"
                        className="text-4xl lg:text-5xl font-bold text-center w-full lg:w-3/4"
                  >
                        Companies
                  </h2>
                  <p
                        data-aos="fade-up"
                        className="text-sm lg:text-base w-full lg:w-3/4 text-center mt-5"
                  >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Voluptates veritatis modi ex minus totam nisi officia recusandae
                        dolores, sed velit?
                  </p>
                  <div className="py-14">
                        <WebCard
                              project="Octoral"
                              img={octoral}
                              title="Compacto Homologado Rentable"
                        />

                        <DevCard
                              project="Comauto"
                              img={cromauto}
                              title="Dinamismo, especialización extrema,"
                        />

                        <WebCard
                              project="Indasa"
                              img={indasa}
                              title="Compacto Homologado Rentable"
                        />

                        <DevCard
                              project="Iwata"
                              img={iwata}
                              title="Dinamismo, especialización extrema,"
                        />

                        <WebCard
                              project="Rupes"
                              img={rupes}
                              title="Compacto Homologado Rentable"
                        />
                  </div>
            </div>
      )
}

export default Companies