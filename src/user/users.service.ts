import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { UsersRepository } from './repositories/users-repository';
import { Role } from 'src/role/roles.enum';

export interface User {
  userId: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  roles?: Role[];
}

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(
    username: string,
    password: string,
    createdAt: string,
    updatedAt: string,
    roles: string,
  ): Promise<User> {
    return this.usersRepository.create(
      randomUUID(),
      username,
      password,
      createdAt,
      updatedAt,
      roles,
    );
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.usersRepository.find(username);
  }
}
