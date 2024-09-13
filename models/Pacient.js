import mongoose from "mongoose";
// o Mongoose exporta o módulo inteiro como um objeto padrão (default export).

const Schema = mongoose.Schema;

const pacientSchema = new Schema(
    { 
        name: {
            type: String,
            required: [true, 'Pacient Name is required.']
        },
        birthDate: {
            type: Date,
            default: null  
        },
        email: {
            type: String,
            required: [true, 'Email is required.'], 
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required.'], 
        },
        createdAt: {
            type: Date,
            default: Date.now
        } 
    }
);

const pacient = mongoose.model('Pacient', pacientSchema);
export default pacient;
