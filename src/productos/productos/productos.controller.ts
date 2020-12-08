import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Producto } from 'src/entities/producto';
import { Productos } from '../productos';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    
    constructor(
        private readonly productosService: ProductosService
    ){}

    @Get()
    findAll(): Promise<Productos[]> {
        return this.productosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Productos> {
        return this.productosService.findOne(id);
    }

    @Post()
    createProducto(@Body() productoDto: Producto): Promise<Productos> {
        return this.productosService.create(productoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.productosService.remove(id);
    }

}
