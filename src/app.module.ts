import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { BubbleMembersRepository } from './repositories/bubble-members-repository';
import { PrismaBubbleMembersRepository } from './repositories/prisma/prisma-bubble-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: BubbleMembersRepository,
      useClass: PrismaBubbleMembersRepository,
    },
  ],
})
export class AppModule {}
