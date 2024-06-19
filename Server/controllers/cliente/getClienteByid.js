import {models} from '../../DB.js'

 const { Cliente} = models;
const getClienteById = async (cedulaCliente)=>{

    const consulta= {
        where: {
            cedulaCliente:parseInt(cedulaCliente),
            activo:true,
        }
    }
    
    const cliente = await Cliente.findOne(consulta);
    if(!cliente) throw Error("Cliente no Registrado o no existe")
    return cliente;
}

export {
    getClienteById,
}