 import {models} from "../../DB.js";
 const { TipoDeCaso } = models;
const createTipoDeCaso = async (descripcion) => {
    
    const newTipoDeCaso = await TipoDeCaso.create({descripcion})
   
    return newTipoDeCaso
}  
    
export {createTipoDeCaso};