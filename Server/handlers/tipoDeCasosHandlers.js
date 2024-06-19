import { getAllTipoDeCaso } from '../controllers/tipodeCaso/getAllTipoDeCaso.js'
import { createTipoDeCaso } from '../controllers/tipodeCaso/createTipoDeCaso.js'
import { deleteTipoDeCaso } from '../controllers/tipodeCaso/deleteTipoDeCaso.js'

const getTipoDeCasoHandler = async (req, res)=>{
    try {
        const response = await getAllTipoDeCaso()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postTipoDeCasoHandler = async (req, res) =>{
    const { descripcion } = req.body
    try {
        const response = await createTipoDeCaso( descripcion)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteTipoDeCasoHandler = async (req, res) =>{
    const { TipoDeCasoid } = req.body
    try {
        const response = await deleteTipoDeCaso( TipoDeCasoid)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


export {postTipoDeCasoHandler,getTipoDeCasoHandler,deleteTipoDeCasoHandler}