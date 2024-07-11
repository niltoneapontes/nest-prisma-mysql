import { PrismaService } from 'src/database/prisma.service';
import { BubbleMembersRepository } from '../bubble-members-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaBubbleMembersRepository implements BubbleMembersRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    name: string,
    role: string,
    email: string,
    phone: string,
    birthdate: string,
    pix: string,
    createdAt: string,
    updatedAt: string,
    userId?: string,
  ): Promise<any> {
    return await this.prisma.bubbleTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        role,
        email,
        phone,
        birthdate,
        pix,
        createdAt,
        updatedAt,
        userId,
      },
    });
  }

  async findById(id: string): Promise<any> {
    try {
      return await this.prisma.bubbleTeamMember.findUniqueOrThrow({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw Error(error);
    }
  }

  async findByIdAndDelete(id: string): Promise<void> {
    await this.prisma.bubbleTeamMember.delete({
      where: {
        id: id,
      },
    });
  }

  async findByIdAndUpdate(
    id: string,
    name: string,
    role: string,
    email: string,
    phone: string,
    birthdate: string,
    pix: string,
    createdAt: string,
    updatedAt: string,
    userId?: string,
  ): Promise<any> {
    const member = await this.prisma.bubbleTeamMember.update({
      data: {
        name,
        role,
        email,
        phone,
        birthdate,
        pix,
        createdAt,
        updatedAt,
        userId,
      },
      where: {
        id: id,
      },
    });

    return member;
  }
}