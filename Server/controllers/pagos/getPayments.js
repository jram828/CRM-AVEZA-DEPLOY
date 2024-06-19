 import {models} from '../../DB.js'
const { Cliente, Abogado, Usuario } = models;
const getPayments = async (password, email)=>{
    const login = await Usuario.findOne({
        where:{
            correo: email,
            password: password
        }
    })
    if(!login){
        const login = await Abogado.findOne({
            where:{
                correo: email,
                password: password
            }
        })
        if(!login) throw new Error('Password o email inválido')
        return{
            access: true,
            usuario: login
        }
    }
    return {
        access: true,
        usuario: login
    }
}

export {
    getPayments
}