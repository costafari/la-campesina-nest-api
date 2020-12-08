import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/entities/producto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ){}

    async findAll(): Promise<Producto[]> {
        return await this.productoRepository.find();
    }

    async findOne(id: number) {
        return await this.productoRepository.findOne({
            where: {
                id: id,
            },
        });
    }

    async create(productoDto: Producto): Promise<Producto> {
        const productoInstance = this.productoRepository.create(productoDto);
        await this.productoRepository.save(productoDto);
        return productoInstance;
    }

    async update(id: number, data: Partial<any>): Promise<any> {
        await this.productoRepository.update({id},data);
        return await this.productoRepository.findOne({id});
    }

    async remove(id: string): Promise<void> {
        await this.productoRepository.delete(id);
    }

}
