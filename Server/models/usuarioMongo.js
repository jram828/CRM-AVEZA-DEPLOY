const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClienteSchema = new Schema({
  cedula: { type: Number, require: true },
  nombres: { type: String, require: true },
  apellidos: { type: String, require: true },
  direccion: { type: String, require: true },
  codigo_ciudad: { type: Number, require: true },
  telefono: { type: Number, require: true },
  correo: { type: String, require: true },
  tipo_usuario: { type: String, require: true },
  contrasena: { type: String, require: true },
  tipo_de_caso: { type: String, require: true },
  valor_pretensiones: { type: String, require: true },
  tiene_contrato: { type: String, require: true },
  honorarios: { type: String, require: true },
  forma_de_pago: { type: String, require: true }
});

module.exports = mongoose.model("Cliente", ClienteSchema);
