export abstract class PunchRepository {
  abstract create(
    memberId: string,
    memberName: string,
    type: string,
    datetime: string,
  ): Promise<any>;
}
