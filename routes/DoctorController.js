import express from "express";
import DoctorService from "../services/DoctorService.js";

const router = express.Router();

// POST (CREATE)
router.post('/postDoctor/', async (req, res) => {
    const {name, login, password, medicalSpecialty, medicalRegistration, email, phone} = req.body;
    try { 
        const doctor = await DoctorService.saveDoctor({name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        res.send(doctor);     
    } catch (error) {
        console.log(error);
        res.status(500).send(error);   
    }  
});

// GET (READ)
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await DoctorService.getAllDoctors();
        res.send(doctors);     
    } catch (error) {
        console.log(error);
        res.status(500).send(error);   
    }  
});

router.get('/getDoctor/:id', async (req, res) => {
    const {id} = req.params;
    try { 
        const doctor = await DoctorService.getDoctor(id);
        res.send(doctor);     
    } catch (error) {
        console.log(error);
        res.status(500).send(error);   
    }  
});

// PUT (UPDATE)
router.put('/doctors/:id', async (req, res) => {
    const {id} = req.params;
    const {name, login, password, medicalSpecialty, medicalRegistration, email, phone} = req.body;
    try { 
        const doctor = await DoctorService.updateDoctor(id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        res.send(doctor);     
    } catch (error) {
        console.log(error);
        res.status(500).send(error);   
    }  
});

// DELETE (DELETE)
router.delete('/doctors/:id', async (req, res) => {
    const {id} = req.params;
    try { 
        const doctor = await DoctorService.deleteDoctor(id);
        res.send(doctor);     
    } catch (error) {
        console.log(error);
        res.status(500).send(error);   
    }  
});

export default router;

// Agora o módulo está disponível para ser mapeado pelo express
// via router.