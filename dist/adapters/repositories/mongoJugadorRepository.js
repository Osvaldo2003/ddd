"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jugador_1 = __importDefault(require("../../domain/models/jugador"));
const jugadorSchema_1 = require("./schemas/jugadorSchema");
class MongoJugadorRepository {
    async save(jugador) {
        const jugadorModel = new jugadorSchema_1.JugadorModel(jugador);
        const savedJugador = await jugadorModel.save();
        return new jugador_1.default(savedJugador.id, savedJugador.name, savedJugador.edad, savedJugador.posicion);
    }
    async findById(id) {
        const jugador = await jugadorSchema_1.JugadorModel.findById(id);
        if (!jugador)
            return null;
        return new jugador_1.default(jugador.id, jugador.name, jugador.edad, jugador.posicion);
    }
    async findAll() {
        const jugadores = await jugadorSchema_1.JugadorModel.find();
        return jugadores.map((jugador) => new jugador_1.default(jugador.id, jugador.name, jugador.edad, jugador.posicion));
    }
    async update(jugador) {
        const updatedJugador = await jugadorSchema_1.JugadorModel.findByIdAndUpdate(jugador.id, jugador, { new: true });
        if (!updatedJugador)
            throw new Error('Jugador not found');
        return new jugador_1.default(updatedJugador.id, updatedJugador.name, updatedJugador.edad, updatedJugador.posicion);
    }
    async deleteById(id) {
        await jugadorSchema_1.JugadorModel.findByIdAndDelete(id);
    }
}
exports.default = MongoJugadorRepository;
