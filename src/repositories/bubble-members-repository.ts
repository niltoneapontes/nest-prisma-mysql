export abstract class BubbleMembersRepository {
  abstract create(name: string, role: string): Promise<any>;
}
