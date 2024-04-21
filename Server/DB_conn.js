require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;
console.log("Datos conexion:", { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME });
const ClienteModel = require("./models/Cliente");
const UsuarioModel = require("./models/Usuario");
const PaisModel = require("./models/Pais");
const DepartamentoModel = require("./models/Departamento");
const CiudadModel = require("./models/Ciudad");
const CarteraModel = require("./models/Cartera");
const TipoUsuarioModel = require("./models/TipoUsuario");
const TipoDeCasoModel = require("./models/TipoDeCaso");
const CitaModel = require("./models/Cita");
const DocumentosLegalesModel = require("./models/DocumentosLegales");
const FacturaModel = require("./models/Factura");
const CasoModel = require("./models/Caso");
// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.
console.log("Datos conexion Postgre");
// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   { logging: false, native: false }
// );

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});
// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UsuarioModel(sequelize);
ClienteModel(sequelize);
PaisModel(sequelize);
CiudadModel(sequelize);
DepartamentoModel(sequelize);
CarteraModel(sequelize);
CasoModel(sequelize);
CitaModel(sequelize);
DocumentosLegalesModel(sequelize);
FacturaModel(sequelize);
TipoDeCasoModel(sequelize);
TipoUsuarioModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { Usuario, Cliente, Pais, Departamento, Ciudad, Caso, Cita, DocumentosLegales, Factura, TipoDeCaso, TipoUsuario, Cartera } = sequelize.models;

Usuario.belongsToMany(Cliente, { through: "usuario_cliente" });
Cliente.belongsToMany(Usuario, { through: "usuario_cliente" });
Usuario.belongsToMany(Ciudad, { through: "usuario_ciudad" });
Ciudad.belongsToMany(Usuario, { through: "usuario_ciudad" });
Cliente.belongsToMany(Pais, { through: "cliente_pais" });
Pais.belongsToMany(Cliente, { through: "cliente_pais" });
Cliente.belongsToMany(Departamento, { through: "cliente_departamento" });
Departamento.belongsToMany(Cliente, { through: "cliente_departamento" });
Cliente.belongsToMany(Ciudad, { through: "cliente_ciudad" });
Ciudad.belongsToMany(Cliente, { through: "cliente_ciudad" });
Cliente.belongsToMany(Caso, { through: "cliente_caso" });
Caso.belongsToMany(Cliente, { through: "cliente_caso" });
Cliente.belongsToMany(Cita, { through: "cliente_cita" });
Cita.belongsToMany(Cliente, { through: "cliente_cita" });
Cliente.belongsToMany(DocumentosLegales, { through: "cliente_documentos" });
DocumentosLegales.belongsToMany(Cliente, { through: "cliente_documentos" });
Cliente.belongsToMany(Factura, { through: "cliente_factura" });
Factura.belongsToMany(Cliente, { through: "cliente_factura" });
Cliente.belongsToMany(TipoDeCaso, { through: "cliente_tipocaso" });
TipoDeCaso.belongsToMany(Cliente, { through: "cliente_tipocaso" });
Cliente.belongsToMany(TipoUsuario, { through: "cliente_tipousuario" });
TipoUsuario.belongsToMany(Cliente, { through: "cliente_tipousuario" });
Pais.belongsToMany(Departamento, { through: "pais_departamento" });
Departamento.belongsToMany(Pais, { through: "pais_departamento" });
Departamento.belongsToMany(Ciudad, { through: "ciudad_departamento" });
Ciudad.belongsToMany(Departamento, { through: "ciudad_departamento" });
Caso.belongsToMany(TipoDeCaso, { through: "caso_tipocaso" });
TipoDeCaso.belongsToMany(Caso, { through: "caso_tipocaso" });

module.exports = {
  Usuario,
  Cliente,
  Pais,
  Departamento,
  Ciudad,
  Caso,
  Cita,
  DocumentosLegales,
  Factura,
  TipoDeCaso,
  TipoUsuario,
  Cartera,
  conn: sequelize,
};


