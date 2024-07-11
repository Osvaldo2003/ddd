export default class Jugador {
    id: string | null;
    name: string;
    edad: number;
    posicion: string;

    constructor(id: string | null, name: string, edad: number, posicion: string) {
        this.id = id;
        this.name = name;
        this.edad = edad;
        this.posicion = posicion;
    }
}
