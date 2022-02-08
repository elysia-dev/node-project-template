import { userData } from './../../core/interface/userInterface';
import { expect } from 'chai';
import { Response } from 'supertest';
import request from 'supertest';
import { app } from '../../app';

describe('getUserController', () => {
  it('should return user name', async () => {
    const response: Response = await request(app).get('/user/1').expect(200);
    const body = response.body as userData;
    expect(body.user).to.be.equal('user1');
  });

  it('should return 404 when id not exist', async () => {
    const response: Response = await request(app).get('/user/0').expect(404);
    const body = response.body as object;
    expect(body).to.deep.equal({ error: 'invalid input' });
  });
});
