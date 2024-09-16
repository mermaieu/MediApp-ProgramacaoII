import AppointmentRepository from "../repositories/AppointmentRepository.js";

const saveAppointment = async ({date, doctorId, pacientId}) => {
    return AppointmentRepository.saveAppointment({date, doctorId, pacientId});
}

const getAllAppointments = async() => {
    return AppointmentRepository.getAllAppointments();
}

const getAppointment = async(id) => {
    return AppointmentRepository.getAppointment(id);
}

const updateAppointment = async(id, {date, doctorId, pacientId}) => {
    return AppointmentRepository.updateAppointment(id, {date, doctorId, pacientId});
}

const deleteAppointment = async (id) => {
    return AppointmentRepository.deleteAppointment(id);
}

const appointmentService = {
    saveAppointment,
    getAllAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment
}

export default appointmentService;