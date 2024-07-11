import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
import { BubbleMembersRepository } from './repository/bubble-members-repository';
import { PrismaBubbleMembersRepository } from './repository/prisma/prisma-bubble-members-repository';
import { PrismaService } from 'src/database/prisma.service';
import { RolesGuard } from 'src/role/roles.guard';

@Module({
  controllers: [MembersController],
  providers: [
    MembersService,
    PrismaService,
    {
      provide: BubbleMembersRepository,
      useClass: PrismaBubbleMembersRepository,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class MembersModule {}
