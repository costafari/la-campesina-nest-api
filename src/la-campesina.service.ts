import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user';
import { Repository } from 'typeorm';;

@Injectable()
export class LaCampesinaService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

  async findAll(): Promise<any[]> {
    return await this.usersRepository.find();
  }

}
