
import {models} from '../../DB.js';

const { Cliente, Usuario, Abogado } = models

const getAllUsuario = async(offset,porPagina)=>{
        const consultaAbogado= {
            where: {
                rol: 'Abogado',
                activo: true,
            },
            include: [{
                model: Abogado,
                attributes: ['cedulaAbogado', apellido,nombre]
            }]
          };
   
         const allUsuario=await Usuario.findAll(consultaAbogado);
         
         const consultaCliente= {
            where: {
                rol: 'Cliente',
                activo: true,
            },
            include: [{
                model: Cliente,
                attributes: ['cedulaCliente', apellido,nombre]
            }]
          };

          allUsuario=await Usuario.findAll(consultaCliente);
         
         return (allUsuario)
   
 }

export {
    getAllUsuario
}
