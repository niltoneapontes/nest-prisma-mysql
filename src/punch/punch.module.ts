import { Module } from '@nestjs/common';
import { PunchController } from './punch.controller';
import { PunchRepository } from './repositories/punch-repository';
import { PrismaPunchRepository } from './repositories/prisma/prisma-punch-repository';
import { PunchService } from './punch.service';
import { PrismaService } from 'src/database/prisma.service';
import { BubbleMembersRepository } from 'src/member/repository/bubble-members-repository';
import { PrismaBubbleMembersRepository } from 'src/member/repository/prisma/prisma-bubble-members-repository';

@Module({
  controllers: [PunchController],
  providers: [
    PunchService,
    {
      provide: PunchRepository,
      useClass: PrismaPunchRepository,
    },
    PrismaService,
    {
      provide: BubbleMembersRepository,
      useClass: PrismaBubbleMembersRepository,
    },
  ],
})
export class PunchModule {}
