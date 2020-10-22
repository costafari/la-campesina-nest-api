import { Entity } from "typeorm";

@Entity()
export class Producto {

    id: Number;
    nombre: String;
	descripcion: String;
	notas: String;
    createdAt: any;

}
