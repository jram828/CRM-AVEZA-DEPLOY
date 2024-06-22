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

  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses son 0-11
    const año = fecha.getFullYear();
    return `${dia}-${mes}-${año}`;
  }

  const fechaFormateada = formatearFecha(pagos?.fechaDeAprobacion);

  const userCasos = pages.datosPagina?.filter(
    (caso) =>
      caso.nombreCliente === user.nombre &&
      caso.apellidoCliente === user.apellido
  );

  return (
    <div className="flex items-center justify-center rounded-lg min-h-screen p-6 bg-white text-black">
      {/* {user.cedulaCliente ? ( */}
        <div>
          <div className="space-y-6 h-full p-6 bg-secondary rounded-lg shadow-md text-black">
            <h1 className="text-2xl font-bold text-black text-center">
              Realizar un pago
            </h1>

            <h4 className="text-md text-left">
              Selecciona el caso al cual se va a aplicar el pago <br /> e
              ingresa el valor de los honorarios que deseas pagar.
            </h4>

            <div className="">
              <label
                htmlFor="correo"
                className="input input-md text-md !border-black !rounded-lg input-secondary flex items-center  !text-black"
              >
                Valor a pagar:
                <input
                  name="unit_price"
                  type="number"
                  value={userPreference.unit_price}
                  onChange={handleChangePagos}
                  id="unit_price"
                  className="grow ml-2 text-black"
                />
              </label>
            </div>
            <div className="">
              {pages.datosPagina ? (
                <label className="w-full">
                  <select
                    name="idCaso"
                    id="idCaso"
                    onChange={(event) => handleChangePagos(event)}
                    className="w-full h-12 p-2 border text-sm border-black rounded-lg bg-secondary text-black focus:outline-none"
                  >
                    <option value="" className="customOption">
                      Seleccionar caso
                    </option>
                    {userCasos.map((caso) => (
                      <option
                        key={caso.id}
                        value={caso.id}
                        className="text-black"
                      >
                        {`${caso.descripcion} - ${caso.apellidoAbogado}/${caso.apellidoCliente}`}
                      </option>
                    ))}
                  </select>
                </label>
              ) : (
                <label className="w-full text-black text-md">
                  No se encontraron casos para asociar al pago.
                </label>
              )}
            </div>
            <div className="flex flex-row items-center justify-center">
              <input
                type="button"
                name="Pagar"
                value="Pagar"
                className="btn btn-xs border border-success bg-white hover:bg-white !w-36 ml-2"
                onClick={handlePay}
              />
            </div>
            <br />
          </div>
          <div id="wallet_container"></div>
        </div>
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
