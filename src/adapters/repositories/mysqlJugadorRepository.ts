import { IJugadorRepository } from '../../domain/repositories/IJugadorRepository';
import Jugador from '../../domain/models/jugador';
import connectMySQL from '../../infrastructure/database/mysqlConnection';
import { RowDataPacket, OkPacket, FieldPacket } from 'mysql2';

class MySQLJugadorRepository implements IJugadorRepository {
    async save(jugador: Jugador): Promise<Jugador> {
        const connection = await connectMySQL();
        const [result]: [OkPacket, FieldPacket[]] = await connection.execute(
            'INSERT INTO jugadores (name, edad, posicion) VALUES (?, ?, ?)',
            [jugador.name, jugador.edad, jugador.posicion]
        );
        jugador.id = result.insertId.toString();
        return jugador;
    }

    async findById(id: string): Promise<Jugador | null> {
        const connection = await connectMySQL();
        const [rows]: [RowDataPacket[], FieldPacket[]] = await connection.execute(
            'SELECT * FROM jugadores WHERE id = ?',
            [id]
        );
        if (rows.length === 0) return null;
        const row = rows[0];
        return new Jugador(row.id.toString(), row.name, row.edad, row.posicion);
    }

    async findAll(): Promise<Jugador[]> {
        const connection = await connectMySQL();
        const [rows]: [RowDataPacket[], FieldPacket[]] = await connection.execute('SELECT * FROM jugadores');
        return rows.map(row => new Jugador(row.id.toString(), row.name, row.edad, row.posicion));
    }

    async update(jugador: Jugador): Promise<Jugador> {
        const connection = await connectMySQL();
        await connection.execute(
            'UPDATE jugadores SET name = ?, edad = ?, posicion = ? WHERE id = ?',
            [jugador.name, jugador.edad, jugador.posicion, jugador.id]
        );
        return jugador;
    }

    async deleteById(id: string): Promise<void> {
        const connection = await connectMySQL();
        await connection.execute('DELETE FROM jugadores WHERE id = ?', [id]);
    }
}

export default MySQLJugadorRepository;
