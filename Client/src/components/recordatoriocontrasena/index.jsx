// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import "../../App.css";
import "./recordatorio.css";
import logo from "../../img/logoAveza.png";

const RecordatorioContrasena = (props) => {
  return (
    <div className="contenedorrecordatorio">
      <div className="logo-aveza">
        <img
          src={logo}
          alt="logo-aveza"
          title="AVEZA SAS"
        />
      </div>
      <h1 className="titulo">Recordar contraseña</h1>
      <br />

      <form>
        <br />
        <div className="recordar-password">
          <label className="label-password" htmlFor="usuario">
            Usuario:
          </label>
          <input type="number" name="usuario" id="username" />
        </div>
        <br />
        <br />
        <div className="recordar-password">
          <label className="label-password" htmlFor="correo">
            Email:
          </label>
          <input type="email" name="correo" id="email" />
        </div>
        <br />
        <br />
        <div className="recordar-password">
          <input className="inputbox2" type="submit" name="Enviar" />
          <br />
          <br />
          <input
            className="inputbox2"
            type="button"
            name="cancelar"
            value="Cancelar"
          />
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};
export default RecordatorioContrasena;
