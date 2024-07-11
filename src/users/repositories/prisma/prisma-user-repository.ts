import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users-repository';
import { User } from 'src/users/users.service';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async find(userId: string): Promise<User> {
    return await this.prisma.user.findFirst({
      where: {
        userId: userId,
      },
    });
  }

  async create(
    userId: string,
    username: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  ): Promise<User> {
    const punch = await this.prisma.user.create({
      data: {
        userId,
        username,
        password,
        createdAt,
        updatedAt,
      },
    });

    return punch;
  }
}
