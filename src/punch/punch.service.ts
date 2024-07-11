import { Injectable } from '@nestjs/common';
import { BubbleMembersRepository } from '../member/repository/bubble-members-repository';

@Injectable()
export class PunchService {
  constructor(private bubbleTeamMemberRepository: BubbleMembersRepository) {}

  async validateUser(memberId: string): Promise<boolean> {
    try {
      const member = await this.bubbleTeamMemberRepository.findById(memberId);
      return !!member;
    } catch (error) {
      console.error('[ERROR] findById: ', error);
      return false;
    }
  }
}
