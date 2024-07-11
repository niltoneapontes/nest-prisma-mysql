import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PunchController } from './punch.controller';
import { PunchRepository } from './repositories/punch-repository';
import { PrismaPunchRepository } from './repositories/prisma/prisma-punch-repository';
import { PunchService } from './punch.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MembersModule } from './members/members.module';

@Module({
  imports: [AuthModule, UsersModule, MembersModule],
  controllers: [AppController, PunchController],
  providers: [
    PrismaService,
    PunchService,
    {
      provide: PunchRepository,
      useClass: PrismaPunchRepository,
    },
  ],
})
export class AppModule {}
