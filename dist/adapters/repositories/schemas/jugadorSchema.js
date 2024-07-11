"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JugadorModel = void 0;
const mongoose_1 = require("mongoose");
const jugadorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    edad: { type: Number, required: true },
    posicion: { type: String, required: true }
});
const JugadorModel = (0, mongoose_1.model)('Jugador', jugadorSchema);
exports.JugadorModel = JugadorModel;
