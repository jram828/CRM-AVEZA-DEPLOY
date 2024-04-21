import React, { Component, useEffect, useState } from "react";
//USANDO CANVAS

// class ExportToPDF extends Component {
//   printDocument() {
//     const input = document.getElementById("divToPrint");
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, "JPEG", 0, 0);
//       pdf.save("download.pdf");
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.printDocument}>Descargar PDF</button>
//         <div id="divToPrint">
//           {/* Aquí puedes agregar los componentes o contenido que deseas incluir en el PDF */}
//           <p>Contenido del PDF</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default ExportToPDF;

// <!-- jQuery library -->
// <script src="js/jquery.min.js"></script>

// <!-- jsPDF library -->
// <script src="js/jsPDF/dist/jspdf.min.js"></script>

{/* <div id="content">
    <!-- el contenido HTML va aqui -->
</div>

<div id="elementH"></div> */}

// const ExportToPDF = (elementToPrint, element) => {
//   var doc = new jsPDF();
  
//   var elementHTML = $(elementToPrint).html();
//   var specialElementHandlers = {
//     "#elementH": function (element, renderer) {
//       return true;
//     },
//   };
//   doc.fromHTML(elementHTML, 15, 15, {
//     width: 170,
//     elementHandlers: specialElementHandlers,
//   });

//   // Save the PDF
//   doc.save("sample-document.pdf");
// }

// module.exports = ExportToPDF;
import ReactPDF, {
  Document,
  View,
  Text,
  Page,
  StyleSheet,
  PDFDownloadLink,
  //Image,
  // PDFDownloadLink,
  // PDFViewer,
} from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import { URL } from "../../App";
import axios from "axios";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  // page:{margin:"5px"},
  View: { padding: "20px", textAlign: "justify", fontSize: "14px" },
});


function PDF({ cliente }) {
  
  
  // {
  //   cliente;
  // }
   //const cliente = useSelector((state) => state.cliente);
        // const [cliente, setCliente] = useState({});
        // const { cedula } = useParams();
        // console.log("Cedula PDF:", cliente.cedula);
        // useEffect(() => {
        //   axios.get(`${URL}${cedula}`, { cedula: cedula }).then(({ data }) => {
        //     if (data.nombres) {
        //       setCliente(data);
        //     } else {
        //       window.alert("No hay clientes con esa cedula");
        //     }
        //   });
        // }, []);
  // const Nombres = "Julian";
  // const Apellidos = "Arango";
  // {
  //   Nombres;
  // }
  // {
  //   Apellidos;
  // }
  const styles = StyleSheet.create({
    page: { padding: "50px" },
    section: { color: "white", textAlign: "center", margin: 30 },
    View: { fontSize: "12px", textAlign: "justify",display:"flex"},
    titulo: { fontSize: "12px", textAlign: "center", fontWeight: "bold" },
    negrita: { fontWeight: "bold" },
  });

  console.log('Cliente PDF: ', cliente)
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.View}>
          <Text style={styles.titulo}>
            CONTRATO DE PRESTACIÓN DE SERVICIOS ENTRE{" "}
            {cliente.nombres.toUpperCase()} {cliente.apellidos.toUpperCase()} Y
            JULIÁN ARTURO AVELLANEDA B{" "}
          </Text>
          <Text>
            El presente CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES, se
            regirá por las siguientes cláusulas: PRIMERA. OBJETO DEL CONTRATO:
            Representar y asesorar jurídicamente a
          </Text>{" "}
          <Text style={{ fontWeight: "bold" }}>
            {cliente.nombres} {cliente.apellidos}
          </Text>
          <Text>, identificado/a con cédula de ciudadanía número No. </Text>
          <Text style={styles.negrita}>{cliente.cedula} </Text>
          <Text>
            quien de ahora en adelante se denominará PODERDANTE, en un proceso
            de negociación de pasivos para gestionar sus deudas de{" "}
          </Text>
          <Text>
            , de conformidad a las disposiciones del Artículo 531 del Código
            General del Proceso, hasta lograr el acuerdo o si transcurrido el
            término previsto en el artículo 544 no se celebra el acuerdo de pago
            verificar que el conciliador declarará el fracaso de la negociación
            y que sea remitida las diligencias al juez civil de conocimiento,
            para que decrete la apertura del proceso de liquidación patrimonial.
            Si el proceso continuó a liquidación patrimonial se aplicarán las
            condiciones económicas de honorarios previstas más abajo para esa
            etapa. Para esto, el abogado
          </Text>
          <Text>.</Text>
          <Text>identificado con cédula de ciudadanía No.</Text>
          <Text>.</Text>
          <Text>y portador de la Tarjeta Profesional de Abogado No.</Text>
          <Text>.</Text>
          <Text>
            {" "}
            del Consejo Superior de la Judicatura, quien de ahora en adelante se
            denominará EL APODERADO se obliga a emplear todos los medios
            profesionales necesarios que le permitan cumplir con la tarea
            ajustada a la realidad económica de EL PODERDANTE. PARÁGRAFO: LA
            REPRESENTACIÓN EN CASO DE INCUMPLIMIENTO AL ACUERDO DE PAGO O POR
            ACCIONES LEGALES GENERADAS POR PRESENTACIÓN DE INFORMACIÓN FALSA NO
            ESTÁ CONTEMPLADA DENTRO DE ESTOS HONORARIOS, esta será objeto de una
            nueva oferta de servicios. SEGUNDA. NATURALEZA DEL CONTRATO. El
            presente contrato es de naturaleza civil y como tal se rige por las
            disposiciones del Código Civil (Arts. 2142 y ss.) y demás normas
            concordantes en aquellos aspectos sobre los cuales no haya
            estipulación expresa en el texto del presente contrato. TERCERA.
            OBLIGACIONES ESPECIALES DEL APODERADO. 1- En el desarrollo de las
            facultades conferidas en el poder, el APODERADO se compromete a
            mantener fidelidad con el PODERDANTE, a respetar y a tener en cuenta
            las obligaciones y deberes del Abogado contenidas en la Ley 1123 de
            2007. 2- El APODERADO se compromete a adelantar la gestión de la
            mejor manera posible, en atención de la acción encomendada,
            desplegando en ello el empeño profesional necesario y en los
            términos exigidos por los Artículos 73 y siguientes del Código
            General del Proceso. 3- El APODERADO adelantará los trámites
            procedentes conforme a lo que él considere conveniente en el
            operador de insolvencia y/o ante notaría, legalmente habilitado para
            conocer de INSOLVENCIA DE PERSONAS NATURALES NO COMERCIANTES, que el
            apoderado considere tiene experiencia en el caso concreto. 4-
            Adelantar para el PODERDANTE el proceso en forma diligente rindiendo
            informes sobre el estado de este en la forma más eficaz posible. 5-
            Comunicar cualquier anomalía o situación que tenga que ver con los
            intereses del PODERDANTE. Se aclara que las obligaciones del
            APODERADO son de medio mas no de resultado. CUARTA. OBLIGACIONES DE
            EL PODERDANTE. 1- el PODERDANTE a su vez, se compromete a obrar con
            fidelidad respecto del poder conferido y el APODERADO, manteniéndose
            siempre dentro de los parámetros impuestos por la verdad, la buena
            fe, el respeto y las obligaciones que en su calidad le impone la ley
            civil y en particular las contenidas en el Artículo 2184 del Código
            Civil. 2- Igualmente el PODERDANTE queda obligado a suministrar toda
            la información que requiera el APODERADO para cumplir con la labor
            encomendada y será de absoluta responsabilidad del PODERDANTE lo
            dicho y las aseveraciones que exponga para su representación, en
            especial todo lo relativo a las pruebas, suministro de documentos y
            la comparecencia de testigos para el éxito del objeto planteado, EL
            PODERDANTE se compromete a entregar AL APODERADO toda la información
            indispensable para la elaboración de la solicitud del trámite de
            negociación de deudas, así mismo se obliga EL PODERDANTE a realizar
            las declaraciones sobre los distintos hechos, las cuales se
            entienden rendidas bajo la gravedad del juramento, para lo cual
            indica, expresamente, que no ha incurrido en omisiones,
            imprecisiones o errores voluntarios que impidan conocer su verdadera
            situación económica, su capacidad de pago, sus bienes, sus
            obligaciones y sus gastos de manutención, en consecuencia, narra los
            hechos, recauda y entrega AL APODERADO todas las pruebas y soportes
            necesarios que se requieran para la consecución de los fines
            enunciados. EL PODERDANTE manifiesta que es una persona natural no
            comerciante, que No se dedica profesionalmente a ninguna de las
            actividades previstas en el artículo 20 del Código de Comercio, que
            sus ingresos nunca han provenido de actividades ilícitas y que no ha
            estado en ninguna lista restrictiva vinculante para Colombia en
            lavado de activos y/o financiación del terrorismo, que NO es
            controlante de ninguna sociedad civil o comercial, en los términos
            de los artículos 260 y siguientes del Código de Comercio y que tiene
            dificultades para cumplir con su obligaciones y compromisos
            financieros, razón por la cual ha solicitado los servicios
            profesionales a EL APODERADO para que le asesore y, en su calidad de
            profesional del derecho lo represente en el trámite de negociación
            de pasivos de conformidad con lo acordado en el presente contrato,
            para lo cual el PODERDANTE otorgará el correspondiente poder al
            APODERADO para su respectiva representación, pudiendo el APODERADO
            sustituir, bajo su responsabilidad, en cualquier momento a otro
            Abogado en ejercicio. El PODERDANTE será responsable por todos los
            perjuicios que se ocasionen por no allegar la información requerida
            de manera oportuna al APODERADO. 3) Los gastos que ocasione el
            proceso, tales como certificados de cámara de comercio de los
            acreedores, notificaciones, fotocopias, investigaciones, honorarios
            de auxiliares de la justicia, peritos, copias, el costo de los
            pasajes fuera de Bogotá, viáticos del abogado y demás, serán por
            cuenta del PODERDANTE. 4) En caso que dentro del proceso se
            presenten cuotas de administración, el PODERDANTE deberá cancelar
            las que se causen durante el proceso de insolvencia, teniendo en
            cuenta que se trata de gastos de administración, ya que, de no estar
            a paz y salvo con las mismas no podrá realizarse el respectivo
            acuerdo de pago. PARÁGRAFO: De llegar a adelantarse cualquier acción
            judicial en la que el PODERDANTE le haya manifestado al APODERADO
            que la información fuera real y llegaré a concluirse que no era así,
            los gastos ocasionados con las actuaciones judiciales que se
            adelantaren serán asumidas económicamente por el PODERDANTE quien
            deberá entregarle al APODERADO los valores generados por lo
            anterior. QUINTA. REMUNERACIÓN. El APODERADO recibirá por parte del
            PODERDANTE, LA SUMA DE DIEZ MILLONES TRESCIENTOS VEINTE MIL PESOS
            M/C ($10.320.000) ANTES DE IMPUESTOS, este valor contempla las
            tarifas legales que se deben pagar a los operadores de insolvencia y
            los honorarios profesionales del APODERADO, los cuales serán
            cancelados así: si es de contado en una sola suma por valor de DIEZ
            MILLONES TRESCIENTOS VEINTE MIL PESOS M/C ($10.320.000) ANTES DE
            IMPUESTOS, Y POR ÚLTIMO CUALQUIER IMPUESTO QUE SE GENERE. Para la
            representación legal y/o revisión el proceso en la etapa de
            liquidación patrimonial será objeto de otro acuerdo de honorarios
            que será así: un rubro mensual de CIEN MIL PESOS M/C ($100.000) con
            incrementos en EL MAYOR VALOR ENTRE EL IPC Y EL AUMENTO DEL SALARIO
            MINIMO cada enero, hasta que se termine el proceso, pagaderos
            mensualmente los cinco (5) primeros días de cada mes. PARÁGRAFO 1.
            Se aclara que este valor cubre los honorarios y/o derechos que por
            ley hay que pagar al centro de conciliación, pero NO contempla los
            honorarios del liquidador que sea asignado POR EL JUEZ en el caso
            que el trámite avance a la etapa de LIQUIDACIÓN PATRIMONIAL.
            PARÁGRAFO 2. FORMA DE PAGO: Los valores antes mencionados se deben
            consignar en la cuenta Ahorros número
          </Text>
          <Text>.</Text>
          <Text>del banco de Colombia a nombre de</Text>
          <Text>.</Text>
          <Text>con cedula de ciudadania No</Text>
          <Text>.</Text>
          <Text>
            y portaPARÁGRAFO 3. Los valorespagados se entenderán como honorarios
            definitivos si el PODERDANTE no continúa con el proceso, TAMBIÉN si
            no cumple con el pago de los demás valores acordados, en
            consecuencia, autoriza al APODERADO para que retire o de por
            terminado el proceso de negociación con las implicaciones legales y
            comerciales que tienen para el PODERDANTE. PARÁGRAFO 4. Garantías
            del Servicio: EL APODERADO no se compromete a garantizar resultados
            positivos por la aplicación de sus conceptos, a lo que se compromete
            es a ejecutar el contrato desarrollando las gestiones profesionales
            con diligencia y cuidado, buscando siempre proteger los intereses
            del PODERDANTE como si fueran suyos, la gestión del APODERADO es de
            medio más no de resultado. SEXTA. TERMINACIÓN DEL CONTRATO Y
            REVOCATORIA DEL PODER OTORGADO. El PODERDANTE no podrá revocar el
            mandato o el presente contrato salvo concepto previo del abogado o
            cuando se presenten las causales para darlo por terminado
            unilateralmente que para el efecto serían aquellas contempladas en
            la Ley 1123 de 2007; en caso de que el PODERDANTE decida revocar
            unilateralmente este mandato sin que se demuestre la responsabilidad
            del APODERADO, deberá cancelar al APODERADO la correspondiente
            indemnización de perjuicios. En el evento en que el PODERDANTE
            llegare a revocar el poder conferido al APODERADO sin justa causa,
            pagará el CIEN POR CIENTO (100%) de los honorarios pactados
            pendientes de pago al momento de la revocatoria. PARÁGRAFO 1. El
            PODERDANTE certifica que ha sido informado PERSONALMENTE O POR VIDEO
            CONFERENCIA directamente por el ABOGADO en detalle, y sin limitarse
            a los temas relacionados en esta cláusula, de las ventajas,
            desventajas e implicaciones DE LA LEY DE INSOLVENCIA DE PERSONAS
            NATURALES NO COMERCIANTES: 1. Tanto en el evento de que haya un
            acuerdo, que, en términos generales, siempre dependerá de la
            asistencia y/o voluntad y/o aceptación de los acreedores siendo
            necesario el voto favorable (plural) de más del cincuenta por ciento
            (50%) para acuerdos de menos de 5 años y de más del sesenta por
            ciento (60%) para un acuerdo de más de 5 años; como en el evento que
            haya un incumplimiento del acuerdo si fuere el caso. 2. Que los
            beneficios de suspensión de cobros, procesos ejecutivos y de
            restitución de inmuebles y/o medidas cautelares y/o remates se darán
            una vez se hayan pagado como mínimo el treinta por ciento (30%) de
            los honorarios pactados en este contrato y sea admitido y notificado
            a los acreedores el trámite por el operador de insolvencia, y
            dependerá de los tiempos de los juzgados y/o acreedores y que ante
            una inobservancia de estos, deberemos presentar requerimientos
            legales en cada caso. 3. Que si no hay acuerdo Y/O no asiste por lo
            menos una pluralidad del cincuenta por ciento (50%) de los
            acreedores se irá a LA LIQUIDACIÓN PATRIMONIAL teniendo claras las
            implicaciones y/o responsabilidades sobre todo en lo referente
            responsabilidad de los codeudores y eventuales efectos de la
            liquidación patrimonial frente a centrales de riesgos, patrimonio de
            familia, afectación a vivienda familiar, LEASING y/o inmuebles y/o
            vehículos y/o cualquier clase de activos de propiedad del PODERDANTE
            y sus codeudores. 4.También que cualquier ocultamiento de procesos
            en contra o a favor, deudas, activos, venta de activos durante los
            últimos dieciocho (18) meses y/o actos de donación y/o liquidación
            de sociedad conyugal dentro de los últimos veinticuatro (24) meses,
            sin poderlos justificar bajo un negocio perfectamente real, o
            imprecisión en la determinación de activos, ingresos, gastos dará
            como resultado la nulidad del proceso y la posibilidad de
            responsabilidad penal del PODERDANTE, perdiendo cualquier valor que
            se haya pagado como honorarios de abogados y/o del operador de
            insolvencia. 5. Que estos beneficios jurídicos de suspensión de
            procesos, entre otros, inician cuando se haya pagado el treinta por
            ciento (30%) de los honorarios acordados en el presente contrato.
            PARÁGRAFO 2. El PODERDANTE autoriza al APODERADO para que retire o
            dé por terminado el proceso de negociación con las implicaciones
            legales y comerciales que tienen para el PODERDANTE ante el
            incumplimiento del PODERDANTE en cualquier pago de las cuotas
            pactadas en el presente contrato. EN NINGÚN CASO HABRÁ DEVOLUCIÓN DE
            DINERO. SÉPTIMA. DURACIÓN. El presente contrato tendrá vigencia
            hasta que se den los supuestos de la cláusula PRIMERA de este
            contrato, siempre y cuando se haya iniciado el trámite de
            INSOLVENCIA formal ante el operador dentro de los doce (12) meses
            siguientes a la firma del presente contrato, en caso contrario se
            entenderá que el PODERDANTE desiste del trámite y se dará por
            terminado, entendiendo que los pagos realizados hasta la fecha se
            considerarán definitivos sin derecho a solicitar devolución de los
            mismos, este periodo se podrá modificar de común acuerdo entre las
            partes. OCTAVA. DOMICILIO, CONTROL DE CALIDAD EN LA ATENCIÓN Y
            TRATAMIENTO DE BASE DE DATOS PERSONALES: Para todos los efectos
            legales, el domicilio actual de las partes será: Por parte del
            PODERDANTE. Dirección física:
          </Text>
          <Text>{cliente.direccion}</Text>
          <Text>correo electronico:</Text>
          <Text>{cliente.correo}</Text>
          <Text>numerocelular:</Text>
          <Text>{cliente.celular}</Text>
          <Text>y por parte del APODERADO, Dirección física:</Text>
          <Text>.</Text>
          <Text>correo electrónico:</Text>
          <Text>.</Text>
          <Text>número de celular</Text>
          <Text>.</Text>
          <Text>
            . Así mismo, el PODERDANTE autoriza desde ya al APODERADO para
            eventualmente realizar la grabación y registro de las llamadas
            (comunicaciones) que se les realicen por parte del APODERADO al
            PODERDANTE o viceversa a efectos de verificar la información
            brindada, para efectos de control de calidad y, excepcionalmente,
            para efectos de ser utilizado como medio de prueba, con las
            previsiones legales del caso. Finalmente, se dará aplicación a lo
            establecido en la Ley 1581 de 2012 y el Decreto 1377 de 2013 en
            acatamiento de la política de protección de datos personales.
            PARÁGRAFO 1. El PODERDANTE, deberá informar cualquier modificación
            de los datos de notificación aportados y cualquier perjuicio que se
            pueda ocasionar por efecto del cambio de notificación o la
            imposibilidad de su ubicación no acarreará responsabilidad por parte
            del APODERADO. PARÁGRAFO 2. El PODERDANTE informará al APODERADO sus
            datos de notificación y ubicación a efectos de tener un respaldo de
            notificaciones, los cuales serán almacenados en la base de datos del
            APODERADO. PARÁGRAFO 3. Cada que sea posible se realizará en un
            anexo al presente contrato de prestación de servicios profesionales
            aquellos datos relevantes y que hayan sido modificados e informados.
            PARÁGRAFO 4. El horario de atención será, en cualquier caso, entre
            las 8:00 horas y las 17:00 horas en días hábiles. PARÁGRAFO 5. EL
            PODERDANTE en su calidad de titular de información, actuando libre y
            voluntariamente, autoriza al APODERADO de manera expresa e
            irrevocable o a quien represente sus derechos, a consultar,
            solicitar, suministrar, reportar, procesar y divulgar toda la
            información que se refiera a su comportamiento crediticio,
            financiero, comercial, de servicios a las Centrales de Información
            que administra la Asociación Bancaria y de Entidades Financieras de
            Colombia, o a quien represente sus derechos. NOVENA.
            CONFIDENCIALIDAD: LAS PARTES se comprometen a mantener reserva y no
            divulgar la información que obtenga en el cumplimiento del contrato,
            solo podrán utilizar la información para los fines que se relacionan
            con la ejecución del presente contrato y nunca de manera posterior,
            pues incurriría en las sanciones de ley e incurriendo a su vez en
            causal de terminación del presente contrato. DÉCIMA. RENUNCIA DEL
            PODER POR PARTE DEL APODERADO: El APODERADO podrá RENUNCIAR al poder
            en la forma establecida en el Código General del Proceso sin que
            ello implique indemnización alguna en favor del PODERDANTE, también
            por el incumplimiento de cualquiera de las cláusulas de este
            contrato por cuenta del PODERDANTE. DÉCIMA PRIMERA. MÉRITO EJECUTIVO
            DEL PRESENTE CONTRATO: Este documento presta mérito ejecutivo para
            hacer exigibles las obligaciones y prestaciones contenidas en él. En
            consecuencia, tanto el PODERDANTE como el APODERADO acuerdan en
            forma expresa, que este documento privado constituirá título
            ejecutivo suficiente para que se exija por vía judicial el
            cumplimiento de las obligaciones dinerarias. En tal sentido el
            presente instrumento presta mérito ejecutivo por el monto total de
            lo pactado o por el saldo insoluto. El PODERDANTE desde ahora
            renuncia a los requerimientos de Ley. DÉCIMA SEGUNDA:
            PERFECCIONAMIENTO y ANEXOS: La aceptación del PODERDANTE que
            suscribe el presente contrato de prestación de servicios
            profesionales constituye la aceptación del contrato en las
            condiciones expresadas dentro del mismo. DÉCIMA TERCERA: FIRMAS. De
            acuerdo el PODERDANTE con el contenido de este documento, leído y
            aprobado, así como explicados por el APODERADO los términos
            jurídicos empleados en su redacción, se procede a la firma de las
            PARTES que suscriben el presente contrato.
          </Text>
          <Text>.</Text>
        </View>
      </Page>
    </Document>
  );
  
}
export default PDF;
// ReactPDF.render(<PDF />);