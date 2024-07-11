// src/domain/repositories/IEntrenadorRepository.ts

import Entrenador from '../models/entrenador'; 

export interface IEntrenadorRepository {
    save(entrenador: Entrenador): Promise<Entrenador>;
    findById(id: string): Promise<Entrenador | null>;
    findAll(): Promise<Entrenador[]>;
    update(entrenador: Entrenador): Promise<Entrenador>;
    deleteById(id: string): Promise<void>;
}
