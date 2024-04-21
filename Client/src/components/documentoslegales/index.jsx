import { useNavigate } from "react-router-dom";
import React from "react";
import logo from "../../img/logoAveza.png";

const DocumentosLegales = () => {
    
  const navigate = useNavigate();

  const handleChange = (e) => {
      const tipoDocumento = document.getElementById('documentolegal')
      const tipo = tipoDocumento.value;
        switch (tipo) {
            case "1":
                navigate(`/poder`);
                break
            case "2":
                navigate(`/insolvencia`);
                break
            case "3":
                break
            case "4":
                navigate(`/autorizacion`);
                break
            case "5":
                break
            case "6":
                break
            case "7":
                break
    }
  };
  
  return (
    <div>
      <div className="logo-aveza">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
      </div>
      <h1 className="titulo">Generar Documentos Legales</h1>
      <br />
      <form>
        <br />
        <div className="documentoagenerar">
          <br />
          <label htmlFor="tipodocumento" className="labelgenerardocumento">
            Documentos a generar:
          </label>
          <select
            className="cajagenerardocumento"
            name="tipodocumento"
            id="documentolegal"
            onChange={handleChange}
          >
            <option value="">Elija una opcion</option>
            <option value="1">Poder</option>
            <option value="2">Solicitud de insolvencia</option>
            <option value="3">Demanda</option>
            <option value="4">Autorización</option>
            <option value="5">Oficio</option>
            <option value="6">Impulso procesal</option>
            <option value="7">Sucesiones</option>
          </select>
        </div>
        <br />
        <br />
        <div className="documentoagenerar">
          <label className="labelgenerardocumento"> Enviar a:</label>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="inputbox"
              type="checkbox"
              id="email"
              defaultChecked="true"
            />
          </div>
          <div>
            <label htmlFor="sms">SMS </label>
            <input className="inputbox" type="checkbox" id="sms" />
          </div>
        </div>    
      </form>
    </div>
  );
};
export default DocumentosLegales;
