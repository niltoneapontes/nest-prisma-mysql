import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { BubbleMembersRepository } from 'src/repositories/bubble-members-repository';
import { PrismaBubbleMembersRepository } from 'src/repositories/prisma/prisma-bubble-members-repository';

@Module({
  controllers: [MembersController],
  providers: [
    MembersService,
    {
      provide: BubbleMembersRepository,
      useClass: PrismaBubbleMembersRepository,
    },
  ],
})
export class MembersModule {}
