import { IEntrenadorRepository } from '../../domain/repositories/IEntrenadorRepository';
import Entrenador from '../../domain/models/entrenador';
import connectMySQL from '../../infrastructure/database/mysqlConnection';
import { RowDataPacket, OkPacket, FieldPacket } from 'mysql2';

class MySQLEntrenadorRepository implements IEntrenadorRepository {
    async save(entrenador: Entrenador): Promise<Entrenador> {
        const connection = await connectMySQL();
        const [result]: [OkPacket, FieldPacket[]] = await connection.execute(
            'INSERT INTO entrenadores (name, edad, pais) VALUES (?, ?, ?)',
            [entrenador.name, entrenador.edad, entrenador.pais]
        );
        entrenador.id = result.insertId.toString();
        return entrenador;
    }

    async findById(id: string): Promise<Entrenador | null> {
        const connection = await connectMySQL();
        const [rows]: [RowDataPacket[], FieldPacket[]] = await connection.execute(
            'SELECT * FROM entrenadores WHERE id = ?',
            [id]
        );
        if (rows.length === 0) return null;
        const row = rows[0];
        return new Entrenador(row.id.toString(), row.name, row.edad, row.pais);
    }

    async findAll(): Promise<Entrenador[]> {
        const connection = await connectMySQL();
        const [rows]: [RowDataPacket[], FieldPacket[]] = await connection.execute('SELECT * FROM entrenadores');
        return rows.map(row => new Entrenador(row.id.toString(), row.name, row.edad, row.pais));
    }

    async update(entrenador: Entrenador): Promise<Entrenador> {
        const connection = await connectMySQL();
        await connection.execute(
            'UPDATE entrenadores SET name = ?, edad = ?, pais = ? WHERE id = ?',
            [entrenador.name, entrenador.edad, entrenador.pais, entrenador.id]
        );
        return entrenador;
    }

    async deleteById(id: string): Promise<void> {
        const connection = await connectMySQL();
        await connection.execute('DELETE FROM entrenadores WHERE id = ?', [id]);
    }
}

export default MySQLEntrenadorRepository;
