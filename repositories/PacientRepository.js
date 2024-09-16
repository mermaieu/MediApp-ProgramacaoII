import {Pacient} from "../models/Pacient.js";

// CREATE
const savePacient = async ({name, birthDate, email, phone}) => {
    try {
        const pacient = new Pacient({name, birthDate, email, phone});
        return await pacient.save();     
    } catch (error) {
        throw new Error(error); 
    }  
}

// READ
const getAllPacients = async() => {
    return await Pacient.find();
}

const getPacient = async(id) => {
    try {
        return await Pacient.findById(id);
        
    } catch (error) {
        throw new Error(error);       
    }
}

// UPDATE
const updatePacient = async(id, {name, birthDate, email, phone}) => {
    try {
        return await Pacient.findByIdAndUpdate(id, {name, birthDate, email, phone}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

// DELETE
const deletePacient = async (id) => {
    try {
        return await Pacient.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);  
    }  
}


const pacientRepository = {
    savePacient,
    getAllPacients,
    getPacient,
    updatePacient,
    deletePacient

}

export default pacientRepository;