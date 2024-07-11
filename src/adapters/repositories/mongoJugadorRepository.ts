import { IJugadorRepository } from '../../domain/repositories/IJugadorRepository';
import Jugador from '../../domain/models/jugador';
import { IJugadorDocument, JugadorModel } from './schemas/jugadorSchema';

class MongoJugadorRepository implements IJugadorRepository {
    async save(jugador: Jugador): Promise<Jugador> {
        const jugadorModel = new JugadorModel(jugador);
        const savedJugador = await jugadorModel.save();
        return new Jugador(savedJugador.id, savedJugador.name, savedJugador.edad, savedJugador.posicion);
    }

    async findById(id: string): Promise<Jugador | null> {
        const jugador = await JugadorModel.findById(id);
        if (!jugador) return null;
        return new Jugador(jugador.id, jugador.name, jugador.edad, jugador.posicion);
    }

    async findAll(): Promise<Jugador[]> {
        const jugadores: IJugadorDocument[] = await JugadorModel.find();
        return jugadores.map((jugador: IJugadorDocument) => new Jugador(jugador.id, jugador.name, jugador.edad, jugador.posicion));
    }

    async update(jugador: Jugador): Promise<Jugador> {
        const updatedJugador = await JugadorModel.findByIdAndUpdate(jugador.id, jugador, { new: true });
        if (!updatedJugador) throw new Error('Jugador not found');
        return new Jugador(updatedJugador.id, updatedJugador.name, updatedJugador.edad, updatedJugador.posicion);
    }

    async deleteById(id: string): Promise<void> {
        await JugadorModel.findByIdAndDelete(id);
    }
}

export default MongoJugadorRepository;
