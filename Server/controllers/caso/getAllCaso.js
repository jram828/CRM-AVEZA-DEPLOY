import { Sequelize } from "sequelize";
import { models } from "../../DB.js";

const { Caso, Cliente, Abogado, TipoDeCaso } = models;
function paginarArreglo(arreglo, paginaActual, tamañoPagina) {
  const indiceInicial = parseInt(paginaActual) * parseInt(tamañoPagina);
  const indiceFinal = indiceInicial + parseInt(tamañoPagina);
  return arreglo.slice(indiceInicial, indiceFinal);
}

//Si la variable todos viene en true, muestra todos los casos aun los que han sido finalizados
const getAllCaso = async (filters) => {
  const todos = filters.query.todos || "true";
  let getAllCasoBd = [];
  console.log("Esto viene en el query en todos ... ", filters.query.todos);
  // if (!filters.query.todos || filters.query.todos==='false' ) {

  //Consulta a la base de datos
  if (todos.toUpperCase() === "FALSE") {
    getAllCasoBd = await Caso.findAll({
      where: {
        [Sequelize.Op.or]: [
          { fechaFin: null },
          {
            fechaFin: { [Sequelize.Op.gt]: Sequelize.literal("CURRENT_DATE") },
          },
        ],
      },
      attributes: ["idCaso", "fecha", "descripcion"],
      include: [
        {
          model: Cliente,
          attributes: [
            "apellido",
            "nombre",
            "calle",
            "numero",
            "ciudad",
            "telefono",
          ],
        },
        {
          model: Abogado,
          attributes: [
            "apellido",
            "nombre",
            "calle",
            "numero",
            "ciudad",
            "telefono",
          ],
        },
        {
          model: TipoDeCaso,
          attributes: ["descripcion"],
        },
      ],
    });
  } else {
    getAllCasoBd = await Caso.findAll({
      attributes: ["idCaso", "fecha", "descripcion"],
      include: [
        {
          model: Cliente,
          attributes: [
            "apellido",
            "nombre",
            "calle",
            "numero",
            "ciudad",
            "telefono",
          ],
        },
        {
          model: Abogado,
          attributes: [
            "apellido",
            "nombre",
            "calle",
            "numero",
            "ciudad",
            "telefono",
          ],
        },
        {
          model: TipoDeCaso,
          attributes: ["descripcion"],
        },
      ],
    });
  }

  //console.log(getAllCasoBd.descripcion)
  //Obtiene los campos a devolver
  let datos = getAllCasoBd.map((elemento) => ({
    id: elemento.idCaso,
    descripcion: elemento.descripcion,
    fecha: elemento.fecha,
    nombreCliente: elemento.Cliente.nombre,
    apellidoCliente: elemento.Cliente.apellido,
    calleCliente: elemento.Cliente.calle,
    numeroCliente: elemento.Cliente.numero,
    ciudadCliente: elemento.Cliente.ciudad,
    telefonoCliente: elemento.Cliente.telefono,
    nombreabogado: elemento.Abogado.nombre,
    apellidoAbogado: elemento.Abogado.apellido,
    calleAbogado: elemento.Abogado.calle,
    numeroAbogado: elemento.Abogado.numero,
    ciudadAbogado: elemento.Abogado.ciudad,
    telefonoAbogado: elemento.Abogado.telefono,
    tipoCaso: elemento.TipoDeCaso.descripcion,
  }));

  //Filtra de acuerdo a los parametros recibidos
  Object.entries(filters.query).forEach(([field, value]) => {
    console.log("campo.... ", field, " valor..... ", value);
    if (
      field !== "ordenarPor" &&
      field !== "pagina" &&
      field !== "porPagina" &&
      field !== "todos"
    )
      datos = datos.filter(
        (elemento) => elemento[field].toUpperCase() === value.toUpperCase(),
      );
  });

  //Ordena de acuerdo al parametro de ordenacion recibido

  let arregloOrdenado = [];

  switch (filters.query.ordenarPor) {
    case "apellidoCliente": {
      arregloOrdenado = datos.slice().sort((a, b) => {
        let apellidoA=a.apellidoCliente.toUpperCase()
        let apellidoB=a.apellidoCliente.toUpperCase()

        if (apellidoA < apellidoB)
          return -1;
        if (apellidoA > apellidoB)
          return 1;

        // Si apellido es igual, ordena por nombre
        // if (a.nombreCliente.toUpperCase() < b.nombreCliente.toUpperCase())
        //   return -1;
        // if (a.nombreCliente.toUpperCase() > b.nombreCliente.toUpperCase())
        //   return 1;

        // Si ambos son iguales, no hay cambios en el orden
        return 0;
      });
      break;
    }
    case "apellidoAbogado": {
      
      arregloOrdenado = datos.slice().sort((a, b) => {
        let apellidoA=a.apellidoAbogado.toUpperCase()
        let apellidoB=a.apellidoAbogado.toUpperCase()
        if (a.apellidoAbogado.toUpperCase() < b.apellidoAbogado.toUpperCase())
          return -1;
        if (a.apellidoAbogado.toUpperCase() > b.apellidoAbogado.toUpperCase())
          return 1;

        // Si apellido es igual, ordena por nombre
        if (apellidoA < apellidoB)
          return -1;
        if (apellidoA > apellidoB)
          return 1;

        // Si apellido es igual, ordena por nombre
        // if (a.nombreCliente.toUpperCase() < b.nombreCliente.toUpperCase())
        //   return -1;
        // if (a.nombreCliente.toUpperCase() > b.nombreCliente.toUpperCase())
        //   return 1;

        // Si ambos son iguales, no hay cambios en el orden
        return 0;
      });
      break;
    }
    default:
      arregloOrdenado = datos.slice().sort((a, b) => a.fecha - b.fecha);
  }

  //Devuelve desde la pagina solicitada y la cantidad de elementos solicitados
  console.log("Arreglo ordenado");
  // console.log(arregloOrdenado);
  let elementos = filters.query.porPagina || 3;
  let offset = filters.query.pagina || 1;
  //if (filters.query.porPagina) elementos = filters.query.porPagina;
  //if (filters.query.pagina) offset = filters.query.pagina
  //console.log("offset....", offset, "  elementos........", elementos);
  const totalPaginas = Math.ceil(arregloOrdenado.length / elementos);
  const paginaActual = paginarArreglo(arregloOrdenado, offset - 1, elementos);
  console.log(paginaActual);
  return { datosPagina: paginaActual, totalPaginas: totalPaginas };
};

export { getAllCaso };
