import React, { useState } from "react";
import "../../App.css";
import "./crearusuario.css";
import logo from "../../img/logoAveza.png";

const CrearUsuario = ({crearUsuario}) => {

  const [userDataCrear, setUserDataCrear] = useState({
    email: "",
    password: "",
    nombres: "",
    apellidos: "",
    cedula: "",
    celular: "",
    direccion: "",
    nombre_ciudad: "",
    tipo_usuario:"1"
  });

  const handleChangeCrear = (e) => {
    setUserDataCrear({
      ...userDataCrear,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitHandlerCrear = (e) => {
    e.preventDefault();
    crearUsuario(userDataCrear)
  };

  return (
    <div className="contenedorcrearusuario">
      <form method="post" className="formulario" onSubmit={submitHandlerCrear}>
        <div className="logo-aveza">
          <img src={logo} alt="logo-aveza" />
        </div>
        <h1 className="titulo">Crear Usuario</h1>
        <br />
        <br />
        <div className="nombreapellido">
          <label for="nombre" className="labelcrearusuario">
            Nombre(s):
          </label>
          <input
            type="text"
            name="nombres"
            id="name"
            className="cajascrearusuario"
            value={userDataCrear.nombres}
            onChange={handleChangeCrear}
          />
          <label for="apellidos" className="labelcrearusuario">
            Apellido(s):
          </label>
          <input
            type="text"
            name="apellidos"
            id="lastname"
            className="cajascrearusuario"
            value={userDataCrear.apellidos}
            onChange={handleChangeCrear}
          />
        </div>

        <br />
        <br />
        <div className="cedulaemail">
          <label for="numerocedula" className="labelcrearusuario">
            Numero de cédula:
          </label>
          <input
            type="number"
            name="cedula"
            id="cedula"
            className="cajascrearusuario"
            value={userDataCrear.cedula}
            onChange={handleChangeCrear}
          />
          <label for="correo" className="labelcrearusuario">
            Email:
          </label>
          <input
            name="email"
            type="email"
            value={userDataCrear.email}
            onChange={handleChangeCrear}
            id="email"
            className="cajascrearusuario"
          />
        </div>

        <br />
        <br />
        <div className="direccioncelular">
          <label for="direccion" className="labelcrearusuario">
            Dirección:
          </label>
          <input
            type="text"
            name="direccion"
            id="address"
            className="cajascrearusuario"
            value={userDataCrear.direccion}
            onChange={handleChangeCrear}
          />
          <label for="telefono" className="labelcrearusuario">
            Celular:
          </label>
          <input
            type="number"
            name="celular"
            id="celular"
            className="cajascrearusuario"
            value={userDataCrear.celular}
            onChange={handleChangeCrear}
          />
        </div>

        <br />
        <br />
        <div className="ciudadcontrasena">
          <label for="ciudad" className="labelcrearusuario">
            Ciudad:
          </label>
          <input
            type="text"
            name="nombre_ciudad"
            id="city"
            className="cajascrearusuario"
            value={userDataCrear.nombre_ciudad}
            onChange={handleChangeCrear}
          />
          <label for="contrasena" className="labelcrearusuario">
            Contraseña:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="cajascrearusuario"
            value={userDataCrear.password}
            onChange={handleChangeCrear}
          />
        </div>
        <br />
        <br />
        {/* <div className="repetircontrasena">
          <label for="repetircontrasena" className="labelrepetircontrasena">
            Repetir contraseña:
          </label>
          <input
            type="password"
            name="repetircontrasena"
            id="passwordver"
            className="cajascrearusuario"
          />
        </div>
        <br />
        <br /> */}
        <div className="botonescrearusuario">
          <input
            type="submit"
            name="guardar"
            value="Guardar"
            className="botones"
            disabled={!userDataCrear.email || !userDataCrear.password}
          />
          <input
            type="button"
            name="cancelar"
            value="Cancelar"
            className="botones"
          />
        </div>
        <br />
      </form>
    </div>
  );
};
export default CrearUsuario;

        