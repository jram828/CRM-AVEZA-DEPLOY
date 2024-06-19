import { MercadoPagoConfig, Preference } from "mercadopago";
import dotenv from 'dotenv'
dotenv.config();
const { ACCESSTOKEN } = process.env;


const crearOrden = async (item) => {
  // SDK de Mercado Pago

  // Agrega credenciales
  // const client = new MercadoPagoConfig({
  //   accessToken:
  //     ACCESSTOKEN,
  // });
  const client = new MercadoPagoConfig({accessToken: process.env.ACCESSTOKEN || ""})

  //console.log('Estoy en el controller')
  //console.log('Body crear orden: ',item)

  
  try {

    let body = {
      items: [
          {
            id: item.id,
            title: item.description,
            //description: item.description,
            quantity: Number(item.quantity),
            unit_price: Number(item.unit_price),
            currency_id: "ARS",
           
          },
        ],
        payer: {
          // email: item.email,
          email: "test_user_1490493949@testuser.com",
        },
        // Asi lo implemento Julian
        // payment_methods: {
        //   excluded_payment_methods: [],
        //   excluded_payment_types: [],
        //   installments: 12,
        // },
        //Implementacion Gustavo
        payment_methods: {
          // excluded_payment_types: [
          //   {
          //     id: 'ticket', // Excluir métodos de pago no deseados
          //   },
          // ],
          installments: 12,
        },
        back_urls: {
          success:
            "https://proyecto-final-develop.vercel.app/#/home/payments/status",
          failure: "https://proyecto-final-develop.vercel.app/#/home",
          pending: "https://proyecto-final-develop.vercel.app/#/home",
        },
        notification_url:
          "https://legaltech-develop.onrender.com/pagos/webhook",
        auto_return: "approved",
      };

    //await preference.create() Asi llamaba Julian la API

    //Agregado por Gustavo
    //const preference= new Preference(client)
    const preference = new Preference(client);
    console.log('Estoy por crear la preferencia')
    const response = await preference.create({body});
    console.log('Response crear orden:',response)
   return response
  } catch (error) {
    console.log('Error en el controller')
    return error
}


};

export { crearOrden };