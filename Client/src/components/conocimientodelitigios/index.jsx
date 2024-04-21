import logo from "../../img/logoAveza.png";

import { Link } from "react-router-dom";
import { Button } from "../Mystyles";


const ConocimientoDeLitigios = () => {

  
  return (
    <div>
      <div className="logo-aveza">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
      </div>
      <h1 className="titulo">Conocimiento de Litigios</h1>
      <br />

      <form>
        <br /><br /><br /><br /><br />
        <div className="clientes">
          <Link to={"/litigiosporcliente"} >
            <Button className="botonesiniciosesion">
              Litigios por cliente
            </Button>
          </Link>
          <Link to={"/litigiostipocaso"} >
            <Button className="botonesiniciosesion">
              Litigios por tipo de caso
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default ConocimientoDeLitigios;
