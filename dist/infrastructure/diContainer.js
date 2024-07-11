"use strict";
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageRepository = exports.entrenadorService = exports.jugadorService = void 0;
const mongoJugadorRepository_1 = __importDefault(require("../adapters/repositories/mongoJugadorRepository"));
const mysqlJugadorRepository_1 = __importDefault(require("../adapters/repositories/mysqlJugadorRepository"));
const jugadorService_1 = __importDefault(require("../application/services/jugadorService"));
const mongoConnection_1 = __importDefault(require("./database/mongoConnection"));
const mysqlConnection_1 = __importDefault(require("./database/mysqlConnection"));
const s3StorageRepository_1 = require("../adapters/repositories/s3StorageRepository");
const localStorageRepository_1 = require("../adapters/repositories/localStorageRepository");
const mongoEntrenadorRepository_1 = __importDefault(require("../adapters/repositories/mongoEntrenadorRepository"));
const mysqlEntrenadorRepository_1 = __importDefault(require("../adapters/repositories/mysqlEntrenadorRepository"));
const entrenadorService_1 = require("../application/services/entrenadorService");
const useMongoDB = process.env.USE_MONGODB === 'true';
const useS3 = process.env.USE_S3 === 'true';
let jugadorRepository;
let entrenadorRepository;
if (useMongoDB) {
    (0, mongoConnection_1.default)();
    jugadorRepository = new mongoJugadorRepository_1.default();
    entrenadorRepository = new mongoEntrenadorRepository_1.default();
}
else {
    (0, mysqlConnection_1.default)();
    jugadorRepository = new mysqlJugadorRepository_1.default();
    entrenadorRepository = new mysqlEntrenadorRepository_1.default();
}
let storageRepository;
if (useS3) {
    exports.storageRepository = storageRepository = new s3StorageRepository_1.S3StorageRepository();
}
else {
    exports.storageRepository = storageRepository = new localStorageRepository_1.LocalStorageRepository();
}
const jugadorService = new jugadorService_1.default(jugadorRepository);
exports.jugadorService = jugadorService;
const entrenadorService = new entrenadorService_1.EntrenadorService(entrenadorRepository);
exports.entrenadorService = entrenadorService;
