"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntrenadorService = void 0;
const entrenador_1 = __importDefault(require("../../domain/models/entrenador"));
class EntrenadorService {
    constructor(entrenadorRepository) {
        EntrenadorService.entrenadorRepository = entrenadorRepository;
    }
    static async createEntrenador(name, edad, pais) {
        const entrenador = new entrenador_1.default(null, name, edad, pais);
        return await EntrenadorService.entrenadorRepository.save(entrenador);
    }
    static async getEntrenadorById(id) {
        return await EntrenadorService.entrenadorRepository.findById(id);
    }
    static async getAllEntrenadores() {
        return await EntrenadorService.entrenadorRepository.findAll();
    }
    static async updateEntrenador(id, name, edad, pais) {
        const entrenador = new entrenador_1.default(id, name, edad, pais);
        return await EntrenadorService.entrenadorRepository.update(entrenador);
    }
    static async deleteEntrenadorById(id) {
        await EntrenadorService.entrenadorRepository.deleteById(id);
    }
}
exports.EntrenadorService = EntrenadorService;
