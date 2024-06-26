import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Mystyles";
import "../detail/detail.css";
import logo from "../../img/logoAveza.png";
import {
  getByIdAbogado,
  getByIdCliente,
  setAbogado,
  setCliente,
} from "../../redux/actions";
import { deleteAbogado, deleteCliente } from "../../redux/actions";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const source = useSelector((state) => state.source);

  const datos = useSelector((state) =>
    source === "abogado" ? state.abogado : state.cliente
  );
  const cedula =
    source === "abogado" ? datos.cedulaAbogado : datos.cedulaCliente;

  const [userDataDetail, setUserDataDetail] = useState({
    email: "",
    nombres: "",
    apellidos: "",
    tarjetaProf: "",
    cedula: "",
    celular: "",
    direccion: "",
    ciudad: "",
    departamento: "",
    // password: "",
    comentarios: "",
    cedula: cedula,
  });

  useEffect(() => {
    if (source === "abogado") {
      setUserDataDetail({
        ...userDataDetail,
        email: datos.email,
        celular: datos.celular,
        ciudad: datos.Ciudads[0].nombre_ciudad,
        departamento: datos.Ciudads[0].Departamentos[0].nombre_departamento,
        tarjetaProf: datos.tarjetaProf,
        nombres: datos.nombres,
        apellidos: datos.apellidos,
        direccion: datos.direccion,
        comentarios: datos.comentarios,
        cedula: cedula,
      });
    } else {
      setUserDataDetail({
        ...userDataDetail,
        email: datos.email,
        celular: datos.celular,
        ciudad: datos.Ciudads[0].nombre_ciudad,
        departamento: datos.Ciudads[0].Departamentos[0].nombre_departamento,
        nombres: datos.nombres,
        tarjetaProf: "",
        apellidos: datos.apellidos,
        direccion: datos.direccion,
        comentarios: datos.comentarios,
        cedula: cedula,
      });
    }
  }, [dispatch, source]);

  const handleDelete = () => {
    if (source === "abogado") {
      const isConfirmed = window.confirm(
        "¿Estás seguro de que deseas eliminar este registro?"
      );

      if (isConfirmed) {
        dispatch(deleteAbogado(cedula));
        console.log("cedula", cedula);
        navigate("/home/lawyers");
      }
    } else {
      const isConfirmed = window.confirm(
        "¿Estás seguro de que deseas eliminar este registro?"
      );

      if (isConfirmed) {
        dispatch(deleteCliente(cedula));
        navigate("/home/customers");
      }
    }
  };

  const handleUpdateDetail = (e) => {
    setUserDataDetail({
      ...userDataDetail,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };



  const submitUpdateDetail = (e) => {
    e.preventDefault();
    registroCliente(userDataRegistro);
  };

  return (
    <div className="contenedordetail">
      <div className="detail" key={userDataDetail.cedula}>
        <div className="encabezado">
          <h5 className="titulo">Detalles</h5>
        </div>
        <div className="menu-detail">
          {/* <Link to={"/cotizacion"}> */}
          <Button className="botonesiniciosesion" onClick={submitUpdateDetail}>
            Actualizar
          </Button>
          {/* </Link> */}
          <Button onClick={handleDelete} className="botonesiniciosesion">
            Eliminar
          </Button>
          <Link to={"/clientes"}>
            <Button className="botonesiniciosesion">Volver</Button>
          </Link>
          {/* <Button className="botonesiniciosesion" onClick={generarContrato}>
            Generar Documentos
          </Button> */}
        </div>
        {/* <div className="generardocumento">
          <input type="file" id="doc" />
        </div> */}
        {datos.nombres && (
          <h4 className="nombredetail">
            {datos.nombres.toUpperCase()} {datos.apellidos.toUpperCase()}{" "}
          </h4>
        )}
        {/* </div> */}
        {/* <img className="photo" src={character.image} alt={character.name} /> */}
        <div className="info">
          <div className="personal">
            <div className="infodetail">
              <label htmlFor="numerocedula" className="labeldetail">
                Numero de cédula:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="cedulaAbogado"
                id="cedula"
                value={userDataDetail.cedula}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="numerocedula" className="labeldetail">
                Celular:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="cedulaAbogado"
                id="cedula"
                value={userDataDetail.celular}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="email" className="labeldetail">
                Correo:
              </label>
              <input
                type="email"
                className="cajadetail"
                name="email"
                id="email"
                value={userDataDetail.email}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="direccion" className="labeldetail">
                Dirección:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="direccion"
                id="direccion"
                value={userDataDetail.direccion.toUpperCase()}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="ciudad" className="labeldetail">
                Ciudad:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="ciudad"
                id="ciudad"
                value={userDataDetail.ciudad.toUpperCase()}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="ciudad" className="labeldetail">
                Departamento:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="departamento"
                id="departamento"
                value={userDataDetail.departamento.toUpperCase()}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="comentarios" className="labeldetail">
                Comentarios:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="departamento"
                id="departamento"
                value={userDataDetail.comentarios}
                onChange={handleUpdateDetail}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
