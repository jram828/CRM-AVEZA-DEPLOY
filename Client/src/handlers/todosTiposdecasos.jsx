import axios from 'axios';


  export async function getTiposCasos() {
    try {
      const response = await axios.get( 'https://legaltech-develop.onrender.com/tiposdecasos' /*'https://legaltech-6u3y.onrender.com/abogados'*/);

      return response.data
     
    } catch (error) {
      console.error('Error al obtener abogados:', error.message);
      throw error;
    }
  }
