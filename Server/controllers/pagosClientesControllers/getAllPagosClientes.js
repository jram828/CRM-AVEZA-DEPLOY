import { models } from "../../DB.js";
const { Caso, Cliente, Abogado, PagosCliente } = models;

const getAllPagosClientes = async (filters) => {
  const pagina = [];
  const newFilters = {};
  const newOrder = {};
  const order = [];
  const limit2 = filters.porPagina;
  // console.log("pagosClientes 10", filters);
  if (filters.field) {
    const ord = filters.order?.toUpperCase() || "ASC";
    order.push([filters.field, ord]);
  }

  delete filters.order;
  delete filters.field; //? este modulo esta en prueba

  Object.entries(filters).forEach(([field, value]) => {
    if (value) {
      if (field !== "pagina" && field !== "porPagina") {
        if (value === "ord") {
          newOrder[field.substring(0, field.length - 3)];
        } else {
          newFilters[field] = value;
        }
      } else {
        pagina[field];
      }
    }
  });
  const offset = (filters.pagina - 1) * parseInt(limit2);

  const getAllPagosClientesBd = await PagosCliente.findAll({
    where: {
      // activo: true,
      ...newFilters,
    },
    include: [
      {
        model: Caso,
        attributes: ["descripcion"],
        include: [
          {
            model: Abogado,
            attributes: ["apellido", "nombre"],
          },
          {
            model: Cliente,
            attributes: ["apellido", "nombre"],
          },
        ],
      },
    ],
    order,
    offset: offset || 0,

    limit: limit2 || 6,
  });

  return getAllPagosClientesBd;
};

export { getAllPagosClientes };
