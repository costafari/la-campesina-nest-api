import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Productos } from "../productos/productos";
  import { Proveedores } from "../proveedores/proveedores";
  import { Precios } from "../precios/precios";
  
  @Index("lote_proveedor_producto", ["lote", "proveedorId", "productoId"], {
    unique: true,
  })
  @Index("FK_producto", ["productoId"], {})
  @Index("FK_proveedor", ["proveedorId"], {})
  @Entity("lotes", { schema: "la_campesina_db" })
  export class Lotes {
    @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
    id: string;
  
    @Column("double", { name: "cantidad", nullable: true, precision: 22 })
    cantidad: number | null;
  
    @Column("datetime", { name: "created_at", nullable: true })
    createdAt: Date | null;
  
    @Column("date", { name: "fecha_entrada", nullable: true })
    fechaEntrada: string | null;
  
    @Column("varchar", { name: "lote", nullable: true, length: 255 })
    lote: string | null;
  
    @Column("bigint", { name: "producto_id", nullable: true })
    productoId: string | null;
  
    @Column("bigint", { name: "proveedor_id", nullable: true })
    proveedorId: string | null;
  
    @ManyToOne(() => Productos, (productos) => productos.lotes, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "producto_id", referencedColumnName: "id" }])
    producto: Productos;
  
    @ManyToOne(() => Proveedores, (proveedores) => proveedores.lotes, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "proveedor_id", referencedColumnName: "id" }])
    proveedor: Proveedores;
  
    @OneToMany(() => Precios, (precios) => precios.lote)
    precios: Precios[];
  }
  