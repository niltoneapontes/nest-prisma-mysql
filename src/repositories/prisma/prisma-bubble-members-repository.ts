import { PrismaService } from 'src/database/prisma.service';
import { BubbleMembersRepository } from '../bubble-members-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaBubbleMembersRepository implements BubbleMembersRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, role: string): Promise<any> {
    return await this.prisma.bubbleTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        role,
      },
    });
  }

  async findById(id: string): Promise<any> {
    return await this.prisma.bubbleTeamMember.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
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
  ): Promise<any> {
    const member = await this.prisma.bubbleTeamMember.update({
      data: {
        name,
        role,
      },
      where: {
        id: id,
      },
    });

    return member;
  }
}