import './detailCasos.css';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCaso, getCasos } from '../../redux/actions';
import { Button } from '../Mystyles';
import { getCasoById } from '../../handlers/detailCaso';
import { numeroALetras } from "../convertiraletras";
import { generarDocumentos } from '../../handlers/generarDocumentos';


function DetailCasos() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const { id } = useParams(); // Obtener el id de los parámetros de la ruta
  console.log("Id detail:", id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [casoDetail, setCasoDetail] = useState({
    TipoDeCaso: "",
    tipoDeCasoFlat: "",
    TipoDeCasoTipoDeCasoid: "",
    etapa: "",
    fecha: "",
    fechaFin: "",
    idCaso: "",
    valor_pretensiones: "",
    honorarios: "",
    aceptacion_cotizacion: "",
    tiene_contrato: "",
    forma_de_pago: "",
    descripcion: "",
    ClienteCedulaCliente: "",
    AbogadoCedulaAbogado: "",
    Cliente: "",
    Abogado: "",
  });

  const caso = useSelector((state) => state.caso); // Asumimos que el detalle del caso se almacena en 'caso'

  const formatDate = (dateString) => {
    if (!dateString) return ""; // Devuelve una cadena vacía si dateString es nulo o indefinido
    const date = new Date(dateString);
    if (isNaN(date)) return ""; // Devuelve una cadena vacía si la fecha no es válida
    return date.toLocaleDateString("es-CA"); // Convierte al formato YYYY-MM-DD
  };

  useEffect(() => {
    const obtenerCaso = async (id) => {
      try {
        const caso = await getCasoById(id);
        setCasoDetail(caso);
      } catch (error) {
        console.error("Error al obtener los abogados:", error);
      }
    };

    obtenerCaso(id);
  }, [id]);

  console.log("Caso detail:", casoDetail);
  // ciudad: datos.Ciudads[0].nombre_ciudad,
  // departamento: datos.Ciudads[0].Departamentos[0].nombre_departamento,

  const valor_pretensiones_letras = numeroALetras(Number(casoDetail.valor_pretensiones));
  // const valor_pretensiones = Number(casoDetail.valor_pretensiones).toLocaleString();
  const honorarios_letras = numeroALetras(Number(casoDetail.honorarios));
  // const honorarios = Number(casoDetail.honorarios).toLocaleString();
  
  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "¿Estás seguro de que deseas eliminar este registro?"
    );

    if (isConfirmed) {
      const fechaFin = new Date().toISOString().split("T")[0]; // Obtener la fecha actual en formato YYYY-MM-DD
      dispatch(deleteCaso(id, fechaFin));
      navigate("/casos");
      dispatch(getCasos());
      console.log("id", id, "fechaFin", fechaFin);
    }
  };

  const handleGenerateContract = () => {
    navigate("/home/documentos/contrato", { state: { caso: caso } });
  };

  const handlerGenerarDocumentos = () => {
    generarDocumentos(casoDetail, valor_pretensiones_letras, honorarios_letras);
  };

  const handleUpdateDetailCaso = (e) => {
    setCasoDetail({
      ...casoDetail,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  return (
    <div className="contenedordetailcaso">
      <div className="detailcaso">
        <div className="encabezado">
          <h5 className="titulo">Detalles del caso</h5>
        </div>
        <div className="menu-detail">
          <input type="file" id="doc" />
          {/* <Link to={"/generardocumentos"}> */}
            <Button className="botonesiniciosesion" onClick={handlerGenerarDocumentos}>
              Generar documentos
            </Button>
          {/* </Link> */}
          {/* <Link to={"/cotizacion"}>
            <Button className="botonesiniciosesion">Cotización</Button>
          </Link> */}
          <Button onClick={handleDelete} className="botonesiniciosesion">
            Actualizar
          </Button>
          {/* <Button className="botonesiniciosesion" onClick={generarContrato}>
            Generar Documentos
          </Button> */}
          <Button
            className="btn btn-sm w-35 border border-error bg-white hover:bg-white"
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
              ></path>
            </svg>
            Eliminar
          </Button>
          <Link to="/casos">
            <Button className="btn btn-sm w-35 border border-accent bg-white hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={50.5}
                  d="M244 400L100 256l144-144M120 256h292"
                ></path>
              </svg>
              Volver
            </Button>
          </Link>
        </div>
        <div className="infotodos">
          <div className="infocaso">
            <br />
            <div className="infodetailcaso">
              <label for="idCaso" className="labeldetailcaso">
                Consecutivo de caso:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="idCaso"
                id="idCaso"
                value={casoDetail.idCaso}
                onChange={handleUpdateDetailCaso}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="nombres" className="labeldetailcaso">
                Tipo de caso:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="tipoDeCasoFlat"
                id="tipoDeCasoFlat"
                value={casoDetail.TipoDeCaso.descripcion}
                onChange={handleUpdateDetailCaso}
              />
            </div>
            <div className="infodetailcaso">
              <label for="etapa" className="labeldetailcaso">
                Etapa:
              </label>
              <input
                type="text"
                text
                className="cajadetail"
                name="etapa"
                id="etapa"
                value={casoDetail.etapa}
                onChange={handleUpdateDetailCaso}
              />
            </div>
            <div className="infodetailcaso">
              <label for="fecha" className="labeldetailcaso">
                Fecha:
              </label>
              <input
                type="text"
                text
                className="cajadetail"
                name="fecha"
                id="fecha"
                value={formatDate(casoDetail.fecha)}
                onChange={handleUpdateDetailCaso}
              />
            </div>
            <div className="infodetailcaso">
              <label for="fechaFin" className="labeldetailcaso">
                Fecha de finalización:
              </label>
              <input
                type="text"
                text
                className="cajadetail"
                name="fechaFin"
                id="fechaFin"
                value={formatDate(casoDetail.fechaFin)}
                onChange={handleUpdateDetailCaso}
              />
            </div>
            <div className="infodetailcaso">
              <label for="valor_pretensiones" className="labeldetailcaso">
                Valor pretensiones:
              </label>
              <input
                type="number"
                text
                className="cajadetail"
                name="valor_pretensiones"
                id="valor_pretensiones"
                value={casoDetail.valor_pretensiones}
                onChange={handleUpdateDetailCaso}
              />
            </div>
            <div className="infodetailcaso">
              <label for="honorarios" className="labeldetailcaso">
                Valor honorarios:
              </label>
              <input
                type="number"
                text
                className="cajadetail"
                name="honorarios"
                id="honorarios"
                value={casoDetail.honorarios}
                onChange={handleUpdateDetailCaso}
              />
            </div>
            <div className="infodetailcaso">
              <label for="aceptacion_cotizacion" className="labeldetailcaso">
                Aceptación de cotización:
              </label>
              <input
                type="text"
                text
                className="cajadetail"
                name="aceptacion_cotizacion"
                id="aceptacion_cotizacion"
                value={casoDetail.aceptacion_cotizacion}
                onChange={handleUpdateDetailCaso}
              />
            </div>
            <div className="infodetailcaso">
              <label for="tiene_contrato" className="labeldetailcaso">
                Tiene contrato?
              </label>
              <input
                type="text"
                text
                className="cajadetail"
                name="tiene_contrato"
                id="tiene_contrato"
                value={casoDetail.tiene_contrato}
                onChange={handleUpdateDetailCaso}
              />
            </div>
            <div className="infodetailcaso">
              <label for="descripcion" className="labeldetailcaso">
                Descripcion:
              </label>

              <input
                type="text"
                cols="80"
                rows="6"
                className="cajadetail"
                name="descripcion"
                id="descripcion"
                value={casoDetail.descripcion}
              />
            </div>
          </div>
          <div className="infocliente">
            <div className="encabezadoAbogado">
              <h6 className="titulo">Cliente</h6>
            </div>
            <div className="infodetailcaso">
              <label for="ClienteCedulaCliente" className="labeldetailcaso">
                Número de cédula:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="ClienteCedulaCliente"
                id="ClienteCedulaCliente"
                value={casoDetail.ClienteCedulaCliente}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="nombresCliente" className="labeldetailcaso">
                Nombre (s):
              </label>
              <input
                type="text"
                className="cajadetail"
                name="nombresCliente"
                id="nombresCliente"
                value={casoDetail.Cliente.nombres}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="apellidosCliente" className="labeldetailcaso">
                Apellido (s):
              </label>
              <input
                type="text"
                className="cajadetail"
                name="apellidosCliente"
                id="apellidosCliente"
                value={casoDetail.Cliente.apellidos}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="celularCliente" className="labeldetailcaso">
                Número de celular:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="celularCliente"
                id="celularCliente"
                value={casoDetail.Cliente.celular}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="emailCliente" className="labeldetailcaso">
                Correo electrónico:
              </label>
              <input
                type="email"
                className="cajadetail"
                name="emailCliente"
                id="emailCliente"
                value={casoDetail.Cliente.email}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="direccionCliente" className="labeldetailcaso">
                Dirección:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="direccionCliente"
                id="direccionCliente"
                value={casoDetail.Cliente.direccion}
                disabled
              />
            </div>
            <br />
            <br />
            <div className="encabezadoAbogado">
              <h6 className="titulo">Abogado</h6>
            </div>
            <div className="infodetailcaso">
              <label for="AbogadoCedulaAbogado" className="labeldetailcaso">
                Número de cédula:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="AbogadoCedulaAbogado"
                id="AbogadoCedulaAbogado"
                value={casoDetail.AbogadoCedulaAbogado}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="nombresAbogado" className="labeldetailcaso">
                Nombre (s):
              </label>
              <input
                type="text"
                className="cajadetail"
                name="nombresAbogado"
                id="nombresAbogado"
                value={casoDetail.Abogado.nombres}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="apellidosAbogado" className="labeldetailcaso">
                Apellido (s):
              </label>
              <input
                type="text"
                className="cajadetail"
                name="apellidosAbogado"
                id="apellidosAbogado"
                value={casoDetail.Abogado.apellidos}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="celularAbogado" className="labeldetailcaso">
                Número de celular:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="celularAbogado"
                id="celularAbogado"
                value={casoDetail.Abogado.celular}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="emailAbogado" className="labeldetailcaso">
                Correo electrónico:
              </label>
              <input
                type="email"
                className="cajadetail"
                name="emailAbogado"
                id="emailAbogado"
                value={casoDetail.Abogado.email}
                disabled
              />
            </div>
            <div className="infodetailcaso">
              <label for="direccionAbogado" className="labeldetailcaso">
                Dirección:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="direccionAbogado"
                id="direccionAbogado"
                value={casoDetail.Abogado.direccion}
                disabled
              />
            </div>
          </div>
          {/* <div className="infoabogado">
            
          </div> */}
        </div>
        {/* <div className="space-y-4">


          <label className="input input-sm flex items-center max-w-xs mx-auto  !text-neutral text-sm">
            Abogado:
            <input
              value={`${caso?.Abogado?.apellido || ""} ${
                caso?.Abogado?.nombre || ""
              }`}
              className="grow text-neutral input-field ml-2"
              disabled
            />
          </label>

          <label className="input input-sm flex items-center max-w-xs mx-auto  !text-neutral text-sm">
            Abogado:
            <input
              value={`${caso?.Cliente?.apellido || ""} ${
                caso?.Cliente?.nombre || ""
              }`}
              className="grow text-neutral input-field ml-2"
              disabled
            />
          </label>

          <label className="input input-sm flex items-center max-w-xs mx-auto  !text-neutral text-sm">
            Descripcion:
            <input
              value={caso?.descripcion || ""}
              className="grow text-neutral input-field ml-2"
              disabled
            />
          </label>

          <label className="input input-sm flex items-center max-w-xs mx-auto  !text-neutral text-sm">
            Fecha de inicio:
            <input
              value={formatDate(caso?.fecha)}
              className="grow text-neutral input-field ml-2"
              disabled
            />
          </label>

          {caso?.fechaFin && (
            <label className="input input-bordered flex items-center max-w-xs mx-auto">
              Fecha final:
              <input
                value={formatDate(caso.fechaFin)}
                className="grow text-black input-field"
                readOnly
              />
            </label>
          )} */}

        {/* {caso?.PagosClientes && caso.PagosClientes.length > 0 && (
            <label
              htmlFor="pagosCliente"
              className="input input-bordered flex items-center max-w-xs mx-auto"
            >
              Pagos del Cliente:
              <select
                name="pagosCliente"
                id="pagosCliente"
                className="grow text-black input-field"
              >
                {caso.PagosClientes.map((pago, index) => (
                  <option key={index} value={pago.pagoId}>
                    {pago.descripcion} -{" "}
                    {new Date(pago.fechaDeAprobacion).toLocaleDateString()} -{" "}
                    {pago.importeDeLaTransaccion}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div> */}

        <div className="flex justify-center gap-2 mt-4">
          {user?.cedulaCliente ? undefined : (
            <button
              onClick={handleGenerateContract}
              className="btn btn-sm btn-accent text-white"
            >
              Generar contrato
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
              </svg>
            </button>
          )}
          {user?.cedulaCliente ? undefined : (
            <button
              onClick={handleGeneratePoder}
              className="btn btn-sm btn-accent text-white"
            >
              Generar poder
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailCasos;