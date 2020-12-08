import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Usuarios } from "../usuarios/usuarios";
import { Roles } from "../roles/roles";

@Index("UKqjaspm7473pnu9y4jxhrds8r2", ["usuarioId", "roleId"], { unique: true })
@Index("FKihom0uklpkfpffipxpoyf7b74", ["roleId"], {})
@Entity("usuarios_roles", { schema: "la_campesina_db" })
export class UsuariosRoles {
  @Column("bigint", { name: "usuario_id" })
  usuarioId: string;

  @Column("bigint", { name: "role_id" })
  roleId: string;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.usuariosRoles, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: Usuarios;

  @ManyToOne(() => Roles, (roles) => roles.usuariosRoles, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: Roles;
}
