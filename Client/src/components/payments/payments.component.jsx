import './payments.css';
import { Link } from "react-router-dom";
// const PUBLIC_KEY = import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY;
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from 'react';
import { crearPago } from '../../handlers/crearPago';




function Payments() {
  // initMercadoPago(PUBLIC_KEY);
  initMercadoPago("TEST-06f58ad5-9c71-4fff-9bbf-67a1b9a05576", { locale: 'es-CO' });

  const [userPreference, setUserPreference] = useState({
    quantity: "1",
    unit_price: "",
    cedula: "",
    description: "Honorarios",
  });

    const [responsePreference, setResponsePreference] = useState({});
  
  const handlePay = async () => {
    try {
      // Realizar la llamada a la API para crear la orden de pago en MercadoPago
    console.log("Datos crear usuario: ", userPreference);
      const paymentData = await crearPago(userPreference);
      console.log("Respuesta creacion pago: ", paymentData);

      setResponsePreference(paymentData);
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
  //   const onSubmit = async (formData) => {
  //     // callback llamado al hacer clic en Wallet Brick
  //     // esto es posible porque Brick es un botón
  //     // en este momento de envío, debes crear la preferencia
  //     const yourRequestBodyHere = {
  //       items: [
  //         {
  //           id: "202809963",
  //           title: "Dummy title",
  //           description: "Dummy description",
  //           quantity: 1,
  //           unit_price: 10,
  //         },
  //       ],
  //       purpose: "wallet_purchase",
  //     };
  //     return new Promise((resolve, reject) => {
  //       fetch("/create_preference", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(yourRequestBodyHere),
  //       })
  //         .then((response) => response.json())
  //         .then((response) => {
  //           // resolver la promesa con el ID de la preferencia
  //           resolve(response.preference_id);
  //         })
  //         .catch((error) => {
  //           // manejar la respuesta de error al intentar crear la preferencia
  //           reject();
  //         });
  //     });
  //   };

  //   const onError = async (error) => {
  //     // callback llamado para todos los casos de error de Brick
  //     console.log(error);
  //   };

  //   const onReady = async () => {
  //     /*
  //    Callback llamado cuando Brick esté listo.
  //    Aquí puedes ocultar loadings en tu sitio, por ejemplo.
  //  */
  //   };
  return (
    <div>
      <div>
        {/* <p>Realizar pago</p> */}
        <div className="space-y-6 w-full max-w-lg p-6 bg-primary rounded-lg shadow-md">
          <h1 className="titulo">Realizar un pago</h1>
          <div className="input input-bordered flex items-center gap-2">
            <label htmlFor="correo" className="">
              Valor a pagar:
            </label>
            <input
              name="unit_price"
              type="number"
              value={userPreference.unit_price}
              onChange={handleChangePagos}
              id="unit_price"
              className="grow"
            />
            {/* <label htmlFor="contrasena" className="labelcrearusuario">
                Contraseña:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="cajascrearusuario"
                value={userDataCrear.password}
                onChange={handleChangeCrear}
              /> */}
          </div>
          <div className="botonescrearusuario">
            <Link to="/home">
              <input
                type="button"
                name="Volver"
                value="Volver"
                className="btn btn-accent btn-sm"
              />
            </Link>
            <input
              type="button"
              name="Pagar"
              value="Pagar"
              className="btn btn-accent btn-sm"
              onClick={handlePay}
            />
          </div>
          <br />
        </div>
        <div id="wallet_container"></div>

        <Wallet
          onSubmit={handlePay}
          initialization={{ preferenceId: responsePreference.id }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      </div>
    </div>
  );
}

export default Payments