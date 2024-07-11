"use strict";
// // src/infrastructure/database/mongoConnection.ts
// import mongoose from 'mongoose';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const connectMongoDB = async (): Promise<void> => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI as string, {
//         });
//         console.log("Connected to MongoDB database");
//     } catch (error: any) {
//         console.error("Error connecting to MongoDB:", error.message);
//         process.exit(1);
//     }
// };
// export default connectMongoDB;
// src/infrastructure/database/mongoConnection.ts
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar variables de entorno desde el archivo .env
dotenv_1.default.config();
// Verificar si la variable de entorno MONGODB_URI está definida
if (!process.env.MONGODB_URI) {
    console.error('Error: MONGODB_URI no está definida en el archivo .env');
    process.exit(1);
}
const connectMongoDB = async () => {
    try {
        // Depuración: Imprimir la URI de MongoDB
        console.log('MongoDB URI:', process.env.MONGODB_URI);
        await mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB database");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};
exports.default = connectMongoDB;
