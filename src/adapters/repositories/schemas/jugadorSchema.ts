import { Schema, model, Document } from 'mongoose';

interface IJugadorDocument extends Document {
    name: string;
    edad: number;
    posicion: string;
}

const jugadorSchema = new Schema<IJugadorDocument>({
    name: { type: String, required: true },
    edad: { type: Number, required: true },
    posicion: { type: String, required: true }
});

const JugadorModel = model<IJugadorDocument>('Jugador', jugadorSchema);

export { IJugadorDocument, JugadorModel };
