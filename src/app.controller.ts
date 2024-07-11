import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';

@Controller('members')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, role } = body;

    const member = await this.prisma.bubbleTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        role,
      },
    });

    return { member };
  }
}
