import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
	nombres: string;
    @Column()
    apellidos: string;
    @Column()
    nombreEmpresa: string;	
    @Column()
    nombreContacto: string;
    @Column()
    direccion: string;
    @Column()
    telefonoFijo: string;
    @Column()
    telefonoFijo2: string;
    @Column()
    telefonoMovil: string;
    @Column()
    telefonoMovil2: string;
    @Column()
    email: string;
    @Column()
    sitioWeb: string;
    @Column()
    notas: string;
    @Column({default: true})
    activo: boolean;
    @Column({type: 'timestamp', default: () => 'LOCALTIMESTAMP'})
	createdAt: any;

}

