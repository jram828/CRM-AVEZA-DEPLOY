/**
 * Se coloca el controlador como un objeto y luego se exporta como
 * se requiere primero el modelo empleado
 */

const Cliente = require("../../../models/Cliente");
const clienteCtrl = {};

/**
 * DEFINO LOS METODOS  */

//Obtener todos los clientes
clienteCtrl.getClientes = async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

// Crear clientes

clienteCtrl.createClientes = async (req, res) => {
  console.log('Request',req.body)
  const cliente = new Cliente(req.body);
  await cliente.save();
  res.json({
    status: "Cliente guardado",
  });
};

//Conseguir un Unico cliente
clienteCtrl.getUnicoCliente = async (req, res) => {
  const clienteUnico = await Cliente.findById(req.params.id);
  res.json(clienteUnico);
};

//Actualizar empleado
clienteCtrl.editarCliente = async (req, res) => {
  const { id } = req.params;
  const clienteEdit = {
    cedula: req.body.cedula,
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    direccion: req.body.direccion,
    codigo_ciudad:req.body.codigo_ciudad,
    telefono: req.body.telefono,
    correo: req.body.correo,
    tipo_usuario:req.body.tipo_usuario,
    contrasena:req.body.contrasena,
    tipo_de_caso:req.body.tipo_de_caso,
    valor_pretensiones:req.body.valor_pretensiones,
    tiene_contrato:req.body.tiene_contrato,
    honorarios:req.body.honorarios,
    forma_de_pago:req.body.forma_de_pago
  };
  await Cliente.findByIdAndUpdate(id, { $set: clienteEdit }, { new: true });
  res.json({ status: "Cliente Actualizado" });
};

// Eliminar cliente
clienteCtrl.eliminarCliente = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json({ status: "Cliente Eliminado" });
};

//exporto el m�dulo
module.exports = clienteCtrl;
