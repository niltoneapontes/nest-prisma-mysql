import { PrismaService } from 'src/database/prisma.service';
import { BubbleMembersRepository } from '../bubble-members-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaBubbleMembersRepository implements BubbleMembersRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, role: string): Promise<void> {
    await this.prisma.bubbleTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        role,
      },
    });
  }
}
