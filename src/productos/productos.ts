import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { Lotes } from "../lotes/lotes";

@Entity("productos", { schema: "la_campesina_db" })
export class Productos {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("varchar", { name: "descripcion", nullable: true, length: 255 })
  descripcion: string | null;

  @Column("varchar", { name: "nombre", nullable: true, length: 255 })
  nombre: string | null;

  @Column("varchar", { name: "notas", nullable: true, length: 255 })
  notas: string | null;

  // @OneToMany(() => Lotes, (lotes) => lotes.producto)
  // lotes: Lotes[];
}
