"use strict";
// src/adapters/controllers/entrenadorController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEntrenadorById = exports.updateEntrenador = exports.getAllEntrenadores = exports.getEntrenadorById = exports.createEntrenador = void 0;
const entrenadorService_1 = require("../../application/services/entrenadorService");
const createEntrenador = async (req, res) => {
    const { name, edad, pais } = req.body;
    try {
        const entrenador = await entrenadorService_1.EntrenadorService.createEntrenador(name, edad, pais);
        res.status(201).json(entrenador);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createEntrenador = createEntrenador;
const getEntrenadorById = async (req, res) => {
    const { id } = req.params;
    try {
        const entrenador = await entrenadorService_1.EntrenadorService.getEntrenadorById(id);
        if (!entrenador) {
            res.status(404).json({ message: 'Entrenador not found' });
        }
        else {
            res.status(200).json(entrenador);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getEntrenadorById = getEntrenadorById;
const getAllEntrenadores = async (req, res) => {
    try {
        const entrenadores = await entrenadorService_1.EntrenadorService.getAllEntrenadores();
        res.status(200).json(entrenadores);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllEntrenadores = getAllEntrenadores;
const updateEntrenador = async (req, res) => {
    const { id } = req.params;
    const { name, edad, pais } = req.body;
    try {
        const updatedEntrenador = await entrenadorService_1.EntrenadorService.updateEntrenador(id, name, edad, pais);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateEntrenador = updateEntrenador;
const deleteEntrenadorById = async (req, res) => {
    const { id } = req.params;
    try {
        await entrenadorService_1.EntrenadorService.deleteEntrenadorById(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteEntrenadorById = deleteEntrenadorById;
