import { Sequelize } from "sequelize";
import { models } from "../../DB.js";

const Abogado = models.Abogado;

const getAllAbogados = async (filters) => {
  //filters = acá me traigo req.query
  const pagina = [];
  const newFilters = {};
  const newOrder = {};
  const order = [];
  const limit2 = filters.porPagina;

  if (filters.field) {
    //  si no te envian filters.order que sea por defecto asc
    // se ordena
    const ord = filters.order?.toUpperCase() || "ASC";
    order.push([filters.field, ord]);
  }

  // const ord = filters.order?.toUpperCase() || "ASC";               //TODO así se puede hacer sin necesidad
  // const fieldOrder = filters.field?.toLowerCase() || "apellido";   //TODO de utilizar un if() porque siempre tendriamos los dos valores
  // order.push([fieldOrder, ord]);

  delete filters.order;
  delete filters.field;

  // console.log("linea 26 getAllAB", Object.entries(filters));
  Object.entries(filters).forEach(([field, value]) => {
    // destructuro filters

    if (value) {
      // verifico no sea undefind
      if (field !== "pagina" && field !== "porPagina") {
        if (value === "ord") {
          //verifico que el comando requiera ser ordnado
          newOrder[field.substring(0, field.length - 3)]; //traeme desde el cero hasta los tres anteriorres
        } else {
          newFilters[field] = value; // acá estoy guardando de forma dinamica los valores de cada propiedad
        }
      } else {
        pagina[field];
      }

      // se pueden poner mas if para formatear los valores entramtes.
      //por ejemplo: si es un correo usar value.toLowerCase()
    }
  });
  const offset = (filters.pagina - 1) * parseInt(limit2);

  const getAllAbogadosBd = await Abogado.findAll({
    where: {
      activo: true,
      ...newFilters, // agrego los campos cuyos valores existan
      // nombre: {
      //   [Sequelize.Op.like]: `${newFilters.nombre}%`,
      // },
      // apellido: {
      //   [Sequelize.Op.like]: `${newFilters.apellido}%`,
      // },
    },
    order,
    offset: offset || 0,

    limit: limit2 || 5,
  });

  return getAllAbogadosBd;
};

export { getAllAbogados };
