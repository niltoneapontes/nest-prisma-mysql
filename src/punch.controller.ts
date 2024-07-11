import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreatePunchBody } from './dtos/create-punch-body';
import { PunchRepository } from './repositories/punch-repository';
import { PunchService } from './punch.service';
import { Response } from 'express';

@Controller('punch')
export class PunchController {
  constructor(
    private punchRepository: PunchRepository,
    private punchService: PunchService,
  ) {}

  @Post()
  async createPunch(@Body() body: CreatePunchBody, @Res() res: Response) {
    const { memberId, memberName, type, datetime } = body;

    const foundMember = await this.punchService.validateUser(memberId);
    if (!foundMember) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Erro ao tentar cadastrar ponto',
      });
    }

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