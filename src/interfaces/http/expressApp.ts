import express from 'express';
import { createJugador, getJugadorById, getAllJugadores, updateJugador, deleteJugadorById } from '../../adapters/controllers/JugadorController';
import { createEntrenador, getEntrenadorById, getAllEntrenadores, updateEntrenador, deleteEntrenadorById } from '../../adapters/controllers/EntrenadorController';
import { upload } from '../../infrastructure/config/multerConfig';
import { StorageController } from '../../adapters/controllers/storageController';
import { storageRepository } from '../../infrastructure/diContainer';
import { StorageService } from '../../application/services/storageService';
import { EntrenadorService } from '../../application/services/entrenadorService'; 
import { entrenadorService } from '../../infrastructure/diContainer'; 

const app = express();
app.use(express.json());

const storageService = new StorageService(storageRepository);
const storageController = new StorageController(storageService);

app.post('/upload', upload.single('file'), storageController.upload);
app.post('/api/jugadores', createJugador); 
app.get('/api/jugadores/:id', getJugadorById); 
app.get('/api/jugadores', getAllJugadores); 
app.put('/api/jugadores/:id', updateJugador); 
app.delete('/api/jugadores/:id', deleteJugadorById); 

app.post('/api/entrenadores', createEntrenador); 
app.get('/api/entrenadores/:id', getEntrenadorById); 
app.get('/api/entrenadores', getAllEntrenadores); 
app.put('/api/entrenadores/:id', updateEntrenador); 
app.delete('/api/entrenadores/:id', deleteEntrenadorById); 

export default app;
