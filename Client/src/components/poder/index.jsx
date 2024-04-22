import logo from "../../img/logoAveza.png";

import "../../App.css";
import "../poder/poder.css";
import React from "react";
import { useSelector } from "react-redux";
import { printDivContent } from "../../utils/printDivContent";

const Poder = () => {
  const cliente = useSelector((state) => state.cliente);

  console.log('Cliente poder: ', cliente)
  
function generatePDF() {
  printDivContent("poder");
}

  return (
    <div className="contenedorPoder">
      <div className="logo-aveza">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
      </div>
      <h1 className="titulo">Poder</h1>
      <div className="poder" id="poder">
        <p className="titulopoder">
          <b>
            CONTRATO DE PRESTACIÓN DE SERVICIOS ENTRE
            <br />
            {cliente.nombres} {cliente.apellidos} Y JULIÁN ARTURO AVELLANEDA B.
          </b>
        </p>
        <br />
        <br />
        <h1 className="encabezadopoder">
          Señores: <br />
          Centros de Conciliación Fundación Liborio Mejía.
          <br />
          Bogotá D.C,.
        </h1>
        <br />
        <p className="parrafopoder">
          Ref.: Proceso trámite de insolvencia de persona natural no comerciante
        </p>
        <p className="parrafopoder">
          <b>
            {cliente.nombres.toUpperCase()} {cliente.apellidos.toUpperCase()},{" "}
          </b>{" "}
          identificado/a como aparece al pie de mi firma, manifiesto que otorgo
          poder especial, amplio y suficiente al doctor{" "}
          <b>JULIAN ARTURO AVELLANEDA BASTIDAS, </b> mayor de edad, identificado
          con cédula de ciudadanía No <b>79.046.803</b> abogado en ejercicio con
          T.P. No 86.815 del Consejo Superior de la Judicatura. Para que me
          represente en el proceso referido en los términos del Título IV del
          Código General del Proceso, Ley 1564 de 2012, inicie y tramite el
          proceso de negociación de deudas y convalidación de acuerdo
          (insolvencia) del suscrito, como persona natural no comerciante, con
          todos y cada uno de los acreedores que se relacionan en la solicitud,
          en la actualización de la misma o cualquier otro.
        </p>
        <p>
          Mi apoderado cuenta con todas las facultades inherentes para el
          ejercicio del presente poder, contemplados en los artículos 73 y 74
          del CGP, y las de conciliar, recibir, objetar, desistir, controvertir,
          sustituir, negociar, presentar recursos y en general adelantar todas
          las actuaciones necesarias para llevar a cabo el presente asunto.
        </p>
        <p>
          Sírvase señor(a) operador en insolvencia, reconocer el poder en los
          efectos mencionado de conformidad con el Decreto 806 del 4 de junio de
          2020, para lo cual me permito indiciar que el correo del apoderado que
          constituyo es: <u>j.avellaneda@aveza.co</u>
        </p>
        <div className="firmas">
          <div className="firmacliente">
            <p className="firma">Atentamente,</p>
            <br />
            <br />
            <br />
            <h2 className="firma">
              {cliente.nombres.toUpperCase()} {cliente.apellidos.toUpperCase()}{" "}
              <br />
              C.C. No. {cliente.cedula} <br />
              {cliente.direccion.toUpperCase()},{" "}
              {cliente.Ciudads[0].nombre_ciudad}
              <br />
              Cel: {cliente.celular}
            </h2>
          </div>
          <div className="firmaabogado">
            <p className="firma"> Acepto,</p>
            <br />
            <br />
            <br />
            <h2 className="firma">
              JULIAN ARTURO AVELLANEDA BASTIDAS <br />
              CC. No 79.046.803 T.P. 86815 <br />
              CR 10 No 97A–13 Tr B Ofi 202 Btá <br />
              Cel: 3502803909
            </h2>
          </div>
        </div>
        <br />
        <br />
        <footer className="piepoder">
          CARRERA 10 No. 97A - 13 Bogotá Trade Center · Torre B · Oficina 202
          <br />
          Bogotá, Colombia Tel: - Celular: (57)- 350 2803909
          <br />
          www.aveza.co
        </footer>
      </div>
      <div className="documentoagenerar">
        <input
          className="inputbox2"
          type="submit"
          name="generar"
          value="Generar PDF"
          onClick={generatePDF}
        />
      </div>
    </div>
  );
};
export default Poder;
