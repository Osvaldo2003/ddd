"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJugadorById = exports.updateJugador = exports.getAllJugadores = exports.getJugadorById = exports.createJugador = void 0;
const diContainer_1 = require("../../infrastructure/diContainer");
const createJugador = async (req, res) => {
    const { name, edad, posicion } = req.body; // Ajustar según los nombres de campo que recibes del cliente
    try {
        console.log("Request to create jugador:", name);
        const jugador = await diContainer_1.jugadorService.createJugador(name, edad, posicion);
        res.status(201).json(jugador);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in createJugador:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};
exports.createJugador = createJugador;
const getJugadorById = async (req, res) => {
    const { id } = req.params;
    try {
        console.log("Request to get jugador by ID:", id);
        const jugador = await diContainer_1.jugadorService.getJugadorById(id);
        res.status(200).json(jugador);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in getJugadorById:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};
exports.getJugadorById = getJugadorById;
const getAllJugadores = async (req, res) => {
    try {
        console.log("Request to get all jugadores");
        const jugadores = await diContainer_1.jugadorService.getAllJugadores();
        res.status(200).json(jugadores);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in getAllJugadores:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};
exports.getAllJugadores = getAllJugadores;
const updateJugador = async (req, res) => {
    const { id } = req.params;
    const { name, edad, posicion } = req.body; // Ajustar según los nombres de campo que recibes del cliente
    try {
        console.log("Request to update jugador:", id, name);
        const jugador = await diContainer_1.jugadorService.updateJugador(id, name, edad, posicion);
        res.status(200).json(jugador);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in updateJugador:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};
exports.updateJugador = updateJugador;
const deleteJugadorById = async (req, res) => {
    const { id } = req.params;
    try {
        console.log("Request to delete jugador by ID:", id);
        await diContainer_1.jugadorService.deleteJugadorById(id);
        res.status(204).send();
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in deleteJugadorById:", error.message);
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};
exports.deleteJugadorById = deleteJugadorById;
