import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'src/utils/encryption';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (verify(pass, user.password)) {
      throw new ForbiddenException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(
    username: string,
    pass: string,
    createdAt: string,
    updatedAt: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.create(
      username,
      pass,
      createdAt,
      updatedAt,
    );

    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
