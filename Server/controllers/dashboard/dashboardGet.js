import { models } from "../../DB.js";
const { Caso} = models

const getCasoxMes = async () => {

    try {
        const result = await Caso.findAll({
            attributes: [
              [sequelize.fn('EXTRACT', sequelize.literal('YEAR FROM "fecha"')), 'year'],
              [sequelize.fn('EXTRACT', sequelize.literal('MONTH FROM "fecha"')), 'month'],
              [sequelize.fn('COUNT', sequelize.col('id')), 'order_count']
            ],
            group: [
              sequelize.fn('EXTRACT', sequelize.literal('YEAR FROM "fecha"')),
              sequelize.fn('EXTRACT', sequelize.literal('MONTH FROM "fecha"'))
            ],
            order: [
              [sequelize.fn('EXTRACT', sequelize.literal('YEAR FROM "fecha"')), 'ASC'],
              [sequelize.fn('EXTRACT', sequelize.literal('MONTH FROM "fecha"')), 'ASC']
            ]
            
          });
          return result

    } catch (error){
        return error

    }

}

export { getCasoxMes}