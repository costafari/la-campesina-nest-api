import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Tickets } from "../tickets/tickets";
  import { UsuariosRoles } from "../usuarios-roles/usuarios-roles";
  
  @Index("UK_kfsp0s1tflm1cwlj8idhqsad0", ["email"], { unique: true })
  @Index("UK_m2dvbwfge291euvmk6vkkocao", ["username"], { unique: true })
  @Entity("usuarios", { schema: "la_campesina_db" })
  export class Usuarios {
    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;
  
    @Column("varchar", { name: "apellido", nullable: true, length: 255 })
    apellido: string | null;
  
    @Column("varchar", {
      name: "email",
      nullable: true,
      unique: true,
      length: 255,
    })
    email: string | null;
  
    @Column("bit", { name: "enabled", nullable: true })
    enabled: boolean | null;
  
    @Column("varchar", { name: "nombre", nullable: true, length: 255 })
    nombre: string | null;
  
    @Column("varchar", { name: "password", nullable: true, length: 60 })
    password: string | null;
  
    @Column("varchar", {
      name: "username",
      nullable: true,
      unique: true,
      length: 20,
    })
    username: string | null;
  
    @OneToMany(() => Tickets, (tickets) => tickets.usuario)
    tickets: Tickets[];
  
    @OneToMany(() => UsuariosRoles, (usuariosRoles) => usuariosRoles.usuario)
    usuariosRoles: UsuariosRoles[];
  }
  