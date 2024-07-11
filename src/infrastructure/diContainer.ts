// src/index.ts

import { IJugadorRepository } from '../domain/repositories/IJugadorRepository';
import MongoJugadorRepository from '../adapters/repositories/mongoJugadorRepository';
import MySQLJugadorRepository from '../adapters/repositories/mysqlJugadorRepository';
import JugadorService from '../application/services/jugadorService'; 
import connectMongoDB from './database/mongoConnection';
import connectMySQL from './database/mysqlConnection';
import { S3StorageRepository } from '../adapters/repositories/s3StorageRepository';
import { LocalStorageRepository } from '../adapters/repositories/localStorageRepository';
import { IStorageRepository } from '../domain/repositories/IStorageRepository';
import { IEntrenadorRepository } from '../domain/repositories/IEntrenadorRepository';
import MongoEntrenadorRepository from '../adapters/repositories/mongoEntrenadorRepository';
import MySQLEntrenadorRepository from '../adapters/repositories/mysqlEntrenadorRepository';
import { EntrenadorService } from '../application/services/entrenadorService';

const useMongoDB: boolean = process.env.USE_MONGODB === 'true';
const useS3: boolean = process.env.USE_S3 === 'true';

let jugadorRepository: IJugadorRepository;
let entrenadorRepository: IEntrenadorRepository;

if (useMongoDB) {
    connectMongoDB();
    jugadorRepository = new MongoJugadorRepository();
    entrenadorRepository = new MongoEntrenadorRepository();
} else {
    connectMySQL();
    jugadorRepository = new MySQLJugadorRepository();
    entrenadorRepository = new MySQLEntrenadorRepository();
}

let storageRepository: IStorageRepository;

if (useS3) {
    storageRepository = new S3StorageRepository();
} else {
    storageRepository = new LocalStorageRepository();
}

const jugadorService = new JugadorService(jugadorRepository);
const entrenadorService = new EntrenadorService(entrenadorRepository);

export { jugadorService, entrenadorService, storageRepository };
