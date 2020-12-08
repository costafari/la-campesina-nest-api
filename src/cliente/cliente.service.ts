import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clientes } from './clientes';
import { ClienteDTO } from './dto/cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Clientes)
    private readonly clienteRepository: Repository<Clientes>,
  ) {}

  async findAll(): Promise<Clientes[]> {
    return await this.clienteRepository.find();
  }

  async findOne(id: number) {
    return await this.clienteRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(clienteDto: ClienteDTO): Promise<Clientes> {
    const clienteInstance = this.clienteRepository.create(clienteDto);
    console.log(clienteInstance);
    await this.clienteRepository.save(clienteInstance);
    return clienteInstance;
  }

  async update(id: string, data: Partial<any>): Promise<any> {
    await this.clienteRepository.update({ id }, data);
    return await this.clienteRepository.findOne({ id });
  }

  async remove(id: string): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}
