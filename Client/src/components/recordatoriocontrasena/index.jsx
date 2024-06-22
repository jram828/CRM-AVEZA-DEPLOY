
import "./recordatorio.css";
import logo from "../../img/logoAveza.png";
import { Button } from "../Mystyles";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import { recordarPassword } from "../../redux/actions";


const RecordatorioContrasena = (props) => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
      email: "",
    });

    const handlerPassword = async (e) => {
      e.preventDefault();

      const { email } = userData;
      console.log("Datos recordar password:", email);

      try {
        await recordarPassword(email);
        // console.log("Respuesta password:", data);
        window.alert("Se envió el recordatorio por email");
        navigate("/");
      } catch (error) {
        window.alert("No se envió el recordatorio");
      }
    };
    const handleChange = (e) => {
      // setErrores(validar({ ...userData, [e.target.name]: e.target.value }));
      setUserData({
        ...userData,
        [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
      });
  };
  
  return (
    <div className="contenedorrecordatorio">
      <div className="encabezado">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
        <br />
        <h1 className="titulo">Recordar contraseña</h1>
        <br />
        <span>La contraseña será enviada al correo que tienes registrado</span>
      </div>
      <br />
      <div className="emailinput">
        <label className="label-password" htmlFor="correo">
          Email:
        </label>
        <input className="emailrecordatorio" type="email" name="email" id="email" onChange={handleChange} />
      </div>
      <br />

      <div className="recordar-password">
        <Button onClick={handlerPassword} >Enviar</Button>
        <br />
        <br />
        <Link to="/">
          <Button>Volver</Button>
        </Link>
      </div>
    </div>
  );
};
export default RecordatorioContrasena;
