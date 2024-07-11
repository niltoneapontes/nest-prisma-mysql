import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { BubbleMembersRepository } from './repositories/bubble-members-repository';
import { FindTeamMemberQuery } from './dtos/find-team-member-query';

@Controller('members')
export class AppController {
  constructor(private bubbleMembersRepository: BubbleMembersRepository) {}

  @Post()
  async createMember(@Body() body: CreateTeamMemberBody) {
    const { name, role } = body;

    const member = await this.bubbleMembersRepository.create(name, role);

    return {
      message: 'Funcionário criado com sucesso',
      member,
    };
  }

  @Get()
  async getMemberById(@Query() query: FindTeamMemberQuery) {
    const member = await this.bubbleMembersRepository.findById(query.id);

    return {
      member,
    };
  }

  @Delete()
  async deleteMemberById(@Query() query: FindTeamMemberQuery) {
    await this.bubbleMembersRepository.findByIdAndDelete(query.id);

    return {
      message: `O funcionário com id: ${query.id} foi removido da organizacao.`,
    };
  }

  @Put()
  async updateMember(
    @Body() body: CreateTeamMemberBody,
    @Query() query: FindTeamMemberQuery,
  ) {
    const { name, role } = body;
    const member = await this.bubbleMembersRepository.findByIdAndUpdate(
      query.id,
      name,
      role,
    );

    return {
      message: 'funcionário atualizado com sucesso',
      member,
    };
  }
}
