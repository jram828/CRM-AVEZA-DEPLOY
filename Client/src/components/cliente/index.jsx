import React from "react";
// import "../../App.css";
import "./cliente.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { clienteActual, getClienteByCedula} from "../../redux/actions";
import { useState, useEffect} from "react";
import { numeroALetras } from "../convertiraletras";
import { useNavigate } from "react-router-dom";

const Cliente = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const cliente = useSelector((state) => state.cliente);
  const {
    cedulaCliente,
    email,
    nombres,
    apellidos,
    direccion,
    codigo_ciudad,
    celular,
    Ciudads,
    comentarios,
  } = props.cliente;
  console.log(props.cliente);

 const newCliente = {
   cedulaCliente,
   email,
   nombres,
   apellidos,
   direccion,
   codigo_ciudad,
   celular,
   Ciudads,
   comentarios,
 }; 


  const onClickDetail = () => {
    dispatch(clienteActual(newCliente));
    navigate("/detail");
  };


  return (
    <div className="cardcliente" key={cedulaCliente}>
      <Link to={"/detail"} onClick={onClickDetail} className="link">
        <h1 className="titulocard">
          {nombres.toUpperCase()} {apellidos.toUpperCase()}
        </h1>
      </Link>
    </div>
  );
};


export default Cliente;
