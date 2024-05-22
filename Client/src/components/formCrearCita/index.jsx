import "./formCrearCita.css";
import { Link, useNavigate  } from 'react-router-dom';
import { getCasos } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { postCitaHandlers } from "../../handlers/crearCita";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"



function FormCita() {


  const [dataRegistro, setDataRegistro] = useState({
    titulo:"",
    descripcion:"", 
    fechaCita:"", 
    horaCita:"",
    idCaso:"",
  });


  const handleChangeRegistro = (e) => {
    const { name, value } = e.target ? e.target : { name: 'fechaCita', value: e };
    setDataRegistro(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
const dispatch = useDispatch();
const casos = useSelector(state => state.casos)


console.log( 'casos', casos)

useEffect(() => {
  dispatch(getCasos());
}, [dispatch]);



const submitHandlerRegistro = async (e) => {
  e.preventDefault();
  try {
    await postCitaHandlers(dataRegistro);
    window.alert("Cita creado con éxito");
    window.location.reload();
    

  } catch (error) {
    console.error("Error al crear la cita:", error.message);
    window.alert("No se pudo crear la cita");
  }
};
 
console.log('casos2', casos)

if (!casos || !casos.datosPagina) {
  return null;
}

console.log('registro', dataRegistro)

  return (
    <div className="containerCita">
      <h1 className="tituloCita">Crear Cita</h1>
      <form onSubmit={submitHandlerRegistro} className="formularioCita">
        <div className="input-row">
          <div>
            <label className="label">Titulo:</label>
            <input type="text"
            name="titulo"
            id="titulo"
            value={dataRegistro.titulo}
            onChange={handleChangeRegistro} />
          </div>
            <label className="label">Fecha:</label>
            <DatePicker
            selected={dataRegistro.fechaCita}
            name="fechaCita"
            id="fechaCita"
            onChange={(date) => handleChangeRegistro({ target: { name: 'fechaCita', value: date } })}
            />
            {/*<input type="text"
            name="fechaCita"
            id="fechaCita"
            value={dataRegistro.fechaCita}
  onChange={handleChangeRegistro} />*/}
          <br />
            <label className="label">Hora:</label>
            <input className="input"
            type="text"
            name="horaCita"
            id="horaCita"
            value={dataRegistro.horaCita}
            onChange={handleChangeRegistro} />
        </div>
        <label className="label">Caso:</label>
        <select
            name="idCaso"
            id="idCaso"
            onChange={(event) => handleChangeRegistro(event)}
            >
            <option value="" >Seleccionar...</option>
            {casos.datosPagina.map(caso => (
              <option key={caso.id} value={caso.id} >
                {caso.id} 
              </option>
             ))}
          </select>
            
        <br></br>
        <div className="input-row">
          <label className="label">Detalles:</label>
          <textarea className="input"
          type="text"
          name="descripcion"
          id="descripcion"
          value={dataRegistro.descripcion}
          onChange={handleChangeRegistro}
          ></textarea>
        </div>
        <div className="botones">
          <input type="submit" className="button" value="Crear" />
          <Link to='/home'>
          <button className="button">Volver</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormCita;
