import "./payments.css";
import { Link } from "react-router-dom";
// const PUBLIC_KEY = import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY;
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import { crearPago } from "../../handlers/crearPago";

import { useDispatch, useSelector } from "react-redux";
import { getPagos, getCasosTodos } from "../../redux/actions";
import loading from "../../assets/loading.gif";
import { Button } from "../Mystyles";

function Payments() {
  // initMercadoPago(PUBLIC_KEY);
  initMercadoPago("APP_USR-b26ba8db-fbe9-410e-af81-4a8481738a84", {
    locale: "es-CO",
  });

  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const [userPreference, setUserPreference] = useState({
    quantity: "1",
    unit_price: "",
    idCaso: "",
    description: "Honorarios",
  });

  const [loadingState, setLoadingState] = useState(true);

  // const [responsePreference, setResponsePreference] = useState({});

  const handlePay = async () => {
    try {
      // Realizar la llamada a la API para crear la orden de pago en MercadoPago
      console.log("Datos crear usuario: ", userPreference);
      const paymentData = await crearPago(userPreference);
      console.log("Respuesta creacion pago: ", paymentData);

      // setResponsePreference(paymentData);
      // Redirigir a la página de pago de MercadoPago
      window.open(paymentData.init_point, "_self");
    } catch (error) {
      console.error(error);
      // Manejo de errores
    }
  };

  const handleChangePagos = (e) => {
    setUserPreference({
      ...userPreference,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const dispatch = useDispatch();
  const pagos = useSelector((state) => state.pagos);
  const pages = useSelector((state) => state.pages);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingState(true);
      await dispatch(getCasosTodos());
      setLoadingState(false);
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingState(true);
      await dispatch(getPagos());
      setLoadingState(false);
    };
    fetchData();
  }, [dispatch]);
console.log('Casos para pagos:',pages)
  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses son 0-11
    const año = fecha.getFullYear();
    return `${dia}-${mes}-${año}`;
  }

  const fechaFormateada = formatearFecha(pagos?.fechaDeAprobacion);

  const userCasos = pages.filter(
    (caso) =>
      caso.nombreCliente === user.nombres &&
      caso.apellidoCliente === user.apellidos
  );

  return (
    <div className="contenedorpagos">
      {/* {user.cedulaCliente ? ( */}
      {/* <div className=""> */}
        <h1 className="encabezadopagos">
          Realizar un pago
        </h1>

        <p>Ingresa el valor de los honorarios que deseas pagar.</p>
        <br />
        <div className="inputpago">
          <label htmlFor="unit_price" className="labelpagos">
            Valor a pagar:
          </label>
          <input
            name="unit_price"
            type="number"
            value={userPreference.unit_price}
            onChange={handleChangePagos}
            id="unit_price"
            className="cajaspago"
          />
        </div>
        <br />
        <div className="selectcaso">
          <p>
            Selecciona el caso al cual se va a aplicar el pago
          </p>
          {pages.length > 0 ? (
              <select
                name="idCaso"
                id="idCaso"
                onChange={(event) => handleChangePagos(event)}
                className="cajaspago"
              >
                <option value="" className="cajaspago">
                  Seleccionar caso
                </option>
                {userCasos.map((caso) => (
                  <option key={caso.id} value={caso.id} className="cajaspago">
                    {`${caso.descripcion} - ${caso.apellidosAbogado}/${caso.apellidoCliente}`}
                  </option>
                ))}
              </select>
           
          ) : (
            <label className="w-full text-black text-md">
              No se encontraron casos para asociar al pago.
            </label>
          )}
          <br />
        </div>

        <Button onClick={handlePay}>
          Pagar
        </Button>

        <div id="wallet_container"></div>
        <br />
      {/* </div> */}

      {/* ) : (
        <div className="grid grid-cols-3 gap-8">
          {loadingState ? (
            <div className="loading-container">
              <img className="loading-image" src={loading} alt="loading" />
            </div>
          ) : (
            pagos.map((pago) => (
              <div
                key={pago?.pagoId}
                className="space-y-6 h-full p-6 bg-secondary rounded-lg shadow-md text-black mt-4"
              >
                <h3 className="text-xl font-bold text-black text-center">
                  Caso: n°{pago?.idCaso} {pago?.Caso?.descripcion}
                </h3>
                <p>
                  <strong>Cliente:</strong> {pago?.Caso?.Cliente?.apellido}{" "}
                  {pago?.Caso?.Cliente?.nombre}
                </p>
                <p>
                  <strong>Fecha:</strong>{" "}
                  {formatearFecha(pago?.fechaDeAprobacion)}
                </p>
                <p>
                  <strong>Monto:</strong> {pago?.importeDeLaTransaccion}
                </p>
                <p>
                  <strong>Descripción:</strong> {pago?.descripcion}
                </p>
              </div>
            ))
          )}
        </div>
      )} */}
    </div>
  );
}

export default Payments;
