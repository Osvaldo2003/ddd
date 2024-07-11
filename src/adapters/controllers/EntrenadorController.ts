// src/adapters/controllers/entrenadorController.ts

import { Request, Response } from 'express';
import { EntrenadorService } from '../../application/services/entrenadorService';

export const createEntrenador = async (req: Request, res: Response) => {
    const { name, edad, pais } = req.body; 
    try {
        const entrenador = await EntrenadorService.createEntrenador(name, edad, pais); 
        res.status(201).json(entrenador);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getEntrenadorById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const entrenador = await EntrenadorService.getEntrenadorById(id);
        if (!entrenador) {
            res.status(404).json({ message: 'Entrenador not found' });
        } else {
            res.status(200).json(entrenador);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllEntrenadores = async (req: Request, res: Response) => {
    try {
        const entrenadores = await EntrenadorService.getAllEntrenadores();
        res.status(200).json(entrenadores);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateEntrenador = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, edad, pais } = req.body; 
    
    try {
        const updatedEntrenador = await EntrenadorService.updateEntrenador(id, name, edad, pais); 
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteEntrenadorById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await EntrenadorService.deleteEntrenadorById(id);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
