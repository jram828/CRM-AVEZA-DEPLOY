import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../Mystyles";
import "../detail/detail.css";
import axios from "axios";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
// import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import logo from "../../img/logoAveza.png";

const Detail = () => {
  const cliente = useSelector((state) => state.cliente);

  console.log("Cliente detail:", cliente);
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

  const generarContrato = () => {
    const docs = document.getElementById("doc");
    const reader = new FileReader();
    if (docs.files.length === 0) {
      alert("No files selected");
    }
    reader.readAsBinaryString(docs.files.item(0));

    reader.onerror = function (evt) {
      console.log("error reading file", evt);
      alert("error reading file" + evt);
    };
    reader.onload = function (evt) {
      const content = evt.target.result;
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
      doc.render({
        nombre: cliente.nombres.toUpperCase(),
        apellido: cliente.apellidos.toUpperCase(),
        cedula: cliente.cedulaCliente,
        celular: cliente.celular,
        // ciudad: cliente.Ciudads[0].nombre_ciudad,
        direccion: cliente.direccion,
        pretensiones: cliente.valor_pretensiones,
        pretensiones_letras: cliente.valor_pretensiones_letras.toUpperCase(),
        honorarios: cliente.honorarios,
        honorarios_letras: cliente.honorarios_letras.toUpperCase(),
      });

      const blob = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
      });
      // Output the document using Data-URI
      saveAs(blob, `Documento ${cliente.nombres} ${cliente.apellidos}.docx`);
    };
  };

  return (
    <div className="container">
      <div className="detail" key={cliente.cedula}>
        <div className="encabezado">
          <img
            src={logo}
            alt="logo-aveza"
            title="AVEZA SAS"
            className="logo-aveza"
          />
          <br />
          <h5 className="titulo">Detalles del cliente</h5>
        </div>
        {/* <div className="nombre"> */}
        <div className="menu-detail">
          <Link to={"/cotizacion"}>
            <Button className="botonesiniciosesion">Cotización</Button>
          </Link>
          <Button onClick={onClickEliminar} className="botonesiniciosesion">
            Eliminar cliente
          </Button>
          <Link to={"/generarfactura"}>
            <Button className="botonesiniciosesion">Generar factura</Button>
          </Link>
            <Button className="botonesiniciosesion" onClick={generarContrato}>
              Generar Documentos
            </Button>
          </div>
          <div className="generardocumento">
            {/* <Link to={"/previsualizarcontrato"}> */}
            <input type="file" id="doc" />
            {/* </Link> */}
          </div>
          {/* <Link to={"/documentoslegales"}>
          <Button className="botonesiniciosesion">
            Generar Documentos Legales
          </Button>
        </Link> */}
        {cliente.nombres && (
          <h4 className="nombredetail">
            {cliente.nombres.toUpperCase()} {cliente.apellidos.toUpperCase()}{" "}
          </h4>
        )}
        {/* </div> */}
        {/* <img className="photo" src={character.image} alt={character.name} /> */}
        <div className="info">
          <div className="personal">
            <h4>Cedula: {cliente.cedula}</h4>
            <h4>Celular: {cliente.celular}</h4>
            <h4>Correo: {cliente.email}</h4>
            <h4>Direccion: {cliente.direccion.toUpperCase()}</h4>
            {/* <h4>Ciudad: {cliente.Ciudads[0].nombre_ciudad}</h4> */}
            {/* <h4>
              Departamento:
              {cliente.Ciudads[0].Departamentos[0].nombre_departamento}
            </h4> */}
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
    </div>
  );
};

export default Detail;
