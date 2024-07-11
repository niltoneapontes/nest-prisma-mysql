import { IsNotEmpty } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty({
    message: 'Nome eh obrigatorio',
  })
  name: string;
  @IsNotEmpty({
    message: 'Papel eh obrigatorio',
  })
  role: string;
}
