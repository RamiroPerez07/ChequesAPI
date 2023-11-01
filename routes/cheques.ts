import { Router } from "express";
import { createCheque, getCheques } from "../controllers/cheques";
import { recolectarErrores } from "../middlewares/recolectarErrores";
import validarJWT from "../middlewares/validarJWT";
import { isVerified } from "../middlewares/validarVerificado";
import { check } from "express-validator";

const router = Router();

router.get("/",
  [
    validarJWT,
    recolectarErrores
  ],
  getCheques);

router.post("/",
  [
    validarJWT,
    isVerified,
    check("numero","El número es obligatorio").not().isEmpty(),
    check("emision","La fecha de emisión es obligatoria").not().isEmpty(),
    check("vencimiento","La fecha de vencimiento es obligatoria").not().isEmpty(),
    check("entidad","La entidad es obligatoria").not().isEmpty(),
    check("monto","El monto es obligatorio").not().isEmpty(),
    check("esEcheq","El tipo E-cheq es obligatorio").not().isEmpty(),
    check("estado","El estado es obligatorio").not().isEmpty(),
    check("banco","El banco es obligatorio").not().isEmpty(),
    check("empresa", "La empresa es obligatoria").not().isEmpty(),
    recolectarErrores
  ],
  createCheque);

export default router