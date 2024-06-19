 import {models} from '../DB.js'
 const { Consulta } = models;
const deleteConsulta = async (id)=>{
   
    await Consulta.update(
        {
            activo: false
        },{
            where:{
                id : id
            }
        }
    )
    return 'Delete complete'
}

export {
    deleteConsulta
}