import { User } from '../users.service';

export abstract class UsersRepository {
  abstract create(
    userId: string,
    username: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  ): Promise<User>;

  abstract find(userId: string): Promise<User>;
}
