import { useState, useEffect } from "react";
import { postCaso } from "../../handlers/crearCaso";
import { getAbogados } from "../../handlers/todosAbogados";
import { getClientes } from "../../handlers/todosClientes";
import "./crearCaso.css";
import { Link } from "react-router-dom";
import { getTiposCasos } from "../../handlers/todosTiposdecasos";
import { Button } from "../Mystyles";

function CrearCaso() {
  const [userDataRegistro, setUserDataRegistro] = useState({
    cedulaAbogado: "",
    cedulaCliente: "",
    fecha: "",
    fechaFin: "",
    descripcion: "",
    TipoDeCasoid: "",
  });
  console.log(userDataRegistro);

  const [abogados, setAbogados] = useState([]);

  useEffect(() => {
    const obtenerAbogados = async () => {
      try {
        const listaAbogados = await getAbogados();
        setAbogados(listaAbogados);
      } catch (error) {
        console.error("Error al obtener los abogados:", error);
      }
    };

    obtenerAbogados();
  }, []);

  console.log("abogados", abogados);

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const listaClientes = await getClientes();
        setClientes(listaClientes);
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      }
    };

    obtenerClientes();
  }, []);

  const [tipos, setTipos] = useState({ allTipoDeCaso: [] });

  useEffect(() => {
    const obtenerTipos = async () => {
      try {
        const listaTipos = await getTiposCasos();
        if (listaTipos && Array.isArray(listaTipos.allTipoDeCaso)) {
          setTipos(listaTipos);
        } else {
          console.error(
            "Error: La respuesta no es un objeto esperado",
            listaTipos
          );
        }
      } catch (error) {
        console.error("Error al obtener los tipos de casos:", error);
      }
    };

    obtenerTipos();
  }, []);

  const handleChangeRegistro = (e) => {
    const { name, value } = e.target;
    setUserDataRegistro((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(setUserDataRegistro);

  const submitHandlerRegistro = async (e) => {
    e.preventDefault();
    try {
      await postCaso(userDataRegistro);

      // window.alert("Caso creado con éxito");
    } catch (error) {
      console.error("Error al crear el caso:", error.message);
      window.alert("No se pudo crear el caso");
    }
  };

  return (
    <div className="contenedorcrearcaso">
      <div className="encabezado">
        <h1 className="titulo">Crear caso</h1>
      </div>
      <form onSubmit={submitHandlerRegistro} className="datoscrearcaso">
        <br />
        <div className="datoscrear">
          <div className="inputcrearcaso">
            <label for="TipoDeCasoid" className="labelcrearcaso">
              Selecciona el tipo de caso:
            </label>
            <select
              name="TipoDeCasoid"
              id="TipoDeCasoid"
              className="cajacrearcaso"
              onChange={(event) => handleChangeRegistro(event)}
            >
              <option value="" className="tipodecaso">
                Tipo de caso
              </option>
              {tipos.allTipoDeCaso.map((tipo) => (
                <option
                  key={tipo.TipoDeCasoid}
                  value={tipo.TipoDeCasoid}
                  className="opcionestipodecaso"
                >
                  {tipo.descripcion}
                </option>
              ))}
            </select>
          </div>

          <div className="inputcrearcaso">
            <label for="fecha" className="labelcrearcaso">
              Fecha inicio:
            </label>
            <input
              className="cajacrearcaso"
              name="fecha"
              id="fecha"
              type="date"
              value={userDataRegistro.fecha}
              onChange={handleChangeRegistro}
            />
          </div>

          <div className="inputcrearcaso">
            <label for="fechaFin" className="labelcrearcaso">
              Fecha final:
            </label>
            <input
              className="cajacrearcaso"
              name="fechaFin"
              id="fechaFin"
              type="date"
              value={userDataRegistro.fechaFin}
              onChange={handleChangeRegistro}
            />
          </div>

          <div className="inputcrearcaso">
            <label for="cedulaAbogado" className="labelcrearcaso">
              Selecciona el abogado:
            </label>
            <select
              name="cedulaAbogado"
              id="cedulaAbogado"
              className="cajacrearcaso"
              onChange={(event) => handleChangeRegistro(event)}
            >
              <option value="" className="tipodecaso">
                Abogados
              </option>
              {abogados.map((abogado) => (
                <option
                  key={abogado.cedulaAbogado}
                  value={abogado.cedulaAbogado}
                  className="opcionestipodecaso"
                >
                  {abogado.nombre} {abogado.apellido}
                </option>
              ))}
            </select>
          </div>

          <div className="inputcrearcaso">
            <label for="cedulaCliente" className="labelcrearcaso">
              Selecciona el cliente:
            </label>
            <select
              name="cedulaCliente"
              id="cedulaCliente"
              onChange={handleChangeRegistro}
              className="cajacrearcaso"
            >
              <option value="" className="clientes">
                Clientes
              </option>
              {clientes.map((cliente) => (
                <option
                  key={cliente.cedulaCliente}
                  value={cliente.cedulaCliente}
                  className="opcionesclientes"
                >
                  {cliente.nombre} {cliente.apellido}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full px-4">
            <label className="w-full">
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                name="descripcion"
                id="descripcion"
                value={userDataRegistro.descripcion}
                onChange={handleChangeRegistro}
                placeholder="Descripción"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="honorarios">
          <label for="numerocedula" className="labelcrearcaso">
            Valor pretensiones:
          </label>
          <input
            type="number"
            className="cajacrearcaso"
            name="valor_pretensiones"
            id="valorpretensiones"
            value={userDataRegistro.valor_pretensiones}
            onChange={handleChangeRegistro}
          />
          <label for="honorarios" className="labelcrearcaso">
            Honorarios:
          </label>
          <input
            type="number"
            className="cajacrearcaso"
            name="honorarios"
            id="honorarios"
            value={userDataRegistro.honorarios}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="tipodeusuario" className="labelcrearcaso">
            Forma de pago:
          </label>
          <select
            className="cajacrearcaso"
            name="forma_de_pago"
            id="idusuario"
            onChange={handleChangeRegistro}
            value={userDataRegistro.forma_de_pago}
          >
            <option value="">Elija una opcion</option>
            <option value="Contado">Contado</option>
            <option value="Crédito">Crédito</option>
          </select>{" "}
          <label for="cuotas" className="labelcrearcaso">
            Numero de cuotas:
          </label>
          <input
            type="number"
            className="cajacrearcaso"
            name="cuotas"
            id="cuotas"
            value={userDataRegistro.cuotas}
            onChange={handleChangeRegistro}
          />
          <br />
          <br />
        </div>

        <div className="flex justify-center gap-2 mt-4">
          <Button
            type="submit"
            className="btn btn-sm btn-accent text-white"
            value="Guardar"
          >
            Guardar
          </Button>
          <Link to="/casos">
            <Button className="btn btn-sm btn-accent text-white">Volver</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CrearCaso;
