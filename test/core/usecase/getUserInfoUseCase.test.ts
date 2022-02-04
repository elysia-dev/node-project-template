import { expect } from 'chai';
import GetUserInfoUseCaseDto from '../../../core/dto/getUserInfoUseCaseDto';
import GetUserInfoUseCase from '../../../core/usecase/getUserInfoUseCase';

describe('GetUserInfoUseCase', () => {
  it('should return right string when name is exist', () => {
    const usecase = new GetUserInfoUseCase();
    const dto: GetUserInfoUseCaseDto = new GetUserInfoUseCaseDto('a');
    const result = usecase.execute(dto);

    expect(result).to.be.eq("a's blood type is a");
  });

  it('should return wrong string when name is not exist', () => {
    const usecase = new GetUserInfoUseCase();
    const dto: GetUserInfoUseCaseDto = new GetUserInfoUseCaseDto('z');
    const result = usecase.execute(dto);

    expect(result).to.be.eq('z is not exist');
  });
});
