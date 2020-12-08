// import { Lotes } from "src/lotes/lotes";
import { Entity } from "typeorm";

@Entity()
export class Producto {

    id: string;
    nombre: string;
	descripcion: string;
	notas: string;
    createdAt: any;
    // lotes: Lotes[];
}
