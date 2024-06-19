import { sendEmailCita } from '../../utils/emailNotifier.js'
import  { models } from "../../DB.js";


const { Cita, Cliente, Abogado } = models
const recordatorioCita=async () => {
//Obtener los registros cuya fecha de cita es un dia posterior a la fecha actual
    const citasPosteriores = await Cita.findAll({
        where: {
          fechaCita: {
            [Op.gt]: new Date() // Compara con la fecha y hora actual
          }
        }
      });
//Citas posteriores es un arreglo, recorrerlo y con el idCaso hacer lo que esta a continuacion.
const {cedulaCliente, cedulaAbogado} = await Caso.findOne(idCaso)
if(cedulaCliente && cedulaAbogado){
    const cliente = await Cliente.findOne(cedulaCliente)
    const abogado = await Abogado.findOne(cedulaAbogado)
    if(cliente && abogado){
        sendEmailCita(cliente,
                      abogado,
                      newCita
                     )
    }
}
}