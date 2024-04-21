import axios from "axios";
// import { URL } from "../App";

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER_CARDS = 'FILTER_CARDS';
export const ORDER_CARDS = 'ORDER_CARDS';
export const GET_CLIENTE_BY_CEDULA = "GET_CLIENTE_BY_CEDULA";
export const GET_CLIENTES = "GET_CLIENTES"
export const SET_CLIENTE = "SET_CLIENTE";

export const addFav = (character) => {
  
  return {
    type: ADD_FAV,
  payload:character}
}

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload:id
  }
}

export const filterCards = (gender) => {
  return {
    type: FILTER_CARDS,
    payload: gender
  }
}

export const orderCards = (order) => {
  console.log('Order Action:', order)
  return {
    
    type: ORDER_CARDS,
    payload: order
  }
}

export const clienteActual = (cliente) => {
  console.log("Cliente Action:", cliente);
  return {
    type: SET_CLIENTE,
    payload: cliente,
  };
};

export const getClienteByCedula = (cedula) => {
  
  console.log('Cedula get by cedula:',cedula)
  return async (dispatch) => {
    const { data } = await axios.get(`/${cedula}`);
    try {
      return dispatch({
        type: GET_CLIENTE_BY_CEDULA,
        payload: data,
      });
    } catch (error) {
      window.alert("Cliente no encontrado!");
    }
  };
};

export  const getClienteAll = () => {
return async (dispatch) => {
  const { data } = await axios.get('/conocimientolitigios');
  console.log('Data Get clientes:',data)
  try {
    return dispatch({
      type: GET_CLIENTES,
      payload: data,
    });
  } catch (error) {
    window.alert("Clientes no encontrados!");
  }
};
};
  
