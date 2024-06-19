import { getAllCita } from '../controllers/cita/getAllCita.js'
import { createCita } from '../controllers/cita/postAgregaCita.js'


const getCitaHandler = async (req, res)=>{
    try {
        const response = await getAllCita(req)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postCreateCita = async (req, res) =>{
    const { titulo, descripcion, fechaCita, horaCita, idCaso } = req.body
    try {
        const response = await createCita( titulo, descripcion, fechaCita, horaCita, idCaso)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}



export  {
    getCitaHandler,
    postCreateCita,
}