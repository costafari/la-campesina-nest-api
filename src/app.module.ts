import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';
import { LaCampesinaService } from './la-campesina.service';
import { UserController } from './controllers/user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'la_campesina_db',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [LaCampesinaService],
})
export class AppModule {}
