import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "../../App.css";
import "./registrocliente.css";
import logo from "../../img/logoAveza.png";

const RegistroCliente = ({registroCliente}) => {
    const [userDataRegistro, setUserDataRegistro] = useState({
      email: "",
      nombres: "",
      apellidos: "",
      cedula: "",
      celular: "",
      direccion: "",
      nombre_ciudad: "",
      tipo_usuario: "2",
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
        <div className="logo-aveza">
          <img src={logo} alt="logo-aveza" />
        </div>
        <h1 className="titulo">Registro De Cliente</h1>
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
          <label for="numerocedula" className="labelregistrodecliente">
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
          {/* </div>
        <br />
        <br />
        <div className="nombreapellidos"> */}
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
          <label for="numerocedula" className="labelregistrodecliente">
            Valor pretensiones:
          </label>
          <input
            type="number"
            className="cajaregistrocliente"
            name="valor_pretensiones"
            id="valorpretensiones"
            value={userDataRegistro.valor_pretensiones}
            onChange={handleChangeRegistro}
          />
          <label for="tIpo-de-caso" className="labelregistrodecliente">
            Tipo de caso
          </label>{" "}
          <br />
          <select
            name="tipo_de_caso"
            className="cajaregistrocliente"
            id="casos"
            onChange={handleChangeRegistro}
          >
            <option value="">Elija una opcion</option>
            <option value="1">Insolvencia</option>
            <option value="2">Divorcio</option>
            <option value="3">
              {" "}
              Protección de patrimonio
            </option>
            <option value="4">Derecho laboral</option>
            <option value="5">Derecho corporativo</option>
            <option value="6">
              Recaudo
            </option>
            <option value="7">
              Gestión de contratación estatal
            </option>
          </select>
        </div>
        <br />
        <br />
        <div className="honorarios">
          <label for="honorarios" className="labelregistrodecliente">
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
            name="forma_de_pago"
            id="idusuario"
            onChange={handleChangeRegistro}
            value={userDataRegistro.forma_de_pago}
          >
            <option value="">Elija una opcion</option>
            <option value="Contado">Contado</option>
            <option value="Crédito">Crédito</option>
          </select>{" "}
          <label for="cuotas" className="labelregistrodecliente">
            Numero de cuotas:
          </label>
          <input
            type="number"
            className="cajaregistrocliente"
            name="cuotas"
            id="cuotas"
            value={userDataRegistro.cuotas}
            onChange={handleChangeRegistro}
          />
          <br />
          <br />
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
          <input className="botones" type="button" value="Modificar" />
          <input
            className="botones"
            type="submit"
            value="Guardar"
            disabled={
              !userDataRegistro.email ||
              !userDataRegistro.cedula ||
              !userDataRegistro.nombres ||
              !userDataRegistro.apellidos
            }
          />{" "}
          <input
            className="botones"
            type="button"
            value="Registrar Acreedores"
          />
        </div>
      </form>
    </div>
  );
};
export default RegistroCliente;
