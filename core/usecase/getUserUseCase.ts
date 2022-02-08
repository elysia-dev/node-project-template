import { userData } from '../interface/userInterface';
import GetUserUseCaseDto from '../dto/getUserUseCaseDto';

export default class GetUserUseCase {
  getUser(dto: GetUserUseCaseDto, users: userData) {
    let user: string;
    if (dto.id in users) {
      user = users[dto.id];
      return user;
    }
    return false;
  }

  execute(dto: GetUserUseCaseDto) {
    try {
      const users: userData = {
        '1': 'user1',
      };

      const user = this.getUser(dto, users);

      return user ? user : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
