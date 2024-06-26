import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./consultas.css";
import { postConsulta } from "../../redux/actions";
import logo from "../../img/logoAveza.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../Mystyles";
// import validation from '../../components/validation/validation';

function Consultas() {
  const navigate = useNavigate();

  const [dataRegistro, setDataRegistro] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    consulta: "",
  });

  const [errors, setErrors] = useState({});

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

  const submitHandlerConsulta = (e) => {
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

  console.log("data", dataRegistro);

  /*useEffect(() => {
    if( dataRegistro.nombre !== '' || dataRegistro.apellido !== '' || dataRegistro.correo !== '' || dataRegistro.telefono!== '' || dataRegistro.consulta !== '' ) {
        const dataValidated = validation(dataRegistro);
        setErrors(dataValidated);
    }
 }, [dataRegistro])*/

  return (
    <div className="containerconsulta">
      <div className="space-y-6 w-full max-w-xl h-full p-6 bg-secondary rounded-lg shadow-md text-black">
        <div className="logo-aveza">
          <img src={logo} alt="logo-aveza" />
        </div>
        <h1 className="titulo">Consultas</h1>
        <br />
        <form className="datosconsulta">
          <div className="infoconsulta">
            <label htmlFor="nombre" className="label-consulta">
              Nombre:
            </label>
            <input
              type="text"
              name="nombre"
              value={dataRegistro.nombre}
              onChange={handleChangeRegistro}
              className="inputenviarconsulta"
              required
            />
            {errors.nombre && <p className="error_form">{errors.nombre}</p>}
          </div>

          <div className="infoconsulta">
            <label htmlFor="apellidos" className="label-consulta">
              Apellidos:
            </label>
            <input
              type="text"
              name="apellido"
              value={dataRegistro.apellido}
              onChange={handleChangeRegistro}
              className="inputenviarconsulta"
              required
            />
            {errors.apellido && <p className="error_form">{errors.apellido}</p>}
          </div>

          <div className="infoconsulta">
            <label htmlFor="correo" className="label-consulta">
              Email:
            </label>
            <input
              type="email"
              name="correo"
              value={dataRegistro.correo}
              onChange={handleChangeRegistro}
              className="inputenviarconsulta"
              required
            />
            {errors.correo && <p className="error_form">{errors.correo}</p>}
          </div>

          <div className="infoconsulta">
            <label htmlFor="telefono" className="label-consulta">
              Teléfono:
            </label>
            <input
              type="tel"
              name="telefono"
              value={dataRegistro.telefono}
              onChange={handleChangeRegistro}
              className="inputenviarconsulta"
              required
            />
            {errors.telefono && <p className="error_form">{errors.telefono}</p>}
          </div>
          <br />
          <div className="form-control">
            <textarea
              name="consulta"
              id="consulta"
              value={dataRegistro.consulta}
              onChange={handleChangeRegistro}
              className="textarea"
              placeholder="Escriba su consulta aquí"
              rows="7"
              required
            />
          </div>
          <br />
          <div className="detail-buttons">
            <Button
              onClick={submitHandlerConsulta}
              disabled={
                !dataRegistro.nombre ||
                !dataRegistro.apellido ||
                !dataRegistro.correo ||
                !dataRegistro.telefono ||
                errors.nombre ||
                errors.apellido ||
                errors.correo ||
                errors.telefono ||
                dataRegistro.consulta == ""
              }
            >
              Guardar
            </Button>
            <Link to={"/"}>
              <Button>Volver</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Consultas;
