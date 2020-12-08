import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { PreciosModule } from './precios/precios.module';
import { LotesModule } from './lotes/lotes.module';
import { ProductosModule } from './productos/productos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { TicketsModule } from './tickets/tickets.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosRolesModule } from './usuarios-roles/usuarios-roles.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'la_campesina_db',
      autoLoadEntities: true,
      // Si quieres que sobreescriba tablas ya existentes o cree nuevas, utiliza syncronize = true
      synchronize: false,
      logging: true
    }),
    ClienteModule,
    PreciosModule,
    LotesModule,
    ProductosModule,
    ProveedoresModule,
    TicketsModule,
    UsuariosModule,
    UsuariosRolesModule,
    RolesModule,
    UsersModule
  ]
  // controllers: [],
  // providers: [],
})
export class AppModule {}
