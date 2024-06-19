const { Usuario } = require("../../DB_conn");

const postUsuario = async (req, res) => {
  const {
    email,
    password,
    nombres,
    apellidos,
    cedula,
    celular,
    direccion,
    nombre_ciudad,
    tipo_usuario,
  } = req.body;
  
  console.log("Body:", {
    email,
    password,
    nombres,
    apellidos,
    cedula,
    celular,
    direccion,
    nombre_ciudad,
    tipo_usuario,
  });

  if (
    !email ||
    !password ||
    !cedula ||
    password.length === 0 ||
    email.length === 0 ||
    cedula.length === 0
  ) {
    res.status(400).send("Faltan datos");
  } else {
    try {
      const newUser = await Usuario.create({
          email: email,
          password: password,
          nombres: nombres,
          apellidos: apellidos,
          cedula: cedula,
          celular: celular,
          direccion: direccion,
      });
       newUser.addCiudad(nombre_ciudad);
      // newUser.addTipoDeCaso(tipo_de_caso);
      // newUser.addTipoDeUsuario(tipo_usuario);
      return res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
};

module.exports = postUsuario;
