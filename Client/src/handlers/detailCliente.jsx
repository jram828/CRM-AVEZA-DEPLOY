import axios from 'axios';


  export async function getClienteById(id) {
    try {
      const response = await axios.get(`/clientes/${id}`);
      return response.data
     
    } catch (error) {
      console.error('Error al obtener cliente:', error.message);
      throw error;
    }
  }