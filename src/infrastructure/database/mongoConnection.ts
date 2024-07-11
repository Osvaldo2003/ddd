// // src/infrastructure/database/mongoConnection.ts
// import mongoose from 'mongoose';

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
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Verificar si la variable de entorno MONGODB_URI está definida
if (!process.env.MONGODB_URI) {
  console.error('Error: MONGODB_URI no está definida en el archivo .env');
  process.exit(1);
}

const connectMongoDB = async (): Promise<void> => {
  try {
    // Depuración: Imprimir la URI de MongoDB
    console.log('MongoDB URI:', process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to MongoDB database");
  } catch (error: any) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectMongoDB;