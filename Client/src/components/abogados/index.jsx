import Cliente from "../cliente";
import {useEffect } from "react";
import "../../App.css";
import "./abogados.css";
import { useDispatch, useSelector } from "react-redux";
import { getAbogados} from "../../redux/actions";
import { Button } from "../Mystyles";
import SearchBar from "../searchBarAbogados";
// import OrderClientes from "../orderCliente/orderCliente";
import { Link } from "react-router-dom";

const Abogados = () => {
  const dispatch = useDispatch();
  const abogados = useSelector((state) => state.abogados);

  // const pages = useSelector((state) => state.pages);
  // const [filterApplied, setFilterApplied] = useState(false);
  // const [searchPerformed, setSearchPerformed] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [order, setOrder] = useState("");

  // useEffect(() => {
  //   dispatch(getAbogadosTodos());
  // }, [dispatch]);

  // const totalPages = Math.ceil(pages?.length / 6);
  // console.log(totalPages);

  // console.log("pages", pages);

  // useEffect(() => {
  //   if (order) {
  //     dispatch(orderAbogados(order, currentPage));
  //     const storedFilter = JSON.parse(localStorage.getItem("abogadoFilter"));
  //     if (storedFilter) {
  //       setFilterApplied(true);
  //     }
  //   } else {
  //     dispatch(getAbogados(currentPage));
  //     const storedFilter = JSON.parse(localStorage.getItem("abogadoFilter"));
  //     if (storedFilter) {
  //       setFilterApplied(false);
  //     }
  //   }
  // }, [dispatch, currentPage, order]);

  // console.log("order", order, "currentpage", currentPage);

  useEffect(() => {
    dispatch(getAbogados());
  }, [dispatch]);

  console.log("Abogados: ", abogados);

  const handleVerTodosClick = () => {
    // setOrder("");
    // setCurrentPage(1);
    // dispatch(getAbogados(1));
    // setFilterApplied(false);
    // setSearchPerformed(false);
  };

  const handleFilter = (filtro, inputValue) => {
    // dispatch(filterAbogado(filtro, inputValue));
    // localStorage.setItem(
    //   "abogadoFilter",
    //   JSON.stringify({ filtro, inputValue })
    // );
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
        <h1 className="titulo">Abogados</h1>
      </div>
      <br />
      <div className="registrocliente">
        <SearchBar onFilter={handleFilter} />
        <Link to="/registroabogado">
          <Button>Registrar Abogado</Button>
        </Link>
        {/* {filterApplied && ( */}
        <Button onClick={handleVerTodosClick}>Ver todos</Button>
        {/* )} */}
      </div>
      <div className="divabogados">
        {/* {searchPerformed && abogados.length === 0 && (
          <p>No hay coincidencias</p>
        )}
        {!searchPerformed && abogados.length === 0 && (
          <div className="loading-container">
            <img className="loading-image" src={loading} alt="loading" />
          </div>
        )} */}
        {abogados.length > 0 &&
        abogados.map((abogado) => {
          return (
            <div key={abogado.cedulaAbogado}>
              <Cliente cliente={abogado} />
            </div>
          );
        })}
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
export default Abogados;