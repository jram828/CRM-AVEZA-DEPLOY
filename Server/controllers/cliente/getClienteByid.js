import {models} from '../../DB.js'

 const { Cliente, Ciudad, Departamento, Pais} = models;
const getClienteById = async (cedulaCliente)=>{

    const consulta = {
      where: {
        cedulaCliente: parseInt(cedulaCliente),
        activo: true,
      },
      include: [
        {
          model: Ciudad,
          attributes: ["nombre_ciudad"],
          through: { attributes: [] },
          include: [
            {
              model: Departamento,
              attributes: ["nombre_departamento"],
              through: { attributes: [] },
              include: [
                {
                  model: Pais,
                  attributes: ["nombre_pais"],
                  through: { attributes: [] },
                },
              ],
            },
          ],
        },
      ],
    };
    
    const cliente = await Cliente.findOne(consulta);
    if(!cliente) throw Error("Cliente no Registrado o no existe")
    return cliente;
}

export {
    getClienteById,
}