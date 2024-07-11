"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrenador_1 = __importDefault(require("../../domain/models/entrenador"));
const entrenadorSchema_1 = require("./schemas/entrenadorSchema");
class MongoEntrenadorRepository {
    async save(entrenador) {
        const entrenadorModel = new entrenadorSchema_1.EntrenadorModel(entrenador);
        const savedEntrenador = await entrenadorModel.save();
        return new entrenador_1.default(savedEntrenador.id, savedEntrenador.name, savedEntrenador.edad, savedEntrenador.pais);
    }
    async findById(id) {
        const entrenador = await entrenadorSchema_1.EntrenadorModel.findById(id);
        if (!entrenador)
            return null;
        return new entrenador_1.default(entrenador.id, entrenador.name, entrenador.edad, entrenador.pais);
    }
    async findAll() {
        const entrenadores = await entrenadorSchema_1.EntrenadorModel.find();
        return entrenadores.map(entrenador => new entrenador_1.default(entrenador.id, entrenador.name, entrenador.edad, entrenador.pais));
    }
    async update(entrenador) {
        const updatedEntrenador = await entrenadorSchema_1.EntrenadorModel.findByIdAndUpdate(entrenador.id, entrenador, { new: true });
        if (!updatedEntrenador)
            throw new Error('Entrenador not found');
        return new entrenador_1.default(updatedEntrenador.id, updatedEntrenador.name, updatedEntrenador.edad, updatedEntrenador.pais);
    }
    async deleteById(id) {
        await entrenadorSchema_1.EntrenadorModel.findByIdAndDelete(id);
    }
}
exports.default = MongoEntrenadorRepository;
