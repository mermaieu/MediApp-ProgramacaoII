import Appointment from "../models/Appointment.js";

// CREATE
const saveAppointment = async ({date, doctorId, pacientId}) => {
    try {
        const prescription = new Appointment({date, doctorId, pacientId});
        return await prescription.save();     
    } catch (error) {
        throw new Error(error); 
    }  
}

// READ
const getAllAppointments = async() => {
    return await Appointment.find();
}

const getAppointment = async(id) => {
    try {
        return await Appointment.findById(id);
        
    } catch (error) {
        throw new Error(error);       
    }
}

// UPDATE
const updateAppointment = async(id, {date, doctorId, pacientId}) => {
    try {
        return await Appointment.findByIdAndUpdate(id, {date, doctorId, pacientId}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

// DELETE
const deleteAppointment = async (id) => {
    try {
        return await Appointment.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);  
    }  
}

const appointmentRepository = {
    saveAppointment,
    getAllAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment
}

export default appointmentRepository;