import { useEffect } from "react";
import "./clientes.css";
import { useDispatch, useSelector } from "react-redux";
import { getClienteAll } from "../../redux/actions";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";
import { Button } from "../Mystyles";

const fillTemplate = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);

  useEffect(() => {
    dispatch(getClienteAll());
  }, [dispatch]);

  console.log("Clientes conocimiento: ", clientes);

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

      // !Reemplazar contenido de array en una tabla
      doc.render({
        clientes: clientes,
      });

      // !Reemplazar campos en una plantilla (Documentos legales)
      // doc.render({
      //   nombre: datos.nombres.toUpperCase(),
      //   apellido: datos.apellidos.toUpperCase(),
      //   cedula: datos.cedulaCliente,
      //   celular: datos.celular,
      //   // ciudad: datos.Ciudads[0].nombre_ciudad,
      //   direccion: datos.direccion,
      //   pretensiones: datos.valor_pretensiones,
      //   pretensiones_letras: datos.valor_pretensiones_letras.toUpperCase(),
      //   honorarios: datos.honorarios,
      //   honorarios_letras: datos.honorarios_letras.toUpperCase(),
      // });

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
      <div className="generarformato">
        <input type="file" id="doc" />
        <Button className="botonesiniciosesion" onClick={generarContrato}>
          Generar Documentos
        </Button>
      </div>
    </div>
  );
};
export default fillTemplate;
