import DoctorRepository from "../repositories/DoctorRepository.js";

const saveDoctor = async ({name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    return DoctorRepository.saveDoctor({name, login, password, medicalSpecialty, medicalRegistration, email, phone});
}

const getAllDoctors = async() => {
    return DoctorRepository.getAllDoctors();
}

const getDoctor = async(id) => {
    return DoctorRepository.getDoctor(id);
}

const updateDoctor = async(id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone}) => {
    return DoctorRepository.updateDoctor(id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone});
}

const deleteDoctor = async (id) => {
    return DoctorRepository.deleteDoctor(id);
}

const doctorService = {
    saveDoctor,
    getAllDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorService;