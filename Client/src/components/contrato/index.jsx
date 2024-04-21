import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logoAveza.png";
// import { URL } from "../../App";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Contrato = () => {
    const [cliente, setCliente] = useState({});
    const { cedula } = useParams();
    console.log("Cedula Contrato:", cedula);
    useEffect(() => {
      axios.get(`/${cedula}`, { cedula: cedula }).then(({ data }) => {
        if (data.nombres) {
          setCliente(data);
        } else {
          window.alert("No hay clientes con esa cedula");
        }
      });
    }, []);
  
  console.log('Cliente contrato:',cliente)
  //  if (cliente.length > 0) {
    return (
      <div>
        <div className="logo-aveza">
          <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
        </div>
        <h1 className="titulo">Generar Contrato</h1>

        <form className="contenedor-form">
          <div className="contrato">
            <label htmlFor="nombre" className="labelcontrato">
              Nombre(s):
            </label>
            <input
              type="text"
              name="nombre"
              id="name"
              value={`${cliente.nombres}`}
            />
            <label htmlFor="apellidos" className="labelcontrato">
              Apellido(s):
            </label>
            <input
              type="text"
              name="apellidos"
              id="lastname"
              value={`${cliente.apellidos}`}
            />
          </div>
          <br />
          <br />
          <div className="contrato">
            <label htmlFor="numerocedula" className="labelcontrato">
              Numero de cédula:
            </label>
            <input
              type="number"
              name="numerocedula"
              id="cedula"
              value={`${cliente.cedula}`}
            />
            <label htmlFor="correo" className="labelcontrato">
              Email:
            </label>
            <input
              type="email"
              name="correo"
              id="email"
              value={`${cliente.correo}`}
            />
          </div>
          <br />
          <br />
          <div className="contrato">
            <label htmlFor="direccion" className="labelcontrato">
              Dirección:
            </label>
            <input
              type="text"
              name="direccion"
              id="address"
              value={`${cliente.direccion}`}
            />
            <label htmlFor="telefono" className="labelcontrato">
              Celular:
            </label>
            <input
              type="number"
              name="telefono"
              id="celular"
              value={`${cliente.telefono}`}
            />
          </div>
          <br />
          <br />
          <div className="contrato">
            <label htmlFor="ciudad" className="labelcontrato">
              Ciudad:
            </label>
            <input
              type="text"
              name="ciudad"
              id="city"
              value={`${cliente.codigo_ciudad}`}
            />
            <label htmlFor="valor-de-la-deuda" className="labelcontrato">
              Valor de la deuda:
            </label>
            <input
              type="number"
              name="valor-de-la-deuda"
              id="valor-de-la-deuda"
              value={`${cliente.valor_pretensiones}`}
            />
          </div>
          <br />
          <br />
          <div className="contrato2">
            <label htmlFor="valor-del-servico" className="labelcontrato2">
              Valor Honorarios:
            </label>
            <input
              className="input4"
              type="number"
              name="valor-del-servicio"
              id="valor-del-servicio"
              value={`${cliente.honorarios}`}
            />
          </div>
          <br />
          <br />
        </form>
        <div className="documentoagenerar">
          <input
            className="documentoagenerar"
            type="button"
            value="Verificar financiamiento"
          />

          <Link to={"/previsualizarcontrato"}>
            <button className="documentoagenerar">
              Vista previa del documento
            </button>
          </Link>
          {/* <input
              type="button"
              value="Verificar datos del cliente"
              onClick={onVerificarCliente}
            /> */}
        </div>
        <br />
      </div>
    );
  // } else {
  //   return (
  //     <div>
  //       <div>
  //         <div className="logo-aveza">
  //           <img
  //             src={logo}
  //             alt="logo-aveza"
  //             title="AVEZA SAS"
  //           />
  //         </div>
  //         <h1 className="titulo">Generar Contrato</h1>
  //         <br />
  //       </div>
  //       <form>
  //         <div className="botones">
  //           <input
  //             type="button"
  //             value="Verificar datos del cliente"
  //             onClick={onVerificarCliente}
  //           />
  //         </div>
  //         <br />
  //       </form>
  //     </div>
  //   );
  // }
};
export default Contrato;
