import express from "express";
// o Express não usa exportacão nomeada, 
// mas sim exportacão comum (module.exports = express)
import appointmentController from "./AppointmentController.js";
import doctorController from "./DoctorController.js";
import pacientController from "./PacientController.js";
import prescriptionController from "./PrescriptionController";

// Criando um roteador:
const router = express.Router();

// Definindo uma rota:
router.get(
    "/", function(req, res) {
        console.log("hi!") ;
        res.status(200).json({message: "hi!"});
    }
);

// Mapeamento de rotas dos Controleadores
router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientController);
router.use("/", prescriptionController);

export default router;
