import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { BubbleMembersRepository } from './repositories/bubble-members-repository';
import { PrismaBubbleMembersRepository } from './repositories/prisma/prisma-bubble-members-repository';
import { PunchController } from './punch.controller';
import { PunchRepository } from './repositories/punch-repository';
import { PrismaPunchRepository } from './repositories/prisma/prisma-punch-repository';
import { PunchService } from './punch.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, PunchController],
  providers: [
    PrismaService,
    PunchService,
    {
      provide: BubbleMembersRepository,
      useClass: PrismaBubbleMembersRepository,
    },
    {
      provide: PunchRepository,
      useClass: PrismaPunchRepository,
    },
  ],
})
export class AppModule {}
