import './allConsultas.css';

import { getConsultas } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import loading from "../../assets/loading.gif";


function AllConsultas() {

  const dispatch = useDispatch();
  const consultas = useSelector((state) => state.consultas);
  const [loadingState, setLoadingState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingState(true);
      await dispatch(getConsultas(currentPage));
      setLoadingState(false);
    };
    fetchData();
  }, [dispatch, currentPage]);

  console.log("consultas", consultas)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  return (
    <div className="contenedorconsultas">
      <div className="infoconsultas">
        <div className="encabezadoconsultas">
          <h1 className="titulo">Consultas</h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex mt-8 items-center justify-center">
            <div className="pagination join ">
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
              {consultas.length === 6 && (
                <button
                  className="join-item btn btn-xs btn-accent"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  &gt;&gt;
                </button>
              )}
            </div>
          </div>
          {loadingState ? (
            <div className="loading-container">
              <img className="loading-image" src={loading} alt="loading" />
            </div>
          ) : consultas && consultas.length > 0 ? (
            <div className="divconsultas">
              {consultas.map((consulta) => (
                <div key={consulta.id} className="cardconsulta">
                  <h3>Consulta n°{consulta.id}</h3>
                  <div className="infoconsultatarjeta">
                    <span className="labelconsulta">Remitente: </span>
                    <span className="nombreconsulta">
                      {consulta.nombre} {consulta.apellido}
                    </span>
                  </div>
                  <div className="infoconsultatarjeta">
                    <span className="labelconsulta">Fecha: </span>
                    <span className="nombreconsulta">
                      {consulta.createdAt.split("T")[0]}
                    </span>
                  </div>
                  <div className="infoconsultatarjeta">
                    <span className="labelconsulta">Correo electrónico: </span>
                    <span className="nombreconsulta">{consulta.correo}</span>
                  </div>
                  <div className="infoconsultatarjeta">
                    <span className="labelconsulta">Celular: </span>
                    <span className="nombreconsulta">{consulta.telefono}</span>
                  </div>
                  <div className="infoconsultatarjeta">
                    <span className="labelconsulta">Consulta: </span>
                    <span className="nombreconsulta">{consulta.consulta}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No hay consultas disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllConsultas

