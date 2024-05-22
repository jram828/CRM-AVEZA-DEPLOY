import axios from 'axios';


  export async function getClientes() {
    try {
      const response = await axios.get('https://legaltech-develop.onrender.com/clientes?pagina=1&porPagina=50');
      return response.data
     
    } catch (error) {
      console.error('Error al obtener clientes:', error.message);
      throw error;
    }
  }