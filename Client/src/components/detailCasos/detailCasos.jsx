import './detailCasos.css';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCasoById, deleteCaso, getCasos } from '../../redux/actions';
import { Button } from '../Mystyles';


function DetailCasos() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const { id } = useParams(); // Obtener el id de los parámetros de la ruta
  console.log('Id detail:', id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [casoDetail, setCasoDetail] = useState({
      tipoDeCaso: "",
      TipoDeCasoid: "",
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
      cedulaCliente: "",
      nombresCliente: "",
      apellidosCliente: "",
      emailCliente: "",
      celularCliente: "",
      direccionCliente: "",
      ciudadCliente: "",
      cedulaAbogado: "",
      nombresAbogado: "",
      apellidosAbogado: "",
      emailAbogado: "",
      celularAbogado: "",
      direccionAbogado: "",
      ciudadAbogado: "",
      tarjetaProf: "",
    });
  
  const caso = useSelector(state => state.caso); // Asumimos que el detalle del caso se almacena en 'caso'

  const formatDate = (dateString) => {
    if (!dateString) return ''; // Devuelve una cadena vacía si dateString es nulo o indefinido
    const date = new Date(dateString);
    if (isNaN(date)) return ''; // Devuelve una cadena vacía si la fecha no es válida
    return date.toLocaleDateString('es-CA'); // Convierte al formato YYYY-MM-DD
  };

  useEffect(() => {
    dispatch(getCasoById(id));
  }, [dispatch, id]);




  console.log("Caso detail:", caso);
  
    useEffect(() => {
        setCasoDetail({
          ...casoDetail,
          tipoDeCaso: caso.TipoDeCaso.descripcion,
          TipoDeCasoid: caso.TipoDeCasoTipoDeCasoid,
          etapa: caso.etapa,
          fecha: caso.fecha,
          fecha: caso.fechaFin,
          idCaso: caso.idCaso,
          valor_pretensiones: caso.valor_pretensiones,
          honorarios: caso.honorarios,
          aceptacion_cotizacion: caso.aceptacion_cotizacion,
          tiene_contrato: caso.tiene_contrato,
          forma_de_pago: caso.forma_de_pago,
          descripcion: caso.descripcion,
          cedulaCliente: caso.ClienteCedulaCliente,
          nombresCliente: caso.Cliente.nombres,
          apellidosCliente: caso.Cliente.apellidos,
          emailCliente: caso.Cliente.email,
          celularCliente: caso.Cliente.celular,
          direccionCliente: caso.Cliente.direccion,
          cedulaAbogado: caso.AbogadoCedulaAbogado,
          nombresAbogado: caso.Abogado.nombres,
          apellidosAbogado: caso.Abogado.apellidos,
          emailAbogado: caso.Abogado.email,
          celularAbogado: caso.Abogado.celular,
          direccionAbogado: caso.Abogado.direccion,

          // ciudad: datos.Ciudads[0].nombre_ciudad,
          // departamento: datos.Ciudads[0].Departamentos[0].nombre_departamento,
        });
    }, [dispatch, caso]);
  

  const handleDelete = () => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    
    if (isConfirmed) {
      const fechaFin = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato YYYY-MM-DD
      dispatch(deleteCaso(id, fechaFin));
      navigate('/casos');
      dispatch(getCasos());
      console.log("id", id, "fechaFin", fechaFin);
    }
  };

  const handleGenerateContract = () => {
    navigate('/home/documentos/contrato', { state: { caso: caso } });
  };

  const handleGeneratePoder = () => {
    navigate('/home/documentos/poder', { state: { caso: caso } });
    
  };

    const handleUpdateDetailCaso = (e) => {
      setUserDataDetailCaso({
        ...userDataDetailCaso,
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
          <Link to={"/cotizacion"}>
            <Button className="botonesiniciosesion">Cotización</Button>
          </Link>
          <Button onClick={handleDelete} className="botonesiniciosesion">
            Eliminar
          </Button>
          <Link to={"/generarfactura"}>
            <Button className="botonesiniciosesion">Generar factura</Button>
          </Link>
          {/* <Button className="botonesiniciosesion" onClick={generarContrato}>
            Generar Documentos
          </Button> */}
        </div>
        <div className="infotodos">
          <div className="infocaso">
            <div className="infodetailcaso">
              <label for="tipocaso" className="labeldetailcaso">
                Tipo de caso:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="cedulaAbogado"
                id="cedula"
                value={casoDetail.tipoDeCaso}
                onChange={handleUpdateDetailCaso}
              />
            </div>
          </div>
          <div className="infocliente"></div>
          <div className="infoabogado"></div>
        </div>
        <div className="space-y-4">
          <label className="input input-sm flex items-center max-w-xs mx-auto  !text-neutral text-sm">
            Tipo de caso:
            <input
              value={casoDetail.tipoDeCaso}
              className="grow text-neutral input-field ml-2"
              disabled
            />
          </label>

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
            Cliente:
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
          )}

          {caso?.PagosClientes && caso.PagosClientes.length > 0 && (
            <label
              htmlFor="pagosCliente"
              className="input input-bordered flex items-center max-w-xs mx-auto"
            >
              Pagos del Cliente:
              {/* <select
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
              </select> */}
            </label>
          )}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          <button
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
            Eliminar registro
          </button>
          <Link to="/home/cases">
            <button className="btn btn-sm w-35 border border-accent bg-white hover:bg-white">
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
            </button>
          </Link>
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