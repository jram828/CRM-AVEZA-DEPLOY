import "../../App.css";
import React from "react";
import { useSelector } from "react-redux";
import { printDivContent } from "../../utils/printDivContent";
import logo from "../../img/logoAveza.png";
export const Autorizacion = () => {
  const cliente = useSelector((state) => state.cliente);
  
  function generatePDF() {
    printDivContent("autorizacion");
  }

  let newCedula = Number(cliente.cedula).toLocaleString();
  //  console.log('cedula dividida: ',numeroFormateado)
  return (
    <div>
      <div className="logo-aveza">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
      </div>
      <h1 className="titulo">Autorización</h1>
      <br />
      <div className="contenedorautorizacion">
        <div className="autorizacion" id="autorizacion">
          <p className="tituloautorizacion">
            <b>
              CONTRATO DE PRESTACIÓN DE SERVICIOS ENTRE
              <br />
              {cliente.nombres.toUpperCase()} {cliente.apellidos.toUpperCase()} Y JULIÁN ARTURO AVELLANEDA
              B.
            </b>
          </p>
          <br />
          <br />
          <p>
            <b>Señores</b>
          </p>
          {/* <br />
          <br /> */}
          <p>
            E.{"     "} S.{"     "} D.
            <br />
            <br />
            <b>REFERENCIA:</b> AUTORIZACIÓN
          </p>
          <p>
            <b>
              {cliente.nombres.toUpperCase()} {cliente.apellidos.toUpperCase()}
            </b>
            , identificado/a con cédula de ciudadanía número
            <b> {cliente.cedula}</b> expedida en Bogotá, mayor de edad,
            vecino(a) de esta ciudad, actuando como solicitante del proceso de
            Insolvencia Económica de Persona Natural no Comerciante,
            respetuosamente manifiesto a usted, que AUTORIZO al abogado en
            ejercicio JULIAN ARTURO AVELLANEDA BASTIDAS, identificado con C.C
            79.046.803, con T.P No. 86815 del C.S.J., residente y domiciliado en
            la ciudad de Bogotá, para que, en caso que incumplimiento de mi
            parte de mis obligaciones legales y contractuales al contrato de
            representación legal suscrito, <b>PRESENTE DESISTIMIENTO </b>
            irrevocable al (los) trámite(s) legal(es) que se encuentren en curso
            y en cualquier etapa y de los cuales sea titular, exonerando de toda
            responsabilidad al mismo y aceptando las implicaciones legales y
            comerciales que esto implique para mi persona.
          </p>
          <br />
          <br />
          <br />
          <br />
          <p>Atentamente</p>
          <br />
          <br />
          <p>
            <b>
              {cliente.nombres.toUpperCase()} {cliente.apellidos.toUpperCase()} <br />
              C.C. {cliente.cedula} de Bogotá <br />
              Dirección: {cliente.direccion.toUpperCase()} <br />
              Celular: {cliente.celular} <br />
            </b>
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="pieautorizacion">
            CARRERA 10 No. 97A - 13 Bogotá Trade Center · Torre B · Oficina 202
            <br />
            Bogotá, Colombia Tel: - Celular: (57)- 350 2803909
            <br />
            www.aveza.co
          </p>
        </div>
        <input
          className="botones"
          type="button"
          value="Guardar en PDF"
          onClick={generatePDF}
        />
      </div>
    </div>
  );
};
// numeroALetras(Number(celular))
export default Autorizacion;
