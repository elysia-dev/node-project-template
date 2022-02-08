import { IocContext } from 'power-di';
import GetUserUseCase from '../core/usecase/getUserUseCase';

export const container = IocContext.DefaultInstance;

container.register(GetUserUseCase, 'GetUserUseCase');
