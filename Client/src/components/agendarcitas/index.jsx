import logo from "../../img/logoAveza.png";

const AgendarCitas = (props) => {
  return (
    <div>
      <div className="logo-aveza">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
      </div>
      <h1 className="titulo">Agendar Cita</h1>
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

        <div className="recordatorio-cita">
          <label for="aviso" className="label-recordatorio2">
            {" "}
            Enviar a:
          </label>
        </div>
        <br />
        <div className="recordatorio-cita">
          <input type="checkbox" id="celular" name="aviso" value="celular" />
          <label for="celular">Celular</label>
          <input type="checkbox" id="email" name="aviso" value="Email" />
          <label for="email">Email</label>
        </div>
        <br />
        <div className="recordatorio-cita">
          <label for="aviso" className="label-recordatorio2">
            {" "}
            Tipo de cita:
          </label>
        </div>
        <br />
        <div className="recordatorio-cita">
          <input type="radio" name="cita" id="audiencia" />
          <label for="audiencia">Audiencia</label>
          <br />
          <input type="radio" name="cita" id="reunion-abogado" />
          <label for="reunion-abogado">Reunión con el abogado</label>
        </div>
        <br />
        <div className="comentarios">
          <label for="comentarios">Comentarios</label> <br />
          <textarea
            name="comentarios"
            id="comentarios"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <br />
        <div className="botones">
          <input type="submit" className="botones" value="Guardar" />
        </div>
        <br />
      </form>
    </div>
  );
};
export default AgendarCitas;
