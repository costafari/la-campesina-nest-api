import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Precios } from "../precios/precios";
  import { Usuarios } from "../usuarios/usuarios";
  
  @Index("FK_precio_venta", ["precioId"], {})
  @Index("FK_usuario", ["usuarioId"], {})
  @Entity("tickets", { schema: "la_campesina_db" })
  export class Tickets {
    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;
  
    @Column("double", { name: "cantidad", nullable: true, precision: 22 })
    cantidad: number | null;
  
    @Column("datetime", { name: "created_at", nullable: true })
    createdAt: Date | null;
  
    @Column("datetime", { name: "fecha_expedicion", nullable: true })
    fechaExpedicion: Date | null;
  
    @Column("double", { name: "total", nullable: true, precision: 22 })
    total: number | null;
  
    @Column("bigint", { name: "precio_id", nullable: true })
    precioId: string | null;
  
    @Column("bigint", { name: "usuario_id", nullable: true })
    usuarioId: string | null;
  
    @ManyToOne(() => Precios, (precios) => precios.tickets, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "precio_id", referencedColumnName: "id" }])
    precio: Precios;
  
    @ManyToOne(() => Usuarios, (usuarios) => usuarios.tickets, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
    usuario: Usuarios;
  }
  