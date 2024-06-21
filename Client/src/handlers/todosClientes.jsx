import axios from 'axios';


  export async function getClientes() {
    try {
      const response = await axios.get('/clientes/conocimientolitigios');
      return response.data
     
    } catch (error) {
      console.error('Error al obtener clientes:', error.message);
      throw error;
    }
  }