import { Module } from '@nestjs/common';
import { ProductosService } from './productos/productos.service';
import { ProductosController } from './productos/productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productos } from './productos';

@Module({
  imports: [TypeOrmModule.forFeature([Productos])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
