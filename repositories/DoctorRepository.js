import doctor from "../models/Doctor.js";

// CREATE
const saveDoctor = async ({name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    try {
        const doctor = new Doctor({name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        return await doctor.save();     
    } catch (error) {
        throw new Error(error); 
    }  
}

// READ
const getAllDoctors = async() => {
    return await Doctor.find();
}

const getDoctor = async(id) => {
    try {
        return await Doctor.findById(id);
        
    } catch (error) {
        throw new Error(error);       
    }
}

// UPDATE
const updateDoctor = async(id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    try {
        return await Doctor.findByIdAndUpdate(id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

// DELETE
const deleteDoctor = async (id) => {
    try {
        return await Doctor.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);  
    }  
}

const doctorRepository = {
    saveDoctor,
    getAllDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorRepository;