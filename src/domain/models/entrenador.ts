// src/domain/models/entrenador.ts

export default class Entrenador {
    id: string | null;
    name: string;
    edad: number;
    pais: string;

    constructor(id: string | null, name: string, edad: number, pais: string) {
        this.id = id;
        this.name = name;
        this.edad = edad;
        this.pais = pais;
    }
}
