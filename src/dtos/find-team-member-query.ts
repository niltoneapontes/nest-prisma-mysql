import { IsNotEmpty } from 'class-validator';

export class FindTeamMemberQuery {
  @IsNotEmpty({
    message: 'Por favor informe o id',
  })
  id: string;
}
