import React, { useState } from "react";
import JSZip from "jszip";
import Docxtemplater from "docxtemplater";


// const fs = require("fs");
// const path = require("path");
// import path from "path";
function WordToHtml() {
  const [fileData, setFileData] = useState();
  const [formData, setFormData] = useState({});

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const content = e.target.result;
      const zip = new JSZip(content);
      const doc = new Docxtemplater().loadZip(zip);
      // Aquí tendrías el contenido del archivo y podrías comenzar a modificarlo
      setFileData(doc);
    };

    reader.readAsBinaryString(file);

    fileData.render({
      nombre: formData.nombre,
      apellido: "Pérez",
      telefono: "1234567890",
    });

    const buf = fileData.getZip().generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });

    // Crea un Blob con el contenido del archivo
    const blob = new Blob([buf], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    // Crea una URL para el Blob
    const url = URL.createObjectURL(blob);

    // Crea un enlace para descargar el archivo
    const link = document.createElement("a");
    link.href = url;
    link.download = "archivo_modificado.docx"; // Nombre del archivo
    link.textContent = "Descargar archivo modificado";
    document.body.appendChild(link);

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    // Aquí aplicarías formData al archivo con docxtemplater
    // y generarías el archivo de Word modificado para descargar

    // console.log("File data: ", fileData);

    // Reemplazar los marcadores de posición con los datos del input
    

   
    // fs.writeFileSync(path.resolve(__dirname, "CONTRATO AVEZA MODIFICADO.docx"), buf);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input type="text" name="nombre" onChange={handleInputChange} />
      <button onClick={handleFormSubmit}>Modificar y Descargar</button>
    </div>
  );
}

export default WordToHtml;




// const PizZip = require("pizzip");
// const Docxtemplater = require("docxtemplater");
// const fs = require("fs");
// const path = require("path");

// // Cargar el documento .docx como contenido binario
// const content = fs.readFileSync(
//   path.resolve(__dirname, "input.docx"),
//   "binary"
// );

// const zip = new PizZip(content);
// const doc = new Docxtemplater(zip, {
//   paragraphLoop: true,
//   linebreaks: true,
// });

// // Reemplazar los marcadores de posición con los datos del input
// doc.render({
//   nombre: "Juan",
//   apellido: "Pérez",
//   telefono: "1234567890",
// });

// const buf = doc.getZip().generate({
//   type: "nodebuffer",
//   compression: "DEFLATE",
// });

// // Guardar el documento modificado
// fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);

