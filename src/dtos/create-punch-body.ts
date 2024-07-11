import { IsNotEmpty } from 'class-validator';

export class CreatePunchBody {
  @IsNotEmpty({
    message: 'Id do funcionario eh obrigatorio',
  })
  memberId: string;
  @IsNotEmpty({
    message: 'Nome do funcionario eh obrigatorio',
  })
  memberName: string;
  @IsNotEmpty({
    message: 'Tipo (entrada/saida) eh obrigatorio',
  })
  type: string;
  @IsNotEmpty({
    message: 'Data e hora do ponto sao obrigatorias',
  })
  datetime: string;
}
