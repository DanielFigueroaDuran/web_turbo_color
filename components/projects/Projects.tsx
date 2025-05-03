import octoral from "../../public/assets/octoral.png";
import cromauto from "../../public/assets/cromauto.png";
import indasa from "../../public/assets/indasa.png";
import iwata from "../../public/assets/iwata.png";
import rupes from "../../public/assets/rupes.png";
import WebCard from "./WebCard";

const Projects = () => {
      return (
            <div>
                  <h1>See Our Project</h1>
                  <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Voluptates veritatis modi ex minus totam nisi officia recusandae
                        dolores, sed velit?
                  </p>
                  <div>
                        <WebCard
                              project="Octoral"
                              img={octoral}
                              title="Compacto Homologado Rentable"
                        />
                  </div>
            </div>
      )
}

export default Projects