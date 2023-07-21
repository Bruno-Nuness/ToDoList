import { Response,Request } from "express"
const createUserController= async(req:Request, res:Response) =>{
    return res.json("usuario criado")
}

export {createUserController}