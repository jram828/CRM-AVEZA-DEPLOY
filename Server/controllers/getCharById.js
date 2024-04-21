const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getCharById = async (req, res) => {
  
  const ID = req.params.id;
  try {
      const response = await axios.get(`${URL}${ID}`)
    if (response.data.id) {
      const { id, name, gender, species, origin, image, status } = response.data;

      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      res.status(200).json(character);
    } else {
      res.status(400).json({ message: 'Not found' });
      console.log(res.status)
    }
  } catch (error) {
      // console.log('Aqui se rompe');
    res.status(500).json({message: error.message});
  }
};


module.exports = getCharById;
//VERSION CON WEB SERVER


// const axios = require('axios');

// const URL= 'https://rickandmortyapi.com/api/character/'

// const getCharById = async (res, ID) => {
//   try {
//     const response = await axios(`${URL}${ID}`);

//     const { id, name, gender, species, origin, image, status } = response.data;

//     const character = {
//       id,
//       name,
//       gender,
//       species,
//       origin,
//       image,
//       status,
//     };

//     res.writeHeader(200, { "Content-type": "application/json" });
//     return res.end(JSON.stringify(character))
//   } catch (error){
//     res.writeHeader(500, { "Content-type": "text/plain" });
//     return res.end(error.message)
//   }
//   }
//   module.exports = getCharById;
