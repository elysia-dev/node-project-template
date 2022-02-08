import { container } from './../../iocContainer';
import { Request, Response } from 'express';
import GetUserUseCase from '../../../core/usecase/getUserUseCase';
import GetUserUseCaseDto from '../../../core/dto/getUserUseCaseDto';

export const createUserController =
  (usecase: GetUserUseCase = container.get('GetUserUseCase')) =>
  (req: Request, res: Response) => {
    // TODO : request validate, create dto, call usecase with dto
    const { params } = req;
    const id: string = params.id;
    const dto: GetUserUseCaseDto = new GetUserUseCaseDto(id);
    const result = usecase.execute(dto);

    if (!result) {
      return res.status(404).json({ error: 'invalid input' });
    }
    return res.status(200).json({ user: result });
  };
