import GetUserInfoUseCaseDto from '../dto/getUserInfoUseCaseDto';

export default class GetUserInfoUseCase {
  userInfos: {
    [name: string]: { [name: string]: string };
  };
  constructor() {
    this.userInfos = {
      a: {
        name: 'a',
        bloodType: 'a',
      },
      b: {
        name: 'b',
        bloodType: 'b',
      },
    };
  }

  execute(dto: GetUserInfoUseCaseDto) {
    if (dto.name in this.userInfos) {
      return `${this.userInfos[dto.name].name}'s blood type is ${
        this.userInfos[dto.name].bloodType
      }`;
    }
    return `${dto.name} is not exist`;
  }
}
