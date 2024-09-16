import PacientRepository from "../repositories/PacientRepository.js";

const savePacient = async ({name, birthDate, email, phone}) => {
    return PacientRepository.savePacient({name, birthDate, email, phone});
}

const getAllPacients = async() => {
    return PacientRepository.getAllPacients();
}

const getPacient = async(id) => {
    return PacientRepository.getPacient(id);
}

const updatePacient = async(id, {name, birthDate, email, phone}) => {
    return PacientRepository.updatePacient(id, {name, birthDate, email, phone});
}

const deletePacient = async (id) => {
    return PacientRepository.deletePacient(id);
}

const pacientService = {
    savePacient,
    getAllPacients,
    getPacient,
    updatePacient,
    deletePacient
}

export default pacientService;