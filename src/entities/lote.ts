import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Producto } from "./producto";
import { Proveedor } from "./proveedor";

@Entity()
export class Lote {

    @PrimaryGeneratedColumn()
    id: Number;
    @Column()
    lote: String;
    @Column()
    fechaEntrada: any;
    @Column()
    cantidad: Number;
    @Column()
    proveedor: Proveedor;
    @Column()
    producto: Producto;
    @Column({type: 'timestamp', default: () => 'LOCALTIMESTAMP'})
    createdAt: any;

}
