import mongoose, { Document, Schema } from 'mongoose';

export interface IEntrenadorDocument extends Document {
    name: string;
    edad: number;
    pais: string;
}

const entrenadorSchema = new Schema({
    name: { type: String, required: true },
    edad: { type: Number, required: true },
    pais: { type: String, required: true },
});

export const EntrenadorModel = mongoose.model<IEntrenadorDocument>('Entrenador', entrenadorSchema);
