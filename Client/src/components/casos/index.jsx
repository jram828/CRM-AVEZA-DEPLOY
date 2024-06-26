import "./casos.css";
import { useState, useEffect } from "react";
import TarjetaCaso from "../../components/tarjetaCaso/tarjetaCaso";
import { useSelector, useDispatch } from "react-redux";
import {
  filterCasos,
  getCasos,
  // orderCasos,
  getCasosTodos,
} from "../../redux/actions";
import SearchBar from "../../components/searchBarCasos/searchBar";
// import OrderCasos from "../../components/orderCasos/orderCasos";
import { Link } from "react-router-dom";
import loading from "../../assets/loading.gif";
import { Button } from "../Mystyles";

function Casos() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const dispatch = useDispatch();
  const casos = useSelector((state) => state.casos);
  const pages = useSelector((state) => state.pages);
  const [filterApplied, setFilterApplied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getCasosTodos());
  }, [dispatch]);

  const todos = pages?.datosPagina || [];
  const totalPages = Math.ceil(todos.length / 6);

  console.log(totalPages);

  console.log("pages", pages);

  useEffect(() => {
    if (order) {
      dispatch(orderCasos(order, currentPage));
    } else {
      dispatch(getCasos(currentPage));
      const storedFilter = JSON.parse(localStorage.getItem("casosFilter"));
      if (storedFilter) {
        setFilterApplied(true);
      }
    }
  }, [dispatch, currentPage, order]);

  console.log("order", order, "currentpage", currentPage);
  const handleVerTodosClick = () => {
    setOrder("");
    setCurrentPage(1);
    dispatch(getCasos(1));
    localStorage.removeItem("casosFilter");
    setFilterApplied(false);
    setSearchPerformed(false);
  };

  const handleFilter = (filtro, inputValue) => {
    dispatch(filterCasos(filtro, inputValue));
    localStorage.setItem("casosFilter", JSON.stringify({ filtro, inputValue }));
    setFilterApplied(true);
    setSearchPerformed(true);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
    setCurrentPage(1);
  };

  const isLoading = !casos || !casos.datosPagina;

  // const userCasos =
  //   !isLoading &&
  //   (user.administrador
  //     ? casos.datosPagina
  //     : casos.datosPagina.filter(
  //         (caso) =>
  //           (caso.nombreCliente === user.nombre &&
  //             caso.apellidoCliente === user.apellido) ||
  //           (caso.nombreabogado === user.nombre &&
  //             caso.apellidoAbogado === user.apellido)
  //       ));
 console.log('Casos: ', casos)
  return (
    <div className="contenedorcasos">
      <div className="encabezado">
        <h1 className="titulo">Casos</h1>
      </div>
      <br />
      <div className="menucasos">
        <SearchBar onFilter={handleFilter} />
        {/* {user.administrador === true || user.cedulaAbogado ? ( */}
        <Link to="/casos/crearcaso" className="botoncrearcaso">
          <Button>Crear caso</Button>
        </Link>
        {/* ) : null} */}
        {filterApplied && (
          <Button
            onClick={handleVerTodosClick}
          >
            Ver todos
          </Button>
        )}
      </div>

      {/* <div className="p-2"> */}

      {isLoading ? (
        <div className="loading-container">
          <img className="loading-image" src={loading} alt="loading" />
        </div>
      ) : (
        <div className="casosconpagina">
          {searchPerformed ? undefined : (
            <div className="pagination">
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="botonprevpag"
                >
                  &lt;&lt;
                </button>
              )}
              <span className="labelpagina">Página {currentPage}</span>
              {currentPage < casos.totalPaginas && (
                <button
                  className="botonpagsig"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  &gt;&gt;
                </button>
              )}
            </div>
          )}
          <br />
          <div className="divcasos">
            {casos.datosPagina.map((caso) => (
              <TarjetaCaso caso={caso} key={caso.id} />
            ))}
          </div>
        </div>
      )}
    </div>

    // </div>
  );
}

export default Casos;
