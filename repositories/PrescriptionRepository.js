import {Prescription} from "../models/Prescription.js";

// CREATE
const savePrescription = async ({date, appointmentId, medicine, dosage, instructions}) => {
    try {
        const prescription = new Prescription({date, appointmentId, medicine, dosage, instructions});
        return await prescription.save();     
    } catch (error) {
        throw new Error(error); 
    }  
}

// READ
const getAllPrescriptions = async() => {
    return await Prescription.find();
}

const getPrescription = async(id) => {
    try {
        return await Prescription.findById(id);
        
    } catch (error) {
        throw new Error(error);       
    }
}

// UPDATE
const updatePrescription = async(id, {date, appointmentId, medicine, dosage, instructions}) => {
    try {
        return await Prescription.findByIdAndUpdate(id, {date, appointmentId, medicine, dosage, instructions}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

// DELETE
const deletePrescription = async (id) => {
    try {
        return await Prescription.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);  
    }  
}


const prescriptionRepository = {
    savePrescription,
    getAllPrescriptions,
    getPrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionRepository;