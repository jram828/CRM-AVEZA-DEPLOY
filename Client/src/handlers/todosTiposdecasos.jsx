import axios from 'axios';


  export async function getTiposCasos() {
    try {
      const response = await axios.get('/tiposdecasos')
      console.log('Tipos de casos:',response.data)
      return response.data
     
    } catch (error) {
      console.error('Error al obtener abogados:', error.message);
      throw error;
    }
  }
