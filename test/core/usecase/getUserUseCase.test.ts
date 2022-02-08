import { expect } from 'chai';
import GetUserUseCaseDto from '../../../core/dto/getUserUseCaseDto';
import GetUserUseCase from '../../../core/usecase/getUserUseCase';

describe('GetUserUseCase', () => {
  it('should return user name when id is exist', () => {
    const usecase = new GetUserUseCase();
    const dto: GetUserUseCaseDto = new GetUserUseCaseDto('1');
    const result = usecase.execute(dto);

    expect(result).to.be.eq('user1');
  });

  it('should return false when name is not exist', () => {
    const usecase = new GetUserUseCase();
    const dto: GetUserUseCaseDto = new GetUserUseCaseDto('-1');
    const result = usecase.execute(dto);

    expect(result).to.be.eq(false);
  });

  it('should return false when error raised', () => {
    const usecase = new GetUserUseCase();
    usecase.getUser = () => {
      throw Error('');
    };
    const dto: GetUserUseCaseDto = new GetUserUseCaseDto('1');
    const result = usecase.execute(dto);

    expect(result).to.be.eq(false);
  });
});
