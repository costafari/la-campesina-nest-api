import { Entity } from "typeorm";

@Entity()
export class Proveedor {

    id: Number;
    nombreEmpresa: String;
    nombreContacto: String;
    direccion: String;
    telefonoFijo: String;
    telefonoFijo2: String;
    telefonoMovil: String;
    telefonoMovil2: String;
    notas: String;
    createdAt: any;

}
