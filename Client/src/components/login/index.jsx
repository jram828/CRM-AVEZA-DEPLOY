import React, { useState, useEffect} from "react";
import { validar } from "../../utils/validacion";
import "../../App.css";
import "./login.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../img/logoAveza.png";
import { GoogleLogin } from "@react-oauth/google";

const Form = ({ login, clickHandlerRecordatorio,clickHandlerCrear }) => {
  const [userData, setUserData] = useState({
    cedula: "",
    password: "",
  });

  const [errores, setErrores] = useState({
    cedula: "",
    password: "",
  });

  


  const handleChange = (e) => {
    setErrores(validar({ ...userData, [e.target.name]: e.target.value }));

    setUserData({
      ...userData,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    login(userData);
  };

  const responseMessage = (response) => {
    login();
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="containerLogin">
      {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
      <form onSubmit={submitHandler}>
        <table>
          <tr>
            <td></td>
            <td colSpan={2} className="celdas">
              <img
                src={logo}
                alt="Logo Aveza"
                style={{ height: "100px", marginBottom: "50px", width: "60%" }}
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          {/* <tr>
            <td></td>
            <td>
              <label htmlFor="usuario" className="label">
                Usuario:
              </label>
            </td>
            <td>
              <input
                type="number"
                name="cedula"
                id="username"
                //className="cajausuario"
                placeholder="Ingrese su Usuario"
                value={userData.cedula}
                onChange={handleChange}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}>
              {errores.cedula !== "" && (
                <h5 className="errores">{errores.cedula}</h5>
              )}
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label className="label" htmlFor="password">
                Contraseña:
              </label>
            </td>
            <td>
              <input
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                value={userData.password}
                onChange={handleChange}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}>
              {errores.password !== "" && (
                <h5 className="errores">{errores.password}</h5>
              )}
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="tipodeusuario">Tipo de usuario:</label>
            </td>
            <td>
              <select name="tipodeusuario" id="idusuario">
                <option value="">Elija una opcion</option>
                <option value="1">Administrador</option>
                <option value="2">Cliente</option>
              </select>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <br></br>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="celdas"></td>
            <td className="celdas">
              <input
                type="button"
                name="cancelar"
                value="Cancelar"
                className="botonesiniciosesion"
              />
            </td>
            <td className="celdas">
              {" "}
              {errores.cedula || errores.password ? null : (
                <input
                  type="submit"
                  value="Ingresar"
                  className="botonesiniciosesion"
                />
              )}
            </td>
            <td className="celdas"></td>
          </tr>
          <tr>
            <td></td>
            <td className="celdas">
              <Link to={"/crearusuario"} onClick={clickHandlerCrear}>
                <button className="botonesiniciosesion">Crear Usuario</button>
              </Link>
            </td>
            <td className="celdas">
              <Link
                to={"/recordatoriocontrasena"}
                onClick={clickHandlerRecordatorio}
              >
                <button className="botonesiniciosesion">
                  ¿Olvidó su contraseña?
                </button>
              </Link>
            </td>
            <td></td>
          </tr> */}
        </table>
      </form>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};
export default Form;


