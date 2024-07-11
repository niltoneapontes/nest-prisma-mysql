import { PrismaService } from 'src/database/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from '../users-repository';
import { User } from 'src/users/users.service';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async find(username: string): Promise<any> {
    return await this.prisma.user.findFirst({
      where: {
        username: username,
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
    const existingUser = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (existingUser) {
      throw new BadRequestException({
        message: 'Username has already been used',
      });
    }

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
