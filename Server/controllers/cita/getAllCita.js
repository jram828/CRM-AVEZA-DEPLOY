import { Sequelize } from "sequelize";
import { models } from "../../DB.js";

const { Cita, Caso, Cliente, Abogado, TipoDeCaso } = models;

function paginarArreglo(arreglo, paginaActual, tamañoPagina) {
  const indiceInicial = parseInt(paginaActual) * parseInt(tamañoPagina);
  const indiceFinal = indiceInicial + parseInt(tamañoPagina);
  return arreglo.slice(indiceInicial, indiceFinal);
}

const getAllCita = async (filters) => {
  //console.log(filters.query);
  const todos = filters.query.todos || "true";
  //console.log(filters.query.todos.trim().toUpperCase())
  //if (todos==='false') console.log('todos viene en false')
  let getAllCitaBd = [];
  if (todos.toUpperCase() === "FALSE") {
    //console.log('Estoy en el true del if')
    getAllCitaBd = await Cita.findAll({
      where: {
        fechaCita: {
          [Sequelize.Op.gt]: Sequelize.literal("CURRENT_DATE"),
        },
      },
      attributes: ["idCita", "titulo", "descripcion", "fechaCita", "horaCita"],
      include: [
        {
          model: Caso,
          attributes: ["idCaso", "fecha", "descripcion"],
          include: [
            {
              model: Cliente,
              attributes: ["apellido", "nombre"],
            },
            {
              model: Abogado,
              attributes: ["apellido", "nombre"],
            },
            {
              model: TipoDeCaso,
              attributes: ["descripcion"],
            },
          ],
        },
      ],
    });
  } else {
    getAllCitaBd = await Cita.findAll({
      attributes: ["idCita", "titulo", "descripcion", "fechaCita", "horaCita"],
      include: {
        model: Caso,
        model: Caso,
        as: "Caso",
        foreignKey: "idCaso", // Especifica el campo de clave foránea en Cita
        targetKey: "idCaso",
        attributes: ["idCaso", "fecha", "descripcion"],
        include: [
          {
            model: Cliente,
            attributes: ["apellido", "nombre"],
          },
          {
            model: Abogado,
            attributes: ["apellido", "nombre"],
          },
          {
            model: TipoDeCaso,
            attributes: ["descripcion"],
          },
        ],
      },
    });
  }

  //Obtiene los campos a devolver
  let datos = getAllCitaBd.map((elemento) => ({
    idCita: elemento.idCita,
    titulo: elemento.titulo,
    descripcion: elemento.descripcion,
    fechaCita: elemento.fechaCita,
    horaCita: elemento.horaCita,
    idCaso: elemento.Caso.idCaso,
    fechaCaso: elemento.Caso.fecha,
    descripcionCaso: elemento.Caso.descripcion,
    nombreCliente: elemento.Caso.Cliente.nombre,
    apellidoCliente: elemento.Caso.Cliente.apellido,
    nombreabogado: elemento.Caso.Abogado.nombre,
    apellidoAbogado: elemento.Caso.Abogado.apellido,
    tipoCaso: elemento.Caso.TipoDeCaso.descripcion,
  }));

  //console.log(datos)

  //Filtra de acuerdo a los parametros recibidos
  Object.entries(filters.query).forEach(([field, value]) => {
    if (
      field !== "ordenarPor" &&
      field !== "pagina" &&
      field !== "porPagina" &&
      field !== "todos"
    )
      datos = datos.filter((elemento) => elemento[field] === value);
  });

  //Ordena de acuerdo al parametro de ordenacion recibido
  let arregloOrdenado = [];

  switch (filters.query.ordenarPor) {
    case "apellidoCliente": {
      arregloOrdenado = datos.slice().sort((a, b) => {
        if (a.apellidoCliente < b.apellidoCliente) return -1;
        if (a.apellidoCliente > b.apellidoCliente) return 1;

        // Si apellido es igual, ordena por nombre
        if (a.nombreCliente < b.nombreCliente) return -1;
        if (a.nombreCliente > b.nombreCliente) return 1;

        // Si ambos son iguales, no hay cambios en el orden
        return 0;
      });
      break;
    }
    case "apellidoAbogado": {
      arregloOrdenado = datos.slice().sort((a, b) => {
        if (a.apellidoAbogado < b.apellidoAbogado) return -1;
        if (a.apellidoAbogado > b.apellidoAbogado) return 1;

        // Si apellido es igual, ordena por nombre
        if (a.nombreAbogado < b.nombreAbogado) return -1;
        if (a.nombreAbogado > b.nombreAbogado) return 1;

        // Si ambos son iguales, no hay cambios en el orden
        return 0;
      });
      break;
    }
    case "tipoCaso": {
      arregloOrdenado = datos.slice().sort((a, b) => {
        if (a.tipoCaso < b.tipoCaso) return -1;
        if (a.tipoCaso > b.tipoCaso) return 1;

        // Si apellido es igual, ordena por nombre
        if (a.tipoCaso < b.tipoCaso) return -1;
        if (a.tipoCaso > b.tipoCaso) return 1;

        // Si ambos son iguales, no hay cambios en el orden
        return 0;
      });
      break;
    }
    default:
      arregloOrdenado = datos.slice().sort((a, b) => a.fechaCita - b.fechaCita);
  }

  //Devuelve desde la pagina solicitada y la cantidad de elementos solicitados

  let elementos = filters.query.porPagina || 3; // los elementos por pag por default
  let offset = filters.query.pagina || 1; // manda pag 1 por default
  //if (filters.query.porPagina) elementos = filters.query.porPagina;
  //if (filters.query.pagina) offset = (filters.query.pagina - 1) * parseInt(elementos);
  //console.log(arregloOrdenado)
  //console.log(datos)
  console.log("offset....", offset, "  elementos........", elementos);
  const totalPaginas = Math.ceil(arregloOrdenado.length / elementos);
  const paginaActual = paginarArreglo(arregloOrdenado, offset - 1, elementos);

  return { datosPagina: paginaActual, totalPaginas: totalPaginas };
};

export { getAllCita };
