import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  create(email: string, password: string) {
    // create record in the DB
    // etc

    return {
      id: 1,
      email: email,
    };
  }
}
