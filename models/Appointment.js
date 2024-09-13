import mongoose from "mongoose";
// o Mongoose exporta o módulo inteiro como um objeto padrão (default export).

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
    {   
        date: {
            type: Date,
            required: [true, 'Appointment Date is required.']
        },
        doctorId: {
            type: String,
            required: [true, 'DoctorId is required.']
        }, 
        pacientId: {
            type: String,
            required: [true, 'PacientId is required.']
        },
        createdAt: {
            type: Date,
            default: Date.now
        } 
    }
);

const appointment = mongoose.model('Appointment', appointmentSchema);
export default appointment;
