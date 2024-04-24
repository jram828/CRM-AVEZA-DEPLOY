import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../Mystyles";
import "../detail/detail.css";
import axios from "axios";

const Detail = () => {
  const cliente = useSelector((state) => state.cliente);

  console.log('Cliente detail:',cliente)
  // useEffect(() => {
  //   dispatch(clienteActual(cliente));
  // }, [dispatch]);

    const onClickEliminar = async () => {
      try {
        await axios.delete(`/${cliente.celular}`);
        // console.log("Data verificar clientes:", data);
      } catch (error) {
        console.log(error.message);
        window.alert("No se eliminó el cliente!");
      }
    };
  return (
    <div className="container">
      <div className="detail" key={cliente.cedula}>
        <div className="nombre">
          {cliente.nombres && (
            <h1 className="nombredetail">
              {cliente.nombres.toUpperCase()} {cliente.apellidos.toUpperCase()}{" "}
            </h1>
          )}
        </div>
        {/* <img className="photo" src={character.image} alt={character.name} /> */}
        <div className="info">
          <div className="personal">
            <h4>Cedula: {cliente.cedula}</h4>
            <h4>Celular: {cliente.celular}</h4>
            <h4>Correo: {cliente.email}</h4>
            <h4>Direccion: {cliente.direccion.toUpperCase()}</h4>
            <h4>Ciudad: {cliente.Ciudads[0].nombre_ciudad}</h4>
            <h4>
              Departamento:
              {cliente.Ciudads[0].Departamentos[0].nombre_departamento}
            </h4>
          </div>
          <div className="casos">
            <h4>Tipo de caso: {cliente.tipo_caso} </h4>
            <h4>Comentarios: {cliente.comentarios} </h4>
            <h4>Tiene contrato? : {cliente.tiene_contrato} </h4>
            <h4>Valor pretensiones: {cliente.valor_pretensiones} </h4>
            <h4>Honorarios: {cliente.honorarios} </h4>
          </div>
        </div>
      </div>
      <div>
        <Link to={"/cotizacion"}>
          <Button className="botonesiniciosesion">Cotización</Button>
        </Link>
        <Link to={"/previsualizarcontrato"}>
          <Button className="botonesiniciosesion">Generar Contrato</Button>
        </Link>
        <Link to={"/documentoslegales"}>
          <Button className="botonesiniciosesion">
            Generar Documentos Legales
          </Button>
        </Link>
        <Link to={"/generarfactura"}>
          <Button className="botonesiniciosesion">Generar factura</Button>
        </Link>
        <Button onClick={onClickEliminar} className="botonesiniciosesion">Eliminar cliente</Button>
      </div>
    </div>
  );
};

export default Detail