import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PunchController } from './punch.controller';
import { PunchRepository } from './repositories/punch-repository';
import { PunchService } from './punch.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MembersModule } from './members/members.module';
import { PrismaPunchRepository } from './repositories/prisma/prisma-punch-repository';
import { BubbleMembersRepository } from './members/repository/bubble-members-repository';
import { PrismaBubbleMembersRepository } from './members/repository/prisma/prisma-bubble-members-repository';

@Module({
  imports: [AuthModule, UsersModule, MembersModule],
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
