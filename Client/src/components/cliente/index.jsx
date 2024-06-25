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
    // TipoUsuarios,
    // TipoDeCasos,
    nombres,
    apellidos,
    direccion,
    codigo_ciudad,
    celular,
    // honorarios,
    // valor_pretensiones,
    // aceptacion_cotizacion,
    Ciudads,
    comentarios,
    // forma_de_pago,
    tiene_contrato
  } = props.cliente;
  console.log(props.cliente);
  // console.log('Tipo usuarios', TipoUsuarios);
  // console.log("Tipo casos", TipoDeCasos);
 const newCliente = {
  //  cedulaCliente: Number(cedulaCliente).toLocaleString(),
   cedulaCliente,
   email,
  //  tipo_usuario: TipoUsuarios[0].descripcion,
  //  tipo_caso: TipoDeCasos[0].descripcion,
   nombres,
   apellidos,
   direccion,
   codigo_ciudad,
   celular,
  //  valor_pretensiones_letras: numeroALetras(Number(valor_pretensiones)),
  //  valor_pretensiones: Number(valor_pretensiones).toLocaleString(),
  //  honorarios_letras: numeroALetras(Number(honorarios)),
  //  honorarios: Number(honorarios).toLocaleString(),
  //  aceptacion_cotizacion,
   Ciudads,
   comentarios,
  //  forma_de_pago,
   tiene_contrato,
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
