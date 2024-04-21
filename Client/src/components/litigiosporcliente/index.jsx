import logo from "../../img/logoAveza.png";
import Cliente from "../cliente";
import {useEffect } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getClienteAll } from "../../redux/actions";

const LitigiosPorCliente = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);

  useEffect(() => {
    dispatch(getClienteAll());
  }, [dispatch]);

   console.log('Clientes conocimiento: ',clientes)
  return (
    <div>
      <div className="logo-aveza">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
      </div>
      <h1 className="titulo">Conocimiento de Litigios</h1>
      <br />

      <form>
        <div className="divclientes">
          {clientes.map((cliente) => {
            return (
              <div key={cliente.cedula}>
                <Cliente cliente={cliente}/>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};
export default LitigiosPorCliente;
