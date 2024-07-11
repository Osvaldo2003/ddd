// src/domain/repositories/IJugadorRepository.ts

import Jugador from '../models/jugador'; 

export interface IJugadorRepository {
    save(jugador: Jugador): Promise<Jugador>;
    findById(id: string): Promise<Jugador | null>;
    findAll(): Promise<Jugador[]>;
    update(jugador: Jugador): Promise<Jugador>;
    deleteById(id: string): Promise<void>;
}
