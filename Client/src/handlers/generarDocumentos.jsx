import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";

export const generarDocumentos = (
  caso,
  valor_pretensiones_letras,
  honorarios_letras
) => {
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
    // doc.render({
    //   clientes: clientes,
    // });

    // !Reemplazar campos en una plantilla (Documentos legales)
    doc.render({
      nombre: caso.Cliente.nombres.toUpperCase(),
      apellido: caso.Cliente.apellidos.toUpperCase(),
      cedula: Number(caso.ClienteCedulaCliente).toLocaleString(),
      celular: caso.Cliente.celular,
      correo: caso.Cliente.email,
      // ciudad: caso.Ciudads[0].nombre_ciudad,
      direccion: caso.Cliente.direccion,
      pretensiones: Number(caso.valor_pretensiones).toLocaleString(),
      pretensiones_letras: valor_pretensiones_letras.toUpperCase(),
      honorarios: Number(caso.honorarios).toLocaleString(),
      honorarios_letras: honorarios_letras.toUpperCase(),
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
    saveAs(blob, `Documentos ${caso.Cliente.nombres} ${caso.Cliente.apellidos}.docx`);
  };
};
