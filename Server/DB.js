import { config } from "dotenv";
import { Sequelize } from "sequelize";

import abogadoModel from "./models/Abogado.js";
import casoModel from "./models/Caso.js";
import citaModel from "./models/Cita.js";
import clienteModel from "./models/Cliente.js";
import consultaModel from "./models/Consulta.js";
import contratoModel from "./models/Contrato.js";
import cotizacionModel from "./models/Cotizacion.js";
import documentosLegalesModel from "./models/DocumentosLegales.js";
import documentoLegalTemplateModel from "./models/DocumentoTemplate.js";
import tipoCasoModel from "./models/TipoDeCaso.js";
import tipoNotificacionModel from "./models/TipoNotificacion.js";
import usuarioModel from "./models/Usuario.js";
import paisModel from "./models/Pais.js";
import departamentoModel from "./models/Departamento.js";
import ciudadModel from "./models/Ciudad.js";
import tipoUsuarioModel from "./models/TipoUsuario.js";
import facturaModel from "./models/Factura.js";
// import reviewModel from "./models/Review.js";
import pagoClienteModel from "./models/pagoCliente.js";
// import carteraModel from "./models/Cartera.js";
// import documentoLegalModelTipoNoti from "./models/DocumentoLegalTipoNotificacion.js";

config(); // Cargar variables de entorno desde el archivo .env

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;
console.log("Datos conexion:", { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME });



//! Configuración de Sequelize para entorno local

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

//! Configuración de Sequelize para despliegue en Render

// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false,
//   native: false,
//   dialectOptions: {
//     ssl: {
//       require: true,
//     },
//   },
// });

const Caso = casoModel(sequelize);
const Cotizacion = cotizacionModel(sequelize);
const Consulta = consultaModel(sequelize);
const Abogado = abogadoModel(sequelize);
const Cliente = clienteModel(sequelize);
const Contrato = contratoModel(sequelize);
const TipoDeCaso = tipoCasoModel(sequelize);
const DocumentoTemplate = documentoLegalTemplateModel(sequelize);
const DocumentoLegal = documentosLegalesModel(sequelize);
const TipoNotificacion = tipoNotificacionModel(sequelize);
const Usuario = usuarioModel(sequelize);
const Cita = citaModel(sequelize);
const Pais= paisModel(sequelize);
const Ciudad=ciudadModel(sequelize);
const Departamento=departamentoModel(sequelize);
const Factura=facturaModel(sequelize);
const TipoUsuario=tipoUsuarioModel(sequelize);
// const DocumentoLegalTipoNotificacion = documentoLegalModelTipoNoti(sequelize);
// const Cartera=carteraModel(sequelize);
const PagosCliente = pagoClienteModel(sequelize);
// const Review = reviewModel(sequelize);


TipoDeCaso.belongsToMany(DocumentoTemplate, {
  through: "TipoDeCasoDocumentoTemplate",
});
DocumentoTemplate.belongsToMany(TipoDeCaso, {
  through: "TipoDeCasoDocumentoTemplate",
});
DocumentoLegal.belongsToMany(TipoNotificacion, {
  through: "DocumentoLegalTipoNotificacion",
});
TipoNotificacion.belongsToMany(DocumentoLegal, {
  through: "DocumentoLegalTipoNotificacion",
});

DocumentoLegal.belongsTo(DocumentoTemplate);
DocumentoLegal.belongsTo(Caso);

Cliente.hasMany(Caso);
Caso.belongsTo(Cliente);

Abogado.hasMany(Caso);
Caso.belongsTo(Abogado);

TipoDeCaso.hasMany(Caso);
Caso.belongsTo(TipoDeCaso);

Caso.hasOne(Cotizacion);

Caso.hasMany(PagosCliente, { foreignKey: "idCaso" });
PagosCliente.belongsTo(Caso, { foreignKey: "idCaso" });

Caso.hasMany(Cita, { foreignKey: "idCaso" });
Cita.belongsTo(Caso, { foreignKey: "idCaso" });

Cotizacion.belongsTo(Caso);

Cotizacion.hasOne(Contrato);
Contrato.belongsTo(Cotizacion);

Consulta.belongsTo(Cliente);

Cliente.belongsTo(Usuario);
Abogado.belongsTo(Usuario);

Pais.belongsToMany(Departamento, { through: "pais_departamento" });
Departamento.belongsToMany(Pais, { through: "pais_departamento" });

Departamento.belongsToMany(Ciudad, { through: "ciudad_departamento" });
Ciudad.belongsToMany(Departamento, { through: "ciudad_departamento" });

Cliente.hasMany(Factura);
Factura.belongsTo(Cliente);

// Ciudad.hasMany(Cliente);
// Cliente.belongsTo(Ciudad);

Cliente.belongsToMany(Ciudad, { through: "cliente_ciudad" });
Ciudad.belongsToMany(Cliente, { through: "cliente_ciudad" });

Abogado.belongsToMany(Ciudad, { through: "abogado_ciudad" });
Ciudad.belongsToMany(Abogado, { through: "abogado_ciudad" });

Usuario.belongsToMany(Ciudad, { through: "usuario_ciudad" });
Ciudad.belongsToMany(Usuario, { through: "usuario_ciudad" });

// Departamento.hasMany(Cliente);
// Cliente.belongsTo(Departamento);

// Pais.hasMany(Cliente);
// Cliente.belongsTo(Pais);

// Ciudad.hasMany(Abogado);
// Abogado.belongsTo(Ciudad);

// Departamento.hasMany(Abogado);
// Abogado.belongsTo(Departamento);

// Pais.hasMany(Abogado);
// Abogado.belongsTo(Pais);

// Ciudad.hasMany(Usuario);
// Usuario.belongsTo(Ciudad);

// Departamento.hasMany(Usuario);
// Usuario.belongsTo(Departamento);

// Pais.hasMany(Usuario);
// Usuario.belongsTo(Pais);

TipoUsuario.hasMany(Cliente);
Cliente.belongsTo(TipoUsuario);

const models = {
  ...sequelize.models,
  conn: sequelize,
};

export { models };


// Cliente.belongsToMany(DocumentosLegales, { through: "cliente_documentos" });
// DocumentosLegales.belongsToMany(Cliente, { through: "cliente_documentos" });