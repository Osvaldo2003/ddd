"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrenador_1 = __importDefault(require("../../domain/models/entrenador"));
const mysqlConnection_1 = __importDefault(require("../../infrastructure/database/mysqlConnection"));
class MySQLEntrenadorRepository {
    async save(entrenador) {
        const connection = await (0, mysqlConnection_1.default)();
        const [result] = await connection.execute('INSERT INTO entrenadores (name, edad, pais) VALUES (?, ?, ?)', [entrenador.name, entrenador.edad, entrenador.pais]);
        entrenador.id = result.insertId.toString();
        return entrenador;
    }
    async findById(id) {
        const connection = await (0, mysqlConnection_1.default)();
        const [rows] = await connection.execute('SELECT * FROM entrenadores WHERE id = ?', [id]);
        if (rows.length === 0)
            return null;
        const row = rows[0];
        return new entrenador_1.default(row.id.toString(), row.name, row.edad, row.pais);
    }
    async findAll() {
        const connection = await (0, mysqlConnection_1.default)();
        const [rows] = await connection.execute('SELECT * FROM entrenadores');
        return rows.map(row => new entrenador_1.default(row.id.toString(), row.name, row.edad, row.pais));
    }
    async update(entrenador) {
        const connection = await (0, mysqlConnection_1.default)();
        await connection.execute('UPDATE entrenadores SET name = ?, edad = ?, pais = ? WHERE id = ?', [entrenador.name, entrenador.edad, entrenador.pais, entrenador.id]);
        return entrenador;
    }
    async deleteById(id) {
        const connection = await (0, mysqlConnection_1.default)();
        await connection.execute('DELETE FROM entrenadores WHERE id = ?', [id]);
    }
}
exports.default = MySQLEntrenadorRepository;
