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

  useEffect(() => {
    dispatch(getAbogados());
  }, [dispatch]);

  console.log("Abogados: ", abogados);

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
        {abogados.map((abogado) => {
          return (
            <div key={abogado.cedulaAbogado}>
              <Cliente cliente={abogado} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Abogados;