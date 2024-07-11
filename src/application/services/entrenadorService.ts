import { IEntrenadorRepository } from '../../domain/repositories/IEntrenadorRepository';
import Entrenador from '../../domain/models/entrenador';

export class EntrenadorService {
    private static entrenadorRepository: IEntrenadorRepository;

    constructor(entrenadorRepository: IEntrenadorRepository) {
        EntrenadorService.entrenadorRepository = entrenadorRepository;
    }

    static async createEntrenador(name: string, edad: number, pais: string): Promise<Entrenador> {
        const entrenador = new Entrenador(null, name, edad, pais);
        return await EntrenadorService.entrenadorRepository.save(entrenador);
    }

    static async getEntrenadorById(id: string): Promise<Entrenador | null> {
        return await EntrenadorService.entrenadorRepository.findById(id);
    }

    static async getAllEntrenadores(): Promise<Entrenador[]> {
        return await EntrenadorService.entrenadorRepository.findAll();
    }

    static async updateEntrenador(id: string, name: string, edad: number, pais: string): Promise<Entrenador> {
        const entrenador = new Entrenador(id, name, edad, pais);
        return await EntrenadorService.entrenadorRepository.update(entrenador);
    }

    static async deleteEntrenadorById(id: string): Promise<void> {
        await EntrenadorService.entrenadorRepository.deleteById(id);
    }
}
