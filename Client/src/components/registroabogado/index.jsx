
import { useState } from "react";
import "../../App.css";
import "./registroabogado.css";


const RegistroAbogado = ({registroAbogado}) => {
    const [userDataRegistro, setUserDataRegistro] = useState({
      email: "",
      nombres: "",
      apellidos: "",
      cedulaAbogado: "",
      celular: "",
      direccion: "",
      nombre_ciudad: "",
      tarjetaProf: "",
      password: "",
    });

    const handleChangeRegistro = (e) => {
      setUserDataRegistro({
        ...userDataRegistro,
        [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
      });
    };

    const submitHandlerRegistro = (e) => {
      e.preventDefault();
      registroAbogado(userDataRegistro);
    };
  return (
    <div className="contenedorregistro">
      <form className="datos" method="post" onSubmit={submitHandlerRegistro}>
        {/* <div className="logo-aveza"> */}
        <h1 className="titulo">Registro De Abogado</h1>
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
            className="cajaregistroabogado"
            value={userDataRegistro.nombres}
            onChange={handleChangeRegistro}
          />
          <label for="apellidos" className="labelregistrodecliente">
            Apellido(s):
          </label>
          <input
            type="text"
            className="cajaregistroabogado"
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
            className="cajaregistroabogado"
            name="cedulaAbogado"
            id="cedula"
            value={userDataRegistro.cedulaAbogado}
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
            className="cajaregistroabogado"
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
            className="cajaregistroabogado"
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
            className="cajaregistroabogado"
            value={userDataRegistro.direccion}
            onChange={handleChangeRegistro}
          />
        </div>

        <br />
        <br />
        <div className="nombreapellidos">
          <label for="ciudad" className="labelregistrodecliente">
            Ciudad:
          </label>
          <input
            type="text"
            name="nombre_ciudad"
            id="city"
            className="cajaregistroabogado"
            value={userDataRegistro.nombre_ciudad}
            onChange={handleChangeRegistro}
          />
          <label for="tarjetaProf" className="labelregistrodecliente">
            Tarjeta profesional:
          </label>
          <input
            type="number"
            className="cajaregistroabogado"
            name="tarjetaProf"
            id="tarjetaProf"
            value={userDataRegistro.tarjetaProf}
            onChange={handleChangeRegistro}
          />
          {/* <label for="password" className="labelregistrodecliente">
            Password:
          </label>
          <input
            type="password"
            className="cajaregistroabogado"
            name="password"
            id="passsword"
            value={userDataRegistro.password}
            onChange={handleChangeRegistro}
          /> */}
        </div>
        <br />
        <br /><br />
        <div className="nombreapellidos">
          <input className="botones" type="button" value="Modificar" />
          <input
            className="botones"
            type="submit"
            value="Guardar"
            disabled={
              !userDataRegistro.email ||
              !userDataRegistro.cedulaAbogado ||
              !userDataRegistro.nombres ||
              !userDataRegistro.apellidos
            }
          />
        </div>
      </form>
    </div>
  );
};
export default RegistroAbogado;
