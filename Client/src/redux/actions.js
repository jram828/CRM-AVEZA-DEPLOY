import axios from "axios";
// import { URL } from "../App";

export const GET_CLIENTE_BY_CEDULA = "GET_CLIENTE_BY_CEDULA";
export const GET_CLIENTES = "GET_CLIENTES"
export const SET_CLIENTE = "SET_CLIENTE";
export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_USERTOKEN = "SET_USERTOKEN";
export const FILTER_ABOGADO = "FILTER_NAME_ABOGADO";
export const GET_ABOGADOS = "GET_ABOGADOS";
export const GET_BY_ID_ABOGADO = "GET_BY_ID_ABOGADO";
export const GET_BY_ID_CLIENTE = "GET_BY_ID_CLIENTE";
export const FILTER_CLIENTE = "FILTER_NAME_CLIENTE";
export const SET_SOURCE = "SET_SOURCE";
export const ORDER_ABOGADOS = "ORDER_ABOGADOS";
export const ORDER_CLIENTES = "ORDER_CLIENTES";
export const DELETE_ABOGADO = "DELETE_ABOGADO";
export const DELETE_CLIENTE = "DELETE_CLIENTES";
export const GET_TIPOSDECASOS = "GET_TIPOSDECASOS";
export const GET_CASOS = "GET_CASOS";
export const GET_CASOS_TODOS= "GET_CASOS_TODOS";
export const FILTER_CASOS = "FILTER_CASOS";
export const ORDER_CASOS = "ORDER_CASOS";
export const GET_CASO_BY_ID = "GET_CASO_BY_ID";
export const DELETE_CASO = "DELETE_CASO;";
export const POST_CITA = "POST_CITA";
export const GET_CITAS = "GET_CITAS";
export const POST_CONSULTA = "POST_CONSULTA";
export const GET_CONSULTAS = "GET_CONSULTAS";
export const GET_PAGOS = "GET_PAGOS";
export const CLEAN_USER = "CLEAN_USER";
export const GET_ABOGADOS_TODOS = "GET_ABOGADOS_TODOS";
export const MODIFICAR_DATOS = "MODIFICAR_DATOS";
export const SET_ABOGADO = "SET_ABOGADO";
export const GET_CLIENTES_TODOS = "GET_CLIENTES_TODOS";


export const clienteActual = (cliente) => {
  console.log("Cliente Action:", cliente);
  return {
    type: SET_CLIENTE,
    payload: cliente,
  };
};

export const setAuth = (auth) => {
  console.log("Verificar autenticacion:", auth);
  return {
    type: SET_AUTHENTICATED,
    payload: auth,
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
  const { data } = await axios.get('/clientes/conocimientolitigios');
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
  
export const setUserToken = (userToken) => {
  console.log("User token:", userToken);
  return {
    type: SET_USERTOKEN,
    payload: userToken,
  };
};

export const setSource = (source) => {
  console.log("Verificar source:", source);
  return {
    type: SET_SOURCE,
    payload: source,
  };
};

export const getClientes = () => {
  const endpoint = `/clientes?pagina=1&porPagina=50`;
  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: GET_CLIENTES,
      payload: data,
    });
  };
};

export const getAbogados = () => {
  const endpoint = `/abogados?pagina=1&porPagina=50`;

  return async (dispatch) => {
    const { data } = await axios.get("/abogados");
    return dispatch({
      type: GET_ABOGADOS,
      payload: data,
    });
  };
};



export const getByIdAbogado = (cedulaAbogado) => {
  const endpoint = `/abogados/cedulaabogado?cedulaAbogado=${cedulaAbogado}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_BY_ID_ABOGADO,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getByIdCliente = (cedulaCliente) => {
  const endpoint = `/clientes/cedulacliente?cedulaCliente=${cedulaCliente}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_BY_ID_CLIENTE,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const filterCliente = (filtro) => {
  const endpoint = `/clientes?${filtro}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: FILTER_CLIENTE,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const filterAbogado = (filtro) => {
  const endpoint = `/abogados?${filtro}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: FILTER_ABOGADO,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const orderAbogados = (value) => {
  const endpoint = `/abogados?field=apellido&order=${value}`;

  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: ORDER_ABOGADOS,
      payload: data,
    });
  };
};

export const orderClientes = (value) => {
  const endpoint = `/clientes?field=apellido&order=${value}`;

  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: ORDER_CLIENTES,
      payload: data,
    });
  };
};

export const deleteAbogado = (cedulaAbogado) => {
  const endpoint = `/abogados/delete`;

  return async (dispatch) => {
    const data = await axios.post(endpoint, { cedulaAbogado });
    console.log("url", endpoint);
    console.log("cedula", cedulaAbogado);
    return dispatch({
      type: DELETE_ABOGADO,
      payload: data,
    });
  };
};

export const deleteCliente = (cedulaCliente) => {
  const endpoint = `/clientes/elimina`;

  return async (dispatch) => {
    const data = await axios.post(endpoint, { cedulaCliente });
    console.log("url", endpoint);
    console.log("cedula", cedulaAbogado);
    return dispatch({
      type: DELETE_CLIENTE,
      payload: data,
    });
  };
};

export const getTiposDeCasos = () => {
  const endpoint = `/tiposdecasos`;
  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: GET_TIPOSDECASOS,
      payload: data,
    });
  };
};

export const getCasos = (page) => {
  const endpoint = `/casos?pagina=${page}&porPagina=6`;
  return async (dispatch) => {
    const { data } = await axios.get("/casos?pagina=1&porPagina=6");
    return dispatch({
      type: GET_CASOS,
      payload: data,
    });
  };
};

export const getCasosTodos = () => {
  const endpoint = `/casos`;
  return async (dispatch) => {
    const { data } = await axios.get('/casos');
    console.log('Data casos:',data)
    return dispatch({
      type: GET_CASOS_TODOS,
      payload: data.datosPagina,
    });
  };
};

export const filterCasos = (filtro) => {
  const endpoint = `/casos?${filtro}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: FILTER_CASOS,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const orderCasos = (value) => {
  const endpoint = `/casos?ordenarPor=${value}&porPagina=20`;

  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: ORDER_CASOS,
      payload: data,
    });
  };
};

export const getCasoById = (id) => {
  const endpoint = `/casos/${id}`;
  console.log("URL", endpoint);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      console.log('Data get caso by Id:', data)
      return dispatch({
        type: GET_CASO_BY_ID,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const deleteCaso = (id) => {
  const endpoint = `/casos/elimina`;

  return async (dispatch) => {
    const data = await axios.post(endpoint, { id });
    console.log("url", endpoint, "id", id);

    return dispatch({
      type: DELETE_CASO,
      payload: data,
    });
  };
};

export const postCita = (payload) => {
  const endpoint = `/citas`;

  return async (dispatch) => {
    const data = await axios.post(endpoint, payload);
    return dispatch({
      type: POST_CITA,
      payload: data,
    });
  };
};

export const getCitas = () => {
  const endpoint = `/citas?porPagina=20`;
  return async (dispatch) => {
    const { data } = await axios.get('/citas');
    return dispatch({
      type: GET_CITAS,
      payload: data,
    });
  };
};

export const postConsulta =  async(payload) => {
  const endpoint = `/consultas`;
   console.log('Payload post consulta:', payload)
  const { nombre, apellido, consulta, correo, telefono} = payload;
  
  // return async (dispatch) => {
  try{
    const { data } = await axios.post("/consultas", {
      nombre: `${nombre}`,
      apellido: `${apellido}`,
      consulta: `${consulta}`,
      correo: `${correo}`,
      telefono: `${telefono}`,
    });
    console.log('respuesta post consulta:',data)
    // return dispatch({
    //   type: POST_CONSULTA,
    //   payload: data,
    // });
   } catch (error) {
    window.alert("No fue posible registrar la consulta.");
  };
}; 

  export const getConsultas = (page) => {
    const endpoint = '/consultas';
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_CONSULTAS,
        payload: data,
      });
    };
};
  
export const recordarPassword = async (email) => {
  const endpoint = `/login/password/?correo=${email}`;
  console.log("PAYLOAD", email);
  const data = await axios.get(endpoint);
  return data;
};

  export const getPagos = () => {
    const endpoint = `/pagosClientes`;
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_PAGOS,
        payload: data,
      });
    };
};
  
export const getAbogadosTodos = () => {
  const endpoint = `/abogados?pagina=1&porPagina=50`;

  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: GET_ABOGADOS_TODOS,
      payload: data,
    });
  };
};

  export const modificarDatos = (payload) => {
    const endpoint = `/clientes/actualiza`;

    return async (dispatch) => {
      const data = await axios.post(endpoint, payload);
      console.log("URL", endpoint, "PAYLOAD", payload);
      return dispatch({
        type: MODIFICAR_DATOS,
        payload: data,
      });
    };
};
  

export const setAbogado = (source) => {
  console.log("Limpiar estado detail:", source);
  return {
    type: SET_ABOGADO,
    payload: source,
  };
};

export const setCliente = (source) => {
  console.log("Limpiar estado detail:", source);
  return {
    type: SET_CLIENTE,
    payload: source,
  };
};

export const getClientesTodos = () => {
  const endpoint = `/clientes?pagina=1&porPagina=50`;
  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: GET_CLIENTES_TODOS,
      payload: data,
    });
  };
};