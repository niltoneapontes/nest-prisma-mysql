export abstract class BubbleMembersRepository {
  abstract create(name: string, role: string): Promise<any>;
  abstract findById(id: string): Promise<any>;
  abstract findByIdAndDelete(id: string): Promise<void>;
  abstract findByIdAndUpdate(
    id: string,
    name: string,
    role: string,
  ): Promise<any>;
}
