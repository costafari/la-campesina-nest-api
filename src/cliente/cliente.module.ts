import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from "./clientes";
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';

@Module({
    imports: [TypeOrmModule.forFeature([Clientes])],
    providers: [ClienteService],
    controllers: [ClienteController],
  })
export class ClienteModule {}
