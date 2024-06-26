import "./agendarcitas.css";
// import "../../App.css";
import Calendario from "../../components/calendar";
// import FormCita from "../formCrearCita/index";
import logo from "../../img/logoAveza.png";
import { Link, useNavigate } from "react-router-dom";
import { getCasos } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCitaHandlers } from "../../handlers/crearCita";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../Mystyles";

function AgendarCitas() {

   const [dataRegistro, setDataRegistro] = useState({
     titulo: "",
     descripcion: "",
     fechaCita: "",
     horaCita: "",
     idCaso: "",
   });

   const handleChangeRegistro = (e) => {
     const { name, value } = e.target
       ? e.target
       : { name: "fechaCita", value: e };
     setDataRegistro((prevData) => ({
       ...prevData,
       [name]: value,
     }));
   };
   const dispatch = useDispatch();
   const casos = useSelector((state) => state.casos);

   console.log("casos", casos);

  //  useEffect(() => {
  //    dispatch(getCasos());
  //  }, [dispatch]);

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

   console.log("casos2", casos);

  //  if (!casos || !casos.datosPagina) {
  //    return null;
  //  }

  console.log("registro", dataRegistro);
  
  return (
    <div className="containerDiary">
      <div className="encabezado">
        <p className="titulo">Agendar Cita</p>
      </div>
      <div className="calendario">
        {/* <p className="agenda">Agenda</p> */}
        <br />
        <Calendario></Calendario>

        {/* <div className="formCita">
        <FormCita></FormCita>
      </div> */}
        <div className="containerCita">
          <h1 className="tituloCita">Crear Cita</h1>
          <form onSubmit={submitHandlerRegistro} className="formularioCita">
            <div className="input-row">
              <div className="infoCrearCita">
                <label className="labelCrearCita">Titulo:</label>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  className="inputCrearCita"
                  value={dataRegistro.titulo}
                  onChange={handleChangeRegistro}
                />
              </div>
              <div className="infoCrearCita">
                <label className="labelCrearCita">Fecha:</label>
                <DatePicker
                  className="inputCrearCita"
                  selected={dataRegistro.fechaCita}
                  name="fechaCita"
                  id="fechaCita"
                  onChange={(date) =>
                    handleChangeRegistro({
                      target: { name: "fechaCita", value: date },
                    })
                  }
                />
              </div>
              <div className="infoCrearCita">
                <label className="labelCrearCita">Hora:</label>
                <input
                  className="inputCrearCita"
                  type="time"
                  name="horaCita"
                  id="horaCita"
                  value={dataRegistro.horaCita}
                  onChange={handleChangeRegistro}
                />
              </div>
              <div className="infoCrearCita">
                <label className="labelCrearCita">Caso:</label>
                <select
                  className="inputCrearCita"
                  name="idCaso"
                  id="idCaso"
                  onChange={(event) => handleChangeRegistro(event)}
                >
                  <option value="" className="inputCrearCita">
                    Seleccionar...
                  </option>
                  {casos.datosPagina.map((caso) => (
                    <option
                      key={caso.id}
                      value={caso.tipoCaso}
                      className="inputCrearCita"
                    >
                      {caso.tipoCaso}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <br></br>
            <div className="infoCrearCita">
              <label className="labelCrearCita">Detalles:</label>
              <textarea
                className="inputCrearCita"
                type="textarea"
                name="descripcion"
                id="descripcion"
                cols="50"
                rows="6"
                value={dataRegistro.descripcion}
                onChange={handleChangeRegistro}
              ></textarea>
            </div>
            <div className="botonescrearcita">
              <Button onClick={submitHandlerRegistro}> Crear</Button>
              <Link to="/home">
                <Button className="button">Volver</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgendarCitas;

// import logo from "../../img/logoAveza.png";
// import "./agendarcitas.css";

// const AgendarCitas = (props) => {
//   return (
//     <div>
//       <div className="logo-aveza">
//         <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
//       </div>
//       <h1 className="titulo">Agendar Cita</h1>
//       <br />

//       <form className="contenedoragendar">
//         <br />
//         <div className="recordatorio-cita">
//           <label for="fecha" className="label-recordatorio">
//             Ingrese fecha:
//           </label>
//           <input type="date" name="fecha" id="fecha" />
//           <label for="hora" className="label-recordatorio">
//             Ingrese hora:
//           </label>
//           <input type="time" name="hora" id="hora" />
//         </div>
//         <br />

//         <div className="recordatorio-cita">
//           <label for="aviso" className="label-recordatorio2">
//             {" "}
//             Enviar a:
//           </label>
//         </div>
//         <br />
//         <div className="recordatorio-cita">
//           <input type="checkbox" id="celular" name="aviso" value="celular" />
//           <label for="celular">Celular</label>
//           <input type="checkbox" id="email" name="aviso" value="Email" />
//           <label for="email">Email</label>
//         </div>
//         <br />
//         <div className="recordatorio-cita">
//           <label for="aviso" className="label-recordatorio2">
//             {" "}
//             Tipo de cita:
//           </label>
//         </div>
//         <br />
//         <div className="recordatorio-cita">
//           <input type="radio" name="cita" id="audiencia" />
//           <label for="audiencia">Audiencia</label>
//           <br />
//           <input type="radio" name="cita" id="reunion-abogado" />
//           <label for="reunion-abogado">Reunión con el abogado</label>
//         </div>
//         <br />
//         <div className="comentarios">
//           <label for="comentarios">Comentarios</label> <br />
//           <textarea
//             name="comentarios"
//             id="comentarios"
//             cols="30"
//             rows="10"
//           ></textarea>
//         </div>
//         <br />
//         <div className="botones">
//           <input type="submit" className="botones" value="Guardar" />
//         </div>
//         <br />
//       </form>
//     </div>
//   );
// };
// export default AgendarCitas;
