import Cliente from "../cliente";
import {useEffect } from "react";
import "../../App.css";
import "./clientes.css";
import { useDispatch, useSelector } from "react-redux";
import { getClienteAll } from "../../redux/actions";
import { Button } from "../Mystyles";
import SearchBar from "../searchBarClientes";
import OrderClientes from "../orderCliente/orderCliente";
import { Link } from "react-router-dom";

const Clientes = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);

  useEffect(() => {
    dispatch(getClienteAll());
  }, [dispatch]);

  console.log("Clientes conocimiento: ", clientes);

 
//  const pages = useSelector((state) => state.pages);
//  const [filterApplied, setFilterApplied] = useState(false);
//  const [searchPerformed, setSearchPerformed] = useState(false);
//  const [currentPage, setCurrentPage] = useState(1);
//  const [order, setOrder] = useState("");

//  useEffect(() => {
//    dispatch(getClientesTodos()); // Obtener el total de clientes
//  }, [dispatch]);

//  const totalPages = Math.ceil(pages?.length / 6);
//  console.log(totalPages);

//  console.log("pages", pages);

//  useEffect(() => {
//    if (order) {
//      dispatch(orderClientes(order, currentPage));
//    } else {
//      dispatch(getClientes(currentPage));
//    }
//  }, [dispatch, currentPage, order]);

//  console.log("order", order, "currentpage", currentPage);
 const handleVerTodosClick = () => {
  //  setOrder("");
  //  setCurrentPage(1);
  //  dispatch(getClientes(1));
  //  setFilterApplied(false);
  //  setSearchPerformed(false);
 };

 const handleFilter = (filtro, inputValue) => {
  //  dispatch(filterCliente(filtro, inputValue));
  //  setFilterApplied(true);
  //  setSearchPerformed(true);
 };

 const handlePageChange = (newPage) => {
  //  setCurrentPage(newPage);
 };

 const handleOrderChange = (newOrder) => {
  //  setOrder(newOrder);
  //  setCurrentPage(1);
 };
  
  return (
    <div className="contenedorlitigios">
      <div className="encabezado">
        <h1 className="titulo">Clientes</h1>
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

      <div className="divclientes">
                {/* {searchPerformed && clientes.length === 0 && (
          <p>No hay coincidencias</p>
        )}
        {!searchPerformed && clientes.length === 0 && (
          <div className="loading-container">
            <img className="loading-image" src={loading} alt="loading" />
          </div>
        )} */}
        {clientes.length > 0 &&
        clientes.map((cliente) => {
          return (
            <div>
              <Cliente key={cliente.cedula} cliente={cliente} />
            </div>
          );
        })
        }
      </div>
      {/* {searchPerformed ? undefined : (
        <div className="pagination mt-4 join self-center">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="join-item btn btn-xs btn-accent"
            >
              &lt;&lt;
            </button>
          )}
          <span className="join-item btn btn-xs btn-accent">
            Página {currentPage}
          </span>
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="join-item btn btn-xs btn-accent"
            >
              &gt;&gt;
            </button>
          )}
        </div>
      )} */}
    </div>
  );
};
export default Clientes;



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
