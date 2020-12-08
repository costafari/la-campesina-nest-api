import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { UsuariosRoles } from "../usuarios-roles/usuarios-roles";
  
  @Index("UK_ldv0v52e0udsh2h1rs0r0gw1n", ["nombre"], { unique: true })
  @Entity("roles", { schema: "la_campesina_db" })
  export class Roles {
    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;
  
    @Column("varchar", {
      name: "nombre",
      nullable: true,
      unique: true,
      length: 255,
    })
    nombre: string | null;
  
    @OneToMany(() => UsuariosRoles, (usuariosRoles) => usuariosRoles.role)
    usuariosRoles: UsuariosRoles[];
  }
  