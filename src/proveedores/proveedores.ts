import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lotes } from "../lotes/lotes";

@Entity("proveedores", { schema: "la_campesina_db" })
export class Proveedores {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("varchar", { name: "direccion", nullable: true, length: 255 })
  direccion: string | null;

  @Column("varchar", { name: "nombre_contacto", nullable: true, length: 255 })
  nombreContacto: string | null;

  @Column("varchar", { name: "nombre_empresa", nullable: true, length: 255 })
  nombreEmpresa: string | null;

  @Column("varchar", { name: "notas", nullable: true, length: 255 })
  notas: string | null;

  @Column("varchar", { name: "telefono_fijo", nullable: true, length: 255 })
  telefonoFijo: string | null;

  @Column("varchar", { name: "telefono_fijo2", nullable: true, length: 255 })
  telefonoFijo2: string | null;

  @Column("varchar", { name: "telefono_movil", nullable: true, length: 255 })
  telefonoMovil: string | null;

  @Column("varchar", { name: "telefono_movil2", nullable: true, length: 255 })
  telefonoMovil2: string | null;

  @OneToMany(() => Lotes, (lotes) => lotes.proveedor)
  lotes: Lotes[];
}
