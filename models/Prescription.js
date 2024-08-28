import mongoose from "mongoose";
// o Mongoose exporta o módulo inteiro como um objeto padrão (default export).

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema(
    {   
        prescriptionId: {
            type: String,
            required: [true, 'PrescriptionId is required.']
        },
        date: {
            type: Date,
            default: null  
        },
        appointmentId: {
            type: String,
            required: [true, 'AppointmentId is required.']
        },
        medicine: {
            type: String,
            required: [true, 'Medicine is required.']
        }, 
        dosage: {
            type: String,
            required: [true, 'Dosage is required.']
        },
        instructions: {
            type: String,
            default: null
        },
        createdAt: {
            type: Date,
            default: Date.now
        } 
    }
);

const prescription = mongoose.model('Prescription', prescriptionSchema);
export default prescription;
