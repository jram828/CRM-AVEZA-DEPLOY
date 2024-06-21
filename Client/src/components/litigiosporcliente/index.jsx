import logo from "../../img/logoAveza.png";
import Cliente from "../cliente";
import {useEffect } from "react";
import "../../App.css";
import "./litigiosporcliente.css";
import { useDispatch, useSelector } from "react-redux";
import { getClienteAll } from "../../redux/actions";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
// import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import { Button } from "../Mystyles";

const LitigiosPorCliente = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);

  useEffect(() => {
    dispatch(getClienteAll());
  }, [dispatch]);

  console.log('Clientes conocimiento: ', clientes)
  
  const generarContrato = () => {
    const docs = document.getElementById("doc");
    const reader = new FileReader();
    if (docs.files.length === 0) {
      alert("No files selected");
    }
    reader.readAsBinaryString(docs.files.item(0));

    reader.onerror = function (evt) {
      console.log("error reading file", evt);
      alert("error reading file" + evt);
    };
    reader.onload = function (evt) {
      const content = evt.target.result;
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
      doc.render({
        clientes: clientes,
      });

      const blob = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
      });
      // Output the document using Data-URI
      saveAs(blob, `Documento Clientes.docx`);
    };
  };

  return (
    <div className="contenedorlitigios">
      <div className="logo-aveza">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
      <h1 className="titulo">Conocimiento de Litigios</h1>
      </div>
      {/* <br /> */}
      <div>
        <input type="file" id="doc" />
        {/* <Link to={"/previsualizarcontrato"}> */}
        <Button className="botonesiniciosesion" onClick={generarContrato}>
          Generar Documentos
        </Button>
        {/* </Link> */}
      </div>
      {/* <form> */}
        <div className="divclientes">
          {clientes.map((cliente) => {
            return (
              <div key={cliente.cedula}>
                <Cliente cliente={cliente} />
              </div>
            );
          })}
        </div>
      {/* </form> */}
    </div>
  );
};
export default LitigiosPorCliente;
