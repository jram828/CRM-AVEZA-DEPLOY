import logo from "../../img/logoAveza.png";
import "./configurarrecordatorios.css";
const ConfigurarRecordatorios = (props) => {
  return (
    <div>
      <div className="logo-aveza">
        <img
          src={logo}
          alt="logo-aveza"
          title="AVEZA SAS"
        />
      </div>
      <h1 className="titulo">Configurar Recordatorios</h1>
      <br />

      <form>
        <br />
        <div className="recordatorio-cita">
          <label for="fecha" className="label-recordatorio">
            Ingrese fecha:
          </label>
          <input type="date" name="fecha" id="fecha" />
          <label for="hora" className="label-recordatorio">
            Ingrese hora:
          </label>
          <input type="time" name="hora" id="hora" />
        </div>
        <br />
        <br />
        <div className="recordatorio-cita">
          <label className="label-recordatorio2"> Enviar a:</label>
        </div>
        <br />
        <div className="recordatorio-cita">
          <input type="checkbox" id="celular" name="aviso" value="celular" />
          <label for="celular">Celular</label>
          <input type="checkbox" id="email" name="aviso" value="Email" />
          <label for="email">Email</label>
        </div>
        <br />
        <br />
        <div className="recordatorio-cita">
          <label for="tipo-recordatorio">Tipo de recordatorio:</label> <br />
          <select name="tipo-de-recordatorio" id="tipo-recordatorio">
            <option value="">Elige una opcion</option>
            <option value="nueva-diligencia">Nueva diligencia</option>
            <option value="nueva-cita">Nueva cita</option>
            <option value="cambio-en-diligencia">Cambio en diligencia</option>
            <option value="aplazamiento-en-diligencia">
              Aplazamiento en diligencia
            </option>
          </select>
        </div>
        <br />
        <br />

        <div className="recordatorio-cita">
          <label className="label-recordatorio2">Comentarios</label> <br />
        </div>
        <div className="recordatorio-cita">
          <textarea
            name="comentarios"
            id="comentarios"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <br />
        <br />
        <div className="botones">
          <input className="botones" type="submit" value="Guardar" />
        </div>
        <br />
      </form>
    </div>
  );
};
export default ConfigurarRecordatorios;
