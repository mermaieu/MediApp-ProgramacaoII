import express from "express";
// o Express não usa exportacão nomeada, 
// mas sim exportacão comum (module.exports = express)

// Criando um roteador:
const router = express.Router();

// Definindo uma rota:
router.get(
    "/", function(req, res) {
        console.log("hi!") ;
        res.status(200).json({message: "hi!"});
    }
);

export default router;
