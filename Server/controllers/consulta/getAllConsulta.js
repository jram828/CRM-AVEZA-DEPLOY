import { models } from "../DB.js";
const { Consulta } = models;

const getAllConsulta = async (filters) => {
  const pagina = [];
  const newFilters = {};
  const newOrder = {};
  const order = [];
  const limit2 = filters.porPagina;

  if (filters.field) {
    const ord = filters.order?.toUpperCase() || "ASC";
    order.push([filters.field, ord]);
  }

  delete filters.order;
  delete filters.field;

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

  const getAllConsultaBd = await Consulta.findAll({
    where: {
      activo: true,
      ...newFilters,
    },
    order,
    offset: offset || 0,

    limit: limit2 || 6,
  });

  return getAllConsultaBd;
};

export { getAllConsulta };
