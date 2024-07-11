import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { BubbleMembersRepository } from './repositories/bubble-members-repository';

@Controller('members')
export class AppController {
  constructor(private bubbleMembersRepository: BubbleMembersRepository) {}

  @Post()
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, role } = body;

    await this.bubbleMembersRepository.create(name, role);
  }
}
