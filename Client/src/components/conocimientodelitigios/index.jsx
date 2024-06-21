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
import SearchBar from "../searchBarClientes";
import OrderClientes from "../orderCliente/orderCliente";
import { Link } from "react-router-dom";

const ConocimientoDeLitigios = () => {
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

    const handleVerTodosClick = () => {
      // setOrder("");
      // setCurrentPage(1);
      // dispatch(getClientes(1));
      // setFilterApplied(false);
      // setSearchPerformed(false);
    };

    const handleFilter = (filtro, inputValue) => {
      // dispatch(filterCliente(filtro, inputValue));
      // setFilterApplied(true);
      // setSearchPerformed(true);
    };

    const handlePageChange = (newPage) => {
      // setCurrentPage(newPage);
    };

    const handleOrderChange = (newOrder) => {
      // setOrder(newOrder);
      // setCurrentPage(1);
  };
  
  return (
    <div className="contenedorlitigios">
      <div className="encabezado">
        <h1 className="titulo">Conocimiento de Litigios</h1>
      </div>
      <br />
      <div className="registrocliente">
        <SearchBar onFilter={handleFilter} />
        <Link to="/registrocliente">
          <Button>Crear cliente</Button>
        </Link>
        {/* {filterApplied && ( */}
        <Button onClick={handleVerTodosClick}>Ver todos</Button>
        {/* )} */}
      </div>

      {/* <div className="generarformato">
        <input type="file" id="doc" /> */}
      {/* <Link to={"/previsualizarcontrato"}> */}
      {/* <Button className="botonesiniciosesion" onClick={generarContrato}>
          Generar Documentos
        </Button> */}
      {/* </Link> */}
      {/* </div> */}
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
export default ConocimientoDeLitigios;



// import logo from "../../img/logoAveza.png";

// import { Link } from "react-router-dom";
// import { Button } from "../Mystyles";


// const ConocimientoDeLitigios = () => {

  
//   return (
//     <div>
//       <div className="logo-aveza">
//         <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
//       </div>
//       <h1 className="titulo">Conocimiento de Litigios</h1>
//       <br />

//       <form>
//         <br /><br /><br /><br /><br />
//         <div className="clientes">
//           <Link to={"/litigiosporcliente"} >
//             <Button className="botonesiniciosesion">
//               Litigios por cliente
//             </Button>
//           </Link>
//           <Link to={"/litigiostipocaso"} >
//             <Button className="botonesiniciosesion">
//               Litigios por tipo de caso
//             </Button>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default ConocimientoDeLitigios;
