import { Test, TestingModule } from '@nestjs/testing';
import { GroupsController } from './groups.controller';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { GroupsService } from './groups.service';

describe('GroupsController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupsController],
      providers: [
        {
          provide: GroupsService,
          useValue: {
            list: jest
              .fn()
              .mockResolvedValue({ groups: { init: [{ id: 'id-1' }] } }),
          },
        },
      ],
    }).compile();
    app = module.createNestApplication();
    await app.init();
  });

  describe('GET /groups', () => {
    it('should return groups list response by group service', () => {
      return request(app.getHttpServer())
        .get('/groups')
        .expect(200)
        .expect({ groups: { init: [{ id: 'id-1' }] } });
    });
  });
});
