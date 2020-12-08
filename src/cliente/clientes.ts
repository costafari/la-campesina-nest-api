// import { Entity, PrimaryGeneratedColumn, Column, VersionColumn, PrimaryColumn } from "typeorm";

// @Entity('clientes')
// export class Cliente {

//     @PrimaryGeneratedColumn("increment")
//     id: number;
//     @Column()
// 	nombres: string;
//     @Column()
//     apellidos: string;
//     @Column()
//     nombreEmpresa: string;	
//     @Column()
//     nombreContacto: string;
//     @Column()
//     direccion: string;
//     @Column()
//     telefonoFijo: string;
//     @Column()
//     telefonoFijo2: string;
//     @Column()
//     telefonoMovil: string;
//     @Column()
//     telefonoMovil2: string;
//     @Column()
//     email: string;
//     @Column()
//     sitioWeb: string;
//     @Column()
//     notas: string;
//     @Column({default: true})
//     activo: boolean;
//     @Column({type: 'timestamp', default: () => 'LOCALTIMESTAMP'})
// 	createdAt: any;

// }

import { Column, Entity, OneToMany } from "typeorm";
// import { Precios } from "../precios/precios";

@Entity("clientes", { schema: "la_campesina_db" })
export class Clientes {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bit", { name: "activo", nullable: true })
  activo: boolean | null;

  @Column("varchar", { name: "apellidos", nullable: true, length: 255 })
  apellidos: string | null;

  @Column("varchar", { name: "direccion", nullable: true, length: 255 })
  direccion: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "nombres", nullable: true, length: 255 })
  nombres: string | null;

  @Column("varchar", { name: "notas", nullable: true, length: 255 })
  notas: string | null;

  @Column("varchar", { name: "nombreEmpresa", length: 255 })
  nombreEmpresa: string;

  @Column("varchar", { name: "nombreContacto", length: 255 })
  nombreContacto: string;

  @Column("varchar", { name: "telefonoFijo", length: 255 })
  telefonoFijo: string;

  @Column("varchar", { name: "telefonoFijo2", length: 255 })
  telefonoFijo2: string;

  @Column("varchar", { name: "telefonoMovil", length: 255 })
  telefonoMovil: string;

  @Column("varchar", { name: "telefonoMovil2", length: 255 })
  telefonoMovil2: string;

  @Column("varchar", { name: "sitioWeb", length: 255 })
  sitioWeb: string;

  @Column("timestamp", {
    name: "createdAt",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  // @OneToMany(() => Precios, (precios) => precios.cliente)
  // precios: Precios[];
}

