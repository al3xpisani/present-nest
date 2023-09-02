import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  create(email: string, password: string) {
    // hash password

    // etc

    return this.usersRepository.create(email, password);
  }
}
