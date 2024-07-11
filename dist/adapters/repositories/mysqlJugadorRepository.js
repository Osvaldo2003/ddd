"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jugador_1 = __importDefault(require("../../domain/models/jugador"));
const mysqlConnection_1 = __importDefault(require("../../infrastructure/database/mysqlConnection"));
class MySQLJugadorRepository {
    async save(jugador) {
        const connection = await (0, mysqlConnection_1.default)();
        const [result] = await connection.execute('INSERT INTO jugadores (name, edad, posicion) VALUES (?, ?, ?)', [jugador.name, jugador.edad, jugador.posicion]);
        jugador.id = result.insertId.toString();
        return jugador;
    }
    async findById(id) {
        const connection = await (0, mysqlConnection_1.default)();
        const [rows] = await connection.execute('SELECT * FROM jugadores WHERE id = ?', [id]);
        if (rows.length === 0)
            return null;
        const row = rows[0];
        return new jugador_1.default(row.id.toString(), row.name, row.edad, row.posicion);
    }
    async findAll() {
        const connection = await (0, mysqlConnection_1.default)();
        const [rows] = await connection.execute('SELECT * FROM jugadores');
        return rows.map(row => new jugador_1.default(row.id.toString(), row.name, row.edad, row.posicion));
    }
    async update(jugador) {
        const connection = await (0, mysqlConnection_1.default)();
        await connection.execute('UPDATE jugadores SET name = ?, edad = ?, posicion = ? WHERE id = ?', [jugador.name, jugador.edad, jugador.posicion, jugador.id]);
        return jugador;
    }
    async deleteById(id) {
        const connection = await (0, mysqlConnection_1.default)();
        await connection.execute('DELETE FROM jugadores WHERE id = ?', [id]);
    }
}
exports.default = MySQLJugadorRepository;
