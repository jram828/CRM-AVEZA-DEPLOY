import { useState, useEffect } from "react";
import { postCaso } from "../../handlers/crearCaso";
import { getAbogados } from "../../handlers/todosAbogados";
import { getClientes } from "../../handlers/todosClientes";
import style from './crearCaso.module.css';
import { Link } from "react-router-dom";
import { getTiposCasos } from "../../handlers/todosTiposdecasos";

function CrearCaso() {
  const [userDataRegistro, setUserDataRegistro] = useState({
    cedulaAbogado: "",
    cedulaCliente: "",
    fecha: "",
    fechaFin: "",
    descripcion: "",
    TipoDeCasoId: "",
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
          console.error("Error: La respuesta no es un objeto esperado", listaTipos);
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

      window.alert("Caso creado con éxito");
    } catch (error) {
      console.error("Error al crear el caso:", error.message);
      window.alert("No se pudo crear el caso");
    }
  };

  
  return (
<div className="space-y-6 w-full max-w-3xl h-full p-6 bg-primary rounded-lg shadow-md text-white">
  <h1 className={style.titulo}>Crear caso</h1>
  <form onSubmit={submitHandlerRegistro} className={style.formulario}>
    <br />
    <div className="space-y-4">
      <div className="w-full px-4">
        <label className="w-full">
          <select
            name="TipoDeCasoId"
            id="TipoDeCasoId"
            className="input select-bordered text-lg pl-2 w-full"
            onChange={(event) => handleChangeRegistro(event)}
          >
            <option value="" className={style.customOption}>Tipo de caso</option>
            {tipos.allTipoDeCaso.map((tipo) => (
              <option key={tipo.TipoDeCasoId} value={tipo.TipoDeCasoid} className={style.customOption}>
                {tipo.descripcion}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="w-full px-4">
        <label className="input input-bordered flex items-center w-full">Fecha:
          <input
            className="grow w-full"
            name="fecha"
            id="fecha"
            type="date"
            value={userDataRegistro.fecha}
            onChange={handleChangeRegistro}
          />
        </label>
      </div>

      <div className="w-full px-4">
        <label className="input input-bordered flex items-center w-full">Final:
          <input
            className="grow w-full"
            name="fechaFin"
            id="fechaFin"
            type="date"
            value={userDataRegistro.fechaFin}
            onChange={handleChangeRegistro}
          />
        </label>
      </div>

      <div className="w-full px-4">
        <label className="w-full">
          <select
            name="cedulaAbogado"
            id="cedulaAbogado"
            className="input select-bordered text-lg pl-2 w-full"
            onChange={(event) => handleChangeRegistro(event)}
          >
            <option value="" className={style.customOption}>Abogados</option>
            {abogados.map((abogado) => (
              <option key={abogado.cedulaAbogado} value={abogado.cedulaAbogado} className={style.customOption}>
                {abogado.nombre} {abogado.apellido}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="w-full px-4">
        <label className="w-full">
          <select
            name="cedulaCliente"
            id="cedulaCliente"
            onChange={handleChangeRegistro}
            className="input select-bordered text-lg pl-2 w-full"
          >
            <option value="" className={style.customOption}>Clientes</option>
            {clientes.map((cliente) => (
              <option key={cliente.cedulaCliente} value={cliente.cedulaCliente} className={style.customOption}>
                {cliente.nombre} {cliente.apellido}
              </option>
            ))}
          </select>
        </label>
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

    <div className="flex justify-center gap-2 mt-4">
      <button
        type="submit"
        className="btn btn-sm btn-accent text-white"
        value="Guardar"
      >
        Guardar
      </button>
      <Link to="/home/cases">
        <button className="btn btn-sm btn-accent text-white">Volver</button>
      </Link>
    </div>
  </form>
</div>

  
  );
}

export default CrearCaso;
