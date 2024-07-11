"use strict";
// src/application/services/jugadorService.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JugadorService = void 0;
const jugador_1 = __importDefault(require("../../domain/models/jugador"));
class JugadorService {
    constructor(jugadorRepository) {
        this.jugadorRepository = jugadorRepository;
    }
    async createJugador(name, edad, posicion) {
        console.log("Creating jugador:", name, edad, posicion);
        const jugador = new jugador_1.default(null, name, edad, posicion);
        return await this.jugadorRepository.save(jugador);
    }
    async getJugadorById(id) {
        console.log("Getting jugador by ID:", id);
        return await this.jugadorRepository.findById(id);
    }
    async getAllJugadores() {
        console.log("Getting all jugadores");
        return await this.jugadorRepository.findAll();
    }
    async updateJugador(id, name, edad, posicion) {
        console.log("Updating jugador:", id, name, edad, posicion);
        const jugador = new jugador_1.default(id, name, edad, posicion);
        return await this.jugadorRepository.update(jugador);
    }
    async deleteJugadorById(id) {
        console.log("Deleting jugador by ID:", id);
        return await this.jugadorRepository.deleteById(id);
    }
}
exports.JugadorService = JugadorService;
exports.default = JugadorService;
