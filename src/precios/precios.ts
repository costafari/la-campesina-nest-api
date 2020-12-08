import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Clientes } from "../cliente/clientes";
  import { Lotes } from "../lotes/lotes";
  import { Tickets } from "../tickets/tickets";
  
  @Index("cliente_lote", ["clienteId", "loteId"], { unique: true })
  @Index("FK_lote", ["loteId"], {})
  @Entity("precios", { schema: "la_campesina_db" })
  export class Precios {
    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;
  
    @Column("datetime", { name: "created_at", nullable: true })
    createdAt: Date | null;
  
    @Column("datetime", { name: "fecha_fin", nullable: true })
    fechaFin: Date | null;
  
    @Column("datetime", { name: "fecha_inicio", nullable: true })
    fechaInicio: Date | null;
  
    @Column("double", { name: "precio", nullable: true, precision: 22 })
    precio: number | null;
  
    @Column("bigint", { name: "cliente_id", nullable: true })
    clienteId: string | null;
  
    @Column("bigint", { name: "lote_id", nullable: true })
    loteId: string | null;
  
    @ManyToOne(() => Clientes, (clientes) => clientes.precios, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "cliente_id", referencedColumnName: "id" }])
    cliente: Clientes;
  
    @ManyToOne(() => Lotes, (lotes) => lotes.precios, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "lote_id", referencedColumnName: "id" }])
    lote: Lotes;
  
    @OneToMany(() => Tickets, (tickets) => tickets.precio)
    tickets: Tickets[];
  }
  