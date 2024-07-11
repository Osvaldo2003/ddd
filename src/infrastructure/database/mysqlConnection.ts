// // src/infrastructure/database/mysqlConnection.ts

// import * as mysql from 'mysql2/promise';
// import { Connection } from 'mysql2/promise';

// const connectMySQL = async (): Promise<Connection> => {
//     try {
//         const connection = await mysql.createConnection({
//             host: process.env.DB_HOST,
//             user: process.env.DB_Jugador, 
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME
//         });
//         console.log("Connected to MySQL database");
//         return connection;
//     } catch (error: any) {
//         console.error("Error connecting to MySQL:", error.message);
//         process.exit(1);
//     }
// };

// export default connectMySQL;


// src/infrastructure/database/mysqlConnection.ts
import { createConnection, Connection } from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const connectMySQL = async (): Promise<Connection> => {
  try {
    const connection = await createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    console.log('Connected to MySQL database');
    // Retornar la conexión para usarla en otras partes de tu aplicación
    return connection;
  } catch (error: any) {
    console.error('Error connecting to MySQL:', error.message);
    process.exit(1);
  }
};

export default connectMySQL;