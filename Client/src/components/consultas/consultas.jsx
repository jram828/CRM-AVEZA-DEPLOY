import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './consultas.css'
import { postConsulta } from '../../redux/actions';

import { useNavigate } from 'react-router-dom';
// import validation from '../../components/validation/validation';


function Consultas() {

  const navigate = useNavigate()

  const [dataRegistro, setDataRegistro] = useState({
    nombre:"",
    apellido:"", 
    correo:"", 
    telefono:"",
    consulta:"",
  });

  const [errors, setErrors]= useState({});

  const handleChangeRegistro = (e) => {
    const { name, value } = e.target;
    setDataRegistro((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setErrors(validation({
    //   ...dataRegistro,
    //   [name]: value,
    // }))
  };

  const submitHandlerRegistro =  (e) => {
    e.preventDefault();
    try {
       postConsulta(dataRegistro);

      window.alert("Consulta creado con éxito");
      setDataRegistro({
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        consulta: "",
        
      });
      // navigate('/')
    } catch (error) {
      console.error("Error al crear la consulta:", error.message);
      window.alert("No se pudo crear la consulta");
    }
  };

  console.log('data', dataRegistro)

  /*useEffect(() => {
    if( dataRegistro.nombre !== '' || dataRegistro.apellido !== '' || dataRegistro.correo !== '' || dataRegistro.telefono!== '' || dataRegistro.consulta !== '' ) {
        const dataValidated = validation(dataRegistro);
        setErrors(dataValidated);
    }
 }, [dataRegistro])*/

  return (
   
    <div className="flex items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
    <div className="space-y-6 w-full max-w-xl h-full p-6 bg-secondary rounded-lg shadow-md text-black">
      <h1 className="text-2xl font-bold text-black text-center">Formulario de Contacto</h1>
      <form onSubmit={submitHandlerRegistro} className="detail-form flex flex-col justify-center items-center gap-3">
        <div className="mx-4">
          <label htmlFor="nombre" className="label">Nombre:
          <input
            type="text"
            name="nombre"
            value={dataRegistro.nombre}
            onChange={handleChangeRegistro}
            className="grow ml-2 text-black"
            required
          />
           {errors.nombre && 
            <p className="error_form">
            {errors.nombre}
            </p>}
            </label>
        </div>
        
        <div className="mx-4">
          <label htmlFor="apellidos" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black !w-64">Apellidos:
          <input
            type="text"
            name="apellido"
            value={dataRegistro.apellido}
            onChange={handleChangeRegistro}
            className="grow ml-2 text-black"
            required
          />
           {errors.apellido && 
            <p className="error_form">
            {errors.apellido}
            </p>}
            </label>
        </div>
        
        <div className="mx-4">
          <label htmlFor="correo" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black !w-64">Email:
          <input
            type="email"
            name="correo"
            value={dataRegistro.correo}
            onChange={handleChangeRegistro}
            className="grow ml-2 text-black"
            required
          />
           {errors.correo && 
            <p className="error_form">
            {errors.correo}
            </p>}
            </label>
        </div>
        
        <div className="mx-4">
          <label htmlFor="telefono" className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black !w-64">Teléfono:
          <input
            type="tel"
            name="telefono"
            value={dataRegistro.telefono}
            onChange={handleChangeRegistro}
            className="grow ml-2 text-black"
            required
          />
           {errors.telefono && 
            <p className="error_form">
            {errors.telefono}
            </p>}
            </label>
        </div>
        
        <div className="form-control">
          {/* <label
            htmlFor="consulta"
            className={`label-text absolute left-3 top-3 text-left pointer-events-none transition-all transform origin-top-left duration-200 ease-in-out ${
              dataRegistro.consulta ? 'translate-y-[-1.5rem] scale-75' : ''
            }`}
          > */}
          {/* </label> */}
          <textarea
            name="consulta"
            id="consulta"
            value={dataRegistro.consulta}
            onChange={handleChangeRegistro}
            className="textarea textarea-sm textarea-secondary !border-black !text-black text-sm h-24 !w-64"
            placeholder="Escriba su consulta aquí"
            rows="5"
            required
          />
        </div>
        <div className="detail-buttons">
        <Link to="/">
            <button 
            className="btn btn-xs border border-accent bg-white hover:bg-white" 
            type="button">
            Volver
            </button>
          </Link>
          <button 
          type="submit" 
          className="btn btn-xs  bg-accent text-white hover:bg-primary hover:text-white"
          disabled={!dataRegistro.nombre || !dataRegistro.apellido || !dataRegistro.correo || !dataRegistro.telefono || errors.nombre || errors.apellido|| errors.correo || errors.telefono || dataRegistro.consulta == '' }
          >Enviar Consulta
          </button>
          
        </div>
      </form>
    </div>
  </div>
  
);
}

export default Consultas;

