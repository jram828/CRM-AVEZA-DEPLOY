const { Favorite } = require("../DB_connection");

const postFav = async(req, res) => {
 console.log('Body:',req.body)
  const { id,name, gender,species, image, status } = req.body;
  if (!name || !status || !species || !gender) {
    res.status(401).send("Faltan Datos");
  } else {

    try {
      console.log("datos: ", { id, name, gender, species, image, status });

      await Favorite.findOrCreate({
        where: { id, name, gender, species, image, status },
      });
      const favorites = await Favorite.findAll();
      console.log(favorites)
  
      res.status(200).json(favorites);
    } catch (error) {
      
      res.status(500).send(error.message);
    }
  }
};

module.exports = postFav;