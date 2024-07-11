import { PrismaService } from 'src/database/prisma.service';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { PunchRepository } from '../punch-repository';

@Injectable()
export class PrismaPunchRepository implements PunchRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    memberId: string,
    memberName: string,
    type: string,
    datetime: string,
    createdAt: string,
    updatedAt: string,
  ): Promise<any> {
    const punch = await this.prisma.punch.create({
      data: {
        id: randomUUID(),
        memberId,
        memberName,
        type,
        datetime,
        createdAt,
        updatedAt,
      },
    });

    return punch;
  }
}
