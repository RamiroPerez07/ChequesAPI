import { Request,Response } from "express"
import { ObjectId } from "mongoose"
import Cheque, { ICheque } from "../models/cheques";

export const getCheques = async (req: Request, res: Response) => {

    const usuarioId: ObjectId = req.body.usuarioConfirmado._id;

    const consulta = {user: usuarioId};

    const cheques = await Cheque.find(consulta);

    res.status(200).json({
       data: [
        ...cheques
       ] 
    })
}

export const createCheque = async (res: Response, req: Request) => {
    
    const chequeData: ICheque = req.body

    const usuarioId: ObjectId = req.body.usuarioConfirmado._id;

    const data = {
        ...chequeData,
        user: usuarioId,
        createdAt: new Date(),
        estado: "Pendiente"
    }

    const cheque = new Cheque(data);

    await cheque.save();

    res.status(201).json({
        cheque,
        
    })

}