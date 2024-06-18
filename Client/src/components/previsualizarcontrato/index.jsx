import { useSelector } from "react-redux";
import "../../App.css";
import "../previsualizarcontrato/previsualizar.css";
import React, { useState } from "react";
import logo from "../../img/logoAveza.png";
// import { URL } from "../../App";
import { printDivContent } from "../../utils/printDivContent";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
// import template from "../../../public/tag-example.docx"
// import fs from "fs";
// import path from "path";

// import { Url } from "url";
// function generatePDF() {
//   printDivContent('contenedorcontrato');

// }

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

const PrevisualizarContrato = () => {
  const cliente = useSelector((state) => state.cliente);
  console.log("Cliente Prev Contrato:", cliente);
  var [selectedFile, setSelectedFile] = useState(null);

  const handleChangeTemplate = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const generatePDF = () => {
        // const __filename = Url(import.meta.url);
        // const __dirname = path.dirname(__filename);

        // const templatePath = path.join(__dirname, "", "tag-example.docx");
        // const docxTemplate = fs.readFileSync(templatePath, "Utf8");
    // loadFile(
    //   selectedFile,
    //   function (error, content) {
    //     if (error) {
    //       throw error;
    //     }
    //     const zip = new PizZip(content);
    //     const doc = new Docxtemplater(zip, {
    //       paragraphLoop: true,
    //       linebreaks: true,
    //     });
    //     doc.render({
    //       first_name: cliente.nombres,
    //       last_name: cliente.apellidos,
    //       phone: "3205641789",
    //       description: "New Website",
    //     });
    //     const out = doc.getZip().generate({
    //       type: "blob",
    //       mimeType:
    //         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    //     });
    //     saveAs(out, "prueba2-contrato.docx");
    //   }
    // );
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
                        cedula: cliente.cedula,
                        pretensiones: cliente.valor_pretensiones,
                        pretensiones_letras:cliente.valor_pretensiones_letras.toUpperCase(),
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
                      saveAs(blob, `Contrato ${cliente.nombres} ${cliente.apellidos}.docx`);
                    };
  };



  return (
    <div className="contrato">
      <div className="logo-aveza">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
      </div>
      <h1 className="titulo">Vista previa del contrato</h1>
      <br />
      <input type="file" id="doc" onChange={handleChangeTemplate} />
      <div id="divToPrint" className="divToPrint">
        <br />
        <br />
        <div id="contenedorcontrato" className="contenedorcontrato">
          <header id="titulocontrato" className="tituloo">
            <b>
              CONTRATO DE PRESTACIÓN DE SERVICIOS ENTRE{" "}
              {cliente.nombres.toUpperCase()} {cliente.apellidos.toUpperCase()}{" "}
              Y JULIÁN ARTURO AVELLANEDA B{" "}
            </b>
          </header>
          <title>CONTRATO DE PRESTACIÓN DE SERVICIOS</title>
          <br />
          <p id="parrafo">
            El presente contrato de prestacion de servicios, se regirá por las
            siguientes cláusulas: PRIMERA. OBJETO DEL CONTRATO: Representar y
            asesorar jurídicamente a{" "}
            <b>
              {cliente.nombres.toUpperCase()} {cliente.apellidos.toUpperCase()}
            </b>
            , identificado/a con cédula de ciudadanía número No.{" "}
            <b>{cliente.cedula} </b>quien de ahora en adelante se denominará
            <b> PODERDANTE</b>, en un proceso de negociación de pasivos para
            gestionar sus deudas de{" "}
            <b>
              {" "}
              {cliente.valor_pretensiones_letras.toUpperCase()} M/C {"($"}
              {cliente.valor_pretensiones}
              {".00)"}
            </b>
            , de conformidad a las disposiciones del Artículo 531 del Código
            General del Proceso, hasta lograr el acuerdo o si transcurrido el
            término previsto en el artículo 544 no se celebra el acuerdo de pago
            verificar que el conciliador declarará el fracaso de la negociación
            y que sea remitida las diligencias al juez civil de conocimiento,
            para que decrete la apertura del proceso de liquidación patrimonial.
            Si el proceso continuó a liquidación patrimonial se aplicarán las
            condiciones económicas de honorarios previstas más abajo para esa
            etapa. Para esto, el abogado <b>, JULIAN ARTURO AVELLANEDA </b>{" "}
            identificado con cédula de ciudadanía No. 79.046.803 y portador de
            la Tarjeta Profesional de Abogado No. del Consejo Superior de la
            Judicatura, quien de ahora en adelante se denominará EL{" "}
            <b>APODERADO</b> se obliga a emplear todos los medios profesionales
            necesarios que le permitan cumplir con la tarea ajustada a la
            realidad económica de{" "}
            <b>
              EL <b>PODERDANTE</b>. PARÁGRAFO
            </b>
            : LA REPRESENTACIÓN EN CASO DE INCUMPLIMIENTO AL ACUERDO DE PAGO O
            POR ACCIONES LEGALES GENERADAS POR PRESENTACIÓN DE INFORMACIÓN FALSA
            NO ESTÁ CONTEMPLADA DENTRO DE ESTOS HONORARIOS, esta será objeto de
            una nueva oferta de servicios. <b>SEGUNDA</b>. NATURALEZA DEL
            CONTRATO. El presente contrato es de naturaleza civil y como tal se
            rige por las disposiciones del Código Civil (Arts. 2142 y ss.) y
            demás normas concordantes en aquellos aspectos sobre los cuales no
            haya estipulación expresa en el texto del presente contrato.{" "}
            <b>TERCERA</b>. OBLIGACIONES ESPECIALES DEL APODERADO. 1- En el
            desarrollo de las facultades conferidas en el poder, el
            <b> APODERADO</b> se compromete a mantener fidelidad con el
            <b>
              <b> PODERDANTE</b>
            </b>
            , a respetar y a tener en cuenta las obligaciones y deberes del
            Abogado contenidas en la Ley 1123 de 2007. 2- El <b>APODERADO</b> se
            compromete a adelantar la gestión de la mejor manera posible, en
            atención de la acción encomendada, desplegando en ello el empeño
            profesional necesario y en los términos exigidos por los Artículos
            73 y siguientes del Código General del Proceso. 3- El{" "}
            <b>APODERADO</b> adelantará los trámites procedentes conforme a lo
            que él considere conveniente en el operador de insolvencia y/o ante
            notaría, legalmente habilitado para conocer de INSOLVENCIA DE
            PERSONAS NATURALES NO COMERCIANTES, que el apoderado considere tiene
            experiencia en el caso concreto. 4- Adelantar para el{" "}
            <b>
              <b>PODERDANTE </b>
            </b>
            el proceso en forma diligente rindiendo informes sobre el estado de
            este en la forma más eficaz posible. 5- Comunicar cualquier anomalía
            o situación que tenga que ver con los intereses del
            <b> PODERDANTE</b>. Se aclara que las obligaciones del{" "}
            <b>APODERADO </b>
            son de medio mas no de resultado. <b>CUARTA</b>. OBLIGACIONES DE EL{" "}
            <b>PODERDANTE</b>. 1- el <b>PODERDANTE</b> a su vez, se compromete a
            obrar con fidelidad respecto del poder conferido y el
            <b> APODERADO</b>, manteniéndose siempre dentro de los parámetros
            impuestos por la verdad, la buena fe, el respeto y las obligaciones
            que en su calidad le impone la ley civil y en particular las
            contenidas en el Artículo 2184 del Código Civil. 2- Igualmente el
            <b> PODERDANTE</b>
            queda obligado a suministrar toda la información que requiera el
            <b> APODERADO</b> para cumplir con la labor encomendada y será de
            absoluta responsabilidad del <b>PODERDANTE</b> lo dicho y las
            aseveraciones que exponga para su representación, en especial todo
            lo relativo a las pruebas, suministro de documentos y la
            comparecencia de testigos para el éxito del objeto planteado, EL
            <b> PODERDANTE</b> se compromete a entregar AL <b>APODERADO</b> toda
            la información indispensable para la elaboración de la solicitud del
            trámite de negociación de deudas, así mismo se obliga EL
            <b> PODERDANTE</b> a realizar las declaraciones sobre los distintos
            hechos, las cuales se entienden rendidas bajo la gravedad del
            juramento, para lo cual indica, expresamente, que no ha incurrido en
            omisiones, imprecisiones o errores voluntarios que impidan conocer
            su verdadera situación económica, su capacidad de pago, sus bienes,
            sus obligaciones y sus gastos de manutención, en consecuencia, narra
            los hechos, recauda y entrega AL <b>APODERADO</b> todas las pruebas
            y soportes necesarios que se requieran para la consecución de los
            fines enunciados. EL <b>PODERDANTE</b> manifiesta que es una persona
            natural no comerciante, que <b>No</b> se dedica profesionalmente a
            ninguna de las actividades previstas en el artículo 20 del Código de
            Comercio, que sus ingresos nunca han provenido de actividades
            ilícitas y que no ha estado en ninguna lista restrictiva vinculante
            para Colombia en lavado de activos y/o financiación del terrorismo,
            que <b>NO</b> es controlante de ninguna sociedad civil o comercial,
            en los términos de los artículos 260 y siguientes del Código de
            Comercio y que tiene dificultades para cumplir con su obligaciones y
            compromisos financieros, razón por la cual ha solicitado los
            servicios profesionales a EL <b>APODERADO</b> para que le asesore y,
            en su calidad de profesional del derecho lo represente en el trámite
            de negociación de pasivos de conformidad con lo acordado en el
            presente contrato, para lo cual el <b>PODERDANTE</b> otorgará el
            correspondiente poder al
            <b> APODERADO</b> para su respectiva representación, pudiendo el
            <b> APODERADO</b> sustituir, bajo su responsabilidad, en cualquier
            momento a otro Abogado en ejercicio. El <b>PODERDANTE </b>
            será responsable por todos los perjuicios que se ocasionen por no
            allegar la información requerida de manera oportuna al
            <b> APODERADO</b>. 3) Los gastos que ocasione el proceso, tales como
            certificados de cámara de comercio de los acreedores,
            notificaciones, fotocopias, investigaciones, honorarios de
            auxiliares de la justicia, peritos, copias, el costo de los pasajes
            fuera de Bogotá, viáticos del abogado y demás, serán por cuenta del{" "}
            <b>PODERDANTE</b>. 4) En caso que dentro del proceso se presenten
            cuotas de administración, el <b>PODERDANTE</b> deberá cancelar las
            que se causen durante el proceso de insolvencia, teniendo en cuenta
            que se trata de gastos de administración, ya que, de no estar a paz
            y salvo con las mismas no podrá realizarse el respectivo acuerdo de
            pago. <b>PARÁGRAFO</b>: De llegar a adelantarse cualquier acción
            judicial en la que el <b>PODERDANTE</b> le haya manifestado al{" "}
            <b>APODERADO</b> que la información fuera real y llegaré a
            concluirse que no era así, los gastos ocasionados con las
            actuaciones judiciales que se adelantaren serán asumidas
            económicamente por el <b>PODERDANTE</b> quien deberá entregarle al
            <b> APODERADO</b> los valores generados por lo anterior.{" "}
            <b>QUINTA</b>. REMUNERACIÓN. El <b>APODERADO</b> recibirá por parte
            del
            <b>PODERDANTE</b>,{" "}
            <b>
              LA SUMA DE {cliente.honorarios_letras.toUpperCase()} M/C ($
              {cliente.honorarios}.00) ANTES DE IMPUESTOS
            </b>
            , este valor contempla las tarifas legales que se deben pagar a los
            operadores de insolvencia y los honorarios profesionales del{" "}
            <b>APODERADO</b>, los cuales serán cancelados así: si es de contado
            en una sola suma por valor de{" "}
            <b>
              {cliente.honorarios_letras.toUpperCase()} M/C ($
              {cliente.honorarios}.00) ANTES DE IMPUESTOS
            </b>
            , Y POR ÚLTIMO CUALQUIER IMPUESTO QUE SE GENERE. Para la
            representación legal y/o revisión el proceso en la etapa de
            liquidación patrimonial será objeto de otro acuerdo de honorarios
            que será así: un rubro mensual de CIEN MIL PESOS M/C ($100.000) con
            incrementos en EL MAYOR VALOR ENTRE EL IPC Y EL AUMENTO DEL SALARIO
            MINIMO cada enero, hasta que se termine el proceso, pagaderos
            mensualmente los cinco (5) primeros días de cada mes.{" "}
            <b>PARÁGRAFO 1</b>. Se aclara que este valor cubre los honorarios
            y/o derechos que por ley hay que pagar al centro de conciliación,
            pero <b>NO</b> contempla los honorarios del liquidador que sea
            asignado POR EL JUEZ en el caso que el trámite avance a la etapa de
            LIQUIDACIÓN PATRIMONIAL. <b>PARÁGRAFO 2. </b>
            FORMA DE PAGO: Los valores antes mencionados se deben consignar en
            la cuenta Ahorros número XXXXXXXXXXXXX del banco de Colombia a
            nombre de Julián Avellaneda C.C. No. 79.046.803. y porta{" "}
            <b>PARÁGRAFO 3</b>. Los valorespagados se entenderán como honorarios
            definitivos si el <b>PODERDANTE</b> no continúa con el proceso,
            TAMBIÉN si no cumple con el pago de los demás valores acordados, en
            consecuencia, autoriza al <b>APODERADO</b> para que retire o de por
            terminado el proceso de negociación con las implicaciones legales y
            comerciales que tienen para el
            <b> PODERDANTE</b>. <b>PARÁGRAFO 4</b>. Garantías del Servicio: EL{" "}
            <b>APODERADO</b> no se compromete a garantizar resultados positivos
            por la aplicación de sus conceptos, a lo que se compromete es a
            ejecutar el contrato desarrollando las gestiones profesionales con
            diligencia y cuidado, buscando siempre proteger los intereses del{" "}
            <b>PODERDANTE</b> como si fueran suyos, la gestión del
            <b> APODERADO</b> es de medio más no de resultado. <b>SEXTA</b>.
            TERMINACIÓN DEL CONTRATO Y REVOCATORIA DEL PODER OTORGADO. El
            <b> PODERDANTE</b> no podrá revocar el mandato o el presente
            contrato salvo concepto previo del abogado o cuando se presenten las
            causales para darlo por terminado unilateralmente que para el efecto
            serían aquellas contempladas en la Ley 1123 de 2007; en caso de que
            el <b>PODERDANTE</b> decida revocar unilateralmente este mandato sin
            que se demuestre la responsabilidad del <b>APODERADO</b>, deberá
            cancelar al <b>APODERADO</b> la correspondiente indemnización de
            perjuicios. En el evento en que el <b>PODERDANTE</b> llegare a
            revocar el poder conferido al <b>APODERADO</b> sin justa causa,
            pagará el CIEN POR CIENTO (100%) de los honorarios pactados
            pendientes de pago al momento de la revocatoria. <b>PARÁGRAFO 1</b>.
            El <b>PODERDANTE</b> certifica que ha sido informado{" "}
            <b>PERSONALMENTE O POR VIDEO CONFERENCIA</b> directamente por el
            ABOGADO en detalle, y sin limitarse a los temas relacionados en esta
            cláusula, de las ventajas, desventajas e implicaciones DE LA LEY DE
            INSOLVENCIA DE PERSONAS NATURALES NO COMERCIANTES: 1. Tanto en el
            evento de que haya un acuerdo, que, en términos generales, siempre
            dependerá de la asistencia y/o voluntad y/o aceptación de los
            acreedores siendo necesario el voto favorable (plural) de más del
            cincuenta por ciento (50%) para acuerdos de menos de 5 años y de más
            del sesenta por ciento (60%) para un acuerdo de más de 5 años; como
            en el evento que haya un incumplimiento del acuerdo si fuere el
            caso. 2. Que los beneficios de suspensión de cobros, procesos
            ejecutivos y de restitución de inmuebles y/o medidas cautelares y/o
            remates se darán una vez se hayan pagado como mínimo el treinta por
            ciento (30%) de los honorarios pactados en este contrato y sea
            admitido y notificado a los acreedores el trámite por el operador de
            insolvencia, y dependerá de los tiempos de los juzgados y/o
            acreedores y que ante una inobservancia de estos, deberemos
            presentar requerimientos legales en cada caso. 3. Que si no hay
            acuerdo Y/O no asiste por lo menos una pluralidad del cincuenta por
            ciento (50%) de los acreedores se irá a LA LIQUIDACIÓN PATRIMONIAL
            teniendo claras las implicaciones y/o responsabilidades sobre todo
            en lo referente responsabilidad de los codeudores y eventuales
            efectos de la liquidación patrimonial frente a centrales de riesgos,
            patrimonio de familia, afectación a vivienda familiar, LEASING y/o
            inmuebles y/o vehículos y/o cualquier clase de activos de propiedad
            del <b>PODERDANTE</b> y sus codeudores. 4.También que cualquier
            ocultamiento de procesos en contra o a favor, deudas, activos, venta
            de activos durante los últimos dieciocho (18) meses y/o actos de
            donación y/o liquidación de sociedad conyugal dentro de los últimos
            veinticuatro (24) meses, sin poderlos justificar bajo un negocio
            perfectamente real, o imprecisión en la determinación de activos,
            ingresos, gastos dará como resultado la nulidad del proceso y la
            posibilidad de responsabilidad penal del <b>PODERDANTE</b>,
            perdiendo cualquier valor que se haya pagado como honorarios de
            abogados y/o del operador de insolvencia. 5. Que estos beneficios
            jurídicos de suspensión de procesos, entre otros, inician cuando se
            haya pagado el treinta por ciento (30%) de los honorarios acordados
            en el presente contrato. <b>PARÁGRAFO 2</b>. El <b>PODERDANTE </b>{" "}
            autoriza al
            <b> APODERADO</b> para que retire o dé por terminado el proceso de
            negociación con las implicaciones legales y comerciales que tienen
            para el <b> PODERDANTE</b> ante el incumplimiento del{" "}
            <b>PODERDANTE </b>
            en cualquier pago de las cuotas pactadas en el presente contrato.{" "}
            <u>EN NINGÚN CASO HABRÁ DEVOLUCIÓN DE DINERO</u>.<b> SÉPTIMA</b>.
            DURACIÓN. El presente contrato tendrá vigencia hasta que se den los
            supuestos de la cláusula PRIMERA de este contrato, siempre y cuando
            se haya iniciado el trámite de INSOLVENCIA formal ante el operador
            dentro de los doce (12) meses siguientes a la firma del presente
            contrato, en caso contrario se entenderá que el
            <b>PODERDANTE</b> desiste del trámite y se dará por terminado,
            entendiendo que los pagos realizados hasta la fecha se considerarán
            definitivos sin derecho a solicitar devolución de los mismos, este
            periodo se podrá modificar de común acuerdo entre las partes.{" "}
            <b>OCTAVA</b>. DOMICILIO, CONTROL DE CALIDAD EN LA ATENCIÓN Y
            TRATAMIENTO DE BASE DE DATOS PERSONALES: Para todos los efectos
            legales, el domicilio actual de las partes será: Por parte del{" "}
            <b>PODERDANTE</b>. Dirección física:{" "}
            {cliente.direccion.toUpperCase()}
            Celular: {cliente.telefono} correo electronico: {cliente.correo}y
            por parte del <b>APODERADO</b>, Dirección física: Cra. 10 N0 97ª 13
            Oficina 202 torre B. al correo electrónico: J.AVELLANEDA@AVEZA.CO
            Celular 3502803909. . Así mismo, el <b>PODERDANTE</b> autoriza desde
            ya al <b>APODERADO</b> para eventualmente realizar la grabación y
            registro de las llamadas (comunicaciones) que se les realicen por
            parte del <b>APODERADO</b> al <b>PODERDANTE</b> o viceversa a
            efectos de verificar la información brindada, para efectos de
            control de calidad y, excepcionalmente, para efectos de ser
            utilizado como medio de prueba, con las previsiones legales del
            caso. Finalmente, se dará aplicación a lo establecido en la Ley 1581
            de 2012 y el Decreto 1377 de 2013 en acatamiento de la política de
            protección de datos personales. <b>PARÁGRAFO 1</b>. El{" "}
            <b>PODERDANTE</b>, deberá informar cualquier modificación de los
            datos de notificación aportados y cualquier perjuicio que se pueda
            ocasionar por efecto del cambio de notificación o la imposibilidad
            de su ubicación no acarreará responsabilidad por parte del{" "}
            <b>APODERADO</b>. <b>PARÁGRAFO 2</b>. El <b>PODERDANTE</b> informará
            al <b>APODERADO</b> sus datos de notificación y ubicación a efectos
            de tener un respaldo de notificaciones, los cuales serán almacenados
            en la base de datos del <b>APODERADO</b>. <b>PARÁGRAFO 3</b>. Cada
            que sea posible se realizará en un anexo al presente contrato de
            prestación de servicios profesionales aquellos datos relevantes y
            que hayan sido modificados e informados. <b>PARÁGRAFO 4</b>. El
            horario de atención será, en cualquier caso, entre las 8:00 horas y
            las 17:00 horas en días hábiles. <b>PARÁGRAFO 5</b>. EL
            <b> PODERDANTE</b> en su calidad de titular de información, actuando
            libre y voluntariamente, autoriza al
            <b> APODERADO</b> de manera expresa e irrevocable o a quien
            represente sus derechos, a consultar, solicitar, suministrar,
            reportar, procesar y divulgar toda la información que se refiera a
            su comportamiento crediticio, financiero, comercial, de servicios a
            las Centrales de Información que administra la Asociación Bancaria y
            de Entidades Financieras de Colombia, o a quien represente sus
            derechos. <b>NOVENA</b>. CONFIDENCIALIDAD: LAS PARTES se comprometen
            a mantener reserva y no divulgar la información que obtenga en el
            cumplimiento del contrato, solo podrán utilizar la información para
            los fines que se relacionan con la ejecución del presente contrato y
            nunca de manera posterior, pues incurriría en las sanciones de ley e
            incurriendo a su vez en causal de terminación del presente contrato.{" "}
            <b>DÉCIMA</b>. RENUNCIA DEL PODER POR PARTE DEL <b>APODERADO</b>: El{" "}
            <b>APODERADO</b> podrá RENUNCIAR al poder en la forma establecida en
            el Código General del Proceso sin que ello implique indemnización
            alguna en favor del <b>PODERDANTE</b>, también por el incumplimiento
            de cualquiera de las cláusulas de este contrato por cuenta del{" "}
            <b>PODERDANTE</b>. <b>DÉCIMA PRIMERA</b>. MÉRITO EJECUTIVO DEL
            PRESENTE CONTRATO: Este documento presta mérito ejecutivo para hacer
            exigibles las obligaciones y prestaciones contenidas en él. En
            consecuencia, tanto el <b>PODERDANTE</b> como el <b>APODERADO</b>{" "}
            acuerdan en forma expresa, que este documento privado constituirá
            título ejecutivo suficiente para que se exija por vía judicial el
            cumplimiento de las obligaciones dinerarias. En tal sentido el
            presente instrumento presta mérito ejecutivo por el monto total de
            lo pactado o por el saldo insoluto. El <b>PODERDANTE</b> desde ahora
            renuncia a los requerimientos de Ley. <b>DÉCIMA SEGUNDA</b>:
            PERFECCIONAMIENTO y ANEXOS: La aceptación del <b>PODERDANTE</b> que
            suscribe el presente contrato de prestación de servicios
            profesionales constituye la aceptación del contrato en las
            condiciones expresadas dentro del mismo.
            <b>DÉCIMA TERCERA</b>: FIRMAS. De acuerdo el <b>PODERDANTE</b> con
            el contenido de este documento, leído y aprobado, así como
            explicados por el <b>APODERADO</b> los términos jurídicos empleados
            en su redacción, se procede a la firma de las PARTES que suscriben
            el presente contrato.
          </p>
          <div className="firmas">
            <div className="firmacliente">
              <p className="firma">
                <b>PODERDANTE</b>
              </p>
              <br />
              <br />
              <br />
              <h2 className="firma">
                {cliente.nombres.toUpperCase()}{" "}
                {cliente.apellidos.toUpperCase()} <br />
                C.C. No. {cliente.cedula} <br />
                {cliente.direccion.toUpperCase()},{" "}
                {cliente.Ciudads[0].nombre_ciudad}
                <br />
                Cel: {cliente.celular}
              </h2>
            </div>
            <div className="firmaabogado">
              <p className="firma">
                {" "}
                <b>APODERADO</b>
              </p>
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
          <footer className="piecontrato">
            CARRERA 10 No. 97A - 13 Bogotá Trade Center · Torre B · Oficina 202
            <br />
            Bogotá, Colombia Tel: - Celular: (57)- 350 2803909
            <br />
            www.aveza.co
          </footer>
        </div>
        <input
          className="botones"
          type="button"
          value="Guardar en PDF"
          onClick={generatePDF}
        />
        <br />
      </div>
    </div>
  );
};

export default PrevisualizarContrato;
