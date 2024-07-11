import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MembersModule } from './members/members.module';
import { PunchModule } from './punch/punch.module';

@Module({
  imports: [AuthModule, UsersModule, MembersModule, PunchModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
