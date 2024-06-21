
import style from './crearAbogado.module.css';
//import { Link } from 'react-router-dom';
//import userStoreLawyers from '../../store/lawyers';
import { useState, useEffect } from 'react';
import { postAbogado } from '../../handlers/crearAbogado';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validation from '../../components/validation/validation';

function CrearAbogado() {

  const navigate = useNavigate()
  
  //const addLawyer = userStoreLawyers((state) => state.addLawyer);
       const URL_CLOUDINARY =     "https://api.cloudinary.com/v1_1/dzrqzpflw/image/upload";
  const [urlImage, setUrlImage] = useState("");
    const [dataRegistro, setDataRegistro] = useState({
      cedulaAbogado: '',
      matricula: '',
      nombre: '',
      apellido: '',
      correo: '',
      password:'',
      telefono: '',
      calle: '',
      numero: '',
      codigoPostal: '',
      ciudad: '',
      pais: '',
      administrador: '',
      imagen:'',
      
    });
    console.log(dataRegistro)

    const [errors, setErrors]= useState({});
  
    const handleChangeRegistro = (e) => {
      const { name, value } = e.target;
      setDataRegistro(prevState => ({
        ...prevState,
        [name]: value
      }));
      setErrors(validation({
        ...dataRegistro,
        [name]: value,
      }))

  };
  
  const handleChangeAdministrador = (e) => {
    if (e.target.checked) {
      setDataRegistro((prevState) => ({
        ...prevState,
        administrador: true,
      }));
    }
    
   
  };
    console.log(setDataRegistro)
  
    const submitHandlerRegistro = async (e) => {
      e.preventDefault();
      try {
        await postAbogado(dataRegistro);
        //addLawyer(dataRegistro); 
  
        window.alert('Abogado creado con éxito');
        navigate('/home/lawyers')
      } catch (error) {
      
        console.error('Error al crear el abogado:', error.message);
        window.alert('No se pudo crear el abogado');
      }
      

    };
   
    const handleChangeImage = async (e) => {
      e.preventDefault();
      const file = e.target.files[0];

      console.log(file);

      const data = new FormData();

      console.log(data);

      data.append("file", file);
      data.append("upload_preset", "Preset_LegalTech");

      const response = await axios.post(URL_CLOUDINARY, data);

      setUrlImage(response.data.secure_url);
      console.log("URL IMAGEN:", response.data.secure_url);
      setDataRegistro({
        ...dataRegistro,
        imagen: response.data.secure_url,
      });
    };

        const handleDeleteImage = (e) => {
          e.preventDefault();
          setUrlImage("");
        };

        /*useEffect(() => {
          if( dataRegistro.nombre !== '' || dataRegistro.apellido !== '' || dataRegistro.cedulaAbogado !== '' || dataRegistro.matricula !== '' || dataRegistro.telefono!== '' || dataRegistro.correo !== '' ||
          dataRegistro.calle !== '' || dataRegistro.numero!== '' || dataRegistro.ciudad !== '' || dataRegistro.pais !== '' || dataRegistro.codigoPostal !== ''
          ) {
              const dataValidated = validation(dataRegistro);
              setErrors(dataValidated);
          }
       }, [dataRegistro])*/

  return (
    
      <div className="flex items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
        <div className="space-y-6 w-full max-w-3xl h-full p-6 bg-secondary rounded-lg shadow-md text-black">
          <form
            className={style.datos}
            method="post"
            onSubmit={submitHandlerRegistro}
          >
            <h1 className="text-2xl font-bold text-black text-center">Crear Abogado</h1>
            <div className="space-y-3">
              <div className="flex flex-wrap justify-around">
                <div className="mb-4">
                  <h2 className="text-lg mb-2 text-center">Foto de perfil</h2>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChangeImage}
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                  />
                  {urlImage && (
                    <div>
                      <img
                        src={urlImage}
                        style={{ width: "100px", height: "100px" }}
                      />
                      <button onClick={handleDeleteImage}>Eliminar</button>
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="mx-4">
                  <label
                    htmlFor="nombre"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    Nombre(s):
                    <input
                      type="text"
                      name="nombre"
                      id="name"
                      className="grow ml-2 text-black"
                      value={dataRegistro.nombre}
                      onChange={handleChangeRegistro}
                    />
                    {errors.nombre && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.nombre}
            </p>}
                  </label>
                </div>
                <div className="mx-4">
                  <label
                    htmlFor="apellidos"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    Apellido(s):
                    <input
                      type="text"
                      className="grow ml-2 text-black"
                      name="apellido"
                      id="lastname"
                      value={dataRegistro.apellido}
                      onChange={handleChangeRegistro}
                    />
                    {errors.apellido && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.apellido}
            </p>}
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="mx-4">
                  <label
                    htmlFor="numerocedula"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    Cédula n°:
                    <input
                      type="number"
                      className="grow ml-2 text-black"
                      name="cedulaAbogado"
                      id="cedula"
                      value={dataRegistro.cedulaAbogado}
                      onChange={handleChangeRegistro}
                    />
                    {errors.cedulaAbogado && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.cedulaAbogado}
            </p>}
                  </label>
                </div>
                <div className="mx-4">
                  <label
                    htmlFor="matricula"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    Matricula:
                    <input
                      type="number"
                      className="grow ml-2 text-black"
                      name="matricula"
                      id="matricula"
                      value={dataRegistro.matricula}
                      onChange={handleChangeRegistro}
                    />
                    {errors.matricula && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.matricula}
            </p>}
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="mx-4">
                  <label
                    htmlFor="correo"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    Email:
                    <input
                      type="email"
                      name="correo"
                      id="email"
                      className="grow ml-2 text-black"
                      value={dataRegistro.correo}
                      onChange={handleChangeRegistro}
                    />
                    {errors.correo && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.correo}
            </p>}
                  </label>
                </div>
                <div className="mx-4">
                  <label
                    htmlFor="password"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    Contraseña:
                    <input
                      type="password"
                      name="password"
                      id="email"
                      className="grow ml-2 text-black"
                      value={dataRegistro.password}
                      onChange={handleChangeRegistro}
                    />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="mx-4">
                  <label
                    htmlFor="telefono"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    {" "}
                    Teléfono:
                    <input
                      type="number"
                      name="telefono"
                      id="telefono"
                      className="grow ml-2 text-black"
                      value={dataRegistro.telefono}
                      onChange={handleChangeRegistro}
                    />
                    {errors.telefono && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.telefono}
            </p>}
                  </label>
                </div>

                <div className="mx-4">
                  <label
                    htmlFor="calle"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    Calle:
                    <input
                      type="text"
                      name="calle"
                      id="street"
                      className="grow ml-2 text-black"
                      value={dataRegistro.calle}
                      onChange={handleChangeRegistro}
                    />
                    {errors.calle && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.calle}
            </p>}
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="mx-4">
                  <label
                    htmlFor="numero"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    Numero:
                    <input
                      type="text"
                      className="grow ml-2 text-black"
                      name="numero"
                      id="numero"
                      value={dataRegistro.numero}
                      onChange={handleChangeRegistro}
                    />
                    {errors.numero && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.numero}
            </p>}
                  </label>
                </div>
                <div className="mx-4">
                  <label
                    htmlFor="codigopostal"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    CP:
                    <input
                      type="number"
                      className="grow ml-2 text-black"
                      name="codigoPostal"
                      id="codigopostal"
                      value={dataRegistro.codigoPostal}
                      onChange={handleChangeRegistro}
                    />
                    {errors.codigoPostal && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.codigoPostal}
            </p>}
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="mx-4">
                  <label
                    htmlFor="ciudad"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    Ciudad:
                    <input
                      type="text"
                      name="ciudad"
                      id="city"
                      className="grow ml-2 text-black"
                      value={dataRegistro.ciudad}
                      onChange={handleChangeRegistro}
                    />
                    {errors.ciudad && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.ciudad}
            </p>}
                  </label>
                </div>
                <div className="mx-4">
                  <label
                    htmlFor="ciudad"
                    className="input input-sm !border-black input-secondary flex items-center max-w-xs !text-black relative"
                  >
                    Pais:
                    <input
                      type="text"
                      name="pais"
                      id="country"
                      className="grow ml-2 text-black"
                      value={dataRegistro.pais}
                      onChange={handleChangeRegistro}
                    />
                    {errors.pais && 
            <p className="error_form absolute text-error text-xs -right-0.5 pe-2 top-0.5 mt-1">
            {errors.pais}
            </p>}
                  </label>
                </div>
              </div>
              <br />
              <div>
                <label htmlFor="apellidos" className="cursor-pointer label text-sm ">
                  Administrador?
                  <br />
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mt-2"
                    name="administrador"
                    id="administrador"
                    value={dataRegistro.administrador}
                    onChange={handleChangeAdministrador}
                  />
                </label>
              </div>
            </div>

            <br />
            <div className="flex justify-center gap-2">
             
              <Link to="/home/lawyers">
                <button className="btn btn-sm w-35 border border-accent bg-white hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={50.5} d="M244 400L100 256l144-144M120 256h292"></path></svg>
                  Volver
                </button>
              </Link>
              <button
                className="btn btn-sm w-40 bg-accent text-white hover:bg-primary hover:text-white"
                type="submit"
                value="Guardar"
                disabled={
                  !dataRegistro.correo ||
                  !dataRegistro.cedulaAbogado ||
                  !dataRegistro.nombre ||
                  !dataRegistro.apellido
                }
              >
                Crear Abogado
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    
  );
  }

export default CrearAbogado