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
import { BubbleMembersRepository } from './repository/bubble-members-repository';
import { FindTeamMemberQuery } from './dtos/find-team-member-query';
import { Public } from 'src/auth/constants';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/roles.enum';

@Roles(Role.Admin)
@Controller('members')
export class MembersController {
  constructor(private bubbleMembersRepository: BubbleMembersRepository) {}

  @Public()
  @Post()
  async createMember(@Body() body: CreateTeamMemberBody) {
    const {
      name,
      role,
      email,
      phone,
      birthdate,
      pix,
      createdAt,
      updatedAt,
      userId,
    } = body;

    const member = await this.bubbleMembersRepository.create(
      name,
      role,
      email,
      phone,
      birthdate,
      pix,
      createdAt,
      updatedAt,
      userId,
    );

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
    const {
      name,
      role,
      email,
      phone,
      birthdate,
      pix,
      createdAt,
      updatedAt,
      userId,
    } = body;
    const member = await this.bubbleMembersRepository.findByIdAndUpdate(
      query.id,
      name,
      role,
      email,
      phone,
      birthdate,
      pix,
      createdAt,
      updatedAt,
      userId,
    );

    return {
      message: 'funcionário atualizado com sucesso',
      member,
    };
  }
}
