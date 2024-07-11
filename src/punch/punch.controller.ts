import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreatePunchBody } from './dtos/create-punch-body';
import { PunchRepository } from './repositories/punch-repository';
import { PunchService } from './punch.service';
import { Response } from 'express';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('punch')
export class PunchController {
  constructor(
    private punchRepository: PunchRepository,
    private punchService: PunchService,
  ) {}

  @Post()
  async createPunch(@Body() body: CreatePunchBody, @Res() res: Response) {
    const { memberId, memberName, type, datetime, createdAt, updatedAt } = body;

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
      createdAt,
      updatedAt,
    );

    res.status(HttpStatus.CREATED).json({
      message: 'Ponto eletrônico efetuado com sucesso',
      punch,
    });
  }
}
