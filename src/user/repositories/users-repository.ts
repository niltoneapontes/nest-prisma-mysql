import { User } from '../users.service';

export abstract class UsersRepository {
  abstract create(
    userId: string,
    username: string,
    password: string,
    createdAt: string,
    updatedAt: string,
    roles: string,
  ): Promise<User>;

  abstract find(username: string): Promise<User>;
}
