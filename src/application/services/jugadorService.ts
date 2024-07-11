// src/application/services/jugadorService.ts

import { IJugadorRepository } from '../../domain/repositories/IJugadorRepository';
import Jugador from '../../domain/models/jugador';

export class JugadorService {
    private jugadorRepository: IJugadorRepository;

    constructor(jugadorRepository: IJugadorRepository) {
        this.jugadorRepository = jugadorRepository;
    }

    async createJugador(name: string, edad: number, posicion: string): Promise<Jugador> {
        console.log("Creating jugador:", name, edad, posicion);
        const jugador = new Jugador(null, name, edad, posicion);
        return await this.jugadorRepository.save(jugador);
    }

    async getJugadorById(id: string): Promise<Jugador | null> {
        console.log("Getting jugador by ID:", id);
        return await this.jugadorRepository.findById(id);
    }

    async getAllJugadores(): Promise<Jugador[]> {
        console.log("Getting all jugadores");
        return await this.jugadorRepository.findAll();
    }

    async updateJugador(id: string, name: string, edad: number, posicion: string): Promise<Jugador> {
        console.log("Updating jugador:", id, name, edad, posicion);
        const jugador = new Jugador(id, name, edad, posicion);
        return await this.jugadorRepository.update(jugador);
    }

    async deleteJugadorById(id: string): Promise<void> {
        console.log("Deleting jugador by ID:", id);
        return await this.jugadorRepository.deleteById(id);
    }
}

export default JugadorService; 
