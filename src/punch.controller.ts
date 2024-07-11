import { Body, Controller, Post } from '@nestjs/common';
import { CreatePunchBody } from './dtos/create-punch-body';
import { PunchRepository } from './repositories/punch-repository';

@Controller('punch')
export class PunchController {
  constructor(private punchRepository: PunchRepository) {}

  @Post()
  async createMember(@Body() body: CreatePunchBody) {
    const { memberId, memberName, type, datetime } = body;

    const punch = await this.punchRepository.create(
      memberId,
      memberName,
      type,
      datetime,
    );

    // TODO: Criar service para validar se o member existe, se existe uma entrada em aberto, etc.

    return {
      message: 'Ponto eletrônico efetuado com sucesso',
      punch,
    };
  }
}
