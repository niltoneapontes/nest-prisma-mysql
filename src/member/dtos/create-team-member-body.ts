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
  @IsNotEmpty({
    message: 'E-mail eh obrigatorio',
  })
  email: string;
  @IsNotEmpty({
    message: 'Telefone para contato eh obrigatorio',
  })
  phone: string;
  birthdate: string;
  @IsNotEmpty({
    message: 'Chave pix eh obrigatoria',
  })
  pix: string;
  @IsNotEmpty({
    message: 'Momento de criacao eh obrigatorio',
  })
  createdAt: string;
  @IsNotEmpty({
    message: 'Momento de atualizacao eh obrigatorio',
  })
  updatedAt: string;
  userId: string;
}
