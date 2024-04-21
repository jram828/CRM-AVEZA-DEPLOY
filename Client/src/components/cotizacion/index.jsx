import logo from "../../img/logoAveza.png";
import "./cotizacion.css";
import "../../App.css";
import { useState } from "react";

const Cotizacion = (props) => {
  const [userDataRegistro, setUserDataRegistro] = useState({
    email: "",
    nombres: "JULIAN",
    apellidos: "",
    cedula: "",
    celular: "",
    direccion: "",
    nombre_ciudad: "",
    tipo_usuario: "2",
    tipo_de_caso: "",
    forma_de_pago: "",
    honorarios: "",
    cuotas: "",
    aceptacion_cotizacion: "",
    tiene_contrato: "",
    // password: "",
    comentarios: "",
    valor_pretensiones: "",
  });

  const handleChangeRegistro = (e) => {
    setUserDataRegistro({
      ...userDataRegistro,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitHandlerRegistro = (e) => {
    e.preventDefault();
    registroCliente(userDataRegistro);
  };
  return (
    <div className="contenedorcotizacion">
      <form className="datos" method="post" onSubmit={submitHandlerRegistro}>
        <div className="logo-aveza">
          <img src={logo} alt="logo-aveza" />
        </div>
        <h1 className="titulo">Cotización</h1>
        <br />
        <br />
        <div className="nombreapellidos">
          <label htmlFor="nombre" className="labelregistrodecliente">
            Nombre(s):
          </label>
          <input
            type="text"
            name="nombres"
            id="name"
            disabled={true}
            className="cajacotizacion"
            value={userDataRegistro.nombres}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="apellidos" className="labelregistrodecliente">
            Apellido(s):
          </label>
          <input
            type="text"
            className="cajaregistrocliente"
            name="apellidos"
            id="lastname"
            value={userDataRegistro.apellidos}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="numerocedula" className="labelregistrodecliente">
            Numero de cédula:
          </label>
          <input
            type="number"
            className="cajaregistrocliente"
            name="cedula"
            id="cedula"
            value={userDataRegistro.cedula}
            onChange={handleChangeRegistro}
          />
        </div>
        <br />
        <br />
        <div className="numerocedula">
          <label htmlFor="correo" className="labelregistrodecliente">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="cajaregistrocliente"
            value={userDataRegistro.email}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="direccion" className="labelregistrodecliente">
            Dirección:
          </label>
          <input
            type="text"
            name="direccion"
            id="address"
            className="cajaregistrocliente"
            value={userDataRegistro.direccion}
            onChange={handleChangeRegistro}
          />

          <label htmlFor="telefono" className="labelregistrodecliente">
            {" "}
            Celular:
          </label>
          <input
            type="number"
            name="celular"
            id="celular"
            className="cajaregistrocliente"
            value={userDataRegistro.celular}
            onChange={handleChangeRegistro}
          />
        </div>

        <br />
        <br />

        <div className="nombreapellidos">
          <label htmlFor="ciudad" className="labelregistrodecliente">
            Ciudad:
          </label>
          <input
            type="text"
            name="codigo_ciudad"
            id="city"
            className="cajaregistrocliente"
            value={userDataRegistro.codigo_ciudad}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="honorarios" className="labelregistrodecliente">
            Honorarios:
          </label>
          <input
            type="number"
            className="cajaregistrocliente"
            name="honorarios"
            id="honorarios"
            value={userDataRegistro.honorarios}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="tipodeusuario" className="labelregistrodecliente">
            Forma de pago:
          </label>
          <select
            className="cajaregistrocliente"
            name="tipodeusuario"
            id="idusuario"
          >
            <option value="">Elija una opcion</option>
            <option value="Contado">Contado</option>
            <option value="Crédito">Crédito</option>
          </select>{" "}
        </div>
        <br />
        <br />

        <br />
        <div className="documentoagenerar">
          <input className="botones" type="button" value="Modificar" />
          <input
            className="botones"
            type="submit"
            value="Generar cotización"
          />{" "}
        </div>
      </form>
    </div>
  );
};
export default Cotizacion;
