import { IEntrenadorRepository } from '../../domain/repositories/IEntrenadorRepository';
import Entrenador from '../../domain/models/entrenador';
import { IEntrenadorDocument, EntrenadorModel } from './schemas/entrenadorSchema';

class MongoEntrenadorRepository implements IEntrenadorRepository {
    async save(entrenador: Entrenador): Promise<Entrenador> {
        const entrenadorModel = new EntrenadorModel(entrenador);
        const savedEntrenador = await entrenadorModel.save();
        return new Entrenador(savedEntrenador.id, savedEntrenador.name, savedEntrenador.edad, savedEntrenador.pais);
    }

    async findById(id: string): Promise<Entrenador | null> {
        const entrenador = await EntrenadorModel.findById(id);
        if (!entrenador) return null;
        return new Entrenador(entrenador.id, entrenador.name, entrenador.edad, entrenador.pais);
    }

    async findAll(): Promise<Entrenador[]> {
        const entrenadores: IEntrenadorDocument[] = await EntrenadorModel.find();
        return entrenadores.map(entrenador => new Entrenador(entrenador.id, entrenador.name, entrenador.edad, entrenador.pais));
    }

    async update(entrenador: Entrenador): Promise<Entrenador> {
        const updatedEntrenador = await EntrenadorModel.findByIdAndUpdate(entrenador.id, entrenador, { new: true });
        if (!updatedEntrenador) throw new Error('Entrenador not found');
        return new Entrenador(updatedEntrenador.id, updatedEntrenador.name, updatedEntrenador.edad, updatedEntrenador.pais);
    }

    async deleteById(id: string): Promise<void> {
        await EntrenadorModel.findByIdAndDelete(id);
    }
}

export default MongoEntrenadorRepository;
