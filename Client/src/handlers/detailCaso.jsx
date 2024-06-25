import axios from "axios";

  export async function getCasoById (id) {
  const endpoint = `/casos/${id}`;
  console.log("URL", endpoint);

    try {
      const { data } = await axios.get(endpoint);
      console.log("Data get caso by Id:", data);
      return data;
    } catch (error) {
            console.error("Error al obtener cliente:", error.message);
            throw error;
    }
  };
