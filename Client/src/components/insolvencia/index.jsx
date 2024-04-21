import "../../App.css";
import logo from "../../img/logoAveza.png";
import React from "react";
import { useSelector } from "react-redux";
import "../insolvencia/insolvencia.css";
import { printDivContent } from "../../utils/printDivContent";

const Insolvencia = () => {

  const cliente = useSelector((state) => state.cliente);
  
  function generatePDF() {
    printDivContent("continsolvencia");
  }

  return (
    <div>
      <div className="logo-aveza">
        <img
          src="https://aveza.co/wp-content/uploads/2021/06/LOGO-350.png"
          alt="logo-aveza"
          title="AVEZA SAS"
        />
      </div>
      <h1 className="titulo">Solicitud de Insolvencia</h1>
      <form className="continsolvencia" id="continsolvencia">
        <br />
        <div className="insolvencia">
          <p>Señores</p>
          <p>
            <b>EQUIDAD JURIDICA.</b>
          </p>
          <p>
            <b>CENTRO DE CONCILIACION, ARBITRAJE Y AMIGABLE COMPOSICION.</b>
          </p>
          <p>Bogotá D.C,.</p>
          <p>
            <b>REFERENCIA:</b> Solicitud de audiencia de negociación de deudas.
            Proceso de Insolvencia Económica de Persona Natural No Comerciante.
          </p>
          <p>
            <b>
              {cliente.nombres} {cliente.apellidos}{" "}
            </b>{" "}
            mayor de edad, con domicilio en esta ciudad, identificado(a) con la
            cédula de ciudadanía número
            <b> {cliente.cedula}</b> expedida en la ciudad de Cajamarca actuando
            en mi propio nombre y en mi condición de{" "}
            <b>PERSONA NATURAL NO COMERCIANTE</b>, con fundamento en la Ley 1564
            de 2012, especialmente en el Artículo 531 y siguientes, y en Decreto
            Reglamentario 1069 de 2015, mediante el presente escrito, solicito
            que se inicie y tramite el correspondiente proceso de negociación de
            deudas con mis acreedores, de quienes suministraré información
            completa más adelante en esta solicitud.
          </p>
          <p>
            En adición a lo antes expuesto, declaro que soy persona natural no
            comerciante, identifico y relaciono a más de dos (2) acreedores en
            mora por más de noventa (90) días y, el valor porcentual de mis
            obligaciones incumplidas representa no menos del cincuenta por
            ciento (50%) del pasivo total a mi cargo, cumpliendo de esta forma
            con los supuestos de insolvencia establecidos en el Artículo 538 del
            Código General del Proceso, razón por la cual, es procedente este
            trámite.
          </p>
          <p>
            Manifiesto bajo la gravedad del juramento, que toda la información
            que se suministra y adjunta en esta solicitud es verdadera, no se ha
            incurrido en omisiones, imprecisiones o errores voluntarios que
            impidan conocer mi verdadera situación económica y capacidad de
            pago.
          </p>
          <p>
            De conformidad al artículo 539 de la Ley 1564 de 2012 o Código
            General del Proceso, la presente solicitud se fundamenta:
          </p>
          <h3>REQUISITOS DE LA SOLICITUD</h3>
          <p>
            <b>
              1. Las causas que me conllevaron a mi situación actual de
              insolvencia económica fueron:
            </b>
          </p>
          <p>
            La insolvencia comenzo despues de quedarme sin empleo en noviembre
            del año 2018 ya que trabajaba para un contratista del tunel de la
            linea, en el proyecto cruze de la coordillera central, aquí tenia
            capacidad de endeudamiento ya que me pagaban comisiones por
            cumplimiento, quedandome libre totalmente el sueldo mes a mes,
            desafortunadamente a la empresa contratista se le termino el
            contrato, y tuvimos que parar actividades para posteriormente
            quedarme sin empleo hasta la fecha, siendo dibujante arquitectonico
            y teniendo el equipo de oficina comenze a trabajar como
            independiente tomando trabajos pequeños de legalizacion de precios y
            licencias, en donde realmente solo suplia o suplo necesidades
            basicas como mi manutencion y mi alimentacion, por tal motivo me
            queda supremamente dificil llevar las obligaciones financieras al
            dia, aparte de todo esto, viendo la situacion por la que estoy
            atravesando intente buscar trabajo en constructoras, pasando hojas
            de vida buscando unos mejores ingresos siendo negativas las
            diferentes solicitudes de empleo, llevando la misma situación por
            mas de 4 , situacion que me obligo a trasladarme a la ciudad de
            Bogota en donde se me abren las puertas laboralmente y me he podido
            normalizar de tal manera que con el apoyo de mis padres podre pagar
            mis deudas.
          </p>
          <p>
            En resumen me permito manifestar que por la modificación de mis
            condiciones económicas iniciales no me ha permitido cubrir las
            obligaciones financieras en un tiempo oportuno y bajo los parámetros
            o condiciones bajos los cuales fueron suscritas, dando lugar a la
            cesación de pagos.
          </p>
          <p>
            <b>
              2. Hasta la fecha, me encuentro en cesación de pagos con los
              siguientes acreedores:
            </b>
          </p>
          <div className="contenetor-tabla">
            <table className="deudas">
              <tr>
                <th>DEUDOR</th>
                <th>VALOR</th>
                <th>DIAS DE MORA</th>
              </tr>
              <tr>
                <td>CHEVIPLAN</td>
                <td>$18.000.000</td>
                <td>más de 90 días</td>
              </tr>
              <tr>
                <td>BANCO W</td>
                <td>$1.400.000</td>
                <td>más de 90 días</td>
              </tr>
              <tr>
                <td>RAPICREDIT</td>
                <td>$390.000</td>
                <td>más de 90 días</td>
              </tr>
              <tr>
                <td>Claro</td>
                <td>$450.000</td>
                <td>más de 90 días</td>
              </tr>
              <tr>
                <td>Maria Perez</td>
                <td>$5.000.000</td>
                <td>más de 90 días</td>
              </tr>
              <tr>
                <th colspan="3">TOTAL $25.240.000</th>
              </tr>
            </table>
          </div>
          <p>
            De conformidad con la información suministrada en el cuadro
            anterior, es posible afirmar que cumplo de esta forma con cada uno
            de los supuestos de insolvencia establecidos en el Artículo 538 del
            Código General del Proceso, razón por la cual, es procedente este
            trámite.
          </p>
          <p>
            De manera expresa manifiesto, bajo la gravedad del juramento, que
            todo lo establecido en la presente solicitud es verdadera. No he
            incurrido en omisiones, imprecisiones o errores voluntarios que
            impidan conocer mi verdadera situación económica y capacidad de
            pago.
          </p>
          <p>
            <b>
              3. A continuación, presento una relación completa y actualizada de
              todos mis acreedores, en el orden de prelación de créditos que
              señalan los artículos 2488 y siguientes del Código y con corte al
              último día calendario del mes inmediatamente anterior a aquel en
              que presento la solicitud:
            </b>
          </p>
          <table className="deudas">
            <tr>
              <th colspan="2">Acreedor No.1</th>
            </tr>
            <tr>
              <td>Nombre</td>
              <td>
                <strong>
                  CHEVYPLAN S.A. SOCIEDAD ADMINISTRADORA DE PLANES DE
                  AUTOFINANCIAMIENTO COMERCIAL
                </strong>
              </td>
            </tr>
            <tr>
              <td>Nit.</td>
              <td>830.001.133-7</td>
            </tr>
            <tr>
              <td>Dirección de notificación/ciudad</td>
              <td>
                Carrera 7 No. 75 - 26 Dirección Edificio Principal. Bogotá,
                3769120
              </td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>legal@chevyplan.com.co</td>
            </tr>
            <tr>
              <td>Naturaleza del crédito</td>
              <td>Crédito de vehículo</td>
            </tr>
            <tr>
              <td>Tipo de garantía</td>
              <td>Vehículo</td>
            </tr>
            <tr>
              <td>Documento que soporta la garantía</td>
              <td>Pagare</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>$18.000.000</td>
            </tr>
            <tr>
              <td>Valor Intereses</td>
              <td>Desconozco esta información.</td>
            </tr>
            <tr>
              <td>Cuantía total de la obligación</td>
              <td>$18.000.000</td>
            </tr>
            <tr>
              <td>Clasificación del Crédito</td>
              <td>Segunda Clase</td>
            </tr>
            <tr>
              <td>Número de días en mora</td>
              <td>Más de 90 días</td>
            </tr>
          </table>
          <p>
            <b>
              4. Relación completa y detallada de mis bienes muebles e
              inmuebles, incluidos los que poseo en el exterior (si los tiene):
            </b>
          </p>
          <p>
            <b>4.1. Bienes: </b>
          </p>
          <table className="deudas">
            <tr>
              <th>
                Tipo de bien (Descripción detallada: Placa, marca, modelo,
                color, capacidad, referencia)
              </th>
              <th>Valor del bien</th>
              <th>Tipo de afectación</th>
            </tr>
            <tr>
              <td>AUTOMOVIL</td>
              <td>$46’000.000</td>
              <td>PRENDA</td>
            </tr>
          </table>
          <p>
            <b>
              5. Relación de procesos judiciales y de cualquier procedimiento o
              actuación administrativa de carácter patrimonial que se adelantan
              o cursan en mi contra:
            </b>
          </p>
          <p>No tengo conocimiento</p>
          <p>
            <b>6. Relación de ingresos: </b>
          </p>
          <p>Actualmente como abogado</p>
          <p>la suma de $ 11.700.000</p>
          <p>
            <b>7. Relación de mis gastos:</b>
          </p>
          <div>
            <table className="deudas">
              <tr>
                <th>Concepto (Mensual)</th>
                <th>Valor</th>
              </tr>
              <tr>
                <td>Energía</td>
                <td>$59.000</td>
              </tr>
              <tr>
                <td>Agua, alcantarillado y aseo</td>
                <td>$30.000</td>
              </tr>
              <tr>
                <td>Gas</td>
                <td>$45.000</td>
              </tr>
              <tr>
                <td>Telecomunicaciones (Fijo o celular)</td>
                <td>$50.000</td>
              </tr>
              <tr>
                <td>Televisión</td>
                <td>$87.000</td>
              </tr>
              <tr>
                <td>Arriendo</td>
                <td>$680.000</td>
              </tr>
              <tr>
                <td>Seguro vehicular u otro</td>
                <td>$150.000</td>
              </tr>
              <tr>
                <td>Alimentación</td>
                <td>$300.000</td>
              </tr>
              <tr>
                <td>Transporte</td>
                <td>$160.000</td>
              </tr>
              <tr>
                <td>Otros gastos: Mantenimiento vehículo</td>
                <td>$150.000</td>
              </tr>
              <tr>
                <td>Total gastos</td>
                <td>$1’711.000</td>
              </tr>
            </table>
          </div>
          <p>
            <b>8. Propuesta de pago </b>
          </p>
          <p>
            De acuerdo con mis recursos disponibles para el pago de las
            obligaciones, mi propuesta de pago real, de conformidad a mis
            posibilidades y la ayuda de mis padres, es la siguiente:
          </p>
          <p>
            Para SEGUNDA CLASE una tasa de interés del 0.5 % con cuotas
            mensuales de $497.619 por 40 meses
          </p>
          <p>
            Para QUINTA CLASE una tasa de interés del 0.5 % con cuotas mensuales
            de $ $554.594 por 5 meses
          </p>
          <p>
            <b>Información sobre sociedad conyugal y patrimonial</b>
          </p>
          <p>Manifiesto No tener sociedad conyugal vigente.</p>
          <p>
            <b>9. Información sobre obligaciones alimentarias</b>
          </p>
          <p>Manifiesto No tener sociedad conyugal vigente.</p>
          <p>
            <b>SOLICITUD SOBRE LA TARIFA</b>
          </p>
          <p>
            Atendiendo las tarifas contenidas en el decreto 2677 de 2012, por
            las condiciones de insolvencia económica en que me encuentro, con el
            debido respeto y con fundamento en Artículo 536 del decreto 1564 de
            2012, le solicito fijar una tarifa que me permita tener acceso a
            este mecanismo de negociación de mis obligaciones.
          </p>
          <p>
            <b>FUNDAMENTOS DE DERECHO</b>
          </p>
          <p>
            Fundamento esta solicitud, conforme al Título IV de la Ley 1564 de
            2012, Decreto Reglamentario 1069 de 2015 y demás disposiciones
            complementarias y conducentes.
          </p>
          <p>
            <b>ANEXOS</b>
          </p>
          <p>
            Para efectos del cumplimiento de los requisitos exigidos se anexan
            los siguientes documentos:
          </p>
          <p>
            - Certificado de existencia y representación legal de los acreedores
          </p>
          <h3>NOTIFICACIONES</h3>
          <p>
            En mi calidad de solicitante de este proceso, recibiré
            notificaciones en la siguiente dirección;
          </p>
          <p>
            <b>
              {cliente.direccion}, {cliente.Ciudads[0].nombre_ciudad}
            </b>
          </p>
          <p>
            Mis acreedores recibirán las notificaciones según la indicación que
            he dado para cada uno.
          </p>
        </div>

        <br />
      </form>
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
export default Insolvencia;
