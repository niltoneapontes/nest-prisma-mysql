import { Body, Controller, Post } from '@nestjs/common';
import { CreatePunchBody } from './dtos/create-punch-body';
import { PunchRepository } from './repositories/punch-repository';
import { PunchService } from './punch.service';

@Controller('punch')
export class PunchController {
  constructor(
    private punchRepository: PunchRepository,
    private punchService: PunchService,
  ) {}

  @Post()
  async createPunch(@Body() body: CreatePunchBody) {
    const { memberId, memberName, type, datetime } = body;

    const foundMember = await this.punchService.validateUser(memberId);
    if (!foundMember) {
      return {
        message: 'Erro ao tentar cadastrar ponto',
      };
    }
    console.log('entrou');
    const punch = await this.punchRepository.create(
      memberId,
      memberName,
      type,
      datetime,
    );

    return {
      message: 'Ponto eletrônico efetuado com sucesso',
      punch,
    };
  }
}
