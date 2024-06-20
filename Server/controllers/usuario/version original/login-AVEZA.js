const { Usuario } = require("../../DB_conn");
const { accountSid, authToken, number } = process.env;
const twilio = require("twilio");

const login = async (req, res) => {
  const { cedula, password } = req.query;
  console.log("Email Query:", cedula);
  console.log("Password Query:", password);

  // console.log("Datos Twilio:", { accountSid, authToken, number });

  // const client = new twilio(accountSid, authToken,number);
  // client.messages.create({
  //   body: "Ha ingresado a CRM AVEZA",
  //   from: number,
  //   to: "+573204746006",
  // });

  if (!cedula || !password || password.length === 0 || cedula.length === 0) {
    res.status(400).send("Faltan datos");
    console.log("Faltan datos");
  } else {
    try {
      console.log("Email:", cedula);
      const foundUser = await Usuario.findOne({
        where: { cedula: cedula },
      });
      // console.log("Usuario find:", foundUser);

      try {
        if (foundUser.dataValues.password === password) {
          return res.status(200).json({ access: true });
        } else {
          return res.status(403).send("Usuario o Contraseña incorrectos");
        }
      } catch (error) {
        res.status(500).send(error.message);
      }
    } catch (error) {
      res.status(404).send("Usuario no encontrado");
    }
  }
};

module.exports = login;
