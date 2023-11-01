import { Model, Schema, Types, model } from "mongoose";

export interface ICheque{
  createdAt: Date;
  user: Types.ObjectId;
  numero: String;
  emision: Date;
  vencimiento: Date;
  entidad: String;
  monto: Number;
  esEcheq: Boolean; //si es echeq o no
  estado: String;
  banco: String;
  empresa: String;
}

const ChequeSchema = new Schema<ICheque>({
  createdAt:{
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario", //el nombre de la coleccion de usuarios
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  emision:{
    type: Date,
    default: Date.now,
    required: true,
  },
  vencimiento:{
    type: Date,
    required: true,
  },
  entidad: {
    type: String,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  esEcheq: {
    type: Boolean,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    default: "Pendiente",
  },
  banco:{ 
    type: String,
    required: true,
  },
  empresa:{ 
    type: String,
    required: true,
  }
})


const Cheque: Model<ICheque> = model<ICheque>("Cheque", ChequeSchema);

export default Cheque;
