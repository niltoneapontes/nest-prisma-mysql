import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { UsersRepository } from './repositories/users-repository';

export interface User {
  userId: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(
    username: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  ): Promise<User> {
    return this.usersRepository.create(
      randomUUID(),
      username,
      password,
      createdAt,
      updatedAt,
    );
  }

  async findOne(userId: string): Promise<User | undefined> {
    return this.usersRepository.find(userId);
  }
}
