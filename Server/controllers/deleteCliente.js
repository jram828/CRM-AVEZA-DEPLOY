const { Cliente } = require("../DB_conn");

const deleteCliente = async (req, res) => {
  const { id } = req.params;

  try {
    await Cliente.destroy({
      where: {
        id: id,
      },
    });
    const clientes = await Cliente.findAll();

    return res.status(200).json(clientes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = deleteCliente;
