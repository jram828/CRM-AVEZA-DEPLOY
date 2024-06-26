import logo from "../../img/logoAveza.png";
import Cliente from "../cliente";
import {useEffect } from "react";
import "../../App.css";
import "./litigiosporcliente.css";
import { useDispatch, useSelector } from "react-redux";
import { getClienteAll } from "../../redux/actions";
import { Button } from "../Mystyles";

const LitigiosPorCliente = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);

  useEffect(() => {
    dispatch(getClienteAll());
  }, [dispatch]);

  console.log('Clientes conocimiento: ', clientes)

  return (
    <div className="contenedorlitigios">
      <div className="logo-aveza">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
      <h1 className="titulo">Conocimiento de Litigios</h1>
      </div>
      {/* <br /> */}
      <div>
        <input type="file" id="doc" />
        {/* <Link to={"/previsualizarcontrato"}> */}
        <Button className="botonesiniciosesion" onClick={generarContrato}>
          Generar Documentos
        </Button>
        {/* </Link> */}
      </div>
      {/* <form> */}
        <div className="divclientes">
          {clientes.map((cliente) => {
            return (
              <div key={cliente.cedula}>
                <Cliente cliente={cliente} />
              </div>
            );
          })}
        </div>
      {/* </form> */}
    </div>
  );
};
export default LitigiosPorCliente;
