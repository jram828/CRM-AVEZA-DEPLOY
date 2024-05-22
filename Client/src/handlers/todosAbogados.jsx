import axios from 'axios';


  export async function getAbogados() {
    try {
      const response = await axios.get('https://legaltech-develop.onrender.com/abogados?pagina=1&porPagina=50');

      return response.data
     
    } catch (error) {
      console.error('Error al obtener abogados:', error.message);
      throw error;
    }
  }


