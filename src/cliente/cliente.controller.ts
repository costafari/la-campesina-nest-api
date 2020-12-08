import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Clientes } from './clientes';
import { ClienteService } from './cliente.service';
import { ClienteDTO } from './dto/cliente.dto';

@Controller('cliente')
export class ClienteController {

    constructor(
        private readonly clienteService: ClienteService
    ){}

    
    @Get()
    findAll(): Promise<Clientes[]> {
        return this.clienteService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Clientes> {
      return this.clienteService.findOne(id);
    }
    
    @Post()
    createCliente(@Body() clienteDto: ClienteDTO): Promise<Clientes> {
      return this.clienteService.create(clienteDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.clienteService.remove(id);
    }

}
