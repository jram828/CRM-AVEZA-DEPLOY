import { useState } from "react";
import "../../App.css";
import "./registrocliente.css";
import { Button } from "../Mystyles";

const RegistroCliente = ({registroCliente}) => {
    const [userDataRegistro, setUserDataRegistro] = useState({
      email: "",
      nombres: "",
      apellidos: "",
      cedulaCliente: "",
      celular: "",
      direccion: "",
      nombre_ciudad: "",
      tipo_usuario: "3",
      tipo_de_caso: "",
      forma_de_pago: "",
      honorarios: "",
      cuotas:"",
      // password: "",
      comentarios: "",
      valor_pretensiones:""
      
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
    <div className="contenedorregistro">
      <form className="datos" method="post" onSubmit={submitHandlerRegistro}>
        {/* <div className="logo-aveza"> */}
        <h1 className="titulo">Registro De Cliente</h1>
        {/* <img src={logo} alt="logo-aveza" /> */}
        {/* </div> */}
        <br />
        <br />
        <div className="nombreapellidos">
          <label for="nombre" className="labelregistrodecliente">
            Nombre(s):
          </label>
          <input
            type="text"
            name="nombres"
            id="name"
            className="cajaregistrocliente"
            value={userDataRegistro.nombres}
            onChange={handleChangeRegistro}
          />
          <label for="apellidos" className="labelregistrodecliente">
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
        </div>
        <br />
        <br />
        <div className="numerocedula">
          <label for="numerocedula" className="labelregistrodecliente">
            Numero de cédula:
          </label>
          <input
            type="number"
            className="cajaregistrocliente"
            name="cedulaCliente"
            id="cedula"
            value={userDataRegistro.cedula}
            onChange={handleChangeRegistro}
          />

          <label for="telefono" className="labelregistrodecliente">
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
          <label for="correo" className="labelregistrodecliente">
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
          <label for="direccion" className="labelregistrodecliente">
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
        </div>
        <br />
        <br />
        <div className="ciudad">
          <label for="ciudad" className="labelregistrodecliente">
            Ciudad:
          </label>
          <input
            type="text"
            name="nombre_ciudad"
            id="city"
            className="cajaregistrocliente"
            value={userDataRegistro.nombre_ciudad}
            onChange={handleChangeRegistro}
          />
        </div>
        <div className="comentarios">
          <br />
          <label for="comentarios" className="labelregistrodecliente">
            Comentarios
          </label>
          <br />
          <br />
          <textarea
            name="comentarios"
            id="comentarios"
            cols="30"
            rows="5"
            value={userDataRegistro.comentarios}
            onChange={handleChangeRegistro}
          ></textarea>
        </div>
        <br />
        <div className="documentoagenerar">
          {/* <Button value="Modificar" /> */}
          <Button>Modificar</Button>
          {/* <Button type="submit" value="Guardar" />{" "} */}
          <Button
            onClick={submitHandlerRegistro}
            disabled={
              !userDataRegistro.email ||
              !userDataRegistro.cedulaCliente ||
              !userDataRegistro.nombres ||
              !userDataRegistro.apellidos
            }
          >
            Guardar
          </Button>
          <Button>Registrar Acreedores</Button>
        </div>
      </form>
    </div>
  );
};
export default RegistroCliente;
